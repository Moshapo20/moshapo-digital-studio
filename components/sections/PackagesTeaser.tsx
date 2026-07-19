import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/ui/PackageCard";
import { packages } from "@/content/packages";

export function PackagesTeaser() {
  return (
    <Section bg="light">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Websites & Digital Experiences</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-bold text-black md:text-4xl">
            Clear packages. No guesswork.
          </h2>
        </div>
        <Button href="/packages" variant="outline-dark">
          View Full Pricing
        </Button>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} compact />
        ))}
      </div>
    </Section>
  );
}
