import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { serviceDivisions } from "@/content/services";

export function ServiceDivisions() {
  return (
    <Section bg="dark-gray">
      <Eyebrow>What We Do</Eyebrow>
      <h2 className="font-display mt-4 max-w-xl uppercase text-3xl text-white md:text-4xl">
        It starts with your website.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {serviceDivisions.map((division, i) => (
          <Card key={division.id} variant="division">
            <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-display mt-3 uppercase text-xl text-white">{division.headline}</h3>
            <p className="mt-3 flex-1 text-sm text-text-soft">{division.description}</p>
            <Link
              href={`/services/${division.slug}`}
              className="mt-6 inline-block font-display text-sm font-semibold uppercase tracking-wide text-gold hover:text-gold-bright"
            >
              {division.cta} →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
