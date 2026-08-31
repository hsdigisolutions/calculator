"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import { type Locale, t } from "@/lib/i18n";

export function ShareBar({
  title,
  locale = "en",
}: {
  title: string;
  locale?: Locale;
}) {
  const [copied, setCopied] = useState(false);
  const s = t(locale);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const share = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
      } catch {
        /* user cancelled */
      }
    } else {
      copyLink();
    }
  };

  const btn =
    "inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3.5 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-3 transition-colors";

  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <button type="button" onClick={share} className={btn} aria-label={s.share}>
        <Icon name="Share" size={15} />
        {s.share}
      </button>
      <button type="button" onClick={copyLink} className={cn(btn)} aria-label={s.copyLink}>
        <Icon name={copied ? "Check" : "Copy"} size={15} />
        {copied ? s.copied : s.copyLink}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className={btn}
        aria-label={s.print}
      >
        <Icon name="Printer" size={15} />
        {s.print}
      </button>
    </div>
  );
}
