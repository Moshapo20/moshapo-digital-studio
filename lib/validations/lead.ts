import { z } from "zod";

const sharedFields = {
  fullName: z.string().min(2, "Please enter your name"),
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  whatsapp: z.string().min(10, "Please enter a valid WhatsApp number"),
};

export const websiteLeadSchema = z.object({
  division: z.literal("website"),
  ...sharedFields,
  websitePackage: z.enum(["landing", "starter", "growth", "premium"]),
  typeOfWebsite: z.string().min(1, "Please tell us what type of website you need"),
  numberOfPages: z.string().min(1, "Please provide an estimate"),
  hasDomain: z.enum(["yes", "no", "not-sure"]),
  hasHosting: z.enum(["yes", "no", "not-sure"]),
  hasContent: z.enum(["yes", "no", "partial"]),
  budget: z.string().min(1, "Please select a budget range"),
  desiredLaunchDate: z.string().optional(),
  projectDescription: z.string().min(10, "Please tell us a bit more about the project"),
});

export const brandingLeadSchema = z.object({
  division: z.literal("branding"),
  ...sharedFields,
  brandingService: z.string().min(1, "Please tell us what branding service you need"),
  hasExistingLogo: z.enum(["yes", "no"]),
  hasExistingBrandColors: z.enum(["yes", "no"]),
  industry: z.string().min(1, "Please tell us your industry"),
  preferredStyle: z.string().min(1, "Please describe your preferred style"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  projectDescription: z.string().min(10, "Please tell us a bit more about the project"),
});

export const technologyLeadSchema = z.object({
  division: z.literal("technology"),
  ...sharedFields,
  businessProblem: z.string().min(10, "Please describe the problem you're trying to solve"),
  whoWillUse: z.string().min(1, "Please tell us who will use the system"),
  currentProcess: z.string().min(1, "Please describe how this is currently managed"),
  currentTools: z.array(z.string()).min(1, "Please select at least one option"),
  requiredFeatures: z.string().min(10, "Please describe the features you need"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
});

export const leadSchema = z.discriminatedUnion("division", [
  websiteLeadSchema,
  brandingLeadSchema,
  technologyLeadSchema,
]);

export type LeadInput = z.infer<typeof leadSchema>;
export type Division = LeadInput["division"];
