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
    slugEs: "calculadora-de-cpm",
    titleEs: "Calculadora de CPM",
    shortDescriptionEs: "Halla el coste por mil impresiones a partir del gasto y el alcance.",
    seoTitleEs: "Calculadora de CPM — Coste por Mil Impresiones",
    metaDescriptionEs:
      "Calculadora de CPM gratuita. Calcula el coste por mil impresiones a partir del gasto publicitario total y las impresiones entregadas, el precio estándar del alcance de display y vídeo.",
    primaryKeywordEs: "calculadora de cpm",
    secondaryKeywordsEs: ["coste por mil impresiones", "formula cpm", "coste de publicidad cpm"],
    formulaExplanationEs:
      "CPM significa coste por mil, ya que mille es la palabra latina para mil, y valora la publicidad por la audiencia que alcanza en lugar de por clics o ventas. Dividir el gasto total entre el número de impresiones da el coste de una sola impresión, y multiplicar por mil escala esa cifra diminuta hasta la unidad redonda que cotiza la industria. Como las impresiones son el denominador, un alcance mayor y más barato reduce el CPM mientras que las ubicaciones premium lo elevan, lo que convierte la métrica en una forma limpia de comparar el precio de la visibilidad entre soportes y formatos.",
    explanationEs:
      "Una calculadora de CPM te dice cuánto cuesta poner tu publicidad frente a mil pares de ojos. El CPM, abreviatura de coste por mil, es la moneda de la publicidad de marca y notoriedad, donde el objetivo es el alcance más que un clic inmediato. Introduces el importe total gastado en una ubicación y el número de impresiones que entregó, y la calculadora devuelve el precio de cada mil impresiones en una escala única y coherente. Ese número permite a un comprador de medios alinear opciones muy distintas, un takeover de portada premium, una compra de display de red, un anuncio de televisión conectada o el patrocinio de un boletín, y ver cuál compra atención de forma más económica. El CPM importa porque la mayoría de las grandes campañas de display, vídeo y social se venden sobre una base de CPM, así que entenderlo marca la diferencia entre negociar con fuerza y pagar de más por el inventario. Un CPM bajo no es automáticamente mejor, porque las impresiones baratas sobre la audiencia equivocada malgastan dinero igual que las caras, pero entre ubicaciones comparables y bien segmentadas el CPM más bajo estira más el presupuesto. Especialistas en marketing, agencias, editores y fundadores usan una calculadora de CPM para planificar presupuestos, prever cuánto alcance comprará un gasto, comparar tarifas cotizadas con lo que realmente pagaron y auditar si una plataforma entregó las impresiones prometidas.",
    exampleEs: {
      inputs: { totalCost: 500, impressions: 100000 },
      explanation: "500 $ ÷ 100.000 impresiones × 1.000 = 5,00 $ de CPM.",
    },
    faqsEs: [
      { question: "¿Qué es un buen CPM?", answer: "No existe un único CPM bueno, porque depende mucho de la plataforma, el formato, la segmentación y la temporada. Las redes de display amplias pueden costar unos pocos dólares por mil, mientras que el social muy segmentado o el vídeo premium suele costar de diez a treinta dólares o más. En lugar de perseguir una cifra absoluta, compara el CPM con ubicaciones similares dirigidas a la misma audiencia y pondéralo frente a cuánto convierten esas impresiones en atención y ventas." },
      { question: "¿Cuál es la diferencia entre CPM y CPC?", answer: "El CPM cobra por cada mil impresiones sin importar si alguien hace clic, así que pagas por alcance y exposición. El CPC cobra solo cuando alguien hace clic, de modo que pagas por interacción. Las campañas de notoriedad y marca suelen preferir el CPM porque el objetivo es la visibilidad, mientras que las de respuesta directa suelen preferir el CPC porque vincula el coste a una acción medible. Muchas plataformas permiten comprar de ambas formas según tu objetivo." },
      { question: "¿Por qué los anunciantes usan impresiones en lugar de clics?", answer: "Las impresiones miden cuántas veces se mostró un anuncio, que es la unidad natural para construir marca, donde el fin es ser visto y recordado más que recibir un clic inmediato. La televisión, la publicidad exterior y gran parte del vídeo digital no tienen un clic que vender, así que lo que importa es el alcance y la frecuencia. Fijar el precio por cada mil impresiones da a compradores y vendedores una moneda común y comparable para esa visibilidad entre medios muy distintos." },
      { question: "¿Un CPM más bajo significa siempre una mejor oferta?", answer: "No. Un CPM muy bajo puede indicar inventario de baja calidad, tráfico de bots o una audiencia que nunca comprará tu producto, así que las impresiones baratas no equivalen a impresiones valiosas. La forma correcta de juzgar un CPM es junto a la calidad de la audiencia y los resultados posteriores, como la interacción, las conversiones y el coste por adquisición. Un CPM más alto sobre una audiencia precisa y de alta intención a menudo rinde más que una ganga sobre el público equivocado." },
      { question: "¿Cómo puedo reducir mi CPM?", answer: "Amplía o refina tu segmentación para que la plataforma tenga más margen de encontrar impresiones más baratas, mejora la relevancia y la calidad del creativo, ya que muchas subastas premian los anuncios atractivos con precios más bajos, y prueba distintas ubicaciones y formatos para hallar inventario con un precio por debajo de su valor. Evitar las audiencias y franjas horarias más competidas, y publicar cuando tu audiencia está activa pero la competencia es menor, también puede bajar el coste medio por mil." },
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
    slugEs: "calculadora-de-cpc",
    titleEs: "Calculadora de CPC",
    shortDescriptionEs: "Calcula el coste por clic a partir del gasto y los clics.",
    seoTitleEs: "Calculadora de CPC — Coste por Clic",
    metaDescriptionEs:
      "Calculadora de CPC gratuita. Divide el gasto publicitario total entre los clics para hallar tu coste medio por clic, la métrica de precio central de la búsqueda y el social de pago.",
    primaryKeywordEs: "calculadora de cpc",
    secondaryKeywordsEs: ["coste por clic", "formula cpc", "coste medio por clic"],
    formulaExplanationEs:
      "El coste por clic es la más simple de las métricas de medios pagados: el dinero gastado dividido entre los clics que compró. Como los clics están en el denominador, todo lo que consiga más clics con el mismo gasto, una segmentación más precisa, un creativo más fuerte o un nivel de calidad mayor, hace bajar el precio medio de un clic. El resultado es un promedio de toda la campaña, así que suaviza el hecho de que los precios de subasta individuales varían clic a clic. Ese promedio es justo lo que necesitas para prever el tráfico de un presupuesto o comparar la eficiencia de dos campañas.",
    explanationEs:
      "Una calculadora de CPC revela el precio medio real que pagaste por cada visitante que una campaña envió a tu sitio. El coste por clic es la columna vertebral de la búsqueda de pago y de gran parte del social de pago, donde se te cobra cuando alguien hace clic en lugar de solo ver el anuncio. Introduces lo que gastaste y cuántos clics recibiste, y la herramienta devuelve el coste medio de un solo clic. Esa cifra es engañosamente poderosa. Permite prever cuánto tráfico comprará un presupuesto dado, comparar la eficiencia de campañas de Google, Bing, Facebook y TikTok en una sola escala, y detectar cuándo una palabra clave o audiencia se ha vuelto demasiado cara para justificarse. El CPC también alimenta la economía más profunda: multiplícalo por los clics necesarios para lograr una venta y verás si una campaña puede ser rentable dada tu tasa de conversión y tus márgenes. La métrica importa porque las plataformas basadas en subasta que dominan la publicidad digital fijan precios de forma dinámica, así que tu CPC se mueve con la competencia, la segmentación, la calidad del anuncio y las pujas. Vigilarlo en el tiempo señala los costes crecientes antes de que erosionen los retornos en silencio. Especialistas en búsqueda, compradores de medios, dueños de ecommerce y agencias usan una calculadora de CPC para fijar y revisar pujas, presupuestar campañas, comparar canales entre sí y diagnosticar por qué una campaña que antes ganaba dinero ha dejado de hacerlo.",
    exampleEs: {
      inputs: { totalCost: 800, clicks: 400 },
      explanation: "800 $ ÷ 400 clics = 2,00 $ de coste medio por clic.",
    },
    faqsEs: [
      { question: "¿Qué es un buen coste por clic?", answer: "Un buen CPC depende de tu sector, tu plataforma y de cuánto vale un clic para ti. Sectores competitivos como el legal o los seguros pueden ver clics que cuestan decenas de dólares, mientras que muchos nichos de ecommerce o contenido se sitúan muy por debajo de un dólar. La prueba real no es el precio bruto sino si el clic se paga a sí mismo: si tu tasa de conversión y tu valor de pedido cubren con holgura el CPC, el precio es bueno aunque parezca alto." },
      { question: "¿En qué se diferencia el CPC del CPM?", answer: "El CPC solo te cobra cuando alguien hace clic en el anuncio, de modo que pagas por interacción y tráfico. El CPM cobra por cada mil veces que se muestra el anuncio, haya o no interacción, así que pagas por alcance. Las campañas de respuesta directa que buscan visitantes y ventas suelen apoyarse en el CPC, mientras que las de notoriedad que buscan visibilidad se apoyan en el CPM. Algunas plataformas optimizan una compra de CPM hacia clics, difuminando la línea, pero la base de facturación difiere." },
      { question: "¿Qué hace que suba mi coste por clic?", answer: "El CPC sube cuando más anunciantes compiten por la misma audiencia o palabras clave, cuando cae la relevancia o el nivel de calidad de tu anuncio, cuando segmentas términos caros de alta intención y durante temporadas pico como las fiestas. La estrategia de puja también cuenta: pujas agresivas para ganar las primeras posiciones empujan los precios al alza. Palabras clave mal emparejadas y páginas de destino débiles también arrastran las señales de calidad, que los sistemas de subasta castigan con precios más altos por clic." },
      { question: "¿Cómo reduzco mi CPC medio?", answer: "Mejora la relevancia y el nivel de calidad del anuncio con grupos de anuncios bien temáticos y creativos atractivos, ya que las plataformas premian la relevancia con clics más baratos. Añade palabras clave negativas para dejar de pagar por búsquedas irrelevantes, refina la segmentación hacia audiencias que interactúan y prueba estrategias de puja. Reforzar la experiencia de la página de destino también eleva las señales de calidad. Pausar palabras clave costosas y de baja conversión y desplazar el presupuesto a las eficientes baja el promedio combinado de la cuenta." },
      { question: "¿Un CPC bajo significa siempre que la campaña funciona?", answer: "No. Un clic barato no vale nada si nunca convierte, así que un CPC bajo sobre tráfico no cualificado puede malgastar más dinero que un CPC alto sobre compradores. Lee siempre el CPC junto a la tasa de conversión y el coste por adquisición. Una campaña con un coste por clic algo más alto pero conversiones mucho más fuertes suele ofrecer mejores retornos que otra que simplemente compra los clics más baratos posibles de una audiencia mal emparejada." },
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
    slugEs: "calculadora-de-ctr",
    titleEs: "Calculadora de CTR",
    shortDescriptionEs: "Calcula la tasa de clics a partir de clics e impresiones.",
    seoTitleEs: "Calculadora de CTR — Tasa de Clics",
    metaDescriptionEs:
      "Calculadora de CTR gratuita. Divide los clics entre las impresiones para hallar tu tasa de clics como porcentaje, el indicador clave de la relevancia de anuncios y listados.",
    primaryKeywordEs: "calculadora de ctr",
    secondaryKeywordsEs: ["tasa de clics", "formula ctr", "porcentaje de clics"],
    formulaExplanationEs:
      "La tasa de clics divide los clics que ganó un anuncio o enlace entre el número de veces que se mostró, y luego multiplica por cien para expresar el resultado como porcentaje. Es una proporción de interés frente a exposición, así que aísla lo convincente que es el mensaje de cuánta gente lo vio. Como las impresiones se cancelan, el CTR permite comparar una campaña pequeña con una enorme de forma justa. Un CTR en aumento indica que el creativo, la segmentación y la oferta resuenan, mientras que uno en descenso avisa de que la audiencia pasa de largo.",
    explanationEs:
      "Una calculadora de CTR mide cuán persuasivo es tu anuncio, correo o resultado de búsqueda comparando los clics que ganó con el número de veces que apareció. La tasa de clics es el porcentaje de personas que vieron tu mensaje y se sintieron lo bastante motivadas para actuar. Introduces los clics y las impresiones, y la calculadora devuelve esa proporción como un porcentaje limpio. Esta única cifra es uno de los números más diagnósticos del marketing porque aísla la relevancia del alcance: no te dice a cuántas personas llegaste, sino a cuántas de ellas les importó. Un CTR fuerte significa que tu titular, imagen, oferta y audiencia están alineados, algo que las propias plataformas de anuncios premian con costes más bajos y mejores ubicaciones mediante los niveles de calidad y relevancia. Un CTR débil señala un desajuste en algún punto de esa cadena, invitándote a reescribir el texto, cambiar el creativo o resegmentar. El CTR aparece en todas partes donde se mide la atención: anuncios de búsqueda de pago, banners de display, publicaciones sociales, asuntos de correo y resultados orgánicos en Google Search Console. Como es una tasa y no un recuento bruto, permite comparar una campaña modesta con una enorme en igualdad de condiciones y seguir si los cambios realmente mejoran la interacción. Anunciantes, especialistas en SEO, responsables de email y equipos de contenido usan una calculadora de CTR para hacer pruebas A/B del creativo, compararse con normas del sector, detectar la fatiga cuando las tasas decaen y demostrar que un mensaje cumple su función antes de gastar más para escalarlo.",
    exampleEs: {
      inputs: { clicks: 250, impressions: 10000 },
      explanation: "250 ÷ 10.000 × 100 = 2,5 % de tasa de clics.",
    },
    faqsEs: [
      { question: "¿Qué es una buena tasa de clics?", answer: "Los valores de referencia varían mucho según el canal. La búsqueda de pago suele promediar un pequeño porcentaje, los banners de display se sitúan a menudo muy por debajo del uno por ciento, y las tasas de clic en email suelen quedar en dígitos individuales bajos. En vez de fijarte en un objetivo universal, compara tu CTR con las cifras típicas de tu plataforma y sector concretos, y observa si tu propia tasa mejora con el tiempo. Superar tu rendimiento pasado y al de tus competidores es lo que más importa." },
      { question: "¿Por qué es importante mi CTR?", answer: "El CTR es una lectura directa de la relevancia, de si tu mensaje resuena con quienes lo ven. Además, las grandes plataformas de anuncios usan el CTR como entrada central de sus niveles de calidad y relevancia, que influyen en cuánto pagas y con qué frecuencia se muestran tus anuncios. Un CTR más alto puede por tanto bajar tus costes y ganar mejores ubicaciones, mientras que uno bajo puede subir precios y frenar la entrega. Es a la vez un diagnóstico y una palanca de eficiencia." },
      { question: "¿Puede un CTR alto ser malo?", answer: "Sí. Un titular engañoso o una imagen sensacionalista puede disparar el CTR mientras atrae visitantes que rebotan de inmediato y nunca convierten, malgastando gasto y dañando las tasas de conversión. Los clics amplios por curiosidad también pueden inundar tu embudo de tráfico no cualificado. El objetivo no son los clics por sí mismos sino clics de las personas adecuadas, así que lee siempre el CTR junto a la tasa de conversión y la calidad posterior en lugar de tratar un número grande como éxito automático." },
      { question: "¿Cómo mejoro mi CTR?", answer: "Afina tu titular y tu primera línea para que el valor sea evidente, usa imágenes o extensiones de anuncio que destaquen, y haz que la oferta sea específica y atractiva. Ajusta la segmentación para que tu mensaje llegue a quien de verdad lo quiere, ya que la relevancia es el mayor impulsor de los clics. Prueba variaciones de forma sistemática, cambiando un elemento cada vez, y renueva el creativo antes de que aparezca la fatiga. Alinear la promesa con la página de destino también mantiene alta la calidad." },
      { question: "¿Afecta el CTR a mis costes de anuncio?", answer: "En las plataformas basadas en subasta, sí. Sistemas como Google Ads incorporan la tasa de clics esperada al nivel de calidad, y un nivel de calidad más alto suele bajar tu coste por clic y mejorar la posición del anuncio. En la práctica, un anuncio más relevante y con mayor CTR puede ocupar una mejor posición pagando menos que un competidor menos relevante. Ese bucle de retroalimentación es la razón por la que elevar el CTR es a menudo una de las optimizaciones más rentables disponibles." },
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
      "Free conversion rate calculator. Divide conversions by visitors to find the percentage that took action, the core metric for funnel optimization.",
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
    slugEs: "calculadora-de-tasa-de-conversion",
    titleEs: "Calculadora de Tasa de Conversión",
    shortDescriptionEs: "Halla el porcentaje de visitantes que convierten.",
    seoTitleEs: "Calculadora de Tasa de Conversión — Visitantes a Conversiones",
    metaDescriptionEs:
      "Calculadora de tasa de conversión gratuita. Divide las conversiones entre los visitantes para hallar el porcentaje que actuó, la medida central de la eficacia del embudo y la página de destino.",
    primaryKeywordEs: "calculadora de tasa de conversion",
    secondaryKeywordsEs: ["formula de tasa de conversion", "tasa de conversion web", "conversion de pagina de destino"],
    formulaExplanationEs:
      "La tasa de conversión divide el número de personas que completaron la acción deseada entre las que tuvieron la oportunidad de hacerlo, y luego multiplica por cien para dar un porcentaje. Reduce la eficacia de todo un embudo a una única cifra comparable, independiente de cuánto tráfico llegó. Como los visitantes son el denominador, duplicar el tráfico sin mejorar la persuasión deja la tasa igual, y por eso la métrica aísla la calidad de la oferta, la página y el encaje con la audiencia del mero volumen de visitas.",
    explanationEs:
      "Una calculadora de tasa de conversión muestra qué proporción de tus visitantes hizo realmente lo que querías, ya sea comprar, registrarse, reservar una llamada o descargar una guía. Introduces el número de conversiones y el número de visitantes, y devuelve el porcentaje que convirtió. Es posiblemente la métrica de eficiencia más importante que tiene un negocio en línea, porque mide lo bien que tu tráfico se convierte en resultados en lugar de cuánto tráfico atraes. Dos sitios con números de visitantes idénticos pueden diferir enormemente en ingresos solo porque uno convierte al tres por ciento y el otro al uno, y cerrar esa brecha suele ser más barato y rápido que comprar más tráfico. La tasa de conversión ancla toda la economía del marketing digital: vincula tu coste por clic con tu coste por adquisición, te dice el punto de equilibrio que necesitas de los anuncios y revela si una página de destino, una oferta o un checkout ayudan o perjudican. Una tasa en aumento significa que tu mensaje, tu página y tu audiencia están alineados; una en descenso apunta a fricción, una oferta débil o tráfico mal emparejado. Dueños de ecommerce, equipos SaaS, responsables de marketing y especialistas en CRO usan una calculadora de tasa de conversión para comparar páginas, dimensionar el impacto de una prueba A/B, prever ingresos a partir de un objetivo de tráfico y priorizar dónde la optimización rendirá más. Al ser un porcentaje, permite comparar páginas, campañas y periodos con justicia sin importar su volumen de tráfico, lo que la convierte en la columna vertebral de cualquier programa serio de optimización.",
    exampleEs: {
      inputs: { conversions: 45, visitors: 1500 },
      explanation: "45 ÷ 1.500 × 100 = 3 % de tasa de conversión.",
    },
    faqsEs: [
      { question: "¿Qué es una buena tasa de conversión?", answer: "Los promedios varían mucho según el sector y la intención. Muchas tiendas de ecommerce convierten en torno al dos o tres por ciento de los visitantes, las páginas de generación de leads suelen ir más altas y las compras de mucha consideración más bajas. En vez de perseguir una cifra universal, compárate con tu propio historial y con competidores cercanos, y céntrate en la mejora constante. Un pequeño aumento en la tasa se compone sobre todo tu tráfico, así que incluso pasar del dos al tres por ciento eleva los ingresos." },
      { question: "¿Cómo puedo aumentar mi tasa de conversión?", answer: "Reduce la fricción en el camino hacia la acción simplificando formularios y checkout, y deja el valor y el siguiente paso inconfundiblemente claros. Refuerza la oferta, añade señales de confianza como reseñas y garantías, y asegúrate de que la página cumpla la promesa que trajo a los visitantes. Mejora la velocidad de página y la experiencia móvil, y prueba titulares, diseños y llamadas a la acción de uno en uno para poder atribuir las mejoras. Cualificar mejor el tráfico también eleva la tasa." },
      { question: "¿Por qué la calidad del tráfico afecta a la tasa de conversión?", answer: "La tasa de conversión depende tanto de quién llega como de la propia página. Los visitantes con intención genuina, atraídos por palabras clave relevantes o anuncios bien segmentados, convierten mucho mejor que los clics por curiosidad o las audiencias mal emparejadas. Inundar una página de tráfico barato y no cualificado puede hundir la tasa aunque nada en la página cambie. Por eso mejorar la segmentación y el encaje del mensaje a menudo eleva la tasa de forma más fiable que retocar elementos de la página de forma aislada." },
      { question: "¿Qué cuenta como una conversión?", answer: "Una conversión es cualquier acción que hayas definido como valiosa, y no tiene por qué ser una venta. Ejemplos comunes incluyen compras completadas, altas en boletines, envíos de formularios, registros de cuenta, reservas de demo, instalaciones de apps y descargas de contenido. La clave es definirla de forma coherente para que la métrica siga siendo comparable en el tiempo. Muchos negocios siguen varios tipos de conversión a la vez, distinguiendo microconversiones, como un registro, de macroconversiones, como un pedido pagado." },
      { question: "¿Cómo se conecta la tasa de conversión con el coste por adquisición?", answer: "Ambas están muy ligadas. Si conoces tu coste por clic y tu tasa de conversión, puedes derivar el coste por adquisición, ya que hacen falta más clics para ganar un cliente cuando menos de ellos convierten. Duplicar tu tasa de conversión reduce aproximadamente a la mitad tu coste de adquisición al mismo precio de tráfico, por lo que la optimización de la conversión es tan potente. Mejorar la tasa hace que cada dólar de publicidad compre más clientes sin tocar el presupuesto." },
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
    slugEs: "calculadora-de-costo-por-adquisicion",
    titleEs: "Calculadora de Coste por Adquisición",
    shortDescriptionEs: "Calcula lo que cuesta cada adquisición a partir del gasto total.",
    seoTitleEs: "Calculadora de Coste por Adquisición — CPA",
    metaDescriptionEs:
      "Calculadora de coste por adquisición gratuita. Divide el gasto total entre las adquisiciones para hallar tu CPA, el precio de ganar cada cliente o conversión.",
    primaryKeywordEs: "calculadora de coste por adquisicion",
    secondaryKeywordsEs: ["calculadora cpa", "formula de coste por adquisicion", "coste por accion"],
    formulaExplanationEs:
      "El coste por adquisición divide el dinero total gastado en una campaña entre el número de adquisiciones, ventas, registros o acciones, que produjo. Responde a la pregunta directa que todo especialista en marketing debe afrontar: ¿cuánto costó hacer que una de estas ocurriera? Como las adquisiciones están en el denominador, todo lo que eleve la conversión con el mismo gasto reduce el CPA, vinculándolo directamente al precio del clic y a la tasa de conversión. Frente al valor de una adquisición, el CPA es la línea entre un canal rentable y otro que drena el presupuesto en silencio.",
    explanationEs:
      "Una calculadora de coste por adquisición te dice el precio real de cada resultado que produjo tu marketing, dividiendo todo lo que gastaste entre el número de adquisiciones que lograste. Según tu negocio, una adquisición puede ser una venta, un lead cualificado, un suscriptor o una instalación de app, pero el principio es idéntico: el CPA convierte un bloque de gasto en un coste por resultado que puedes juzgar frente al valor que ese resultado aporta. Es la métrica donde el marketing se encuentra con la cuenta de resultados, porque una campaña puede lucir un CTR brillante y un coste por clic bajo y aun así perder dinero si pocos de esos clics convierten, inflando el coste real de cada cliente. Al reunir gasto y resultados en una sola cifra, el CPA corta las métricas de vanidad y plantea la única pregunta que financia un presupuesto: ¿vale cada adquisición más de lo que cuesta conseguirla? Comparado con el valor medio del pedido, el valor de vida del cliente o la economía de lead a venta, revela qué canales son rentables, cuáles están en equilibrio y cuáles deberían cortarse. El CPA también fija el techo de puja, ya que pagar más de lo que vale una adquisición garantiza pérdidas a escala. Especialistas en marketing de rendimiento, equipos de crecimiento, agencias y fundadores usan una calculadora de coste por adquisición para comparar canales sobre una base relevante para el beneficio, fijar CPA objetivo para la puja automática, prever cuántos clientes comprará un presupuesto y detectar costes de adquisición crecientes antes de que erosionen los márgenes.",
    exampleEs: {
      inputs: { totalSpend: 2000, acquisitions: 80 },
      explanation: "2.000 $ ÷ 80 adquisiciones = 25 $ de coste por adquisición.",
    },
    faqsEs: [
      { question: "¿Qué es un buen coste por adquisición?", answer: "Un buen CPA es cualquier cifra cómodamente por debajo del valor de lo que adquieres. Si un cliente nuevo vale doscientos dólares en beneficio a lo largo de su vida, un CPA de cincuenta es excelente, mientras que para una venta única de bajo margen incluso veinte podría ser demasiado. Como el punto de referencia es tu propia economía, el enfoque correcto es calcular el máximo que puedes permitirte por adquisición y luego trabajar para superarlo en todos los canales." },
      { question: "¿En qué se diferencia el CPA del CPC?", answer: "El coste por clic cobra por un clic sin importar lo que pase después, mientras que el coste por adquisición mide el gasto detrás de un resultado completado como una venta o un registro. El CPA depende por tanto tanto del precio del clic como de tu tasa de conversión: clics más baratos que nunca convierten producen un CPA terrible. El CPC es una métrica de coste de tráfico útil para gestionar pujas, mientras que el CPA es una métrica de coste de resultado que vincula la publicidad con el valor del negocio." },
      { question: "¿Qué significa CPA?", answer: "CPA suele significar coste por adquisición, a veces llamado coste por acción, y capta el gasto medio necesario para generar una conversión. La adquisición puede definirse como tu negocio necesite, una compra, un lead, una prueba o una instalación, siempre que la cuentes de forma coherente. No debe confundirse con la designación contable de las mismas iniciales; en marketing, el CPA es de lleno una métrica de rendimiento y eficiencia para campañas de pago que ata el gasto a resultados." },
      { question: "¿Cómo puedo reducir mi coste por adquisición?", answer: "Mejora la tasa de conversión para que más de tu tráfico actual se convierta en adquisiciones, ya que eso baja el CPA sin gastar más. Afina la segmentación para llegar a audiencias de mayor intención, refuerza tu oferta y tu página de destino, y recorta el gasto en canales o palabras clave con conversión pobre. Reducir el coste por clic mediante mejor relevancia del anuncio también ayuda, igual que el retargeting de audiencias cálidas que convierten más barato. Cada mejora en el embudo entre clic y resultado empuja el CPA a la baja." },
      { question: "¿Debería fijar un CPA objetivo?", answer: "Sí, un CPA objetivo da a tu puja y a tu presupuesto una barrera clara de rentabilidad. Derívalo de lo que vale una adquisición para ti, normalmente una fracción del valor medio del pedido o del valor de vida, para conservar margen. Muchas plataformas de anuncios permiten introducir un CPA objetivo directamente en la puja automática, que luego optimiza hacia ese techo. Revisar y ajustar el objetivo a medida que cambia tu economía mantiene las campañas rentables cuando se mueven costes y tasas de conversión." },
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
    slugEs: "calculadora-de-valor-de-vida-del-cliente",
    titleEs: "Calculadora de Valor de Vida del Cliente",
    shortDescriptionEs: "Estima los ingresos totales que aporta un cliente con el tiempo.",
    seoTitleEs: "Calculadora de Valor de Vida del Cliente — LTV",
    metaDescriptionEs:
      "Calculadora de valor de vida del cliente gratuita. Multiplica el valor medio del pedido, la frecuencia de compra y la duración para estimar los ingresos que aporta cada cliente.",
    primaryKeywordEs: "calculadora de valor de vida del cliente",
    secondaryKeywordsEs: ["calculadora ltv", "calculadora clv", "formula de valor de vida"],
    formulaExplanationEs:
      "Esta fórmula del valor de vida multiplica tres impulsores de los ingresos a largo plazo: cuánto gasta un cliente por pedido, con qué frecuencia compra en un año y cuántos años permanece. El producto es el ingreso total que genera un cliente típico a lo largo de toda la relación, mientras que los dos primeros términos por sí solos dan su valor anual. Es una visión basada en ingresos y no en beneficio, así que ignora deliberadamente márgenes y descuentos, ofreciendo una estimación limpia y comparable de lo valioso que es realmente retener a un cliente.",
    explanationEs:
      "Una calculadora de valor de vida del cliente estima cuántos ingresos aportará un cliente típico durante todo el tiempo que haga negocios contigo, no solo en su primera compra. Introduces el valor medio del pedido, cuántas veces compra un cliente al año y cuántos años suele durar la relación, y la herramienta los multiplica en un valor de vida, junto con el valor anual que lo sustenta. Este número replantea cómo piensas el gasto en marketing. Una primera venta puede apenas cubrir su coste de adquisición, pero si ese cliente vuelve cuatro veces al año durante cinco años, su valor real eclipsa el pedido inicial, lo que justifica invertir mucho más para ganarlo y conservarlo. El valor de vida es el contrapeso del coste por adquisición: la relación entre ambos, a menudo llamada ratio LTV a CAC, es uno de los indicadores más claros de un negocio sostenible, con empresas sanas que suelen ganar varias veces más de un cliente de lo que gastaron en adquirirlo. Entender el LTV cambia decisiones en todos los frentes, desde cuánto puedes permitirte pujar en anuncios hasta si un programa de fidelidad o una mejor incorporación se pagan solos, o qué segmentos de clientes merecen más atención. Marcas de ecommerce, negocios de suscripción, agencias y fundadores usan una calculadora de valor de vida del cliente para fijar presupuestos de adquisición, modelar el rendimiento de los esfuerzos de retención, comparar el valor de distintos grupos de clientes y defender que conservar clientes suele ser más barato y rentable que perseguir sin fin a nuevos.",
    exampleEs: {
      inputs: { avgOrderValue: 60, purchaseFrequency: 4, customerLifespan: 5 },
      explanation: "60 $ × 4 compras × 5 años = 1.200 $ de valor de vida (240 $ al año).",
    },
    faqsEs: [
      { question: "¿Qué es el valor de vida del cliente?", answer: "El valor de vida del cliente, a menudo abreviado LTV o CLV, es el ingreso total que esperas que un cliente genere durante toda su relación con tu negocio. En lugar de juzgar a un cliente por una sola compra, tiene en cuenta la compra repetida a lo largo de meses o años, revelando su verdadero valor. Esta visión más larga es esencial para decidir cuánto puedes invertir en adquirir y retener clientes, ya que muchas relaciones solo se vuelven rentables tras varios pedidos repetidos." },
      { question: "¿Por qué es importante el LTV para el marketing?", answer: "El LTV fija el techo de lo que puedes gastar de forma rentable para adquirir un cliente. Si un cliente vale mil doscientos dólares en cinco años, puedes permitirte un coste de adquisición mucho mayor que si valiera sesenta. También resalta el rendimiento de la retención: pequeños aumentos en cuánto tiempo permanecen los clientes o con qué frecuencia compran pueden elevar el LTV de forma sustancial. Comparar el LTV con el coste de adquisición es una de las señales más fuertes de si el crecimiento es sostenible." },
      { question: "¿Qué es una buena ratio LTV a CAC?", answer: "Un valor de referencia muy citado es en torno a tres a uno, lo que significa que un cliente vale unas tres veces lo que costó adquirirlo. Una ratio cercana a uno a uno sugiere que apenas alcanzas el equilibrio y tienes poco margen para otros costes, mientras que una ratio muy alta puede indicar que estás infrainvirtiendo en crecimiento y podrías gastar más para adquirir más rápido. El objetivo correcto depende de los márgenes, pero tres a uno es un punto de partida sano y habitual." },
      { question: "¿Cómo puedo aumentar el valor de vida del cliente?", answer: "Eleva cualquiera de los tres impulsores: sube el valor medio del pedido con paquetes, ventas adicionales y cruzadas; aumenta la frecuencia de compra con recordatorios, suscripciones e incentivos de fidelidad; y extiende la vida del cliente mejorando producto, soporte e incorporación para que la gente se quede más. Reducir la fuga es especialmente potente porque se multiplica a través de cada compra futura. Incluso ganancias modestas en cada factor se componen, ya que el valor de vida es el producto de los tres." },
      { question: "¿Esta calculadora tiene en cuenta el margen de beneficio?", answer: "No, esta versión estima el ingreso de vida en lugar del beneficio de vida. Multiplica valor de pedido, frecuencia y duración para mostrar el total que gasta un cliente, ideal para comparar segmentos de clientes y fijar techos de adquisición sobre una base de ingresos. Para obtener el beneficio de vida, multiplicarías el resultado por tu margen bruto, restando el coste de los bienes y del servicio. Muchos equipos siguen ambos, usando el LTV de ingresos para planificar y el ajustado por margen para la rentabilidad." },
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
    slugEs: "calculadora-de-costo-de-adquisicion-de-clientes",
    titleEs: "Calculadora de Coste de Adquisición de Clientes",
    shortDescriptionEs: "Halla lo que cuesta ganar cada cliente nuevo.",
    seoTitleEs: "Calculadora de Coste de Adquisición de Clientes — CAC",
    metaDescriptionEs:
      "Calculadora de coste de adquisición de clientes gratuita. Divide el gasto de marketing entre los clientes nuevos para hallar tu CAC, el precio del crecimiento de cualquier negocio.",
    primaryKeywordEs: "calculadora de coste de adquisicion de clientes",
    secondaryKeywordsEs: ["calculadora cac", "formula de coste de adquisicion de clientes", "coste de adquirir un cliente"],
    formulaExplanationEs:
      "El coste de adquisición de clientes divide el total gastado en ganar clientes durante un periodo entre el número de clientes nuevos conseguidos en ese periodo. El resultado es el precio medio del crecimiento, un cliente cada vez. Como los clientes nuevos son el denominador, un marketing más eficiente que convierte el mismo gasto en más clientes hace bajar el CAC. Comparado con el valor de vida, el CAC decide si la adquisición es una inversión que se amortiza o un coste que supera los ingresos que cada cliente termina devolviendo.",
    explanationEs:
      "Una calculadora de coste de adquisición de clientes revela lo que tu negocio paga realmente por ganar cada cliente nuevo, dividiendo tu gasto de marketing y ventas entre el número de clientes que ese gasto produjo. El CAC es una de las métricas que definen a cualquier empresa en crecimiento, porque responde si puedes permitirte crecer: si cuesta más adquirir un cliente de lo que ese cliente vale, escalar simplemente multiplica tus pérdidas. Introduces el gasto total y el número de clientes nuevos, y la herramienta devuelve el coste medio de cada adquisición sobre una base limpia y comparable. Esa cifra se convierte en la vara de medir de casi toda decisión de crecimiento. Frente al valor de vida del cliente, muestra si tu economía unitaria funciona, con la ratio LTV a CAC como chequeo rápido de salud en el que confían inversores y operadores. Seguido en el tiempo, un CAC en aumento avisa de que los canales se saturan, la competencia se intensifica o la segmentación se resiente, a menudo mucho antes de que el daño aparezca en la cuenta de resultados. Comparado entre canales, revela dónde el crecimiento es barato y dónde caro, guiando el presupuesto hacia las fuentes más eficientes. Fundadores, responsables de marketing, líderes de crecimiento y equipos financieros usan una calculadora de coste de adquisición de clientes para dimensionar presupuestos de marketing, juzgar si un canal es sostenible, fijar objetivos de periodo de recuperación y demostrar que el dinero gastado persiguiendo el crecimiento devuelve más de lo que cuesta. Al ser un promedio simple, es fácil de calcular pero lo bastante potente para anclar toda una estrategia de crecimiento.",
    exampleEs: {
      inputs: { marketingSpend: 10000, newCustomers: 200 },
      explanation: "10.000 $ ÷ 200 clientes nuevos = 50 $ de coste de adquisición de clientes.",
    },
    faqsEs: [
      { question: "¿Qué es el coste de adquisición de clientes?", answer: "El coste de adquisición de clientes, o CAC, es la cantidad media que tu negocio gasta en marketing y ventas para ganar un cliente nuevo. Reúne todo lo invertido en ganar clientes durante un periodo, gasto en anuncios, costes de campaña y a menudo el esfuerzo de ventas, y lo divide entre los clientes adquiridos. El CAC es central para entender si el crecimiento es asequible, porque un negocio que paga más por adquirir un cliente de lo que este devuelve no puede escalar de forma rentable por rápido que crezca." },
      { question: "¿Cómo se relaciona el CAC con el valor de vida?", answer: "El CAC y el valor de vida son las dos mitades de la economía unitaria de un negocio. El LTV es lo que vale un cliente con el tiempo; el CAC es lo que costó ganarlo. La ratio entre ambos, LTV dividido entre CAC, muestra si la adquisición se amortiza, con una cifra en torno a tres a uno ampliamente considerada sana. Si el CAC se acerca o supera el LTV, cada cliente nuevo erosiona en lugar de crear valor, señal de que los costes de adquisición o la retención necesitan atención urgente." },
      { question: "¿Qué es un buen CAC?", answer: "No existe un CAC bueno universal, porque solo significa algo en relación con lo que vale un cliente y cuánto tarda en amortizarse. Un CAC de cincuenta dólares es excelente si los clientes valen cientos y devuelven rápido, pero ruinoso para una venta única de margen fino. Juzga el CAC frente al valor de vida y al periodo de recuperación en lugar de aisladamente, y busca mantenerlo lo bastante bajo para que los clientes se vuelvan rentables dentro de un plazo aceptable." },
      { question: "¿Cómo puedo reducir el coste de adquisición de clientes?", answer: "Mejora las tasas de conversión para que más de tu tráfico actual se convierta en clientes sin gasto extra, y afina la segmentación para llegar a audiencias que convierten más barato. Invierte en canales de menor coste como recomendaciones, contenido y búsqueda orgánica que se componen con el tiempo, refuerza la retención para que crezca el boca a boca y recorta el gasto en campañas de bajo rendimiento. Una mejor incorporación y experiencia de producto también impulsan las recomendaciones, entre los clientes más baratos que puedes adquirir." },
      { question: "¿Debe el CAC incluir salarios y gastos generales?", answer: "Un CAC totalmente cargado incluye no solo el gasto en anuncios sino también los salarios, herramientas y gastos generales ligados a adquirir clientes, lo que da la imagen más veraz de lo que cuesta el crecimiento. Un CAC de pago más simple cuenta solo el gasto directo en publicidad, útil para optimizar campañas con rapidez. Ambos tienen su lugar: usa la versión simple para decisiones diarias de canal y la totalmente cargada para la planificación estratégica y los informes a inversores, dejando claro cuál citas." },
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
    slugEs: "calculadora-de-tasa-de-cancelacion",
    titleEs: "Calculadora de Tasa de Cancelación",
    shortDescriptionEs: "Mide el porcentaje de clientes que pierdes.",
    seoTitleEs: "Calculadora de Tasa de Cancelación — Cancelación y Retención de Clientes",
    metaDescriptionEs:
      "Calculadora de tasa de cancelación gratuita. Divide los clientes perdidos entre los clientes al inicio para hallar tu tasa de cancelación y de retención como porcentajes.",
    primaryKeywordEs: "calculadora de tasa de cancelacion",
    secondaryKeywordsEs: ["calculadora de cancelacion de clientes", "formula de tasa de cancelacion", "calculadora de tasa de retencion"],
    formulaExplanationEs:
      "La tasa de cancelación divide los clientes perdidos durante un periodo entre los que tenías al inicio, expresado en porcentaje, y la retención es simplemente la imagen espejo, cien por cien menos la cancelación. Usar el recuento inicial como denominador mide la fuga frente a la base que intentabas conservar. Al ser una tasa, permite comparar de forma justa la pérdida de una pequeña startup y de una gran empresa. Incluso unos pocos puntos de cancelación mensual se componen con dureza a lo largo de un año, y por eso la métrica acapara tanta atención en los negocios de suscripción.",
    explanationEs:
      "Una calculadora de tasa de cancelación mide con qué rapidez estás perdiendo clientes, lo que para cualquier negocio de suscripción o de ingresos recurrentes suele ser el número más importante que controlar. Introduces cuántos clientes tenías al inicio de un periodo y cuántos perdiste durante él, y la herramienta devuelve tanto la tasa de cancelación como su complemento, la tasa de retención. La cancelación importa porque la adquisición es cara y lenta, así que un cubo con fugas socava cada dólar gastado en crecer: si pierdes clientes tan rápido como los ganas, los ingresos se estancan por bueno que sea tu marketing. Pequeñas diferencias se componen de forma drástica con el tiempo; un cinco por ciento de cancelación mensual pierde en silencio casi la mitad de tus clientes en un año, mientras que recortarla al dos por ciento transforma la trayectoria del negocio. Por eso la cancelación se vigila tan de cerca en empresas SaaS, cajas de suscripción, sitios de membresía y cualquier negocio construido sobre ingresos repetidos. El lado de la retención de la misma moneda es lo que impulsa el crecimiento compuesto, porque los clientes que conservas vuelven a comprar, recomiendan a otros y no cuestan nada más adquirir. Leer la cancelación en el tiempo revela si el producto, la incorporación, el precio o el soporte alejan a la gente, y segmentarla muestra qué clientes se van y por qué. Fundadores, equipos de crecimiento, responsables de éxito del cliente y especialistas en marketing usan una calculadora de tasa de cancelación para seguir la salud de su base, modelar el impacto en ingresos de las mejoras de retención, fijar objetivos para los esfuerzos de éxito del cliente y demostrar que reducir la cancelación suele ser la inversión de crecimiento de mayor palanca disponible.",
    exampleEs: {
      inputs: { customersLost: 30, customersStart: 600 },
      explanation: "30 ÷ 600 × 100 = 5 % de tasa de cancelación, una tasa de retención del 95 %.",
    },
    faqsEs: [
      { question: "¿Qué es la tasa de cancelación?", answer: "La tasa de cancelación es el porcentaje de clientes que dejan de hacer negocios contigo durante un periodo dado, como un mes o un año. Es el opuesto directo de la tasa de retención, y juntas describen lo bien que conservas a los clientes que has ganado. Para los negocios de suscripción y de ingresos recurrentes, la cancelación es a menudo la métrica que determina si la empresa crece o se estanca, porque perder clientes anula en silencio las ganancias de adquirir nuevos." },
      { question: "¿Qué es una buena tasa de cancelación?", answer: "Una buena tasa de cancelación depende mucho de tu modelo de negocio y del tipo de cliente. Muchas empresas SaaS establecidas buscan una cancelación mensual de un solo dígito bajo, mientras que los valores de referencia anuales difieren por segmento, con clientes empresariales que suelen cancelar mucho menos que los de consumo o pequeñas empresas. En vez de fijarte en un número universal, sigue tu propia cancelación en el tiempo y frente a competidores cercanos, y trata cualquier descenso sostenido como una victoria significativa." },
      { question: "¿En qué se diferencia la tasa de cancelación de la de retención?", answer: "Son dos caras de la misma medición. La tasa de cancelación es la proporción de clientes que perdiste en un periodo, mientras que la de retención es la que conservaste, así que ambas suman cien por cien. Si la cancelación es del cinco por ciento, la retención es del noventa y cinco. Los equipos suelen liderar con el marco que convenga a la conversación, enfatizando la retención al celebrar la lealtad y la cancelación al diagnosticar problemas, pero ambas vienen de los mismos números subyacentes." },
      { question: "¿Cómo puedo reducir la cancelación?", answer: "Mejora la incorporación para que los clientes alcancen valor con rapidez, ya que la confusión temprana es una causa principal de cancelación. Supervisa la interacción para detectar clientes en riesgo antes de que se vayan y contacta de forma proactiva, refuerza el soporte y cierra las carencias de producto que generan frustración. Alinear el precio con el valor, premiar la lealtad y recoger comentarios de salida para arreglar motivos recurrentes ayuda. Como los clientes retenidos se componen en valor, incluso reducciones modestas mejoran mucho los ingresos a largo plazo." },
      { question: "¿Por qué importa tanto la cancelación?", answer: "La cancelación importa porque sus efectos se componen. Un negocio que pierde un pequeño porcentaje de clientes cada mes debe correr cada vez más rápido en adquisición solo para mantenerse, y una cancelación alta limita cuánto puede crecer la empresa por mucho que gaste en marketing. Los clientes retenidos, en cambio, compran repetidamente, recomiendan a otros y no requieren coste de adquisición nuevo, así que bajar la cancelación eleva el valor de vida de toda la base." },
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
    slugEs: "calculadora-de-mrr",
    titleEs: "Calculadora de MRR",
    shortDescriptionEs: "Calcula los ingresos recurrentes mensuales y la tasa de ejecución anual.",
    seoTitleEs: "Calculadora de MRR — Ingresos Recurrentes Mensuales",
    metaDescriptionEs:
      "Calculadora de MRR gratuita. Multiplica los clientes por el ingreso mensual medio para hallar los ingresos recurrentes mensuales y la tasa de ejecución anual de un negocio de suscripción.",
    primaryKeywordEs: "calculadora de mrr",
    secondaryKeywordsEs: ["calculadora de ingresos recurrentes mensuales", "formula mrr", "calculadora arr"],
    formulaExplanationEs:
      "Los ingresos recurrentes mensuales multiplican el número de clientes de pago por el ingreso medio que cada uno paga al mes, dando la renta predecible que un negocio de suscripción gana cada mes. Multiplicar el MRR por doce lo proyecta en una tasa de ejecución anual, los ingresos anuales que la base actual produciría si nada cambiara. Como cuenta solo los ingresos recurrentes de suscripción, excluye deliberadamente las tarifas puntuales, aislando la renta estable y compuesta que hace a los negocios de suscripción tan valiosos y fáciles de prever y planificar.",
    explanationEs:
      "Una calculadora de MRR le da a un negocio de suscripción su latido: los ingresos predecibles que gana cada mes de los clientes de pago. Introduces el número de clientes de pago y el ingreso medio que cada uno aporta al mes, a veces llamado ARPU, y la herramienta devuelve tus ingresos recurrentes mensuales junto con la tasa de ejecución anual que los proyecta a lo largo de un año completo. El MRR es la métrica que hace a los negocios de suscripción tan atractivos y medibles, porque a diferencia de las ventas puntuales se repite, permitiéndote prever ingresos, planificar contrataciones y gasto y ver el efecto compuesto de sumar clientes. Observar cómo se mueve el MRR de mes a mes cuenta una historia más rica que una sola cifra de ingresos: los clientes nuevos lo suman, las mejoras de plan lo expanden, las bajadas lo contraen y la cancelación lo resta, así que seguir esos componentes revela exactamente de dónde viene el crecimiento y dónde hay fugas. La tasa de ejecución anual, el MRR multiplicado por doce, traduce la cifra mensual en un titular anual que inversores y operadores usan para dimensionar el negocio, aunque asume que la base actual se mantiene estable. Como el MRR está normalizado a un importe mensual, permite comparar periodos con limpieza aunque los clientes paguen anualmente o en planes distintos. Fundadores, operadores SaaS, equipos de crecimiento y responsables financieros usan una calculadora de MRR para seguir el impulso, fijar y supervisar objetivos, modelar el impacto de cambios de precio y retención, y comunicar la salud del negocio en un solo número orientado al futuro.",
    exampleEs: {
      inputs: { customers: 500, avgMonthlyRevenue: 40 },
      explanation: "500 clientes × 40 $ = 20.000 $ de MRR, una tasa de ejecución anual de 240.000 $.",
    },
    faqsEs: [
      { question: "¿Qué son los ingresos recurrentes mensuales?", answer: "Los ingresos recurrentes mensuales, o MRR, son la renta de suscripción predecible que un negocio gana cada mes de sus clientes de pago. Cuenta solo los ingresos recurrentes, excluyendo cargos puntuales como tarifas de configuración, así que refleja la base estable en la que puedes confiar y que puedes prever. El MRR es la métrica fundacional para negocios de suscripción y SaaS porque convierte un conjunto de suscripciones individuales en un único número repetible que revela el impulso y sustenta la planificación, el presupuesto y la valoración." },
      { question: "¿En qué se diferencia el MRR del ARR?", answer: "El MRR son los ingresos recurrentes mensuales, mientras que el ARR son los ingresos recurrentes anuales, esencialmente el MRR multiplicado por doce. Miden los mismos ingresos de suscripción subyacentes a escalas de tiempo distintas. Los negocios más pequeños y de movimiento rápido suelen seguir el MRR porque los cambios mensuales son significativos, mientras que las grandes empresas con contratos anuales a menudo lideran con el ARR. Esta calculadora muestra ambos, dando la cifra mensual y la tasa de ejecución anual según la audiencia que lo necesite." },
      { question: "¿Qué significa ingreso medio por cliente?", answer: "El ingreso medio por cliente, a veces llamado ARPU, es la cantidad mensual media que aporta cada cliente de pago, hallada dividiendo el total de ingresos recurrentes mensuales entre el número de clientes. Suaviza el hecho de que los clientes están en planes y precios distintos. Multiplicar el ARPU por tu recuento de clientes reconstruye el MRR, y seguir el ARPU en el tiempo muestra si las ventas adicionales, los cambios de plan y el precio elevan el valor de cada cliente o lo erosionan." },
      { question: "¿Por qué importa el MRR para la planificación?", answer: "El MRR importa porque su previsibilidad te deja planificar con confianza. Saber aproximadamente cuántos ingresos se repetirán el mes que viene, y el siguiente, apoya decisiones sobre contratación, gasto en marketing e inversión en producto que los ingresos puntuales no pueden. También hace legible el crecimiento: comparar el MRR de este mes con el del anterior, y desglosar el cambio en ingresos nuevos, de expansión, de contracción y cancelados, muestra exactamente qué impulsa el negocio o lo frena, guiando dónde enfocarse." },
      { question: "¿Es la tasa de ejecución anual lo mismo que ingresos garantizados?", answer: "No. La tasa de ejecución anual simplemente proyecta tu MRR actual doce meses hacia delante, asumiendo que la base de clientes y el precio se mantienen exactamente como hoy. Es una instantánea útil para dimensionar el negocio pero no una garantía, porque la cancelación, las bajadas, las ventas nuevas y los cambios de precio moverán la cifra real. Trata la tasa de ejecución como una anualización indicativa de este momento y combínala con tendencias de cancelación y crecimiento." },
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
    slugEs: "calculadora-de-roi-de-email-marketing",
    titleEs: "Calculadora de ROI de Email Marketing",
    shortDescriptionEs: "Mide el retorno y el beneficio de una campaña de email.",
    seoTitleEs: "Calculadora de ROI de Email Marketing — Retorno de la Campaña",
    metaDescriptionEs:
      "Calculadora de ROI de email marketing gratuita. Compara los ingresos de la campaña con su coste para hallar tu porcentaje de ROI y el beneficio neto de cada envío.",
    primaryKeywordEs: "calculadora de roi de email marketing",
    secondaryKeywordsEs: ["calculadora de roi de email", "roi de campana de email", "retorno de email marketing"],
    formulaExplanationEs:
      "El ROI del email marketing resta el coste de la campaña de los ingresos que generó para hallar la ganancia neta, y luego divide esa ganancia entre el coste para expresarla como retorno porcentual. Un resultado del cien por cien significa que la campaña dobló su dinero, devolviendo un dólar de beneficio por cada dólar gastado. Como el coste es el denominador, los famosamente bajos costes de envío del email tienden a producir porcentajes espectaculares, y por eso se aprecia tanto el canal: un gasto modesto frente a ingresos relevantes rinde un retorno que pocos canales igualan.",
    explanationEs:
      "Una calculadora de ROI de email marketing mide si una campaña ganó dinero y con qué eficiencia, comparando los ingresos que impulsó frente a lo que costó ejecutarla. Introduces los ingresos atribuidos a la campaña y su coste total, que cubre la plataforma, el diseño, la redacción y cualquier oferta promocional, y la herramienta devuelve el retorno de la inversión como porcentaje junto con el beneficio neto en dólares. El email figura de forma consistente entre los canales de mayor retorno del marketing, precisamente porque sus costes son muy bajos en relación con los ingresos que una lista bien segmentada puede producir, y esta calculadora hace concreta esa ventaja. El porcentaje de ROI te dice cuántos dólares volvieron por cada dólar gastado, ideal para comparar el email con los anuncios de pago, el social u otras campañas en igualdad de condiciones, mientras que la cifra de beneficio neto muestra el dinero real añadido al negocio. Leerlos juntos evita dos errores comunes: celebrar una gran cifra de ingresos que ocultó un envío caro, o descartar una campaña de ingresos modestos que fue casi gratis de ejecutar y por tanto enormemente rentable. Seguido entre campañas, el ROI del email revela qué segmentos, ofertas y estrategias de envío se amortizan, guiando dónde enfocarse. Especialistas en marketing de ecommerce, expertos en email, agencias y dueños de pequeñas empresas usan una calculadora de ROI de email marketing para justificar el presupuesto del canal, comparar campañas y flujos, comprobar si el descuento de una promoción se comió su beneficio y demostrar que el email disciplinado sigue siendo una de las formas más rentables de generar ingresos.",
    exampleEs: {
      inputs: { revenue: 9000, campaignCost: 1500 },
      explanation: "(9.000 $ − 1.500 $) ÷ 1.500 $ × 100 = 500 % de ROI, con 7.500 $ de beneficio neto.",
    },
    faqsEs: [
      { question: "¿Cómo se calcula el ROI del email marketing?", answer: "El ROI del email se calcula restando el coste de la campaña de los ingresos que generó, luego dividiendo esa ganancia neta entre el coste y multiplicando por cien para un porcentaje. Por ejemplo, tres mil en ingresos frente a un coste de quinientos da dos mil quinientos de beneficio, que dividido entre quinientos es un retorno del quinientos por cien. El porcentaje muestra la eficiencia por dólar gastado, mientras que el beneficio neto muestra el dinero real que la campaña añadió al negocio." },
      { question: "¿Por qué el email suele tener un ROI alto?", answer: "El email suele registrar un ROI alto porque sus costes son extremadamente bajos comparados con los ingresos que puede generar. Estás comercializando a personas que ya eligieron saber de ti, así que la intención es alta, y enviar cuesta poco más allá de la tarifa de la plataforma y el tiempo de crear el mensaje. Esa combinación de una audiencia propia y cálida con un coste mínimo por envío hace que incluso ingresos modestos produzcan un gran retorno porcentual, por lo que el email se cita repetidamente entre los canales más rentables." },
      { question: "¿Qué costes debo incluir en el coste de la campaña?", answer: "Para un ROI preciso, incluye todos los costes ligados a la campaña: la tarifa de tu plataforma de email, cualquier gasto en diseño, redacción o autónomos, el coste de los descuentos o productos gratuitos ofrecidos en la promoción y una parte razonable del tiempo que dedicó tu equipo. Dejar fuera costes reales infla el ROI y puede hacer que una promoción no rentable parezca exitosa. Cuanto más completamente captures el coste, más fiable será la cifra de retorno para comparar campañas." },
      { question: "¿Qué es un buen ROI de email marketing?", answer: "A menudo se cita que el email devuelve muchas veces su coste, con cifras del sector ampliamente mencionadas que sugieren un retorno de varias decenas de dólares por cada dólar gastado, aunque los resultados varían enormemente según la calidad de la lista, la oferta y la ejecución. En vez de perseguir un titular de referencia, compara tus campañas entre sí y frente a tus otros canales. Cualquier campaña que devuelva cómodamente más de lo que costó funciona, y mejorar la segmentación y la relevancia tiende a elevar el retorno." },
      { question: "¿Cómo puedo mejorar mi ROI de email?", answer: "Haz crecer y limpia tu lista para llegar a suscriptores interesados, y segméntala para que cada mensaje sea relevante para quien lo recibe, ya que la relevancia impulsa los ingresos. Mejora los asuntos y el contenido para elevar aperturas y clics, usa flujos automatizados como series de bienvenida y de carrito abandonado que convierten barato, y prueba ofertas para hallar lo que vende sin descontar en exceso. Mantener los costes ajustados mientras subes los ingresos por envío es la ruta más directa a un retorno más fuerte." },
    ],
    relatedCalculators: ["roi-calculator", "roas-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
