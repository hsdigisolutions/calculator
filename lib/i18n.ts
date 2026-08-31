/**
 * Bilingual (es/en) helpers. Spanish is the default, served prefix-less
 * (calcvora.com/finanzas/calculadora-de-porcentaje); English lives under /en.
 *
 * Localized content fields fall back to English when the Spanish counterpart is
 * absent, so the site builds and renders correctly before translations land.
 */
import type { CalculatorDefinition, Category, FAQ } from "./types";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

/** `<html lang>` value. */
export const HTML_LANG: Record<Locale, string> = { es: "es", en: "en" };
/** OpenGraph og:locale value. */
export const OG_LOCALE: Record<Locale, string> = { es: "es_ES", en: "en_US" };
/** BCP-47 hreflang value. */
export const HREFLANG: Record<Locale, string> = { es: "es", en: "en" };

/** Static (non-data-driven) page slugs per locale. */
export const STATIC_SLUGS = {
  allCalculators: { es: "calculadoras", en: "calculators" },
} as const;

// ---------- localized slugs ----------

export function categorySlugFor(cat: Category, locale: Locale): string {
  return locale === "en" ? cat.slug : cat.slugEs ?? cat.slug;
}

export function calcSlugFor(def: CalculatorDefinition, locale: Locale): string {
  return locale === "en" ? def.slug : def.slugEs ?? def.slug;
}

// ---------- localized paths (public URLs) ----------

const prefix = (locale: Locale) => (locale === "en" ? "/en" : "");

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en" : "/";
}

export function categoryPath(cat: Category, locale: Locale): string {
  return `${prefix(locale)}/${categorySlugFor(cat, locale)}`;
}

export function calcPath(
  def: CalculatorDefinition,
  cat: Category | undefined,
  locale: Locale
): string {
  const catSlug = cat ? categorySlugFor(cat, locale) : def.categorySlug;
  return `${prefix(locale)}/${catSlug}/${calcSlugFor(def, locale)}`;
}

export function allCalculatorsPath(locale: Locale): string {
  return `${prefix(locale)}/${STATIC_SLUGS.allCalculators[locale]}`;
}

// ---------- localized content fields (English fallback) ----------

export function calcTitle(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.title : d.titleEs ?? d.title;
}
export function calcShortDescription(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.shortDescription : d.shortDescriptionEs ?? d.shortDescription;
}
export function calcSeoTitle(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.seoTitle : d.seoTitleEs ?? d.seoTitle;
}
export function calcMetaDescription(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.metaDescription : d.metaDescriptionEs ?? d.metaDescription;
}
export function calcPrimaryKeyword(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.primaryKeyword : d.primaryKeywordEs ?? d.primaryKeyword;
}
export function calcSecondaryKeywords(d: CalculatorDefinition, l: Locale): string[] {
  return l === "en" ? d.secondaryKeywords : d.secondaryKeywordsEs ?? d.secondaryKeywords;
}
export function calcFormula(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.formula : d.formulaEs ?? d.formula;
}
export function calcFormulaExplanation(d: CalculatorDefinition, l: Locale): string | undefined {
  return l === "en" ? d.formulaExplanation : d.formulaExplanationEs ?? d.formulaExplanation;
}
export function calcExplanation(d: CalculatorDefinition, l: Locale): string {
  return l === "en" ? d.explanation : d.explanationEs ?? d.explanation;
}
export function calcExample(d: CalculatorDefinition, l: Locale) {
  return l === "en" ? d.example : d.exampleEs ?? d.example;
}
export function calcFaqs(d: CalculatorDefinition, l: Locale): FAQ[] {
  return l === "en" ? d.faqs : d.faqsEs ?? d.faqs;
}
export function fieldLabel(d: CalculatorDefinition, fieldId: string, fallback: string, l: Locale): string {
  if (l === "en") return fallback;
  return d.fieldLabelsEs?.[fieldId] ?? fallback;
}
export function resultLabel(d: CalculatorDefinition, resultId: string, fallback: string, l: Locale): string {
  if (l === "en") return fallback;
  return d.resultLabelsEs?.[resultId] ?? fallback;
}

// ---------- localized category fields ----------

export function categoryName(c: Category, l: Locale): string {
  return l === "en" ? c.name : c.nameEs ?? c.name;
}
export function categoryDescription(c: Category, l: Locale): string {
  return l === "en" ? c.description : c.descriptionEs ?? c.description;
}
export function categorySeoIntro(c: Category, l: Locale): string {
  return l === "en" ? c.seoIntro : c.seoIntroEs ?? c.seoIntro;
}
export function categoryAbout(c: Category, l: Locale): string | undefined {
  return l === "en" ? c.about : c.aboutEs ?? c.about;
}
export function categoryFaqs(c: Category, l: Locale): FAQ[] | undefined {
  return l === "en" ? c.faqs : c.faqsEs ?? c.faqs;
}

// ---------- UI strings ----------

export const UI = {
  es: {
    home: "Inicio",
    allCalculators: "Todas las calculadoras",
    relatedCalculators: "Calculadoras relacionadas",
    howItWorks: "Cómo funciona",
    howToUseTitle: "Cómo usar esta calculadora",
    faqs: "Preguntas frecuentes",
    formula: "Fórmula",
    workedExample: "Ejemplo resuelto",
    source: "Fuente",
    lastReviewed: "Última revisión",
    share: "Compartir",
    copyLink: "Copiar enlace",
    copied: "Copiado",
    print: "Imprimir",
    open: "Abrir",
    moreIn: "Más en",
    allOf: "Todas las de",
    quickFacts: "Datos rápidos",
    instantInBrowser: "Instantáneo, en el navegador",
    noSignup: "Sin registro",
    calculatorsWord: "calculadoras",
    comingSoon: "Pronto habrá más calculadoras en esta categoría.",
    searchPlaceholder: "Buscar calculadoras…",
    aboutHeading: "Sobre nuestras calculadoras de",
    commonQuestions: "Preguntas comunes sobre las calculadoras de",
    step1Title: "Introduce tus valores",
    step2Title: "Ajusta las opciones",
    step3Title: "Lee tu resultado",
    enterFallback: "Introduce tus valores en los campos de arriba.",
    adjustFallback: "Ajusta cualquier opción para adaptarla a tu situación.",
    resultUpdates: "se actualiza al instante mientras escribes, sin botón que pulsar.",
    yourResult: "tu resultado",
    andWord: "y",
    otherLanguage: "English",
  },
  en: {
    home: "Home",
    allCalculators: "All calculators",
    relatedCalculators: "Related calculators",
    howItWorks: "How it works",
    howToUseTitle: "How to use this calculator",
    faqs: "Frequently asked questions",
    formula: "Formula",
    workedExample: "Worked example",
    source: "Source",
    lastReviewed: "Last reviewed",
    share: "Share",
    copyLink: "Copy link",
    copied: "Copied",
    print: "Print",
    open: "Open",
    moreIn: "More in",
    allOf: "All",
    quickFacts: "Quick facts",
    instantInBrowser: "Instant, in-browser",
    noSignup: "No sign-up required",
    calculatorsWord: "calculators",
    comingSoon: "Calculators in this category are coming soon.",
    searchPlaceholder: "Search calculators…",
    aboutHeading: "About our",
    commonQuestions: "Common questions about",
    step1Title: "Enter your values",
    step2Title: "Adjust the options",
    step3Title: "Read your result",
    enterFallback: "Enter your values in the fields above.",
    adjustFallback: "Fine-tune any options to match your situation.",
    resultUpdates: "updates instantly as you type — no button to press.",
    yourResult: "your result",
    andWord: "and",
    otherLanguage: "Español",
  },
} as const;

/** Locale used by date formatting. */
export const DATE_LOCALE: Record<Locale, string> = { es: "es-ES", en: "en-US" };

export function t(locale: Locale) {
  return UI[locale];
}
