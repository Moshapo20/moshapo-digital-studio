import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { conceptLabel, type PortfolioProject } from "@/content/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const image = project.gallery[0];

  return (
    <Link href={`/work/${project.slug}`} className="block h-full">
      <Card variant="portfolio" className="group h-full overflow-hidden">
        <div className="overflow-hidden">
          {image?.src ? (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
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
          <Badge variant={project.type === "concept" ? "concept" : "client"}>
            {project.type === "concept" ? conceptLabel() : "Client Project"}
          </Badge>
          <h3 className="font-display mt-3 uppercase text-lg text-black">{project.title}</h3>
          <p className="mt-1 text-sm text-black/60">{project.industry}</p>
        </div>
      </Card>
    </Link>
  );
}
