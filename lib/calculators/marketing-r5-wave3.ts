import type { CalculatorDefinition } from "../types";

/* Wave 3 Round 5 — Marketing metrics. Content contract enforced by lib/content.test.ts. */

export const marketingR5Calculators: CalculatorDefinition[] = [
  {
    id: "cpm",
    slug: "cpm-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "CPM Calculator",
    shortDescription: "Find cost per thousand impressions from spend and reach.",
    seoTitle: "CPM Calculator — Cost Per Thousand Impressions",
    metaDescription:
      "Free CPM calculator. Work out cost per thousand impressions from total ad spend and impressions delivered, the standard price of display and video reach.",
    primaryKeyword: "cpm calculator",
    secondaryKeywords: ["cost per thousand impressions", "cpm formula", "cpm advertising cost"],
    fields: [
      { id: "totalCost", label: "Total ad cost", type: "number", unit: "$", placeholder: "500", required: true, span: 1, min: 0 },
      { id: "impressions", label: "Impressions", type: "number", placeholder: "100000", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "cpm", label: "CPM", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "Cost per 1,000 impressions" },
    ],
    formula: "CPM = (total cost ÷ impressions) × 1,000",
    formulaExplanation:
      "CPM stands for cost per mille, the Latin word for thousand, and it prices advertising by the audience it reaches rather than by clicks or sales. Dividing total spend by the number of impressions gives the cost of a single impression, and multiplying by one thousand scales that tiny figure into the round unit the ad industry quotes. Because impressions are the denominator, a larger, cheaper reach lowers CPM while premium placements raise it, making the metric a clean way to compare the raw price of visibility across publishers and formats.",
    explanation:
      "A CPM calculator tells you what it costs to put your advertising in front of one thousand pairs of eyes. CPM, short for cost per mille, is the currency of brand and awareness advertising, where the goal is reach rather than an immediate click. You enter the total amount spent on a placement and the number of impressions it delivered, and the calculator returns the price of every thousand impressions on one consistent scale. That single number lets a media buyer line up radically different options, a premium homepage takeover, a run-of-network display buy, a connected-TV spot, a newsletter sponsorship, and see which one buys attention most cheaply. CPM matters because most large display, video and social campaigns are actually sold on a CPM basis, so understanding it is the difference between negotiating from strength and overpaying for inventory. A low CPM is not automatically better, because cheap impressions on the wrong audience waste money just as surely as expensive ones, but among comparable, well-targeted placements the lower CPM stretches a fixed budget further. Marketers, agencies, publishers and founders use a CPM calculator to plan budgets, forecast how much reach a spend will buy, benchmark quoted rates against what they actually paid, and audit whether a platform delivered the impressions it promised. It converts an invoice and a delivery report into a comparable, negotiable price for attention.",
    formulaSource: "Standard advertising metric (CPM)",
    example: {
      inputs: { totalCost: 500, impressions: 100000 },
      explanation: "$500 ÷ 100,000 impressions × 1,000 = $5.00 CPM.",
    },
    faqs: [
      { question: "What is a good CPM?", answer: "There is no single good CPM, because it depends heavily on platform, format, targeting and season. Broad display networks can run a few dollars per thousand, while tightly targeted social or premium video often costs ten to thirty dollars or more. Instead of chasing an absolute number, compare CPM against similar placements aimed at the same audience, and weigh it against how well those impressions actually convert into attention and sales." },
      { question: "What is the difference between CPM and CPC?", answer: "CPM charges for every thousand impressions regardless of whether anyone clicks, so you pay for reach and exposure. CPC charges only when someone clicks, so you pay for engagement. Awareness and brand campaigns usually favour CPM because the goal is visibility, while direct-response campaigns often prefer CPC because it ties cost to a measurable action. Many platforms let you buy either way, and the right choice depends on your objective." },
      { question: "Why do advertisers use impressions instead of clicks?", answer: "Impressions measure how many times an ad was shown, which is the natural unit for brand building, where the aim is to be seen and remembered rather than clicked immediately. Television, out-of-home and much of digital video have no click to sell, so reach and frequency are what matter. Pricing by the thousand impressions gives buyers and sellers a common, comparable currency for that visibility across very different media." },
      { question: "Does a lower CPM always mean a better deal?", answer: "No. A rock-bottom CPM can signal low-quality inventory, bot traffic, or an audience that will never buy your product, so cheap impressions are not the same as valuable ones. The right way to judge a CPM is alongside the audience quality and downstream results, such as engagement, conversions and cost per acquisition. A higher CPM on a precisely targeted, high-intent audience often outperforms a bargain buy on the wrong crowd." },
      { question: "How can I lower my CPM?", answer: "Broaden or refine your targeting so the platform has more room to find cheaper impressions, improve ad relevance and creative quality since many auctions reward engaging ads with lower prices, and test different placements and formats to find inventory that is priced below its value. Avoiding the most competitive audiences and dayparts, and running ads when your audience is active but competition is lighter, can also pull the average cost per thousand down." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cpc",
    slug: "cpc-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "CPC Calculator",
    shortDescription: "Work out cost per click from spend and clicks.",
    seoTitle: "CPC Calculator — Cost Per Click",
    metaDescription:
      "Free CPC calculator. Divide total ad spend by clicks to find your average cost per click, the core price metric of paid search and social advertising.",
    primaryKeyword: "cpc calculator",
    secondaryKeywords: ["cost per click", "cpc formula", "average cost per click"],
    fields: [
      { id: "totalCost", label: "Total ad cost", type: "number", unit: "$", placeholder: "800", required: true, span: 1, min: 0 },
      { id: "clicks", label: "Clicks", type: "number", placeholder: "400", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "cpc", label: "CPC", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "Average cost per click" },
    ],
    formula: "CPC = total cost ÷ clicks",
    formulaExplanation:
      "Cost per click is the plainest of the paid-media metrics: the money spent divided by the clicks it bought. Because clicks sit in the denominator, anything that earns more clicks for the same spend, sharper targeting, stronger creative, a higher quality score, drives the average price of a click down. The result is an average across the whole campaign, so it smooths over the fact that individual auction prices vary click by click. That average is exactly what you need to forecast traffic from a budget or to compare the efficiency of two campaigns.",
    explanation:
      "A CPC calculator reveals the true average price you paid for each visitor an ad campaign sent to your site. Cost per click is the backbone of paid search and much of paid social, where you are billed when someone clicks rather than merely sees the ad. You enter what you spent and how many clicks you received, and the tool returns the average cost of a single click. That figure is deceptively powerful. It lets you forecast how much traffic a given budget will buy, compare the efficiency of Google, Bing, Facebook and TikTok campaigns on one scale, and spot when a keyword or audience has become too expensive to justify. CPC also feeds directly into deeper economics: multiply it by the clicks needed to make a sale and you can see whether a campaign can ever be profitable given your conversion rate and margins. The metric matters because the auction-based platforms that dominate digital advertising set prices dynamically, so your CPC drifts with competition, targeting, ad quality and bids. Watching it over time flags rising costs before they quietly erode returns. Search marketers, media buyers, ecommerce owners and agencies use a CPC calculator to set and check bids, budget campaigns, benchmark channels against each other, and diagnose why a campaign that once made money has stopped. It turns a spend total and a click count into the single number that anchors every paid-traffic decision.",
    formulaSource: "Standard advertising metric (CPC)",
    example: {
      inputs: { totalCost: 800, clicks: 400 },
      explanation: "$800 ÷ 400 clicks = $2.00 average cost per click.",
    },
    faqs: [
      { question: "What is a good cost per click?", answer: "A good CPC depends on your industry, platform and what a click is worth to you. Competitive sectors such as legal or insurance can see clicks costing tens of dollars, while many ecommerce or content niches sit well under a dollar. The real test is not the raw price but whether the click pays for itself: if your conversion rate and order value comfortably cover the CPC, the price is good even when it looks high in absolute terms." },
      { question: "How is CPC different from CPM?", answer: "CPC charges you only when someone actually clicks the ad, so you pay for engagement and traffic. CPM charges for every thousand times the ad is shown, whether or not anyone interacts, so you pay for reach. Direct-response campaigns that want visitors and sales usually lean on CPC, while awareness campaigns that want visibility lean on CPM. Some platforms optimise a CPM buy toward clicks, blurring the line, but the billing basis differs." },
      { question: "What makes my cost per click go up?", answer: "CPC rises when more advertisers compete for the same audience or keywords, when your ad relevance or quality score falls, when you target expensive high-intent terms, and during peak seasons like holidays. Bidding strategy matters too, aggressive bids to win top positions push prices higher. Poorly matched keywords and weak landing pages can also drag down quality signals, which auction systems punish with higher prices per click." },
      { question: "How do I lower my average CPC?", answer: "Improve ad relevance and quality scores with tightly themed ad groups and compelling creative, since platforms reward relevance with cheaper clicks. Add negative keywords to stop paying for irrelevant searches, refine targeting toward audiences that engage, and test bidding strategies. Strengthening landing page experience lifts quality signals as well. Pausing costly, low-converting keywords and shifting budget to efficient ones lowers the blended average across the account." },
      { question: "Does a low CPC always mean a campaign is working?", answer: "No. A cheap click is worthless if it never converts, so a low CPC on unqualified traffic can waste more money than a higher CPC on buyers. Always read CPC alongside conversion rate and cost per acquisition. A campaign with a slightly higher cost per click but far stronger conversions usually delivers better returns than one that simply buys the cheapest possible clicks from a poorly matched audience." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "ctr",
    slug: "ctr-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "CTR Calculator",
    shortDescription: "Calculate click-through rate from clicks and impressions.",
    seoTitle: "CTR Calculator — Click-Through Rate",
    metaDescription:
      "Free CTR calculator. Divide clicks by impressions to find your click-through rate as a percentage, the key gauge of ad and listing relevance.",
    primaryKeyword: "ctr calculator",
    secondaryKeywords: ["click-through rate", "ctr formula", "click through rate percentage"],
    fields: [
      { id: "clicks", label: "Clicks", type: "number", placeholder: "250", required: true, span: 1, min: 0 },
      { id: "impressions", label: "Impressions", type: "number", placeholder: "10000", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "ctr", label: "Click-through rate", format: "percentage", decimals: 2, isPrimary: true, description: "Clicks ÷ impressions" },
    ],
    formula: "CTR = (clicks ÷ impressions) × 100",
    formulaExplanation:
      "Click-through rate divides the clicks an ad or link earned by the number of times it was shown, then multiplies by one hundred to express the result as a percentage. It is a ratio of interest to exposure, so it isolates how compelling the message is from how many people saw it. Because impressions cancel out, CTR lets you compare a small campaign against a huge one fairly. A rising CTR signals that creative, targeting and offer are resonating, while a falling one warns that the audience is scrolling past.",
    explanation:
      "A CTR calculator measures how persuasive your ad, email or search listing is by comparing the clicks it earned to the number of times it appeared. Click-through rate is the percentage of people who saw your message and were compelled enough to act on it. You enter the clicks and the impressions, and the calculator returns that share as a clean percentage. This single figure is one of the most diagnostic numbers in marketing because it isolates relevance from reach: it tells you not how many people you reached, but how many of them cared. A strong CTR means your headline, image, offer and audience are aligned, which the ad platforms themselves reward with lower costs and better placement through quality and relevance scores. A weak CTR flags a mismatch somewhere in that chain, prompting you to rewrite copy, swap creative, or retarget. CTR appears everywhere attention is measured: paid search ads, display banners, social posts, email subject lines and organic search results in Google Search Console. Because it is a rate rather than a raw count, it lets you compare a modest campaign against a sprawling one on equal footing, and track whether changes actually improve engagement. Advertisers, SEO specialists, email marketers and content teams use a CTR calculator to A/B test creative, benchmark against industry norms, spot fatigue as rates decay, and prove that a message is doing its job before spending more to scale it.",
    formulaSource: "Standard marketing metric (CTR)",
    example: {
      inputs: { clicks: 250, impressions: 10000 },
      explanation: "250 ÷ 10,000 × 100 = 2.5% click-through rate.",
    },
    faqs: [
      { question: "What is a good click-through rate?", answer: "Benchmarks vary widely by channel. Paid search often averages a few percent, display banners frequently sit well under one percent, and email click rates commonly land in the low single digits. Rather than fixate on a universal target, compare your CTR against typical figures for your specific platform and industry, and track whether your own rate is improving over time. A rate that beats your past performance and your competitors is what matters most." },
      { question: "Why is my CTR important?", answer: "CTR is a direct read on relevance, whether your message resonates with the people seeing it. Beyond that, the major ad platforms use CTR as a core input into quality and relevance scores, which influence how much you pay and how often your ads show. A higher CTR can therefore lower your costs and win better placement, while a low CTR can raise prices and suppress delivery. It is both a diagnostic and a lever on efficiency." },
      { question: "Can a high CTR still be bad?", answer: "Yes. A misleading headline or clickbait image can spike CTR while attracting visitors who bounce immediately and never convert, wasting spend and hurting conversion rates. Broad, curiosity-driven clicks can also flood your funnel with unqualified traffic. The goal is not clicks for their own sake but clicks from the right people, so always read CTR alongside conversion rate and downstream quality rather than treating a big number as automatic success." },
      { question: "How do I improve my CTR?", answer: "Sharpen your headline and first line so the value is obvious, use imagery or ad extensions that stand out, and make the offer specific and compelling. Tighten targeting so your message reaches people who actually want it, since relevance is the biggest driver of clicks. Test variations systematically, changing one element at a time, and refresh creative before fatigue sets in. Aligning the promise with the landing page keeps quality high too." },
      { question: "Does CTR affect my ad costs?", answer: "On auction-based platforms, yes. Systems like Google Ads factor expected click-through rate into quality score, and a higher quality score generally lowers your cost per click and improves ad rank. In practice a more relevant, higher-CTR ad can occupy a better position while paying less than a less relevant competitor. That feedback loop is why lifting CTR is often one of the most cost-effective optimisations available to an advertiser." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "conversion-rate",
    slug: "conversion-rate-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "Conversion Rate Calculator",
    shortDescription: "Find the percentage of visitors who convert.",
    seoTitle: "Conversion Rate Calculator — Visitors to Conversions",
    metaDescription:
      "Free conversion rate calculator. Divide conversions by visitors to find the percentage that took action, the core measure of funnel and landing-page effectiveness.",
    primaryKeyword: "conversion rate calculator",
    secondaryKeywords: ["conversion rate formula", "website conversion rate", "landing page conversion"],
    fields: [
      { id: "conversions", label: "Conversions", type: "number", placeholder: "45", required: true, span: 1, min: 0 },
      { id: "visitors", label: "Visitors", type: "number", placeholder: "1500", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "conversionRate", label: "Conversion rate", format: "percentage", decimals: 2, isPrimary: true, description: "Conversions ÷ visitors" },
    ],
    formula: "Conversion rate = (conversions ÷ visitors) × 100",
    formulaExplanation:
      "Conversion rate divides the number of people who completed the desired action by the number who had the chance to, then multiplies by one hundred for a percentage. It reduces the effectiveness of an entire funnel to a single comparable figure, independent of how much traffic arrived. Because visitors are the denominator, doubling traffic without improving persuasion leaves the rate unchanged, which is precisely why the metric isolates the quality of the offer, page and audience match from the sheer volume of visits.",
    explanation:
      "A conversion rate calculator shows what share of your visitors actually did the thing you wanted, whether that is buying, signing up, booking a call or downloading a guide. You enter the number of conversions and the number of visitors, and it returns the percentage that converted. This is arguably the most important efficiency metric a business has online, because it measures how well your traffic turns into outcomes rather than how much traffic you attract. Two sites with identical visitor numbers can differ enormously in revenue purely because one converts at three percent and the other at one, and closing that gap is often cheaper and faster than buying more traffic. The conversion rate anchors the entire economics of digital marketing: it links your cost per click to your cost per acquisition, tells you the break-even you need from ads, and reveals whether a landing page, offer or checkout is helping or hurting. A rising rate means your message, page and audience are aligned; a falling one points to friction, a weak offer, or mismatched traffic. Ecommerce owners, SaaS teams, marketers and CRO specialists use a conversion rate calculator to benchmark pages, size the impact of an A/B test, forecast revenue from a traffic target, and prioritise where optimisation will pay off most. Because it is a percentage, it lets you compare pages, campaigns and time periods fairly regardless of their traffic volume, making it the backbone of any serious optimisation program.",
    formulaSource: "Standard marketing metric (conversion rate)",
    example: {
      inputs: { conversions: 45, visitors: 1500 },
      explanation: "45 ÷ 1,500 × 100 = 3% conversion rate.",
    },
    faqs: [
      { question: "What is a good conversion rate?", answer: "Averages vary sharply by industry and intent. Many ecommerce stores convert somewhere around two to three percent of visitors, lead-generation pages often run higher, and high-consideration purchases lower. Rather than chase a universal figure, benchmark against your own history and close competitors, and focus on steady improvement. A small lift in conversion rate compounds across all your traffic, so even moving from two to three percent can meaningfully raise revenue without any extra spend." },
      { question: "How can I increase my conversion rate?", answer: "Reduce friction in the path to action by simplifying forms and checkout, and make the value and next step unmistakably clear. Strengthen the offer, add trust signals like reviews and guarantees, and ensure the page matches the promise that brought visitors there. Improve page speed and mobile experience, and test headlines, layouts and calls to action one change at a time so you can attribute gains. Qualifying traffic better also lifts the rate." },
      { question: "Why does traffic quality affect conversion rate?", answer: "Conversion rate depends as much on who arrives as on the page itself. Visitors with genuine intent, drawn by relevant keywords or well-targeted ads, convert far better than curiosity clicks or mismatched audiences. Flooding a page with cheap, unqualified traffic can crater the rate even if nothing on the page changed. That is why improving targeting and message match often raises conversion rate more reliably than tweaking page elements in isolation." },
      { question: "What counts as a conversion?", answer: "A conversion is any action you have defined as valuable, and it does not have to be a sale. Common examples include completed purchases, newsletter signups, form submissions, account registrations, demo bookings, app installs and content downloads. The key is to define it consistently so the metric stays comparable over time. Many businesses track several conversion types at once, distinguishing micro conversions, like a signup, from macro conversions, like a paid order." },
      { question: "How does conversion rate connect to cost per acquisition?", answer: "The two are tightly linked. If you know your cost per click and your conversion rate, you can derive cost per acquisition, since it takes more clicks to win a customer when fewer of them convert. Doubling your conversion rate roughly halves your acquisition cost at the same traffic price, which is why conversion optimisation is so powerful. Improving the rate makes every advertising dollar buy more customers without touching the ad budget itself." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cpa-metric",
    slug: "cost-per-acquisition-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "Cost Per Acquisition Calculator",
    shortDescription: "Calculate what each acquisition costs from total spend.",
    seoTitle: "Cost Per Acquisition Calculator — CPA",
    metaDescription:
      "Free cost per acquisition calculator. Divide total spend by acquisitions to find your CPA, the price of winning each customer or conversion.",
    primaryKeyword: "cost per acquisition calculator",
    secondaryKeywords: ["cpa calculator", "cost per acquisition formula", "cost per action"],
    fields: [
      { id: "totalSpend", label: "Total spend", type: "number", unit: "$", placeholder: "2000", required: true, span: 1, min: 0 },
      { id: "acquisitions", label: "Acquisitions", type: "number", placeholder: "80", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "cpa", label: "Cost per acquisition", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "Spend ÷ acquisitions" },
    ],
    formula: "CPA = total spend ÷ acquisitions",
    formulaExplanation:
      "Cost per acquisition divides the total money spent on a campaign by the number of acquisitions, sales, signups or actions, it produced. It answers the blunt question every marketer must eventually face: what did it cost to make one of these happen? Because acquisitions sit in the denominator, anything that lifts conversion for the same spend lowers CPA, tying it directly to click price and conversion rate. Set against the value of an acquisition, CPA is the line between a profitable channel and one quietly draining the budget.",
    explanation:
      "A cost per acquisition calculator tells you the real price of each result your marketing produced, dividing everything you spent by the number of acquisitions you won. Depending on your business, an acquisition might be a sale, a qualified lead, a subscriber or an app install, but the principle is identical: CPA converts a lump of spend into a per-outcome cost you can judge against the value that outcome brings. This is the metric where marketing meets the bottom line, because a campaign can post a brilliant click-through rate and a low cost per click yet still lose money if too few of those clicks convert, inflating the true cost of each customer. By collapsing spend and results into one figure, CPA cuts through vanity metrics and asks the only question that funds a budget: is each acquisition worth more than it costs to win? Compared against average order value, customer lifetime value or lead-to-sale economics, it reveals which channels are profitable, which are break-even, and which should be cut. CPA also sets the ceiling for bidding, since paying more than an acquisition is worth guarantees losses at scale. Performance marketers, growth teams, agencies and founders use a cost per acquisition calculator to compare channels on a profit-relevant basis, set target CPAs for automated bidding, forecast how many customers a budget will buy, and catch rising acquisition costs before they erode margins. It is the number that turns advertising activity into an investment decision.",
    formulaSource: "Standard marketing metric (CPA)",
    example: {
      inputs: { totalSpend: 2000, acquisitions: 80 },
      explanation: "$2,000 ÷ 80 acquisitions = $25 cost per acquisition.",
    },
    faqs: [
      { question: "What is a good cost per acquisition?", answer: "A good CPA is any figure comfortably below the value of what you acquire. If a new customer is worth two hundred dollars in profit over their lifetime, a CPA of fifty is excellent, while for a low-margin one-off sale even twenty might be too high. Because the benchmark is your own economics, the right approach is to calculate the maximum you can afford per acquisition and then work to beat it across channels." },
      { question: "How is CPA different from CPC?", answer: "Cost per click charges for a click regardless of what happens next, while cost per acquisition measures the spend behind a completed result such as a sale or signup. CPA therefore depends on both your click price and your conversion rate: cheaper clicks that never convert produce a terrible CPA. CPC is a traffic-cost metric useful for managing bids, whereas CPA is an outcome-cost metric that ties advertising directly to business value and profitability." },
      { question: "What does CPA stand for?", answer: "CPA most commonly stands for cost per acquisition, sometimes called cost per action, and it captures the average spend required to generate one conversion. The acquisition can be defined however your business needs, a purchase, a lead, a trial or an install, as long as you count it consistently. It should not be confused with the accounting designation of the same initials; in marketing, CPA is squarely a performance and efficiency metric for paid campaigns." },
      { question: "How can I lower my cost per acquisition?", answer: "Improve conversion rate so more of your existing traffic turns into acquisitions, since that lowers CPA without spending more. Sharpen targeting to reach higher-intent audiences, strengthen your offer and landing page, and cut spend on channels or keywords with poor conversion. Reducing cost per click through better ad relevance also helps, as does retargeting warm audiences who convert more cheaply. Every improvement in the funnel between click and result pulls CPA down." },
      { question: "Should I set a target CPA?", answer: "Yes, a target CPA gives your bidding and budgeting a clear profitability guardrail. Derive it from what an acquisition is worth to you, typically some fraction of average order value or lifetime value, so you keep a margin. Many ad platforms let you feed a target CPA directly into automated bidding, which then optimises toward that ceiling. Reviewing and adjusting the target as your economics change keeps campaigns profitable as costs and conversion rates shift." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator", "break-even-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "customer-lifetime-value",
    slug: "customer-lifetime-value-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "Customer Lifetime Value Calculator",
    shortDescription: "Estimate the total revenue a customer brings over time.",
    seoTitle: "Customer Lifetime Value Calculator — LTV",
    metaDescription:
      "Free customer lifetime value calculator. Multiply average order value, purchase frequency and lifespan to estimate the revenue each customer brings.",
    primaryKeyword: "customer lifetime value calculator",
    secondaryKeywords: ["ltv calculator", "clv calculator", "lifetime value formula"],
    fields: [
      { id: "avgOrderValue", label: "Average order value", type: "number", unit: "$", placeholder: "60", required: true, span: 1, min: 0 },
      { id: "purchaseFrequency", label: "Purchases per year", type: "number", placeholder: "4", required: true, span: 1, min: 0 },
      { id: "customerLifespan", label: "Customer lifespan", type: "number", unit: "years", placeholder: "5", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "ltv", label: "Lifetime value", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "AOV × frequency × lifespan" },
      { id: "annualValue", label: "Annual value", format: "currency", currency: "USD", decimals: 2, isPrimary: false, description: "AOV × frequency" },
    ],
    formula: "LTV = average order value × purchases per year × lifespan in years",
    formulaExplanation:
      "This lifetime value formula multiplies three drivers of long-term revenue: how much a customer spends per order, how often they buy in a year, and how many years they stay. The product is the total revenue a typical customer generates across the whole relationship, while the first two terms alone give their annual value. It is a revenue-based view rather than a profit one, so it deliberately ignores margins and discounting, giving a clean, comparable estimate of how valuable retaining a customer really is.",
    explanation:
      "A customer lifetime value calculator estimates how much revenue a typical customer will bring across the entire time they do business with you, not just on their first purchase. You enter the average order value, how many times a customer buys per year, and how many years the relationship typically lasts, and the tool multiplies them into a lifetime value, along with the yearly value that underpins it. This number reframes how you think about marketing spend. A first sale might barely cover its acquisition cost, but if that customer returns four times a year for five years, their true worth dwarfs the initial order, which justifies investing far more to win and keep them. Lifetime value is the counterweight to cost per acquisition: the ratio between the two, often called the LTV to CAC ratio, is one of the clearest indicators of a sustainable business, with healthy companies typically earning several times more from a customer than they spent acquiring them. Understanding LTV changes decisions across the board, from how much you can afford to bid on ads, to whether a loyalty program or better onboarding pays for itself, to which customer segments deserve the most attention. Ecommerce brands, subscription businesses, agencies and founders use a customer lifetime value calculator to set acquisition budgets, model the payoff of retention efforts, compare the worth of different customer groups, and make the case that keeping existing customers is usually cheaper and more profitable than endlessly chasing new ones. It turns a single transaction into a long-term view of value.",
    formulaSource: "Standard marketing metric (customer lifetime value)",
    example: {
      inputs: { avgOrderValue: 60, purchaseFrequency: 4, customerLifespan: 5 },
      explanation: "$60 × 4 purchases × 5 years = $1,200 lifetime value ($240 per year).",
    },
    faqs: [
      { question: "What is customer lifetime value?", answer: "Customer lifetime value, often abbreviated LTV or CLV, is the total revenue you expect a customer to generate over the whole span of their relationship with your business. Instead of judging a customer by a single purchase, it accounts for repeat buying across months or years, revealing their true worth. This longer view is essential for deciding how much you can invest to acquire and retain customers, since many relationships only become profitable after several repeat orders." },
      { question: "Why is LTV important for marketing?", answer: "LTV sets the ceiling on what you can profitably spend to acquire a customer. If a customer is worth twelve hundred dollars over five years, you can afford a far higher acquisition cost than if they were worth sixty. It also highlights the payoff of retention: small increases in how long customers stay or how often they buy can lift LTV substantially. Comparing LTV to acquisition cost is one of the strongest signals of whether growth is sustainable." },
      { question: "What is a good LTV to CAC ratio?", answer: "A widely cited benchmark is roughly three to one, meaning a customer is worth about three times what it cost to acquire them. A ratio near one to one suggests you are barely breaking even and have little room for other costs, while a very high ratio may mean you are underinvesting in growth and could spend more to acquire faster. The right target depends on margins, but three to one is a common healthy starting point." },
      { question: "How can I increase customer lifetime value?", answer: "Lift any of the three drivers: raise average order value through bundles, upsells and cross-sells; increase purchase frequency with reminders, subscriptions and loyalty incentives; and extend the customer lifespan by improving product, support and onboarding so people stay longer. Reducing churn is especially powerful because it multiplies through every future purchase. Even modest gains in each factor compound, since lifetime value is the product of all three rather than the sum." },
      { question: "Does this calculator account for profit margin?", answer: "No, this version estimates lifetime revenue rather than lifetime profit. It multiplies order value, frequency and lifespan to show the total a customer spends, which is ideal for comparing customer segments and setting acquisition ceilings on a revenue basis. To get lifetime profit, you would multiply the result by your gross margin, subtracting the cost of goods and service. Many teams track both, using revenue LTV for planning and margin-adjusted LTV for profitability." },
    ],
    relatedCalculators: ["roi-calculator", "ecommerce-profit-calculator", "roas-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "customer-acquisition-cost",
    slug: "customer-acquisition-cost-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "Customer Acquisition Cost Calculator",
    shortDescription: "Find what it costs to win each new customer.",
    seoTitle: "Customer Acquisition Cost Calculator — CAC",
    metaDescription:
      "Free customer acquisition cost calculator. Divide marketing spend by new customers to find your CAC, the price of growth for any business.",
    primaryKeyword: "customer acquisition cost calculator",
    secondaryKeywords: ["cac calculator", "customer acquisition cost formula", "cost to acquire customer"],
    fields: [
      { id: "marketingSpend", label: "Marketing spend", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "newCustomers", label: "New customers", type: "number", placeholder: "200", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "cac", label: "Acquisition cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "Spend ÷ new customers" },
    ],
    formula: "CAC = marketing spend ÷ new customers acquired",
    formulaExplanation:
      "Customer acquisition cost divides the total spent on winning customers over a period by the number of new customers gained in that period. The result is the average price of growth, one customer at a time. Because new customers are the denominator, more efficient marketing that converts the same spend into more customers drives CAC down. Compared against lifetime value, CAC decides whether acquisition is an investment that pays back or a cost that outruns the revenue each customer eventually returns.",
    explanation:
      "A customer acquisition cost calculator reveals what your business actually pays to win each new customer, dividing your marketing and sales spend by the number of customers that spend produced. CAC is one of the defining metrics of any growing company, because it answers whether you can afford to grow: if it costs more to acquire a customer than that customer is worth, scaling simply multiplies your losses. You enter the total spend and the number of new customers, and the tool returns the average cost of each acquisition on a clean, comparable basis. That figure becomes the yardstick for almost every growth decision. Set against customer lifetime value, it shows whether your unit economics work, with the LTV to CAC ratio serving as a quick health check that investors and operators alike rely on. Tracked over time, a rising CAC warns that channels are saturating, competition is intensifying, or targeting is slipping, often long before the damage shows up in the bottom line. Compared across channels, it reveals where growth is cheap and where it is expensive, guiding budget toward the most efficient sources. Founders, marketers, growth leads and finance teams use a customer acquisition cost calculator to size marketing budgets, judge whether a channel is sustainable, set payback-period targets, and prove that the money spent chasing growth returns more than it costs. Because it is a simple average, it is easy to compute yet powerful enough to anchor an entire growth strategy around disciplined, profitable acquisition rather than growth at any price.",
    formulaSource: "Standard marketing metric (CAC)",
    example: {
      inputs: { marketingSpend: 10000, newCustomers: 200 },
      explanation: "$10,000 ÷ 200 new customers = $50 customer acquisition cost.",
    },
    faqs: [
      { question: "What is customer acquisition cost?", answer: "Customer acquisition cost, or CAC, is the average amount your business spends on marketing and sales to gain one new customer. It bundles everything invested in winning customers over a period, ad spend, campaign costs and often sales effort, and divides by the customers acquired. CAC is central to understanding whether growth is affordable, because a business that pays more to acquire a customer than that customer returns cannot scale profitably no matter how fast it grows." },
      { question: "How does CAC relate to lifetime value?", answer: "CAC and lifetime value are two halves of a business's unit economics. LTV is what a customer is worth over time; CAC is what it cost to win them. The ratio between them, LTV divided by CAC, shows whether acquisition pays off, with a figure around three to one widely considered healthy. If CAC approaches or exceeds LTV, each new customer erodes rather than builds value, signalling that either acquisition costs or retention need urgent attention." },
      { question: "What is a good CAC?", answer: "There is no universal good CAC, because it only means something relative to what a customer is worth and how long they take to pay back. A fifty-dollar CAC is excellent if customers are worth hundreds and repay quickly, but ruinous for a thin-margin one-off sale. Judge CAC against lifetime value and payback period rather than in isolation, and aim to keep it low enough that customers become profitable well within an acceptable timeframe." },
      { question: "How can I reduce customer acquisition cost?", answer: "Improve conversion rates so more of your existing traffic becomes customers without extra spend, and sharpen targeting to reach audiences that convert more cheaply. Invest in lower-cost channels like referrals, content and organic search that compound over time, strengthen retention so word of mouth grows, and cut spend on underperforming campaigns. Better onboarding and product experience also drive referrals, which are among the cheapest customers you can acquire and lower blended CAC." },
      { question: "Should CAC include salaries and overhead?", answer: "A fully loaded CAC includes not just ad spend but also the salaries, tools and overhead tied to acquiring customers, which gives the truest picture of what growth costs. A simpler paid CAC counts only direct advertising spend, useful for optimising campaigns quickly. Both have their place: use the simple version for day-to-day channel decisions and the fully loaded version for strategic planning and investor reporting, being clear which one you are quoting." },
    ],
    relatedCalculators: ["roi-calculator", "roas-calculator", "break-even-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "churn-rate",
    slug: "churn-rate-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "Churn Rate Calculator",
    shortDescription: "Measure the percentage of customers you lose.",
    seoTitle: "Churn Rate Calculator — Customer Churn and Retention",
    metaDescription:
      "Free churn rate calculator. Divide customers lost by customers at the start to find your churn rate and retention rate as percentages.",
    primaryKeyword: "churn rate calculator",
    secondaryKeywords: ["customer churn calculator", "churn rate formula", "retention rate calculator"],
    fields: [
      { id: "customersLost", label: "Customers lost", type: "number", placeholder: "30", required: true, span: 1, min: 0 },
      { id: "customersStart", label: "Customers at start", type: "number", placeholder: "600", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "churnRate", label: "Churn rate", format: "percentage", decimals: 2, isPrimary: true, description: "Lost ÷ starting customers" },
      { id: "retentionRate", label: "Retention rate", format: "percentage", decimals: 2, isPrimary: false, description: "100% − churn" },
    ],
    formula: "Churn rate = (customers lost ÷ customers at start) × 100",
    formulaExplanation:
      "Churn rate divides the customers lost during a period by the number you had at its start, expressed as a percentage, and retention is simply the mirror image, one hundred percent minus churn. Using the starting count as the denominator measures attrition against the base you were trying to keep. Because it is a rate, it lets a small startup and a large enterprise compare loss fairly. Even a few points of monthly churn compound viciously over a year, which is why the metric commands so much attention in subscription businesses.",
    explanation:
      "A churn rate calculator measures how quickly you are losing customers, which for any subscription or recurring-revenue business is often the single most important number to control. You enter how many customers you had at the start of a period and how many you lost during it, and the tool returns both the churn rate and its complement, the retention rate. Churn matters because acquisition is expensive and slow, so a leaky bucket undermines every dollar spent on growth: if you lose customers as fast as you win them, revenue stalls no matter how good your marketing is. Small differences compound dramatically over time, five percent monthly churn quietly loses nearly half your customers over a year, while trimming it to two percent transforms the trajectory of the business. That is why churn is watched so closely by SaaS companies, subscription boxes, membership sites and any business built on repeat revenue. The retention side of the same coin is what powers compounding growth, because customers you keep buy again, refer others and cost nothing more to acquire. Reading churn over time reveals whether product, onboarding, pricing or support is driving people away, and segmenting it shows which customers leave and why. Founders, growth teams, customer success managers and marketers use a churn rate calculator to track the health of their base, model the revenue impact of retention improvements, set targets for customer success efforts, and prove that reducing churn is usually the highest-leverage growth investment available, cheaper and more durable than simply pouring money into acquiring replacements for the customers slipping out the back door.",
    formulaSource: "Standard SaaS metric (churn rate)",
    example: {
      inputs: { customersLost: 30, customersStart: 600 },
      explanation: "30 ÷ 600 × 100 = 5% churn rate, a 95% retention rate.",
    },
    faqs: [
      { question: "What is churn rate?", answer: "Churn rate is the percentage of customers who stop doing business with you over a given period, such as a month or a year. It is the direct opposite of retention rate, and together they describe how well you hold on to the customers you have won. For subscription and recurring-revenue businesses, churn is often the metric that determines whether the company grows or stagnates, because losing customers quietly cancels out the gains from acquiring new ones." },
      { question: "What is a good churn rate?", answer: "A good churn rate depends heavily on your business model and customer type. Many established SaaS companies aim for low single-digit monthly churn, while annual churn benchmarks differ by segment, with enterprise customers typically churning far less than consumer or small-business ones. Rather than fixate on a universal number, track your own churn over time and against close competitors, and treat any sustained decline as a meaningful win, since even small improvements compound." },
      { question: "How is churn rate different from retention rate?", answer: "They are two sides of the same measurement. Churn rate is the share of customers you lost in a period, while retention rate is the share you kept, so the two add up to one hundred percent. If churn is five percent, retention is ninety-five percent. Teams often lead with whichever framing suits the conversation, emphasising retention when celebrating loyalty and churn when diagnosing problems, but both come from the same underlying numbers." },
      { question: "How can I reduce churn?", answer: "Improve onboarding so customers reach value quickly, since early confusion is a leading cause of cancellation. Monitor engagement to spot at-risk customers before they leave and reach out proactively, strengthen support, and close product gaps that drive frustration. Aligning pricing with value, rewarding loyalty, and gathering exit feedback to fix recurring reasons for leaving all help. Because retained customers compound in value, even modest churn reductions can dramatically improve long-term revenue." },
      { question: "Why does churn matter so much?", answer: "Churn matters because its effects compound. A business losing a few percent of customers every month must run ever faster on acquisition just to stand still, and high churn caps how large the company can grow regardless of marketing spend. Retained customers, by contrast, buy repeatedly, refer others and require no fresh acquisition cost, so lowering churn lifts lifetime value across the entire base. For recurring-revenue models, controlling churn is often more valuable than accelerating acquisition." },
    ],
    relatedCalculators: ["roi-calculator", "roas-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "mrr",
    slug: "mrr-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "MRR Calculator",
    shortDescription: "Calculate monthly recurring revenue and annual run rate.",
    seoTitle: "MRR Calculator — Monthly Recurring Revenue",
    metaDescription:
      "Free MRR calculator. Multiply customers by average monthly revenue to find monthly recurring revenue and the annual run rate for a subscription business.",
    primaryKeyword: "mrr calculator",
    secondaryKeywords: ["monthly recurring revenue calculator", "mrr formula", "arr calculator"],
    fields: [
      { id: "customers", label: "Paying customers", type: "number", placeholder: "500", required: true, span: 1, min: 0 },
      { id: "avgMonthlyRevenue", label: "Avg revenue per customer", type: "number", unit: "$", placeholder: "40", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "mrr", label: "Monthly recurring revenue", format: "currency", currency: "USD", decimals: 2, isPrimary: true, description: "Customers × ARPU" },
      { id: "arr", label: "Annual run rate", format: "currency", currency: "USD", decimals: 2, isPrimary: false, description: "MRR × 12" },
    ],
    formula: "MRR = paying customers × average monthly revenue per customer",
    formulaExplanation:
      "Monthly recurring revenue multiplies the number of paying customers by the average revenue each one pays per month, giving the predictable income a subscription business earns every month. Multiplying MRR by twelve projects it into an annual run rate, the yearly revenue the current base would produce if nothing changed. Because it counts only recurring subscription revenue, it deliberately excludes one-off fees, isolating the stable, compounding income that makes subscription businesses so valuable and so easy to forecast and plan around.",
    explanation:
      "An MRR calculator gives a subscription business its heartbeat: the predictable revenue it earns every month from paying customers. You enter the number of paying customers and the average revenue each contributes per month, sometimes called ARPU, and the tool returns your monthly recurring revenue along with the annual run rate that projects it across a full year. MRR is the metric that makes subscription businesses so attractive and so measurable, because unlike one-off sales it recurs, letting you forecast income, plan hiring and spending, and see the compounding effect of adding customers. Watching MRR move month to month tells a richer story than a single revenue figure ever could: new customers add to it, upgrades expand it, downgrades contract it, and churn subtracts from it, so tracking those components reveals exactly where growth is coming from and where it is leaking. The annual run rate, MRR multiplied by twelve, translates the monthly figure into a yearly headline that investors and operators use to size the business, though it assumes the current base holds steady. Because MRR is normalised to a monthly amount, it lets you compare periods cleanly even when customers pay annually or on different plans. Founders, SaaS operators, growth teams and finance leads use an MRR calculator to track momentum, set and monitor targets, model the impact of pricing and retention changes, and communicate the health of the business in a single, forward-looking number. It converts a roster of subscribers into the recurring revenue engine at the centre of the company's plans.",
    formulaSource: "Standard SaaS metric (MRR)",
    example: {
      inputs: { customers: 500, avgMonthlyRevenue: 40 },
      explanation: "500 customers × $40 = $20,000 MRR, an annual run rate of $240,000.",
    },
    faqs: [
      { question: "What is monthly recurring revenue?", answer: "Monthly recurring revenue, or MRR, is the predictable subscription income a business earns each month from its paying customers. It counts only recurring revenue, excluding one-time charges like setup fees, so it reflects the stable base you can rely on and forecast. MRR is the foundational metric for subscription and SaaS businesses because it turns a collection of individual subscriptions into a single, repeatable number that reveals momentum and underpins planning, budgeting and valuation." },
      { question: "How is MRR different from ARR?", answer: "MRR is monthly recurring revenue, while ARR is annual recurring revenue, essentially MRR multiplied by twelve. They measure the same underlying subscription income at different time scales. Smaller and faster-moving businesses often track MRR because monthly changes are meaningful, while larger enterprises with annual contracts frequently lead with ARR. This calculator shows both, giving the monthly figure and the annual run rate so you can speak to whichever audience needs which frame." },
      { question: "What does average revenue per customer mean?", answer: "Average revenue per customer, sometimes called ARPU, is the mean monthly amount each paying customer contributes, found by dividing total monthly recurring revenue by the number of customers. It smooths over the fact that customers sit on different plans and price points. Multiplying ARPU by your customer count reconstructs MRR, and tracking ARPU over time shows whether upsells, plan changes and pricing are lifting the value of each customer or eroding it." },
      { question: "Why does MRR matter for planning?", answer: "MRR matters because its predictability lets you plan with confidence. Knowing roughly how much revenue will recur next month, and the month after, supports decisions about hiring, marketing spend and product investment that one-off revenue cannot. It also makes growth legible: comparing this month's MRR to last month's, and breaking the change into new, expansion, contraction and churned revenue, shows exactly what is driving the business forward or holding it back, guiding where to focus." },
      { question: "Is annual run rate the same as guaranteed revenue?", answer: "No. Annual run rate simply projects your current MRR forward twelve months, assuming the customer base and pricing stay exactly as they are today. It is a useful snapshot for sizing the business but not a guarantee, because churn, downgrades, new sales and price changes will all move the real figure. Treat run rate as an indicative annualisation of this moment rather than a forecast, and pair it with churn and growth trends for a realistic outlook." },
    ],
    relatedCalculators: ["roi-calculator", "ecommerce-profit-calculator", "roas-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "email-roi",
    slug: "email-marketing-roi-calculator",
    category: "Marketing",
    categorySlug: "marketing",
    title: "Email Marketing ROI Calculator",
    shortDescription: "Measure return and profit from an email campaign.",
    seoTitle: "Email Marketing ROI Calculator — Return on Campaign",
    metaDescription:
      "Free email marketing ROI calculator. Compare campaign revenue to cost to find your email ROI percentage and net profit from every send.",
    primaryKeyword: "email marketing roi calculator",
    secondaryKeywords: ["email roi calculator", "email campaign roi", "email marketing return"],
    fields: [
      { id: "revenue", label: "Campaign revenue", type: "number", unit: "$", placeholder: "9000", required: true, span: 1, min: 0 },
      { id: "campaignCost", label: "Campaign cost", type: "number", unit: "$", placeholder: "1500", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "roi", label: "Email ROI", format: "percentage", decimals: 2, isPrimary: true, description: "(Revenue − cost) ÷ cost" },
      { id: "netProfit", label: "Net profit", format: "currency", currency: "USD", decimals: 2, isPrimary: false, description: "Revenue − cost" },
    ],
    formula: "Email ROI = ((revenue − cost) ÷ cost) × 100",
    formulaExplanation:
      "Email marketing ROI subtracts the campaign cost from the revenue it generated to find the net gain, then divides that gain by the cost to express it as a percentage return. A result of one hundred percent means the campaign doubled its money, returning a dollar of profit for every dollar spent. Because cost is the denominator, email's famously low sending costs tend to produce dramatic percentages, which is exactly why the channel is prized: modest spend against meaningful revenue yields a return that few other channels can match.",
    explanation:
      "An email marketing ROI calculator measures whether a campaign made money and how efficiently, comparing the revenue it drove against what it cost to run. You enter the revenue attributed to the campaign and its total cost, covering the platform, design, copywriting and any promotional offers, and the tool returns the return on investment as a percentage alongside the net profit in dollars. Email consistently ranks among the highest-returning channels in marketing, precisely because its costs are so low relative to the revenue a well-targeted list can produce, and this calculator makes that advantage concrete. The ROI percentage tells you how many dollars came back for each dollar spent, which is ideal for comparing email against paid ads, social, or other campaigns on a level footing, while the net profit figure shows the actual money added to the business. Reading these together prevents two common mistakes: celebrating a big revenue number that hid an expensive send, or dismissing a modest-revenue campaign that was almost free to run and therefore hugely profitable. Tracked across campaigns, email ROI reveals which segments, offers and send strategies pay off, guiding where to focus. Ecommerce marketers, email specialists, agencies and small business owners use an email marketing ROI calculator to justify the channel's budget, compare campaigns and flows, test whether a promotion's discount ate its profit, and demonstrate that disciplined email marketing remains one of the most cost-effective ways to generate revenue. It turns a send report and an invoice into a clear verdict on whether the campaign earned its keep.",
    formulaSource: "Standard marketing metric (email ROI)",
    example: {
      inputs: { revenue: 9000, campaignCost: 1500 },
      explanation: "($9,000 − $1,500) ÷ $1,500 × 100 = 500% ROI, with $7,500 in net profit.",
    },
    faqs: [
      { question: "How is email marketing ROI calculated?", answer: "Email ROI is calculated by subtracting the campaign cost from the revenue it generated, then dividing that net gain by the cost and multiplying by one hundred for a percentage. For example, three thousand in revenue against a five hundred cost gives twenty-five hundred profit, which divided by five hundred is a five hundred percent return. The percentage shows efficiency per dollar spent, while the net profit shows the actual money the campaign added to the business." },
      { question: "Why does email tend to have high ROI?", answer: "Email typically posts high ROI because its costs are extremely low compared with the revenue it can generate. You are marketing to people who already chose to hear from you, so intent is high, and sending costs little beyond the platform fee and the time to create the message. That combination of a warm, owned audience and minimal per-send cost means even modest revenue produces a large percentage return, which is why email is repeatedly cited among the most cost-effective channels." },
      { question: "What costs should I include in the campaign cost?", answer: "For an accurate ROI, include all the costs tied to the campaign: your email platform's fee, any spend on design, copywriting or freelancers, the cost of discounts or free products offered in the promotion, and a reasonable share of the time your team spent. Leaving out real costs inflates ROI and can make an unprofitable promotion look successful. The more completely you capture cost, the more trustworthy the return figure becomes for comparing campaigns." },
      { question: "What is a good email marketing ROI?", answer: "Email is often cited as returning many times its cost, with widely quoted industry figures suggesting a return of several dozen dollars for every dollar spent, though results vary enormously by list quality, offer and execution. Rather than chase a headline benchmark, compare your campaigns against each other and against your other channels. Any campaign returning comfortably more than it cost is working, and improving list segmentation and relevance tends to push the return higher." },
      { question: "How can I improve my email ROI?", answer: "Grow and clean your list so you reach engaged subscribers, and segment it so each message is relevant to who receives it, since relevance drives revenue. Improve subject lines and content to lift opens and clicks, use automated flows like welcome and abandoned-cart series that convert cheaply, and test offers to find what sells without over-discounting. Keeping costs lean while raising revenue per send is the most direct route to a stronger return on the channel." },
    ],
    relatedCalculators: ["roi-calculator", "roas-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
