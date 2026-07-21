import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { insightPosts } from "@/content/insights";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { company } from "@/content/company";

export function generateStaticParams() {
  return insightPosts.map((p) => ({ slug: p.slug }));
}

function getPost(slug: string) {
  return insightPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    path: `/insights/${post.slug}`,
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.metaDescription,
    url: absoluteUrl(`/insights/${post.slug}`),
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: company.name },
  };

  return (
    <Section bg="white" className="pt-16 md:pt-20">
      <JsonLd data={articleJsonLd} />
      <Eyebrow>{post.category}</Eyebrow>
      <h1 className="font-display mt-4 max-w-2xl text-3xl font-bold text-black md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-black/50">
        {post.author} · {new Date(post.publishedAt).toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {post.readingTimeMinutes} min read
      </p>

      <div className="mt-8 max-w-3xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-8 max-w-2xl text-black/70">
        <p>{post.body}</p>
      </div>
    </Section>
  );
}
