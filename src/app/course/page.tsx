import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import CurriculumSection from "@/components/course/CurriculumSection";
import OutcomesSection from "@/components/course/OutcomesSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Course",
  description:
    "Explore the 6-module curriculum covering AI-powered coding from beginner to deployment. Includes interactive quizzes.",
};

export default function CoursePage() {
  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          6 Modules · 17 Hours · 30 Quizzes
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          The Complete <GradientText>Vibe Coding</GradientText> Curriculum
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          A structured path from complete beginner to confident builder. Each
          module includes hands-on projects and interactive quizzes to test your
          understanding.
        </p>
      </Section>

      <CurriculumSection />
      <OutcomesSection />

      <Section className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to get started?</h2>
        <p className="mb-8 text-muted">
          Choose a plan that works for you and start building today.
        </p>
        <Button href="/pricing" size="lg">
          View Pricing
        </Button>
      </Section>
    </>
  );
}
