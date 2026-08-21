"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced to the browser console; Vercel captures server errors separately.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-24 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-danger/10 text-danger">
        <Icon name="Info" size={30} />
      </div>
      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        Something went wrong
      </h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-text-secondary">
        An unexpected error occurred. You can try again, or head back to a
        calculator.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-600))] px-6 font-semibold text-white shadow-md hover:shadow-glow transition-shadow"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-surface-2 px-6 font-semibold text-text-primary hover:bg-surface-3 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
