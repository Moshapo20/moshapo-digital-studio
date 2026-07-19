import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { company } from "@/content/company";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description: company.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">
        <Nav />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating">WhatsApp</WhatsAppButton>
      </body>
    </html>
  );
}
