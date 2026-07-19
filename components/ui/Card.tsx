import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardStyles = cva("flex flex-col", {
  variants: {
    variant: {
      service: "border border-black/10 p-8 hover:border-gold transition-colors",
      package: "border border-black/10 p-8",
      "package-popular": "border-2 border-gold p-8 md:-translate-y-3 bg-white",
      portfolio: "border border-black/10 hover:border-gold transition-colors",
      insight: "border border-black/10 hover:border-gold transition-colors",
      division: "border border-white/15 p-8 hover:border-gold transition-colors",
    },
  },
  defaultVariants: { variant: "service" },
});

export function Card({
  variant,
  className,
  children,
}: VariantProps<typeof cardStyles> & { className?: string; children: React.ReactNode }) {
  return <div className={cn(cardStyles({ variant }), className)}>{children}</div>;
}
