import type { CalculatorDefinition } from "../types";

export const financeR4Calculators: CalculatorDefinition[] = [
  {
    id: "debt-to-income",
    slug: "debt-to-income-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Debt-to-Income Ratio Calculator",
    shortDescription: "See what share of your income goes to debt.",
    seoTitle: "Debt-to-Income Ratio Calculator — Free DTI Tool",
    metaDescription:
      "Free debt-to-income calculator. Find your DTI ratio from monthly debt and gross income, and see whether lenders view it as healthy or high.",
    primaryKeyword: "debt to income calculator",
    secondaryKeywords: ["dti calculator", "debt to income ratio", "dti ratio calculator"],
    fields: [
      { id: "monthlyDebt", label: "Total monthly debt payments", type: "number", unit: "$", placeholder: "2000", required: true, span: 1, min: 0 },
      { id: "grossMonthlyIncome", label: "Gross monthly income", type: "number", unit: "$", placeholder: "6000", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "dti", label: "Debt-to-income ratio", format: "percentage", decimals: 1, isPrimary: true },
      { id: "rating", label: "Lender rating", format: "text", isPrimary: false },
    ],
    formula: "DTI = total monthly debt ÷ gross monthly income × 100",
    explanation:
      "Your debt-to-income ratio, or DTI, is the share of your gross monthly income that goes toward paying debts, expressed as a percentage. It matters because it is one of the first numbers a lender checks when you apply for a mortgage, car loan or personal loan: it signals how much room your budget has to take on a new payment. This debt-to-income calculator adds up your recurring monthly debt obligations — mortgage or rent, car loans, student loans, minimum credit card payments and similar — and divides that total by your gross monthly income before tax, then multiplies by 100 to get the percentage. Comparing debt to pre-tax income is the standard the lending industry uses, so the figure here lines up with how underwriters actually assess you. The tool also labels the result: under 36% is generally healthy and leaves comfortable margin, 36% to 43% is manageable but tighter, and above 43% is high and often the ceiling for a qualified mortgage. Borrowers use a DTI calculator to gauge whether they are ready to apply, to see how paying down a balance would improve their standing, and to set a realistic borrowing target. Lower is better: a smaller ratio widens your loan options and typically earns better terms, so if yours is high, reducing debt or raising income before applying can meaningfully change the offers you receive.",
    formulaExplanation:
      "Total monthly debt is the sum of every recurring debt payment you owe in a month, and gross monthly income is what you earn before taxes and deductions. Dividing the two shows what fraction of your income is already committed to debt, and multiplying by 100 states it as a percentage lenders can read at a glance. Gross rather than net income is used because it is the consistent, verifiable figure underwriters rely on, so the ratio matches the one a lender will calculate.",
    example: {
      inputs: { monthlyDebt: 2000, grossMonthlyIncome: 6000 },
      explanation: "$2,000 of monthly debt against $6,000 of gross income is a 33.3% DTI — a healthy ratio that leaves room to borrow.",
    },
    faqs: [
      { question: "What counts as a good debt-to-income ratio?", answer: "Lenders generally view a DTI below 36% as healthy, with the debt leaving comfortable room in your budget. Between 36% and 43% is still workable for many loans but signals a tighter budget. Above 43% is considered high and is often the upper limit for a qualified mortgage. The lower your ratio, the stronger you look to lenders and the better the rates and terms you are likely to be offered, so aim well under 36% where you can." },
      { question: "Which debts are included in the calculation?", answer: "Include recurring monthly obligations: your mortgage or rent, auto loans, student loans, personal loans, minimum credit card payments, and court-ordered payments like child support or alimony. Do not include everyday living costs such as groceries, utilities, insurance premiums or streaming subscriptions, since lenders exclude those from DTI. Enter the sum of your qualifying debt payments so the ratio reflects the same figure an underwriter would use when reviewing your application." },
      { question: "Should I use gross or net income?", answer: "Use gross income — your total pay before taxes, retirement contributions and other deductions. This is deliberate: lenders calculate DTI against gross income because it is a standardized, easily verified figure that they can confirm from pay stubs and tax returns. Using net income would produce a higher, non-comparable ratio that does not match how you will be assessed. Enter your monthly gross pay so the result mirrors the lender's own calculation." },
      { question: "How can I lower my debt-to-income ratio?", answer: "You can reduce it two ways: cut your monthly debt or raise your income. Paying off a small loan entirely removes its whole payment from the numerator, which often helps more than chipping at a large balance. Avoiding new debt before applying keeps the ratio from climbing. On the income side, a raise, a side income or adding a co-borrower's income can lift the denominator. Even a modest improvement can move you into a better lending tier." },
      { question: "Does my DTI affect my credit score?", answer: "Not directly — your credit score does not include your income, so DTI is not a scoring factor. However, the two are related: high balances that push up your DTI also raise your credit utilization, which does affect your score. Lenders look at both separately, using your score to judge repayment history and your DTI to judge capacity to take on more debt. Keeping debt low helps both numbers at once." },
    ],
    relatedCalculators: ["loan-calculator", "mortgage-calculator", "credit-card-payoff-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "Consumer Financial Protection Bureau",
    sourceUrl: "https://www.consumerfinance.gov/",
    slugEs: "calculadora-de-relacion-deuda-ingresos",
    titleEs: "Calculadora de Relación Deuda-Ingresos",
    shortDescriptionEs: "Vea qué parte de sus ingresos se destina a la deuda.",
    seoTitleEs: "Calculadora de Relación Deuda-Ingresos — Herramienta DTI Gratuita",
    metaDescriptionEs:
      "Calculadora de relación deuda-ingresos gratuita. Encuentre su índice DTI a partir de la deuda mensual y el ingreso bruto, y vea si los prestamistas lo consideran saludable o alto.",
    primaryKeywordEs: "calculadora de relacion deuda ingresos",
    secondaryKeywordsEs: ["calculadora dti", "relacion deuda ingresos", "calculadora de indice dti"],
    formulaExplanationEs:
      "La deuda mensual total es la suma de cada pago de deuda recurrente que debe en un mes, y el ingreso mensual bruto es lo que gana antes de impuestos y deducciones. Dividir ambos muestra qué fracción de su ingreso ya está comprometida con deudas, y multiplicar por 100 lo expresa como un porcentaje que los prestamistas pueden leer de un vistazo. Se usa el ingreso bruto en lugar del neto porque es la cifra consistente y verificable en la que confían los evaluadores, de modo que el índice coincide con el que calculará un prestamista.",
    explanationEs:
      "Su relación deuda-ingresos, o DTI, es la parte de su ingreso mensual bruto que se destina al pago de deudas, expresada como porcentaje. Importa porque es uno de los primeros números que revisa un prestamista cuando solicita una hipoteca, un préstamo de auto o un préstamo personal: indica cuánto margen tiene su presupuesto para asumir un nuevo pago. Esta calculadora de relación deuda-ingresos suma sus obligaciones de deuda mensuales recurrentes —hipoteca o alquiler, préstamos de auto, préstamos estudiantiles, pagos mínimos de tarjetas de crédito y similares— y divide ese total entre su ingreso mensual bruto antes de impuestos, luego lo multiplica por 100 para obtener el porcentaje. Comparar la deuda con el ingreso antes de impuestos es el estándar que usa la industria crediticia, por lo que la cifra aquí coincide con la forma en que los evaluadores lo analizan realmente. La herramienta también etiqueta el resultado: menos del 36% suele ser saludable y deja un margen cómodo, del 36% al 43% es manejable pero más ajustado, y por encima del 43% es alto y suele ser el techo para una hipoteca calificada. Los prestatarios usan una calculadora de DTI para saber si están listos para solicitar, ver cómo mejoraría su situación al reducir un saldo y fijar una meta realista de endeudamiento. Menos es mejor: una relación más baja amplía sus opciones de préstamo y suele obtener mejores condiciones, así que si la suya es alta, reducir la deuda o aumentar los ingresos antes de solicitar puede cambiar de forma significativa las ofertas que reciba.",
    exampleEs: {
      inputs: { monthlyDebt: 2000, grossMonthlyIncome: 6000 },
      explanation: "$2,000 de deuda mensual frente a $6,000 de ingreso bruto es un DTI del 33.3% — una relación saludable que deja margen para pedir prestado.",
    },
    faqsEs: [
      { question: "¿Qué se considera una buena relación deuda-ingresos?", answer: "Los prestamistas generalmente ven un DTI por debajo del 36% como saludable, ya que la deuda deja un margen cómodo en su presupuesto. Entre el 36% y el 43% sigue siendo viable para muchos préstamos, pero señala un presupuesto más ajustado. Por encima del 43% se considera alto y suele ser el límite superior para una hipoteca calificada. Cuanto más baja sea su relación, más fuerte se ve ante los prestamistas y mejores tasas y condiciones probablemente le ofrezcan, así que apunte muy por debajo del 36% cuando pueda." },
      { question: "¿Qué deudas se incluyen en el cálculo?", answer: "Incluya las obligaciones mensuales recurrentes: su hipoteca o alquiler, préstamos de auto, préstamos estudiantiles, préstamos personales, pagos mínimos de tarjetas de crédito y pagos ordenados por un tribunal como manutención de hijos o pensión alimenticia. No incluya gastos cotidianos como comida, servicios públicos, primas de seguro o suscripciones, ya que los prestamistas los excluyen del DTI. Ingrese la suma de sus pagos de deuda que califican para que la relación refleje la misma cifra que usaría un evaluador al revisar su solicitud." },
      { question: "¿Debo usar el ingreso bruto o el neto?", answer: "Use el ingreso bruto: su pago total antes de impuestos, aportes de jubilación y otras deducciones. Esto es deliberado: los prestamistas calculan el DTI contra el ingreso bruto porque es una cifra estandarizada y fácilmente verificable que pueden confirmar con talones de pago y declaraciones de impuestos. Usar el ingreso neto produciría una relación más alta y no comparable que no coincide con la forma en que será evaluado. Ingrese su pago bruto mensual para que el resultado refleje el cálculo del propio prestamista." },
      { question: "¿Cómo puedo reducir mi relación deuda-ingresos?", answer: "Puede reducirla de dos maneras: recortar su deuda mensual o aumentar sus ingresos. Pagar por completo un préstamo pequeño elimina todo su pago del numerador, lo que a menudo ayuda más que reducir un saldo grande. Evitar nuevas deudas antes de solicitar evita que la relación suba. Del lado de los ingresos, un aumento, un ingreso adicional o sumar el ingreso de un coprestatario puede elevar el denominador. Incluso una mejora modesta puede moverlo a un mejor nivel crediticio." },
      { question: "¿Mi DTI afecta mi puntaje de crédito?", answer: "No directamente: su puntaje de crédito no incluye sus ingresos, por lo que el DTI no es un factor de puntuación. Sin embargo, ambos están relacionados: los saldos altos que elevan su DTI también aumentan su uso de crédito, lo cual sí afecta su puntaje. Los prestamistas analizan ambos por separado, usando su puntaje para juzgar el historial de pagos y su DTI para juzgar la capacidad de asumir más deuda. Mantener la deuda baja ayuda a ambos números a la vez." },
    ],
  },
  {
    id: "rule-of-72",
    slug: "rule-of-72-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Rule of 72 Calculator",
    shortDescription: "Estimate how long it takes an investment to double.",
    seoTitle: "Rule of 72 Calculator — How Long to Double Your Money",
    metaDescription:
      "Free Rule of 72 calculator. Estimate how many years it takes an investment to double at a given annual rate of return using the classic shortcut.",
    primaryKeyword: "rule of 72 calculator",
    secondaryKeywords: ["doubling time calculator", "how long to double money", "rule of 72"],
    fields: [
      { id: "annualRate", label: "Annual rate of return", type: "number", unit: "%", placeholder: "8", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "yearsToDouble", label: "Years to double", format: "number", decimals: 1, unit: "years", isPrimary: true },
    ],
    formula: "Years to double ≈ 72 ÷ annual rate of return",
    explanation:
      "The Rule of 72 is a mental-math shortcut that estimates how many years it takes an investment to double at a steady annual rate of return. It matters because doubling time is an intuitive way to grasp the power of compounding without a spreadsheet: divide 72 by your expected annual return, and the answer is roughly the number of years your money needs to double. This Rule of 72 calculator does exactly that division and shows the result. The number 72 is used because it is close to the mathematically exact figure (about 69.3, from the natural logarithm of 2) yet divides cleanly by many common return rates like 6, 8, 9 and 12, which is why generations of investors have kept it in their heads. Savers and investors use the rule to compare opportunities at a glance — an 8% return doubles money in about nine years, while a 4% return takes roughly eighteen — and to appreciate why even a couple of extra percentage points of return dramatically shortens the wait. It is an approximation, most accurate for rates between about 6% and 10%, and it assumes a constant rate with no withdrawals, so treat it as a quick sanity check rather than a precise projection. For exact figures, use a full compound-interest calculation, but for fast intuition the Rule of 72 is hard to beat.",
    formulaExplanation:
      "Compounding growth is exponential, so the time to double is governed by the natural logarithm of 2 divided by the growth rate. That exact constant is about 69.3, but 72 is used instead because it is close enough and divides evenly by many everyday return rates, making the arithmetic something you can do in your head. Dividing 72 by the annual percentage return gives the approximate number of years for the balance to double, which is why higher returns shrink the doubling time so sharply.",
    example: {
      inputs: { annualRate: 8 },
      explanation: "At an 8% annual return, 72 ÷ 8 = 9, so an investment roughly doubles in about nine years.",
    },
    faqs: [
      { question: "How accurate is the Rule of 72?", answer: "It is a close approximation, most accurate for annual returns between about 6% and 10%. In that band it comes within a fraction of a year of the exact answer. For very low rates it slightly underestimates the time, and for very high rates it overestimates. Some people use 70 or 69.3 for continuous compounding, or 73 for higher rates. For everyday planning the standard 72 gives a reliable quick estimate; use a full compound-interest formula when you need precision." },
      { question: "Why is the number 72 used?", answer: "The mathematically exact constant for doubling time is the natural logarithm of 2, roughly 69.3, divided by the growth rate. But 69.3 is awkward to divide by common return figures. The number 72 is very close to it and divides evenly by 2, 3, 4, 6, 8, 9 and 12 — many of the rates investors actually encounter — so it makes the mental arithmetic clean while staying accurate enough for practical use. That balance of simplicity and precision is why 72 became the convention." },
      { question: "Can I use the Rule of 72 for inflation?", answer: "Yes. Applied to an inflation rate, the rule estimates how long it takes for prices to double and, equivalently, for money to lose half its purchasing power. At 3% inflation, 72 ÷ 3 = 24 years for prices to double. This makes it a handy way to see how inflation quietly erodes savings over time. The same shortcut works for any steady rate of growth or decay, not just investment returns." },
      { question: "Does it account for taxes and fees?", answer: "No. The Rule of 72 works on a single net rate of return, so it only reflects taxes and fees if you plug in an after-tax, after-fee rate. Using a gross return will make the doubling look faster than it really is. To be realistic, subtract expected fund fees and any tax drag from your assumed return before dividing, so the doubling time reflects what actually lands in your account rather than the headline rate." },
      { question: "What return should I assume?", answer: "Use a rate that matches the investment. Broad stock market indexes have historically averaged roughly 7–10% a year before inflation over long periods, bonds considerably less, and cash savings less still. Because the rule assumes a constant rate and real markets fluctuate, lean toward a conservative figure for planning. Remember the result is an estimate of average doubling time, not a guarantee that your money will double on any particular schedule." },
    ],
    relatedCalculators: ["compound-interest-calculator", "investment-calculator", "savings-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Rule of 72 (compound-growth heuristic)",
    slugEs: "calculadora-regla-del-72",
    titleEs: "Calculadora de la Regla del 72",
    shortDescriptionEs: "Estime cuánto tarda una inversión en duplicarse.",
    seoTitleEs: "Calculadora de la Regla del 72 — Cuánto Tarda en Duplicar su Dinero",
    metaDescriptionEs:
      "Calculadora de la regla del 72 gratuita. Estime cuántos años tarda una inversión en duplicarse a una tasa de rendimiento anual dada usando el atajo clásico.",
    primaryKeywordEs: "calculadora regla del 72",
    secondaryKeywordsEs: ["calculadora de tiempo de duplicacion", "cuanto tarda en duplicar el dinero", "regla del 72"],
    formulaExplanationEs:
      "El crecimiento por interés compuesto es exponencial, así que el tiempo para duplicarse se rige por el logaritmo natural de 2 dividido entre la tasa de crecimiento. Esa constante exacta es aproximadamente 69.3, pero se usa 72 en su lugar porque es lo bastante cercana y se divide de forma pareja entre muchas tasas de rendimiento cotidianas, lo que convierte la aritmética en algo que puede hacer mentalmente. Dividir 72 entre el rendimiento porcentual anual da el número aproximado de años para que el saldo se duplique, y por eso los rendimientos más altos reducen tan marcadamente el tiempo de duplicación.",
    explanationEs:
      "La Regla del 72 es un atajo de cálculo mental que estima cuántos años tarda una inversión en duplicarse a una tasa de rendimiento anual constante. Importa porque el tiempo de duplicación es una forma intuitiva de captar el poder del interés compuesto sin una hoja de cálculo: divida 72 entre su rendimiento anual esperado, y la respuesta es aproximadamente el número de años que su dinero necesita para duplicarse. Esta calculadora de la Regla del 72 hace exactamente esa división y muestra el resultado. El número 72 se usa porque es cercano a la cifra matemáticamente exacta (alrededor de 69.3, del logaritmo natural de 2) y a la vez se divide de forma limpia entre muchas tasas de rendimiento comunes como 6, 8, 9 y 12, razón por la cual generaciones de inversionistas la han mantenido en la cabeza. Los ahorradores e inversionistas usan la regla para comparar oportunidades de un vistazo —un rendimiento del 8% duplica el dinero en unos nueve años, mientras que uno del 4% tarda cerca de dieciocho— y para apreciar por qué incluso un par de puntos porcentuales adicionales de rendimiento acortan drásticamente la espera. Es una aproximación, más precisa para tasas entre alrededor del 6% y el 10%, y supone una tasa constante sin retiros, así que trátela como una comprobación rápida en lugar de una proyección exacta. Para cifras exactas, use un cálculo completo de interés compuesto, pero para intuición rápida la Regla del 72 es difícil de superar.",
    exampleEs: {
      inputs: { annualRate: 8 },
      explanation: "A un rendimiento anual del 8%, 72 ÷ 8 = 9, así que una inversión aproximadamente se duplica en unos nueve años.",
    },
    faqsEs: [
      { question: "¿Qué tan precisa es la Regla del 72?", answer: "Es una aproximación cercana, más precisa para rendimientos anuales entre alrededor del 6% y el 10%. En ese rango queda a una fracción de año de la respuesta exacta. Para tasas muy bajas subestima ligeramente el tiempo, y para tasas muy altas lo sobreestima. Algunas personas usan 70 o 69.3 para capitalización continua, o 73 para tasas más altas. Para la planificación cotidiana, el 72 estándar da una estimación rápida y confiable; use una fórmula completa de interés compuesto cuando necesite precisión." },
      { question: "¿Por qué se usa el número 72?", answer: "La constante matemáticamente exacta para el tiempo de duplicación es el logaritmo natural de 2, aproximadamente 69.3, dividido entre la tasa de crecimiento. Pero 69.3 es incómodo de dividir entre las cifras de rendimiento comunes. El número 72 es muy cercano a él y se divide de forma pareja entre 2, 3, 4, 6, 8, 9 y 12 —muchas de las tasas que los inversionistas realmente encuentran— así que hace limpia la aritmética mental sin dejar de ser lo bastante preciso para el uso práctico. Ese equilibrio entre simplicidad y precisión es por lo que 72 se volvió la convención." },
      { question: "¿Puedo usar la Regla del 72 para la inflación?", answer: "Sí. Aplicada a una tasa de inflación, la regla estima cuánto tarda en duplicarse el nivel de precios y, de forma equivalente, en que el dinero pierda la mitad de su poder adquisitivo. A una inflación del 3%, 72 ÷ 3 = 24 años para que los precios se dupliquen. Esto la convierte en una forma práctica de ver cómo la inflación erosiona silenciosamente los ahorros con el tiempo. El mismo atajo funciona para cualquier tasa constante de crecimiento o decrecimiento, no solo para los rendimientos de inversión." },
      { question: "¿Considera los impuestos y las comisiones?", answer: "No. La Regla del 72 trabaja con una sola tasa de rendimiento neta, así que solo refleja impuestos y comisiones si introduce una tasa después de impuestos y comisiones. Usar un rendimiento bruto hará que la duplicación parezca más rápida de lo que realmente es. Para ser realista, reste las comisiones esperadas del fondo y cualquier carga fiscal de su rendimiento supuesto antes de dividir, de modo que el tiempo de duplicación refleje lo que realmente llega a su cuenta en lugar de la tasa nominal." },
      { question: "¿Qué rendimiento debo suponer?", answer: "Use una tasa que coincida con la inversión. Los índices bursátiles amplios han promediado históricamente entre el 7% y el 10% anual antes de la inflación durante periodos largos, los bonos considerablemente menos y los ahorros en efectivo aún menos. Como la regla supone una tasa constante y los mercados reales fluctúan, incline la cifra hacia un valor conservador para la planificación. Recuerde que el resultado es una estimación del tiempo de duplicación promedio, no una garantía de que su dinero se duplicará en un calendario particular." },
    ],
  },
  {
    id: "savings-goal",
    slug: "savings-goal-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Savings Goal Calculator",
    shortDescription: "Find how long it takes to reach a savings target.",
    seoTitle: "Savings Goal Calculator — Time to Reach Your Target",
    metaDescription:
      "Free savings goal calculator. Find how many months it takes to hit a savings target from your current balance, monthly contribution and interest rate.",
    primaryKeyword: "savings goal calculator",
    secondaryKeywords: ["savings target calculator", "how long to save calculator", "time to reach savings goal"],
    fields: [
      { id: "goalAmount", label: "Savings goal", type: "number", unit: "$", placeholder: "20000", required: true, span: 1, min: 0 },
      { id: "currentSavings", label: "Current savings", type: "number", unit: "$", placeholder: "5000", required: true, span: 1, min: 0 },
      { id: "monthlyContribution", label: "Monthly contribution", type: "number", unit: "$", placeholder: "500", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "monthsToGoal", label: "Months to reach goal", format: "number", decimals: 0, unit: "months", isPrimary: true },
      { id: "yearsToGoal", label: "Years to reach goal", format: "number", decimals: 1, unit: "years", isPrimary: false },
    ],
    formula: "months = ln((goal × r + P) ÷ (current × r + P)) ÷ ln(1 + r), r = annual rate ÷ 12, P = monthly contribution",
    explanation:
      "The months-to-goal figure shown here is how long it will take to reach a savings target, given what you have saved already, how much you add each month, and the interest your balance earns. It matters because a goal with a timeline is far easier to stay committed to than a vague intention, and seeing the finish line helps you judge whether your current pace is fast enough. This savings goal calculator treats your starting balance as a lump sum that compounds while your monthly deposits form a growing annuity, then solves for the number of months at which the two together first reach your target. Modeling both the balance and the contributions with monthly compounding is the accurate way to do it, because interest earned on money already saved shortens the timeline in a way a simple subtraction would miss. Savers use a goal calculator to plan for a house down payment, an emergency fund, a wedding or a large purchase, and to test how a bigger monthly deposit or a higher-yield account pulls the date closer. If you have already met the goal it returns zero months, and if you contribute nothing and the goal is out of reach it returns no result, a prompt to raise your monthly amount. Because interest rates vary and deposits may not be perfectly regular, treat the result as a well-grounded estimate and revisit it as your situation changes.",
    formulaExplanation:
      "Here r is the monthly interest rate and P is your monthly contribution. Your current savings compound at r while each deposit also compounds, so the balance grows as a lump sum plus an annuity. Setting that combined value equal to the goal and solving for time produces the logarithmic expression shown: ln((goal × r + P) ÷ (current × r + P)) ÷ ln(1 + r). When the rate is zero the math simplifies to the gap between goal and current savings divided by the monthly contribution, since no interest is earned.",
    example: {
      inputs: { goalAmount: 20000, currentSavings: 5000, monthlyContribution: 500, annualRate: 6 },
      explanation: "Starting at $5,000, adding $500 a month at 6%, you reach a $20,000 goal in about 27 months — a little over two years.",
    },
    faqs: [
      { question: "How does the interest rate affect the timeline?", answer: "A higher rate shortens the time to your goal because the interest your balance earns does part of the saving for you. On a short timeline the effect is modest, since there is little time to compound, but over several years a higher-yield account can shave months off the wait. Moving savings to a high-yield account or CD rather than a low-interest one is one of the simplest ways to reach a medium-term goal sooner without contributing a dollar more." },
      { question: "What if I can't contribute the same amount every month?", answer: "The calculator assumes a steady monthly contribution, so irregular saving will make your real timeline differ. If your deposits vary, enter a realistic average of what you can set aside each month to get a reasonable estimate. For months you contribute more — from a bonus or tax refund — you will run ahead of schedule; leaner months put you behind. Re-run the tool with an updated average whenever your regular savings capacity changes." },
      { question: "Should I include my existing savings?", answer: "Yes, enter the amount you have already earmarked for this goal as your current savings. It counts fully toward the target and earns interest from day one, so including it gives an accurate, shorter timeline. Do not include money committed to other purposes, such as your emergency fund or retirement accounts, unless you genuinely intend to use it here. Only the balance you will actually apply to this goal should go in the current savings field." },
      { question: "What happens if my goal is unreachable?", answer: "If you contribute nothing and your current savings plus interest cannot grow to the target — for example a zero contribution at a zero rate — the tool returns no result, signaling that the goal is not reachable on the inputs given. The fix is to raise your monthly contribution, extend your view of the timeline, or seek a higher return. Increase the contribution field until a finite number of months appears to see the minimum pace that reaches your goal." },
      { question: "Is the result before or after inflation?", answer: "It is in nominal terms, meaning it tells you when your balance reaches the dollar figure you entered, without adjusting for rising prices. If your goal is years away, the real-world cost of what you are saving for may climb in the meantime, so a fixed target could fall short of its future purchasing power. For distant goals, consider setting the target a little higher, or revisiting it periodically, to keep pace with inflation." },
    ],
    relatedCalculators: ["savings-calculator", "compound-interest-calculator", "cd-interest-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Future value of an annuity",
    slugEs: "calculadora-de-meta-de-ahorro",
    titleEs: "Calculadora de Meta de Ahorro",
    shortDescriptionEs: "Descubra cuánto tarda en alcanzar una meta de ahorro.",
    seoTitleEs: "Calculadora de Meta de Ahorro — Tiempo para Alcanzar su Objetivo",
    metaDescriptionEs:
      "Calculadora de meta de ahorro gratuita. Descubra cuántos meses tarda en alcanzar un objetivo de ahorro a partir de su saldo actual, aporte mensual y tasa de interés.",
    primaryKeywordEs: "calculadora de meta de ahorro",
    secondaryKeywordsEs: ["calculadora de objetivo de ahorro", "cuanto tardo en ahorrar", "tiempo para alcanzar meta de ahorro"],
    formulaExplanationEs:
      "Aquí r es la tasa de interés mensual y P es su aporte mensual. Sus ahorros actuales se capitalizan a r mientras cada depósito también se capitaliza, así que el saldo crece como una suma global más una anualidad. Igualar ese valor combinado a la meta y despejar el tiempo produce la expresión logarítmica mostrada: ln((meta × r + P) ÷ (actual × r + P)) ÷ ln(1 + r). Cuando la tasa es cero, la matemática se simplifica a la diferencia entre la meta y los ahorros actuales dividida entre el aporte mensual, ya que no se gana interés.",
    explanationEs:
      "La cifra de meses hasta la meta que se muestra aquí es cuánto tardará en alcanzar un objetivo de ahorro, dado lo que ya ha ahorrado, cuánto agrega cada mes y el interés que gana su saldo. Importa porque una meta con un plazo es mucho más fácil de mantener que una intención vaga, y ver la línea de llegada le ayuda a juzgar si su ritmo actual es lo bastante rápido. Esta calculadora de meta de ahorro trata su saldo inicial como una suma global que se capitaliza mientras sus depósitos mensuales forman una anualidad creciente, luego resuelve el número de meses en que ambos juntos alcanzan por primera vez su objetivo. Modelar tanto el saldo como los aportes con capitalización mensual es la forma precisa de hacerlo, porque el interés ganado sobre el dinero ya ahorrado acorta el plazo de una manera que una simple resta pasaría por alto. Los ahorradores usan una calculadora de metas para planear el enganche de una casa, un fondo de emergencia, una boda o una compra grande, y para probar cómo un depósito mensual mayor o una cuenta de mayor rendimiento acercan la fecha. Si ya alcanzó la meta devuelve cero meses, y si no aporta nada y la meta es inalcanzable no devuelve resultado, una señal para aumentar su cantidad mensual. Como las tasas de interés varían y los depósitos pueden no ser perfectamente regulares, trate el resultado como una estimación bien fundamentada y revíselo a medida que cambie su situación.",
    exampleEs: {
      inputs: { goalAmount: 20000, currentSavings: 5000, monthlyContribution: 500, annualRate: 6 },
      explanation: "Comenzando con $5,000, agregando $500 al mes al 6%, alcanza una meta de $20,000 en unos 27 meses — poco más de dos años.",
    },
    faqsEs: [
      { question: "¿Cómo afecta la tasa de interés al plazo?", answer: "Una tasa más alta acorta el tiempo hasta su meta porque el interés que gana su saldo hace parte del ahorro por usted. En un plazo corto el efecto es modesto, ya que hay poco tiempo para capitalizar, pero a lo largo de varios años una cuenta de mayor rendimiento puede recortar meses de la espera. Mover los ahorros a una cuenta de alto rendimiento o a un certificado de depósito en lugar de una de bajo interés es una de las formas más simples de alcanzar antes una meta de mediano plazo sin aportar un dólar más." },
      { question: "¿Qué pasa si no puedo aportar la misma cantidad cada mes?", answer: "La calculadora supone un aporte mensual constante, así que ahorrar de forma irregular hará que su plazo real difiera. Si sus depósitos varían, ingrese un promedio realista de lo que puede apartar cada mes para obtener una estimación razonable. En los meses que aporte más —por un bono o un reembolso de impuestos— irá adelantado; los meses más flojos lo pondrán atrás. Vuelva a ejecutar la herramienta con un promedio actualizado siempre que cambie su capacidad de ahorro regular." },
      { question: "¿Debo incluir mis ahorros existentes?", answer: "Sí, ingrese la cantidad que ya ha destinado a esta meta como sus ahorros actuales. Cuenta por completo hacia el objetivo y gana interés desde el primer día, así que incluirla da un plazo preciso y más corto. No incluya dinero comprometido con otros fines, como su fondo de emergencia o cuentas de jubilación, a menos que realmente pretenda usarlo aquí. Solo el saldo que aplicará de verdad a esta meta debe ir en el campo de ahorros actuales." },
      { question: "¿Qué sucede si mi meta es inalcanzable?", answer: "Si no aporta nada y sus ahorros actuales más el interés no pueden crecer hasta el objetivo —por ejemplo, un aporte de cero a una tasa de cero— la herramienta no devuelve resultado, señalando que la meta no es alcanzable con los datos ingresados. La solución es aumentar su aporte mensual, extender su horizonte de tiempo o buscar un mayor rendimiento. Incremente el campo del aporte hasta que aparezca un número finito de meses para ver el ritmo mínimo que alcanza su meta." },
      { question: "¿El resultado es antes o después de la inflación?", answer: "Está en términos nominales, es decir, le dice cuándo su saldo alcanza la cifra en dólares que ingresó, sin ajustar por el aumento de precios. Si su meta está a años de distancia, el costo real de lo que ahorra puede subir mientras tanto, así que un objetivo fijo podría quedarse corto frente a su poder adquisitivo futuro. Para metas lejanas, considere fijar el objetivo un poco más alto, o revisarlo periódicamente, para mantener el ritmo de la inflación." },
    ],
  },
  {
    id: "future-value",
    slug: "future-value-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Future Value Calculator",
    shortDescription: "Project what a lump sum grows to over time.",
    seoTitle: "Future Value Calculator — Free Compound Growth Tool",
    metaDescription:
      "Free future value calculator. Project what a present sum grows to at a given rate, term and compounding frequency, plus the total interest earned.",
    primaryKeyword: "future value calculator",
    secondaryKeywords: ["fv calculator", "future value of money", "compound growth calculator"],
    fields: [
      { id: "presentValue", label: "Present value", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Number of years", type: "number", unit: "years", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "compoundsPerYear", label: "Compounds per year", type: "number", placeholder: "12", required: false, span: 1, min: 1 },
    ],
    results: [
      { id: "futureValue", label: "Future value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalInterest", label: "Total interest earned", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "FV = PV × (1 + r ÷ n)^(n × t), r = annual rate, n = compounds per year, t = years",
    explanation:
      "Future value is what a sum of money you have today will be worth at a point in the future, once it has grown at a given interest rate. It matters because it puts a concrete number on the core idea of the time value of money: a dollar invested now becomes more than a dollar later, and the future value tells you exactly how much more. This future value calculator takes your present sum, applies your annual rate divided across the compounding periods, and raises it over the total number of periods to project the ending balance, then shows the interest earned as the difference. Accounting for compounding frequency matters because interest that compounds monthly grows faster than the same rate compounded annually, since each period's interest starts earning interest itself. Investors and savers use future value to project the worth of a deposit, a CD or a lump-sum investment, to compare accounts with different rates and compounding schedules, and to understand why starting early is so powerful — time is the most influential input in the formula. The projection assumes a single upfront deposit with no further contributions and a constant rate, so it is cleanest for a one-time investment; add regular deposits and you would need an annuity calculation instead. It is a nominal figure before inflation and tax, so treat it as a planning estimate of growth rather than guaranteed spending power.",
    formulaExplanation:
      "PV is your present sum and r is the annual rate as a decimal. Dividing r by n gives the interest applied in each compounding period, and there are n × t such periods over t years. Raising (1 + r ÷ n) to that number of periods compounds the deposit repeatedly, with each period's gain added to the base before the next is calculated. Multiplying by the present value scales it to your actual amount; subtracting the present value isolates the interest earned. More frequent compounding raises the exponent and the result.",
    example: {
      inputs: { presentValue: 10000, annualRate: 6, years: 10, compoundsPerYear: 12 },
      explanation: "$10,000 at 6% compounded monthly for 10 years grows to about $18,194, earning roughly $8,194 in interest.",
    },
    faqs: [
      { question: "What is the time value of money?", answer: "It is the principle that a sum of money is worth more now than the same sum in the future, because money you hold today can be invested to earn a return. Future value is the direct expression of this idea: it quantifies how much a present amount grows to over time. The concept underpins nearly all of finance, from savings and loans to bond pricing and business investment decisions, because it lets you compare cash flows that occur at different points in time on equal footing." },
      { question: "How does compounding frequency change the result?", answer: "The more often interest compounds, the larger the future value, because each compounding event lets already-earned interest start earning interest sooner. At the same nominal rate, monthly compounding beats annual, and daily beats monthly, though the gains shrink as frequency rises. The difference is meaningful over long horizons or large sums. Enter the frequency your account actually uses — many savings accounts compound daily or monthly — so the projection matches how your balance really grows." },
      { question: "Does this include regular contributions?", answer: "No. This calculator projects the growth of a single lump sum deposited today with no further additions. If you plan to add money regularly — say a fixed amount each month — the ending balance would be higher, and you would need a future-value-of-an-annuity calculation that layers those deposits on top. Use this tool for one-time investments like a CD or a lump sum, and a savings or retirement calculator when you are contributing on an ongoing basis." },
      { question: "Is the future value adjusted for inflation?", answer: "No, it is a nominal figure stated in future dollars, not adjusted for rising prices. Because inflation erodes purchasing power, the real value of the result will buy less than the same number of dollars today. At 3% inflation, money loses roughly half its purchasing power over about 24 years. To gauge real growth, subtract your expected inflation rate from the return you enter, which gives a rough inflation-adjusted future value in today's terms." },
      { question: "What interest rate should I enter?", answer: "Enter the annual rate you realistically expect the money to earn. For a savings account or CD, use the quoted APY. For an investment, use a conservative long-run estimate for the asset mix you hold — historically higher for stocks, lower for bonds. Because the result is highly sensitive to the rate over long periods, it is wise to test a range of rates rather than a single optimistic figure, so you understand the spread of possible outcomes." },
    ],
    relatedCalculators: ["present-value-calculator", "compound-interest-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Compound interest formula",
    slugEs: "calculadora-de-valor-futuro",
    titleEs: "Calculadora de Valor Futuro",
    shortDescriptionEs: "Proyecte en cuánto crece una suma global con el tiempo.",
    seoTitleEs: "Calculadora de Valor Futuro — Herramienta de Crecimiento Compuesto Gratuita",
    metaDescriptionEs:
      "Calculadora de valor futuro gratuita. Proyecte en cuánto crece una suma presente a una tasa, plazo y frecuencia de capitalización dados, además del interés total ganado.",
    primaryKeywordEs: "calculadora de valor futuro",
    secondaryKeywordsEs: ["calculadora vf", "valor futuro del dinero", "calculadora de crecimiento compuesto"],
    formulaExplanationEs:
      "VP es su suma presente y r es la tasa anual como decimal. Dividir r entre n da el interés aplicado en cada periodo de capitalización, y hay n × t periodos de este tipo a lo largo de t años. Elevar (1 + r ÷ n) a ese número de periodos capitaliza el depósito repetidamente, sumando la ganancia de cada periodo a la base antes de calcular el siguiente. Multiplicar por el valor presente lo escala a su cantidad real; restar el valor presente aísla el interés ganado. Una capitalización más frecuente eleva el exponente y el resultado.",
    explanationEs:
      "El valor futuro es lo que una suma de dinero que tiene hoy valdrá en un punto del futuro, una vez que ha crecido a una tasa de interés dada. Importa porque pone un número concreto a la idea central del valor temporal del dinero: un dólar invertido ahora se convierte en más de un dólar después, y el valor futuro le dice exactamente cuánto más. Esta calculadora de valor futuro toma su suma presente, aplica su tasa anual dividida entre los periodos de capitalización y la eleva sobre el número total de periodos para proyectar el saldo final, luego muestra el interés ganado como la diferencia. Considerar la frecuencia de capitalización importa porque el interés que se capitaliza mensualmente crece más rápido que la misma tasa capitalizada anualmente, ya que el interés de cada periodo comienza a ganar interés a su vez. Los inversionistas y ahorradores usan el valor futuro para proyectar el valor de un depósito, un certificado de depósito o una inversión de suma global, para comparar cuentas con distintas tasas y calendarios de capitalización, y para entender por qué empezar temprano es tan poderoso: el tiempo es el factor más influyente de la fórmula. La proyección supone un único depósito inicial sin aportes adicionales y una tasa constante, así que es más limpia para una inversión única; si agrega depósitos regulares necesitaría un cálculo de anualidad. Es una cifra nominal antes de la inflación y los impuestos, así que trátela como una estimación de planificación del crecimiento en lugar de un poder adquisitivo garantizado.",
    exampleEs: {
      inputs: { presentValue: 10000, annualRate: 6, years: 10, compoundsPerYear: 12 },
      explanation: "$10,000 al 6% capitalizado mensualmente durante 10 años crece hasta unos $18,194, ganando aproximadamente $8,194 en intereses.",
    },
    faqsEs: [
      { question: "¿Qué es el valor temporal del dinero?", answer: "Es el principio de que una suma de dinero vale más ahora que la misma suma en el futuro, porque el dinero que tiene hoy puede invertirse para ganar un rendimiento. El valor futuro es la expresión directa de esta idea: cuantifica cuánto crece una cantidad presente con el tiempo. El concepto sustenta casi todas las finanzas, desde ahorros y préstamos hasta la valoración de bonos y las decisiones de inversión empresarial, porque permite comparar flujos de efectivo que ocurren en distintos momentos en igualdad de condiciones." },
      { question: "¿Cómo cambia el resultado la frecuencia de capitalización?", answer: "Cuanto más a menudo se capitaliza el interés, mayor es el valor futuro, porque cada evento de capitalización permite que el interés ya ganado comience a ganar interés antes. A la misma tasa nominal, la capitalización mensual supera a la anual, y la diaria a la mensual, aunque las ganancias se reducen a medida que aumenta la frecuencia. La diferencia es significativa en horizontes largos o sumas grandes. Ingrese la frecuencia que su cuenta realmente usa —muchas cuentas de ahorro capitalizan diaria o mensualmente— para que la proyección coincida con cómo crece su saldo." },
      { question: "¿Esto incluye aportes regulares?", answer: "No. Esta calculadora proyecta el crecimiento de una única suma global depositada hoy sin adiciones posteriores. Si planea agregar dinero con regularidad —digamos una cantidad fija cada mes— el saldo final sería mayor, y necesitaría un cálculo de valor futuro de una anualidad que sume esos depósitos por encima. Use esta herramienta para inversiones únicas como un certificado de depósito o una suma global, y una calculadora de ahorro o jubilación cuando esté aportando de forma continua." },
      { question: "¿El valor futuro está ajustado por la inflación?", answer: "No, es una cifra nominal expresada en dólares futuros, sin ajustar por el aumento de precios. Como la inflación erosiona el poder adquisitivo, el valor real del resultado comprará menos que el mismo número de dólares hoy. A una inflación del 3%, el dinero pierde aproximadamente la mitad de su poder adquisitivo en unos 24 años. Para evaluar el crecimiento real, reste su tasa de inflación esperada del rendimiento que ingresa, lo que da un valor futuro aproximado ajustado por inflación en términos de hoy." },
      { question: "¿Qué tasa de interés debo ingresar?", answer: "Ingrese la tasa anual que espera de forma realista que gane el dinero. Para una cuenta de ahorro o un certificado de depósito, use el rendimiento porcentual anual (APY) cotizado. Para una inversión, use una estimación conservadora de largo plazo para la mezcla de activos que posee —históricamente más alta para acciones, más baja para bonos—. Como el resultado es muy sensible a la tasa en periodos largos, es prudente probar un rango de tasas en lugar de una sola cifra optimista, para entender el abanico de resultados posibles." },
    ],
  },
  {
    id: "present-value",
    slug: "present-value-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Present Value Calculator",
    shortDescription: "Find what a future sum is worth today.",
    seoTitle: "Present Value Calculator — Free Discounting Tool",
    metaDescription:
      "Free present value calculator. Find what a future amount is worth in today's dollars at a given discount rate, term and compounding frequency.",
    primaryKeyword: "present value calculator",
    secondaryKeywords: ["pv calculator", "present value of money", "discounted value calculator"],
    fields: [
      { id: "futureValue", label: "Future value", type: "number", unit: "$", placeholder: "20000", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Discount rate", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Number of years", type: "number", unit: "years", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "compoundsPerYear", label: "Compounds per year", type: "number", placeholder: "12", required: false, span: 1, min: 1 },
    ],
    results: [
      { id: "presentValue", label: "Present value", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "PV = FV ÷ (1 + r ÷ n)^(n × t), r = discount rate, n = compounds per year, t = years",
    explanation:
      "Present value is what a sum of money you expect to receive in the future is worth in today's dollars, once you account for the return that money could otherwise earn. It matters because it is the mirror image of future value and a cornerstone of financial decision-making: to compare a payment due later against cash in hand now, you have to discount the future amount back to the present. This present value calculator takes the future sum, the rate you could earn (the discount rate), the number of years and the compounding frequency, and divides out the growth that would have occurred, leaving the equivalent value today. Discounting is used because a dollar promised in ten years is worth less than a dollar now — you lose the chance to invest it in the meantime — and the discount rate captures that opportunity cost. People use present value to decide whether a future payout, a lump-sum versus installment choice, or an investment's promised return is worth it today, and businesses use it to value cash flows, bonds and projects. A higher discount rate or a longer wait shrinks the present value, because more potential growth is being stripped away. The result assumes a single future amount and a constant rate, so it is cleanest for one payment; a stream of future cash flows would be discounted period by period. Treat the figure as the fair value today of that future money under your assumed rate.",
    formulaExplanation:
      "FV is the future amount and r is the discount rate as a decimal. Dividing r by n gives the rate per compounding period, and n × t is the number of periods over t years. Raising (1 + r ÷ n) to that power is the same growth factor used for future value; here you divide the future sum by it rather than multiply, reversing the compounding to strip out the return the money would have earned. What remains is the amount that, invested today at that rate, would grow into the future value entered.",
    example: {
      inputs: { futureValue: 20000, annualRate: 6, years: 10, compoundsPerYear: 12 },
      explanation: "$20,000 due in 10 years, discounted at 6% compounded monthly, is worth about $10,994 in today's dollars.",
    },
    faqs: [
      { question: "What is a discount rate?", answer: "The discount rate is the annual return you assume you could earn on money if you had it today, used to translate a future amount into present terms. It represents the opportunity cost of waiting. Choosing it is a judgment call: some use the rate on a safe investment, others use their expected investment return or a business's cost of capital. A higher discount rate reflects better alternative uses for the money and produces a lower present value, since more potential growth is being given up." },
      { question: "Why is future money worth less today?", answer: "Because money in hand can be put to work immediately. If you could invest a dollar today and earn a return, then a dollar promised in the future is worth less than that dollar now — you are missing out on the growth in between. There is also uncertainty and inflation to consider, both of which make a future promise less valuable than present cash. Present value quantifies exactly how much less, given the return you could otherwise earn." },
      { question: "When would I use present value?", answer: "It is useful whenever you must compare money available at different times. Common cases include deciding between a lump-sum payout and a series of future payments (as with a lottery or pension), judging whether an investment's future return justifies its price today, or valuing a bond. Businesses use it to evaluate projects by discounting expected future cash flows. Any time you need to know what a future dollar is really worth right now, present value is the tool." },
      { question: "How does the time period affect present value?", answer: "The longer you have to wait for the money, the lower its present value, because the discounting compounds over more periods. A sum due in twenty years is worth far less today than the same sum due in two, at the same rate. This is why long-dated future payments can look surprisingly small in present terms. Lengthening the term in this tool, or raising the discount rate, both push the present value down, sometimes sharply." },
      { question: "Is present value the same as net present value?", answer: "No, though they are related. Present value discounts a single future amount back to today. Net present value, or NPV, applies the same discounting to a whole series of future cash flows — often an investment's costs and returns over several years — and sums them, usually subtracting the initial outlay. NPV is the standard tool for evaluating projects and investments. This calculator handles the single-amount case that underlies the more complex NPV computation." },
    ],
    relatedCalculators: ["future-value-calculator", "compound-interest-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Present value (discounting)",
    slugEs: "calculadora-de-valor-presente",
    titleEs: "Calculadora de Valor Presente",
    shortDescriptionEs: "Descubra cuánto vale hoy una suma futura.",
    seoTitleEs: "Calculadora de Valor Presente — Herramienta de Descuento Gratuita",
    metaDescriptionEs:
      "Calculadora de valor presente gratuita. Descubra cuánto vale una cantidad futura en dólares de hoy a una tasa de descuento, plazo y frecuencia de capitalización dados.",
    primaryKeywordEs: "calculadora de valor presente",
    secondaryKeywordsEs: ["calculadora vp", "valor presente del dinero", "calculadora de valor descontado"],
    formulaExplanationEs:
      "VF es la cantidad futura y r es la tasa de descuento como decimal. Dividir r entre n da la tasa por periodo de capitalización, y n × t es el número de periodos a lo largo de t años. Elevar (1 + r ÷ n) a esa potencia es el mismo factor de crecimiento usado para el valor futuro; aquí divide la suma futura entre él en lugar de multiplicar, revirtiendo la capitalización para eliminar el rendimiento que el dinero habría ganado. Lo que queda es la cantidad que, invertida hoy a esa tasa, crecería hasta el valor futuro ingresado.",
    explanationEs:
      "El valor presente es lo que una suma de dinero que espera recibir en el futuro vale en dólares de hoy, una vez que considera el rendimiento que ese dinero podría ganar de otro modo. Importa porque es la imagen espejo del valor futuro y una piedra angular de la toma de decisiones financieras: para comparar un pago que vence después contra dinero en mano ahora, debe descontar la cantidad futura al presente. Esta calculadora de valor presente toma la suma futura, la tasa que podría ganar (la tasa de descuento), el número de años y la frecuencia de capitalización, y elimina el crecimiento que habría ocurrido, dejando el valor equivalente de hoy. Se usa el descuento porque un dólar prometido en diez años vale menos que un dólar ahora —pierde la oportunidad de invertirlo mientras tanto— y la tasa de descuento captura ese costo de oportunidad. Las personas usan el valor presente para decidir si vale la pena hoy un pago futuro, una elección entre suma global y cuotas, o el rendimiento prometido de una inversión, y las empresas lo usan para valorar flujos de efectivo, bonos y proyectos. Una tasa de descuento más alta o una espera más larga reducen el valor presente, porque se elimina más crecimiento potencial. El resultado supone una única cantidad futura y una tasa constante, así que es más limpio para un solo pago; un flujo de efectivo futuro se descontaría periodo por periodo. Trate la cifra como el valor justo de hoy de ese dinero futuro bajo su tasa supuesta.",
    exampleEs: {
      inputs: { futureValue: 20000, annualRate: 6, years: 10, compoundsPerYear: 12 },
      explanation: "$20,000 que vencen en 10 años, descontados al 6% capitalizado mensualmente, valen unos $10,994 en dólares de hoy.",
    },
    faqsEs: [
      { question: "¿Qué es una tasa de descuento?", answer: "La tasa de descuento es el rendimiento anual que supone que podría ganar con el dinero si lo tuviera hoy, usada para traducir una cantidad futura a términos presentes. Representa el costo de oportunidad de esperar. Elegirla es un juicio: algunos usan la tasa de una inversión segura, otros su rendimiento de inversión esperado o el costo de capital de una empresa. Una tasa de descuento más alta refleja mejores usos alternativos del dinero y produce un valor presente más bajo, ya que se renuncia a más crecimiento potencial." },
      { question: "¿Por qué el dinero futuro vale menos hoy?", answer: "Porque el dinero en mano puede ponerse a trabajar de inmediato. Si pudiera invertir un dólar hoy y ganar un rendimiento, entonces un dólar prometido en el futuro vale menos que ese dólar ahora: se pierde el crecimiento intermedio. También hay incertidumbre e inflación a considerar, ambas hacen que una promesa futura sea menos valiosa que el efectivo presente. El valor presente cuantifica exactamente cuánto menos, dado el rendimiento que podría ganar de otro modo." },
      { question: "¿Cuándo usaría el valor presente?", answer: "Es útil siempre que deba comparar dinero disponible en distintos momentos. Los casos comunes incluyen decidir entre un pago de suma global y una serie de pagos futuros (como en una lotería o pensión), juzgar si el rendimiento futuro de una inversión justifica su precio de hoy, o valorar un bono. Las empresas lo usan para evaluar proyectos descontando los flujos de efectivo futuros esperados. Cada vez que necesite saber cuánto vale realmente ahora un dólar futuro, el valor presente es la herramienta." },
      { question: "¿Cómo afecta el periodo de tiempo al valor presente?", answer: "Cuanto más tenga que esperar por el dinero, menor es su valor presente, porque el descuento se capitaliza sobre más periodos. Una suma que vence en veinte años vale hoy mucho menos que la misma suma que vence en dos, a la misma tasa. Por eso los pagos futuros a largo plazo pueden verse sorprendentemente pequeños en términos presentes. Alargar el plazo en esta herramienta, o elevar la tasa de descuento, empujan ambos el valor presente hacia abajo, a veces marcadamente." },
      { question: "¿El valor presente es lo mismo que el valor presente neto?", answer: "No, aunque están relacionados. El valor presente descuenta una única cantidad futura al día de hoy. El valor presente neto, o VPN, aplica el mismo descuento a toda una serie de flujos de efectivo futuros —a menudo los costos y rendimientos de una inversión durante varios años— y los suma, normalmente restando el desembolso inicial. El VPN es la herramienta estándar para evaluar proyectos e inversiones. Esta calculadora maneja el caso de cantidad única que subyace al cálculo más complejo del VPN." },
    ],
  },
  {
    id: "annuity-payment",
    slug: "annuity-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Annuity Payment Calculator",
    shortDescription: "Find the fixed payment that pays off a principal.",
    seoTitle: "Annuity Calculator — Free Fixed Payment Tool",
    metaDescription:
      "Free annuity calculator. Find the fixed periodic payment that amortizes a principal at a given rate and term, plus total paid and total interest.",
    primaryKeyword: "annuity calculator",
    secondaryKeywords: ["annuity payment calculator", "annuity payout calculator", "amortized payment calculator"],
    fields: [
      { id: "principal", label: "Principal amount", type: "number", unit: "$", placeholder: "100000", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Term", type: "number", unit: "years", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
      { id: "paymentsPerYear", label: "Payments per year", type: "number", placeholder: "12", required: false, span: 1, min: 1 },
    ],
    results: [
      { id: "payment", label: "Payment per period", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalPaid", label: "Total paid", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalInterest", label: "Total interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Payment = P × r ÷ (1 − (1 + r)^−N), r = annual rate ÷ payments per year, N = years × payments per year",
    explanation:
      "The payment shown here is the fixed amount, paid at regular intervals, that fully pays off a principal over a set term at a given interest rate. It matters because this single figure underlies mortgages, car loans, personal loans and structured payouts alike: any time a lump sum is settled through equal periodic payments, this is the math that sets the amount. This annuity payment calculator converts your annual rate to the rate per payment period, counts the total number of payments, and applies the amortization formula to find the payment that exactly zeroes the balance by the end of the term, then reports the total you will pay and how much of that is interest. The formula is the standard used across lending because it correctly balances interest and principal in every payment — early payments are mostly interest, later ones mostly principal — so the balance reaches zero precisely on schedule. Borrowers use it to size a loan payment before committing, to compare terms and rates, and to see the true cost of borrowing in the total-interest figure; retirees and planners use the same math in reverse to see what fixed payout a savings pool can sustain. A longer term lowers each payment but raises total interest, while a higher rate raises both. The result assumes a fixed rate and regular equal payments, so it is an accurate baseline; real loans may add fees, taxes or insurance on top.",
    formulaExplanation:
      "P is the principal, r is the interest rate per payment period (annual rate divided by payments per year), and N is the total number of payments. The term (1 − (1 + r)^−N) is the present-value factor for a stream of N equal payments; dividing the principal times r by it yields the payment whose discounted stream exactly equals the principal today. That is why the balance amortizes to zero at the final payment. When the rate is zero, there is no interest and the payment is simply the principal spread evenly across all N periods.",
    example: {
      inputs: { principal: 100000, annualRate: 6, years: 30, paymentsPerYear: 12 },
      explanation: "A $100,000 principal at 6% over 30 years of monthly payments requires about $599.55 a month, totaling roughly $215,838 — about $115,838 of it interest.",
    },
    faqs: [
      { question: "What is an annuity in this context?", answer: "Here an annuity means a series of equal payments made at regular intervals, which is the structure behind most loans and many payout arrangements. Whether you are repaying a mortgage or receiving fixed pension income, the same math applies: a present lump sum is converted into a stream of level payments over time. The word also refers to insurance products that pay income in retirement, and the payment formula on this page is the engine that prices those steady streams." },
      { question: "How does the term affect the payment?", answer: "A longer term lowers each payment because the principal is spread across more periods, but it raises the total interest you pay, since the balance is outstanding for longer. A shorter term does the opposite — higher payments but far less interest overall. This trade-off between affordability and total cost is central to choosing a loan. Try different terms in the tool to see how the periodic payment and the total interest move in opposite directions." },
      { question: "What happens when the interest rate is zero?", answer: "With a zero rate there is no interest to pay, so the payment is simply the principal divided by the total number of payments, and the total interest is zero. This case can arise with promotional financing or interest-free installment plans. The calculator handles it directly rather than dividing by zero in the standard formula. It is a useful benchmark: comparing a real loan's payment against this zero-rate figure shows exactly how much the interest is costing you each period." },
      { question: "Can I use this for retirement payouts?", answer: "Yes. The same formula that sizes a loan payment also determines how much a fixed pool of savings can pay out each period over a set number of years at an assumed return. Enter your savings as the principal, your expected return as the rate, and your payout horizon as the term to see the sustainable regular withdrawal. Keep in mind it assumes a constant return and a fixed end date, so real retirement planning should also account for market swings and longevity." },
      { question: "Does the payment include taxes and fees?", answer: "No. This calculator returns the pure principal-and-interest payment. Real-world loans often bundle additional costs into what you actually pay — a mortgage may add property taxes and insurance to the monthly bill, and many loans carry origination or servicing fees. Those extras are not part of the amortization math shown here. Use this figure as the core payment, then add any known taxes, insurance or fees separately to estimate your true out-of-pocket cost each period." },
    ],
    relatedCalculators: ["loan-calculator", "mortgage-calculator", "retirement-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Amortization / annuity payment formula",
    slugEs: "calculadora-de-anualidad",
    titleEs: "Calculadora de Pago de Anualidad",
    shortDescriptionEs: "Encuentre el pago fijo que amortiza un capital.",
    seoTitleEs: "Calculadora de Anualidad — Herramienta de Pago Fijo Gratuita",
    metaDescriptionEs:
      "Calculadora de anualidad gratuita. Encuentre el pago periódico fijo que amortiza un capital a una tasa y plazo dados, además del total pagado y el interés total.",
    primaryKeywordEs: "calculadora de anualidad",
    secondaryKeywordsEs: ["calculadora de pago de anualidad", "calculadora de pagos de anualidad", "calculadora de pago amortizado"],
    formulaExplanationEs:
      "P es el capital, r es la tasa de interés por periodo de pago (la tasa anual dividida entre los pagos por año) y N es el número total de pagos. El término (1 − (1 + r)^−N) es el factor de valor presente de un flujo de N pagos iguales; dividir el capital por r entre él da el pago cuyo flujo descontado equivale exactamente al capital de hoy. Por eso el saldo se amortiza a cero en el pago final. Cuando la tasa es cero, no hay interés y el pago es simplemente el capital repartido de forma pareja entre todos los N periodos.",
    explanationEs:
      "El pago que se muestra aquí es la cantidad fija, pagada a intervalos regulares, que amortiza por completo un capital durante un plazo establecido a una tasa de interés dada. Importa porque esta única cifra subyace por igual a hipotecas, préstamos de auto, préstamos personales y pagos estructurados: cada vez que una suma global se liquida mediante pagos periódicos iguales, esta es la matemática que fija la cantidad. Esta calculadora de pago de anualidad convierte su tasa anual a la tasa por periodo de pago, cuenta el número total de pagos y aplica la fórmula de amortización para hallar el pago que lleva el saldo exactamente a cero al final del plazo, luego informa el total que pagará y cuánto de ello es interés. La fórmula es la estándar usada en todo el sector crediticio porque equilibra correctamente interés y capital en cada pago —los primeros pagos son en su mayoría interés, los últimos en su mayoría capital— de modo que el saldo llega a cero justo en el calendario previsto. Los prestatarios la usan para dimensionar el pago de un préstamo antes de comprometerse, para comparar plazos y tasas, y para ver el costo real de pedir prestado en la cifra de interés total; los jubilados y planificadores usan la misma matemática a la inversa para ver qué pago fijo puede sostener un fondo de ahorros. Un plazo más largo reduce cada pago pero eleva el interés total, mientras que una tasa más alta eleva ambos. El resultado supone una tasa fija y pagos iguales regulares, así que es una base precisa; los préstamos reales pueden agregar comisiones, impuestos o seguros por encima.",
    exampleEs: {
      inputs: { principal: 100000, annualRate: 6, years: 30, paymentsPerYear: 12 },
      explanation: "Un capital de $100,000 al 6% durante 30 años de pagos mensuales requiere unos $599.55 al mes, con un total de aproximadamente $215,838 — cerca de $115,838 de ello en intereses.",
    },
    faqsEs: [
      { question: "¿Qué es una anualidad en este contexto?", answer: "Aquí una anualidad significa una serie de pagos iguales realizados a intervalos regulares, que es la estructura detrás de la mayoría de los préstamos y muchos arreglos de pago. Ya sea que esté pagando una hipoteca o recibiendo un ingreso de pensión fijo, se aplica la misma matemática: una suma global presente se convierte en un flujo de pagos nivelados en el tiempo. La palabra también se refiere a productos de seguros que pagan ingresos en la jubilación, y la fórmula de pago de esta página es el motor que valora esos flujos constantes." },
      { question: "¿Cómo afecta el plazo al pago?", answer: "Un plazo más largo reduce cada pago porque el capital se reparte entre más periodos, pero eleva el interés total que paga, ya que el saldo permanece pendiente por más tiempo. Un plazo más corto hace lo contrario: pagos más altos pero mucho menos interés en total. Esta disyuntiva entre asequibilidad y costo total es central al elegir un préstamo. Pruebe distintos plazos en la herramienta para ver cómo el pago periódico y el interés total se mueven en direcciones opuestas." },
      { question: "¿Qué sucede cuando la tasa de interés es cero?", answer: "Con una tasa de cero no hay interés que pagar, así que el pago es simplemente el capital dividido entre el número total de pagos, y el interés total es cero. Este caso puede darse con financiamiento promocional o planes de cuotas sin intereses. La calculadora lo maneja directamente en lugar de dividir entre cero en la fórmula estándar. Es un punto de referencia útil: comparar el pago de un préstamo real contra esta cifra de tasa cero muestra exactamente cuánto le cuesta el interés en cada periodo." },
      { question: "¿Puedo usar esto para pagos de jubilación?", answer: "Sí. La misma fórmula que dimensiona el pago de un préstamo también determina cuánto puede pagar un fondo fijo de ahorros en cada periodo durante un número de años a un rendimiento supuesto. Ingrese sus ahorros como el capital, su rendimiento esperado como la tasa y su horizonte de pago como el plazo para ver el retiro regular sostenible. Tenga en cuenta que supone un rendimiento constante y una fecha de fin fija, así que la planificación real de la jubilación también debe considerar los movimientos del mercado y la longevidad." },
      { question: "¿El pago incluye impuestos y comisiones?", answer: "No. Esta calculadora devuelve el pago puro de capital e interés. Los préstamos del mundo real a menudo agrupan costos adicionales en lo que realmente paga: una hipoteca puede sumar impuestos sobre la propiedad y seguro a la cuota mensual, y muchos préstamos tienen comisiones de originación o servicio. Esos extras no forman parte de la matemática de amortización mostrada aquí. Use esta cifra como el pago base, luego sume cualquier impuesto, seguro o comisión conocidos por separado para estimar su costo real de bolsillo en cada periodo." },
    ],
  },
  {
    id: "salary-raise",
    slug: "salary-raise-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Salary Raise Calculator",
    shortDescription: "See your new salary after a percentage raise.",
    seoTitle: "Salary Raise Calculator — Free Pay Increase Tool",
    metaDescription:
      "Free salary raise calculator. See your new salary, the raise amount in dollars, and the monthly increase after a percentage pay rise.",
    primaryKeyword: "salary raise calculator",
    secondaryKeywords: ["pay raise calculator", "salary increase calculator", "raise percentage calculator"],
    fields: [
      { id: "currentSalary", label: "Current annual salary", type: "number", unit: "$", placeholder: "60000", required: true, span: 1, min: 0 },
      { id: "raisePercent", label: "Raise percentage", type: "number", unit: "%", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "newSalary", label: "New annual salary", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "raiseAmount", label: "Raise amount", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "monthlyIncrease", label: "Monthly increase", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "New salary = current salary × (1 + raise% ÷ 100) · Raise amount = current salary × raise% ÷ 100",
    explanation:
      "The new salary shown here is what you will earn after a raise, expressed as a percentage of your current pay, along with the dollar value of the raise and how much more you will see each month. It matters because raises are almost always quoted as percentages, and turning that percentage into real dollars is what actually tells you how a pay rise affects your budget. This salary raise calculator multiplies your current salary by the raise percentage to find the increase, adds it back to get your new salary, and divides the annual raise by twelve to show the monthly bump. Working from the percentage is the natural way to do it, since that is how employers frame offers and cost-of-living adjustments, and converting to dollars makes the raise concrete. Employees use it to understand an offer, to check that a raise keeps pace with inflation, to compare a percentage increase against a competing job's figure, and to plan how to use the extra income. Keep in mind these are gross figures, before taxes and deductions: your take-home increase will be smaller than the gross monthly figure, since a raise is taxed like the rest of your income and may nudge part of your earnings into a higher bracket. Still, seeing the gross new salary and monthly increase is the essential first step in judging whether a raise meaningfully improves your financial position or merely offsets rising costs.",
    formulaExplanation:
      "The raise percentage is converted to a decimal by dividing by 100, and multiplying your current salary by it gives the raise amount in dollars. Adding that to the current salary — equivalently, multiplying by (1 + raise% ÷ 100) — produces the new salary. Dividing the annual raise by twelve spreads it across the year to show the monthly increase in gross pay. Every figure here is before tax, so it reflects the change to your stated salary rather than to your take-home pay.",
    example: {
      inputs: { currentSalary: 60000, raisePercent: 5 },
      explanation: "A 5% raise on a $60,000 salary adds $3,000, lifting pay to $63,000 — about $250 more per month before tax.",
    },
    faqs: [
      { question: "Is the new salary before or after tax?", answer: "It is before tax — a gross figure. Both the new salary and the monthly increase shown are pre-tax amounts, matching how salaries are quoted and negotiated. Your actual take-home pay will rise by less, because the raise is subject to income tax, payroll taxes and any deductions like retirement contributions. A raise can also push part of your income into a higher tax bracket, though only the amount above the threshold is taxed at the higher rate. Expect the net monthly increase to be somewhat smaller." },
      { question: "Does a raise keep up with inflation?", answer: "Only if the percentage exceeds the inflation rate. A raise below inflation is effectively a pay cut in real terms, since your money buys less than before. To judge this, compare your raise percentage against the current inflation rate: a 5% raise when inflation is 3% is a real gain of about 2%, while a 2% raise in the same environment loses ground. Cost-of-living adjustments are meant to offset inflation, but a merit raise on top is what actually improves your purchasing power." },
      { question: "How do I calculate a raise as a percentage?", answer: "If you know the dollar amount of a raise instead of the percentage, divide the raise by your current salary and multiply by 100. For example, a $3,000 raise on a $60,000 salary is 3,000 ÷ 60,000 × 100 = 5%. This is the reverse of what the calculator does and is handy for comparing offers quoted in different ways, or for checking whether a lump-sum raise matches the percentage your employer stated. The two forms describe the same increase." },
      { question: "Should I negotiate based on percentage or dollars?", answer: "Both framings are useful, and it helps to think in each. Employers usually work in percentages tied to budgets and performance ratings, so knowing the percentage helps you benchmark against typical raises. But the dollar figure is what changes your life, so translate any offer into annual and monthly dollars before deciding. When negotiating, researching the market rate for your role in absolute salary terms, then expressing your ask as both a target salary and a percentage, tends to be most persuasive." },
      { question: "How is the monthly increase calculated?", answer: "The calculator takes the annual raise amount and divides it by twelve to spread it evenly across the year, giving the gross increase to each monthly paycheck. If you are paid biweekly or semimonthly, your per-paycheck increase will differ — divide the annual raise by 26 or 24 respectively instead. Remember this monthly figure is before tax and deductions, so the amount added to your actual deposited pay will be lower. It is a quick way to picture the raise in everyday budgeting terms." },
    ],
    relatedCalculators: ["fica-tax-calculator", "savings-goal-calculator", "investment-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard percentage increase",
    slugEs: "calculadora-de-aumento-de-salario",
    titleEs: "Calculadora de Aumento de Salario",
    shortDescriptionEs: "Vea su nuevo salario tras un aumento porcentual.",
    seoTitleEs: "Calculadora de Aumento de Salario — Herramienta de Incremento de Pago Gratuita",
    metaDescriptionEs:
      "Calculadora de aumento de salario gratuita. Vea su nuevo salario, el monto del aumento en dólares y el incremento mensual tras un aumento porcentual de pago.",
    primaryKeywordEs: "calculadora de aumento de salario",
    secondaryKeywordsEs: ["calculadora de aumento de pago", "calculadora de incremento de salario", "calculadora de porcentaje de aumento"],
    formulaExplanationEs:
      "El porcentaje de aumento se convierte a decimal dividiéndolo entre 100, y multiplicar su salario actual por él da el monto del aumento en dólares. Sumar eso al salario actual —equivalentemente, multiplicar por (1 + aumento% ÷ 100)— produce el nuevo salario. Dividir el aumento anual entre doce lo reparte a lo largo del año para mostrar el incremento mensual del pago bruto. Cada cifra aquí es antes de impuestos, así que refleja el cambio en su salario declarado en lugar de su pago neto.",
    explanationEs:
      "El nuevo salario que se muestra aquí es lo que ganará tras un aumento, expresado como un porcentaje de su pago actual, junto con el valor en dólares del aumento y cuánto más verá cada mes. Importa porque los aumentos casi siempre se cotizan como porcentajes, y convertir ese porcentaje en dólares reales es lo que de verdad le dice cómo afecta un aumento a su presupuesto. Esta calculadora de aumento de salario multiplica su salario actual por el porcentaje de aumento para hallar el incremento, lo suma para obtener su nuevo salario y divide el aumento anual entre doce para mostrar el incremento mensual. Trabajar a partir del porcentaje es la forma natural de hacerlo, ya que así enmarcan los empleadores las ofertas y los ajustes por costo de vida, y convertir a dólares hace concreto el aumento. Los empleados la usan para entender una oferta, para verificar que un aumento sigue el ritmo de la inflación, para comparar un incremento porcentual contra la cifra de un empleo competidor y para planear cómo usar el ingreso extra. Tenga en cuenta que estas son cifras brutas, antes de impuestos y deducciones: su incremento neto será menor que la cifra mensual bruta, ya que un aumento se grava como el resto de sus ingresos y puede empujar parte de sus ganancias a un tramo impositivo más alto. Aun así, ver el nuevo salario bruto y el incremento mensual es el primer paso esencial para juzgar si un aumento mejora de forma significativa su posición financiera o solo compensa el alza de costos.",
    exampleEs: {
      inputs: { currentSalary: 60000, raisePercent: 5 },
      explanation: "Un aumento del 5% sobre un salario de $60,000 agrega $3,000, elevando el pago a $63,000 — unos $250 más al mes antes de impuestos.",
    },
    faqsEs: [
      { question: "¿El nuevo salario es antes o después de impuestos?", answer: "Es antes de impuestos, una cifra bruta. Tanto el nuevo salario como el incremento mensual mostrados son cantidades brutas, que coinciden con la forma en que se cotizan y negocian los salarios. Su pago neto real aumentará menos, porque el aumento está sujeto al impuesto sobre la renta, los impuestos de nómina y cualquier deducción como aportes de jubilación. Un aumento también puede empujar parte de su ingreso a un tramo impositivo más alto, aunque solo la cantidad por encima del umbral se grava a la tasa mayor. Espere un incremento mensual neto algo menor." },
      { question: "¿Un aumento sigue el ritmo de la inflación?", answer: "Solo si el porcentaje supera la tasa de inflación. Un aumento por debajo de la inflación es efectivamente un recorte de pago en términos reales, ya que su dinero compra menos que antes. Para juzgarlo, compare su porcentaje de aumento contra la tasa de inflación actual: un aumento del 5% cuando la inflación es del 3% es una ganancia real de aproximadamente el 2%, mientras que un aumento del 2% en el mismo entorno pierde terreno. Los ajustes por costo de vida buscan compensar la inflación, pero un aumento por mérito por encima es lo que realmente mejora su poder adquisitivo." },
      { question: "¿Cómo calculo un aumento como porcentaje?", answer: "Si conoce el monto en dólares de un aumento en lugar del porcentaje, divida el aumento entre su salario actual y multiplique por 100. Por ejemplo, un aumento de $3,000 sobre un salario de $60,000 es 3,000 ÷ 60,000 × 100 = 5%. Esto es lo inverso de lo que hace la calculadora y es útil para comparar ofertas cotizadas de distintas formas, o para verificar si un aumento de suma global coincide con el porcentaje que declaró su empleador. Ambas formas describen el mismo incremento." },
      { question: "¿Debo negociar con base en porcentaje o en dólares?", answer: "Ambos enfoques son útiles, y conviene pensar en cada uno. Los empleadores suelen trabajar en porcentajes ligados a presupuestos y calificaciones de desempeño, así que conocer el porcentaje ayuda a compararse con los aumentos típicos. Pero la cifra en dólares es la que cambia su vida, así que traduzca cualquier oferta a dólares anuales y mensuales antes de decidir. Al negociar, investigar la tarifa de mercado para su puesto en términos de salario absoluto y luego expresar su solicitud como un salario objetivo y un porcentaje suele ser lo más persuasivo." },
      { question: "¿Cómo se calcula el incremento mensual?", answer: "La calculadora toma el monto anual del aumento y lo divide entre doce para repartirlo de forma pareja a lo largo del año, dando el incremento bruto a cada cheque mensual. Si le pagan quincenal o bimensualmente, su incremento por cheque será distinto: divida el aumento anual entre 26 o 24 respectivamente en su lugar. Recuerde que esta cifra mensual es antes de impuestos y deducciones, así que la cantidad sumada a su pago realmente depositado será menor. Es una forma rápida de imaginar el aumento en términos de presupuesto cotidiano." },
    ],
  },
  {
    id: "fica-tax",
    slug: "fica-tax-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "FICA Tax Calculator",
    shortDescription: "Estimate Social Security and Medicare withholding.",
    seoTitle: "FICA Tax Calculator — Social Security & Medicare (2024)",
    metaDescription:
      "Free FICA tax calculator. Estimate your 2024 Social Security and Medicare payroll taxes from annual wages, including the additional Medicare tax.",
    primaryKeyword: "fica tax calculator",
    secondaryKeywords: ["payroll tax calculator", "social security tax calculator", "medicare tax calculator"],
    fields: [
      { id: "annualWages", label: "Annual wages", type: "number", unit: "$", placeholder: "100000", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "socialSecurity", label: "Social Security tax", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "medicare", label: "Medicare tax", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalFica", label: "Total FICA tax", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "SS = 6.2% × min(wages, $168,600) · Medicare = 1.45% × wages + 0.9% × wages over $200,000 (2024)",
    explanation:
      "FICA tax is the payroll tax that funds Social Security and Medicare, withheld from your wages under the Federal Insurance Contributions Act. The figure shown here is your share of that tax based on your annual wages, using 2024 rates. It matters because FICA is a fixed, unavoidable deduction from earned income that comes out before you ever see your paycheck, and understanding it clarifies the gap between your salary and your take-home pay. This FICA tax calculator applies the 6.2% Social Security rate to your wages up to the 2024 wage base of $168,600 — earnings above that are not subject to Social Security tax — and the 1.45% Medicare rate to all wages, then adds the additional 0.9% Medicare surtax on any wages above $200,000. Splitting the two components this way is necessary because they have different rules: Social Security is capped, while Medicare is uncapped and gains a surtax at higher incomes. Workers use a FICA calculator to understand their paycheck deductions, to verify their employer is withholding correctly, and to plan around the higher effective tax on top earners. Note that these are the employee-side figures; your employer pays a matching 6.2% and 1.45%, and self-employed people pay both halves as self-employment tax. The result reflects 2024 thresholds, which the IRS adjusts most years, so confirm the current wage base and rules before relying on it for a different tax year.",
    formulaExplanation:
      "Social Security tax is 6.2% of your wages but only up to the annual wage base — $168,600 in 2024 — so earnings above that add nothing more to it. Medicare tax is 1.45% of all wages with no cap. On top of that, an additional Medicare tax of 0.9% applies to wages above $200,000, so high earners pay 2.35% on the portion over that threshold. Adding the Social Security and Medicare components gives your total employee FICA withholding for the year.",
    example: {
      inputs: { annualWages: 100000 },
      explanation: "On $100,000 of wages in 2024, Social Security is $6,200 (6.2%) and Medicare is $1,450 (1.45%), for $7,650 in total FICA.",
    },
    faqs: [
      { question: "What is FICA tax?", answer: "FICA stands for the Federal Insurance Contributions Act, the law that requires payroll taxes to fund Social Security and Medicare. It is withheld automatically from your wages by your employer and matched by the employer dollar for dollar. The tax has two parts: Social Security, which funds retirement, disability and survivor benefits, and Medicare, which funds health coverage for people 65 and older. FICA applies to earned income from wages, separate from federal and state income taxes that also come out of your pay." },
      { question: "What is the Social Security wage base?", answer: "The wage base is the maximum amount of earnings subject to Social Security tax in a year — $168,600 for 2024. You pay 6.2% on wages up to that limit, and nothing on earnings above it, so the most any employee pays in Social Security tax in 2024 is about $10,453. Medicare has no such cap. The wage base rises most years with average wage growth, so check the current figure for other tax years before relying on this estimate." },
      { question: "What is the additional Medicare tax?", answer: "It is an extra 0.9% Medicare tax on wages above $200,000, introduced to have higher earners contribute more. Below the threshold you pay the standard 1.45%; on the portion above it, you pay 2.35% in total. Employers begin withholding it once your wages with them pass $200,000, regardless of your filing status, though the actual threshold on your tax return varies by filing status. Unlike the base Medicare tax, employers do not match this additional 0.9%." },
      { question: "Do employers pay FICA too?", answer: "Yes. FICA is split evenly between employee and employer. Your employer matches your 6.2% Social Security and 1.45% Medicare contributions, so a total of 12.4% for Social Security and 2.9% for Medicare goes toward these programs on your behalf. The employer does not match the additional 0.9% Medicare surtax on high earners. This calculator shows the employee half that appears on your pay stub; the employer's matching share is paid separately and does not reduce your wages." },
      { question: "How does FICA work if I'm self-employed?", answer: "Self-employed people pay both the employee and employer halves themselves, through the Self-Employment Contributions Act (SECA) tax — 12.4% for Social Security up to the wage base and 2.9% for Medicare, plus the 0.9% surtax at higher incomes. That is effectively double the employee rate shown here. However, you can deduct the employer-equivalent half when calculating your income tax, and Social Security still only applies up to the annual wage base. This tool models the employee-side withholding for wage earners specifically." },
    ],
    relatedCalculators: ["salary-raise-calculator", "capital-gains-tax-calculator", "loan-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "IRS — FICA (2024)",
    sourceUrl: "https://www.irs.gov/",
    slugEs: "calculadora-de-impuesto-fica",
    titleEs: "Calculadora de Impuesto FICA",
    shortDescriptionEs: "Estime la retención de Seguro Social y Medicare.",
    seoTitleEs: "Calculadora de Impuesto FICA — Seguro Social y Medicare (2024)",
    metaDescriptionEs:
      "Calculadora de impuesto FICA gratuita. Estime sus impuestos de nómina de Seguro Social y Medicare de 2024 a partir de los salarios anuales, incluido el impuesto adicional de Medicare.",
    primaryKeywordEs: "calculadora de impuesto fica",
    secondaryKeywordsEs: ["calculadora de impuesto de nomina", "calculadora de impuesto de seguro social", "calculadora de impuesto de medicare"],
    formulaExplanationEs:
      "El impuesto de Seguro Social es el 6.2% de sus salarios, pero solo hasta la base salarial anual —$168,600 en 2024— así que las ganancias por encima de eso no añaden nada más. El impuesto de Medicare es el 1.45% de todos los salarios sin tope. Además, un impuesto adicional de Medicare del 0.9% se aplica a los salarios por encima de $200,000, así que quienes ganan mucho pagan el 2.35% sobre la porción por encima de ese umbral. Sumar los componentes de Seguro Social y Medicare da su retención FICA total del empleado para el año.",
    explanationEs:
      "El impuesto FICA es el impuesto de nómina que financia el Seguro Social y Medicare, retenido de sus salarios bajo la Ley Federal de Contribuciones al Seguro (Federal Insurance Contributions Act). La cifra que se muestra aquí es su parte de ese impuesto según sus salarios anuales, usando las tasas de 2024. Importa porque el FICA es una deducción fija e inevitable del ingreso ganado que sale antes de que usted vea su cheque, y entenderlo aclara la brecha entre su salario y su pago neto. Esta calculadora de impuesto FICA aplica la tasa de Seguro Social del 6.2% a sus salarios hasta la base salarial de 2024 de $168,600 —las ganancias por encima de eso no están sujetas al impuesto de Seguro Social— y la tasa de Medicare del 1.45% a todos los salarios, luego suma el sobrecargo adicional de Medicare del 0.9% sobre cualquier salario por encima de $200,000. Separar los dos componentes de esta manera es necesario porque tienen reglas distintas: el Seguro Social tiene un tope, mientras que Medicare no lo tiene y gana un sobrecargo en ingresos más altos. Los trabajadores usan una calculadora de FICA para entender las deducciones de su cheque, para verificar que su empleador esté reteniendo correctamente y para planear en torno al impuesto efectivo más alto sobre los que más ganan. Tenga en cuenta que estas son las cifras del lado del empleado; su empleador paga un 6.2% y un 1.45% equivalentes, y las personas por cuenta propia pagan ambas mitades como impuesto de trabajo por cuenta propia. El resultado refleja los umbrales de 2024, que el IRS ajusta la mayoría de los años, así que confirme la base salarial y las reglas vigentes antes de usarlo para otro año fiscal.",
    exampleEs: {
      inputs: { annualWages: 100000 },
      explanation: "Sobre $100,000 de salarios en 2024, el Seguro Social es $6,200 (6.2%) y Medicare es $1,450 (1.45%), para un total de $7,650 en FICA.",
    },
    faqsEs: [
      { question: "¿Qué es el impuesto FICA?", answer: "FICA corresponde a la Ley Federal de Contribuciones al Seguro (Federal Insurance Contributions Act), la ley que exige impuestos de nómina para financiar el Seguro Social y Medicare. Su empleador lo retiene automáticamente de sus salarios y lo iguala dólar por dólar. El impuesto tiene dos partes: Seguro Social, que financia beneficios de jubilación, discapacidad y sobrevivientes, y Medicare, que financia la cobertura de salud para personas de 65 años en adelante. El FICA se aplica al ingreso ganado de los salarios, separado de los impuestos federales y estatales sobre la renta que también salen de su pago." },
      { question: "¿Qué es la base salarial del Seguro Social?", answer: "La base salarial es la cantidad máxima de ganancias sujeta al impuesto de Seguro Social en un año —$168,600 para 2024—. Paga el 6.2% sobre los salarios hasta ese límite, y nada sobre las ganancias por encima, así que lo máximo que cualquier empleado paga en impuesto de Seguro Social en 2024 es alrededor de $10,453. Medicare no tiene ese tope. La base salarial sube la mayoría de los años con el crecimiento salarial promedio, así que consulte la cifra vigente para otros años fiscales antes de usar esta estimación." },
      { question: "¿Qué es el impuesto adicional de Medicare?", answer: "Es un impuesto adicional de Medicare del 0.9% sobre los salarios por encima de $200,000, introducido para que quienes más ganan aporten más. Por debajo del umbral paga el 1.45% estándar; sobre la porción por encima, paga el 2.35% en total. Los empleadores comienzan a retenerlo una vez que sus salarios con ellos superan los $200,000, sin importar su estado civil de declaración, aunque el umbral real en su declaración de impuestos varía según ese estado. A diferencia del impuesto base de Medicare, los empleadores no igualan este 0.9% adicional." },
      { question: "¿Los empleadores también pagan FICA?", answer: "Sí. El FICA se divide en partes iguales entre empleado y empleador. Su empleador iguala sus aportes del 6.2% de Seguro Social y del 1.45% de Medicare, así que un total del 12.4% para Seguro Social y del 2.9% para Medicare se destina a estos programas en su nombre. El empleador no iguala el sobrecargo adicional de Medicare del 0.9% sobre quienes ganan mucho. Esta calculadora muestra la mitad del empleado que aparece en su talón de pago; la parte equivalente del empleador se paga por separado y no reduce sus salarios." },
      { question: "¿Cómo funciona el FICA si trabajo por cuenta propia?", answer: "Las personas por cuenta propia pagan ellas mismas tanto la mitad del empleado como la del empleador, a través del impuesto de la Ley de Contribuciones al Trabajo por Cuenta Propia (SECA) —12.4% para Seguro Social hasta la base salarial y 2.9% para Medicare, más el sobrecargo del 0.9% en ingresos más altos—. Eso es efectivamente el doble de la tasa del empleado mostrada aquí. Sin embargo, puede deducir la mitad equivalente del empleador al calcular su impuesto sobre la renta, y el Seguro Social aún solo se aplica hasta la base salarial anual. Esta herramienta modela la retención del lado del empleado para asalariados específicamente." },
    ],
  },
  {
    id: "capital-gains-tax",
    slug: "capital-gains-tax-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Capital Gains Tax Calculator",
    shortDescription: "Estimate tax owed on an investment sale.",
    seoTitle: "Capital Gains Tax Calculator — Free Investment Tax Tool",
    metaDescription:
      "Free capital gains tax calculator. Estimate your capital gain, tax owed and net profit from an asset's purchase price, sale price and tax rate.",
    primaryKeyword: "capital gains tax calculator",
    secondaryKeywords: ["capital gains calculator", "investment tax calculator", "stock gains tax calculator"],
    fields: [
      { id: "purchasePrice", label: "Purchase price (cost basis)", type: "number", unit: "$", placeholder: "10000", required: true, span: 1, min: 0 },
      { id: "salePrice", label: "Sale price", type: "number", unit: "$", placeholder: "15000", required: true, span: 1, min: 0 },
      { id: "taxRate", label: "Capital gains tax rate", type: "number", unit: "%", placeholder: "15", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "capitalGain", label: "Capital gain", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "taxOwed", label: "Tax owed", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "netProfit", label: "Net profit after tax", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Capital gain = sale price − purchase price · Tax owed = gain × rate ÷ 100 (if gain > 0) · Net profit = gain − tax",
    explanation:
      "Capital gains tax is the tax you owe on the profit from selling an asset — stocks, a fund, real estate or other property — for more than you paid. The figures shown here are your gain, the tax on it, and what you keep after tax. It matters because the profit on paper is not all yours: the tax can take a meaningful slice, so knowing the after-tax number is what tells you the real return on an investment. This capital gains tax calculator subtracts your purchase price, or cost basis, from your sale price to find the gain, applies your tax rate to that gain, and subtracts the tax to show your net profit. Taxing only the gain — not the whole sale price — is how capital gains work: you are taxed on the increase in value, not on the return of your original investment. If you sold at a loss, the gain is negative and no tax is due, so the tool shows zero tax in that case. Investors use it to estimate the tax hit before selling, to compare holding versus selling, and to see how the difference between short-term and long-term rates changes the outcome. The rate you enter should reflect your situation: short-term gains on assets held a year or less are taxed as ordinary income, while long-term gains get preferential rates. Because actual liability depends on your income, filing status, holding period and other rules, treat this as an estimate and confirm specifics with the IRS or a tax professional.",
    formulaExplanation:
      "The capital gain is simply the sale price minus the purchase price (your cost basis), representing the profit on the asset. Multiplying that gain by your tax rate as a decimal gives the tax owed, but only when the gain is positive — a sale at a loss produces no capital gains tax, so the tool returns zero tax there. Subtracting the tax from the gain leaves your net profit, the amount you actually keep. Only the gain is taxed, because returning your original investment is not income.",
    example: {
      inputs: { purchasePrice: 10000, salePrice: 15000, taxRate: 15 },
      explanation: "Buying at $10,000 and selling at $15,000 is a $5,000 gain; at a 15% rate the tax is $750, leaving $4,250 in net profit.",
    },
    faqs: [
      { question: "What is the difference between short-term and long-term gains?", answer: "The holding period determines the rate. Assets held for one year or less produce short-term capital gains, taxed at your ordinary income tax rate, which can be high. Assets held longer than a year produce long-term capital gains, taxed at preferential rates — 0%, 15% or 20% for most taxpayers depending on income. This large gap is why many investors hold assets past the one-year mark before selling. Enter the rate that matches your holding period for an accurate estimate." },
      { question: "What is a cost basis?", answer: "Your cost basis is what you paid to acquire an asset, used to figure the taxable gain when you sell. It typically includes the purchase price plus any commissions or fees, and for some assets it can be adjusted for things like reinvested dividends or improvements to a property. The gain is the sale price minus this basis. Keeping accurate records of your basis is important, because overstating it understates your gain and could cause problems, while understating it makes you overpay tax." },
      { question: "Do I owe tax if I sold at a loss?", answer: "No capital gains tax is due on a loss, and the calculator shows zero tax when the sale price is below the purchase price. In fact, capital losses can be valuable: they offset capital gains elsewhere in your portfolio, and if losses exceed gains, you can typically deduct a limited amount against ordinary income each year and carry the rest forward. This strategy, called tax-loss harvesting, is a common way to reduce a tax bill, though specific rules apply." },
      { question: "What tax rate should I enter?", answer: "Enter the capital gains rate that applies to your situation. For a long-term gain, that is usually 0%, 15% or 20% depending on your taxable income and filing status, with most middle-income taxpayers at 15%. For a short-term gain, use your ordinary income tax bracket. High earners may also owe an additional 3.8% net investment income tax. If you are unsure, 15% is a reasonable default for long-term gains, but confirm your actual rate for a precise figure." },
      { question: "Are there ways to reduce capital gains tax?", answer: "Several strategies exist. Holding an asset longer than a year qualifies you for lower long-term rates. Offsetting gains with losses through tax-loss harvesting reduces the taxable amount. Holding investments in tax-advantaged accounts like IRAs or 401(k)s defers or avoids the tax entirely. For a home sale, a portion of the gain may be excluded if it was your primary residence. These rules are detailed and situation-specific, so consult IRS guidance or a tax professional before acting." },
    ],
    relatedCalculators: ["fica-tax-calculator", "investment-calculator", "future-value-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    sensitivity: "finance",
    formulaSource: "IRS — capital gains",
    sourceUrl: "https://www.irs.gov/",
    slugEs: "calculadora-de-impuesto-sobre-ganancias-de-capital",
    titleEs: "Calculadora de Impuesto sobre Ganancias de Capital",
    shortDescriptionEs: "Estime el impuesto adeudado por la venta de una inversión.",
    seoTitleEs: "Calculadora de Impuesto sobre Ganancias de Capital — Herramienta Gratuita",
    metaDescriptionEs:
      "Calculadora de impuesto sobre ganancias de capital gratuita. Estime su ganancia de capital, el impuesto adeudado y la utilidad neta a partir del precio de compra, el precio de venta y la tasa.",
    primaryKeywordEs: "calculadora de impuesto sobre ganancias de capital",
    secondaryKeywordsEs: ["calculadora de ganancias de capital", "calculadora de impuesto de inversion", "calculadora de impuesto sobre ganancias de acciones"],
    formulaExplanationEs:
      "La ganancia de capital es simplemente el precio de venta menos el precio de compra (su base de costo), que representa la utilidad del activo. Multiplicar esa ganancia por su tasa impositiva como decimal da el impuesto adeudado, pero solo cuando la ganancia es positiva: una venta con pérdida no produce impuesto sobre ganancias de capital, así que la herramienta devuelve cero impuesto en ese caso. Restar el impuesto de la ganancia deja su utilidad neta, la cantidad que realmente conserva. Solo se grava la ganancia, porque devolver su inversión original no es ingreso.",
    explanationEs:
      "El impuesto sobre ganancias de capital es el impuesto que debe sobre la utilidad de vender un activo —acciones, un fondo, bienes raíces u otra propiedad— por más de lo que pagó. Las cifras que se muestran aquí son su ganancia, el impuesto sobre ella y lo que conserva después de impuestos. Importa porque la utilidad sobre el papel no es toda suya: el impuesto puede tomar una porción significativa, así que conocer la cifra después de impuestos es lo que le dice el rendimiento real de una inversión. Esta calculadora de impuesto sobre ganancias de capital resta su precio de compra, o base de costo, de su precio de venta para hallar la ganancia, aplica su tasa impositiva a esa ganancia y resta el impuesto para mostrar su utilidad neta. Gravar solo la ganancia —no todo el precio de venta— es como funcionan las ganancias de capital: se le grava sobre el aumento de valor, no sobre la devolución de su inversión original. Si vendió con pérdida, la ganancia es negativa y no se debe impuesto, así que la herramienta muestra cero impuesto en ese caso. Los inversionistas la usan para estimar el impacto fiscal antes de vender, para comparar mantener frente a vender y para ver cómo la diferencia entre tasas de corto y largo plazo cambia el resultado. La tasa que ingrese debe reflejar su situación: las ganancias de corto plazo sobre activos mantenidos un año o menos se gravan como ingreso ordinario, mientras que las de largo plazo obtienen tasas preferenciales. Como la obligación real depende de su ingreso, estado de declaración, periodo de tenencia y otras reglas, trate esto como una estimación y confirme los detalles con el IRS o un profesional de impuestos.",
    exampleEs: {
      inputs: { purchasePrice: 10000, salePrice: 15000, taxRate: 15 },
      explanation: "Comprar a $10,000 y vender a $15,000 es una ganancia de $5,000; a una tasa del 15% el impuesto es $750, dejando $4,250 de utilidad neta.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre ganancias de corto y largo plazo?", answer: "El periodo de tenencia determina la tasa. Los activos mantenidos un año o menos producen ganancias de capital de corto plazo, gravadas a su tasa de impuesto sobre la renta ordinaria, que puede ser alta. Los activos mantenidos más de un año producen ganancias de capital de largo plazo, gravadas a tasas preferenciales —0%, 15% o 20% para la mayoría de los contribuyentes según el ingreso—. Esta gran brecha es por lo que muchos inversionistas mantienen los activos pasado el año antes de vender. Ingrese la tasa que coincida con su periodo de tenencia para una estimación precisa." },
      { question: "¿Qué es una base de costo?", answer: "Su base de costo es lo que pagó para adquirir un activo, usada para calcular la ganancia gravable cuando vende. Normalmente incluye el precio de compra más cualquier comisión o cargo, y para algunos activos puede ajustarse por cosas como dividendos reinvertidos o mejoras a una propiedad. La ganancia es el precio de venta menos esta base. Mantener registros precisos de su base es importante, porque sobrestimarla subestima su ganancia y podría causar problemas, mientras que subestimarla lo hace pagar impuesto de más." },
      { question: "¿Debo impuesto si vendí con pérdida?", answer: "No se debe impuesto sobre ganancias de capital por una pérdida, y la calculadora muestra cero impuesto cuando el precio de venta es inferior al precio de compra. De hecho, las pérdidas de capital pueden ser valiosas: compensan ganancias de capital en otras partes de su cartera, y si las pérdidas superan las ganancias, normalmente puede deducir una cantidad limitada contra el ingreso ordinario cada año y arrastrar el resto. Esta estrategia, llamada cosecha de pérdidas fiscales, es una forma común de reducir una factura de impuestos, aunque aplican reglas específicas." },
      { question: "¿Qué tasa impositiva debo ingresar?", answer: "Ingrese la tasa de ganancias de capital que aplica a su situación. Para una ganancia de largo plazo, suele ser 0%, 15% o 20% según su ingreso gravable y estado de declaración, con la mayoría de los contribuyentes de ingreso medio en el 15%. Para una ganancia de corto plazo, use su tramo de impuesto sobre la renta ordinario. Quienes ganan mucho también pueden deber un impuesto adicional del 3.8% sobre el ingreso neto de inversión. Si no está seguro, el 15% es un valor predeterminado razonable para ganancias de largo plazo, pero confirme su tasa real para una cifra precisa." },
      { question: "¿Hay formas de reducir el impuesto sobre ganancias de capital?", answer: "Existen varias estrategias. Mantener un activo más de un año lo califica para las tasas de largo plazo más bajas. Compensar ganancias con pérdidas mediante la cosecha de pérdidas fiscales reduce la cantidad gravable. Mantener inversiones en cuentas con ventajas fiscales como IRAs o 401(k) difiere o evita el impuesto por completo. Para la venta de una vivienda, una parte de la ganancia puede excluirse si fue su residencia principal. Estas reglas son detalladas y específicas de cada situación, así que consulte la guía del IRS o a un profesional de impuestos antes de actuar." },
    ],
  },
  {
    id: "student-loan",
    slug: "student-loan-calculator",
    category: "Finance",
    categorySlug: "finance",
    title: "Student Loan Calculator",
    shortDescription: "Estimate monthly payments on a student loan.",
    seoTitle: "Student Loan Calculator — Free Repayment Estimate Tool",
    metaDescription:
      "Free student loan calculator. Estimate your monthly payment, total repaid and total interest on a student loan from balance, rate and term.",
    primaryKeyword: "student loan calculator",
    secondaryKeywords: ["student loan payment calculator", "student loan repayment calculator", "college loan calculator"],
    fields: [
      { id: "loanAmount", label: "Loan amount", type: "number", unit: "$", placeholder: "30000", required: true, span: 1, min: 0 },
      { id: "annualRate", label: "Annual interest rate", type: "number", unit: "%", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "years", label: "Repayment term", type: "number", unit: "years", placeholder: "10", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "monthlyPayment", label: "Monthly payment", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalPaid", label: "Total repaid", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "totalInterest", label: "Total interest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "Payment = L × r ÷ (1 − (1 + r)^−N), r = annual rate ÷ 12, N = years × 12",
    explanation:
      "The monthly payment shown here is what it takes to repay a student loan in full over a chosen term at a given interest rate, along with the total you will repay and how much of that is interest. It matters because student debt is often a borrower's first large loan, and understanding the monthly commitment and lifetime cost upfront helps you choose a repayment plan and avoid surprises. This student loan calculator converts your annual rate to a monthly rate, counts the number of monthly payments in the term, and uses the standard amortization formula to find the level payment that clears the balance exactly by the end, then reports the total repaid and the interest portion. Amortization is the right model because each payment covers that month's interest first and applies the rest to principal, so early payments chip away slowly and later ones faster — the same way federal and private student loans actually work under a standard plan. Borrowers use it to budget for repayment, to compare a standard 10-year term against longer plans, and to see how extra payments or a lower rate reduce the total interest. A longer term lowers the monthly payment but increases total interest substantially, while paying more than the minimum shortens the payoff and saves interest. This models a standard fixed repayment; income-driven plans, deferment, subsidized interest and loan forgiveness follow different rules, so check your loan servicer's terms for your specific situation.",
    formulaExplanation:
      "L is the loan balance, r is the monthly interest rate (the annual rate divided by 12), and N is the number of monthly payments (years times 12). The factor (1 − (1 + r)^−N) is the present value of a stream of N equal payments; dividing L × r by it gives the fixed monthly payment whose payments, discounted back, exactly equal the loan today, so the balance amortizes to zero. When the rate is zero, the payment is just the balance split evenly across the N months, with no interest added.",
    example: {
      inputs: { loanAmount: 30000, annualRate: 5, years: 10 },
      explanation: "A $30,000 loan at 5% over 10 years costs about $318 a month, totaling roughly $38,184 — about $8,184 of it interest.",
    },
    faqs: [
      { question: "What is a typical student loan term?", answer: "The standard repayment term for federal student loans is 10 years, and it is the plan that minimizes total interest for most borrowers. Extended and graduated plans stretch payments over 20 to 25 years, lowering the monthly amount but sharply raising total interest. Income-driven plans set payments as a share of your income and can lead to forgiveness after a set period. This calculator models a fixed-term standard plan; enter the term your servicer offers to estimate that plan's payment." },
      { question: "Should I choose a longer term to lower my payment?", answer: "A longer term does reduce the monthly payment, which can ease a tight budget, but it significantly increases the total interest you pay because the balance is outstanding for more years. If cash flow is the immediate problem, a longer or income-driven plan can help, but if you can afford the standard payment, the shorter term saves far more money overall. Compare the monthly payment against the total interest in this tool before committing to a longer schedule." },
      { question: "How does interest accrue on student loans?", answer: "Interest accrues daily on your outstanding principal at your loan's rate. Under a standard plan, your fixed monthly payment covers the accrued interest first, and the remainder reduces principal, so early payments are more interest-heavy. On unsubsidized and private loans, interest also accrues while you are in school and during deferment, and unpaid interest may be capitalized — added to principal — which increases the balance you pay interest on. Subsidized federal loans do not accrue interest while you are enrolled at least half-time." },
      { question: "Can I pay off my student loan early?", answer: "Yes, federal and most private student loans have no prepayment penalty, so paying extra reduces your principal and the interest that accrues on it, shortening the payoff and cutting total interest. To make extra payments count against principal rather than future interest, tell your servicer to apply them that way. Even small additional amounts each month can save a meaningful sum over the life of the loan. Re-run this tool with a shorter term to see the effect of paying faster." },
      { question: "What is the difference between subsidized and unsubsidized loans?", answer: "With a subsidized federal loan, the government pays the interest while you are in school at least half-time, during the grace period, and in deferment, so the balance does not grow during those times. With an unsubsidized loan, interest accrues from the moment the loan is disbursed, including while you study, and any unpaid interest can be capitalized into the principal. That difference makes subsidized loans cheaper overall. Both types use the same amortization math once repayment begins." },
    ],
    relatedCalculators: ["loan-calculator", "annuity-calculator", "debt-to-income-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Loan amortization formula",
    slugEs: "calculadora-de-prestamo-estudiantil",
    titleEs: "Calculadora de Préstamo Estudiantil",
    shortDescriptionEs: "Estime los pagos mensuales de un préstamo estudiantil.",
    seoTitleEs: "Calculadora de Préstamo Estudiantil — Herramienta de Estimación de Pago Gratuita",
    metaDescriptionEs:
      "Calculadora de préstamo estudiantil gratuita. Estime su pago mensual, el total pagado y el interés total de un préstamo estudiantil a partir del saldo, la tasa y el plazo.",
    primaryKeywordEs: "calculadora de prestamo estudiantil",
    secondaryKeywordsEs: ["calculadora de pago de prestamo estudiantil", "calculadora de reembolso de prestamo estudiantil", "calculadora de prestamo universitario"],
    formulaExplanationEs:
      "L es el saldo del préstamo, r es la tasa de interés mensual (la tasa anual dividida entre 12) y N es el número de pagos mensuales (años por 12). El factor (1 − (1 + r)^−N) es el valor presente de un flujo de N pagos iguales; dividir L × r entre él da el pago mensual fijo cuyos pagos, descontados hacia atrás, equivalen exactamente al préstamo de hoy, de modo que el saldo se amortiza a cero. Cuando la tasa es cero, el pago es solo el saldo repartido de forma pareja entre los N meses, sin interés agregado.",
    explanationEs:
      "El pago mensual que se muestra aquí es lo que se necesita para pagar por completo un préstamo estudiantil durante un plazo elegido a una tasa de interés dada, junto con el total que pagará y cuánto de ello es interés. Importa porque la deuda estudiantil suele ser el primer préstamo grande de un prestatario, y entender de antemano el compromiso mensual y el costo de por vida ayuda a elegir un plan de reembolso y a evitar sorpresas. Esta calculadora de préstamo estudiantil convierte su tasa anual a una tasa mensual, cuenta el número de pagos mensuales del plazo y usa la fórmula de amortización estándar para hallar el pago nivelado que liquida el saldo exactamente al final, luego informa el total pagado y la porción de interés. La amortización es el modelo correcto porque cada pago cubre primero el interés de ese mes y aplica el resto al capital, así que los primeros pagos reducen la deuda lentamente y los últimos más rápido —de la misma forma en que funcionan realmente los préstamos estudiantiles federales y privados bajo un plan estándar—. Los prestatarios la usan para presupuestar el reembolso, para comparar un plazo estándar de 10 años contra planes más largos y para ver cómo los pagos adicionales o una tasa más baja reducen el interés total. Un plazo más largo reduce el pago mensual pero aumenta considerablemente el interés total, mientras que pagar más del mínimo acorta la liquidación y ahorra interés. Esto modela un reembolso fijo estándar; los planes basados en el ingreso, el aplazamiento, el interés subsidiado y la condonación siguen reglas distintas, así que consulte los términos de su administrador de préstamos para su situación específica.",
    exampleEs: {
      inputs: { loanAmount: 30000, annualRate: 5, years: 10 },
      explanation: "Un préstamo de $30,000 al 5% durante 10 años cuesta unos $318 al mes, con un total de aproximadamente $38,184 — cerca de $8,184 de ello en intereses.",
    },
    faqsEs: [
      { question: "¿Cuál es un plazo típico de préstamo estudiantil?", answer: "El plazo de reembolso estándar para los préstamos estudiantiles federales es de 10 años, y es el plan que minimiza el interés total para la mayoría de los prestatarios. Los planes extendidos y graduados reparten los pagos a lo largo de 20 a 25 años, reduciendo la cantidad mensual pero elevando marcadamente el interés total. Los planes basados en el ingreso fijan los pagos como una parte de su ingreso y pueden llevar a la condonación tras un periodo establecido. Esta calculadora modela un plan estándar de plazo fijo; ingrese el plazo que ofrezca su administrador para estimar el pago de ese plan." },
      { question: "¿Debo elegir un plazo más largo para reducir mi pago?", answer: "Un plazo más largo sí reduce el pago mensual, lo que puede aliviar un presupuesto ajustado, pero aumenta significativamente el interés total que paga porque el saldo permanece pendiente por más años. Si el flujo de efectivo es el problema inmediato, un plan más largo o basado en el ingreso puede ayudar, pero si puede permitirse el pago estándar, el plazo más corto ahorra mucho más dinero en total. Compare el pago mensual contra el interés total en esta herramienta antes de comprometerse con un calendario más largo." },
      { question: "¿Cómo se acumula el interés en los préstamos estudiantiles?", answer: "El interés se acumula diariamente sobre su capital pendiente a la tasa de su préstamo. Bajo un plan estándar, su pago mensual fijo cubre primero el interés acumulado, y el resto reduce el capital, así que los primeros pagos tienen más peso de interés. En préstamos no subsidiados y privados, el interés también se acumula mientras está en la escuela y durante el aplazamiento, y el interés no pagado puede capitalizarse —agregarse al capital— lo que aumenta el saldo sobre el que paga interés. Los préstamos federales subsidiados no acumulan interés mientras esté inscrito al menos medio tiempo." },
      { question: "¿Puedo pagar mi préstamo estudiantil por adelantado?", answer: "Sí, los préstamos estudiantiles federales y la mayoría de los privados no tienen penalización por pago anticipado, así que pagar de más reduce su capital y el interés que se acumula sobre él, acortando la liquidación y recortando el interés total. Para que los pagos adicionales cuenten contra el capital en lugar del interés futuro, indique a su administrador que los aplique de esa forma. Incluso pequeñas cantidades adicionales cada mes pueden ahorrar una suma significativa durante la vida del préstamo. Vuelva a ejecutar esta herramienta con un plazo más corto para ver el efecto de pagar más rápido." },
      { question: "¿Cuál es la diferencia entre préstamos subsidiados y no subsidiados?", answer: "Con un préstamo federal subsidiado, el gobierno paga el interés mientras está en la escuela al menos medio tiempo, durante el periodo de gracia y en el aplazamiento, así que el saldo no crece durante esos tiempos. Con un préstamo no subsidiado, el interés se acumula desde el momento en que el préstamo se desembolsa, incluso mientras estudia, y cualquier interés no pagado puede capitalizarse en el capital. Esa diferencia hace que los préstamos subsidiados sean más baratos en total. Ambos tipos usan la misma matemática de amortización una vez que comienza el reembolso." },
    ],
  },
];
