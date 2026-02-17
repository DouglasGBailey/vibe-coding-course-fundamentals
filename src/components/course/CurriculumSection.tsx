"use client";

import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import ModuleCard from "./ModuleCard";
import { modules } from "@/data/curriculum";
import { quizzes } from "@/data/quizData";

export default function CurriculumSection() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          The <GradientText>Curriculum</GradientText>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          7 comprehensive modules taking you from zero coding knowledge to
          building, deploying, and configuring professional AI workflows.
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((mod) => {
          const quiz = quizzes.find((q) => q.moduleId === mod.id);
          return (
            <ModuleCard
              key={mod.id}
              module={mod}
              questions={quiz?.questions ?? []}
            />
          );
        })}
      </div>
    </Section>
  );
}
