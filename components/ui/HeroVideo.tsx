"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const POSTER = "/images/hero.jpg";
const POSTER_ALT = "Moshapo Digital Studio brand mark, a glowing gold ring on black";

/**
 * Decorative hero visual. Plays a looping, muted, inline video for most
 * visitors and falls back to the static poster image for anyone who prefers
 * reduced motion (in which case the video is never loaded or played).
 * Marked aria-hidden — it carries no information not already in the hero text.
 */
export function HeroVideo({ className }: { className?: string }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden bg-black md:aspect-[4/5]",
        className
      )}
    >
      {reducedMotion ? (
        <Image
          src={POSTER}
          alt={POSTER_ALT}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover"
          priority
        />
      ) : (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER}
          aria-hidden="true"
        >
          <source src="/videos/moshapo-hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
