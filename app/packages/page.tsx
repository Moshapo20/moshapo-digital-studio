import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PackageCard } from "@/components/ui/PackageCard";
import { EveryWebsiteIncludes } from "@/components/sections/EveryWebsiteIncludes";
import { GraphicPackages } from "@/components/sections/GraphicPackages";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { packages, packagesFootnote } from "@/content/packages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Packages & Pricing",
  description:
    "Clear, upfront pricing from Moshapo Digital Studio — website packages from R1,500 and graphic design packages from R350.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>Packages & Pricing</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Clear pricing. No guesswork.
        </h1>
        <p className="mt-4 max-w-xl text-text-soft">
          Websites and graphic design, both priced upfront. If your needs sit between packages,
          tell us on the project form and we&apos;ll advise on the right fit.
        </p>
      </Section>

      <Section bg="white">
        <Eyebrow>Website Packages</Eyebrow>
        <h2 className="font-display mt-4 text-2xl font-bold text-black md:text-3xl">
          Build your website.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="mt-8 text-sm text-black/50">{packagesFootnote}</p>
      </Section>

      <EveryWebsiteIncludes />
      <GraphicPackages />
      <FinalCtaBand />
    </>
  );
}
