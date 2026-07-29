"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { leadSchema, type LeadInput } from "@/lib/validations/lead";
import { Button } from "@/components/ui/Button";
import { DivisionSelect } from "./DivisionSelect";
import { SharedContactFields } from "./SharedContactFields";
import { WebsiteFields } from "./WebsiteFields";
import { BrandingFields } from "./BrandingFields";
import { TechnologyFields } from "./TechnologyFields";
import { ThankYou } from "./ThankYou";
import { graphicPackages } from "@/content/graphicPackages";
import type { StartProjectFormValues } from "./types";

type Division = "website" | "branding" | "technology";

const WEBSITE_PACKAGE_IDS = ["landing", "starter", "growth", "premium"] as const;
type WebsitePackageId = (typeof WEBSITE_PACKAGE_IDS)[number];

// The `package` query param carries a website package id on website links and a
// graphic package id on branding links. Route each to the field its own schema
// actually validates, otherwise a graphic id lands in `websitePackage` (whose
// enum rejects it) and the chosen package is lost from the lead.
function initialWebsitePackage(
  division: Division | null,
  id: string | null
): WebsitePackageId | undefined {
  if (division !== "website" || !id) return undefined;
  return (WEBSITE_PACKAGE_IDS as readonly string[]).includes(id)
    ? (id as WebsitePackageId)
    : undefined;
}

function initialBrandingService(division: Division | null, id: string | null) {
  if (division !== "branding" || !id) return undefined;
  return graphicPackages.find((pkg) => pkg.id === id)?.name;
}

export function StartProjectForm() {
  const searchParams = useSearchParams();
  const initialDivision = searchParams.get("division") as Division | null;
  const initialPackage = searchParams.get("package");

  const [step, setStep] = useState<0 | 1>(initialDivision ? 1 : 0);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<StartProjectFormValues>({
    resolver: zodResolver(leadSchema) as never,
    defaultValues: {
      division: initialDivision ?? undefined,
      websitePackage: initialWebsitePackage(initialDivision, initialPackage),
      brandingService: initialBrandingService(initialDivision, initialPackage),
    },
  });

  const division = watch("division");

  function selectDivision(next: Division) {
    setValue("division", next);
    setStep(1);
  }

  async function onSubmit(data: StartProjectFormValues) {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data as LeadInput),
      });
      setSubmitState(res.ok ? "success" : "error");
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") return <ThankYou />;
  if (submitState === "error") return <ThankYou error />;

  return (
    <div>
      <p className="font-display mb-8 text-xs font-bold uppercase tracking-wide text-black/50">
        Step {step + 1} of 2
      </p>

      {step === 0 && <DivisionSelect value={division} onSelect={selectDivision} />}

      {step === 1 && division && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <SharedContactFields register={register} errors={errors} />

          {division === "website" && <WebsiteFields register={register} errors={errors} />}
          {division === "branding" && <BrandingFields register={register} errors={errors} />}
          {division === "technology" && <TechnologyFields register={register} errors={errors} />}

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="font-display text-sm font-semibold uppercase tracking-wide text-black/50 hover:text-black"
            >
              ← Change service
            </button>
            <Button type="submit" variant="gold" disabled={submitState === "submitting"}>
              {submitState === "submitting" ? "Submitting…" : "Submit Enquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
