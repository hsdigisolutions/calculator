import Link from "next/link";
import { Icon } from "./Icon";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-secondary">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <Icon name="ChevronRight" size={14} className="text-text-tertiary" />
            )}
            {i < items.length - 1 ? (
              <Link href={c.href} className="hover:text-text-primary transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-text-primary" aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
