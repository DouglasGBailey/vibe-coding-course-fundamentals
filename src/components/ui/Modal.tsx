"use client";

import { useEffect } from "react";
import { clsx } from "clsx";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        open ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={clsx(
          "relative w-full max-w-lg rounded-xl border border-border bg-card p-8 shadow-2xl transition-all duration-300",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-muted transition-colors hover:text-foreground"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
