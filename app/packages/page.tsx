import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PackageCard } from "@/components/ui/PackageCard";
import { EveryWebsiteIncludes } from "@/components/sections/EveryWebsiteIncludes";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { packages, packagesFootnote } from "@/content/packages";

export const metadata: Metadata = {
  title: "Website Packages",
  description:
    "Clear, fixed-price website packages from Moshapo Digital Studio — Landing Page, Starter, Growth, and Premium.",
};

export default function PackagesPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>Websites & Digital Experiences</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Clear packages. No guesswork.
        </h1>
        <p className="mt-4 max-w-xl text-text-soft">
          Fixed pricing for most projects. If your needs sit between packages, tell us on the
          project form and we&apos;ll advise on the right fit.
        </p>
      </Section>

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="mt-8 text-sm text-black/50">{packagesFootnote}</p>
      </Section>

      <EveryWebsiteIncludes />
      <FinalCtaBand />
    </>
  );
}
