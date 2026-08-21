"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchIndexItem } from "@/lib/registry";
import { trackFinderSearch, trackFinderNavigated } from "@/lib/analytics";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "Mortgage payment",
  "How many calories",
  "Convert kg to pounds",
  "Find my BMI",
  "Calculate a tip",
  "Compound interest",
  "Percentage of a number",
  "How old am I",
];

function score(query: string, item: SearchIndexItem): number {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return 0;
  const label = item.label.toLowerCase();
  let s = 0;
  if (label === q) s += 120;
  if (label.includes(q)) s += 60;
  if (item.keywords.includes(q)) s += 40;
  // per-word matches
  for (const w of q.split(/\s+/)) {
    if (w.length < 2) continue;
    if (label.includes(w)) s += 12;
    else if (item.keywords.includes(w)) s += 6;
  }
  return s;
}

export function CalculatorFinder({ index }: { index: SearchIndexItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on Escape anywhere
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Allow other UI (e.g. the header search icon) to open the finder
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener("calcvora:open-finder", openIt);
    return () => window.removeEventListener("calcvora:open-finder", openIt);
  }, []);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    const ranked = index
      .map((item) => ({ item, s: score(q, item) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 5)
      .map((r) => r.item);
    return ranked;
  }, [query, index]);

  // Debounced search-event tracking
  useEffect(() => {
    if (query.trim().length < 2) return;
    const t = setTimeout(() => trackFinderSearch(query.trim(), results.length), 600);
    return () => clearTimeout(t);
  }, [query, results.length]);

  const go = (href: string) => {
    trackFinderNavigated(query.trim(), href);
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  const stage = query.trim().length < 2 ? "idle" : results.length ? "results" : "empty";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Find a calculator"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] px-5 py-3.5 text-sm font-semibold text-white shadow-xl hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 print:hidden"
      >
        <Icon name="Sparkles" size={17} />
        <span className="hidden sm:inline">Find a Calculator</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Find a calculator"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl animate-slide-up">
            <div className="border-b border-line px-6 pt-6 pb-4">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-text-primary">
                    What do you need to calculate?
                  </h2>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    Describe it in plain English — we&apos;ll find the tool.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="rounded-lg p-1 text-text-tertiary hover:text-text-primary transition-colors"
                >
                  <Icon name="ChevronDown" size={20} className="rotate-180" />
                </button>
              </div>
              <div className="relative">
                <Icon
                  name="Search"
                  size={16}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary"
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. mortgage payment, BMI, tip…"
                  className="w-full rounded-xl border border-line-strong bg-surface-3 py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-tertiary outline-none focus:border-brand focus-visible:shadow-[var(--focus-ring)] transition-all"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && results[0]) go(results[0].href);
                  }}
                />
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto p-3">
              {stage === "idle" && (
                <div>
                  <p className="util px-3 pb-2 text-2xs text-text-tertiary">
                    Popular searches
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="rounded-lg bg-surface-2 px-3 py-2.5 text-left text-sm text-text-secondary hover:bg-surface-3 hover:text-text-primary transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {stage === "empty" && (
                <p className="py-8 text-center text-sm text-text-tertiary">
                  No match yet — try &ldquo;mortgage&rdquo;, &ldquo;calories&rdquo;, or
                  &ldquo;percentage&rdquo;.
                </p>
              )}

              {stage === "results" && (
                <div>
                  <p className="util px-3 pb-2 text-2xs text-text-tertiary">
                    Best matches
                  </p>
                  <div className="space-y-1">
                    {results.map((r, i) => (
                      <button
                        key={r.href}
                        onClick={() => go(r.href)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-surface-2",
                          i === 0 && "bg-surface-2"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                            i === 0
                              ? "bg-brand text-white"
                              : "bg-surface-3 text-text-secondary"
                          )}
                        >
                          {i === 0 ? "→" : r.category[0]}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-text-primary">
                            {r.label}
                          </span>
                          <span className="block text-xs text-text-tertiary">
                            {r.category}
                          </span>
                        </span>
                        {i === 0 && (
                          <span className="ml-auto text-xs font-medium text-brand">
                            Best match
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
