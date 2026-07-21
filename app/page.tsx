import { Hero } from "@/components/sections/Hero";
import { PositioningStatement } from "@/components/sections/PositioningStatement";
import { ServiceDivisions } from "@/components/sections/ServiceDivisions";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { PackagesTeaser } from "@/components/sections/PackagesTeaser";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyMoshapo } from "@/components/sections/WhyMoshapo";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <PositioningStatement />
      <ServiceDivisions />
      <FeaturedWork />
      <PackagesTeaser />
      <HowWeWork />
      <WhyMoshapo />
      <FAQ />
      <InsightsTeaser />
      <FinalCtaBand />
    </>
  );
}
