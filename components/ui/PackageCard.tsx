import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { PackageTier } from "@/content/packages";

export function PackageCard({ pkg, compact = false }: { pkg: PackageTier; compact?: boolean }) {
  return (
    <Card variant={pkg.popular ? "package-popular" : "package"} className="relative">
      {pkg.popular && (
        <Badge variant="popular" className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      <h3 className="font-display text-xl font-bold text-black">{pkg.name}</h3>
      <p className="mt-2 font-display text-3xl font-bold text-black">
        {pkg.priceNote && <span className="mr-1 text-base font-medium">{pkg.priceNote}</span>}
        {pkg.price}
      </p>
      <p className="mt-2 text-sm text-black/60">{pkg.description}</p>

      {!compact && (
        <ul className="mt-6 flex-1 space-y-2.5 text-sm text-black/75">
          {pkg.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-gold">—</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      <Button
        href={`/start-a-project?division=website&package=${pkg.id}`}
        variant="gold"
        className="mt-8 w-full"
      >
        Get Started
      </Button>
    </Card>
  );
}
