import type { CalculatorDefinition } from "../types";

export const businessExtraCalculators: CalculatorDefinition[] = [
  {
    id: "revenue",
    slug: "revenue-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Revenue Calculator",
    shortDescription: "Calculate revenue and gross profit from sales.",
    seoTitle: "Revenue Calculator — Sales Revenue & Gross Profit",
    metaDescription:
      "Free revenue calculator. Work out total revenue from units sold and price, plus cost, gross profit and margin.",
    primaryKeyword: "revenue calculator",
    secondaryKeywords: ["sales revenue calculator", "gross profit calculator", "total revenue"],
    fields: [
      { id: "units", label: "Units sold", type: "number", placeholder: "500", required: true, span: 1, min: 0 },
      { id: "price", label: "Price per unit", type: "number", unit: "$", placeholder: "40", required: true, span: 1, min: 0, step: 0.01 },
      { id: "unitCost", label: "Cost per unit", type: "number", unit: "$", placeholder: "22", required: false, span: 2, min: 0, step: 0.01, helpText: "Optional — adds gross profit and margin." },
    ],
    results: [
      { id: "revenue", label: "Total revenue", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "grossProfit", label: "Gross profit", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "cost", label: "Total cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "margin", label: "Gross margin", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "Revenue = units × price · Gross profit = revenue − units × unit cost",
    explanation:
      "A revenue calculator converts the two numbers every seller already knows — how many units went out and what each one sold for — into total sales income, and then into the profitability figures that actually guide decisions. Multiply units by price and you have top-line revenue. Add an optional cost per unit and the tool layers on total cost of goods, gross profit, and gross margin as a share of revenue. Revenue is the headline that funds everything a business does, but on its own it says nothing about whether the business is viable. A high revenue calculator reading paired with a razor-thin margin can be more fragile than a smaller number earned at a healthy spread. Separating the two is why margin appears alongside the total here. The multiply-then-subtract method is used because it mirrors how an income statement is built from the top down: sales first, direct costs next, gross profit as the difference. Founders, shop owners, sales teams and finance staff reach for a revenue calculator when pricing a product, forecasting a launch, comparing suppliers, or sanity-checking whether a promised order will genuinely move the business forward once the cost of goods is honestly counted.",
    formulaExplanation:
      "Units multiplied by price gives total revenue, because every unit contributes the same sale value. Units multiplied by unit cost gives the direct cost of producing what you sold. Subtracting that cost from revenue leaves gross profit — the money left before overhead. Expressing gross profit as a percentage of revenue yields the margin, a scale-free figure you can compare across products of very different prices.",
    formulaSource: "Standard financial formula",
    example: {
      inputs: { units: 500, price: 40, unitCost: 22 },
      explanation: "Revenue = 500 × $40 = $20,000. Cost = 500 × $22 = $11,000. Gross profit = $9,000, a 45% margin.",
    },
    faqs: [
      { question: "What is the difference between revenue and profit?", answer: "Revenue is the total money customers pay you for goods sold, before any costs are removed. Profit is what actually stays with the business after costs. Gross profit subtracts only the direct cost of the goods, while net profit goes further and subtracts rent, wages, marketing, tax and every other operating expense. A company can post large revenue and still lose money, which is why the two are never interchangeable." },
      { question: "How do I calculate total revenue?", answer: "Multiply the number of units sold by the price charged for each unit; that product is your total revenue for the period. If you sell several products at different prices, calculate revenue for each line and add the results together. For subscriptions or services, replace units with the number of billing cycles or hours and price with the fee per cycle. The method is identical — quantity times price, summed." },
      { question: "Is this gross profit or net profit?", answer: "The profit shown here is gross profit, based only on the per-unit cost you enter. It tells you how much each sale contributes before overhead. Net profit would also subtract operating expenses such as salaries, rent, software, advertising and tax. To reach net profit, take the gross profit from this tool and deduct every fixed and indirect cost your business carries over the same period." },
      { question: "What is a good gross margin?", answer: "It depends heavily on the industry. Physical retail and grocery often run on gross margins of 20 to 40 percent, software and digital products frequently exceed 80 percent, and manufacturing sits somewhere in between. Rather than chasing a headline figure, compare your margin against direct competitors and against your own history. A margin that is stable or rising while sales grow is the healthier signal to watch." },
      { question: "Do I need to enter a cost per unit?", answer: "No. Cost is optional. Leave it blank and the tool simply returns total revenue from units and price, which is useful for quick sales forecasts. Enter a cost and it unlocks total cost of goods, gross profit and gross margin in one step. Enter your fully loaded per-unit cost — materials, direct labour and inbound shipping — for the most accurate profitability picture rather than the sticker price alone." },
    ],
    relatedCalculators: ["profit-margin-calculator", "break-even-calculator", "cash-flow-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "cash-flow",
    slug: "cash-flow-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Cash Flow Calculator",
    shortDescription: "Track net cash flow and ending balance.",
    seoTitle: "Cash Flow Calculator — Net Cash Flow & Balance",
    metaDescription:
      "Free cash flow calculator. Find net cash flow from inflows and outflows and your ending balance for the period.",
    primaryKeyword: "cash flow calculator",
    secondaryKeywords: ["net cash flow calculator", "cash flow statement", "ending balance"],
    fields: [
      { id: "start", label: "Beginning balance", type: "number", unit: "$", placeholder: "5000", required: false, span: 2, min: 0 },
      { id: "inflows", label: "Cash inflows", type: "number", unit: "$", placeholder: "12000", required: true, span: 1, min: 0, helpText: "Money received this period." },
      { id: "outflows", label: "Cash outflows", type: "number", unit: "$", placeholder: "9000", required: true, span: 1, min: 0, helpText: "Money spent this period." },
    ],
    results: [
      { id: "net", label: "Net cash flow", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "ending", label: "Ending balance", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Net cash flow = inflows − outflows · Ending = beginning + net",
    explanation:
      "A cash flow calculator tracks the actual money entering and leaving a business over a chosen period, then reports two figures that matter more than almost any other to day-to-day survival: net cash flow and the ending balance. Net cash flow is simply everything received minus everything paid out. Add that to the balance you started with and you have the cash genuinely available at the end of the period. Cash, not profit, is what pays wages, suppliers and rent. A business can be profitable on paper yet fail because invoices are unpaid, stock is tied up, or a tax bill lands before the money arrives. A cash flow calculator makes that timing gap visible in seconds, which is why lenders and investors scrutinise it as closely as the profit line. The inflow-minus-outflow method is used because it reflects real bank movement rather than accounting accruals, so the result is the number you could actually withdraw. Small business owners, bookkeepers, startup founders and household budgeters use a cash flow calculator to check a month before it happens, decide whether a large purchase is safe, spot a looming shortfall early, and prove to a bank that the business can comfortably cover its commitments.",
    formulaExplanation:
      "Inflows are every dollar received in the period; outflows are every dollar paid. Subtracting outflows from inflows gives net cash flow, the true change in your cash position, positive when more arrived than left. Adding that change to the beginning balance produces the ending balance, because your closing cash is simply what you started with plus or minus the net movement during the period.",
    formulaSource: "Standard financial (cash-flow) accounting",
    example: {
      inputs: { start: 5000, inflows: 12000, outflows: 9000 },
      explanation: "Net = $12,000 − $9,000 = $3,000. Ending balance = $5,000 + $3,000 = $8,000.",
    },
    faqs: [
      { question: "Is cash flow the same as profit?", answer: "No, and confusing them sinks businesses. Profit is an accounting measure that records a sale when it is earned, even if the customer has not paid yet. Cash flow tracks money actually moving through the bank account. A profitable company can run out of cash when customers pay late, inventory is bought upfront, or loan repayments fall due. Both numbers matter, but only cash flow tells you whether you can meet this week's bills." },
      { question: "What does negative cash flow mean?", answer: "It means more cash left the business than came in during the period, so your closing balance fell. A single negative month is often harmless — you may have prepaid stock, equipment or an annual bill. Sustained negative cash flow is a serious warning: it signals the business is steadily draining its reserves and will eventually be unable to pay. Identify the cause quickly, whether it is slow receivables, overspending or falling sales." },
      { question: "What counts as a cash inflow?", answer: "An inflow is any money actually received during the period: customer payments, cash sales, loan proceeds, investor funding, tax refunds and interest earned. The test is whether the cash has genuinely landed in your account, not whether a sale has been agreed. Outflows are the mirror image — supplier payments, wages, rent, loan repayments, tax and equipment purchases. Record each item in the period the money moves, not when the deal was struck." },
      { question: "How can I improve my cash flow?", answer: "Speed up money coming in and slow money going out without breaking trust. Invoice immediately, shorten payment terms, chase overdue accounts, and offer small discounts for early payment. On the outflow side, negotiate longer supplier terms, spread large purchases, and keep inventory lean so cash is not trapped on shelves. Build a reserve covering several months of outflows so a single late payment never threatens payroll or rent." },
      { question: "How often should I check cash flow?", answer: "Monthly is the minimum for any active business, and weekly is wise when margins are tight, growth is fast, or cash is already stretched. Frequent checks turn a nasty surprise into an early warning you can act on. Pair a backward-looking review of what happened with a simple forward forecast of expected inflows and outflows, so you can see a shortfall coming while there is still time to arrange cover." },
    ],
    relatedCalculators: ["revenue-calculator", "break-even-calculator", "freelance-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
