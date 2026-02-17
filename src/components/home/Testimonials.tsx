import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import GradientText from "@/components/ui/GradientText";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          What Our <GradientText>Students Say</GradientText>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Real results from real beginners who took the leap into AI-powered
          coding.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-sm font-bold text-white">
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              &ldquo;{t.quote}&rdquo;
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
