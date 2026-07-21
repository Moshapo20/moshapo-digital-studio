import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCtaBand() {
  return (
    <Section bg="black" className="text-center">
      <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
        Got a project in mind?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-text-soft">
        Tell us what you need and we&apos;ll reply within 1–2 business days.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/start-a-project" variant="gold">
          Start a Project
        </Button>
        <WhatsAppButton />
      </div>
    </Section>
  );
}
