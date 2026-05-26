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

  const { seasonId, episodeId, history, userKey } = body;

  if (!userKey || !userKey.startsWith("sk-ant-")) {
    return Response.json(
      { error: "Missing or malformed Anthropic API key." },
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
