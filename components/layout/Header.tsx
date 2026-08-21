import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { SITE_NAME } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--glass-bg)] backdrop-blur-glass">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] text-white shadow-glow">
            <Icon name="Calculator" size={19} />
          </span>
          <span className="text-lg font-bold tracking-tight text-text-primary">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {CATEGORIES.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/calculators"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-3 transition-colors"
          >
            <Icon name="Search" size={16} />
            All calculators
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
