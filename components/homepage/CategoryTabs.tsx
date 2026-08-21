"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

export interface TabCalc {
  title: string;
  href: string;
  shortDescription: string;
}
export interface CategoryTab {
  slug: string;
  name: string;
  icon: string;
  calcs: TabCalc[];
}

export function CategoryTabs({ tabs }: { tabs: CategoryTab[] }) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div>
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Browse calculators by category"
        className="scroll-row -mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.slug}
              role="tab"
              aria-selected={selected}
              id={`tab-${t.slug}`}
              aria-controls={`panel-${t.slug}`}
              onClick={() => setActive(i)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                selected
                  ? "text-text-primary bg-surface-2"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-2/60"
              )}
            >
              <span className="inline-flex items-center gap-2">
                <Icon name={t.icon} size={16} className={selected ? "text-brand" : ""} />
                {t.name}
              </span>
              {selected && (
                <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand" />
              )}
            </button>
          );
        })}
      </div>

      {/* Panel — re-keyed so it cross-fades on tab change */}
      <div
        key={current.slug}
        role="tabpanel"
        id={`panel-${current.slug}`}
        aria-labelledby={`tab-${current.slug}`}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up"
      >
        {current.calcs.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex flex-col gap-1.5 rounded-2xl bg-surface p-5 border border-line shadow-sm hover:shadow-lg hover:border-line-strong hover:-translate-y-0.5 transition-all duration-300 ease-spring"
          >
            <span className="font-semibold text-text-primary group-hover:text-brand transition-colors">
              {c.title}
            </span>
            <span className="text-sm text-text-secondary line-clamp-2">
              {c.shortDescription}
            </span>
            <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
              Open
              <Icon name="ArrowRight" size={14} />
            </span>
          </Link>
        ))}
        <Link
          href={`/${current.slug}`}
          className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong p-5 text-sm font-medium text-text-secondary hover:text-brand hover:border-brand/50 transition-colors"
        >
          All {current.name} calculators
          <Icon name="ArrowRight" size={15} />
        </Link>
      </div>
    </div>
  );
}
