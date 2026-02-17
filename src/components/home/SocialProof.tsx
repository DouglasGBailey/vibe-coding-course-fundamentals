import Section from "@/components/ui/Section";

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "30", label: "Interactive Quizzes" },
  { value: "6", label: "Comprehensive Modules" },
];

export default function SocialProof() {
  return (
    <Section className="border-y border-border py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold gradient-text md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
