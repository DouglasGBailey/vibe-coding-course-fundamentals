import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import HowItWorks from "@/components/tutoring/HowItWorks";
import TutoringPackages from "@/components/tutoring/TutoringPackages";
import CalendlyEmbed from "@/components/tutoring/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Tutoring",
  description:
    "Book personalized 1-on-1 tutoring sessions to accelerate your vibe coding journey.",
};

export default function TutoringPage() {
  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          1-on-1 Sessions
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          Personalized <GradientText>Tutoring</GradientText> That Gets Results
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          Work directly with an experienced instructor who will guide you
          through challenges, review your code, and help you build projects
          tailored to your goals.
        </p>
      </Section>

      <HowItWorks />
      <TutoringPackages />

      <Section>
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Book Your <GradientText>Session</GradientText>
          </h2>
          <p className="text-muted">
            Choose a time that works for you. All sessions are conducted via video call.
          </p>
        </div>
        <CalendlyEmbed />
      </Section>
    </>
  );
}
