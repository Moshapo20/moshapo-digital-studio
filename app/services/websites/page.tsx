import type { Metadata } from "next";
import { ServiceDivisionDetail } from "@/components/sections/ServiceDivisionDetail";
import { serviceDivisions } from "@/content/services";

const division = serviceDivisions.find((d) => d.id === "websites")!;

export const metadata: Metadata = {
  title: division.name,
  description: division.description,
};

export default function WebsitesPage() {
  return <ServiceDivisionDetail division={division} />;
}
