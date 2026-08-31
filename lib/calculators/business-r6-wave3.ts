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
    slugEs: "calculadora-de-beneficio-bruto",
    titleEs: "Calculadora de Beneficio Bruto",
    shortDescriptionEs: "Calcula el beneficio bruto y el margen bruto a partir de los ingresos y el COGS.",
    seoTitleEs: "Calculadora de Beneficio Bruto — Beneficio y Margen Bruto",
    metaDescriptionEs:
      "Calculadora de beneficio bruto gratuita. Resta el coste de los bienes vendidos de los ingresos para obtener el beneficio bruto y el porcentaje de margen bruto al instante.",
    primaryKeywordEs: "calculadora de beneficio bruto",
    secondaryKeywordsEs: ["calculadora de margen bruto", "calculadora de cogs", "formula de beneficio bruto"],
    formulaExplanationEs:
      "Los ingresos son el valor total de las ventas del periodo y el COGS es el coste directo de producir esas ventas concretas. Restar el COGS de los ingresos aisla el beneficio bruto, el excedente comercial disponible antes de los gastos generales. Dividir ese excedente entre los ingresos y multiplicar por 100 lo convierte en margen bruto, un porcentaje independiente de la escala. El margen permite comparar un producto barato de gran volumen con uno premium, porque mide el diferencial y no la cifra absoluta en dólares.",
    explanationEs:
      "Una calculadora de beneficio bruto reduce un negocio a su cifra de rendimiento más honesta: el dinero que queda tras pagar los bienes realmente vendidos, antes de contar cualquier gasto general. Introduces los ingresos totales y el coste de los bienes vendidos —los materiales directos, la mano de obra directa y el flete de entrada ligados a producir lo que entregaste— y la herramienta devuelve el beneficio bruto en dólares y el margen bruto como porcentaje de las ventas. El beneficio bruto es la fuente que debe financiar cualquier otro coste que soporte la empresa: alquiler, salarios, marketing, software, intereses e impuestos se pagan a partir de él. Si el beneficio bruto es escaso, ningún recorte de costes en otro lugar puede salvar el negocio, porque nunca hubo suficiente diferencia entre precio y coste del producto. Por eso prestamistas, compradores y operadores miran el margen bruto antes que casi cualquier otra cosa. Los fundadores usan una calculadora de beneficio bruto para fijar precios, comparar proveedores, juzgar si un descuento es sostenible y comprobar si los márgenes se mantienen a medida que crecen. Un margen bruto en aumento junto a ingresos crecientes es una de las señales más claras de que el modelo de negocio funciona de verdad.",
    exampleEs: {
      inputs: { revenue: 100000, cogs: 60000 },
      explanation: "Beneficio bruto = 100.000 $ − 60.000 $ = 40.000 $. Margen bruto = 40.000 ÷ 100.000 = 40%.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre beneficio bruto y beneficio neto?", answer: "El beneficio bruto resta de los ingresos únicamente el coste directo de los bienes vendidos, mostrando el excedente comercial antes de los gastos generales. El beneficio neto va mucho más allá y elimina cada gasto operativo —alquiler, salarios, marketing, intereses e impuestos— para revelar lo que la empresa realmente conserva. El beneficio bruto te dice si tu precio supera el coste del producto; el neto, si toda la operación gana dinero una vez pagadas las facturas." },
      { question: "¿Qué se considera coste de los bienes vendidos?", answer: "El COGS incluye solo los costes directos de producir los bienes o servicios que vendiste en el periodo: materias primas, componentes, la mano de obra directa que fabrica el producto y el flete de entrada. Excluye costes indirectos como salarios de oficina, alquiler, publicidad, software administrativo y distribución. La regla general es que un coste pertenece al COGS si sube y baja directamente con las unidades que produces y vendes." },
      { question: "¿Qué es un buen margen bruto?", answer: "Varía enormemente según el sector. El comercio minorista físico suele tener márgenes brutos del 20 al 40 por ciento, la fabricación se sitúa en el medio, y el software o los productos digitales superan a menudo el 80 por ciento porque servir a un cliente más cuesta muy poco. En vez de perseguir una cifra universal, compara con competidores directos y con tu propia tendencia a lo largo del tiempo." },
      { question: "¿Puede ser negativo el beneficio bruto?", answer: "Sí. Si el coste de los bienes vendidos supera los ingresos que esos bienes generaron, el beneficio bruto es negativo y el margen queda por debajo de cero. Esto significa que estás pagando a los clientes por llevarse el producto: cada venta profundiza la pérdida antes de sumar un solo gasto general. Es una señal de alarma que exige corregir precios, costes de proveedor o el propio producto de inmediato." },
      { question: "¿Cómo puedo mejorar mi margen bruto?", answer: "Trabaja ambos lados del diferencial. En el precio, prueba subidas, reduce los descuentos innecesarios y crea paquetes de mayor valor por los que el cliente pague más. En el coste, renegocia con proveedores, compra en lotes mayores cuando reduzca el coste unitario, elimina el desperdicio y desplaza el volumen hacia tus productos de mayor margen. Unos pocos puntos de mejora fluyen directamente hacia el resultado final." },
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
    slugEs: "calculadora-de-margen-operativo",
    titleEs: "Calculadora de Margen Operativo",
    shortDescriptionEs: "Mide la rentabilidad operativa como porcentaje de los ingresos.",
    seoTitleEs: "Calculadora de Margen Operativo — Margen de Beneficio Operativo",
    metaDescriptionEs:
      "Calculadora de margen operativo gratuita. Divide el ingreso operativo entre los ingresos para ver qué parte de cada dólar de ventas sobrevive a los costes operativos.",
    primaryKeywordEs: "calculadora de margen operativo",
    secondaryKeywordsEs: ["margen de beneficio operativo", "calculadora de margen ebit", "margen de ingreso operativo"],
    formulaExplanationEs:
      "El ingreso operativo es lo que queda tras restar de los ingresos tanto el coste de los bienes vendidos como cada gasto operativo, pero antes de intereses e impuestos. Dividirlo entre los ingresos y multiplicar por 100 muestra el porcentaje de cada dólar de ventas que retiene la operación principal. Como el ratio elimina los efectos de financiación e impuestos, aisla la eficiencia operativa y permite comparar negocios de distinto tamaño y estructura de capital solo por cómo convierten las ventas en beneficio operativo.",
    explanationEs:
      "Una calculadora de margen operativo revela cuánto de cada dólar de ventas sobrevive después de que una empresa paga tanto el coste directo de sus bienes como los gastos operativos necesarios para funcionar, pero antes de intereses e impuestos. Introduces el ingreso operativo, también llamado EBIT o beneficio operativo, junto con los ingresos totales, y la herramienta devuelve el margen operativo como porcentaje. Esta cifra es una prueba mucho más dura que el margen bruto porque absorbe todo el coste de operar realmente: salarios, alquiler, marketing, administración, investigación y depreciación. Una empresa puede presumir de un margen bruto amplio y aun así registrar un margen operativo débil si sus gastos generales están inflados, y esa brecha es exactamente lo que expone esta calculadora. Los inversores valoran el margen operativo porque aísla la rentabilidad del negocio principal de las decisiones de financiación y las particularidades fiscales que varían entre empresas y países, lo que lo convierte en una de las formas más limpias de comparar dos compañías del mismo sector. Los gestores lo vigilan para juzgar si el crecimiento es eficiente o si los costes crecen más rápido que las ventas. Un margen operativo estable o en aumento señala operaciones disciplinadas y escalables, mientras que uno que se reduce advierte de que los costes están superando a los ingresos.",
    exampleEs: {
      inputs: { operatingIncome: 25000, revenue: 125000 },
      explanation: "Margen operativo = 25.000 ÷ 125.000 = 0,20 = 20%. Una quinta parte de cada dólar de ventas se convierte en beneficio operativo.",
    },
    faqsEs: [
      { question: "¿En qué se diferencia el margen operativo del margen bruto?", answer: "El margen bruto resta solo el coste directo de los bienes vendidos, así que mide el diferencial puro entre precio y coste del producto. El margen operativo va mucho más allá y elimina también todos los gastos operativos como salarios, alquiler, marketing y administración. La brecha entre ambos revela lo pesados que son los gastos generales de una empresa: un margen bruto amplio que se desploma en un margen operativo fino indica que los costes de funcionamiento se comen casi todo el excedente." },
      { question: "¿Qué es un buen margen operativo?", answer: "Depende mucho del sector. La alimentación y otros negocios de gran volumen y poco margen pueden operar de forma saludable con márgenes operativos de un solo dígito, mientras que las empresas de software y farmacéuticas pueden superar el 30 o el 40 por ciento. La comparación más útil es frente a competidores directos y frente a la propia historia de la empresa. Un margen estable o al alza mientras crecen los ingresos suele indicar que el negocio escala con eficiencia." },
      { question: "¿Es el margen operativo lo mismo que el margen EBIT?", answer: "En la mayoría de los casos se usan de forma intercambiable, ya que el ingreso operativo y el EBIT —beneficio antes de intereses e impuestos— suelen referirse a la misma cifra. Pueden surgir pequeñas diferencias cuando una empresa declara ingresos no operativos o partidas puntuales que se sitúan entre el beneficio operativo y el EBIT. Para el análisis diario y para esta calculadora, tratar el ingreso operativo como EBIT y dividirlo entre los ingresos da el margen operativo habitual." },
      { question: "¿Por qué los inversores se fijan en el margen operativo?", answer: "Porque al eliminar las decisiones de financiación e impuestos, el margen operativo aísla el rendimiento del negocio principal en sí mismo. Dos empresas pueden cargar con niveles de deuda muy distintos y enfrentar tipos impositivos diferentes, lo que distorsiona el beneficio neto, pero el margen operativo permite comparar sus operaciones subyacentes en igualdad de condiciones. Un margen operativo fuerte y constante sugiere poder de fijación de precios duradero y disciplina de costes." },
      { question: "¿Cómo puede una empresa elevar su margen operativo?", answer: "Aumentar los ingresos sin un alza equivalente de los costes operativos, o recortar costes operativos sin dañar las ventas. Entre las palancas prácticas están subir precios donde el mercado lo permita, automatizar el trabajo repetitivo, renegociar el alquiler y los contratos con proveedores, eliminar productos poco rentables y mejorar la productividad para que el mismo equipo sostenga más ingresos. Como el margen operativo capta todo el coste de operar, pequeñas mejoras suman varios puntos." },
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
    slugEs: "calculadora-de-ebitda",
    titleEs: "Calculadora de EBITDA",
    shortDescriptionEs: "Suma intereses, impuestos, depreciación y amortización al beneficio neto.",
    seoTitleEs: "Calculadora de EBITDA — Beneficio antes de Intereses, Impuestos y D&A",
    metaDescriptionEs:
      "Calculadora de EBITDA gratuita. Suma intereses, impuestos, depreciación y amortización al beneficio neto para medir las ganancias operativas de caja del negocio principal.",
    primaryKeywordEs: "calculadora de ebitda",
    secondaryKeywordsEs: ["formula de ebitda", "beneficio antes de intereses impuestos depreciacion", "calculadora de ganancias operativas"],
    formulaExplanationEs:
      "El beneficio neto ya tiene restados los intereses, los impuestos, la depreciación y la amortización, de modo que el EBITDA simplemente los vuelve a sumar. Los intereses y los impuestos se eliminan porque reflejan la financiación y la jurisdicción y no la habilidad operativa; la depreciación y la amortización son cargos contables no monetarios que reparten el gasto pasado a lo largo del tiempo. Restaurar los cuatro sobre el beneficio neto deja las ganancias antes de esas partidas, una medida más limpia y comparable de lo que genera la operación subyacente cada periodo.",
    explanationEs:
      "Una calculadora de EBITDA reconstruye las ganancias de una empresa antes de cuatro costes que pueden ocultar cómo rinde realmente el negocio principal: intereses, impuestos, depreciación y amortización. Partiendo del beneficio neto —el resultado final— sumas cada uno de ellos para llegar al EBITDA, una aproximación a la capacidad de generar caja de las operaciones antes de que la estructura de financiación y las decisiones contables distorsionen el panorama. Los intereses dependen de cuánta deuda carga una empresa, los impuestos dependen de la jurisdicción y de partidas puntuales, y la depreciación y la amortización son cargos no monetarios que reparten el coste de inversiones pasadas a lo largo de muchos años. Al eliminar los cuatro, el EBITDA permite a un analista comparar dos empresas que tomaron decisiones de financiación e inversión muy distintas en un terreno más nivelado, y por eso domina los múltiplos de valoración, los pactos de préstamos y las negociaciones de adquisición. Compradores de capital privado, prestamistas y directores financieros se apoyan en el EBITDA para dimensionar operaciones y fijar límites de deuda porque aproxima las ganancias disponibles para atender los préstamos. El EBITDA no sustituye al flujo de caja —ignora la inversión real en capital y los vaivenes del capital de trabajo— pero como medida rápida y comparable del rendimiento operativo sigue siendo una de las cifras más citadas en finanzas.",
    exampleEs: {
      inputs: { netIncome: 500000, interest: 120000, taxes: 80000, depreciation: 60000, amortization: 40000 },
      explanation: "EBITDA = 500.000 + 120.000 + 80.000 + 60.000 + 40.000 = 800.000 $.",
    },
    faqsEs: [
      { question: "¿Qué mide realmente el EBITDA?", answer: "El EBITDA aproxima las ganancias que genera un negocio a partir de sus operaciones principales antes de los efectos de cómo se financia, cómo se grava y cómo contabiliza sus inversiones pasadas. Al sumar intereses, impuestos, depreciación y amortización al beneficio neto, elimina partidas que varían entre empresas por razones ajenas al rendimiento operativo. El resultado es una cifra que muchos analistas tratan como una aproximación aproximada de las ganancias operativas de caja." },
      { question: "¿Por qué se vuelven a sumar la depreciación y la amortización?", answer: "La depreciación y la amortización son cargos no monetarios. Reparten el coste de activos que la empresa ya pagó —maquinaria, edificios, intangibles adquiridos— a lo largo de los años en que se usan esos activos. No sale caja del negocio cuando se registra el cargo. Sumarlos de nuevo al beneficio neto elimina una asignación contable que de otro modo subestimaría la caja que la operación produce actualmente, dando una visión más clara de la capacidad de generar ganancias." },
      { question: "¿Es el EBITDA lo mismo que el flujo de caja?", answer: "No, y tratarlo así es un error común y peligroso. El EBITDA ignora necesidades reales de caja que una verdadera medida de flujo de caja capta: la inversión de capital para reponer equipos desgastados, los cambios en el capital de trabajo a medida que crecen las cuentas por cobrar y el inventario, y los pagos reales de intereses e impuestos. Una empresa puede mostrar un EBITDA sano y aun así quemar caja si debe reinvertir con fuerza constantemente." },
      { question: "¿Por qué se usa el EBITDA en la valoración?", answer: "Compradores e inversores a menudo valoran una empresa como un múltiplo del EBITDA porque aproxima las ganancias operativas disponibles antes de las decisiones de financiación e impuestos que el nuevo dueño puede cambiar. También suaviza las diferencias en la política de depreciación y la estructura de capital, facilitando comparar dos objetivos de adquisición. El valor de empresa sobre EBITDA está entre los múltiplos de valoración más comunes en fusiones, capital privado y préstamos." },
      { question: "¿Cuáles son las limitaciones del EBITDA?", answer: "El EBITDA puede embellecer una empresa al ocultar el coste real de operar y reinvertir en el negocio. Como excluye la depreciación, ignora que los activos se desgastan y deben reponerse con caja real. Como excluye los intereses, puede hacer que una firma muy endeudada parezca más sana de lo que es. Los críticos sostienen que es fácil apoyarse en el EBITDA para presentar una historia más optimista, así que siempre debe leerse junto al beneficio neto y el flujo de caja libre." },
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
    slugEs: "calculadora-de-periodo-de-recuperacion",
    titleEs: "Calculadora de Periodo de Recuperación",
    shortDescriptionEs: "Descubre cuánto tarda una inversión en devolver su coste inicial.",
    seoTitleEs: "Calculadora de Periodo de Recuperación — Tiempo de Recuperación de la Inversión",
    metaDescriptionEs:
      "Calculadora de periodo de recuperación gratuita. Divide la inversión inicial entre el flujo de caja anual para ver en cuántos años y meses recuperas tu dinero.",
    primaryKeywordEs: "calculadora de periodo de recuperacion",
    secondaryKeywordsEs: ["formula de periodo de recuperacion", "tiempo de recuperacion de la inversion", "calculadora de presupuesto de capital"],
    formulaExplanationEs:
      "La inversión inicial es el efectivo comprometido por adelantado, y el flujo de caja anual es la cantidad neta que la inversión devuelve cada año. Dividir la inversión entre el flujo de caja anual da el número de años necesarios para que los retornos acumulados igualen el desembolso original, el punto en el que has recuperado lo invertido. Multiplicar esa cifra por doce la convierte en meses. El método supone un flujo de caja anual estable, así que sacrifica algo de precisión a cambio de rapidez y claridad.",
    explanationEs:
      "Una calculadora de periodo de recuperación responde a la pregunta más sencilla que todo inversor se hace antes de comprometer dinero: ¿cuánto tardaré en recuperarlo? Introduces el coste inicial de un proyecto o compra y el efectivo neto que se espera que devuelva cada año, y la herramienta informa del periodo de recuperación en años y en meses. Cuanto más corto sea el periodo, antes se recupera tu capital y menos expuesto estás al riesgo de que cambien las condiciones, avance la tecnología o la previsión resulte demasiado optimista. Por ser tan intuitivo, el periodo de recuperación es uno de los primeros filtros que aplican las empresas a la compra de equipos, las campañas de marketing, las mejoras de eficiencia energética y las decisiones de abrir nuevas tiendas. Una máquina que se paga sola en dos años es mucho más fácil de aprobar que una que tarda ocho. El método de división usado aquí supone que el flujo de caja anual es más o menos uniforme, lo que da una estimación limpia y rápida, ideal para comparar varias opciones o fijar un umbral interno. Su limitación honesta es que ignora el valor temporal del dinero y no dice nada de lo que ocurre después de recuperar el dinero. Junto a medidas como el ROI o el valor actual neto, sigue siendo un potente primer filtro para las decisiones de capital.",
    exampleEs: {
      inputs: { initialInvestment: 50000, annualCashFlow: 12500 },
      explanation: "Recuperación = 50.000 ÷ 12.500 = 4 años, es decir 48 meses para recuperar por completo la inversión.",
    },
    faqsEs: [
      { question: "¿Qué es un buen periodo de recuperación?", answer: "Depende del tipo de inversión y del riesgo, pero en general más corto es mejor porque tu capital se recupera y está en riesgo menos tiempo. Muchas empresas fijan un umbral interno —comúnmente de dos a cuatro años para equipos— y rechazan lo más lento. Los mercados cambiantes o inciertos justifican exigir una recuperación más rápida, mientras que los activos estables y de larga vida como los edificios pueden soportar periodos más largos sin alarma." },
      { question: "¿Cuál es la principal debilidad del periodo de recuperación?", answer: "Ignora el valor temporal del dinero y todo lo que ocurre tras recuperar la inversión. Dos proyectos con periodos de recuperación idénticos pueden diferir enormemente: uno puede dejar de generar en el momento en que alcanza el punto de equilibrio, mientras que el otro sigue generando caja durante años. Como el método simple trata un dólar del año cuatro igual que uno de hoy, debe combinarse con medidas descontadas como el valor actual neto." },
      { question: "¿En qué se diferencia el periodo de recuperación descontado?", answer: "El periodo de recuperación descontado aplica una tasa de descuento a cada flujo de caja anual antes de sumarlo, de modo que tiene en cuenta que el dinero recibido más tarde vale menos que el de hoy. Esto produce una cifra de recuperación más larga y conservadora que el método simple, porque los flujos descontados se acumulan más despacio. Es más preciso para proyectos largos, pero exige elegir una tasa de descuento." },
      { question: "¿Tiene en cuenta el periodo de recuperación el flujo de caja tras recuperar la inversión?", answer: "No. Una vez que el flujo de caja acumulado iguala la inversión inicial, se alcanza el periodo de recuperación y el cálculo se detiene. No dice nada de cuánto valor adicional crea la inversión durante el resto de su vida. Un proyecto con una recuperación más lenta puede ser al final mucho más rentable si sigue generando mucho después del equilibrio, por eso la recuperación es mejor como filtro rápido de riesgo." },
      { question: "¿Puedo usar el periodo de recuperación con flujos de caja desiguales?", answer: "La fórmula simple supone flujos de caja anuales más o menos iguales. Cuando los flujos varían año a año, en su lugar los acumulas periodo a periodo hasta que el total corriente alcanza la inversión inicial, y luego interpolas dentro del año en que cruza la línea. Esta calculadora usa la versión de flujo uniforme por rapidez y claridad, así que si tus retornos son muy irregulares, trata el resultado como una aproximación." },
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
    slugEs: "calculadora-de-rotacion-de-inventario",
    titleEs: "Calculadora de Rotación de Inventario",
    shortDescriptionEs: "Mide cuántas veces se vende el stock y cuánto tiempo permanece almacenado.",
    seoTitleEs: "Calculadora de Rotación de Inventario — Ratio y Días para Vender",
    metaDescriptionEs:
      "Calculadora de rotación de inventario gratuita. Divide el COGS entre el inventario medio para obtener tu ratio de rotación y los días medios para vender el stock.",
    primaryKeywordEs: "calculadora de rotacion de inventario",
    secondaryKeywordsEs: ["ratio de rotacion de inventario", "dias de venta de inventario", "calculadora de rotacion de stock"],
    formulaExplanationEs:
      "El coste de los bienes vendidos mide el coste de todo lo vendido durante el año, y el inventario medio es el valor de coste típico del stock mantenido, normalmente el inventario inicial más el final dividido entre dos. Dividir el COGS entre el inventario medio da el ratio de rotación, el número de veces que el stock se agotó y se repuso. Dividir 365 entre ese ratio lo convierte en los días medios que una unidad permanece en inventario antes de venderse.",
    explanationEs:
      "Una calculadora de rotación de inventario muestra con qué eficiencia un negocio convierte su stock en ventas, informando tanto del ratio de rotación —cuántas veces se vendió y se repuso el inventario medio a lo largo del año— como del número medio de días que una unidad permanece en la estantería antes de venderse. Introduces el coste anual de los bienes vendidos y el inventario medio mantenido durante el periodo, y la herramienta devuelve ambas cifras al instante. La rotación importa porque el inventario es efectivo congelado en forma física: cada dólar atado en stock sin vender es un dólar que no está disponible para salarios, marketing o crecimiento, y los productos de rotación lenta corren el riesgo de obsolescencia, deterioro y coste de almacenamiento. Un ratio de rotación alto señala ventas ágiles y un stock ajustado y bien gestionado, mientras que un ratio bajo advierte de compras excesivas, demanda débil o un catálogo lleno de artículos que no se moverán. El método de división usado aquí compara el coste de lo que realmente se vendió con el coste de lo que se mantuvo habitualmente, por eso el coste de los bienes vendidos, y no los ingresos, va arriba: mantiene ambas cifras sobre la misma base de coste y evita inflar el ratio con el margen de beneficio. Minoristas, mayoristas y fabricantes vigilan la rotación de inventario para afinar los pedidos, detectar stock muerto y liberar efectivo atrapado.",
    exampleEs: {
      inputs: { cogs: 500000, averageInventory: 100000 },
      explanation: "Rotación = 500.000 ÷ 100.000 = 5×. Días para vender = 365 ÷ 5 = 73 días por ciclo.",
    },
    faqsEs: [
      { question: "¿Qué es un buen ratio de rotación de inventario?", answer: "Varía mucho según el sector. Los supermercados y la moda rápida pueden rotar el stock una docena de veces al año o más porque los productos son perecederos o siguen tendencias, mientras que el mobiliario, la joyería y el equipo industrial rotan mucho más despacio y siguen siendo rentables. El mejor punto de referencia es tu propio sector y tu propia historia. Un ratio en aumento suele significar un stock más ajustado y mejor acompasado a la demanda." },
      { question: "¿Por qué usar el COGS en lugar de los ingresos?", answer: "El inventario se registra a coste, no a su precio de venta, así que dividir el coste de los bienes vendidos entre el inventario medio mantiene ambas cifras sobre la misma base de coste. Usar los ingresos incluiría tu margen de beneficio en el numerador pero no en el denominador, inflando artificialmente el ratio y haciendo que la rotación parezca más rápida de lo que es. Ceñirse al COGS produce una medida real de cuántas veces circuló el stock físico." },
      { question: "¿Qué me dicen los días para vender?", answer: "Los días para vender, también llamados días de venta de inventario, convierten el ratio de rotación en el número medio de días que una unidad permanece en stock antes de venderse. Suele ser más intuitivo que el propio ratio: saber que el stock tarda 73 días en agotarse es más fácil de accionar que saber que la rotación es cinco veces al año. Menos días para vender libera efectivo antes y reduce el riesgo de obsolescencia y rebajas." },
      { question: "¿Cómo calculo el inventario medio?", answer: "El método más simple suma el valor del inventario al inicio del periodo al valor al final y divide entre dos, suavizando una única foto inicial o final que podría ser inusualmente alta o baja. Para negocios con fuertes vaivenes estacionales, promediar saldos mensuales o trimestrales da una cifra más representativa. El objetivo es un valor que refleje la cantidad típica de stock mantenida durante todo el periodo y no una fecha arbitraria." },
      { question: "¿Cómo puedo mejorar la rotación de inventario?", answer: "Ajusta las compras a la demanda real usando los datos de ventas y evita pedir de más en líneas lentas solo para alcanzar descuentos de proveedor. Liquida el stock muerto y envejecido con promociones para liberar efectivo atrapado, ajusta los puntos de reposición y acorta los plazos de entrega para mantener menos stock de seguridad. Mejorar la rotación es un equilibrio, sin embargo: forzarla demasiado arriesga roturas de stock y ventas perdidas." },
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
    slugEs: "calculadora-de-cagr",
    titleEs: "Calculadora de CAGR",
    shortDescriptionEs: "Halla la tasa de crecimiento anual compuesta entre dos valores.",
    seoTitleEs: "Calculadora de CAGR — Tasa de Crecimiento Anual Compuesta",
    metaDescriptionEs:
      "Calculadora de CAGR gratuita. Halla la tasa de crecimiento anual compuesta y suavizada entre un valor inicial y uno final a lo largo de cualquier número de años.",
    primaryKeywordEs: "calculadora de cagr",
    secondaryKeywordsEs: ["tasa de crecimiento anual compuesta", "formula de cagr", "calculadora de tasa de crecimiento anualizada"],
    formulaExplanationEs:
      "Dividir el valor final entre el valor inicial da el múltiplo de crecimiento total durante todo el periodo. Elevar ese múltiplo a la potencia de uno dividido entre el número de años invierte el efecto de la capitalización, extrayendo la tasa anual constante que, aplicada año tras año, reproduce la misma cifra final. Restar uno convierte el factor de crecimiento en una tasa, y multiplicar por 100 la expresa como porcentaje. El resultado suaviza el crecimiento desigual en una sola cifra comparable.",
    explanationEs:
      "Una calculadora de CAGR halla la tasa de crecimiento anual compuesta: la única tasa anual constante que haría crecer un valor inicial hasta un valor final a lo largo de un número dado de años, como si el crecimiento hubiera sido perfectamente uniforme. Introduces el valor inicial, el valor final y el número de años, y la herramienta devuelve la tasa anualizada como porcentaje. La CAGR es potente porque el crecimiento real es irregular: los ingresos pueden dispararse un 40 por ciento un año y caer un 10 por ciento al siguiente, y una simple media de esos vaivenes es engañosa. La CAGR corta el ruido preguntando qué tasa constante, capitalizada cada año, produciría el mismo resultado final. Eso la convierte en la forma estándar de describir el crecimiento de los ingresos, las inversiones, el número de usuarios, las carteras y mercados enteros, y de comparar dos cosas que crecieron en periodos distintos en igualdad de condiciones. Los inversores la citan para resumir el rendimiento de un fondo, los fundadores la usan para mostrar la trayectoria de un negocio y los analistas se apoyan en ella para proyectar hacia el futuro. La fórmula eleva el ratio de valor final sobre inicial a la potencia de uno entre el número de años, lo que invierte la capitalización para extraer la tasa anual. Su limitación honesta es que oculta por completo la volatilidad, así que describe el camino suavizado y no la realidad accidentada.",
    exampleEs: {
      inputs: { beginningValue: 100000, endingValue: 200000, years: 5 },
      explanation: "CAGR = (200.000 ÷ 100.000)^(1/5) − 1 = 2^0,2 − 1 ≈ 0,1487 = 14,87% al año.",
    },
    faqsEs: [
      { question: "¿Qué es la CAGR y por qué es útil?", answer: "La CAGR, la tasa de crecimiento anual compuesta, es la tasa anual constante que convertiría un valor inicial en uno final a lo largo de un número fijo de años. Es útil porque suaviza el crecimiento volátil y desigual en una sola cifra comparable, permitiéndote describir cómo de rápido creció algo por año y comparar inversiones o negocios que se desarrollaron en periodos distintos. Responde a la pregunta: si el crecimiento hubiera sido perfectamente estable, ¿qué tasa anual lo habría producido?" },
      { question: "¿En qué se diferencia la CAGR de la tasa de crecimiento media?", answer: "Una media simple suma el cambio porcentual de cada año y lo divide entre el número de años, lo que ignora la capitalización y puede engañar gravemente. Si un valor sube un 100 por ciento y luego cae un 50 por ciento, la media simple sugiere un 25 por ciento de crecimiento, pero acabaste justo donde empezaste, una CAGR real de cero. La CAGR tiene en cuenta la capitalización partiendo directamente de los valores inicial y final." },
      { question: "¿Cuáles son las limitaciones de la CAGR?", answer: "La CAGR oculta por completo la volatilidad y el camino recorrido entre los dos extremos. Dos inversiones con CAGR idénticas pueden tener perfiles de riesgo muy distintos: una estable, la otra dando tumbos entre auges y caídas. También es sensible a la elección de las fechas de inicio y fin: elegir un punto de partida inusualmente bajo o un final alto puede embellecer la tasa. Léela siempre junto a una medida de volatilidad." },
      { question: "¿Puede ser negativa la CAGR?", answer: "Sí. Si el valor final es inferior al inicial, el múltiplo de crecimiento es menor que uno y la CAGR sale negativa, describiendo una tasa anual de declive constante. Una CAGR negativa es perfectamente válida y útil: te dice con qué rapidez se contrajo en promedio cada año una línea de ingresos, una cartera o una base de usuarios que se reduce. El cálculo requiere un valor inicial positivo y un valor final positivo para que el resultado tenga sentido." },
      { question: "¿Qué periodo debo usar para la CAGR?", answer: "Usa un periodo lo bastante largo para captar la tendencia genuina y no un pico a corto plazo, y sé honesto con tus puntos de inicio y fin. De tres a cinco años es común en el análisis de negocios e inversiones porque abarca los altibajos normales. Cuidado con elegir fechas que empiecen en un valle inusual o terminen en un pico, ya que eso puede inflar drásticamente la tasa. Extremos consistentes y representativos hacen la CAGR fiable." },
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
    slugEs: "calculadora-de-margen-de-beneficio-neto",
    titleEs: "Calculadora de Margen de Beneficio Neto",
    shortDescriptionEs: "Halla la parte de los ingresos que queda como beneficio neto.",
    seoTitleEs: "Calculadora de Margen de Beneficio Neto — Porcentaje de Margen Neto",
    metaDescriptionEs:
      "Calculadora de margen de beneficio neto gratuita. Divide el beneficio neto entre los ingresos para ver qué porcentaje de cada dólar de ventas se convierte en beneficio final.",
    primaryKeywordEs: "calculadora de margen de beneficio neto",
    secondaryKeywordsEs: ["calculadora de margen neto", "formula de margen de beneficio neto", "margen del resultado final"],
    formulaExplanationEs:
      "El beneficio neto es lo que queda tras restar de los ingresos cada gasto: coste de los bienes, costes operativos, intereses e impuestos. Dividir el beneficio neto entre los ingresos y multiplicar por 100 expresa ese beneficio final como porcentaje de las ventas. Como capta todos los costes, el margen neto mide la eficiencia total del negocio, y al ser independiente de la escala permite comparar empresas de tamaños muy distintos y seguir tu propio rendimiento a medida que los ingresos suben o bajan con el tiempo.",
    explanationEs:
      "Una calculadora de margen de beneficio neto revela la eficiencia definitiva de un negocio: cuántos céntimos de cada dólar de ventas sobreviven realmente como beneficio final después de pagar cada coste —bienes, salarios, alquiler, marketing, intereses e impuestos—. Introduces el beneficio neto y los ingresos totales, y la herramienta devuelve el margen neto como porcentaje. Este es el más completo de los márgenes de rentabilidad porque no se excluye nada; refleja todo el peso de gestionar la empresa. Una firma con ingresos fuertes pero un margen neto fino trabaja mucho por muy poco, expuesta a cualquier golpe que empuje los costes al alza o las ventas a la baja, mientras que un margen neto saludable da margen para reinvertir, absorber contratiempos y recompensar a los dueños. Por captar toda la estructura de costes, el margen neto es la cifra que inversores, prestamistas y propietarios usan para juzgar si un negocio está realmente bien gestionado y no simplemente si es grande. El método de división expresa el beneficio en relación con el tamaño, de modo que una pequeña tienda y una gran empresa pueden compararse en la misma escala. Comparar el margen neto con el margen bruto y el operativo también señala dónde se fuga el beneficio: un margen bruto sólido que se erosiona hasta un margen neto débil revela que los gastos generales, la financiación o los impuestos hacen el daño. Es la prueba más clara de la rentabilidad global.",
    exampleEs: {
      inputs: { netProfit: 18000, revenue: 150000 },
      explanation: "Margen neto = 18.000 ÷ 150.000 = 0,12 = 12%. Doce céntimos de cada dólar de ventas se conservan como beneficio.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre margen neto y margen bruto?", answer: "El margen bruto resta solo el coste directo de los bienes vendidos, midiendo el diferencial puro entre precio y coste del producto. El margen neto resta todo —gastos operativos, intereses e impuestos también— para mostrar lo que el negocio conserva finalmente. La brecha entre ambos revela cuánto consumen los gastos generales, la financiación y los impuestos. Un margen bruto fuerte que se encoge hasta un margen neto débil señala que los costes bajo la línea bruta se comen casi todo el excedente." },
      { question: "¿Qué es un buen margen de beneficio neto?", answer: "Varía mucho según el sector. La alimentación y otros negocios de gran volumen y poco margen pueden operar de forma saludable con márgenes netos de apenas el 2 al 5 por ciento, mientras que el software y los servicios profesionales pueden superar el 20 por ciento. En vez de perseguir un objetivo universal, compara con competidores directos y con tu propia historia. Un margen neto que se mantiene estable o sube mientras crecen los ingresos es una señal fuerte de que el negocio escala con eficiencia." },
      { question: "¿Puede ser negativo el margen de beneficio neto?", answer: "Sí. Cuando los costes totales superan los ingresos, el beneficio neto es negativo y el margen también, lo que significa que el negocio pierde dinero en su operación global. Un margen neto negativo es común en startups en fase inicial que invierten con fuerza para crecer, pero para una empresa consolidada es una advertencia seria. Muestra que, contado cada coste, el negocio reduce sus propios recursos, y las causas necesitan atención urgente." },
      { question: "¿Por qué comparar el margen neto entre periodos?", answer: "Seguir el margen neto a lo largo del tiempo revela si un negocio se vuelve más o menos eficiente al crecer. Los ingresos crecientes por sí solos pueden enmascarar una rentabilidad que se deteriora si los costes suben más rápido que las ventas. Un margen neto estable o en mejora confirma que el crecimiento se traduce en beneficio real, mientras que un margen en declive —incluso con más ingresos— advierte de que el negocio trabaja más por menos." },
      { question: "¿Cómo puede una empresa mejorar el margen de beneficio neto?", answer: "Trabaja cada capa de la cuenta de resultados. Sube precios o desplázate hacia productos de mayor margen para elevar la línea superior, reduce el coste de los bienes con mejor aprovisionamiento y recorta gastos operativos como alquiler, software y administración. Reducir la deuda baja los intereses, y una planificación fiscal eficiente ayuda al final. Como el margen neto refleja todos los costes, pequeños ahorros en varias líneas se acumulan." },
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
    slugEs: "calculadora-de-margen-de-contribucion",
    titleEs: "Calculadora de Margen de Contribución",
    shortDescriptionEs: "Halla el beneficio que aporta cada unidad tras los costes variables.",
    seoTitleEs: "Calculadora de Margen de Contribución — Por Unidad y Ratio",
    metaDescriptionEs:
      "Calculadora de margen de contribución gratuita. Resta el coste variable del precio para ver cuánto aporta cada unidad a los costes fijos y al beneficio.",
    primaryKeywordEs: "calculadora de margen de contribucion",
    secondaryKeywordsEs: ["formula de margen de contribucion", "ratio de margen de contribucion", "margen de contribucion unitario"],
    formulaExplanationEs:
      "El precio por unidad es lo que paga un cliente, y el coste variable por unidad es el coste de producir esa unidad concreta. Restar el coste variable del precio da el margen de contribución, el dinero que cada venta aporta a los costes fijos y al beneficio. Dividir ese margen entre el precio da el ratio de margen de contribución, la fracción de cada dólar de ventas disponible tras el coste variable. Como solo los costes variables cambian con el volumen, esto aisla el verdadero valor incremental de vender una unidad más.",
    explanationEs:
      "Una calculadora de margen de contribución muestra cuánto aporta cada unidad vendida a cubrir los costes fijos y, una vez cubiertos, al beneficio. Introduces el precio de venta por unidad y el coste variable por unidad —los costes que suben directamente con cada artículo producido, como materiales, embalaje y mano de obra por unidad— y la herramienta devuelve el margen de contribución en dólares y como ratio del precio. El nombre capta su propósito con exactitud: es la cantidad que cada venta aporta tras pagar su propio coste variable, antes de considerar cualquier gasto general fijo. El margen de contribución es el motor del análisis de punto de equilibrio y de precios, porque dividir los costes fijos totales entre el margen de contribución por unidad te dice exactamente cuántas unidades debes vender para cubrir tus gastos generales. Un margen de contribución más alto significa que se necesitan menos ventas para llegar al equilibrio y que cada unidad adicional aporta más al beneficio, por eso guía las decisiones de precios, descuentos, mezcla de productos y si merece la pena aceptar un pedido marginal. El método de resta usado aquí aisla específicamente el coste variable, porque solo los costes que escalan con el volumen afectan al valor incremental de una venta más; los costes fijos son los mismos vendas una unidad o mil. Los gestores usan el ratio de margen de contribución para comparar productos de distintos precios en igualdad de condiciones.",
    exampleEs: {
      inputs: { pricePerUnit: 50, variableCostPerUnit: 30 },
      explanation: "Margen de contribución = 50 $ − 30 $ = 20 $ por unidad. Ratio = 20 ÷ 50 = 40% del precio.",
    },
    faqsEs: [
      { question: "¿Para qué se usa el margen de contribución?", answer: "El margen de contribución muestra cuánto aporta cada unidad a los costes fijos y al beneficio tras cubrir su propio coste variable. Es la base del análisis de punto de equilibrio: dividir los costes fijos totales entre el margen de contribución por unidad da el volumen de ventas necesario para cubrir los gastos generales. También guía los precios, los descuentos y la mezcla de productos, porque aisla el beneficio incremental de una venta más. Los productos pueden ordenarse por margen de contribución." },
      { question: "¿Cuál es la diferencia con el margen bruto?", answer: "El margen bruto resta todo el coste de los bienes vendidos, que puede incluir algunos costes fijos de producción como el alquiler de la fábrica o los salarios de los supervisores. El margen de contribución resta solo los costes variables —los que cambian con cada unidad adicional— dejando los costes fijos completamente fuera. Esto hace del margen de contribución la herramienta adecuada para decisiones sobre volumen y equilibrio, porque mide cuánto aporta cada venta extra antes de los costes fijos." },
      { question: "¿Qué se considera un coste variable?", answer: "Los costes variables suben y bajan directamente con las unidades que produces o vendes: materias primas, componentes, embalaje, mano de obra por unidad o salarios a destajo, comisiones de venta y envío de cada pedido. Contrastan con los costes fijos como el alquiler, el personal asalariado, los seguros y las suscripciones de software, que permanecen iguales sin importar el volumen. Para un margen de contribución preciso, incluye cada coste que escale de verdad con una unidad más." },
      { question: "¿Qué es un buen ratio de margen de contribución?", answer: "Depende de tu base de costes fijos y de tu sector. Los negocios con costes fijos pesados —fábricas, aerolíneas, empresas de software— necesitan ratios de margen de contribución altos para cubrir esos gastos generales antes de que empiece el beneficio, mientras que las operaciones con pocos gastos generales pueden prosperar con ratios más ajustados. La relación clave es entre el ratio y tus costes fijos: un ratio más alto significa que llegas al equilibrio con menos volumen." },
      { question: "¿Cómo se relaciona el margen de contribución con el punto de equilibrio?", answer: "El punto de equilibrio es aquel en que el margen de contribución total iguala exactamente los costes fijos totales, de modo que el beneficio es cero. Como cada unidad aporta una cantidad conocida a los costes fijos, dividir los costes fijos totales entre el margen de contribución por unidad da el número exacto de unidades necesarias para llegar al equilibrio. Cada unidad vendida más allá de ese punto vuelca su margen de contribución completo al beneficio." },
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
    slugEs: "calculadora-de-capital-de-trabajo",
    titleEs: "Calculadora de Capital de Trabajo",
    shortDescriptionEs: "Halla el capital de trabajo y el ratio corriente desde tu balance.",
    seoTitleEs: "Calculadora de Capital de Trabajo — Capital de Trabajo Neto y Ratio",
    metaDescriptionEs:
      "Calculadora de capital de trabajo gratuita. Resta el pasivo corriente del activo corriente para medir la liquidez a corto plazo y el ratio corriente.",
    primaryKeywordEs: "calculadora de capital de trabajo",
    secondaryKeywordsEs: ["capital de trabajo neto", "calculadora de ratio corriente", "formula de capital de trabajo"],
    formulaExplanationEs:
      "El activo corriente son los recursos que se espera convertir en efectivo en un año —el propio efectivo, las cuentas por cobrar y el inventario— mientras que el pasivo corriente son las obligaciones que vencen en ese mismo año. Restar el pasivo del activo da el capital de trabajo neto, el excedente a corto plazo disponible para financiar operaciones. Dividir el activo corriente entre el pasivo corriente produce el ratio corriente, que expresa la misma liquidez como un múltiplo. Juntos muestran si el negocio puede cumplir sus obligaciones cercanas con holgura.",
    explanationEs:
      "Una calculadora de capital de trabajo mide la salud financiera a corto plazo de un negocio: su capacidad de cubrir las facturas que vencen en el próximo año usando los activos que puede convertir en efectivo en esa misma ventana. Introduces el activo corriente, como el efectivo, las cuentas por cobrar y el inventario, y el pasivo corriente, como las facturas de proveedores, los préstamos a corto plazo y los impuestos por pagar, y la herramienta devuelve el capital de trabajo neto en dólares junto al ratio corriente. El capital de trabajo es el colchón que mantiene un negocio funcionando con fluidez día a día: un capital de trabajo positivo significa que el activo corriente supera cómodamente las obligaciones corrientes, así que la nómina, los proveedores y el alquiler pueden pagarse sin apuros, mientras que un capital de trabajo negativo señala que las deudas a corto plazo superan los recursos líquidos y que puede avecinarse una crisis de efectivo. El ratio corriente expresa la misma relación como un múltiplo: un ratio de 2 significa que el negocio tiene dos dólares de activo corriente por cada dólar de pasivo corriente. Prestamistas y proveedores examinan ambas cifras antes de conceder crédito, porque revelan si una empresa puede honrar sus compromisos sin nuevos préstamos. El método de resta aisla el excedente genuino a corto plazo, mientras que el de división lo escala para comparar negocios de distinto tamaño. Los dueños lo usan para detectar problemas de liquidez a tiempo y equilibrar entre poco colchón, que arriesga la insolvencia, y demasiado efectivo ocioso, que no rinde nada.",
    exampleEs: {
      inputs: { currentAssets: 300000, currentLiabilities: 150000 },
      explanation: "Capital de trabajo = 300.000 − 150.000 = 150.000 $. Ratio corriente = 300.000 ÷ 150.000 = 2,0×.",
    },
    faqsEs: [
      { question: "¿Qué cantidad de capital de trabajo es saludable?", answer: "Un capital de trabajo positivo, donde el activo corriente supera al pasivo corriente, es la base para cumplir con holgura las obligaciones a corto plazo. Un ratio corriente entre aproximadamente 1,5 y 2 suele considerarse saludable en muchos sectores, indicando un colchón sólido sin recursos ociosos excesivos. El nivel adecuado depende de tu sector y de tu ciclo de conversión de efectivo, así que compara con empresas comparables en vez de con un único objetivo universal." },
      { question: "¿Qué significa un capital de trabajo negativo?", answer: "Un capital de trabajo negativo significa que el pasivo corriente supera al activo corriente, así que sobre el papel el negocio puede tener dificultades para cubrir las deudas que vencen en el año con sus recursos líquidos. Para la mayoría de las empresas es una advertencia de posibles problemas de liquidez. Sin embargo, algunos negocios eficientes —grandes minoristas que cobran al instante pero pagan a proveedores más tarde— operan deliberadamente con capital de trabajo negativo y se mantienen sanos." },
      { question: "¿Cuál es la diferencia con el ratio corriente?", answer: "El capital de trabajo y el ratio corriente miden la misma relación de dos formas. El capital de trabajo es una cifra absoluta en dólares —activo corriente menos pasivo corriente— que muestra el tamaño del excedente a corto plazo. El ratio corriente divide el activo entre el pasivo para expresar esa relación como un múltiplo, que es independiente de la escala y más fácil de comparar entre empresas de distinto tamaño. Ver ambos da la imagen más completa." },
      { question: "¿Qué cuenta como activo y pasivo corriente?", answer: "El activo corriente son cosas que se espera convertir en efectivo en un año: efectivo y equivalentes, cuentas por cobrar, inventario e inversiones a corto plazo. El pasivo corriente son obligaciones que vencen en un año: cuentas por pagar a proveedores, préstamos a corto plazo, la porción corriente de la deuda a largo plazo, salarios devengados e impuestos por pagar. La prueba de un año es lo que los hace corrientes. Cualquier cosa a más largo plazo queda fuera." },
      { question: "¿Cómo puede un negocio mejorar el capital de trabajo?", answer: "Libera el efectivo atrapado en el ciclo a corto plazo. Cobra las cuentas por cobrar más rápido facturando puntualmente y persiguiendo las cuentas vencidas, reduce el inventario excesivo para que el efectivo no repose en estanterías y negocia plazos de pago más largos con los proveedores para retener el efectivo más tiempo. Evita financiar activos a largo plazo con deuda a corto plazo. El objetivo es un colchón cómodo pero no derrochador." },
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
    slugEs: "calculadora-de-tasa-de-consumo-de-efectivo",
    titleEs: "Calculadora de Tasa de Consumo de Efectivo",
    shortDescriptionEs: "Halla el consumo mensual de efectivo y cuántos meses de pista quedan.",
    seoTitleEs: "Calculadora de Tasa de Consumo de Efectivo — Consumo Mensual y Pista de Caja",
    metaDescriptionEs:
      "Calculadora de tasa de consumo de efectivo gratuita. Halla tu consumo mensual a partir de un saldo inicial y final, y cuántos meses de pista te da tu efectivo.",
    primaryKeywordEs: "calculadora de tasa de consumo de efectivo",
    secondaryKeywordsEs: ["tasa de quema de efectivo", "calculadora de pista de startup", "calculadora de consumo mensual"],
    formulaExplanationEs:
      "Restar el saldo de efectivo final del saldo inicial da el efectivo total consumido durante el periodo, y dividir entre el número de meses da el consumo mensual medio, el efectivo neto que la empresa gasta cada mes tras cualquier ingreso. Dividir el saldo final restante entre ese consumo mensual da la pista: el número de meses que durará el efectivo actual si el gasto continúa al mismo ritmo. Si el efectivo creció, el consumo es negativo y la pista es prácticamente ilimitada.",
    explanationEs:
      "Una calculadora de tasa de consumo de efectivo le dice a una startup los dos números que más determinan su supervivencia: con qué rapidez gasta efectivo cada mes y cuántos meses de pista quedan antes de que el dinero se agote. Introduces el saldo de efectivo al inicio de un periodo, el saldo al final y el número de meses entre ambos, y la herramienta devuelve el consumo mensual medio y la pista que ofrece el saldo final actual a ese ritmo. La tasa de consumo es el latido de una empresa en fase inicial, porque la mayoría de las startups gastan más de lo que ingresan mientras avanzan hacia la escala, financiando esa diferencia con el efectivo de los inversores. Conocer la tasa de consumo convierte un saldo bancario abstracto en un plazo concreto: si tienes 360.000 $ y consumes 40.000 $ al mes, tienes nueve meses para alcanzar la rentabilidad, captar más capital o recortar costes antes de que la cuenta se vacíe. Ese plazo impulsa casi todas las decisiones importantes: cuándo captar fondos, si contratar y con qué agresividad gastar en crecimiento. El método de resta y luego división mide el consumo neto, el efectivo real consumido tras contar cualquier ingreso, que es lo que de verdad agota el banco. Fundadores, consejos e inversores vigilan la pista constantemente, porque captar dinero lleva meses y una empresa que empieza demasiado tarde arriesga negociar desde la debilidad o quedarse sin efectivo.",
    exampleEs: {
      inputs: { startingCash: 600000, endingCash: 360000, months: 6 },
      explanation: "Consumo mensual = (600.000 − 360.000) ÷ 6 = 40.000 $. Pista = 360.000 ÷ 40.000 = 9 meses.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre consumo bruto y neto?", answer: "El consumo bruto es el efectivo total que una empresa gasta cada mes en todos los costes —salarios, alquiler, software y todo lo demás— sin importar los ingresos. El consumo neto resta cualquier ingreso, así que mide el descenso mensual real del saldo bancario. Esta calculadora mide el consumo neto, porque trabaja a partir del cambio real entre tu efectivo inicial y final. El consumo neto es lo que determina de verdad la pista, ya que los ingresos compensan el gasto." },
      { question: "¿Qué cantidad de pista es saludable?", answer: "La mayoría de los inversores aconsejan mantener al menos doce a dieciocho meses de pista, porque captar una nueva ronda suele llevar varios meses y nunca conviene negociar casi sin efectivo. Una pista más larga da margen para alcanzar hitos, sortear contratiempos y captar fondos desde una posición de fuerza. Cuando la pista cae por debajo de seis meses, la urgencia crece mucho: es hora de cerrar financiación, alcanzar la rentabilidad o reducir el consumo." },
      { question: "¿Cómo puede una startup alargar su pista?", answer: "Reduce el consumo neto o capta más efectivo. En el lado del gasto, la mayor palanca suele ser la nómina, seguida de marketing, oficina y software, así que recortar o frenar las contrataciones alarga más la pista. En el lado de los ingresos, aumentar la facturación compensa directamente el consumo. Los fundadores a menudo combinan una disciplina de costes medida con un foco en las vías más rápidas hacia los ingresos." },
      { question: "¿Por qué importa tanto la pista a los inversores?", answer: "La pista dice a los inversores cuánto tiempo puede operar una empresa antes de necesitar más dinero, lo que enmarca todo el riesgo de una inversión. Una startup con pista amplia puede centrarse en construir y alcanzar hitos, mientras que una con poca pista se ve forzada a captar fondos bajo presión, a menudo en peores condiciones. Los inversores también observan si el consumo compra progreso real; un consumo disciplinado que avanza el negocio inspira confianza." },
      { question: "¿Qué pasa si mi tasa de consumo es negativa?", answer: "Una tasa de consumo negativa significa que tu saldo de efectivo final fue mayor que el inicial: la empresa generó más efectivo del que gastó durante el periodo y es positiva en flujo de caja. En ese caso no hay agotamiento que temer, así que la pista es prácticamente ilimitada al ritmo actual y esta calculadora no devuelve una cifra de pista finita. Alcanzar un consumo negativo sostenido, es decir rentabilidad genuina, elimina el plazo de captación por completo." },
    ],
    relatedCalculators: ["cash-flow-calculator", "working-capital-calculator", "revenue-calculator", "payback-period-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
