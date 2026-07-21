import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { company } from "@/content/company";

export function Hero() {
  return (
    <Section bg="black" diagonal="corner" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>Brand · Digital Experiences · Technology</Eyebrow>
          <span className="mt-3 block h-px w-16 bg-gold" />
          <h1 className="font-display mt-5 uppercase leading-[1.05] tracking-tight text-white text-4xl md:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base text-text-soft md:text-lg">
            Moshapo Digital Studio helps ambitious businesses establish a powerful brand, build a
            professional digital presence, and create technology that makes their business work
            better.
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

        <div className="hidden md:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="A glowing muted-gold ring on a black background"
              fill
              sizes="(min-width: 768px) 45vw, 0px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
