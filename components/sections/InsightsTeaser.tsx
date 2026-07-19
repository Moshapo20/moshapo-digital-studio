import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { InsightCard } from "@/components/ui/InsightCard";
import { insightPosts } from "@/content/insights";

export function InsightsTeaser() {
  const latest = insightPosts.slice(0, 3);

  return (
    <Section bg="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Insights</Eyebrow>
          <h2 className="font-display mt-4 text-3xl font-bold text-black md:text-4xl">
            Thinking on brand, web, and technology.
          </h2>
        </div>
        <Button href="/insights" variant="outline-dark">
          Read More
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {latest.map((post) => (
          <InsightCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}
