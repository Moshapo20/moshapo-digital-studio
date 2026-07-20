import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StartProjectForm } from "@/components/forms/StartProjectForm/StartProjectForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Start a Project",
  description: "Tell us about your project and we'll get back to you with next steps.",
  path: "/start-a-project",
});

export default function StartAProjectPage() {
  return (
    <Section bg="white" className="pt-16 pb-24 md:pt-20">
      <Eyebrow>Start a Project</Eyebrow>
      <h1 className="font-display mt-4 max-w-xl text-4xl font-bold text-black md:text-5xl">
        Tell us what you need.
      </h1>
      <p className="mt-4 max-w-xl text-black/60">
        Pick a service to get started — the form will ask a few relevant questions so we can
        understand your project properly.
      </p>

      <div className="mt-12 max-w-3xl">
        <Suspense fallback={null}>
          <StartProjectForm />
        </Suspense>
      </div>
    </Section>
  );
}
