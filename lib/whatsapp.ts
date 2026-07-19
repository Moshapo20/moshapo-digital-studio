import { company } from "@/content/company";

export function buildWhatsAppLink(message: string = company.whatsapp.defaultMessage) {
  return `https://wa.me/${company.whatsapp.international}?text=${encodeURIComponent(message)}`;
}
