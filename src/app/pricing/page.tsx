import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import PricingCard from "@/components/pricing/PricingCard";
import PricingComparison from "@/components/pricing/PricingComparison";
import { pricingTiers } from "@/data/pricing";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the plan that fits your learning goals — from self-paced course to premium mentorship.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          Simple, Transparent Pricing
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          Invest in Your <GradientText>Future</GradientText>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          One-time payment, lifetime access. No subscriptions, no hidden fees.
          Choose the level of support that&apos;s right for you.
        </p>
      </Section>

      <Section>
        <div className="grid items-start gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </Section>

      <PricingComparison />

      <Section className="text-center">
        <div className="gradient-glow mx-auto max-w-2xl rounded-2xl border border-border p-10">
          <h2 className="mb-3 text-2xl font-bold">Not sure which plan?</h2>
          <p className="mb-6 text-muted">
            Book a free 15-minute call and we&apos;ll help you choose the right path.
          </p>
          <Button href="/contact" variant="outline">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
