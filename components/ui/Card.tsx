import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Glass card — the primary surface. Defines shape with shadow + translucent
 * background and blur rather than hard borders.
 */
export function Card({
  className,
  glass = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { glass?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line shadow-lg",
        glass
          ? "bg-[var(--glass-bg)] backdrop-blur-glass"
          : "bg-surface",
        className
      )}
      {...props}
    />
  );
}
