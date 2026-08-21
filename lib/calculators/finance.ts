import type { CalculatorDefinition } from "../types";

export const financeCalculators: CalculatorDefinition[] = [
  {
    id: "mortgage",
    slug: "mortgage-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Mortgage Calculator",
    shortDescription: "Estimate your monthly mortgage payment.",
    seoTitle: "Mortgage Calculator — Free Monthly Payment Estimator",
    metaDescription:
      "Free mortgage calculator. Estimate your monthly payment, total interest and total cost from the home price, down payment, rate and term.",
    primaryKeyword: "mortgage calculator",
    secondaryKeywords: ["monthly mortgage payment", "home loan calculator", "mortgage payment calculator"],
    fields: [
      { id: "homePrice", label: "Home price", type: "number", unit: "$", placeholder: "400000", required: true, span: 1, min: 0 },
      { id: "downPayment", label: "Down payment", type: "number", unit: "$", placeholder: "80000", required: false, span: 1, min: 0 },
      { id: "rate", label: "Interest rate", type: "number", unit: "%", placeholder: "6.5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "term", label: "Loan term", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 1 },
    ],
    results: [
      { id: "monthlyPayment", label: "Monthly payment", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "Principal & interest" },
      { id: "principal", label: "Loan amount", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalInterest", label: "Total interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalPaid", label: "Total of payments", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "M = P × r ÷ (1 − (1 + r)^−n), where r = annual rate ÷ 12 and n = years × 12",
    explanation:
      "Your monthly mortgage payment is the fixed amount you send your lender each month to repay a home loan, split between interest on the outstanding balance and principal that steadily reduces what you owe. Knowing this number before you shop matters because it decides whether a home fits your budget and how lenders judge affordability against your income. This mortgage calculator derives the loan amount by subtracting your down payment from the home price, then applies the standard fixed-rate amortization formula so every payment across the term is identical. That formula is used because it guarantees the balance reaches exactly zero at the final payment while front-loading interest — early payments are mostly interest, later ones mostly principal. A larger down payment or a shorter term lowers the total interest a mortgage calculator will project, sometimes dramatically. Homebuyers, real estate agents and loan officers rely on a mortgage calculator to compare offers, test how rate changes ripple through the monthly cost, and set a realistic price ceiling. Remember the result covers principal and interest only; property taxes, homeowners insurance, private mortgage insurance and HOA dues are billed separately and can add hundreds of dollars to your true monthly housing cost.",
    formulaExplanation:
      "The payment formula is the present value of an annuity solved for the payment. P is the loan amount, r the monthly rate, and n the total months. Dividing by (1 − (1 + r)^−n) spreads that principal across n payments while charging interest each month on the shrinking balance. Because the balance falls over time, a constant payment keeps interest and principal in step so the loan ends exactly at zero.",
    example: {
      inputs: { homePrice: 400000, downPayment: 80000, rate: 6.5, term: 30 },
      explanation: "A $320,000 loan at 6.5% over 30 years (360 payments) gives a monthly principal-and-interest payment of about $2,022.",
    },
    faqs: [
      { question: "What is a good interest rate on a mortgage?", answer: "A competitive rate depends on the market, your credit score, the loan term and your down payment. Borrowers with strong credit and 20% down typically secure the lowest advertised rates, while lower scores pay a premium. Even a quarter-point difference changes thousands over a 30-year loan. Compare offers from several lenders on the same day, since rates move daily, and always check the APR, which folds in fees." },
      { question: "How much should my down payment be?", answer: "Twenty percent is the classic benchmark because it removes private mortgage insurance and shrinks the loan, but many buyers put down far less. Conventional loans can start near 3%, FHA loans at 3.5%, and some VA and USDA loans require nothing down. A bigger down payment lowers your monthly payment and total interest, yet draining your savings for it can leave you exposed, so balance both goals." },
      { question: "How accurate is this mortgage calculator?", answer: "The math is exact for a fixed-rate loan: it reproduces an amortization schedule to the cent. It is only an estimate of your true housing cost because it excludes property taxes, homeowners and mortgage insurance, HOA fees and closing costs. Adjustable-rate mortgages also reset after their intro period, which this fixed-rate model does not capture. Treat the principal-and-interest figure as reliable and add the escrow items separately." },
      { question: "What is the difference between principal and interest?", answer: "Principal is the portion of each payment that reduces the balance you actually borrowed; interest is the lender's charge for lending it, calculated on the remaining balance. Early in the loan the balance is large, so most of your payment is interest. As the balance falls, more of each fixed payment goes to principal. This is why paying extra toward principal early saves a disproportionate amount of interest." },
      { question: "Can I use this for a refinance?", answer: "Yes. Enter your new loan amount as the home price with a zero down payment, plus the new rate and remaining term, and the tool projects the refinanced payment. Compare it against your current payment to see the monthly savings, then weigh that against closing costs to find your break-even point. A refinance that lowers the payment by extending the term can still raise total interest paid." },
    ],
    relatedCalculators: ["loan-calculator", "compound-interest-calculator", "roi-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/owning-a-home/",
  },
  {
    id: "compound-interest",
    slug: "compound-interest-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Compound Interest Calculator",
    shortDescription: "See how savings grow with compound interest.",
    seoTitle: "Compound Interest Calculator — Free Investment Growth Tool",
    metaDescription:
      "Free compound interest calculator. Project the future value of savings or investments with regular contributions, and see total interest earned.",
    primaryKeyword: "compound interest calculator",
    secondaryKeywords: ["investment growth calculator", "future value calculator", "savings growth"],
    fields: [
      { id: "principal", label: "Initial amount", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "contribution", label: "Monthly contribution", type: "number", unit: "$", placeholder: "200", required: false, span: 1, min: 0 },
      { id: "rate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "7", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years", type: "number", placeholder: "20", required: true, span: 1, min: 0 },
      {
        id: "frequency", label: "Compounding", type: "select", required: false, span: 2, defaultValue: "12",
        options: [
          { value: "1", label: "Annually" },
          { value: "2", label: "Semi-annually" },
          { value: "4", label: "Quarterly" },
          { value: "12", label: "Monthly" },
          { value: "365", label: "Daily" },
        ],
      },
    ],
    results: [
      { id: "futureValue", label: "Future value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalContributions", label: "Total contributed", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalInterest", label: "Interest earned", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "FV = P(1 + r/n)^(nt) + PMT × [((1 + i)^m − 1) ÷ i]",
    explanation:
      "Compound interest is the growth you earn when interest is added back to your balance and then earns interest of its own, so the account grows faster the longer it runs. The future value shown here is the projected balance once that snowball effect has compounded your initial deposit and every monthly contribution to the end of the period. Understanding it matters because compounding is the single largest driver of long-term wealth, and small differences in rate, time or contribution size lead to strikingly different outcomes. This compound interest calculator applies the exponential growth factor to your starting amount at the frequency you choose, then adds the future value of your contribution stream, treated as a series of monthly deposits. The exponential formula is used because each period multiplies the whole balance — principal plus all prior interest — by the same growth factor, which is precisely what compounding means. Savers, investors and financial planners lean on a compound interest calculator to set retirement targets, weigh a lump sum against steady contributions, and see why starting early beats contributing more later. Because it assumes a constant return, treat the projection from any compound interest calculator as a planning estimate rather than a promise; real markets rise and fall year to year.",
    formulaExplanation:
      "P is the starting principal, r the annual rate, n the compounds per year and t the years, so (1 + r/n)^(nt) is the growth factor applied once per period. Raising it to the total number of periods captures interest repeatedly earning interest. The contribution term sums each monthly deposit's own growth as a geometric series, dividing by the periodic rate i to total every deposit compounded to the end date.",
    example: {
      inputs: { principal: 10000, contribution: 200, rate: 7, years: 20, frequency: "12" },
      explanation: "$10,000 plus $200/month at 7% compounded monthly for 20 years grows to roughly $143,000, of which about $75,000 is interest.",
    },
    faqs: [
      { question: "How is compound interest calculated?", answer: "The balance is multiplied by a growth factor each period rather than earning a flat amount. For the initial deposit, that factor is (1 + r/n) applied nt times, where r is the annual rate, n the compounds per year and t the years. Regular contributions are handled as a separate annuity and added on. Because each period grows the whole balance, interest earned earlier itself earns interest, which is the compounding effect." },
      { question: "What is the difference between simple and compound interest?", answer: "Simple interest is charged only on the original principal, so it grows in a straight line. Compound interest is charged on the principal plus all interest already added, so growth accelerates over time. On a 20-year horizon the gap is enormous: compounding at 7% roughly quadruples a lump sum, while simple interest at the same rate only about doubles it. Longer periods widen the difference." },
      { question: "Does compounding frequency really matter?", answer: "It helps, but less than people expect. Moving from annual to monthly compounding at a typical rate adds only a fraction of a percent to the effective yield, because the extra credits are small. Time in the market and the contribution amount dominate the outcome. Compare accounts by their APY, which already bakes in the compounding frequency, rather than the stated nominal rate alone." },
      { question: "How can I reach a savings goal faster?", answer: "Three levers move the future value: contribute more each month, earn a higher rate, or give the money more time. Time is usually the most powerful because it multiplies every contribution's compounding. Increasing the monthly deposit has a direct, predictable effect, while chasing a higher rate adds risk. Front-loading contributions early in the period also beats adding the same money later." },
      { question: "Are these projections guaranteed?", answer: "No. The calculator assumes a single, constant rate of return for the whole period, but real investments fluctuate and can lose value in any given year. Use it to compare scenarios and set targets, not as a promise of a specific balance. For volatile assets, run a conservative and an optimistic rate to bracket the likely range rather than trusting one figure." },
    ],
    relatedCalculators: ["roi-calculator", "mortgage-calculator", "savings-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "roi",
    slug: "roi-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "ROI Calculator",
    shortDescription: "Measure return on investment as a percentage.",
    seoTitle: "ROI Calculator — Free Return on Investment Calculator",
    metaDescription:
      "Free ROI calculator. Work out return on investment and net profit from your initial and final amounts, plus annualized ROI over time.",
    primaryKeyword: "roi calculator",
    secondaryKeywords: ["return on investment calculator", "annualized roi", "investment return"],
    fields: [
      { id: "initial", label: "Initial investment", type: "number", unit: "$", placeholder: "5000", required: true, span: 1, min: 0 },
      { id: "final", label: "Final value", type: "number", unit: "$", placeholder: "8000", required: true, span: 1, min: 0 },
      { id: "years", label: "Holding period", type: "number", unit: "years", placeholder: "3", required: false, span: 2, min: 0, helpText: "Optional — used to calculate annualized ROI." },
    ],
    results: [
      { id: "roi", label: "ROI", format: "percentage", decimals: 2, isPrimary: true },
      { id: "netProfit", label: "Net profit", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "annualized", label: "Annualized ROI", format: "percentage", decimals: 2, isPrimary: false, description: "Requires a holding period" },
    ],
    formula: "ROI (%) = ((final − initial) ÷ initial) × 100",
    explanation:
      "Return on investment is your gain or loss expressed as a percentage of what you originally put in, turning a raw dollar profit into a figure you can compare across deals of any size. That percentage matters because $3,000 of profit tells you little on its own — it is excellent on a $5,000 stake and mediocre on a $500,000 one — while a percentage puts every opportunity on the same footing. This roi calculator divides net profit by the initial investment, the standard definition used precisely because it is simple, universal and dimensionless, so a marketing campaign, a stock position and a rental property can all be ranked by the same number. When you supply a holding period, the roi calculator also reports annualized ROI, which restates the total return as an equivalent yearly rate so a 60% gain over three years can be compared fairly against a 25% gain over one. Business owners, marketers, investors and analysts use an roi calculator to justify spending, choose between projects and report performance to stakeholders. Keep in mind that ROI captures return only — it ignores risk, timing of cash flows and inflation — so pair it with those factors before committing capital.",
    formulaExplanation:
      "ROI subtracts the initial investment from the final value to isolate net profit, then divides by the initial investment so the gain is measured relative to what you risked. Multiplying by 100 turns the ratio into a percentage. Annualized ROI takes the ending-to-starting ratio and raises it to the power of one divided by the number of years, undoing compounding to reveal the steady yearly rate that would produce the same total result.",
    example: {
      inputs: { initial: 5000, final: 8000, years: 3 },
      explanation: "A gain from $5,000 to $8,000 is a $3,000 net profit and a 60% total ROI. Over 3 years, that's about 17% annualized.",
    },
    faqs: [
      { question: "What is a good ROI?", answer: "There is no universal figure — it depends on the asset class, the time frame and the risk taken. As a reference, the broad stock market has returned roughly 7–10% a year on average, so a long-term investment beating that is doing well. A marketing campaign might target several hundred percent. Always judge ROI against a comparable low-risk alternative and against inflation, which quietly erodes real returns." },
      { question: "What is the difference between ROI and annualized ROI?", answer: "Plain ROI is the total percentage gain over the entire holding period, regardless of how long that was. Annualized ROI compresses that total into an equivalent per-year rate, accounting for compounding. A 60% total return sounds large, but spread over three years it is about 17% a year. Use annualized ROI whenever you compare investments held for different lengths of time — otherwise the comparison is misleading." },
      { question: "Does ROI account for risk?", answer: "No. ROI measures return only and says nothing about the chance of loss or the volatility along the way. Two investments can show an identical ROI while one is a government bond and the other a speculative startup. Always read ROI alongside a risk measure — such as the range of possible outcomes or the asset's historical volatility — before deciding whether the return justifies the exposure." },
      { question: "Can I use this for marketing or business projects?", answer: "Yes. Enter the total cost of the initiative as the initial investment and the revenue or value it generated as the final value. The tool then reports the percentage return and net profit, which is exactly how marketers evaluate campaigns and how managers rank competing projects. For campaigns measured on ad spend specifically, a dedicated ROAS calculation isolates revenue per advertising dollar." },
      { question: "How is annualized ROI calculated?", answer: "It takes the ratio of the final value to the initial value, raises that ratio to the power of one divided by the number of years, and subtracts one. This reverses the effect of compounding to find the constant yearly rate that would grow the initial amount to the final amount over the period. It requires a holding period, which is why the field is optional but needed for that result." },
    ],
    relatedCalculators: ["compound-interest-calculator", "mortgage-calculator", "roas-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Standard financial formula",
  },
];
