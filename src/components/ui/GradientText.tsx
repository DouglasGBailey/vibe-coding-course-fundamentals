import { clsx } from "clsx";

interface GradientTextProps {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}

export default function GradientText({
  children,
  as: Tag = "span",
  className,
}: GradientTextProps) {
  return <Tag className={clsx("gradient-text", className)}>{children}</Tag>;
}
