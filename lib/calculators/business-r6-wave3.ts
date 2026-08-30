import type { CalculatorDefinition } from "../types";

export const businessR6Calculators: CalculatorDefinition[] = [
  {
    id: "gross-profit",
    slug: "gross-profit-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Gross Profit Calculator",
    shortDescription: "Find gross profit and gross margin from revenue and COGS.",
    seoTitle: "Gross Profit Calculator — Gross Profit & Margin",
    metaDescription:
      "Free gross profit calculator. Subtract cost of goods sold from revenue to get gross profit and gross margin percentage instantly.",
    primaryKeyword: "gross profit calculator",
    secondaryKeywords: ["gross margin calculator", "cogs calculator", "gross profit formula"],
    fields: [
      { id: "revenue", label: "Revenue", type: "number", unit: "$", placeholder: "100000", required: true, span: 1, min: 0 },
      { id: "cogs", label: "Cost of goods sold", type: "number", unit: "$", placeholder: "60000", required: true, span: 1, min: 0, helpText: "Direct cost of the goods you sold." },
    ],
    results: [
      { id: "grossProfit", label: "Gross profit", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "grossMargin", label: "Gross margin", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "Gross profit = revenue − COGS · Gross margin = gross profit ÷ revenue × 100",
    explanation:
      "A gross profit calculator strips a business down to its most honest performance figure: the money left after paying for the goods actually sold, before any overhead is counted. You enter total revenue and the cost of goods sold — the direct materials, direct labour and inbound freight tied to producing what you delivered — and the tool returns gross profit in dollars and gross margin as a percentage of sales. Gross profit is the wellspring that must fund every other cost a company carries: rent, salaries, marketing, software, interest and tax all get paid out of it. If gross profit is thin, no amount of cost-cutting elsewhere can rescue the business, because there was never enough spread between price and product cost to begin with. That is why lenders, buyers and operators look at gross margin before almost anything else. The subtract-then-divide method used here mirrors the top of an income statement, where sales sit first and direct costs are removed immediately to reveal the trading profit. Founders use a gross profit calculator to price products, compare suppliers, judge whether a discount is survivable, and track whether margins are holding as they scale. A rising gross margin alongside growing revenue is one of the clearest signs a business model is genuinely working.",
    formulaExplanation:
      "Revenue is the total sales value for the period and COGS is the direct cost of producing those specific sales. Subtracting COGS from revenue isolates gross profit, the trading surplus available before overhead. Dividing that surplus by revenue and multiplying by 100 converts it into gross margin, a scale-free percentage. Margin lets you compare a low-priced, high-volume product against a premium one, because it measures the spread rather than the raw dollar amount.",
    formulaSource: "Standard financial (income-statement) accounting",
    example: {
      inputs: { revenue: 100000, cogs: 60000 },
      explanation: "Gross profit = $100,000 − $60,000 = $40,000. Gross margin = 40,000 ÷ 100,000 = 40%.",
    },
    faqs: [
      { question: "What is the difference between gross profit and net profit?", answer: "Gross profit subtracts only the direct cost of goods sold from revenue, showing the trading surplus before overhead. Net profit goes much further and removes every operating expense — rent, salaries, marketing, interest and tax — to reveal what the business actually keeps. Gross profit tells you whether your pricing beats your product cost; net profit tells you whether the whole operation makes money once all bills are paid." },
      { question: "What counts as cost of goods sold?", answer: "COGS includes only the direct costs of producing the goods or services you sold in the period: raw materials, components, the direct labour that makes the product, and inbound freight. It excludes indirect costs such as head-office salaries, rent, advertising, administrative software and distribution. The rule of thumb is that a cost belongs in COGS if it rises and falls directly with how many units you produce and sell rather than staying fixed each month." },
      { question: "What is a good gross margin?", answer: "It varies enormously by industry. Grocery and physical retail often run gross margins of 20 to 40 percent, manufacturing sits in the middle, and software or digital products frequently exceed 80 percent because the cost to serve one more customer is tiny. Rather than chase a universal number, benchmark against direct competitors and against your own trend. A margin that stays stable or climbs as you grow is the signal that pricing power and cost control are both holding." },
      { question: "Can gross profit be negative?", answer: "Yes. If the cost of goods sold exceeds the revenue those goods generated, gross profit is negative, and the margin is below zero. This means you are effectively paying customers to take the product — every sale deepens the loss before a single overhead cost is added. Negative gross profit is a red flag that demands an immediate fix: raise prices, cut supplier costs, drop the loss-making line, or rework the product so it can be delivered profitably." },
      { question: "How can I improve my gross margin?", answer: "Work both sides of the spread. On price, test increases, reduce unnecessary discounting, and package higher-value bundles that customers happily pay more for. On cost, renegotiate supplier terms, buy in larger runs where it lowers unit cost, cut waste and rework, and shift volume toward your higher-margin products. Even a few points of gross-margin improvement flow straight down toward the bottom line, because the overhead below it barely changes when margin rises." },
    ],
    relatedCalculators: ["revenue-calculator", "profit-margin-calculator", "net-profit-margin-calculator", "operating-margin-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "operating-margin",
    slug: "operating-margin-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Operating Margin Calculator",
    shortDescription: "Measure operating profitability as a share of revenue.",
    seoTitle: "Operating Margin Calculator — Operating Profit Margin",
    metaDescription:
      "Free operating margin calculator. Divide operating income by revenue to see what share of every sales dollar survives operating costs.",
    primaryKeyword: "operating margin calculator",
    secondaryKeywords: ["operating profit margin", "operating income margin", "ebit margin calculator"],
    fields: [
      { id: "operatingIncome", label: "Operating income", type: "number", unit: "$", placeholder: "25000", required: true, span: 1, helpText: "Profit after COGS and operating expenses (EBIT)." },
      { id: "revenue", label: "Revenue", type: "number", unit: "$", placeholder: "125000", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "operatingMargin", label: "Operating margin", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "Operating margin = operating income ÷ revenue × 100",
    explanation:
      "An operating margin calculator reveals how much of every sales dollar survives after a company pays both the direct cost of its goods and the operating expenses needed to run the business — but before interest and tax. You enter operating income, also called EBIT or operating profit, together with total revenue, and the tool returns operating margin as a percentage. This figure is a far tougher test than gross margin because it absorbs the whole cost of actually operating: salaries, rent, marketing, administration, research and depreciation. A company can boast a fat gross margin yet post a weak operating margin if its overhead is bloated, and that gap is exactly what this calculator exposes. Investors prize operating margin because it isolates the profitability of the core business from financing decisions and tax quirks that vary between companies and countries, making it one of the cleanest ways to compare two firms in the same industry. Managers watch it to judge whether growth is efficient or whether costs are creeping up faster than sales. The divide method used here expresses profit relative to size, so a corner shop and a national chain can be compared on the same footing. A stable or widening operating margin signals disciplined, scalable operations, while a shrinking one warns that costs are outrunning revenue.",
    formulaExplanation:
      "Operating income is what remains after both cost of goods sold and every operating expense are subtracted from revenue, but before interest and tax. Dividing it by revenue and multiplying by 100 shows the percentage of each sales dollar that the core operation keeps. Because the ratio removes financing and tax effects, it isolates operational efficiency, letting you compare businesses of different sizes and capital structures purely on how well they turn sales into operating profit.",
    formulaSource: "Standard financial (income-statement) accounting",
    example: {
      inputs: { operatingIncome: 25000, revenue: 125000 },
      explanation: "Operating margin = 25,000 ÷ 125,000 = 0.20 = 20%. One fifth of each sales dollar becomes operating profit.",
    },
    faqs: [
      { question: "How is operating margin different from gross margin?", answer: "Gross margin subtracts only the direct cost of goods sold, so it measures the raw spread between price and product cost. Operating margin goes much further, also removing all operating expenses such as salaries, rent, marketing and administration. The gap between the two reveals how heavy a company's overhead is: a wide gross margin that collapses into a thin operating margin tells you the running costs of the business are eating most of the trading surplus." },
      { question: "What is a good operating margin?", answer: "It depends heavily on the industry. Grocery and other high-volume, low-markup sectors may operate healthily on single-digit operating margins, while software and pharmaceutical firms can exceed 30 or 40 percent. The most useful comparison is against direct competitors and against the company's own history. A margin that is steady or rising as revenue grows usually indicates that the business is scaling efficiently rather than simply buying growth with ever-larger cost increases." },
      { question: "Is operating margin the same as EBIT margin?", answer: "In most cases they are used interchangeably, since operating income and EBIT — earnings before interest and taxes — usually refer to the same figure. Small differences can arise when a company reports non-operating income or one-off items that sit between operating profit and EBIT. For everyday analysis and for this calculator, treating operating income as EBIT and dividing it by revenue gives the operating margin analysts commonly quote." },
      { question: "Why do investors focus on operating margin?", answer: "Because it strips out financing and tax decisions, operating margin isolates how well the core business itself performs. Two companies can carry very different debt loads and face different tax rates, which distorts net profit, yet operating margin lets you compare their underlying operations on equal terms. A consistently strong operating margin suggests durable pricing power and cost discipline, qualities that tend to translate into resilient profits across economic cycles." },
      { question: "How can a business raise its operating margin?", answer: "Lift revenue without a matching rise in operating costs, or cut operating costs without harming sales. Practical levers include raising prices where the market allows, automating repetitive work, renegotiating rent and supplier contracts, trimming underperforming products, and improving productivity so the same team supports more revenue. Because operating margin captures the whole cost of running the business, even modest efficiency gains across several expense lines can add several points to it." },
    ],
    relatedCalculators: ["gross-profit-calculator", "net-profit-margin-calculator", "ebitda-calculator", "profit-margin-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "ebitda",
    slug: "ebitda-calculator",
    category: "Business",
    categorySlug: "business",
    title: "EBITDA Calculator",
    shortDescription: "Add back interest, tax, depreciation and amortization to net income.",
    seoTitle: "EBITDA Calculator — Earnings Before Interest, Tax, D&A",
    metaDescription:
      "Free EBITDA calculator. Add interest, taxes, depreciation and amortization back to net income to measure core operating cash earnings.",
    primaryKeyword: "ebitda calculator",
    secondaryKeywords: ["ebitda formula", "earnings before interest tax depreciation", "operating earnings calculator"],
    fields: [
      { id: "netIncome", label: "Net income", type: "number", unit: "$", placeholder: "500000", required: true, span: 1 },
      { id: "interest", label: "Interest", type: "number", unit: "$", placeholder: "120000", required: true, span: 1, min: 0 },
      { id: "taxes", label: "Taxes", type: "number", unit: "$", placeholder: "80000", required: true, span: 1, min: 0 },
      { id: "depreciation", label: "Depreciation", type: "number", unit: "$", placeholder: "60000", required: true, span: 1, min: 0 },
      { id: "amortization", label: "Amortization", type: "number", unit: "$", placeholder: "40000", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "ebitda", label: "EBITDA", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "EBITDA = net income + interest + taxes + depreciation + amortization",
    explanation:
      "An EBITDA calculator rebuilds a company's earnings before four costs that can obscure how the core business actually performs: interest, taxes, depreciation and amortization. Starting from net income — the bottom-line profit — you add each of these back to arrive at EBITDA, a proxy for the cash-generating power of operations before financing structure and accounting choices distort the picture. Interest depends on how much debt a company carries, tax depends on jurisdiction and one-off items, and depreciation and amortization are non-cash charges that spread the cost of past investments across many years. By removing all four, EBITDA lets an analyst compare two companies that made very different financing and investment decisions on a more level footing, which is why it dominates valuation multiples, loan covenants and acquisition negotiations. Private-equity buyers, lenders and CFOs lean on EBITDA to size deals and set debt limits because it approximates the earnings available to service borrowings. The add-back method used here reverses the income statement: each excluded cost that was subtracted to reach net income is restored. EBITDA is not a substitute for cash flow — it ignores real capital spending and working-capital swings — but as a quick, comparable gauge of operating performance it remains one of the most widely quoted figures in finance, and this calculator produces it in a single step from five familiar numbers.",
    formulaExplanation:
      "Net income already has interest, taxes, depreciation and amortization subtracted, so EBITDA simply adds them back. Interest and taxes are removed because they reflect financing and jurisdiction rather than operating skill; depreciation and amortization are non-cash accounting charges that allocate past spending over time. Restoring all four to net income leaves earnings before those items — a cleaner, more comparable measure of what the underlying operation generates each period.",
    formulaSource: "Standard financial (EBITDA) definition",
    example: {
      inputs: { netIncome: 500000, interest: 120000, taxes: 80000, depreciation: 60000, amortization: 40000 },
      explanation: "EBITDA = 500,000 + 120,000 + 80,000 + 60,000 + 40,000 = $800,000.",
    },
    faqs: [
      { question: "What does EBITDA actually measure?", answer: "EBITDA approximates the earnings a business generates from its core operations before the effects of how it is financed, how it is taxed, and how it accounts for past investments. By adding interest, taxes, depreciation and amortization back to net income, it strips out items that vary between companies for reasons unrelated to operating performance. The result is a figure many analysts treat as a rough proxy for operating cash earnings and use to compare firms on similar terms." },
      { question: "Why add depreciation and amortization back?", answer: "Depreciation and amortization are non-cash charges. They spread the cost of assets a company already paid for — machinery, buildings, acquired intangibles — across the years those assets are used. No cash leaves the business when the charge is recorded. Adding them back to net income removes an accounting allocation that would otherwise understate the cash the operation currently produces, giving a clearer view of ongoing earning power in the period being measured." },
      { question: "Is EBITDA the same as cash flow?", answer: "No, and treating it as such is a common and dangerous mistake. EBITDA ignores real cash needs that a genuine cash-flow measure captures: capital expenditure to replace worn-out equipment, changes in working capital as receivables and inventory grow, and actual interest and tax payments. A company can show healthy EBITDA yet burn cash if it must constantly reinvest heavily. Use EBITDA for comparison, but check free cash flow to judge true liquidity." },
      { question: "Why is EBITDA used in valuation?", answer: "Buyers and investors often value a company as a multiple of EBITDA because it approximates operating earnings available before financing and tax choices that the new owner may change. It also smooths out differences in depreciation policy and capital structure, making two acquisition targets easier to compare. Enterprise-value-to-EBITDA is among the most common valuation multiples in mergers, private equity and lending, which is why the figure is negotiated so closely in deals." },
      { question: "What are the limitations of EBITDA?", answer: "EBITDA can flatter a company by hiding the real cost of running and reinvesting in the business. Because it excludes depreciation, it ignores that assets wear out and must be replaced with actual cash. Because it excludes interest, it can make a heavily indebted firm look healthier than it is. Critics argue it is easy to lean on EBITDA to present a rosier story, so it should always be read alongside net income, free cash flow and debt levels." },
    ],
    relatedCalculators: ["operating-margin-calculator", "net-profit-margin-calculator", "cash-flow-calculator", "gross-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "payback-period",
    slug: "payback-period-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Payback Period Calculator",
    shortDescription: "Find how long an investment takes to repay its initial cost.",
    seoTitle: "Payback Period Calculator — Investment Recovery Time",
    metaDescription:
      "Free payback period calculator. Divide the initial investment by annual cash flow to see how many years and months to recover your money.",
    primaryKeyword: "payback period calculator",
    secondaryKeywords: ["payback period formula", "investment recovery time", "capital budgeting calculator"],
    fields: [
      { id: "initialInvestment", label: "Initial investment", type: "number", unit: "$", placeholder: "50000", required: true, span: 1, min: 0 },
      { id: "annualCashFlow", label: "Annual cash flow", type: "number", unit: "$", placeholder: "12500", required: true, span: 1, helpText: "Net cash the investment returns each year." },
    ],
    results: [
      { id: "years", label: "Payback period", format: "number", decimals: 2, unit: "years", isPrimary: true },
      { id: "months", label: "In months", format: "number", decimals: 1, unit: "months", isPrimary: false },
    ],
    formula: "Payback period = initial investment ÷ annual cash flow",
    explanation:
      "A payback period calculator answers the simplest question every investor asks before committing money: how long until I get it back? You enter the upfront cost of a project or purchase and the net cash it is expected to return each year, and the tool reports the payback period in years and in months. The shorter the payback, the sooner your capital is recovered and the less exposed you are to the risk that conditions change, technology moves on, or the forecast turns out to be optimistic. Because it is so intuitive, the payback period is one of the first screens businesses apply to equipment purchases, marketing campaigns, energy-efficiency upgrades and new-store decisions. A machine that pays for itself in two years is far easier to approve than one that takes eight. The divide method used here assumes the annual cash flow is roughly even, giving a clean, fast estimate that is ideal for comparing several options quickly or setting an internal cut-off, such as rejecting any project that takes more than three years to repay. Its honest limitation is that it ignores the time value of money and says nothing about what happens after the money is recovered — a project might pay back slowly yet generate cash for decades. Used alongside measures like ROI or net present value, though, the payback period remains a powerful first filter for capital decisions.",
    formulaExplanation:
      "The initial investment is the cash committed upfront, and the annual cash flow is the net amount the investment returns each year. Dividing the investment by the yearly cash flow gives the number of years needed for cumulative returns to equal the original outlay — the point where you have broken even. Multiplying that figure by twelve converts it to months. The method assumes steady annual cash flow, so it trades some precision for speed and clarity.",
    formulaSource: "Standard capital-budgeting (payback period) method",
    example: {
      inputs: { initialInvestment: 50000, annualCashFlow: 12500 },
      explanation: "Payback = 50,000 ÷ 12,500 = 4 years, which is 48 months to fully recover the investment.",
    },
    faqs: [
      { question: "What is a good payback period?", answer: "It depends on the type of investment and the risk involved, but shorter is generally better because your capital is recovered and at risk for less time. Many businesses set an internal cut-off — commonly two to four years for equipment — and reject anything slower. Fast-moving or uncertain markets justify demanding a quicker payback, while stable, long-lived assets such as buildings can reasonably support longer recovery periods without alarm." },
      { question: "What is the main weakness of the payback period?", answer: "It ignores the time value of money and everything that happens after the investment is recovered. Two projects with identical payback periods can differ enormously: one may stop earning the moment it breaks even, while the other keeps generating cash for years afterward. Because the plain payback method treats a dollar in year four as equal to a dollar today, it should be paired with discounted measures like net present value for major decisions." },
      { question: "How is discounted payback period different?", answer: "The discounted payback period applies a discount rate to each year's cash flow before adding it up, so it accounts for the fact that money received later is worth less than money today. This produces a longer, more conservative payback figure than the simple method, because discounted cash flows accumulate more slowly. It is more accurate for long projects but requires choosing a discount rate, whereas the basic payback calculation here needs only two straightforward inputs." },
      { question: "Does payback period account for cash flow after recovery?", answer: "No. Once the cumulative cash flow equals the initial investment, the payback period is reached and the calculation stops. It says nothing about how much additional value the investment creates over its remaining life. A project with a slower payback may ultimately be far more profitable if it keeps earning long after breaking even, which is why payback is best used as a quick risk screen rather than the sole basis for choosing between investments." },
      { question: "Can I use payback period with uneven cash flows?", answer: "The simple formula assumes roughly equal annual cash flows. When cash flows vary year to year, you instead accumulate them period by period until the running total reaches the initial investment, then interpolate within the year it crosses the line. This calculator uses the even-cash-flow version for speed and clarity, so if your returns are highly irregular, treat its result as an approximation and build a year-by-year cumulative table for precision." },
    ],
    relatedCalculators: ["roi-calculator", "break-even-calculator", "cash-flow-calculator", "cagr-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "inventory-turnover",
    slug: "inventory-turnover-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Inventory Turnover Calculator",
    shortDescription: "Measure how many times stock sells and how long it sits.",
    seoTitle: "Inventory Turnover Calculator — Ratio & Days to Sell",
    metaDescription:
      "Free inventory turnover calculator. Divide COGS by average inventory to get your turnover ratio and average days to sell stock.",
    primaryKeyword: "inventory turnover calculator",
    secondaryKeywords: ["inventory turnover ratio", "days sales of inventory", "stock turnover calculator"],
    fields: [
      { id: "cogs", label: "Cost of goods sold", type: "number", unit: "$", placeholder: "500000", required: true, span: 1, min: 0, helpText: "Annual cost of goods sold." },
      { id: "averageInventory", label: "Average inventory", type: "number", unit: "$", placeholder: "100000", required: true, span: 1, min: 0, helpText: "Typically (opening + closing) ÷ 2." },
    ],
    results: [
      { id: "turnoverRatio", label: "Turnover ratio", format: "number", decimals: 2, unit: "×", isPrimary: true },
      { id: "daysToSell", label: "Days to sell", format: "number", decimals: 1, unit: "days", isPrimary: false },
    ],
    formula: "Turnover = COGS ÷ average inventory · Days to sell = 365 ÷ turnover",
    explanation:
      "An inventory turnover calculator shows how efficiently a business converts its stock into sales, reporting both the turnover ratio — how many times the average inventory was sold and replaced over the year — and the average number of days a unit sits on the shelf before selling. You enter the annual cost of goods sold and the average inventory held during the period, and the tool returns both figures instantly. Turnover matters because inventory is cash frozen in physical form: every dollar tied up in unsold stock is a dollar not available for wages, marketing or growth, and slow-moving goods risk obsolescence, spoilage and storage cost. A high turnover ratio signals brisk sales and lean, well-managed stock, while a low ratio warns of overbuying, weak demand or a catalogue clogged with items that will not shift. The divide method used here compares the cost of what actually sold against the cost of what was typically held, which is why cost of goods sold rather than revenue sits on top — it keeps both numbers on the same cost basis and avoids inflating the ratio with the profit margin. Retailers, wholesalers and manufacturers track inventory turnover to fine-tune ordering, spot dead stock, negotiate supplier terms and free up trapped cash. Read alongside days-to-sell, it turns an abstract ratio into a concrete sense of how quickly the shelves clear.",
    formulaExplanation:
      "Cost of goods sold measures the cost of everything sold during the year, and average inventory is the typical cost value of stock held, usually opening plus closing inventory divided by two. Dividing COGS by average inventory gives the turnover ratio — the number of times stock was cleared and replenished. Dividing 365 by that ratio converts it into the average days a unit remains in inventory before it sells, translating the ratio into an intuitive timeframe.",
    formulaSource: "Standard financial (inventory) accounting",
    example: {
      inputs: { cogs: 500000, averageInventory: 100000 },
      explanation: "Turnover = 500,000 ÷ 100,000 = 5×. Days to sell = 365 ÷ 5 = 73 days per cycle.",
    },
    faqs: [
      { question: "What is a good inventory turnover ratio?", answer: "It varies sharply by industry. Grocers and fast-fashion retailers may turn stock a dozen or more times a year because products are perishable or trend-driven, while furniture, jewellery and industrial equipment turn far more slowly and still operate healthily. The best benchmark is your own sector and your own history. A ratio that is rising usually means leaner, better-matched stock, while a falling ratio hints at overbuying or softening demand that ties up cash." },
      { question: "Why use COGS instead of revenue?", answer: "Inventory is recorded at cost, not at its selling price, so dividing cost of goods sold by average inventory keeps both figures on the same cost basis. Using revenue instead would include your profit margin in the numerator but not the denominator, artificially inflating the ratio and making turnover look faster than it really is. Sticking to COGS produces a true measure of how many times the physical stock cycled through the business during the period." },
      { question: "What does days to sell tell me?", answer: "Days to sell, also called days sales of inventory, converts the turnover ratio into the average number of days a unit sits in stock before it is sold. It is often more intuitive than the ratio itself: knowing that stock takes 73 days to clear is easier to act on than knowing turnover is five times a year. Shorter days-to-sell frees cash faster and reduces the risk of obsolescence, spoilage and markdowns on aging inventory." },
      { question: "How do I calculate average inventory?", answer: "The simplest method adds the inventory value at the start of the period to the value at the end and divides by two, smoothing out a single opening or closing snapshot that might be unusually high or low. For businesses with strong seasonal swings, averaging monthly or quarterly balances gives a more representative figure. The goal is a value that reflects the typical amount of stock carried across the whole period rather than one arbitrary date." },
      { question: "How can I improve inventory turnover?", answer: "Match purchasing more closely to real demand using sales data, and avoid overordering slow lines just to hit supplier discounts. Clear dead and aging stock through promotions to release trapped cash, tighten reorder points, and shorten lead times so you can hold less safety stock. Improving turnover is a balance, though — pushing it too high risks stockouts and lost sales, so the aim is fast, reliable flow rather than the highest possible ratio." },
    ],
    relatedCalculators: ["cash-flow-calculator", "working-capital-calculator", "revenue-calculator", "gross-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cagr",
    slug: "cagr-calculator",
    category: "Business",
    categorySlug: "business",
    title: "CAGR Calculator",
    shortDescription: "Find the compound annual growth rate between two values.",
    seoTitle: "CAGR Calculator — Compound Annual Growth Rate",
    metaDescription:
      "Free CAGR calculator. Find the smoothed compound annual growth rate between a beginning and ending value over any number of years.",
    primaryKeyword: "cagr calculator",
    secondaryKeywords: ["compound annual growth rate", "cagr formula", "annualized growth rate calculator"],
    fields: [
      { id: "beginningValue", label: "Beginning value", type: "number", unit: "$", placeholder: "100000", required: true, span: 1, min: 0 },
      { id: "endingValue", label: "Ending value", type: "number", unit: "$", placeholder: "200000", required: true, span: 1, min: 0 },
      { id: "years", label: "Number of years", type: "number", placeholder: "5", required: true, span: 2, min: 0, step: 0.1 },
    ],
    results: [
      { id: "cagr", label: "CAGR", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "CAGR = ((ending ÷ beginning) ^ (1 ÷ years) − 1) × 100",
    explanation:
      "A CAGR calculator finds the compound annual growth rate — the single steady yearly rate that would grow a starting value into an ending value over a given number of years, as if growth had been perfectly smooth. You enter the beginning value, the ending value and the number of years, and the tool returns the annualized rate as a percentage. CAGR is powerful because real growth is lumpy: revenue might jump 40 percent one year and fall 10 percent the next, and a simple average of those swings is misleading. CAGR cuts through the noise by asking what constant rate, compounded each year, would produce the same final result. That makes it the standard way to describe the growth of revenue, investments, user numbers, portfolios and whole markets, and to compare two things that grew over different time spans on equal terms. Investors quote it to summarise a fund's performance, founders use it to show a business's trajectory, and analysts rely on it to project forward. The formula raises the ratio of ending to beginning value to the power of one over the number of years, which reverses compounding to extract the per-year rate. Its honest limitation is that it hides volatility entirely — two investments with the same CAGR can have wildly different risk — so it describes the smoothed path rather than the bumpy reality, and is best read with that in mind.",
    formulaExplanation:
      "Dividing the ending value by the beginning value gives the total growth multiple over the whole period. Raising that multiple to the power of one divided by the number of years reverses the effect of compounding, extracting the constant annual rate that, applied year after year, reproduces the same final figure. Subtracting one converts the growth factor into a rate, and multiplying by 100 expresses it as a percentage. The result smooths uneven growth into a single comparable number.",
    formulaSource: "Standard financial (CAGR) formula",
    example: {
      inputs: { beginningValue: 100000, endingValue: 200000, years: 5 },
      explanation: "CAGR = (200,000 ÷ 100,000)^(1/5) − 1 = 2^0.2 − 1 ≈ 0.1487 = 14.87% per year.",
    },
    faqs: [
      { question: "What is CAGR and why is it useful?", answer: "CAGR, the compound annual growth rate, is the constant yearly rate that would turn a starting value into an ending value over a set number of years. It is useful because it smooths out volatile, uneven growth into one comparable figure, letting you describe how fast something grew per year and compare investments or businesses that ran over different periods. It answers the question, if growth had been perfectly steady, what annual rate would have produced this result?" },
      { question: "How is CAGR different from average growth rate?", answer: "A simple average adds each year's percentage change and divides by the number of years, which ignores compounding and can badly mislead. If a value rises 100 percent then falls 50 percent, the simple average suggests 25 percent growth, yet you actually ended exactly where you started — a true CAGR of zero. CAGR accounts for compounding by working from the beginning and ending values directly, so it reflects the real cumulative outcome rather than a distorted average of the swings." },
      { question: "What are the limitations of CAGR?", answer: "CAGR completely hides volatility and the path taken between the two endpoints. Two investments with identical CAGRs can have wildly different risk profiles — one steady, the other lurching through booms and crashes. It is also sensitive to the choice of start and end dates: picking an unusually low starting point or high ending point can flatter the rate. Always read CAGR alongside a measure of volatility and be wary of cherry-picked periods." },
      { question: "Can CAGR be negative?", answer: "Yes. If the ending value is lower than the beginning value, the growth multiple is less than one and the CAGR comes out negative, describing a steady annual rate of decline. A negative CAGR is perfectly valid and useful — it tells you how quickly a shrinking revenue line, portfolio or user base contracted on average each year. The calculation requires a positive beginning value and a positive ending value for the result to be meaningful." },
      { question: "What time period should I use for CAGR?", answer: "Use a period long enough to capture the genuine trend rather than a short-term spike, and be honest about your start and end points. Three to five years is common for business and investment analysis because it spans normal ups and downs. Beware of choosing dates that begin at an unusual trough or end at a peak, since that can dramatically inflate the rate. Consistent, representative endpoints make the resulting CAGR trustworthy and comparable." },
    ],
    relatedCalculators: ["roi-calculator", "revenue-calculator", "payback-period-calculator", "profit-margin-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "net-profit-margin",
    slug: "net-profit-margin-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Net Profit Margin Calculator",
    shortDescription: "Find the share of revenue left as net profit.",
    seoTitle: "Net Profit Margin Calculator — Net Margin Percentage",
    metaDescription:
      "Free net profit margin calculator. Divide net profit by revenue to see what percentage of every sales dollar becomes bottom-line profit.",
    primaryKeyword: "net profit margin calculator",
    secondaryKeywords: ["net margin calculator", "net profit margin formula", "bottom line margin"],
    fields: [
      { id: "netProfit", label: "Net profit", type: "number", unit: "$", placeholder: "18000", required: true, span: 1, helpText: "Profit after all expenses, interest and tax." },
      { id: "revenue", label: "Revenue", type: "number", unit: "$", placeholder: "150000", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "netMargin", label: "Net profit margin", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "Net profit margin = net profit ÷ revenue × 100",
    explanation:
      "A net profit margin calculator reveals the ultimate efficiency of a business: how many cents of every sales dollar actually survive as bottom-line profit after every cost — goods, wages, rent, marketing, interest and tax — has been paid. You enter net profit and total revenue, and the tool returns net margin as a percentage. This is the most complete of the profitability margins because nothing is excluded; it reflects the full weight of running the company. A firm with strong revenue but a thin net margin is working hard for very little, exposed to any shock that nudges costs up or sales down, while a healthy net margin gives room to reinvest, absorb setbacks and reward owners. Because it captures the entire cost structure, net margin is the figure investors, lenders and owners use to judge whether a business is genuinely well run rather than merely large. The divide method used here expresses profit relative to size, so a small shop and a large enterprise can be compared on the same scale, and a company can track whether it is becoming more or less efficient as it grows. Comparing net margin against gross and operating margin also pinpoints where profit leaks away — a solid gross margin that erodes to a weak net margin reveals that overhead, financing or tax is doing the damage. It is the single clearest test of overall profitability.",
    formulaExplanation:
      "Net profit is what remains after every expense — cost of goods, operating costs, interest and tax — is subtracted from revenue. Dividing net profit by revenue and multiplying by 100 expresses that bottom-line profit as a percentage of sales. Because it captures all costs, net margin measures the total efficiency of the business, and being scale-free it lets you compare companies of very different sizes and track your own performance as revenue rises or falls over time.",
    formulaSource: "Standard financial (income-statement) accounting",
    example: {
      inputs: { netProfit: 18000, revenue: 150000 },
      explanation: "Net margin = 18,000 ÷ 150,000 = 0.12 = 12%. Twelve cents of each sales dollar is kept as profit.",
    },
    faqs: [
      { question: "What is the difference between net and gross margin?", answer: "Gross margin subtracts only the direct cost of goods sold, measuring the raw spread between price and product cost. Net margin subtracts everything — operating expenses, interest and tax as well — to show what the business ultimately keeps. The gap between them reveals how much overhead, financing and tax consume. A strong gross margin that shrinks to a weak net margin signals that costs below the gross line are eating most of the trading surplus." },
      { question: "What is a good net profit margin?", answer: "It varies widely by industry. Grocery and other high-volume, low-markup businesses may run healthily on net margins of just 2 to 5 percent, while software and professional services can exceed 20 percent. Rather than chase a universal target, compare against direct competitors and your own history. A net margin that holds steady or rises as revenue grows is a strong sign the business is scaling efficiently rather than buying growth at the expense of profitability." },
      { question: "Can net profit margin be negative?", answer: "Yes. When total costs exceed revenue, net profit is negative and so is the margin, meaning the business is losing money on its overall operations. A negative net margin is common for early-stage startups investing heavily for growth, but for an established company it is a serious warning. It shows that after every cost is counted, the business is shrinking its own resources, and the causes — weak pricing, bloated costs or falling sales — need urgent attention." },
      { question: "Why compare net margin across periods?", answer: "Tracking net margin over time reveals whether a business is becoming more or less efficient as it grows. Rising revenue alone can mask deteriorating profitability if costs climb faster than sales. A steady or improving net margin confirms that growth is translating into real profit, while a declining margin — even with higher revenue — warns that the business is working harder for less. Trend analysis turns a single snapshot into an early-warning system for creeping cost problems." },
      { question: "How can a business improve net profit margin?", answer: "Work every layer of the income statement. Raise prices or shift toward higher-margin products to lift the top line, cut cost of goods through better sourcing, and trim operating expenses such as rent, software and administration. Reducing debt lowers interest, and efficient tax planning helps at the bottom. Because net margin reflects all costs, small savings across several lines compound. The key is improving profit without sacrificing the quality or volume of sales that generate it." },
    ],
    relatedCalculators: ["gross-profit-calculator", "operating-margin-calculator", "profit-margin-calculator", "ebitda-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "contribution-margin",
    slug: "contribution-margin-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Contribution Margin Calculator",
    shortDescription: "Find the profit each unit contributes after variable costs.",
    seoTitle: "Contribution Margin Calculator — Per Unit & Ratio",
    metaDescription:
      "Free contribution margin calculator. Subtract variable cost from price to see how much each unit contributes to fixed costs and profit.",
    primaryKeyword: "contribution margin calculator",
    secondaryKeywords: ["contribution margin formula", "contribution margin ratio", "unit contribution margin"],
    fields: [
      { id: "pricePerUnit", label: "Price per unit", type: "number", unit: "$", placeholder: "50", required: true, span: 1, min: 0, step: 0.01 },
      { id: "variableCostPerUnit", label: "Variable cost per unit", type: "number", unit: "$", placeholder: "30", required: true, span: 1, min: 0, step: 0.01, helpText: "Cost that rises with each unit made." },
    ],
    results: [
      { id: "contributionMargin", label: "Contribution margin", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "cmRatio", label: "Contribution margin ratio", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "Contribution margin = price − variable cost · Ratio = CM ÷ price × 100",
    explanation:
      "A contribution margin calculator shows how much each unit sold contributes toward covering fixed costs and, once those are covered, toward profit. You enter the selling price per unit and the variable cost per unit — the costs that rise directly with each item produced, such as materials, packaging and per-unit labour — and the tool returns the contribution margin in dollars and as a ratio of price. The name captures its purpose exactly: this is the amount each sale contributes after paying its own variable cost, before any fixed overhead is considered. Contribution margin is the engine of break-even and pricing analysis, because dividing total fixed costs by the per-unit contribution margin tells you exactly how many units you must sell to cover your overhead. A higher contribution margin means fewer sales are needed to break even and each additional unit adds more to profit, which is why it drives decisions on pricing, discounting, product mix and whether a marginal order is worth accepting. The subtract method used here isolates variable cost specifically, because only costs that scale with volume affect the incremental value of one more sale — fixed costs are the same whether you sell one unit or a thousand. Managers use the contribution margin ratio to compare products of different prices on a level footing and to see how much of each sales dollar is available to cover fixed costs and build profit.",
    formulaExplanation:
      "Price per unit is what a customer pays, and variable cost per unit is the cost incurred to produce that specific unit. Subtracting variable cost from price gives the contribution margin — the money each sale adds toward fixed costs and profit. Dividing that margin by the price yields the contribution margin ratio, the fraction of each sales dollar available after variable cost. Because only variable costs change with volume, this isolates the true incremental value of selling one more unit.",
    formulaSource: "Standard managerial (cost-volume-profit) accounting",
    example: {
      inputs: { pricePerUnit: 50, variableCostPerUnit: 30 },
      explanation: "Contribution margin = $50 − $30 = $20 per unit. Ratio = 20 ÷ 50 = 40% of price.",
    },
    faqs: [
      { question: "What is contribution margin used for?", answer: "Contribution margin shows how much each unit contributes toward fixed costs and profit after covering its own variable cost. It is the foundation of break-even analysis: dividing total fixed costs by the per-unit contribution margin gives the sales volume needed to cover overhead. It also guides pricing, discounting and product-mix decisions, because it isolates the incremental profit of one more sale. Products can be ranked by contribution margin to see which truly pull their weight toward covering the fixed cost base." },
      { question: "What is the difference from gross margin?", answer: "Gross margin subtracts all cost of goods sold, which can include some fixed production costs like factory rent or supervisor salaries. Contribution margin subtracts only variable costs — those that change with each additional unit — leaving fixed costs entirely out. This makes contribution margin the right tool for decisions about volume and break-even, because it measures how much each extra sale adds before fixed costs, whereas gross margin blends fixed and variable production costs together." },
      { question: "What counts as a variable cost?", answer: "Variable costs rise and fall directly with how many units you produce or sell: raw materials, components, packaging, per-unit labour or piece-rate wages, sales commissions and shipping on each order. They contrast with fixed costs such as rent, salaried staff, insurance and software subscriptions, which stay the same regardless of volume. For an accurate contribution margin, include every cost that genuinely scales with one more unit and exclude anything that would be paid even if you sold nothing." },
      { question: "What is a good contribution margin ratio?", answer: "It depends on your fixed-cost base and industry. Businesses with heavy fixed costs — factories, airlines, software firms — need high contribution margin ratios to cover that overhead before profit begins, while low-overhead operations can thrive on slimmer ratios. The key relationship is between the ratio and your fixed costs: a higher ratio means you break even at lower volume and each sale beyond that adds more profit. Compare against your own products and your break-even needs rather than a fixed benchmark." },
      { question: "How does contribution margin relate to break-even?", answer: "Break-even is the point where total contribution margin exactly equals total fixed costs, so profit is zero. Because each unit contributes a known amount toward fixed costs, dividing total fixed costs by the per-unit contribution margin gives the exact number of units needed to break even. Every unit sold beyond that point drops its full contribution margin straight to profit. This direct link is why contribution margin is central to pricing and volume planning." },
    ],
    relatedCalculators: ["break-even-calculator", "gross-profit-calculator", "profit-margin-calculator", "revenue-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "working-capital",
    slug: "working-capital-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Working Capital Calculator",
    shortDescription: "Find working capital and the current ratio from your balance sheet.",
    seoTitle: "Working Capital Calculator — Net Working Capital & Ratio",
    metaDescription:
      "Free working capital calculator. Subtract current liabilities from current assets to gauge short-term liquidity and the current ratio.",
    primaryKeyword: "working capital calculator",
    secondaryKeywords: ["net working capital", "current ratio calculator", "working capital formula"],
    fields: [
      { id: "currentAssets", label: "Current assets", type: "number", unit: "$", placeholder: "300000", required: true, span: 1, min: 0, helpText: "Cash, receivables, inventory due within a year." },
      { id: "currentLiabilities", label: "Current liabilities", type: "number", unit: "$", placeholder: "150000", required: true, span: 1, min: 0, helpText: "Debts due within a year." },
    ],
    results: [
      { id: "workingCapital", label: "Working capital", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "currentRatio", label: "Current ratio", format: "number", decimals: 2, unit: "×", isPrimary: false },
    ],
    formula: "Working capital = current assets − current liabilities · Current ratio = CA ÷ CL",
    explanation:
      "A working capital calculator measures a business's short-term financial health — its ability to cover the bills due within the next year using the assets it can turn into cash within the same window. You enter current assets, such as cash, accounts receivable and inventory, and current liabilities, such as supplier bills, short-term loans and taxes due, and the tool returns net working capital in dollars along with the current ratio. Working capital is the cushion that keeps a business running smoothly day to day: positive working capital means current assets comfortably exceed current obligations, so payroll, suppliers and rent can be met without scrambling, while negative working capital signals that short-term debts outweigh liquid resources and a cash crunch may loom. The current ratio expresses the same relationship as a multiple — a ratio of 2 means the business holds two dollars of current assets for every dollar of current liabilities. Lenders and suppliers examine both figures before extending credit, because they reveal whether a company can honour its commitments without new borrowing. The subtract method isolates the genuine short-term surplus, while the divide method scales it so businesses of different sizes can be compared. Owners use a working capital calculator to spot liquidity problems early, judge whether they can fund growth from within, and strike the balance between too little cushion, which risks insolvency, and too much idle cash, which earns nothing.",
    formulaExplanation:
      "Current assets are resources expected to become cash within a year — cash itself, receivables and inventory — while current liabilities are obligations due within the same year. Subtracting liabilities from assets gives net working capital, the short-term surplus available to fund operations. Dividing current assets by current liabilities produces the current ratio, expressing the same liquidity as a multiple. Together they show whether a business can meet near-term obligations comfortably or is stretched dangerously thin.",
    formulaSource: "Standard financial (balance-sheet) accounting",
    example: {
      inputs: { currentAssets: 300000, currentLiabilities: 150000 },
      explanation: "Working capital = 300,000 − 150,000 = $150,000. Current ratio = 300,000 ÷ 150,000 = 2.0×.",
    },
    faqs: [
      { question: "What is a healthy amount of working capital?", answer: "Positive working capital, where current assets exceed current liabilities, is the baseline for comfortably meeting short-term obligations. A current ratio between roughly 1.5 and 2 is often considered healthy across many industries, indicating a solid cushion without excessive idle resources. The right level depends on your sector and cash-conversion cycle, though — fast-turning retailers can safely run leaner than manufacturers with long production cycles, so compare against industry peers rather than a single universal target." },
      { question: "What does negative working capital mean?", answer: "Negative working capital means current liabilities exceed current assets, so on paper the business may struggle to cover debts due within the year from its liquid resources. For most companies this is a warning of potential liquidity trouble. However, some efficient businesses — large retailers that collect cash instantly but pay suppliers later — operate deliberately with negative working capital and remain perfectly healthy. Context matters, so read it alongside the cash-conversion cycle and the nature of the business model." },
      { question: "What is the difference from the current ratio?", answer: "Working capital and the current ratio measure the same relationship in two forms. Working capital is an absolute dollar figure — current assets minus current liabilities — showing the size of the short-term surplus. The current ratio divides assets by liabilities to express that relationship as a multiple, which is scale-free and easier to compare between companies of different sizes. A large firm may have huge working capital yet a thin current ratio, so viewing both gives the fullest picture." },
      { question: "What counts as current assets and liabilities?", answer: "Current assets are things expected to convert to cash within a year: cash and equivalents, accounts receivable, inventory and short-term investments. Current liabilities are obligations due within a year: accounts payable to suppliers, short-term loans, the current portion of long-term debt, accrued wages and taxes payable. The one-year test is what makes them current. Anything longer-term, such as property or a multi-year loan, sits outside working capital and does not belong in this calculation." },
      { question: "How can a business improve working capital?", answer: "Free up cash trapped in the short-term cycle. Collect receivables faster by invoicing promptly and chasing overdue accounts, reduce excess inventory so cash is not sitting on shelves, and negotiate longer payment terms with suppliers to hold cash longer. Avoid funding long-term assets with short-term debt. The aim is a comfortable but not wasteful cushion — enough to meet obligations and seize opportunities, without hoarding idle cash that could be earning a return elsewhere." },
    ],
    relatedCalculators: ["cash-flow-calculator", "inventory-turnover-calculator", "burn-rate-calculator", "revenue-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "burn-rate",
    slug: "burn-rate-calculator",
    category: "Business",
    categorySlug: "business",
    title: "Burn Rate Calculator",
    shortDescription: "Find monthly cash burn and how many months of runway remain.",
    seoTitle: "Burn Rate Calculator — Monthly Burn & Cash Runway",
    metaDescription:
      "Free burn rate calculator. Find your monthly cash burn from a start and end balance, and how many months of runway your cash provides.",
    primaryKeyword: "burn rate calculator",
    secondaryKeywords: ["cash burn rate", "startup runway calculator", "monthly burn calculator"],
    fields: [
      { id: "startingCash", label: "Starting cash", type: "number", unit: "$", placeholder: "600000", required: true, span: 1, min: 0 },
      { id: "endingCash", label: "Ending cash", type: "number", unit: "$", placeholder: "360000", required: true, span: 1, min: 0 },
      { id: "months", label: "Number of months", type: "number", placeholder: "6", required: true, span: 2, min: 0, step: 1, helpText: "Period between the two balances." },
    ],
    results: [
      { id: "monthlyBurn", label: "Monthly burn", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "runwayMonths", label: "Runway remaining", format: "number", decimals: 1, unit: "months", isPrimary: false },
    ],
    formula: "Monthly burn = (starting − ending cash) ÷ months · Runway = ending cash ÷ monthly burn",
    explanation:
      "A burn rate calculator tells a startup the two numbers that most determine its survival: how fast it is spending cash each month, and how many months of runway remain before the money runs out. You enter the cash balance at the start of a period, the balance at the end, and the number of months between them, and the tool returns the average monthly burn and the runway that the current ending balance provides at that pace. Burn rate is the heartbeat of an early-stage company, because most startups spend more than they earn while building toward scale, funding that gap from investor cash. Knowing the burn rate turns an abstract bank balance into a concrete deadline: if you hold $360,000 and burn $40,000 a month, you have nine months to reach profitability, raise more, or cut costs before the account empties. That deadline drives nearly every major decision — when to fundraise, whether to hire, how aggressively to spend on growth. The subtract-then-divide method measures net burn, the true cash consumed after any revenue is counted, which is what actually depletes the bank. Founders, boards and investors watch runway constantly, because raising money takes months and a company that starts too late risks negotiating from weakness or running dry. A burn rate calculator keeps that countdown visible so decisions are made with time to spare rather than in a crisis.",
    formulaExplanation:
      "Subtracting the ending cash balance from the starting balance gives the total cash consumed over the period, and dividing by the number of months yields the average monthly burn — the net cash the company spends each month after any revenue. Dividing the remaining ending balance by that monthly burn gives the runway: the number of months the current cash will last if spending continues at the same pace. If cash grew, burn is negative and runway is effectively unlimited.",
    formulaSource: "Standard startup finance (cash runway) method",
    example: {
      inputs: { startingCash: 600000, endingCash: 360000, months: 6 },
      explanation: "Monthly burn = (600,000 − 360,000) ÷ 6 = $40,000. Runway = 360,000 ÷ 40,000 = 9 months.",
    },
    faqs: [
      { question: "What is the difference between gross and net burn?", answer: "Gross burn is the total cash a company spends each month on all costs — salaries, rent, software and everything else — regardless of income. Net burn subtracts any revenue, so it measures the actual monthly decline in the bank balance. This calculator measures net burn, because it works from the real change between your starting and ending cash. Net burn is what truly determines runway, since revenue offsets spending and slows how fast reserves deplete." },
      { question: "What is a healthy amount of runway?", answer: "Most investors advise keeping at least twelve to eighteen months of runway, because raising a new round typically takes several months and you never want to negotiate while nearly out of cash. Longer runway gives room to hit milestones, weather setbacks and fundraise from a position of strength. As runway falls below six months, urgency rises sharply — it becomes time to either close funding, reach profitability, or reduce burn through cost cuts before the situation becomes critical." },
      { question: "How can a startup extend its runway?", answer: "Reduce net burn or raise more cash. On the spending side, the largest lever is usually payroll, followed by marketing, office and software costs, so cutting or slowing hiring extends runway most. On the income side, growing revenue directly offsets burn. Founders often combine measured cost discipline with a focus on the fastest paths to revenue. Every dollar of monthly burn removed adds proportionally to the months of survival the remaining cash provides." },
      { question: "Why does runway matter so much to investors?", answer: "Runway tells investors how long a company can operate before it needs more money, which frames the entire risk of an investment. A startup with ample runway can focus on building and hitting milestones, while one running low is forced to fundraise under pressure, often on worse terms. Investors also watch whether burn is buying real progress. Disciplined burn that steadily advances the business signals a team that can be trusted with additional capital." },
      { question: "What if my burn rate is negative?", answer: "A negative burn rate means your ending cash balance was higher than your starting balance — the company generated more cash than it spent over the period and is cash-flow positive. In that case there is no depletion to run out of, so runway is effectively unlimited at the current pace, and this calculator returns no finite runway figure. Reaching sustained negative burn, meaning genuine profitability, is the milestone that removes the fundraising deadline entirely." },
    ],
    relatedCalculators: ["cash-flow-calculator", "working-capital-calculator", "revenue-calculator", "payback-period-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
