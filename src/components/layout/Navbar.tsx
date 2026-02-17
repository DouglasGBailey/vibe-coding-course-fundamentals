"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt={SITE_NAME} width={1024} height={500} className="h-12 w-auto object-contain md:h-16" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm transition-colors hover:text-accent-purple",
                pathname === link.href ? "text-accent-purple" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/pricing" size="sm">
            Get Started
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
          <span
            className={clsx(
              "h-0.5 w-6 bg-foreground transition-all duration-200",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-6 bg-foreground transition-all duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-6 bg-foreground transition-all duration-200",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-border transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-screen" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-4 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={clsx(
                "text-lg transition-colors hover:text-accent-purple",
                pathname === link.href ? "text-accent-purple" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/pricing" className="mt-2 w-full">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
