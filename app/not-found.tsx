import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-24 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <Icon name="Calculator" size={30} />
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary">
        Page not found
      </h1>
      <p className="mt-3 text-lg text-text-secondary">
        We couldn&apos;t find that calculator. It may have moved or never existed.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] px-6 h-12 text-white font-semibold shadow-md hover:shadow-glow transition-shadow"
        >
          Go home
        </Link>
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-6 h-12 text-text-primary font-semibold hover:bg-surface-3 transition-colors"
        >
          All calculators
        </Link>
      </div>
    </div>
  );
}
