import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";

const features = [
  { name: "6 Course Modules", course: true, bundle: true, premium: true },
  { name: "30 Interactive Quizzes", course: true, bundle: true, premium: true },
  { name: "Project Files & Templates", course: true, bundle: true, premium: true },
  { name: "Community Discord Access", course: true, bundle: true, premium: true },
  { name: "Lifetime Course Updates", course: true, bundle: true, premium: true },
  { name: "1-on-1 Tutoring Sessions", course: false, bundle: "3 sessions", premium: "8 sessions" },
  { name: "Personalized Learning Plan", course: false, bundle: true, premium: true },
  { name: "Code Review", course: false, bundle: true, premium: true },
  { name: "Priority Support", course: false, bundle: true, premium: true },
  { name: "Certificate of Completion", course: false, bundle: true, premium: true },
  { name: "Custom Project Guidance", course: false, bundle: false, premium: true },
  { name: "Portfolio & Career Advice", course: false, bundle: false, premium: true },
  { name: "LinkedIn Recommendation", course: false, bundle: false, premium: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-accent-purple">{value}</span>;
  }
  return value ? (
    <span className="text-success">✓</span>
  ) : (
    <span className="text-muted">—</span>
  );
}

export default function PricingComparison() {
  return (
    <Section>
      <h2 className="mb-8 text-center text-2xl font-bold">
        Detailed <GradientText>Comparison</GradientText>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-4 pr-4 text-left font-medium text-muted">Feature</th>
              <th className="px-4 py-4 text-center font-medium">Course</th>
              <th className="px-4 py-4 text-center font-medium text-accent-purple">Bundle</th>
              <th className="px-4 py-4 text-center font-medium">Premium</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.name} className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">{f.name}</td>
                <td className="px-4 py-3 text-center">
                  <Cell value={f.course} />
                </td>
                <td className="px-4 py-3 text-center">
                  <Cell value={f.bundle} />
                </td>
                <td className="px-4 py-3 text-center">
                  <Cell value={f.premium} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
