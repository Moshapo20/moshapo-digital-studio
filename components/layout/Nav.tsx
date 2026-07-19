"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, company } from "@/content/company";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/logo_lockup.png"
            alt={company.name}
            width={190}
            height={60}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-sm font-medium uppercase tracking-wide text-black/80 transition-colors hover:text-gold",
                pathname === link.href && "text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="bg-black px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gold hover:text-black"
          >
            Start a Project
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-black transition-transform",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("block h-0.5 w-6 bg-black transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "block h-0.5 w-6 bg-black transition-transform",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-black/10 bg-white transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-3 font-display text-base font-medium uppercase tracking-wide text-black/80",
                pathname === link.href && "text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            onClick={() => setOpen(false)}
            className="mt-2 bg-black px-5 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-white"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
