import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { INSTRUCTOR_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the instructor behind Coding with AI Masterclass and learn about our mission.",
};

const credentials = [
  "15+ years in software development",
  "Full-stack developer and educator",
  "Early adopter of AI-assisted coding tools",
  "Taught 500+ students from diverse backgrounds",
  "Built production apps for startups and enterprises",
  "Passionate about making tech accessible to everyone",
];

export default function AboutPage() {
  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          Our Story
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          Making Coding <GradientText>Accessible</GradientText> to Everyone
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          We believe anyone can learn to build software. AI tools have made it
          possible — we&apos;re here to show you how.
        </p>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan text-6xl font-bold text-white">
              {INSTRUCTOR_NAME.split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h2 className="mb-2 text-2xl font-bold">{INSTRUCTOR_NAME}</h2>
            <p className="mb-4 text-accent-purple">
              Instructor & Course Creator
            </p>
            <ul className="space-y-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 text-accent-purple">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Card hover={false}>
              <h3 className="mb-3 text-lg font-semibold">The Origin</h3>
              <p className="text-sm leading-relaxed text-muted">
                After years of teaching traditional programming, I watched
                brilliant, motivated students struggle with syntax, tooling, and
                the steep learning curve. When AI coding tools emerged, I saw a
                revolution — suddenly, the barrier to entry dropped
                dramatically. I created this course to share that breakthrough
                with the world.
              </p>
            </Card>

            <Card hover={false}>
              <h3 className="mb-3 text-lg font-semibold">The Mission</h3>
              <p className="text-sm leading-relaxed text-muted">
                My mission is simple: prove that anyone — regardless of
                background, age, or experience — can learn to build real
                software using AI. Not toy projects. Not follow-along tutorials.
                Real, deployed applications that solve real problems.
              </p>
            </Card>

            <Card hover={false}>
              <h3 className="mb-3 text-lg font-semibold">The Approach</h3>
              <p className="text-sm leading-relaxed text-muted">
                This isn&apos;t about memorizing syntax. It&apos;s about
                learning to think like a builder, communicate effectively with
                AI, and understand enough about how code works to ship with
                confidence. We call it vibe coding because the vibe is:
                curiosity, experimentation, and building.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to start your <GradientText>journey?</GradientText>
        </h2>
        <p className="mb-8 text-muted">
          Join a community of learners building real things with AI.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/course" size="lg">
            Explore the Course
          </Button>
          <Button href="/tutoring" variant="secondary" size="lg">
            Book Tutoring
          </Button>
        </div>
      </Section>
    </>
  );
}
