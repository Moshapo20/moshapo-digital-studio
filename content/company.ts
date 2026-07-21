export const company = {
  name: "Moshapo Digital Studio",
  founder: "Marope Moshapo",
  founderTitle: "Founder & Creative Director",
  tagline:
    "Professional websites, branding, and digital tools for South African businesses.",
  domain: "moshapodigitalstudio.co.za",
  email: "hello@moshapodigitalstudio.co.za",
  responseTime: "We usually reply within a few hours — same day at the latest.",
  whatsapp: {
    number: "0680083342",
    international: "27680083342",
    display: "068 008 3342",
    defaultMessage: "Hello Moshapo Digital Studio, I would like to discuss a project.",
  },
  location: "South Africa",
  social: {
    instagram: null as string | null,
    tiktok: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Start a Project", href: "/start-a-project" },
  { label: "Contact", href: "/contact" },
] as const;
