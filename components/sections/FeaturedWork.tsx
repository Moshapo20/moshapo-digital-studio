import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { portfolioProjects } from "@/content/portfolio";

export function FeaturedWork() {
  const featured = portfolioProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <Section bg="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-bold text-black md:text-4xl">
            A few things we&apos;ve built.
          </h2>
        </div>
        <Button href="/work" variant="outline-dark">
          View All Work
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
