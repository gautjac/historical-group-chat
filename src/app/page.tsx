import Link from "next/link";
import { seasons } from "@/content/seasons/french-revolution";

export default function Home() {
  const list = Object.values(seasons);
  return (
    <div className="flex flex-col">
      <div className="px-5 pt-8 pb-10 max-w-2xl w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight mb-3">
          History, but it's a group chat.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
          Famous figures debate real events in real time. Every message carries
          a truth label — established, compressed, or interpretive — so the
          drama never quietly becomes the record.
        </p>

        <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
          Seasons
        </div>
        <div className="grid gap-3">
          {list.map((s) => (
            <Link
              key={s.id}
              href={`/season/${s.id}`}
              className="block rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors p-5"
            >
              <div className="flex items-baseline justify-between mb-2">
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="text-xs text-zinc-500">{s.era}</div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {s.hook}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                {s.cast.slice(0, 8).map((c) => (
                  <span
                    key={c.id}
                    className="w-6 h-6 rounded-full text-white text-[10px] font-medium flex items-center justify-center"
                    style={{ background: c.color }}
                    title={c.name}
                  >
                    {c.name[0]}
                  </span>
                ))}
                {s.cast.length > 8 && (
                  <span className="text-[11px] text-zinc-500 ml-1">
                    +{s.cast.length - 8}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
