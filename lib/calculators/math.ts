import type { CalculatorDefinition } from "../types";

export const mathCalculators: CalculatorDefinition[] = [
  {
    id: "percentage",
    slug: "percentage-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage Calculator",
    shortDescription: "Find what X% of a number is, instantly.",
    seoTitle: "Percentage Calculator — Free Online Percent Calculator",
    metaDescription:
      "Free percentage calculator. Quickly find what X% of any number is, with the formula and a worked example. Fast, accurate and mobile-friendly.",
    primaryKeyword: "percentage calculator",
    secondaryKeywords: ["percent calculator", "what is x percent of y", "calculate percentage"],
    fields: [
      { id: "percent", label: "Percentage", type: "number", placeholder: "20", unit: "%", required: true, span: 1, step: 0.01 },
      { id: "value", label: "Of value", type: "number", placeholder: "150", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "result", label: "Result", format: "number", decimals: 2, isPrimary: true, description: "X% of the value" },
    ],
    formula: "result = (percentage ÷ 100) × value",
    explanation:
      "A percentage expresses a quantity as a portion of one hundred, which is why the word literally means 'per hundred.' When you find a percentage of a number, you are scaling that number down or up to the share the percentage represents. The percentage calculator does this in two clean steps: it converts the stated percentage into its decimal equivalent by dividing by 100, then multiplies that decimal by the value you are measuring against. Working 20% of 150, for instance, turns 20 into 0.2 and returns 0.2 times 150, which is 30. Percentages matter because they let people compare quantities on a common scale regardless of the underlying totals, so a 20% share means the same relative amount whether the base is 150 or 15,000. This shared scale is what makes the decimal-and-multiply method the standard approach; it mirrors the definition of a percentage exactly and avoids the rounding drift that mental shortcuts introduce. The tool removes that friction entirely and keeps the result exact. Shoppers use a percentage calculator for discounts and sales tax, students apply it to test scores and lab results, and finance and retail professionals lean on it for margins, tips, commissions and interest. Anywhere a part-of-a-whole relationship appears, this percentage calculator turns it into a precise figure.",
    formulaExplanation:
      "Dividing the percentage by 100 restores its true meaning as a fraction of one hundred, converting 20% into the decimal 0.2. Multiplying that decimal by the value then takes exactly that fraction of the whole, so 0.2 times 150 yields 30. The two operations mirror the definition of a percent directly: express the part per hundred, then apply it to the actual base amount.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { percent: 20, value: 150 },
      explanation: "20% of 150 = (20 ÷ 100) × 150 = 0.2 × 150 = 30.",
    },
    faqs: [
      { question: "What is a percentage?", answer: "A percentage is a way of writing a number as a fraction of one hundred, marked by the percent sign. Saying 20% is identical to saying 20 out of 100, or the decimal 0.2. Because every percentage shares the same base of one hundred, percentages let you compare portions drawn from totals of any size on one consistent scale, which is what makes them so widely used." },
      { question: "How do I calculate a percentage of a number?", answer: "Turn the percentage into a decimal by dividing it by 100, then multiply that decimal by the number you are measuring. For 20% of 150, divide 20 by 100 to get 0.2, then multiply by 150 to reach 30. The order never changes the answer, and doing both steps keeps the figure exact rather than rounded from a mental estimate." },
      { question: "How do I convert a percentage to a decimal?", answer: "Divide the percentage by 100, which shifts the decimal point two places to the left. That converts 20% into 0.2 and 5% into 0.05. Reversing the process by multiplying a decimal by 100 turns it back into a percentage, so 0.2 becomes 20%. This conversion is the first step in almost every percentage calculation and keeps the arithmetic aligned with the definition of a percent." },
      { question: "Can I use this to work out a discount?", answer: "Yes. Find the percentage of the original price first, then subtract it. On a 150 item marked 20% off, take 20% of 150, which is 30, and subtract to reach a sale price of 120. To go the other way and add sales tax or a tip, calculate the percentage the same way and add it to the base amount instead of subtracting." },
      { question: "Why divide by 100 instead of using the percentage number directly?", answer: "The percent sign already means divided by one hundred, so 20% is not the number 20; it is 20/100, or 0.2. Multiplying a value by the raw 20 would scale it twenty times over instead of taking a fifth of it. Dividing by 100 first restores the intended proportion, which is why 20% of 150 correctly gives 30 rather than 3,000." },
    ],
    relatedCalculators: ["percentage-increase-calculator", "percentage-difference-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-porcentaje",
    titleEs: "Calculadora de Porcentaje",
    shortDescriptionEs: "Encuentra al instante cuánto es el X% de un número.",
    seoTitleEs: "Calculadora de Porcentaje — Calcular Porcentajes en Línea Gratis",
    metaDescriptionEs:
      "Calculadora de porcentaje gratuita. Encuentra rápidamente cuánto es el X% de cualquier número, con la fórmula y un ejemplo resuelto. Rápida, precisa y compatible con móviles.",
    primaryKeywordEs: "calculadora de porcentaje",
    secondaryKeywordsEs: ["calculadora de porcentajes", "cuánto es x por ciento de y", "calcular porcentaje"],
    formulaExplanationEs:
      "Dividir el porcentaje entre 100 restaura su verdadero significado como fracción de cien, convirtiendo el 20% en el decimal 0,2. Multiplicar ese decimal por el valor toma exactamente esa fracción del total, de modo que 0,2 por 150 da 30. Las dos operaciones reflejan directamente la definición de un porcentaje: expresar la parte por cien y luego aplicarla a la cantidad base real que estás midiendo.",
    explanationEs:
      "Un porcentaje expresa una cantidad como una porción de cien, razón por la cual la palabra significa literalmente 'por ciento'. Cuando encuentras un porcentaje de un número, estás escalando ese número hacia abajo o hacia arriba a la parte que representa el porcentaje. La calculadora de porcentaje hace esto en dos pasos limpios: convierte el porcentaje indicado en su equivalente decimal dividiendo entre 100 y luego multiplica ese decimal por el valor con el que lo comparas. Al trabajar el 20% de 150, por ejemplo, convierte 20 en 0,2 y devuelve 0,2 por 150, que es 30. Los porcentajes importan porque permiten comparar cantidades en una escala común sin importar los totales subyacentes, de modo que una participación del 20% significa la misma cantidad relativa ya sea que la base sea 150 o 15.000. Esta escala compartida es lo que hace que el método de convertir a decimal y multiplicar sea el enfoque estándar. Los compradores usan una calculadora de porcentaje para descuentos e impuestos, los estudiantes la aplican a calificaciones, y los profesionales de finanzas y comercio la utilizan para márgenes, propinas, comisiones e intereses.",
    exampleEs: {
      inputs: { percent: 20, value: 150 },
      explanation: "El 20% de 150 = (20 ÷ 100) × 150 = 0,2 × 150 = 30.",
    },
    faqsEs: [
      { question: "¿Qué es un porcentaje?", answer: "Un porcentaje es una forma de escribir un número como una fracción de cien, señalada con el signo de porcentaje. Decir 20% es idéntico a decir 20 de cada 100, o el decimal 0,2. Como cada porcentaje comparte la misma base de cien, los porcentajes permiten comparar porciones extraídas de totales de cualquier tamaño en una sola escala coherente, lo que explica su uso tan extendido." },
      { question: "¿Cómo calculo un porcentaje de un número?", answer: "Convierte el porcentaje en decimal dividiéndolo entre 100 y luego multiplica ese decimal por el número que estás midiendo. Para el 20% de 150, divide 20 entre 100 para obtener 0,2 y multiplica por 150 hasta llegar a 30. El orden nunca cambia la respuesta, y realizar ambos pasos mantiene la cifra exacta en lugar de redondeada a partir de una estimación mental." },
      { question: "¿Cómo convierto un porcentaje en decimal?", answer: "Divide el porcentaje entre 100, lo que desplaza el punto decimal dos lugares hacia la izquierda. Eso convierte el 20% en 0,2 y el 5% en 0,05. Invertir el proceso multiplicando un decimal por 100 lo devuelve a porcentaje, de modo que 0,2 vuelve a ser 20%. Esta conversión es el primer paso de casi todo cálculo de porcentaje y mantiene la aritmética alineada con la definición." },
      { question: "¿Puedo usar esto para calcular un descuento?", answer: "Sí. Primero encuentra el porcentaje del precio original y luego réstalo. En un artículo de 150 con un 20% de descuento, toma el 20% de 150, que es 30, y resta para llegar a un precio de venta de 120. Para hacer lo contrario y añadir impuestos o una propina, calcula el porcentaje del mismo modo y súmalo a la cantidad base en lugar de restarlo." },
      { question: "¿Por qué dividir entre 100 en lugar de usar directamente el número del porcentaje?", answer: "El signo de porcentaje ya significa dividido entre cien, así que 20% no es el número 20; es 20/100, es decir 0,2. Multiplicar un valor por el 20 en bruto lo escalaría veinte veces en lugar de tomar una quinta parte. Dividir primero entre 100 restaura la proporción prevista, por lo que el 20% de 150 da correctamente 30 y no 3.000." },
    ],
  },
  {
    id: "percentage-increase",
    slug: "percentage-increase-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage Increase Calculator",
    shortDescription: "Calculate the percent change between two values.",
    seoTitle: "Percentage Increase Calculator — Percent Change Calculator",
    metaDescription:
      "Free percentage increase & decrease calculator. Find the percent change between an original and new value, with the formula and a worked example.",
    primaryKeyword: "percentage increase calculator",
    secondaryKeywords: ["percent change calculator", "percentage decrease calculator", "increase percentage"],
    fields: [
      { id: "original", label: "Original value", type: "number", placeholder: "200", required: true, span: 1, step: 0.01 },
      { id: "updated", label: "New value", type: "number", placeholder: "250", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "change", label: "Percent change", format: "percentage", decimals: 2, isPrimary: true, description: "Positive = increase, negative = decrease" },
      { id: "difference", label: "Absolute difference", format: "number", decimals: 2, isPrimary: false },
    ],
    formula: "change (%) = ((new − original) ÷ |original|) × 100",
    explanation:
      "Percent change captures how much a value has grown or shrunk compared with where it started, expressed as a proportion of that original amount. Because it is relative rather than absolute, a rise of 50 means very different things against a base of 200 than against a base of 5,000, and the percentage tells you which. The percentage increase calculator measures this by subtracting the original value from the new value, dividing that gap by the original, and multiplying by 100. Moving from 200 to 250 produces a 50 difference over a base of 200, which is a 25% increase; a negative result signals a decrease instead. Anchoring the change to the starting value is what makes the method meaningful, because growth is almost always judged against the point it grew from. That framing is why the same tool doubles as a percentage decrease calculator: the arithmetic is identical and only the sign flips. A percentage increase calculator keeps the direction and the magnitude in one figure. Analysts use it for revenue and price growth, scientists for measured change between readings, and everyday users for pay rises, rent hikes and portfolio swings. Whenever a before-and-after pair needs a single comparable number, this percentage increase calculator supplies it cleanly.",
    formulaExplanation:
      "Subtracting the original from the new value isolates the raw amount of change, here 250 minus 200, a gap of 50. Dividing that gap by the original expresses it as a fraction of the starting point, and multiplying by 100 states it as a percent. Using the original as the denominator is deliberate: growth is measured against where it began, so 50 over 200 becomes a 25% increase.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { original: 200, updated: 250 },
      explanation: "From 200 to 250: ((250 − 200) ÷ 200) × 100 = (50 ÷ 200) × 100 = 25% increase.",
    },
    faqs: [
      { question: "What is percent change?", answer: "Percent change is the size of an increase or decrease written as a percentage of the original value. It answers how much something grew or fell relative to its starting point rather than in raw units. Reporting a move from 200 to 250 as a 25% increase is more informative than saying it rose by 50, because the percentage already accounts for the base the change is measured against." },
      { question: "How do I calculate percentage increase?", answer: "Subtract the original value from the new value, divide the result by the original, then multiply by 100. Going from 200 to 250 gives a difference of 50; dividing 50 by 200 gives 0.25, and multiplying by 100 gives a 25% increase. The same three steps handle a decrease automatically, since a smaller new value makes the difference negative and the percentage falls below zero." },
      { question: "What does a negative result mean?", answer: "A negative percentage means the value dropped rather than rose, so the calculator is reporting a decrease. The magnitude still works the same way, measured against the original amount. Because the formula subtracts the original from the new value, any new value lower than the original produces a negative numerator and therefore a negative percent, which is the signal that the quantity shrank." },
      { question: "Is percentage increase the same as percentage difference?", answer: "No. Percentage increase is measured against the original value and carries a direction, so reversing the two numbers changes the answer. Percentage difference divides by the average of the two values and ignores direction, giving the same result whichever way you enter them. Use percentage increase when one number is clearly a starting point and the other an outcome; use percentage difference when neither comes first." },
      { question: "Can I use it to calculate a percentage decrease?", answer: "Yes. The formula is identical for decreases: enter the original value first and the smaller new value second, and the result comes out negative to show the drop. Falling from 250 back to 200 gives a difference of minus 50 over a base of 250, which is a 20% decrease. Note that a rise and the matching fall are not equal percentages, because each is measured against a different starting value." },
    ],
    relatedCalculators: ["percentage-calculator", "percentage-difference-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-aumento-porcentual",
    titleEs: "Calculadora de Aumento Porcentual",
    shortDescriptionEs: "Calcula el cambio porcentual entre dos valores.",
    seoTitleEs: "Calculadora de Aumento Porcentual — Cambio Porcentual",
    metaDescriptionEs:
      "Calculadora de aumento y disminución porcentual gratuita. Encuentra el cambio porcentual entre un valor original y uno nuevo, con la fórmula y un ejemplo resuelto.",
    primaryKeywordEs: "calculadora de aumento porcentual",
    secondaryKeywordsEs: ["calculadora de cambio porcentual", "calculadora de disminución porcentual", "aumento en porcentaje"],
    formulaExplanationEs:
      "Restar el valor original del nuevo aísla la cantidad bruta de cambio, aquí 250 menos 200, una diferencia de 50. Dividir esa diferencia entre el original la expresa como una fracción del punto de partida, y multiplicar por 100 la enuncia como porcentaje. Usar el original como denominador es deliberado: el crecimiento se mide respecto de dónde empezó, así que 50 sobre 200 se convierte en un aumento del 25%.",
    explanationEs:
      "El cambio porcentual capta cuánto ha crecido o disminuido un valor en comparación con su punto de partida, expresado como proporción de esa cantidad original. Como es relativo y no absoluto, una subida de 50 significa cosas muy distintas frente a una base de 200 que frente a una base de 5.000, y el porcentaje te dice cuál. La calculadora de aumento porcentual lo mide restando el valor original del nuevo valor, dividiendo esa diferencia entre el original y multiplicando por 100. Pasar de 200 a 250 produce una diferencia de 50 sobre una base de 200, que es un aumento del 25%; un resultado negativo señala una disminución. Anclar el cambio al valor inicial es lo que hace que el método sea significativo, porque el crecimiento casi siempre se juzga respecto del punto del que partió. Por eso la misma herramienta sirve también como calculadora de disminución porcentual: la aritmética es idéntica y solo cambia el signo. Los analistas la usan para el crecimiento de ingresos y precios, los científicos para el cambio medido entre lecturas y los usuarios cotidianos para aumentos de sueldo, subidas de alquiler y variaciones de cartera.",
    exampleEs: {
      inputs: { original: 200, updated: 250 },
      explanation: "De 200 a 250: ((250 − 200) ÷ 200) × 100 = (50 ÷ 200) × 100 = 25% de aumento.",
    },
    faqsEs: [
      { question: "¿Qué es el cambio porcentual?", answer: "El cambio porcentual es el tamaño de un aumento o una disminución escrito como porcentaje del valor original. Responde cuánto creció o cayó algo respecto de su punto de partida en lugar de en unidades brutas. Informar un movimiento de 200 a 250 como un aumento del 25% es más informativo que decir que subió 50, porque el porcentaje ya tiene en cuenta la base contra la que se mide el cambio." },
      { question: "¿Cómo calculo el aumento porcentual?", answer: "Resta el valor original del nuevo valor, divide el resultado entre el original y luego multiplica por 100. Pasar de 200 a 250 da una diferencia de 50; dividir 50 entre 200 da 0,25, y multiplicar por 100 da un aumento del 25%. Los mismos tres pasos manejan una disminución automáticamente, ya que un nuevo valor menor hace la diferencia negativa y el porcentaje cae por debajo de cero." },
      { question: "¿Qué significa un resultado negativo?", answer: "Un porcentaje negativo significa que el valor bajó en lugar de subir, así que la calculadora informa una disminución. La magnitud funciona igual, medida contra la cantidad original. Como la fórmula resta el original del nuevo valor, cualquier nuevo valor menor que el original produce un numerador negativo y, por tanto, un porcentaje negativo, que es la señal de que la cantidad se redujo." },
      { question: "¿Es el aumento porcentual lo mismo que la diferencia porcentual?", answer: "No. El aumento porcentual se mide respecto del valor original y lleva una dirección, de modo que invertir los dos números cambia la respuesta. La diferencia porcentual divide entre el promedio de los dos valores e ignora la dirección, dando el mismo resultado sin importar cómo los ingreses. Usa el aumento porcentual cuando un número sea claramente un punto de partida y el otro un resultado; usa la diferencia porcentual cuando ninguno vaya primero." },
      { question: "¿Puedo usarla para calcular una disminución porcentual?", answer: "Sí. La fórmula es idéntica para las disminuciones: ingresa primero el valor original y luego el nuevo valor menor, y el resultado sale negativo para mostrar la caída. Bajar de 250 a 200 da una diferencia de menos 50 sobre una base de 250, que es una disminución del 20%. Ten en cuenta que una subida y la caída correspondiente no son porcentajes iguales, porque cada una se mide contra un punto de partida distinto." },
    ],
  },
  {
    id: "percentage-difference",
    slug: "percentage-difference-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage Difference Calculator",
    shortDescription: "Compare two values as a percentage difference.",
    seoTitle: "Percentage Difference Calculator — Free Online Tool",
    metaDescription:
      "Free percentage difference calculator. Compare two numbers as a percentage of their average, with the formula and a clear worked example.",
    primaryKeyword: "percentage difference calculator",
    secondaryKeywords: ["percent difference", "difference between two numbers percentage"],
    fields: [
      { id: "a", label: "First value", type: "number", placeholder: "40", required: true, span: 1, step: 0.01 },
      { id: "b", label: "Second value", type: "number", placeholder: "60", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "difference", label: "Percentage difference", format: "percentage", decimals: 2, isPrimary: true },
      { id: "absolute", label: "Absolute difference", format: "number", decimals: 2, isPrimary: false },
    ],
    formula: "difference (%) = (|a − b| ÷ ((a + b) ÷ 2)) × 100",
    explanation:
      "Percentage difference measures how far apart two values are relative to their typical size, without labelling either one as the reference point. Instead of asking how much A grew into B, it treats the two numbers even-handedly: it takes the absolute gap between them and compares it against their average. That symmetry is the defining trait, so the percentage difference calculator returns the same answer whether you enter 40 then 60 or 60 then 40, because swapping them changes neither the gap nor the average. The method matters when there is no natural before or after. Comparing two lab measurements, two suppliers' prices or two sensor readings, you rarely want one to count as the baseline; dividing by the average rather than by either value keeps the comparison neutral. For 40 and 60 the gap is 20, the average is 50, and 20 over 50 is a 40% difference. A percentage difference calculator applies that consistently and always reports a non-negative figure. Engineers, scientists, accountants and quality analysts reach for this percentage difference calculator when they need an unbiased comparison of two equal-standing quantities rather than a directional change from a fixed origin.",
    formulaExplanation:
      "Taking the absolute difference measures how far apart the two values are while discarding which one is larger, so the result stays positive. Dividing by their average, not by either value, is what keeps the comparison symmetric, because the average treats both numbers equally. Multiplying by 100 states the gap as a percent. For 40 and 60, a gap of 20 over an average of 50 gives 40%.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { a: 40, b: 60 },
      explanation: "|40 − 60| = 20, average = 50, so (20 ÷ 50) × 100 = 40%.",
    },
    faqs: [
      { question: "What is percentage difference?", answer: "Percentage difference is the gap between two values expressed as a percentage of their average. It compares two numbers that stand on equal footing, with neither treated as the original or the reference. Because it divides by the average of the pair, it is symmetric: the values 40 and 60 differ by 40% no matter which you list first, and the answer is always zero or positive." },
      { question: "How is percentage difference different from percentage change?", answer: "Percentage change divides by the original value and has a direction, so it tells you how much one number grew or shrank into another. Percentage difference divides by the average of the two values and has no direction, so it simply measures how far apart they are. Change suits before-and-after comparisons; difference suits two readings where neither is the starting point." },
      { question: "When should I use percentage difference?", answer: "Use it whenever the two values you are comparing have no natural order: two independent measurements, two competing quotes, two instruments reading the same thing. In those cases picking one as the baseline would bias the result, so dividing by the average keeps the comparison fair. If one number is clearly a before and the other an after, percentage change is the better fit instead." },
      { question: "Can percentage difference be negative?", answer: "No. The formula uses the absolute value of the gap between the two numbers, which strips away any sign, so the result is always zero or positive. A difference of zero means the values are identical. This is a deliberate consequence of the method being symmetric: since neither value is treated as the baseline, there is no direction for the figure to point, and therefore no negative outcome." },
      { question: "How do I find the percentage difference between two numbers?", answer: "Subtract the smaller value from the larger to get the absolute gap, add the two numbers and halve them to get the average, then divide the gap by the average and multiply by 100. For 40 and 60, the gap is 20 and the average is 50, so 20 divided by 50 times 100 is a 40% difference. The order you enter the two numbers never affects the outcome." },
    ],
    relatedCalculators: ["percentage-calculator", "percentage-increase-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-diferencia-porcentual",
    titleEs: "Calculadora de Diferencia Porcentual",
    shortDescriptionEs: "Compara dos valores como diferencia porcentual.",
    seoTitleEs: "Calculadora de Diferencia Porcentual — Herramienta en Línea Gratis",
    metaDescriptionEs:
      "Calculadora de diferencia porcentual gratuita. Compara dos números como porcentaje de su promedio, con la fórmula y un ejemplo resuelto claro.",
    primaryKeywordEs: "calculadora de diferencia porcentual",
    secondaryKeywordsEs: ["diferencia porcentual", "diferencia entre dos números en porcentaje"],
    formulaExplanationEs:
      "Tomar la diferencia absoluta mide cuán separados están los dos valores descartando cuál es mayor, de modo que el resultado permanece positivo. Dividir entre su promedio, y no entre uno de los valores, es lo que mantiene la comparación simétrica, porque el promedio trata a ambos números por igual. Multiplicar por 100 enuncia la diferencia como porcentaje. Para 40 y 60, una diferencia de 20 sobre un promedio de 50 da 40%.",
    explanationEs:
      "La diferencia porcentual mide cuán separados están dos valores respecto de su tamaño típico, sin etiquetar a ninguno como el punto de referencia. En lugar de preguntar cuánto creció A hasta convertirse en B, trata a ambos números de forma equilibrada: toma la diferencia absoluta entre ellos y la compara con su promedio. Esa simetría es el rasgo definitorio, por lo que la calculadora de diferencia porcentual devuelve la misma respuesta ya sea que ingreses 40 y luego 60 o 60 y luego 40, porque intercambiarlos no altera ni la diferencia ni el promedio. El método importa cuando no hay un antes o un después natural. Al comparar dos mediciones de laboratorio, los precios de dos proveedores o dos lecturas de sensores, rara vez quieres que una cuente como la base; dividir entre el promedio en lugar de entre uno de los valores mantiene la comparación neutral. Para 40 y 60 la diferencia es 20, el promedio es 50, y 20 sobre 50 es una diferencia del 40%. Ingenieros, científicos, contadores y analistas de calidad recurren a esta calculadora cuando necesitan una comparación imparcial de dos cantidades de igual rango en lugar de un cambio direccional desde un origen fijo.",
    exampleEs: {
      inputs: { a: 40, b: 60 },
      explanation: "|40 − 60| = 20, promedio = 50, así que (20 ÷ 50) × 100 = 40%.",
    },
    faqsEs: [
      { question: "¿Qué es la diferencia porcentual?", answer: "La diferencia porcentual es la separación entre dos valores expresada como porcentaje de su promedio. Compara dos números que están en igualdad de condiciones, sin tratar a ninguno como el original o la referencia. Como divide entre el promedio del par, es simétrica: los valores 40 y 60 difieren en un 40% sin importar cuál listes primero, y la respuesta siempre es cero o positiva." },
      { question: "¿En qué se diferencia la diferencia porcentual del cambio porcentual?", answer: "El cambio porcentual divide entre el valor original y tiene una dirección, así que te dice cuánto creció o se redujo un número hasta convertirse en otro. La diferencia porcentual divide entre el promedio de los dos valores y no tiene dirección, así que simplemente mide cuán separados están. El cambio conviene para comparaciones de antes y después; la diferencia, para dos lecturas donde ninguna es el punto de partida." },
      { question: "¿Cuándo debo usar la diferencia porcentual?", answer: "Úsala siempre que los dos valores que comparas no tengan un orden natural: dos mediciones independientes, dos presupuestos que compiten, dos instrumentos leyendo lo mismo. En esos casos, elegir uno como la base sesgaría el resultado, así que dividir entre el promedio mantiene la comparación justa. Si un número es claramente un antes y el otro un después, el cambio porcentual encaja mejor." },
      { question: "¿Puede la diferencia porcentual ser negativa?", answer: "No. La fórmula usa el valor absoluto de la separación entre los dos números, lo que elimina cualquier signo, así que el resultado siempre es cero o positivo. Una diferencia de cero significa que los valores son idénticos. Esta es una consecuencia deliberada de que el método sea simétrico: como ninguno de los valores se trata como la base, no hay dirección hacia la que apunte la cifra, y por tanto no hay resultado negativo." },
      { question: "¿Cómo encuentro la diferencia porcentual entre dos números?", answer: "Resta el valor menor del mayor para obtener la separación absoluta, suma los dos números y divídelos entre dos para obtener el promedio, luego divide la separación entre el promedio y multiplica por 100. Para 40 y 60, la separación es 20 y el promedio es 50, así que 20 dividido entre 50 por 100 es una diferencia del 40%. El orden en que ingreses los dos números nunca afecta el resultado." },
    ],
  },
  {
    id: "average",
    slug: "average-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Average Calculator",
    shortDescription: "Find the mean, median, min and max of a list.",
    seoTitle: "Average Calculator — Mean, Median, Min & Max",
    metaDescription:
      "Free average calculator. Enter a list of numbers to get the mean, median, sum, count, minimum and maximum instantly.",
    primaryKeyword: "average calculator",
    secondaryKeywords: ["mean calculator", "median calculator", "how to find the average"],
    fields: [
      { id: "numbers", label: "Numbers", type: "text", placeholder: "e.g. 12, 18, 24, 30", required: true, span: 2, helpText: "Separate values with commas, spaces or new lines." },
    ],
    results: [
      { id: "mean", label: "Average (mean)", format: "number", decimals: 4, isPrimary: true },
      { id: "median", label: "Median", format: "number", decimals: 4, isPrimary: false },
      { id: "sum", label: "Sum", format: "number", decimals: 4, isPrimary: false },
      { id: "count", label: "Count", format: "number", decimals: 0, isPrimary: false },
      { id: "min", label: "Minimum", format: "number", decimals: 4, isPrimary: false },
      { id: "max", label: "Maximum", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "mean = (sum of all values) ÷ (count of values)",
    explanation:
      "An average, or arithmetic mean, condenses a whole list of numbers into a single representative value: add every entry together and divide by how many there are. It answers what each item would be if the total were shared out equally, which is why it is the most common summary of a data set. The average calculator computes this along with the companion statistics that give it context: the median, sum, count, minimum and maximum. For the list 12, 18, 24 and 30, the sum is 84 across four values, so the mean is 84 divided by 4, which is 21. The mean is used because it accounts for every value and pairs naturally with totals, but it can be pulled off-centre by extreme entries, so an average calculator reports the median alongside it. The median is the middle value once the numbers are sorted, also 21 for this list, and it resists the distortion that a single outlier would cause. Students average grades, teachers average class scores, and analysts, scientists and finance teams average prices, times and measurements. Whenever a spread of numbers needs one dependable central figure, this average calculator delivers the mean and the supporting statistics together.",
    formulaExplanation:
      "Adding every value produces the total the group represents, and dividing by the count spreads that total evenly across all the entries, giving the amount each would hold if they were equal. Every number therefore pulls the mean toward itself in proportion to its size. For 12, 18, 24 and 30, a sum of 84 shared among four values yields a mean of 21, the balance point of the list.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { numbers: "12, 18, 24, 30" },
      explanation: "Sum = 84, count = 4, so mean = 84 ÷ 4 = 21. Median = (18 + 24) ÷ 2 = 21.",
    },
    faqs: [
      { question: "What is the difference between mean and median?", answer: "The mean is the sum of all values divided by how many there are, so every number influences it. The median is the middle value once the list is sorted, so only the central position matters. When data is evenly spread the two agree, since both are 21 for 12, 18, 24 and 30, but when a few extreme values are present, the median stays closer to the typical entry." },
      { question: "How do I calculate the average of a list of numbers?", answer: "Add all the numbers to get their sum, count how many there are, then divide the sum by the count. For 12, 18, 24 and 30 the sum is 84 and the count is 4, so the average is 84 divided by 4, which equals 21. The calculator does this instantly and also sorts the values to report the median, minimum and maximum at the same time." },
      { question: "When should I use the median instead of the mean?", answer: "Use the median when your data contains outliers or is heavily skewed, such as incomes, house prices or response times, where a few very large values would drag the mean upward and misrepresent the typical case. The median ignores how far the extremes lie and reports only the middle value, so it often describes a normal entry more faithfully than the mean does for lopsided data." },
      { question: "How many numbers can I enter?", answer: "There is no fixed limit; enter as many values as you need, separated by commas, spaces or new lines. The calculator reads them all, adds them for the sum, divides by the count for the mean, and sorts them to find the median, minimum and maximum. Mixing separators is fine, so pasting a column of figures or a comma-separated row both work without any reformatting." },
      { question: "Does the order of the numbers matter?", answer: "No. The sum and the mean do not depend on order, and the calculator sorts the list internally before finding the median, minimum and maximum, so any arrangement gives the same results. Whether you enter 12, 18, 24, 30 or the same values shuffled, the mean stays 21 and the median stays 21. You can paste numbers in whatever order they happen to appear." },
    ],
    relatedCalculators: ["percentage-calculator", "square-root-calculator", "grade-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-promedio",
    titleEs: "Calculadora de Promedio",
    shortDescriptionEs: "Encuentra la media, mediana, mínimo y máximo de una lista.",
    seoTitleEs: "Calculadora de Promedio — Media, Mediana, Mínimo y Máximo",
    metaDescriptionEs:
      "Calculadora de promedio gratuita. Ingresa una lista de números para obtener al instante la media, la mediana, la suma, el conteo, el mínimo y el máximo.",
    primaryKeywordEs: "calculadora de promedio",
    secondaryKeywordsEs: ["calculadora de media", "calculadora de mediana", "cómo calcular el promedio"],
    formulaExplanationEs:
      "Sumar todos los valores produce el total que representa el grupo, y dividir entre el conteo reparte ese total de manera uniforme entre todas las entradas, dando la cantidad que cada una tendría si fueran iguales. Cada número, por tanto, atrae la media hacia sí mismo en proporción a su tamaño. Para 12, 18, 24 y 30, una suma de 84 repartida entre cuatro valores da una media de 21, el punto de equilibrio de la lista.",
    explanationEs:
      "Un promedio, o media aritmética, condensa toda una lista de números en un único valor representativo: suma cada entrada y divide entre cuántas hay. Responde cuánto sería cada elemento si el total se repartiera por igual, razón por la cual es el resumen más común de un conjunto de datos. La calculadora de promedio calcula esto junto con los estadísticos complementarios que le dan contexto: la mediana, la suma, el conteo, el mínimo y el máximo. Para la lista 12, 18, 24 y 30, la suma es 84 entre cuatro valores, así que la media es 84 dividido entre 4, que es 21. La media se usa porque tiene en cuenta cada valor y se combina de forma natural con los totales, pero puede desviarse por entradas extremas, por lo que una calculadora de promedio informa la mediana junto a ella. La mediana es el valor central una vez ordenados los números, también 21 para esta lista, y resiste la distorsión que causaría un solo valor atípico. Los estudiantes promedian calificaciones, los profesores promedian puntajes de clase, y los analistas, científicos y equipos de finanzas promedian precios, tiempos y mediciones.",
    exampleEs: {
      inputs: { numbers: "12, 18, 24, 30" },
      explanation: "Suma = 84, conteo = 4, así que media = 84 ÷ 4 = 21. Mediana = (18 + 24) ÷ 2 = 21.",
    },
    faqsEs: [
      { question: "¿Cuál es la diferencia entre media y mediana?", answer: "La media es la suma de todos los valores dividida entre cuántos hay, así que cada número influye en ella. La mediana es el valor central una vez ordenada la lista, así que solo importa la posición central. Cuando los datos están repartidos de forma uniforme, ambas coinciden, ya que las dos son 21 para 12, 18, 24 y 30, pero cuando hay unos pocos valores extremos, la mediana se mantiene más cerca de la entrada típica." },
      { question: "¿Cómo calculo el promedio de una lista de números?", answer: "Suma todos los números para obtener su total, cuenta cuántos hay y luego divide la suma entre el conteo. Para 12, 18, 24 y 30 la suma es 84 y el conteo es 4, así que el promedio es 84 dividido entre 4, que equivale a 21. La calculadora lo hace al instante y también ordena los valores para informar la mediana, el mínimo y el máximo al mismo tiempo." },
      { question: "¿Cuándo debo usar la mediana en lugar de la media?", answer: "Usa la mediana cuando tus datos contengan valores atípicos o estén muy sesgados, como ingresos, precios de vivienda o tiempos de respuesta, donde unos pocos valores muy grandes arrastrarían la media hacia arriba y tergiversarían el caso típico. La mediana ignora cuán lejos están los extremos e informa solo el valor central, así que a menudo describe una entrada normal con más fidelidad que la media para datos desequilibrados." },
      { question: "¿Cuántos números puedo ingresar?", answer: "No hay límite fijo; ingresa tantos valores como necesites, separados por comas, espacios o saltos de línea. La calculadora los lee todos, los suma para el total, divide entre el conteo para la media y los ordena para hallar la mediana, el mínimo y el máximo. Mezclar separadores está bien, así que pegar una columna de cifras o una fila separada por comas funciona sin ningún reformateo." },
      { question: "¿Importa el orden de los números?", answer: "No. La suma y la media no dependen del orden, y la calculadora ordena la lista internamente antes de hallar la mediana, el mínimo y el máximo, así que cualquier disposición da los mismos resultados. Ya sea que ingreses 12, 18, 24, 30 o los mismos valores mezclados, la media sigue siendo 21 y la mediana sigue siendo 21. Puedes pegar los números en el orden en que aparezcan." },
    ],
  },
  {
    id: "square-root",
    slug: "square-root-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Square Root Calculator",
    shortDescription: "Find the square root of any number.",
    seoTitle: "Square Root Calculator — Free Online √ Tool",
    metaDescription:
      "Free square root calculator. Find the square root of any positive number instantly, with the formula and a worked example.",
    primaryKeyword: "square root calculator",
    secondaryKeywords: ["sqrt calculator", "root calculator", "how to find square root"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "144", required: true, span: 2, min: 0, step: 0.0001 },
    ],
    results: [
      { id: "root", label: "Square root", format: "number", decimals: 6, isPrimary: true },
      { id: "squared", label: "Number squared", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "√n = the value x such that x × x = n",
    explanation:
      "The square root of a number is the value that, multiplied by itself, reproduces that number, so the square root of 144 is 12, because 12 times 12 is 144. It reverses squaring, unwinding an area back to the length of one side, which is exactly how the operation arises in geometry, physics and statistics. The square root calculator finds this value for any number from zero upward and returns it to several decimal places for precision. Every positive number has two roots that square to it, one positive and one negative, but the calculator reports the principal root, the non-negative one, because that is the value meant in almost all practical contexts. Zero has a single root of zero, and negative numbers have no real square root at all, since no real value squared is negative, which is why a square root calculator restricts its input to zero or greater. Roots appear constantly beyond the classroom: they scale distances through the Pythagorean theorem, define standard deviation in statistics, and set the sizing of squares and circles in design and engineering. Whenever squaring needs to be undone, this square root calculator returns the exact underlying value.",
    formulaExplanation:
      "The square root asks the inverse of squaring: rather than multiplying a number by itself, it searches for the value whose self-product equals your input. Naming it x, the definition that x times x equals n means x is the side length that produces an area of n. That is why the root of 144 is 12, since twelve is precisely the number that, squared, rebuilds 144.",
    formulaSource: "Standard arithmetic",
    example: {
      inputs: { number: 144 },
      explanation: "√144 = 12, because 12 × 12 = 144.",
    },
    faqs: [
      { question: "What is a square root?", answer: "A square root of a number is a value that gives that number when multiplied by itself. Since 12 times 12 is 144, twelve is a square root of 144. The operation undoes squaring, so it turns an area back into the length of the side that produced it. This inverse relationship is why roots appear anywhere a squared quantity, such as a distance, a variance or an area, needs to be reversed." },
      { question: "Can I take the square root of a negative number?", answer: "Not within the real numbers. No real value multiplied by itself gives a negative result, because a positive times a positive and a negative times a negative are both positive. The square root of a negative number is therefore called imaginary and lies outside ordinary arithmetic, which is why this calculator accepts only inputs of zero or greater and leaves negative entries without a real answer." },
      { question: "What is a principal square root?", answer: "The principal square root is the non-negative one. Every positive number technically has two roots, one positive and one negative, that both square to it, since 12 and minus 12 each give 144. To keep results unambiguous, the calculator returns only the principal, positive value, which is the root intended in nearly every practical calculation involving lengths, distances and measured quantities." },
      { question: "Is a square root always a whole number?", answer: "No. Only perfect squares like 144 have whole-number roots; most numbers have irrational roots that run on forever without repeating. The square root of 2, for example, is about 1.414214 and can never be written exactly as a fraction or a terminating decimal. The calculator handles both cases, returning an exact integer where one exists and a rounded decimal otherwise." },
      { question: "How do I calculate a square root by hand?", answer: "For perfect squares, ask which number multiplied by itself gives your value: twelve works for 144 because 12 times 12 is 144. For other numbers, estimate between the two nearest perfect squares and refine, so a value between 121 and 144 has a root between 11 and 12. This guess-and-check narrowing is tedious, which is why a calculator is faster and far more precise for non-perfect squares." },
    ],
    relatedCalculators: ["percentage-calculator", "average-calculator", "percentage-difference-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    slugEs: "calculadora-de-raiz-cuadrada",
    titleEs: "Calculadora de Raíz Cuadrada",
    shortDescriptionEs: "Encuentra la raíz cuadrada de cualquier número.",
    seoTitleEs: "Calculadora de Raíz Cuadrada — Herramienta √ en Línea Gratis",
    metaDescriptionEs:
      "Calculadora de raíz cuadrada gratuita. Encuentra al instante la raíz cuadrada de cualquier número positivo, con la fórmula y un ejemplo resuelto.",
    primaryKeywordEs: "calculadora de raíz cuadrada",
    secondaryKeywordsEs: ["calculadora de sqrt", "calculadora de raíces", "cómo hallar la raíz cuadrada"],
    formulaExplanationEs:
      "La raíz cuadrada plantea lo inverso de elevar al cuadrado: en lugar de multiplicar un número por sí mismo, busca el valor cuyo producto por sí mismo iguala tu entrada. Al llamarlo x, la definición de que x por x es igual a n significa que x es la longitud del lado que produce un área de n. Por eso la raíz de 144 es 12, ya que doce es precisamente el número que, al elevarse al cuadrado, reconstruye 144.",
    explanationEs:
      "La raíz cuadrada de un número es el valor que, multiplicado por sí mismo, reproduce ese número, así que la raíz cuadrada de 144 es 12, porque 12 por 12 es 144. Invierte la elevación al cuadrado, deshaciendo un área hasta la longitud de un lado, que es exactamente como surge la operación en geometría, física y estadística. La calculadora de raíz cuadrada encuentra este valor para cualquier número desde cero hacia arriba y lo devuelve con varios decimales para mayor precisión. Todo número positivo tiene dos raíces que lo producen al elevarse al cuadrado, una positiva y una negativa, pero la calculadora informa la raíz principal, la no negativa, porque ese es el valor que se busca en casi todos los contextos prácticos. El cero tiene una única raíz de cero, y los números negativos no tienen raíz cuadrada real, ya que ningún valor real elevado al cuadrado es negativo, razón por la cual una calculadora de raíz cuadrada restringe su entrada a cero o más. Las raíces aparecen constantemente más allá del aula: escalan distancias mediante el teorema de Pitágoras, definen la desviación estándar en estadística y fijan el tamaño de cuadrados y círculos en diseño e ingeniería.",
    exampleEs: {
      inputs: { number: 144 },
      explanation: "√144 = 12, porque 12 × 12 = 144.",
    },
    faqsEs: [
      { question: "¿Qué es una raíz cuadrada?", answer: "Una raíz cuadrada de un número es un valor que da ese número al multiplicarse por sí mismo. Como 12 por 12 es 144, doce es una raíz cuadrada de 144. La operación deshace la elevación al cuadrado, así que convierte un área de nuevo en la longitud del lado que la produjo. Esta relación inversa es por lo que las raíces aparecen donde una cantidad al cuadrado, como una distancia, una varianza o un área, debe revertirse." },
      { question: "¿Puedo sacar la raíz cuadrada de un número negativo?", answer: "No dentro de los números reales. Ningún valor real multiplicado por sí mismo da un resultado negativo, porque un positivo por un positivo y un negativo por un negativo son ambos positivos. La raíz cuadrada de un número negativo se llama por tanto imaginaria y queda fuera de la aritmética ordinaria, razón por la cual esta calculadora acepta solo entradas de cero o más y deja las entradas negativas sin una respuesta real." },
      { question: "¿Qué es una raíz cuadrada principal?", answer: "La raíz cuadrada principal es la no negativa. Todo número positivo técnicamente tiene dos raíces, una positiva y una negativa, que ambas lo producen al elevarse al cuadrado, ya que 12 y menos 12 dan 144. Para mantener los resultados sin ambigüedad, la calculadora devuelve solo el valor principal, positivo, que es la raíz prevista en casi todo cálculo práctico con longitudes, distancias y cantidades medidas." },
      { question: "¿Es una raíz cuadrada siempre un número entero?", answer: "No. Solo los cuadrados perfectos como 144 tienen raíces enteras; la mayoría de los números tienen raíces irracionales que continúan indefinidamente sin repetirse. La raíz cuadrada de 2, por ejemplo, es aproximadamente 1,414214 y nunca puede escribirse exactamente como una fracción o un decimal finito. La calculadora maneja ambos casos, devolviendo un entero exacto donde exista y un decimal redondeado en caso contrario." },
      { question: "¿Cómo calculo una raíz cuadrada a mano?", answer: "Para cuadrados perfectos, pregunta qué número multiplicado por sí mismo da tu valor: doce funciona para 144 porque 12 por 12 es 144. Para otros números, estima entre los dos cuadrados perfectos más cercanos y refina, así que un valor entre 121 y 144 tiene una raíz entre 11 y 12. Este método de tanteo es tedioso, razón por la cual una calculadora es más rápida y mucho más precisa para cuadrados no perfectos." },
    ],
  },
];
