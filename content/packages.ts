export type PackageTier = {
  id: "landing" | "starter" | "growth" | "premium";
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  popular?: boolean;
  features: string[];
  suggestedPages?: string[];
};

export const packages: PackageTier[] = [
  {
    id: "landing",
    name: "Landing Page",
    price: "R1,500",
    description: "For businesses that need a focused online presence.",
    features: [
      "1 custom landing page",
      "Mobile-responsive design",
      "Contact/enquiry form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Social media links",
      "SSL/HTTPS setup",
      "Basic speed optimization",
      "Cross-browser compatibility",
      "1 round of revisions",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "R2,500",
    popular: true,
    description: "A complete small-business website.",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Contact/enquiry form",
      "WhatsApp integration",
      "Basic SEO",
      "Social media integration",
      "Google Maps integration",
      "SSL/HTTPS setup",
      "Speed optimization",
      "Cross-browser compatibility",
      "2 rounds of revisions",
    ],
    suggestedPages: ["Home", "About", "Services", "Gallery/Portfolio", "Contact"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "R5,000",
    description: "For businesses ready to scale their digital presence.",
    features: [
      "Up to 10 pages",
      "Professional custom design",
      "Advanced SEO setup",
      "Contact and enquiry forms",
      "WhatsApp integration",
      "Social media integration",
      "Google Maps integration",
      "Blog/news section",
      "Basic analytics setup",
      "Speed optimization",
      "3 rounds of revisions",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "R8,500",
    priceNote: "From",
    description: "Full-featured websites with custom functionality.",
    features: [
      "Up to 15 pages",
      "Premium custom design",
      "Advanced SEO",
      "Advanced speed optimization",
      "Custom features",
      "Blog/news system",
      "Booking systems",
      "Advanced forms",
      "Payment integrations where appropriate",
      "Custom animations",
      "5 rounds of revisions",
    ],
  },
];

export const packagesFootnote =
  "Complex functionality and custom integrations may require an additional quotation.";

export const everyWebsiteIncludes = {
  heading: "Every website includes",
  items: [
    "Domain and hosting guidance",
    "Professional email setup guidance",
    "SSL certificate / HTTPS",
    "Speed optimization",
    "Cross-browser compatibility",
    "Mobile responsiveness",
    "Basic website training",
    "Post-launch support",
  ],
  note: "We guide you through domain, hosting, and professional email setup so your website is properly configured from the beginning.",
};
