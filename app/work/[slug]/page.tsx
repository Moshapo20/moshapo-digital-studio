import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  portfolioProjects,
  projectAttribution,
  projectAttributionLong,
  projectBadgeVariant,
  projectLabel,
} from "@/content/portfolio";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

const aspectClass = {
  wide: "aspect-[3/2]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
} as const;

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // The facts panel lists the services, so the header doesn't repeat them.
  const hasFactsPanel = true;

  const facts: { label: string; value: React.ReactNode }[] = [
    {
      label: "Services",
      value: project.servicesProvided.map((service) => <div key={service}>{service}</div>),
    },
    { label: "Project Type", value: projectAttribution(project) },
  ];
  if (project.status) facts.push({ label: "Status", value: project.status });
  if (project.websiteUrl) {
    facts.push({
      label: "Website",
      value: (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words underline decoration-gold underline-offset-4 transition-colors hover:text-black"
        >
          {project.websiteUrl.replace(/^https?:\/\//, "")}
        </a>
      ),
    });
  }
  // Studio-made work always names its author, so it can never read as a
  // commissioned client project.
  if (project.type === "internal") {
    facts.push({ label: "Created By", value: company.name });
  }

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/work/${project.slug}`),
    creator: { "@type": "Organization", name: company.name },
    about: project.industry,
    keywords: project.servicesProvided.join(", "),
  };

  return (
    <>
      <JsonLd data={creativeWorkJsonLd} />
      <Section bg="black" diagonal="corner" className="pt-16 pb-12 md:pt-20">
        <Badge variant={projectBadgeVariant(project)}>{projectLabel(project)}</Badge>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.12em] text-gold">
          {projectAttributionLong(project)}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-soft">
          <span>{project.industry}</span>
          {!hasFactsPanel && <span>{project.servicesProvided.join(" · ")}</span>}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid items-start gap-4 md:grid-cols-2">
          {project.gallery.map((image, i) => {
            if (!image.src) {
              return <PlaceholderArt key={i} seed={`${project.slug}-${i}`} label={image.alt} />;
            }
            const isFull = image.span === "full";
            const contain = image.fit === "contain";
            return (
              <div
                key={i}
                className={cn(
                  "relative w-full overflow-hidden",
                  aspectClass[image.aspect ?? "landscape"],
                  isFull && "md:col-span-2",
                  contain ? "bg-light-gray" : "bg-black"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    isFull
                      ? "(min-width: 1200px) 1136px, 100vw"
                      : "(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
                  }
                  className={contain ? "object-contain" : "object-cover"}
                  priority={i === 0}
                />
              </div>
            );
          })}
        </div>

        {hasFactsPanel && (
          <dl className="mt-10 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                  {fact.label}
                </dt>
                <dd className="mt-3 space-y-1 text-sm text-black/70">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
              Overview
            </h2>
            <p className="mt-3 text-sm text-black/70">{project.description}</p>
            {project.overviewExtra && (
              <p className="mt-3 text-sm text-black/70">{project.overviewExtra}</p>
            )}
          </div>
          {project.challenge && (
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                Challenge
              </h2>
              <p className="mt-3 text-sm text-black/70">{project.challenge}</p>
            </div>
          )}
          {project.approach && (
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                Approach
              </h2>
              <p className="mt-3 text-sm text-black/70">{project.approach}</p>
            </div>
          )}
        </div>

        {project.solution && (
          <div className="mt-10 max-w-2xl">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
              Solution
            </h2>
            <p className="mt-3 text-sm text-black/70">{project.solution}</p>
          </div>
        )}

        {project.results && (
          <div className="mt-10 max-w-2xl">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
              Results
            </h2>
            <p className="mt-3 text-sm text-black/70">{project.results}</p>
          </div>
        )}
      </Section>

      <FinalCtaBand />
    </>
  );
}
