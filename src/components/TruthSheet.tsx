"use client";

import type { Message } from "@/lib/types";
import { Sheet } from "@/components/Sheet";

const BASIS_META: Record<
  Message["basis"],
  { label: string; color: string; description: string }
> = {
  established: {
    label: "Established",
    color: "bg-emerald-500",
    description:
      "Directly supported by the historical record — speeches, decrees, letters, memoirs, or contemporary reporting.",
  },
  compressed: {
    label: "Compressed",
    color: "bg-amber-500",
    description:
      "A real position or event, paraphrased or merged across sources so it can be read as a single chat message.",
  },
  interpretive: {
    label: "Interpretive",
    color: "bg-rose-500",
    description:
      "Plausible in character and consistent with the record, but not documented in this form. Dramatized.",
  },
};

export function TruthSheet({
  message,
  onClose,
}: {
  message: Message | null;
  onClose: () => void;
}) {
  const meta = message ? BASIS_META[message.basis] : null;
  return (
    <Sheet open={!!message} onClose={onClose}>
      {message && meta && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${meta.color}`} />
            <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {meta.label}
            </span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {meta.description}
          </p>
          <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800/60 p-3 text-sm text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
            “{message.text}”
          </div>
          {message.sourceNote && (
            <div>
              <div className="text-[11px] uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                Note
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {message.sourceNote}
              </p>
            </div>
          )}
        </div>
      )}
    </Sheet>
  );
}
