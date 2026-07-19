import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-wide px-6 py-3.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        gold: "bg-gold text-black hover:bg-gold-bright",
        "outline-dark": "border border-black text-black hover:bg-black hover:text-white",
        "outline-light": "border border-white text-white hover:bg-white hover:text-black",
      },
    },
    defaultVariants: { variant: "gold" },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({ children, className, variant, href, onClick, type = "button", disabled }: ButtonProps) {
  const classes = cn(buttonStyles({ variant }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
