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
    body: "A lot of small businesses I talk to already have an Instagram page, and figure that's enough. I get why — it's free, it's quick to set up, and people are already scrolling there. But an Instagram page isn't a website, and treating it like one comes with a few real risks.\n\nThe biggest one is that you don't own it. Instagram can change its algorithm overnight and quietly stop showing your posts to the people who follow you. Accounts get suspended or hacked, sometimes with no clear way to get them back. None of that is under your control. Your own website is the one piece of your online presence that's actually yours — nobody can deprioritize it, restrict it, or take it away.\n\nThere's also the credibility question. When someone is deciding whether to trust a business with their money, a proper website still signals something a social page doesn't — that you're established, that you take the business seriously, and that you're easy to find and verify. A lot of people will check whether a business has a website before they message it on Instagram at all.\n\nA website also lets you control the full story. On social media you're working inside someone else's layout, someone else's font, someone else's ad breaks. On your own site, every page says exactly what you want it to say, in the order you want it said, without a competitor's ad showing up next to it.\n\nNone of this means social media isn't worth doing — it's great for reach and everyday engagement. But it works best as a way to bring people to something you actually own. If you don't have that yet, that's usually the first thing worth fixing.",
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
    excerpt: "What actually goes into the price of a website — from a simple landing page to a full custom build.",
    body: "\"How much does a website cost?\" is one of the first questions I get, and the honest answer is: it depends on what you actually need, not on some fixed industry number. But there are a few clear factors that move the price up or down.\n\nThe biggest one is scope. A single landing page with your contact details and a form is a much smaller job than a 10-page site with a blog, a booking system, or an online store. More pages, more custom features, and more back-and-forth on design all add time, and time is what you're paying for.\n\nCustom design versus a template is another factor. A site built from scratch around your actual brand takes longer than adapting an existing layout, but it also looks and performs differently — it's not obviously \"a template with your logo on it.\"\n\nThen there's what happens after launch. Domain registration and hosting are ongoing costs, usually small (often under R200/month combined), but they're separate from the design work itself and worth budgeting for from day one. Some studios build maintenance and support into the price; others charge for it separately — worth asking directly so there are no surprises later.\n\nAs a reference point, our own pricing runs from R1,500 for a single landing page up to R8,500+ for a full custom build with advanced features — you can see the full breakdown on our Packages page. Whoever you go with, the main thing is getting a clear, itemized quote upfront rather than a vague number, so you know exactly what you're paying for and what's included.",
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
    excerpt: "Consistency is what builds trust. Here's what actually goes into a proper brand identity.",
    body: "A logo isn't a brand identity — it's one piece of it. A real brand identity is the full system: your logo and its variations, a defined colour palette, a consistent typeface pairing, and rules for how they all go together. Without that system, a business tends to look like several different, unrelated ones depending on where you run into it.\n\nThat inconsistency is more common than people think. A business card in one font, an Instagram post in a different one, a WhatsApp profile picture that's a cropped, blurry version of the logo — none of it is wrong on its own, but together it reads as unplanned. And unplanned reads as untrustworthy, even if the actual work is excellent.\n\nConsistency does the opposite. When your colours, fonts, and logo look the same on your website, your invoices, your social posts, and your signage, it signals that this is a real, established operation — not something thrown together last week. That matters most in the moments where someone is deciding whether to trust you with their money, which is exactly when first impressions carry the most weight.\n\nA proper brand identity system also just makes day-to-day work easier. Instead of re-deciding what a flyer should look like every time you need one, you're working from a set of rules that already exist — pick the colours, drop in the logo, use the right font, done. It saves time and keeps everything looking like it belongs to the same business, because it does.",
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
    body: "\"Do I need a website if I already post on Instagram?\" comes up a lot, and the short answer is yes — because they're doing two different jobs, not competing for the same one.\n\nSocial media is built for discovery and everyday engagement. It's where people stumble onto your business, see what you're currently up to, and get a quick sense of your personality. It's fast, casual, and works well for staying visible.\n\nA website does the job social media can't. It's where someone goes once they're actually considering doing business with you — to check your pricing, read about your services properly, see real examples of your work, and figure out how to contact you. It's also where you show up in a Google search, which social profiles generally don't do well on their own.\n\nThere's also a control difference. On social media, your business is one post in an endless scroll, competing for attention against everything else in someone's feed. On your website, there's no algorithm deciding whether people see you, and no competitor's ad appearing next to your content.\n\nUsed together, they reinforce each other: social media brings people in and keeps you visible day to day, and the website is where they go to actually decide and take action. Businesses that only do one tend to leave something on the table — either they're invisible in day-to-day feeds, or they're invisible the moment someone actually searches for them.",
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
    body: "A lot of small businesses run on a mix of WhatsApp messages, Excel spreadsheets, and paper — and it works, until it doesn't. Orders get missed in a busy chat thread, a spreadsheet gets accidentally overwritten, or nobody can find the invoice from three weeks ago. None of that is a reflection on how the business is run; it's just what happens when manual systems have to scale past what they were built for.\n\n\"Digital systems\" sounds bigger than it usually is in practice. It can be as simple as a proper booking form instead of back-and-forth WhatsApp messages to confirm a time slot, or a shared dashboard instead of a spreadsheet that only one person has the current version of. It can also be more involved — a custom client portal, automated invoicing, or a system that connects tools you already use so information doesn't have to be re-typed in three different places.\n\nThe honest test for whether it's worth it: if you're repeating the same manual step more than a few times a week, or regularly losing track of something because it lived in a chat thread instead of a proper record, that's usually the moment a simple system pays for itself in time saved.\n\nIt doesn't have to mean replacing everything at once. Most businesses are better off fixing the one process that's actually causing the most friction first, seeing the difference it makes, and building from there — rather than trying to digitize everything in one go.",
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
