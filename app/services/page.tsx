import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { serviceDivisions } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand & Creative, Websites & Digital Experiences, and Technology & Digital Solutions from Moshapo Digital Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>What We Do</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Brand. Digital Presence. Technology.
        </h1>
      </Section>

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-3">
          {serviceDivisions.map((division) => (
            <Card key={division.id} variant="service">
              <h2 className="font-display text-xl font-bold text-black">{division.headline}</h2>
              <p className="mt-3 flex-1 text-sm text-black/60">{division.description}</p>
              <ul className="mt-5 space-y-1.5 text-xs text-black/50">
                {division.services.slice(0, 4).map((s) => (
                  <li key={s}>— {s}</li>
                ))}
              </ul>
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

      <FinalCtaBand />
    </>
  );
}
