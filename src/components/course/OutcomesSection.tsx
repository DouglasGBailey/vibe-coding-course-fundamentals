"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";

const outcomes = [
  {
    icon: "💻",
    title: "Build Full Web Applications",
    description:
      "Create responsive, modern web apps from scratch using AI tools — landing pages, dashboards, portfolios, and more.",
    details: {
      subtitle: "From blank screen to live application",
      paragraphs: [
        "You'll learn to build complete, production-quality web applications using AI-assisted development. This isn't about toy projects — you'll create real tools that solve real problems.",
        "By the end of the course, you'll have built multiple projects including a personal portfolio, a responsive business landing page, and an interactive web application with data persistence.",
      ],
      skills: [
        "Responsive layouts with Tailwind CSS",
        "Component-based architecture with React",
        "Form handling and user input validation",
        "API integration and data fetching",
        "State management for interactive features",
      ],
      relatedModules: ["Module 3: HTML & CSS", "Module 4: JavaScript", "Module 5: React"],
    },
  },
  {
    icon: "🤖",
    title: "Master AI-Assisted Development",
    description:
      "Write effective prompts, iterate confidently, and leverage Gemini CLI to 10x your development speed.",
    details: {
      subtitle: "The skill that multiplies all other skills",
      paragraphs: [
        "AI-assisted development isn't just about generating code — it's about learning to communicate intent clearly, break complex problems into manageable pieces, and iterate efficiently toward the solution you need.",
        "You'll build a personal prompt library, master debugging workflows with AI, and learn when to let AI lead vs. when to take manual control. These meta-skills make you faster at everything.",
      ],
      skills: [
        "Crafting effective coding prompts",
        "Iterative refinement strategies",
        "Debugging with AI assistance",
        "Building and maintaining a prompt library",
        "Configuring Gemini CLI for your workflow",
      ],
      relatedModules: ["Module 2: Prompt Engineering", "Module 7: Gemini CLI Settings"],
    },
  },
  {
    icon: "🔧",
    title: "Debug & Customize with Confidence",
    description:
      "Read, understand, and modify AI-generated code. You won't just build — you'll understand what you build.",
    details: {
      subtitle: "Understanding is the real superpower",
      paragraphs: [
        "Anyone can copy-paste AI output. The real value is understanding what the code does, why it works, and how to fix it when it doesn't. This course ensures you develop genuine comprehension alongside building speed.",
        "You'll learn to read error messages, use browser developer tools, trace code execution flow, and make targeted modifications to AI-generated code — turning you from a passive consumer into an active builder.",
      ],
      skills: [
        "Reading and understanding generated code",
        "Using browser DevTools effectively",
        "Interpreting error messages and stack traces",
        "Making targeted code modifications",
        "Testing and validating changes",
      ],
      relatedModules: ["Module 4: JavaScript", "Module 2: Prompt Engineering"],
    },
  },
  {
    icon: "🚀",
    title: "Deploy to the Real World",
    description:
      "Take your projects live with Vercel, connect databases, and share your work with the world.",
    details: {
      subtitle: "Your work deserves an audience",
      paragraphs: [
        "Building locally is great for learning, but the magic happens when your projects go live. You'll learn the full deployment pipeline — from pushing code to GitHub, to deploying on Vercel, to connecting a custom domain.",
        "You'll also set up databases with Supabase, manage environment variables securely, and configure continuous deployment so every git push automatically updates your live site.",
      ],
      skills: [
        "Git version control and GitHub workflows",
        "Deploying to Vercel with automatic CI/CD",
        "Database setup with Supabase",
        "Environment variable management",
        "Custom domain configuration",
      ],
      relatedModules: ["Module 6: Deployment", "Module 7: Gemini CLI Settings"],
    },
  },
];

export default function OutcomesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? outcomes[activeIndex] : null;

  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          By the End, You&apos;ll Be Able To{" "}
          <GradientText>...</GradientText>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {outcomes.map((outcome, index) => (
          <button
            key={outcome.title}
            onClick={() => setActiveIndex(index)}
            className="text-left"
          >
            <Card className="h-full cursor-pointer">
              <span className="mb-4 block text-3xl">{outcome.icon}</span>
              <h3 className="mb-2 text-lg font-semibold">{outcome.title}</h3>
              <p className="text-sm text-muted">{outcome.description}</p>
              <p className="mt-4 text-xs font-medium text-accent-purple">
                Click for details &rarr;
              </p>
            </Card>
          </button>
        ))}
      </div>

      <Modal open={activeIndex !== null} onClose={() => setActiveIndex(null)}>
        {active && (
          <div>
            <span className="mb-4 block text-4xl">{active.icon}</span>
            <h3 className="mb-1 text-xl font-bold">{active.title}</h3>
            <p className="mb-5 text-sm text-accent-purple">
              {active.details.subtitle}
            </p>

            {active.details.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}

            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Skills You&apos;ll Gain
            </h4>
            <ul className="mb-6 space-y-2">
              {active.details.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-0.5 text-accent-purple">✓</span>
                  {skill}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {active.details.relatedModules.map((mod) => (
                <Badge key={mod} variant="accent">
                  {mod}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
