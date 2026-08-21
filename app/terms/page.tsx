import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using ${SITE_NAME}: calculators are provided as-is for general information, not professional advice.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms", href: "/terms" }]} />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        Terms of Service
      </h1>
      <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
        <p>
          By using {SITE_NAME}, you agree to these terms. The calculators are
          provided free of charge and &ldquo;as is&rdquo; for general
          informational and educational purposes.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">
          Not professional advice
        </h2>
        <p>
          Results are estimates based on the inputs you provide and standard
          formulas. They are not a substitute for professional advice. Health,
          medical and fitness tools do not constitute medical advice; financial
          and tax tools do not constitute financial, legal or tax advice. Always
          consult a qualified professional before making decisions that affect
          your health or finances.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">Accuracy</h2>
        <p>
          We work hard to keep formulas correct and cite authoritative sources
          where they exist, but we make no warranty that every result is free of
          error or suitable for your specific situation. You use the calculators
          at your own discretion.
        </p>
        <h2 className="text-xl font-semibold text-text-primary pt-2">
          Limitation of liability
        </h2>
        <p>
          {SITE_NAME} is not liable for any loss or damage arising from reliance
          on a calculation. Verify important figures independently before acting
          on them.
        </p>
      </div>
    </div>
  );
}
