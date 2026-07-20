import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { portfolioProjects } from "@/content/portfolio";
import { insightPosts } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${company.domain}`;

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/services/brand-creative", priority: 0.8 },
    { path: "/services/websites", priority: 0.8 },
    { path: "/services/technology", priority: 0.8 },
    { path: "/packages", priority: 0.8 },
    { path: "/work", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/insights", priority: 0.7 },
    { path: "/start-a-project", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const workRoutes = portfolioProjects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const insightRoutes = insightPosts.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
