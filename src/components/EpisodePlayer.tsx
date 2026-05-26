"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Character, Episode, Message, Season } from "@/lib/types";
import { MessageBubble, SystemMessage } from "@/components/MessageBubble";
import { CharacterSheet } from "@/components/CharacterSheet";
import { TruthSheet } from "@/components/TruthSheet";
import {
  clearProgress,
  getApiKey,
  loadProgress,
  saveProgress,
} from "@/lib/storage";

export function EpisodePlayer({
  season,
  episode,
}: {
  season: Season;
  episode: Episode;
}) {
  const [messages, setMessages] = useState<Message[]>(episode.startingMessages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openCharacter, setOpenCharacter] = useState<Character | null>(null);
  const [openTruth, setOpenTruth] = useState<Message | null>(null);
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const castMap = useMemo(() => {
    const m = new Map<string, Character>();
    for (const c of season.cast) m.set(c.id, c);
    return m;
  }, [season]);

  useEffect(() => {
    const saved = loadProgress(season.id, episode.id);
    if (saved && saved.length > episode.startingMessages.length) {
      setMessages(saved);
    }
    setHasKey(Boolean(getApiKey()));
  }, [season.id, episode.id, episode.startingMessages.length]);

  useEffect(() => {
    saveProgress(season.id, episode.id, messages);
  }, [messages, season.id, episode.id]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages.length, loading]);

  async function generateMore() {
    setLoading(true);
    setError(null);
    try {
      const userKey = getApiKey();
      if (!userKey) {
        setHasKey(false);
        setError("Add your Anthropic API key in Settings to continue the scene.");
        return;
      }
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          seasonId: season.id,
          episodeId: episode.id,
          history: messages,
          userKey,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Generation failed.");
        return;
      }
      setMessages((prev) => [...prev, ...(data.messages as Message[])]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    clearProgress(season.id, episode.id);
    setMessages(episode.startingMessages);
    setError(null);
  }

  return (
    <div className="flex flex-col h-dvh bg-white dark:bg-zinc-950">
      <header className="shrink-0 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center gap-3">
        <Link
          href={`/season/${season.id}`}
          aria-label="Back to season"
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 text-xl leading-none w-7 h-7 flex items-center justify-center -ml-1"
        >
          ←
        </Link>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Episode {episode.number} · {episode.timeWindow}
          </div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
            {episode.title}
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Restart
        </button>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto py-3 bg-zinc-50 dark:bg-zinc-950">
        {messages.map((m) => {
          if (m.characterId === "system") {
            return <SystemMessage key={m.id} message={m} />;
          }
          const character = castMap.get(m.characterId);
          if (!character) return null;
          return (
            <MessageBubble
              key={m.id}
              message={m}
              character={character}
              onOpenCharacter={() => setOpenCharacter(character)}
              onOpenTruth={() => setOpenTruth(m)}
            />
          );
        })}
        {loading && (
          <div className="flex items-center gap-1.5 px-5 py-3 text-zinc-500 text-sm">
            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
            <span
              className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        )}
        {error && (
          <div className="mx-4 my-3 px-3 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-sm">
            {error}
          </div>
        )}
      </div>

      <footer className="shrink-0 border-t border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-950">
        {hasKey === false ? (
          <Link
            href="/settings"
            className="block w-full text-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 py-3 text-sm font-medium"
          >
            Add API key to continue
          </Link>
        ) : (
          <button
            type="button"
            onClick={generateMore}
            disabled={loading}
            className="w-full rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 py-3 text-sm font-medium disabled:opacity-50"
          >
            {loading ? "The room is talking…" : "Advance the scene"}
          </button>
        )}
        <div className="flex items-center justify-center gap-4 mt-2 text-[10px] text-zinc-500">
          <Legend color="bg-emerald-500" label="Established" />
          <Legend color="bg-amber-500" label="Compressed" />
          <Legend color="bg-rose-500" label="Interpretive" />
        </div>
      </footer>

      <CharacterSheet
        character={openCharacter}
        cast={season.cast}
        stakes={
          openCharacter
            ? episode.characterStakes?.[openCharacter.id]
            : undefined
        }
        onClose={() => setOpenCharacter(null)}
      />
      <TruthSheet message={openTruth} onClose={() => setOpenTruth(null)} />
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span>{label}</span>
    </span>
  );
}
