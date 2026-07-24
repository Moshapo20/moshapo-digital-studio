import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import {
  projectAttribution,
  projectBadgeVariant,
  projectLabel,
  type PortfolioProject,
} from "@/content/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const image = project.gallery[0];

  return (
    <Link href={`/work/${project.slug}`} className="block h-full">
      <Card variant="portfolio" className="group h-full overflow-hidden">
        <div className="overflow-hidden">
          {image?.src ? (
            <div className="relative aspect-[3/2] w-full bg-black">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="transition-transform duration-300 group-hover:scale-105">
              <PlaceholderArt seed={project.slug} label={image?.alt ?? project.title} />
            </div>
          )}
        </div>
        <div className="p-6">
          <Badge variant={projectBadgeVariant(project)}>{projectLabel(project)}</Badge>
          <h3 className="font-display mt-3 uppercase text-lg text-black">{project.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-black/50">
            {projectAttribution(project)}
          </p>
          <p className="mt-3 line-clamp-2 text-sm text-black/70">
            {project.summary ?? project.description}
          </p>
        </div>
      </Card>
    </Link>
  );
}
