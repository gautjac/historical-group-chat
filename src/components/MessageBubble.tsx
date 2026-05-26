"use client";

import type { Character, Message } from "@/lib/types";
import { Avatar } from "@/components/Avatar";

const BASIS_COLOR: Record<Message["basis"], string> = {
  established: "bg-emerald-500",
  compressed: "bg-amber-500",
  interpretive: "bg-rose-500",
};

const BASIS_LABEL: Record<Message["basis"], string> = {
  established: "Established",
  compressed: "Compressed",
  interpretive: "Interpretive",
};

export function SystemMessage({ message }: { message: Message }) {
  return (
    <div className="flex justify-center my-3 px-4">
      <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 text-center max-w-md leading-relaxed">
        {message.text}
      </div>
    </div>
  );
}

export function MessageBubble({
  message,
  character,
  onOpenCharacter,
  onOpenTruth,
}: {
  message: Message;
  character: Character;
  onOpenCharacter: () => void;
  onOpenTruth: () => void;
}) {
  return (
    <div className="flex gap-2 px-3 py-1.5 items-end">
      <Avatar character={character} onClick={onOpenCharacter} />
      <div className="flex flex-col max-w-[78%] min-w-0">
        <button
          type="button"
          onClick={onOpenCharacter}
          className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 mb-0.5 text-left"
        >
          {character.name}
        </button>
        <div className="flex items-end gap-1.5">
          <div
            className={`rounded-2xl rounded-bl-md px-3.5 py-2 text-[15px] leading-snug break-words ${
              message.kind === "decree"
                ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-serif"
                : message.kind === "rumor"
                ? "bg-amber-100 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100 italic"
                : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
            }`}
          >
            {message.text}
          </div>
          <button
            type="button"
            onClick={onOpenTruth}
            aria-label={`Truth label: ${BASIS_LABEL[message.basis]}`}
            title={BASIS_LABEL[message.basis]}
            className={`shrink-0 w-2.5 h-2.5 rounded-full ${BASIS_COLOR[message.basis]} mb-1.5 hover:scale-125 transition-transform`}
          />
        </div>
      </div>
    </div>
  );
}
