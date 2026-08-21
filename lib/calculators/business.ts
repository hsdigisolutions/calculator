import type { CalculatorDefinition } from "../types";

export const businessCalculators: CalculatorDefinition[] = [
  {
    id: "freelance-rate",
    slug: "freelance-rate-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Freelance Rate Calculator",
    shortDescription: "Work out the hourly rate you need to charge.",
    seoTitle: "Freelance Rate Calculator — Free Hourly Rate Tool",
    metaDescription:
      "Free freelance rate calculator. Find the hourly and day rate you need to charge to hit your income goal after expenses, taxes and unbillable time.",
    primaryKeyword: "freelance rate calculator",
    secondaryKeywords: ["hourly rate calculator", "freelance hourly rate", "contractor rate calculator"],
    fields: [
      { id: "targetIncome", label: "Target take-home income", type: "number", unit: "$", placeholder: "70000", required: true, span: 1, min: 0 },
      { id: "expenses", label: "Annual business expenses", type: "number", unit: "$", placeholder: "8000", required: false, span: 1, min: 0 },
      { id: "billableHours", label: "Billable hours / week", type: "number", placeholder: "25", required: true, span: 1, min: 0, helpText: "Realistic hours you can actually invoice." },
      { id: "weeks", label: "Working weeks / year", type: "number", placeholder: "48", required: false, span: 1, min: 0, defaultValue: 48 },
      { id: "taxRate", label: "Tax & buffer", type: "number", unit: "%", placeholder: "25", required: false, span: 2, min: 0, max: 99, helpText: "Percentage set aside for tax and margin." },
    ],
    results: [
      { id: "hourlyRate", label: "Hourly rate", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "dayRate", label: "Day rate (8h)", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "weeklyRevenue", label: "Weekly revenue", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "rate = ((income + expenses) ÷ (1 − tax%)) ÷ (billable hours × weeks)",
    explanation:
      "A freelance rate calculator turns an annual income goal into the hourly and day rate you actually need to charge. It starts from the take-home pay you want, grosses that figure up to cover income tax and a profit buffer, adds your yearly business expenses, then spreads the total across the hours you can genuinely invoice over a year. The output is a sustainable rate rather than a number pulled from thin air or copied from a competitor. This matters because freelancers rarely bill more than half of their working week. Sales calls, admin, marketing, sick days and holidays are all unpaid, yet they still consume time and money. Charging a salaried hourly equivalent quietly guarantees a loss once tax and overhead land, and a freelance rate calculator exposes that gap and prices it in. The gross-up method is used because tax and expenses come off the top of every invoice, so they must be built into the rate rather than bolted on afterwards. New contractors, consultants, designers, developers and agencies rely on this freelance rate calculator when setting proposals, negotiating retainers, or checking whether an existing rate still supports their target lifestyle after a year of real costs.",
    formulaExplanation:
      "The income plus expenses figure is the total revenue your business must collect. Dividing by one minus the tax rate grosses that up, so the rate still delivers your target after tax and margin are stripped out. Billable hours multiplied by working weeks is the realistic annual pool of invoiceable time. Dividing the required revenue by that pool spreads every cost across the hours you can actually sell.",
    formulaSource: "Standard business pricing method",
    example: {
      inputs: { targetIncome: 70000, expenses: 8000, billableHours: 25, weeks: 48, taxRate: 25 },
      explanation: "($70,000 + $8,000) ÷ 0.75 = $104,000 needed. Over 25 × 48 = 1,200 billable hours, that's about $86.67/hour.",
    },
    faqs: [
      { question: "What is a good hourly rate for a freelancer?", answer: "There is no universal number — a sustainable rate depends on your income goal, expenses and billable capacity, which is exactly what this tool calculates. As a benchmark, established freelancers in skilled fields often charge two to three times the hourly wage of an equivalent salaried role, because that multiple absorbs tax, overhead and unpaid time. Run your own figures rather than copying a headline rate you saw online." },
      { question: "How many billable hours can I realistically expect?", answer: "Most full-time freelancers bill between 20 and 30 hours a week once admin, marketing, invoicing and downtime are removed. Assuming you can invoice all 40 hours is the single most common pricing mistake, because it sets your rate far too low. Track a few typical weeks and use the honest average. If you are part-time or juggling clients, start conservative and raise the figure as your pipeline stabilises." },
      { question: "Should I charge by the hour or a fixed project price?", answer: "Fixed pricing usually earns more once you know how long a task takes, because clients buy the outcome rather than your clock. Use your calculated hourly rate as the floor: estimate the hours a project needs, multiply, then add a margin for revisions and risk. Hourly billing suits open-ended or unpredictable work, while flat fees reward efficiency and remove the awkwardness of justifying every logged minute." },
      { question: "How much should I set aside for tax?", answer: "Set aside enough to cover income tax plus self-employment or national insurance contributions, which together commonly reach 25 to 35 percent of profit depending on your country and bracket. Treat the tax field here as a rough buffer, not a filing figure. Move that percentage into a separate account the moment each invoice clears, so the money is never mistaken for spendable income. Confirm the exact rate with an accountant." },
      { question: "How do I raise my rate with existing clients?", answer: "Give notice, tie the increase to added value, and raise it in a single clear step rather than apologising for it. Tell existing clients the new rate and an effective date a month or two out, reference results you have delivered, and offer a brief transition. Most reasonable clients accept a considered rise; those who leave over a fair rate were rarely profitable to keep. Onboard new clients at the higher rate immediately." },
    ],
    relatedCalculators: ["revenue-calculator", "cash-flow-calculator", "roi-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
