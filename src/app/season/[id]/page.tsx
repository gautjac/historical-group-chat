import Link from "next/link";
import { notFound } from "next/navigation";
import { getSeason } from "@/content/seasons";

export default async function SeasonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const season = getSeason(id);
  if (!season) notFound();

  return (
    <div className="flex flex-col max-w-2xl w-full mx-auto">
      <div className="px-5 pt-8 pb-10">
        <div className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
          Season · {season.era}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight mb-3">
          {season.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {season.hook}
        </p>

        <div className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-4 mb-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {season.contentNotes}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
          Cast
        </div>
        <div className="grid gap-2 mb-8">
          {season.cast.map((c) => (
            <div key={c.id} className="flex items-center gap-3">
              <span
                className="w-9 h-9 shrink-0 rounded-full text-white text-xs font-medium flex items-center justify-center"
                style={{ background: c.color }}
              >
                {c.name
                  .replace(/^Abbé |^Comte de |^Marquis de /, "")
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{c.name}</div>
                <div className="text-xs text-zinc-500 truncate">{c.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
          Episodes
        </div>
        <div className="grid gap-3 mb-10">
          {season.episodes.map((ep) => (
            <Link
              key={ep.id}
              href={`/season/${season.id}/episode/${ep.id}`}
              className="block rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors p-5"
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="text-sm text-zinc-500">
                  Episode {ep.number} · {ep.timeWindow}
                </div>
              </div>
              <div className="text-lg font-semibold mb-1.5">{ep.title}</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {ep.premise}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
