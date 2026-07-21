export type GraphicPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  popular?: boolean;
  features: string[];
};

export const graphicPackages: GraphicPackage[] = [
  {
    id: "quick",
    name: "Quick Design",
    price: "R350",
    description: "For a single, simple design you need done properly.",
    features: [
      "1 custom graphic design",
      "Flyer, poster, social post, or promo graphic",
      "1 round of revisions",
      "High-resolution final file",
    ],
  },
  {
    id: "brand-boost",
    name: "Brand Boost",
    price: "R750",
    popular: true,
    description: "For small businesses that need a few designs at once.",
    features: [
      "3 custom graphic designs",
      "Social posts, flyers, posters, or banners",
      "2 rounds of revisions",
      "High-resolution final files",
      "Web-ready files",
    ],
  },
  {
    id: "business-design",
    name: "Business Design",
    price: "R1,500",
    description: "A full set of promotional material for your business.",
    features: [
      "6 custom graphic designs",
      "Social media designs",
      "Promotional flyer / poster",
      "Business banner",
      "Branded promotional graphics",
      "2 rounds of revisions",
      "High-resolution final files",
    ],
  },
  {
    id: "content-design",
    name: "Content Design",
    price: "R2,500",
    description: "For businesses and creators who post visual content regularly.",
    features: [
      "12 custom graphic designs",
      "Social media posts & story designs",
      "Promotional graphics",
      "Product / service adverts",
      "Consistent branded look",
      "3 rounds of revisions",
    ],
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    price: "R3,500",
    priceNote: "From",
    description: "A professional identity for a new or growing business.",
    features: [
      "Professional logo design + variations",
      "Colour palette & typography",
      "Brand pattern / graphic elements",
      "Business card design",
      "Social media profile + post template",
      "Basic brand guideline document",
    ],
  },
  {
    id: "complete-brand-system",
    name: "Complete Brand System",
    price: "R6,500",
    priceNote: "From",
    description: "The full professional brand identity system, documented end to end.",
    features: [
      "Logo design, variations & usage rules",
      "Brand colour & typography systems",
      "Clear-space & incorrect-usage guidelines",
      "Brand pattern",
      "Business card, letterhead & invoice template",
      "Social media templates",
      "Brand guideline presentation",
    ],
  },
];

export type IndividualServiceGroup = {
  category: string;
  items: { name: string; price: string }[];
};

export const individualServices: IndividualServiceGroup[] = [
  {
    category: "Logo & Branding",
    items: [
      { name: "Logo Design", price: "From R800" },
      { name: "Logo Redesign", price: "From R600" },
      { name: "Logo + Basic Brand Kit", price: "From R1,500" },
      { name: "Complete Brand Identity", price: "From R3,500" },
      { name: "Brand Guideline Document", price: "From R1,500" },
    ],
  },
  {
    category: "Social Media Design",
    items: [
      { name: "Social Media Post", price: "From R150" },
      { name: "Social Media Story", price: "From R150" },
      { name: "Profile Picture", price: "From R250" },
      { name: "Cover / Banner", price: "From R300" },
      { name: "YouTube Banner", price: "From R400" },
      { name: "Social Media Template", price: "From R350" },
    ],
  },
  {
    category: "Marketing Design",
    items: [
      { name: "Digital Flyer", price: "From R250" },
      { name: "Promotional Poster", price: "From R300" },
      { name: "Event Poster", price: "From R300" },
      { name: "Product Advertisement", price: "From R300" },
      { name: "Digital Marketing Graphic", price: "From R250" },
    ],
  },
  {
    category: "Business Materials",
    items: [
      { name: "Business Card", price: "From R300" },
      { name: "Letterhead", price: "From R300" },
      { name: "Invoice Template", price: "From R400" },
      { name: "Quotation Template", price: "From R400" },
      { name: "Certificate", price: "From R250" },
      { name: "Company Profile", price: "From R1,500" },
      { name: "Business Presentation", price: "From R500" },
    ],
  },
  {
    category: "Print & Large Format",
    items: [
      { name: "Banner Design", price: "From R400" },
      { name: "Pull-Up Banner", price: "From R500" },
      { name: "Signage Design", price: "From R500" },
      { name: "Brochure Design", price: "From R600" },
      { name: "Menu Design", price: "From R500" },
      { name: "Catalogue Design", price: "From R1,000" },
    ],
  },
  {
    category: "Content Creator Design",
    items: [
      { name: "YouTube Thumbnail", price: "From R200" },
      { name: "Podcast Cover", price: "From R350" },
      { name: "YouTube Channel Branding", price: "From R750" },
      { name: "Thumbnail Package (5)", price: "From R750" },
      { name: "Thumbnail Package (10)", price: "From R1,300" },
    ],
  },
];

export const graphicPricingNotes = {
  complexityHeading: "What affects the final price",
  complexityIntro:
    "Every job is quoted on its own. The starting prices above move up with:",
  complexityFactors: [
    "Design complexity",
    "Amount of content",
    "Number of design elements",
    "Turnaround time",
    "Number of revisions",
    "Whether custom illustrations are needed",
  ],
  revisions:
    "Package prices include the revisions listed in each package. Extra revision rounds are from R100. A major redesign is quoted separately.",
  urgent: "Need it faster? 24-hour delivery adds 50%, same-day adds 100%.",
};
