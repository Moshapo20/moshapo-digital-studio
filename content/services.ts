export type ServiceDivisionId = "brand-creative" | "websites" | "technology";

export type ServiceDivision = {
  id: ServiceDivisionId;
  slug: string;
  name: string;
  headline: string;
  description: string;
  cta: string;
  services: string[];
  hasFixedPricing: boolean;
};

export const serviceDivisions: ServiceDivision[] = [
  {
    id: "brand-creative",
    slug: "brand-creative",
    name: "Brand & Creative",
    headline: "Build a brand people remember.",
    description:
      "From identity systems to everyday marketing materials, we create cohesive visual experiences that help businesses look credible, consistent, and distinctive.",
    cta: "Explore Brand & Creative",
    hasFixedPricing: false,
    services: [
      "Logo design",
      "Brand identity",
      "Brand systems",
      "Business cards",
      "Letterheads",
      "Invoices",
      "Posters",
      "Flyers",
      "Social media designs",
      "Marketing materials",
      "Digital advertising creatives",
      "Presentation design",
    ],
  },
  {
    id: "websites",
    slug: "websites",
    name: "Websites & Digital Experiences",
    headline: "Build a digital presence that works.",
    description:
      "We design and develop responsive websites that help businesses establish credibility, communicate clearly, and create better experiences for their customers.",
    cta: "Explore Websites",
    hasFixedPricing: true,
    services: [
      "Landing pages",
      "Business websites",
      "Professional websites",
      "E-commerce websites",
      "Booking systems",
      "Online catalogues",
      "Website maintenance",
      "SEO",
      "Performance optimization",
      "Custom web experiences",
    ],
  },
  {
    id: "technology",
    slug: "technology",
    name: "Technology & Digital Solutions",
    headline: "Build systems that make business easier.",
    description:
      "We create digital tools, automation, dashboards, and custom solutions designed around the way businesses actually work.",
    cta: "Explore Technology",
    hasFixedPricing: false,
    services: [
      "Custom dashboards",
      "CRM systems",
      "Client portals",
      "Business automation",
      "AI-powered solutions",
      "Custom web applications",
      "Digital workflow systems",
      "API integrations",
    ],
  },
];
