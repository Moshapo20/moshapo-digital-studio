import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ClockIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${company.name} to discuss your brand, website, or technology project.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section bg="black" diagonal="corner" className="pt-16 pb-14 md:pt-20">
        <Eyebrow>Get In Touch</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-4 max-w-xl text-text-soft">
          Have a quick question, or prefer not to fill out the full project form? Send us a
          message here.
        </p>
      </Section>

      <Section bg="white">
        <div className="grid gap-16 md:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <div className="space-y-8 bg-black p-8 text-white">
            <div className="flex gap-4">
              <ClockIcon className="mt-0.5 shrink-0 text-gold" />
              <div>
                <Eyebrow>Fast Reply</Eyebrow>
                <p className="mt-2 text-sm text-text-soft">{company.responseTime}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MailIcon className="mt-0.5 shrink-0 text-gold" />
              <div>
                <Eyebrow>Email</Eyebrow>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 block text-sm text-text-soft hover:text-gold"
                >
                  {company.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <WhatsAppIcon className="mt-0.5 shrink-0 text-gold" />
              <div>
                <Eyebrow>WhatsApp</Eyebrow>
                <p className="mt-2 text-sm text-text-soft">{company.whatsapp.display}</p>
                <WhatsAppButton className="mt-3" variant="inline">
                  Message on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPinIcon className="mt-0.5 shrink-0 text-gold" />
              <div>
                <Eyebrow>Based In</Eyebrow>
                <p className="mt-2 text-sm text-text-soft">
                  {company.location}
                  <br />
                  Working with clients worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
