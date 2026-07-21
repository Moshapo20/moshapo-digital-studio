import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVideo } from "@/components/ui/HeroVideo";

export function Hero() {
  return (
    <Section bg="black" diagonal="corner" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>Websites · Branding · Technology</Eyebrow>
          <span className="mt-3 block h-px w-16 bg-gold" />
          <h1 className="font-display mt-5 uppercase leading-[1.05] tracking-tight text-white text-4xl md:text-6xl">
            Websites that do the work. A brand to back them up.
          </h1>
          <p className="mt-6 max-w-xl text-base text-text-soft md:text-lg">
            Moshapo Digital Studio builds professional websites for South African businesses — then
            the branding and digital tools to go with them. Start with the site you need now, and
            add the rest as you grow.
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

        <div>
          <HeroVideo />
        </div>
      </div>
    </Section>
  );
}
