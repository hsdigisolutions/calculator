"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Smoothly animates a displayed number toward `target` (ease-out, ~350ms).
 * Falls back to the exact value instantly when reduced motion is preferred
 * or the value isn't finite.
 */
export function useCountUp(target: number, deps: unknown[] = []): number {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!Number.isFinite(target)) {
      setDisplay(target);
      return;
    }
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const from = Number.isFinite(fromRef.current) ? fromRef.current : 0;
    if (prefersReduced || from === target) {
      fromRef.current = target;
      setDisplay(target);
      return;
    }

    const duration = 350;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(from + (target - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // Never show a stale/NaN frame: if the target is a real number but the
  // animation hasn't produced a finite frame yet (e.g. rAF paused in a
  // background tab), fall back to the exact target so the result is visible.
  if (Number.isFinite(target) && !Number.isFinite(display)) return target;
  return display;
}
