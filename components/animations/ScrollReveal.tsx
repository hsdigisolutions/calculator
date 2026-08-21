"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveals its content when scrolled into view (IntersectionObserver, 0.15).
 * Use variant="stagger" to cascade direct children in sequence.
 * Falls back to visible immediately if IntersectionObserver is unavailable.
 */
export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  variant = "reveal",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "reveal" | "stagger";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(variant, visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
