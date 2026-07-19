import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { serviceDivisions } from "@/content/services";

export function ServiceDivisions() {
  return (
    <Section bg="dark-gray">
      <Eyebrow>What We Do</Eyebrow>
      <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-white md:text-4xl">
        Three ways we move your business forward.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {serviceDivisions.map((division) => (
          <Card key={division.id} variant="division">
            <h3 className="font-display text-xl font-bold text-white">{division.headline}</h3>
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
