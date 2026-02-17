import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";

const steps = [
  {
    step: "01",
    title: "Choose Your Package",
    description:
      "Pick the tutoring package that fits your goals — from a single session to a full mentorship program.",
  },
  {
    step: "02",
    title: "Book a Time Slot",
    description:
      "Use the calendar below to find a time that works for you. All sessions are conducted via video call.",
  },
  {
    step: "03",
    title: "Prepare & Learn",
    description:
      "Before your session, share your goals and current projects. Your tutor will prepare a personalized plan.",
  },
  {
    step: "04",
    title: "Build Together",
    description:
      "Work through challenges side by side with screen sharing and live coding. Get answers to all your questions.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          How <GradientText>Tutoring Works</GradientText>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Personalized, one-on-one sessions designed to accelerate your learning
          and help you build real projects.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-lg font-bold text-white">
              {s.step}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
