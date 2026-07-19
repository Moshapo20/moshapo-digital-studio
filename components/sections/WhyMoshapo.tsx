import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const points = [
  {
    title: "Direct access to the founder",
    description: "You work directly with the person designing and building your project — no account managers, no handoffs.",
  },
  {
    title: "Brand-first thinking",
    description: "Every website or system we build starts from your brand, not a generic template.",
  },
  {
    title: "Built to grow with you",
    description: "We design with your next stage in mind, so your site doesn't need a full rebuild every time your business grows.",
  },
];

export function WhyMoshapo() {
  return (
    <Section bg="dark-gray">
      <Eyebrow>Why Moshapo</Eyebrow>
      <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-white md:text-4xl">
        A studio built around getting it right.
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {points.map((point) => (
          <div key={point.title} className="border-t-2 border-gold pt-5">
            <h3 className="font-display text-lg font-bold text-white">{point.title}</h3>
            <p className="mt-2 text-sm text-text-soft">{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
