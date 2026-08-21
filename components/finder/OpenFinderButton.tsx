"use client";

import { Icon } from "@/components/Icon";

/** Opens the global CalculatorFinder via a custom window event. */
export function OpenFinderButton() {
  return (
    <button
      type="button"
      aria-label="Search calculators"
      onClick={() => window.dispatchEvent(new Event("calcvora:open-finder"))}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-text-secondary hover:bg-surface-3 hover:text-text-primary transition-colors"
    >
      <Icon name="Search" size={18} />
    </button>
  );
}
