import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import type { ServiceDivision } from "@/content/services";

export function ServiceDivisionDetail({ division }: { division: ServiceDivision }) {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>{division.name}</Eyebrow>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          {division.headline}
        </h1>
        <p className="mt-5 max-w-xl text-text-soft">{division.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={`/start-a-project?division=${division.id}`} variant="gold">
            Start a Project
          </Button>
          {!division.hasFixedPricing && (
            <Button href={`/start-a-project?division=${division.id}`} variant="outline-light">
              Custom Solutions — Request a Consultation
            </Button>
          )}
        </div>
      </Section>

      <Section bg="white">
        <h2 className="font-display text-2xl font-bold text-black md:text-3xl">
          What&apos;s included
        </h2>
        <ul className="mt-8 grid gap-x-8 gap-y-3 text-sm text-black/70 md:grid-cols-2">
          {division.services.map((service) => (
            <li key={service} className="flex gap-2">
              <span className="text-gold">—</span>
              {service}
            </li>
          ))}
        </ul>
        {division.id === "websites" && (
          <p className="mt-8 text-sm text-black/60">
            See exact pricing on our{" "}
            <a href="/packages" className="text-gold hover:text-gold-bright">
              Packages
            </a>{" "}
            page.
          </p>
        )}
        {!division.hasFixedPricing && (
          <p className="mt-8 text-sm text-black/60">
            These projects vary in scope — we don&apos;t publish fixed prices for{" "}
            {division.name.toLowerCase()}. Tell us what you need and we&apos;ll follow up with a
            consultation.
          </p>
        )}
      </Section>
    </>
  );
}
