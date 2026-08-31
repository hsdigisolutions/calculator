// Shared TypeScript contracts for the calculator engine.
// A calculator = a serializable CalculatorDefinition (content/metadata)
// + a pure compute function registered in lib/engines.

export type FieldType = "number" | "select" | "date" | "text";

export type ResultFormat =
  | "number"
  | "currency"
  | "percentage"
  | "duration"
  | "date"
  | "text";

export interface FieldOption {
  value: string;
  label: string;
}

export interface CalculatorField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue?: string | number;
  unit?: string;
  unitOptions?: FieldOption[];
  /** For type: "select" */
  options?: FieldOption[];
  min?: number;
  max?: number;
  step?: number;
  required: boolean;
  helpText?: string;
  /** Grid span on desktop (1 or 2 of a 2-col grid). Defaults to full width. */
  span?: 1 | 2;
}

export interface CalculatorResult {
  id: string;
  label: string;
  format: ResultFormat;
  decimals?: number;
  currency?: string;
  unit?: string;
  isPrimary: boolean;
  description?: string;
}

export interface CalculatorExample {
  inputs: Record<string, string | number>;
  explanation: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type CalculatorStatus = "active" | "draft" | "review";

/** Sensitive calculators must carry a disclaimer + formula source. */
export type Sensitivity = "none" | "health" | "finance" | "tax";

export interface CalculatorDefinition {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  fields: CalculatorField[];
  results: CalculatorResult[];
  formula: string;
  /** One paragraph on WHY the formula works (not just what it is). */
  formulaExplanation?: string;
  explanation: string;
  example: CalculatorExample;
  faqs: FAQ[];
  relatedCalculators: string[]; // slugs
  status: CalculatorStatus;
  lastReviewed: string; // ISO date
  sensitivity?: Sensitivity;
  formulaSource?: string; // e.g. "WHO", "IRS", "standard amortization formula"
  sourceUrl?: string; // authoritative citation link

  // ---- Spanish (es) localization ----
  // Optional so the site builds before translations land; helpers fall back to
  // the English field when the Es counterpart is absent. AI-generated — flag for
  // native review before relying on it for production ranking.
  /** Spanish URL slug (keyword-localized, e.g. "calculadora-de-porcentaje"). */
  slugEs?: string;
  titleEs?: string;
  shortDescriptionEs?: string;
  seoTitleEs?: string;
  metaDescriptionEs?: string;
  primaryKeywordEs?: string;
  secondaryKeywordsEs?: string[];
  formulaEs?: string;
  formulaExplanationEs?: string;
  explanationEs?: string;
  exampleEs?: CalculatorExample;
  faqsEs?: FAQ[];
  /** Localized field label overrides keyed by field id (optional). */
  fieldLabelsEs?: Record<string, string>;
  /** Localized result label overrides keyed by result id (optional). */
  resultLabelsEs?: Record<string, string>;
}

/** Raw string inputs keyed by field id, as collected from the form. */
export type ComputeInputs = Record<string, string>;

/** Numeric/string outputs keyed by result id. */
export type ComputeOutputs = Record<string, number | string>;

export type ComputeFn = (inputs: ComputeInputs) => ComputeOutputs;

export interface Category {
  slug: string;
  name: string;
  /** lucide-react icon name */
  icon: string;
  tagline: string;
  description: string;
  /** longer SEO copy for the hub page */
  seoIntro: string;
  /** Full ~250-word hub content (rendered when present). */
  about?: string;
  /** Category-level FAQs for the hub page. */
  faqs?: FAQ[];

  // ---- Spanish (es) localization ----
  /** Spanish URL slug for the category (e.g. "finanzas", "matematicas"). */
  slugEs?: string;
  nameEs?: string;
  taglineEs?: string;
  descriptionEs?: string;
  seoIntroEs?: string;
  aboutEs?: string;
  faqsEs?: FAQ[];
}
