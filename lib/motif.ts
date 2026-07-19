export type DiagonalVariant = "cut" | "cut-reverse" | "corner";

const clipPaths: Record<Exclude<DiagonalVariant, "corner">, string> = {
  cut: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
  "cut-reverse": "polygon(0 0, 100% 0, 100% 100%, 0 88%)",
};

export function diagonalClipPath(variant: Exclude<DiagonalVariant, "corner">) {
  return clipPaths[variant];
}
