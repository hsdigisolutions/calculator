import type { CalculatorDefinition } from "../types";

export const autoSportsR5Calculators: CalculatorDefinition[] = [
  {
    id: "horsepower",
    slug: "horsepower-calculator",
    category: "Automotive",
    categorySlug: "automotive",
    title: "Horsepower Calculator",
    shortDescription: "Convert torque and RPM into horsepower.",
    seoTitle: "Horsepower Calculator — HP from Torque and RPM",
    metaDescription:
      "Free horsepower calculator. Enter engine torque in lb-ft and RPM to find horsepower using the standard hp = torque × rpm ÷ 5252 formula instantly.",
    primaryKeyword: "horsepower calculator",
    secondaryKeywords: ["torque to hp calculator", "hp calculator", "engine power calculator"],
    fields: [
      { id: "torqueLbFt", label: "Torque", type: "number", unit: "lb-ft", required: true, span: 1, min: 0 },
      { id: "rpm", label: "Engine speed", type: "number", unit: "rpm", required: true, span: 1, min: 0 },
    ],
    results: [
      { id: "horsepower", label: "Horsepower", format: "number", decimals: 1, unit: "hp", isPrimary: true },
    ],
    formula: "hp = torque (lb-ft) × rpm ÷ 5252",
    formulaExplanation: "Power is the rate at which work is done, and for a rotating engine that means torque multiplied by rotational speed. When torque is measured in pound-feet and speed in revolutions per minute, the constant 5252 converts the product into mechanical horsepower. That number arises from combining the definition of one horsepower, 33,000 foot-pounds per minute, with the 2π radians in each revolution, and it explains why torque and horsepower curves always cross at 5252 rpm on a dyno chart.",
    explanation: "Horsepower is the headline figure quoted for almost every engine, yet it is not measured directly; it is calculated from torque and engine speed, and this horsepower calculator does exactly that. Enter the torque your engine produces in pound-feet and the RPM at which it produces it, and the tool returns the corresponding horsepower using the industry-standard formula.\n\nThe distinction between torque and horsepower confuses many drivers. Torque is the twisting force the crankshaft delivers, while horsepower describes how quickly that force can do work over time. Because power is force times rotational speed, the same torque produces more horsepower at higher RPM, which is why engines that rev freely often post big power numbers even with modest torque. Understanding this relationship helps you read a dyno graph, compare engines fairly, and appreciate why gearing lets a small high-revving engine feel quick.\n\nThe math is grounded in physics rather than marketing. Multiplying torque in pound-feet by RPM and dividing by 5252 gives brake horsepower at that operating point, the same calculation used to turn dyno torque readings into the power curves you see in reviews. Enthusiasts tuning an engine, students learning mechanics, and shoppers comparing specifications can all use this calculator to move confidently between torque and horsepower at any engine speed.",
    example: { inputs: { torqueLbFt: 300, rpm: 5252 }, explanation: "300 lb-ft × 5252 ÷ 5252 = 300 hp; torque and horsepower always match at 5252 rpm." },
    faqs: [
      {
        question: "Why is the number 5252 in the horsepower formula?",
        answer: "The constant 5252 comes from the definition of horsepower as 33,000 foot-pounds of work per minute combined with the 2π radians in one full revolution. Dividing 33,000 by 2π gives roughly 5252, the factor that converts torque in pound-feet at a given RPM into horsepower. It is also why every dyno chart shows the torque and horsepower curves crossing exactly at 5252 rpm.",
      },
      {
        question: "What is the difference between torque and horsepower?",
        answer: "Torque is the rotational force an engine produces, felt as the shove that gets a vehicle moving, while horsepower measures how fast that force can perform work over time. Because power equals torque multiplied by rotational speed, a high-revving engine can make substantial horsepower from modest torque. Both matter: torque governs pulling and acceleration feel, horsepower governs top-end performance and sustained output.",
      },
      {
        question: "Does this give crank or wheel horsepower?",
        answer: "The formula returns the horsepower at whatever point the torque was measured. If you enter crankshaft torque you get brake horsepower at the crank, the figure manufacturers quote. If you enter torque measured at the wheels on a chassis dyno, you get wheel horsepower, which is lower because the drivetrain absorbs some power. Be consistent about where your torque figure came from when interpreting the result.",
      },
      {
        question: "Can I calculate torque if I know horsepower?",
        answer: "Yes, the relationship rearranges easily. Torque in pound-feet equals horsepower multiplied by 5252 and divided by RPM. This is useful when a specification lists peak horsepower and the RPM it occurs at but omits torque. Remember that peak horsepower and peak torque usually happen at different engine speeds, so the torque you calculate at the power peak is not the engine's maximum torque figure.",
      },
      {
        question: "Why does horsepower keep rising as RPM climbs even when torque falls?",
        answer: "Because horsepower is torque multiplied by RPM, rising engine speed can more than offset a gradual drop in torque, so power keeps climbing past the torque peak. Eventually torque falls fast enough that horsepower peaks too, usually near the redline. This is why engines are geared to stay in their high-power band during hard acceleration, keeping RPM up where horsepower is greatest.",
      },
    ],
    relatedCalculators: ["gear-ratio-calculator", "mpg-calculator", "fuel-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard horsepower equation (torque × rpm ÷ 5252)",
    slugEs: "calculadora-de-caballos-de-fuerza",
    titleEs: "Calculadora de Caballos de Fuerza",
    shortDescriptionEs: "Convierte el par motor y las RPM en caballos de fuerza.",
    seoTitleEs: "Calculadora de Caballos de Fuerza — HP a partir de Par y RPM",
    metaDescriptionEs:
      "Calculadora de caballos de fuerza gratuita. Introduce el par del motor en lb-ft y las RPM para hallar los caballos de fuerza con la fórmula estándar hp = par × rpm ÷ 5252 al instante.",
    primaryKeywordEs: "calculadora de caballos de fuerza",
    secondaryKeywordsEs: ["calculadora de par a hp", "calculadora de hp", "calculadora de potencia del motor"],
    formulaExplanationEs: "La potencia es la rapidez con la que se realiza un trabajo, y en un motor giratorio eso significa el par multiplicado por la velocidad de rotación. Cuando el par se mide en libras-pie y la velocidad en revoluciones por minuto, la constante 5252 convierte el producto en caballos de fuerza mecánicos. Ese número surge de combinar la definición de un caballo de fuerza, 33.000 pies-libra por minuto, con los 2π radianes de cada revolución, y explica por qué las curvas de par y potencia siempre se cruzan a 5252 rpm en un dinamómetro.",
    explanationEs: "Los caballos de fuerza son la cifra estrella que se cita para casi todos los motores, pero no se miden directamente; se calculan a partir del par y la velocidad del motor, y esta calculadora de caballos de fuerza hace exactamente eso. Introduce el par que produce tu motor en libras-pie y las RPM a las que lo produce, y la herramienta devuelve la potencia correspondiente usando la fórmula estándar de la industria.\n\nLa distinción entre par y potencia confunde a muchos conductores. El par es la fuerza de giro que entrega el cigüeñal, mientras que la potencia describe con qué rapidez esa fuerza puede realizar trabajo en el tiempo. Como la potencia es fuerza por velocidad de rotación, el mismo par produce más potencia a mayores RPM, razón por la que los motores que giran libremente suelen ofrecer grandes cifras de potencia incluso con un par modesto. Entender esta relación te ayuda a leer una gráfica de dinamómetro, comparar motores de forma justa y apreciar por qué las relaciones de cambio permiten que un motor pequeño y revolucionado se sienta rápido.\n\nLas matemáticas se basan en la física y no en el marketing. Multiplicar el par en libras-pie por las RPM y dividir entre 5252 da los caballos al freno en ese punto de operación, el mismo cálculo usado para convertir las lecturas de par del dinamómetro en las curvas de potencia que ves en las reseñas. Aficionados que afinan un motor, estudiantes de mecánica y compradores que comparan especificaciones pueden usar esta calculadora para moverse con confianza entre par y potencia a cualquier régimen.",
    exampleEs: { inputs: { torqueLbFt: 300, rpm: 5252 }, explanation: "300 lb-ft × 5252 ÷ 5252 = 300 hp; el par y la potencia siempre coinciden a 5252 rpm." },
    faqsEs: [
      {
        question: "¿Por qué aparece el número 5252 en la fórmula de la potencia?",
        answer: "La constante 5252 proviene de la definición de caballo de fuerza como 33.000 pies-libra de trabajo por minuto combinada con los 2π radianes de una revolución completa. Al dividir 33.000 entre 2π se obtiene aproximadamente 5252, el factor que convierte el par en libras-pie a un régimen dado en potencia. También es la razón por la que cada dinamómetro muestra las curvas de par y potencia cruzándose exactamente a 5252 rpm.",
      },
      {
        question: "¿Cuál es la diferencia entre par y potencia?",
        answer: "El par es la fuerza de rotación que produce un motor, sentida como el empuje que pone en movimiento un vehículo, mientras que la potencia mide con qué rapidez esa fuerza puede realizar trabajo en el tiempo. Como la potencia es igual al par multiplicado por la velocidad de rotación, un motor revolucionado puede generar mucha potencia a partir de un par modesto. Ambos importan: el par gobierna el arranque y la sensación de aceleración, la potencia el rendimiento a alto régimen.",
      },
      {
        question: "¿Esto da potencia en el cigüeñal o en las ruedas?",
        answer: "La fórmula devuelve la potencia en el punto donde se midió el par. Si introduces el par del cigüeñal obtienes los caballos al freno en el cigüeñal, la cifra que citan los fabricantes. Si introduces el par medido en las ruedas en un dinamómetro de chasis, obtienes la potencia en las ruedas, que es menor porque la transmisión absorbe algo de potencia. Sé coherente sobre de dónde procede tu cifra de par al interpretar el resultado.",
      },
      {
        question: "¿Puedo calcular el par si conozco la potencia?",
        answer: "Sí, la relación se reordena fácilmente. El par en libras-pie es igual a la potencia multiplicada por 5252 y dividida entre las RPM. Esto es útil cuando una especificación indica la potencia máxima y las RPM a las que ocurre pero omite el par. Recuerda que la potencia máxima y el par máximo suelen darse a regímenes distintos, así que el par que calcules en el pico de potencia no es la cifra de par máximo del motor.",
      },
      {
        question: "¿Por qué la potencia sigue subiendo al aumentar las RPM aunque el par baje?",
        answer: "Como la potencia es el par multiplicado por las RPM, el aumento del régimen puede compensar con creces una caída gradual del par, de modo que la potencia sigue subiendo más allá del pico de par. Con el tiempo el par cae lo bastante rápido como para que la potencia también llegue a su pico, normalmente cerca del corte. Por eso los motores se engranan para mantenerse en su banda de alta potencia durante una aceleración fuerte, manteniendo las RPM altas donde la potencia es máxima.",
      },
    ],
  },
  {
    id: "engine-displacement",
    slug: "engine-displacement-calculator",
    category: "Automotive",
    categorySlug: "automotive",
    title: "Engine Displacement Calculator",
    shortDescription: "Find engine size from bore, stroke, and cylinders.",
    seoTitle: "Engine Displacement Calculator — CC and Litres from Bore & Stroke",
    metaDescription:
      "Free engine displacement calculator. Enter bore, stroke, and cylinder count to find total displacement in cubic centimetres and litres using the standard formula.",
    primaryKeyword: "engine displacement calculator",
    secondaryKeywords: ["engine size calculator", "bore stroke calculator", "cc calculator engine"],
    fields: [
      { id: "boreMm", label: "Bore", type: "number", unit: "mm", required: true, span: 1, min: 0 },
      { id: "strokeMm", label: "Stroke", type: "number", unit: "mm", required: true, span: 1, min: 0 },
      { id: "cylinders", label: "Number of cylinders", type: "number", unit: "cyl", required: true, span: 2, min: 1 },
    ],
    results: [
      { id: "displacementCc", label: "Displacement", format: "number", decimals: 1, unit: "cc", isPrimary: true },
      { id: "displacementLiters", label: "In litres", format: "number", decimals: 2, unit: "L", isPrimary: false },
    ],
    formula: "displacement = (π ÷ 4) × bore² × stroke × cylinders",
    formulaExplanation: "An engine's displacement is the total volume its pistons sweep in one cycle. Each cylinder is a circular bore, so its swept volume is the area of that circle, π divided by four times the bore squared, multiplied by the stroke length the piston travels. Converting bore and stroke from millimetres to centimetres gives the volume in cubic centimetres. Multiplying by the number of cylinders totals the whole engine, and dividing by 1,000 expresses it in litres.",
    explanation: "Engine displacement, the combined volume swept by all the pistons, is the single number most often used to describe an engine's size, and this engine displacement calculator derives it from the fundamental dimensions of bore, stroke, and cylinder count. Enter the bore and stroke in millimetres and the number of cylinders, and the tool returns displacement in both cubic centimetres and litres.\n\nDisplacement matters because it broadly shapes an engine's character. A larger swept volume generally moves more air and fuel per cycle, which tends to raise torque and power potential, and it also feeds into tax brackets, insurance classes, and racing categories in many countries. Knowing how bore and stroke combine to produce that volume helps you understand why two engines of the same displacement can feel very different: a wide bore with a short stroke revs freely, while a narrow bore with a long stroke favours low-end torque.\n\nThe calculation treats each cylinder as a simple cylinder in the geometric sense. The circular bore gives a cross-sectional area, the stroke gives the height the piston sweeps, and multiplying the two yields the volume of one cylinder. Scaling by the cylinder count totals the engine. Mechanics rebuilding a motor, enthusiasts comparing specifications, and students of engineering can all use this tool to move from raw measurements to the familiar displacement figure quickly and accurately.",
    example: { inputs: { boreMm: 86, strokeMm: 86, cylinders: 4 }, explanation: "(π ÷ 4) × 8.6² × 8.6 × 4 ≈ 1998 cc, or about 2.0 litres — a classic square four-cylinder." },
    faqs: [
      {
        question: "What are bore and stroke?",
        answer: "Bore is the diameter of each cylinder, the circular hole the piston moves within, while stroke is the distance the piston travels from the bottom to the top of that cylinder. Together they define the swept volume of one cylinder. Both are usually given in millimetres on an engine's specification sheet, and both are needed alongside the cylinder count to calculate total displacement accurately.",
      },
      {
        question: "How do I convert displacement to litres?",
        answer: "Displacement in litres is simply the cubic-centimetre figure divided by 1,000, since one litre equals 1,000 cubic centimetres. So a 1,998 cc engine is about 2.0 litres. Manufacturers usually round to one decimal place for marketing, which is why a 1,998 cc or 2,499 cc engine is sold as a 2.0 or 2.5 litre. This calculator shows both figures so you can see the exact volume.",
      },
      {
        question: "What is the difference between an oversquare and undersquare engine?",
        answer: "An oversquare engine has a bore larger than its stroke, which lets it rev higher and typically favours peak power, common in sports and racing engines. An undersquare or long-stroke engine has a stroke larger than its bore, tending to produce strong low-end torque at lower RPM, common in trucks and older designs. A square engine has bore equal to stroke, balancing the two characteristics.",
      },
      {
        question: "Does larger displacement always mean more power?",
        answer: "Not always. Displacement sets the potential air and fuel an engine can process, so all else equal a bigger engine makes more power. But forced induction, higher RPM limits, better breathing, and modern tuning let small engines match or beat larger ones. A turbocharged 2.0 litre can out-power a naturally aspirated 3.0 litre. Displacement is one important factor among several that determine an engine's output.",
      },
      {
        question: "Why is displacement used for tax and racing classes?",
        answer: "Displacement is a stable, easily verified measure of engine size that correlates broadly with power and fuel use, which makes it a convenient basis for regulation. Many countries set vehicle tax bands and insurance groups by engine litres, and motorsport organisers define classes by displacement limits to keep competition fair. Because it is fixed by the engine's geometry, it cannot be quietly changed the way a tune can, making it reliable for rule-making.",
      },
    ],
    relatedCalculators: ["gear-ratio-calculator", "mpg-calculator", "fuel-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard engine displacement geometry",
    slugEs: "calculadora-de-cilindrada-del-motor",
    titleEs: "Calculadora de Cilindrada del Motor",
    shortDescriptionEs: "Halla el tamaño del motor a partir del diámetro, la carrera y los cilindros.",
    seoTitleEs: "Calculadora de Cilindrada del Motor — CC y Litros según Diámetro y Carrera",
    metaDescriptionEs:
      "Calculadora de cilindrada del motor gratuita. Introduce el diámetro, la carrera y el número de cilindros para hallar la cilindrada total en centímetros cúbicos y litros con la fórmula estándar.",
    primaryKeywordEs: "calculadora de cilindrada del motor",
    secondaryKeywordsEs: ["calculadora de tamaño del motor", "calculadora de diámetro y carrera", "calculadora de cc del motor"],
    formulaExplanationEs: "La cilindrada de un motor es el volumen total que barren sus pistones en un ciclo. Cada cilindro tiene un diámetro circular, por lo que su volumen barrido es el área de ese círculo, π dividido entre cuatro por el diámetro al cuadrado, multiplicado por la longitud de la carrera que recorre el pistón. Convertir el diámetro y la carrera de milímetros a centímetros da el volumen en centímetros cúbicos. Al multiplicar por el número de cilindros se totaliza todo el motor, y al dividir entre 1.000 se expresa en litros.",
    explanationEs: "La cilindrada del motor, el volumen combinado que barren todos los pistones, es la cifra que más se usa para describir el tamaño de un motor, y esta calculadora de cilindrada del motor la deriva de las dimensiones fundamentales de diámetro, carrera y número de cilindros. Introduce el diámetro y la carrera en milímetros y el número de cilindros, y la herramienta devuelve la cilindrada tanto en centímetros cúbicos como en litros.\n\nLa cilindrada importa porque define en gran medida el carácter de un motor. Un mayor volumen barrido generalmente mueve más aire y combustible por ciclo, lo que tiende a elevar el par y el potencial de potencia, y también influye en los tramos fiscales, las categorías de seguro y las clases de competición en muchos países. Saber cómo se combinan el diámetro y la carrera para producir ese volumen ayuda a entender por qué dos motores de la misma cilindrada pueden sentirse muy distintos: un diámetro amplio con carrera corta gira libremente, mientras que un diámetro estrecho con carrera larga favorece el par a bajas vueltas.\n\nEl cálculo trata cada cilindro como un cilindro en el sentido geométrico. El diámetro circular da un área de sección, la carrera da la altura que barre el pistón, y multiplicar ambos da el volumen de un cilindro. Escalar por el número de cilindros totaliza el motor. Mecánicos que reconstruyen un motor, aficionados que comparan especificaciones y estudiantes de ingeniería pueden usar esta herramienta para pasar de las medidas brutas a la cifra familiar de cilindrada de forma rápida y precisa.",
    exampleEs: { inputs: { boreMm: 86, strokeMm: 86, cylinders: 4 }, explanation: "(π ÷ 4) × 8,6² × 8,6 × 4 ≈ 1998 cc, o cerca de 2,0 litros — un clásico motor cuadrado de cuatro cilindros." },
    faqsEs: [
      {
        question: "¿Qué son el diámetro y la carrera?",
        answer: "El diámetro es el ancho de cada cilindro, el orificio circular en el que se mueve el pistón, mientras que la carrera es la distancia que recorre el pistón desde la parte inferior hasta la superior de ese cilindro. Juntos definen el volumen barrido de un cilindro. Ambos suelen indicarse en milímetros en la ficha técnica de un motor, y ambos son necesarios junto con el número de cilindros para calcular la cilindrada total con precisión.",
      },
      {
        question: "¿Cómo convierto la cilindrada a litros?",
        answer: "La cilindrada en litros es simplemente la cifra en centímetros cúbicos dividida entre 1.000, ya que un litro equivale a 1.000 centímetros cúbicos. Así, un motor de 1.998 cc es de unos 2,0 litros. Los fabricantes suelen redondear a un decimal por marketing, por lo que un motor de 1.998 cc o 2.499 cc se vende como de 2,0 o 2,5 litros. Esta calculadora muestra ambas cifras para que veas el volumen exacto.",
      },
      {
        question: "¿Cuál es la diferencia entre un motor supercuadrado y uno subcuadrado?",
        answer: "Un motor supercuadrado tiene un diámetro mayor que su carrera, lo que le permite girar más alto y suele favorecer la potencia máxima, común en motores deportivos y de competición. Un motor subcuadrado o de carrera larga tiene una carrera mayor que su diámetro, tendiendo a producir un fuerte par a bajas vueltas, común en camiones y diseños antiguos. Un motor cuadrado tiene el diámetro igual a la carrera, equilibrando ambas características.",
      },
      {
        question: "¿Mayor cilindrada significa siempre más potencia?",
        answer: "No siempre. La cilindrada fija el aire y el combustible potenciales que un motor puede procesar, así que en igualdad de condiciones un motor más grande da más potencia. Pero la sobrealimentación, límites de RPM más altos, mejor respiración y el afinado moderno permiten que motores pequeños igualen o superen a los grandes. Un 2,0 litros turboalimentado puede superar a un 3,0 litros atmosférico. La cilindrada es un factor importante entre varios que determinan la salida de un motor.",
      },
      {
        question: "¿Por qué se usa la cilindrada para impuestos y clases de competición?",
        answer: "La cilindrada es una medida estable y fácil de verificar del tamaño del motor que se correlaciona en general con la potencia y el consumo, lo que la hace una base conveniente para la regulación. Muchos países fijan los tramos de impuestos y grupos de seguro por litros de motor, y los organizadores de competiciones definen clases por límites de cilindrada para mantener una competencia justa. Como está fijada por la geometría del motor, no puede cambiarse discretamente como un afinado.",
      },
    ],
  },
  {
    id: "tire-pressure-temp",
    slug: "tire-pressure-calculator",
    category: "Automotive",
    categorySlug: "automotive",
    title: "Tire Pressure Temperature Calculator",
    shortDescription: "See how temperature shifts your tire pressure.",
    seoTitle: "Tire Pressure Calculator — Temperature Change Effect on PSI",
    metaDescription:
      "Free tire pressure calculator. Enter your current PSI and a temperature change to estimate the new pressure, using the rule of about 1 psi per 10°F.",
    primaryKeyword: "tire pressure calculator",
    secondaryKeywords: ["tire pressure temperature calculator", "psi temperature calculator", "cold tire pressure calculator"],
    fields: [
      { id: "currentPsi", label: "Current pressure", type: "number", unit: "psi", required: true, span: 1, min: 0 },
      { id: "tempChangeF", label: "Temperature change", type: "number", unit: "°F", required: true, span: 1, helpText: "Positive if warmer, negative if colder than when you set the pressure." },
    ],
    results: [
      { id: "adjustedPsi", label: "Adjusted pressure", format: "number", decimals: 1, unit: "psi", isPrimary: true },
      { id: "pressureChange", label: "Pressure change", format: "number", decimals: 1, unit: "psi", isPrimary: false },
    ],
    formula: "adjusted psi = current psi + (temperature change ÷ 10)",
    formulaExplanation: "Air inside a tyre behaves as a gas, so its pressure rises and falls with temperature at roughly constant volume. A widely used rule of thumb is that tyre pressure changes by about one pound per square inch for every ten degrees Fahrenheit of temperature change. Dividing the temperature change by ten estimates the pressure shift, which is added to your current pressure when it warms and subtracted when it cools, giving the expected new reading.",
    explanation: "Tyre pressure is not a fixed number; it drifts with the weather because the air inside expands when warm and contracts when cold, and this tire pressure temperature calculator estimates how much. Enter your current pressure and the temperature change since you set it, positive for warmer and negative for colder, and the tool returns the adjusted pressure and the size of the shift.\n\nThis matters more than most drivers realise. A cold snap can drop your tyres several psi below the recommended figure, triggering the dashboard warning light, increasing rolling resistance and fuel use, and hurting grip and tyre life. A hot day or a long, fast drive does the opposite, raising pressure above the target. Because the effect is predictable, you can anticipate it: set pressures with the season in mind, and understand why the light appears on the first frosty morning.\n\nThe estimate rests on the well-known guideline of about one psi for every ten degrees Fahrenheit. It comes from the gas law that ties pressure to temperature in a sealed, roughly fixed volume. The rule is an approximation, not a laboratory-grade figure, but it is close enough to plan by and to sanity-check a warning light. Always set and check pressures when the tyres are cold, using your vehicle's recommended value, and treat this calculator as a guide to how the reading will move as conditions change.",
    example: { inputs: { currentPsi: 32, tempChangeF: -30 }, explanation: "A 30°F drop lowers pressure by about 3 psi, so 32 psi falls to roughly 29 psi." },
    faqs: [
      {
        question: "Why does tire pressure change with temperature?",
        answer: "The air sealed inside a tyre follows the gas laws: at a roughly constant volume, its pressure rises as it warms and falls as it cools. When temperatures drop overnight or with the season, the air contracts and pressure reads lower; when the day heats up or the tyre warms from driving, pressure climbs. This is normal physics, not a leak, and it is why pressures should be checked when tyres are cold.",
      },
      {
        question: "How much does pressure change per degree?",
        answer: "A common rule of thumb is about one pound per square inch for every ten degrees Fahrenheit of temperature change, or roughly one psi per five to six degrees Celsius. So a twenty-degree Fahrenheit swing shifts pressure by about two psi. This is an approximation that works well for typical car tyres near normal inflation, and it is accurate enough to anticipate warning lights and seasonal adjustments.",
      },
      {
        question: "Should I set pressure cold or warm?",
        answer: "Always set and check tyre pressure when the tyres are cold, meaning before driving or after the car has sat for a few hours, because driving heats the tyres and temporarily raises the reading. The pressure printed on your door jamb refers to cold pressure. If you must check warm tyres, expect them to read a few psi higher than the cold target, and do not bleed air to compensate.",
      },
      {
        question: "Why does my low-pressure warning appear on cold mornings?",
        answer: "As temperatures fall overnight, the air in your tyres contracts and pressure can drop several psi, enough to trip the tyre-pressure monitoring system. This is why the warning light so often appears on the first cold morning of autumn. Usually the tyres are not damaged; they simply need topping up to the recommended cold pressure. If the light persists after inflating, have the tyres checked for a slow leak.",
      },
      {
        question: "Is the one-psi-per-ten-degrees rule exact?",
        answer: "No, it is a practical approximation rather than a precise law. The exact change depends on the starting pressure, the tyre's volume, and altitude, and it follows from the ideal gas relationship between pressure and absolute temperature. For everyday car tyres at normal inflation the rule is close enough to plan seasonal adjustments and to make sense of a warning light. For critical applications, measure directly with an accurate gauge.",
      },
    ],
    relatedCalculators: ["fuel-cost-calculator", "mpg-calculator", "gear-ratio-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Ideal gas law rule of thumb (~1 psi per 10°F)",
    slugEs: "calculadora-de-presion-de-neumaticos",
    titleEs: "Calculadora de Presión de Neumáticos por Temperatura",
    shortDescriptionEs: "Observa cómo la temperatura desplaza la presión de tus neumáticos.",
    seoTitleEs: "Calculadora de Presión de Neumáticos — Efecto del Cambio de Temperatura en el PSI",
    metaDescriptionEs:
      "Calculadora de presión de neumáticos gratuita. Introduce tu PSI actual y un cambio de temperatura para estimar la nueva presión, con la regla de aproximadamente 1 psi por cada 10 °F.",
    primaryKeywordEs: "calculadora de presión de neumáticos",
    secondaryKeywordsEs: ["calculadora de presión de neumáticos por temperatura", "calculadora de psi por temperatura", "calculadora de presión de neumáticos en frío"],
    formulaExplanationEs: "El aire dentro de un neumático se comporta como un gas, por lo que su presión sube y baja con la temperatura a volumen aproximadamente constante. Una regla práctica muy usada es que la presión del neumático cambia cerca de una libra por pulgada cuadrada por cada diez grados Fahrenheit de cambio de temperatura. Dividir el cambio de temperatura entre diez estima el desplazamiento de presión, que se suma a tu presión actual cuando calienta y se resta cuando enfría, dando la nueva lectura esperada.",
    explanationEs: "La presión de los neumáticos no es un número fijo; varía con el clima porque el aire de su interior se expande con el calor y se contrae con el frío, y esta calculadora de presión de neumáticos por temperatura estima cuánto. Introduce tu presión actual y el cambio de temperatura desde que la ajustaste, positivo si hace más calor y negativo si hace más frío, y la herramienta devuelve la presión ajustada y el tamaño del cambio.\n\nEsto importa más de lo que la mayoría de conductores cree. Una ola de frío puede bajar tus neumáticos varios psi por debajo de la cifra recomendada, activando la luz de advertencia del tablero, aumentando la resistencia a la rodadura y el consumo, y perjudicando el agarre y la vida del neumático. Un día caluroso o un viaje largo y rápido hacen lo contrario, elevando la presión por encima del objetivo. Como el efecto es predecible, puedes anticiparlo: ajusta las presiones pensando en la estación y entiende por qué la luz aparece la primera mañana helada.\n\nLa estimación se basa en la conocida pauta de aproximadamente un psi por cada diez grados Fahrenheit. Proviene de la ley de los gases que relaciona la presión con la temperatura en un volumen sellado y prácticamente fijo. La regla es una aproximación, no una cifra de laboratorio, pero es lo bastante cercana para planificar y para verificar una luz de advertencia. Ajusta y comprueba siempre las presiones con los neumáticos fríos, usando el valor recomendado de tu vehículo, y trata esta calculadora como una guía de cómo se moverá la lectura.",
    exampleEs: { inputs: { currentPsi: 32, tempChangeF: -30 }, explanation: "Una caída de 30 °F reduce la presión unos 3 psi, así que 32 psi baja a aproximadamente 29 psi." },
    faqsEs: [
      {
        question: "¿Por qué cambia la presión de los neumáticos con la temperatura?",
        answer: "El aire sellado dentro de un neumático sigue las leyes de los gases: a volumen aproximadamente constante, su presión sube al calentarse y baja al enfriarse. Cuando las temperaturas caen de noche o con la estación, el aire se contrae y la presión marca más baja; cuando el día calienta o el neumático se calienta al conducir, la presión sube. Esto es física normal, no una fuga, y por eso las presiones deben comprobarse con los neumáticos fríos.",
      },
      {
        question: "¿Cuánto cambia la presión por grado?",
        answer: "Una regla práctica común es cerca de una libra por pulgada cuadrada por cada diez grados Fahrenheit de cambio de temperatura, o aproximadamente un psi por cada cinco o seis grados Celsius. Así, una variación de veinte grados Fahrenheit desplaza la presión unos dos psi. Es una aproximación que funciona bien para neumáticos de coche típicos cerca de la inflación normal, y es lo bastante precisa para anticipar luces de advertencia y ajustes estacionales.",
      },
      {
        question: "¿Debo ajustar la presión en frío o en caliente?",
        answer: "Ajusta y comprueba siempre la presión de los neumáticos cuando estén fríos, es decir, antes de conducir o tras varias horas de reposo, porque conducir calienta los neumáticos y eleva temporalmente la lectura. La presión impresa en la jamba de la puerta se refiere a la presión en frío. Si debes comprobar neumáticos calientes, espera que marquen unos psi más que el objetivo en frío, y no purgues aire para compensar.",
      },
      {
        question: "¿Por qué aparece mi advertencia de baja presión en las mañanas frías?",
        answer: "Al caer las temperaturas de noche, el aire de tus neumáticos se contrae y la presión puede bajar varios psi, suficiente para activar el sistema de control de presión. Por eso la luz de advertencia suele aparecer la primera mañana fría del otoño. Normalmente los neumáticos no están dañados; simplemente necesitan reponerse a la presión recomendada en frío. Si la luz persiste tras inflarlos, revisa los neumáticos por una fuga lenta.",
      },
      {
        question: "¿Es exacta la regla de un psi por cada diez grados?",
        answer: "No, es una aproximación práctica más que una ley precisa. El cambio exacto depende de la presión inicial, del volumen del neumático y de la altitud, y se deriva de la relación del gas ideal entre presión y temperatura absoluta. Para neumáticos de coche cotidianos a inflación normal la regla es lo bastante cercana para planificar ajustes estacionales y entender una luz de advertencia. Para aplicaciones críticas, mide directamente con un manómetro preciso.",
      },
    ],
  },
  {
    id: "towing-capacity",
    slug: "towing-capacity-calculator",
    category: "Automotive",
    categorySlug: "automotive",
    title: "Towing Capacity Calculator",
    shortDescription: "Estimate how much your vehicle can safely tow.",
    seoTitle: "Towing Capacity Calculator — Max Trailer Weight from GCWR",
    metaDescription:
      "Free towing capacity calculator. Enter your vehicle's GCWR, curb weight, and passenger and cargo load to estimate the maximum trailer weight you can safely tow.",
    primaryKeyword: "towing capacity calculator",
    secondaryKeywords: ["trailer weight calculator", "max towing calculator", "gcwr towing calculator"],
    fields: [
      { id: "gcwr", label: "GCWR", type: "number", unit: "lb", required: true, span: 1, min: 0, helpText: "Gross combined weight rating from your manual." },
      { id: "curbWeight", label: "Curb weight", type: "number", unit: "lb", required: true, span: 1, min: 0 },
      { id: "passengerCargoWeight", label: "Passengers + cargo", type: "number", unit: "lb", required: false, span: 2, min: 0, defaultValue: 0 },
    ],
    results: [
      { id: "towingCapacity", label: "Towing capacity", format: "number", decimals: 0, unit: "lb", isPrimary: true },
    ],
    formula: "towing capacity = GCWR − curb weight − passengers and cargo",
    formulaExplanation: "The gross combined weight rating, or GCWR, is the maximum your loaded vehicle and loaded trailer may weigh together. Subtracting the vehicle's curb weight, its weight empty, leaves the total load the combination can still carry. Taking away the weight of passengers and cargo already inside the vehicle leaves what remains for the trailer and everything on it. That remainder is the heaviest trailer you can tow without exceeding the manufacturer's combined rating.",
    explanation: "Towing safely starts with knowing how much trailer your vehicle can pull once it is loaded, and this towing capacity calculator works that out from the manufacturer's ratings and your actual load. Enter the gross combined weight rating, the vehicle's curb weight, and the weight of passengers and cargo aboard, and the tool returns the maximum trailer weight you have left.\n\nThe key insight is that a truck's advertised maximum tow rating assumes a nearly empty vehicle. Every passenger, tool box, and full tank eats into the combined weight budget, so a family and their gear can reduce real towing capacity by several hundred pounds. Working from the gross combined weight rating rather than the headline tow figure gives a far more honest number, which protects your drivetrain, brakes, and tyres and keeps you within legal limits.\n\nThe method is deliberately conservative and simple. The GCWR caps the total weight of vehicle plus trailer. Removing the vehicle's empty weight and then the weight of everyone and everything you have loaded inside leaves the weight available for the trailer and its contents. This is an estimate for planning, not a substitute for weighing your actual rig at a scale and checking the tongue weight and hitch ratings, but it quickly shows whether a given trailer is realistic before you hitch up. Always confirm the figures against your owner's manual and door-jamb sticker.",
    example: { inputs: { gcwr: 12000, curbWeight: 6000, passengerCargoWeight: 1000 }, explanation: "12,000 GCWR − 6,000 curb − 1,000 passengers and cargo = 5,000 lb available for the trailer." },
    faqs: [
      {
        question: "What is GCWR?",
        answer: "GCWR stands for gross combined weight rating, the maximum total weight the manufacturer allows for your fully loaded vehicle and fully loaded trailer combined. It is listed in the owner's manual and sometimes on a door-jamb label. Because it caps the whole rig, it is the correct starting point for calculating how much you can actually tow once passengers and cargo are accounted for, unlike the optimistic headline tow rating.",
      },
      {
        question: "Why is my real towing capacity lower than the advertised figure?",
        answer: "Advertised maximum tow ratings usually assume a lightly loaded vehicle with only a driver aboard. In practice, passengers, fuel, tools, and cargo all add weight that counts against the gross combined weight rating, leaving less budget for the trailer. A crew of people and their gear can cut usable towing capacity by several hundred pounds, so calculating from GCWR and your actual load gives a much more realistic and safer number.",
      },
      {
        question: "What is curb weight?",
        answer: "Curb weight is the weight of the vehicle as it sits ready to drive with all standard equipment and fluids, including a full tank of fuel, but with no passengers or cargo. It is the baseline weight before you add people and gear. Subtracting curb weight from the gross combined weight rating shows how much total load the vehicle and trailer combination can carry between them.",
      },
      {
        question: "Does this account for tongue weight?",
        answer: "No, this calculator estimates maximum trailer weight only. Tongue weight, the downward force the trailer places on the hitch, is a separate limit that should be roughly ten to fifteen percent of the trailer's weight for stable towing. You must also stay within the hitch rating and the rear axle rating. Always check tongue weight and hitch specifications alongside this figure before towing to ensure the whole setup is safe.",
      },
      {
        question: "Should I tow right up to the calculated limit?",
        answer: "It is wise to leave a safety margin rather than tow at the exact maximum. Loading to the limit strains the engine, transmission, brakes, and tyres, especially on hills or in hot weather, and leaves no room for error in your weight estimates. Staying comfortably below the calculated capacity improves control, reduces wear, and gives a buffer for the extra water, fuel, or gear that trips tend to accumulate.",
      },
    ],
    relatedCalculators: ["fuel-cost-calculator", "mpg-calculator", "car-loan-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "GCWR-based towing capacity method",
    slugEs: "calculadora-de-capacidad-de-remolque",
    titleEs: "Calculadora de Capacidad de Remolque",
    shortDescriptionEs: "Estima cuánto puede remolcar tu vehículo con seguridad.",
    seoTitleEs: "Calculadora de Capacidad de Remolque — Peso Máximo de Remolque según el GCWR",
    metaDescriptionEs:
      "Calculadora de capacidad de remolque gratuita. Introduce el GCWR de tu vehículo, el peso en vacío y la carga de pasajeros y equipaje para estimar el peso máximo de remolque que puedes arrastrar con seguridad.",
    primaryKeywordEs: "calculadora de capacidad de remolque",
    secondaryKeywordsEs: ["calculadora de peso de remolque", "calculadora de remolque máximo", "calculadora de remolque gcwr"],
    formulaExplanationEs: "El peso bruto combinado, o GCWR, es el máximo que tu vehículo cargado y tu remolque cargado pueden pesar juntos. Restar el peso en vacío del vehículo, su peso vacío, deja la carga total que la combinación aún puede llevar. Quitar el peso de los pasajeros y el equipaje que ya van dentro del vehículo deja lo que resta para el remolque y todo lo que lleva. Ese resto es el remolque más pesado que puedes arrastrar sin superar la clasificación combinada del fabricante.",
    explanationEs: "Remolcar con seguridad empieza por saber cuánto remolque puede arrastrar tu vehículo una vez cargado, y esta calculadora de capacidad de remolque lo resuelve a partir de las clasificaciones del fabricante y tu carga real. Introduce el peso bruto combinado, el peso en vacío del vehículo y el peso de los pasajeros y el equipaje a bordo, y la herramienta devuelve el peso máximo de remolque que te queda.\n\nLa idea clave es que la clasificación máxima de remolque anunciada de una camioneta supone un vehículo casi vacío. Cada pasajero, caja de herramientas y depósito lleno consume presupuesto del peso combinado, así que una familia y su equipaje pueden reducir la capacidad real de remolque en varios cientos de libras. Trabajar desde el peso bruto combinado en lugar de la cifra destacada de remolque da un número mucho más honesto, que protege tu transmisión, frenos y neumáticos y te mantiene dentro de los límites legales.\n\nEl método es deliberadamente conservador y sencillo. El GCWR limita el peso total del vehículo más el remolque. Quitar el peso vacío del vehículo y luego el peso de todo y todos los que has cargado dentro deja el peso disponible para el remolque y su contenido. Esto es una estimación para planificar, no un sustituto de pesar tu conjunto real en una báscula y comprobar el peso en la lanza y las clasificaciones del enganche, pero muestra rápidamente si un remolque dado es realista antes de enganchar. Confirma siempre las cifras con tu manual del propietario y la etiqueta de la jamba de la puerta.",
    exampleEs: { inputs: { gcwr: 12000, curbWeight: 6000, passengerCargoWeight: 1000 }, explanation: "12.000 GCWR − 6.000 en vacío − 1.000 pasajeros y equipaje = 5.000 lb disponibles para el remolque." },
    faqsEs: [
      {
        question: "¿Qué es el GCWR?",
        answer: "El GCWR significa peso bruto combinado, el peso total máximo que el fabricante permite para tu vehículo totalmente cargado y tu remolque totalmente cargado juntos. Aparece en el manual del propietario y a veces en una etiqueta de la jamba de la puerta. Como limita todo el conjunto, es el punto de partida correcto para calcular cuánto puedes remolcar realmente una vez contados los pasajeros y el equipaje, a diferencia de la optimista cifra destacada de remolque.",
      },
      {
        question: "¿Por qué mi capacidad real de remolque es menor que la cifra anunciada?",
        answer: "Las clasificaciones máximas de remolque anunciadas suelen suponer un vehículo ligeramente cargado con solo un conductor a bordo. En la práctica, pasajeros, combustible, herramientas y equipaje suman peso que cuenta contra el peso bruto combinado, dejando menos presupuesto para el remolque. Un grupo de personas y su equipaje puede recortar la capacidad útil de remolque en varios cientos de libras, así que calcular desde el GCWR y tu carga real da un número mucho más realista y seguro.",
      },
      {
        question: "¿Qué es el peso en vacío?",
        answer: "El peso en vacío es el peso del vehículo tal como está listo para conducir con todo el equipamiento estándar y los fluidos, incluido el depósito de combustible lleno, pero sin pasajeros ni equipaje. Es el peso base antes de añadir personas y carga. Restar el peso en vacío del peso bruto combinado muestra cuánta carga total puede llevar la combinación de vehículo y remolque entre ambos.",
      },
      {
        question: "¿Esto tiene en cuenta el peso sobre la lanza?",
        answer: "No, esta calculadora estima solo el peso máximo del remolque. El peso sobre la lanza, la fuerza descendente que el remolque ejerce sobre el enganche, es un límite aparte que debería rondar el diez a quince por ciento del peso del remolque para un remolcado estable. También debes mantenerte dentro de la clasificación del enganche y del eje trasero. Comprueba siempre el peso sobre la lanza y las especificaciones del enganche junto con esta cifra antes de remolcar.",
      },
      {
        question: "¿Debo remolcar justo hasta el límite calculado?",
        answer: "Es prudente dejar un margen de seguridad en lugar de remolcar al máximo exacto. Cargar hasta el límite exige el motor, la transmisión, los frenos y los neumáticos, especialmente en pendientes o con calor, y no deja margen para errores en tus estimaciones de peso. Mantenerte cómodamente por debajo de la capacidad calculada mejora el control, reduce el desgaste y da un colchón para el agua, combustible o equipaje extra que suelen acumular los viajes.",
      },
    ],
  },
  {
    id: "fuel-savings",
    slug: "fuel-savings-calculator",
    category: "Automotive",
    categorySlug: "automotive",
    title: "Fuel Savings Calculator",
    shortDescription: "Compare yearly fuel costs of two vehicles.",
    seoTitle: "Fuel Savings Calculator — Annual Savings from Better MPG",
    metaDescription:
      "Free fuel savings calculator. Compare two vehicles by annual miles, old and new MPG, and fuel price to see how much you save each year on fuel by switching.",
    primaryKeyword: "fuel savings calculator",
    secondaryKeywords: ["gas savings calculator", "mpg savings calculator", "fuel economy savings calculator"],
    fields: [
      { id: "annualMiles", label: "Annual miles", type: "number", unit: "mi/yr", required: true, span: 1, min: 0 },
      { id: "oldMpg", label: "Current MPG", type: "number", unit: "mpg", required: true, span: 1, min: 0 },
      { id: "newMpg", label: "New MPG", type: "number", unit: "mpg", required: true, span: 1, min: 0 },
      { id: "fuelPrice", label: "Fuel price", type: "number", unit: "$/gal", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "annualSavings", label: "Annual savings", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "oldAnnualCost", label: "Current annual cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "newAnnualCost", label: "New annual cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula: "savings = (miles ÷ old MPG − miles ÷ new MPG) × fuel price",
    formulaExplanation: "Each vehicle's yearly fuel cost is its annual mileage divided by its fuel economy, giving gallons burned, multiplied by the price per gallon. Dividing by a higher miles-per-gallon figure means fewer gallons and a smaller bill. Subtracting the more efficient vehicle's cost from the current one leaves the annual saving. Because the mileage and price are shared, the gap comes entirely from the difference in fuel economy between the two cars.",
    explanation: "When you are weighing a more fuel-efficient vehicle, the question that matters is how many dollars better MPG actually saves you each year, and this fuel savings calculator answers it directly. Enter your annual mileage, your current vehicle's fuel economy, the fuel economy of the vehicle you are considering, and the price of fuel, and the tool shows each car's yearly fuel bill and the savings between them.\n\nSeeing the two annual costs side by side turns an abstract MPG figure into money. Fuel economy improvements deliver diminishing returns: jumping from 15 to 20 MPG saves far more fuel than jumping from 40 to 45, even though both are five-MPG gains, because gallons burned depends on the reciprocal of MPG. This calculator captures that effect automatically, which helps you judge whether a more efficient car, a hybrid, or simply better driving habits justify their cost.\n\nThe calculation is transparent and easy to test. It converts your annual miles into gallons for each vehicle, prices those gallons at the pump rate you enter, and subtracts to find the saving. Because mileage and fuel price are shared between the two, the entire difference reflects the change in efficiency. Try a higher fuel price, more annual miles, or a bigger MPG jump and watch the yearly saving grow, giving you a clear, personalised basis for deciding whether the switch pays off.",
    example: { inputs: { annualMiles: 12000, oldMpg: 20, newMpg: 30, fuelPrice: 4 }, explanation: "Current: 12,000 ÷ 20 × $4 = $2,400. New: 12,000 ÷ 30 × $4 = $1,600. You save $800 a year." },
    faqs: [
      {
        question: "Why do fuel savings shrink at high MPG?",
        answer: "Fuel burned depends on the reciprocal of MPG, so gains matter most at the low end. Going from 15 to 20 MPG saves far more gallons than going from 40 to 45, even though both are five-MPG improvements. This is why a modest efficiency gain on a thirsty vehicle can save more money than a large gain on an already efficient one. The calculator captures this automatically through the miles-divided-by-MPG step.",
      },
      {
        question: "What annual mileage should I enter?",
        answer: "Use the number of miles you realistically expect to drive in a year. Many drivers cover somewhere between 10,000 and 15,000 miles annually, but commutes, road trips, and work driving vary widely. If you are unsure, check your odometer against last year's figure or your service records. Higher mileage magnifies fuel savings, so using an accurate estimate keeps the comparison honest rather than overstating the benefit of switching.",
      },
      {
        question: "Does this include the cost of buying the new vehicle?",
        answer: "No, this calculator compares only annual fuel costs between two fuel economy figures. It does not account for the purchase price, financing, insurance, or maintenance differences between the vehicles. Use the yearly fuel saving as one input into a bigger decision. To judge whether a more efficient car pays for itself, weigh the annual saving shown here against any extra upfront cost over the years you plan to keep it.",
      },
      {
        question: "Can I use this to compare petrol and diesel or a hybrid?",
        answer: "Yes, as long as both vehicles use the same fuel priced per gallon, the comparison is straightforward. If the two use different fuels at different prices, this simple version, which shares one fuel price, will not be accurate. For a like-for-like efficiency comparison on the same fuel, or to test the effect of a hybrid's higher MPG, enter each vehicle's economy and see the yearly difference at your local fuel price.",
      },
      {
        question: "How does fuel price affect the savings?",
        answer: "Fuel price scales the saving directly: the higher the price per gallon, the more each avoided gallon is worth, so the annual saving from better economy grows. When prices spike, an efficient vehicle's advantage widens, and when prices fall it narrows. Because the future price is uncertain, it is worth testing a few values, such as today's price and a higher one, to see how sensitive your savings are to the pump.",
      },
    ],
    relatedCalculators: ["fuel-cost-calculator", "mpg-calculator", "ev-savings-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "U.S. EPA fuel economy",
    sourceUrl: "https://www.fueleconomy.gov/",
    slugEs: "calculadora-de-ahorro-de-combustible",
    titleEs: "Calculadora de Ahorro de Combustible",
    shortDescriptionEs: "Compara los costos anuales de combustible de dos vehículos.",
    seoTitleEs: "Calculadora de Ahorro de Combustible — Ahorro Anual por Mejor Rendimiento",
    metaDescriptionEs:
      "Calculadora de ahorro de combustible gratuita. Compara dos vehículos por millas anuales, rendimiento antiguo y nuevo, y precio del combustible para ver cuánto ahorras cada año al cambiar.",
    primaryKeywordEs: "calculadora de ahorro de combustible",
    secondaryKeywordsEs: ["calculadora de ahorro de gasolina", "calculadora de ahorro de mpg", "calculadora de ahorro de rendimiento de combustible"],
    formulaExplanationEs: "El costo anual de combustible de cada vehículo es su kilometraje anual dividido entre su rendimiento, lo que da los galones consumidos, multiplicado por el precio por galón. Dividir entre una cifra mayor de millas por galón significa menos galones y una factura más pequeña. Restar el costo del vehículo más eficiente del actual deja el ahorro anual. Como el kilometraje y el precio son compartidos, la diferencia proviene por completo del cambio en el rendimiento de combustible entre los dos coches.",
    explanationEs: "Cuando estás sopesando un vehículo más eficiente, la pregunta que importa es cuántos dólares ahorra realmente un mejor rendimiento cada año, y esta calculadora de ahorro de combustible la responde directamente. Introduce tu kilometraje anual, el rendimiento de tu vehículo actual, el rendimiento del vehículo que estás considerando y el precio del combustible, y la herramienta muestra la factura anual de combustible de cada coche y el ahorro entre ambos.\n\nVer los dos costos anuales lado a lado convierte una cifra abstracta de rendimiento en dinero. Las mejoras de rendimiento ofrecen rendimientos decrecientes: pasar de 15 a 20 mpg ahorra mucho más combustible que pasar de 40 a 45, aunque ambos sean ganancias de cinco mpg, porque los galones consumidos dependen del inverso del rendimiento. Esta calculadora capta ese efecto automáticamente, lo que ayuda a juzgar si un coche más eficiente, un híbrido o simplemente mejores hábitos de conducción justifican su costo.\n\nEl cálculo es transparente y fácil de comprobar. Convierte tus millas anuales en galones para cada vehículo, valora esos galones al precio de surtidor que introduces y resta para hallar el ahorro. Como el kilometraje y el precio del combustible se comparten entre ambos, toda la diferencia refleja el cambio de eficiencia. Prueba un precio de combustible mayor, más millas anuales o un salto de rendimiento más grande y observa crecer el ahorro anual, lo que te da una base clara y personalizada para decidir si el cambio vale la pena.",
    exampleEs: { inputs: { annualMiles: 12000, oldMpg: 20, newMpg: 30, fuelPrice: 4 }, explanation: "Actual: 12.000 ÷ 20 × $4 = $2.400. Nuevo: 12.000 ÷ 30 × $4 = $1.600. Ahorras $800 al año." },
    faqsEs: [
      {
        question: "¿Por qué se reduce el ahorro de combustible con un rendimiento alto?",
        answer: "El combustible consumido depende del inverso del rendimiento, así que las ganancias importan más en el rango bajo. Pasar de 15 a 20 mpg ahorra muchos más galones que pasar de 40 a 45, aunque ambos sean mejoras de cinco mpg. Por eso una mejora modesta de eficiencia en un vehículo gastón puede ahorrar más dinero que una gran mejora en uno ya eficiente. La calculadora capta esto automáticamente mediante el paso de millas divididas entre rendimiento.",
      },
      {
        question: "¿Qué kilometraje anual debo introducir?",
        answer: "Usa el número de millas que realistamente esperas conducir en un año. Muchos conductores recorren entre 10.000 y 15.000 millas anuales, pero los trayectos, viajes por carretera y desplazamientos de trabajo varían mucho. Si no estás seguro, comprueba tu odómetro contra la cifra del año pasado o tus registros de servicio. Un mayor kilometraje amplifica el ahorro de combustible, así que usar una estimación precisa mantiene la comparación honesta en lugar de exagerar el beneficio de cambiar.",
      },
      {
        question: "¿Esto incluye el costo de comprar el nuevo vehículo?",
        answer: "No, esta calculadora compara solo los costos anuales de combustible entre dos cifras de rendimiento. No tiene en cuenta el precio de compra, la financiación, el seguro ni las diferencias de mantenimiento entre los vehículos. Usa el ahorro anual de combustible como un dato dentro de una decisión mayor. Para juzgar si un coche más eficiente se paga solo, compara el ahorro anual mostrado aquí con cualquier costo inicial extra a lo largo de los años que pienses conservarlo.",
      },
      {
        question: "¿Puedo usar esto para comparar gasolina y diésel o un híbrido?",
        answer: "Sí, siempre que ambos vehículos usen el mismo combustible con precio por galón, la comparación es directa. Si los dos usan combustibles distintos a precios distintos, esta versión sencilla, que comparte un precio de combustible, no será precisa. Para una comparación equivalente de eficiencia con el mismo combustible, o para probar el efecto del mayor rendimiento de un híbrido, introduce el rendimiento de cada vehículo y observa la diferencia anual a tu precio local.",
      },
      {
        question: "¿Cómo afecta el precio del combustible al ahorro?",
        answer: "El precio del combustible escala el ahorro directamente: cuanto mayor es el precio por galón, más vale cada galón evitado, así que el ahorro anual por un mejor rendimiento crece. Cuando los precios se disparan, la ventaja de un vehículo eficiente se amplía, y cuando bajan se reduce. Como el precio futuro es incierto, conviene probar varios valores, como el precio de hoy y uno más alto, para ver la sensibilidad de tu ahorro al surtidor.",
      },
    ],
  },
  {
    id: "ffmi",
    slug: "ffmi-calculator",
    category: "Sports",
    categorySlug: "sports",
    title: "FFMI Calculator",
    shortDescription: "Measure muscularity with fat-free mass index.",
    seoTitle: "FFMI Calculator — Fat-Free Mass Index from Weight & Body Fat",
    metaDescription:
      "Free FFMI calculator. Enter your weight, height, and body fat percentage to find your height-adjusted fat-free mass index and your lean body mass in kilograms.",
    primaryKeyword: "ffmi calculator",
    secondaryKeywords: ["fat free mass index calculator", "lean mass index calculator", "muscularity calculator"],
    fields: [
      { id: "weightKg", label: "Body weight", type: "number", unit: "kg", required: true, span: 1, min: 0 },
      { id: "heightCm", label: "Height", type: "number", unit: "cm", required: true, span: 1, min: 0 },
      { id: "bodyFatPercent", label: "Body fat", type: "number", unit: "%", required: true, span: 2, min: 0, max: 100, step: 0.1 },
    ],
    results: [
      { id: "ffmi", label: "FFMI (adjusted)", format: "number", decimals: 1, isPrimary: true },
      { id: "fatFreeMass", label: "Fat-free mass", format: "number", decimals: 1, unit: "kg", isPrimary: false },
    ],
    formula: "FFMI = lean mass ÷ height² + 6.1 × (1.8 − height)",
    formulaExplanation: "Fat-free mass index divides your lean body mass in kilograms by your height in metres squared, mirroring the structure of body mass index but counting only muscle, bone, and organs rather than fat. Lean mass is bodyweight multiplied by one minus your body-fat fraction. The extra term, 6.1 times the difference between 1.8 metres and your height, is a normalisation that adjusts the score so taller and shorter people can be compared on the same scale.",
    explanation: "FFMI, the fat-free mass index, is a way to gauge how muscular you are relative to your height, and unlike simple body mass index it ignores fat entirely, making it far more useful for athletes and lifters. This FFMI calculator takes your weight, height, and body fat percentage and returns your height-adjusted FFMI along with your lean body mass in kilograms.\n\nThe index answers a question that bodyweight alone cannot: is that mass muscle or fat? Two people at the same BMI can have completely different physiques, so BMI often labels muscular athletes as overweight. By stripping out fat and scaling lean mass to height, FFMI produces a number that tracks genuine muscularity. Natural, drug-free trained men typically land somewhere in the low twenties, and values pushing past about 25 are often cited as difficult to reach without enhancement, which is why the metric appears in discussions of natural potential.\n\nThe calculation first finds lean mass by removing the fat fraction from your bodyweight, then divides by height squared exactly as BMI does. A height-normalisation term is added so the score does not unfairly favour taller or shorter individuals. Because the result depends heavily on your body fat figure, the accuracy of that input matters: a rough visual estimate gives a rough FFMI, while a measured body fat percentage gives a dependable one. Lifters tracking progress, coaches assessing athletes, and anyone curious about their muscular development can use this tool to put a single meaningful number on their build.",
    example: { inputs: { weightKg: 90, heightCm: 180, bodyFatPercent: 15 }, explanation: "Lean mass = 90 × 0.85 = 76.5 kg; FFMI = 76.5 ÷ 1.8² + 6.1 × (1.8 − 1.8) ≈ 23.6." },
    faqs: [
      {
        question: "What is a good FFMI?",
        answer: "For men, an FFMI around 18 to 20 is average, the low twenties indicate a well-developed, athletic build, and values approaching 25 represent the upper end of what is generally considered achievable naturally. Women's values run several points lower on the same scale. These are broad guides rather than strict limits, and genetics, training history, and measurement accuracy all influence where an individual realistically falls.",
      },
      {
        question: "How is FFMI different from BMI?",
        answer: "BMI divides total bodyweight by height squared without distinguishing muscle from fat, so it frequently mislabels muscular people as overweight. FFMI first removes fat using your body fat percentage, then scales the remaining lean mass to height. The result reflects muscularity rather than mere size, which is why athletes and lifters prefer it. In short, BMI measures heaviness, while FFMI measures how much of that mass is lean tissue.",
      },
      {
        question: "Why does body fat percentage matter so much here?",
        answer: "FFMI is built on lean mass, which is calculated by subtracting your fat from your total weight, so the body fat figure you enter directly shapes the result. An inaccurate body fat estimate produces an inaccurate FFMI. A rough eyeball guess can be several points off, while a measurement from calipers, a DEXA scan, or bioelectrical impedance gives a far more reliable index. Use the best body fat figure you can obtain.",
      },
      {
        question: "What is the adjusted FFMI formula?",
        answer: "The adjusted, or normalised, FFMI adds a term, 6.1 multiplied by the difference between 1.8 metres and your height, to the basic lean-mass-over-height-squared calculation. This correction compensates for the fact that raw FFMI slightly favours taller individuals. The adjustment lets people of different heights be compared on a common scale, which is why the normalised version is the one most commonly quoted in fitness and research contexts.",
      },
      {
        question: "Can FFMI prove whether someone is natural?",
        answer: "No. While FFMI values much above 25 are often cited as hard to reach without performance-enhancing drugs, the metric is a rough indicator, not proof. Genetics, exceptional training, favourable proportions, and measurement error all affect the number, and some naturally gifted athletes exceed the usual ceiling. Treat a high FFMI as noteworthy rather than conclusive, and remember the calculation is only as accurate as the body fat estimate behind it.",
      },
    ],
    relatedCalculators: ["one-rep-max-calculator", "calorie-burn-calculator", "vo2-max-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Kouri et al. 1995 (fat-free mass index)",
    slugEs: "calculadora-de-ffmi",
    titleEs: "Calculadora de FFMI",
    shortDescriptionEs: "Mide la musculatura con el índice de masa libre de grasa.",
    seoTitleEs: "Calculadora de FFMI — Índice de Masa Libre de Grasa según Peso y Grasa Corporal",
    metaDescriptionEs:
      "Calculadora de FFMI gratuita. Introduce tu peso, estatura y porcentaje de grasa corporal para hallar tu índice de masa libre de grasa ajustado por estatura y tu masa magra en kilogramos.",
    primaryKeywordEs: "calculadora de ffmi",
    secondaryKeywordsEs: ["calculadora de índice de masa libre de grasa", "calculadora de índice de masa magra", "calculadora de musculatura"],
    formulaExplanationEs: "El índice de masa libre de grasa divide tu masa corporal magra en kilogramos entre tu estatura en metros al cuadrado, reflejando la estructura del índice de masa corporal pero contando solo músculo, hueso y órganos en lugar de grasa. La masa magra es el peso corporal multiplicado por uno menos tu fracción de grasa corporal. El término extra, 6,1 por la diferencia entre 1,8 metros y tu estatura, es una normalización que ajusta la puntuación para que personas más altas y más bajas puedan compararse en la misma escala.",
    explanationEs: "El FFMI, el índice de masa libre de grasa, es una forma de estimar cuán musculoso eres en relación con tu estatura, y a diferencia del simple índice de masa corporal ignora la grasa por completo, lo que lo hace mucho más útil para atletas y levantadores. Esta calculadora de FFMI toma tu peso, estatura y porcentaje de grasa corporal y devuelve tu FFMI ajustado por estatura junto con tu masa corporal magra en kilogramos.\n\nEl índice responde a una pregunta que el peso corporal por sí solo no puede: ¿esa masa es músculo o grasa? Dos personas con el mismo IMC pueden tener físicos completamente distintos, así que el IMC a menudo etiqueta a atletas musculosos como con sobrepeso. Al eliminar la grasa y escalar la masa magra a la estatura, el FFMI produce un número que sigue la musculatura real. Los hombres entrenados y naturales suelen situarse en los veintipocos, y valores que superan alrededor de 25 se citan a menudo como difíciles de alcanzar sin ayuda, razón por la que la métrica aparece en debates sobre el potencial natural.\n\nEl cálculo primero halla la masa magra eliminando la fracción de grasa de tu peso corporal, luego divide entre la estatura al cuadrado exactamente como el IMC. Se añade un término de normalización por estatura para que la puntuación no favorezca injustamente a los más altos o bajos. Como el resultado depende mucho de tu cifra de grasa corporal, la precisión de ese dato importa: una estimación visual aproximada da un FFMI aproximado, mientras que un porcentaje de grasa medido da uno fiable. Levantadores que siguen su progreso, entrenadores que evalúan atletas y cualquiera con curiosidad por su desarrollo muscular pueden usar esta herramienta para poner un único número significativo a su constitución.",
    exampleEs: { inputs: { weightKg: 90, heightCm: 180, bodyFatPercent: 15 }, explanation: "Masa magra = 90 × 0,85 = 76,5 kg; FFMI = 76,5 ÷ 1,8² + 6,1 × (1,8 − 1,8) ≈ 23,6." },
    faqsEs: [
      {
        question: "¿Qué es un buen FFMI?",
        answer: "Para los hombres, un FFMI de alrededor de 18 a 20 es promedio, los veintipocos indican una constitución atlética bien desarrollada, y valores que se acercan a 25 representan el extremo superior de lo que suele considerarse alcanzable de forma natural. Los valores de las mujeres corren varios puntos más bajos en la misma escala. Estas son guías amplias más que límites estrictos, y la genética, el historial de entrenamiento y la precisión de la medición influyen en dónde cae realmente un individuo.",
      },
      {
        question: "¿En qué se diferencia el FFMI del IMC?",
        answer: "El IMC divide el peso corporal total entre la estatura al cuadrado sin distinguir músculo de grasa, por lo que frecuentemente etiqueta mal a las personas musculosas como con sobrepeso. El FFMI primero elimina la grasa usando tu porcentaje de grasa corporal, luego escala la masa magra restante a la estatura. El resultado refleja la musculatura en lugar del mero tamaño, razón por la que atletas y levantadores lo prefieren. En resumen, el IMC mide la pesadez, mientras que el FFMI mide cuánta de esa masa es tejido magro.",
      },
      {
        question: "¿Por qué importa tanto aquí el porcentaje de grasa corporal?",
        answer: "El FFMI se construye sobre la masa magra, que se calcula restando tu grasa de tu peso total, así que la cifra de grasa corporal que introduces determina directamente el resultado. Una estimación imprecisa de grasa corporal produce un FFMI impreciso. Un cálculo a ojo aproximado puede desviarse varios puntos, mientras que una medición con calibradores, un escáner DEXA o impedancia bioeléctrica da un índice mucho más fiable. Usa la mejor cifra de grasa corporal que puedas obtener.",
      },
      {
        question: "¿Cuál es la fórmula del FFMI ajustado?",
        answer: "El FFMI ajustado, o normalizado, añade un término, 6,1 multiplicado por la diferencia entre 1,8 metros y tu estatura, al cálculo básico de masa magra sobre estatura al cuadrado. Esta corrección compensa el hecho de que el FFMI bruto favorece ligeramente a los individuos más altos. El ajuste permite comparar a personas de distintas estaturas en una escala común, razón por la que la versión normalizada es la que más se cita en contextos de fitness e investigación.",
      },
      {
        question: "¿Puede el FFMI demostrar si alguien es natural?",
        answer: "No. Aunque los valores de FFMI muy por encima de 25 se citan a menudo como difíciles de alcanzar sin fármacos que mejoran el rendimiento, la métrica es un indicador aproximado, no una prueba. La genética, un entrenamiento excepcional, proporciones favorables y el error de medición influyen todos en el número, y algunos atletas naturalmente dotados superan el techo habitual. Trata un FFMI alto como notable más que concluyente, y recuerda que el cálculo es tan preciso como la estimación de grasa corporal que lo respalda.",
      },
    ],
  },
  {
    id: "golf-handicap",
    slug: "golf-handicap-calculator",
    category: "Sports",
    categorySlug: "sports",
    title: "Golf Handicap Calculator",
    shortDescription: "Find the handicap differential of a round.",
    seoTitle: "Golf Handicap Calculator — Handicap Differential from a Score",
    metaDescription:
      "Free golf handicap calculator. Enter your adjusted score, the course rating, and the slope rating to compute the handicap differential for a single round.",
    primaryKeyword: "golf handicap calculator",
    secondaryKeywords: ["handicap differential calculator", "golf handicap index calculator", "course handicap calculator"],
    fields: [
      { id: "score", label: "Adjusted gross score", type: "number", unit: "strokes", required: true, span: 1, min: 0 },
      { id: "courseRating", label: "Course rating", type: "number", required: true, span: 1, min: 0, step: 0.1 },
      { id: "slopeRating", label: "Slope rating", type: "number", required: true, span: 2, min: 55, max: 155 },
    ],
    results: [
      { id: "handicapDifferential", label: "Handicap differential", format: "number", decimals: 1, isPrimary: true },
    ],
    formula: "differential = (score − course rating) × 113 ÷ slope rating",
    formulaExplanation: "A handicap differential measures how well you played one round relative to the difficulty of the course and set of tees. Subtracting the course rating from your adjusted score shows how many strokes above or below a scratch golfer's expected score you were. Multiplying by 113, the slope rating of a course of standard difficulty, and dividing by the actual slope rating scales that result so rounds played on easier and harder courses can be compared fairly on one standard.",
    explanation: "Your golf handicap starts with a single round's handicap differential, and this golf handicap calculator computes that differential using the standard formula behind the world handicap system. Enter your adjusted gross score, the course rating, and the slope rating of the tees you played, and the tool returns the differential for that round.\n\nThe differential is the building block of a handicap index. It expresses how well you scored relative to the difficulty of the specific course and tees, so a strong round on a brutal course can produce a lower differential than a mediocre round on an easy one. Your official handicap index is then derived from the average of your best recent differentials, which is why understanding a single round's differential helps you see how each score will influence your handicap.\n\nThe calculation uses three inputs that together capture course difficulty. The course rating is the score a scratch golfer is expected to shoot, so subtracting it from your score shows how many strokes over that mark you were. The slope rating reflects how much harder the course plays for a bogey golfer than a scratch golfer, and dividing by it, then multiplying by the standard slope of 113, normalises your performance across courses of different difficulty. Golfers tracking their progress, estimating a new handicap, or comparing rounds played at different venues can use this calculator to turn any score into a comparable, meaningful number.",
    example: { inputs: { score: 90, courseRating: 72, slopeRating: 113 }, explanation: "(90 − 72) × 113 ÷ 113 = 18 × 1 = 18.0 handicap differential for the round." },
    faqs: [
      {
        question: "What is a handicap differential?",
        answer: "A handicap differential is a number representing how well you played a single round relative to the difficulty of the course and tees. It is calculated from your adjusted score, the course rating, and the slope rating. Differentials from your recent rounds are averaged, using the best ones, to produce your handicap index. So each differential is a single-round measure that feeds into your overall handicap over time.",
      },
      {
        question: "What is the difference between course rating and slope rating?",
        answer: "Course rating is the score a scratch, or zero-handicap, golfer is expected to shoot on the course, usually a number close to par, expressed to one decimal. Slope rating measures how much more difficult the course plays for a bogey golfer than for a scratch golfer, on a scale from 55 to 155, where 113 is standard difficulty. Together they let scores from different courses be compared fairly.",
      },
      {
        question: "Why is the number 113 in the formula?",
        answer: "The value 113 is the slope rating of a course of standard, average difficulty. Dividing by the course's actual slope rating and multiplying by 113 rescales your differential to that standard baseline, so a round on a very hard course, which has a higher slope, is adjusted upward relative to one on an easier course. This normalisation is what makes differentials from different courses directly comparable.",
      },
      {
        question: "What is an adjusted gross score?",
        answer: "Adjusted gross score is your total strokes with a maximum applied to any single hole under the net double bogey rule, which caps blow-up holes so one disastrous hole does not distort your handicap. For handicap purposes you use this adjusted figure rather than your raw total. Applying the cap keeps differentials representative of your typical ability rather than being skewed by an occasional very high hole score.",
      },
      {
        question: "How many rounds do I need for an official handicap?",
        answer: "Under the world handicap system, a handicap index is calculated from the average of your best eight differentials out of your most recent twenty scores. You can obtain an initial index after posting as few as three eighteen-hole rounds, with adjustments applied while you have fewer scores. This calculator gives you a single round's differential, and collecting several lets you estimate where your index will settle.",
      },
    ],
    relatedCalculators: ["one-rep-max-calculator", "vo2-max-calculator", "calorie-burn-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "World Handicap System (handicap differential)",
    slugEs: "calculadora-de-handicap-de-golf",
    titleEs: "Calculadora de Hándicap de Golf",
    shortDescriptionEs: "Halla el diferencial de hándicap de una ronda.",
    seoTitleEs: "Calculadora de Hándicap de Golf — Diferencial de Hándicap de una Puntuación",
    metaDescriptionEs:
      "Calculadora de hándicap de golf gratuita. Introduce tu puntuación ajustada, el rating del campo y el rating de slope para calcular el diferencial de hándicap de una sola ronda.",
    primaryKeywordEs: "calculadora de hándicap de golf",
    secondaryKeywordsEs: ["calculadora de diferencial de hándicap", "calculadora de índice de hándicap de golf", "calculadora de hándicap de campo"],
    formulaExplanationEs: "Un diferencial de hándicap mide lo bien que jugaste una ronda en relación con la dificultad del campo y del juego de salidas. Restar el rating del campo de tu puntuación ajustada muestra cuántos golpes por encima o por debajo de la puntuación esperada de un golfista scratch estuviste. Multiplicar por 113, el rating de slope de un campo de dificultad estándar, y dividir por el rating de slope real, escala ese resultado para que rondas jugadas en campos más fáciles y más difíciles puedan compararse con justicia en un mismo estándar.",
    explanationEs: "Tu hándicap de golf empieza con el diferencial de hándicap de una sola ronda, y esta calculadora de hándicap de golf lo calcula usando la fórmula estándar detrás del sistema mundial de hándicap. Introduce tu puntuación bruta ajustada, el rating del campo y el rating de slope de las salidas que jugaste, y la herramienta devuelve el diferencial de esa ronda.\n\nEl diferencial es el bloque de construcción de un índice de hándicap. Expresa lo bien que puntuaste en relación con la dificultad del campo y las salidas concretas, así que una ronda fuerte en un campo brutal puede producir un diferencial más bajo que una ronda mediocre en uno fácil. Tu índice de hándicap oficial se deriva luego del promedio de tus mejores diferenciales recientes, razón por la que entender el diferencial de una sola ronda ayuda a ver cómo influirá cada puntuación en tu hándicap.\n\nEl cálculo usa tres datos que juntos capturan la dificultad del campo. El rating del campo es la puntuación que se espera que logre un golfista scratch, así que restarlo de tu puntuación muestra cuántos golpes por encima de esa marca estuviste. El rating de slope refleja cuánto más difícil juega el campo para un golfista bogey que para uno scratch, y dividir por él, luego multiplicar por el slope estándar de 113, normaliza tu rendimiento entre campos de distinta dificultad. Golfistas que siguen su progreso, estiman un nuevo hándicap o comparan rondas jugadas en distintos campos pueden usar esta calculadora para convertir cualquier puntuación en un número comparable y significativo.",
    exampleEs: { inputs: { score: 90, courseRating: 72, slopeRating: 113 }, explanation: "(90 − 72) × 113 ÷ 113 = 18 × 1 = 18,0 de diferencial de hándicap para la ronda." },
    faqsEs: [
      {
        question: "¿Qué es un diferencial de hándicap?",
        answer: "Un diferencial de hándicap es un número que representa lo bien que jugaste una sola ronda en relación con la dificultad del campo y las salidas. Se calcula a partir de tu puntuación ajustada, el rating del campo y el rating de slope. Los diferenciales de tus rondas recientes se promedian, usando los mejores, para producir tu índice de hándicap. Así, cada diferencial es una medida de una sola ronda que alimenta tu hándicap general con el tiempo.",
      },
      {
        question: "¿Cuál es la diferencia entre el rating del campo y el rating de slope?",
        answer: "El rating del campo es la puntuación que se espera que logre un golfista scratch, o de hándicap cero, en el campo, normalmente un número cercano al par, expresado a un decimal. El rating de slope mide cuánto más difícil juega el campo para un golfista bogey que para uno scratch, en una escala de 55 a 155, donde 113 es la dificultad estándar. Juntos permiten comparar con justicia puntuaciones de distintos campos.",
      },
      {
        question: "¿Por qué aparece el número 113 en la fórmula?",
        answer: "El valor 113 es el rating de slope de un campo de dificultad estándar y media. Dividir por el rating de slope real del campo y multiplicar por 113 reescala tu diferencial a esa base estándar, de modo que una ronda en un campo muy difícil, que tiene un slope mayor, se ajusta al alza respecto a una en uno más fácil. Esta normalización es lo que hace directamente comparables los diferenciales de distintos campos.",
      },
      {
        question: "¿Qué es una puntuación bruta ajustada?",
        answer: "La puntuación bruta ajustada es tu total de golpes con un máximo aplicado a cualquier hoyo bajo la regla de doble bogey neto, que limita los hoyos desastrosos para que uno solo no distorsione tu hándicap. Para fines de hándicap usas esta cifra ajustada en lugar de tu total bruto. Aplicar el límite mantiene los diferenciales representativos de tu capacidad típica en lugar de sesgados por un hoyo ocasional muy alto.",
      },
      {
        question: "¿Cuántas rondas necesito para un hándicap oficial?",
        answer: "Bajo el sistema mundial de hándicap, un índice de hándicap se calcula a partir del promedio de tus mejores ocho diferenciales de tus veinte puntuaciones más recientes. Puedes obtener un índice inicial tras registrar tan solo tres rondas de dieciocho hoyos, con ajustes aplicados mientras tengas menos puntuaciones. Esta calculadora te da el diferencial de una sola ronda, y reunir varios te permite estimar dónde se asentará tu índice.",
      },
    ],
  },
  {
    id: "points-per-game",
    slug: "points-per-game-calculator",
    category: "Sports",
    categorySlug: "sports",
    title: "Points Per Game Calculator",
    shortDescription: "Work out a scoring average across games.",
    seoTitle: "Points Per Game Calculator — Scoring Average (PPG)",
    metaDescription:
      "Free points per game calculator. Enter total points scored and the number of games played to find the scoring average, PPG, used across basketball and more.",
    primaryKeyword: "points per game calculator",
    secondaryKeywords: ["ppg calculator", "scoring average calculator", "points average calculator"],
    fields: [
      { id: "totalPoints", label: "Total points", type: "number", unit: "pts", required: true, span: 1, min: 0 },
      { id: "games", label: "Games played", type: "number", unit: "games", required: true, span: 1, min: 1 },
    ],
    results: [
      { id: "ppg", label: "Points per game", format: "number", decimals: 1, unit: "ppg", isPrimary: true },
    ],
    formula: "PPG = total points ÷ games played",
    formulaExplanation: "Points per game is a simple average: the total points a player or team has scored divided by the number of games in which those points were scored. Dividing the cumulative total by the count of games spreads the scoring evenly across them, producing a per-game rate that describes typical output. Because it is a mean, a few unusually high or low games pull the figure toward them, so more games give a steadier, more representative average.",
    explanation: "Points per game, universally shortened to PPG, is the most common way to express a scorer's output, and this points per game calculator produces it from two numbers. Enter the total points scored and the number of games played, and the tool returns the scoring average.\n\nPPG matters because raw point totals are hard to compare when players or teams have played different numbers of games. A player with 500 points in 20 games is scoring far more prolifically than one with 500 points in 40 games, and dividing by games makes that difference obvious. Coaches, fantasy sports players, analysts, and fans all lean on PPG to rank scorers, project season totals, and judge form, since a per-game rate stays meaningful whether the season is a quarter or fully played.\n\nThe calculation is a plain arithmetic mean, but its simplicity is its strength: it is transparent, easy to update after each game, and directly comparable across players and eras. Bear in mind that as an average it can be skewed by a small number of extreme games early in a season, and that it says nothing about efficiency, minutes played, or defensive contribution. Used alongside other statistics, though, PPG remains a quick, reliable summary of scoring, and this calculator lets you compute or project it for any player, team, or sport that counts points.",
    example: { inputs: { totalPoints: 250, games: 10 }, explanation: "250 points ÷ 10 games = 25.0 points per game." },
    faqs: [
      {
        question: "What does points per game measure?",
        answer: "Points per game measures the average number of points a player or team scores in each game over a span of games. It converts a cumulative total into a per-game rate, which makes scoring comparable regardless of how many games have been played. It is a headline statistic in basketball and many other sports, offering a quick sense of scoring output, though it does not capture efficiency or other contributions.",
      },
      {
        question: "How do I project a full-season total from PPG?",
        answer: "Multiply the points-per-game figure by the number of games remaining or by the full season length. For example, a player averaging 25 points per game over an 82-game season projects to 2,050 points if the pace holds. This is a straightforward projection that assumes consistent scoring, so treat it as an estimate; injuries, form changes, and tougher opponents can move the real total in either direction.",
      },
      {
        question: "Is a higher PPG always better?",
        answer: "Higher PPG shows greater scoring output, but it does not tell the whole story. A player might score many points inefficiently, taking a large number of shots, or by playing heavy minutes. Assists, rebounds, defence, and shooting percentages all matter too. PPG is a useful headline number for comparing scorers, but it is best read alongside efficiency and role statistics rather than treated as a complete measure of value.",
      },
      {
        question: "Why can early-season PPG be misleading?",
        answer: "Because points per game is an average, a small number of games gives it little to smooth over, so one exceptional or poor game moves it sharply. A player who erupts for 50 points in the opener shows an inflated average until more games dilute it. As the sample grows, the figure stabilises and becomes more representative, which is why early-season averages should be read with caution.",
      },
      {
        question: "Can I use this for teams as well as players?",
        answer: "Yes. The calculation works identically for a team: enter the team's total points scored and the number of games played to get the team's scoring average per game. This is useful for comparing offences across a league or tracking a team's scoring form over a stretch of games. The same method also applies to points allowed, giving a defensive points-per-game figure when you use points conceded.",
      },
    ],
    relatedCalculators: ["one-rep-max-calculator", "vo2-max-calculator", "calorie-burn-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Arithmetic mean (points ÷ games)",
    slugEs: "calculadora-de-puntos-por-partido",
    titleEs: "Calculadora de Puntos por Partido",
    shortDescriptionEs: "Calcula un promedio de anotación a lo largo de los partidos.",
    seoTitleEs: "Calculadora de Puntos por Partido — Promedio de Anotación (PPP)",
    metaDescriptionEs:
      "Calculadora de puntos por partido gratuita. Introduce los puntos totales anotados y el número de partidos jugados para hallar el promedio de anotación, usado en baloncesto y más.",
    primaryKeywordEs: "calculadora de puntos por partido",
    secondaryKeywordsEs: ["calculadora de ppp", "calculadora de promedio de anotación", "calculadora de promedio de puntos"],
    formulaExplanationEs: "Los puntos por partido son un promedio simple: el total de puntos que un jugador o equipo ha anotado dividido entre el número de partidos en los que se anotaron esos puntos. Dividir el total acumulado entre la cantidad de partidos reparte la anotación de forma pareja entre ellos, produciendo una tasa por partido que describe la producción típica. Como es una media, unos pocos partidos inusualmente altos o bajos la arrastran hacia ellos, así que más partidos dan un promedio más estable y representativo.",
    explanationEs: "Los puntos por partido, abreviados universalmente como PPP, son la forma más común de expresar la producción de un anotador, y esta calculadora de puntos por partido los produce a partir de dos números. Introduce los puntos totales anotados y el número de partidos jugados, y la herramienta devuelve el promedio de anotación.\n\nLos PPP importan porque los totales brutos de puntos son difíciles de comparar cuando jugadores o equipos han jugado distinto número de partidos. Un jugador con 500 puntos en 20 partidos anota mucho más prolíficamente que uno con 500 puntos en 40 partidos, y dividir entre partidos hace evidente esa diferencia. Entrenadores, jugadores de fantasía, analistas y aficionados se apoyan todos en los PPP para clasificar anotadores, proyectar totales de temporada y juzgar la forma, ya que una tasa por partido sigue siendo significativa tanto si la temporada va por un cuarto como si está completa.\n\nEl cálculo es una simple media aritmética, pero su sencillez es su fuerza: es transparente, fácil de actualizar tras cada partido y directamente comparable entre jugadores y épocas. Ten en cuenta que, como promedio, puede sesgarse por un pequeño número de partidos extremos al inicio de una temporada, y que no dice nada sobre la eficiencia, los minutos jugados o la contribución defensiva. Usados junto a otras estadísticas, sin embargo, los PPP siguen siendo un resumen rápido y fiable de la anotación, y esta calculadora te permite calcularlos o proyectarlos para cualquier jugador, equipo o deporte que cuente puntos.",
    exampleEs: { inputs: { totalPoints: 250, games: 10 }, explanation: "250 puntos ÷ 10 partidos = 25,0 puntos por partido." },
    faqsEs: [
      {
        question: "¿Qué miden los puntos por partido?",
        answer: "Los puntos por partido miden el número promedio de puntos que un jugador o equipo anota en cada partido a lo largo de un tramo de partidos. Convierten un total acumulado en una tasa por partido, lo que hace la anotación comparable independientemente de cuántos partidos se hayan jugado. Es una estadística destacada en el baloncesto y muchos otros deportes, ofreciendo una idea rápida de la producción anotadora, aunque no capta la eficiencia ni otras contribuciones.",
      },
      {
        question: "¿Cómo proyecto un total de temporada completa a partir de los PPP?",
        answer: "Multiplica la cifra de puntos por partido por el número de partidos restantes o por la duración completa de la temporada. Por ejemplo, un jugador que promedia 25 puntos por partido en una temporada de 82 partidos proyecta 2.050 puntos si mantiene el ritmo. Es una proyección directa que supone una anotación constante, así que trátala como una estimación; lesiones, cambios de forma y rivales más duros pueden mover el total real en cualquier dirección.",
      },
      {
        question: "¿Un PPP más alto es siempre mejor?",
        answer: "Un PPP más alto muestra mayor producción anotadora, pero no cuenta toda la historia. Un jugador podría anotar muchos puntos de forma ineficiente, tomando muchos tiros, o jugando muchos minutos. Asistencias, rebotes, defensa y porcentajes de tiro también importan. Los PPP son un número destacado útil para comparar anotadores, pero es mejor leerlos junto a estadísticas de eficiencia y rol que tratarlos como una medida completa de valor.",
      },
      {
        question: "¿Por qué los PPP de inicio de temporada pueden engañar?",
        answer: "Como los puntos por partido son un promedio, un pequeño número de partidos le da poco que suavizar, así que un partido excepcional o malo lo mueve bruscamente. Un jugador que estalla con 50 puntos en el estreno muestra un promedio inflado hasta que más partidos lo diluyen. A medida que crece la muestra, la cifra se estabiliza y se vuelve más representativa, razón por la que los promedios de inicio de temporada deben leerse con cautela.",
      },
      {
        question: "¿Puedo usar esto para equipos además de jugadores?",
        answer: "Sí. El cálculo funciona idénticamente para un equipo: introduce los puntos totales anotados por el equipo y el número de partidos jugados para obtener el promedio de anotación por partido del equipo. Esto es útil para comparar ataques entre una liga o seguir la forma anotadora de un equipo durante un tramo de partidos. El mismo método también se aplica a los puntos permitidos, dando una cifra defensiva de puntos por partido cuando usas los puntos concedidos.",
      },
    ],
  },
  {
    id: "batting-average",
    slug: "batting-average-calculator",
    category: "Sports",
    categorySlug: "sports",
    title: "Batting Average Calculator",
    shortDescription: "Compute a baseball batting average.",
    seoTitle: "Batting Average Calculator — Hits Divided by At-Bats",
    metaDescription:
      "Free batting average calculator. Enter hits and at-bats to find a baseball batting average, shown to three decimal places as in official statistics.",
    primaryKeyword: "batting average calculator",
    secondaryKeywords: ["baseball batting average calculator", "avg calculator baseball", "hits divided by at bats"],
    fields: [
      { id: "hits", label: "Hits", type: "number", unit: "hits", required: true, span: 1, min: 0 },
      { id: "atBats", label: "At-bats", type: "number", unit: "AB", required: true, span: 1, min: 1 },
    ],
    results: [
      { id: "battingAverage", label: "Batting average", format: "number", decimals: 3, isPrimary: true },
    ],
    formula: "batting average = hits ÷ at-bats",
    formulaExplanation: "Batting average is the proportion of at-bats that result in a hit, so it is simply hits divided by at-bats. The result is a decimal between zero and one, conventionally written to three places, such as .300, and read as a rate of success at the plate. Walks, hit-by-pitches, and sacrifices are excluded from at-bats, so the figure reflects only plate appearances that count as genuine opportunities to record a hit.",
    explanation: "Batting average is the oldest and most recognised measure of a hitter's success in baseball, and this batting average calculator computes it from the two numbers that define it. Enter the number of hits and the number of at-bats, and the tool returns the average to three decimal places, exactly as it appears in official statistics.\n\nThe statistic expresses how often a batter gets a hit per official at-bat, giving a clean rate between zero and one. A .300 average, meaning a hit in three of every ten at-bats, has long marked an excellent hitter, while .200, known as the Mendoza line, marks the threshold of struggle. Because it standardises hits against opportunities, batting average lets you compare players with very different numbers of plate appearances and track a hitter's form across a season.\n\nThe calculation is a straightforward division, but the definition of an at-bat is what gives it meaning. At-bats exclude walks, hit-by-pitches, sacrifice bunts, and sacrifice flies, so the denominator counts only the plate appearances that offered a real chance to record a hit. That is why a patient hitter who draws many walks can post a strong average without those walks helping or hurting it. Fans, fantasy players, coaches, and young players learning the game can all use this calculator to compute an average for any span, from a single game to a full career, and see the familiar three-decimal figure instantly.",
    example: { inputs: { hits: 150, atBats: 500 }, explanation: "150 hits ÷ 500 at-bats = 0.300, written .300 — the classic mark of an excellent hitter." },
    faqs: [
      {
        question: "What counts as an at-bat?",
        answer: "An at-bat is a plate appearance that ends with a hit, an out from the batter putting the ball in play or striking out, or reaching on an error or fielder's choice. It excludes walks, hit-by-pitches, sacrifice bunts, sacrifice flies, and catcher's interference, which are plate appearances but not at-bats. This distinction matters because batting average uses at-bats as its denominator, so those excluded events neither help nor hurt the average.",
      },
      {
        question: "Why is batting average shown to three decimals?",
        answer: "Baseball convention expresses batting average as a decimal to three places, such as .285, and reads it as if multiplied by a thousand, so .285 is spoken as two eighty-five. The three-decimal format gives enough precision to separate players whose averages are very close, which matters over a long season where tiny differences distinguish a batting title. This calculator follows that standard so the figure looks like an official statistic.",
      },
      {
        question: "What is a good batting average?",
        answer: "In modern baseball, a batting average around .300 is considered excellent, .250 to .270 is roughly average for a regular player, and dipping toward .200, the so-called Mendoza line, signals a struggling hitter. Elite seasons occasionally reach .350 or higher. Standards shift with era and league conditions, so context matters, but .300 has remained a widely recognised benchmark of a strong, reliable hitter for over a century.",
      },
      {
        question: "Does batting average include walks?",
        answer: "No. Walks are not counted as at-bats, so they do not appear in either the numerator or the denominator of batting average and have no effect on it. This is why a hitter with a keen eye who draws many walks can have a modest average yet still be very valuable, since walks reach base without registering as hits. On-base percentage, a separate statistic, does credit walks.",
      },
      {
        question: "How does batting average differ from on-base percentage?",
        answer: "Batting average counts only hits divided by at-bats, while on-base percentage counts hits, walks, and hit-by-pitches divided by total plate appearances, measuring how often a batter reaches base by any means. On-base percentage is generally considered a better indicator of offensive value because it rewards drawing walks. Batting average remains popular for its history and simplicity, but analysts often pair it with on-base and slugging figures.",
      },
    ],
    relatedCalculators: ["one-rep-max-calculator", "vo2-max-calculator", "calorie-burn-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard baseball batting average (hits ÷ at-bats)",
    slugEs: "calculadora-de-promedio-de-bateo",
    titleEs: "Calculadora de Promedio de Bateo",
    shortDescriptionEs: "Calcula un promedio de bateo de béisbol.",
    seoTitleEs: "Calculadora de Promedio de Bateo — Hits Divididos entre Turnos al Bate",
    metaDescriptionEs:
      "Calculadora de promedio de bateo gratuita. Introduce los hits y los turnos al bate para hallar un promedio de bateo de béisbol, mostrado a tres decimales como en las estadísticas oficiales.",
    primaryKeywordEs: "calculadora de promedio de bateo",
    secondaryKeywordsEs: ["calculadora de promedio de bateo de béisbol", "calculadora de avg de béisbol", "hits divididos entre turnos al bate"],
    formulaExplanationEs: "El promedio de bateo es la proporción de turnos al bate que resultan en un hit, así que es simplemente los hits divididos entre los turnos al bate. El resultado es un decimal entre cero y uno, convencionalmente escrito a tres cifras, como .300, y leído como una tasa de éxito en el plato. Las bases por bolas, los golpes por lanzamiento y los sacrificios se excluyen de los turnos al bate, así que la cifra refleja solo las apariciones al plato que cuentan como oportunidades genuinas de registrar un hit.",
    explanationEs: "El promedio de bateo es la medida más antigua y reconocida del éxito de un bateador en el béisbol, y esta calculadora de promedio de bateo lo calcula a partir de los dos números que lo definen. Introduce el número de hits y el número de turnos al bate, y la herramienta devuelve el promedio a tres decimales, exactamente como aparece en las estadísticas oficiales.\n\nLa estadística expresa con qué frecuencia un bateador consigue un hit por turno oficial al bate, dando una tasa limpia entre cero y uno. Un promedio de .300, que significa un hit en tres de cada diez turnos al bate, ha marcado durante mucho tiempo a un excelente bateador, mientras que .200, conocido como la línea de Mendoza, marca el umbral de la dificultad. Como estandariza los hits frente a las oportunidades, el promedio de bateo permite comparar jugadores con números muy distintos de apariciones al plato y seguir la forma de un bateador a lo largo de una temporada.\n\nEl cálculo es una división directa, pero la definición de un turno al bate es lo que le da sentido. Los turnos al bate excluyen las bases por bolas, los golpes por lanzamiento, los toques de sacrificio y los elevados de sacrificio, así que el denominador cuenta solo las apariciones al plato que ofrecieron una oportunidad real de registrar un hit. Por eso un bateador paciente que consigue muchas bases por bolas puede tener un buen promedio sin que esas bases lo ayuden ni lo perjudiquen. Aficionados, jugadores de fantasía, entrenadores y jóvenes que aprenden el juego pueden usar esta calculadora para calcular un promedio de cualquier periodo, desde un solo partido hasta una carrera entera, y ver la familiar cifra de tres decimales al instante.",
    exampleEs: { inputs: { hits: 150, atBats: 500 }, explanation: "150 hits ÷ 500 turnos al bate = 0,300, escrito .300 — la marca clásica de un excelente bateador." },
    faqsEs: [
      {
        question: "¿Qué cuenta como turno al bate?",
        answer: "Un turno al bate es una aparición al plato que termina con un hit, un out por el bateador poniendo la bola en juego o ponchándose, o alcanzando base por un error o una jugada de selección. Excluye las bases por bolas, los golpes por lanzamiento, los toques de sacrificio, los elevados de sacrificio y la interferencia del receptor, que son apariciones al plato pero no turnos al bate. Esta distinción importa porque el promedio de bateo usa los turnos al bate como denominador.",
      },
      {
        question: "¿Por qué se muestra el promedio de bateo a tres decimales?",
        answer: "La convención del béisbol expresa el promedio de bateo como un decimal a tres cifras, como .285, y lo lee como si se multiplicara por mil, así que .285 se dice dos ochenta y cinco. El formato de tres decimales da suficiente precisión para separar a jugadores cuyos promedios están muy cerca, lo que importa en una larga temporada donde diferencias diminutas distinguen un título de bateo. Esta calculadora sigue ese estándar para que la cifra parezca una estadística oficial.",
      },
      {
        question: "¿Qué es un buen promedio de bateo?",
        answer: "En el béisbol moderno, un promedio de bateo de alrededor de .300 se considera excelente, de .250 a .270 es más o menos el promedio de un jugador regular, y bajar hacia .200, la llamada línea de Mendoza, señala a un bateador en apuros. Las temporadas de élite alcanzan ocasionalmente .350 o más. Los estándares cambian con la época y las condiciones de la liga, así que el contexto importa, pero .300 ha seguido siendo un punto de referencia reconocido de un bateador fuerte y fiable durante más de un siglo.",
      },
      {
        question: "¿El promedio de bateo incluye las bases por bolas?",
        answer: "No. Las bases por bolas no se cuentan como turnos al bate, así que no aparecen ni en el numerador ni en el denominador del promedio de bateo y no tienen efecto sobre él. Por eso un bateador con buen ojo que consigue muchas bases por bolas puede tener un promedio modesto y aun así ser muy valioso, ya que las bases por bolas alcanzan base sin registrarse como hits. El porcentaje de embasado, una estadística aparte, sí acredita las bases por bolas.",
      },
      {
        question: "¿En qué se diferencia el promedio de bateo del porcentaje de embasado?",
        answer: "El promedio de bateo cuenta solo los hits divididos entre los turnos al bate, mientras que el porcentaje de embasado cuenta hits, bases por bolas y golpes por lanzamiento divididos entre las apariciones totales al plato, midiendo con qué frecuencia un bateador alcanza base por cualquier medio. El porcentaje de embasado se considera generalmente un mejor indicador del valor ofensivo porque premia conseguir bases por bolas. El promedio de bateo sigue siendo popular por su historia y sencillez, pero los analistas suelen combinarlo con las cifras de embasado y slugging.",
      },
    ],
  },
  {
    id: "elo-rating",
    slug: "elo-rating-calculator",
    category: "Sports",
    categorySlug: "sports",
    title: "Elo Rating Calculator",
    shortDescription: "Update a player's Elo after a match.",
    seoTitle: "Elo Rating Calculator — New Rating After a Game",
    metaDescription:
      "Free Elo rating calculator. Enter your rating, your opponent's rating, the result, and the K-factor to find your new Elo rating and the points gained or lost.",
    primaryKeyword: "elo rating calculator",
    secondaryKeywords: ["elo calculator", "chess rating calculator", "elo change calculator"],
    fields: [
      { id: "playerRating", label: "Your rating", type: "number", required: true, span: 1, min: 0 },
      { id: "opponentRating", label: "Opponent rating", type: "number", required: true, span: 1, min: 0 },
      {
        id: "result",
        label: "Result",
        type: "select",
        required: true,
        span: 1,
        options: [
          { value: "1", label: "Win" },
          { value: "0.5", label: "Draw" },
          { value: "0", label: "Loss" },
        ],
      },
      { id: "kFactor", label: "K-factor", type: "number", required: false, span: 1, min: 1, defaultValue: 32 },
    ],
    results: [
      { id: "newRating", label: "New rating", format: "number", decimals: 0, isPrimary: true },
      { id: "ratingChange", label: "Rating change", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "new rating = rating + K × (result − expected);  expected = 1 ÷ (1 + 10^((opp − rating) ÷ 400))",
    formulaExplanation: "The Elo system first predicts your expected score against an opponent from the rating gap, using a logistic curve where a 400-point advantage means roughly a ten-to-one favourite. Your expected score sits between zero and one. After the game, your rating moves by the K-factor multiplied by the difference between your actual result and that expectation. Beating a stronger player, where you were expected to lose, gains many points; beating a weaker one, as expected, gains few.",
    explanation: "The Elo rating system, invented for chess and now used across countless games and sports, updates a player's rating after each match based on the result and the strength of the opponent. This Elo rating calculator performs that update. Enter your current rating, your opponent's rating, whether you won, drew, or lost, and the K-factor, and it returns your new rating and the points you gained or lost.\n\nElo's elegance is that it rewards results in proportion to how surprising they are. Before the game, the system calculates your expected score from the rating difference: if you far outrate your opponent, you are expected to win comfortably, so beating them earns only a few points, while losing costs many. Upset a much stronger player and you gain a large chunk of rating. This self-correcting mechanism means ratings converge over time on a fair measure of skill, which is why the system underpins chess rankings, online matchmaking, and many sports models.\n\nThe two-step calculation is simple to follow. First, the expected score comes from a logistic formula in which every 400 rating points corresponds to a tenfold change in the odds. Second, your rating shifts by the K-factor times the gap between your actual result and that expectation. The K-factor controls sensitivity: a high value makes ratings move quickly, suiting new or provisional players, while a low value keeps established ratings stable. Players, tournament organisers, and game designers can use this calculator to see exactly how a single result reshapes a rating.",
    example: { inputs: { playerRating: 1600, opponentRating: 1600, result: "1", kFactor: 32 }, explanation: "Expected score = 0.5 against an equal opponent; winning gives 1600 + 32 × (1 − 0.5) = 1616, a gain of 16." },
    faqs: [
      {
        question: "What is the expected score in Elo?",
        answer: "The expected score is the system's prediction of how you should perform against a given opponent, calculated from the difference in ratings and expressed as a number between zero and one. Against an equal opponent it is 0.5; against a much stronger one it is close to zero; against a much weaker one, close to one. Your rating change depends on how your actual result compares to this expectation.",
      },
      {
        question: "What is the K-factor and what value should I use?",
        answer: "The K-factor sets how much a single game can change your rating. A higher K, such as 40, moves ratings quickly and suits new or provisional players still finding their level, while a lower K, such as 10 or 20, keeps established and elite ratings stable. Chess federations commonly use 32 for most players, so 32 is a sensible default here unless your specific system prescribes another value.",
      },
      {
        question: "Why do I gain more points for beating a stronger player?",
        answer: "Because Elo rewards results relative to expectation. When you face a higher-rated opponent, the system expects you to lose, so your expected score is low. Winning produces a large gap between your actual result of one and that low expectation, and multiplying by the K-factor yields a big rating gain. Conversely, beating a much weaker opponent, which was expected, produces a small gap and only a modest gain.",
      },
      {
        question: "How does a 400-point rating difference translate to odds?",
        answer: "In the Elo formula, every 400 rating points corresponds to a tenfold change in the expected odds. A player rated 400 points above another is expected to score about ten times as often, giving an expected score near 0.91. This logarithmic scaling is why the gap between 2000 and 2400 represents a far larger skill difference in practice than the raw 400-point number alone might suggest to a newcomer.",
      },
      {
        question: "Does Elo work for games other than chess?",
        answer: "Yes. Although Arpad Elo designed the system for chess, its logic applies to any head-to-head competition with wins, losses, and draws. Video game matchmaking, tennis and football rating models, board games, and esports ladders all use Elo or close variants. The core idea, adjusting ratings by the difference between actual and expected results, is general, so this calculator works for any two-player contest you can express as a win, draw, or loss.",
      },
    ],
    relatedCalculators: ["one-rep-max-calculator", "vo2-max-calculator", "calorie-burn-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Elo rating system (Arpad Elo)",
    slugEs: "calculadora-de-puntuacion-elo",
    titleEs: "Calculadora de Puntuación Elo",
    shortDescriptionEs: "Actualiza la puntuación Elo de un jugador tras una partida.",
    seoTitleEs: "Calculadora de Puntuación Elo — Nueva Puntuación tras una Partida",
    metaDescriptionEs:
      "Calculadora de puntuación Elo gratuita. Introduce tu puntuación, la de tu oponente, el resultado y el factor K para hallar tu nueva puntuación Elo y los puntos ganados o perdidos.",
    primaryKeywordEs: "calculadora de puntuación elo",
    secondaryKeywordsEs: ["calculadora de elo", "calculadora de puntuación de ajedrez", "calculadora de cambio de elo"],
    formulaExplanationEs: "El sistema Elo predice primero tu puntuación esperada frente a un oponente a partir de la diferencia de puntuación, usando una curva logística donde una ventaja de 400 puntos significa aproximadamente un favorito de diez a uno. Tu puntuación esperada se sitúa entre cero y uno. Tras la partida, tu puntuación se mueve por el factor K multiplicado por la diferencia entre tu resultado real y esa expectativa. Vencer a un jugador más fuerte, cuando se esperaba que perdieras, gana muchos puntos; vencer a uno más débil, como se esperaba, gana pocos.",
    explanationEs: "El sistema de puntuación Elo, inventado para el ajedrez y ahora usado en innumerables juegos y deportes, actualiza la puntuación de un jugador tras cada partida según el resultado y la fuerza del oponente. Esta calculadora de puntuación Elo realiza esa actualización. Introduce tu puntuación actual, la de tu oponente, si ganaste, empataste o perdiste, y el factor K, y devuelve tu nueva puntuación y los puntos que ganaste o perdiste.\n\nLa elegancia del Elo es que premia los resultados en proporción a lo sorprendentes que son. Antes de la partida, el sistema calcula tu puntuación esperada a partir de la diferencia de puntuación: si superas ampliamente a tu oponente, se espera que ganes con comodidad, así que vencerlo gana solo unos pocos puntos, mientras que perder cuesta muchos. Sorprende a un jugador mucho más fuerte y ganarás una gran parte de puntuación. Este mecanismo autocorrector significa que las puntuaciones convergen con el tiempo en una medida justa de la habilidad, razón por la que el sistema sustenta las clasificaciones de ajedrez, el emparejamiento en línea y muchos modelos deportivos.\n\nEl cálculo de dos pasos es sencillo de seguir. Primero, la puntuación esperada proviene de una fórmula logística en la que cada 400 puntos de puntuación corresponden a un cambio de diez veces en las probabilidades. Segundo, tu puntuación se desplaza por el factor K por la diferencia entre tu resultado real y esa expectativa. El factor K controla la sensibilidad: un valor alto hace que las puntuaciones se muevan rápido, adecuado para jugadores nuevos o provisionales, mientras que un valor bajo mantiene estables las puntuaciones establecidas. Jugadores, organizadores de torneos y diseñadores de juegos pueden usar esta calculadora para ver exactamente cómo un solo resultado reconfigura una puntuación.",
    exampleEs: { inputs: { playerRating: 1600, opponentRating: 1600, result: "1", kFactor: 32 }, explanation: "Puntuación esperada = 0,5 contra un oponente igual; ganar da 1600 + 32 × (1 − 0,5) = 1616, una ganancia de 16." },
    faqsEs: [
      {
        question: "¿Qué es la puntuación esperada en Elo?",
        answer: "La puntuación esperada es la predicción del sistema de cómo deberías rendir frente a un oponente dado, calculada a partir de la diferencia de puntuaciones y expresada como un número entre cero y uno. Contra un oponente igual es 0,5; contra uno mucho más fuerte es cercana a cero; contra uno mucho más débil, cercana a uno. Tu cambio de puntuación depende de cómo se compara tu resultado real con esta expectativa.",
      },
      {
        question: "¿Qué es el factor K y qué valor debo usar?",
        answer: "El factor K establece cuánto puede cambiar una sola partida tu puntuación. Un K más alto, como 40, mueve las puntuaciones rápido y conviene a jugadores nuevos o provisionales que aún encuentran su nivel, mientras que un K más bajo, como 10 o 20, mantiene estables las puntuaciones establecidas y de élite. Las federaciones de ajedrez usan comúnmente 32 para la mayoría de jugadores, así que 32 es un valor por defecto sensato aquí a menos que tu sistema específico prescriba otro.",
      },
      {
        question: "¿Por qué gano más puntos por vencer a un jugador más fuerte?",
        answer: "Porque el Elo premia los resultados en relación con la expectativa. Cuando te enfrentas a un oponente mejor clasificado, el sistema espera que pierdas, así que tu puntuación esperada es baja. Ganar produce una gran diferencia entre tu resultado real de uno y esa baja expectativa, y multiplicar por el factor K da una gran ganancia de puntuación. Por el contrario, vencer a un oponente mucho más débil, que se esperaba, produce una diferencia pequeña y solo una ganancia modesta.",
      },
      {
        question: "¿Cómo se traduce una diferencia de 400 puntos en probabilidades?",
        answer: "En la fórmula Elo, cada 400 puntos de puntuación corresponden a un cambio de diez veces en las probabilidades esperadas. Se espera que un jugador clasificado 400 puntos por encima de otro puntúe unas diez veces más a menudo, dando una puntuación esperada cercana a 0,91. Esta escala logarítmica es la razón por la que la diferencia entre 2000 y 2400 representa en la práctica una diferencia de habilidad mucho mayor de lo que el número bruto de 400 puntos podría sugerir a un principiante.",
      },
      {
        question: "¿Funciona el Elo para juegos distintos del ajedrez?",
        answer: "Sí. Aunque Arpad Elo diseñó el sistema para el ajedrez, su lógica se aplica a cualquier competición individual con victorias, derrotas y empates. El emparejamiento en videojuegos, los modelos de puntuación de tenis y fútbol, los juegos de mesa y las escaleras de esports usan todos el Elo o variantes cercanas. La idea central, ajustar las puntuaciones por la diferencia entre resultados reales y esperados, es general, así que esta calculadora funciona para cualquier enfrentamiento de dos jugadores que puedas expresar como victoria, empate o derrota.",
      },
    ],
  },
];
