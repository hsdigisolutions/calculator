import type { CalculatorDefinition } from "../types";

export const financeMoreCalculators: CalculatorDefinition[] = [
  {
    id: "roth-ira",
    slug: "roth-ira-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Roth IRA Calculator",
    shortDescription: "Project the tax-free growth of a Roth IRA.",
    seoTitle: "Roth IRA Calculator — Free Retirement Growth Tool",
    metaDescription:
      "Free Roth IRA calculator. Project the future value of a Roth IRA from a starting balance, annual contributions, expected return and years.",
    primaryKeyword: "roth ira calculator",
    secondaryKeywords: ["roth ira growth calculator", "roth ira future value", "retirement account calculator"],
    slugEs: "calculadora-de-roth-ira",
    titleEs: "Calculadora de Roth IRA",
    shortDescriptionEs: "Proyecta el crecimiento libre de impuestos de una cuenta Roth IRA.",
    seoTitleEs: "Calculadora de Roth IRA — Herramienta gratuita de crecimiento para la jubilación",
    metaDescriptionEs:
      "Calculadora de Roth IRA gratuita. Proyecta el valor futuro de una Roth IRA a partir del saldo inicial, las aportaciones anuales, el rendimiento esperado y los años.",
    primaryKeywordEs: "calculadora de roth ira",
    secondaryKeywordsEs: ["calculadora de crecimiento roth ira", "valor futuro roth ira", "calculadora de cuenta de jubilacion"],
    formulaExplanationEs:
      "El saldo es tu cantidad inicial y r es el rendimiento anual esperado expresado como decimal, de modo que saldo × (1 + r)^y capitaliza la suma inicial a lo largo de y años. Cada aportación anual es un depósito propio que se capitaliza durante los años restantes, y el término de anualidad entre corchetes ((1 + r)^y − 1) ÷ r suma toda la serie de una sola vez. Al sumar ambas partes se obtiene el valor futuro. Los exponentes reflejan la reinversión de los rendimientos, por lo que los años posteriores aportan mucho más que los primeros.",
    explanationEs:
      "El valor futuro que se muestra aquí es el valor proyectado de una cuenta Roth IRA una vez que un saldo inicial y aportaciones anuales constantes han crecido al rendimiento anual que esperas. Es importante porque una Roth IRA se financia con dinero por el que ya pagaste impuestos, de modo que los retiros calificados en la jubilación salen completamente libres de impuestos: el saldo que ves es lo que realmente conservas. Esta calculadora de Roth IRA capitaliza el saldo inicial por separado y trata cada aportación anual como un depósito que se capitaliza durante los años restantes, y luego suma ambas partes. Ese método de anualidad se usa porque tus aportaciones forman una serie regular, y cada una gana rendimientos que a su vez se reinvierten, que es el motor del crecimiento a largo plazo. Los ahorradores usan una calculadora de Roth IRA para ver si su nivel de aportación va por buen camino, para probar cuán sensible es el resultado al rendimiento supuesto y para comparar una Roth con una cuenta tradicional. Como el IRS limita las aportaciones anuales y la elegibilidad según los ingresos, confirma el límite vigente antes de confiar en una cifra. La proyección es nominal y no considera la inflación, así que trátala como una estimación de planificación y revísala a medida que cambien tus aportaciones, los rendimientos y el límite anual.",
    exampleEs: {
      inputs: { currentBalance: 10000, annualContribution: 7000, annualReturn: 7, years: 30 },
      explanation: "$10,000 más $7,000 al año al 7% durante 30 años crecen hasta unos $737,000, de los cuales aproximadamente $517,000 son crecimiento sobre los $220,000 aportados.",
    },
    faqsEs: [
      { question: "¿Qué rendimiento debo suponer para una Roth IRA?", answer: "Usa una tasa acorde con lo que realmente contiene la cuenta, ya que una Roth IRA es solo una envoltura sobre las inversiones que eliges. Un índice bursátil amplio ha promediado históricamente entre un 7 y un 10% anual antes de la inflación en periodos largos, mientras que los bonos rinden menos. Una cartera equilibrada se sitúa en medio. Sé conservador al planificar y prueba una tasa más baja, porque el rendimiento pasado nunca garantiza el futuro." },
      { question: "¿Cuánto puedo aportar cada año?", answer: "El IRS fija un límite anual de aportación a la Roth IRA que cambia con el tiempo, con una cantidad adicional de recuperación permitida a partir de los 50 años. La elegibilidad también se reduce por encima de ciertos niveles de ingresos, por lo que quienes ganan mucho pueden verse limitados o excluidos. Consulta siempre las cifras del año en curso en el sitio del IRS antes de confiar en una proyección aquí e introduce la cantidad que puedas aportar de forma realista." },
      { question: "¿Los retiros de una Roth IRA son realmente libres de impuestos?", answer: "Los retiros calificados lo son. Como aportas dinero por el que ya pagaste impuesto sobre la renta, tanto las aportaciones como todo el crecimiento de la inversión salen libres de impuestos una vez que tienes al menos 59 años y medio y la cuenta lleva abierta cinco años. También puedes retirar tus propias aportaciones en cualquier momento sin impuestos ni penalización. Los retiros no calificados de las ganancias pueden generar impuestos y una penalización." },
      { question: "¿Debo elegir una Roth o una IRA tradicional?", answer: "Depende de las tasas impositivas. Una Roth se financia con dinero después de impuestos y crece libre de impuestos, lo que te favorece si esperas estar en un tramo más alto en la jubilación o quieres ingresos libres de impuestos más adelante. Una IRA tradicional ofrece una deducción ahora pero se grava al retirar, favoreciendo a quienes hoy están en un tramo alto y esperan uno más bajo después. Muchos ahorradores tienen ambas para repartir el riesgo." },
      { question: "¿Esto tiene en cuenta la inflación y las comisiones?", answer: "No. La proyección es nominal, es decir, muestra dólares futuros sin ajustar por la subida de precios, y supone que no hay comisiones de inversión. El poder adquisitivo real será menor: con una inflación del 3%, el dinero pierde aproximadamente la mitad de su valor en 24 años, y los gastos de los fondos reducen silenciosamente los rendimientos. Resta una estimación de ambos para juzgar lo que el saldo realmente podrá comprar." },
    ],
    fields: [
      { id: "currentBalance", label: "Current balance", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "annualContribution", label: "Annual contribution", type: "number", unit: "$", placeholder: "7000", required: true, span: 1, min: 0 },
      { id: "annualReturn", label: "Annual return", type: "number", unit: "%", placeholder: "7", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years until retirement", type: "number", placeholder: "30", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "futureValue", label: "Future value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalContributed", label: "Total contributed", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalGrowth", label: "Total growth", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "FV = balance(1 + r)^y + contribution × [((1 + r)^y − 1) ÷ r], r = annual return",
    explanation:
      "The future value shown here is the projected worth of a Roth IRA once a starting balance and steady yearly contributions have grown at your expected annual return. It matters because a Roth IRA is funded with money you have already paid tax on, so qualified withdrawals in retirement come out entirely tax-free — the balance you see is what you actually get to keep. This Roth IRA calculator compounds the opening balance on its own and treats each annual contribution as a deposit that compounds for the years remaining, then adds the two together. That annuity method is used because your contributions form a regular series, each one earning returns that are themselves reinvested, which is the engine behind long-horizon growth. Savers use a Roth IRA calculator to see whether their contribution level is on track, to test how sensitive the outcome is to the return they assume, and to weigh a Roth against a traditional account. Because the IRS caps annual contributions and limits eligibility by income, confirm the current limit before relying on a figure. The projection is nominal and pre-inflation, so treat it as a planning estimate and revisit it as your contributions, returns and the annual limit change over time.",
    formulaExplanation:
      "Balance is your starting amount and r is the expected annual return as a decimal, so balance × (1 + r)^y compounds the lump sum across y years. Each yearly contribution is its own deposit that compounds for the years left, and the bracketed annuity term ((1 + r)^y − 1) ÷ r totals the whole series at once. Adding the two gives the future value. The exponents capture returns being reinvested, which is why later years add far more than early ones.",
    example: {
      inputs: { currentBalance: 10000, annualContribution: 7000, annualReturn: 7, years: 30 },
      explanation: "$10,000 plus $7,000 a year at 7% for 30 years grows to about $737,000, of which roughly $517,000 is growth on $220,000 contributed.",
    },
    faqs: [
      { question: "What return should I assume for a Roth IRA?", answer: "Use a rate that matches what the account actually holds, since a Roth IRA is just a wrapper around investments you choose. A broad stock index has historically averaged roughly 7–10% a year before inflation over long periods, while bonds return less. A balanced mix sits between. Lean conservative for planning and test a lower rate, because past performance never guarantees a future result and markets do not deliver a smooth, constant return." },
      { question: "How much can I contribute each year?", answer: "The IRS sets an annual Roth IRA contribution limit that changes over time, with an extra catch-up amount allowed once you reach age 50. Eligibility also phases out above certain income levels, so high earners may be limited or excluded. Always check the current year's figures on the IRS website before you rely on a projection here, and enter the amount you can realistically contribute rather than the maximum if the cap does not fit your budget." },
      { question: "Are Roth IRA withdrawals really tax-free?", answer: "Qualified withdrawals are. Because you contribute money you have already paid income tax on, both the contributions and all the investment growth come out tax-free once you are at least 59½ and the account has been open five years. You can also withdraw your own contributions at any time without tax or penalty. Non-qualified withdrawals of earnings can trigger tax and a penalty, so plan to leave the growth untouched until retirement." },
      { question: "Should I choose a Roth or a traditional IRA?", answer: "It hinges on tax rates. A Roth is funded with after-tax money and grows tax-free, which favors you if you expect to be in a higher bracket in retirement or want tax-free income later. A traditional IRA gives a deduction now but is taxed on withdrawal, favoring those in a high bracket today who expect a lower one later. Many savers hold both to spread the risk of future tax changes." },
      { question: "Does this account for inflation and fees?", answer: "No. The projection is nominal, meaning it shows future dollars without adjusting for rising prices, and it assumes no investment fees. Real purchasing power will be lower — at 3% inflation, money roughly halves in value over 24 years — and fund expenses quietly reduce returns. Subtract an estimate for both to judge what the balance will truly buy, and favor low-cost funds so more of the growth stays in your account." },
    ],
    relatedCalculators: ["401k-calculator", "retirement-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "401k",
    slug: "401k-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "401(k) Calculator",
    shortDescription: "Project a 401(k) balance with employer match.",
    seoTitle: "401(k) Calculator — Free Retirement Savings Tool",
    metaDescription:
      "Free 401(k) calculator. Project your retirement balance from current savings, monthly contributions, employer match, return and years.",
    primaryKeyword: "401k calculator",
    secondaryKeywords: ["401k growth calculator", "401k employer match calculator", "retirement savings calculator"],
    slugEs: "calculadora-de-401k",
    titleEs: "Calculadora de 401(k)",
    shortDescriptionEs: "Proyecta el saldo de un 401(k) con aportación del empleador.",
    seoTitleEs: "Calculadora de 401(k) — Herramienta gratuita de ahorro para la jubilación",
    metaDescriptionEs:
      "Calculadora de 401(k) gratuita. Proyecta tu saldo de jubilación a partir del ahorro actual, las aportaciones mensuales, la aportación del empleador, el rendimiento y los años.",
    primaryKeywordEs: "calculadora de 401k",
    secondaryKeywordsEs: ["calculadora de crecimiento 401k", "calculadora de aportacion del empleador 401k", "calculadora de ahorro para la jubilacion"],
    formulaExplanationEs:
      "Saldo × (1 + i)^n capitaliza tu ahorro actual, donde i es el rendimiento mensual y n el número de meses. Tu aportación y la aportación del empleador son cada una depósitos mensuales, y el término de anualidad entre corchetes ((1 + i)^n − 1) ÷ i suma cada serie a lo largo de los n meses. Al añadir el crecimiento del saldo a ambos flujos de aportaciones se obtiene el valor futuro. Como la aportación del empleador se capitaliza igual, aprovecharla por completo tiene un efecto enorme a lo largo de las décadas.",
    explanationEs:
      "El valor futuro que se muestra aquí es el tamaño proyectado de un 401(k) una vez que tu saldo actual, tus aportaciones mensuales y cualquier aportación del empleador han crecido a tu rendimiento esperado. Es importante porque un 401(k) es el principal vehículo de jubilación para la mayoría de los trabajadores, y la aportación del empleador es en la práctica dinero gratis que puede duplicar lo que entra cada mes. Esta calculadora de 401(k) capitaliza el saldo inicial al equivalente mensual del rendimiento anual y trata tanto tu aportación como la del empleador como depósitos mensuales que se capitalizan durante los meses restantes, y luego los suma. Se usa capitalización mensual porque las aportaciones se descuentan de cada nómina y el crecimiento se acredita a medida que la cuenta lo gana, de modo que el modelo refleja cómo se comporta un plan real. Los trabajadores usan una calculadora de 401(k) para comprobar si van por buen camino, para ver el valor a largo plazo de aportar lo suficiente para captar toda la aportación del empleador y para probar cómo responde el saldo a una mayor tasa de ahorro. El resultado es nominal y antes de impuestos; un 401(k) tradicional se grava al retirar, por lo que la cantidad disponible es menor. Los límites de aportación los fija el IRS y cambian cada año, así que confirma el tope vigente antes de tratar cualquier cifra como una meta firme.",
    exampleEs: {
      inputs: { currentBalance: 25000, monthlyContribution: 500, employerMatchMonthly: 250, annualReturn: 7, years: 30 },
      explanation: "$25,000 ahora, $500 al mes más una aportación de $250 al 7% durante 30 años crecen hasta cerca de $1.12 millones, provenientes de los $205,000 que aportas y $90,000 de aportación del empleador.",
    },
    faqsEs: [
      { question: "¿Cómo funciona la aportación del empleador?", answer: "Muchos empleadores añaden dinero a tu 401(k) según lo que tú aportes, normalmente igualando el 50% o el 100% de tus aportaciones hasta un porcentaje de tu salario. Es esencialmente un rendimiento inmediato sobre tu ahorro, por lo que los asesores financieros insisten en aportar al menos lo suficiente para captar toda la aportación antes que nada. Introduce aquí la aportación mensual de tu empleador para ver cuánto suma con el tiempo; dejarla en blanco modela solo tus aportaciones." },
      { question: "¿Cuánto debo aportar a mi 401(k)?", answer: "Una meta muy citada es el 15% del salario bruto para la jubilación, incluida la aportación del empleador, pero la cifra correcta depende de tu edad, ingresos y otros ahorros. Como mínimo, aporta lo suficiente para ganar toda la aportación del empleador, ya que rechazarla es renunciar a dinero gratis. Si el 15% está fuera de tu alcance ahora, empieza más bajo y sube tu aportación un punto o dos cada vez que aumente tu salario." },
      { question: "¿Qué rendimiento debo suponer?", answer: "Usa una tasa que refleje los fondos que tienes. Una asignación diversificada con fuerte peso en acciones ha promediado históricamente entre un 7 y un 10% anual antes de la inflación en horizontes largos, mientras que las mezclas más conservadoras con bonos rinden menos. Los ahorradores jóvenes con décadas por delante suelen suponer una tasa más alta; quienes están cerca de la jubilación se inclinan por una más baja para reducir el riesgo. Como los mercados son volátiles, prueba una tasa conservadora." },
      { question: "¿El saldo proyectado se grava?", answer: "Depende del tipo de cuenta. Un 401(k) tradicional se financia con dólares antes de impuestos, de modo que los retiros en la jubilación se gravan como ingreso ordinario y la cantidad disponible es menor que el saldo mostrado. Un 401(k) Roth usa aportaciones después de impuestos, por lo que los retiros calificados son libres de impuestos. Esta herramienta proyecta el saldo bruto sin aplicar impuestos. Resta tu tasa impositiva esperada en la jubilación para estimar lo que realmente podrás gastar." },
      { question: "¿Cuáles son los límites de aportación?", answer: "El IRS fija un límite anual a las aportaciones del empleado al 401(k), con una cantidad adicional de recuperación permitida a partir de los 50 años. Las aportaciones del empleador quedan bajo un límite combinado separado y más alto. Estas cifras se ajustan casi todos los años por la inflación, así que consulta los números vigentes en el sitio del IRS antes de suponer que puedes aportar una cantidad dada. Si tu aportación prevista supera el límite, ajústala y considera una IRA." },
    ],
    fields: [
      { id: "currentBalance", label: "Current balance", type: "number", unit: "$", placeholder: "25000", required: true, span: 1, min: 0 },
      { id: "monthlyContribution", label: "Your monthly contribution", type: "number", unit: "$", placeholder: "500", required: true, span: 1, min: 0 },
      { id: "employerMatchMonthly", label: "Employer match (monthly)", type: "number", unit: "$", placeholder: "250", required: false, span: 1, min: 0 },
      { id: "annualReturn", label: "Annual return", type: "number", unit: "%", placeholder: "7", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Years until retirement", type: "number", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "futureValue", label: "Future value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "yourContributions", label: "Your contributions", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "employerTotal", label: "Employer match total", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "FV = balance(1 + i)^n + (you + match) × [((1 + i)^n − 1) ÷ i], i = return ÷ 12, n = years × 12",
    explanation:
      "The future value shown here is the projected size of a 401(k) once your current balance, your monthly contributions and any employer match have all grown at your expected return. It matters because a 401(k) is the main retirement vehicle for most workers, and an employer match is effectively free money that can double the amount going in each month. This 401(k) calculator compounds the starting balance at the monthly equivalent of the annual return and treats both your contribution and the match as monthly deposits that compound for the months remaining, then sums them. Monthly compounding is used because contributions are deducted from each paycheck and growth is credited as the account earns it, so the model mirrors how a real plan behaves. Workers use a 401(k) calculator to check whether they are on track, to see the long-run value of contributing enough to capture the full match, and to test how the balance responds to a higher savings rate. The result is nominal and pre-tax; a traditional 401(k) is taxed on withdrawal, so the spendable amount is lower. Contribution limits are set by the IRS and change yearly, so confirm the current cap before treating any figure as a firm target.",
    formulaExplanation:
      "Balance × (1 + i)^n compounds your current savings, where i is the monthly return and n the number of months. Your contribution and the employer match are each monthly deposits, and the bracketed annuity term ((1 + i)^n − 1) ÷ i totals each series across all n months. Adding the balance growth to both contribution streams gives the future value. Because the match rides the same compounding, capturing it fully has an outsized effect over decades.",
    example: {
      inputs: { currentBalance: 25000, monthlyContribution: 500, employerMatchMonthly: 250, annualReturn: 7, years: 30 },
      explanation: "$25,000 now, $500/month plus a $250 match at 7% for 30 years grows to about $1.12 million, from $205,000 you contribute and $90,000 in employer match.",
    },
    faqs: [
      { question: "How does an employer match work?", answer: "Many employers add money to your 401(k) based on what you contribute, commonly matching 50% or 100% of your contributions up to a percentage of your salary. It is essentially an instant return on your savings, so financial planners urge contributing at least enough to capture the full match before anything else. Enter your employer's monthly match here to see how much it adds over time; leaving it blank models contributions from you alone." },
      { question: "How much should I contribute to my 401(k)?", answer: "A widely cited target is 15% of gross pay toward retirement, including the employer match, but the right figure depends on your age, income and other savings. At a minimum, contribute enough to earn the full match, since declining it forfeits free money. If 15% is out of reach now, start lower and raise your contribution by a point or two whenever your pay increases, letting compounding do more of the work over time." },
      { question: "What return should I assume?", answer: "Use a rate that reflects the funds you hold. A diversified stock-heavy allocation has historically averaged roughly 7–10% a year before inflation over long horizons, while more conservative mixes with bonds return less. Younger savers with decades ahead often assume a higher rate; those near retirement lean lower to reduce risk. Because markets are volatile and past results do not guarantee future ones, test a conservative rate to see how the balance holds up." },
      { question: "Is the projected balance taxed?", answer: "It depends on the account type. A traditional 401(k) is funded with pre-tax dollars, so withdrawals in retirement are taxed as ordinary income and the spendable amount is less than the balance shown. A Roth 401(k) uses after-tax contributions, so qualified withdrawals are tax-free. This tool projects the gross balance without applying tax. Subtract your expected retirement tax rate from a traditional balance to estimate what you can actually spend." },
      { question: "What are the contribution limits?", answer: "The IRS sets an annual limit on employee 401(k) contributions, with an additional catch-up amount allowed once you reach age 50. Employer matching contributions sit under a separate, higher combined limit. These figures are adjusted most years for inflation, so check the current numbers on the IRS website before assuming you can contribute a given amount. If your planned contribution exceeds the limit, cap it and consider an IRA for additional tax-advantaged saving." },
    ],
    relatedCalculators: ["roth-ira-calculator", "retirement-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "credit-card-payoff",
    slug: "credit-card-payoff-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Credit Card Payoff Calculator",
    shortDescription: "See how long it takes to clear a card balance.",
    seoTitle: "Credit Card Payoff Calculator — Free Payoff Time Tool",
    metaDescription:
      "Free credit card payoff calculator. See how many months it takes to clear a balance at a fixed monthly payment, and the total interest paid.",
    primaryKeyword: "credit card payoff calculator",
    secondaryKeywords: ["credit card interest calculator", "debt payoff calculator", "months to pay off credit card"],
    slugEs: "calculadora-de-pago-de-tarjeta-de-credito",
    titleEs: "Calculadora de pago de tarjeta de crédito",
    shortDescriptionEs: "Descubre cuánto tardas en liquidar el saldo de una tarjeta.",
    seoTitleEs: "Calculadora de pago de tarjeta de crédito — Herramienta gratuita de tiempo de pago",
    metaDescriptionEs:
      "Calculadora gratuita de pago de tarjeta de crédito. Descubre cuántos meses tardas en liquidar un saldo con un pago mensual fijo y el interés total pagado.",
    primaryKeywordEs: "calculadora de pago de tarjeta de credito",
    secondaryKeywordsEs: ["calculadora de interes de tarjeta de credito", "calculadora de pago de deuda", "meses para pagar tarjeta de credito"],
    formulaExplanationEs:
      "La tasa mensual i es la TAE dividida entre 1200. Cada mes se suma un interés de saldo × i, y el pago reduce lo que queda, de modo que el saldo sigue una curva descendente. Al reordenar esa curva para despejar el número de pagos se obtiene n = −ln(1 − saldo × i ÷ pago) ÷ ln(1 + i). Si el pago no supera saldo × i, el argumento del logaritmo es cero o negativo y no existe un pago finito, por lo que la herramienta no muestra ningún resultado.",
    explanationEs:
      "La cifra de meses hasta el pago total que se muestra aquí es cuánto tarda un pago mensual fijo en liquidar el saldo de una tarjeta de crédito, dado el tipo de interés de la tarjeta. Es importante porque el interés de la tarjeta se capitaliza mensualmente a tasas altas, por lo que un saldo que se deja correr puede costar mucho más que las compras originales y tardar años en desaparecer. Esta calculadora de pago de tarjeta de crédito convierte la TAE en una tasa mensual, cobra ese interés sobre el saldo decreciente cada mes y despeja el número de pagos necesarios para llegar a cero, y luego informa el interés total pagado por el camino. Se usa la fórmula logarítmica porque el saldo baja una cantidad distinta cada mes: los primeros pagos son en su mayoría interés y los últimos en su mayoría capital, así que una simple división no captaría la curva. Los deudores usan una calculadora de pago de tarjeta de crédito para ver el costo real de arrastrar un saldo, para probar cómo un pago mensual mayor acorta el plazo y para decidir si una transferencia de saldo o un préstamo personal saldría más barato. Aquí surge una regla clave: si tu pago es menor o igual que el interés cobrado ese mes, el saldo nunca baja y la deuda nunca se salda, por lo que la herramienta no devuelve resultado en ese caso.",
    exampleEs: {
      inputs: { balance: 5000, apr: 20, monthlyPayment: 200 },
      explanation: "Un saldo de $5,000 al 20% de TAE pagado a $200 al mes se liquida en 33 meses y cuesta unos $1,522 en intereses.",
    },
    faqsEs: [
      { question: "¿Por qué cuesta tanto la deuda de tarjeta de crédito?", answer: "Las TAE de las tarjetas están entre las más altas de cualquier préstamo común, a menudo del 18 al 25% o más, y el interés se capitaliza mensualmente sobre el saldo que queda. Cuando pagas solo una cantidad pequeña, la mayor parte cubre el interés y poco toca el capital, por lo que el saldo apenas se mueve y el interés sigue acumulándose sobre él. Esa combinación de tasa alta y reducción lenta del capital explica el alto costo." },
      { question: "¿Qué pasa si solo pago el mínimo?", answer: "Los pagos mínimos suelen fijarse en un porcentaje bajo del saldo, a menudo apenas suficiente para cubrir el interés más una porción del capital. Pagar solo eso extiende el reembolso durante muchos años y multiplica el costo del interés, superando a veces el saldo original. También mantiene alta tu utilización de crédito, lo que puede pesar en tu puntuación. Pagar una cantidad fija mayor cada mes, como modela esta herramienta, salda la deuda mucho más rápido y barato." },
      { question: "¿Por qué un pago pequeño nunca puede saldar la tarjeta?", answer: "Si tu pago mensual es menor o igual que el interés cobrado ese mes, el saldo se mantiene igual o crece, así que nunca llega a cero. Por ejemplo, un saldo de $5,000 al 20% de TAE acumula unos $83 de interés el primer mes, de modo que un pago igual o menor no avanza. La herramienta no devuelve resultado en ese caso como advertencia para subir tu pago por encima del interés mensual." },
      { question: "¿Debo usar una transferencia de saldo para pagar más rápido?", answer: "Una transferencia de saldo a una tarjeta con una tasa introductoria del 0% puede pausar el interés durante una ventana promocional, dejando que cada pago reduzca el capital. Suele conllevar una comisión de transferencia del 3 al 5% y vuelve a una tasa alta cuando termina la promoción, así que ayuda solo si liquidas la mayor parte del saldo durante el periodo introductorio. Compara la comisión y el plazo con simplemente pagar más cada mes antes de decidir." },
      { question: "¿Pagar más que el mínimo realmente ayuda?", answer: "Sustancialmente. Como el interés se cobra sobre el saldo pendiente, cada dólar extra de pago reduce el capital y disminuye el interés cobrado el mes siguiente, componiendo el beneficio. Subir un pago mensual fijo aunque sea modestamente puede recortar el tiempo de pago en meses y el costo del interés en una gran fracción. Prueba a aumentar el pago mensual en esta herramienta para ver con qué rapidez caen tanto el plazo como el interés total." },
    ],
    fields: [
      { id: "balance", label: "Card balance", type: "number", unit: "$", placeholder: "5000", required: true, span: 2, min: 0 },
      { id: "apr", label: "APR", type: "number", unit: "%", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "monthlyPayment", label: "Monthly payment", type: "number", unit: "$", placeholder: "200", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "monthsToPayoff", label: "Months to payoff", format: "number", decimals: 0, unit: "months", isPrimary: true },
      { id: "totalInterest", label: "Total interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "n = −ln(1 − balance × i ÷ payment) ÷ ln(1 + i), i = APR ÷ 1200",
    explanation:
      "The months-to-payoff figure shown here is how long a fixed monthly payment takes to clear a credit card balance, given the card's interest rate. It matters because card interest compounds monthly at high rates, so a balance left to drift can cost far more than the original purchases and take years to erase. This credit card payoff calculator converts the APR to a monthly rate, charges that interest on the shrinking balance each month, and solves for the number of payments needed to reach zero, then reports the total interest paid along the way. The logarithmic formula is used because the balance falls by a different amount every month — early payments are mostly interest, later ones mostly principal — so a simple division would not capture the curve. Borrowers use a credit card payoff calculator to see the real cost of carrying a balance, to test how a larger monthly payment shortens the timeline, and to decide whether a balance transfer or a personal loan would be cheaper. A key rule surfaces here: if your payment is less than or equal to the interest charged that month, the balance never falls and the debt is never repaid, which is why the tool returns no result in that case.",
    formulaExplanation:
      "The monthly rate i is the APR divided by 1200. Each month interest of balance × i is added, and the payment chips away at what remains, so the balance follows a declining curve. Rearranging that curve to solve for the number of payments gives n = −ln(1 − balance × i ÷ payment) ÷ ln(1 + i). If the payment does not exceed balance × i, the logarithm's input is zero or negative and no finite payoff exists, so the tool shows no result.",
    example: {
      inputs: { balance: 5000, apr: 20, monthlyPayment: 200 },
      explanation: "A $5,000 balance at 20% APR paid at $200 a month clears in 33 months and costs about $1,522 in interest.",
    },
    faqs: [
      { question: "Why does credit card debt cost so much?", answer: "Card APRs are among the highest of any common borrowing, often 18–25% or more, and interest compounds monthly on the balance that remains. When you pay only a small amount, most of it covers interest and little touches the principal, so the balance barely moves and interest keeps accruing on it. That combination of a high rate and slow principal reduction is why a modest balance can take years to clear and cost hundreds or thousands extra." },
      { question: "What happens if I only pay the minimum?", answer: "Minimum payments are typically set at a low percentage of the balance, often just enough to cover interest plus a sliver of principal. Paying only that stretches repayment over many years and multiplies the interest cost, sometimes exceeding the original balance. It also keeps your credit utilization high, which can weigh on your score. Paying a fixed, larger amount each month — as this tool models — clears the debt far faster and cheaper." },
      { question: "Why can't a small payment ever pay off the card?", answer: "If your monthly payment is less than or equal to the interest charged that month, the balance stays the same or grows, so it never reaches zero. For example, a $5,000 balance at 20% APR accrues about $83 of interest in the first month, so a payment at or below that amount makes no progress. The tool returns no result in that case as a warning to raise your payment above the monthly interest." },
      { question: "Should I use a balance transfer to pay it off faster?", answer: "A balance transfer to a card with a 0% introductory rate can pause interest for a promotional window, letting every payment reduce principal. It often carries a transfer fee of 3–5% and reverts to a high rate after the promotion ends, so it helps only if you clear most of the balance during the intro period. Compare the fee and the timeline against simply paying more each month before deciding." },
      { question: "Does paying more than the minimum really help?", answer: "Substantially. Because interest is charged on the outstanding balance, every extra dollar of payment reduces principal and shrinks the interest charged next month, compounding the benefit. Raising a fixed monthly payment even modestly can cut the payoff time by months and the interest cost by a large fraction. Try increasing the monthly payment in this tool to see how sharply both the timeline and the total interest fall." },
    ],
    relatedCalculators: ["loan-calculator", "car-affordability-calculator", "apr-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/",
  },
  {
    id: "car-affordability",
    slug: "car-affordability-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Car Affordability Calculator",
    shortDescription: "Find the car price your budget supports.",
    seoTitle: "Car Affordability Calculator — How Much Car Can I Afford",
    metaDescription:
      "Free car affordability calculator. Find the maximum car price and loan your monthly budget supports at a given rate, term and down payment.",
    primaryKeyword: "car affordability calculator",
    secondaryKeywords: ["how much car can i afford", "car budget calculator", "auto loan affordability"],
    slugEs: "calculadora-de-asequibilidad-de-auto",
    titleEs: "Calculadora de asequibilidad de auto",
    shortDescriptionEs: "Encuentra el precio de auto que tu presupuesto permite.",
    seoTitleEs: "Calculadora de asequibilidad de auto — Cuánto auto puedo pagar",
    metaDescriptionEs:
      "Calculadora gratuita de asequibilidad de auto. Encuentra el precio y el préstamo máximo de auto que tu presupuesto mensual permite según la tasa, el plazo y el enganche.",
    primaryKeywordEs: "calculadora de asequibilidad de auto",
    secondaryKeywordsEs: ["cuanto auto puedo pagar", "calculadora de presupuesto de auto", "asequibilidad de prestamo de auto"],
    formulaExplanationEs:
      "La tasa mensual r es la tasa anual dividida entre 1200. El préstamo que un pago sostiene es el valor presente de ese flujo de pagos: pago × (1 − (1 + r)^−plazo) ÷ r, que descuenta cada pago futuro al día de hoy. Al sumar tu enganche se obtiene el precio total que puedes pagar, ya que el enganche es efectivo por encima de la cantidad prestada. Un pago mayor, una tasa más baja o un plazo más largo elevan por igual el préstamo que el mismo presupuesto sostiene.",
    explanationEs:
      "El precio máximo de auto que se muestra aquí es lo máximo que puedes gastar en un vehículo manteniendo el pago mensual dentro de un presupuesto que tú fijas, según la tasa, el plazo y cualquier enganche del préstamo. Es importante porque los compradores suelen comprar por precio de etiqueta, pero lo que realmente presiona a un hogar es el pago mensual, así que trabajar hacia atrás desde un pago asequible mantiene la compra realista. Esta calculadora de asequibilidad de auto convierte tu tasa en una cifra mensual, luego invierte la fórmula del pago del préstamo para hallar el mayor préstamo que ese pago puede sostener durante el plazo, y añade tu enganche para dar el precio total al que puedes apuntar. Invertir la fórmula de amortización es el método correcto porque es la matemática exacta que usa un prestamista para dimensionar un pago, de modo que el préstamo que devuelve es uno que un prestamista aprobaría en esos términos. Los compradores usan una calculadora de asequibilidad de auto para fijar un tope de precio antes de visitar un concesionario, para ver cómo un enganche mayor o un plazo más largo cambia su rango y para evitar que les vendan de más. Recuerda que el precio que devuelve es la cantidad financiada más tu enganche; impuestos, título, matrícula, seguro y comisiones son aparte, así que deja margen en el presupuesto para ellos y para los costos de tener el auto.",
    exampleEs: {
      inputs: { monthlyBudget: 400, rate: 6, term: 60, downPayment: 3000 },
      explanation: "Un presupuesto mensual de $400 al 6% en 60 meses sostiene un préstamo de unos $20,690, o un auto de $23,690 con $3,000 de enganche.",
    },
    faqsEs: [
      { question: "¿Qué parte de mis ingresos debe ir a un auto?", answer: "Una guía común limita los costos totales de transporte —pago, seguro, combustible y mantenimiento— a alrededor del 10 al 15% del salario neto, con el pago del préstamo bastante por debajo de eso. Algunos asesores sugieren un enganche del 20%, un plazo no mayor a 48 meses y pagos por debajo del 10% de los ingresos. Introduce un pago que encaje cómodamente junto a tus otras cuentas en lugar del más alto que apruebe un prestamista." },
      { question: "¿Un plazo más largo me deja pagar más auto?", answer: "Eleva el precio de etiqueta que tu presupuesto alcanza, porque repartir el saldo en más meses baja cada pago, de modo que el mismo pago sostiene un préstamo mayor. El inconveniente es que un plazo más largo significa más interés total y un mayor riesgo de deber más de lo que vale el auto al depreciarse. Estirarse a 72 u 84 meses para comprar un vehículo más caro suele costar mucho más en total, así que sopesa el rango mayor frente al costo añadido." },
      { question: "¿El precio mostrado es el costo total del auto?", answer: "No. La cifra es la cantidad que financias más tu enganche, es decir, solo el precio del vehículo. Encima vienen el impuesto sobre las ventas, las tasas de título y matrícula, los cargos de documentación del concesionario y a menudo complementos, cualquiera de los cuales puede añadir varios puntos porcentuales. Los costos continuos de seguro, combustible, mantenimiento y reparaciones son aparte. Apunta un poco por debajo del máximo que devuelve esta herramienta para que esos costos adicionales encajen." },
      { question: "¿Cómo afecta el enganche a la asequibilidad?", answer: "Un enganche es efectivo que pagas por adelantado, así que se suma directamente al precio del auto que puedes pagar por encima del préstamo que tu presupuesto sostiene. También reduce la cantidad financiada, lo que baja el interés total y disminuye la probabilidad de quedar por debajo del valor del préstamo temprano. Un enganche mayor a veces puede conseguir también una mejor tasa. Aumenta el campo de enganche para ver subir el precio objetivo dólar por dólar." },
      { question: "¿Qué tasa de interés debo usar?", answer: "Introduce la tasa anual que esperas que te ofrezcan, que depende mucho de tu puntuación de crédito, del plazo del préstamo y de si el auto es nuevo o usado. Los compradores con buen crédito califican para las tasas más bajas, mientras que los préstamos de autos usados y de plazo más largo suelen tener tasas más altas. Si no te han preaprobado, usa una tasa conservadora y ajústala cuando un prestamista te cotice, luego vuelve a revisar cómo cambia el precio asequible." },
    ],
    fields: [
      { id: "monthlyBudget", label: "Monthly payment budget", type: "number", unit: "$", placeholder: "400", required: true, span: 1, min: 0 },
      { id: "rate", label: "Interest rate", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "term", label: "Loan term", type: "number", unit: "months", placeholder: "60", required: true, span: 1, min: 0 },
      { id: "downPayment", label: "Down payment", type: "number", unit: "$", placeholder: "3000", required: false, span: 1, min: 0 },
    ],
    results: [
      { id: "maxCarPrice", label: "Max car price", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "maxLoan", label: "Max loan amount", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Loan = payment × (1 − (1 + r)^−term) ÷ r, r = rate ÷ 1200 · Price = loan + down payment",
    explanation:
      "The maximum car price shown here is the most you can spend on a vehicle while keeping the monthly payment within a budget you set, given the loan rate, term and any down payment. It matters because buyers usually shop by sticker price, yet what actually strains a household is the monthly payment, so working backward from an affordable payment keeps the purchase realistic. This car affordability calculator converts your rate to a monthly figure, then reverses the loan payment formula to find the largest loan that payment can support over the term, and adds your down payment to give the total price you can target. Reversing the amortization formula is the right method because it is the exact math a lender uses to size a payment, so the loan it returns is one a lender would actually approve at those terms. Shoppers use a car affordability calculator to set a price ceiling before visiting a dealer, to see how a bigger down payment or a longer term changes their range, and to avoid being upsold. Remember the price this returns is the amount financed plus your down payment; taxes, title, registration, insurance and fees are extra, so leave room in the budget for them and for the running costs of ownership.",
    formulaExplanation:
      "The monthly rate r is the annual rate divided by 1200. The loan a payment supports is the present value of that payment stream: payment × (1 − (1 + r)^−term) ÷ r, which discounts every future payment back to today. Adding your down payment gives the full price you can afford, since the down payment is cash on top of the borrowed amount. A larger payment, lower rate or longer term all raise the loan the same budget supports.",
    example: {
      inputs: { monthlyBudget: 400, rate: 6, term: 60, downPayment: 3000 },
      explanation: "A $400 monthly budget at 6% over 60 months supports about a $20,690 loan, or a $23,690 car with $3,000 down.",
    },
    faqs: [
      { question: "How much of my income should go to a car?", answer: "A common guideline caps total transportation costs — payment, insurance, fuel and maintenance — at around 10–15% of take-home pay, with the loan payment itself well under that. Some advisers suggest a 20% down payment, a term no longer than 48 months, and payments under 10% of income. Enter a payment that fits comfortably alongside your other bills rather than the largest one a lender will approve, since approval limits often exceed what is wise." },
      { question: "Does a longer loan term let me afford more car?", answer: "It raises the sticker price your budget reaches, because spreading the balance over more months lowers each payment, so the same payment supports a larger loan. The catch is that a longer term means more total interest and a higher risk of owing more than the car is worth as it depreciates. Stretching to 72 or 84 months to buy a pricier vehicle often costs far more overall, so weigh the larger range against the added cost." },
      { question: "Is the price shown the total cost of the car?", answer: "No. The figure is the amount you finance plus your down payment — the vehicle's price only. On top of it come sales tax, title and registration fees, dealer documentation charges and often add-ons, any of which can add several percent. Ongoing costs of insurance, fuel, maintenance and repairs are separate again. Aim a little below the maximum this tool returns so those extra upfront and running costs still fit your overall budget." },
      { question: "How does the down payment affect affordability?", answer: "A down payment is cash you pay upfront, so it adds directly to the car price you can afford on top of the loan your budget supports. It also shrinks the amount financed, which lowers total interest and reduces the chance of being underwater on the loan early on. A larger down payment can sometimes earn a better rate too. Increase the down payment field to see the target price rise dollar for dollar." },
      { question: "What interest rate should I use?", answer: "Enter the annual percentage rate you expect to be offered, which depends heavily on your credit score, the loan term, and whether the car is new or used. Buyers with strong credit qualify for the lowest rates, while used-car and longer-term loans usually carry higher ones. If you have not been pre-approved, use a conservative rate and refine it once a lender quotes you, then recheck how the affordable price shifts with the real number." },
    ],
    relatedCalculators: ["loan-calculator", "credit-card-payoff-calculator", "mortgage-points-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/",
  },
  {
    id: "cd-interest",
    slug: "cd-interest-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "CD Interest Calculator",
    shortDescription: "Find the maturity value of a certificate of deposit.",
    seoTitle: "CD Interest Calculator — Free Certificate of Deposit Tool",
    metaDescription:
      "Free CD interest calculator. Find the maturity value and interest earned on a certificate of deposit from principal, APY and term.",
    primaryKeyword: "cd interest calculator",
    secondaryKeywords: ["certificate of deposit calculator", "cd maturity calculator", "cd return calculator"],
    slugEs: "calculadora-de-interes-de-cd",
    titleEs: "Calculadora de interés de CD",
    shortDescriptionEs: "Halla el valor al vencimiento de un certificado de depósito.",
    seoTitleEs: "Calculadora de interés de CD — Herramienta gratuita de certificado de depósito",
    metaDescriptionEs:
      "Calculadora gratuita de interés de CD. Halla el valor al vencimiento y el interés ganado de un certificado de depósito a partir del capital, la APY y el plazo.",
    primaryKeywordEs: "calculadora de interes de cd",
    secondaryKeywordsEs: ["calculadora de certificado de deposito", "calculadora de vencimiento de cd", "calculadora de rendimiento de cd"],
    formulaExplanationEs:
      "El capital es tu depósito y la APY es el rendimiento porcentual anual que el banco garantiza, que ya refleja con qué frecuencia se capitaliza. Dividir la APY entre 100 la convierte en decimal, y elevar (1 + APY) al número de años hace crecer el depósito a esa tasa anual real cada año. Multiplicar el capital por ese factor da el valor al vencimiento; restar el capital deja el interés ganado. Usar la APY evita tener que modelar por separado la frecuencia de capitalización.",
    explanationEs:
      "El valor al vencimiento que se muestra aquí es lo que valdrá un certificado de depósito cuando termine su plazo, según la cantidad que depositas y el rendimiento porcentual anual que el banco garantiza. Es importante porque un CD encierra tu dinero durante un periodo fijo a cambio de un rendimiento fijo y conocido, así que ver el pago exacto por adelantado te permite comparar CD frente a cuentas de ahorro y decidir si vale la pena inmovilizar los fondos. Esta calculadora de interés de CD hace crecer el capital por la APY una vez al año durante el plazo, porque la APY ya incorpora la frecuencia de capitalización del banco y expresa el crecimiento anual real. Usar la APY directamente es el método correcto: es la única cifra que permite comparar ofertas con distintos calendarios de capitalización en igualdad de condiciones, que es exactamente por lo que los reguladores exigen a los bancos divulgarla. Los ahorradores usan una calculadora de interés de CD para elegir un plazo, comparar tasas entre bancos y planificar una meta con fecha conocida, como un enganche o un gasto programado. Como la tasa es fija, la cifra de vencimiento es fiable en lugar de una estimación, siempre que dejes el dinero intacto, ya que retirarlo antes suele activar una penalización que renuncia a parte del interés mostrado aquí.",
    exampleEs: {
      inputs: { principal: 10000, apy: 5, years: 3 },
      explanation: "$10,000 a una APY del 5% durante 3 años vencen en $11,576.25, ganando $1,576.25 en intereses.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre APR y APY?", answer: "La APY, el rendimiento porcentual anual, es la tasa que deberías usar para un CD porque incluye el efecto de la capitalización y expresa la cantidad real en que crece tu dinero en un año. La APR, la tasa porcentual anual, es una tasa simple que ignora la capitalización y se usa principalmente para préstamos. Los bancos cotizan los CD por APY precisamente para que los ahorradores comparen ofertas de forma justa, ya que dos CD con la misma tasa nominal pero distinta frecuencia de capitalización tienen APY distintas." },
      { question: "¿Qué pasa si retiro de un CD antes de tiempo?", answer: "La mayoría de los CD cobran una penalización por retiro anticipado, comúnmente un número fijo de meses de interés, si sacas el dinero antes de que termine el plazo. En un CD corto esto puede borrar la mayor parte o todo el interés ganado, y en algunos casos afectar al capital. Por eso un CD conviene para dinero que estás seguro de no necesitar hasta el vencimiento. Si el acceso importa, un CD sin penalización o una cuenta de ahorro de alto rendimiento pueden encajar mejor." },
      { question: "¿Son los CD un lugar seguro para guardar dinero?", answer: "Sí, dentro de ciertos límites. Los CD en bancos asegurados por la FDIC, o en cooperativas de crédito aseguradas por la NCUA, están protegidos hasta el límite de cobertura por depositante y por institución, de modo que el capital y el interés ganado no corren riesgo de pérdida. Las principales desventajas son inmovilizar los fondos durante el plazo y la posibilidad de que la inflación supere la tasa fija, erosionando el poder adquisitivo real. Para cantidades aseguradas, un CD casi no tiene riesgo de perder el dinero." },
      { question: "¿Debo elegir un plazo de CD largo o corto?", answer: "Los plazos más largos suelen pagar tasas más altas pero encierran tu dinero por más tiempo y te exponen al riesgo de que las tasas suban mientras estás comprometido. Los plazos más cortos pagan menos pero liberan los fondos antes. Una escalera de CD —repartir el dinero en varios plazos que vencen en fechas escalonadas— es un compromiso común, que da acceso periódico y una tasa mezclada. Ajusta el plazo a cuándo realmente necesitarás el dinero y a tu visión de hacia dónde van las tasas." },
      { question: "¿El interés se capitaliza automáticamente?", answer: "Dentro del CD, sí: la APY ya refleja la capitalización del banco, sea diaria, mensual o trimestral, así que la cifra de vencimiento supone que el interés se reinvierte dentro del CD hasta que termina el plazo. Algunos CD en cambio pagan el interés periódicamente a una cuenta vinculada, en cuyo caso tu saldo no se capitaliza y el pago es menor al mostrado. Comprueba si tu CD capitaliza o distribuye el interés, e introduce la APY cotizada en cualquier caso." },
    ],
    fields: [
      { id: "principal", label: "Deposit amount", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "apy", label: "APY", type: "number", unit: "%", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Term", type: "number", unit: "years", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "maturityValue", label: "Maturity value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "interestEarned", label: "Interest earned", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Maturity = principal × (1 + APY ÷ 100)^years",
    explanation:
      "The maturity value shown here is what a certificate of deposit will be worth when its term ends, based on the amount you deposit and the annual percentage yield the bank guarantees. It matters because a CD locks your money away for a fixed period in exchange for a fixed, known return, so seeing the exact payout upfront lets you compare CDs against savings accounts and decide whether tying up the funds is worthwhile. This CD interest calculator grows the principal by the APY once per year for the length of the term, because the APY already bundles in the bank's compounding frequency and states the true annual growth. Using the APY directly is the right method: it is the single figure that lets you compare offers with different compounding schedules on equal footing, which is exactly why regulators require banks to disclose it. Savers use a CD interest calculator to choose a term, compare rates across banks, and plan for a goal with a known date, such as a down payment or a scheduled expense. Because the rate is fixed, the maturity figure is dependable rather than an estimate — provided you leave the money untouched, since withdrawing early usually triggers a penalty that forfeits some of the interest shown here.",
    formulaExplanation:
      "Principal is your deposit and APY is the annual percentage yield the bank guarantees, already reflecting how often it compounds. Dividing APY by 100 turns it into a decimal, and raising (1 + APY) to the number of years grows the deposit by that true annual rate each year. Multiplying the principal by that factor gives the maturity value; subtracting the principal leaves the interest earned. Using APY sidesteps the need to model the compounding schedule separately.",
    example: {
      inputs: { principal: 10000, apy: 5, years: 3 },
      explanation: "$10,000 at a 5% APY for 3 years matures at $11,576.25, earning $1,576.25 in interest.",
    },
    faqs: [
      { question: "What is the difference between APR and APY?", answer: "APY, the annual percentage yield, is the rate you should use for a CD because it includes the effect of compounding and states the true amount your money grows in a year. APR, the annual percentage rate, is a simple rate that ignores compounding and is used mainly for borrowing. Banks quote CDs by APY precisely so savers can compare offers fairly, since two CDs with the same nominal rate but different compounding frequencies have different APYs." },
      { question: "What happens if I withdraw from a CD early?", answer: "Most CDs charge an early withdrawal penalty, commonly a set number of months of interest, if you take the money out before the term ends. On a short CD this can wipe out most or all of the interest earned, and in some cases dip into principal. That is why a CD suits money you are confident you will not need until maturity. If access matters, a no-penalty CD or a high-yield savings account may fit better." },
      { question: "Are CDs a safe place to keep money?", answer: "Yes, within limits. CDs at banks insured by the FDIC, or at credit unions insured by the NCUA, are protected up to the coverage limit per depositor, per institution, so the principal and earned interest are not at risk of loss. The main trade-offs are locking up the funds for the term and the chance that inflation outpaces the fixed rate, eroding real purchasing power. For insured amounts, a CD carries essentially no risk of losing the money." },
      { question: "Should I choose a long or short CD term?", answer: "Longer terms usually pay higher rates but lock your money away longer and expose you to the risk that rates rise while you are committed. Shorter terms pay less but free the funds sooner. A CD ladder — splitting money across several terms that mature at staggered dates — is a common compromise, giving periodic access and a blended rate. Match the term to when you will actually need the money and to your view on where rates are heading." },
      { question: "Does the interest compound automatically?", answer: "Within the CD, yes — the APY already reflects the bank's compounding, whether daily, monthly or quarterly, so the maturity figure assumes interest is reinvested inside the CD until the term ends. Some CDs instead pay interest out periodically to a linked account, in which case your balance does not compound and the payout is lower than shown. Check whether your CD compounds or disburses interest, and enter the quoted APY either way for an accurate maturity value." },
    ],
    relatedCalculators: ["savings-calculator", "compound-interest-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "U.S. SEC — Investor.gov",
    sourceUrl: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
  },
  {
    id: "mortgage-points",
    slug: "mortgage-points-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Mortgage Points Calculator",
    shortDescription: "See what discount points cost and when they break even.",
    seoTitle: "Mortgage Points Calculator — Free Discount Points Tool",
    metaDescription:
      "Free mortgage points calculator. See the upfront cost of discount points and how many months it takes to break even on the monthly savings.",
    primaryKeyword: "mortgage points calculator",
    secondaryKeywords: ["discount points calculator", "mortgage points break even", "buying down interest rate"],
    slugEs: "calculadora-de-puntos-hipotecarios",
    titleEs: "Calculadora de puntos hipotecarios",
    shortDescriptionEs: "Ve cuánto cuestan los puntos de descuento y cuándo se recuperan.",
    seoTitleEs: "Calculadora de puntos hipotecarios — Herramienta gratuita de puntos de descuento",
    metaDescriptionEs:
      "Calculadora gratuita de puntos hipotecarios. Ve el costo inicial de los puntos de descuento y cuántos meses tarda en recuperarse con el ahorro mensual.",
    primaryKeywordEs: "calculadora de puntos hipotecarios",
    secondaryKeywordsEs: ["calculadora de puntos de descuento", "punto de equilibrio de puntos hipotecarios", "bajar la tasa de interes"],
    formulaExplanationEs:
      "Cada punto de descuento cuesta el uno por ciento del préstamo, así que el costo de los puntos es préstamo × puntos ÷ 100. Esa comisión inicial compra una tasa más baja, que recorta tu pago mensual en una cantidad fija. Dividir el costo de los puntos entre ese ahorro mensual cuenta cuántos meses de ahorro hacen falta para recuperar la comisión: el punto de equilibrio. Mantén el préstamo más allá de esos meses y los puntos salen a favor; vende o refinancia antes y el costo inicial no se recupera.",
    explanationEs:
      "El costo de los puntos que se muestra aquí es la comisión inicial para comprar puntos de descuento hipotecarios, y el punto de equilibrio es cuántos meses de pagos más bajos tarda en recuperar esa comisión. Es importante porque pagar puntos baja tu tasa de interés, pero solo compensa si mantienes el préstamo lo suficiente para que el ahorro mensual supere el costo inicial. Esta calculadora de puntos hipotecarios multiplica tu monto de préstamo por el número de puntos —cada punto cuesta el uno por ciento del préstamo— para hallar la comisión, luego divide esa comisión entre tu ahorro mensual para hallar el mes de equilibrio. El método del punto de equilibrio es la forma estándar de juzgar los puntos porque la decisión es en esencia un intercambio: efectivo ahora a cambio de un pago menor después, y el punto de cruce te dice cuándo el intercambio se vuelve rentable. Los compradores de vivienda usan una calculadora de puntos hipotecarios para decidir si bajar la tasa vale la pena, para comparar ofertas de préstamo con y sin puntos y para sopesar los puntos frente a un enganche mayor. La regla que surge es simple: si esperas quedarte en la casa y mantener el préstamo más allá del mes de equilibrio, los puntos ahorran dinero en total; si podrías vender o refinanciar antes, pagarlos pierde dinero, así que ajusta la decisión a cuánto tiempo planeas realmente conservar el préstamo.",
    exampleEs: {
      inputs: { loanAmount: 300000, points: 1, monthlySavings: 50 },
      explanation: "Un punto sobre un préstamo de $300,000 cuesta $3,000; ahorrando $50 al mes, se recupera tras 60 meses.",
    },
    faqsEs: [
      { question: "¿Qué es un punto de descuento hipotecario?", answer: "Un punto de descuento es una comisión que pagas al prestamista al cierre para bajar la tasa de interés de tu préstamo, una práctica llamada bajar la tasa. Un punto cuesta el uno por ciento del monto del préstamo y normalmente reduce la tasa en una fracción pequeña de un punto porcentual, aunque la reducción exacta varía por prestamista y mercado. Los puntos son opcionales y se pagan por adelantado, así que cambian efectivo al cierre por un pago mensual menor durante la vida del préstamo." },
      { question: "¿Valen la pena los puntos hipotecarios?", answer: "Depende de cuánto tiempo mantengas el préstamo. Los puntos compensan solo si te quedas más allá del mes de equilibrio, cuando el ahorro mensual acumulado supera el costo inicial. Si planeas vivir en la casa muchos años y es improbable que refinancies, los puntos pueden ahorrar dinero real con el tiempo. Si podrías mudarte o refinanciar en unos pocos años, el costo inicial supera el ahorro, así que los puntos normalmente no valen la pena para una propiedad de corto plazo." },
      { question: "¿Cómo se calcula el punto de equilibrio?", answer: "Divide el costo total de los puntos entre la cantidad que te ahorran cada mes. En el ejemplo, $3,000 de puntos que ahorran $50 al mes se recuperan tras 60 meses, o cinco años. Más allá de ese punto el pago reducido es puro beneficio; antes de él, aún no has recuperado la comisión inicial. Esta simple razón es la prueba central para saber si comprar puntos tiene sentido financiero dado cuánto tiempo esperas mantener el préstamo." },
      { question: "¿Los puntos hipotecarios son deducibles de impuestos?", answer: "Los puntos pagados para bajar la tasa de una hipoteca de tu vivienda principal suelen ser deducibles, a veces por completo en el año pagado y a veces repartidos durante la vida del préstamo, según las circunstancias. Las reglas son específicas y cambian, y difieren para refinanciaciones y segundas viviendas. Como el tratamiento fiscal puede alterar el costo real de los puntos, confirma las reglas vigentes con el IRS o un profesional de impuestos antes de considerar una deducción en tu decisión." },
      { question: "¿Debo comprar puntos o dar un enganche mayor?", answer: "Ambos usan efectivo por adelantado pero hacen cosas distintas: los puntos bajan tu tasa de interés y tu pago mensual, mientras que un enganche mayor reduce la cantidad prestada y puede ayudarte a evitar el seguro hipotecario. Si tu enganche ya está en un umbral como el 20%, el efectivo extra hacia puntos puede bajar el costo total si te quedas lo suficiente. Si estás por debajo de ese umbral, aumentar el enganche para recortar el seguro suele ganar. Compara ambos frente a tu plazo." },
    ],
    fields: [
      { id: "loanAmount", label: "Loan amount", type: "number", unit: "$", placeholder: "300000", required: true, span: 2, min: 0 },
      { id: "points", label: "Points purchased", type: "number", unit: "points", placeholder: "1", required: true, span: 1, min: 0, step: 0.25 },
      { id: "monthlySavings", label: "Monthly payment savings", type: "number", unit: "$", placeholder: "50", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "pointsCost", label: "Points cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "breakevenMonths", label: "Break-even time", format: "number", decimals: 0, unit: "months", isPrimary: false },
    ],
    formula: "Points cost = loan × points ÷ 100 · Break-even months = points cost ÷ monthly savings",
    explanation:
      "The points cost shown here is the upfront fee to buy mortgage discount points, and the break-even time is how many months of lower payments it takes to recover that fee. It matters because paying points lowers your interest rate, but only pays off if you keep the loan long enough for the monthly savings to outweigh the upfront cost. This mortgage points calculator multiplies your loan amount by the number of points — each point costs one percent of the loan — to find the fee, then divides that fee by your monthly saving to find the break-even month. The break-even method is the standard way to judge points because the decision is fundamentally a trade: cash now for a smaller payment later, and the crossover point tells you when the trade turns profitable. Homebuyers use a mortgage points calculator to decide whether buying down the rate is worthwhile, to compare loan offers with and without points, and to weigh points against a larger down payment. The rule that emerges is simple: if you expect to stay in the home and keep the loan past the break-even month, points save money overall; if you might sell or refinance before then, paying them loses money, so match the decision to how long you realistically plan to keep the loan.",
    formulaExplanation:
      "Each discount point costs one percent of the loan, so the points cost is loan × points ÷ 100. That upfront fee buys a lower rate, which trims your monthly payment by a fixed amount. Dividing the points cost by that monthly saving counts how many months of savings it takes to recover the fee — the break-even point. Keep the loan past that many months and points come out ahead; sell or refinance sooner and the upfront cost is not recovered.",
    example: {
      inputs: { loanAmount: 300000, points: 1, monthlySavings: 50 },
      explanation: "One point on a $300,000 loan costs $3,000; saving $50 a month, it breaks even after 60 months.",
    },
    faqs: [
      { question: "What is a mortgage discount point?", answer: "A discount point is a fee you pay the lender at closing to lower your loan's interest rate, a practice called buying down the rate. One point costs one percent of the loan amount and typically reduces the rate by a small fraction of a percent, though the exact reduction varies by lender and market. Points are optional and paid upfront, so they trade cash at closing for a smaller monthly payment over the life of the loan." },
      { question: "Are mortgage points worth it?", answer: "It depends on how long you keep the loan. Points pay off only if you stay past the break-even month, when accumulated monthly savings exceed the upfront cost. If you plan to live in the home for many years and are unlikely to refinance, points can save real money over time. If you might move or refinance within a few years, the upfront cost outweighs the savings, so points are usually not worthwhile for short-term ownership." },
      { question: "How is the break-even point calculated?", answer: "Divide the total cost of the points by the amount they save you each month. In the example, $3,000 of points saving $50 a month breaks even after 60 months, or five years. Beyond that point the reduced payment is pure benefit; before it, you have not yet recovered the upfront fee. This simple ratio is the core test for whether buying points makes financial sense given how long you expect to hold the loan." },
      { question: "Are mortgage points tax-deductible?", answer: "Points paid to buy down the rate on a mortgage for your main home are often deductible, sometimes fully in the year paid and sometimes spread over the life of the loan, depending on the circumstances. Rules are specific and change, and they differ for refinances and second homes. Because the tax treatment can shift the real cost of points, confirm the current rules with the IRS or a tax professional before factoring a deduction into your decision." },
      { question: "Should I buy points or make a bigger down payment?", answer: "Both use cash upfront but do different things: points lower your interest rate and monthly payment, while a larger down payment reduces the amount borrowed and can help you avoid mortgage insurance. If your down payment is already at a threshold like 20%, extra cash toward points may lower lifetime cost if you stay long enough. If you are below that threshold, boosting the down payment to cut insurance often wins. Compare both against your timeline." },
    ],
    relatedCalculators: ["mortgage-calculator", "loan-calculator", "car-affordability-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "finance",
    formulaSource: "Consumer Financial Protection Bureau (CFPB)",
    sourceUrl: "https://www.consumerfinance.gov/",
  },
];
