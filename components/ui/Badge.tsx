import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeStyles = cva(
  "inline-block font-display text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5",
  {
    variants: {
      variant: {
        popular: "bg-gold text-black",
        concept: "bg-dark-gray text-white",
        client: "bg-gold text-black",
        category: "bg-light-gray text-black",
      },
    },
    defaultVariants: { variant: "category" },
  }
);

export function Badge({
  children,
  variant,
  className,
}: VariantProps<typeof badgeStyles> & { children: React.ReactNode; className?: string }) {
  return <span className={cn(badgeStyles({ variant }), className)}>{children}</span>;
}
