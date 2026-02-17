"use client";

import { clsx } from "clsx";
import { QuizQuestion as QuizQuestionType } from "@/lib/types";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
  showResult: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onSelect,
  showResult,
}: QuizQuestionProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{question.question}</p>

      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelect(index)}
              disabled={showResult}
              className={clsx(
                "w-full rounded-lg border p-4 text-left text-sm transition-all",
                !showResult && !isSelected && "border-border hover:border-accent-purple/50 hover:bg-card-hover",
                !showResult && isSelected && "border-accent-purple bg-accent-purple/10",
                showResult && isCorrect && "border-success bg-success/10 text-success",
                showResult && isSelected && !isCorrect && "border-error bg-error/10 text-error",
                showResult && !isSelected && !isCorrect && "border-border opacity-50",
                showResult ? "cursor-default" : "cursor-pointer"
              )}
            >
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={clsx(
            "rounded-lg p-4 text-sm",
            selectedAnswer === question.correctAnswer
              ? "bg-success/10 text-success"
              : "bg-error/10 text-error"
          )}
        >
          <p className="mb-1 font-semibold">
            {selectedAnswer === question.correctAnswer
              ? "Correct!"
              : `Incorrect — the answer is ${String.fromCharCode(65 + question.correctAnswer)}`}
          </p>
          <p className="opacity-90">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
