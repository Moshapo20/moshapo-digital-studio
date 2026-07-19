import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { portfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Brand, website, and technology projects from Moshapo Digital Studio.",
};

export default function WorkPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>Portfolio</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Recent projects.
        </h1>
        <p className="mt-4 max-w-xl text-text-soft">
          A mix of client work and concept projects — every concept project is clearly labeled as
          such.
        </p>
      </Section>

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <FinalCtaBand />
    </>
  );
}
