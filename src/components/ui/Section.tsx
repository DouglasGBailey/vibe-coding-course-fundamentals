import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx("px-4 py-20 md:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
