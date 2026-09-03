import type { CalculatorDefinition } from "../types";

export const financeExtraCalculators: CalculatorDefinition[] = [
  {
    id: "loan",
    slug: "loan-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Loan Calculator",
    shortDescription: "Estimate monthly payments on any loan.",
    seoTitle: "Loan Calculator — Free Monthly Payment Estimator",
    metaDescription:
      "Free loan calculator. Estimate the monthly payment, total interest and total cost of any personal, auto or general loan.",
    primaryKeyword: "loan calculator",
    secondaryKeywords: ["personal loan calculator", "auto loan calculator", "monthly loan payment"],
    fields: [
      { id: "amount", label: "Loan amount", type: "number", unit: "$", placeholder: "20000", required: true, span: 1, min: 0 },
      { id: "rate", label: "Interest rate", type: "number", unit: "%", placeholder: "8", required: true, span: 1, min: 0, step: 0.01 },
      { id: "term", label: "Loan term", type: "number", unit: "years", placeholder: "5", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "monthlyPayment", label: "Monthly payment", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalInterest", label: "Total interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalPaid", label: "Total of payments", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "M = P × r ÷ (1 − (1 + r)^−n), r = annual rate ÷ 12, n = years × 12",
    explanation:
      "Your monthly loan payment is the fixed sum that repays a borrowed amount in equal installments over a set term, with each payment covering interest on the balance still owed plus a slice of principal. Seeing that figure before you sign matters because it tells you whether the repayment fits your monthly budget and reveals the true cost of borrowing once interest is stacked up over the years. This loan calculator applies the standard amortization formula, the method every bank and credit union uses, so the schedule is identical to what a lender will quote. Amortization is used because it produces a level payment that keeps interest and principal balanced from the first month to the last, retiring the debt exactly on schedule. Stretching the term with a loan calculator lowers each monthly payment but raises the total interest, since the balance is carried longer, while a shorter term does the reverse. Borrowers use a loan calculator to shop for personal, auto and consolidation loans, compare offers with different rates and terms, and decide how large a payment they can comfortably absorb. The result assumes a fixed rate and no fees, so add any origination charges separately to gauge the full cost.",
    formulaExplanation:
      "This is the present value of an annuity rearranged to solve for the payment. P is the amount borrowed, r the monthly interest rate and n the number of months. Dividing P × r by (1 − (1 + r)^−n) spreads the principal across all n payments while charging interest each month on the balance that remains. Because the balance shrinks with every payment, a constant amount keeps the loan on track to reach zero exactly at term.",
    example: {
      inputs: { amount: 20000, rate: 8, term: 5 },
      explanation: "$20,000 at 8% over 5 years (60 payments) is about $405.53 per month, roughly $4,332 total interest.",
    },
    faqs: [
      { question: "Can I use this for a car loan?", answer: "Yes. Any fixed-rate installment loan — auto, personal, student refinance or debt consolidation — repays on the same amortization math, so the payment this tool returns matches what a lender will quote. For vehicles, remember the sticker figure often excludes tax, title, registration and any dealer add-ons rolled into the financing. Enter the actual amount financed after your down payment and trade-in to get an accurate monthly figure." },
      { question: "How can I lower my monthly payment?", answer: "Three levers move it: borrow less, secure a lower interest rate, or extend the term. A bigger down payment shrinks the principal directly. A stronger credit score or a shorter shopping window earns a better rate. Lengthening the term spreads the balance over more months, which cuts the payment but increases the total interest you pay, so weigh the monthly relief against the lifetime cost." },
      { question: "What is the difference between interest rate and APR?", answer: "The interest rate is the cost of borrowing the principal alone. The APR bundles that rate together with mandatory fees — origination charges, points and some closing costs — into a single yearly percentage, so it is usually higher. Because APR reflects the full cost of the loan, it is the fairer number for comparing two offers. This calculator uses the interest rate, so add fees separately." },
      { question: "Is total interest included in the total of payments?", answer: "Yes. The total of payments is simply the monthly payment multiplied by the number of months, and it equals the amount you borrowed plus all the interest charged over the life of the loan. Subtracting the original loan amount from that total gives you the interest figure shown separately. It is the clearest way to see how much borrowing actually costs beyond the sum you received." },
      { question: "Does paying extra each month help?", answer: "Significantly. Any amount above the scheduled payment goes straight to principal, shrinking the balance that future interest is charged on. Because interest is front-loaded, extra payments made early in the term save the most. Even a modest recurring overpayment can cut months off the schedule and hundreds or thousands in interest. Confirm your lender applies overpayments to principal and charges no prepayment penalty first." },
    ],
    slugEs: "calculadora-de-prestamos",
    titleEs: "Calculadora de Préstamos",
    shortDescriptionEs: "Estima el pago mensual de cualquier préstamo.",
    seoTitleEs: "Calculadora de Préstamos — Estimador Gratis de Pago Mensual",
    metaDescriptionEs:
      "Calculadora de préstamos gratis. Estima el pago mensual, el interés total y el costo total de cualquier préstamo personal, de auto o general.",
    primaryKeywordEs: "calculadora de préstamos",
    secondaryKeywordsEs: ["calculadora de préstamo personal", "calculadora de préstamo de auto", "pago mensual del préstamo"],
    formulaExplanationEs:
      "Esta es la fórmula del valor presente de una anualidad reordenada para despejar el pago. P es la cantidad prestada, r la tasa de interés mensual y n el número de meses. Dividir P × r entre (1 − (1 + r)^−n) reparte el capital entre los n pagos mientras cobra interés cada mes sobre el saldo que queda pendiente. Como el saldo disminuye con cada pago, una cantidad constante mantiene el préstamo encaminado para llegar a cero exactamente al final del plazo.",
    explanationEs:
      "El pago mensual de tu préstamo es la suma fija que amortiza una cantidad prestada en cuotas iguales a lo largo de un plazo determinado, y cada pago cubre el interés sobre el saldo aún adeudado más una parte del capital. Ver esa cifra antes de firmar importa porque te dice si la cuota cabe en tu presupuesto mensual y revela el verdadero costo de endeudarte una vez que el interés se acumula a lo largo de los años. Esta calculadora de préstamos aplica la fórmula estándar de amortización, el método que usan todos los bancos y cooperativas de crédito, de modo que el calendario es idéntico al que te cotizará un prestamista. Se usa la amortización porque produce un pago nivelado que mantiene equilibrados el interés y el capital desde el primer mes hasta el último, saldando la deuda justo a tiempo. Alargar el plazo con una calculadora de préstamos reduce cada pago mensual pero eleva el interés total, ya que el saldo se arrastra más tiempo, mientras que un plazo más corto hace lo contrario. Los prestatarios usan una calculadora de préstamos para comparar préstamos personales, de auto y de consolidación, evaluar ofertas con distintas tasas y plazos, y decidir qué cuota pueden asumir con comodidad. El resultado supone una tasa fija y sin comisiones, así que suma aparte cualquier cargo de originación para conocer el costo completo.",
    exampleEs: {
      inputs: { amount: 20000, rate: 8, term: 5 },
      explanation: "$20,000 al 8% durante 5 años (60 pagos) son unos $405.53 al mes, aproximadamente $4,332 de interés total.",
    },
    faqsEs: [
      { question: "¿Puedo usar esto para un préstamo de auto?", answer: "Sí. Cualquier préstamo a plazos con tasa fija — de auto, personal, refinanciamiento estudiantil o consolidación de deudas — se amortiza con la misma matemática, así que el pago que devuelve esta herramienta coincide con el que cotizará un prestamista. Para vehículos, recuerda que el precio de lista suele excluir impuestos, título, matrícula y cualquier extra del concesionario incluido en el financiamiento. Ingresa la cantidad realmente financiada tras tu enganche y tu vehículo a cuenta." },
      { question: "¿Cómo puedo reducir mi pago mensual?", answer: "Tres palancas lo mueven: pedir menos prestado, conseguir una tasa de interés más baja o alargar el plazo. Un enganche mayor reduce el capital directamente. Un mejor puntaje de crédito o una ventana de búsqueda corta consiguen una mejor tasa. Alargar el plazo reparte el saldo entre más meses, lo que baja el pago pero aumenta el interés total que pagas, así que pesa el alivio mensual frente al costo total de por vida." },
      { question: "¿Cuál es la diferencia entre la tasa de interés y la APR?", answer: "La tasa de interés es solo el costo de pedir prestado el capital. La APR agrupa esa tasa junto con comisiones obligatorias — cargos de originación, puntos y algunos costos de cierre — en un único porcentaje anual, por lo que suele ser más alta. Como la APR refleja el costo total del préstamo, es el número más justo para comparar dos ofertas. Esta calculadora usa la tasa de interés, así que suma las comisiones aparte." },
      { question: "¿El interés total está incluido en el total de pagos?", answer: "Sí. El total de pagos es simplemente el pago mensual multiplicado por el número de meses, y equivale a la cantidad que pediste prestada más todo el interés cobrado durante la vida del préstamo. Restar el monto original del préstamo a ese total te da la cifra de interés que se muestra por separado. Es la forma más clara de ver cuánto cuesta realmente endeudarse más allá de la suma que recibiste." },
      { question: "¿Ayuda pagar un extra cada mes?", answer: "Considerablemente. Cualquier cantidad por encima del pago programado va directa al capital, reduciendo el saldo sobre el que se cobra el interés futuro. Como el interés se concentra al principio, los pagos extra hechos temprano en el plazo ahorran más. Incluso un sobrepago recurrente modesto puede recortar meses del calendario y cientos o miles en interés. Confirma primero que tu prestamista aplique los sobrepagos al capital y no cobre penalización por pago anticipado." },
    ],
    relatedCalculators: ["mortgage-calculator", "simple-interest-calculator", "compound-interest-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/consumer-tools/auto-loans/",
  },
  {
    id: "simple-interest",
    slug: "simple-interest-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Simple Interest Calculator",
    shortDescription: "Calculate simple interest on a principal.",
    seoTitle: "Simple Interest Calculator — Free Online Tool",
    metaDescription:
      "Free simple interest calculator. Find the interest and total amount from principal, rate and time using the simple interest formula.",
    primaryKeyword: "simple interest calculator",
    secondaryKeywords: ["simple interest formula", "interest calculator", "principal interest"],
    fields: [
      { id: "principal", label: "Principal", type: "number", unit: "$", placeholder: "5000", required: true, span: 1, min: 0 },
      { id: "rate", label: "Annual rate", type: "number", unit: "%", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Time", type: "number", unit: "years", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "interest", label: "Interest", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "total", label: "Total amount", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Interest = Principal × Rate × Time ÷ 100",
    explanation:
      "Simple interest is the charge or earning calculated only on the original principal, never on interest that has already accrued, which makes it the most transparent way to price short-term borrowing and lending. The interest figure shown here is the flat cost of using a sum of money for a set time, and the total is that principal plus the interest you owe or earn. Knowing it matters because many everyday arrangements — a short personal loan, a car loan, a promissory note between individuals, or a fixed-term deposit — use exactly this method, so the number is not an approximation but the real amount. This simple interest calculator multiplies the principal by the annual rate and the length of time, the definition used because interest here is strictly proportional to how much you borrow and for how long, with nothing compounding on top. Lenders, students and anyone settling a small private loan use a simple interest calculator to check a quoted figure, plan repayments, or compare a flat-rate offer against a compounding one. Because it never adds interest onto interest, a simple interest calculator will always show a lower balance than a compounding account at the same rate over the same period, a gap that widens as the term lengthens.",
    formulaExplanation:
      "Principal is the sum borrowed or invested, rate is the annual percentage cost, and time is the number of years the money is outstanding. Multiplying the three ties interest directly to size and duration — double the principal or double the time and the interest doubles too. Dividing by 100 converts the rate from a percentage into a decimal. Nothing is compounded, so the principal that earns interest stays fixed throughout the term.",
    example: {
      inputs: { principal: 5000, rate: 5, years: 3 },
      explanation: "5000 × 5 × 3 ÷ 100 = $750 interest, for a total of $5,750.",
    },
    faqs: [
      { question: "What is the difference between simple and compound interest?", answer: "Simple interest is charged only on the original principal, so it accrues at a constant amount each period and grows in a straight line. Compound interest is charged on the principal plus all interest already added, so it accelerates over time. Over a single year the two are nearly identical, but across many years compounding pulls far ahead. Borrowers benefit from simple interest; savers benefit from compounding." },
      { question: "Can the time be a fraction of a year?", answer: "Yes. Enter a decimal to represent partial years — 0.5 for six months, 0.25 for a quarter, or 1.5 for eighteen months. Because simple interest is directly proportional to time, halving the period simply halves the interest. This makes the method convenient for short loans and notes measured in months rather than full years, where compounding would add little and complicate the arithmetic." },
      { question: "Where is simple interest actually used?", answer: "It appears in many short-term and fixed arrangements: some personal and auto loans, promissory notes between individuals, certain bonds and Treasury instruments, retailer financing, and short bank certificates. Late-payment charges are often simple interest too. It is favored wherever transparency matters and the term is short enough that compounding would make a negligible difference, since a flat, predictable charge is easier for both sides to agree on and verify." },
      { question: "How do I calculate the total repayment?", answer: "Add the interest to the original principal. The tool does this for you: it computes principal times rate times time divided by 100 to get the interest, then adds the principal back to show the total amount due at the end of the term. That total is what a borrower repays in full at maturity, or what a fixed-term deposit is worth when it matures, assuming no extra payments along the way." },
      { question: "Does simple interest ever benefit the borrower?", answer: "Yes, compared with a compounding loan at the same rate. Because interest never stacks on prior interest, the balance a borrower owes grows more slowly, so the total cost is lower over an identical term. This is why simple-interest financing is attractive for buyers, and why paying such a loan off early is straightforward — you only owe interest for the days the principal was actually outstanding." },
    ],
    slugEs: "calculadora-de-interes-simple",
    titleEs: "Calculadora de Interés Simple",
    shortDescriptionEs: "Calcula el interés simple sobre un capital.",
    seoTitleEs: "Calculadora de Interés Simple — Herramienta Gratis en Línea",
    metaDescriptionEs:
      "Calculadora de interés simple gratis. Encuentra el interés y el monto total a partir del capital, la tasa y el tiempo con la fórmula del interés simple.",
    primaryKeywordEs: "calculadora de interés simple",
    secondaryKeywordsEs: ["fórmula de interés simple", "calculadora de interés", "capital e interés"],
    formulaExplanationEs:
      "El capital es la suma prestada o invertida, la tasa es el costo porcentual anual y el tiempo es el número de años que el dinero está pendiente. Multiplicar los tres vincula el interés directamente al tamaño y la duración — duplica el capital o duplica el tiempo y el interés también se duplica. Dividir entre 100 convierte la tasa de porcentaje a decimal. Nada se capitaliza, por lo que el capital que genera interés permanece fijo durante todo el plazo.",
    explanationEs:
      "El interés simple es el cargo o la ganancia calculada únicamente sobre el capital original, nunca sobre el interés ya acumulado, lo que lo convierte en la forma más transparente de fijar el precio de un préstamo o inversión a corto plazo. La cifra de interés que se muestra aquí es el costo plano de usar una suma de dinero durante un tiempo determinado, y el total es ese capital más el interés que debes o ganas. Conocerlo importa porque muchos acuerdos cotidianos — un préstamo personal breve, un préstamo de auto, un pagaré entre particulares o un depósito a plazo fijo — usan exactamente este método, así que el número no es una aproximación sino la cantidad real. Esta calculadora de interés simple multiplica el capital por la tasa anual y por el tiempo, la definición usada porque aquí el interés es estrictamente proporcional a cuánto pides prestado y por cuánto tiempo, sin nada que se capitalice encima. Prestamistas, estudiantes y cualquiera que salde un pequeño préstamo privado usan una calculadora de interés simple para verificar una cifra cotizada, planificar pagos o comparar una oferta de tasa plana con una que capitaliza. Como nunca suma interés sobre interés, una calculadora de interés simple siempre mostrará un saldo menor que una cuenta con capitalización a la misma tasa durante el mismo periodo, una brecha que se ensancha a medida que el plazo se alarga.",
    exampleEs: {
      inputs: { principal: 5000, rate: 5, years: 3 },
      explanation: "5000 × 5 × 3 ÷ 100 = $750 de interés, para un total de $5,750.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre interés simple y compuesto?", answer: "El interés simple se cobra solo sobre el capital original, así que se acumula en una cantidad constante cada periodo y crece en línea recta. El interés compuesto se cobra sobre el capital más todo el interés ya añadido, así que se acelera con el tiempo. En un solo año ambos son casi idénticos, pero a lo largo de muchos años el compuesto se adelanta mucho. A los prestatarios les beneficia el simple; a los ahorradores les beneficia el compuesto." },
      { question: "¿El tiempo puede ser una fracción de año?", answer: "Sí. Ingresa un decimal para representar años parciales — 0.5 para seis meses, 0.25 para un trimestre o 1.5 para dieciocho meses. Como el interés simple es directamente proporcional al tiempo, reducir el periodo a la mitad simplemente reduce el interés a la mitad. Esto hace el método conveniente para préstamos y pagarés cortos medidos en meses en vez de años completos, donde capitalizar aportaría poco y complicaría la aritmética." },
      { question: "¿Dónde se usa realmente el interés simple?", answer: "Aparece en muchos acuerdos a corto plazo y fijos: algunos préstamos personales y de auto, pagarés entre particulares, ciertos bonos e instrumentos del Tesoro, financiamiento minorista y certificados bancarios cortos. Los recargos por pago tardío suelen ser interés simple también. Se prefiere donde importa la transparencia y el plazo es lo bastante corto para que capitalizar marque una diferencia insignificante, ya que un cargo plano y predecible es más fácil de acordar y verificar para ambas partes." },
      { question: "¿Cómo calculo el reembolso total?", answer: "Suma el interés al capital original. La herramienta lo hace por ti: calcula capital por tasa por tiempo dividido entre 100 para obtener el interés, y luego vuelve a sumar el capital para mostrar el monto total adeudado al final del plazo. Ese total es lo que un prestatario reembolsa en su totalidad al vencimiento, o lo que vale un depósito a plazo fijo cuando vence, suponiendo que no haya pagos adicionales por el camino." },
      { question: "¿El interés simple alguna vez beneficia al prestatario?", answer: "Sí, comparado con un préstamo que capitaliza a la misma tasa. Como el interés nunca se apila sobre el interés anterior, el saldo que debe un prestatario crece más despacio, así que el costo total es menor en un plazo idéntico. Por eso el financiamiento de interés simple es atractivo para los compradores, y por eso pagar ese préstamo por adelantado es sencillo — solo debes interés por los días que el capital realmente estuvo pendiente." },
    ],
    relatedCalculators: ["compound-interest-calculator", "loan-calculator", "savings-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Standard simple interest formula",
  },
  {
    id: "investment",
    slug: "investment-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Investment Calculator",
    shortDescription: "Project the growth of an investment.",
    seoTitle: "Investment Calculator — Free Growth Projection Tool",
    metaDescription:
      "Free investment calculator. Project the future value of a lump sum plus monthly contributions at an expected annual return.",
    primaryKeyword: "investment calculator",
    secondaryKeywords: ["investment growth calculator", "future value calculator", "portfolio growth"],
    fields: [
      { id: "principal", label: "Initial investment", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "contribution", label: "Monthly contribution", type: "number", unit: "$", placeholder: "300", required: false, span: 1, min: 0 },
      { id: "rate", label: "Annual return", type: "number", unit: "%", placeholder: "8", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years", type: "number", placeholder: "15", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "futureValue", label: "Future value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalContributions", label: "Total invested", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalEarnings", label: "Total earnings", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "FV = P(1 + i)^n + PMT × [((1 + i)^n − 1) ÷ i], i = annual ÷ 12",
    explanation:
      "The future value shown here is the projected worth of a portfolio that starts with a lump sum and receives steady monthly contributions, all growing at your expected annual return. It matters because it turns an abstract savings habit into a concrete target: you can see what regular investing might become over a decade or two and how much of that balance is your own money versus compounded earnings. This investment calculator grows the starting amount and each contribution at the monthly equivalent of your annual return, then sums them, because a real portfolio earns returns that are themselves reinvested to earn more — the engine of long-term growth. The future-value formula is used precisely because it captures that reinvestment, treating the initial sum as compounding and the contributions as a monthly annuity added on top. Individual investors, retirement savers and advisors use an investment calculator to set contribution levels, test how sensitive the outcome is to the assumed return, and weigh investing a windfall now against drip-feeding it over time. Since markets rise and fall and no return is guaranteed, treat any figure from an investment calculator as a nominal, pre-tax planning estimate; running a conservative and an optimistic rate brackets the realistic range better than trusting a single projection.",
    formulaExplanation:
      "P is the initial investment and i is the monthly return, so P(1 + i)^n compounds the lump sum across n months. Each monthly contribution PMT is its own small deposit that compounds for the months remaining, and the bracketed annuity term ((1 + i)^n − 1) ÷ i sums all of them. Adding the two gives the total. The exponential factors capture returns being reinvested, which is why later years contribute so much more growth than early ones.",
    example: {
      inputs: { principal: 10000, contribution: 300, rate: 8, years: 15 },
      explanation: "$10,000 plus $300/month at 8% for 15 years grows to about $135,000, of which roughly $71,000 is earnings.",
    },
    faqs: [
      { question: "What annual return should I assume?", answer: "It depends entirely on what you hold. A broad, diversified stock index has historically averaged roughly 7–10% a year before inflation over long periods, while bonds return less and cash barely keeps pace with prices. A balanced portfolio sits in between. Choose a rate that matches your actual mix, and lean conservative for planning. Past performance is not a promise, so test a lower rate to see the downside." },
      { question: "Does this account for inflation and taxes?", answer: "No. The projection is nominal and pre-tax, meaning it shows dollars without adjusting for rising prices or the tax owed on gains. Real purchasing power will be lower — at 3% inflation, money roughly halves in value over 24 years. Taxes further reduce returns unless the money sits in a tax-advantaged account like an IRA or 401(k). Subtract an estimate for both to gauge what the balance will truly buy." },
      { question: "How accurate is an investment calculator?", answer: "The arithmetic is exact, but the result is only as good as the return you assume. Real markets do not deliver a smooth, constant rate; they swing, and the order of good and bad years affects outcomes the model cannot show. Treat the figure as a reasonable midpoint for planning, not a forecast. Running several rates and revisiting the projection as your contributions and markets change keeps it useful." },
      { question: "Is it better to invest a lump sum or contribute monthly?", answer: "Mathematically, investing a lump sum sooner usually wins, because the full amount compounds for longer. In practice, spreading contributions — dollar-cost averaging — reduces the risk of buying everything just before a downturn and suits people paid monthly. This tool models both at once: a starting amount plus ongoing deposits. If you have a windfall and a long horizon, investing more of it early tends to produce the larger balance." },
      { question: "How often are contributions compounded here?", answer: "Monthly. Each contribution is treated as an end-of-month deposit that then compounds at the monthly equivalent of your annual return for the rest of the period. This mirrors how most people actually invest — a fixed amount from each paycheck — and how brokerage and retirement accounts credit growth. Compounding more frequently than monthly changes the result only marginally, so the monthly convention is both realistic and accurate enough for planning." },
    ],
    slugEs: "calculadora-de-inversion",
    titleEs: "Calculadora de Inversión",
    shortDescriptionEs: "Proyecta el crecimiento de una inversión.",
    seoTitleEs: "Calculadora de Inversión — Herramienta Gratis de Proyección de Crecimiento",
    metaDescriptionEs:
      "Calculadora de inversión gratis. Proyecta el valor futuro de una suma inicial más aportes mensuales con un rendimiento anual esperado.",
    primaryKeywordEs: "calculadora de inversión",
    secondaryKeywordsEs: ["calculadora de crecimiento de inversión", "calculadora de valor futuro", "crecimiento de portafolio"],
    formulaExplanationEs:
      "P es la inversión inicial e i es el rendimiento mensual, así que P(1 + i)^n capitaliza la suma inicial a lo largo de n meses. Cada aporte mensual PMT es su propio pequeño depósito que se capitaliza durante los meses restantes, y el término de anualidad entre corchetes ((1 + i)^n − 1) ÷ i suma todos ellos. Sumar ambos da el total. Los factores exponenciales capturan que los rendimientos se reinvierten, por lo que los años posteriores aportan mucho más crecimiento que los primeros.",
    explanationEs:
      "El valor futuro que se muestra aquí es el valor proyectado de un portafolio que empieza con una suma inicial y recibe aportes mensuales constantes, todo creciendo a tu rendimiento anual esperado. Importa porque convierte un hábito de ahorro abstracto en una meta concreta: puedes ver en qué podría convertirse la inversión regular a lo largo de una o dos décadas y qué parte de ese saldo es tu propio dinero frente a las ganancias capitalizadas. Esta calculadora de inversión hace crecer la cantidad inicial y cada aporte al equivalente mensual de tu rendimiento anual, y luego los suma, porque un portafolio real gana rendimientos que a su vez se reinvierten para generar más — el motor del crecimiento a largo plazo. La fórmula del valor futuro se usa precisamente porque captura esa reinversión, tratando la suma inicial como capitalizada y los aportes como una anualidad mensual añadida encima. Inversionistas individuales, ahorradores para el retiro y asesores usan una calculadora de inversión para fijar niveles de aporte, probar qué tan sensible es el resultado al rendimiento supuesto y sopesar invertir un dinero extra ahora frente a repartirlo con el tiempo. Como los mercados suben y bajan y ningún rendimiento está garantizado, trata cualquier cifra de una calculadora de inversión como una estimación nominal antes de impuestos; usar una tasa conservadora y una optimista delimita mejor el rango realista que confiar en una sola proyección.",
    exampleEs: {
      inputs: { principal: 10000, contribution: 300, rate: 8, years: 15 },
      explanation: "$10,000 más $300/mes al 8% durante 15 años crecen a unos $135,000, de los cuales aproximadamente $71,000 son ganancias.",
    },
    faqsEs: [
      { question: "¿Qué rendimiento anual debo suponer?", answer: "Depende por completo de lo que tengas. Un índice bursátil amplio y diversificado históricamente ha promediado alrededor de 7–10% al año antes de la inflación en periodos largos, mientras que los bonos rinden menos y el efectivo apenas sigue el ritmo de los precios. Un portafolio equilibrado queda en medio. Elige una tasa que coincida con tu mezcla real y sé conservador para planificar. El rendimiento pasado no es una promesa, así que prueba una tasa menor para ver el escenario adverso." },
      { question: "¿Esto tiene en cuenta la inflación y los impuestos?", answer: "No. La proyección es nominal y antes de impuestos, es decir, muestra dólares sin ajustar por el alza de precios ni por el impuesto sobre las ganancias. El poder adquisitivo real será menor — con 3% de inflación, el dinero pierde aproximadamente la mitad de su valor en 24 años. Los impuestos reducen más el rendimiento salvo que el dinero esté en una cuenta con ventajas fiscales como una IRA o un 401(k). Resta una estimación de ambos para saber cuánto comprará realmente el saldo." },
      { question: "¿Qué tan precisa es una calculadora de inversión?", answer: "La aritmética es exacta, pero el resultado es tan bueno como el rendimiento que supongas. Los mercados reales no entregan una tasa suave y constante; oscilan, y el orden de los buenos y malos años afecta resultados que el modelo no puede mostrar. Trata la cifra como un punto medio razonable para planificar, no como un pronóstico. Probar varias tasas y revisar la proyección conforme cambian tus aportes y los mercados la mantiene útil." },
      { question: "¿Es mejor invertir una suma única o aportar mensualmente?", answer: "Matemáticamente, invertir una suma única antes suele ganar, porque la cantidad completa se capitaliza durante más tiempo. En la práctica, repartir los aportes — el costo promedio en dólares — reduce el riesgo de comprarlo todo justo antes de una caída y conviene a quienes cobran cada mes. Esta herramienta modela ambos a la vez: una cantidad inicial más depósitos continuos. Si tienes un dinero extra y un horizonte largo, invertir más temprano tiende a producir el saldo mayor." },
      { question: "¿Con qué frecuencia se capitalizan aquí los aportes?", answer: "Mensualmente. Cada aporte se trata como un depósito de fin de mes que luego se capitaliza al equivalente mensual de tu rendimiento anual durante el resto del periodo. Esto refleja cómo invierte la mayoría — una cantidad fija de cada cheque — y cómo acreditan el crecimiento las cuentas de corretaje y de retiro. Capitalizar con más frecuencia que mensual cambia el resultado solo marginalmente, así que la convención mensual es realista y lo bastante precisa para planificar." },
    ],
    relatedCalculators: ["compound-interest-calculator", "savings-calculator", "roi-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "savings",
    slug: "savings-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Savings Calculator",
    shortDescription: "See how regular saving adds up over time.",
    seoTitle: "Savings Calculator — Free Savings Growth Tool",
    metaDescription:
      "Free savings calculator. See how a starting balance plus monthly deposits grow with interest, and how much of the total is interest.",
    primaryKeyword: "savings calculator",
    secondaryKeywords: ["savings goal calculator", "monthly savings", "savings interest calculator"],
    fields: [
      { id: "start", label: "Starting balance", type: "number", unit: "$", placeholder: "1000", required: false, span: 1, min: 0 },
      { id: "monthly", label: "Monthly deposit", type: "number", unit: "$", placeholder: "250", required: true, span: 1, min: 0 },
      { id: "rate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "4", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years", type: "number", placeholder: "10", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "futureValue", label: "Future balance", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalDeposited", label: "Total deposited", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "interestEarned", label: "Interest earned", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "FV = start(1 + i)^n + deposit × [((1 + i)^n − 1) ÷ i], i = annual ÷ 12",
    explanation:
      "The future balance shown here is what a savings account is projected to hold once a starting amount and a stream of monthly deposits have grown at the account's interest rate. It matters because it makes the payoff of a consistent saving habit visible: you can see a modest weekly or monthly deposit build into a meaningful sum and watch interest quietly do part of the work. This savings calculator compounds your opening balance and every deposit at the monthly equivalent of the annual rate, then reports both the ending balance and how much of it is interest rather than money you put in. Compounding is the reason for the formula — interest is credited to the balance and then earns interest itself, so the account grows a little faster each period. A savings calculator uses the annuity future-value method because your deposits form a regular series, each one compounding for the time that remains. Households use a savings calculator to plan for an emergency fund, a down payment, a holiday or a wedding, to compare accounts by their real yield, and to decide how much to set aside each month. For a fixed-rate account the figure is dependable; on a variable-rate account the true outcome shifts as the rate changes.",
    formulaExplanation:
      "The starting balance compounds on its own as start × (1 + i)^n, where i is the monthly rate and n the number of months. Each monthly deposit is a separate contribution that compounds for the months left before the end, and the bracketed term ((1 + i)^n − 1) ÷ i totals that whole series at once. Summing the two gives the future balance. The exponents encode interest earning interest, which is why later deposits add less than early ones.",
    example: {
      inputs: { start: 1000, monthly: 250, rate: 4, years: 10 },
      explanation: "$1,000 plus $250/month at 4% for 10 years reaches about $38,300, with roughly $6,800 of interest.",
    },
    faqs: [
      { question: "What interest rate should I enter?", answer: "Use the annual percentage yield, or APY, that your savings account, money market or certificate of deposit actually pays, since APY already reflects how often interest compounds. High-yield online savings accounts typically pay several times more than the national average at big banks, so it pays to shop. Rates on variable accounts move with central bank policy, so revisit the projection when your account's rate changes to keep it realistic." },
      { question: "What is a good amount to save each month?", answer: "A common guideline is to save 20% of take-home pay, split between retirement and shorter-term goals, but the right figure is whatever you can sustain consistently. Start with an amount that does not strain your budget and increase it whenever income rises or a debt is paid off. Because deposits compound, raising your monthly contribution early has an outsized effect on the final balance, more than a higher rate usually does." },
      { question: "How much should I keep in an emergency fund?", answer: "Most planners suggest three to six months of essential living expenses, held in an easily accessible savings account rather than invested, so it is there when you need it. If your income is variable or your job less secure, aim for the higher end. Enter your monthly expense target and a realistic timeline here to see the deposit needed to build it, then automate that transfer so the fund grows without effort." },
      { question: "Are deposits and interest applied monthly?", answer: "Yes. This tool treats each deposit as an end-of-month addition and compounds interest monthly, which matches how most savings accounts operate. That timing means a deposit does not earn interest for the month it arrives, only the months after — a small, realistic detail. If your account credits interest daily, the difference over a year is minor, so the monthly convention remains an accurate basis for planning your goal." },
      { question: "Is the projected balance guaranteed?", answer: "For a fixed-rate account or a certificate of deposit held to maturity, the math is dependable and the balance will land where the tool shows, assuming you make every deposit. For a variable-rate savings account, the outcome shifts whenever the bank changes its rate, so treat that figure as an estimate. Either way, deposits held at an insured bank up to the coverage limit carry no risk of loss to the principal." },
    ],
    slugEs: "calculadora-de-ahorros",
    titleEs: "Calculadora de Ahorros",
    shortDescriptionEs: "Mira cómo el ahorro regular suma con el tiempo.",
    seoTitleEs: "Calculadora de Ahorros — Herramienta Gratis de Crecimiento del Ahorro",
    metaDescriptionEs:
      "Calculadora de ahorros gratis. Mira cómo un saldo inicial más depósitos mensuales crecen con interés, y qué parte del total es interés.",
    primaryKeywordEs: "calculadora de ahorros",
    secondaryKeywordsEs: ["calculadora de meta de ahorro", "ahorro mensual", "calculadora de interés del ahorro"],
    formulaExplanationEs:
      "El saldo inicial se capitaliza por su cuenta como saldo × (1 + i)^n, donde i es la tasa mensual y n el número de meses. Cada depósito mensual es un aporte independiente que se capitaliza durante los meses que faltan antes del final, y el término entre corchetes ((1 + i)^n − 1) ÷ i totaliza toda esa serie de una vez. Sumar ambos da el saldo futuro. Los exponentes codifican el interés generando interés, por eso los depósitos posteriores suman menos que los primeros.",
    explanationEs:
      "El saldo futuro que se muestra aquí es lo que se proyecta que tendrá una cuenta de ahorros una vez que una cantidad inicial y un flujo de depósitos mensuales hayan crecido a la tasa de interés de la cuenta. Importa porque hace visible la recompensa de un hábito de ahorro constante: puedes ver un depósito semanal o mensual modesto convertirse en una suma significativa y observar cómo el interés hace en silencio parte del trabajo. Esta calculadora de ahorros capitaliza tu saldo inicial y cada depósito al equivalente mensual de la tasa anual, y luego reporta tanto el saldo final como cuánto de él es interés en lugar de dinero que aportaste. La capitalización es la razón de la fórmula — el interés se acredita al saldo y luego genera interés por sí mismo, así que la cuenta crece un poco más rápido cada periodo. Una calculadora de ahorros usa el método del valor futuro de una anualidad porque tus depósitos forman una serie regular, cada uno capitalizándose durante el tiempo restante. Los hogares usan una calculadora de ahorros para planificar un fondo de emergencia, un enganche, unas vacaciones o una boda, para comparar cuentas por su rendimiento real y para decidir cuánto apartar cada mes. Para una cuenta de tasa fija la cifra es confiable; en una cuenta de tasa variable el resultado real cambia conforme cambia la tasa.",
    exampleEs: {
      inputs: { start: 1000, monthly: 250, rate: 4, years: 10 },
      explanation: "$1,000 más $250/mes al 4% durante 10 años alcanzan unos $38,300, con aproximadamente $6,800 de interés.",
    },
    faqsEs: [
      { question: "¿Qué tasa de interés debo ingresar?", answer: "Usa el rendimiento porcentual anual, o APY, que realmente paga tu cuenta de ahorros, cuenta de mercado monetario o certificado de depósito, ya que el APY ya refleja con qué frecuencia se capitaliza el interés. Las cuentas de ahorro de alto rendimiento en línea suelen pagar varias veces más que el promedio nacional de los grandes bancos, así que conviene comparar. Las tasas de las cuentas variables se mueven con la política del banco central, así que revisa la proyección cuando cambie la tasa de tu cuenta." },
      { question: "¿Cuánto es un buen monto para ahorrar cada mes?", answer: "Una guía común es ahorrar el 20% del ingreso neto, repartido entre el retiro y metas de más corto plazo, pero la cifra correcta es la que puedas sostener con constancia. Empieza con una cantidad que no tense tu presupuesto y auméntala cada vez que suba tu ingreso o pagues una deuda. Como los depósitos se capitalizan, elevar temprano tu aporte mensual tiene un efecto desproporcionado en el saldo final, más que una tasa mayor por lo general." },
      { question: "¿Cuánto debo tener en un fondo de emergencia?", answer: "La mayoría de los planificadores sugieren de tres a seis meses de gastos esenciales de vida, guardados en una cuenta de ahorros de fácil acceso en vez de invertidos, para que estén ahí cuando los necesites. Si tu ingreso es variable o tu empleo menos seguro, apunta al extremo alto. Ingresa aquí tu meta de gastos mensuales y un plazo realista para ver el depósito necesario para construirlo, y luego automatiza esa transferencia para que el fondo crezca sin esfuerzo." },
      { question: "¿Los depósitos y el interés se aplican mensualmente?", answer: "Sí. Esta herramienta trata cada depósito como una adición de fin de mes y capitaliza el interés mensualmente, lo que coincide con cómo operan la mayoría de las cuentas de ahorro. Ese momento significa que un depósito no genera interés durante el mes en que llega, solo los meses posteriores — un detalle pequeño y realista. Si tu cuenta acredita interés a diario, la diferencia a lo largo de un año es menor, así que la convención mensual sigue siendo una base precisa para planificar tu meta." },
      { question: "¿El saldo proyectado está garantizado?", answer: "Para una cuenta de tasa fija o un certificado de depósito mantenido hasta el vencimiento, la matemática es confiable y el saldo caerá donde muestra la herramienta, suponiendo que hagas cada depósito. Para una cuenta de ahorros de tasa variable, el resultado cambia cada vez que el banco modifica su tasa, así que trata esa cifra como una estimación. En cualquier caso, los depósitos en un banco asegurado hasta el límite de cobertura no corren riesgo de pérdida del capital." },
    ],
    relatedCalculators: ["compound-interest-calculator", "investment-calculator", "simple-interest-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "profit-margin",
    slug: "profit-margin-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Profit Margin Calculator",
    shortDescription: "Find profit, margin and markup from revenue and cost.",
    seoTitle: "Profit Margin Calculator — Free Margin & Markup Tool",
    metaDescription:
      "Free profit margin calculator. Enter revenue and cost to get profit, profit margin percentage and markup percentage instantly, ideal for pricing.",
    primaryKeyword: "profit margin calculator",
    secondaryKeywords: ["margin calculator", "gross margin calculator", "markup vs margin"],
    fields: [
      { id: "revenue", label: "Revenue (selling price)", type: "number", unit: "$", placeholder: "100", required: true, span: 1, min: 0, step: 0.01 },
      { id: "cost", label: "Cost", type: "number", unit: "$", placeholder: "60", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "margin", label: "Profit margin", format: "percentage", decimals: 2, isPrimary: true },
      { id: "profit", label: "Profit", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "markup", label: "Markup", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "Margin = (revenue − cost) ÷ revenue × 100 · Markup = (revenue − cost) ÷ cost × 100",
    explanation:
      "Profit margin is the share of each sale you keep as profit after covering the cost of what you sold, expressed as a percentage of the selling price. That percentage matters more than the raw dollar profit because it reveals how efficiently a product turns revenue into earnings and lets you compare items priced very differently on equal terms. This profit margin calculator takes revenue minus cost to find the profit, divides by revenue to give the margin, and also divides by cost to give the markup — the same profit viewed from two angles. Margin is measured against the selling price because that is the money actually flowing in, which is the convention accountants and investors use when they judge a business's health. Because the selling price is always larger than the cost, the profit margin calculator will show a margin that is lower than the markup for the identical sale, the exact reason the two figures are so often confused. Retailers, wholesalers, freelancers and e-commerce sellers use a profit margin calculator to set prices, screen which products are worth stocking, and benchmark themselves against competitors. Whether the result is a gross or net margin depends on the cost you enter — cost of goods alone gives gross margin, while all-in costs give net.",
    formulaExplanation:
      "Revenue minus cost isolates the profit on the sale. Margin divides that profit by revenue, so it answers how much of every sales dollar you keep, which is why the denominator is the selling price. Markup instead divides the same profit by cost, answering how much you added on top of what you paid. Multiplying by 100 makes each a percentage. The shared numerator over different denominators is why margin is always the smaller figure.",
    example: {
      inputs: { revenue: 100, cost: 60 },
      explanation: "Profit = $40. Margin = 40 ÷ 100 = 40%. Markup = 40 ÷ 60 ≈ 66.7%.",
    },
    faqs: [
      { question: "What is a good profit margin?", answer: "It varies enormously by industry, so judge yours against direct peers rather than a single benchmark. Grocery and other retail often survive on net margins in the low single digits, restaurants sit around 3–9%, while software and consulting can exceed 20% or more. As a rough guide across small businesses, a 10% net margin is considered healthy and 20% is strong. What counts is a margin that covers all costs and still funds growth." },
      { question: "What is the difference between margin and markup?", answer: "Both start from the same profit, but they use different denominators. Margin divides profit by the selling price and tells you what fraction of revenue you keep. Markup divides profit by the cost and tells you how much you added over what you paid. For a profitable sale markup is always the larger percentage. A 40% margin equals a roughly 67% markup on the same item, so never quote one thinking it is the other." },
      { question: "Is this gross or net profit margin?", answer: "That depends on the cost you enter. If you use only the cost of goods sold — materials and direct production — the result is gross margin. If you enter all costs, including overhead, marketing, shipping and fees, you get something closer to net margin. Gross margin shows product-level profitability; net margin shows what the business actually keeps after every expense. Be consistent about which costs you include when comparing products." },
      { question: "How do I increase my profit margin?", answer: "Two levers move it: raise the price or lower the cost. Modest price increases often lift margin more than chasing volume, provided demand holds. On the cost side, negotiate with suppliers, cut waste, or find cheaper inputs without hurting quality. Dropping low-margin products and focusing on high-margin ones also raises the blended figure. Track margin per product, not just overall, so you know which items are actually carrying the business." },
      { question: "Can margin ever be negative?", answer: "Yes. If your cost exceeds the selling price, the profit is negative and so is the margin, meaning you lose money on every unit sold. This happens with clearance items priced below cost, mispriced products, or when unexpected costs erode a thin margin. A negative margin is a clear signal to raise the price, reduce the cost, or discontinue the product, unless you are deliberately selling at a loss to attract customers." },
    ],
    slugEs: "calculadora-de-margen-de-ganancia",
    titleEs: "Calculadora de Margen de Ganancia",
    shortDescriptionEs: "Halla ganancia, margen y markup desde ingresos y costo.",
    seoTitleEs: "Calculadora de Margen de Ganancia — Herramienta Gratis de Margen y Markup",
    metaDescriptionEs:
      "Calculadora de margen de ganancia gratis. Ingresa los ingresos y el costo para obtener la ganancia, el porcentaje de margen y el porcentaje de markup.",
    primaryKeywordEs: "calculadora de margen de ganancia",
    secondaryKeywordsEs: ["calculadora de margen", "calculadora de margen bruto", "markup vs margen"],
    formulaExplanationEs:
      "Ingresos menos costo aísla la ganancia de la venta. El margen divide esa ganancia entre los ingresos, así que responde cuánto de cada dólar de venta te quedas, por eso el denominador es el precio de venta. El markup, en cambio, divide la misma ganancia entre el costo, respondiendo cuánto añadiste sobre lo que pagaste. Multiplicar por 100 convierte cada uno en porcentaje. El numerador compartido sobre denominadores distintos es la razón de que el margen sea siempre la cifra menor.",
    explanationEs:
      "El margen de ganancia es la parte de cada venta que te quedas como ganancia tras cubrir el costo de lo que vendiste, expresado como porcentaje del precio de venta. Ese porcentaje importa más que la ganancia bruta en dólares porque revela con qué eficiencia un producto convierte los ingresos en ganancias y te permite comparar en igualdad de condiciones artículos con precios muy distintos. Esta calculadora de margen de ganancia toma los ingresos menos el costo para hallar la ganancia, la divide entre los ingresos para dar el margen, y también la divide entre el costo para dar el markup — la misma ganancia vista desde dos ángulos. El margen se mide contra el precio de venta porque ese es el dinero que realmente entra, que es la convención que usan contadores e inversionistas al juzgar la salud de un negocio. Como el precio de venta siempre es mayor que el costo, la calculadora de margen de ganancia mostrará un margen menor que el markup para la misma venta, la razón exacta por la que ambas cifras se confunden tan a menudo. Minoristas, mayoristas, freelancers y vendedores de comercio electrónico usan una calculadora de margen de ganancia para fijar precios, filtrar qué productos vale la pena tener en stock y compararse con la competencia. Que el resultado sea un margen bruto o neto depende del costo que ingreses — solo el costo de los bienes da el margen bruto, mientras que los costos totales dan el neto.",
    exampleEs: {
      inputs: { revenue: 100, cost: 60 },
      explanation: "Ganancia = $40. Margen = 40 ÷ 100 = 40%. Markup = 40 ÷ 60 ≈ 66.7%.",
    },
    faqsEs: [
      { question: "¿Qué es un buen margen de ganancia?", answer: "Varía enormemente según la industria, así que juzga el tuyo frente a pares directos en lugar de un único punto de referencia. El supermercado y otro comercio minorista suelen sobrevivir con márgenes netos de un dígito bajo, los restaurantes rondan el 3–9%, mientras que el software y la consultoría pueden superar el 20% o más. Como guía aproximada entre pequeños negocios, un margen neto del 10% se considera saludable y el 20% fuerte. Lo que cuenta es un margen que cubra todos los costos y aún financie el crecimiento." },
      { question: "¿Cuál es la diferencia entre margen y markup?", answer: "Ambos parten de la misma ganancia, pero usan denominadores distintos. El margen divide la ganancia entre el precio de venta y te dice qué fracción de los ingresos te quedas. El markup divide la ganancia entre el costo y te dice cuánto añadiste sobre lo que pagaste. Para una venta con ganancia el markup siempre es el porcentaje mayor. Un margen del 40% equivale a un markup de aproximadamente 67% en el mismo artículo, así que nunca cites uno pensando que es el otro." },
      { question: "¿Es este el margen de ganancia bruto o neto?", answer: "Eso depende del costo que ingreses. Si usas solo el costo de los bienes vendidos — materiales y producción directa — el resultado es el margen bruto. Si ingresas todos los costos, incluyendo gastos generales, marketing, envío y comisiones, obtienes algo más cercano al margen neto. El margen bruto muestra la rentabilidad a nivel de producto; el margen neto muestra lo que el negocio realmente conserva tras cada gasto. Sé consistente sobre qué costos incluyes al comparar productos." },
      { question: "¿Cómo aumento mi margen de ganancia?", answer: "Dos palancas lo mueven: subir el precio o bajar el costo. Aumentos de precio modestos suelen elevar el margen más que perseguir volumen, siempre que la demanda se mantenga. Del lado del costo, negocia con proveedores, reduce desperdicios o encuentra insumos más baratos sin dañar la calidad. Dejar productos de bajo margen y enfocarte en los de alto margen también eleva la cifra combinada. Rastrea el margen por producto, no solo el general, para saber qué artículos realmente sostienen el negocio." },
      { question: "¿El margen puede ser negativo?", answer: "Sí. Si tu costo supera el precio de venta, la ganancia es negativa y también lo es el margen, lo que significa que pierdes dinero en cada unidad vendida. Esto ocurre con artículos de liquidación con precio por debajo del costo, productos mal fijados, o cuando costos inesperados erosionan un margen delgado. Un margen negativo es una señal clara de subir el precio, reducir el costo o descontinuar el producto, salvo que estés vendiendo con pérdida deliberadamente para atraer clientes." },
    ],
    relatedCalculators: ["markup-calculator", "break-even-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Standard financial formula",
  },
  {
    id: "markup",
    slug: "markup-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Markup Calculator",
    shortDescription: "Set a selling price from cost and markup.",
    seoTitle: "Markup Calculator — Free Selling Price Calculator",
    metaDescription:
      "Free markup calculator. Enter a cost and markup percentage to get the selling price, profit and resulting profit margin.",
    primaryKeyword: "markup calculator",
    secondaryKeywords: ["markup percentage", "selling price calculator", "cost plus pricing"],
    fields: [
      { id: "cost", label: "Cost", type: "number", unit: "$", placeholder: "60", required: true, span: 1, min: 0, step: 0.01 },
      { id: "markup", label: "Markup", type: "number", unit: "%", placeholder: "50", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "price", label: "Selling price", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "profit", label: "Profit", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "margin", label: "Resulting margin", format: "percentage", decimals: 2, isPrimary: false },
    ],
    formula: "Price = cost × (1 + markup ÷ 100)",
    explanation:
      "Markup is the amount you add on top of what a product costs you to arrive at its selling price, stated as a percentage of that cost. The selling price shown here is the direct result of applying your markup, and it matters because pricing is where a business either builds in enough profit to survive or quietly gives it away. This markup calculator multiplies the cost by one plus your markup percentage to find the price, then reports the dollar profit and the margin that price produces. Markup is expressed against cost because that is the number a seller knows first — you buy or make something for a set amount and decide how much to add — which makes cost-plus pricing the most intuitive method for setting prices quickly. A markup calculator is especially useful for spotting that the resulting margin is always smaller than the markup, since margin is measured against the larger selling price. Retailers, distributors, tradespeople and makers use a markup calculator to price inventory consistently, ensure every item clears its costs, and keep pricing uniform across a catalog. Choosing a markup means balancing your target margin, your overhead, and what the market will actually pay, so the price both covers costs and stays competitive.",
    formulaExplanation:
      "Cost is what you paid, and the markup percentage is how much you add relative to that cost. Dividing markup by 100 converts it to a decimal, and adding 1 keeps the original cost while layering the profit on top, so cost × (1 + markup ÷ 100) returns the full selling price. The profit is the difference between that price and the cost, and dividing profit by the price — not the cost — gives the resulting margin.",
    example: {
      inputs: { cost: 60, markup: 50 },
      explanation: "$60 with a 50% markup sells for $90, a $30 profit and a 33.3% margin.",
    },
    faqs: [
      { question: "How do I choose the right markup?", answer: "Work backward from the margin you need to cover overhead and still profit, then check what competitors charge and what customers will pay. Common retail markups run from 50% on fast-moving goods to well over 100% on specialty or low-volume items; keystone pricing, a 100% markup that doubles cost, is a traditional starting point. Higher markups suit products with strong branding or little competition, while thin markups rely on volume to make money." },
      { question: "Why is the resulting margin lower than the markup?", answer: "Because the two are measured against different bases. Markup is the profit as a percentage of cost, while margin is the same profit as a percentage of the higher selling price. Since the price always exceeds the cost, dividing by the larger number yields a smaller percentage. A 50% markup produces a 33.3% margin; a 100% markup produces a 50% margin. Knowing the pairing prevents you from underpricing by confusing the two." },
      { question: "Is markup the same as profit?", answer: "No. Markup is a percentage that describes how much you add over cost, while profit is the actual dollar amount that addition puts in your pocket. A 50% markup on a $60 item adds $30 of profit and sets the price at $90. The percentage is a pricing rule you apply across products; the dollar profit is the concrete result on a single sale. Both matter, but they answer different questions." },
      { question: "How do I convert a target margin into a markup?", answer: "Divide the desired margin by one minus that margin, both as decimals. To hit a 40% margin, compute 0.40 ÷ 0.60, which is about 0.667, or a 66.7% markup. This is handy when you plan around margin — the profit you keep from revenue — but price using markup applied to cost. This tool does the reverse for you: enter a markup and it displays the margin that results, so you can adjust until the margin matches your goal." },
      { question: "Should the same markup apply to every product?", answer: "Usually not. A flat markup ignores differences in demand, competition, handling costs and turnover. Fast sellers can carry a lower markup because volume makes up for it, while slow-moving or premium items justify a higher one. Perishable or bulky goods may need extra markup to cover waste and storage. Vary the markup by product category so each item earns its keep, and use this tool to check the margin each choice produces." },
    ],
    slugEs: "calculadora-de-markup",
    titleEs: "Calculadora de Markup",
    shortDescriptionEs: "Fija un precio de venta desde el costo y el markup.",
    seoTitleEs: "Calculadora de Markup — Calculadora Gratis de Precio de Venta",
    metaDescriptionEs:
      "Calculadora de markup gratis. Ingresa un costo y un porcentaje de markup para obtener el precio de venta, la ganancia y el margen resultante.",
    primaryKeywordEs: "calculadora de markup",
    secondaryKeywordsEs: ["porcentaje de markup", "calculadora de precio de venta", "precio de costo más margen"],
    formulaExplanationEs:
      "El costo es lo que pagaste, y el porcentaje de markup es cuánto añades respecto a ese costo. Dividir el markup entre 100 lo convierte en decimal, y sumar 1 conserva el costo original mientras coloca la ganancia encima, así que costo × (1 + markup ÷ 100) devuelve el precio de venta completo. La ganancia es la diferencia entre ese precio y el costo, y dividir la ganancia entre el precio — no el costo — da el margen resultante.",
    explanationEs:
      "El markup es la cantidad que añades sobre lo que te cuesta un producto para llegar a su precio de venta, expresado como porcentaje de ese costo. El precio de venta que se muestra aquí es el resultado directo de aplicar tu markup, y importa porque la fijación de precios es donde un negocio o bien incorpora suficiente ganancia para sobrevivir o la regala en silencio. Esta calculadora de markup multiplica el costo por uno más tu porcentaje de markup para hallar el precio, y luego reporta la ganancia en dólares y el margen que ese precio produce. El markup se expresa contra el costo porque ese es el número que un vendedor conoce primero — compras o fabricas algo por una cantidad fija y decides cuánto añadir — lo que hace del precio de costo más margen el método más intuitivo para fijar precios rápidamente. Una calculadora de markup es especialmente útil para notar que el margen resultante siempre es menor que el markup, ya que el margen se mide contra el precio de venta más alto. Minoristas, distribuidores, oficios y fabricantes usan una calculadora de markup para fijar precios de inventario de forma consistente, asegurar que cada artículo cubra sus costos y mantener precios uniformes en todo un catálogo. Elegir un markup significa equilibrar tu margen objetivo, tus gastos generales y lo que el mercado realmente pagará, de modo que el precio cubra costos y siga siendo competitivo.",
    exampleEs: {
      inputs: { cost: 60, markup: 50 },
      explanation: "$60 con un markup del 50% se vende a $90, una ganancia de $30 y un margen del 33.3%.",
    },
    faqsEs: [
      { question: "¿Cómo elijo el markup correcto?", answer: "Trabaja hacia atrás desde el margen que necesitas para cubrir gastos generales y aun así ganar, luego revisa qué cobran los competidores y qué pagarán los clientes. Los markups minoristas comunes van del 50% en bienes de rápido movimiento a más del 100% en artículos especiales o de bajo volumen; el precio keystone, un markup del 100% que duplica el costo, es un punto de partida tradicional. Markups más altos convienen a productos con marca fuerte o poca competencia, mientras que los delgados dependen del volumen para ganar dinero." },
      { question: "¿Por qué el margen resultante es menor que el markup?", answer: "Porque los dos se miden contra bases distintas. El markup es la ganancia como porcentaje del costo, mientras que el margen es la misma ganancia como porcentaje del precio de venta más alto. Como el precio siempre supera al costo, dividir entre el número mayor da un porcentaje menor. Un markup del 50% produce un margen del 33.3%; un markup del 100% produce un margen del 50%. Conocer la equivalencia evita que fijes precios demasiado bajos por confundir ambos." },
      { question: "¿El markup es lo mismo que la ganancia?", answer: "No. El markup es un porcentaje que describe cuánto añades sobre el costo, mientras que la ganancia es la cantidad real en dólares que esa adición pone en tu bolsillo. Un markup del 50% sobre un artículo de $60 añade $30 de ganancia y fija el precio en $90. El porcentaje es una regla de fijación de precios que aplicas a los productos; la ganancia en dólares es el resultado concreto de una sola venta. Ambos importan, pero responden preguntas distintas." },
      { question: "¿Cómo convierto un margen objetivo en un markup?", answer: "Divide el margen deseado entre uno menos ese margen, ambos como decimales. Para lograr un margen del 40%, calcula 0.40 ÷ 0.60, que es aproximadamente 0.667, o un markup del 66.7%. Esto es útil cuando planificas en torno al margen — la ganancia que te quedas de los ingresos — pero fijas el precio usando markup aplicado al costo. Esta herramienta hace lo inverso por ti: ingresa un markup y muestra el margen resultante, para que ajustes hasta que el margen coincida con tu meta." },
      { question: "¿Debe aplicarse el mismo markup a cada producto?", answer: "Por lo general no. Un markup plano ignora las diferencias en demanda, competencia, costos de manejo y rotación. Los productos de venta rápida pueden llevar un markup menor porque el volumen lo compensa, mientras que los artículos lentos o premium justifican uno mayor. Los bienes perecederos o voluminosos pueden necesitar markup extra para cubrir desperdicio y almacenamiento. Varía el markup por categoría de producto para que cada artículo se gane su lugar, y usa esta herramienta para revisar el margen que cada elección produce." },
    ],
    relatedCalculators: ["profit-margin-calculator", "break-even-calculator", "ecommerce-profit-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Standard cost-plus pricing formula",
  },
  {
    id: "break-even",
    slug: "break-even-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Break-even Calculator",
    shortDescription: "Find the units you must sell to break even.",
    seoTitle: "Break-even Calculator — Free Break-even Point Tool",
    metaDescription:
      "Free break-even calculator. Find how many units you must sell to cover fixed and variable costs, and the revenue at that point.",
    primaryKeyword: "break-even calculator",
    secondaryKeywords: ["break even point", "break even analysis", "breakeven units"],
    fields: [
      { id: "fixedCosts", label: "Fixed costs", type: "number", unit: "$", placeholder: "10000", required: true, span: 2, min: 0, helpText: "Costs that don't change with volume (rent, salaries)." },
      { id: "pricePerUnit", label: "Price per unit", type: "number", unit: "$", placeholder: "40", required: true, span: 1, min: 0, step: 0.01 },
      { id: "variableCost", label: "Variable cost per unit", type: "number", unit: "$", placeholder: "15", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "units", label: "Break-even units", format: "number", decimals: 0, unit: "units", isPrimary: true },
      { id: "revenue", label: "Break-even revenue", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "contribution", label: "Contribution margin / unit", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Break-even units = fixed costs ÷ (price − variable cost)",
    explanation:
      "The break-even point is the sales volume at which total revenue exactly equals total costs, so the business makes neither a profit nor a loss. The units figure shown here is how many you must sell just to cover everything, and it matters because it converts a wall of fixed and variable costs into a single, concrete sales target you can plan and push toward. This break-even calculator subtracts the variable cost per unit from the price to find the contribution margin — the amount each sale contributes toward fixed costs — then divides your fixed costs by that margin. The method works because fixed costs stay flat no matter how much you sell, while each unit chips away at them by its contribution, so once enough units have sold to cover the fixed block, the next sale turns profitable. A break-even calculator underpins cost-volume-profit analysis, the framework businesses use to test pricing, plan production and decide whether a product is viable. Founders, product managers and finance teams reach for a break-even calculator when launching a product, setting a price, or evaluating whether higher fixed costs — new equipment, more staff — can be justified by the extra volume needed. If the price does not exceed the variable cost, no volume ever breaks even and there is no answer.",
    formulaExplanation:
      "Fixed costs are expenses that do not change with volume, and the contribution margin is the price minus the variable cost of one unit — the money each sale frees up after covering its own variable cost. Dividing fixed costs by that per-unit contribution counts how many units are needed to absorb the entire fixed block. If price is at or below variable cost, the contribution is zero or negative, so no number of units can ever cover fixed costs.",
    example: {
      inputs: { fixedCosts: 10000, pricePerUnit: 40, variableCost: 15 },
      explanation: "Contribution is $40 − $15 = $25. $10,000 ÷ $25 = 400 units, or $16,000 in revenue.",
    },
    faqs: [
      { question: "What is the difference between fixed and variable costs?", answer: "Fixed costs stay the same no matter how much you sell — rent, salaries, insurance, software subscriptions and loan payments all fall here. Variable costs rise and fall directly with volume, such as raw materials, packaging, shipping, payment processing fees and hourly production labor. Sorting your costs correctly is essential, because break-even depends on it. Some costs are mixed, like a utility with a base charge plus usage; split those into their fixed and variable parts for accuracy." },
      { question: "What is contribution margin?", answer: "It is the selling price of one unit minus its variable cost — the money each sale contributes toward covering fixed costs and, once those are covered, toward profit. In the example, a $40 price and $15 variable cost leave $25 of contribution per unit. A higher contribution margin means fewer units are needed to break even. It is one of the most useful figures in pricing, because it shows exactly how much each additional sale is worth to the business." },
      { question: "What happens if the price is below variable cost?", answer: "Then every unit sold loses money before fixed costs are even considered, so no sales volume can ever break even. The contribution margin is zero or negative, and the calculator returns no result until the price exceeds the variable cost. If you find yourself here, you must raise the price or cut the variable cost per unit. Selling below variable cost only makes sense briefly as a loss leader to win customers you monetize elsewhere." },
      { question: "How do I calculate a break-even point in revenue?", answer: "Multiply the break-even units by the price per unit, which the tool does for you. In the example, 400 units at $40 gives $16,000 of break-even revenue. Alternatively, divide fixed costs by the contribution margin ratio — the contribution margin divided by the price. The revenue figure is handy when you think in sales dollars rather than unit counts, or when a business sells many products and unit-level tracking is impractical." },
      { question: "How does break-even help set prices?", answer: "It shows the sales target every candidate price implies. Raise the price and the contribution margin grows, so fewer units break even, but demand may soften. Lower the price and you need more volume to cover fixed costs. By testing prices against a realistic sales forecast, you find the level that breaks even at an achievable volume while leaving room for profit. It also reveals when a proposed increase in fixed costs demands an unrealistic jump in sales." },
    ],
    slugEs: "calculadora-de-punto-de-equilibrio",
    titleEs: "Calculadora de Punto de Equilibrio",
    shortDescriptionEs: "Halla las unidades que debes vender para alcanzar el equilibrio.",
    seoTitleEs: "Calculadora de Punto de Equilibrio — Herramienta Gratis del Punto de Equilibrio",
    metaDescriptionEs:
      "Calculadora de punto de equilibrio gratis. Halla cuántas unidades debes vender para cubrir costos fijos y variables, y los ingresos en ese punto.",
    primaryKeywordEs: "calculadora de punto de equilibrio",
    secondaryKeywordsEs: ["punto de equilibrio", "análisis de punto de equilibrio", "unidades de equilibrio"],
    formulaExplanationEs:
      "Los costos fijos son gastos que no cambian con el volumen, y el margen de contribución es el precio menos el costo variable de una unidad — el dinero que cada venta libera tras cubrir su propio costo variable. Dividir los costos fijos entre esa contribución por unidad cuenta cuántas unidades se necesitan para absorber todo el bloque fijo. Si el precio es igual o menor que el costo variable, la contribución es cero o negativa, así que ningún número de unidades puede cubrir los costos fijos.",
    explanationEs:
      "El punto de equilibrio es el volumen de ventas en el que los ingresos totales igualan exactamente los costos totales, de modo que el negocio no genera ni ganancia ni pérdida. La cifra de unidades que se muestra aquí es cuántas debes vender solo para cubrir todo, e importa porque convierte un muro de costos fijos y variables en una única meta de ventas concreta que puedes planificar y perseguir. Esta calculadora de punto de equilibrio resta el costo variable por unidad al precio para hallar el margen de contribución — la cantidad que cada venta aporta a los costos fijos — y luego divide tus costos fijos entre ese margen. El método funciona porque los costos fijos permanecen planos sin importar cuánto vendas, mientras que cada unidad los reduce por su contribución, así que una vez que se han vendido suficientes unidades para cubrir el bloque fijo, la siguiente venta se vuelve rentable. Una calculadora de punto de equilibrio sustenta el análisis costo-volumen-ganancia, el marco que los negocios usan para probar precios, planificar la producción y decidir si un producto es viable. Fundadores, gerentes de producto y equipos de finanzas recurren a una calculadora de punto de equilibrio al lanzar un producto, fijar un precio o evaluar si costos fijos mayores — equipo nuevo, más personal — se justifican por el volumen extra necesario. Si el precio no supera el costo variable, ningún volumen alcanza el equilibrio y no hay respuesta.",
    exampleEs: {
      inputs: { fixedCosts: 10000, pricePerUnit: 40, variableCost: 15 },
      explanation: "La contribución es $40 − $15 = $25. $10,000 ÷ $25 = 400 unidades, o $16,000 en ingresos.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre costos fijos y variables?", answer: "Los costos fijos permanecen iguales sin importar cuánto vendas — renta, salarios, seguros, suscripciones de software y pagos de préstamos entran aquí. Los costos variables suben y bajan directamente con el volumen, como materias primas, empaque, envío, comisiones de procesamiento de pagos y mano de obra por hora. Clasificar bien tus costos es esencial, porque el punto de equilibrio depende de ello. Algunos costos son mixtos, como un servicio con cargo base más consumo; divide esos en sus partes fija y variable para mayor precisión." },
      { question: "¿Qué es el margen de contribución?", answer: "Es el precio de venta de una unidad menos su costo variable — el dinero que cada venta aporta a cubrir los costos fijos y, una vez cubiertos, a la ganancia. En el ejemplo, un precio de $40 y un costo variable de $15 dejan $25 de contribución por unidad. Un margen de contribución mayor significa que se necesitan menos unidades para alcanzar el equilibrio. Es una de las cifras más útiles en la fijación de precios, porque muestra exactamente cuánto vale para el negocio cada venta adicional." },
      { question: "¿Qué pasa si el precio está por debajo del costo variable?", answer: "Entonces cada unidad vendida pierde dinero incluso antes de considerar los costos fijos, así que ningún volumen de ventas puede alcanzar el equilibrio. El margen de contribución es cero o negativo, y la calculadora no devuelve resultado hasta que el precio supere el costo variable. Si te encuentras aquí, debes subir el precio o reducir el costo variable por unidad. Vender por debajo del costo variable solo tiene sentido brevemente como gancho para ganar clientes que monetizas en otro lado." },
      { question: "¿Cómo calculo un punto de equilibrio en ingresos?", answer: "Multiplica las unidades de equilibrio por el precio por unidad, lo que la herramienta hace por ti. En el ejemplo, 400 unidades a $40 dan $16,000 de ingresos de equilibrio. Alternativamente, divide los costos fijos entre el ratio del margen de contribución — el margen de contribución dividido entre el precio. La cifra de ingresos es útil cuando piensas en dólares de venta en vez de conteos de unidades, o cuando un negocio vende muchos productos y el seguimiento por unidad es impráctico." },
      { question: "¿Cómo ayuda el punto de equilibrio a fijar precios?", answer: "Muestra la meta de ventas que implica cada precio candidato. Sube el precio y el margen de contribución crece, así que menos unidades alcanzan el equilibrio, pero la demanda puede debilitarse. Baja el precio y necesitas más volumen para cubrir los costos fijos. Al probar precios contra un pronóstico de ventas realista, hallas el nivel que alcanza el equilibrio a un volumen lograble dejando espacio para ganancia. También revela cuándo un aumento propuesto de costos fijos exige un salto irreal en ventas." },
    ],
    relatedCalculators: ["profit-margin-calculator", "markup-calculator", "revenue-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Standard break-even (cost-volume-profit) analysis",
  },
];
