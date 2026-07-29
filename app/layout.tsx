import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { company, socialLinks } from "@/content/company";
import { pageMetadata, siteUrl } from "@/lib/seo";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const homeMetadata = pageMetadata({
  title: `${company.name} — ${company.tagline}`,
  description: company.tagline,
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description: company.tagline,
  alternates: homeMetadata.alternates,
  openGraph: homeMetadata.openGraph,
  twitter: homeMetadata.twitter,
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/logo/logo_icon.png`,
  image: `${siteUrl}/logo/logo_lockup.png`,
  description: company.tagline,
  email: company.email,
  telephone: `+${company.whatsapp.international}`,
  areaServed: "ZA",
  address: { "@type": "PostalAddress", addressCountry: "ZA" },
  // Tells Google these profiles are the same business as the site.
  ...(socialLinks.length > 0 && { sameAs: socialLinks.map((link) => link.href) }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">
        <JsonLd data={organizationJsonLd} />
        <Nav />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating">WhatsApp</WhatsAppButton>
      </body>
    </html>
  );
}
