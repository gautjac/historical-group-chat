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
      if (err.status === 401) {
        return Response.json(
          {
            error:
              "Anthropic rejected this key. It may be mistyped, revoked, or from a workspace that doesn't have access. Try generating a fresh key at console.anthropic.com and pasting it in Settings.",
          },
          { status: 401 },
        );
      }
      if (err.status === 403) {
        return Response.json(
          {
            error:
              "Anthropic accepted the key but won't authorize this request. The key may be restricted, or your workspace may not have access to claude-sonnet-4-6.",
          },
          { status: 403 },
        );
      }
      if (err.status === 429) {
        return Response.json(
          {
            error: "Rate limited by Anthropic. Wait a moment and try again.",
          },
          { status: 429 },
        );
      }
      return Response.json(
        { error: `Anthropic returned ${err.status}: ${err.message}` },
        { status: 502 },
      );
    }
    const message = err instanceof Error ? err.message : "Anthropic call failed.";
    return Response.json({ error: message }, { status: 502 });
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
