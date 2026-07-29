export type GraphicPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  priceSuffix?: string;
  savings?: string;
  bestFor: string;
  description: string;
  popular?: boolean;
  features: string[];
};

export const graphicPackages: GraphicPackage[] = [
  {
    id: "quick",
    name: "Quick Design",
    price: "R350",
    savings: "Includes R250 of extras that are charged separately on individual orders",
    bestFor: "One professional marketing asset, needed quickly.",
    description:
      "For the campaign that starts on Monday. Pick the design you need, brief us once, and it comes back inside two days — with the working files, so it's yours to reuse.",
    features: [
      "Choose any 1 eligible design",
      "Source files included",
      "Print-ready files",
      "High-resolution exports",
      "Priority turnaround — 24 to 48 hours",
      "2 revision rounds",
    ],
  },
  {
    id: "brand-boost",
    name: "Brand Boost",
    price: "R700",
    savings: "Save from R500 against ordering the same three individually",
    popular: true,
    bestFor: "Growing businesses running a campaign or refreshing their marketing.",
    description:
      "Three designs, chosen by you, priced as one. The biggest jump in value in the range — and the package most of our clients start with, because it covers a full campaign without committing to a retainer.",
    features: [
      "Choose any 3 eligible designs",
      "Mix freely — three posts, or a flyer, a poster and a cover",
      "Source files included",
      "Print-ready files",
      "High-resolution exports",
      "Priority turnaround",
      "2 revision rounds",
    ],
  },
  {
    id: "business-design",
    name: "Business Design",
    price: "R1,100",
    savings: "Save from R900 against ordering the same five individually",
    bestFor: "Businesses that need a full set of marketing material at once.",
    description:
      "Five designs built as a set rather than five separate jobs, so your flyer, your poster and your social posts actually look like they came from the same business. Straight to the front of the queue.",
    features: [
      "Choose any 5 eligible designs",
      "Highest priority queue",
      "Designed as a matching set",
      "Source files included",
      "Print-ready files",
      "High-resolution exports",
      "3 revision rounds",
    ],
  },
  {
    id: "content-design",
    name: "Content Design",
    price: "R2,300",
    priceSuffix: "per month",
    savings: "Save from R2,500 against ordering the same twelve individually",
    bestFor: "Businesses and creators publishing content every week.",
    description:
      "A month of design, planned in advance. We agree what's going out before the month starts, then deliver it in batches so you're never scrambling for something to post. Consistency is the whole point.",
    features: [
      "Choose any 12 eligible designs per month",
      "Monthly content planning session",
      "Priority monthly scheduling",
      "Delivered in batches across the month",
      "Source files included",
      "Print-ready files",
      "High-resolution exports",
      "4 revision rounds",
    ],
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    price: "R3,500",
    priceNote: "From",
    savings: "Save from R800 against commissioning each piece individually",
    bestFor: "New or rebranding businesses that need a proper visual identity.",
    description:
      "The point where a business stops looking improvised. A logo, the rules that hold it together, and the everyday pieces you'll actually use — built as one identity instead of assembled from parts that don't quite match.",
    features: [
      "Logo design with full variation set",
      "Brand guidelines document",
      "Colour palette and typography system",
      "Brand pattern and graphic elements",
      "Double-sided business card design",
      "Profile picture and Facebook cover",
      "3 social media post templates",
      "Source files in all working formats",
      "High-resolution and print-ready exports",
      "4 revision rounds",
      "Project timeline agreed before we start",
    ],
  },
  {
    id: "complete-brand-system",
    name: "Complete Brand System",
    price: "R6,500",
    priceNote: "From",
    savings: "Save from R1,050 against commissioning each piece individually",
    bestFor: "Established businesses committing to a full brand transformation.",
    description:
      "Everything documented, every application built, nothing left to interpretation. This is the version where anyone — a printer, a new hire, another designer — can pick up your brand and apply it correctly without asking you first.",
    features: [
      "Everything in Brand Identity",
      "Extended logo variation set with usage rules",
      "Clear-space and incorrect-usage guidelines",
      "8 social media post templates and 8 story templates",
      "LinkedIn banner and YouTube banner",
      "Email signature design",
      "Tri-fold brochure design",
      "Source files in all working formats",
      "High-resolution and print-ready exports",
      "5 revision rounds",
      "Project timeline agreed before we start",
    ],
  },
];

export const eligibleDesigns = {
  heading: "Which designs you can choose from",
  intro:
    "Quick Design, Brand Boost, Business Design and Content Design all let you pick freely from this list. Most designs take one slot. A few larger pieces take more, because they're genuinely more work.",
  items: [
    "Social media post",
    "Social media story",
    "Digital flyer",
    "Promotional poster",
    "Event poster",
    "Product advertisement",
    "Digital marketing graphic",
    "Facebook cover",
    "LinkedIn banner",
    "YouTube banner",
    "Certificate design",
    "Menu design — counts as 2",
    "Brochure, bi-fold — counts as 2",
    "Brochure, tri-fold — counts as 3",
  ],
  note: "Quick Design covers single-slot designs, so menus and brochures come in from Brand Boost upwards. Business cards, profile pictures, thumbnails, email signatures, logo design and brand guidelines stay standalone services — they aren't part of the package selection.",
};

export type IndividualServiceGroup = {
  category: string;
  items: { name: string; price: string }[];
};

export const individualServices: IndividualServiceGroup[] = [
  {
    category: "Marketing & Promotional Graphics",
    items: [
      { name: "Social Media Post", price: "From R150" },
      { name: "Social Media Story", price: "From R150" },
      { name: "Digital Flyer", price: "From R200" },
      { name: "Promotional Poster", price: "From R200" },
      { name: "Event Poster", price: "From R250" },
      { name: "Product Advertisement", price: "From R300" },
      { name: "Digital Marketing Graphic", price: "From R250" },
      { name: "Facebook Cover", price: "From R250" },
      { name: "LinkedIn Banner", price: "From R250" },
      { name: "YouTube Banner", price: "From R250" },
      { name: "Certificate Design", price: "From R250" },
      { name: "Menu Design", price: "From R350" },
      { name: "Brochure (Bi-fold)", price: "From R500" },
      { name: "Brochure (Tri-fold)", price: "From R650" },
    ],
  },
  {
    category: "Business Essentials",
    items: [
      { name: "Business Card (Single-Sided)", price: "From R200" },
      { name: "Business Card (Double-Sided)", price: "From R250" },
      { name: "Email Signature", price: "From R150" },
    ],
  },
  {
    category: "Branding",
    items: [
      { name: "Logo Design", price: "From R1,200" },
      { name: "Brand Guidelines", price: "From R2,000" },
    ],
  },
  {
    category: "Other Services",
    items: [
      { name: "Profile Picture", price: "From R150" },
      { name: "YouTube Thumbnail", price: "From R180" },
    ],
  },
];

export const individualServicesNudge =
  "Need more than one design? Every package below costs less than ordering the same pieces individually — Brand Boost is where most businesses start.";

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
  addOns:
    "Individual orders come back as high-resolution digital files. Editable source files are R150 per design and print-ready exports are R100 per design. Both are included free in every package — that is where most of the package saving comes from.",
  revisions:
    "Individual orders include one revision round. Each package includes the rounds listed on it. Additional revisions are available for an extra fee, quoted with your project.",
  turnaround:
    "Individual orders run on standard turnaround. Quick Design comes back in 24 to 48 hours. Brand Boost moves ahead of standard orders and Business Design goes to the front of the queue. Content Design runs on a scheduled monthly slot, and the two brand packages work to a project timeline agreed before we start.",
};
