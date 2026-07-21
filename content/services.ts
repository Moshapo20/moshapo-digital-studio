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
  image: string;
  imageAlt: string;
};

export const serviceDivisions: ServiceDivision[] = [
  {
    id: "websites",
    slug: "websites",
    name: "Websites & Digital Experiences",
    headline: "A website that pulls its weight.",
    description:
      "This is the core of what we do. We design and build websites that look the part, work properly on every screen, and are set up to actually bring in enquiries — not just sit there.",
    cta: "Explore Websites",
    hasFixedPricing: true,
    image: "/images/service-websites.jpg",
    imageAlt: "A laptop glowing softly in a dark, minimal setting",
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
    id: "brand-creative",
    slug: "brand-creative",
    name: "Brand & Creative",
    headline: "A brand people actually remember.",
    description:
      "Logos, full brand identities, and all the everyday design that comes after — business cards, social posts, flyers, the lot. The point is simple: wherever someone runs into your business, it should look like the same sorted operation.",
    cta: "Explore Brand & Creative",
    hasFixedPricing: false,
    image: "/images/service-brand-creative.jpg",
    imageAlt: "Black envelope, a blank white card and a silver pen on a black surface",
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
    id: "technology",
    slug: "technology",
    name: "Technology & Digital Solutions",
    headline: "Systems that take work off your plate.",
    description:
      "The newer, growing side of what we do. When spreadsheets and WhatsApp threads start slowing you down, we build the dashboards, automations, and custom tools to replace them — shaped around how you already work, not the other way round.",
    cta: "Explore Technology",
    hasFixedPricing: false,
    image: "/images/service-technology.jpg",
    imageAlt: "Abstract curved gold metal mesh forming a fine geometric pattern",
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
