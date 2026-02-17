import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import GradientText from "@/components/ui/GradientText";

const props = [
  {
    icon: "🚀",
    title: "AI-First Approach",
    description:
      "Skip the boring fundamentals grind. Learn to direct AI to write code for you from day one using Gemini CLI.",
  },
  {
    icon: "🎯",
    title: "Project-Based Learning",
    description:
      "Build real applications — landing pages, dashboards, and tools — not toy exercises that gather dust.",
  },
  {
    icon: "🧠",
    title: "Understand What You Build",
    description:
      "Don't just copy-paste. Learn to read, debug, and improve AI-generated code with confidence.",
  },
  {
    icon: "📱",
    title: "Full-Stack Skills",
    description:
      "From HTML to React to databases and deployment — cover the complete stack with AI assistance.",
  },
  {
    icon: "💬",
    title: "1-on-1 Tutoring Available",
    description:
      "Get personalized guidance with optional tutoring sessions tailored to your goals and pace.",
  },
  {
    icon: "✅",
    title: "Test Your Knowledge",
    description:
      "Interactive quizzes after every module ensure you actually understand the concepts, not just follow along.",
  },
];

export default function ValueProps() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Why This Course <GradientText>Works</GradientText>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Traditional coding courses have a 90% dropout rate. Our AI-first
          approach keeps you building — and learning — from the very first
          lesson.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {props.map((prop) => (
          <Card key={prop.title}>
            <span className="mb-4 block text-3xl">{prop.icon}</span>
            <h3 className="mb-2 text-lg font-semibold">{prop.title}</h3>
            <p className="text-sm text-muted">{prop.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
