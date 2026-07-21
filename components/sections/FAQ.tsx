import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ChevronDownIcon } from "@/components/ui/icons";
import { faqs } from "@/content/faq";

export function FAQ() {
  return (
    <Section bg="white">
      <Eyebrow>Questions</Eyebrow>
      <h2 className="font-display mt-4 max-w-xl text-3xl font-bold text-black md:text-4xl">
        Answers before you ask.
      </h2>

      <div className="mt-10 max-w-3xl divide-y divide-black/10 border-y border-black/10">
        {faqs.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold text-black">
              {item.question}
              <ChevronDownIcon className="shrink-0 text-gold transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-black/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
