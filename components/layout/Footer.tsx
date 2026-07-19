import Link from "next/link";
import Image from "next/image";
import { company, footerLinks } from "@/content/company";

function SocialPlaceholder({ label }: { label: string }) {
  return <span className="text-white/40">{label} — coming soon</span>;
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/logo/logo_icon.png" alt="" width={32} height={32} className="h-8 w-8" />
              <span className="font-display text-sm font-bold uppercase tracking-widest">
                {company.name}
              </span>
            </div>
            <p className="max-w-xs text-sm text-white/60">{company.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-gold">
              Studio
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-gold">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <SocialPlaceholder label="Instagram" />
              </li>
              <li>
                <SocialPlaceholder label="TikTok" />
              </li>
              <li>
                <SocialPlaceholder label="LinkedIn" />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-gold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{company.whatsapp.display}</li>
              <li>{company.email}</li>
              <li className="pt-2 text-white/50">
                {company.founder}
                <br />
                {company.founderTitle}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>{company.location}</span>
        </div>
      </div>
    </footer>
  );
}
