import Link from "next/link";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold">
              <span className="gradient-text">{SITE_NAME}</span>
            </h3>
            <p className="text-sm text-muted">
              Learn to build real applications using AI-powered coding tools.
              No experience required.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Pages
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Get in Touch
            </h4>
            <p className="text-sm text-muted">
              Have questions? Reach out through our{" "}
              <Link
                href="/contact"
                className="text-accent-purple hover:underline"
              >
                contact form
              </Link>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
