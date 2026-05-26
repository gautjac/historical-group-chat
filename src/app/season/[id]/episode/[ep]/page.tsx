import { notFound } from "next/navigation";
import { getSeason } from "@/content/seasons/french-revolution";
import { EpisodePlayer } from "@/components/EpisodePlayer";

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ id: string; ep: string }>;
}) {
  const { id, ep } = await params;
  const season = getSeason(id);
  if (!season) notFound();
  const episode = season.episodes.find((e) => e.id === ep);
  if (!episode) notFound();
  return <EpisodePlayer season={season} episode={episode} />;
}
