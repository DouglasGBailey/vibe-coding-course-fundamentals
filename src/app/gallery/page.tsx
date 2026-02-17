import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { galleryProjects } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See real examples of websites and apps built by students using AI-powered vibe coding.",
};

export default function GalleryPage() {
  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          Student Showcase
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          What You&apos;ll Be Able to <GradientText>Build</GradientText>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          These are real websites built using the same AI-powered coding
          techniques you&apos;ll learn in this course. From SaaS platforms to
          interactive learning apps — this is what&apos;s possible.
        </p>
      </Section>

      <Section>
        <div className="space-y-10">
          {galleryProjects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:bg-card-hover"
            >
              {/* Live preview iframe */}
              <div className="relative border-b border-border">
                <div className="flex items-center gap-2 bg-background/50 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-error/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                  <span className="ml-2 flex-1 rounded bg-border px-3 py-1 text-xs text-muted truncate">
                    {project.url}
                  </span>
                </div>
                <iframe
                  src={project.url}
                  title={project.title}
                  className="h-[400px] w-full md:h-[500px]"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Project info */}
              <div className="p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="mb-6 max-w-3xl text-muted leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-purple transition-colors hover:text-accent-blue"
                >
                  Visit Live Site
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="gradient-glow mx-auto max-w-3xl rounded-2xl border border-border p-12">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to build sites like these?
          </h2>
          <p className="mb-8 text-muted">
            Start the course today and you could have your first project live
            within a week.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/pricing" size="lg">
              Get Started
            </Button>
            <Button href="/course" variant="outline" size="lg">
              View Curriculum
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
