import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";
import {
  graphicPackages,
  individualServices,
  graphicPricingNotes,
} from "@/content/graphicPackages";

export function GraphicPackages() {
  return (
    <>
      <Section bg="light">
        <Eyebrow>Graphic Design Packages</Eyebrow>
        <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-black md:text-4xl">
          Design work, priced upfront.
        </h2>
        <p className="mt-4 max-w-xl text-black/60">
          Pick a package or order individual pieces below. Everything comes back in
          high-resolution, ready-to-use files.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {graphicPackages.map((pkg) => (
            <Card
              key={pkg.id}
              variant={pkg.popular ? "package-popular" : "package"}
              className="relative"
            >
              {pkg.popular && (
                <Badge variant="popular" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <h3 className="font-display text-xl font-bold text-black">{pkg.name}</h3>
              <p className="mt-2 font-display text-3xl font-bold text-black">
                {pkg.priceNote && (
                  <span className="mr-1 text-base font-medium">{pkg.priceNote}</span>
                )}
                {pkg.price}
              </p>
              <p className="mt-2 text-sm text-black/60">{pkg.description}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-black/75">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <CheckIcon className="mt-0.5 shrink-0 text-gold" width={16} height={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={`/start-a-project?division=branding&package=${pkg.id}`}
                variant="gold"
                className="mt-8 w-full"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <Eyebrow>Individual Design Services</Eyebrow>
        <h2 className="font-display mt-4 max-w-2xl text-2xl font-bold text-black md:text-3xl">
          Just need one thing? Order it on its own.
        </h2>

        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {individualServices.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                {group.category}
              </h3>
              <ul className="mt-4 divide-y divide-black/10 border-t border-black/10">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 py-3 text-sm"
                  >
                    <span className="text-black/75">{item.name}</span>
                    <span className="whitespace-nowrap font-display font-semibold text-black">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="light">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold text-black">
              {graphicPricingNotes.complexityHeading}
            </h3>
            <p className="mt-3 text-sm text-black/60">{graphicPricingNotes.complexityIntro}</p>
            <ul className="mt-4 space-y-2 text-sm text-black/75">
              {graphicPricingNotes.complexityFactors.map((factor) => (
                <li key={factor} className="flex gap-2.5">
                  <CheckIcon className="mt-0.5 shrink-0 text-gold" width={16} height={16} />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-gold pl-5">
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-black">
                Revisions
              </h4>
              <p className="mt-2 text-sm text-black/70">{graphicPricingNotes.revisions}</p>
            </div>
            <div className="border-l-2 border-gold pl-5">
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-black">
                Need it urgently?
              </h4>
              <p className="mt-2 text-sm text-black/70">{graphicPricingNotes.urgent}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
