import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalculatorFinder } from "@/components/finder/CalculatorFinder";
import { getSearchIndex } from "@/lib/registry";

/**
 * The blog lives at a language-neutral top-level path (/blog), outside the
 * [lang] tree, so it renders the site chrome itself. English chrome matches the
 * blog's English content; the finder and nav keep it visually part of the site.
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const searchIndex = getSearchIndex();
  return (
    <>
      <Header locale="en" />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale="en" />
      <CalculatorFinder index={searchIndex} />
    </>
  );
}
