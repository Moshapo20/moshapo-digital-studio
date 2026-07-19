import type { z } from "zod";
import type {
  websiteLeadSchema,
  brandingLeadSchema,
  technologyLeadSchema,
} from "@/lib/validations/lead";

export type WebsiteFormValues = z.infer<typeof websiteLeadSchema>;
export type BrandingFormValues = z.infer<typeof brandingLeadSchema>;
export type TechnologyFormValues = z.infer<typeof technologyLeadSchema>;

// Loose combined shape used to back the single multi-step form. Only the
// fields relevant to the selected `division` are validated at submit time
// (via the Zod discriminated union), but registering every possible field
// on one form keeps the step components simple.
export type StartProjectFormValues = Partial<Omit<WebsiteFormValues, "division">> &
  Partial<Omit<BrandingFormValues, "division">> &
  Partial<Omit<TechnologyFormValues, "division">> & {
    division?: "website" | "branding" | "technology";
  };
