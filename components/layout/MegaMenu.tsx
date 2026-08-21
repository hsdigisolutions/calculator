"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

export interface MegaMenuCategory {
  slug: string;
  name: string;
  icon: string;
  count: number;
  tools: { label: string; href: string }[];
}

export function MegaMenu({ menu }: { menu: MegaMenuCategory[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          open
            ? "bg-surface-2 text-text-primary"
            : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
        )}
      >
        Tools
        <Icon
          name="ChevronDown"
          size={15}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-[min(92vw,720px)] rounded-2xl border border-line bg-surface p-4 shadow-2xl animate-fade-up"
          role="menu"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
            {menu.map((c) => (
              <div key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-brand transition-colors"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon name={c.icon} size={14} />
                  </span>
                  {c.name}
                </Link>
                <ul className="mt-2 space-y-0.5">
                  {c.tools.map((t) => (
                    <li key={t.href}>
                      <Link
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="block truncate rounded px-1 py-0.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {t.label}
                      </Link>
                    </li>
                  ))}
                  {c.count > c.tools.length && (
                    <li>
                      <Link
                        href={`/${c.slug}`}
                        onClick={() => setOpen(false)}
                        className="block px-1 py-0.5 text-xs font-medium text-brand hover:underline"
                      >
                        See all {c.count} →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
