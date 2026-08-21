import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getActiveCalculators } from "@/lib/registry";
import { CATEGORIES } from "@/lib/categories";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} — fast, free, trustworthy calculators with cited formulas and no sign-up.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const count = getActiveCalculators().length;
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        About {SITE_NAME}
      </h1>
      <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
        <p>
          {SITE_NAME} is a free calculator platform built on a simple idea: the
          answer should never be more than a few seconds away, and you should be
          able to trust it. Every tool runs entirely in your browser, updates the
          moment you type, and works without an account or a paywall.
        </p>
        <p>
          We currently offer {count} calculators across {CATEGORIES.length}{" "}
          categories — finance, health, math, date and time, converters and more.
          Each one is built on the same tested engine and shows its formula, a
          worked example and clear results, so you understand the answer rather
          than just seeing it.
        </p>
        <p>
          Accuracy matters more than anything. Health and finance calculators cite
          their sources — the World Health Organization, peer-reviewed research,
          the CFPB and others — and carry the disclaimers those topics deserve.
          Every calculation is covered by automated tests that check it against
          known values before it ships.
        </p>
        <p>
          We do not sell or store the numbers you enter. There is no tracking of
          your inputs, and calculations never leave your device.
        </p>
      </div>
    </div>
  );
}
