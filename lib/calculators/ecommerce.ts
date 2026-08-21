import type { CalculatorDefinition } from "../types";

export const ecommerceCalculators: CalculatorDefinition[] = [
  {
    id: "ecommerce-profit",
    slug: "ecommerce-profit-calculator",
    category: "E-commerce",
    categorySlug: "ecommerce",
    title: "E-commerce Profit Calculator",
    shortDescription: "See your true profit and margin per sale.",
    seoTitle: "E-commerce Profit Calculator — Margin & Fees Tool",
    metaDescription:
      "Free e-commerce profit calculator. Work out net profit, margin and marketplace fees per sale from your price, product cost and shipping.",
    primaryKeyword: "ecommerce profit calculator",
    secondaryKeywords: ["profit margin calculator", "marketplace fee calculator", "seller profit calculator"],
    fields: [
      { id: "sellingPrice", label: "Selling price", type: "number", unit: "$", placeholder: "49.99", required: true, span: 1, min: 0, step: 0.01 },
      { id: "productCost", label: "Product cost", type: "number", unit: "$", placeholder: "18", required: true, span: 1, min: 0, step: 0.01 },
      { id: "feePercent", label: "Marketplace fee", type: "number", unit: "%", placeholder: "15", required: false, span: 1, min: 0, max: 100, step: 0.01 },
      { id: "shippingCost", label: "Shipping cost", type: "number", unit: "$", placeholder: "5", required: false, span: 1, min: 0, step: 0.01 },
      { id: "otherCost", label: "Other costs", type: "number", unit: "$", placeholder: "2", required: false, span: 2, min: 0, step: 0.01, helpText: "Packaging, ads, transaction fees, etc." },
    ],
    results: [
      { id: "netProfit", label: "Net profit", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "margin", label: "Profit margin", format: "percentage", decimals: 2, isPrimary: false },
      { id: "feeAmount", label: "Marketplace fee", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "markup", label: "Return on cost", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "profit = price − product cost − (price × fee%) − shipping − other",
    explanation:
      "An ecommerce profit calculator reveals what you truly keep from a sale once every cost has been taken out, not just the gap between price and product cost that sellers often mistake for profit. It subtracts the product cost, the marketplace's percentage fee, shipping, and any other per-order costs from the selling price, then expresses the result as a net profit figure and as a margin — profit as a share of the price. Those hidden layers are exactly where thin businesses quietly bleed. A 15 percent platform fee, a few dollars of shipping and some packaging can turn an apparently healthy sale into a loss, and you would never see it from the sticker price alone. An ecommerce profit calculator makes each deduction explicit so you can price with your eyes open. Margin, rather than raw dollars, is the number to steer by, because it scales across products of very different prices and shows how much cushion remains for returns, ad spend and slow periods. Amazon, Etsy, eBay and Shopify sellers, dropshippers and direct-to-consumer brands use an ecommerce profit calculator to test a price before listing, compare suppliers, decide whether a product is worth stocking, and set the margins that keep the whole operation sustainable.",
    formulaExplanation:
      "The selling price is your gross income per order. From it the formula subtracts the product cost, the marketplace fee (price multiplied by the fee percentage, since platform fees scale with the sale), shipping, and any other per-order costs. What remains is net profit — the money you actually keep. Dividing that profit by the selling price gives margin, a percentage that lets you compare profitability fairly across items at different prices.",
    formulaSource: "Standard retail margin formula",
    example: {
      inputs: { sellingPrice: 49.99, productCost: 18, feePercent: 15, shippingCost: 5, otherCost: 2 },
      explanation: "Fee = $7.50. Profit = 49.99 − 18 − 7.50 − 5 − 2 = $17.49, a margin of about 35%.",
    },
    faqs: [
      { question: "What is a good profit margin for e-commerce?", answer: "It varies by category, but many sellers aim for a net margin of 20 to 40 percent after every fee, shipping and other cost. Anything below 10 percent is fragile, leaving almost no cushion for returns, refunds, ad spend or a supplier price rise. High-volume commodity goods can survive on slim margins, while unique or branded products should command more. Judge your figure against how much marketing and risk the business must absorb, not against a headline number." },
      { question: "What is the difference between margin and markup?", answer: "Margin is profit as a percentage of the selling price, while markup — shown here as return on cost — is profit as a percentage of what the item cost you. The same sale produces two different figures: a product bought for 50 dollars and sold for 100 carries a 50 percent margin but a 100 percent markup. Price from margin when you want to know how much of each sale you keep." },
      { question: "Should I include advertising costs in the calculation?", answer: "Yes. Add your average advertising cost per sale to the other costs field for a realistic net profit. If a campaign costs 500 dollars and produces 100 orders, that is 5 dollars of ad cost per order, and ignoring it flatters your margin badly. Advertising is often the largest hidden cost in ecommerce, so folding it in is what separates a true profit figure from an optimistic one that quietly loses money." },
      { question: "How do marketplace fees affect my profit?", answer: "Marketplace fees are charged as a percentage of the selling price, so they scale up as your price rises and take a fixed bite out of every order. Platforms such as Amazon, Etsy and eBay commonly charge between 10 and 15 percent, and payment processing can add a few percent more. Because the fee grows with the sale, a higher price does not shield your margin as much as expected — always build the platform's cut into your pricing." },
      { question: "How do I price a product to hit a target margin?", answer: "Work backwards from the margin you want. Add up your product cost, shipping and other per-order costs, then account for the marketplace fee, which is itself a percentage of the final price. Because the fee depends on the price you are solving for, adjust the selling price until the calculator shows your target margin. Set the price, read the resulting net profit and margin, and nudge it up or down until the numbers land where you need them." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator", "revenue-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
