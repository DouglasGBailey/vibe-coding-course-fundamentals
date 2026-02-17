import { Module } from "@/lib/types";

export const modules: Module[] = [
  {
    id: 1,
    title: "Getting Started with AI Coding",
    description:
      "Set up your development environment, install Gemini CLI, and write your first AI-generated code. Learn the mindset shift from traditional coding to vibe coding.",
    topics: [
      "What is vibe coding and why it matters",
      "Installing Node.js, VS Code & Gemini CLI",
      "Your first AI prompt — generating a webpage",
      "Understanding the AI coding workflow",
      "File structure basics: HTML, CSS, JavaScript",
    ],
    duration: "2 hours",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Prompt Engineering for Code",
    description:
      "Master the art of communicating with AI to get exactly the code you need. Learn prompt patterns, iteration strategies, and how to break complex tasks into manageable pieces.",
    topics: [
      "Anatomy of an effective coding prompt",
      "Iterative refinement: building in stages",
      "Context setting and constraint specification",
      "Debugging prompts: when AI gets it wrong",
      "Building a personal prompt library",
    ],
    duration: "2.5 hours",
    icon: "🎯",
  },
  {
    id: 3,
    title: "Building with HTML & CSS",
    description:
      "Use Gemini CLI to generate and customize beautiful, responsive web pages. Understand layout systems, styling patterns, and how to direct AI for pixel-perfect results.",
    topics: [
      "HTML structure and semantic elements",
      "CSS layouts: Flexbox and Grid with AI",
      "Responsive design with Tailwind CSS",
      "Component-based styling patterns",
      "Accessibility fundamentals",
    ],
    duration: "3 hours",
    icon: "🎨",
  },
  {
    id: 4,
    title: "JavaScript & Interactivity",
    description:
      "Add life to your pages with JavaScript. Learn to prompt AI for interactive features, handle user events, and manage application state.",
    topics: [
      "JavaScript fundamentals through AI generation",
      "DOM manipulation and event handling",
      "Working with APIs and fetching data",
      "Form validation and user input",
      "Error handling and debugging strategies",
    ],
    duration: "3 hours",
    icon: "⚡",
  },
  {
    id: 5,
    title: "React & Modern Frameworks",
    description:
      "Level up to modern web development with React. Use AI to build component-based applications, manage state, and create single-page apps.",
    topics: [
      "React fundamentals: components and JSX",
      "State management with useState and useEffect",
      "Building reusable component libraries",
      "Routing and navigation with Next.js",
      "Styling with Tailwind in React projects",
    ],
    duration: "3.5 hours",
    icon: "⚛️",
  },
  {
    id: 6,
    title: "Deployment & Real-World Projects",
    description:
      "Take your projects live. Learn to deploy with Vercel, set up databases, add authentication, and build a portfolio of projects that demonstrate your skills.",
    topics: [
      "Deploying to Vercel and Netlify",
      "Environment variables and configuration",
      "Database basics with Supabase",
      "Authentication and user management",
      "Building your developer portfolio",
    ],
    duration: "3 hours",
    icon: "🌐",
  },
];
