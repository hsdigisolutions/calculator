import type { CalculatorDefinition } from "../types";

export const mathMoreCalculators: CalculatorDefinition[] = [
  {
    id: "percent-error",
    slug: "percent-error-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percent Error Calculator",
    shortDescription: "Compare a measured value to the true value.",
    seoTitle: "Percent Error Calculator — Measured vs Theoretical",
    metaDescription:
      "Free percent error calculator. Enter your experimental and theoretical values to find the percent error and absolute error, the standard measure of measurement accuracy.",
    primaryKeyword: "percent error calculator",
    secondaryKeywords: ["percentage error calculator", "experimental error", "accuracy calculator"],
    fields: [
      { id: "experimental", label: "Experimental value", type: "number", placeholder: "9.8", required: true, span: 1, step: 0.0001 },
      { id: "theoretical", label: "Theoretical value", type: "number", placeholder: "9.81", required: true, span: 1, step: 0.0001 },
    ],
    results: [
      { id: "percentError", label: "Percent error", format: "percentage", decimals: 4, isPrimary: true },
      { id: "absoluteError", label: "Absolute error", format: "number", decimals: 6, isPrimary: false },
    ],
    formula: "percent error = |experimental − theoretical| ÷ |theoretical| × 100",
    formulaExplanation:
      "Percent error divides the absolute error by the magnitude of the accepted value, then multiplies by one hundred to express it on a familiar percentage scale. Taking the absolute value of the difference ensures the result stays positive whether the measurement overshoots or undershoots. Dividing by the theoretical value rather than the measured one keeps the reference fixed, so identical gaps against different true values report different, correctly weighted percentages.",
    explanation:
      "Percent error measures how far an experimental or measured value strays from the true, accepted, or theoretical value, expressed as a percentage of that reference. It is the standard way scientists, students, and engineers report the accuracy of a measurement, because a raw gap of one gram means something very different when you expected a kilogram than when you expected two grams. This percent error calculator takes your experimental result and the theoretical value, then returns both the absolute error and the percent error so you can judge a reading at a glance. The absolute error is simply the size of the gap between the two numbers, ignoring sign, while the percent error scales that gap against the magnitude of the accepted value. A small percent error signals a precise, trustworthy measurement, whereas a large one points to flawed technique, faulty equipment, or a wrong assumption. In a physics lab measuring gravity, comparing a reading of 9.8 against the accepted 9.81 gives a percent error near 0.1 percent, which is excellent. Chemists checking reaction yields, engineers validating instruments, and teachers grading experiments all rely on this percent error calculator to quantify accuracy consistently rather than eyeballing whether a result is close enough.",
    example: {
      inputs: { experimental: 9.8, theoretical: 9.81 },
      explanation: "|9.8 − 9.81| ÷ |9.81| × 100 ≈ 0.102%, with an absolute error of 0.01.",
    },
    faqs: [
      {
        question: "What is a good percent error?",
        answer: "There is no single threshold, because acceptability depends on the field and the equipment involved. In a school physics lab, anything under about five percent is usually considered good, and under one percent is excellent. Precision engineering and analytical chemistry often demand errors well below a tenth of a percent. Always compare your result against the tolerance expected for that specific experiment rather than a universal number.",
      },
      {
        question: "Why divide by the theoretical value?",
        answer: "The theoretical or accepted value is treated as the correct reference, so measuring your error against it tells you how wrong the experiment was relative to the truth. Dividing by the experimental value instead would scale the gap against a number you already suspect is inaccurate. Using the accepted value keeps the comparison consistent, so two labs testing the same quantity report percentages that can be fairly compared side by side.",
      },
      {
        question: "Can percent error be negative?",
        answer: "By the standard definition it cannot, because the formula takes the absolute value of the difference before dividing. That keeps the result positive whether your measurement came out higher or lower than the accepted value. Some instructors do ask for a signed version to show the direction of the deviation, in which case you drop the absolute value bars, but the conventional percent error reported here is always zero or positive.",
      },
      {
        question: "What is the difference between percent error and percent difference?",
        answer: "Percent error compares a measurement against a known correct value, so one number is trusted as the reference. Percent difference compares two experimental values when neither is considered the true answer, dividing by their average instead. Use percent error when checking a result against a textbook or accepted constant, and percent difference when comparing two independent measurements of the same quantity to each other.",
      },
      {
        question: "What causes a large percent error?",
        answer: "A high percent error usually points to systematic or random problems in the experiment. Common culprits include miscalibrated instruments, misread scales, environmental factors like temperature or air resistance, and simple arithmetic mistakes. It can also reveal a flawed method or an incorrect assumption in the underlying theory. Identifying whether the error is consistent or scattered helps you decide whether to recalibrate equipment or repeat the measurement more carefully.",
      },
    ],
    relatedCalculators: ["percentage-difference-calculator", "percentage-calculator", "standard-deviation-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-error-porcentual",
    titleEs: "Calculadora de Error Porcentual",
    shortDescriptionEs: "Compara un valor medido con el valor verdadero.",
    seoTitleEs: "Calculadora de Error Porcentual — Medido vs Teórico",
    metaDescriptionEs:
      "Calculadora de error porcentual gratuita. Ingresa tus valores experimental y teórico para hallar el error porcentual y el error absoluto, la medida estándar de la precisión de una medición.",
    primaryKeywordEs: "calculadora de error porcentual",
    secondaryKeywordsEs: ["calculadora de error de porcentaje", "error experimental", "calculadora de precisión"],
    formulaExplanationEs:
      "El error porcentual divide el error absoluto entre la magnitud del valor aceptado y luego multiplica por cien para expresarlo en la conocida escala de porcentaje. Tomar el valor absoluto de la diferencia garantiza que el resultado permanezca positivo tanto si la medición se pasa como si se queda corta. Dividir entre el valor teórico en lugar del medido mantiene fija la referencia, así que separaciones idénticas frente a valores verdaderos distintos informan porcentajes diferentes y correctamente ponderados.",
    explanationEs:
      "El error porcentual mide cuánto se aleja un valor experimental o medido del valor verdadero, aceptado o teórico, expresado como porcentaje de esa referencia. Es la forma estándar en que científicos, estudiantes e ingenieros informan la precisión de una medición, porque una separación bruta de un gramo significa algo muy distinto cuando esperabas un kilogramo que cuando esperabas dos gramos. Esta calculadora de error porcentual toma tu resultado experimental y el valor teórico, y luego devuelve tanto el error absoluto como el error porcentual para que puedas juzgar una lectura de un vistazo. El error absoluto es simplemente el tamaño de la separación entre los dos números, ignorando el signo, mientras que el error porcentual escala esa separación frente a la magnitud del valor aceptado. Un error porcentual pequeño señala una medición precisa y confiable, mientras que uno grande apunta a una técnica defectuosa, un equipo averiado o una suposición equivocada. En un laboratorio de física que mide la gravedad, comparar una lectura de 9,8 con el valor aceptado 9,81 da un error porcentual cercano al 0,1 por ciento, que es excelente. Químicos que verifican rendimientos, ingenieros que validan instrumentos y profesores que califican experimentos confían en esta calculadora para cuantificar la precisión de forma coherente en lugar de estimar a ojo si un resultado es suficientemente cercano.",
    exampleEs: {
      inputs: { experimental: 9.8, theoretical: 9.81 },
      explanation: "|9,8 − 9,81| ÷ |9,81| × 100 ≈ 0,102%, con un error absoluto de 0,01.",
    },
    faqsEs: [
      { question: "¿Qué es un buen error porcentual?", answer: "No hay un único umbral, porque la aceptabilidad depende del campo y del equipo involucrado. En un laboratorio de física escolar, cualquier valor por debajo de aproximadamente el cinco por ciento suele considerarse bueno, y por debajo del uno por ciento excelente. La ingeniería de precisión y la química analítica a menudo exigen errores muy por debajo de una décima de por ciento. Compara siempre tu resultado con la tolerancia esperada para ese experimento específico en lugar de un número universal." },
      { question: "¿Por qué dividir entre el valor teórico?", answer: "El valor teórico o aceptado se trata como la referencia correcta, así que medir tu error frente a él te dice cuán equivocado estuvo el experimento respecto de la verdad. Dividir entre el valor experimental en cambio escalaría la separación frente a un número que ya sospechas que es inexacto. Usar el valor aceptado mantiene la comparación coherente, así que dos laboratorios que prueban la misma cantidad informan porcentajes que pueden compararse con justicia." },
      { question: "¿Puede el error porcentual ser negativo?", answer: "Según la definición estándar no puede, porque la fórmula toma el valor absoluto de la diferencia antes de dividir. Eso mantiene el resultado positivo tanto si tu medición salió mayor como menor que el valor aceptado. Algunos instructores sí piden una versión con signo para mostrar la dirección de la desviación, en cuyo caso se eliminan las barras de valor absoluto, pero el error porcentual convencional que se informa aquí siempre es cero o positivo." },
      { question: "¿Cuál es la diferencia entre error porcentual y diferencia porcentual?", answer: "El error porcentual compara una medición frente a un valor correcto conocido, así que un número se confía como la referencia. La diferencia porcentual compara dos valores experimentales cuando ninguno se considera la respuesta verdadera, dividiendo en cambio entre su promedio. Usa el error porcentual al verificar un resultado frente a un libro de texto o una constante aceptada, y la diferencia porcentual al comparar dos mediciones independientes de la misma cantidad entre sí." },
      { question: "¿Qué causa un error porcentual grande?", answer: "Un error porcentual alto suele apuntar a problemas sistemáticos o aleatorios en el experimento. Culpables comunes incluyen instrumentos mal calibrados, escalas mal leídas, factores ambientales como la temperatura o la resistencia del aire, y simples errores aritméticos. También puede revelar un método defectuoso o una suposición incorrecta en la teoría subyacente. Identificar si el error es constante o disperso te ayuda a decidir si recalibrar el equipo o repetir la medición con más cuidado." },
    ],
  },
  {
    id: "scientific-notation",
    slug: "scientific-notation-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Scientific Notation Calculator",
    shortDescription: "Convert any number to scientific notation.",
    seoTitle: "Scientific Notation Calculator — Standard Form Converter",
    metaDescription:
      "Free scientific notation calculator. Convert any number to scientific notation (standard form), showing its mantissa, exponent, and a × 10ⁿ expression.",
    primaryKeyword: "scientific notation calculator",
    secondaryKeywords: ["standard form calculator", "convert to scientific notation", "exponent notation"],
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "0.00042", required: true, span: 2, step: 0.0000001 },
    ],
    results: [
      { id: "notation", label: "Scientific notation", format: "text", isPrimary: true },
      { id: "mantissa", label: "Mantissa (coefficient)", format: "number", decimals: 6, isPrimary: false },
      { id: "exponent", label: "Exponent", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "number = mantissa × 10^exponent, with exponent = ⌊log₁₀|number|⌋",
    formulaExplanation:
      "Scientific notation rewrites a number as a coefficient between one and ten multiplied by a power of ten. The exponent is the floor of the base-ten logarithm of the number's absolute value, which counts how many places the decimal point must shift. Dividing the original number by ten raised to that exponent yields the mantissa, so the two parts multiply back exactly to the value you started with, only expressed compactly.",
    explanation:
      "Scientific notation, also called standard form, writes very large or very small numbers as a coefficient multiplied by a power of ten. It keeps otherwise unwieldy figures readable and makes their scale obvious at a glance, which is why it is the default in science and engineering. This scientific notation calculator converts any number you enter into the form mantissa times ten to an exponent, and it also breaks out the mantissa and exponent separately so you can use them in further work. The mantissa is a number whose magnitude sits between one and ten, and the exponent records how many places the decimal point moved to get there. A positive exponent means the original number was large, while a negative exponent means it was a small fraction. For example, 0.00042 becomes 4.2 times ten to the power of negative four, instantly revealing that the value has four leading zeros after the decimal point. Astronomers writing distances in kilometres, chemists counting molecules, and physicists handling atomic scales all lean on scientific notation to avoid long strings of zeros that are easy to miscount. This scientific notation calculator removes the manual place-counting and gives you a clean, unambiguous expression every time.",
    example: {
      inputs: { number: 0.00042 },
      explanation: "0.00042 = 4.2 × 10^-4, so the mantissa is 4.2 and the exponent is -4.",
    },
    faqs: [
      {
        question: "What is scientific notation used for?",
        answer: "Scientific notation compresses numbers that would otherwise carry long runs of zeros, making them easier to read, write, and compare. It is standard in physics, chemistry, astronomy, and engineering, where quantities range from atomic sizes to galactic distances. It also makes the order of magnitude explicit, so you can quickly see that one value is a thousand times larger than another simply by comparing their exponents rather than counting digits.",
      },
      {
        question: "What is the mantissa?",
        answer: "The mantissa, also called the coefficient or significand, is the leading part of a number in scientific notation. Its magnitude always sits between one and ten, so there is exactly one non-zero digit before the decimal point. In 4.2 times ten to the negative four, the mantissa is 4.2. The mantissa carries the significant figures of the value, while the exponent records only the scale.",
      },
      {
        question: "How does the exponent work?",
        answer: "The exponent is the power of ten that scales the mantissa back to the original number, and it equals the number of places the decimal point shifts. A positive exponent means you move the point to the right, producing a large number, while a negative exponent moves it left, producing a small fraction. So ten to the sixth means a million, and ten to the negative three means one thousandth.",
      },
      {
        question: "How do I convert a small decimal?",
        answer: "Move the decimal point to the right until exactly one non-zero digit sits in front of it, counting the moves as you go. That count becomes a negative exponent because the original value was smaller than one. For 0.00042 you shift four places to reach 4.2, so the result is 4.2 times ten to the negative four. The calculator performs this shift automatically for any input.",
      },
      {
        question: "What is scientific notation for zero?",
        answer: "Zero is a special case because it has no non-zero digits and no meaningful order of magnitude, so it cannot be written as a mantissa times a power of ten in the usual way. By convention the calculator simply reports zero as itself, with a mantissa and exponent of zero. Every other number, positive or negative, large or small, converts to a proper mantissa between one and ten.",
      },
    ],
    relatedCalculators: ["exponent-calculator", "logarithm-calculator", "scientific-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-notacion-cientifica",
    titleEs: "Calculadora de Notación Científica",
    shortDescriptionEs: "Convierte cualquier número a notación científica.",
    seoTitleEs: "Calculadora de Notación Científica — Conversor a Forma Estándar",
    metaDescriptionEs:
      "Calculadora de notación científica gratuita. Convierte cualquier número a notación científica (forma estándar), mostrando su mantisa, exponente y una expresión a × 10ⁿ.",
    primaryKeywordEs: "calculadora de notación científica",
    secondaryKeywordsEs: ["calculadora de forma estándar", "convertir a notación científica", "notación con exponentes"],
    formulaExplanationEs:
      "La notación científica reescribe un número como un coeficiente entre uno y diez multiplicado por una potencia de diez. El exponente es la parte entera del logaritmo en base diez del valor absoluto del número, que cuenta cuántos lugares debe desplazarse el punto decimal. Dividir el número original entre diez elevado a ese exponente produce la mantisa, así que las dos partes se multiplican de nuevo exactamente hasta el valor con el que empezaste, solo que expresado de forma compacta.",
    explanationEs:
      "La notación científica, también llamada forma estándar, escribe números muy grandes o muy pequeños como un coeficiente multiplicado por una potencia de diez. Mantiene legibles cifras que de otro modo serían difíciles de manejar y hace evidente su escala de un vistazo, razón por la cual es la opción predeterminada en la ciencia y la ingeniería. Esta calculadora de notación científica convierte cualquier número que ingreses a la forma mantisa por diez elevado a un exponente, y también separa la mantisa y el exponente para que puedas usarlos en trabajos posteriores. La mantisa es un número cuya magnitud está entre uno y diez, y el exponente registra cuántos lugares se movió el punto decimal para llegar ahí. Un exponente positivo significa que el número original era grande, mientras que un exponente negativo significa que era una fracción pequeña. Por ejemplo, 0,00042 se convierte en 4,2 por diez elevado a la potencia de menos cuatro, revelando al instante que el valor tiene cuatro ceros iniciales tras el punto decimal. Astrónomos que escriben distancias en kilómetros, químicos que cuentan moléculas y físicos que manejan escalas atómicas se apoyan en la notación científica para evitar largas cadenas de ceros que son fáciles de contar mal. Esta calculadora elimina el conteo manual de lugares y te da una expresión limpia y sin ambigüedad cada vez.",
    exampleEs: {
      inputs: { number: 0.00042 },
      explanation: "0,00042 = 4,2 × 10^-4, así que la mantisa es 4,2 y el exponente es -4.",
    },
    faqsEs: [
      { question: "¿Para qué se usa la notación científica?", answer: "La notación científica comprime números que de otro modo llevarían largas series de ceros, haciéndolos más fáciles de leer, escribir y comparar. Es estándar en física, química, astronomía e ingeniería, donde las cantidades van desde tamaños atómicos hasta distancias galácticas. También hace explícito el orden de magnitud, así que puedes ver rápidamente que un valor es mil veces mayor que otro simplemente comparando sus exponentes en lugar de contar dígitos." },
      { question: "¿Qué es la mantisa?", answer: "La mantisa, también llamada coeficiente o significando, es la parte principal de un número en notación científica. Su magnitud siempre está entre uno y diez, así que hay exactamente un dígito distinto de cero antes del punto decimal. En 4,2 por diez elevado a menos cuatro, la mantisa es 4,2. La mantisa lleva las cifras significativas del valor, mientras que el exponente registra solo la escala." },
      { question: "¿Cómo funciona el exponente?", answer: "El exponente es la potencia de diez que escala la mantisa de nuevo hasta el número original, y es igual al número de lugares que se desplaza el punto decimal. Un exponente positivo significa que mueves el punto a la derecha, produciendo un número grande, mientras que un exponente negativo lo mueve a la izquierda, produciendo una fracción pequeña. Así, diez a la sexta significa un millón, y diez a la menos tres significa una milésima." },
      { question: "¿Cómo convierto un decimal pequeño?", answer: "Mueve el punto decimal a la derecha hasta que exactamente un dígito distinto de cero quede delante de él, contando los movimientos a medida que avanzas. Ese conteo se convierte en un exponente negativo porque el valor original era menor que uno. Para 0,00042 desplazas cuatro lugares para llegar a 4,2, así que el resultado es 4,2 por diez elevado a menos cuatro. La calculadora realiza este desplazamiento automáticamente para cualquier entrada." },
      { question: "¿Cuál es la notación científica para cero?", answer: "El cero es un caso especial porque no tiene dígitos distintos de cero ni un orden de magnitud significativo, así que no puede escribirse como una mantisa por una potencia de diez de la forma habitual. Por convención la calculadora simplemente informa el cero como sí mismo, con una mantisa y un exponente de cero. Todo otro número, positivo o negativo, grande o pequeño, se convierte a una mantisa adecuada entre uno y diez." },
    ],
  },
  {
    id: "slope",
    slug: "slope-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Slope Calculator",
    shortDescription: "Find the slope of a line through two points.",
    seoTitle: "Slope Calculator — Find Slope & Line Equation",
    metaDescription:
      "Free slope calculator. Enter two points to find the slope of the line, its y-intercept, and the equation in slope-intercept form y = mx + b.",
    primaryKeyword: "slope calculator",
    secondaryKeywords: ["gradient calculator", "slope intercept calculator", "line equation calculator"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "x2", label: "x₂", type: "number", placeholder: "2", required: true, span: 1 },
      { id: "y2", label: "y₂", type: "number", placeholder: "4", required: true, span: 1 },
    ],
    results: [
      { id: "slope", label: "Slope (m)", format: "number", decimals: 4, isPrimary: true },
      { id: "yIntercept", label: "y-intercept (b)", format: "number", decimals: 4, isPrimary: false },
      { id: "equation", label: "Line equation", format: "text", isPrimary: false },
    ],
    formula: "m = (y₂ − y₁) ÷ (x₂ − x₁);  b = y₁ − m·x₁",
    formulaExplanation:
      "Slope is the ratio of vertical change to horizontal change, the rise over the run, so subtracting the y-coordinates gives the rise and subtracting the x-coordinates gives the run. Dividing one by the other yields a single number describing the line's steepness and direction. Substituting the slope and one point back into y equals mx plus b solves for the y-intercept, which fixes where the line crosses the vertical axis.",
    explanation:
      "The slope of a line measures how steeply it rises or falls, defined as the change in y divided by the change in x between any two points on the line. It is one of the most fundamental ideas in coordinate geometry and algebra, because it captures both the direction of a line and how fast it climbs. This slope calculator takes two points and returns the slope, the y-intercept, and the full equation of the line in slope-intercept form, y equals mx plus b. A positive slope means the line goes up from left to right, a negative slope means it goes down, a slope of zero is a flat horizontal line, and a vertical line has an undefined slope because its run is zero. For the points (0, 0) and (2, 4), the slope is 4 divided by 2, which is 2, and the line passes through the origin so its equation is y equals 2x. Students learning linear equations, analysts reading trends, and anyone working with rates of change use a slope calculator to turn two coordinates into a clear description of the line joining them without redrawing a graph.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 2, y2: 4 },
      explanation: "m = (4 − 0) ÷ (2 − 0) = 2, and b = 0, so the line is y = 2x.",
    },
    faqs: [
      {
        question: "What does the slope tell me?",
        answer: "The slope describes both the steepness and the direction of a line. Its size shows how much y changes for each one-unit increase in x, so a slope of two means y climbs two units for every step right. The sign shows direction: positive slopes rise from left to right, negative slopes fall. A slope of zero is perfectly flat, describing a horizontal line whose y-value never changes.",
      },
      {
        question: "What is the y-intercept?",
        answer: "The y-intercept is the point where the line crosses the vertical y-axis, which happens when x equals zero. In the equation y equals mx plus b, the letter b is that intercept value. The calculator finds it by taking your slope and plugging one of your points back into the equation. Knowing the intercept lets you draw the line immediately, since you have a fixed starting point and its slope.",
      },
      {
        question: "Why is a vertical line's slope undefined?",
        answer: "A vertical line has two points with the same x-coordinate, so the run, the change in x, is zero. Because slope divides the rise by the run, and dividing by zero has no defined result, the slope of a vertical line simply does not exist. The calculator returns no value in that case. Vertical lines are instead written as x equals a constant rather than in slope-intercept form.",
      },
      {
        question: "Does the order of the points matter?",
        answer: "No, as long as you stay consistent. Whether you subtract the first point from the second or the second from the first, the slope comes out the same because both the numerator and the denominator flip sign together, cancelling out. What you must not do is mix the order, subtracting y-values one way and x-values the other, since that reverses the sign and gives the wrong slope.",
      },
      {
        question: "How do I find a line's full equation?",
        answer: "Once you have the slope, substitute it and either point into y equals mx plus b and solve for b, the y-intercept. With the slope and intercept in hand, you can write the complete equation. The calculator does this automatically, reporting the finished slope-intercept form for you. From there you can plot the line, find other points on it, or check whether a given point lies on the line.",
      },
    ],
    relatedCalculators: ["distance-two-points-calculator", "midpoint-calculator", "percentage-increase-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-pendiente",
    titleEs: "Calculadora de Pendiente",
    shortDescriptionEs: "Encuentra la pendiente de una recta que pasa por dos puntos.",
    seoTitleEs: "Calculadora de Pendiente — Hallar Pendiente y Ecuación de la Recta",
    metaDescriptionEs:
      "Calculadora de pendiente gratuita. Ingresa dos puntos para hallar la pendiente de la recta, su intersección con el eje y y la ecuación en forma pendiente-intersección y = mx + b.",
    primaryKeywordEs: "calculadora de pendiente",
    secondaryKeywordsEs: ["calculadora de gradiente", "calculadora pendiente-intersección", "calculadora de ecuación de la recta"],
    formulaExplanationEs:
      "La pendiente es la razón entre el cambio vertical y el cambio horizontal, la elevación sobre el avance, así que restar las coordenadas y da la elevación y restar las coordenadas x da el avance. Dividir una entre la otra produce un único número que describe la inclinación y la dirección de la recta. Sustituir la pendiente y un punto de vuelta en y igual a mx más b despeja la intersección con el eje y, que fija dónde la recta cruza el eje vertical.",
    explanationEs:
      "La pendiente de una recta mide cuán inclinadamente sube o baja, definida como el cambio en y dividido entre el cambio en x entre dos puntos cualesquiera de la recta. Es una de las ideas más fundamentales de la geometría de coordenadas y el álgebra, porque capta tanto la dirección de una recta como cuán rápido asciende. Esta calculadora de pendiente toma dos puntos y devuelve la pendiente, la intersección con el eje y y la ecuación completa de la recta en forma pendiente-intersección, y igual a mx más b. Una pendiente positiva significa que la recta sube de izquierda a derecha, una pendiente negativa significa que baja, una pendiente de cero es una recta horizontal plana, y una recta vertical tiene pendiente indefinida porque su avance es cero. Para los puntos (0, 0) y (2, 4), la pendiente es 4 dividido entre 2, que es 2, y la recta pasa por el origen así que su ecuación es y igual a 2x. Estudiantes que aprenden ecuaciones lineales, analistas que leen tendencias y cualquiera que trabaja con tasas de cambio usan una calculadora de pendiente para convertir dos coordenadas en una descripción clara de la recta que las une sin volver a dibujar un gráfico.",
    exampleEs: {
      inputs: { x1: 0, y1: 0, x2: 2, y2: 4 },
      explanation: "m = (4 − 0) ÷ (2 − 0) = 2, y b = 0, así que la recta es y = 2x.",
    },
    faqsEs: [
      { question: "¿Qué me dice la pendiente?", answer: "La pendiente describe tanto la inclinación como la dirección de una recta. Su tamaño muestra cuánto cambia y por cada aumento de una unidad en x, así que una pendiente de dos significa que y sube dos unidades por cada paso a la derecha. El signo muestra la dirección: las pendientes positivas suben de izquierda a derecha, las negativas bajan. Una pendiente de cero es perfectamente plana, describiendo una recta horizontal cuyo valor y nunca cambia." },
      { question: "¿Qué es la intersección con el eje y?", answer: "La intersección con el eje y es el punto donde la recta cruza el eje y vertical, lo que ocurre cuando x es igual a cero. En la ecuación y igual a mx más b, la letra b es ese valor de intersección. La calculadora lo halla tomando tu pendiente e introduciendo uno de tus puntos de vuelta en la ecuación. Conocer la intersección te permite dibujar la recta de inmediato, ya que tienes un punto de partida fijo y su pendiente." },
      { question: "¿Por qué la pendiente de una recta vertical es indefinida?", answer: "Una recta vertical tiene dos puntos con la misma coordenada x, así que el avance, el cambio en x, es cero. Como la pendiente divide la elevación entre el avance, y dividir entre cero no tiene resultado definido, la pendiente de una recta vertical simplemente no existe. La calculadora no devuelve valor en ese caso. Las rectas verticales se escriben en cambio como x igual a una constante en lugar de en forma pendiente-intersección." },
      { question: "¿Importa el orden de los puntos?", answer: "No, siempre que seas coherente. Ya sea que restes el primer punto del segundo o el segundo del primero, la pendiente sale igual porque tanto el numerador como el denominador cambian de signo juntos, cancelándose. Lo que no debes hacer es mezclar el orden, restando los valores y de una forma y los valores x de la otra, ya que eso invierte el signo y da la pendiente equivocada." },
      { question: "¿Cómo hallo la ecuación completa de una recta?", answer: "Una vez que tienes la pendiente, sustitúyela junto con cualquiera de los puntos en y igual a mx más b y despeja b, la intersección con el eje y. Con la pendiente y la intersección en mano, puedes escribir la ecuación completa. La calculadora hace esto automáticamente, informando la forma pendiente-intersección terminada. Desde ahí puedes trazar la recta, hallar otros puntos en ella o comprobar si un punto dado está sobre la recta." },
    ],
  },
  {
    id: "distance-two-points",
    slug: "distance-two-points-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Distance Between Two Points Calculator",
    shortDescription: "Find the straight-line distance between two points.",
    seoTitle: "Distance Between Two Points Calculator — Distance Formula",
    metaDescription:
      "Free distance calculator. Enter two coordinate points to find the straight-line distance between them using the distance formula, plus the horizontal and vertical change.",
    primaryKeyword: "distance between two points calculator",
    secondaryKeywords: ["distance formula calculator", "coordinate distance", "euclidean distance calculator"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "x2", label: "x₂", type: "number", placeholder: "3", required: true, span: 1 },
      { id: "y2", label: "y₂", type: "number", placeholder: "4", required: true, span: 1 },
    ],
    results: [
      { id: "distance", label: "Distance", format: "number", decimals: 4, isPrimary: true },
      { id: "deltaX", label: "Horizontal change (Δx)", format: "number", decimals: 4, isPrimary: false },
      { id: "deltaY", label: "Vertical change (Δy)", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "d = √[(x₂ − x₁)² + (y₂ − y₁)²]",
    formulaExplanation:
      "The distance formula is the Pythagorean theorem applied to coordinates. The horizontal gap between the points forms one leg of a right triangle and the vertical gap forms the other, so squaring each, adding them, and taking the square root gives the length of the hypotenuse. That hypotenuse is the straight-line distance between the points, which is why squaring removes any negative signs from the direction of travel.",
    explanation:
      "The distance between two points is the length of the straight line segment joining them on a coordinate plane, and it is found with the distance formula, a direct application of the Pythagorean theorem. This distance calculator takes the coordinates of two points and returns the exact distance between them, along with the horizontal and vertical change that make up the underlying right triangle. The idea is simple: the difference in the x-coordinates gives the horizontal leg, the difference in the y-coordinates gives the vertical leg, and the distance is the hypotenuse connecting the two points. Squaring each leg, adding them, and taking the square root produces a length that is always positive, regardless of which direction the points sit relative to each other. For the points (0, 0) and (3, 4), the horizontal change is 3 and the vertical change is 4, so the distance is the square root of 9 plus 16, which is the square root of 25, or exactly 5, the classic 3-4-5 triangle. Students studying geometry, game developers measuring on-screen gaps, and surveyors mapping locations all rely on a distance calculator to turn two sets of coordinates into a precise separation quickly.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 3, y2: 4 },
      explanation: "d = √[(3 − 0)² + (4 − 0)²] = √(9 + 16) = √25 = 5.",
    },
    faqs: [
      {
        question: "What is the distance formula?",
        answer: "The distance formula finds the straight-line length between two points by taking the square root of the sum of the squared differences in their coordinates. Written out, it is the square root of the quantity x-two minus x-one squared plus y-two minus y-one squared. It comes directly from the Pythagorean theorem, treating the horizontal and vertical gaps between the points as the two legs of a right triangle whose hypotenuse is the distance.",
      },
      {
        question: "Why does squaring remove the sign?",
        answer: "Squaring any real number, positive or negative, produces a positive result, so it does not matter which point you label first. The horizontal and vertical changes might come out negative depending on direction, but once squared they contribute the same positive amount to the total. This is why distance is always positive: it measures a length, and a length has no direction. The final square root then returns that length.",
      },
      {
        question: "Does the order of the points matter?",
        answer: "No, the distance is identical whichever point you enter first. Because the formula squares the differences in the coordinates, any sign change from swapping the points disappears, leaving the same positive result. This makes sense physically, since the gap between two locations is the same whether you measure from the first to the second or the second to the first. The calculator gives the correct distance regardless of order.",
      },
      {
        question: "Can it measure distance in three dimensions?",
        answer: "This calculator works in two dimensions, using x and y coordinates on a flat plane. The same idea extends to three dimensions by adding a z-coordinate term inside the square root, so the formula becomes the square root of the squared differences in x, y, and z. For most geometry homework, mapping, and screen-based work, the two-dimensional version handled here is exactly what you need.",
      },
      {
        question: "What are Δx and Δy?",
        answer: "Delta x and delta y are the horizontal and vertical changes between the two points, the differences in their x-coordinates and y-coordinates respectively. They are the two legs of the right triangle whose hypotenuse is the distance. Seeing them separately is useful because they also give the slope of the line, delta y divided by delta x, and they show at a glance how far apart the points are along each axis.",
      },
    ],
    relatedCalculators: ["slope-calculator", "midpoint-calculator", "square-root-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-distancia-entre-dos-puntos",
    titleEs: "Calculadora de Distancia Entre Dos Puntos",
    shortDescriptionEs: "Encuentra la distancia en línea recta entre dos puntos.",
    seoTitleEs: "Calculadora de Distancia Entre Dos Puntos — Fórmula de la Distancia",
    metaDescriptionEs:
      "Calculadora de distancia gratuita. Ingresa dos puntos de coordenadas para hallar la distancia en línea recta entre ellos usando la fórmula de la distancia, más el cambio horizontal y vertical.",
    primaryKeywordEs: "calculadora de distancia entre dos puntos",
    secondaryKeywordsEs: ["calculadora de la fórmula de la distancia", "distancia entre coordenadas", "calculadora de distancia euclidiana"],
    formulaExplanationEs:
      "La fórmula de la distancia es el teorema de Pitágoras aplicado a coordenadas. La separación horizontal entre los puntos forma un cateto de un triángulo rectángulo y la separación vertical forma el otro, así que elevar cada uno al cuadrado, sumarlos y tomar la raíz cuadrada da la longitud de la hipotenusa. Esa hipotenusa es la distancia en línea recta entre los puntos, razón por la cual elevar al cuadrado elimina cualquier signo negativo de la dirección del recorrido.",
    explanationEs:
      "La distancia entre dos puntos es la longitud del segmento de recta que los une en un plano de coordenadas, y se halla con la fórmula de la distancia, una aplicación directa del teorema de Pitágoras. Esta calculadora de distancia toma las coordenadas de dos puntos y devuelve la distancia exacta entre ellos, junto con el cambio horizontal y vertical que forman el triángulo rectángulo subyacente. La idea es simple: la diferencia en las coordenadas x da el cateto horizontal, la diferencia en las coordenadas y da el cateto vertical, y la distancia es la hipotenusa que conecta los dos puntos. Elevar cada cateto al cuadrado, sumarlos y tomar la raíz cuadrada produce una longitud que siempre es positiva, sin importar en qué dirección estén los puntos uno respecto del otro. Para los puntos (0, 0) y (3, 4), el cambio horizontal es 3 y el cambio vertical es 4, así que la distancia es la raíz cuadrada de 9 más 16, que es la raíz cuadrada de 25, o exactamente 5, el clásico triángulo 3-4-5. Estudiantes que estudian geometría, desarrolladores de videojuegos que miden separaciones en pantalla y topógrafos que mapean ubicaciones confían en una calculadora de distancia para convertir rápidamente dos conjuntos de coordenadas en una separación precisa.",
    exampleEs: {
      inputs: { x1: 0, y1: 0, x2: 3, y2: 4 },
      explanation: "d = √[(3 − 0)² + (4 − 0)²] = √(9 + 16) = √25 = 5.",
    },
    faqsEs: [
      { question: "¿Qué es la fórmula de la distancia?", answer: "La fórmula de la distancia halla la longitud en línea recta entre dos puntos tomando la raíz cuadrada de la suma de las diferencias al cuadrado de sus coordenadas. Escrita, es la raíz cuadrada de la cantidad x-dos menos x-uno al cuadrado más y-dos menos y-uno al cuadrado. Proviene directamente del teorema de Pitágoras, tratando las separaciones horizontal y vertical entre los puntos como los dos catetos de un triángulo rectángulo cuya hipotenusa es la distancia." },
      { question: "¿Por qué elevar al cuadrado elimina el signo?", answer: "Elevar al cuadrado cualquier número real, positivo o negativo, produce un resultado positivo, así que no importa qué punto etiquetes primero. Los cambios horizontal y vertical podrían salir negativos según la dirección, pero una vez elevados al cuadrado contribuyen con la misma cantidad positiva al total. Por eso la distancia siempre es positiva: mide una longitud, y una longitud no tiene dirección. La raíz cuadrada final devuelve entonces esa longitud." },
      { question: "¿Importa el orden de los puntos?", answer: "No, la distancia es idéntica sea cual sea el punto que ingreses primero. Como la fórmula eleva al cuadrado las diferencias en las coordenadas, cualquier cambio de signo por intercambiar los puntos desaparece, dejando el mismo resultado positivo. Esto tiene sentido físicamente, ya que la separación entre dos ubicaciones es la misma tanto si mides del primero al segundo como del segundo al primero. La calculadora da la distancia correcta sin importar el orden." },
      { question: "¿Puede medir distancias en tres dimensiones?", answer: "Esta calculadora trabaja en dos dimensiones, usando coordenadas x e y en un plano plano. La misma idea se extiende a tres dimensiones añadiendo un término de coordenada z dentro de la raíz cuadrada, así que la fórmula se convierte en la raíz cuadrada de las diferencias al cuadrado en x, y y z. Para la mayoría de las tareas de geometría, el mapeo y el trabajo en pantalla, la versión bidimensional que se maneja aquí es exactamente lo que necesitas." },
      { question: "¿Qué son Δx y Δy?", answer: "Delta x y delta y son los cambios horizontal y vertical entre los dos puntos, las diferencias en sus coordenadas x y coordenadas y respectivamente. Son los dos catetos del triángulo rectángulo cuya hipotenusa es la distancia. Verlos por separado es útil porque también dan la pendiente de la recta, delta y dividido entre delta x, y muestran de un vistazo cuán separados están los puntos a lo largo de cada eje." },
    ],
  },
  {
    id: "midpoint",
    slug: "midpoint-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Midpoint Calculator",
    shortDescription: "Find the midpoint between two coordinate points.",
    seoTitle: "Midpoint Calculator — Midpoint of Two Points",
    metaDescription:
      "Free midpoint calculator. Enter two coordinate points to find the midpoint of the segment joining them using the midpoint formula, with x and y coordinates shown.",
    primaryKeyword: "midpoint calculator",
    secondaryKeywords: ["midpoint formula calculator", "midpoint of two points", "segment midpoint"],
    fields: [
      { id: "x1", label: "x₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "y1", label: "y₁", type: "number", placeholder: "0", required: true, span: 1 },
      { id: "x2", label: "x₂", type: "number", placeholder: "4", required: true, span: 1 },
      { id: "y2", label: "y₂", type: "number", placeholder: "6", required: true, span: 1 },
    ],
    results: [
      { id: "midpoint", label: "Midpoint", format: "text", isPrimary: true },
      { id: "midX", label: "Midpoint x", format: "number", decimals: 4, isPrimary: false },
      { id: "midY", label: "Midpoint y", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "midpoint = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2)",
    formulaExplanation:
      "The midpoint is the point exactly halfway between two others, so its coordinates are simply the averages of the endpoints' coordinates. Adding the two x-values and dividing by two lands halfway along the horizontal direction, and doing the same with the y-values lands halfway vertically. Averaging each axis independently works because the midpoint splits the segment evenly, sitting the same distance from both ends in every direction at once.",
    explanation:
      "The midpoint of a line segment is the point that sits exactly halfway between its two endpoints, splitting the segment into two equal halves. It is found with the midpoint formula, which averages the x-coordinates and averages the y-coordinates of the two ends. This midpoint calculator takes two points and returns the midpoint as a coordinate pair, along with its x and y values separately so you can use them elsewhere. The logic is intuitive: to land halfway between two positions along a single axis, you take their average, and doing that independently for the horizontal and vertical directions gives the point centred between them in the plane. For the points (0, 0) and (4, 6), the midpoint is the average of the x-values, which is 2, and the average of the y-values, which is 3, giving the point (2, 3). Midpoints matter in geometry for bisecting segments, finding the centre of a shape, or locating the middle of a path. Students, designers aligning elements, and mapmakers finding a central location all use a midpoint calculator to pinpoint the exact centre between two coordinates without arithmetic slips.",
    example: {
      inputs: { x1: 0, y1: 0, x2: 4, y2: 6 },
      explanation: "((0 + 4) ÷ 2, (0 + 6) ÷ 2) = (2, 3).",
    },
    faqs: [
      {
        question: "What is the midpoint formula?",
        answer: "The midpoint formula finds the centre point of a segment by averaging the coordinates of its two endpoints. You add the two x-values and divide by two to get the midpoint's x-coordinate, then add the two y-values and divide by two for its y-coordinate. The result is the single point that lies exactly halfway between the ends, the same distance from each along the line joining them.",
      },
      {
        question: "Why do you average the coordinates?",
        answer: "The average of two numbers is the value exactly halfway between them, which is precisely what a midpoint needs along each axis. By averaging the x-coordinates you find the horizontal centre, and by averaging the y-coordinates you find the vertical centre. Combining those two halfway positions gives a point equidistant from both endpoints in every direction, which is the definition of the midpoint of the segment.",
      },
      {
        question: "Does the order of the points matter?",
        answer: "No, the midpoint is the same regardless of which point you enter first. Addition is commutative, so adding the two x-values or the two y-values gives the same total no matter the order, and dividing by two produces the identical result. This matches intuition, because the centre of a segment does not depend on which end you start measuring from. The calculator returns the same midpoint either way.",
      },
      {
        question: "Can the midpoint have decimal coordinates?",
        answer: "Yes, and it often does. Whenever the sum of two coordinates is odd, dividing by two produces a value ending in a half, so the midpoint sits between whole-number grid lines. For example, the midpoint of points with x-values 1 and 4 has an x-coordinate of 2.5. This is perfectly normal; the midpoint is a precise geometric location and does not have to fall on integer coordinates.",
      },
      {
        question: "What is the midpoint used for?",
        answer: "Midpoints are used to bisect line segments, locate the centre of a shape, and find a point equidistant from two locations. In geometry they help construct perpendicular bisectors and identify centres of circles from endpoints of a diameter. In practical work they place a label or object halfway between two others, or find a fair meeting point between two map positions. The midpoint is a building block for many further constructions.",
      },
    ],
    relatedCalculators: ["distance-two-points-calculator", "slope-calculator", "average-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-punto-medio",
    titleEs: "Calculadora de Punto Medio",
    shortDescriptionEs: "Encuentra el punto medio entre dos puntos de coordenadas.",
    seoTitleEs: "Calculadora de Punto Medio — Punto Medio de Dos Puntos",
    metaDescriptionEs:
      "Calculadora de punto medio gratuita. Ingresa dos puntos de coordenadas para hallar el punto medio del segmento que los une usando la fórmula del punto medio, con las coordenadas x e y mostradas.",
    primaryKeywordEs: "calculadora de punto medio",
    secondaryKeywordsEs: ["calculadora de la fórmula del punto medio", "punto medio de dos puntos", "punto medio de un segmento"],
    formulaExplanationEs:
      "El punto medio es el punto exactamente a mitad de camino entre otros dos, así que sus coordenadas son simplemente los promedios de las coordenadas de los extremos. Sumar los dos valores x y dividir entre dos cae a mitad de camino en la dirección horizontal, y hacer lo mismo con los valores y cae a mitad de camino verticalmente. Promediar cada eje de forma independiente funciona porque el punto medio divide el segmento uniformemente, situándose a la misma distancia de ambos extremos en todas las direcciones a la vez.",
    explanationEs:
      "El punto medio de un segmento de recta es el punto que está exactamente a mitad de camino entre sus dos extremos, dividiendo el segmento en dos mitades iguales. Se halla con la fórmula del punto medio, que promedia las coordenadas x y promedia las coordenadas y de los dos extremos. Esta calculadora de punto medio toma dos puntos y devuelve el punto medio como un par de coordenadas, junto con sus valores x e y por separado para que puedas usarlos en otro lugar. La lógica es intuitiva: para caer a mitad de camino entre dos posiciones a lo largo de un solo eje, tomas su promedio, y hacer eso de forma independiente para las direcciones horizontal y vertical da el punto centrado entre ellas en el plano. Para los puntos (0, 0) y (4, 6), el punto medio es el promedio de los valores x, que es 2, y el promedio de los valores y, que es 3, dando el punto (2, 3). Los puntos medios importan en geometría para bisecar segmentos, hallar el centro de una figura o localizar la mitad de un trayecto. Estudiantes, diseñadores que alinean elementos y cartógrafos que hallan una ubicación central usan una calculadora de punto medio para señalar el centro exacto entre dos coordenadas sin errores aritméticos.",
    exampleEs: {
      inputs: { x1: 0, y1: 0, x2: 4, y2: 6 },
      explanation: "((0 + 4) ÷ 2, (0 + 6) ÷ 2) = (2, 3).",
    },
    faqsEs: [
      { question: "¿Qué es la fórmula del punto medio?", answer: "La fórmula del punto medio halla el punto central de un segmento promediando las coordenadas de sus dos extremos. Sumas los dos valores x y divides entre dos para obtener la coordenada x del punto medio, luego sumas los dos valores y y divides entre dos para su coordenada y. El resultado es el único punto que está exactamente a mitad de camino entre los extremos, a la misma distancia de cada uno a lo largo de la recta que los une." },
      { question: "¿Por qué se promedian las coordenadas?", answer: "El promedio de dos números es el valor exactamente a mitad de camino entre ellos, que es precisamente lo que un punto medio necesita a lo largo de cada eje. Al promediar las coordenadas x hallas el centro horizontal, y al promediar las coordenadas y hallas el centro vertical. Combinar esas dos posiciones a mitad de camino da un punto equidistante de ambos extremos en todas las direcciones, que es la definición del punto medio del segmento." },
      { question: "¿Importa el orden de los puntos?", answer: "No, el punto medio es el mismo sin importar qué punto ingreses primero. La suma es conmutativa, así que sumar los dos valores x o los dos valores y da el mismo total sin importar el orden, y dividir entre dos produce el resultado idéntico. Esto coincide con la intuición, porque el centro de un segmento no depende de qué extremo empieces a medir. La calculadora devuelve el mismo punto medio de cualquier forma." },
      { question: "¿Puede el punto medio tener coordenadas decimales?", answer: "Sí, y a menudo las tiene. Siempre que la suma de dos coordenadas sea impar, dividir entre dos produce un valor que termina en un medio, así que el punto medio se sitúa entre líneas de cuadrícula de números enteros. Por ejemplo, el punto medio de puntos con valores x de 1 y 4 tiene una coordenada x de 2,5. Esto es perfectamente normal; el punto medio es una ubicación geométrica precisa y no tiene que caer en coordenadas enteras." },
      { question: "¿Para qué se usa el punto medio?", answer: "Los puntos medios se usan para bisecar segmentos de recta, localizar el centro de una figura y hallar un punto equidistante de dos ubicaciones. En geometría ayudan a construir mediatrices e identificar centros de círculos a partir de los extremos de un diámetro. En trabajo práctico colocan una etiqueta u objeto a mitad de camino entre otros dos, o hallan un punto de encuentro justo entre dos posiciones de mapa. El punto medio es un componente básico para muchas construcciones posteriores." },
    ],
  },
  {
    id: "arithmetic-sequence",
    slug: "arithmetic-sequence-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Arithmetic Sequence Calculator",
    shortDescription: "Find the nth term and sum of a sequence.",
    seoTitle: "Arithmetic Sequence Calculator — nth Term & Sum",
    metaDescription:
      "Free arithmetic sequence calculator. Enter the first term, common difference, and term count to find the nth term and the sum of the first n terms.",
    primaryKeyword: "arithmetic sequence calculator",
    secondaryKeywords: ["nth term calculator", "arithmetic series calculator", "sequence sum calculator"],
    fields: [
      { id: "firstTerm", label: "First term (a₁)", type: "number", placeholder: "2", required: true, span: 1 },
      { id: "commonDifference", label: "Common difference (d)", type: "number", placeholder: "3", required: true, span: 1 },
      { id: "n", label: "Number of terms (n)", type: "number", placeholder: "5", required: true, span: 2, min: 1 },
    ],
    results: [
      { id: "nthTerm", label: "nth term", format: "number", decimals: 4, isPrimary: true },
      { id: "sum", label: "Sum of n terms", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "aₙ = a₁ + (n − 1)·d;  Sₙ = n/2 · [2a₁ + (n − 1)·d]",
    formulaExplanation:
      "An arithmetic sequence adds the same common difference to reach each next term, so the nth term equals the first term plus that difference repeated n minus one times. The sum formula works because pairing the first and last terms, the second and second-to-last, and so on always gives the same total, and there are n halves of such pairs. Multiplying that constant pair sum by n over two totals the whole series.",
    explanation:
      "An arithmetic sequence is a list of numbers in which each term differs from the previous one by a fixed amount called the common difference. It is one of the most common patterns in mathematics, underlying everything from simple counting to linear growth. This arithmetic sequence calculator takes the first term, the common difference, and the number of terms, then returns two key values: the nth term, meaning the value of the last term in the range, and the sum of all the terms up to that point. The nth term is found by starting at the first term and adding the common difference once for each step taken, which is n minus one additions to reach the nth position. The sum, known as an arithmetic series, has a neat closed form that avoids adding every term one by one. For a sequence starting at 2 with a common difference of 3, the fifth term is 2 plus four steps of 3, which is 14, and the sum of the first five terms is 40. Students studying sequences and series, and anyone modelling steady, evenly spaced growth, use an arithmetic sequence calculator to find distant terms and totals instantly.",
    example: {
      inputs: { firstTerm: 2, commonDifference: 3, n: 5 },
      explanation: "5th term = 2 + (5 − 1)×3 = 14; sum = 5/2 × [2×2 + 4×3] = 40.",
    },
    faqs: [
      {
        question: "What is a common difference?",
        answer: "The common difference is the fixed amount added to each term of an arithmetic sequence to get the next one. It is what makes the sequence arithmetic rather than some other pattern. If it is positive the terms increase, if negative they decrease, and if zero every term is the same. You find it by subtracting any term from the one that follows it, and that value stays constant throughout the whole sequence.",
      },
      {
        question: "How do I find the nth term?",
        answer: "Start with the first term and add the common difference once for every step you take to reach the position you want. Because reaching the nth term takes n minus one steps, the formula is the first term plus n minus one times the common difference. For a sequence beginning at 2 with a difference of 3, the fifth term is 2 plus four threes, which equals 14. The calculator does this directly.",
      },
      {
        question: "How is the sum of the series calculated?",
        answer: "The sum uses a shortcut discovered by pairing terms from the two ends inward. Each such pair adds to the same total, the first term plus the last, and there are n over two pairs, giving the formula n over two times the sum of the first and last terms. This avoids adding every term individually, so even long sequences are totalled instantly with a single calculation.",
      },
      {
        question: "What is the difference between a sequence and a series?",
        answer: "A sequence is the ordered list of terms itself, such as 2, 5, 8, 11, and so on. A series is what you get when you add those terms together to form a running total. So the arithmetic sequence lists the values, while the arithmetic series sums them. This calculator reports both: the nth term comes from the sequence, and the sum comes from the corresponding series.",
      },
      {
        question: "Can the common difference be negative?",
        answer: "Yes. A negative common difference simply means the sequence decreases, with each term smaller than the one before by a fixed amount. For instance, starting at 20 with a common difference of negative four gives 20, 16, 12, 8, and so on. The same formulas apply without change, and the nth term and sum are calculated exactly as with a positive difference. The sum can even turn negative once the terms drop below zero.",
      },
    ],
    relatedCalculators: ["average-calculator", "percentage-calculator", "exponent-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-sucesion-aritmetica",
    titleEs: "Calculadora de Sucesión Aritmética",
    shortDescriptionEs: "Encuentra el término n-ésimo y la suma de una sucesión.",
    seoTitleEs: "Calculadora de Sucesión Aritmética — Término n-ésimo y Suma",
    metaDescriptionEs:
      "Calculadora de sucesión aritmética gratuita. Ingresa el primer término, la diferencia común y el número de términos para hallar el término n-ésimo y la suma de los primeros n términos.",
    primaryKeywordEs: "calculadora de sucesión aritmética",
    secondaryKeywordsEs: ["calculadora del término n-ésimo", "calculadora de serie aritmética", "calculadora de suma de sucesiones"],
    formulaExplanationEs:
      "Una sucesión aritmética suma la misma diferencia común para llegar a cada término siguiente, así que el término n-ésimo es igual al primer término más esa diferencia repetida n menos una veces. La fórmula de la suma funciona porque emparejar el primer y el último término, el segundo y el penúltimo, y así sucesivamente, siempre da el mismo total, y hay n medios de tales pares. Multiplicar esa suma constante de pares por n entre dos totaliza toda la serie.",
    explanationEs:
      "Una sucesión aritmética es una lista de números en la que cada término difiere del anterior en una cantidad fija llamada diferencia común. Es uno de los patrones más comunes en matemáticas, subyaciendo desde el simple conteo hasta el crecimiento lineal. Esta calculadora de sucesión aritmética toma el primer término, la diferencia común y el número de términos, y luego devuelve dos valores clave: el término n-ésimo, es decir el valor del último término del rango, y la suma de todos los términos hasta ese punto. El término n-ésimo se halla empezando en el primer término y sumando la diferencia común una vez por cada paso dado, lo que son n menos una sumas para llegar a la posición n-ésima. La suma, conocida como serie aritmética, tiene una forma cerrada elegante que evita sumar cada término uno por uno. Para una sucesión que empieza en 2 con una diferencia común de 3, el quinto término es 2 más cuatro pasos de 3, que es 14, y la suma de los primeros cinco términos es 40. Estudiantes que estudian sucesiones y series, y cualquiera que modela un crecimiento constante y uniformemente espaciado, usan una calculadora de sucesión aritmética para hallar términos lejanos y totales al instante.",
    exampleEs: {
      inputs: { firstTerm: 2, commonDifference: 3, n: 5 },
      explanation: "5.º término = 2 + (5 − 1)×3 = 14; suma = 5/2 × [2×2 + 4×3] = 40.",
    },
    faqsEs: [
      { question: "¿Qué es una diferencia común?", answer: "La diferencia común es la cantidad fija que se suma a cada término de una sucesión aritmética para obtener el siguiente. Es lo que hace que la sucesión sea aritmética y no algún otro patrón. Si es positiva los términos aumentan, si es negativa disminuyen, y si es cero cada término es igual. La hallas restando cualquier término del que le sigue, y ese valor permanece constante a lo largo de toda la sucesión." },
      { question: "¿Cómo hallo el término n-ésimo?", answer: "Empieza con el primer término y suma la diferencia común una vez por cada paso que des para llegar a la posición que quieres. Como llegar al término n-ésimo toma n menos un pasos, la fórmula es el primer término más n menos uno por la diferencia común. Para una sucesión que empieza en 2 con una diferencia de 3, el quinto término es 2 más cuatro treses, que es igual a 14. La calculadora hace esto directamente." },
      { question: "¿Cómo se calcula la suma de la serie?", answer: "La suma usa un atajo descubierto al emparejar términos desde los dos extremos hacia el centro. Cada uno de esos pares suma el mismo total, el primer término más el último, y hay n entre dos pares, dando la fórmula n entre dos por la suma del primer y el último término. Esto evita sumar cada término individualmente, así que incluso sucesiones largas se totalizan al instante con un solo cálculo." },
      { question: "¿Cuál es la diferencia entre una sucesión y una serie?", answer: "Una sucesión es la lista ordenada de términos en sí misma, como 2, 5, 8, 11, y así sucesivamente. Una serie es lo que obtienes al sumar esos términos para formar un total acumulado. Así que la sucesión aritmética lista los valores, mientras que la serie aritmética los suma. Esta calculadora informa ambas: el término n-ésimo proviene de la sucesión, y la suma proviene de la serie correspondiente." },
      { question: "¿Puede la diferencia común ser negativa?", answer: "Sí. Una diferencia común negativa simplemente significa que la sucesión disminuye, con cada término menor que el anterior en una cantidad fija. Por ejemplo, empezar en 20 con una diferencia común de menos cuatro da 20, 16, 12, 8, y así sucesivamente. Las mismas fórmulas se aplican sin cambios, y el término n-ésimo y la suma se calculan exactamente igual que con una diferencia positiva. La suma incluso puede volverse negativa una vez que los términos caen por debajo de cero." },
    ],
  },
];
