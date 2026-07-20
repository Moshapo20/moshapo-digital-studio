import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `${company.founder}, ${company.founderTitle} of ${company.name} — building brands, websites, and technology for South African businesses.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          Moshapo Digital Studio was created to help businesses build stronger brands, better
          digital experiences, and smarter ways of working.
        </h1>
      </Section>

      <Section bg="white">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-start justify-center bg-light-gray p-10">
            <Image
              src="/logo/logo_icon.png"
              alt={company.name}
              width={160}
              height={149}
              className="h-auto w-32"
            />
          </div>
          <div className="space-y-5 text-black/70">
            <p>
              {company.name} is led by {company.founder}, {company.founderTitle}. The studio
              exists to help ambitious businesses move from having no digital presence — or an
              inconsistent one — to a properly branded, well-built website, and eventually the
              technology that helps them run more smoothly.
            </p>
            <p>
              The approach is straightforward: understand the business first, then design and
              build around what it actually needs — not a generic template, and not more than is
              necessary.
            </p>
            <p>
              As a growing studio, {company.name} is direct about where it is: building real
              projects, taking on real clients, and growing its portfolio one project at a time.
            </p>
          </div>
        </div>
      </Section>

      <FinalCtaBand />
    </>
  );
}
