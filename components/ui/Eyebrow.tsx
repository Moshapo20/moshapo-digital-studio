import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display inline-block text-xs font-bold uppercase tracking-[0.18em] text-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
