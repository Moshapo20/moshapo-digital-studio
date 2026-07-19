import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { insightPosts } from "@/content/insights";

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
  return { title: post.seo.metaTitle, description: post.seo.metaDescription };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Section bg="white" className="pt-16 md:pt-20">
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
        <PlaceholderArt seed={post.slug} label={post.title} variant="light" aspectRatio="16 / 9" />
      </div>

      <div className="mt-8 max-w-2xl text-black/70">
        <p>{post.body}</p>
      </div>
    </Section>
  );
}
