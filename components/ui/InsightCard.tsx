import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import type { InsightPost } from "@/content/insights";

export function InsightCard({ post }: { post: InsightPost }) {
  return (
    <Link href={`/insights/${post.slug}`} className="block h-full">
      <Card variant="insight" className="h-full">
        <PlaceholderArt seed={post.slug} label={post.title} variant="light" />
        <div className="p-6">
          <span className="font-display text-xs font-bold uppercase tracking-wide text-gold">
            {post.category}
          </span>
          <h3 className="font-display mt-2 text-lg font-bold text-black">{post.title}</h3>
          <p className="mt-2 text-sm text-black/60">{post.excerpt}</p>
          <p className="mt-4 text-xs text-black/40">{post.readingTimeMinutes} min read</p>
        </div>
      </Card>
    </Link>
  );
}
