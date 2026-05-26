export type BasisLabel = "established" | "compressed" | "interpretive";

export type MessageKind =
  | "text"
  | "decree"
  | "rumor"
  | "system"
  | "voice-note"
  | "forwarded";

export interface Character {
  id: string;
  name: string;
  role: string;
  born?: string;
  died?: string;
  ideology: string;
  voice: string;
  allies: string[];
  enemies: string[];
  blindspots: string;
  color: string;
}

export interface Message {
  id: string;
  characterId: string;
  text: string;
  kind?: MessageKind;
  basis: BasisLabel;
  sourceNote?: string;
  replyToId?: string;
  reactions?: { emoji: string; characterIds: string[] }[];
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  premise: string;
  timeWindow: string;
  location: string;
  mustHitBeats: string[];
  startingMessages: Message[];
  endingHook: string;
}

export interface Season {
  id: string;
  title: string;
  hook: string;
  era: string;
  cast: Character[];
  episodes: Episode[];
  contentNotes: string;
}

export interface GenerateRequest {
  seasonId: string;
  episodeId: string;
  history: Message[];
  userKey: string;
}

export interface GenerateResponse {
  messages: Message[];
}
