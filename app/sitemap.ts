import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { portfolioProjects } from "@/content/portfolio";
import { insightPosts } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${company.domain}`;

  const staticRoutes = [
    "",
    "/services",
    "/services/brand-creative",
    "/services/websites",
    "/services/technology",
    "/packages",
    "/work",
    "/about",
    "/insights",
    "/start-a-project",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const workRoutes = portfolioProjects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insightPosts.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
