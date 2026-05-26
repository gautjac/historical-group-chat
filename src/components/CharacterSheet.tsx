"use client";

import type { Character } from "@/lib/types";
import { Avatar } from "@/components/Avatar";
import { Sheet } from "@/components/Sheet";

export function CharacterSheet({
  character,
  cast,
  onClose,
}: {
  character: Character | null;
  cast: Character[];
  onClose: () => void;
}) {
  const allies = character
    ? cast.filter((c) => character.allies.includes(c.id))
    : [];
  const enemies = character
    ? cast.filter((c) => character.enemies.includes(c.id))
    : [];

  return (
    <Sheet open={!!character} onClose={onClose}>
      {character && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Avatar character={character} size={56} />
            <div>
              <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {character.name}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {character.role}
                {character.born && ` · b. ${character.born}`}
              </div>
            </div>
          </div>

          <Block label="Ideology">{character.ideology}</Block>
          <Block label="Voice">{character.voice}</Block>
          <Block label="Blindspots">{character.blindspots}</Block>

          {allies.length > 0 && (
            <Block label="Allies">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {allies.map((a) => (
                  <span
                    key={a.id}
                    className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {a.name}
                  </span>
                ))}
              </div>
            </Block>
          )}
          {enemies.length > 0 && (
            <Block label="Antagonists">
              <div className="flex flex-wrap gap-1.5 mt-1">
                {enemies.map((a) => (
                  <span
                    key={a.id}
                    className="text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                  >
                    {a.name}
                  </span>
                ))}
              </div>
            </Block>
          )}
        </div>
      )}
    </Sheet>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-400 mb-1">
        {label}
      </div>
      <div className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
