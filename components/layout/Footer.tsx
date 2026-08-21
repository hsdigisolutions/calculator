import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { Icon } from "@/components/Icon";

const HALF = Math.ceil(CATEGORIES.length / 2);

export function Footer() {
  const colA = CATEGORIES.slice(0, HALF);
  const colB = CATEGORIES.slice(HALF);

  return (
    <footer className="mt-8 border-t border-line">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
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

          <FooterCol title="Categories" links={colA.map((c) => ({ label: c.name, href: `/${c.slug}` }))} />
          <FooterCol title="More" links={colB.map((c) => ({ label: c.name, href: `/${c.slug}` }))} />
          <FooterCol
            title="Company"
            links={[
              { label: "All calculators", href: "/calculators" },
              { label: "About", href: "/about" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ]}
          />
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-text-tertiary">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All calculations are
            estimates provided for general information — see our{" "}
            <Link href="/terms" className="underline hover:text-text-primary">
              terms
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="util text-2xs font-semibold text-text-tertiary">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
