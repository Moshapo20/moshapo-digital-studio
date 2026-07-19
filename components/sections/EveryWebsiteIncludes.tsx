import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { everyWebsiteIncludes } from "@/content/packages";

export function EveryWebsiteIncludes() {
  return (
    <Section bg="dark-gray">
      <Eyebrow>Included With Every Website</Eyebrow>
      <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-white md:text-4xl">
        {everyWebsiteIncludes.heading}.
      </h2>

      <ul className="mt-10 grid gap-x-8 gap-y-3 text-sm text-text-soft md:grid-cols-2">
        {everyWebsiteIncludes.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold">—</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-sm text-text-soft/80">{everyWebsiteIncludes.note}</p>
    </Section>
  );
}
