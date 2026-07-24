import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVideo } from "@/components/ui/HeroVideo";

export function Hero() {
  return (
    <Section
      bg="black"
      diagonal="corner"
      backdrop={<HeroVideo />}
      className="flex min-h-screen items-center pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <div className="max-w-2xl">
        <Eyebrow>Websites · Branding · Technology</Eyebrow>
        <span className="mt-3 block h-px w-16 bg-gold" />
        <h1 className="font-display mt-5 uppercase leading-[1.05] tracking-tight text-white text-4xl md:text-6xl">
          We build the digital foundation of your business.
        </h1>
        <p className="mt-6 max-w-xl text-base text-text-soft md:text-lg">
          Moshapo Digital Studio brings websites, branding, and technology together to help
          businesses build a stronger digital presence — with the right solution for where they
          are now and where they want to go.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/start-a-project" variant="gold">
            Start a Project
          </Button>
          <Button href="/work" variant="outline-light">
            Explore Our Work
          </Button>
        </div>
      </div>
    </Section>
  );
}
