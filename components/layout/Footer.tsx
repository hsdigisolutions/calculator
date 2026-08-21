import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] text-white">
                <Icon name="Calculator" size={17} />
              </span>
              <span className="font-bold text-text-primary">{SITE_NAME}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-secondary">
              {SITE_TAGLINE} Free, fast and trustworthy calculators for everyday
              life, finance, health and more.
            </p>
          </div>

          {chunk(CATEGORIES, 5).map((group, i) => (
            <div key={i}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                Categories
              </h3>
              <ul className="mt-3 space-y-2">
                {group.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}`}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-text-tertiary">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Calculators are provided
            for general information only.
          </p>
        </div>
      </div>
    </footer>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
