"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export interface CategoryGridItem {
  title: string;
  href: string;
  shortDescription: string;
  keywords: string;
}

export function CategoryGridFilter({
  items,
  icon,
}: {
  items: CategoryGridItem[];
  icon: string;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(query) ||
        i.keywords.includes(query)
    );
  }, [q, items]);

  return (
    <div>
      {items.length > 4 && (
        <div className="relative mt-8 max-w-md">
          <Icon
            name="Search"
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
          />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter these calculators…"
            aria-label="Filter calculators in this category"
            className="w-full rounded-full border border-line-strong bg-surface-3 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-tertiary outline-none focus:border-brand focus-visible:shadow-[var(--focus-ring)] transition-all"
          />
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-line-strong transition-all duration-300 ease-spring"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon name={icon} size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-brand transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                  {c.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-text-secondary">
          No calculators match &ldquo;{q}&rdquo;.
        </p>
      )}
    </div>
  );
}
