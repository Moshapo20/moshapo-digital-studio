import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { Button } from "@/components/ui/Button";
import { portfolioProjects } from "@/content/portfolio";
import { serviceDivisions } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: "Brand, website, and technology projects from Moshapo Digital Studio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>Original Studio Projects</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Selected work.
        </h1>
        <p className="mt-4 max-w-xl text-text-soft">
          A selection of digital experiences, brand systems, and technology projects created by
          Moshapo Digital Studio.
        </p>
      </Section>

      {serviceDivisions.map((division, i) => {
        const projects = portfolioProjects.filter((p) => p.division === division.id);

        return (
          <Section key={division.id} bg={i % 2 === 0 ? "white" : "light"}>
            <Eyebrow>{division.name}</Eyebrow>
            <h2 className="font-display mt-4 uppercase text-2xl text-black md:text-3xl">
              {division.headline}
            </h2>

            {projects.length > 0 ? (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <PortfolioCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              // No published projects in this division yet — say so rather than
              // padding the page out with work that doesn't exist.
              <div className="mt-6 max-w-xl">
                <p className="text-sm text-black/70">
                  Nothing published here yet — this side of the studio is newer, and the work
                  tends to be internal systems we can&apos;t show. Have a look at what we build,
                  or ask about a specific problem.
                </p>
                <Button href={`/services/${division.slug}`} variant="outline-dark" className="mt-6">
                  {division.cta}
                </Button>
              </div>
            )}
          </Section>
        );
      })}

      <FinalCtaBand />
    </>
  );
}
