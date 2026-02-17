import { clsx } from "clsx";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { tutoringPackages } from "@/data/pricing";

export default function TutoringPackages() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Tutoring <GradientText>Packages</GradientText>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tutoringPackages.map((pkg) => (
          <div
            key={pkg.name}
            className={clsx(
              "flex flex-col rounded-xl border p-8",
              pkg.highlighted
                ? "gradient-border bg-card shadow-xl shadow-accent-purple/10"
                : "border-border bg-card"
            )}
          >
            {pkg.highlighted && (
              <div className="mb-4 inline-flex self-start rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-3 py-1 text-xs font-bold text-white">
                Best Value
              </div>
            )}
            <h3 className="text-xl font-bold">{pkg.name}</h3>
            <div className="mt-3 mb-1">
              <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
            </div>
            <p className="mb-6 text-sm text-muted">
              {pkg.sessions} session{pkg.sessions > 1 ? "s" : ""} · {pkg.duration}
            </p>

            <ul className="mb-8 flex-1 space-y-3">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-accent-purple">✓</span>
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              href="/contact"
              variant={pkg.highlighted ? "primary" : "secondary"}
              className="w-full"
            >
              Book Now
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
