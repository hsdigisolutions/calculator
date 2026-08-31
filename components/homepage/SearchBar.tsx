"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Locale } from "@/lib/i18n";

export interface SearchItem {
  title: string;
  href: string;
  category: string;
  keywords: string;
}

export function SearchBar({
  items,
  locale = "en",
}: {
  items: SearchItem[];
  locale?: Locale;
}) {
  const placeholder =
    locale === "es" ? "Busca entre 500+ calculadoras…" : "Search 500+ calculators…";
  const ariaLabel = locale === "es" ? "Buscar calculadoras" : "Search calculators";
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return items
      .filter(
        (i) =>
          i.title.toLowerCase().includes(query) ||
          i.keywords.toLowerCase().includes(query)
      )
      .slice(0, 6);
  }, [q, items]);

  const open = focused && results.length > 0;

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Icon
          name="Search"
          size={20}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-text-tertiary"
        />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={placeholder}
          aria-label={ariaLabel}
          className="w-full h-16 rounded-full bg-[var(--glass-bg)] backdrop-blur-glass border border-line-strong pl-14 pr-5 text-base text-text-primary placeholder:text-text-tertiary shadow-lg outline-none focus-visible:shadow-[var(--focus-ring)] transition-shadow"
        />
      </div>

      {open && (
        <div className="absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-xl animate-fade-up">
          <ul className="max-h-80 overflow-y-auto py-2">
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-surface-2 transition-colors"
                >
                  <span className="font-medium text-text-primary">{r.title}</span>
                  <span className="text-xs text-text-tertiary">{r.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
