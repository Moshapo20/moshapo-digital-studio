import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const styles = cva("inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide transition-colors", {
  variants: {
    variant: {
      inline: "px-6 py-3.5 border border-gold text-gold hover:bg-gold hover:text-black",
      nav: "text-current hover:text-gold",
      floating:
        "fixed bottom-6 right-6 z-40 rounded-none bg-gold px-5 py-4 text-black shadow-lg hover:bg-gold-bright",
    },
  },
  defaultVariants: { variant: "inline" },
});

export function WhatsAppButton({
  variant,
  message,
  className,
  children = "WhatsApp Us",
}: VariantProps<typeof styles> & {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(styles({ variant }), className)}
      aria-label="Chat with Moshapo Digital Studio on WhatsApp"
    >
      {children}
    </a>
  );
}
