import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <Section className="py-28 text-center md:py-36">
      <Badge variant="accent" className="mb-6">
        No coding experience required
      </Badge>

      <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
        Learn to Build Real Apps with{" "}
        <GradientText>AI-Powered Coding</GradientText>
      </h1>

      <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
        Master vibe coding with Gemini CLI and go from complete beginner to
        building and deploying your own web applications — no prior experience
        needed.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="/course" size="lg">
          Explore the Course
        </Button>
        <Button href="/pricing" variant="secondary" size="lg">
          View Pricing
        </Button>
      </div>

      {/* Terminal mockup */}
      <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-error/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-success/60" />
          <span className="ml-2 text-xs text-muted">terminal</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed">
          <p className="text-muted">
            <span className="text-accent-cyan">$</span> gemini
          </p>
          <p className="mt-2 text-muted">
            <span className="text-accent-purple">&gt;</span>{" "}
            <span className="text-foreground">
              Build me a responsive portfolio website with a dark theme,
              contact form, and project gallery
            </span>
          </p>
          <p className="mt-2 text-success">
            Creating your project structure...
          </p>
          <p className="text-success">
            Generated 12 files across 4 directories
          </p>
          <p className="text-success">
            Your site is running at localhost:3000
          </p>
        </div>
      </div>
    </Section>
  );
}
