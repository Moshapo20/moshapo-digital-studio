import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `${company.founder}, ${company.founderTitle} of ${company.name} — building websites, brands, and technology for South African businesses.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          I help South African businesses get online properly — a website that works first, then
          the brand and tools to go with it.
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
              I&apos;m {company.founder}, and I run {company.name}. Most people come to me with
              either nothing online yet, or a site and brand that no longer match where their
              business has got to. My job is to fix that — starting with a website that&apos;s
              built properly and actually looks like you.
            </p>
            <p>
              The way I work is simple: understand the business first, then design and build around
              what it needs. No off-the-shelf templates, and nothing you&apos;re paying for that
              you won&apos;t use.
            </p>
            <p>
              I&apos;m upfront about being a growing studio — I&apos;m taking on real clients and
              building the portfolio one project at a time. The upside for you is that you get my
              full attention, not a spot in a queue.
            </p>
          </div>
        </div>
      </Section>

      <FinalCtaBand />
    </>
  );
}
