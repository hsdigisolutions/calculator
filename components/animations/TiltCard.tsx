"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * 3D cursor-follow tilt. Tracks the pointer over the element and writes
 * --rx / --ry CSS variables (max ±6deg); the transform itself lives in the
 * `.tilt` class so no colors or static styles are set inline. Pointer-only —
 * touch devices and reduced-motion users get a flat card.
 */
export function TiltCard({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${px * max}deg`);
    el.style.setProperty("--rx", `${-py * max}deg`);
    el.style.setProperty("--tilt-lift", "-4px");
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tilt-lift", "0px");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn("tilt", className)}
    >
      {children}
    </div>
  );
}
