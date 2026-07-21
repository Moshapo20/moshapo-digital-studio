import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { diagonalClipPath, type DiagonalVariant } from "@/lib/motif";

type SectionBackground = "black" | "dark-gray" | "light" | "white";

const backgroundClasses: Record<SectionBackground, string> = {
  black: "bg-black text-white",
  "dark-gray": "bg-dark-gray text-white",
  light: "bg-light-gray text-black",
  white: "bg-white text-black",
};

export function Section({
  bg = "white",
  diagonal,
  className,
  containerClassName,
  backdrop,
  children,
  id,
}: {
  bg?: SectionBackground;
  diagonal?: DiagonalVariant;
  className?: string;
  containerClassName?: string;
  /** Optional full-bleed layer (e.g. a background video) rendered behind the section content. */
  backdrop?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}) {
  const style =
    diagonal && diagonal !== "corner"
      ? { clipPath: diagonalClipPath(diagonal) }
      : undefined;

  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-28", backgroundClasses[bg], className)}
      style={style}
    >
      {backdrop && <div className="absolute inset-0 z-0">{backdrop}</div>}
      {diagonal === "corner" && (
        <svg
          className="pointer-events-none absolute right-0 top-0 z-[5] h-24 w-24 md:h-32 md:w-32"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <polygon points="100,0 100,100 0,0" fill="var(--color-gold)" />
        </svg>
      )}
      <Container className={cn("relative z-10", containerClassName)}>{children}</Container>
    </section>
  );
}
