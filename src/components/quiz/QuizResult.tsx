import Button from "@/components/ui/Button";

interface QuizResultProps {
  score: number;
  total: number;
  onRetry: () => void;
}

export default function QuizResult({ score, total, onRetry }: QuizResultProps) {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 60;

  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center">
      <div className="mb-4 text-5xl">{passed ? "🎉" : "💪"}</div>

      <h3 className="mb-2 text-xl font-bold">
        {passed ? "Great job!" : "Keep practicing!"}
      </h3>

      <p className="mb-1 text-3xl font-bold gradient-text">
        {score}/{total}
      </p>
      <p className="mb-6 text-sm text-muted">{percentage}% correct</p>

      <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <Button onClick={onRetry} variant="secondary">
        Retry Quiz
      </Button>
    </div>
  );
}
