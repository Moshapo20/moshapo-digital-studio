import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  { number: "01", title: "Discovery Call", description: "We talk through your business, goals, and what you actually need." },
  { number: "02", title: "Design", description: "We design around your brand and the outcome you're after, not a template." },
  { number: "03", title: "Build", description: "We build it properly — responsive, fast, and set up correctly from day one." },
  { number: "04", title: "Launch & Support", description: "We help you go live and stay reachable for support after launch." },
];

export function HowWeWork() {
  return (
    <Section bg="white">
      <Eyebrow>How We Work</Eyebrow>
      <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-black md:text-4xl">
        A clear process, start to finish.
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number}>
            <span className="font-display text-3xl font-bold text-gold">{step.number}</span>
            <h3 className="font-display mt-3 text-lg font-bold text-black">{step.title}</h3>
            <p className="mt-2 text-sm text-black/60">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
