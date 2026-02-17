"use client";

import { useState } from "react";
import { QuizQuestion as QuizQuestionType } from "@/lib/types";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import Button from "@/components/ui/Button";

interface QuizSectionProps {
  questions: QuizQuestionType[];
  moduleTitle: string;
}

type QuizState = "idle" | "in-progress" | "complete";

export default function QuizSection({ questions, moduleTitle }: QuizSectionProps) {
  const [state, setState] = useState<QuizState>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const score = answers.reduce<number>(
    (acc, ans, i) => acc + (ans === questions[i].correctAnswer ? 1 : 0),
    0
  );

  const handleStart = () => {
    setState("in-progress");
    setCurrentIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
  };

  const handleSelect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowResult(false);
    } else {
      setState("complete");
    }
  };

  if (state === "idle") {
    return (
      <div className="mt-6 rounded-xl border border-border bg-card/50 p-6 text-center">
        <p className="mb-4 text-muted">
          Test your knowledge of <span className="font-medium text-foreground">{moduleTitle}</span> with
          {" "}{questions.length} questions
        </p>
        <Button onClick={handleStart} variant="outline" size="sm">
          Start Quiz
        </Button>
      </div>
    );
  }

  if (state === "complete") {
    return (
      <div className="mt-6">
        <QuizResult score={score} total={questions.length} onRetry={handleStart} />
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-border bg-card/50 p-6">
      <div className="mb-4 flex items-center justify-between text-sm text-muted">
        <span>
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span>{score} correct so far</span>
      </div>

      <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <QuizQuestion
        question={questions[currentIndex]}
        selectedAnswer={answers[currentIndex]}
        onSelect={handleSelect}
        showResult={showResult}
      />

      {showResult && (
        <div className="mt-4 text-right">
          <Button onClick={handleNext} size="sm">
            {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        </div>
      )}
    </div>
  );
}
