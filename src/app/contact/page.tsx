"use client";

import { useState, FormEvent } from "react";
import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Section className="py-28 text-center">
        <Badge variant="accent" className="mb-6">
          Contact
        </Badge>
        <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
          Get in <GradientText>Touch</GradientText>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          Have a question, want to discuss group pricing, or just want to say
          hello? Drop us a message and we&apos;ll get back to you within 24 hours.
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-xl">
          {submitted ? (
            <div className="rounded-xl border border-success/30 bg-success/10 p-10 text-center">
              <div className="mb-4 text-5xl">✓</div>
              <h2 className="mb-2 text-2xl font-bold text-success">
                Message Sent!
              </h2>
              <p className="text-muted">
                Thanks for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl border border-border bg-card p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent-purple"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent-purple"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-purple"
                >
                  <option>General Question</option>
                  <option>Course Information</option>
                  <option>Tutoring Inquiry</option>
                  <option>Group / Team Pricing</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent-purple"
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
