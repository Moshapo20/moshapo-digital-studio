export type PortfolioDivision = "brand-creative" | "websites" | "technology";

type PortfolioBase = {
  slug: string;
  title: string;
  industry: string;
  servicesProvided: string[];
  description: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  gallery: { src?: string; alt: string }[];
  results?: string;
  featured: boolean;
  division: PortfolioDivision;
};

export type ClientProject = PortfolioBase & {
  type: "client";
  clientName: string;
};

export type ConceptProject = PortfolioBase & {
  type: "concept";
};

export type PortfolioProject = ClientProject | ConceptProject;

export function conceptLabel() {
  return "Concept Project — Created by Moshapo Digital Studio";
}

// No real client projects exist yet — every entry below is explicitly a
// concept project until real client work is added. Never remove `type:
// "concept"` from an entry unless it is genuinely real, agency-approved
// client work.
export const portfolioProjects: PortfolioProject[] = [
  {
    type: "concept",
    slug: "coastal-consulting-co",
    title: "Coastal Consulting Co.",
    industry: "Professional Services",
    servicesProvided: ["Brand Identity", "Website Design"],
    description:
      "A concept brand and website exploration for a fictional coastal consulting firm, designed to demonstrate a calm, credible identity system for a professional-services business.",
    approach:
      "Explored a restrained navy-and-sand palette paired with a confident wordmark, then translated the system into a 5-page website structure.",
    solution:
      "A cohesive brand system and homepage layout showing how Moshapo Digital Studio approaches identity-led website design.",
    gallery: [{ alt: "Coastal Consulting Co. concept brand and website mockup" }],
    featured: true,
    division: "brand-creative",
  },
  {
    type: "concept",
    slug: "northline-studio",
    title: "Northline Studio",
    industry: "Creative / Photography",
    servicesProvided: ["Website Design"],
    description:
      "A concept portfolio website for a fictional photography studio, focused on letting imagery lead while keeping navigation minimal.",
    approach:
      "Full-bleed image grid layout with a lightweight nav and a single clear contact call to action.",
    solution:
      "A fast, image-first single-page concept site design.",
    gallery: [{ alt: "Northline Studio concept website mockup" }],
    featured: true,
    division: "websites",
  },
  {
    type: "concept",
    slug: "ridgeline-supply-co",
    title: "Ridgeline Supply Co.",
    industry: "Retail / Wholesale",
    servicesProvided: ["Brand Identity"],
    description:
      "A concept identity system for a fictional outdoor-supply wholesaler, built to feel rugged and trustworthy without leaning on cliché outdoor imagery.",
    approach:
      "A bold, utilitarian logotype and a muted earth-tone palette applied across packaging and stationery mockups.",
    gallery: [{ alt: "Ridgeline Supply Co. concept brand identity mockup" }],
    featured: true,
    division: "brand-creative",
  },
  {
    type: "concept",
    slug: "hallmark-and-co",
    title: "Hallmark & Co.",
    industry: "Legal Services",
    servicesProvided: ["Website Design", "Brand Identity"],
    description:
      "A concept brand-and-website pairing for a fictional boutique law firm, aimed at feeling established and precise.",
    approach:
      "A serif-accented wordmark against a strict grid layout to signal formality and attention to detail.",
    gallery: [{ alt: "Hallmark & Co. concept brand and website mockup" }],
    featured: false,
    division: "websites",
  },
];
