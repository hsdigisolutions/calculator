import type { CalculatorDefinition } from "../types";

export const financeR7Calculators: CalculatorDefinition[] = [
  {
    id: "simple-vs-compound",
    slug: "simple-vs-compound-interest-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Simple vs Compound Interest Calculator",
    shortDescription: "Compare simple and compound interest side by side.",
    seoTitle: "Simple vs Compound Interest Calculator — Free Comparison Tool",
    metaDescription:
      "Free simple vs compound interest calculator. Compare the interest earned under simple and compound growth on the same principal, rate and term.",
    primaryKeyword: "simple vs compound interest calculator",
    secondaryKeywords: ["compound vs simple interest", "interest comparison calculator", "difference simple compound interest"],
    fields: [
      { id: "principal", label: "Principal", type: "number", unit: "$", placeholder: "10000", required: true, span: 2, min: 0 },
      { id: "annualRate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years", type: "number", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "simpleInterest", label: "Simple interest", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "compoundInterest", label: "Compound interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "difference", label: "Extra from compounding", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Simple = P × r × t · Compound = P × [(1 + r)^t − 1], r = rate ÷ 100",
    explanation:
      "The figures shown here compare how much interest the same deposit earns under simple interest versus compound interest, along with the extra that compounding adds. It matters because the two methods diverge dramatically over time: simple interest pays only on your original principal, while compound interest pays on the principal plus all the interest already earned, so the gap widens every year. This simple vs compound interest calculator applies both formulas to identical inputs — the same principal, rate and term — so you can see the difference cleanly rather than guessing. Simple interest grows in a straight line, adding the same amount each year, whereas compound interest curves upward as returns start earning returns of their own. Savers and borrowers use this comparison to understand why long-horizon investments favor compounding, why high-rate debt that compounds is so costly, and how the choice of method changes the outcome. The comparison also makes the time factor vivid: over short periods the two are close, but over decades compounding can earn several times more. Treat the result as a clean, pre-tax illustration of the mechanism, and remember that most real savings accounts and loans compound, so the compound figure is usually the one that reflects reality.",
    formulaExplanation:
      "P is the principal, r is the annual rate written as a decimal, and t is the number of years. Simple interest is P × r × t, adding the same flat amount each year because it is always charged on the original principal alone. Compound interest is P × [(1 + r)^t − 1]: the term (1 + r)^t grows the balance by the rate every year on the whole running total, and subtracting one strips out the principal to leave just the interest. The difference between the two is what compounding earns beyond a straight line, and the exponent is why that gap accelerates over time.",
    example: {
      inputs: { principal: 10000, annualRate: 5, years: 10 },
      explanation: "$10,000 at 5% for 10 years earns $5,000 of simple interest but $6,288.95 compounded — about $1,289 more from compounding.",
    },
    faqs: [
      { question: "What is the core difference between simple and compound interest?", answer: "Simple interest is calculated only on your original principal, so it adds the same fixed amount every period and grows in a straight line. Compound interest is calculated on the principal plus all previously earned interest, so each period's interest is slightly larger than the last. That reinvestment of earned interest is what makes compound growth curve upward and pull steadily ahead of simple interest the longer the money is invested." },
      { question: "When does compounding make the biggest difference?", answer: "The gap between compound and simple interest grows with both the interest rate and the length of time invested. Over one or two years at a low rate the two are nearly identical, but over decades or at high rates compounding can earn several times more. Time is the more powerful lever, which is why starting to save early matters so much: the extra years let interest build on interest for far longer." },
      { question: "Which method do banks and loans actually use?", answer: "Most everyday savings accounts, credit cards and loans use compound interest, typically compounded daily or monthly, so the compound figure usually reflects reality. Simple interest appears in some specific products, such as certain auto loans, car title loans and short-term personal loans, where interest is charged only on the principal. Always check the terms of a specific account or loan, since the method materially changes what you earn or owe." },
      { question: "Does a higher rate or more time matter more?", answer: "Both increase compound growth, but time has an outsized effect because the exponent in the compound formula rewards additional years more than proportionally. A modest rate compounded over many decades often beats a higher rate over a short period. This is the mathematical reason financial planners stress starting early and staying invested, rather than chasing the highest possible return over a brief window and then stopping." },
      { question: "Is this calculation before or after tax and inflation?", answer: "The figures shown are nominal and pre-tax, illustrating the raw mechanics of each interest method without adjusting for taxes or rising prices. In reality, interest earned may be taxable, and inflation erodes the real purchasing power of the future amount. Use the comparison to understand the mechanism, then subtract an estimate for tax and inflation if you need to judge what the money will genuinely be worth later." },
    ],
    slugEs: "calculadora-de-interes-simple-vs-compuesto",
    titleEs: "Calculadora de Interés Simple vs Compuesto",
    shortDescriptionEs: "Compara el interés simple y compuesto lado a lado.",
    seoTitleEs: "Calculadora de Interés Simple vs Compuesto — Comparación Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de interés simple vs compuesto. Compara el interés ganado con crecimiento simple y compuesto sobre el mismo capital, tasa y plazo.",
    primaryKeywordEs: "calculadora de interes simple vs compuesto",
    secondaryKeywordsEs: ["interes compuesto vs simple", "calculadora comparacion de interes", "diferencia interes simple compuesto"],
    formulaExplanationEs:
      "P es el capital, r es la tasa anual expresada como decimal y t es el número de años. El interés simple es P × r × t, y suma la misma cantidad fija cada año porque siempre se calcula solo sobre el capital original. El interés compuesto es P × [(1 + r)^t − 1]: el término (1 + r)^t hace crecer el saldo a la tasa cada año sobre el total acumulado, y restar uno elimina el capital para dejar únicamente el interés. La diferencia entre ambos es lo que aporta la capitalización más allá de una línea recta, y el exponente explica por qué esa brecha se acelera con el tiempo.",
    explanationEs:
      "Las cifras que aquí se muestran comparan cuánto interés gana el mismo depósito bajo interés simple frente al interés compuesto, junto con lo adicional que aporta la capitalización. Importa porque los dos métodos divergen de forma drástica con el tiempo: el interés simple paga solo sobre tu capital original, mientras que el interés compuesto paga sobre el capital más todo el interés ya ganado, así que la brecha se amplía cada año. Esta calculadora de interés simple vs compuesto aplica ambas fórmulas a datos idénticos —el mismo capital, tasa y plazo— para que veas la diferencia con claridad en lugar de suponerla. El interés simple crece en línea recta, sumando la misma cantidad cada año, mientras que el interés compuesto se curva hacia arriba a medida que los rendimientos empiezan a generar rendimientos propios. Ahorradores y prestatarios usan esta comparación para entender por qué las inversiones de largo plazo favorecen la capitalización, por qué la deuda de alta tasa que se capitaliza resulta tan costosa, y cómo la elección del método cambia el resultado. Trata el resultado como una ilustración limpia y antes de impuestos del mecanismo, y recuerda que la mayoría de las cuentas de ahorro y préstamos reales se capitalizan, por lo que la cifra compuesta suele ser la que refleja la realidad.",
    exampleEs: {
      inputs: { principal: 10000, annualRate: 5, years: 10 },
      explanation: "10.000 $ al 5% durante 10 años generan 5.000 $ de interés simple pero 6.288,95 $ capitalizado — unos 1.289 $ más gracias a la capitalización.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia esencial entre interés simple y compuesto?", answer: "El interés simple se calcula solo sobre tu capital original, así que suma la misma cantidad fija cada periodo y crece en línea recta. El interés compuesto se calcula sobre el capital más todo el interés ganado previamente, por lo que el interés de cada periodo es algo mayor que el anterior. Esa reinversión del interés ganado es lo que hace que el crecimiento compuesto se curve hacia arriba y supere de forma constante al interés simple cuanto más tiempo permanece invertido el dinero." },
      { question: "¿Cuándo marca la capitalización la mayor diferencia?", answer: "La brecha entre el interés compuesto y el simple crece tanto con la tasa de interés como con el tiempo invertido. En uno o dos años a una tasa baja ambos son casi idénticos, pero a lo largo de décadas o con tasas altas la capitalización puede ganar varias veces más. El tiempo es la palanca más poderosa, y por eso empezar a ahorrar pronto importa tanto: los años adicionales permiten que el interés genere interés durante mucho más tiempo." },
      { question: "¿Qué método usan realmente los bancos y los préstamos?", answer: "La mayoría de las cuentas de ahorro, tarjetas de crédito y préstamos cotidianos usan interés compuesto, normalmente capitalizado a diario o mensualmente, así que la cifra compuesta suele reflejar la realidad. El interés simple aparece en algunos productos concretos, como ciertos préstamos de automóvil y préstamos personales de corto plazo, donde el interés se cobra solo sobre el capital. Revisa siempre las condiciones de la cuenta o préstamo específico, ya que el método cambia de forma material lo que ganas o debes." },
      { question: "¿Importa más una tasa mayor o más tiempo?", answer: "Ambos aumentan el crecimiento compuesto, pero el tiempo tiene un efecto desproporcionado porque el exponente de la fórmula compuesta premia los años adicionales más que proporcionalmente. Una tasa moderada capitalizada durante muchas décadas suele superar a una tasa más alta durante un periodo corto. Esta es la razón matemática por la que los planificadores financieros insisten en empezar pronto y permanecer invertido, en lugar de perseguir el mayor rendimiento posible durante una ventana breve y luego detenerse." },
      { question: "¿Este cálculo es antes o después de impuestos e inflación?", answer: "Las cifras mostradas son nominales y antes de impuestos, e ilustran la mecánica pura de cada método de interés sin ajustar por impuestos ni por la subida de precios. En la realidad, el interés ganado puede estar sujeto a impuestos, y la inflación erosiona el poder adquisitivo real de la cantidad futura. Usa la comparación para entender el mecanismo y luego resta una estimación de impuestos e inflación si necesitas juzgar cuánto valdrá realmente el dinero más adelante." },
    ],
    relatedCalculators: ["compound-interest-calculator", "investment-calculator", "savings-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "loan-affordability",
    slug: "loan-affordability-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Loan Affordability Calculator",
    shortDescription: "Find the loan a monthly payment can support.",
    seoTitle: "Loan Affordability Calculator — How Much Can I Borrow",
    metaDescription:
      "Free loan affordability calculator. Find the maximum loan a fixed monthly payment supports at a given interest rate and term in years.",
    primaryKeyword: "loan affordability calculator",
    secondaryKeywords: ["how much loan can i afford", "maximum loan calculator", "borrowing power calculator"],
    fields: [
      { id: "monthlyPayment", label: "Monthly payment", type: "number", unit: "$", placeholder: "1000", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Loan term", type: "number", unit: "years", placeholder: "5", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "maxLoanAmount", label: "Maximum loan amount", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "Loan = payment × (1 − (1 + r)^−N) ÷ r, r = rate ÷ 1200, N = years × 12",
    explanation:
      "The maximum loan amount shown here is the largest sum you could borrow while keeping the monthly payment within a figure you choose, given the interest rate and the length of the loan. It matters because lenders and buyers alike tend to think in monthly payments, yet the headline decision is how much total debt to take on, so working backward from an affordable payment keeps borrowing grounded in what your budget can actually sustain. This loan affordability calculator converts the annual rate to a monthly rate, then reverses the standard amortization formula to find the present value of your payment stream — that present value is the loan such a payment can repay over the term. Reversing the amortization math is the correct approach because it is the exact calculation a lender performs to set a payment, so the loan it returns is one that genuinely amortizes to zero at those terms. Borrowers use a loan affordability calculator to set a ceiling before applying, to see how the rate and term stretch or shrink their borrowing power, and to compare offers. Keep in mind the result is the loan principal only: fees, insurance and other costs sit on top, and a payment a lender approves is not always one that fits comfortably alongside your other commitments.",
    formulaExplanation:
      "The monthly rate r is the annual rate divided by 1200, and N is the number of monthly payments, or years times twelve. The loan a payment supports is the present value of that payment stream: payment × (1 − (1 + r)^−N) ÷ r, which discounts every future payment back to today's dollars and sums them. When the rate is zero the formula collapses to payment × N, since there is no interest to discount. A larger payment, a lower rate or a longer term each raises the loan the same budget can support.",
    example: {
      inputs: { monthlyPayment: 1000, annualRate: 6, years: 5 },
      explanation: "A $1,000 monthly payment at 6% over 5 years supports a loan of about $51,726.",
    },
    faqs: [
      { question: "How is the maximum loan amount calculated?", answer: "The tool takes the payment you can afford and works out the loan whose scheduled payments exactly match it over the term. It converts your annual rate to a monthly rate, then computes the present value of your payment stream — the sum of every future payment discounted back to today. That present value is the largest loan your payment can fully repay, which is the same math a lender uses when sizing a payment to a loan." },
      { question: "Should I borrow the maximum the tool shows?", answer: "Not necessarily. The figure is the largest loan a given payment supports, not a recommendation. A payment that is technically affordable can still leave little room for emergencies, savings or a change in income. Financial planners generally advise borrowing below your maximum and keeping total debt payments to a modest share of income, so aim for a payment that fits comfortably alongside your other bills rather than the highest one you can technically manage." },
      { question: "How does the loan term change how much I can borrow?", answer: "A longer term spreads the balance over more payments, so each payment is smaller and the same monthly budget supports a larger loan. The trade-off is that a longer term means more total interest paid over the life of the loan, even though the monthly figure looks easier. Shorter terms restrict how much you can borrow for a given payment but cost far less in interest overall, so weigh the larger balance against the added cost." },
      { question: "Does this include taxes, insurance and fees?", answer: "No. The result is the loan principal only — the amount you borrow and repay with interest. For a mortgage or auto loan, additional costs such as property taxes, insurance, origination fees and other charges are separate and can meaningfully raise your true monthly outlay. Leave room in your budget for those extras, and treat the loan figure here as the financing portion rather than the full cost of the purchase." },
      { question: "What interest rate should I enter?", answer: "Use the annual percentage rate you realistically expect to be offered, which depends on your credit, the loan type and current market rates. If you have not been quoted a rate, enter a slightly conservative estimate so you do not overstate your borrowing power. Once a lender pre-approves you with a firm rate, rerun the calculation, since even a small change in rate noticeably shifts the maximum loan a fixed payment can support." },
    ],
    slugEs: "calculadora-de-capacidad-de-prestamo",
    titleEs: "Calculadora de Capacidad de Préstamo",
    shortDescriptionEs: "Descubre el préstamo que un pago mensual puede sostener.",
    seoTitleEs: "Calculadora de Capacidad de Préstamo — Cuánto Puedo Pedir Prestado",
    metaDescriptionEs:
      "Calculadora gratuita de capacidad de préstamo. Descubre el préstamo máximo que sostiene un pago mensual fijo a una tasa de interés y un plazo en años.",
    primaryKeywordEs: "calculadora de capacidad de prestamo",
    secondaryKeywordsEs: ["cuanto prestamo puedo pagar", "calculadora de prestamo maximo", "capacidad de endeudamiento"],
    formulaExplanationEs:
      "La tasa mensual r es la tasa anual dividida entre 1200, y N es el número de pagos mensuales, o los años multiplicados por doce. El préstamo que sostiene un pago es el valor presente de esa serie de pagos: pago × (1 − (1 + r)^−N) ÷ r, que descuenta cada pago futuro a dólares de hoy y los suma. Cuando la tasa es cero la fórmula se reduce a pago × N, ya que no hay interés que descontar. Un pago mayor, una tasa más baja o un plazo más largo elevan, cada uno, el préstamo que el mismo presupuesto puede sostener.",
    explanationEs:
      "El monto máximo de préstamo que aquí se muestra es la mayor suma que podrías pedir prestada manteniendo el pago mensual dentro de una cifra que tú eliges, dada la tasa de interés y la duración del préstamo. Importa porque tanto prestamistas como compradores tienden a pensar en pagos mensuales, aunque la decisión de fondo es cuánta deuda total asumir, así que trabajar hacia atrás desde un pago asequible mantiene el endeudamiento anclado a lo que tu presupuesto realmente puede sostener. Esta calculadora de capacidad de préstamo convierte la tasa anual en una tasa mensual y luego invierte la fórmula estándar de amortización para hallar el valor presente de tu serie de pagos: ese valor presente es el préstamo que ese pago puede amortizar durante el plazo. Invertir la matemática de la amortización es el enfoque correcto porque es el cálculo exacto que hace un prestamista al fijar un pago, de modo que el préstamo que devuelve amortiza realmente a cero en esas condiciones. Los prestatarios usan una calculadora de capacidad de préstamo para fijar un tope antes de solicitar, para ver cómo la tasa y el plazo amplían o reducen su poder de endeudamiento, y para comparar ofertas. Ten en cuenta que el resultado es solo el capital del préstamo: comisiones, seguros y otros costes se suman aparte, y un pago que un prestamista aprueba no siempre encaja con comodidad junto a tus demás compromisos.",
    exampleEs: {
      inputs: { monthlyPayment: 1000, annualRate: 6, years: 5 },
      explanation: "Un pago mensual de 1.000 $ al 6% durante 5 años sostiene un préstamo de unos 51.726 $.",
    },
    faqsEs: [
      { question: "¿Cómo se calcula el monto máximo del préstamo?", answer: "La herramienta toma el pago que puedes afrontar y calcula el préstamo cuyos pagos programados coinciden exactamente con él durante el plazo. Convierte tu tasa anual en una tasa mensual y luego calcula el valor presente de tu serie de pagos: la suma de cada pago futuro descontado a hoy. Ese valor presente es el mayor préstamo que tu pago puede amortizar por completo, que es la misma matemática que usa un prestamista al ajustar un pago a un préstamo." },
      { question: "¿Debería pedir prestado el máximo que muestra la herramienta?", answer: "No necesariamente. La cifra es el mayor préstamo que sostiene un pago dado, no una recomendación. Un pago técnicamente asequible puede dejar poco margen para emergencias, ahorro o un cambio de ingresos. Los planificadores financieros suelen aconsejar pedir prestado por debajo del máximo y mantener el total de pagos de deuda en una parte modesta de los ingresos, así que apunta a un pago que encaje con comodidad junto a tus demás gastos en lugar del más alto que puedas afrontar." },
      { question: "¿Cómo cambia el plazo del préstamo cuánto puedo pedir prestado?", answer: "Un plazo más largo reparte el saldo entre más pagos, así que cada pago es menor y el mismo presupuesto mensual sostiene un préstamo mayor. La contrapartida es que un plazo más largo implica más interés total pagado durante la vida del préstamo, aunque la cifra mensual parezca más fácil. Los plazos más cortos limitan cuánto puedes pedir para un pago dado, pero cuestan mucho menos en interés total, así que sopesa el saldo mayor frente al coste añadido." },
      { question: "¿Esto incluye impuestos, seguros y comisiones?", answer: "No. El resultado es solo el capital del préstamo: la cantidad que pides prestada y devuelves con interés. Para una hipoteca o un préstamo de automóvil, costes adicionales como impuestos sobre la propiedad, seguros, comisiones de apertura y otros cargos son aparte y pueden elevar de forma notable tu desembolso mensual real. Deja margen en tu presupuesto para esos extras y trata la cifra del préstamo como la parte de financiación, no el coste total de la compra." },
      { question: "¿Qué tasa de interés debo introducir?", answer: "Usa la tasa anual que realistamente esperas que te ofrezcan, que depende de tu crédito, el tipo de préstamo y las tasas de mercado actuales. Si no te han cotizado una tasa, introduce una estimación ligeramente conservadora para no sobrestimar tu poder de endeudamiento. Una vez que un prestamista te preapruebe con una tasa firme, vuelve a hacer el cálculo, ya que incluso un pequeño cambio de tasa desplaza de forma perceptible el préstamo máximo que un pago fijo puede sostener." },
    ],
    relatedCalculators: ["loan-calculator", "compound-interest-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/",
  },
  {
    id: "effective-annual-rate",
    slug: "effective-annual-rate-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Effective Annual Rate Calculator",
    shortDescription: "Convert a nominal rate into its true annual yield.",
    seoTitle: "Effective Annual Rate Calculator — Free EAR / APY Tool",
    metaDescription:
      "Free effective annual rate calculator. Convert a nominal interest rate and compounding frequency into the true effective annual rate (EAR).",
    primaryKeyword: "effective annual rate calculator",
    secondaryKeywords: ["ear calculator", "effective interest rate calculator", "nominal to effective rate"],
    fields: [
      { id: "nominalRate", label: "Nominal annual rate", type: "number", unit: "%", placeholder: "12", required: true, span: 1, min: 0, step: 0.01 },
      { id: "compoundsPerYear", label: "Compounds per year", type: "number", placeholder: "12", required: true, span: 1, min: 1 },
    ],
    results: [
      { id: "ear", label: "Effective annual rate", format: "percentage", decimals: 4, isPrimary: true },
    ],
    formula: "EAR = [(1 + nominal ÷ 100 ÷ n)^n − 1] × 100, n = compounds per year",
    explanation:
      "The effective annual rate shown here is the true yearly rate you actually earn or pay once compounding is taken into account, converted from a nominal rate quoted at a given compounding frequency. It matters because a nominal, or stated, rate understates the real cost or return whenever interest compounds more than once a year — each intra-year compounding period adds interest that itself earns interest, so the effective rate is always at least as high as the nominal rate and rises with more frequent compounding. This effective annual rate calculator divides the nominal rate by the number of periods, compounds it that many times, and expresses the result as a single annual figure. Doing so lets you compare products fairly: two accounts with the same nominal rate but different compounding schedules — one monthly, one daily — deliver different real returns, and only the effective rate reveals the difference. Savers use the effective annual rate to compare deposit accounts and CDs on equal footing, while borrowers use it to see the genuine cost of a loan or credit card whose rate is quoted nominally. Because it standardizes the effect of compounding into one number, the effective annual rate is the honest basis for comparison, which is why disclosure rules often require the effective figure, sometimes called APY on savings, to appear alongside the nominal rate.",
    formulaExplanation:
      "The nominal rate divided by 100 turns the percentage into a decimal, and dividing by n gives the rate charged in each compounding period, where n is the number of periods per year. Raising (1 + that periodic rate) to the power n compounds it across the whole year, capturing interest earned on earlier interest. Subtracting one strips out the original principal to leave the pure growth, and multiplying by 100 returns it to a percentage. The more compounding periods there are, the higher the effective rate climbs above the nominal one.",
    example: {
      inputs: { nominalRate: 12, compoundsPerYear: 12 },
      explanation: "A 12% nominal rate compounded monthly has an effective annual rate of about 12.6825%.",
    },
    faqs: [
      { question: "What is the difference between nominal and effective rates?", answer: "The nominal rate is the stated annual rate before compounding is considered, while the effective annual rate reflects the true annual return or cost after compounding within the year. If interest compounds more than once a year, the effective rate is higher than the nominal rate, because interest is earned on interest partway through the year. Only the effective rate lets you compare products that compound at different frequencies on a fair, apples-to-apples basis." },
      { question: "Why does compounding frequency change the effective rate?", answer: "Each time interest compounds, it is added to the balance and starts earning interest itself. The more often that happens within a year, the more of these interest-on-interest cycles occur, so the effective rate rises. Daily compounding produces a higher effective rate than monthly, which beats annual, even when the nominal rate is identical. This is why comparing only the nominal rate can be misleading, and why the effective rate is the honest measure of what you actually get." },
      { question: "Is the effective annual rate the same as APY?", answer: "For savings products, yes — annual percentage yield (APY) is the effective annual rate that banks are required to disclose so savers can compare accounts fairly. On the borrowing side, the closely related concept appears alongside APR, though APR sometimes bundles in fees rather than pure compounding. The underlying math is the same: take a nominal rate and a compounding frequency and express the true annual effect as one standardized percentage." },
      { question: "How do I compare two accounts with this?", answer: "Enter each account's nominal rate and its compounding frequency, then compare the resulting effective annual rates rather than the stated rates. The account with the higher effective rate genuinely pays more, even if its nominal rate looks the same or slightly lower than a rival that compounds less often. This removes the distortion caused by different compounding schedules and gives you a single, comparable number for each option you are weighing." },
      { question: "What is continuous compounding?", answer: "Continuous compounding is the theoretical limit where interest compounds an infinite number of times per year, calculated with the exponential constant e rather than a finite number of periods. It produces the highest possible effective rate for a given nominal rate, though the difference from daily compounding is tiny in practice. This tool uses a finite number of periods that you specify, which matches how real accounts and loans actually compound." },
    ],
    slugEs: "calculadora-de-tasa-anual-efectiva",
    titleEs: "Calculadora de Tasa Anual Efectiva",
    shortDescriptionEs: "Convierte una tasa nominal en su rendimiento anual real.",
    seoTitleEs: "Calculadora de Tasa Anual Efectiva — Herramienta TAE Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de tasa anual efectiva. Convierte una tasa de interés nominal y su frecuencia de capitalización en la verdadera tasa anual efectiva (TAE).",
    primaryKeywordEs: "calculadora de tasa anual efectiva",
    secondaryKeywordsEs: ["calculadora tae", "calculadora de tasa efectiva", "de tasa nominal a efectiva"],
    formulaExplanationEs:
      "La tasa nominal dividida entre 100 convierte el porcentaje en decimal, y dividir entre n da la tasa cobrada en cada periodo de capitalización, donde n es el número de periodos por año. Elevar (1 + esa tasa periódica) a la potencia n la capitaliza a lo largo de todo el año, capturando el interés ganado sobre interés anterior. Restar uno elimina el capital original para dejar el crecimiento puro, y multiplicar por 100 lo devuelve a porcentaje. Cuantos más periodos de capitalización haya, más sube la tasa efectiva por encima de la nominal.",
    explanationEs:
      "La tasa anual efectiva que aquí se muestra es la verdadera tasa anual que realmente ganas o pagas una vez que se tiene en cuenta la capitalización, convertida a partir de una tasa nominal cotizada a una frecuencia de capitalización dada. Importa porque una tasa nominal, o declarada, subestima el coste o rendimiento real siempre que el interés se capitaliza más de una vez al año: cada periodo de capitalización intraanual añade interés que a su vez genera interés, así que la tasa efectiva es siempre al menos tan alta como la nominal y sube con una capitalización más frecuente. Esta calculadora de tasa anual efectiva divide la tasa nominal entre el número de periodos, la capitaliza esas veces y expresa el resultado como una única cifra anual. Hacerlo te permite comparar productos de forma justa: dos cuentas con la misma tasa nominal pero distinta frecuencia de capitalización —una mensual, otra diaria— entregan rendimientos reales diferentes, y solo la tasa efectiva revela la diferencia. Los ahorradores usan la tasa anual efectiva para comparar cuentas de depósito y certificados en igualdad de condiciones, mientras que los prestatarios la usan para ver el coste genuino de un préstamo o tarjeta cuya tasa se cotiza de forma nominal. Como estandariza el efecto de la capitalización en un solo número, la tasa anual efectiva es la base honesta de comparación, y por eso las normas de divulgación suelen exigir que la cifra efectiva, a veces llamada APY en ahorro, aparezca junto a la tasa nominal.",
    exampleEs: {
      inputs: { nominalRate: 12, compoundsPerYear: 12 },
      explanation: "Una tasa nominal del 12% capitalizada mensualmente tiene una tasa anual efectiva de aproximadamente 12,6825%.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre tasa nominal y efectiva?", answer: "La tasa nominal es la tasa anual declarada antes de considerar la capitalización, mientras que la tasa anual efectiva refleja el verdadero rendimiento o coste anual una vez capitalizado dentro del año. Si el interés se capitaliza más de una vez al año, la tasa efectiva es mayor que la nominal, porque se gana interés sobre interés a mitad de año. Solo la tasa efectiva permite comparar productos que se capitalizan a distintas frecuencias sobre una base justa y equivalente." },
      { question: "¿Por qué la frecuencia de capitalización cambia la tasa efectiva?", answer: "Cada vez que el interés se capitaliza, se añade al saldo y empieza a generar interés por sí mismo. Cuanto más a menudo ocurre eso dentro de un año, más ciclos de interés sobre interés se producen, así que la tasa efectiva sube. La capitalización diaria produce una tasa efectiva mayor que la mensual, que a su vez supera a la anual, incluso cuando la tasa nominal es idéntica. Por eso comparar solo la tasa nominal puede inducir a error, y por eso la tasa efectiva es la medida honesta de lo que realmente obtienes." },
      { question: "¿Es la tasa anual efectiva lo mismo que el APY?", answer: "Para productos de ahorro, sí: el rendimiento porcentual anual (APY) es la tasa anual efectiva que los bancos están obligados a divulgar para que los ahorradores puedan comparar cuentas de forma justa. En el lado del endeudamiento, el concepto estrechamente relacionado aparece junto a la APR, aunque la APR a veces incluye comisiones en lugar de pura capitalización. La matemática subyacente es la misma: tomar una tasa nominal y una frecuencia de capitalización y expresar el verdadero efecto anual como un porcentaje estandarizado." },
      { question: "¿Cómo comparo dos cuentas con esto?", answer: "Introduce la tasa nominal de cada cuenta y su frecuencia de capitalización, y luego compara las tasas anuales efectivas resultantes en lugar de las tasas declaradas. La cuenta con la tasa efectiva más alta paga genuinamente más, incluso si su tasa nominal parece igual o ligeramente inferior a la de una rival que se capitaliza con menos frecuencia. Esto elimina la distorsión causada por distintos calendarios de capitalización y te da un único número comparable para cada opción que estés sopesando." },
      { question: "¿Qué es la capitalización continua?", answer: "La capitalización continua es el límite teórico donde el interés se capitaliza un número infinito de veces por año, calculado con la constante exponencial e en lugar de un número finito de periodos. Produce la tasa efectiva más alta posible para una tasa nominal dada, aunque la diferencia respecto a la capitalización diaria es mínima en la práctica. Esta herramienta usa un número finito de periodos que tú especificas, lo cual coincide con la forma en que se capitalizan realmente las cuentas y los préstamos." },
    ],
    relatedCalculators: ["compound-interest-calculator", "investment-calculator", "savings-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "sinking-fund",
    slug: "sinking-fund-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Sinking Fund Calculator",
    shortDescription: "Find the monthly deposit to reach a savings goal.",
    seoTitle: "Sinking Fund Calculator — Free Savings Goal Tool",
    metaDescription:
      "Free sinking fund calculator. Find the level monthly deposit needed to reach a future savings goal at a given return over a set number of years.",
    primaryKeyword: "sinking fund calculator",
    secondaryKeywords: ["savings goal calculator", "monthly deposit calculator", "how much to save each month"],
    fields: [
      { id: "futureGoal", label: "Savings goal", type: "number", unit: "$", placeholder: "50000", required: true, span: 2, min: 0 },
      { id: "annualRate", label: "Annual return", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years to save", type: "number", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "monthlyDeposit", label: "Required monthly deposit", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "Deposit = goal × r ÷ [(1 + r)^N − 1], r = rate ÷ 1200, N = years × 12",
    explanation:
      "The required monthly deposit shown here is the steady amount you would need to set aside each month to reach a specific savings goal by a target date, assuming your savings earn a given return along the way. It matters because most big financial goals — a down payment, a new car, a wedding, a replacement roof — have both a price tag and a deadline, and a sinking fund turns that pair into a concrete monthly habit rather than a vague intention. This sinking fund calculator reverses the future value of an annuity: instead of asking what a series of deposits grows into, it fixes the ending value and solves for the deposit that gets you there. It converts the annual return to a monthly rate and accounts for the fact that earlier deposits compound for longer than later ones, so the required amount is smaller than simply dividing the goal by the number of months. Savers use a sinking fund calculator to budget for planned expenses, to spread a large future cost into manageable pieces, and to see how a higher return or a longer timeline lightens the monthly load. Because the projection assumes a constant return, treat it as a disciplined plan and revisit it if your actual returns or timeline shift.",
    formulaExplanation:
      "The monthly rate r is the annual return divided by 1200, and N is the number of monthly deposits, or years times twelve. Rearranging the future value of an annuity to solve for the payment gives deposit = goal × r ÷ [(1 + r)^N − 1]. The bracketed term is how much a stream of one-dollar deposits would grow to over N months, so dividing the goal by it scales the deposit to hit exactly that target. When the return is zero the formula becomes goal ÷ N, a simple split, because there is no growth to help reach the goal.",
    example: {
      inputs: { futureGoal: 50000, annualRate: 6, years: 10 },
      explanation: "To reach $50,000 in 10 years at a 6% return, you would need to deposit about $305 a month.",
    },
    faqs: [
      { question: "What is a sinking fund?", answer: "A sinking fund is money you set aside gradually to pay for a specific, expected future expense — a car replacement, home repairs, a vacation or an insurance premium. Rather than being caught off guard by a large one-off cost, you spread it into small, regular deposits over the months or years leading up to it. Businesses use the same concept to save for bond repayments or major asset replacements, setting aside funds systematically toward a known obligation." },
      { question: "How does the expected return affect my deposit?", answer: "A higher assumed return means your savings grow faster, so you need to deposit less each month to reach the same goal. A lower return, or keeping the money in cash that earns almost nothing, means you must contribute more yourself. Because returns are uncertain, it is safer to assume a modest, realistic rate for money you will need on a fixed date, and to hold shorter-term goals in low-risk accounts rather than volatile investments." },
      { question: "How is a sinking fund different from an emergency fund?", answer: "A sinking fund targets a known, planned expense with a rough amount and date, so you can calculate exactly how much to save each month. An emergency fund covers unknown, unexpected events — a job loss, a medical bill, an urgent repair — and is typically sized as several months of living expenses rather than a specific goal. Both are useful; a sinking fund handles the predictable, while an emergency fund cushions the unpredictable." },
      { question: "Where should I keep a sinking fund?", answer: "For goals within a few years, favor safe, liquid places such as a high-yield savings account, a money market account or short-term CDs, where the balance will not fall just before you need it. For goals many years away, some savers accept more risk for higher returns, but the closer the deadline, the more the money should shift toward safety. Match the account's risk and access to how soon you will spend the funds." },
      { question: "What if I cannot afford the required monthly deposit?", answer: "If the calculated deposit is out of reach, you have three levers: extend the timeline so the cost spreads over more months, lower the goal amount, or seek a higher return by accepting more risk, which is rarely wise for near-term needs. Extending the deadline is usually the safest adjustment. Even saving a smaller amount than required still builds progress and reduces how much you must borrow or find later." },
    ],
    slugEs: "calculadora-de-fondo-de-amortizacion",
    titleEs: "Calculadora de Fondo de Amortización",
    shortDescriptionEs: "Halla el depósito mensual para alcanzar una meta de ahorro.",
    seoTitleEs: "Calculadora de Fondo de Amortización — Meta de Ahorro Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de fondo de amortización. Halla el depósito mensual constante necesario para alcanzar una meta de ahorro futura a un rendimiento dado en un número de años.",
    primaryKeywordEs: "calculadora de fondo de amortizacion",
    secondaryKeywordsEs: ["calculadora de meta de ahorro", "calculadora de deposito mensual", "cuanto ahorrar cada mes"],
    formulaExplanationEs:
      "La tasa mensual r es el rendimiento anual dividido entre 1200, y N es el número de depósitos mensuales, o los años multiplicados por doce. Reordenar el valor futuro de una anualidad para despejar el pago da depósito = meta × r ÷ [(1 + r)^N − 1]. El término entre corchetes es cuánto crecería una serie de depósitos de un dólar a lo largo de N meses, así que dividir la meta entre él ajusta el depósito para alcanzar exactamente ese objetivo. Cuando el rendimiento es cero la fórmula se convierte en meta ÷ N, un reparto simple, porque no hay crecimiento que ayude a alcanzar la meta.",
    explanationEs:
      "El depósito mensual requerido que aquí se muestra es la cantidad constante que necesitarías apartar cada mes para alcanzar una meta de ahorro concreta en una fecha objetivo, suponiendo que tus ahorros ganen un rendimiento dado por el camino. Importa porque la mayoría de las grandes metas financieras —el pago inicial de una vivienda, un coche nuevo, una boda, un tejado de repuesto— tienen a la vez un precio y un plazo, y un fondo de amortización convierte ese par en un hábito mensual concreto en lugar de una intención vaga. Esta calculadora de fondo de amortización invierte el valor futuro de una anualidad: en lugar de preguntar en cuánto se convierte una serie de depósitos, fija el valor final y despeja el depósito que te lleva hasta ahí. Convierte el rendimiento anual en una tasa mensual y tiene en cuenta que los depósitos más tempranos se capitalizan durante más tiempo que los posteriores, así que la cantidad requerida es menor que dividir simplemente la meta entre el número de meses. Los ahorradores usan una calculadora de fondo de amortización para presupuestar gastos planificados, repartir un gran coste futuro en piezas manejables y ver cómo un rendimiento mayor o un plazo más largo aligeran la carga mensual. Como la proyección supone un rendimiento constante, trátala como un plan disciplinado y revísala si tus rendimientos reales o tu plazo cambian.",
    exampleEs: {
      inputs: { futureGoal: 50000, annualRate: 6, years: 10 },
      explanation: "Para alcanzar 50.000 $ en 10 años con un rendimiento del 6%, necesitarías depositar unos 305 $ al mes.",
    },
    faqsEs: [
      { question: "¿Qué es un fondo de amortización?", answer: "Un fondo de amortización es dinero que apartas de forma gradual para pagar un gasto futuro concreto y previsible: el reemplazo de un coche, reparaciones del hogar, unas vacaciones o una prima de seguro. En lugar de que te sorprenda un gran coste puntual, lo repartes en depósitos pequeños y regulares durante los meses o años previos. Las empresas usan el mismo concepto para ahorrar de cara al pago de bonos o el reemplazo de grandes activos, apartando fondos de forma sistemática hacia una obligación conocida." },
      { question: "¿Cómo afecta el rendimiento esperado a mi depósito?", answer: "Un rendimiento mayor supuesto significa que tus ahorros crecen más rápido, así que necesitas depositar menos cada mes para alcanzar la misma meta. Un rendimiento menor, o mantener el dinero en efectivo que casi no gana nada, significa que debes aportar más tú mismo. Como los rendimientos son inciertos, es más seguro suponer una tasa modesta y realista para dinero que necesitarás en una fecha fija, y mantener las metas de corto plazo en cuentas de bajo riesgo en lugar de inversiones volátiles." },
      { question: "¿En qué se diferencia un fondo de amortización de un fondo de emergencia?", answer: "Un fondo de amortización apunta a un gasto conocido y planificado, con una cantidad y fecha aproximadas, así que puedes calcular exactamente cuánto ahorrar cada mes. Un fondo de emergencia cubre sucesos desconocidos e inesperados —una pérdida de empleo, una factura médica, una reparación urgente— y suele dimensionarse como varios meses de gastos de vida en lugar de una meta específica. Ambos son útiles: un fondo de amortización gestiona lo previsible, mientras que un fondo de emergencia amortigua lo imprevisible." },
      { question: "¿Dónde debería guardar un fondo de amortización?", answer: "Para metas dentro de unos pocos años, favorece lugares seguros y líquidos como una cuenta de ahorro de alto rendimiento, una cuenta del mercado monetario o certificados de corto plazo, donde el saldo no caiga justo antes de que lo necesites. Para metas a muchos años vista, algunos ahorradores aceptan más riesgo a cambio de mayores rendimientos, pero cuanto más cerca esté el plazo, más debería desplazarse el dinero hacia la seguridad. Ajusta el riesgo y el acceso de la cuenta a cuándo gastarás los fondos." },
      { question: "¿Y si no puedo permitirme el depósito mensual requerido?", answer: "Si el depósito calculado está fuera de tu alcance, tienes tres palancas: alargar el plazo para que el coste se reparta entre más meses, reducir la cantidad de la meta, o buscar un rendimiento mayor aceptando más riesgo, lo cual rara vez es prudente para necesidades cercanas. Alargar el plazo suele ser el ajuste más seguro. Incluso ahorrar una cantidad menor que la requerida sigue generando avance y reduce cuánto tendrás que pedir prestado o conseguir más adelante." },
    ],
    relatedCalculators: ["savings-calculator", "compound-interest-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "debt-snowball",
    slug: "debt-snowball-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Debt Snowball Calculator",
    shortDescription: "See how long a fixed payment takes to clear a debt.",
    seoTitle: "Debt Snowball Calculator — Free Debt Payoff Time Tool",
    metaDescription:
      "Free debt snowball calculator. See how many months a fixed monthly payment takes to clear a debt and the total interest paid at a given rate.",
    primaryKeyword: "debt snowball calculator",
    secondaryKeywords: ["debt payoff calculator", "months to pay off debt", "debt payoff time calculator"],
    fields: [
      { id: "totalDebt", label: "Total debt", type: "number", unit: "$", placeholder: "10000", required: true, span: 2, min: 0 },
      { id: "monthlyPayment", label: "Monthly payment", type: "number", unit: "$", placeholder: "300", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Interest rate (APR)", type: "number", unit: "%", placeholder: "12", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "monthsToPayoff", label: "Months to payoff", format: "number", decimals: 0, unit: "months", isPrimary: true },
      { id: "totalInterest", label: "Total interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "n = −ln(1 − debt × r ÷ payment) ÷ ln(1 + r), r = APR ÷ 1200",
    explanation:
      "The months-to-payoff figure shown here is how long a fixed monthly payment takes to eliminate a debt, and the total interest is the extra you pay on top of the balance to get there. It matters because the debt snowball method — attacking one balance with a steady, committed payment until it is gone — depends on knowing your finish line, and seeing the timeline and interest cost turns a daunting balance into a concrete plan with an end date. This debt snowball calculator converts the annual rate to a monthly rate, charges interest on the shrinking balance each month, and solves for the number of payments that drive the balance to zero, then reports the interest accumulated along the way. The logarithmic formula is needed because the balance falls by a different amount every month — early payments cover more interest, later ones more principal — so the payoff curve is not a straight line. Borrowers use a debt snowball calculator to estimate how long a single debt will take, to see how raising the payment shortens the timeline and cuts interest, and to stay motivated as the balance drops. A crucial guardrail appears here: if the payment does not exceed the monthly interest, the balance never shrinks and the debt is never repaid, so the tool returns no result to signal that the payment must rise.",
    formulaExplanation:
      "The monthly rate r is the APR divided by 1200. Each month interest of debt × r is added and the payment reduces what remains, so the balance follows a declining curve rather than falling in equal steps. Rearranging that curve to solve for the number of payments gives n = −ln(1 − debt × r ÷ payment) ÷ ln(1 + r). If the payment is less than or equal to debt × r, the value inside the logarithm is zero or negative, no finite payoff exists, and the tool shows no result — a warning that the payment must exceed the monthly interest to make progress.",
    example: {
      inputs: { totalDebt: 10000, monthlyPayment: 300, annualRate: 12 },
      explanation: "A $10,000 debt at 12% APR paid at $300 a month clears in 41 months and costs about $2,225 in interest.",
    },
    faqs: [
      { question: "What is the debt snowball method?", answer: "The debt snowball is a payoff strategy where you list your debts smallest to largest, make minimum payments on all of them, and throw every extra dollar at the smallest balance until it is gone. You then roll that freed-up payment onto the next debt, building momentum like a snowball. Its strength is psychological: clearing small balances quickly delivers early wins that keep you motivated, even though it is not always the cheapest order mathematically." },
      { question: "How is the snowball different from the avalanche method?", answer: "The snowball orders debts by balance, smallest first, to maximize motivation from quick wins. The debt avalanche orders them by interest rate, highest first, to minimize total interest paid. The avalanche is usually cheaper overall, but the snowball's early victories help many people stick with the plan. This tool computes the payoff time and interest for a single debt at a fixed payment, which applies to whichever ordering strategy you choose to follow." },
      { question: "Why does the payment have to exceed the monthly interest?", answer: "Each month, interest is charged on the outstanding balance. If your payment is only equal to or less than that interest, the entire payment is consumed by interest and the principal never falls, so the debt lasts forever or even grows. For the balance to shrink, the payment must cover the month's interest and leave something over to reduce principal, which is why the tool returns no result when the payment is too small." },
      { question: "How much interest will I pay in total?", answer: "The total interest is the sum of all your payments minus the original balance — the extra you hand the lender for the privilege of borrowing. It depends heavily on the interest rate and how fast you pay: a higher rate or a smaller payment stretches the timeline and multiplies the interest. Raising your monthly payment shortens the payoff and can cut total interest sharply, since the balance that accrues interest shrinks faster." },
      { question: "How can I pay off my debt faster?", answer: "Increase the monthly payment, since every extra dollar goes straight to principal and reduces the interest charged the following month, compounding the benefit. You can also lower the rate through a balance transfer or consolidation loan, freeing more of each payment for principal. Even modest increases in the payment can shave months off the timeline. Try raising the payment in this tool to see how quickly both the months and the total interest drop." },
    ],
    slugEs: "calculadora-de-bola-de-nieve-de-deuda",
    titleEs: "Calculadora de Bola de Nieve de Deuda",
    shortDescriptionEs: "Mira cuánto tarda un pago fijo en saldar una deuda.",
    seoTitleEs: "Calculadora de Bola de Nieve de Deuda — Tiempo de Pago Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de bola de nieve de deuda. Mira cuántos meses tarda un pago mensual fijo en saldar una deuda y el interés total pagado a una tasa dada.",
    primaryKeywordEs: "calculadora de bola de nieve de deuda",
    secondaryKeywordsEs: ["calculadora de pago de deuda", "meses para pagar una deuda", "calculadora de tiempo de pago de deuda"],
    formulaExplanationEs:
      "La tasa mensual r es la APR dividida entre 1200. Cada mes se añade un interés de deuda × r y el pago reduce lo que queda, así que el saldo sigue una curva descendente en lugar de caer en pasos iguales. Reordenar esa curva para despejar el número de pagos da n = −ln(1 − deuda × r ÷ pago) ÷ ln(1 + r). Si el pago es menor o igual que deuda × r, el valor dentro del logaritmo es cero o negativo, no existe un plazo de pago finito, y la herramienta no muestra resultado: una advertencia de que el pago debe superar el interés mensual para avanzar.",
    explanationEs:
      "La cifra de meses hasta el pago que aquí se muestra es cuánto tarda un pago mensual fijo en eliminar una deuda, y el interés total es lo adicional que pagas por encima del saldo para llegar ahí. Importa porque el método de la bola de nieve de deuda —atacar un saldo con un pago constante y comprometido hasta liquidarlo— depende de conocer tu meta final, y ver el plazo y el coste del interés convierte un saldo desalentador en un plan concreto con fecha de término. Esta calculadora de bola de nieve de deuda convierte la tasa anual en una tasa mensual, carga interés sobre el saldo decreciente cada mes y despeja el número de pagos que llevan el saldo a cero, para luego reportar el interés acumulado por el camino. La fórmula logarítmica es necesaria porque el saldo cae en una cantidad distinta cada mes —los primeros pagos cubren más interés, los posteriores más capital—, así que la curva de pago no es una línea recta. Los prestatarios usan una calculadora de bola de nieve de deuda para estimar cuánto tardará una sola deuda, ver cómo subir el pago acorta el plazo y reduce el interés, y mantener la motivación a medida que el saldo baja. Aquí aparece un límite crucial: si el pago no supera el interés mensual, el saldo nunca se reduce y la deuda nunca se salda, así que la herramienta no devuelve resultado para señalar que el pago debe subir.",
    exampleEs: {
      inputs: { totalDebt: 10000, monthlyPayment: 300, annualRate: 12 },
      explanation: "Una deuda de 10.000 $ al 12% de APR pagada a 300 $ al mes se salda en 41 meses y cuesta unos 2.225 $ en interés.",
    },
    faqsEs: [
      { question: "¿Qué es el método de la bola de nieve de deuda?", answer: "La bola de nieve de deuda es una estrategia de pago en la que ordenas tus deudas de menor a mayor, haces pagos mínimos en todas ellas y destinas cada dólar extra al saldo más pequeño hasta liquidarlo. Después trasladas ese pago liberado a la siguiente deuda, generando impulso como una bola de nieve. Su fuerza es psicológica: liquidar saldos pequeños con rapidez ofrece victorias tempranas que te mantienen motivado, aunque no siempre sea el orden más barato desde el punto de vista matemático." },
      { question: "¿En qué se diferencia la bola de nieve del método de la avalancha?", answer: "La bola de nieve ordena las deudas por saldo, la más pequeña primero, para maximizar la motivación con victorias rápidas. La avalancha de deuda las ordena por tasa de interés, la más alta primero, para minimizar el interés total pagado. La avalancha suele ser más barata en conjunto, pero las victorias tempranas de la bola de nieve ayudan a muchas personas a mantener el plan. Esta herramienta calcula el tiempo de pago y el interés de una sola deuda a un pago fijo, lo cual se aplica a cualquiera de las dos estrategias de orden que elijas." },
      { question: "¿Por qué el pago debe superar el interés mensual?", answer: "Cada mes se cobra interés sobre el saldo pendiente. Si tu pago es solo igual o menor que ese interés, el pago entero se consume en interés y el capital nunca baja, así que la deuda dura para siempre o incluso crece. Para que el saldo se reduzca, el pago debe cubrir el interés del mes y dejar algo para reducir el capital, por eso la herramienta no devuelve resultado cuando el pago es demasiado pequeño." },
      { question: "¿Cuánto interés pagaré en total?", answer: "El interés total es la suma de todos tus pagos menos el saldo original: lo adicional que entregas al prestamista por el privilegio de pedir prestado. Depende en gran medida de la tasa de interés y de la rapidez con que pagas: una tasa más alta o un pago más pequeño alargan el plazo y multiplican el interés. Subir tu pago mensual acorta el plazo y puede recortar el interés total de forma marcada, ya que el saldo que acumula interés se reduce más rápido." },
      { question: "¿Cómo puedo pagar mi deuda más rápido?", answer: "Aumenta el pago mensual, ya que cada dólar extra va directo al capital y reduce el interés cobrado el mes siguiente, componiendo el beneficio. También puedes bajar la tasa mediante una transferencia de saldo o un préstamo de consolidación, liberando más de cada pago para el capital. Incluso aumentos modestos del pago pueden recortar meses del plazo. Prueba a subir el pago en esta herramienta para ver con qué rapidez bajan tanto los meses como el interés total." },
    ],
    relatedCalculators: ["credit-card-payoff-calculator", "loan-calculator", "loan-affordability-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/",
  },
  {
    id: "dividend-yield",
    slug: "dividend-yield-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Dividend Yield Calculator",
    shortDescription: "Find a stock's dividend yield from price and payout.",
    seoTitle: "Dividend Yield Calculator — Free Stock Yield Tool",
    metaDescription:
      "Free dividend yield calculator. Find a stock's dividend yield from its annual dividend per share and current share price as a percentage.",
    primaryKeyword: "dividend yield calculator",
    secondaryKeywords: ["stock dividend yield calculator", "dividend yield formula", "annual dividend yield"],
    fields: [
      { id: "annualDividendPerShare", label: "Annual dividend per share", type: "number", unit: "$", placeholder: "2.50", required: true, span: 1, min: 0, step: 0.01 },
      { id: "sharePrice", label: "Current share price", type: "number", unit: "$", placeholder: "50", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "dividendYield", label: "Dividend yield", format: "percentage", decimals: 2, isPrimary: true },
    ],
    formula: "Dividend yield = annual dividend per share ÷ share price × 100",
    explanation:
      "The dividend yield shown here is the annual dividend a stock pays expressed as a percentage of its current share price, which tells you how much cash income each dollar invested returns per year. It matters because yield lets you compare the income from very different stocks on equal footing, and it is a core metric for income-focused investors who rely on dividends for cash flow rather than share-price gains alone. This dividend yield calculator divides the annual dividend per share by the current price and multiplies by 100. Because price sits in the denominator, yield moves inversely to price: when a stock's price falls, its yield rises, and vice versa, which is why a sudden spike in yield can signal a dropping share price rather than a genuinely better deal. Investors use dividend yield to screen income stocks, to compare a stock's payout against bonds or savings rates, and to gauge whether a dividend looks sustainable. A very high yield deserves scrutiny, since it can reflect a falling price that anticipates a dividend cut. Remember that yield captures only the income return; total return also includes any change in the share price, and dividends can be raised, cut or suspended by the company at any time, so a current yield is a snapshot rather than a guarantee.",
    formulaExplanation:
      "The annual dividend per share is the total cash a company expects to pay on one share over a year, and the share price is what one share currently costs. Dividing the dividend by the price gives the income return per dollar invested, and multiplying by 100 turns that ratio into a percentage. Because the price is in the denominator, a rising price lowers the yield while a falling price raises it, so yield and price always move in opposite directions for a fixed dividend.",
    example: {
      inputs: { annualDividendPerShare: 2.5, sharePrice: 50 },
      explanation: "A stock paying $2.50 a year at a $50 share price has a dividend yield of 5%.",
    },
    faqs: [
      { question: "What is a good dividend yield?", answer: "There is no single right number; it depends on the sector, the company's maturity and prevailing interest rates. Established, slower-growth companies often yield 2–5%, while high-growth firms may pay little or nothing, reinvesting instead. Yields far above the market can be a red flag, sometimes signaling a depressed price or an unsustainable payout. Compare a stock's yield to its peers and to safer income sources like bonds rather than chasing the highest number." },
      { question: "Why does dividend yield rise when the price falls?", answer: "Yield is the annual dividend divided by the current price, so with the dividend held constant, a lower price produces a higher yield. This inverse relationship means a rising yield is not automatically good news: it can reflect a falling share price that investors have marked down because they expect trouble, possibly including a dividend cut. Always check whether a high yield comes from a healthy payout or simply from a sinking stock price." },
      { question: "Is a higher dividend yield always better?", answer: "No. A very high yield can indicate that the market has driven the price down over concerns about the company's prospects, and an unusually large payout relative to earnings may not be sustainable. If the company cuts or suspends the dividend, both the income and often the share price fall. A moderate, well-covered dividend from a financially sound company is usually preferable to a headline yield that carries hidden risk of being slashed." },
      { question: "What is the difference between yield and total return?", answer: "Dividend yield measures only the cash income a stock pays relative to its price. Total return combines that dividend income with any change in the share price over the holding period, so it captures the full picture of what you earn or lose. A stock can have a high yield but a negative total return if its price falls, or a low yield but a strong total return driven by price appreciation." },
      { question: "How often are dividends actually paid?", answer: "Most U.S. companies that pay dividends do so quarterly, though some pay monthly, semi-annually or annually, and a few issue occasional special dividends. This calculator uses the annual dividend per share, so if you only know the quarterly amount, multiply it by four before entering it. Companies can raise, cut or suspend dividends at any time based on their earnings and priorities, so a current yield reflects today's payout, not a guaranteed future one." },
    ],
    slugEs: "calculadora-de-rendimiento-de-dividendos",
    titleEs: "Calculadora de Rendimiento de Dividendos",
    shortDescriptionEs: "Halla el rendimiento por dividendo de una acción según precio y pago.",
    seoTitleEs: "Calculadora de Rendimiento de Dividendos — Herramienta Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de rendimiento de dividendos. Halla el rendimiento por dividendo de una acción a partir de su dividendo anual por acción y su precio actual como porcentaje.",
    primaryKeywordEs: "calculadora de rendimiento de dividendos",
    secondaryKeywordsEs: ["calculadora de dividendos de acciones", "formula de rendimiento por dividendo", "rendimiento anual por dividendo"],
    formulaExplanationEs:
      "El dividendo anual por acción es el efectivo total que una empresa espera pagar por una acción a lo largo de un año, y el precio de la acción es lo que cuesta una acción en este momento. Dividir el dividendo entre el precio da el rendimiento de ingresos por cada dólar invertido, y multiplicar por 100 convierte esa razón en porcentaje. Como el precio está en el denominador, un precio en alza reduce el rendimiento mientras que un precio a la baja lo eleva, así que el rendimiento y el precio siempre se mueven en direcciones opuestas para un dividendo fijo.",
    explanationEs:
      "El rendimiento por dividendo que aquí se muestra es el dividendo anual que paga una acción expresado como porcentaje de su precio actual, lo que indica cuánto ingreso en efectivo devuelve cada dólar invertido por año. Importa porque el rendimiento permite comparar los ingresos de acciones muy distintas en igualdad de condiciones, y es una métrica clave para los inversores enfocados en ingresos que dependen de los dividendos para el flujo de caja más que solo de las ganancias del precio. Esta calculadora de rendimiento de dividendos divide el dividendo anual por acción entre el precio actual y multiplica por 100. Como el precio está en el denominador, el rendimiento se mueve de forma inversa al precio: cuando el precio de una acción cae, su rendimiento sube, y viceversa, por eso un repunte repentino del rendimiento puede señalar un precio en descenso en lugar de una oferta genuinamente mejor. Los inversores usan el rendimiento por dividendo para filtrar acciones de ingresos, comparar el pago de una acción con bonos o tasas de ahorro, y calibrar si un dividendo parece sostenible. Un rendimiento muy alto merece escrutinio, ya que puede reflejar un precio a la baja que anticipa un recorte del dividendo. Recuerda que el rendimiento capta solo el retorno por ingresos; el retorno total incluye también cualquier cambio en el precio de la acción, y los dividendos pueden subirse, recortarse o suspenderse por la empresa en cualquier momento, así que un rendimiento actual es una instantánea y no una garantía.",
    exampleEs: {
      inputs: { annualDividendPerShare: 2.5, sharePrice: 50 },
      explanation: "Una acción que paga 2,50 $ al año con un precio de 50 $ tiene un rendimiento por dividendo del 5%.",
    },
    faqsEs: [
      { question: "¿Qué es un buen rendimiento por dividendo?", answer: "No hay un número único correcto; depende del sector, la madurez de la empresa y las tasas de interés vigentes. Las empresas consolidadas y de menor crecimiento suelen rendir entre el 2% y el 5%, mientras que las de alto crecimiento pueden pagar poco o nada, reinvirtiendo en su lugar. Los rendimientos muy por encima del mercado pueden ser una señal de alerta, a veces indicando un precio deprimido o un pago insostenible. Compara el rendimiento de una acción con el de sus pares y con fuentes de ingresos más seguras como los bonos en lugar de perseguir el número más alto." },
      { question: "¿Por qué el rendimiento por dividendo sube cuando cae el precio?", answer: "El rendimiento es el dividendo anual dividido entre el precio actual, así que con el dividendo constante, un precio menor produce un rendimiento mayor. Esta relación inversa significa que un rendimiento en alza no es automáticamente buena noticia: puede reflejar un precio a la baja que los inversores han recortado porque esperan problemas, posiblemente incluido un recorte del dividendo. Comprueba siempre si un rendimiento alto proviene de un pago saludable o simplemente de un precio de la acción que se hunde." },
      { question: "¿Es siempre mejor un rendimiento por dividendo más alto?", answer: "No. Un rendimiento muy alto puede indicar que el mercado ha empujado el precio a la baja por preocupaciones sobre las perspectivas de la empresa, y un pago inusualmente grande respecto a las ganancias puede no ser sostenible. Si la empresa recorta o suspende el dividendo, tanto el ingreso como a menudo el precio de la acción caen. Un dividendo moderado y bien cubierto de una empresa financieramente sólida suele ser preferible a un rendimiento llamativo que conlleva un riesgo oculto de ser recortado." },
      { question: "¿Cuál es la diferencia entre rendimiento y retorno total?", answer: "El rendimiento por dividendo mide solo el ingreso en efectivo que paga una acción respecto a su precio. El retorno total combina ese ingreso por dividendo con cualquier cambio en el precio de la acción durante el periodo de tenencia, así que capta el panorama completo de lo que ganas o pierdes. Una acción puede tener un rendimiento alto pero un retorno total negativo si su precio cae, o un rendimiento bajo pero un retorno total fuerte impulsado por la apreciación del precio." },
      { question: "¿Con qué frecuencia se pagan realmente los dividendos?", answer: "La mayoría de las empresas que pagan dividendos lo hacen trimestralmente, aunque algunas pagan mensual, semestral o anualmente, y unas pocas emiten dividendos especiales ocasionales. Esta calculadora usa el dividendo anual por acción, así que si solo conoces la cantidad trimestral, multiplícala por cuatro antes de introducirla. Las empresas pueden subir, recortar o suspender dividendos en cualquier momento según sus ganancias y prioridades, así que un rendimiento actual refleja el pago de hoy, no uno futuro garantizado." },
    ],
    relatedCalculators: ["investment-calculator", "compound-interest-calculator", "retirement-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/",
  },
  {
    id: "pe-ratio",
    slug: "pe-ratio-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "P/E Ratio Calculator",
    shortDescription: "Find a stock's price-to-earnings ratio.",
    seoTitle: "P/E Ratio Calculator — Free Price-to-Earnings Tool",
    metaDescription:
      "Free P/E ratio calculator. Find a stock's price-to-earnings ratio from its share price and earnings per share to gauge relative valuation.",
    primaryKeyword: "pe ratio calculator",
    secondaryKeywords: ["price to earnings ratio calculator", "p/e ratio formula", "stock valuation calculator"],
    fields: [
      { id: "sharePrice", label: "Share price", type: "number", unit: "$", placeholder: "150", required: true, span: 1, min: 0, step: 0.01 },
      { id: "earningsPerShare", label: "Earnings per share (EPS)", type: "number", unit: "$", placeholder: "5", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "peRatio", label: "P/E ratio", format: "number", decimals: 2, isPrimary: true },
    ],
    formula: "P/E ratio = share price ÷ earnings per share",
    explanation:
      "The price-to-earnings ratio shown here is a stock's share price divided by its earnings per share, telling you how many dollars investors are paying for each dollar of the company's annual earnings. It matters because the P/E ratio is one of the most widely used valuation yardsticks, offering a quick sense of whether a stock looks expensive or cheap relative to its profits, its own history, its peers or the broader market. This P/E ratio calculator divides the price by earnings per share to produce that multiple. A higher P/E means investors are paying more per dollar of current earnings, often because they expect strong future growth; a lower P/E can indicate a bargain, modest growth expectations, or underlying problems. Investors use the P/E ratio to compare companies within the same industry, to judge a stock against its historical range, and as one input among many in deciding what to buy. It has real limits: earnings can be distorted by one-off events or accounting choices, the ratio is meaningless when earnings are zero or negative, and a company with no profits has no meaningful P/E at all. The ratio also says nothing on its own about growth rates, debt or the quality of earnings, so it is best read alongside other metrics rather than treated as a standalone verdict on value.",
    formulaExplanation:
      "The share price is what one share currently costs, and earnings per share is the company's net profit divided by the number of shares outstanding over the same period. Dividing price by earnings per share gives the P/E multiple — the number of years of current earnings, at today's level, that the price represents. A higher result means investors pay more per dollar of earnings. The ratio is undefined when earnings per share is zero, and negative when the company is losing money, so it only carries meaning for profitable firms.",
    example: {
      inputs: { sharePrice: 150, earningsPerShare: 5 },
      explanation: "A $150 stock earning $5 per share has a P/E ratio of 30 — investors pay $30 for each $1 of annual earnings.",
    },
    faqs: [
      { question: "What does the P/E ratio tell you?", answer: "The price-to-earnings ratio shows how much investors are willing to pay for each dollar of a company's earnings. A high P/E suggests the market expects strong future growth and is pricing that in, while a low P/E can signal modest expectations, a possible bargain, or hidden trouble. It is a quick gauge of relative valuation, most useful when compared against similar companies, the stock's own history, or the overall market average." },
      { question: "What is a good P/E ratio?", answer: "There is no universal figure, because P/E norms vary widely by industry and by economic conditions. Fast-growing technology firms often trade at high multiples, while mature utilities or banks trade much lower. Rather than judging a P/E in isolation, compare it to direct competitors and to the company's own historical range. A ratio that looks high or low only becomes meaningful in context, alongside the company's growth prospects and risks." },
      { question: "What is the difference between trailing and forward P/E?", answer: "Trailing P/E uses earnings from the past twelve months, so it is based on actual reported results. Forward P/E uses analysts' estimates of earnings for the coming year, so it reflects expectations rather than history. Trailing is concrete but backward-looking; forward is timely but depends on forecasts that may prove wrong. This calculator works with whichever earnings-per-share figure you enter, so choose the one that matches the comparison you want to make." },
      { question: "Why can't you calculate P/E for an unprofitable company?", answer: "The P/E ratio divides price by earnings per share, so if earnings are zero the ratio is undefined, and if earnings are negative the ratio becomes negative and loses its usual meaning. Many young or turnaround companies operate at a loss, so investors turn to other measures for them, such as price-to-sales. A negative or missing P/E simply means the metric does not apply, not that the stock is worthless." },
      { question: "Should I rely on the P/E ratio alone?", answer: "No. The P/E ratio is a useful starting point but ignores growth rates, debt levels, cash flow and the quality or one-off nature of earnings. Two companies with the same P/E can have very different prospects. Seasoned investors combine it with metrics like the PEG ratio, which adjusts for growth, along with debt ratios and cash-flow analysis, treating P/E as one lens rather than a complete picture of a stock's value." },
    ],
    slugEs: "calculadora-de-relacion-precio-beneficio",
    titleEs: "Calculadora de Relación Precio-Beneficio (PER)",
    shortDescriptionEs: "Halla la relación precio-beneficio de una acción.",
    seoTitleEs: "Calculadora de Relación Precio-Beneficio (PER) — Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de relación precio-beneficio. Halla el PER de una acción a partir de su precio y su beneficio por acción para calibrar la valoración relativa.",
    primaryKeywordEs: "calculadora de relacion precio beneficio",
    secondaryKeywordsEs: ["calculadora per", "formula de relacion precio beneficio", "calculadora de valoracion de acciones"],
    formulaExplanationEs:
      "El precio de la acción es lo que cuesta una acción en este momento, y el beneficio por acción es el beneficio neto de la empresa dividido entre el número de acciones en circulación durante el mismo periodo. Dividir el precio entre el beneficio por acción da el múltiplo precio-beneficio: el número de años de beneficio actual, al nivel de hoy, que representa el precio. Un resultado mayor significa que los inversores pagan más por cada dólar de beneficio. La razón no está definida cuando el beneficio por acción es cero, y es negativa cuando la empresa pierde dinero, así que solo tiene sentido para empresas rentables.",
    explanationEs:
      "La relación precio-beneficio que aquí se muestra es el precio de una acción dividido entre su beneficio por acción, lo que indica cuántos dólares pagan los inversores por cada dólar de beneficio anual de la empresa. Importa porque el PER es uno de los criterios de valoración más usados, y ofrece una idea rápida de si una acción parece cara o barata respecto a sus beneficios, su propia historia, sus pares o el mercado en general. Esta calculadora de relación precio-beneficio divide el precio entre el beneficio por acción para producir ese múltiplo. Un PER más alto significa que los inversores pagan más por cada dólar de beneficio actual, a menudo porque esperan un fuerte crecimiento futuro; un PER más bajo puede indicar una ganga, expectativas de crecimiento modestas o problemas de fondo. Los inversores usan el PER para comparar empresas del mismo sector, juzgar una acción frente a su rango histórico y como una entrada más entre muchas al decidir qué comprar. Tiene límites reales: los beneficios pueden distorsionarse por sucesos puntuales o elecciones contables, la razón carece de sentido cuando los beneficios son cero o negativos, y una empresa sin beneficios no tiene un PER significativo. La razón tampoco dice nada por sí sola sobre tasas de crecimiento, deuda o la calidad de los beneficios, así que es mejor leerla junto a otras métricas en lugar de tratarla como un veredicto autónomo sobre el valor.",
    exampleEs: {
      inputs: { sharePrice: 150, earningsPerShare: 5 },
      explanation: "Una acción de 150 $ que gana 5 $ por acción tiene un PER de 30: los inversores pagan 30 $ por cada 1 $ de beneficio anual.",
    },
    faqsEs: [
      { question: "¿Qué indica la relación precio-beneficio?", answer: "La relación precio-beneficio muestra cuánto están dispuestos a pagar los inversores por cada dólar de beneficio de una empresa. Un PER alto sugiere que el mercado espera un fuerte crecimiento futuro y lo está incorporando al precio, mientras que un PER bajo puede señalar expectativas modestas, una posible ganga o problemas ocultos. Es un indicador rápido de valoración relativa, más útil cuando se compara con empresas similares, la propia historia de la acción o el promedio general del mercado." },
      { question: "¿Qué es un buen PER?", answer: "No hay una cifra universal, porque las normas de PER varían mucho por industria y por condiciones económicas. Las empresas tecnológicas de rápido crecimiento suelen cotizar a múltiplos altos, mientras que las eléctricas o los bancos maduros cotizan mucho más bajo. En lugar de juzgar un PER de forma aislada, compáralo con competidores directos y con el rango histórico de la propia empresa. Una razón que parece alta o baja solo cobra sentido en contexto, junto a las perspectivas de crecimiento y los riesgos de la empresa." },
      { question: "¿Cuál es la diferencia entre PER histórico y proyectado?", answer: "El PER histórico usa los beneficios de los últimos doce meses, así que se basa en resultados reales ya reportados. El PER proyectado usa las estimaciones de los analistas de beneficios para el año próximo, así que refleja expectativas en lugar de historia. El histórico es concreto pero mira hacia atrás; el proyectado es oportuno pero depende de previsiones que pueden fallar. Esta calculadora funciona con cualquier cifra de beneficio por acción que introduzcas, así que elige la que corresponda a la comparación que quieras hacer." },
      { question: "¿Por qué no se puede calcular el PER de una empresa sin beneficios?", answer: "El PER divide el precio entre el beneficio por acción, así que si los beneficios son cero la razón queda indefinida, y si son negativos la razón se vuelve negativa y pierde su significado habitual. Muchas empresas jóvenes o en reestructuración operan con pérdidas, así que los inversores recurren a otras medidas para ellas, como el precio sobre ventas. Un PER negativo o ausente simplemente significa que la métrica no aplica, no que la acción carezca de valor." },
      { question: "¿Debo confiar solo en el PER?", answer: "No. El PER es un punto de partida útil pero ignora las tasas de crecimiento, los niveles de deuda, el flujo de caja y la calidad o naturaleza puntual de los beneficios. Dos empresas con el mismo PER pueden tener perspectivas muy distintas. Los inversores experimentados lo combinan con métricas como la razón PEG, que ajusta por crecimiento, junto a razones de deuda y análisis de flujo de caja, tratando el PER como una lente más en lugar de un panorama completo del valor de una acción." },
    ],
    relatedCalculators: ["investment-calculator", "dividend-yield-calculator", "compound-interest-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/",
  },
  {
    id: "bond-current-yield",
    slug: "bond-yield-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Bond Current Yield Calculator",
    shortDescription: "Find a bond's current yield from coupon and price.",
    seoTitle: "Bond Current Yield Calculator — Free Bond Yield Tool",
    metaDescription:
      "Free bond current yield calculator. Find a bond's current yield from its annual coupon payment and current market price as a percentage.",
    primaryKeyword: "bond yield calculator",
    secondaryKeywords: ["bond current yield calculator", "current yield formula", "bond income yield"],
    fields: [
      { id: "annualCouponPayment", label: "Annual coupon payment", type: "number", unit: "$", placeholder: "50", required: true, span: 1, min: 0, step: 0.01 },
      { id: "bondPrice", label: "Current bond price", type: "number", unit: "$", placeholder: "950", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "currentYield", label: "Current yield", format: "percentage", decimals: 3, isPrimary: true },
    ],
    formula: "Current yield = annual coupon payment ÷ bond price × 100",
    explanation:
      "The current yield shown here is a bond's annual coupon payment expressed as a percentage of its current market price, telling you the income return you earn per dollar invested at today's price. It matters because bonds often trade above or below their face value, so the coupon rate printed on the bond — which is based on face value — no longer reflects the true income you get when you buy at a different price. This bond current yield calculator divides the annual coupon by the price you pay and multiplies by 100. When a bond trades below face value, at a discount, its current yield is higher than its coupon rate; when it trades above face value, at a premium, the current yield is lower. Investors use current yield to compare the income of bonds bought at different prices, to weigh a bond against other income sources, and as a quick read on income relative to cost. It is important to note what current yield leaves out: it measures only the coupon income relative to price and ignores any capital gain or loss you realize if you hold the bond to maturity and it repays face value. For that fuller picture, investors turn to yield to maturity. Treat current yield as a snapshot of income return, not the total return of holding the bond to the end.",
    formulaExplanation:
      "The annual coupon payment is the fixed cash a bond pays each year, set as a percentage of its face value. The current price is what the bond costs to buy in the market today, which may differ from face value. Dividing the annual coupon by the current price gives the income return per dollar actually invested, and multiplying by 100 makes it a percentage. Because the price is the denominator, buying at a discount raises the current yield above the coupon rate, while buying at a premium pushes it below.",
    example: {
      inputs: { annualCouponPayment: 50, bondPrice: 950 },
      explanation: "A bond paying $50 a year bought at $950 has a current yield of about 5.263%, above its 5% coupon because it trades at a discount.",
    },
    faqs: [
      { question: "What is a bond's current yield?", answer: "Current yield is the annual coupon income a bond pays divided by its current market price, shown as a percentage. It tells you the income return you actually earn at the price you pay, rather than the coupon rate set against face value. Because bonds trade above or below face value, the current yield is often the more useful income figure when comparing bonds you might buy at differing market prices." },
      { question: "How does current yield differ from the coupon rate?", answer: "The coupon rate is fixed at issue and calculated on the bond's face value, so it never changes. The current yield is calculated on the bond's current market price, which fluctuates, so it changes as the price moves. When a bond trades at a discount below face value, its current yield exceeds the coupon rate; when it trades at a premium above face value, the current yield falls below the coupon rate." },
      { question: "What is the difference between current yield and yield to maturity?", answer: "Current yield measures only the coupon income relative to today's price and ignores any gain or loss from the price converging to face value at maturity. Yield to maturity accounts for that capital gain or loss plus the timing of all cash flows, giving the total annualized return if you hold the bond to maturity. Yield to maturity is more complete but more complex; current yield is a simpler income snapshot." },
      { question: "Why do bond prices and yields move in opposite directions?", answer: "A bond's coupon payments are fixed, so when its market price falls, those same payments represent a larger return on the lower price, pushing the yield up. When the price rises, the fixed payments are a smaller return on the higher price, pulling the yield down. This inverse relationship is fundamental to bonds, and it is why rising interest rates, which push new-bond yields up, tend to lower the prices of existing bonds." },
      { question: "Does current yield account for reinvested coupons or fees?", answer: "No. Current yield is a simple ratio of annual coupon income to price and assumes nothing about reinvesting the coupons, taxes or transaction costs. It also ignores any capital gain or loss at maturity. For a fuller measure of what you will actually earn, consider yield to maturity and factor in your tax situation and any fees. Use current yield as a quick income comparison, not a complete return calculation." },
    ],
    slugEs: "calculadora-de-rendimiento-actual-de-bonos",
    titleEs: "Calculadora de Rendimiento Actual de Bonos",
    shortDescriptionEs: "Halla el rendimiento actual de un bono según cupón y precio.",
    seoTitleEs: "Calculadora de Rendimiento Actual de Bonos — Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de rendimiento actual de bonos. Halla el rendimiento actual de un bono a partir de su cupón anual y su precio de mercado actual como porcentaje.",
    primaryKeywordEs: "calculadora de rendimiento de bonos",
    secondaryKeywordsEs: ["calculadora de rendimiento actual de bonos", "formula de rendimiento actual", "rendimiento por ingresos de bonos"],
    formulaExplanationEs:
      "El pago de cupón anual es el efectivo fijo que un bono paga cada año, establecido como un porcentaje de su valor nominal. El precio actual es lo que cuesta comprar el bono en el mercado hoy, que puede diferir del valor nominal. Dividir el cupón anual entre el precio actual da el rendimiento de ingresos por cada dólar realmente invertido, y multiplicar por 100 lo convierte en porcentaje. Como el precio es el denominador, comprar con descuento eleva el rendimiento actual por encima de la tasa de cupón, mientras que comprar con prima lo empuja por debajo.",
    explanationEs:
      "El rendimiento actual que aquí se muestra es el pago de cupón anual de un bono expresado como porcentaje de su precio de mercado actual, lo que indica el rendimiento por ingresos que ganas por cada dólar invertido al precio de hoy. Importa porque los bonos suelen cotizar por encima o por debajo de su valor nominal, así que la tasa de cupón impresa en el bono —que se basa en el valor nominal— ya no refleja el ingreso real que obtienes al comprar a un precio distinto. Esta calculadora de rendimiento actual de bonos divide el cupón anual entre el precio que pagas y multiplica por 100. Cuando un bono cotiza por debajo del valor nominal, con descuento, su rendimiento actual es mayor que su tasa de cupón; cuando cotiza por encima del valor nominal, con prima, el rendimiento actual es menor. Los inversores usan el rendimiento actual para comparar los ingresos de bonos comprados a distintos precios, sopesar un bono frente a otras fuentes de ingresos, y como una lectura rápida del ingreso respecto al coste. Es importante notar lo que el rendimiento actual deja fuera: mide solo el ingreso por cupón respecto al precio e ignora cualquier ganancia o pérdida de capital que realices si mantienes el bono hasta el vencimiento y devuelve el valor nominal. Para ese panorama más completo, los inversores recurren al rendimiento al vencimiento. Trata el rendimiento actual como una instantánea del retorno por ingresos, no el retorno total de mantener el bono hasta el final.",
    exampleEs: {
      inputs: { annualCouponPayment: 50, bondPrice: 950 },
      explanation: "Un bono que paga 50 $ al año comprado a 950 $ tiene un rendimiento actual de aproximadamente 5,263%, por encima de su cupón del 5% porque cotiza con descuento.",
    },
    faqsEs: [
      { question: "¿Qué es el rendimiento actual de un bono?", answer: "El rendimiento actual es el ingreso por cupón anual que paga un bono dividido entre su precio de mercado actual, mostrado como porcentaje. Te indica el rendimiento por ingresos que realmente ganas al precio que pagas, en lugar de la tasa de cupón fijada sobre el valor nominal. Como los bonos cotizan por encima o por debajo del valor nominal, el rendimiento actual suele ser la cifra de ingresos más útil al comparar bonos que podrías comprar a distintos precios de mercado." },
      { question: "¿En qué se diferencia el rendimiento actual de la tasa de cupón?", answer: "La tasa de cupón se fija en la emisión y se calcula sobre el valor nominal del bono, así que nunca cambia. El rendimiento actual se calcula sobre el precio de mercado actual del bono, que fluctúa, así que cambia a medida que se mueve el precio. Cuando un bono cotiza con descuento por debajo del valor nominal, su rendimiento actual supera la tasa de cupón; cuando cotiza con prima por encima del valor nominal, el rendimiento actual cae por debajo de la tasa de cupón." },
      { question: "¿Cuál es la diferencia entre rendimiento actual y rendimiento al vencimiento?", answer: "El rendimiento actual mide solo el ingreso por cupón respecto al precio de hoy e ignora cualquier ganancia o pérdida derivada de la convergencia del precio hacia el valor nominal al vencimiento. El rendimiento al vencimiento tiene en cuenta esa ganancia o pérdida de capital más el momento de todos los flujos de caja, dando el retorno anualizado total si mantienes el bono hasta el vencimiento. El rendimiento al vencimiento es más completo pero más complejo; el rendimiento actual es una instantánea de ingresos más sencilla." },
      { question: "¿Por qué los precios de los bonos y los rendimientos se mueven en direcciones opuestas?", answer: "Los pagos de cupón de un bono son fijos, así que cuando su precio de mercado cae, esos mismos pagos representan un mayor retorno sobre el precio más bajo, empujando el rendimiento al alza. Cuando el precio sube, los pagos fijos son un retorno menor sobre el precio más alto, tirando del rendimiento a la baja. Esta relación inversa es fundamental en los bonos, y por eso las tasas de interés al alza, que empujan hacia arriba los rendimientos de los bonos nuevos, tienden a bajar los precios de los bonos existentes." },
      { question: "¿El rendimiento actual tiene en cuenta cupones reinvertidos o comisiones?", answer: "No. El rendimiento actual es una razón simple entre el ingreso por cupón anual y el precio, y no supone nada sobre reinvertir los cupones, impuestos o costes de transacción. También ignora cualquier ganancia o pérdida de capital al vencimiento. Para una medida más completa de lo que realmente ganarás, considera el rendimiento al vencimiento y ten en cuenta tu situación fiscal y las comisiones. Usa el rendimiento actual como una comparación rápida de ingresos, no un cálculo completo de retorno." },
    ],
    relatedCalculators: ["investment-calculator", "compound-interest-calculator", "dividend-yield-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/",
  },
  {
    id: "stock-break-even",
    slug: "stock-break-even-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Stock Break-Even Calculator",
    shortDescription: "Find the price a stock must reach to break even.",
    seoTitle: "Stock Break-Even Calculator — Free Break-Even Price Tool",
    metaDescription:
      "Free stock break-even calculator. Find the share price you must reach to break even after buy price, share count and total trading fees.",
    primaryKeyword: "stock break even calculator",
    secondaryKeywords: ["break even price calculator", "stock break even price", "share break even calculator"],
    fields: [
      { id: "buyPrice", label: "Buy price per share", type: "number", unit: "$", placeholder: "100", required: true, span: 1, min: 0, step: 0.01 },
      { id: "shares", label: "Number of shares", type: "number", placeholder: "10", required: true, span: 1, min: 0, step: 1 },
      { id: "totalFees", label: "Total fees", type: "number", unit: "$", placeholder: "20", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "breakEvenPrice", label: "Break-even price", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "Break-even price = (buy price × shares + total fees) ÷ shares",
    explanation:
      "The break-even price shown here is the share price a stock must reach for your position to cover its full cost, including the trading fees you paid to buy it. It matters because your true cost is not just the price per share — commissions, spreads and other fees raise the bar the stock must clear before you actually make a profit, and ignoring them makes a position look profitable when it is not yet. This stock break-even calculator adds your total purchase cost and fees, then divides by the number of shares to find the per-share price at which selling would return exactly what you put in, with no gain and no loss. Investors and traders use the break-even price to set realistic profit targets, to decide where to place sell orders, and to understand how much fees eat into small or frequent trades. The effect of fees is proportionally larger on small positions, so the break-even price sits noticeably above the buy price when you hold few shares, and barely above it when you hold many. Keep in mind this calculation covers the fees to buy; if you also pay a fee to sell, or owe taxes on any gain, your real break-even is a little higher still. Use it as a clear floor for what the stock must earn just to leave you even.",
    formulaExplanation:
      "Buy price times the number of shares is your total spent on the shares themselves, and adding the total fees gives the complete cash outlay to open the position. Dividing that combined cost by the number of shares spreads it evenly across every share, producing the per-share price at which selling would exactly return your outlay. Any price above the break-even yields a profit; any price below it a loss. Because fees are fixed while shares vary, the break-even sits further above the buy price when you own fewer shares.",
    example: {
      inputs: { buyPrice: 100, shares: 10, totalFees: 20 },
      explanation: "Buying 10 shares at $100 with $20 in fees means the stock must reach $102 per share just to break even.",
    },
    faqs: [
      { question: "What is a stock break-even price?", answer: "The break-even price is the share price at which selling your holding returns exactly what you invested, leaving neither a profit nor a loss. It includes not only the price you paid per share but also the trading fees you incurred to buy. Reaching this price means you have recovered your full cost; only above it do you start making an actual gain. It is a practical floor for setting profit targets." },
      { question: "Why do fees raise my break-even price?", answer: "Fees add to your total cost without adding any shares, so the stock must rise enough to recover both the purchase price and those fees before you profit. Spread across your shares, the fees lift the per-share price you need to reach. On small positions this bump is proportionally larger, which is why frequent trading of small amounts can be quietly expensive: the stock has to climb further each time just to cover costs." },
      { question: "Does this include the cost of selling?", answer: "This calculation covers the fees you paid to buy the shares. If your broker also charges a fee to sell, your true break-even is slightly higher, because you must recover that selling cost too. Likewise, taxes on any realized gain further raise the price at which you keep money after everything. For a conservative target, add any expected selling fee to the total fees, or treat the result as a minimum." },
      { question: "How does the number of shares affect break-even?", answer: "The buy price per share is unaffected by share count, but fixed fees are spread across however many shares you own. With few shares, the fees add a larger amount per share, pushing the break-even noticeably above the buy price. With many shares, the same fees are diluted across the position, so the break-even sits only marginally above the purchase price. Larger positions therefore absorb fixed trading costs more efficiently." },
      { question: "Should I factor in taxes and dividends?", answer: "This tool focuses on price and trading fees, not taxes or income. If you sell at a gain, capital gains tax reduces what you keep, effectively raising your real break-even, while any dividends received while holding lower your effective cost. For a precise after-tax break-even, adjust for your tax rate and any dividends collected. Use the figure here as a clean, pre-tax floor for the price the stock must reach." },
    ],
    slugEs: "calculadora-de-punto-de-equilibrio-de-acciones",
    titleEs: "Calculadora de Punto de Equilibrio de Acciones",
    shortDescriptionEs: "Halla el precio que una acción debe alcanzar para no perder.",
    seoTitleEs: "Calculadora de Punto de Equilibrio de Acciones — Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de punto de equilibrio de acciones. Halla el precio que debes alcanzar para no perder tras el precio de compra, el número de acciones y las comisiones.",
    primaryKeywordEs: "calculadora de punto de equilibrio de acciones",
    secondaryKeywordsEs: ["calculadora de precio de equilibrio", "precio de equilibrio de acciones", "punto de equilibrio de acciones"],
    formulaExplanationEs:
      "El precio de compra multiplicado por el número de acciones es tu gasto total en las acciones mismas, y sumar las comisiones totales da el desembolso de efectivo completo para abrir la posición. Dividir ese coste combinado entre el número de acciones lo reparte de forma pareja entre cada acción, produciendo el precio por acción al que vender devolvería exactamente tu desembolso. Cualquier precio por encima del punto de equilibrio genera una ganancia; cualquiera por debajo, una pérdida. Como las comisiones son fijas mientras las acciones varían, el punto de equilibrio queda más por encima del precio de compra cuando tienes menos acciones.",
    explanationEs:
      "El precio de equilibrio que aquí se muestra es el precio que una acción debe alcanzar para que tu posición cubra su coste total, incluidas las comisiones de negociación que pagaste al comprarla. Importa porque tu coste real no es solo el precio por acción: comisiones, diferenciales y otros cargos elevan el listón que la acción debe superar antes de que realmente obtengas beneficio, e ignorarlos hace que una posición parezca rentable cuando aún no lo es. Esta calculadora de punto de equilibrio de acciones suma tu coste total de compra y las comisiones, y luego divide entre el número de acciones para hallar el precio por acción al que vender devolvería exactamente lo que aportaste, sin ganancia ni pérdida. Inversores y operadores usan el precio de equilibrio para fijar objetivos de beneficio realistas, decidir dónde colocar órdenes de venta, y entender cuánto se comen las comisiones en operaciones pequeñas o frecuentes. El efecto de las comisiones es proporcionalmente mayor en posiciones pequeñas, así que el precio de equilibrio queda notablemente por encima del precio de compra cuando tienes pocas acciones, y apenas por encima cuando tienes muchas. Ten en cuenta que este cálculo cubre las comisiones de compra; si también pagas una comisión al vender, o debes impuestos sobre alguna ganancia, tu punto de equilibrio real es un poco más alto todavía. Úsalo como un suelo claro de lo que la acción debe alcanzar solo para dejarte sin pérdidas.",
    exampleEs: {
      inputs: { buyPrice: 100, shares: 10, totalFees: 20 },
      explanation: "Comprar 10 acciones a 100 $ con 20 $ en comisiones significa que la acción debe alcanzar 102 $ por acción solo para no perder.",
    },
    faqsEs: [
      { question: "¿Qué es el precio de equilibrio de una acción?", answer: "El precio de equilibrio es el precio al que vender tu tenencia devuelve exactamente lo que invertiste, sin dejar ni ganancia ni pérdida. Incluye no solo el precio que pagaste por acción sino también las comisiones de negociación en las que incurriste al comprar. Alcanzar este precio significa que has recuperado tu coste total; solo por encima de él empiezas a obtener una ganancia real. Es un suelo práctico para fijar objetivos de beneficio." },
      { question: "¿Por qué las comisiones elevan mi precio de equilibrio?", answer: "Las comisiones se suman a tu coste total sin añadir ninguna acción, así que la acción debe subir lo suficiente para recuperar tanto el precio de compra como esas comisiones antes de que ganes. Repartidas entre tus acciones, las comisiones elevan el precio por acción que necesitas alcanzar. En posiciones pequeñas este incremento es proporcionalmente mayor, por eso operar con frecuencia cantidades pequeñas puede ser silenciosamente caro: la acción tiene que subir más cada vez solo para cubrir costes." },
      { question: "¿Esto incluye el coste de vender?", answer: "Este cálculo cubre las comisiones que pagaste al comprar las acciones. Si tu bróker también cobra una comisión al vender, tu punto de equilibrio real es algo más alto, porque debes recuperar también ese coste de venta. Del mismo modo, los impuestos sobre cualquier ganancia realizada elevan aún más el precio al que conservas dinero tras todo. Para un objetivo conservador, suma cualquier comisión de venta esperada a las comisiones totales, o trata el resultado como un mínimo." },
      { question: "¿Cómo afecta el número de acciones al punto de equilibrio?", answer: "El precio de compra por acción no se ve afectado por el número de acciones, pero las comisiones fijas se reparten entre cuantas acciones poseas. Con pocas acciones, las comisiones añaden una cantidad mayor por acción, empujando el punto de equilibrio notablemente por encima del precio de compra. Con muchas acciones, las mismas comisiones se diluyen en la posición, así que el punto de equilibrio queda solo marginalmente por encima del precio de compra. Las posiciones más grandes absorben, por tanto, los costes fijos de negociación de forma más eficiente." },
      { question: "¿Debo tener en cuenta impuestos y dividendos?", answer: "Esta herramienta se centra en el precio y las comisiones de negociación, no en impuestos ni ingresos. Si vendes con ganancia, el impuesto sobre ganancias de capital reduce lo que conservas, elevando de hecho tu punto de equilibrio real, mientras que cualquier dividendo recibido durante la tenencia baja tu coste efectivo. Para un punto de equilibrio preciso después de impuestos, ajusta por tu tasa impositiva y los dividendos cobrados. Usa la cifra aquí como un suelo limpio, antes de impuestos, del precio que la acción debe alcanzar." },
    ],
    relatedCalculators: ["investment-calculator", "dividend-yield-calculator", "pe-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/",
  },
  {
    id: "nest-egg",
    slug: "retirement-nest-egg-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Retirement Nest Egg Calculator",
    shortDescription: "Find the savings target your retirement needs.",
    seoTitle: "Retirement Nest Egg Calculator — Free Savings Target Tool",
    metaDescription:
      "Free retirement nest egg calculator. Find the savings target you need from your annual expenses and a safe withdrawal rate like the 4% rule.",
    primaryKeyword: "retirement nest egg calculator",
    secondaryKeywords: ["nest egg calculator", "retirement savings target", "4 percent rule calculator"],
    fields: [
      { id: "annualExpenses", label: "Annual retirement expenses", type: "number", unit: "$", placeholder: "40000", required: true, span: 2, min: 0 },
      { id: "withdrawalRate", label: "Safe withdrawal rate", type: "number", unit: "%", placeholder: "4", defaultValue: 4, required: true, span: 2, min: 0, step: 0.1 },
    ],
    results: [
      { id: "nestEggTarget", label: "Nest egg target", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "monthlyIncomeSupported", label: "Monthly income supported", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Nest egg = annual expenses ÷ (withdrawal rate ÷ 100) · Monthly income = annual expenses ÷ 12",
    explanation:
      "The nest egg target shown here is the total amount you would need saved to fund your retirement, based on the annual expenses you expect and the rate at which you plan to withdraw from your savings each year. It matters because retirement planning hinges on a single big question — how much is enough — and framing it around a sustainable withdrawal rate turns an abstract worry into a concrete number to aim for. This retirement nest egg calculator divides your desired annual spending by your withdrawal rate to find the portfolio size that can support that spending. The logic is the mirror image of the well-known 4% rule: if you plan to withdraw 4% of your savings in the first year, you need twenty-five times your annual expenses, because dividing by 0.04 is the same as multiplying by twenty-five. A lower withdrawal rate demands a larger nest egg but is safer against outliving your money, while a higher rate needs less saved but carries more risk. Savers use this target to set a retirement goal, to see how their spending assumptions drive the number, and to test how conservative or aggressive a withdrawal rate changes what they must accumulate. Treat the result as a planning guidepost: it does not account for Social Security, pensions, taxes, market sequence risk or changing expenses, so refine it with a fuller retirement plan as your date approaches.",
    formulaExplanation:
      "Annual expenses is the yearly spending you want your savings to cover, and the withdrawal rate is the percentage of your nest egg you plan to draw each year. Dividing the withdrawal rate by 100 turns it into a decimal, and dividing your annual expenses by that decimal gives the total savings whose withdrawal rate produces exactly your spending. A 4% rate, for instance, means dividing by 0.04, or multiplying expenses by twenty-five. The monthly income figure simply divides annual expenses by twelve to show the spending the target is built to support.",
    example: {
      inputs: { annualExpenses: 40000, withdrawalRate: 4 },
      explanation: "Spending $40,000 a year at a 4% withdrawal rate requires a nest egg of $1,000,000, supporting about $3,333 a month.",
    },
    faqs: [
      { question: "What is the 4% rule?", answer: "The 4% rule is a retirement guideline suggesting you can withdraw 4% of your savings in your first year of retirement, then adjust that amount for inflation each year, with a strong chance the money lasts about thirty years. It implies a nest egg of twenty-five times your annual expenses. It comes from historical market studies and is a useful starting point, though it is a rule of thumb rather than a guarantee." },
      { question: "How does the withdrawal rate change my target?", answer: "The withdrawal rate is the denominator, so a lower rate means a larger nest egg and a higher rate a smaller one. Withdrawing 3% requires about thirty-three times your annual expenses, while 5% requires only twenty times. A lower rate is more conservative and better protects against outliving your savings or a rough market early in retirement, but demands that you save more. The right rate balances safety against how much you can realistically accumulate." },
      { question: "Does this account for Social Security or a pension?", answer: "No. The target reflects funding your full annual expenses from savings alone. If you expect Social Security, a pension or other income in retirement, you can subtract that annual income from your expenses first, then enter only the shortfall your savings must cover. That reduces the nest egg you need. This tool deliberately keeps the calculation simple, so layer in guaranteed income sources separately to refine your true savings goal." },
      { question: "Is the nest egg target adjusted for inflation and taxes?", answer: "The target is in today's dollars and does not model taxes. In practice, inflation raises your spending needs over time, and the classic 4% rule assumes you increase withdrawals with inflation each year, which the underlying studies build in. Taxes on withdrawals from pre-tax accounts also reduce what you can spend. Treat the figure as a real-terms planning estimate, and account for your expected tax situation when judging how much spendable income it truly provides." },
      { question: "How accurate is this as a retirement plan?", answer: "It is a helpful first estimate, not a complete plan. It assumes steady spending, a fixed withdrawal rate and ignores market sequence risk — the danger of poor returns early in retirement — as well as changing expenses, healthcare costs and longevity. Real retirement planning also weighs asset allocation, guaranteed income and flexibility to adjust spending. Use this target to set a goal and gauge progress, then build a fuller plan, ideally with a professional, as retirement nears." },
    ],
    slugEs: "calculadora-de-fondo-de-jubilacion",
    titleEs: "Calculadora de Fondo de Jubilación",
    shortDescriptionEs: "Halla el objetivo de ahorro que necesita tu jubilación.",
    seoTitleEs: "Calculadora de Fondo de Jubilación — Objetivo de Ahorro Gratis",
    metaDescriptionEs:
      "Calculadora gratuita de fondo de jubilación. Halla el objetivo de ahorro que necesitas a partir de tus gastos anuales y una tasa de retiro segura como la regla del 4%.",
    primaryKeywordEs: "calculadora de fondo de jubilacion",
    secondaryKeywordsEs: ["calculadora de ahorro para la jubilacion", "objetivo de ahorro para jubilacion", "calculadora regla del 4 por ciento"],
    formulaExplanationEs:
      "Los gastos anuales son el gasto anual que quieres que tus ahorros cubran, y la tasa de retiro es el porcentaje de tu fondo que planeas retirar cada año. Dividir la tasa de retiro entre 100 la convierte en decimal, y dividir tus gastos anuales entre ese decimal da el ahorro total cuya tasa de retiro produce exactamente tu gasto. Una tasa del 4%, por ejemplo, significa dividir entre 0,04, o multiplicar los gastos por veinticinco. La cifra de ingreso mensual simplemente divide los gastos anuales entre doce para mostrar el gasto que el objetivo está diseñado para sostener.",
    explanationEs:
      "El objetivo de fondo de jubilación que aquí se muestra es la cantidad total que necesitarías tener ahorrada para financiar tu jubilación, basada en los gastos anuales que esperas y la tasa a la que planeas retirar de tus ahorros cada año. Importa porque la planificación de la jubilación gira en torno a una gran pregunta —cuánto es suficiente— y enmarcarla alrededor de una tasa de retiro sostenible convierte una preocupación abstracta en un número concreto al que apuntar. Esta calculadora de fondo de jubilación divide el gasto anual deseado entre tu tasa de retiro para hallar el tamaño de cartera capaz de sostener ese gasto. La lógica es el reflejo de la conocida regla del 4%: si planeas retirar el 4% de tus ahorros el primer año, necesitas veinticinco veces tus gastos anuales, porque dividir entre 0,04 es lo mismo que multiplicar por veinticinco. Una tasa de retiro más baja exige un fondo mayor pero es más segura frente al riesgo de sobrevivir a tu dinero, mientras que una tasa más alta necesita menos ahorrado pero conlleva más riesgo. Los ahorradores usan este objetivo para fijar una meta de jubilación, ver cómo sus supuestos de gasto impulsan el número, y probar cómo una tasa de retiro conservadora o agresiva cambia lo que deben acumular. Trata el resultado como una guía de planificación: no tiene en cuenta la seguridad social, las pensiones, los impuestos, el riesgo de secuencia de mercado ni los gastos cambiantes, así que refínalo con un plan de jubilación más completo a medida que se acerca tu fecha.",
    exampleEs: {
      inputs: { annualExpenses: 40000, withdrawalRate: 4 },
      explanation: "Gastar 40.000 $ al año a una tasa de retiro del 4% requiere un fondo de 1.000.000 $, que sostiene unos 3.333 $ al mes.",
    },
    faqsEs: [
      { question: "¿Qué es la regla del 4%?", answer: "La regla del 4% es una pauta de jubilación que sugiere que puedes retirar el 4% de tus ahorros en tu primer año de jubilación, luego ajustar esa cantidad por la inflación cada año, con altas probabilidades de que el dinero dure unos treinta años. Implica un fondo de veinticinco veces tus gastos anuales. Proviene de estudios históricos del mercado y es un punto de partida útil, aunque es una regla general y no una garantía." },
      { question: "¿Cómo cambia la tasa de retiro mi objetivo?", answer: "La tasa de retiro es el denominador, así que una tasa más baja implica un fondo mayor y una tasa más alta uno menor. Retirar el 3% requiere unas treinta y tres veces tus gastos anuales, mientras que el 5% requiere solo veinte. Una tasa más baja es más conservadora y protege mejor contra sobrevivir a tus ahorros o un mercado adverso al inicio de la jubilación, pero exige que ahorres más. La tasa adecuada equilibra la seguridad frente a cuánto puedes acumular de forma realista." },
      { question: "¿Esto tiene en cuenta la seguridad social o una pensión?", answer: "No. El objetivo refleja financiar todos tus gastos anuales solo con ahorros. Si esperas seguridad social, una pensión u otros ingresos en la jubilación, puedes restar primero ese ingreso anual de tus gastos y luego introducir solo el déficit que tus ahorros deben cubrir. Eso reduce el fondo que necesitas. Esta herramienta mantiene el cálculo deliberadamente sencillo, así que incorpora las fuentes de ingreso garantizado por separado para refinar tu verdadera meta de ahorro." },
      { question: "¿El objetivo del fondo está ajustado por inflación e impuestos?", answer: "El objetivo está en dólares de hoy y no modela impuestos. En la práctica, la inflación eleva tus necesidades de gasto con el tiempo, y la clásica regla del 4% supone que aumentas los retiros con la inflación cada año, lo cual los estudios subyacentes incorporan. Los impuestos sobre los retiros de cuentas antes de impuestos también reducen lo que puedes gastar. Trata la cifra como una estimación de planificación en términos reales, y considera tu situación fiscal esperada al juzgar cuánto ingreso gastable proporciona realmente." },
      { question: "¿Qué tan preciso es esto como plan de jubilación?", answer: "Es una primera estimación útil, no un plan completo. Supone un gasto constante, una tasa de retiro fija e ignora el riesgo de secuencia de mercado —el peligro de rendimientos pobres al inicio de la jubilación— además de gastos cambiantes, costes sanitarios y longevidad. La planificación real de la jubilación también sopesa la asignación de activos, el ingreso garantizado y la flexibilidad para ajustar el gasto. Usa este objetivo para fijar una meta y medir el progreso, y luego construye un plan más completo, idealmente con un profesional, a medida que se acerca la jubilación." },
    ],
    relatedCalculators: ["retirement-calculator", "investment-calculator", "compound-interest-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/",
  },
];
