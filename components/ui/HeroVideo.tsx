"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const POSTER = "/images/hero.jpg";
const POSTER_ALT = "Moshapo Digital Studio brand mark, a glowing gold ring on black";

/**
 * Full-bleed decorative hero background, meant to sit behind the hero text
 * (via Section's `backdrop` prop). Plays a looping, muted, inline video for
 * most visitors and falls back to the static poster image for anyone who
 * prefers reduced motion — the video is never loaded or played in that case.
 * Includes a dark scrim so white text stays readable over any video frame.
 */
export function HeroVideo() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {reducedMotion ? (
        <Image src={POSTER} alt={POSTER_ALT} fill sizes="100vw" className="object-cover" priority />
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
    </div>
  );
}
