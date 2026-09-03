import type { CalculatorDefinition } from "../types";

export const mathExtraCalculators: CalculatorDefinition[] = [
  {
    id: "fraction",
    slug: "fraction-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Fraction Calculator",
    shortDescription: "Add, subtract, multiply or divide two fractions.",
    seoTitle: "Fraction Calculator — Add, Subtract, Multiply, Divide",
    metaDescription:
      "Free fraction calculator. Add, subtract, multiply or divide two fractions and get the simplified result plus its decimal value.",
    primaryKeyword: "fraction calculator",
    secondaryKeywords: ["adding fractions calculator", "simplify fractions", "fraction math"],
    fields: [
      { id: "n1", label: "Numerator 1", type: "number", placeholder: "1", required: true, span: 1 },
      { id: "d1", label: "Denominator 1", type: "number", placeholder: "2", required: true, span: 1 },
      {
        id: "op", label: "Operation", type: "select", required: true, span: 2, defaultValue: "+",
        options: [
          { value: "+", label: "Add (+)" },
          { value: "-", label: "Subtract (−)" },
          { value: "*", label: "Multiply (×)" },
          { value: "/", label: "Divide (÷)" },
        ],
      },
      { id: "n2", label: "Numerator 2", type: "number", placeholder: "1", required: true, span: 1 },
      { id: "d2", label: "Denominator 2", type: "number", placeholder: "3", required: true, span: 1 },
    ],
    results: [
      { id: "result", label: "Result", format: "text", isPrimary: true },
      { id: "decimal", label: "As a decimal", format: "number", decimals: 6, isPrimary: false },
    ],
    formula: "a/b + c/d = (a·d + c·b) / (b·d), then simplify by the GCD",
    explanation:
      "A fraction represents a part of a whole as one number divided by another, a numerator over a denominator, and combining two fractions means finding the single fraction equal to their sum, difference, product or quotient. The challenge is that fractions can only be added or subtracted once they share a denominator, while multiplication and division follow different rules again. The fraction calculator handles all four operations and then reduces the outcome, so the answer arrives in its simplest form rather than an awkward, oversized ratio. To add or subtract, the tool rewrites both fractions over a common denominator, most simply the product of the two denominators, then works on the numerators; adding 1/2 and 1/3 becomes the numerator 1 times 3 plus 1 times 2 over 2 times 3, which is 5/6. To divide, it multiplies by the reciprocal of the second fraction. Every result is then divided top and bottom by the greatest common divisor, because a fraction calculator should present a value like 5/6 in lowest terms and its decimal, roughly 0.833333, alongside it. Students learning arithmetic, cooks scaling recipes, carpenters working in inches and anyone splitting quantities rely on this fraction calculator to combine fractions accurately without slips in the cross-multiplication.",
    formulaExplanation:
      "Adding fractions requires a shared denominator, so multiplying each numerator by the other fraction's denominator, a times d and c times b, rewrites both over the common base b times d without changing their values. The rewritten numerators can then be added directly. Dividing the final numerator and denominator by their greatest common divisor removes the shared factor, so 1/2 plus 1/3 lands as 5/6 in lowest terms.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { n1: 1, d1: 2, op: "+", n2: 1, d2: 3 },
      explanation: "1/2 + 1/3 = (1·3 + 1·2) / (2·3) = 5/6 ≈ 0.833333.",
    },
    faqs: [
      { question: "How do I add fractions with different denominators?", answer: "Give them a common denominator first. The simplest shared denominator is the product of the two, so for 1/2 and 1/3 you use sixths: 1/2 becomes 3/6 and 1/3 becomes 2/6. Add the numerators to get 5/6, then reduce if the result shares a common factor. Multiplication and division do not need a common denominator, but addition and subtraction always do." },
      { question: "Does the calculator simplify the answer?", answer: "Yes, every result is reduced to lowest terms. After performing your chosen operation, the tool finds the greatest common divisor of the numerator and denominator and divides both by it, so nothing is left with a shared factor. That is why 1/2 plus 1/3 is reported as 5/6 rather than an unreduced equivalent. The decimal form, about 0.833333, is shown too for quick reference." },
      { question: "How do I divide by a fraction?", answer: "Multiply by its reciprocal, flipping the second fraction upside down and multiplying. Dividing by 1/3 is the same as multiplying by 3/1, because division asks how many of the divisor fit into the dividend. The calculator applies this automatically when you choose the divide operation, then simplifies the product, so you never have to invert the fraction or reduce the result yourself." },
      { question: "How do I multiply fractions?", answer: "Multiply the numerators together and the denominators together, with no common denominator needed. For 1/2 times 1/3 the numerators give 1 and the denominators give 6, so the product is 1/6. Multiplication is the most direct fraction operation because it works straight across. The calculator then reduces the result to lowest terms, cancelling any factor the top and bottom share." },
      { question: "What is a fraction as a decimal?", answer: "It is the value you get by dividing the numerator by the denominator. Splitting 5 by 6 gives about 0.833333, which is why the calculator shows that alongside the fraction 5/6. Some fractions produce terminating decimals, like 1/2 equalling 0.5, while others repeat forever. The decimal form is handy for comparing fractions or plugging a result into further calculations that expect a plain number." },
    ],
    relatedCalculators: ["ratio-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-fracciones",
    titleEs: "Calculadora de Fracciones",
    shortDescriptionEs: "Suma, resta, multiplica o divide dos fracciones.",
    seoTitleEs: "Calculadora de Fracciones — Sumar, Restar, Multiplicar, Dividir",
    metaDescriptionEs:
      "Calculadora de fracciones gratuita. Suma, resta, multiplica o divide dos fracciones y obtén el resultado simplificado más su valor decimal.",
    primaryKeywordEs: "calculadora de fracciones",
    secondaryKeywordsEs: ["calculadora para sumar fracciones", "simplificar fracciones", "operaciones con fracciones"],
    formulaExplanationEs:
      "Sumar fracciones exige un denominador común, así que multiplicar cada numerador por el denominador de la otra fracción, a por d y c por b, reescribe ambas sobre la base común b por d sin cambiar sus valores. Los numeradores reescritos pueden entonces sumarse directamente. Dividir el numerador y el denominador finales entre su máximo común divisor elimina el factor compartido, de modo que 1/2 más 1/3 queda como 5/6 en su mínima expresión.",
    explanationEs:
      "Una fracción representa una parte de un todo como un número dividido entre otro, un numerador sobre un denominador, y combinar dos fracciones significa hallar la única fracción igual a su suma, diferencia, producto o cociente. La dificultad es que las fracciones solo pueden sumarse o restarse una vez que comparten denominador, mientras que la multiplicación y la división siguen reglas distintas. La calculadora de fracciones maneja las cuatro operaciones y luego reduce el resultado, de modo que la respuesta llega en su forma más simple en lugar de una razón grande e incómoda. Para sumar o restar, la herramienta reescribe ambas fracciones sobre un denominador común, lo más simple el producto de los dos denominadores, y luego trabaja con los numeradores; sumar 1/2 y 1/3 se convierte en el numerador 1 por 3 más 1 por 2 sobre 2 por 3, que es 5/6. Para dividir, multiplica por el recíproco de la segunda fracción. Cada resultado se divide luego arriba y abajo entre el máximo común divisor, porque una calculadora de fracciones debe presentar un valor como 5/6 en su mínima expresión junto a su decimal, aproximadamente 0,833333. Estudiantes, cocineros que escalan recetas y carpinteros que trabajan en pulgadas confían en esta calculadora para combinar fracciones con precisión.",
    exampleEs: {
      inputs: { n1: 1, d1: 2, op: "+", n2: 1, d2: 3 },
      explanation: "1/2 + 1/3 = (1·3 + 1·2) / (2·3) = 5/6 ≈ 0,833333.",
    },
    faqsEs: [
      { question: "¿Cómo sumo fracciones con distintos denominadores?", answer: "Dales primero un denominador común. El denominador compartido más simple es el producto de los dos, así que para 1/2 y 1/3 usas sextos: 1/2 se convierte en 3/6 y 1/3 en 2/6. Suma los numeradores para obtener 5/6 y luego reduce si el resultado comparte un factor común. La multiplicación y la división no necesitan un denominador común, pero la suma y la resta siempre sí." },
      { question: "¿La calculadora simplifica la respuesta?", answer: "Sí, cada resultado se reduce a su mínima expresión. Tras realizar la operación elegida, la herramienta encuentra el máximo común divisor del numerador y el denominador y divide ambos entre él, de modo que no queda nada con un factor compartido. Por eso 1/2 más 1/3 se informa como 5/6 y no como un equivalente sin reducir. La forma decimal, alrededor de 0,833333, también se muestra para consulta rápida." },
      { question: "¿Cómo divido entre una fracción?", answer: "Multiplica por su recíproco, dando vuelta la segunda fracción y multiplicando. Dividir entre 1/3 es lo mismo que multiplicar por 3/1, porque la división pregunta cuántas veces cabe el divisor en el dividendo. La calculadora aplica esto automáticamente cuando eliges la operación de dividir, y luego simplifica el producto, así que nunca tienes que invertir la fracción ni reducir el resultado tú mismo." },
      { question: "¿Cómo multiplico fracciones?", answer: "Multiplica los numeradores entre sí y los denominadores entre sí, sin necesidad de un denominador común. Para 1/2 por 1/3 los numeradores dan 1 y los denominadores dan 6, así que el producto es 1/6. La multiplicación es la operación más directa con fracciones porque funciona en línea recta. La calculadora luego reduce el resultado a su mínima expresión, cancelando cualquier factor que el numerador y el denominador compartan." },
      { question: "¿Qué es una fracción como decimal?", answer: "Es el valor que obtienes al dividir el numerador entre el denominador. Dividir 5 entre 6 da alrededor de 0,833333, por lo que la calculadora lo muestra junto a la fracción 5/6. Algunas fracciones producen decimales finitos, como 1/2 que es igual a 0,5, mientras que otras se repiten indefinidamente. La forma decimal es útil para comparar fracciones o introducir un resultado en cálculos posteriores que esperan un número simple." },
    ],
  },
  {
    id: "ratio",
    slug: "ratio-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Ratio Calculator",
    shortDescription: "Simplify a ratio and scale it proportionally.",
    seoTitle: "Ratio Calculator — Simplify & Scale Ratios",
    metaDescription:
      "Free ratio calculator. Simplify any ratio to its lowest terms, see it as a decimal, and scale it proportionally to find a missing value.",
    primaryKeyword: "ratio calculator",
    secondaryKeywords: ["simplify ratio", "proportion calculator", "ratio to decimal"],
    fields: [
      { id: "a", label: "Value A", type: "number", placeholder: "16", required: true, span: 1 },
      { id: "b", label: "Value B", type: "number", placeholder: "9", required: true, span: 1 },
      { id: "scaleA", label: "Scale A to", type: "number", placeholder: "1920", required: false, span: 2, helpText: "Optional — finds the matching B at this scale." },
    ],
    results: [
      { id: "simplified", label: "Simplified ratio", format: "text", isPrimary: true },
      { id: "decimal", label: "As a decimal (A ÷ B)", format: "number", decimals: 4, isPrimary: false },
      { id: "scaledValue", label: "Matching B", format: "number", decimals: 2, isPrimary: false },
    ],
    formula: "Divide both terms by their GCD; scale via A : B = newA : newB",
    explanation:
      "A ratio compares two quantities by showing how many units of one correspond to units of the other, written with a colon as A to B. Two jobs come up constantly with ratios: reducing them to their simplest whole-number form and scaling them up while holding the proportion fixed. The ratio calculator does both, and also expresses the relationship as a single decimal for quick comparison. Simplifying divides both terms by their greatest common divisor, which leaves 16 : 9 unchanged but collapses 1920 : 1080 to the same 16 : 9. Scaling answers the practical question of what B must be if A becomes a given value. The tool keeps A to B constant, so setting A to 1920 against an original 16 : 9 returns B equal to 1920 times 9 divided by 16, which is 1080. Because the proportion never shifts, a ratio calculator lets you resize recipes, mixes, screen dimensions or map distances without recomputing the relationship from scratch. Designers matching aspect ratios, cooks and chemists holding a mixture's proportions, and model builders scaling plans all lean on this ratio calculator to simplify and rescale two-part relationships reliably.",
    formulaExplanation:
      "Dividing both terms of a ratio by their greatest common divisor removes the factor they share without disturbing their relationship, so 1920 : 1080 shrinks to 16 : 9. Scaling relies on the proportion A to B staying equal to newA to newB; solving that equality for the missing term gives newB as newA times B divided by A. Setting A to 1920 therefore returns B as 1920 times 9 divided by 16, or 1080.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { a: 16, b: 9, scaleA: 1920 },
      explanation: "16 : 9 is already simplified. Scaling A to 1920 gives B = 1920 × 9 ÷ 16 = 1080.",
    },
    faqs: [
      { question: "How do I simplify a ratio?", answer: "Divide both numbers by their greatest common divisor, the largest value that goes into each with no remainder. For 1920 : 1080 that divisor is 120, and dividing both terms by it leaves 16 : 9. The ratio still describes the same relationship, only with smaller numbers. If the two terms already share no common factor, the ratio is fully simplified as it stands." },
      { question: "What is a ratio as a decimal?", answer: "It is the first term divided by the second, which turns the comparison into one plain number. A 16 : 9 ratio equals 16 divided by 9, about 1.78, meaning the first quantity is roughly 1.78 times the second. Decimals make ratios easy to rank and compare at a glance, and they slot directly into further calculations that expect a single value rather than a two-part expression." },
      { question: "How does scaling a ratio work?", answer: "Scaling holds the proportion fixed while you change one term. Set a new value for A, and the calculator finds the B that keeps A to B equal to the original ratio. With a 16 : 9 ratio and A set to 1920, it returns 1080, because 1920 times 9 divided by 16 is 1080. This is how a single aspect ratio expands to any resolution without distorting the shape." },
      { question: "What is the difference between a ratio and a fraction?", answer: "A fraction expresses a part of a single whole, while a ratio compares two separate quantities that may or may not belong to the same whole. A 16 : 9 ratio can be written as the fraction 16/9, and the arithmetic of simplifying is the same, but ratios often describe relationships like width to height or one ingredient to another, where thinking of a single whole would be misleading." },
      { question: "Can I use a ratio to find a missing value?", answer: "Yes, that is exactly what the scaling field does. Given a known ratio and one new term, the calculator solves for the other so the proportion stays intact. Enter A as 1920 with an original 16 : 9 ratio and it returns B as 1080. The same cross-multiplication finds a missing first term if you know the second, which is how proportion problems in recipes and maps are solved." },
    ],
    relatedCalculators: ["fraction-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-razones",
    titleEs: "Calculadora de Razones",
    shortDescriptionEs: "Simplifica una razón y escálala proporcionalmente.",
    seoTitleEs: "Calculadora de Razones — Simplificar y Escalar Razones",
    metaDescriptionEs:
      "Calculadora de razones gratuita. Simplifica cualquier razón a su mínima expresión, mírala como decimal y escálala proporcionalmente para hallar un valor faltante.",
    primaryKeywordEs: "calculadora de razones",
    secondaryKeywordsEs: ["simplificar razón", "calculadora de proporciones", "razón a decimal"],
    formulaExplanationEs:
      "Dividir ambos términos de una razón entre su máximo común divisor elimina el factor que comparten sin alterar su relación, de modo que 1920 : 1080 se reduce a 16 : 9. El escalado se basa en que la proporción A a B permanezca igual a nuevaA a nuevaB; despejar esa igualdad para el término faltante da nuevaB como nuevaA por B dividido entre A. Fijar A en 1920 devuelve, por tanto, B como 1920 por 9 dividido entre 16, es decir 1080.",
    explanationEs:
      "Una razón compara dos cantidades mostrando cuántas unidades de una corresponden a unidades de la otra, escrita con dos puntos como A a B. Con las razones surgen constantemente dos tareas: reducirlas a su forma más simple con números enteros y escalarlas hacia arriba manteniendo fija la proporción. La calculadora de razones hace ambas y también expresa la relación como un único decimal para comparación rápida. Simplificar divide ambos términos entre su máximo común divisor, lo que deja 16 : 9 sin cambios pero reduce 1920 : 1080 a esa misma 16 : 9. El escalado responde a la pregunta práctica de cuánto debe ser B si A se convierte en un valor dado. La herramienta mantiene A a B constante, así que fijar A en 1920 frente a una razón original de 16 : 9 devuelve B igual a 1920 por 9 dividido entre 16, que es 1080. Como la proporción nunca cambia, una calculadora de razones te permite redimensionar recetas, mezclas, dimensiones de pantalla o distancias de mapa sin recalcular la relación desde cero. Diseñadores que igualan relaciones de aspecto, cocineros y químicos que mantienen las proporciones de una mezcla y constructores de maquetas que escalan planos se apoyan en esta calculadora.",
    exampleEs: {
      inputs: { a: 16, b: 9, scaleA: 1920 },
      explanation: "16 : 9 ya está simplificada. Escalar A a 1920 da B = 1920 × 9 ÷ 16 = 1080.",
    },
    faqsEs: [
      { question: "¿Cómo simplifico una razón?", answer: "Divide ambos números entre su máximo común divisor, el mayor valor que entra en cada uno sin dejar resto. Para 1920 : 1080 ese divisor es 120, y dividir ambos términos entre él deja 16 : 9. La razón sigue describiendo la misma relación, solo que con números más pequeños. Si los dos términos ya no comparten ningún factor común, la razón está totalmente simplificada tal como está." },
      { question: "¿Qué es una razón como decimal?", answer: "Es el primer término dividido entre el segundo, lo que convierte la comparación en un solo número simple. Una razón 16 : 9 es igual a 16 dividido entre 9, alrededor de 1,78, lo que significa que la primera cantidad es aproximadamente 1,78 veces la segunda. Los decimales facilitan clasificar y comparar razones de un vistazo, y encajan directamente en cálculos posteriores que esperan un único valor en lugar de una expresión de dos partes." },
      { question: "¿Cómo funciona el escalado de una razón?", answer: "El escalado mantiene fija la proporción mientras cambias un término. Fija un nuevo valor para A y la calculadora encuentra el B que mantiene A a B igual a la razón original. Con una razón 16 : 9 y A fijado en 1920, devuelve 1080, porque 1920 por 9 dividido entre 16 es 1080. Así es como una sola relación de aspecto se expande a cualquier resolución sin distorsionar la forma." },
      { question: "¿Cuál es la diferencia entre una razón y una fracción?", answer: "Una fracción expresa una parte de un solo todo, mientras que una razón compara dos cantidades separadas que pueden o no pertenecer al mismo todo. Una razón 16 : 9 puede escribirse como la fracción 16/9, y la aritmética de simplificar es la misma, pero las razones suelen describir relaciones como ancho a alto o un ingrediente a otro, donde pensar en un solo todo sería engañoso." },
      { question: "¿Puedo usar una razón para hallar un valor faltante?", answer: "Sí, eso es exactamente lo que hace el campo de escalado. Dada una razón conocida y un nuevo término, la calculadora despeja el otro para que la proporción se mantenga intacta. Ingresa A como 1920 con una razón original de 16 : 9 y devuelve B como 1080. La misma multiplicación cruzada halla un primer término faltante si conoces el segundo, que es como se resuelven los problemas de proporción en recetas y mapas." },
    ],
  },
  {
    id: "gcf",
    slug: "gcf-calculator",
    category: "Math",
    categorySlug: "math",
    title: "GCF Calculator",
    shortDescription: "Find the greatest common factor of numbers.",
    seoTitle: "GCF Calculator — Greatest Common Factor",
    metaDescription:
      "Free GCF calculator. Find the greatest common factor (GCD) of two or more numbers, along with their least common multiple and the steps behind it.",
    primaryKeyword: "gcf calculator",
    secondaryKeywords: ["greatest common factor", "gcd calculator", "hcf calculator"],
    fields: [
      { id: "numbers", label: "Numbers", type: "text", placeholder: "e.g. 24, 36, 60", required: true, span: 2, helpText: "Two or more whole numbers, separated by commas." },
    ],
    results: [
      { id: "gcf", label: "Greatest common factor", format: "number", decimals: 0, isPrimary: true },
      { id: "lcm", label: "Least common multiple", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "GCF via the Euclidean algorithm: gcd(a, b) = gcd(b, a mod b)",
    explanation:
      "The greatest common factor of a set of numbers is the largest whole number that divides every one of them exactly, leaving no remainder. It captures the biggest chunk the numbers share, which is why it underpins reducing fractions, factoring expressions and splitting quantities into equal groups. The gcf calculator finds it for any list of whole numbers and, because the two ideas travel together, also returns the least common multiple. For 24, 36 and 60, the largest factor common to all three is 12, so the GCF is 12 while the LCM is 360. Rather than listing every factor of each number and hunting for the biggest match, the tool uses the Euclidean algorithm, which repeatedly replaces the larger number with the remainder of dividing it by the smaller until one becomes zero. That last non-zero value is the GCF, and the method stays fast even for large numbers, which is why a gcf calculator built on it handles long lists instantly by folding the result across the numbers pairwise. Students simplifying fractions, teachers setting factoring problems, and anyone dividing items into even portions turn to this gcf calculator for the largest shared divisor without trial and error.",
    formulaExplanation:
      "The Euclidean algorithm rests on a simple fact: any number dividing both a and b also divides their remainder, so gcd(a, b) equals gcd(b, a mod b). Replacing the larger value with that remainder shrinks the problem without losing the common factor, and repeating until the remainder hits zero leaves the last divisor as the answer. Folding this across a list pairwise extends it to 24, 36 and 60, giving 12.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { numbers: "24, 36, 60" },
      explanation: "The factors shared by 24, 36 and 60 peak at 12, so the GCF is 12 (and the LCM is 360).",
    },
    faqs: [
      { question: "What is the greatest common factor used for?", answer: "Its most common job is simplifying fractions: dividing the numerator and denominator by their greatest common factor reduces the fraction to lowest terms in one step. It also helps factor algebraic expressions, split items into the largest possible equal groups, and find common measurements. Anywhere you need the biggest amount two or more quantities share, the GCF is the number that answers it directly." },
      { question: "Is GCF the same as HCF and GCD?", answer: "Yes, all three name the same value. Greatest Common Factor (GCF), Highest Common Factor (HCF) and Greatest Common Divisor (GCD) are interchangeable terms for the largest whole number that divides a set of numbers evenly. Textbooks in different countries favour different labels, but the calculation is identical, so a result of 12 for 24, 36 and 60 is correct whichever term your course uses." },
      { question: "How do I find the GCF of more than two numbers?", answer: "Find the GCF of the first two, then take the GCF of that result with the next number, and continue through the list. Because a factor common to all must be common to each pair, this pairwise approach gives the right answer. For 24, 36 and 60 the shared factor works out to 12. The calculator performs these steps automatically for any list you enter." },
      { question: "What is the difference between GCF and LCM?", answer: "The GCF is the largest number that divides all your values, while the least common multiple is the smallest number all your values divide into. One looks downward at shared factors, the other upward at shared multiples. For 24, 36 and 60 the GCF is 12 and the LCM is 360. They are linked: for two numbers, their product equals the GCF times the LCM." },
      { question: "Can I enter more than two numbers?", answer: "Yes. Enter any list of whole numbers separated by commas, and the calculator finds the factor common to all of them at once. There is no practical limit on how many you include. It works through the list pairwise, so adding more numbers can only keep the GCF the same or lower it, never raise it, since the more values that must share a factor, the smaller that factor tends to be." },
    ],
    relatedCalculators: ["lcm-calculator", "fraction-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-maximo-comun-divisor",
    titleEs: "Calculadora de Máximo Común Divisor",
    shortDescriptionEs: "Encuentra el máximo común divisor de varios números.",
    seoTitleEs: "Calculadora de MCD — Máximo Común Divisor",
    metaDescriptionEs:
      "Calculadora de MCD gratuita. Encuentra el máximo común divisor de dos o más números, además de su mínimo común múltiplo.",
    primaryKeywordEs: "calculadora de máximo común divisor",
    secondaryKeywordsEs: ["máximo común divisor", "calculadora de mcd", "mayor factor común"],
    formulaExplanationEs:
      "El algoritmo de Euclides se apoya en un hecho simple: cualquier número que divide tanto a a como a b también divide su resto, así que mcd(a, b) es igual a mcd(b, a mód b). Reemplazar el valor mayor por ese resto reduce el problema sin perder el factor común, y repetir hasta que el resto llegue a cero deja el último divisor como respuesta. Aplicar esto a lo largo de una lista por pares lo extiende a 24, 36 y 60, dando 12.",
    explanationEs:
      "El máximo común divisor de un conjunto de números es el mayor número entero que divide a cada uno de ellos exactamente, sin dejar resto. Capta la mayor porción que los números comparten, razón por la cual sustenta la reducción de fracciones, la factorización de expresiones y la división de cantidades en grupos iguales. La calculadora de máximo común divisor lo encuentra para cualquier lista de números enteros y, como las dos ideas van juntas, también devuelve el mínimo común múltiplo. Para 24, 36 y 60, el mayor factor común a los tres es 12, así que el MCD es 12 mientras que el MCM es 360. En lugar de listar cada factor de cada número y buscar la mayor coincidencia, la herramienta usa el algoritmo de Euclides, que reemplaza repetidamente el número mayor por el resto de dividirlo entre el menor hasta que uno se vuelve cero. Ese último valor distinto de cero es el MCD, y el método sigue siendo rápido incluso para números grandes, razón por la cual una calculadora de MCD basada en él maneja listas largas al instante aplicando el resultado por pares. Estudiantes que simplifican fracciones, profesores que plantean problemas de factorización y cualquiera que divide artículos en porciones iguales recurren a esta calculadora.",
    exampleEs: {
      inputs: { numbers: "24, 36, 60" },
      explanation: "Los factores compartidos por 24, 36 y 60 llegan como máximo a 12, así que el MCD es 12 (y el MCM es 360).",
    },
    faqsEs: [
      { question: "¿Para qué se usa el máximo común divisor?", answer: "Su tarea más común es simplificar fracciones: dividir el numerador y el denominador entre su máximo común divisor reduce la fracción a su mínima expresión en un solo paso. También ayuda a factorizar expresiones algebraicas, dividir artículos en los mayores grupos iguales posibles y hallar medidas comunes. Donde necesites la mayor cantidad que dos o más cantidades comparten, el MCD es el número que la responde directamente." },
      { question: "¿Es el MCD lo mismo que el HCF y el GCD?", answer: "Sí, los tres nombran el mismo valor. Máximo Común Divisor (MCD), Highest Common Factor (HCF) y Greatest Common Divisor (GCD) son términos intercambiables para el mayor número entero que divide un conjunto de números uniformemente. Los libros de texto de distintos países prefieren distintas etiquetas, pero el cálculo es idéntico, así que un resultado de 12 para 24, 36 y 60 es correcto cualquiera sea el término que use tu curso." },
      { question: "¿Cómo hallo el MCD de más de dos números?", answer: "Halla el MCD de los dos primeros, luego toma el MCD de ese resultado con el siguiente número y continúa por la lista. Como un factor común a todos debe ser común a cada par, este enfoque por pares da la respuesta correcta. Para 24, 36 y 60 el factor compartido resulta ser 12. La calculadora realiza estos pasos automáticamente para cualquier lista que ingreses." },
      { question: "¿Cuál es la diferencia entre MCD y MCM?", answer: "El MCD es el mayor número que divide todos tus valores, mientras que el mínimo común múltiplo es el menor número en el que todos tus valores dividen. Uno mira hacia abajo a los factores compartidos, el otro hacia arriba a los múltiplos compartidos. Para 24, 36 y 60 el MCD es 12 y el MCM es 360. Están vinculados: para dos números, su producto es igual al MCD por el MCM." },
      { question: "¿Puedo ingresar más de dos números?", answer: "Sí. Ingresa cualquier lista de números enteros separados por comas y la calculadora encuentra el factor común a todos ellos a la vez. No hay un límite práctico de cuántos incluyes. Trabaja por pares a lo largo de la lista, así que añadir más números solo puede mantener el MCD igual o reducirlo, nunca subirlo, ya que cuantos más valores deban compartir un factor, más pequeño tiende a ser ese factor." },
    ],
  },
  {
    id: "lcm",
    slug: "lcm-calculator",
    category: "Math",
    categorySlug: "math",
    title: "LCM Calculator",
    shortDescription: "Find the least common multiple of numbers.",
    seoTitle: "LCM Calculator — Least Common Multiple",
    metaDescription:
      "Free LCM calculator. Find the least common multiple of two or more numbers, along with their greatest common factor and the steps behind the answer.",
    primaryKeyword: "lcm calculator",
    secondaryKeywords: ["least common multiple", "lcm of fractions", "lowest common multiple"],
    fields: [
      { id: "numbers", label: "Numbers", type: "text", placeholder: "e.g. 4, 6, 8", required: true, span: 2, helpText: "Two or more whole numbers, separated by commas." },
    ],
    results: [
      { id: "lcm", label: "Least common multiple", format: "number", decimals: 0, isPrimary: true },
      { id: "gcf", label: "Greatest common factor", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "lcm(a, b) = |a × b| ÷ gcd(a, b), applied across all numbers",
    explanation:
      "The least common multiple of a set of numbers is the smallest value that each of them divides into without a remainder, the first point at which their separate multiples all line up. It is the natural counterpart to the greatest common factor, and it is what you need whenever quantities repeating at different intervals have to synchronise. The lcm calculator returns it for any list of whole numbers and shows the greatest common factor beside it. For 4, 6 and 8, the smallest number every value divides into is 24, so the LCM is 24 while the GCF is 2. Rather than listing multiples of each number until a common one appears, the tool computes the LCM from the greatest common divisor: for two numbers it multiplies them and divides by their GCD, then applies the same step pairwise across the whole list. That shortcut is exact and fast, so an lcm calculator can handle large numbers that would be impractical to list out by hand. The most common use is adding or comparing fractions, where the LCM of the denominators gives the smallest common denominator; scheduling repeating events and aligning gear or cycle counts are others. Students, engineers and planners rely on this lcm calculator for the smallest shared multiple.",
    formulaExplanation:
      "For two numbers, every common multiple is a multiple of the smallest one, and multiplying the pair double-counts exactly the factor they share. Dividing the product by their greatest common divisor removes that duplicated factor, leaving the least common multiple. Applying this pairwise across a list, combining the running LCM with each next number, extends it to any set, so 4, 6 and 8 yield 24.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { numbers: "4, 6, 8" },
      explanation: "The smallest number divisible by 4, 6 and 8 is 24, so the LCM is 24 (their GCF is 2).",
    },
    faqs: [
      { question: "When do I need the least common multiple?", answer: "Most often when adding or comparing fractions with unlike denominators: the LCM of the denominators is the smallest common denominator, which keeps the numbers as small as possible. It also solves timing problems, since when two events repeat at different intervals the LCM tells you when they next coincide. Aligning gear teeth, packaging counts and recurring schedules are other everyday uses for the least common multiple." },
      { question: "What is the difference between LCM and GCF?", answer: "The least common multiple is the smallest number that all your values divide into, while the greatest common factor is the largest number that divides all of them. LCM looks upward to shared multiples; GCF looks downward to shared factors. For 4, 6 and 8 the LCM is 24 and the GCF is 2. The two are connected, since for any pair of numbers their product equals their LCM times their GCF." },
      { question: "How do I find the LCM of three or more numbers?", answer: "Take the LCM of the first two numbers, then find the LCM of that result with the next number, and repeat through the list. Working pairwise like this reaches the smallest multiple shared by them all. For 4, 6 and 8 the process gives 24. The calculator does every step for you, so you can enter a long list of whole numbers and read the answer at once." },
      { question: "Can the LCM be one of the numbers?", answer: "Yes. When one number is a multiple of all the others, that number is itself the least common multiple. For 4 and 8, since 8 is already divisible by 4, the LCM is 8 rather than something larger. In general the LCM is at least as big as the largest number in the set and never smaller, because it has to be divisible by every value present." },
      { question: "How is the LCM used to add fractions?", answer: "Find the LCM of the denominators and rewrite each fraction over that common denominator, then add the numerators. Using the least common multiple rather than just multiplying the denominators keeps the numbers smaller and often avoids simplifying later. For denominators of 4, 6 and 8, the LCM is 24, so each fraction is converted to twenty-fourths before the numerators are combined." },
    ],
    relatedCalculators: ["gcf-calculator", "fraction-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-minimo-comun-multiplo",
    titleEs: "Calculadora de Mínimo Común Múltiplo",
    shortDescriptionEs: "Encuentra el mínimo común múltiplo de varios números.",
    seoTitleEs: "Calculadora de MCM — Mínimo Común Múltiplo",
    metaDescriptionEs:
      "Calculadora de MCM gratuita. Encuentra el mínimo común múltiplo de dos o más números, además de su máximo común divisor.",
    primaryKeywordEs: "calculadora de mínimo común múltiplo",
    secondaryKeywordsEs: ["mínimo común múltiplo", "mcm de fracciones", "menor común múltiplo"],
    formulaExplanationEs:
      "Para dos números, todo múltiplo común es un múltiplo del menor, y multiplicar el par cuenta dos veces exactamente el factor que comparten. Dividir el producto entre su máximo común divisor elimina ese factor duplicado, dejando el mínimo común múltiplo. Aplicar esto por pares a lo largo de una lista, combinando el MCM acumulado con cada número siguiente, lo extiende a cualquier conjunto, así que 4, 6 y 8 dan 24.",
    explanationEs:
      "El mínimo común múltiplo de un conjunto de números es el valor más pequeño en el que cada uno de ellos divide sin dejar resto, el primer punto en el que sus múltiplos separados se alinean. Es la contraparte natural del máximo común divisor, y es lo que necesitas cuando cantidades que se repiten a intervalos distintos deben sincronizarse. La calculadora de MCM lo devuelve para cualquier lista de números enteros y muestra el máximo común divisor a su lado. Para 4, 6 y 8, el número más pequeño en el que cada valor divide es 24, así que el MCM es 24 mientras que el MCD es 2. En lugar de listar los múltiplos de cada número hasta que aparezca uno común, la herramienta calcula el MCM a partir del máximo común divisor: para dos números los multiplica y divide entre su MCD, luego aplica el mismo paso por pares a lo largo de toda la lista. Ese atajo es exacto y rápido, así que una calculadora de MCM puede manejar números grandes que sería poco práctico listar a mano. El uso más común es sumar o comparar fracciones, donde el MCM de los denominadores da el menor denominador común; sincronizar eventos que se repiten y alinear engranajes o ciclos son otros. Estudiantes, ingenieros y planificadores confían en esta calculadora para el menor múltiplo compartido.",
    exampleEs: {
      inputs: { numbers: "4, 6, 8" },
      explanation: "El número más pequeño divisible entre 4, 6 y 8 es 24, así que el MCM es 24 (su MCD es 2).",
    },
    faqsEs: [
      { question: "¿Cuándo necesito el mínimo común múltiplo?", answer: "Con mayor frecuencia al sumar o comparar fracciones con denominadores distintos: el MCM de los denominadores es el menor denominador común, lo que mantiene los números lo más pequeños posible. También resuelve problemas de tiempos, ya que cuando dos eventos se repiten a intervalos distintos, el MCM te dice cuándo coinciden de nuevo. Alinear dientes de engranaje, cantidades de empaque y horarios recurrentes son otros usos cotidianos del mínimo común múltiplo." },
      { question: "¿Cuál es la diferencia entre MCM y MCD?", answer: "El mínimo común múltiplo es el número más pequeño en el que todos tus valores dividen, mientras que el máximo común divisor es el mayor número que divide a todos ellos. El MCM mira hacia arriba a los múltiplos compartidos; el MCD mira hacia abajo a los factores compartidos. Para 4, 6 y 8 el MCM es 24 y el MCD es 2. Los dos están conectados, ya que para cualquier par de números su producto es igual a su MCM por su MCD." },
      { question: "¿Cómo hallo el MCM de tres o más números?", answer: "Toma el MCM de los dos primeros números, luego halla el MCM de ese resultado con el siguiente número y repite por la lista. Trabajar por pares así alcanza el múltiplo más pequeño compartido por todos. Para 4, 6 y 8 el proceso da 24. La calculadora hace cada paso por ti, así que puedes ingresar una lista larga de números enteros y leer la respuesta de una vez." },
      { question: "¿Puede el MCM ser uno de los números?", answer: "Sí. Cuando un número es múltiplo de todos los demás, ese número es en sí mismo el mínimo común múltiplo. Para 4 y 8, como 8 ya es divisible entre 4, el MCM es 8 y no algo mayor. En general el MCM es al menos tan grande como el mayor número del conjunto y nunca menor, porque tiene que ser divisible entre cada valor presente." },
      { question: "¿Cómo se usa el MCM para sumar fracciones?", answer: "Halla el MCM de los denominadores y reescribe cada fracción sobre ese denominador común, luego suma los numeradores. Usar el mínimo común múltiplo en lugar de simplemente multiplicar los denominadores mantiene los números más pequeños y a menudo evita simplificar después. Para denominadores de 4, 6 y 8, el MCM es 24, así que cada fracción se convierte a veinticuatroavos antes de combinar los numeradores." },
    ],
  },
  {
    id: "scientific",
    slug: "scientific-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Scientific Calculator",
    shortDescription: "Apply scientific functions to any number.",
    seoTitle: "Scientific Calculator — Trig, Logs, Roots & More",
    metaDescription:
      "Free scientific calculator. Apply trigonometric, logarithmic, exponential, root and factorial functions to any value, in degrees or radians.",
    primaryKeyword: "scientific calculator",
    secondaryKeywords: ["trig calculator", "log calculator", "sin cos tan calculator"],
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "45", required: true, span: 2, step: 0.0001 },
      {
        id: "operation", label: "Function", type: "select", required: true, span: 1, defaultValue: "sqrt",
        options: [
          { value: "sqrt", label: "Square root (√)" },
          { value: "cbrt", label: "Cube root (∛)" },
          { value: "square", label: "Square (x²)" },
          { value: "cube", label: "Cube (x³)" },
          { value: "sin", label: "sin" },
          { value: "cos", label: "cos" },
          { value: "tan", label: "tan" },
          { value: "asin", label: "arcsin" },
          { value: "acos", label: "arccos" },
          { value: "atan", label: "arctan" },
          { value: "ln", label: "ln (natural log)" },
          { value: "log10", label: "log₁₀" },
          { value: "exp", label: "eˣ" },
          { value: "factorial", label: "Factorial (x!)" },
          { value: "reciprocal", label: "Reciprocal (1/x)" },
          { value: "abs", label: "Absolute value" },
        ],
      },
      {
        id: "angleUnit", label: "Angle unit", type: "select", required: false, span: 1, defaultValue: "deg",
        options: [
          { value: "deg", label: "Degrees" },
          { value: "rad", label: "Radians" },
        ],
      },
    ],
    results: [{ id: "result", label: "Result", format: "number", decimals: 6, isPrimary: true }],
    formula: "Applies the chosen function; trig uses the selected angle unit",
    explanation:
      "A scientific calculator extends basic arithmetic with the functions that appear throughout algebra, trigonometry, statistics and the sciences: roots and powers, sines and cosines and their inverses, natural and base-ten logarithms, exponentials, factorials, reciprocals and absolute values. Rather than crowding every operation onto one screen, this scientific calculator applies a single chosen function to your input, which keeps each result unambiguous and easy to check. Trigonometric functions read the angle in whichever unit you select, degrees or radians, so sin of 45 degrees returns approximately 0.707107 when degrees are chosen. Several of these functions are only defined over part of the number line, and getting that wrong produces nonsense. Logarithms need a positive argument, arcsine and arccosine accept only values from minus 1 to 1, and factorials are defined for non-negative whole numbers. When an input falls outside a function's domain, the tool should return no result rather than a misleading one, which is exactly what it does by showing a dash instead. Students and teachers working through trigonometry and precalculus, engineers and physicists evaluating formulas, and analysts handling logarithmic or exponential data all depend on a scientific calculator for accurate function values that mental math and a basic four-function device cannot provide.",
    formulaExplanation:
      "Each function reverses or extends a basic operation: a root undoes a power, a logarithm undoes exponentiation, and the inverse trig functions undo sine, cosine and tangent. Trigonometric values depend on how the angle is measured, so the calculator converts degrees to radians internally before evaluating, since the underlying math is defined in radians. That conversion is why sin of 45 degrees resolves to about 0.707107 only once the unit is known.",
    formulaSource: "Standard mathematics",
    example: {
      inputs: { value: 45, operation: "sin", angleUnit: "deg" },
      explanation: "sin(45°) ≈ 0.707107.",
    },
    faqs: [
      { question: "Does the calculator use degrees or radians?", answer: "Both, and you choose the angle unit for trigonometric functions. Selecting degrees interprets an entry of 45 as 45 degrees, so sin of 45 degrees returns about 0.707107; selecting radians treats the same number as radians instead and gives a different result. Non-trigonometric functions such as logarithms, roots and factorials ignore the angle unit entirely, since they operate on plain numbers rather than angles." },
      { question: "Why do some inputs return no result?", answer: "Certain functions are undefined for certain inputs, and the calculator shows a dash rather than invent a value. Logarithms require a positive argument, so the log of zero or a negative number has no real answer. Arcsine and arccosine accept only values between minus 1 and 1, and factorials need a non-negative whole number. When your entry falls outside the valid range, the blank result is the mathematically correct response." },
      { question: "What is the difference between ln and log?", answer: "Both are logarithms but use different bases. Natural log, written ln, uses the base e, roughly 2.71828, and appears throughout calculus and growth models. The log button here uses base 10, which counts powers of ten and suits scientific notation and decibels. They answer the same kind of question, namely what exponent produces this number, but against different bases, so their outputs for the same input differ." },
      { question: "How large a factorial can it calculate?", answer: "Factorials grow extremely fast, and above 170 the result exceeds the largest value standard floating-point numbers can hold. Beyond that point the calculator reports infinity rather than a finite figure, because the true answer is larger than the format can represent. For inputs up to 170, it returns the exact factorial, and it declines negative or fractional inputs since the ordinary factorial is defined only for non-negative whole numbers." },
      { question: "Can I use it for trigonometry homework?", answer: "Yes. It evaluates sine, cosine and tangent along with their inverses arcsine, arccosine and arctangent, in either degrees or radians to match your assignment. Choosing degrees, sin of 45 degrees gives about 0.707107, the value you would expect on a standard unit circle. Set the angle unit before you compute, since the same number produces a different result in radians, and the inverse functions return the angle in your chosen unit." },
    ],
    relatedCalculators: ["square-root-calculator", "percentage-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-cientifica",
    titleEs: "Calculadora Científica",
    shortDescriptionEs: "Aplica funciones científicas a cualquier número.",
    seoTitleEs: "Calculadora Científica — Trigonometría, Logaritmos, Raíces y Más",
    metaDescriptionEs:
      "Calculadora científica gratuita. Aplica funciones trigonométricas, logarítmicas, exponenciales, de raíz y factoriales a cualquier valor, en grados o radianes.",
    primaryKeywordEs: "calculadora científica",
    secondaryKeywordsEs: ["calculadora de trigonometría", "calculadora de logaritmos", "calculadora seno coseno tangente"],
    formulaExplanationEs:
      "Cada función revierte o extiende una operación básica: una raíz deshace una potencia, un logaritmo deshace la exponenciación, y las funciones trigonométricas inversas deshacen el seno, el coseno y la tangente. Los valores trigonométricos dependen de cómo se mida el ángulo, así que la calculadora convierte los grados a radianes internamente antes de evaluar, ya que las matemáticas subyacentes se definen en radianes. Esa conversión es por lo que el seno de 45 grados resulta ser alrededor de 0,707107 solo una vez conocida la unidad.",
    explanationEs:
      "Una calculadora científica amplía la aritmética básica con las funciones que aparecen en el álgebra, la trigonometría, la estadística y las ciencias: raíces y potencias, senos y cosenos y sus inversas, logaritmos naturales y de base diez, exponenciales, factoriales, recíprocos y valores absolutos. En lugar de amontonar cada operación en una sola pantalla, esta calculadora científica aplica una única función elegida a tu entrada, lo que mantiene cada resultado sin ambigüedad y fácil de comprobar. Las funciones trigonométricas leen el ángulo en la unidad que selecciones, grados o radianes, así que el seno de 45 grados devuelve aproximadamente 0,707107 cuando se eligen grados. Varias de estas funciones solo están definidas en parte de la recta numérica, y equivocarse en eso produce sinsentidos. Los logaritmos necesitan un argumento positivo, el arcoseno y el arcocoseno aceptan solo valores de menos 1 a 1, y los factoriales se definen para números enteros no negativos. Cuando una entrada cae fuera del dominio de una función, la herramienta no devuelve resultado en lugar de uno engañoso, mostrando un guion. Estudiantes y profesores de trigonometría, ingenieros y físicos que evalúan fórmulas, y analistas que manejan datos logarítmicos o exponenciales dependen de una calculadora científica para valores de función precisos.",
    exampleEs: {
      inputs: { value: 45, operation: "sin", angleUnit: "deg" },
      explanation: "sen(45°) ≈ 0,707107.",
    },
    faqsEs: [
      { question: "¿La calculadora usa grados o radianes?", answer: "Ambos, y tú eliges la unidad de ángulo para las funciones trigonométricas. Seleccionar grados interpreta una entrada de 45 como 45 grados, así que el seno de 45 grados devuelve alrededor de 0,707107; seleccionar radianes trata el mismo número como radianes y da un resultado distinto. Las funciones no trigonométricas como los logaritmos, las raíces y los factoriales ignoran por completo la unidad de ángulo, ya que operan sobre números simples y no sobre ángulos." },
      { question: "¿Por qué algunas entradas no devuelven resultado?", answer: "Ciertas funciones no están definidas para ciertas entradas, y la calculadora muestra un guion en lugar de inventar un valor. Los logaritmos requieren un argumento positivo, así que el logaritmo de cero o de un número negativo no tiene respuesta real. El arcoseno y el arcocoseno aceptan solo valores entre menos 1 y 1, y los factoriales necesitan un número entero no negativo. Cuando tu entrada cae fuera del rango válido, el resultado en blanco es la respuesta matemáticamente correcta." },
      { question: "¿Cuál es la diferencia entre ln y log?", answer: "Ambos son logaritmos pero usan bases distintas. El logaritmo natural, escrito ln, usa la base e, aproximadamente 2,71828, y aparece en todo el cálculo y los modelos de crecimiento. El botón log aquí usa la base 10, que cuenta potencias de diez y conviene a la notación científica y los decibelios. Responden el mismo tipo de pregunta, es decir qué exponente produce este número, pero contra bases distintas, así que sus resultados para la misma entrada difieren." },
      { question: "¿Qué tan grande puede calcular un factorial?", answer: "Los factoriales crecen extremadamente rápido, y por encima de 170 el resultado supera el mayor valor que pueden contener los números de punto flotante estándar. Más allá de ese punto la calculadora informa infinito en lugar de una cifra finita, porque la respuesta verdadera es mayor de lo que el formato puede representar. Para entradas de hasta 170, devuelve el factorial exacto, y rechaza entradas negativas o fraccionarias ya que el factorial ordinario se define solo para enteros no negativos." },
      { question: "¿Puedo usarla para tareas de trigonometría?", answer: "Sí. Evalúa el seno, el coseno y la tangente junto con sus inversas arcoseno, arcocoseno y arcotangente, en grados o radianes para coincidir con tu tarea. Al elegir grados, el seno de 45 grados da alrededor de 0,707107, el valor que esperarías en un círculo unitario estándar. Fija la unidad de ángulo antes de calcular, ya que el mismo número produce un resultado distinto en radianes, y las funciones inversas devuelven el ángulo en tu unidad elegida." },
    ],
  },
];
