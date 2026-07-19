import { cn } from "@/lib/utils";

const options = [
  { id: "website" as const, name: "Websites & Digital Experiences", description: "A landing page, business website, or full custom build." },
  { id: "branding" as const, name: "Brand & Creative", description: "Logo, brand identity, or everyday marketing materials." },
  { id: "technology" as const, name: "Technology & Digital Solutions", description: "Dashboards, automation, or a custom digital tool." },
];

export function DivisionSelect({
  value,
  onSelect,
}: {
  value?: string;
  onSelect: (division: "website" | "branding" | "technology") => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.id)}
          className={cn(
            "border p-6 text-left transition-colors",
            value === option.id ? "border-gold bg-light-gray" : "border-black/15 hover:border-black/40"
          )}
        >
          <h3 className="font-display text-base font-bold text-black">{option.name}</h3>
          <p className="mt-2 text-sm text-black/60">{option.description}</p>
        </button>
      ))}
    </div>
  );
}
