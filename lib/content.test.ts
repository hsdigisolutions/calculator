import { describe, it, expect } from "vitest";
import { ALL_CALCULATORS } from "./registry";
import { CATEGORIES } from "./categories";

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

describe("calculator content quality", () => {
  for (const c of ALL_CALCULATORS) {
    describe(c.slug, () => {
      it("explanation is 150+ words", () => {
        expect(words(c.explanation)).toBeGreaterThanOrEqual(150);
      });
      it("has a formulaExplanation (40+ words)", () => {
        expect(c.formulaExplanation, "missing formulaExplanation").toBeTruthy();
        expect(words(c.formulaExplanation ?? "")).toBeGreaterThanOrEqual(40);
      });
      it("has exactly 5 FAQs, each answer 45+ words", () => {
        expect(c.faqs.length).toBe(5);
        for (const f of c.faqs) {
          expect(words(f.answer), `short answer: ${f.question}`).toBeGreaterThanOrEqual(45);
        }
      });
      it("has a non-empty formulaSource", () => {
        expect(c.formulaSource && c.formulaSource.length > 0).toBe(true);
      });
    });
  }
});

describe("health & finance citations", () => {
  // Calculators that should carry a real authoritative sourceUrl.
  const MUST_CITE = new Set([
    "bmi", "bmr", "tdee", "calorie", "ideal-weight", "protein", "macro", "water-intake",
    "mortgage", "loan", "compound-interest", "investment", "savings",
  ]);
  for (const c of ALL_CALCULATORS) {
    if (MUST_CITE.has(c.id)) {
      it(`${c.slug} has a sourceUrl`, () => {
        expect(c.sourceUrl && /^https?:\/\//.test(c.sourceUrl)).toBe(true);
      });
    }
  }
});

describe("category hub content", () => {
  for (const cat of CATEGORIES) {
    describe(cat.slug, () => {
      it("has a 200+ word about section", () => {
        expect(words(cat.about ?? "")).toBeGreaterThanOrEqual(200);
      });
      it("has exactly 3 category FAQs", () => {
        expect(cat.faqs?.length).toBe(3);
      });
    });
  }
});
