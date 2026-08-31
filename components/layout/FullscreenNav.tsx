"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";
import { type Locale, homePath } from "@/lib/i18n";

export interface NavCategory {
  slug: string;
  name: string;
  icon: string;
  count: number;
  href: string;
  tools: { label: string; href: string }[];
}

const NAV_STRINGS = {
  es: {
    searchPlaceholder: "Buscar calculadoras...",
    seeAll: "Ver todas",
    noMatch: "No hay calculadoras que coincidan con",
    close: "Cerrar",
    tools: "Herramientas",
    closeNav: "Cerrar navegación",
    siteNav: "Navegación del sitio",
    searchAria: "Buscar calculadoras",
  },
  en: {
    searchPlaceholder: "Search calculators...",
    seeAll: "See all",
    noMatch: "No calculators match",
    close: "Close",
    tools: "Tools",
    closeNav: "Close navigation",
    siteNav: "Site navigation",
    searchAria: "Search calculators",
  },
} as const;

export function FullscreenNav({
  menu,
  locale = "en",
}: {
  menu: NavCategory[];
  locale?: Locale;
}) {
  const str = NAV_STRINGS[locale];
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [canPortal, setCanPortal] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => setCanPortal(true), []);

  const open = () => setMounted(true);
  const close = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 320);
  };
  const toggle = () => (mounted ? close() : open());

  // Flip to visible one tick after mount (timer, not rAF — works when occluded).
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [mounted]);

  // Autofocus the search input once the overlay is on screen.
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    if (!mounted) setQuery("");
  }, [visible, mounted]);

  // Escape to close + scroll lock while open.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  const q = query.trim().toLowerCase();

  // Filter tools live; drop categories with no matches while searching.
  const filtered = useMemo(() => {
    if (!q) return menu.map((c) => ({ ...c, shown: c.tools.slice(0, 8), searching: false }));
    return menu
      .map((c) => ({
        ...c,
        shown: c.tools.filter((t) => t.label.toLowerCase().includes(q)),
        searching: true,
      }))
      .filter((c) => c.shown.length > 0);
  }, [menu, q]);

  const firstMatch = q ? filtered[0]?.shown[0]?.href : undefined;

  const goFirst = () => {
    if (firstMatch) {
      close();
      router.push(firstMatch);
    }
  };

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={str.siteNav}
      className={cn(
        "fixed inset-0 z-[100] overflow-hidden bg-[rgba(0,0,0,0.96)] backdrop-blur-xl",
        "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="nav-orb nav-orb-1" aria-hidden />
      <div className="nav-orb nav-orb-2" aria-hidden />
      <div className="nav-orb nav-orb-3" aria-hidden />

      <div className="relative z-10 h-full overflow-y-auto">
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:px-20">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <Link href={homePath(locale)} onClick={close} className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-600))]">
                <Icon name="Calculator" size={19} />
              </span>
              <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
            </Link>
            <button
              type="button"
              onClick={close}
              aria-label={str.closeNav}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Search */}
          <div className="relative mx-auto mt-8 w-full max-w-[400px]">
            <Icon
              name="Search"
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && goFirst()}
              placeholder={str.searchPlaceholder}
              aria-label={str.searchAria}
              className="h-12 w-full rounded-full border border-white/15 bg-white/[0.06] pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand focus:bg-white/[0.09]"
            />
          </div>

          {/* Category grid */}
          {filtered.length > 0 ? (
            <div className="nav-stagger mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((cat) => (
                <div key={cat.slug} className="border-t border-white/[0.08] pt-6">
                  <Link
                    href={cat.href}
                    onClick={close}
                    className="flex items-center gap-2.5 text-white"
                  >
                    <Icon name={cat.icon} size={22} className="text-white/40" />
                    <span className="font-display text-[22px] font-semibold">
                      {cat.name}
                    </span>
                  </Link>
                  <ul className="mt-4">
                    {cat.shown.map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          onClick={close}
                          className="block w-fit py-0.5 text-sm font-normal leading-[2] text-white/[0.65] transition-all duration-150 ease-out hover:translate-x-1.5 hover:text-white"
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {!cat.searching && cat.count > cat.shown.length && (
                    <Link
                      href={cat.href}
                      onClick={close}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                    >
                      {str.seeAll} {cat.count} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-sm text-white/50">
              {str.noMatch} &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-expanded={mounted}
        aria-haspopup="dialog"
        onClick={toggle}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          mounted
            ? "bg-surface-2 text-text-primary"
            : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
        )}
      >
        {mounted ? str.close : str.tools}
        <Icon name={mounted ? "X" : "ChevronDown"} size={mounted ? 14 : 15} />
      </button>
      {canPortal && mounted && createPortal(overlay, document.body)}
    </>
  );
}
