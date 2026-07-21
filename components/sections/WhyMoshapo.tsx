import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const points = [
  {
    title: "No middlemen",
    description: "No account managers, no handoffs — you deal directly with the person actually building your site.",
  },
  {
    title: "It looks like you, not a template",
    description: "We start with what makes your business different and build around that, not the other way round.",
  },
  {
    title: "Built for where you're headed",
    description: "We think about where your business is going, not just where it is today, so you're not rebuilding from scratch a year from now.",
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
