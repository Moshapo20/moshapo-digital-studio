import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InsightCard } from "@/components/ui/InsightCard";
import { insightPosts } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thinking on brand, web design, and technology for South African businesses.",
};

export default function InsightsPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>Insights</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Thinking on brand, web, and technology.
        </h1>
      </Section>

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-3">
          {insightPosts.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
