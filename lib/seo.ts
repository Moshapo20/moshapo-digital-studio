import type { Metadata } from "next";
import { company } from "@/content/company";

export const siteUrl = `https://${company.domain}`;

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const images = [{ url: image ?? "/opengraph-image", width: 1200, height: 630, alt: title }];
  const socialTitle = title.includes(company.name) ? title : `${title} — ${company.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: company.name,
      locale: "en_ZA",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}
