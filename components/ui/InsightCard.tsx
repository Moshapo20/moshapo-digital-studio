import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { InsightPost } from "@/content/insights";

export function InsightCard({ post }: { post: InsightPost }) {
  return (
    <Link href={`/insights/${post.slug}`} className="group block h-full">
      <Card variant="insight" className="h-full overflow-hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
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
