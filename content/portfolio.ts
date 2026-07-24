export type PortfolioDivision = "brand-creative" | "websites" | "technology";

/**
 * A case-study image. `span` and `aspect` drive the editorial gallery layout —
 * mixing full-width bands with two-column pairs so a project doesn't read as a
 * uniform grid. `fit: "contain"` letterboxes tall artwork inside a wide band
 * instead of cropping it.
 */
export type GalleryImage = {
  src?: string;
  alt: string;
  span?: "full" | "half";
  aspect?: "wide" | "landscape" | "square" | "portrait";
  fit?: "cover" | "contain";
};

/** The discipline a case study demonstrates — shown as the card's category. */
export type CaseStudyKind =
  | "Website Case Study"
  | "Brand Identity Case Study"
  | "Brand System Case Study"
  | "Digital Product Case Study";

type PortfolioBase = {
  slug: string;
  title: string;
  caseStudy: CaseStudyKind;
  /** Sector or subject. Used for structured data, not shown on the card. */
  industry: string;
  servicesProvided: string[];
  /** One-line summary shown on the portfolio card. Falls back to `description`. */
  summary?: string;
  description: string;
  /** Optional second Overview paragraph on the detail page. */
  overviewExtra?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  gallery: GalleryImage[];
  results?: string;
  /** Shown in the detail-page facts panel, e.g. "Live Website". */
  status?: string;
  /** Absolute URL of the live site, linked from the facts panel. */
  websiteUrl?: string;
  featured: boolean;
  division: PortfolioDivision;
};

/**
 * Work the studio created for itself — its own website, its own product
 * concepts, its own brand explorations. Never commissioned by an outside
 * client, and labelled as such everywhere it appears.
 */
export type InternalProject = PortfolioBase & { type: "internal" };

/** Real, commissioned work. `clientName` must be a genuine, agreeing client. */
export type ClientProject = PortfolioBase & { type: "client"; clientName: string };

export type PortfolioProject = InternalProject | ClientProject;

/** The category line on a card — the discipline the project demonstrates. */
export function projectLabel(project: PortfolioProject) {
  return project.caseStudy;
}

/**
 * Who the work was made for. Internal projects must always say so — the
 * portfolio never implies an outside client commissioned studio-made work.
 */
export function projectAttribution(project: PortfolioProject) {
  return project.type === "client"
    ? `Client Project — ${project.clientName}`
    : "Internal Studio Project";
}

export function projectAttributionLong(project: PortfolioProject) {
  return project.type === "client"
    ? `Client Project — ${project.clientName}`
    : "Internal Studio Project — Created by Moshapo Digital Studio";
}

export function projectBadgeVariant(project: PortfolioProject) {
  return project.type === "client" ? ("client" as const) : ("case-study" as const);
}

// Every entry below is work Moshapo Digital Studio actually made, presented as
// its own. Do not invent client names, fictional companies, testimonials, or
// results — if a project was not commissioned, it stays `type: "internal"` and
// carries the Internal Studio Project attribution.
export const portfolioProjects: PortfolioProject[] = [
  {
    type: "internal",
    slug: "moshapo-digital-studio",
    title: "Moshapo Digital Studio",
    caseStudy: "Website Case Study",
    industry: "Website Design & Development",
    servicesProvided: [
      "Website Design",
      "UI/UX Design",
      "Responsive Development",
      "Brand Integration",
      "Digital Experience",
    ],
    summary:
      "The official website and digital experience created to showcase the studio's capabilities across websites, branding, and technology.",
    description:
      "Moshapo Digital Studio's own website, designed and developed in-house as a complete digital experience that reflects the studio's capabilities in website design, branding, and technology.",
    overviewExtra:
      "The website was created to demonstrate how a professional digital presence can combine strategic structure, strong visual identity, responsive design, and modern technology.",
    approach:
      "The site is structured around the three divisions — websites, branding, and technology — so visitors reach the offer they came for in one click, with fixed pricing published up front instead of hidden behind an enquiry. The navy, gold, and cream identity, the Anton display type, and the diagonal cut motif run through every section so the site itself reads as a piece of brand work.",
    solution:
      "A live, fully responsive site built on Next.js with a full-bleed video hero, package pages for both website and branding work, a guided project brief that asks different questions depending on the division, and per-page metadata and structured data for search.",
    gallery: [
      {
        src: "/images/work-moshapo-digital-studio.jpg",
        alt: "The Moshapo Digital Studio website shown on a desktop monitor, laptop, and mobile phone alongside branded stationery",
        span: "full",
        aspect: "wide",
      },
    ],
    status: "Live Website",
    websiteUrl: "https://moshapodigitalstudio.co.za",
    featured: true,
    division: "websites",
  },
  {
    type: "internal",
    slug: "verdura",
    title: "Verdura",
    caseStudy: "Brand Identity Case Study",
    industry: "Botanical Skincare",
    servicesProvided: ["Brand Identity", "Packaging Design", "Graphic Design", "Art Direction"],
    summary:
      "Brand identity and packaging system created by Moshapo Digital Studio — naming, logo, palette, labels, and campaign art direction.",
    description:
      "Verdura is an original botanical skincare brand created in-house by Moshapo Digital Studio — a self-directed project used to work through a complete identity system end to end, from naming and palette through to packaging and campaign art direction.",
    overviewExtra:
      "The point was to show branding as its own discipline, separate from building websites: the thinking, the craft, and the consistency that hold an identity together across every surface it lands on.",
    challenge:
      "A skincare brand has to read as clean and trustworthy on a shelf crowded with competitors making the same natural-ingredient claims. The identity had to feel botanical without tipping into the generic green-leaf territory every wellness brand already occupies.",
    approach:
      "The project ran in sequence, each stage building on the last — naming and a botanical palette first, then a leaf-and-V monogram drawn to hold up at both signage and label sizes, then artwork for the first product, then cartons and packaging, and finally the campaign photography. Each step had to survive the next without the identity drifting.",
    solution:
      "A complete identity system: wordmark and monogram, a deep green, cream, and warm gold palette, label design for the Green Lemon Purifying Face Wash, carton and packaging design, and the launch campaign visuals.",
    gallery: [
      // Cover first — the presentation mockup that also serves as the card
      // thumbnail. Everything after it is the project's own brand artwork.
      {
        src: "/images/work/verdura/cover-botanical-skincare.jpg",
        alt: "The Verdura botanical skincare identity presented across a desktop monitor, laptop, and phone alongside branded cartons, a product tube, and business cards",
        span: "full",
        aspect: "wide",
      },
      {
        src: "/images/work/verdura/naming-palette.jpg",
        alt: "The Verdura wordmark with the brand colour palette: deep green, sage, olive, and warm gold swatches",
        aspect: "portrait",
      },
      {
        src: "/images/work/verdura/logo-design.jpg",
        alt: "The Verdura logo mark, a V formed from a leaf, above the wordmark and Glow Naturally tagline",
        aspect: "portrait",
      },
      {
        src: "/images/work/verdura/logo-final.jpg",
        alt: "The finished Verdura logo lockup on a cream background",
        aspect: "square",
      },
      {
        src: "/images/work/verdura/label-design.jpg",
        alt: "Flat label artwork for Verdura Green Lemon Purifying Face Wash with botanical lemon illustrations",
        aspect: "portrait",
      },
      {
        src: "/images/work/verdura/packaging-mockup.jpg",
        alt: "Hands holding a white Verdura shipping carton printed with the green leaf monogram",
        span: "full",
        aspect: "wide",
      },
      {
        src: "/images/work/verdura/packaging-design.jpg",
        alt: "Packaging design stage showing a blank tube beside the finished printed Verdura face wash",
        aspect: "portrait",
      },
      {
        src: "/images/work/verdura/product-hero.jpg",
        alt: "The Verdura Green Lemon Purifying Face Wash tube photographed with fresh lemons and water splashes",
        aspect: "portrait",
      },
      {
        src: "/images/work/verdura/brand-reveal.jpg",
        alt: "The full Verdura product range — serum, face wash, and cream — presented as the brand reveal",
        aspect: "portrait",
      },
      {
        src: "/images/work/verdura/brand-in-use.jpg",
        alt: "A model in a branded Verdura t-shirt holding the Green Lemon Purifying Face Wash",
        aspect: "portrait",
      },
    ],
    featured: true,
    division: "brand-creative",
  },
  {
    type: "internal",
    slug: "flowlink",
    title: "FlowLink",
    caseStudy: "Digital Product Case Study",
    industry: "WhatsApp Business Automation",
    servicesProvided: ["Product Design", "UI/UX Design", "Brand Identity", "Design System"],
    summary:
      "A WhatsApp business automation platform — product interface, workflow builder, and brand identity designed by Moshapo Digital Studio.",
    description:
      "FlowLink is an original product concept created in-house by Moshapo Digital Studio: a WhatsApp automation platform that turns customer conversations into structured business workflows — enquiries, bookings, and follow-ups handled in one place instead of scattered across a phone.",
    overviewExtra:
      "It exists to show how the studio approaches technology work — not just screens, but the product thinking behind them: what an owner actually needs to see, and what should happen without anyone touching it.",
    challenge:
      "Most small businesses already run on WhatsApp, but the conversations live on one person's phone. Nothing is tracked, follow-ups get missed, and there's no way to see what's actually coming in. The design problem was making automation feel manageable to someone who has never used a CRM.",
    approach:
      "The interface was built around one question: what does an owner need on a single screen? The dashboard leads with conversation volume, new contacts, and what's still open. The workflow builder is visual, so an automation can be assembled by connecting steps rather than writing rules. The identity — a bright green mark against near-black — was designed alongside the product so the brand and the interface read as one system.",
    solution:
      "A full product design system covering the dashboard, conversations, contacts, automations, broadcasts, templates, and analytics, plus the FlowLink identity applied across the app interface, stationery, and platform overview material.",
    gallery: [
      {
        src: "/images/work/flowlink/cover-platform.jpg",
        alt: "The FlowLink WhatsApp automation platform shown on a desktop dashboard, a laptop displaying the workflow builder, and a phone showing an automated chat, alongside FlowLink stationery",
        span: "full",
        aspect: "wide",
      },
    ],
    featured: true,
    division: "technology",
  },
];
