import { clsx } from "clsx";
import { PricingTier } from "@/lib/types";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-xl border p-8",
        tier.highlighted
          ? "gradient-border bg-card scale-[1.02] shadow-xl shadow-accent-purple/10"
          : "border-border bg-card"
      )}
    >
      {tier.highlighted && (
        <div className="mb-4 inline-flex self-start rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-3 py-1 text-xs font-bold text-white">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold">{tier.name}</h3>

      <div className="mt-4 mb-2">
        <span className="text-4xl font-bold gradient-text">{tier.price}</span>
        <span className="ml-2 text-sm text-muted">{tier.period}</span>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-muted">{tier.description}</p>

      <ul className="mb-8 flex-1 space-y-4">
        {tier.features.map((feature, index) => (
          <li
            key={feature}
            className={clsx(
              "flex items-start gap-3 text-[15px] leading-snug",
              index === 0 && tier.features[0].startsWith("Everything") && "pb-3 border-b border-border"
            )}
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-purple/15 text-xs text-accent-purple">
              ✓
            </span>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={tier.highlighted ? "primary" : "secondary"}
        className="w-full"
      >
        {tier.cta}
      </Button>
    </div>
  );
}
