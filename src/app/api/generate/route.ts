import Anthropic from "@anthropic-ai/sdk";
import { getSeason } from "@/content/seasons/french-revolution";
import { APPEND_TOOL, buildSystemPrompt, buildUserMessage } from "@/lib/director";
import type { GenerateRequest, Message } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: GenerateRequest;
  try {
    body = (await request.json()) as GenerateRequest;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { seasonId, episodeId, history } = body;
  const userKey = (body.userKey ?? "").trim();

  if (!userKey || !userKey.startsWith("sk-ant-")) {
    return Response.json(
      {
        error:
          "Your Anthropic key is missing or doesn't start with sk-ant-. Open Settings and paste a fresh key from console.anthropic.com.",
      },
      { status: 401 },
    );
  }

  const season = getSeason(seasonId);
  if (!season) {
    return Response.json({ error: "Unknown season." }, { status: 404 });
  }
  const episode = season.episodes.find((e) => e.id === episodeId);
  if (!episode) {
    return Response.json({ error: "Unknown episode." }, { status: 404 });
  }

  const validCharacterIds = new Set([
    ...season.cast.map((c) => c.id),
    "system",
  ]);

  const client = new Anthropic({ apiKey: userKey });

  let response;
  try {
    response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: buildSystemPrompt(season, episode),
      tools: [APPEND_TOOL],
      tool_choice: { type: "tool", name: "append_messages" },
      messages: [{ role: "user", content: buildUserMessage(history) }],
    });
  } catch (err) {
    if (err instanceof Anthropic.APIError) {
      const body = err.error as
        | { error?: { type?: string; message?: string } }
        | undefined;
      const anthropicType = body?.error?.type;
      const anthropicMessage = body?.error?.message;

      const headers = err.headers as
        | Record<string, string | undefined>
        | Headers
        | undefined;
      const headerGet = (k: string): string | undefined => {
        if (!headers) return undefined;
        if (typeof (headers as Headers).get === "function") {
          return (headers as Headers).get(k) ?? undefined;
        }
        const rec = headers as Record<string, string | undefined>;
        return rec[k] ?? rec[k.toLowerCase()] ?? undefined;
      };
      const headerKeys = (() => {
        if (!headers) return [] as string[];
        if (typeof (headers as Headers).keys === "function") {
          return Array.from((headers as Headers).keys());
        }
        return Object.keys(headers as Record<string, unknown>);
      })();
      const requestId = headerGet("request-id") ?? headerGet("anthropic-request-id");
      const cfRay = headerGet("cf-ray");
      const keyTail = userKey.slice(-4);
      const keyLen = userKey.length;

      const diagParts = [
        `key …${keyTail} (${keyLen} chars)`,
        `model claude-sonnet-4-6`,
        requestId ? `request ${requestId}` : null,
        cfRay ? `cf ${cfRay}` : null,
        headerKeys.length === 0 ? "no response headers" : `headers: ${headerKeys.join(",")}`,
      ].filter(Boolean);
      const diag = ` [${diagParts.join(" · ")}]`;

      const sdkMessage = err.message;

      const explanation = anthropicMessage
        ? `Anthropic said: "${anthropicMessage}"${
            anthropicType ? ` (${anthropicType})` : ""
          }`
        : err.status === 401
        ? `Anthropic returned 401 with no error body. SDK says: "${sdkMessage}". The absence of response headers below means the request never reached Anthropic's API layer — this is usually a key-level block (IP allowlist or per-key restriction in the console) rather than a billing or model-access issue.`
        : `Anthropic returned ${err.status} with no body. SDK says: "${sdkMessage}".`;

      if (err.status === 401) {
        return Response.json(
          { error: `${explanation}${diag}` },
          { status: 401 },
        );
      }
      if (err.status === 403) {
        return Response.json(
          { error: `Anthropic refused this request. ${explanation}${diag}` },
          { status: 403 },
        );
      }
      if (err.status === 429) {
        return Response.json(
          { error: `Rate limited by Anthropic. Wait a moment and try again.${diag}` },
          { status: 429 },
        );
      }
      return Response.json(
        { error: `Anthropic returned ${err.status}. ${explanation}${diag}` },
        { status: 502 },
      );
    }
    const message = err instanceof Error ? err.message : "Anthropic call failed.";
    const stack = err instanceof Error ? err.stack?.split("\n")[1]?.trim() : "";
    return Response.json(
      { error: `Non-API error: ${message}${stack ? ` at ${stack}` : ""}` },
      { status: 502 },
    );
  }

  const toolUse = response.content.find((block) => block.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    return Response.json(
      { error: "Model did not return a tool call." },
      { status: 502 },
    );
  }

  const input = toolUse.input as {
    messages: Array<{
      characterId: string;
      text: string;
      kind?: Message["kind"];
      basis: Message["basis"];
      sourceNote?: string;
      replyToId?: string;
    }>;
  };

  const stamp = Date.now();
  const messages: Message[] = (input.messages ?? [])
    .filter((m) => validCharacterIds.has(m.characterId))
    .map((m, i) => ({
      id: `msg-${stamp}-${i}`,
      characterId: m.characterId,
      text: m.text,
      kind: m.kind ?? (m.characterId === "system" ? "system" : "text"),
      basis: m.basis,
      sourceNote: m.sourceNote,
      replyToId: m.replyToId,
    }));

  if (messages.length === 0) {
    return Response.json(
      { error: "Model returned no usable messages." },
      { status: 502 },
    );
  }

  return Response.json({ messages });
}
