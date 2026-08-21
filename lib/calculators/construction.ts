import type { CalculatorDefinition } from "../types";

export const constructionCalculators: CalculatorDefinition[] = [
  {
    id: "paint",
    slug: "paint-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Paint Calculator",
    shortDescription: "Estimate how much paint your project needs.",
    seoTitle: "Paint Calculator — Free Paint Coverage Estimator",
    metaDescription:
      "Free paint calculator. Estimate the gallons and litres of paint you need from wall area, number of coats and coverage — plus cans to buy.",
    primaryKeyword: "paint calculator",
    secondaryKeywords: ["paint coverage calculator", "how much paint do i need", "paint estimator"],
    fields: [
      { id: "wallArea", label: "Wall area", type: "number", unit: "sq ft", placeholder: "800", required: true, span: 1, min: 0, helpText: "Total surface area to paint." },
      { id: "deductions", label: "Doors & windows", type: "number", unit: "sq ft", placeholder: "60", required: false, span: 1, min: 0, helpText: "Area to subtract." },
      { id: "coats", label: "Number of coats", type: "number", placeholder: "2", required: true, span: 1, min: 1, defaultValue: 2 },
      { id: "coverage", label: "Coverage per gallon", type: "number", unit: "sq ft", placeholder: "350", required: false, span: 1, min: 1, defaultValue: 350 },
    ],
    results: [
      { id: "gallons", label: "Paint needed", format: "number", decimals: 2, unit: "gal", isPrimary: true },
      { id: "cans", label: "Cans to buy", format: "number", decimals: 0, unit: "gal cans", isPrimary: false, description: "Rounded up" },
      { id: "litres", label: "Equivalent", format: "number", decimals: 2, unit: "L", isPrimary: false },
    ],
    formula: "gallons = ((wall area − deductions) × coats) ÷ coverage per gallon",
    explanation:
      "A paint calculator estimates how much paint a job needs before you set foot in the store, turning wall measurements into gallons, litres and the number of cans to buy. It takes the total surface area, subtracts the openings you will not paint such as doors and windows, multiplies by the number of coats, then divides by the coverage rate printed on the tin — usually 350 to 400 square feet per gallon on smooth interior walls. Getting the quantity right matters in both directions. Buy too little and you interrupt the work with a second trip, risking a visible seam where a fresh can meets dried paint or a slightly different batch. Buy far too much and money sits unused on the shelf. A paint calculator removes that guesswork and gives a defensible figure for budgeting. The area-times-coats-over-coverage method is used because paint is sold and rated by area coverage, so the arithmetic mirrors exactly how manufacturers specify their product. Homeowners, decorators, landlords and professional painters lean on a paint calculator when planning a room refresh, quoting a client, or ordering for a whole property, then round up to whole cans to keep a small reserve for touch-ups.",
    formulaExplanation:
      "Wall area minus deductions is the surface you will actually cover, since doors and windows take no paint. Multiplying by the number of coats accounts for each pass adding another full layer of area to cover. Dividing that total by the coverage rate per gallon converts square feet into gallons, because the coverage figure states how far one gallon stretches. Rounding up to whole cans reflects how paint is sold.",
    formulaSource: "Standard paint coverage estimation",
    example: {
      inputs: { wallArea: 800, deductions: 60, coats: 2, coverage: 350 },
      explanation: "(800 − 60) × 2 = 1,480 sq ft of coverage needed. 1,480 ÷ 350 ≈ 4.23 gallons, so buy 5 one-gallon cans.",
    },
    faqs: [
      { question: "How much paint do I need for one room?", answer: "Measure the perimeter of the room and multiply by the wall height to get the total wall area, then subtract roughly 20 square feet for each door and 15 for each window. A typical 12 by 12 foot room with 8 foot ceilings has around 384 square feet of wall, which needs a little over one gallon per coat. Enter your own figures above for an exact result including the ceiling if you are painting it." },
      { question: "How much does a gallon of paint cover?", answer: "Most interior wall paints cover about 350 to 400 square feet per gallon in a single coat on smooth, previously painted surfaces. Rough, textured, porous or bare surfaces drink more and can drop coverage to 250 square feet or less. Dark colours going over light ones, or vivid reds and yellows, often need extra paint because they hide poorly. Always check the coverage figure on your specific product." },
      { question: "How many coats of paint do I need?", answer: "Two coats is the standard for even colour, full coverage and lasting durability, and it is what manufacturers assume in their coverage ratings. One coat may suffice when you are repainting the same colour or refreshing a wall in good condition. Expect three coats when moving from a dark shade to a much lighter one, painting bare drywall, or using a strong colour that struggles to hide the surface beneath." },
      { question: "Should I buy extra paint?", answer: "Yes. Rounding up to whole cans, as this tool does, usually leaves a useful reserve, and keeping that leftover from the same batch is worth it. Touch-ups over the following years blend invisibly when they come from the original can, whereas a freshly mixed batch can differ subtly in shade. Store the sealed can somewhere cool and label it with the room and colour name for easy identification later." },
      { question: "Does primer count as a coat?", answer: "Treat primer as its own separate layer, not one of your colour coats. Primer seals the surface, blocks stains and helps the topcoat adhere and cover evenly, but it is not the finish. If your surface is bare, patched, glossy or changing colour dramatically, add one primer coat and calculate it separately using the primer's own coverage rate, then apply your two colour coats on top for the best result." },
    ],
    relatedCalculators: ["concrete-calculator", "tile-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
