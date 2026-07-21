export type InsightPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  coverImage: string;
  coverAlt: string;
  seo: { metaTitle: string; metaDescription: string };
};

export const insightPosts: InsightPost[] = [
  {
    slug: "why-every-small-business-needs-a-professional-website",
    title: "Why Every Small Business Needs a Professional Website",
    category: "Websites",
    excerpt:
      "A social media page isn't a substitute for a website you own. Here's why having your own site still matters.",
    body: "Coming soon.",
    author: "Marope Moshapo",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 4,
    coverImage: "/images/insight-professional-website.jpg",
    coverAlt: "An open laptop resting on dark fabric with space to write",
    seo: {
      metaTitle: "Why Every Small Business Needs a Professional Website",
      metaDescription:
        "A social media page isn't a substitute for a website you own. Here's why having your own site still matters for small businesses in South Africa.",
    },
  },
  {
    slug: "how-much-does-a-website-cost-in-south-africa",
    title: "How Much Does a Website Cost in South Africa?",
    category: "Websites",
    excerpt: "A breakdown of what actually drives website pricing, from landing pages to full custom builds.",
    body: "Coming soon.",
    author: "Marope Moshapo",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 5,
    coverImage: "/images/insight-website-cost.jpg",
    coverAlt: "A notebook, calculator and productivity planner laid out on a black table",
    seo: {
      metaTitle: "How Much Does a Website Cost in South Africa?",
      metaDescription:
        "A clear breakdown of website design pricing in South Africa and what actually drives the cost.",
    },
  },
  {
    slug: "why-your-business-needs-a-strong-brand-identity",
    title: "Why Your Business Needs a Strong Brand Identity",
    category: "Brand & Creative",
    excerpt: "Consistency builds trust. Here's what a real brand identity system actually includes.",
    body: "Coming soon.",
    author: "Marope Moshapo",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 4,
    coverImage: "/images/insight-brand-identity.jpg",
    coverAlt: "Blank business cards and a gold-banded pencil on a dark desk",
    seo: {
      metaTitle: "Why Your Business Needs a Strong Brand Identity",
      metaDescription: "What a real brand identity system includes, and why consistency builds customer trust.",
    },
  },
  {
    slug: "website-vs-social-media-why-businesses-need-both",
    title: "Website vs Social Media: Why Businesses Need Both",
    category: "Strategy",
    excerpt: "Social media and a website serve different jobs. Here's how they work together.",
    body: "Coming soon.",
    author: "Marope Moshapo",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 4,
    coverImage: "/images/insight-website-vs-social.jpg",
    coverAlt: "A hand holding a smartphone with a blank screen above a laptop keyboard",
    seo: {
      metaTitle: "Website vs Social Media: Why Businesses Need Both",
      metaDescription: "Understanding the different roles a website and social media play for a growing business.",
    },
  },
  {
    slug: "how-digital-systems-can-save-small-businesses-time",
    title: "How Digital Systems Can Save Small Businesses Time",
    category: "Technology",
    excerpt: "Moving off spreadsheets and WhatsApp threads can free up hours every week. Here's how to start.",
    body: "Coming soon.",
    author: "Marope Moshapo",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 5,
    coverImage: "/images/insight-digital-systems.jpg",
    coverAlt: "A monitor showing code beside a laptop and mechanical keyboard on a dark desk",
    seo: {
      metaTitle: "How Digital Systems Can Save Small Businesses Time",
      metaDescription:
        "Practical ways small businesses can replace manual processes with simple digital systems.",
    },
  },
];
