"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Module, QuizQuestion } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import QuizSection from "@/components/quiz/QuizSection";

interface ModuleCardProps {
  module: Module;
  questions: QuizQuestion[];
}

export default function ModuleCard({ module, questions }: ModuleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card transition-colors hover:bg-card-hover">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-4 p-6 text-left"
      >
        <span className="mt-1 text-3xl">{module.icon}</span>
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge variant="accent">Module {module.id}</Badge>
            <Badge>{module.duration}</Badge>
          </div>
          <h3 className="mb-1 text-lg font-semibold">{module.title}</h3>
          <p className="text-sm text-muted">{module.description}</p>
        </div>
        <span
          className={clsx(
            "mt-2 shrink-0 text-xl text-muted transition-transform duration-200",
            expanded && "rotate-180"
          )}
        >
          ▼
        </span>
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          expanded ? "max-h-[2000px]" : "max-h-0"
        )}
      >
        <div className="border-t border-border px-6 pb-6 pt-4">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            What You&apos;ll Learn
          </h4>
          <ul className="mb-4 space-y-2">
            {module.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-accent-purple">✓</span>
                {topic}
              </li>
            ))}
          </ul>

          <QuizSection questions={questions} moduleTitle={module.title} />
        </div>
      </div>
    </div>
  );
}
