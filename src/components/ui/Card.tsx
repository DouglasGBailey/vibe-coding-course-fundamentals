import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-border bg-card p-6",
        hover && "transition-colors duration-200 hover:bg-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
