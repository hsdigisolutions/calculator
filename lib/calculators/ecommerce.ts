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
    slugEs: "calculadora-de-ganancia-ecommerce",
    titleEs: "Calculadora de Ganancia de E-commerce",
    shortDescriptionEs: "Conoce tu ganancia real y tu margen por venta.",
    seoTitleEs: "Calculadora de Ganancia de E-commerce — Margen y Comisiones",
    metaDescriptionEs:
      "Calculadora de ganancia de e-commerce gratuita. Calcula la ganancia neta, el margen y las comisiones del mercado por venta a partir de tu precio, costo del producto y envío.",
    primaryKeywordEs: "calculadora de ganancia ecommerce",
    secondaryKeywordsEs: ["calculadora de margen de beneficio", "calculadora de comisiones de mercado", "calculadora de ganancia del vendedor"],
    formulaExplanationEs:
      "El precio de venta es tu ingreso bruto por pedido. De él la fórmula resta el costo del producto, la comisión del mercado (el precio multiplicado por el porcentaje de comisión, ya que las comisiones de la plataforma escalan con la venta), el envío y cualquier otro costo por pedido. Lo que queda es la ganancia neta, el dinero que realmente conservas. Dividir esa ganancia entre el precio de venta da el margen, un porcentaje que permite comparar de forma justa la rentabilidad entre artículos de distintos precios.",
    explanationEs:
      "Una calculadora de ganancia de e-commerce revela lo que realmente conservas de una venta una vez que se ha descontado cada costo, no solo la diferencia entre el precio y el costo del producto que los vendedores suelen confundir con la ganancia. Resta el costo del producto, la comisión porcentual del mercado, el envío y cualquier otro costo por pedido del precio de venta, y luego expresa el resultado como una cifra de ganancia neta y como margen: la ganancia como proporción del precio. Esas capas ocultas son exactamente donde los negocios frágiles sangran en silencio. Una comisión de plataforma del 15 por ciento, unos pocos dólares de envío y algo de embalaje pueden convertir una venta aparentemente sana en una pérdida, y nunca lo verías solo por el precio de etiqueta. Una calculadora de ganancia de e-commerce hace explícita cada deducción para que puedas fijar precios con los ojos abiertos. El margen, en lugar de los dólares en bruto, es la cifra por la que guiarte, porque escala entre productos de precios muy distintos y muestra cuánto colchón queda para devoluciones, gasto publicitario y periodos flojos. Los vendedores de Amazon, Etsy, eBay y Shopify, los dropshippers y las marcas de venta directa al consumidor usan una calculadora de ganancia de e-commerce para probar un precio antes de publicarlo, comparar proveedores, decidir si vale la pena tener un producto en stock y fijar los márgenes que mantienen sostenible toda la operación.",
    exampleEs: {
      inputs: { sellingPrice: 49.99, productCost: 18, feePercent: 15, shippingCost: 5, otherCost: 2 },
      explanation: "Comisión = $7.50. Ganancia = 49.99 − 18 − 7.50 − 5 − 2 = $17.49, un margen de aproximadamente el 35%.",
    },
    faqsEs: [
      { question: "¿Qué es un buen margen de beneficio para el comercio electrónico?", answer: "Varía según la categoría, pero muchos vendedores apuntan a un margen neto del 20 al 40 por ciento después de cada comisión, envío y otro costo. Cualquier valor por debajo del 10 por ciento es frágil, ya que deja casi ningún colchón para devoluciones, reembolsos, gasto publicitario o una subida de precio del proveedor. Los productos básicos de alto volumen pueden sobrevivir con márgenes ajustados, mientras que los productos únicos o de marca deberían exigir más. Juzga tu cifra según cuánta comercialización y riesgo debe absorber el negocio, no según una cifra de titular." },
      { question: "¿Cuál es la diferencia entre margen y marcado?", answer: "El margen es la ganancia como porcentaje del precio de venta, mientras que el marcado — mostrado aquí como retorno sobre el costo — es la ganancia como porcentaje de lo que te costó el artículo. La misma venta produce dos cifras distintas: un producto comprado por 50 dólares y vendido por 100 tiene un margen del 50 por ciento pero un marcado del 100 por ciento. Fija el precio a partir del margen cuando quieras saber cuánto de cada venta conservas." },
      { question: "¿Debo incluir los costos de publicidad en el cálculo?", answer: "Sí. Añade tu costo publicitario promedio por venta al campo de otros costos para obtener una ganancia neta realista. Si una campaña cuesta 500 dólares y produce 100 pedidos, eso son 5 dólares de costo publicitario por pedido, e ignorarlo infla mucho tu margen. La publicidad suele ser el mayor costo oculto en el comercio electrónico, así que incluirla es lo que separa una cifra de ganancia real de una optimista que en silencio pierde dinero." },
      { question: "¿Cómo afectan las comisiones del mercado a mi ganancia?", answer: "Las comisiones del mercado se cobran como un porcentaje del precio de venta, por lo que aumentan a medida que sube tu precio y se llevan una porción fija de cada pedido. Plataformas como Amazon, Etsy y eBay suelen cobrar entre el 10 y el 15 por ciento, y el procesamiento de pagos puede añadir un pequeño porcentaje más. Como la comisión crece con la venta, un precio más alto no protege tu margen tanto como se espera; incorpora siempre la parte de la plataforma en tus precios." },
      { question: "¿Cómo fijo el precio de un producto para alcanzar un margen objetivo?", answer: "Trabaja hacia atrás desde el margen que deseas. Suma el costo de tu producto, el envío y otros costos por pedido, y luego considera la comisión del mercado, que es en sí misma un porcentaje del precio final. Como la comisión depende del precio que estás resolviendo, ajusta el precio de venta hasta que la calculadora muestre tu margen objetivo. Fija el precio, lee la ganancia neta y el margen resultantes, y ajústalo hacia arriba o hacia abajo hasta que las cifras queden donde las necesitas." },
    ],
    relatedCalculators: ["roas-calculator", "roi-calculator", "revenue-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
