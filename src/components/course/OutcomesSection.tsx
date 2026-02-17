import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Card from "@/components/ui/Card";

const outcomes = [
  {
    icon: "💻",
    title: "Build Full Web Applications",
    description:
      "Create responsive, modern web apps from scratch using AI tools — landing pages, dashboards, portfolios, and more.",
  },
  {
    icon: "🤖",
    title: "Master AI-Assisted Development",
    description:
      "Write effective prompts, iterate confidently, and leverage Gemini CLI to 10x your development speed.",
  },
  {
    icon: "🔧",
    title: "Debug & Customize with Confidence",
    description:
      "Read, understand, and modify AI-generated code. You won't just build — you'll understand what you build.",
  },
  {
    icon: "🚀",
    title: "Deploy to the Real World",
    description:
      "Take your projects live with Vercel, connect databases, and share your work with the world.",
  },
];

export default function OutcomesSection() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          By the End, You&apos;ll Be Able To{" "}
          <GradientText>...</GradientText>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {outcomes.map((outcome) => (
          <Card key={outcome.title}>
            <span className="mb-4 block text-3xl">{outcome.icon}</span>
            <h3 className="mb-2 text-lg font-semibold">{outcome.title}</h3>
            <p className="text-sm text-muted">{outcome.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
