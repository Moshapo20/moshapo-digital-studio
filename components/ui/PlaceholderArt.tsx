import { cn } from "@/lib/utils";

function hashSeed(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

type PlaceholderVariant = "dark" | "light" | "gold-accent";

const backgroundByVariant: Record<PlaceholderVariant, string> = {
  dark: "#0D0D0D",
  light: "#F5F5F5",
  "gold-accent": "#1A1A1A",
};

/**
 * Deterministic, on-brand geometric placeholder used wherever a real photo
 * is expected but not yet available. Never renders visible "placeholder"
 * text — the composition itself reads as a polished brand asset.
 */
export function PlaceholderArt({
  seed,
  label,
  variant = "dark",
  aspectRatio = "4 / 3",
  className,
}: {
  seed: string;
  label: string;
  variant?: PlaceholderVariant;
  aspectRatio?: string;
  className?: string;
}) {
  const n = hashSeed(seed);
  const bg = backgroundByVariant[variant];
  const wedgeCount = 1 + (n % 3);
  const wedges = Array.from({ length: wedgeCount }, (_, i) => {
    const offset = ((n >> (i * 4)) % 40) - 20;
    const width = 30 + ((n >> (i * 3)) % 25);
    const x = ((n >> (i * 5)) % 80) + offset;
    return { x, width };
  });

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="400" height="300" fill={bg} />
        {wedges.map((w, i) => (
          <polygon
            key={i}
            points={`${w.x},0 ${w.x + w.width},0 ${w.x + w.width - 60},300 ${w.x - 60},300`}
            fill="#D4AF37"
            opacity={i === 0 ? 0.9 : 0.35}
          />
        ))}
      </svg>
    </div>
  );
}
