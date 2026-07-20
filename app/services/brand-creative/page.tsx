import type { Metadata } from "next";
import { ServiceDivisionDetail } from "@/components/sections/ServiceDivisionDetail";
import { serviceDivisions } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const division = serviceDivisions.find((d) => d.id === "brand-creative")!;

export const metadata: Metadata = pageMetadata({
  title: division.name,
  description: division.description,
  path: "/services/brand-creative",
});

export default function BrandCreativePage() {
  return <ServiceDivisionDetail division={division} />;
}
