import type { Character } from "@/lib/types";

function initials(name: string) {
  const parts = name.replace(/^Abbé |^Comte de |^Marquis de /, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

export function Avatar({
  character,
  size = 36,
  onClick,
}: {
  character: Character;
  size?: number;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open profile for ${character.name}`}
      className="shrink-0 rounded-full font-medium text-white flex items-center justify-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-zinc-950"
      style={{
        width: size,
        height: size,
        background: character.color,
        fontSize: size * 0.36,
      }}
    >
      {initials(character.name).toUpperCase()}
    </button>
  );
}
