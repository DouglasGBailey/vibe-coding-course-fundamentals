"use client";

import { useState } from "react";
import { clsx } from "clsx";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqItems } from "@/data/faq";

const categories = ["All", ...Array.from(new Set(faqItems.map((f) => f.category)))];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          FAQ
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          Frequently Asked <GradientText>Questions</GradientText>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          Everything you need to know about the course, tutoring, and pricing.
          Can&apos;t find what you&apos;re looking for? Reach out on our contact page.
        </p>
      </Section>

      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-accent-purple text-white"
                  : "bg-card text-muted hover:bg-card-hover"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion
            items={filtered.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Still have questions?</h2>
        <p className="mb-8 text-muted">
          We&apos;d love to hear from you. Get in touch and we&apos;ll respond within 24
          hours.
        </p>
        <Button href="/contact">Contact Us</Button>
      </Section>
    </>
  );
}
