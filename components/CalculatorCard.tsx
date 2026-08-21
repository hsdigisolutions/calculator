import Link from "next/link";
import type { CalculatorDefinition } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

export function CalculatorCard({
  calc,
  className,
}: {
  calc: CalculatorDefinition;
  className?: string;
}) {
  const category = getCategory(calc.categorySlug);
  return (
    <Link
      href={`/${calc.categorySlug}/${calc.slug}`}
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl bg-surface p-5 border border-line",
        "shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-spring",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon name={category?.icon ?? "Calculator"} size={20} />
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
          {calc.category}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-text-primary group-hover:text-brand transition-colors">
          {calc.title}
        </h3>
        <p className="mt-1 text-sm text-text-secondary line-clamp-2">
          {calc.shortDescription}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
        Open
        <Icon name="ArrowRight" size={15} />
      </span>
    </Link>
  );
}
