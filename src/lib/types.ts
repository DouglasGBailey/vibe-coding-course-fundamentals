export interface Module {
  id: number;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  icon: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ModuleQuiz {
  moduleId: number;
  questions: QuizQuestion[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TutoringPackage {
  name: string;
  sessions: number;
  duration: string;
  price: string;
  features: string[];
  highlighted: boolean;
}
