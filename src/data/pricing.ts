import { PricingTier, TutoringPackage } from "@/lib/types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Course Only",
    price: "$97",
    period: "one-time",
    description: "Full access to the self-paced course and all learning materials.",
    features: [
      "All 6 course modules",
      "30 interactive quizzes",
      "Project files & starter templates",
      "Community Discord access",
      "Lifetime access to course updates",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Course + Tutoring Bundle",
    price: "$247",
    period: "one-time",
    description: "Everything in Course Only plus personalized 1-on-1 tutoring sessions.",
    features: [
      "Everything in Course Only",
      "3× one-hour 1-on-1 tutoring sessions",
      "Personalized learning plan",
      "Code review on your projects",
      "Priority email support",
      "Certificate of completion",
    ],
    highlighted: true,
    cta: "Best Value",
  },
  {
    name: "Premium Mentorship",
    price: "$497",
    period: "one-time",
    description: "The ultimate package for serious learners who want hands-on mentorship.",
    features: [
      "Everything in Bundle",
      "8× one-hour 1-on-1 tutoring sessions",
      "Custom project guidance",
      "Portfolio review & career advice",
      "LinkedIn recommendation",
      "1 year priority support",
    ],
    highlighted: false,
    cta: "Go Premium",
  },
];

export const tutoringPackages: TutoringPackage[] = [
  {
    name: "Starter",
    sessions: 1,
    duration: "60 min",
    price: "$75",
    features: [
      "One-hour video session",
      "Screen sharing & live coding",
      "Session recording provided",
      "Follow-up notes & resources",
    ],
    highlighted: false,
  },
  {
    name: "Accelerator",
    sessions: 4,
    duration: "60 min each",
    price: "$249",
    features: [
      "Four one-hour sessions",
      "Personalized curriculum",
      "Code review between sessions",
      "Priority scheduling",
      "Email support between sessions",
    ],
    highlighted: true,
  },
  {
    name: "Intensive",
    sessions: 8,
    duration: "60 min each",
    price: "$449",
    features: [
      "Eight one-hour sessions",
      "Custom project mentorship",
      "Unlimited email support",
      "Portfolio & career guidance",
      "LinkedIn recommendation",
    ],
    highlighted: false,
  },
];
