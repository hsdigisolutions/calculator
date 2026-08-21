"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getCategoryColor } from "@/lib/category-config";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface NavCategory {
  slug: string;
  name: string;
  icon: string;
  count: number;
  tools: { label: string; href: string }[];
}

export function FullscreenNav({ menu }: { menu: NavCategory[] }) {
  const [mounted, setMounted] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // animated into view
  const [canPortal, setCanPortal] = useState(false);

  useEffect(() => setCanPortal(true), []);

  const open = () => setMounted(true);
  const close = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 320);
  };
  const toggle = () => (mounted ? close() : open());

  // Flip to visible one tick after mount so the off-screen state paints first,
  // then the transform transitions. Timer-based (not rAF) so it still runs when
  // the tab is backgrounded/occluded.
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [mounted]);

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

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={cn(
        "fixed inset-0 z-[100] overflow-hidden bg-[rgba(0,0,0,0.96)] backdrop-blur-xl",
        "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {/* Drifting background orbs (pure CSS) */}
      <div className="nav-orb nav-orb-1" aria-hidden />
      <div className="nav-orb nav-orb-2" aria-hidden />
      <div className="nav-orb nav-orb-3" aria-hidden />

      <div className="relative z-10 h-full overflow-y-auto">
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-16 lg:px-20">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={close}
              className="flex items-center gap-2 text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-600))]">
                <Icon name="Calculator" size={19} />
              </span>
              <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
            </Link>
            <button
              type="button"
              onClick={close}
              aria-label="Close navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Category grid */}
          <div className="nav-stagger mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((cat) => {
              const color = getCategoryColor(cat.slug);
              return (
                <div key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    onClick={close}
                    className="flex items-center gap-2.5"
                    style={{ color }}
                  >
                    <Icon name={cat.icon} size={22} />
                    <span className="font-display text-[22px] font-bold">
                      {cat.name}
                    </span>
                  </Link>
                  <ul className="mt-4">
                    {cat.tools.slice(0, 8).map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          onClick={close}
                          className="block w-fit py-0.5 text-sm font-normal leading-[2] text-white/55 transition-all duration-200 hover:translate-x-1 hover:text-white"
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${cat.slug}`}
                    onClick={close}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium"
                    style={{ color }}
                  >
                    See all {cat.count} →
                  </Link>
                </div>
              );
            })}
          </div>
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
        {mounted ? "Close" : "Tools"}
        <Icon
          name={mounted ? "X" : "ChevronDown"}
          size={mounted ? 14 : 15}
        />
      </button>
      {canPortal && mounted && createPortal(overlay, document.body)}
    </>
  );
}
