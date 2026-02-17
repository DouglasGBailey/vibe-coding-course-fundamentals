import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section className="text-center">
      <div className="gradient-glow mx-auto max-w-3xl rounded-2xl border border-border p-12 md:p-16">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Start <GradientText>Building?</GradientText>
        </h2>
        <p className="mb-8 text-lg text-muted">
          Join hundreds of beginners who are already building real applications
          with AI. Your first project is just one prompt away.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/pricing" size="lg">
            Get Started Today
          </Button>
          <Button href="/course" variant="outline" size="lg">
            Preview the Curriculum
          </Button>
        </div>
      </div>
    </Section>
  );
}
