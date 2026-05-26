"use client";

const KEY_STORAGE = "hgc:anthropic-key";
const PROGRESS_PREFIX = "hgc:progress:";

export function getApiKey(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(KEY_STORAGE) ?? "";
}

export function setApiKey(value: string) {
  if (typeof window === "undefined") return;
  if (value) localStorage.setItem(KEY_STORAGE, value);
  else localStorage.removeItem(KEY_STORAGE);
}

export function clearApiKey() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY_STORAGE);
}

function progressKey(seasonId: string, episodeId: string) {
  return `${PROGRESS_PREFIX}${seasonId}:${episodeId}`;
}

import type { Message } from "@/lib/types";

export function loadProgress(seasonId: string, episodeId: string): Message[] | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(progressKey(seasonId, episodeId));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Message[];
  } catch {
    return null;
  }
}

export function saveProgress(seasonId: string, episodeId: string, messages: Message[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(progressKey(seasonId, episodeId), JSON.stringify(messages));
}

export function clearProgress(seasonId: string, episodeId: string) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(progressKey(seasonId, episodeId));
}
