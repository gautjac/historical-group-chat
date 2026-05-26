import type { Episode, Message, Season } from "@/lib/types";

export function buildSystemPrompt(season: Season, episode: Episode): string {
  const castLines = season.cast
    .map(
      (c) =>
        `- ${c.id} | ${c.name} (${c.role}). Ideology: ${c.ideology} Voice: ${c.voice} Blindspots: ${c.blindspots}`,
    )
    .join("\n");

  const beats = episode.mustHitBeats.map((b, i) => `${i + 1}. ${b}`).join("\n");

  return `You are the dramaturg for a serialized educational chat-drama called Historical Group Chat. Your job is to advance one scene of a season, in the voices of historical figures, as if they were exchanging messages in a modern group chat.

# Season
${season.title} — ${season.era}
Hook: ${season.hook}

# Episode
${episode.title}
Time window: ${episode.timeWindow}
Location: ${episode.location}
Premise: ${episode.premise}

# Beats the episode must hit (in order; you may be in any of them right now — read the history to tell)
${beats}

# Ending hook (do not rush to it)
${episode.endingHook}

# Cast (use the id when speaking as a character)
${castLines}
- system | Use sparingly for date stamps, location changes, or short factual interjections. Format like a chat-app system notice.

# Rules
- Output 3 to 6 messages per turn. Quality over quantity.
- Stay inside the time window. Characters do not know what comes later.
- Each character must sound like themselves — vocabulary, cadence, register. Do not flatten them.
- Disagreement is the engine. People interrupt, mock, change subjects, ignore each other.
- Modern chat affordances are fine (short messages, fragments, follow-up clarifications, occasional reactions), but no anachronistic slang ("lol", "vibes", "bestie", emoji-speak).
- Every message MUST carry a basis label:
  - "established" — directly supported by the historical record (speeches, decrees, memoirs, letters).
  - "compressed" — a real position or event, paraphrased or merged for chat-format readability.
  - "interpretive" — plausible in character but not directly documented in this form.
- If basis is "compressed" or "interpretive", include a sourceNote explaining what is real and what is dramatized. Keep sourceNotes one sentence.
- Do not invent atrocities, deaths, or quotes attributed to real people without flagging them as interpretive.
- Do not let any character become a cartoon. Even the king has interiority.
- Do not end your turn on a clean resolution. Leave tension on the page.

You will return your turn by calling the append_messages tool. Do not write prose outside the tool call.`;
}

export function buildUserMessage(history: Message[]): string {
  if (history.length === 0) {
    return "Begin the episode. The starting messages will be provided separately as assistant context — extend the scene with the next 3–6 messages.";
  }
  const transcript = history
    .map((m) => {
      const who = m.characterId === "system" ? "[SYSTEM]" : `[${m.characterId}]`;
      return `${who} (${m.basis}) ${m.text}`;
    })
    .join("\n");
  return `Here is the chat so far:\n\n${transcript}\n\nContinue. Give me the next 3–6 messages by calling append_messages.`;
}

export const APPEND_TOOL = {
  name: "append_messages",
  description:
    "Append the next 3 to 6 chat messages to the running scene. Every message must carry a basis label.",
  input_schema: {
    type: "object" as const,
    properties: {
      messages: {
        type: "array" as const,
        minItems: 3,
        maxItems: 6,
        items: {
          type: "object" as const,
          properties: {
            characterId: {
              type: "string" as const,
              description:
                "The id of the character speaking, or 'system' for a system notice.",
            },
            text: {
              type: "string" as const,
              description:
                "The message text. May be short or a few sentences. No multi-paragraph monologues.",
            },
            kind: {
              type: "string" as const,
              enum: [
                "text",
                "decree",
                "rumor",
                "system",
                "voice-note",
                "forwarded",
              ],
              description:
                "Message style. Default 'text'. 'decree' for proclamations, 'rumor' for hearsay, 'system' only for the system speaker.",
            },
            basis: {
              type: "string" as const,
              enum: ["established", "compressed", "interpretive"],
              description:
                "How well-supported this message is by the historical record.",
            },
            sourceNote: {
              type: "string" as const,
              description:
                "One sentence on what is documented vs dramatized. Required when basis is 'compressed' or 'interpretive'.",
            },
            replyToId: {
              type: "string" as const,
              description:
                "Optional. The id of an earlier message this one is replying to.",
            },
          },
          required: ["characterId", "text", "basis"],
        },
      },
    },
    required: ["messages"],
  },
};
