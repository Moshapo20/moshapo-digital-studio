import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { conceptLabel, portfolioProjects } from "@/content/portfolio";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { company } from "@/content/company";

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
        <Badge variant={project.type === "concept" ? "concept" : "client"}>
          {project.type === "concept" ? conceptLabel() : "Client Project"}
        </Badge>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-soft">
          <span>{project.industry}</span>
          <span>{project.servicesProvided.join(" · ")}</span>
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((image, i) =>
            image.src ? (
              <div key={i} className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ) : (
              <PlaceholderArt key={i} seed={`${project.slug}-${i}`} label={image.alt} />
            )
          )}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
              Overview
            </h2>
            <p className="mt-3 text-sm text-black/70">{project.description}</p>
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
