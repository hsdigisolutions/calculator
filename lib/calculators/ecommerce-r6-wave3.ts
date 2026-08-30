import type { CalculatorDefinition } from "../types";

/* Ecommerce Round 6 — Wave 3 calculator definitions. Pure serializable data. */

export const ecommerceR6Calculators: CalculatorDefinition[] = [
  {
    id: "average-order-value",
    slug: "average-order-value-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Average Order Value Calculator",
    shortDescription: "Find your average revenue per order.",
    seoTitle: "Average Order Value (AOV) Calculator — Free Tool",
    metaDescription:
      "Free average order value calculator. Divide total revenue by number of orders to find your AOV and benchmark store performance over any period.",
    primaryKeyword: "average order value calculator",
    secondaryKeywords: ["aov calculator", "average order value formula", "revenue per order calculator"],
    fields: [
      { id: "totalRevenue", label: "Total revenue", type: "number", unit: "$", placeholder: "12500", required: true, span: 1, min: 0, step: 0.01 },
      { id: "numberOfOrders", label: "Number of orders", type: "number", placeholder: "250", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "aov", label: "Average order value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "AOV = total revenue ÷ number of orders",
    explanation:
      "Average order value, or AOV, is the amount of revenue your store earns from a typical order, and it is one of the most revealing numbers in ecommerce. You calculate it by dividing total revenue over a period by the number of orders placed in that same period. A single sale tells you almost nothing on its own, but AOV summarizes the buying behaviour of your whole customer base into one figure you can watch, benchmark and try to move. It matters because it sits at the heart of your unit economics: for a given amount of traffic and a given conversion rate, a higher AOV means more revenue with no extra visitors to acquire. That is why raising AOV is often cheaper than chasing new customers. Store owners use this calculator to measure the impact of upsells, cross-sells, product bundles, free-shipping thresholds and volume discounts, all of which are designed to nudge shoppers toward larger baskets. It also helps you understand how much you can afford to spend acquiring a customer, because the value of the first order sets a ceiling on profitable ad spend. Track AOV month over month, compare it across channels and campaigns, and use it alongside conversion rate and traffic to see exactly where your revenue is really coming from and where the biggest growth levers sit.",
    formulaExplanation:
      "The formula divides the total revenue collected over a chosen period by the count of orders in that same period, producing the mean revenue per order. Because every order contributes its full value to the numerator and adds one to the denominator, larger baskets pull the average up while small orders pull it down. Keeping the revenue and order counts to the same time window is essential, otherwise the ratio is meaningless.",
    formulaSource: "Standard retail metric (average order value)",
    example: {
      inputs: { totalRevenue: 12500, numberOfOrders: 250 },
      explanation: "12,500 ÷ 250 = $50.00 average order value across the period.",
    },
    faqs: [
      { question: "What is a good average order value?", answer: "There is no universal target because AOV depends heavily on your category and price points; a furniture store will dwarf a snack brand. Instead of chasing an absolute number, compare your AOV against your own history and against direct competitors selling similar goods. A rising trend usually signals that upsells, bundles and merchandising are working. What matters most is that your AOV, combined with your margin, comfortably covers the cost of acquiring each customer." },
      { question: "How can I increase my average order value?", answer: "Common tactics include product bundles, volume discounts, cross-sells and upsells at checkout, and a free-shipping threshold set slightly above your current AOV so shoppers add one more item to qualify. Loyalty perks, gift-with-purchase offers and clear related-product recommendations also help. Test one change at a time and re-check your AOV after each so you can attribute the movement, and make sure the extra revenue is not eaten by the incentive you offered." },
      { question: "Should I calculate AOV using revenue or profit?", answer: "AOV is a revenue metric by definition, so it uses total sales revenue divided by orders, not profit. That said, revenue alone can mislead if your larger orders carry thinner margins, so many sellers track AOV alongside gross margin to see the full picture. Use AOV to gauge basket size and buying behaviour, and pair it with margin and customer acquisition cost when you are making decisions about pricing or ad spend." },
      { question: "What time period should I use for AOV?", answer: "Choose a window long enough to smooth out daily noise but short enough to reflect current behaviour, which for most stores means monthly. If you run frequent promotions, compare like-for-like periods, such as this month against the same month last year, so seasonal swings do not distort the reading. Just keep the revenue figure and the order count aligned to exactly the same dates, because mismatched windows produce a number that means nothing." },
      { question: "Does AOV include shipping and taxes?", answer: "That depends on how you define revenue for the calculation, and consistency matters more than the exact choice. Many stores use net product revenue, excluding shipping charges and sales tax, so the metric reflects the value of goods sold rather than pass-through costs. Whatever you decide, apply the same rule every time you calculate AOV so your trend line stays comparable, and note your definition so teammates read the number the same way you do." },
    ],
    relatedCalculators: ["gmv-calculator", "ecommerce-conversion-rate-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "ecom-conversion-rate",
    slug: "ecommerce-conversion-rate-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Ecommerce Conversion Rate Calculator",
    shortDescription: "Turn orders and visitors into a conversion rate.",
    seoTitle: "Ecommerce Conversion Rate Calculator — Free Tool",
    metaDescription:
      "Free ecommerce conversion rate calculator. Divide orders by visitors to find the percentage of shoppers who buy and benchmark your store's performance.",
    primaryKeyword: "ecommerce conversion rate calculator",
    secondaryKeywords: ["conversion rate calculator", "store conversion rate", "online store conversion calculator"],
    fields: [
      { id: "orders", label: "Number of orders", type: "number", placeholder: "45", required: true, span: 1, min: 0, step: 1 },
      { id: "visitors", label: "Number of visitors", type: "number", placeholder: "1500", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "conversionRate", label: "Conversion rate", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "conversion rate = (orders ÷ visitors) × 100",
    explanation:
      "The ecommerce conversion rate is the percentage of your store visitors who complete a purchase, and it is arguably the single most important efficiency metric in online retail. You calculate it by dividing the number of orders by the number of visitors and multiplying by 100. While traffic tells you how many people arrive, conversion rate tells you how good your store is at turning those arrivals into paying customers. That distinction is powerful, because doubling your conversion rate has the same effect on revenue as doubling your traffic, and it is almost always cheaper to achieve. A low conversion rate points to friction somewhere in the journey: slow pages, confusing navigation, thin product descriptions, a clunky checkout, unexpected shipping costs, or a mismatch between the traffic you attract and the products you sell. A healthy rate means your site, pricing and messaging are aligned with what shoppers want. Store owners use this calculator to establish a baseline, to measure the effect of design changes, A/B tests and checkout improvements, and to compare performance across devices, traffic sources and campaigns. Because conversion rate multiplies directly with traffic and average order value to produce revenue, it is one of the three core levers every online store should watch. Track it consistently, segment it by channel and device, and treat every meaningful improvement as compounding growth that costs you nothing extra in ad spend.",
    formulaExplanation:
      "The formula divides orders by visitors, giving the fraction of sessions that ended in a purchase, then multiplies by 100 to express it as a percentage. The numerator counts successful outcomes and the denominator counts opportunities, so the ratio measures efficiency rather than volume. It is vital that orders and visitors come from the same period and, ideally, the same segment, since mixing sources or timeframes distorts the true conversion picture.",
    formulaSource: "Standard digital marketing metric (conversion rate)",
    example: {
      inputs: { orders: 45, visitors: 1500 },
      explanation: "(45 ÷ 1500) × 100 = 3.00% of visitors placed an order.",
    },
    faqs: [
      { question: "What is a good ecommerce conversion rate?", answer: "Across most online stores, conversion rates fall between one and three percent, with well-optimized shops and strong brands pushing higher. The right benchmark depends on your industry, price point and traffic quality, because visitors from branded search convert far better than cold display traffic. Rather than fixate on a headline figure, track your own rate over time and aim for steady improvement, since even a fraction of a percentage point can translate into meaningful revenue at scale." },
      { question: "Should I count unique visitors or sessions?", answer: "Both are valid denominators, but they answer slightly different questions and must be applied consistently. Sessions count each visit, so a shopper who returns three times before buying counts as three opportunities, while unique visitors count that person once. Sessions are the more common basis for store conversion rate because a purchase decision often spans several visits. Pick one definition, note it, and use it every time so your trend line stays comparable." },
      { question: "Why is my conversion rate low?", answer: "Low conversion usually stems from friction or mismatch. Slow-loading pages, a complicated or lengthy checkout, surprise shipping costs revealed late, weak product descriptions, missing reviews and a lack of trust signals all push shoppers away. Attracting the wrong traffic also hurts, because visitors who are not ready to buy will not convert regardless of your site quality. Audit the full journey from landing page to payment, fix the biggest points of friction first, and test each change." },
      { question: "How do I improve my conversion rate?", answer: "Start by removing friction: speed up your pages, streamline checkout, offer guest checkout, and show shipping costs early. Add trust signals such as reviews, clear return policies and secure-payment badges, and make product pages richer with better photos and descriptions. Then run structured A/B tests on headlines, calls to action and page layouts, changing one element at a time so you can attribute results. Small, compounding improvements typically outperform any single dramatic redesign." },
      { question: "Does conversion rate differ by device?", answer: "Yes, and often dramatically. Desktop conversion rates are frequently higher than mobile, even though mobile usually drives more traffic, because small screens, fiddly forms and distraction make mobile checkout harder. Segmenting your conversion rate by device reveals whether your mobile experience is leaking sales. If mobile lags well behind desktop, prioritize a faster, simpler mobile checkout with autofill and digital wallets, since that is often where the largest untapped revenue is hiding." },
    ],
    relatedCalculators: ["cart-abandonment-calculator", "average-order-value-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cart-abandonment",
    slug: "cart-abandonment-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Cart Abandonment Rate Calculator",
    shortDescription: "See how many shoppers leave without buying.",
    seoTitle: "Cart Abandonment Rate Calculator — Free Tool",
    metaDescription:
      "Free cart abandonment calculator. Find the percentage of shopping carts abandoned before checkout, plus your completion rate, from carts and purchases.",
    primaryKeyword: "cart abandonment calculator",
    secondaryKeywords: ["shopping cart abandonment rate", "checkout abandonment calculator", "cart abandonment rate formula"],
    fields: [
      { id: "cartsCreated", label: "Carts created", type: "number", placeholder: "1000", required: true, span: 1, min: 0, step: 1 },
      { id: "completedPurchases", label: "Completed purchases", type: "number", placeholder: "300", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "abandonmentRate", label: "Cart abandonment rate", format: "percentage", decimals: 2, isPrimary: true },
      { id: "completionRate", label: "Checkout completion rate", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "abandonment rate = (1 − completed ÷ created) × 100",
    explanation:
      "Cart abandonment rate is the percentage of shoppers who add items to their cart but leave before completing the purchase, and it is one of the clearest signals of friction in your checkout. You calculate it by dividing completed purchases by carts created, subtracting that fraction from one, and multiplying by 100; the complementary figure is your checkout completion rate. Abandonment matters enormously because these are not cold browsers, they are shoppers who showed real intent by building a cart, then walked away at the final hurdle. Industry studies routinely put average abandonment near seventy percent, which means the majority of would-be sales evaporate at checkout across the whole industry. Every point you recover is high-quality revenue from people who already wanted to buy. The causes are well understood: unexpected shipping and fees revealed late, forced account creation, a long or confusing checkout, security worries, limited payment options and simple distraction. Because the intent is already there, fixing these frictions often produces faster returns than any amount of new traffic. Store owners use this calculator to quantify the leak, to justify checkout improvements, and to measure the effect of changes such as guest checkout, clearer shipping costs, progress indicators, digital wallets and abandoned-cart email reminders. Track abandonment over time, watch it fall as you smooth the path to purchase, and treat the completion rate as a direct measure of how well your checkout converts hard-won intent into orders.",
    formulaExplanation:
      "The formula divides completed purchases by carts created to get the completion rate, the share of carts that turned into orders. Subtracting that fraction from one leaves the share that did not convert, and multiplying by 100 expresses it as the abandonment percentage. Because completion and abandonment are complements, they always sum to one hundred percent, so improving one directly reduces the other. Carts and purchases must be counted over the same period for the ratio to hold.",
    formulaSource: "Baymard Institute checkout usability research",
    example: {
      inputs: { cartsCreated: 1000, completedPurchases: 300 },
      explanation: "Completion = 30%. Abandonment = (1 − 300/1000) × 100 = 70%.",
    },
    faqs: [
      { question: "What is the average cart abandonment rate?", answer: "Large-scale studies consistently place the average shopping-cart abandonment rate around seventy percent, meaning roughly seven in ten carts never become orders. The figure varies by industry, device and price point, with mobile and high-consideration purchases tending to abandon more. Because the average is so high, most stores have substantial room to recover revenue by smoothing checkout, and even a few percentage points of improvement can translate into a meaningful lift in completed sales." },
      { question: "Why do customers abandon their carts?", answer: "The most common reasons are extra costs appearing late, such as shipping, taxes and fees, followed by being forced to create an account, a checkout that is too long or complicated, and concerns about payment security. Others simply comparison-shop, get distracted, or use the cart as a wish list. Because unexpected cost is the leading driver, showing shipping and fees early and offering guest checkout usually reclaims the largest share of otherwise lost sales." },
      { question: "How can I reduce cart abandonment?", answer: "Show total costs including shipping as early as possible, offer guest checkout, and shorten the process to as few steps as you can. Provide multiple payment methods including digital wallets, display trust and security badges, and use a progress indicator so shoppers know how close they are to finishing. Follow up with abandoned-cart emails to recover intent that slipped away, and continually test each change so you can see which frictions were costing you the most." },
      { question: "What is the difference between cart and checkout abandonment?", answer: "Cart abandonment covers shoppers who add items but never begin or finish checkout, while checkout abandonment is narrower, counting only those who start the checkout flow and then quit partway. Checkout abandonment isolates friction inside the payment funnel specifically, whereas cart abandonment captures the wider drop-off after adding to cart. Measuring both helps you tell whether shoppers lose interest before checkout or stall during it, so you can target the right fix." },
      { question: "Do abandoned cart emails actually work?", answer: "Yes, abandoned-cart emails are one of the highest-performing tactics in ecommerce because they reach people who already demonstrated buying intent. A timely reminder, sometimes paired with the saved cart contents or a modest incentive, recovers a meaningful share of otherwise lost orders. Sending a short sequence rather than a single message tends to perform better, and combining email with on-site improvements addresses both the shoppers you can reach and the frictions that drove them away in the first place." },
    ],
    relatedCalculators: ["ecommerce-conversion-rate-calculator", "average-order-value-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "product-profit",
    slug: "product-profit-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Product Profit Calculator",
    shortDescription: "Net profit and margin after every cost.",
    seoTitle: "Product Profit Calculator — Margin After Fees",
    metaDescription:
      "Free product profit calculator. Subtract product cost, shipping and platform fees from your selling price to find net profit and profit margin per unit.",
    primaryKeyword: "product profit calculator",
    secondaryKeywords: ["profit per product calculator", "product margin calculator", "unit profit calculator"],
    fields: [
      { id: "sellingPrice", label: "Selling price", type: "number", unit: "$", placeholder: "50", required: true, span: 1, min: 0, step: 0.01 },
      { id: "productCost", label: "Product cost", type: "number", unit: "$", placeholder: "18", required: true, span: 1, min: 0, step: 0.01 },
      { id: "shippingCost", label: "Shipping cost", type: "number", unit: "$", placeholder: "5", required: false, span: 1, min: 0, step: 0.01 },
      { id: "platformFees", label: "Platform fees", type: "number", unit: "$", placeholder: "7", required: false, span: 1, min: 0, step: 0.01, helpText: "Marketplace and payment fees per unit." },
    ],
    results: [
      { id: "netProfit", label: "Net profit", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "profitMargin", label: "Profit margin", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "net profit = price − product cost − shipping − platform fees",
    explanation:
      "A product profit calculator shows the true profit you keep from selling a single unit once every direct cost has been deducted from the price. It subtracts the product cost, shipping and platform fees from the selling price to give net profit, then expresses that profit as a margin, which is profit divided by price. This is essential because the gap between price and product cost, which sellers often treat as profit, ignores the shipping and marketplace fees that quietly consume a large slice of every order. A product that looks profitable on paper can lose money once a fifteen percent platform fee and a few dollars of shipping are taken into account, and you would never see it from the price tag alone. By making each deduction explicit, this calculator lets you price with confidence, compare suppliers, and decide whether a product earns its place in your catalogue. Margin, rather than raw dollars, is the number to steer by, because it scales across products at very different price points and tells you how much cushion remains to absorb returns, discounts, advertising and slow periods. Amazon, Etsy, eBay and Shopify sellers, dropshippers and direct-to-consumer brands use a product profit calculator before listing an item, when negotiating with suppliers, and when setting the margins that keep the whole business sustainable. Run each product through it, keep only those that clear your target margin, and you build a catalogue that actually makes money rather than merely turning it over.",
    formulaExplanation:
      "The selling price is your gross revenue per unit. From it the formula subtracts the product cost, the shipping you pay per order, and the platform fees charged by the marketplace and payment processor, leaving net profit, the money you actually keep. Dividing that net profit by the selling price and multiplying by 100 gives the profit margin, a percentage that lets you compare profitability fairly across items with very different prices.",
    formulaSource: "Standard retail margin formula",
    example: {
      inputs: { sellingPrice: 50, productCost: 18, shippingCost: 5, platformFees: 7 },
      explanation: "50 − 18 − 5 − 7 = $20 net profit, a 40% margin on the $50 price.",
    },
    faqs: [
      { question: "What is the difference between net profit and margin?", answer: "Net profit is a dollar figure, the amount left after subtracting product cost, shipping and fees from the selling price. Margin is that profit expressed as a percentage of the price, which makes it comparable across products at different prices. A five-dollar profit sounds identical on two items, but one might represent a healthy forty percent margin and the other a fragile five percent. Watching margin alongside raw profit keeps your pricing honest across a varied catalogue." },
      { question: "Should I include advertising in product profit?", answer: "If you want a complete picture, yes, though advertising is often tracked separately because it varies by campaign rather than per unit. You can fold an average advertising cost per sale into the platform fees field to see a fuller net profit, which matters most when ad spend is a large share of revenue. At minimum, keep advertising in mind when interpreting your margin, since a product that looks profitable can lose money once acquisition costs are added." },
      { question: "How do platform fees affect profit?", answer: "Marketplace and payment fees usually scale with the selling price, so they take a proportional bite out of every order and grow as your price rises. Platforms such as Amazon, Etsy and eBay commonly charge in the region of ten to fifteen percent, and payment processing adds a few percent more. Because the fee follows the price, raising your price does not protect your margin as much as expected, so always build the platform's cut into your pricing rather than treating it as an afterthought." },
      { question: "What counts as a healthy product margin?", answer: "It varies by category, but many sellers aim for a net margin of twenty to forty percent after every cost, giving enough cushion to absorb returns, refunds and advertising. Below ten percent a product is fragile, since a single price rise from your supplier or a wave of returns can wipe out the profit. High-volume commodity items can survive on thinner margins, while unique or branded products should command more, so judge your figure against the risk and marketing each product carries." },
      { question: "Does this calculator handle bulk or per-unit costs?", answer: "It is designed for per-unit economics, so enter the cost, shipping and fees associated with a single sale. If you buy inventory in bulk, divide the total purchase cost by the number of units to get the per-unit product cost before entering it. Likewise, use the shipping and fees that apply to one order. Working per unit keeps the margin meaningful and lets you compare products directly, which is exactly what you need when deciding what to stock and how to price it." },
    ],
    relatedCalculators: ["ecommerce-profit-calculator", "average-order-value-calculator", "sell-through-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "days-of-inventory",
    slug: "days-of-inventory-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Days of Inventory Calculator",
    shortDescription: "How long your current stock will last.",
    seoTitle: "Days of Inventory Calculator — Days of Supply Tool",
    metaDescription:
      "Free days of inventory calculator. Divide units on hand by average daily sales to see how many days your stock will last before you run out.",
    primaryKeyword: "days of inventory calculator",
    secondaryKeywords: ["days of supply calculator", "inventory days on hand", "stock coverage calculator"],
    fields: [
      { id: "inventoryUnits", label: "Inventory on hand", type: "number", unit: "units", placeholder: "600", required: true, span: 1, min: 0, step: 1 },
      { id: "avgDailySales", label: "Average daily sales", type: "number", unit: "units/day", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "daysOfSupply", label: "Days of supply", format: "number", decimals: 1, unit: "days", isPrimary: true },
    ],
    formula: "days of supply = inventory units ÷ average daily sales",
    explanation:
      "Days of inventory, also called days of supply or days on hand, tells you how many days your current stock will last at your typical selling pace. You calculate it by dividing the units you have on hand by your average daily sales. This single number turns an abstract pile of stock into a concrete runway, letting you see at a glance whether you are about to run out or sitting on far more than you need. It is one of the most practical inventory metrics because it connects the quantity in your warehouse directly to real demand rather than to a static reorder table. Too few days of supply and you risk stockouts, lost sales and disappointed customers who may not return; too many and you tie up cash in slow-moving goods, pay for storage, and expose yourself to obsolescence and markdowns. The right level depends on how long your supplier takes to replenish, how variable your demand is, and how much safety buffer you want to hold. Store owners and operations teams use this calculator to time purchase orders, to spot overstock and understock across a catalogue, to plan for seasonal peaks, and to keep working capital under control. Compare days of supply across products, watch it fall as a sale accelerates, and use it together with your supplier lead time to decide exactly when to reorder so you neither run dry nor drown in excess stock.",
    formulaExplanation:
      "The formula divides the number of units currently on hand by the average number of units sold per day, giving the number of days the stock will cover at that rate. The daily sales figure should reflect genuine recent demand, ideally averaged over a representative period, because a rate skewed by a one-off spike or a quiet week will over- or understate your true runway. The result is a forward-looking estimate, not a guarantee, since demand can change.",
    formulaSource: "Standard inventory management metric (days of supply)",
    example: {
      inputs: { inventoryUnits: 600, avgDailySales: 20 },
      explanation: "600 ÷ 20 = 30 days of supply at the current sales pace.",
    },
    faqs: [
      { question: "What is a good number of days of inventory?", answer: "There is no universal target, because the right level depends on your supplier lead time, demand variability and storage costs. A rough rule is to hold enough to cover your replenishment lead time plus a safety buffer, so if a supplier takes two weeks you would want comfortably more than fourteen days of supply. Fast-moving perishable goods favour lower days on hand, while items with long or unreliable lead times justify holding more to avoid stockouts." },
      { question: "How is days of inventory different from inventory turnover?", answer: "They are two views of the same thing. Days of inventory measures how many days your stock lasts, while inventory turnover measures how many times you sell through and replace your stock over a period such as a year. A low days-on-hand figure corresponds to high turnover, and vice versa. Days of supply is often more intuitive for day-to-day reordering decisions, whereas turnover is a common efficiency ratio used in financial and annual reporting." },
      { question: "What daily sales figure should I use?", answer: "Use an average over a recent, representative period rather than a single day, so a one-off spike or a quiet day does not distort the result. For products with steady demand, a trailing thirty-day average works well. For seasonal items, base the figure on the relevant season rather than a flat annual average, because using the wrong period can badly under- or overstate your runway right when accurate planning matters most." },
      { question: "Why does days of inventory matter for cash flow?", answer: "Every unit sitting in your warehouse represents cash you have already spent but not yet recovered. Holding too many days of supply locks up working capital, adds storage costs, and risks markdowns if goods become obsolete or go out of season. Holding too few risks stockouts and lost sales. Tracking days of inventory helps you strike the balance that keeps shelves stocked while freeing up cash to invest in growth, marketing or faster-moving products." },
      { question: "How do I use days of supply to time reorders?", answer: "Compare your current days of supply against your supplier's lead time plus the safety buffer you want to hold. When days of supply falls to roughly that combined figure, it is time to place a new order so fresh stock arrives before you run out. Pairing this metric with a reorder point calculation makes the timing explicit, turning a gut feeling about running low into a clear, repeatable trigger that protects you from both stockouts and overstock." },
    ],
    relatedCalculators: ["reorder-point-calculator", "sell-through-rate-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "reorder-point",
    slug: "reorder-point-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Reorder Point Calculator",
    shortDescription: "Know exactly when to reorder stock.",
    seoTitle: "Reorder Point Calculator — When to Restock",
    metaDescription:
      "Free reorder point calculator. Combine daily usage, lead time and safety stock to find the stock level that should trigger your next purchase order.",
    primaryKeyword: "reorder point calculator",
    secondaryKeywords: ["reorder point formula", "when to reorder stock", "rop calculator"],
    fields: [
      { id: "avgDailyUsage", label: "Average daily usage", type: "number", unit: "units/day", placeholder: "25", required: true, span: 1, min: 0, step: 0.01 },
      { id: "leadTimeDays", label: "Lead time", type: "number", unit: "days", placeholder: "7", required: true, span: 1, min: 0, step: 0.01 },
      { id: "safetyStock", label: "Safety stock", type: "number", unit: "units", placeholder: "50", required: false, span: 2, min: 0, step: 1, helpText: "Buffer units to cover demand spikes and delays." },
    ],
    results: [
      { id: "reorderPoint", label: "Reorder point", format: "number", decimals: 0, unit: "units", isPrimary: true },
    ],
    formula: "reorder point = (daily usage × lead time) + safety stock",
    explanation:
      "The reorder point is the inventory level at which you should place a new order so that fresh stock arrives just before you run out. You calculate it by multiplying your average daily usage by the supplier lead time, then adding a safety-stock buffer. The result is a simple threshold: when your on-hand quantity drops to this number, it is time to reorder. This is one of the most useful tools in inventory management because it removes guesswork from replenishment. Without a reorder point, businesses tend to either reorder too early, tying up cash and warehouse space, or too late, hitting stockouts that cost sales and damage customer trust. The reorder point balances these risks by accounting for exactly how much you sell while you wait for a delivery. The lead-time demand portion, daily usage multiplied by lead time, covers normal sales during the wait. The safety stock cushions against the two things that go wrong in practice: demand running hotter than average and suppliers delivering later than promised. Store owners, warehouse managers and operations teams use this calculator to set reorder triggers for each product, to automate purchasing rules, and to keep shelves reliably stocked without overinvesting in inventory. Recalculate it whenever your sales rate or lead time changes, set the threshold in your inventory system, and let it fire consistently so restocking becomes a routine, data-driven decision rather than a scramble every time stock runs low.",
    formulaExplanation:
      "The formula has two parts. Daily usage multiplied by lead time gives lead-time demand, the quantity you expect to sell during the days it takes a new order to arrive, ensuring you can keep selling while you wait. Safety stock is then added as a buffer against demand spikes and supplier delays, so a bad week does not empty your shelves. Their sum is the on-hand level at which you should trigger a fresh purchase order.",
    formulaSource: "Standard inventory management formula (reorder point)",
    example: {
      inputs: { avgDailyUsage: 25, leadTimeDays: 7, safetyStock: 50 },
      explanation: "(25 × 7) + 50 = 175 + 50 = 225 units. Reorder when stock hits 225.",
    },
    faqs: [
      { question: "What is safety stock and how do I set it?", answer: "Safety stock is a buffer of extra units held to protect against demand that runs above average or suppliers who deliver late. A simple approach is to hold a few days of average sales as a cushion, while more precise methods use the variability of your demand and lead time to size it statistically. The right amount balances the cost of holding extra inventory against the cost of a stockout, so high-margin or hard-to-replace items usually justify a larger buffer." },
      { question: "How do I find my average daily usage?", answer: "Take your total unit sales over a recent, representative period and divide by the number of days in that period. A trailing thirty-day window works well for steady sellers, while seasonal products should be based on the relevant season rather than a flat annual average. Because the reorder point scales directly with this figure, keeping it current matters; recalculate whenever your sales trend shifts so your reorder trigger reflects real demand rather than stale numbers." },
      { question: "What happens if my lead time changes?", answer: "Lead time feeds directly into the reorder point, so a longer lead time raises the level at which you must reorder, and a shorter one lowers it. If a supplier becomes slower or less reliable, recalculate immediately and consider increasing safety stock to cover the added uncertainty. Ignoring a lengthening lead time is a common cause of stockouts, because your old threshold no longer leaves enough runway for the delivery to arrive before you sell out." },
      { question: "Should each product have its own reorder point?", answer: "Yes. Different products sell at different rates and often come from different suppliers with different lead times, so a single blanket threshold would leave some items overstocked and others prone to stockouts. Calculate a reorder point per product, or per SKU, using its own usage rate and lead time. Most inventory systems let you store a reorder point for each item and alert you automatically when stock falls to that level, making per-product triggers easy to manage at scale." },
      { question: "Does the reorder point include the stock in transit?", answer: "The reorder point is the trigger level for placing an order, so it deals with on-hand stock rather than units already on their way. Once you place an order, those incoming units become stock in transit and will replenish you after the lead time. The key is to reorder as soon as on-hand inventory reaches the reorder point and not to double-order simply because a shipment is pending, which is why tracking open purchase orders alongside on-hand levels is good practice." },
    ],
    relatedCalculators: ["days-of-inventory-calculator", "sell-through-rate-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "sell-through-rate",
    slug: "sell-through-rate-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Sell-Through Rate Calculator",
    shortDescription: "What share of received stock has sold.",
    seoTitle: "Sell-Through Rate Calculator — Free Inventory Tool",
    metaDescription:
      "Free sell-through rate calculator. Divide units sold by units received to see the percentage of your stock that has sold and gauge inventory performance.",
    primaryKeyword: "sell-through rate calculator",
    secondaryKeywords: ["sell through rate formula", "inventory sell through calculator", "sell-through percentage"],
    fields: [
      { id: "unitsSold", label: "Units sold", type: "number", placeholder: "180", required: true, span: 1, min: 0, step: 1 },
      { id: "unitsReceived", label: "Units received", type: "number", placeholder: "240", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "sellThrough", label: "Sell-through rate", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "sell-through rate = (units sold ÷ units received) × 100",
    explanation:
      "Sell-through rate is the percentage of received inventory that you have sold over a given period, and it is one of the sharpest measures of how well a product is performing against the stock you committed to it. You calculate it by dividing units sold by units received and multiplying by 100. Unlike raw sales counts, sell-through rate puts sales in the context of how much you brought in, so it tells you whether a product is flying off the shelves or gathering dust. A high sell-through rate signals strong demand and efficient buying, suggesting you could stock more and perhaps raise prices, while a low rate warns that stock is moving too slowly, tying up cash and risking markdowns or obsolescence. Retailers typically measure sell-through over a fixed window, often thirty days, to compare products on equal footing and to judge how quickly a new arrival is being adopted. Store owners and buyers use this calculator to evaluate purchasing decisions, to decide which products to reorder and which to discount or discontinue, to negotiate with suppliers, and to plan markdowns before slow stock becomes dead stock. Track sell-through by product and by season, compare it against your targets, and use it alongside days of supply and margin to build a catalogue that turns inventory into cash quickly. Watching this number closely is what separates disciplined buying from the slow accumulation of stock that never sells.",
    formulaExplanation:
      "The formula divides the number of units sold by the number of units received during the same period, then multiplies by 100 to give a percentage. The denominator is the stock you took in rather than what remains, which is what makes the metric a measure of performance against commitment: it answers what share of everything you brought in has actually sold. Keeping the sold and received counts to the same window and product is essential for a meaningful figure.",
    formulaSource: "Standard retail inventory metric (sell-through rate)",
    example: {
      inputs: { unitsSold: 180, unitsReceived: 240 },
      explanation: "(180 ÷ 240) × 100 = 75% of received stock has sold.",
    },
    faqs: [
      { question: "What is a good sell-through rate?", answer: "A common benchmark is a sell-through rate around eighty percent over a thirty-day period, though the right target varies by industry, price point and product type. Higher rates indicate strong demand and efficient buying, while much lower rates suggest you ordered too much or priced too high. Rather than fixate on a single number, compare each product against your own targets and against similar items, and watch the trend so you can act before slow stock turns into dead stock." },
      { question: "What period should I measure sell-through over?", answer: "Thirty days is the most common window because it gives enough time for a product to establish a sales pattern while remaining current. For fast-moving goods a shorter window can be useful, and for big seasonal ranges you might measure across the whole season. The key is consistency: use the same period whenever you compare products or track a product over time, otherwise differences in the measurement window will distort the comparison and lead you to the wrong conclusions." },
      { question: "How is sell-through different from inventory turnover?", answer: "Sell-through rate compares units sold against units received in a single period, usually expressed as a percentage, making it ideal for evaluating a specific buy or a new product launch. Inventory turnover measures how many times your entire stock is sold and replaced over a longer period such as a year. Sell-through is more granular and buying-focused, while turnover is a broader efficiency ratio, and many retailers use both together to manage purchasing and overall inventory health." },
      { question: "What should I do about a low sell-through rate?", answer: "A low rate means stock is moving slowly, so investigate why before it becomes dead stock. Consider whether the price is too high, the product is poorly merchandised, or demand was simply overestimated. Options include running a promotion or markdown to accelerate sales, improving product photos and descriptions, bundling with popular items, or discontinuing the product and ordering less next time. Acting early, while the stock still has value, protects your cash and your margins far more than waiting." },
      { question: "Can sell-through rate guide reorder decisions?", answer: "Absolutely. A high sell-through rate is a strong signal to reorder, and possibly to increase the order size, because demand is outpacing supply. A low rate suggests holding off or reducing the next order. Pairing sell-through with days of supply gives an even clearer picture, showing both how fast a product sells relative to what you bought and how long your remaining stock will last, which together make reorder decisions far more confident and data-driven." },
    ],
    relatedCalculators: ["days-of-inventory-calculator", "reorder-point-calculator", "product-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "gmv",
    slug: "gmv-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "GMV Calculator",
    shortDescription: "Gross merchandise value from orders and AOV.",
    seoTitle: "GMV Calculator — Gross Merchandise Value Tool",
    metaDescription:
      "Free GMV calculator. Multiply average order value by number of orders to find gross merchandise value, the total sales volume flowing through your store.",
    primaryKeyword: "gmv calculator",
    secondaryKeywords: ["gross merchandise value calculator", "gmv formula", "gross merchandise volume calculator"],
    fields: [
      { id: "averageOrderValue", label: "Average order value", type: "number", unit: "$", placeholder: "65", required: true, span: 1, min: 0, step: 0.01 },
      { id: "numberOfOrders", label: "Number of orders", type: "number", placeholder: "1200", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "gmv", label: "Gross merchandise value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "GMV = average order value × number of orders",
    explanation:
      "Gross merchandise value, or GMV, is the total value of goods sold through your store or marketplace over a period, before any fees, refunds or costs are deducted. You calculate it by multiplying your average order value by the number of orders. GMV is the headline measure of sales volume and is especially important for marketplaces, where the platform does not own the inventory but facilitates transactions between buyers and sellers. It captures the sheer scale of commerce flowing through a business and is widely used to communicate growth to investors, to compare periods, and to gauge market share. That said, GMV is a top-line figure, not a profit figure: it includes the full ticket price of every order regardless of the fees the platform keeps, the products' costs, or the returns that may follow. A business can post an impressive GMV while earning only a small take rate or margin on it, which is why GMV should always be read alongside net revenue and profit rather than in isolation. Store owners, marketplace operators and analysts use this calculator to size the total transaction volume, to track growth trajectories, and to model how changes in order count or average order value will move the top line. Multiply your typical order value by your order count, watch GMV climb as you grow traffic, conversion and basket size, and use it as the scale-setting number that frames all your other ecommerce metrics.",
    formulaExplanation:
      "The formula multiplies the average order value by the number of orders in the period, which reconstructs total sales volume from its two drivers: how much each order is worth and how many orders occur. Because GMV is the product of these two levers, you can grow it either by increasing basket size or by winning more orders. The figure is gross, so it reflects total transaction value before fees, product costs, discounts or refunds are taken out.",
    formulaSource: "Standard ecommerce and marketplace metric (gross merchandise value)",
    example: {
      inputs: { averageOrderValue: 65, numberOfOrders: 1200 },
      explanation: "65 × 1200 = $78,000 in gross merchandise value for the period.",
    },
    faqs: [
      { question: "What is the difference between GMV and revenue?", answer: "GMV is the total value of all goods sold, the full ticket price of every order, while revenue is what the business actually earns. For a traditional retailer selling its own goods, revenue may equal GMV, but for a marketplace, revenue is only the commission or take rate charged on transactions, which is a fraction of GMV. Confusing the two overstates how much money a business makes, so always check whether a headline figure refers to gross transaction volume or actual earned revenue." },
      { question: "Does GMV include shipping, taxes and returns?", answer: "Definitions vary, but GMV is typically the gross value of merchandise sold and often excludes shipping and taxes while not yet accounting for returns, cancellations or discounts. Because there is no single universal standard, businesses may report GMV slightly differently, so it is important to know exactly what a given company includes. When you calculate your own GMV, pick a clear definition and apply it consistently so your period-over-period comparisons remain valid and honest." },
      { question: "Why do marketplaces emphasize GMV?", answer: "Marketplaces do not own the inventory they sell, so their own revenue is only the take rate on transactions, which can look small. GMV captures the full scale of commerce they enable, making it a natural measure of platform size, growth and market share. It is a useful way to communicate momentum to investors and partners, though it should always be paired with take rate and net revenue, since a large GMV with a tiny margin can mask a business that is not yet profitable." },
      { question: "How can I grow my GMV?", answer: "Because GMV is average order value multiplied by order count, you grow it by increasing either lever. Raising average order value through bundles, upsells and free-shipping thresholds lifts the value of each transaction, while more traffic, higher conversion and repeat purchases increase the order count. The two multiply, so improving both at once compounds. Just remember that GMV is a top-line number, so pursue growth that also protects your margin rather than inflating volume at the expense of profit." },
      { question: "Is a high GMV always good?", answer: "Not necessarily. GMV measures scale, not profitability, so a business can report soaring GMV while losing money on heavy discounts, high return rates or a thin take rate. Chasing GMV alone can encourage unprofitable growth, such as subsidizing orders to inflate the number. Treat GMV as a measure of momentum and market presence, but judge the health of the business by net revenue, margin and profit, which reveal whether all that transaction volume actually translates into earnings." },
    ],
    relatedCalculators: ["average-order-value-calculator", "ecommerce-conversion-rate-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "customer-retention-rate",
    slug: "customer-retention-rate-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Customer Retention Rate Calculator",
    shortDescription: "The share of customers you keep.",
    seoTitle: "Customer Retention Rate Calculator — Free Tool",
    metaDescription:
      "Free customer retention rate calculator. Use customers at start and end plus new customers acquired to find the percentage of customers you retained.",
    primaryKeyword: "customer retention rate calculator",
    secondaryKeywords: ["retention rate formula", "customer retention calculator", "crr calculator"],
    fields: [
      { id: "customersAtStart", label: "Customers at start", type: "number", placeholder: "1000", required: true, span: 1, min: 0, step: 1 },
      { id: "customersAtEnd", label: "Customers at end", type: "number", placeholder: "1050", required: true, span: 1, min: 0, step: 1 },
      { id: "newCustomersAcquired", label: "New customers acquired", type: "number", placeholder: "200", required: true, span: 2, min: 0, step: 1, helpText: "New customers won during the period." },
    ],
    results: [
      { id: "retentionRate", label: "Retention rate", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "retention rate = ((end − new) ÷ start) × 100",
    explanation:
      "Customer retention rate is the percentage of the customers you had at the start of a period who are still customers at the end, and it is a defining measure of business health. You calculate it by taking the number of customers at the end of the period, subtracting the new customers you acquired during it, dividing by the number you started with, and multiplying by 100. Removing newly acquired customers is the crucial step, because it isolates how well you held on to your existing base rather than masking churn with fresh sign-ups. Retention matters so much because keeping a customer is far cheaper than winning a new one, and loyal customers tend to buy more often, spend more per order and refer others, which compounds their value over time. A high retention rate means your product, service and experience are keeping people coming back, giving you a stable foundation on which to grow. A low rate means you are filling a leaky bucket, pouring money into acquisition only to lose customers out the back, which caps growth no matter how much you spend on marketing. Store owners, subscription businesses and marketers use this calculator to track loyalty over time, to measure the impact of retention initiatives such as loyalty programs, email flows and improved support, and to forecast lifetime value. Watch retention by cohort and by period, treat every improvement as compounding, and use it alongside repeat-purchase and churn metrics to build a business that grows on a loyal base rather than on constant, costly replacement.",
    formulaExplanation:
      "The formula starts with the customers you have at the end of the period, then subtracts the new customers acquired during it, leaving only those original customers who stayed. Dividing that retained count by the number of customers you began with, and multiplying by 100, gives the percentage retained. Subtracting new customers is what prevents fresh acquisitions from hiding churn, so the result reflects loyalty among your existing base rather than overall growth.",
    formulaSource: "Standard customer analytics metric (customer retention rate)",
    example: {
      inputs: { customersAtStart: 1000, customersAtEnd: 1050, newCustomersAcquired: 200 },
      explanation: "((1050 − 200) ÷ 1000) × 100 = (850 ÷ 1000) × 100 = 85% retained.",
    },
    faqs: [
      { question: "What is a good customer retention rate?", answer: "It varies widely by industry and business model, so there is no single benchmark. Subscription and software businesses often expect high retention because customers commit to ongoing relationships, while some retail categories naturally see lower repeat rates. Rather than compare against an absolute figure, track your own retention over time and aim for steady improvement. Even small gains compound powerfully, because retained customers cost less to serve and tend to spend more as their relationship with you deepens." },
      { question: "What is the difference between retention and churn?", answer: "Retention and churn are two sides of the same coin. Retention rate is the percentage of customers you keep over a period, while churn rate is the percentage you lose. If you retain eighty-five percent of customers, you churned fifteen percent, and the two always sum to one hundred percent. Some teams prefer to track churn because it draws attention to the losses that need fixing, but both describe the same underlying loyalty, just framed positively or negatively." },
      { question: "Why subtract new customers from the calculation?", answer: "Subtracting new customers isolates how well you kept your existing base. If you simply compared end and start counts, a burst of new sign-ups could hide the fact that many original customers left, making a leaky business look healthy. By removing acquisitions, the formula measures only whether the people you already had stayed, which is the true test of loyalty and product satisfaction. This is why the calculation asks for new customers acquired as a separate input." },
      { question: "How can I improve customer retention?", answer: "Focus on the experience after the first purchase. Deliver reliably, provide responsive support, and stay in touch with helpful, well-timed communication rather than constant selling. Loyalty programs, personalized recommendations, easy reordering and post-purchase email flows all encourage repeat business. Listen to why customers leave and fix the root causes. Because retention compounds, even modest improvements to onboarding, product quality and service can lift lifetime value substantially and reduce your reliance on expensive new-customer acquisition." },
      { question: "How does retention affect customer lifetime value?", answer: "Retention is a primary driver of lifetime value, because the longer customers stay, the more orders they place and the more revenue they generate over their relationship with you. A small increase in retention extends the average customer lifespan and multiplies the number of future purchases, which is why loyalty compounds so effectively. Businesses with strong retention can afford to spend more acquiring customers, since each one is worth more over time, giving them a durable competitive advantage." },
    ],
    relatedCalculators: ["average-order-value-calculator", "gmv-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "ecommerce-shipping-cost",
    slug: "ecommerce-shipping-cost-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "Ecommerce Shipping Cost Calculator",
    shortDescription: "Average shipping cost per order.",
    seoTitle: "Ecommerce Shipping Cost Calculator — Cost Per Order",
    metaDescription:
      "Free ecommerce shipping cost calculator. Divide total shipping spend by number of orders to find your average shipping cost per order and protect margins.",
    primaryKeyword: "ecommerce shipping cost calculator",
    secondaryKeywords: ["shipping cost per order calculator", "average shipping cost calculator", "fulfillment cost per order"],
    fields: [
      { id: "totalShippingCost", label: "Total shipping cost", type: "number", unit: "$", placeholder: "3600", required: true, span: 1, min: 0, step: 0.01 },
      { id: "numberOfOrders", label: "Number of orders", type: "number", placeholder: "450", required: true, span: 1, min: 0, step: 1 },
    ],
    results: [
      { id: "costPerOrder", label: "Shipping cost per order", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "shipping cost per order = total shipping cost ÷ number of orders",
    explanation:
      "Shipping cost per order tells you how much, on average, it costs your business to deliver a single order, and it is a number that quietly decides whether many ecommerce businesses make or lose money. You calculate it by dividing your total shipping spend over a period by the number of orders shipped in that period. This simple average turns a large, lumpy logistics bill into a per-order figure you can compare directly against your average order value and your margin. Shipping is one of the largest variable costs in ecommerce and one of the easiest to underestimate, because carrier rates, packaging, fuel surcharges, dimensional weight, returns and free-shipping promotions all pile on top of the base postage. If your shipping cost per order creeps close to your profit per order, you are effectively working for the courier. Understanding this metric lets you set sensible free-shipping thresholds, decide when to pass shipping costs to customers, negotiate better carrier rates, and choose packaging that reduces dimensional weight charges. Store owners use this calculator to benchmark fulfillment efficiency, to model how a free-shipping offer will affect margins, and to spot when rising logistics costs are eroding profitability. Track shipping cost per order over time, compare it against your average order value, and fold it into your pricing so that delivery, one of the biggest and most volatile costs in the business, never silently swallows the profit you worked to earn on the sale itself.",
    formulaExplanation:
      "The formula divides your total shipping expenditure over a period by the number of orders shipped in that same period, giving the mean shipping cost per order. Including every shipping-related cost in the numerator, such as postage, packaging and surcharges, produces a fuller and more honest figure than base postage alone. Because orders vary in size and destination, this average smooths those differences into one number you can compare directly against average order value and margin.",
    formulaSource: "Standard ecommerce logistics metric (shipping cost per order)",
    example: {
      inputs: { totalShippingCost: 3600, numberOfOrders: 450 },
      explanation: "3,600 ÷ 450 = $8.00 average shipping cost per order.",
    },
    faqs: [
      { question: "What costs should I include in total shipping cost?", answer: "For an accurate figure, include everything it takes to get orders to customers: carrier postage, packaging materials, fuel and dimensional-weight surcharges, insurance, and the shipping portion of returns. Some businesses also fold in fulfillment labour and warehouse handling, though those are sometimes tracked separately. The more complete your numerator, the more honest your cost per order, so decide what to include, apply it consistently, and avoid the common trap of counting only base postage while ignoring the surcharges that inflate the real bill." },
      { question: "How can I reduce my shipping cost per order?", answer: "Negotiate rates with carriers as your volume grows, use packaging sized to minimize dimensional-weight charges, and compare multiple carriers for each destination. Consolidating shipments, offering pickup options, and encouraging larger baskets so shipping is spread across more items all help. Regional carriers and flat-rate services can beat national couriers on certain routes. Because shipping is a major variable cost, even small per-order savings add up quickly across hundreds or thousands of orders, directly improving your margin." },
      { question: "Should I offer free shipping?", answer: "Free shipping can lift conversion and average order value, but it is never truly free; the cost simply moves onto your margin. The key is to know your shipping cost per order and set a free-shipping threshold above your current average order value so customers add items to qualify, offsetting the cost. Alternatively, build shipping into product prices. Whatever you choose, model the impact on margin first, because an unfunded free-shipping offer can quietly turn profitable orders into losses." },
      { question: "How does shipping cost affect my margins?", answer: "Shipping is a direct variable cost, so every dollar of shipping per order comes straight out of your profit on that order. If your product margin is thin, a high shipping cost per order can erase it entirely, meaning you effectively pay to fulfill sales. That is why shipping cost per order should be compared against your profit per order, not just your revenue. Watching the two together reveals whether your delivery costs leave enough room for a sustainable business." },
      { question: "What is a good shipping cost per order?", answer: "There is no universal target because it depends on your product's size, weight, value and destinations, as well as your carrier agreements. Instead of an absolute benchmark, judge shipping cost per order relative to your average order value and margin: ideally it should be a modest fraction of the order value so profit survives. Track it over time and watch for upward creep, since rising carrier rates and surcharges can slowly erode margins if you do not adjust pricing or fulfillment." },
    ],
    relatedCalculators: ["product-profit-calculator", "average-order-value-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
