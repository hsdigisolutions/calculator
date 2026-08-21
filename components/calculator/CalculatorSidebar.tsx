import Link from "next/link";
import type { CalculatorDefinition } from "@/lib/types";
import { getCalculatorsByCategory } from "@/lib/registry";
import { getCategory } from "@/lib/categories";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

export function CalculatorSidebar({
  definition,
}: {
  definition: CalculatorDefinition;
}) {
  const category = getCategory(definition.categorySlug);
  const siblings = getCalculatorsByCategory(definition.categorySlug).filter(
    (c) => c.slug !== definition.slug
  );

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-20 space-y-4">
        {/* Same-category navigation */}
        <nav
          aria-label={`More ${category?.name ?? definition.category} calculators`}
          className="rounded-2xl border border-line bg-surface p-5 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Icon name={category?.icon ?? "Calculator"} size={17} />
            </span>
            <h2 className="text-sm font-semibold text-text-primary">
              More in {category?.name ?? definition.category}
            </h2>
          </div>
          <ul className="mt-3 space-y-0.5">
            {siblings.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.categorySlug}/${c.slug}`}
                  className="block rounded-lg px-2 py-1.5 text-sm text-text-secondary hover:bg-surface-2 hover:text-text-primary transition-colors"
                >
                  {c.title.replace(/ Calculator| Converter/i, "")}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${definition.categorySlug}`}
            className="mt-2 inline-flex items-center gap-1 px-2 text-sm font-medium text-brand hover:underline"
          >
            All {category?.name ?? definition.category}
            <Icon name="ArrowRight" size={14} />
          </Link>
        </nav>

        {/* Quick facts */}
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
          <h2 className="util text-2xs text-text-tertiary">Quick facts</h2>
          <dl className="mt-3 space-y-2.5 text-sm">
            {definition.formulaSource && (
              <div>
                <dt className="text-text-tertiary">Source</dt>
                <dd className="text-text-primary">
                  {definition.sourceUrl ? (
                    <a
                      href={definition.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-accent underline underline-offset-2 hover:text-brand"
                    >
                      {definition.formulaSource}
                    </a>
                  ) : (
                    definition.formulaSource
                  )}
                </dd>
              </div>
            )}
            <div>
              <dt className="text-text-tertiary">Last reviewed</dt>
              <dd className="text-text-primary">{formatDate(definition.lastReviewed)}</dd>
            </div>
          </dl>
          <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-text-secondary">
            {[
              { icon: "Zap", label: "Instant, in-browser" },
              { icon: "ShieldCheck", label: "No sign-up required" },
            ].map((f) => (
              <li key={f.label} className="flex items-center gap-2">
                <Icon name={f.icon} size={15} className={cn("text-brand")} />
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
