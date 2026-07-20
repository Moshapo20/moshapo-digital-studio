import type { Metadata } from "next";
import { ServiceDivisionDetail } from "@/components/sections/ServiceDivisionDetail";
import { serviceDivisions } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const division = serviceDivisions.find((d) => d.id === "technology")!;

export const metadata: Metadata = pageMetadata({
  title: division.name,
  description: division.description,
  path: "/services/technology",
});

export default function TechnologyPage() {
  return <ServiceDivisionDetail division={division} />;
}
