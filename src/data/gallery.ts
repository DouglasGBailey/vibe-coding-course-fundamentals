export interface GalleryProject {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const galleryProjects: GalleryProject[] = [
  {
    title: "IntegriNow",
    description:
      "A blockchain-based accounting platform with a sleek dark UI featuring glass-morphism panels, multi-signature treasury controls, and real-time auditing dashboards. Built with modern web technologies and deployed to Firebase.",
    url: "https://integrinow.web.app/",
    tags: ["Full-Stack", "Dark Theme", "Blockchain", "Dashboard"],
  },
  {
    title: "CLI Coder Training",
    description:
      "An interactive educational course site with progressive quiz-based learning, dark/light theme toggle, progress tracking, and gamified sections that unlock sequentially. A perfect example of building engaging learning experiences.",
    url: "https://cli-coder-training.web.app/",
    tags: ["Education", "Interactive", "Quizzes", "Responsive"],
  },
];
