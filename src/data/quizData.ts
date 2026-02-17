import { ModuleQuiz } from "@/lib/types";

export const quizzes: ModuleQuiz[] = [
  {
    moduleId: 1,
    questions: [
      {
        id: 1,
        question: "What is 'vibe coding'?",
        options: [
          "Writing code while listening to music",
          "Using AI tools to generate and iterate on code through natural language prompts",
          "A coding style that focuses on aesthetics over function",
          "Programming in a collaborative pair setting",
        ],
        correctAnswer: 1,
        explanation:
          "Vibe coding is an approach where you use AI tools like Gemini CLI to write code through natural language conversations, allowing you to build software by describing what you want rather than writing every line manually.",
      },
      {
        id: 2,
        question: "Which tool do we use as our primary AI coding assistant in this course?",
        options: [
          "ChatGPT",
          "GitHub Copilot",
          "Gemini CLI",
          "Claude Code",
        ],
        correctAnswer: 2,
        explanation:
          "This course is built around Gemini CLI, Google's command-line AI tool that integrates directly into your development workflow for generating, editing, and debugging code.",
      },
      {
        id: 3,
        question: "What is the minimum software you need to start vibe coding?",
        options: [
          "A supercomputer with 64GB RAM",
          "A code editor, Node.js, and Gemini CLI",
          "Python, Docker, and Kubernetes",
          "Only a web browser",
        ],
        correctAnswer: 1,
        explanation:
          "To get started, you just need a code editor (like VS Code), Node.js for running JavaScript, and Gemini CLI for AI-powered code generation. No expensive hardware required!",
      },
      {
        id: 4,
        question: "What file type creates the structure of a web page?",
        options: ["CSS", "JavaScript", "HTML", "JSON"],
        correctAnswer: 2,
        explanation:
          "HTML (HyperText Markup Language) defines the structure and content of web pages. CSS handles styling, and JavaScript adds interactivity.",
      },
      {
        id: 5,
        question: "What is the AI coding workflow described in this module?",
        options: [
          "Write code → test → debug → deploy",
          "Describe what you want → AI generates code → review → iterate",
          "Copy code from Stack Overflow → paste → hope it works",
          "Design mockup → hire developer → deploy",
        ],
        correctAnswer: 1,
        explanation:
          "The AI coding workflow involves describing your goal in natural language, letting AI generate the code, reviewing the output, and iterating with follow-up prompts until you get the desired result.",
      },
    ],
  },
  {
    moduleId: 2,
    questions: [
      {
        id: 6,
        question: "What makes a coding prompt 'effective'?",
        options: [
          "Making it as short as possible",
          "Using as much technical jargon as possible",
          "Being specific about the desired outcome, context, and constraints",
          "Always asking for the complete application at once",
        ],
        correctAnswer: 2,
        explanation:
          "Effective prompts clearly specify what you want, provide relevant context (like technology stack and style), and set constraints (like responsive design or accessibility). Specificity leads to better AI output.",
      },
      {
        id: 7,
        question: "What is 'iterative refinement' in prompt engineering?",
        options: [
          "Asking the same question multiple times",
          "Building your project in stages through a series of focused prompts",
          "Letting the AI decide the project architecture",
          "Writing all your prompts before starting to code",
        ],
        correctAnswer: 1,
        explanation:
          "Iterative refinement means building your project step by step — starting with a basic structure, then adding features, styling, and functionality through follow-up prompts. This gives you more control and better results than trying to generate everything at once.",
      },
      {
        id: 8,
        question: "When AI-generated code has a bug, what should you do first?",
        options: [
          "Start over from scratch",
          "Switch to a different AI tool",
          "Describe the bug to the AI and ask it to fix it with context about what went wrong",
          "Manually rewrite the entire file",
        ],
        correctAnswer: 2,
        explanation:
          "When you encounter a bug, the best approach is to describe the problem to the AI with specific details — what you expected, what happened instead, and any error messages. The AI can then generate a targeted fix.",
      },
      {
        id: 9,
        question: "Why is context setting important in coding prompts?",
        options: [
          "It makes the prompt longer, which AI prefers",
          "It helps the AI understand the technology stack, coding style, and project requirements",
          "It is not important — AI figures everything out on its own",
          "It only matters for backend development",
        ],
        correctAnswer: 1,
        explanation:
          "Context setting tells the AI about your project's tech stack (React, Tailwind, etc.), coding conventions, and existing code structure. This ensures generated code fits seamlessly into your project rather than being generic.",
      },
      {
        id: 10,
        question: "What is a 'prompt library'?",
        options: [
          "A JavaScript library for handling user input",
          "A collection of reusable, tested prompts for common coding tasks",
          "An AI model trained on prompt data",
          "A database of all prompts ever written",
        ],
        correctAnswer: 1,
        explanation:
          "A prompt library is your personal collection of prompts that have worked well for common tasks — like generating a responsive navbar, setting up a form, or creating an API endpoint. It saves time and ensures consistent results.",
      },
    ],
  },
  {
    moduleId: 3,
    questions: [
      {
        id: 11,
        question: "What does 'semantic HTML' mean?",
        options: [
          "HTML that uses only div elements",
          "HTML that uses meaningful tags like <header>, <nav>, and <main> to describe content purpose",
          "HTML written by AI tools",
          "HTML that includes inline styles",
        ],
        correctAnswer: 1,
        explanation:
          "Semantic HTML uses elements that clearly describe their purpose — like <header> for page headers, <nav> for navigation, and <article> for content. This improves accessibility, SEO, and code readability.",
      },
      {
        id: 12,
        question: "What CSS layout system is best for one-dimensional layouts (rows OR columns)?",
        options: ["CSS Grid", "Flexbox", "Float", "Table layout"],
        correctAnswer: 1,
        explanation:
          "Flexbox excels at one-dimensional layouts — arranging items in a single row or column. CSS Grid is better for two-dimensional layouts where you need control over both rows and columns simultaneously.",
      },
      {
        id: 13,
        question: "What is Tailwind CSS?",
        options: [
          "A JavaScript framework for building UIs",
          "A utility-first CSS framework that lets you style elements using predefined classes",
          "A CSS preprocessor like SASS",
          "A CSS animation library",
        ],
        correctAnswer: 1,
        explanation:
          "Tailwind CSS is a utility-first framework where you apply styling through predefined classes like 'flex', 'p-4', 'text-blue-500' directly in your HTML. It pairs exceptionally well with AI code generation.",
      },
      {
        id: 14,
        question: "What does 'responsive design' mean?",
        options: [
          "A website that loads quickly",
          "A website that adapts its layout to different screen sizes (mobile, tablet, desktop)",
          "A website that responds to user clicks",
          "A website built with React",
        ],
        correctAnswer: 1,
        explanation:
          "Responsive design ensures your website looks and functions well on all screen sizes — from mobile phones to large desktop monitors. This is typically achieved using CSS media queries or Tailwind's responsive prefixes (sm:, md:, lg:).",
      },
      {
        id: 15,
        question: "Why is accessibility important in web development?",
        options: [
          "It only matters for government websites",
          "It ensures people with disabilities can use your website, and it improves SEO",
          "It makes websites load faster",
          "It is only a legal requirement, not a technical one",
        ],
        correctAnswer: 1,
        explanation:
          "Web accessibility ensures everyone, including people using screen readers or keyboard navigation, can use your site. It also improves SEO (search engines reward accessible sites) and is a legal requirement in many jurisdictions.",
      },
    ],
  },
  {
    moduleId: 4,
    questions: [
      {
        id: 16,
        question: "What is the DOM in web development?",
        options: [
          "A JavaScript library",
          "The Document Object Model — a tree-like representation of HTML that JavaScript can manipulate",
          "A type of database",
          "A CSS layout method",
        ],
        correctAnswer: 1,
        explanation:
          "The DOM (Document Object Model) is the browser's representation of your HTML page as a tree of objects. JavaScript can read and modify the DOM to change what users see and interact with on the page.",
      },
      {
        id: 17,
        question: "What does an API do in web development?",
        options: [
          "Styles web page elements",
          "Allows different software systems to communicate and exchange data",
          "Compiles JavaScript code",
          "Creates database tables",
        ],
        correctAnswer: 1,
        explanation:
          "An API (Application Programming Interface) allows different systems to communicate. In web development, you typically use APIs to fetch data from servers — like getting weather data, user information, or product listings.",
      },
      {
        id: 18,
        question: "What is the purpose of form validation?",
        options: [
          "To make forms look prettier",
          "To ensure user input meets required criteria before submission",
          "To speed up page loading",
          "To encrypt form data",
        ],
        correctAnswer: 1,
        explanation:
          "Form validation checks that user input is correct and complete before it's sent to a server — like ensuring an email address has the right format, required fields are filled, or a password meets strength requirements.",
      },
      {
        id: 19,
        question: "What is 'event handling' in JavaScript?",
        options: [
          "Scheduling code to run at a specific date",
          "Writing code that responds to user interactions like clicks, typing, and scrolling",
          "Handling errors in API calls",
          "Managing browser history",
        ],
        correctAnswer: 1,
        explanation:
          "Event handling means writing code that responds to user actions — button clicks, form submissions, mouse movements, keyboard presses, etc. It's what makes websites interactive rather than static.",
      },
      {
        id: 20,
        question: "What is a good strategy for debugging AI-generated JavaScript?",
        options: [
          "Delete everything and start over",
          "Use console.log to inspect values, read error messages carefully, and describe the issue back to the AI",
          "Ignore errors and hope they go away",
          "Only use AI-generated code that has no bugs",
        ],
        correctAnswer: 1,
        explanation:
          "Effective debugging combines using console.log() to check values, reading browser error messages carefully, and describing the specific issue back to the AI with context. This systematic approach resolves bugs much faster than guessing.",
      },
    ],
  },
  {
    moduleId: 5,
    questions: [
      {
        id: 21,
        question: "What is a React 'component'?",
        options: [
          "A CSS class",
          "A reusable piece of UI that can accept data and render HTML",
          "A type of JavaScript variable",
          "A server-side script",
        ],
        correctAnswer: 1,
        explanation:
          "A React component is a reusable building block of UI. It's a function that returns JSX (HTML-like syntax) and can accept 'props' (data) to customize what it renders. Components let you build complex UIs from simple, isolated pieces.",
      },
      {
        id: 22,
        question: "What does the useState hook do in React?",
        options: [
          "Fetches data from an API",
          "Lets a component remember and update values that trigger re-renders when changed",
          "Handles routing between pages",
          "Applies CSS styles to components",
        ],
        correctAnswer: 1,
        explanation:
          "useState is a React hook that creates a piece of 'state' — a value that the component remembers between renders. When state changes (via the setter function), React automatically re-renders the component to reflect the new value.",
      },
      {
        id: 23,
        question: "What is JSX?",
        options: [
          "A new programming language",
          "A syntax extension that lets you write HTML-like code inside JavaScript",
          "A CSS framework",
          "A package manager",
        ],
        correctAnswer: 1,
        explanation:
          "JSX is a syntax extension for JavaScript that looks like HTML but has the full power of JavaScript. It's what you write inside React components to describe what the UI should look like. It gets compiled to regular JavaScript function calls.",
      },
      {
        id: 24,
        question: "What is Next.js?",
        options: [
          "A CSS library",
          "A React framework that adds routing, server-side rendering, and other production features",
          "A JavaScript testing tool",
          "An alternative to Node.js",
        ],
        correctAnswer: 1,
        explanation:
          "Next.js is a React framework that handles routing (pages), server-side rendering, static generation, API routes, and many other features you'd need for a production React application. It's the most popular way to build React apps today.",
      },
      {
        id: 25,
        question: "Why do Tailwind CSS and AI-generated code work well together?",
        options: [
          "Because Tailwind is the only CSS framework AI understands",
          "Because Tailwind's utility classes are descriptive and predictable, making AI output more consistent and correct",
          "Because Tailwind automatically fixes AI coding mistakes",
          "They don't work well together",
        ],
        correctAnswer: 1,
        explanation:
          "Tailwind's utility class approach is highly predictable — 'text-blue-500 p-4 flex items-center' clearly describes the styling. AI models can generate accurate Tailwind code because the class names directly describe their effect, reducing ambiguity.",
      },
    ],
  },
  {
    moduleId: 6,
    questions: [
      {
        id: 26,
        question: "What is Vercel primarily used for?",
        options: [
          "Writing code",
          "Deploying and hosting web applications with automatic CI/CD",
          "Designing user interfaces",
          "Managing databases",
        ],
        correctAnswer: 1,
        explanation:
          "Vercel is a cloud platform optimized for frontend frameworks, especially Next.js. It provides automatic deployments from Git, preview URLs for pull requests, and a global CDN — making it the easiest way to take your project live.",
      },
      {
        id: 27,
        question: "What are environment variables used for?",
        options: [
          "Styling web pages",
          "Storing sensitive configuration like API keys and database URLs outside of your code",
          "Creating animations",
          "Optimizing images",
        ],
        correctAnswer: 1,
        explanation:
          "Environment variables store configuration that varies between environments (development, staging, production) — like API keys, database URLs, and secrets. They keep sensitive data out of your code and version control.",
      },
      {
        id: 28,
        question: "What is Supabase?",
        options: [
          "A CSS framework",
          "An open-source Firebase alternative providing a database, authentication, and API",
          "A JavaScript testing library",
          "A code editor",
        ],
        correctAnswer: 1,
        explanation:
          "Supabase is an open-source backend platform that gives you a PostgreSQL database, authentication, real-time subscriptions, and auto-generated APIs. It's a popular choice for AI-assisted development because of its straightforward setup.",
      },
      {
        id: 29,
        question: "Why is a portfolio important for developers?",
        options: [
          "It's required by law",
          "It demonstrates your skills through real projects, which is more convincing than a resume alone",
          "Employers won't hire without a portfolio certification",
          "It replaces the need for any other skills",
        ],
        correctAnswer: 1,
        explanation:
          "A portfolio showcases your actual work — the projects you've built, the problems you've solved, and your design sensibility. For career changers and self-taught developers, a strong portfolio is often more valuable than formal credentials.",
      },
      {
        id: 30,
        question: "What is CI/CD in the context of deployment?",
        options: [
          "A programming language",
          "Continuous Integration / Continuous Deployment — automatic testing and deploying of code changes",
          "A type of database",
          "Client Interface / Client Design",
        ],
        correctAnswer: 1,
        explanation:
          "CI/CD automates the process of testing and deploying your code. When you push changes to Git, CI runs your tests automatically, and CD deploys the new version if tests pass. Platforms like Vercel handle this out of the box.",
      },
    ],
  },
  {
    moduleId: 7,
    questions: [
      {
        id: 31,
        question: "What is the GEMINI.md file used for?",
        options: [
          "It's the README for your project",
          "A settings file that configures Gemini CLI's behaviour, code standards, and permissions for your project",
          "A log file that records all AI-generated code",
          "A licence file required by Google",
        ],
        correctAnswer: 1,
        explanation:
          "GEMINI.md is a project-level configuration file where you define code quality standards, file operation permissions, auto-approved commands, and workflow preferences. Gemini CLI reads it to tailor its behaviour to your project.",
      },
      {
        id: 32,
        question: "Why should you configure 'restricted operations' like never using rm or mv commands?",
        options: [
          "To make Gemini CLI run faster",
          "To prevent accidental data loss by blocking destructive file operations",
          "Because rm and mv don't work on modern systems",
          "It's only needed for Python projects",
        ],
        correctAnswer: 1,
        explanation:
          "Restricting destructive commands like rm (delete) and mv (move/rename) in your settings prevents the AI from accidentally deleting or misplacing important files. This is a safety guardrail that protects your work while still allowing full editing flexibility.",
      },
      {
        id: 33,
        question: "What are 'auto-approved bash commands' in GEMINI.md?",
        options: [
          "Commands that bypass your computer's security entirely",
          "A list of shell commands Gemini CLI can run without asking for permission each time",
          "Commands that automatically fix bugs in your code",
          "Bash scripts that run when your computer starts up",
        ],
        correctAnswer: 1,
        explanation:
          "Auto-approved commands (like curl, python, pip install, etc.) let Gemini CLI execute common, safe operations without prompting you each time. This speeds up your workflow while still blocking potentially dangerous commands that aren't on the list.",
      },
      {
        id: 34,
        question: "What is the purpose of the development-status.md file?",
        options: [
          "It replaces version control like Git",
          "It tracks project state, recent changes, known issues, and next steps so any future session can pick up where you left off",
          "It's a changelog published to npm",
          "It stores database connection strings",
        ],
        correctAnswer: 1,
        explanation:
          "development-status.md is a living document that records what's working, what's in progress, architecture decisions, known issues, and priorities. It provides critical context for continuity — whether you're starting a new AI session or handing off to a collaborator.",
      },
      {
        id: 35,
        question: "Which code quality setting helps catch bugs before they reach production?",
        options: [
          "Using dark mode in your editor",
          "Enforcing TypeScript for type safety and including comprehensive error handling",
          "Writing code as fast as possible",
          "Avoiding all third-party libraries",
        ],
        correctAnswer: 1,
        explanation:
          "Configuring Gemini CLI to use TypeScript and include comprehensive error handling means the AI generates safer, more predictable code. TypeScript catches type mismatches at build time, and error handling ensures your app fails gracefully instead of crashing.",
      },
    ],
  },
];
