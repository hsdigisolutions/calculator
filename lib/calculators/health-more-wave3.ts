import type { CalculatorDefinition, CalculatorField } from "../types";

const sexField: CalculatorField = {
  id: "sex", label: "Sex", type: "select", required: true, span: 1, defaultValue: "male",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
};

export const healthMoreCalculators: CalculatorDefinition[] = [
  {
    id: "body-surface-area",
    slug: "body-surface-area-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Body Surface Area Calculator",
    shortDescription: "Estimate body surface area from height and weight.",
    seoTitle: "Body Surface Area Calculator — DuBois BSA Formula",
    metaDescription:
      "Free body surface area calculator. Estimate your BSA in square metres from height and weight using the classic DuBois & DuBois formula.",
    primaryKeyword: "body surface area calculator",
    secondaryKeywords: ["bsa calculator", "dubois formula", "body surface area formula"],
    slugEs: "calculadora-de-superficie-corporal",
    titleEs: "Calculadora de Superficie Corporal",
    shortDescriptionEs: "Estima la superficie corporal a partir de altura y peso.",
    seoTitleEs: "Calculadora de Superficie Corporal — Fórmula BSA de DuBois",
    metaDescriptionEs:
      "Calculadora de superficie corporal gratuita. Estima tu SC en metros cuadrados a partir de la altura y el peso usando la clásica fórmula de DuBois y DuBois.",
    primaryKeywordEs: "calculadora de superficie corporal",
    secondaryKeywordsEs: ["calculadora de sc", "formula de dubois", "formula de superficie corporal"],
    formulaExplanationEs:
      "La ecuación de DuBois eleva la altura y el peso a potencias fraccionarias porque la superficie corporal no crece en proporción directa a ninguna de las dos dimensiones. El peso escala aproximadamente con el volumen, una cantidad cúbica, mientras que el área es una cantidad cuadrada, así que los exponentes de 0,725 para la altura y 0,425 para el peso reconcilian ambas. La constante inicial, 0,007184, calibra el resultado a metros cuadrados desde centímetros y kilogramos.",
    explanationEs:
      "La superficie corporal es el área total medida del exterior del cuerpo humano, expresada en metros cuadrados, y es uno de los descriptores de tamaño más útiles en la medicina clínica. En lugar de la altura o el peso por separado, muchas cantidades fisiológicas escalan más de cerca con la superficie, por eso una calculadora de superficie corporal está en el corazón de la dosificación de quimioterapia, la medición del índice cardíaco y la evaluación de quemaduras. Esta herramienta usa la ecuación de DuBois y DuBois, publicada en 1916, que los dos investigadores derivaron envolviendo a los sujetos en patrones de papel moldeado y midiendo el área frente a la altura y el peso. La fórmula multiplica una constante por la altura elevada a una potencia y el peso elevado a otra, capturando cómo crece el área con la estatura y la masa pero no en proporción simple a ninguna. Los oncólogos confían en una calculadora de superficie corporal porque muchos fármacos citotóxicos tienen un margen de seguridad estrecho y se dosifican por metro cuadrado para equilibrar la eficacia frente a la toxicidad. Los cardiólogos dividen el gasto cardíaco por la superficie para comparar corazones de diferentes tamaños de forma justa. Como la fórmula de DuBois se construyó sobre una muestra pequeña, existen varias alternativas, pero sigue siendo la predeterminada en la mayoría de las referencias clínicas. Trata el resultado como una estimación estándar de referencia y consulta siempre a tu equipo médico para cualquier decisión clínica que informe.",
    exampleEs: {
      inputs: { weight: 70, height: 175 },
      explanation: "Para 70 kg y 175 cm: 0,007184 × 175^0,725 × 70^0,425 ≈ 1,85 m².",
    },
    faqsEs: [
      { question: "¿Por qué se usa la superficie corporal para la dosificación de fármacos?", answer: "Muchos fármacos, especialmente los agentes de quimioterapia, se distribuyen y eliminan en proporción al tamaño corporal, y la superficie sigue eso mejor que el peso solo. Dosificar por metro cuadrado ayuda a mantener las concentraciones dentro de una ventana terapéutica estrecha en pacientes de constituciones muy diferentes. No es perfecto, y algunos protocolos más nuevos usan dosis fijas o basadas en peso, pero la dosificación por SC sigue siendo estándar para muchos medicamentos citotóxicos y pediátricos donde la precisión importa más." },
      { question: "¿Qué fórmula de SC es más precisa?", answer: "Ninguna fórmula es universalmente la mejor, porque cada una se derivó de una muestra limitada. DuBois y DuBois de 1916 sigue siendo la más citada y es la predeterminada clínica. Mosteller ofrece una versión más simple con raíz cuadrada que es más fácil de calcular a mano y da resultados muy similares. Haycock y Gehan-George están ajustadas para niños. Para la mayoría de los adultos las diferencias entre ellas son pequeñas, típicamente unos pocos por ciento." },
      { question: "¿Cuál es una superficie corporal normal?", answer: "Para un adulto promedio, la superficie corporal suele citarse en torno a 1,7 metros cuadrados, con la mayoría de los adultos entre aproximadamente 1,5 y 2,0. Los hombres tienden a situarse más alto que las mujeres por su mayor altura y peso promedio. Los niños tienen valores mucho más pequeños que aumentan con el crecimiento. Como la SC depende tanto de la altura como del peso, no hay una única cifra normal, solo un rango típico." },
      { question: "¿En qué se diferencia la SC del IMC?", answer: "El índice de masa corporal divide el peso por la altura al cuadrado para evaluar si el peso es proporcionado a la altura, y se usa para detectar bajo peso u obesidad. La superficie corporal en cambio estima el área física de la piel y se usa para dosificación y escalado fisiológico. El IMC es una razón sin significado físico directo, mientras que la SC es un área real en metros cuadrados. Responden preguntas completamente diferentes." },
      { question: "¿Puedo calcular la SC en libras y pulgadas?", answer: "La fórmula de DuBois en esta herramienta espera kilogramos y centímetros, así que convierte primero: divide las libras por 2,205 para kilogramos, y multiplica las pulgadas por 2,54 para centímetros. Introduce esos valores métricos para obtener un resultado en metros cuadrados. Algunas versiones de la fórmula se publican con constantes imperiales, pero convertir tus datos a métrico es la forma más simple de usar esta calculadora con precisión." },
    ],
    fields: [
      { id: "weight", label: "Weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "height", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "bsa", label: "Body surface area", format: "number", decimals: 2, unit: "m²", isPrimary: true },
    ],
    formula: "BSA = 0.007184 × height(cm)^0.725 × weight(kg)^0.425",
    explanation:
      "Body surface area is the total measured area of the outside of the human body, expressed in square metres, and it is one of the most useful size descriptors in clinical medicine. Rather than height or weight alone, many physiological quantities scale more closely with surface area, which is why a body surface area calculator sits at the heart of chemotherapy dosing, cardiac index measurement and burn assessment. This tool uses the DuBois and DuBois equation, published in 1916, which the two researchers derived by wrapping subjects in moulded paper patterns and measuring the area against height and weight. The formula multiplies a constant by height raised to one power and weight raised to another, capturing how area grows with both stature and mass but not in simple proportion to either. Oncologists rely on a body surface area calculator because many cytotoxic drugs have a narrow safety margin and are dosed per square metre to balance efficacy against toxicity. Cardiologists divide cardiac output by surface area to compare hearts of different body sizes fairly. Because the DuBois formula was built on a small sample, several alternatives exist, but it remains the default in most clinical references. Treat the result as a standard estimate for reference and dosing context, and always defer to your care team for any medical decision it informs.",
    formulaExplanation:
      "The DuBois equation raises height and weight to fractional powers because surface area does not grow in direct proportion to either dimension. Weight scales roughly with volume, a cubic quantity, while area is a squared quantity, so the exponents of 0.725 for height and 0.425 for weight reconcile the two. The leading constant, 0.007184, calibrates the result to square metres from centimetres and kilograms.",
    example: {
      inputs: { weight: 70, height: 175 },
      explanation: "For 70 kg and 175 cm: 0.007184 × 175^0.725 × 70^0.425 ≈ 1.85 m².",
    },
    faqs: [
      { question: "Why is body surface area used for drug dosing?", answer: "Many drugs, especially chemotherapy agents, distribute and clear in proportion to body size, and surface area tracks that better than weight alone. Dosing per square metre helps keep concentrations within a narrow therapeutic window across patients of very different builds. It is not perfect, and some newer protocols use flat or weight-based dosing, but per-BSA dosing remains standard for many cytotoxic and paediatric medications where precision matters most." },
      { question: "Which BSA formula is most accurate?", answer: "No single formula is universally best, because each was derived from a limited sample. DuBois and DuBois from 1916 remains the most widely cited and is the clinical default. Mosteller offers a simpler square-root version that is easier to compute by hand and gives very similar results. Haycock and Gehan-George are tuned for children. For most adults the differences between them are small, typically a few percent." },
      { question: "What is a normal body surface area?", answer: "For an average adult, body surface area is often quoted as around 1.7 square metres, with most adults falling between roughly 1.5 and 2.0. Men tend to sit higher than women because of greater average height and weight. Children have much smaller values that rise with growth. Because BSA depends on both height and weight, there is no single normal figure, only a typical range." },
      { question: "How does BSA differ from BMI?", answer: "Body mass index divides weight by height squared to gauge whether weight is proportionate to height, and it is used to screen for underweight or obesity. Body surface area instead estimates the physical area of the skin and is used for dosing and physiological scaling. BMI is a ratio with no direct physical meaning, whereas BSA is an actual area in square metres. They answer entirely different questions." },
      { question: "Can I calculate BSA in pounds and inches?", answer: "The DuBois formula in this tool expects kilograms and centimetres, so convert first: divide pounds by 2.205 for kilograms, and multiply inches by 2.54 for centimetres. Enter those metric values to get a result in square metres. Some versions of the formula are published with imperial constants, but converting your inputs to metric is the simplest way to use this calculator accurately." },
    ],
    relatedCalculators: ["bmi-calculator", "ideal-weight-calculator", "max-heart-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "DuBois & DuBois (1916)",
  },
  {
    id: "waist-to-height-ratio",
    slug: "waist-to-height-ratio-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Waist-to-Height Ratio Calculator",
    shortDescription: "Assess central fat risk from waist and height.",
    seoTitle: "Waist-to-Height Ratio Calculator — WHtR & Risk",
    metaDescription:
      "Free waist-to-height ratio calculator. Divide your waist by your height to gauge central fat and health risk against simple thresholds.",
    primaryKeyword: "waist to height ratio calculator",
    secondaryKeywords: ["whtr calculator", "waist height ratio", "central obesity calculator"],
    slugEs: "calculadora-de-indice-cintura-altura",
    titleEs: "Calculadora de Índice Cintura-Altura",
    shortDescriptionEs: "Evalúa el riesgo de grasa central según cintura y altura.",
    seoTitleEs: "Calculadora de Índice Cintura-Altura — ICA y Riesgo",
    metaDescriptionEs:
      "Calculadora de índice cintura-altura gratuita. Divide tu cintura por tu altura para evaluar la grasa central y el riesgo de salud frente a umbrales simples.",
    primaryKeywordEs: "calculadora de indice cintura altura",
    secondaryKeywordsEs: ["calculadora ica", "indice cintura altura", "calculadora de obesidad central"],
    formulaExplanationEs:
      "El índice simplemente divide la cintura por la altura, por lo que es adimensional y funciona en cualquier unidad consistente. Mejora la circunferencia de cintura sola porque una cintura dada significa algo diferente en una persona alta que en una baja; escalar por la altura normaliza el tamaño corporal. El umbral de 0,5 refleja la evidencia poblacional de que llevar una cintura más ancha que la mitad de tu altura eleva marcadamente el riesgo cardiometabólico.",
    explanationEs:
      "El índice cintura-altura divide tu circunferencia de cintura por tu altura, y ha surgido como una de las pruebas de detección más simples pero potentes para los riesgos de salud ligados a la grasa corporal central. A diferencia del índice de masa corporal, que no puede decir dónde se acumula la grasa, este índice se centra en la grasa abdominal, la grasa visceral que envuelve los órganos y está más fuertemente vinculada a la enfermedad cardíaca, la diabetes tipo 2 y el síndrome metabólico. Una calculadora de índice cintura-altura convierte dos mediciones con cinta en un solo número que puedes interpretar de un vistazo. La regla guía, popularizada por investigadores y adoptada en varias directrices nacionales, es memorablemente simple: mantén tu cintura por debajo de la mitad de tu altura. Un índice por debajo de 0,5 se considera generalmente saludable, los valores de 0,5 a 0,6 señalan un riesgo creciente, y por encima de 0,6 marca un riesgo alto, mientras que un valor inusualmente bajo puede reflejar bajo peso. Como ambas mediciones comparten la misma unidad, el índice funciona igual tanto si mides en centímetros como en pulgadas. Los clínicos e investigadores favorecen una calculadora de índice cintura-altura porque los estudios encuentran repetidamente que predice los resultados cardiometabólicos igual o mejor que el IMC, y solo necesita una cinta métrica. Mide tu cintura en el punto medio entre la costilla más baja y la parte superior del hueso de la cadera, ajustada pero sin comprimir, tras una exhalación normal, y trata el resultado como una señal de detección más que como un diagnóstico.",
    exampleEs: {
      inputs: { waist: 80, height: 175 },
      explanation: "80 ÷ 175 ≈ 0,46, que está por debajo de 0,5 y por tanto cae en la banda Saludable.",
    },
    faqsEs: [
      { question: "¿Por qué es mejor el índice cintura-altura que el IMC?", answer: "El IMC usa solo el peso y la altura, así que no puede distinguir el músculo de la grasa ni decir dónde se almacena la grasa. El índice cintura-altura refleja directamente la grasa abdominal, la grasa visceral más fuertemente ligada a la enfermedad cardíaca y la diabetes. Muchos estudios encuentran que predice estos resultados igual o mejor que el IMC, y señala el riesgo en personas cuyo IMC parece normal pero que llevan exceso de peso alrededor de la cintura." },
      { question: "¿Cuál es un índice cintura-altura saludable?", answer: "La guía ampliamente usada es mantener tu cintura por debajo de la mitad de tu altura, así que un índice por debajo de 0,5 se considera saludable para la mayoría de los adultos. Los valores de 0,5 a 0,6 indican un riesgo creciente, y por encima de 0,6 señala un riesgo alto. Un índice muy por debajo de 0,4 puede sugerir bajo peso. Estas bandas aplican ampliamente entre sexos y etnias, lo que es parte del atractivo de la medida." },
      { question: "¿Dónde exactamente debo medir mi cintura?", answer: "Mide en el punto medio entre la parte inferior de tu costilla más baja y la parte superior del hueso de tu cadera, que suele estar aproximadamente a la altura del ombligo o justo por encima. Mantén la cinta horizontal y ajustada contra la piel sin comprimirla, y toma la lectura tras exhalar normalmente. Medir sobre piel desnuda en el mismo punto cada vez da los resultados más consistentes y comparables." },
      { question: "¿El índice funciona para todos los tipos de cuerpo?", answer: "El índice cintura-altura es más consistente entre diferentes alturas, sexos y grupos étnicos que la circunferencia de cintura sola, lo que es una gran fortaleza. Tiene límites: está menos validado para mujeres embarazadas, niños en crecimiento y atletas muy musculosos con cinturas grandes por músculo en lugar de grasa. Para la población adulta general, sin embargo, es una herramienta de detección robusta y simple que no necesita ajuste por grupo." },
      { question: "¿Puedo bajar mi índice cintura-altura?", answer: "Sí. Como la parte de la altura es fija, el índice baja a medida que tu cintura se reduce, lo que ocurre cuando pierdes grasa abdominal. Un déficit calórico modesto, ejercicio aeróbico y de resistencia regular, sueño adecuado y limitar el azúcar refinado y el alcohol ayudan todos a reducir la grasa visceral con el tiempo. Incluso unos pocos centímetros menos en tu cintura mejoran significativamente el índice y, más importante, el riesgo metabólico subyacente que refleja." },
    ],
    fields: [
      { id: "waist", label: "Waist", type: "number", unit: "cm", placeholder: "80", required: true, span: 1, min: 0 },
      { id: "height", label: "Height", type: "number", unit: "cm", placeholder: "175", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "ratio", label: "Waist-to-height ratio", format: "number", decimals: 2, isPrimary: true },
      { id: "category", label: "Category", format: "text", isPrimary: false },
    ],
    formula: "Ratio = waist ÷ height (same unit); healthy when below 0.5",
    explanation:
      "The waist-to-height ratio divides your waist circumference by your height, and it has emerged as one of the simplest yet most powerful screens for the health risks tied to central body fat. Unlike body mass index, which cannot tell where fat sits, this ratio zeroes in on abdominal fat, the visceral kind that wraps around organs and is most strongly linked to heart disease, type 2 diabetes and metabolic syndrome. A waist-to-height ratio calculator turns two tape measurements into a single number you can interpret at a glance. The guiding rule, popularised by researchers and adopted in several national guidelines, is memorably simple: keep your waist to less than half your height. A ratio below 0.5 is generally considered healthy, values from 0.5 to 0.6 signal increased risk, and above 0.6 marks high risk, while an unusually low value may reflect being underweight. Because both measurements share the same unit, the ratio works identically whether you measure in centimetres or inches. Clinicians and researchers favour a waist-to-height ratio calculator because studies repeatedly find it predicts cardiometabolic outcomes as well as or better than BMI, yet it needs only a tape measure. Measure your waist at the midpoint between the lowest rib and the top of the hip bone, snug but not compressing, after a normal exhale, and treat the result as a screening prompt rather than a diagnosis.",
    formulaExplanation:
      "The ratio simply divides waist by height, so it is dimensionless and works in any consistent unit. It improves on waist circumference alone because a given waist means something different on a tall versus a short person; scaling by height normalises for body size. The 0.5 threshold reflects large-population evidence that carrying a waist wider than half your height sharply raises cardiometabolic risk.",
    example: {
      inputs: { waist: 80, height: 175 },
      explanation: "80 ÷ 175 ≈ 0.46, which is below 0.5 and therefore falls in the Healthy band.",
    },
    faqs: [
      { question: "Why is waist-to-height ratio better than BMI?", answer: "BMI uses only weight and height, so it cannot distinguish muscle from fat or tell where fat is stored. Waist-to-height ratio directly reflects abdominal fat, the visceral fat most strongly tied to heart disease and diabetes. Many studies find it predicts these outcomes as well as or better than BMI, and it flags risk in people whose BMI looks normal but who carry excess weight around the middle." },
      { question: "What is a healthy waist-to-height ratio?", answer: "The widely used guide is to keep your waist under half your height, so a ratio below 0.5 is considered healthy for most adults. Values from 0.5 to 0.6 indicate increased risk, and above 0.6 signals high risk. A ratio well below 0.4 may suggest being underweight. These bands apply broadly across sexes and ethnicities, which is part of the measure's appeal." },
      { question: "Where exactly should I measure my waist?", answer: "Measure at the midpoint between the bottom of your lowest rib and the top of your hip bone, which is usually roughly at or just above the navel. Keep the tape horizontal and snug against the skin without compressing it, and take the reading after breathing out normally. Measuring on bare skin at the same point each time gives the most consistent and comparable results." },
      { question: "Does the ratio work for all body types?", answer: "The waist-to-height ratio is more consistent across different heights, sexes and ethnic groups than waist circumference alone, which is a major strength. It does have limits: it is less validated for pregnant women, growing children and highly muscular athletes with large waists from muscle rather than fat. For the general adult population, though, it is a robust and simple screening tool that needs no adjustment by group." },
      { question: "Can I lower my waist-to-height ratio?", answer: "Yes. Because the height part is fixed, the ratio falls as your waist shrinks, which happens when you lose abdominal fat. A modest calorie deficit, regular aerobic and resistance exercise, adequate sleep and limiting refined sugar and alcohol all help reduce visceral fat over time. Even a few centimetres off your waist meaningfully improves the ratio and, more importantly, the underlying metabolic risk it reflects." },
    ],
    relatedCalculators: ["bmi-calculator", "body-fat-calculator", "body-surface-area-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
  {
    id: "sleep-debt",
    slug: "sleep-debt-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Sleep Debt Calculator",
    shortDescription: "Track accumulated sleep lost against your target.",
    seoTitle: "Sleep Debt Calculator — Track Lost Sleep",
    metaDescription:
      "Free sleep debt calculator. Compare your ideal and actual sleep over several nights to see how many hours of sleep debt you have built up.",
    primaryKeyword: "sleep debt calculator",
    secondaryKeywords: ["sleep deficit calculator", "how much sleep debt", "lost sleep calculator"],
    slugEs: "calculadora-de-deuda-de-sueno",
    titleEs: "Calculadora de Deuda de Sueño",
    shortDescriptionEs: "Rastrea el sueño acumulado perdido frente a tu objetivo.",
    seoTitleEs: "Calculadora de Deuda de Sueño — Rastrea el Sueño Perdido",
    metaDescriptionEs:
      "Calculadora de deuda de sueño gratuita. Compara tu sueño ideal y real durante varias noches para ver cuántas horas de deuda de sueño has acumulado.",
    primaryKeywordEs: "calculadora de deuda de sueno",
    secondaryKeywordsEs: ["calculadora de deficit de sueno", "cuanta deuda de sueno", "calculadora de sueno perdido"],
    formulaExplanationEs:
      "El cálculo es una acumulación directa: cada noche te quedas corto por la diferencia entre tus horas ideales y reales, y esa brecha se repite a lo largo de las noches que especifiques. Multiplicar el déficit nocturno por el número de noches suma el total de sueño perdido. El déficit nocturno por sí solo muestra el hábito diario, mientras que el producto revela con qué rapidez los déficits pequeños y repetidos se acumulan en una gran deuda.",
    explanationEs:
      "La deuda de sueño es el total acumulado de sueño que has perdido en relación con cuánto necesita realmente tu cuerpo, y se acumula silenciosamente noche tras noche hasta que los efectos se vuelven difíciles de ignorar. Una calculadora de deuda de sueño hace visible ese recuento invisible comparando tu sueño ideal por noche con lo que realmente obtienes, y luego multiplicando el déficit a lo largo de una serie de noches. Los investigadores del sueño describen esto como una deuda biológica porque el déficit no desaparece sin más; perder una hora por noche durante una semana te deja tan afectado como pasar una noche entera en vela, con descensos medibles en la atención, la memoria, el estado de ánimo, la función inmune y el control de la glucosa. La mayoría de los adultos necesitan entre siete y nueve horas, así que un objetivo ideal común es ocho, aunque la cifra correcta es personal. Esta calculadora de deuda de sueño informa tanto tu deuda acumulada como la brecha nocturna promedio que la impulsa, lo que te ayuda a ver si una semana dura fue algo puntual o parte de un patrón crónico. La gente usa una calculadora de deuda de sueño para decidir cuánto sueño de recuperación priorizar, para justificar acostarse antes o simplemente para entender por qué se siente confusa. No puedes pagar una gran deuda en una sola mañana durmiendo, pero añadir sueño de forma constante durante varias noches restaura gradualmente el rendimiento. Trata el número como una herramienta de concienciación que motiva mejores hábitos de sueño en lugar de una medida clínica precisa.",
    exampleEs: {
      inputs: { idealHours: 8, actualHours: 6.5, nights: 7 },
      explanation: "Un déficit nocturno de 1,5 horas durante 7 noches acumula 10,5 horas de deuda de sueño.",
    },
    faqsEs: [
      { question: "¿Se puede recuperar por completo de la deuda de sueño?", answer: "Las deudas pequeñas y recientes se pueden pagar en gran medida en unas pocas noches de sueño extra, y un par de noches más largas de fin de semana ayudan. La deuda crónica y prolongada es más difícil de borrar y una sola mañana durmiendo no deshará semanas de privación. La solución fiable es dormir lo suficiente de forma constante durante un periodo prolongado. La investigación sugiere que algunos efectos de la pérdida de sueño prolongada, sobre el metabolismo y el ánimo, pueden tardar más en revertirse que el cansancio." },
      { question: "¿Cuánto sueño necesito realmente?", answer: "La mayoría de los adultos necesitan de siete a nueve horas por noche, con el promedio cerca de ocho, aunque la necesidad genuina varía con la genética, la edad y la salud. Los adolescentes necesitan más, a menudo de ocho a diez horas. La mejor prueba personal es cómo te sientes: si despiertas sin alarma sintiéndote descansado y te mantienes alerta durante el día sin cafeína pesada, probablemente cubres tu necesidad. Fija tu cifra ideal en esta herramienta en consecuencia." },
      { question: "¿La deuda de sueño es lo mismo que el insomnio?", answer: "No. La deuda de sueño es simplemente la brecha acumulada entre el sueño que necesitas y el que obtienes, sea cual sea la causa, a menudo el estilo de vida o el horario. El insomnio es un trastorno clínico del sueño marcado por dificultad para conciliar o mantener el sueño a pesar de una oportunidad adecuada, y con frecuencia produce deuda de sueño como resultado. Si regularmente no puedes dormir aun teniendo tiempo y ganas, eso apunta al insomnio y merece consejo profesional." },
      { question: "¿Puedo ponerme al día con el sueño el fin de semana?", answer: "En parte. Una mañana durmiendo moderada el fin de semana puede reducir una pequeña deuda entre semana y aliviar algo de cansancio, pero no restaura del todo la atención ni los marcadores metabólicos, y cambiar tu horario demasiado puede alterar tu reloj biológico y hacer el lunes más duro. Dormir una o dos horas más es más sostenible que una mañana maratónica. Repartir la recuperación entre varias noches consistentes supera intentar pagarlo todo de una vez." },
      { question: "¿Cuáles son los signos de demasiada deuda de sueño?", answer: "Los signos comunes incluyen somnolencia diurna persistente, dificultad para concentrarse, irritabilidad, ánimo bajo, antojos más fuertes de azúcar y cafeína, reacciones más lentas y enfermarse más a menudo. Puedes quedarte dormido con facilidad al estar inactivo o depender de alarmas para despertar. A largo plazo, la deuda de sueño crónica se vincula a mayores riesgos de aumento de peso, presión arterial alta y control deteriorado de la glucosa, por lo que importa tratar la deuda persistente como un problema de salud real." },
    ],
    fields: [
      { id: "idealHours", label: "Ideal sleep per night", type: "number", unit: "hours", placeholder: "8", required: true, span: 1, min: 0 },
      { id: "actualHours", label: "Actual sleep per night", type: "number", unit: "hours", placeholder: "6.5", required: true, span: 1, min: 0, step: 0.1 },
      { id: "nights", label: "Number of nights", type: "number", unit: "nights", placeholder: "7", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "sleepDebt", label: "Total sleep debt", format: "number", decimals: 1, unit: "hours", isPrimary: true },
      { id: "weeklyAverage", label: "Nightly shortfall", format: "number", decimals: 1, unit: "hours/night", isPrimary: false },
    ],
    formula: "Sleep debt = (ideal hours − actual hours) × nights",
    explanation:
      "Sleep debt is the running total of sleep you have missed relative to how much your body actually needs, and it accumulates quietly night after night until the effects become hard to ignore. A sleep debt calculator makes that invisible tally visible by comparing your ideal nightly sleep with what you truly get, then multiplying the shortfall across a stretch of nights. Sleep researchers describe this as a biological debt because the deficit does not simply vanish; losing an hour a night for a week leaves you as impaired as pulling a full all-nighter, with measurable declines in attention, memory, mood, immune function and glucose control. Most adults need between seven and nine hours, so a common ideal target is eight, though the right figure is personal. This sleep debt calculator reports both your cumulative debt and the average nightly gap driving it, which helps you see whether a rough week was a one-off or part of a chronic pattern. People use a sleep debt calculator to decide how much recovery sleep to prioritise, to justify an earlier bedtime, or simply to understand why they feel foggy despite functioning. You cannot repay a large debt in a single lie-in, but consistently adding sleep over several nights gradually restores performance. Treat the number as an awareness tool that motivates better sleep habits rather than a precise clinical measurement of impairment.",
    formulaExplanation:
      "The calculation is a straightforward accumulation: each night you fall short by the difference between your ideal and actual hours, and that gap repeats across the nights you specify. Multiplying the nightly shortfall by the number of nights sums the total lost sleep. The nightly shortfall on its own shows the daily habit, while the product reveals how quickly small, repeated deficits compound into a large debt.",
    example: {
      inputs: { idealHours: 8, actualHours: 6.5, nights: 7 },
      explanation: "A 1.5-hour nightly shortfall over 7 nights builds 10.5 hours of sleep debt.",
    },
    faqs: [
      { question: "Can you fully recover from sleep debt?", answer: "Small, recent debts can be largely repaid within a few nights of extra sleep, and a couple of longer weekend nights help. Chronic, long-standing debt is harder to erase and a single long lie-in will not undo weeks of deprivation. The reliable fix is consistently sleeping enough over an extended period. Research suggests some effects of prolonged sleep loss, on metabolism and mood, may take longer to reverse than the tiredness itself." },
      { question: "How much sleep do I actually need?", answer: "Most adults need seven to nine hours per night, with the average sitting near eight, though genuine need varies with genetics, age and health. Teenagers need more, often eight to ten hours. The best personal test is how you feel: if you wake without an alarm feeling refreshed and stay alert through the day without heavy caffeine, you are likely meeting your need. Set your ideal figure in this tool accordingly." },
      { question: "Is sleep debt the same as insomnia?", answer: "No. Sleep debt is simply the accumulated gap between the sleep you need and the sleep you get, whatever the cause, often lifestyle or schedule. Insomnia is a clinical sleep disorder marked by difficulty falling or staying asleep despite adequate opportunity, and it frequently produces sleep debt as a result. If you regularly cannot sleep even when you have the time and want to, that points toward insomnia and merits professional advice." },
      { question: "Can I catch up on sleep at the weekend?", answer: "Partly. A modest weekend lie-in can reduce a small weekday debt and relieve some tiredness, but it does not fully restore attention and metabolic markers, and swinging your schedule too far can disrupt your body clock and make Monday harder. Sleeping in by an hour or two is more sustainable than a marathon lie-in. Spreading recovery across several consistent nights beats trying to repay everything at once." },
      { question: "What are the signs of too much sleep debt?", answer: "Common signs include persistent daytime sleepiness, difficulty concentrating, irritability, low mood, stronger cravings for sugar and caffeine, slower reactions and getting sick more often. You may nod off easily when inactive or rely on alarms to wake. Over the long term, chronic sleep debt is linked to higher risks of weight gain, high blood pressure and impaired glucose control, which is why treating persistent debt as a real health issue matters." },
    ],
    relatedCalculators: ["max-heart-rate-calculator", "water-intake-calculator", "bmr-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
  {
    id: "blood-alcohol-content",
    slug: "blood-alcohol-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Blood Alcohol Content Calculator",
    shortDescription: "Estimate your BAC from drinks, weight and time.",
    seoTitle: "Blood Alcohol Content Calculator — Estimate BAC",
    metaDescription:
      "Free blood alcohol content calculator. Estimate your BAC from standard drinks, body weight, sex and hours elapsed using the Widmark method.",
    primaryKeyword: "blood alcohol content calculator",
    secondaryKeywords: ["bac calculator", "widmark formula", "estimate blood alcohol"],
    slugEs: "calculadora-de-alcohol-en-sangre",
    titleEs: "Calculadora de Alcohol en Sangre",
    shortDescriptionEs: "Estima tu alcoholemia según bebidas, peso y tiempo.",
    seoTitleEs: "Calculadora de Alcohol en Sangre — Estima la Alcoholemia",
    metaDescriptionEs:
      "Calculadora de alcohol en sangre gratuita. Estima tu alcoholemia a partir de bebidas estándar, peso corporal, sexo y horas transcurridas usando el método de Widmark.",
    primaryKeywordEs: "calculadora de alcohol en sangre",
    secondaryKeywordsEs: ["calculadora de alcoholemia", "formula de widmark", "estimar alcohol en sangre"],
    formulaExplanationEs:
      "El método de Widmark divide los gramos de alcohol consumido por el volumen de agua del cuerpo, aproximado como la masa corporal por una razón de distribución, que es de unos 0,68 para hombres y 0,55 para mujeres, reflejando las diferencias típicas en el agua corporal. Multiplicar por 100 convierte a porcentaje. El cuerpo elimina entonces el alcohol a un ritmo casi constante de 0,015 por ciento por hora, así que esa cantidad se resta por cada hora transcurrida desde que empezó la ingesta.",
    explanationEs:
      "El alcohol en sangre es el porcentaje de alcohol en tu torrente sanguíneo, y es la medida que la policía, los médicos y la ley usan para evaluar la intoxicación. Una calculadora de alcohol en sangre estima esa cifra a partir de cuánto has bebido, tu peso corporal, tu sexo y cuánto tiempo ha pasado desde que empezaste a beber. Aplica la fórmula de Widmark, ideada por el químico sueco Erik Widmark en la década de 1930 y todavía la base de los cálculos forenses de alcohol hoy. El método se basa en el hecho de que el alcohol se distribuye a través del agua del cuerpo, así que una persona más pesada y, en promedio, un hombre diluyen la misma cantidad de alcohol en un volumen mayor y alcanzan un pico más bajo. Cada bebida estándar aporta unos 14 gramos de alcohol puro, y el cuerpo lo elimina luego a un ritmo bastante constante cercano al 0,015 por ciento por hora sin importar lo que hagas. Esta calculadora de alcohol en sangre resta esa eliminación a lo largo de las horas transcurridas para aproximar tu nivel actual. La gente la usa para entender aproximadamente cómo les afecta el alcohol y cuánto perdura, pero el resultado es solo una estimación. La alcoholemia real depende de la comida, la hidratación, los medicamentos, la velocidad de ingesta, la salud del hígado y la variación individual que ninguna fórmula captura. Sobre todo, nunca confíes en una calculadora de alcohol en sangre para decidir si es seguro o legal conducir; si has bebido, no conduzcas y organiza otra forma de volver a casa.",
    exampleEs: {
      inputs: { drinks: 3, weightKg: 70, hours: 2, sex: "male" },
      explanation: "3 bebidas dan 42 g: (42 ÷ (70.000 × 0,68)) × 100 − 0,015 × 2 ≈ 0,058% de alcoholemia.",
    },
    faqsEs: [
      { question: "¿Qué precisión tiene una calculadora de alcoholemia?", answer: "Da una estimación aproximada, no una lectura precisa. La fórmula de Widmark ignora factores que afectan fuertemente el alcohol real en sangre, incluyendo la comida en el estómago, la velocidad de ingesta, la hidratación, los medicamentos, la función hepática y el metabolismo individual. Dos personas con datos idénticos pueden dar resultados muy diferentes. Solo un alcoholímetro o un análisis de sangre miden la alcoholemia real. Trata cualquier resultado como una guía general, nunca como prueba de que estás bajo un límite legal." },
      { question: "¿Qué cuenta como una bebida estándar?", answer: "Una bebida estándar contiene unos 14 gramos de alcohol puro, que es la cantidad en aproximadamente 350 ml de cerveza normal al 5 por ciento, 150 ml de vino al 12 por ciento, o 45 ml de licor al 40 por ciento. Las definiciones varían ligeramente según el país, y muchas porciones del mundo real, especialmente vino y cócteles, son mayores que una bebida estándar, así que es fácil subestimar cuántas has consumido realmente." },
      { question: "¿Cuánto tarda el alcohol en salir de tu sistema?", answer: "El cuerpo elimina el alcohol a un ritmo bastante constante de aproximadamente una bebida estándar por hora, o alrededor del 0,015 por ciento de alcoholemia por hora, y casi nada lo acelera. El café, las duchas frías, la comida y el agua no te despejan más rápido; solo el tiempo lo hace. Así que un pico de alcoholemia de 0,08 por ciento tarda más de cinco horas en volver a cero. Por eso el alcohol puede seguir presente la mañana siguiente." },
      { question: "¿Puedo usar esto para decidir si puedo conducir?", answer: "No, en absoluto. Esta calculadora es solo para concienciación general y nunca debe usarse para juzgar si estás en condiciones o legalmente apto para conducir. La estimación puede fácilmente ser inferior a tu alcoholemia real, y los límites legales y el deterioro varían. La única regla segura tras beber es no conducir en absoluto. Planifica con antelación con un conductor designado, un taxi, transporte público o un servicio de viajes." },
      { question: "¿Por qué hombres y mujeres procesan el alcohol de forma diferente?", answer: "En promedio, las mujeres tienen una mayor proporción de grasa corporal y menos agua corporal que los hombres del mismo peso, así que el alcohol se distribuye en un volumen menor y alcanza una concentración mayor. Las mujeres también tienden a tener niveles más bajos de la enzima estomacal que comienza a descomponer el alcohol. La fórmula de Widmark refleja esto con una razón de distribución más baja para las mujeres, por lo que las mismas bebidas pueden producir una alcoholemia mayor en una mujer que en un hombre de igual peso." },
    ],
    fields: [
      { id: "drinks", label: "Standard drinks", type: "number", unit: "drinks", placeholder: "3", required: true, span: 1, min: 0, helpText: "Each ≈ 14 g of pure alcohol." },
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", placeholder: "70", required: true, span: 1, min: 0 },
      { id: "hours", label: "Hours since first drink", type: "number", unit: "hours", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      sexField,
    ],
    results: [
      { id: "bac", label: "Estimated BAC", format: "percentage", decimals: 3, isPrimary: true },
    ],
    formula: "BAC = (grams ÷ (weight_g × r)) × 100 − 0.015 × hours; r = 0.68 male, 0.55 female",
    explanation:
      "Blood alcohol content is the percentage of alcohol in your bloodstream, and it is the measure police, doctors and the law use to gauge intoxication. A blood alcohol content calculator estimates that figure from how much you have drunk, your body weight, your sex and how long has passed since you started drinking. It applies the Widmark formula, devised by Swedish chemist Erik Widmark in the 1930s and still the foundation of forensic alcohol calculations today. The method rests on the fact that alcohol spreads through the body's water, so a heavier person and, on average, a man dilute the same amount of alcohol into a larger volume and reach a lower peak. Each standard drink contributes about 14 grams of pure alcohol, and the body then clears it at a roughly steady rate near 0.015 percent per hour regardless of what you do. This blood alcohol content calculator subtracts that elimination over the hours elapsed to approximate your current level. People use it to understand roughly how alcohol affects them and how long it lingers, but the output is only an estimate. Real BAC depends on food, hydration, medications, drinking speed, liver health and individual variation that no formula captures. Crucially, never rely on a blood alcohol content calculator to decide whether it is safe or legal to drive; if you have been drinking, do not drive, and arrange another way home.",
    formulaExplanation:
      "Widmark's method divides the grams of alcohol consumed by the body's water volume, approximated as body mass times a distribution ratio, which is about 0.68 for men and 0.55 for women reflecting typical differences in body water. Multiplying by 100 converts to a percentage. The body then eliminates alcohol at a near-constant 0.015 percent per hour, so that amount is subtracted for every hour that has passed since drinking began.",
    example: {
      inputs: { drinks: 3, weightKg: 70, hours: 2, sex: "male" },
      explanation: "3 drinks give 42 g: (42 ÷ (70,000 × 0.68)) × 100 − 0.015 × 2 ≈ 0.058% BAC.",
    },
    faqs: [
      { question: "How accurate is a BAC calculator?", answer: "It gives a rough estimate, not a precise reading. The Widmark formula ignores factors that strongly affect real blood alcohol, including food in your stomach, drinking speed, hydration, medications, liver function and individual metabolism. Two people with identical inputs can test quite differently. Only a breathalyser or blood test measures actual BAC. Treat any calculator result as a general guide to how alcohol may affect you, never as proof you are under a legal limit." },
      { question: "What counts as one standard drink?", answer: "A standard drink contains about 14 grams of pure alcohol, which is the amount in roughly 350 ml of regular beer at 5 percent, 150 ml of wine at 12 percent, or 45 ml of spirits at 40 percent. Definitions vary slightly by country, and many real-world pours, especially wine and cocktails, are larger than one standard drink, so it is easy to underestimate how many you have actually consumed." },
      { question: "How long does it take for alcohol to leave your system?", answer: "The body eliminates alcohol at a fairly steady rate of about one standard drink per hour, or roughly 0.015 percent BAC per hour, and almost nothing speeds this up. Coffee, cold showers, food and water do not sober you faster; only time does. So a peak BAC of 0.08 percent takes over five hours to return to zero. This is why alcohol can still be present the morning after heavy drinking." },
      { question: "Can I use this to decide if I can drive?", answer: "No, absolutely not. This calculator is for general awareness only and must never be used to judge whether you are fit or legal to drive. The estimate can easily be lower than your true BAC, and legal limits and impairment vary. The only safe rule after drinking is not to drive at all. Plan ahead with a designated driver, a taxi, public transport or a ride service instead." },
      { question: "Why do men and women process alcohol differently?", answer: "On average, women have a higher proportion of body fat and less body water than men of the same weight, so alcohol distributes into a smaller volume and reaches a higher concentration. Women also tend to have lower levels of the stomach enzyme that begins breaking down alcohol. The Widmark formula reflects this with a lower distribution ratio for women, which is why the same drinks can produce a higher BAC in a woman than a man of equal weight." },
    ],
    relatedCalculators: ["water-intake-calculator", "body-surface-area-calculator", "max-heart-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
  {
    id: "max-heart-rate",
    slug: "max-heart-rate-calculator",
    category: "Health",
    categorySlug: "health",
    title: "Max Heart Rate Calculator",
    shortDescription: "Estimate maximum heart rate and training zones.",
    seoTitle: "Max Heart Rate Calculator — MHR & Training Zones",
    metaDescription:
      "Free max heart rate calculator. Estimate your maximum heart rate from age and see fat-burn and cardio training zones in beats per minute.",
    primaryKeyword: "max heart rate calculator",
    secondaryKeywords: ["maximum heart rate", "target heart rate zones", "mhr calculator"],
    slugEs: "calculadora-de-frecuencia-cardiaca-maxima",
    titleEs: "Calculadora de Frecuencia Cardíaca Máxima",
    shortDescriptionEs: "Estima la frecuencia cardíaca máxima y las zonas de entrenamiento.",
    seoTitleEs: "Calculadora de Frecuencia Cardíaca Máxima — FCM y Zonas de Entrenamiento",
    metaDescriptionEs:
      "Calculadora de frecuencia cardíaca máxima gratuita. Estima tu frecuencia cardíaca máxima según la edad y consulta las zonas de quema de grasa y cardio en latidos por minuto.",
    primaryKeywordEs: "calculadora de frecuencia cardiaca maxima",
    secondaryKeywordsEs: ["frecuencia cardiaca maxima", "zonas de frecuencia cardiaca", "calculadora fcm"],
    formulaExplanationEs:
      "La fórmula de 220 menos la edad funciona porque la frecuencia cardíaca máxima disminuye de forma constante con la edad a medida que cambian las células marcapasos del corazón y su capacidad de respuesta, cayendo aproximadamente un latido por año. Restar la edad de 220 aproxima esa tendencia para el adulto promedio. Las zonas de entrenamiento son entonces simples porcentajes de este máximo: multiplicar por 0,5 y 0,85 marca los límites moderado y vigoroso que definen el ejercicio aeróbico eficaz.",
    explanationEs:
      "La frecuencia cardíaca máxima es el mayor número de latidos por minuto que tu corazón puede alcanzar durante un esfuerzo máximo, y es el ancla de toda zona de entrenamiento por frecuencia cardíaca. Una calculadora de frecuencia cardíaca máxima estima ese techo a partir de tu edad usando la conocida fórmula de 220 menos la edad, una regla general que ha guiado a deportistas, entrenadores y programas de rehabilitación cardíaca durante décadas. Una vez que conoces tu máximo, puedes expresar cualquier intensidad de entrenamiento como un porcentaje de él, lo que es mucho más significativo que una cifra de pulso en bruto. Esta herramienta también marca dos anclas prácticas: el extremo inferior del rango moderado cerca del 50 por ciento, a menudo etiquetado como la zona de quema de grasa, y el 85 por ciento, el borde superior del entrenamiento cardio vigoroso. Entrenar entre estos puntos desarrolla la forma aeróbica de manera eficiente manteniendo el esfuerzo sostenible, mientras que los intervalos breves por encima de ellos empujan la capacidad anaeróbica. Los atletas de resistencia, los asistentes al gimnasio y cualquiera que use un monitor de frecuencia cardíaca confían en una calculadora de frecuencia cardíaca máxima para fijar objetivos que se ajusten a sus metas, desde trotes suaves de recuperación hasta duras sesiones de umbral. Es importante entender que 220 menos la edad es un promedio poblacional con un amplio margen de error, fácilmente de diez a quince latidos en cualquier dirección, porque el máximo verdadero varía con la genética y la forma física, no solo la edad. Para una cifra precisa, una prueba de esfuerzo máximo supervisada es el estándar de oro, y cualquiera con una afección cardíaca debe buscar orientación médica antes de entrenar cerca de su límite.",
    exampleEs: {
      inputs: { age: 30 },
      explanation: "220 − 30 = 190 lpm; la zona de quema de grasa empieza cerca de 95 lpm y el cardio llega a unos 162 lpm.",
    },
    faqsEs: [
      { question: "¿Qué precisión tiene la fórmula de 220 menos la edad?", answer: "Es un promedio útil pero lejos de preciso para cualquier individuo. Los estudios muestran que la frecuencia cardíaca máxima real puede diferir de la estimación en diez a quince latidos por minuto en cualquier dirección, porque depende de la genética y la fisiología más que de la edad sola. Fórmulas alternativas como 208 menos 0,7 por la edad se ajustan un poco mejor a grandes poblaciones. Para el entrenamiento diario la versión simple está bien, pero no tomes el número exacto como dogma." },
      { question: "¿Qué es la zona de frecuencia cardíaca de quema de grasa?", answer: "La zona de quema de grasa es aproximadamente del 50 al 70 por ciento de tu frecuencia cardíaca máxima, una intensidad moderada donde el cuerpo obtiene una mayor proporción de energía de la grasa. Es real, pero el nombre puede confundir: el ejercicio de mayor intensidad quema más calorías totales y a menudo más grasa total en general, aunque un menor porcentaje provenga de la grasa. La zona es genuinamente útil para construir una base aeróbica y para sesiones más largas y sostenibles." },
      { question: "¿Por qué debo entrenar usando zonas de frecuencia cardíaca?", answer: "Las zonas de frecuencia cardíaca te permiten adaptar el esfuerzo al propósito de forma objetiva en lugar de solo por sensación. Las zonas fáciles desarrollan resistencia y ayudan a la recuperación, las zonas moderadas mejoran la capacidad aeróbica, y las zonas duras elevan el umbral y la velocidad. Entrenar por zona ayuda a evitar la trampa común de ir demasiado fuerte en los días fáciles y demasiado suave en los días duros. También permite medir el progreso, ya que una frecuencia menor al mismo ritmo señala mejora." },
      { question: "¿Una frecuencia cardíaca en reposo más baja significa que estoy más en forma?", answer: "A menudo, sí. Una frecuencia cardíaca en reposo más baja generalmente refleja un corazón más fuerte y eficiente que bombea más sangre por latido, común en atletas de resistencia entrenados cuyas frecuencias en reposo pueden bajar de 50. Dicho esto, la frecuencia en reposo también está influida por la genética, el estrés, el sueño, la cafeína y los medicamentos, así que es solo una señal. Una frecuencia en reposo inusualmente baja con síntomas, o inusualmente alta, merece hablarlo con un médico." },
      { question: "¿Debo ver a un médico antes de entrenar a alta intensidad?", answer: "Si tienes una afección cardíaca, presión arterial alta, diabetes, tienes más de 40 años y has estado inactivo, o notas dolor en el pecho, mareos o falta de aire, debes consultar a un médico antes de acercarte a tu frecuencia cardíaca máxima. El ejercicio de alta intensidad es seguro y beneficioso para la mayoría, pero una revisión médica primero es sensata si aplican factores de riesgo. Una prueba de esfuerzo supervisada también da un máximo personal mucho más preciso que cualquier fórmula por edad." },
    ],
    fields: [
      { id: "age", label: "Age", type: "number", unit: "years", placeholder: "30", required: true, span: 2, min: 0 },
    ],
    results: [
      { id: "maxHeartRate", label: "Maximum heart rate", format: "number", decimals: 0, unit: "bpm", isPrimary: true },
      { id: "fatBurnLow", label: "Fat-burn zone (50%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
      { id: "cardioHigh", label: "Cardio zone (85%)", format: "number", decimals: 0, unit: "bpm", isPrimary: false },
    ],
    formula: "Max heart rate = 220 − age; zones at 50% and 85% of that maximum",
    explanation:
      "Maximum heart rate is the highest number of beats per minute your heart can reach during all-out effort, and it is the anchor for every heart-rate training zone. A max heart rate calculator estimates that ceiling from your age using the familiar 220-minus-age formula, a rule of thumb that has guided exercisers, coaches and cardiac rehab programmes for decades. Once you know your maximum, you can express any workout intensity as a percentage of it, which is far more meaningful than a raw pulse figure. This tool also marks out two practical anchors: the lower end of the moderate range near 50 percent, often labelled the fat-burning zone, and 85 percent, the upper edge of vigorous cardio training. Training between these points builds aerobic fitness efficiently while keeping effort sustainable, whereas brief intervals above them push anaerobic capacity. Endurance athletes, gym-goers and anyone using a heart-rate monitor rely on a max heart rate calculator to set targets that match their goals, from easy recovery jogs to hard threshold sessions. It is important to understand that 220-minus-age is a population average with a wide margin of error, easily ten to fifteen beats in either direction, because true maximum varies with genetics and fitness, not just age. For a precise figure, a supervised maximal exercise test is the gold standard, and anyone with a heart condition should seek medical guidance before training near their limit.",
    formulaExplanation:
      "The 220-minus-age formula works because maximum heart rate declines steadily with age as the heart's pacemaker cells and responsiveness change, falling by roughly one beat per year. Subtracting age from 220 approximates that trend for the average adult. Training zones are then simple percentages of this maximum: multiplying by 0.5 and 0.85 marks the moderate and vigorous boundaries that define effective aerobic exercise.",
    example: {
      inputs: { age: 30 },
      explanation: "220 − 30 = 190 bpm; the fat-burn zone starts near 95 bpm and cardio tops around 162 bpm.",
    },
    faqs: [
      { question: "How accurate is the 220-minus-age formula?", answer: "It is a useful average but far from precise for any individual. Studies show real maximum heart rate can differ from the estimate by ten to fifteen beats per minute in either direction, because it depends on genetics and physiology more than age alone. Alternative formulas such as 208 minus 0.7 times age fit large populations slightly better. For everyday training the simple version is fine, but do not treat the exact number as gospel." },
      { question: "What is the fat-burning heart rate zone?", answer: "The fat-burning zone is roughly 50 to 70 percent of your maximum heart rate, a moderate intensity where the body draws a higher proportion of energy from fat. It is real, but the name can mislead: higher-intensity exercise burns more total calories and often more total fat overall, even if a smaller percentage comes from fat. The zone is genuinely useful for building an aerobic base and for longer, sustainable sessions." },
      { question: "Why should I train using heart rate zones?", answer: "Heart-rate zones let you match effort to purpose objectively rather than by feel alone. Easy zones build endurance and aid recovery, moderate zones improve aerobic capacity, and hard zones raise threshold and speed. Training by zone helps prevent the common trap of going too hard on easy days and too easy on hard days. It also lets you gauge progress, since a lower heart rate at the same pace signals improving fitness." },
      { question: "Does a lower resting heart rate mean I am fitter?", answer: "Often, yes. A lower resting heart rate generally reflects a stronger, more efficient heart that pumps more blood per beat, which is common in trained endurance athletes whose resting rates can dip below 50. That said, resting rate is also influenced by genetics, stress, sleep, caffeine and medication, so it is only one signal. A resting rate that is unusually low with symptoms, or unusually high, is worth discussing with a doctor." },
      { question: "Should I see a doctor before training at high intensity?", answer: "If you have a heart condition, high blood pressure, diabetes, are over 40 and previously inactive, or notice chest pain, dizziness or breathlessness, you should consult a doctor before pushing near your maximum heart rate. High-intensity exercise is safe and beneficial for most people, but a medical check first is sensible if any risk factors apply. A supervised exercise test also gives a far more accurate personal maximum than any age-based formula." },
    ],
    relatedCalculators: ["running-pace-calculator", "bmr-calculator", "water-intake-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
    sensitivity: "health",
    formulaSource: "Standard health guidance",
  },
];
