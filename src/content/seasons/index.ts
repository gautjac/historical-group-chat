import { frenchRevolution } from "./french-revolution";
import { moonRace } from "./moon-race";

export const seasons = {
  [frenchRevolution.id]: frenchRevolution,
  [moonRace.id]: moonRace,
} as const;

export type SeasonId = keyof typeof seasons;

export function getSeason(id: string) {
  return seasons[id as SeasonId] ?? null;
}
