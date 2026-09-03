import type { CalculatorDefinition } from "../types";

export const constructionR8Calculators: CalculatorDefinition[] = [
  {
    id: "stair",
    slug: "stair-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Stair Calculator",
    shortDescription: "Work out steps, riser height and total run for a staircase.",
    seoTitle: "Stair Calculator — Steps, Riser Height & Run",
    metaDescription:
      "Free stair calculator. Find the number of steps, the actual riser height and the total run of a staircase from the total rise, target riser and tread depth.",
    primaryKeyword: "stair calculator",
    secondaryKeywords: ["staircase calculator", "how many stairs do i need", "stair riser calculator"],
    slugEs: "calculadora-de-escaleras",
    titleEs: "Calculadora de Escaleras",
    shortDescriptionEs: "Calcula los peldaños, la altura de la contrahuella y la longitud total de una escalera.",
    seoTitleEs: "Calculadora de Escaleras — Peldaños, Contrahuella y Huella",
    metaDescriptionEs:
      "Calculadora de escaleras gratuita. Calcula el número de peldaños, la altura real de la contrahuella y la longitud total de una escalera a partir de la altura total, la contrahuella objetivo y la profundidad de la huella.",
    primaryKeywordEs: "calculadora de escaleras",
    secondaryKeywordsEs: ["calculadora de peldaños", "cuántos escalones necesito", "calculadora de contrahuella"],
    formulaExplanationEs:
      "La altura total es la distancia vertical fija que la escalera debe salvar, por lo que dividirla entre la altura objetivo de la contrahuella indica aproximadamente cuántos peldaños se necesitan, y redondear hacia arriba garantiza que las contrahuellas resulten un poco más bajas que el objetivo. Dividir la altura total entre ese número entero de peldaños da la altura real de la contrahuella, idéntica en cada escalón porque las normas exigen contrahuellas uniformes. La longitud total usa una huella menos que el número de peldaños, ya que el último escalón desemboca en el piso superior.",
    explanationEs:
      "Una calculadora de escaleras convierte la única medida que no puedes cambiar — la altura total de un piso terminado al siguiente — en una escalera construible, determinando cuántos peldaños necesita, qué altura tendrá cada contrahuella y cuánto espacio horizontal ocupará el tramo. Introduces la altura total más tu altura de contrahuella y profundidad de huella preferidas, y la herramienta divide la altura entre la contrahuella objetivo y redondea hacia arriba a un número entero de peldaños, porque solo se pueden construir contrahuellas completas. Luego reparte la altura total de forma uniforme entre esos peldaños para hallar la altura real de la contrahuella, que casi siempre difiere ligeramente de tu objetivo y, crucialmente, es la misma en cada escalón: las contrahuellas desiguales son un grave riesgo de tropiezo y están prohibidas por las normas de construcción, que suelen permitir solo una pequeña variación entre la contrahuella más alta y la más baja del tramo. La longitud total te dice si la escalera cabrá en el espacio disponible, usando una huella menos que peldaños porque el escalón final es el piso superior. Las escaleras cómodas equilibran contrahuella y huella para que la subida se sienta natural. Carpinteros, constructores de terrazas y remodeladores lo usan para trazar una zanca antes de cortar. Confirma siempre los límites de contrahuella, huella y altura libre según tu código de construcción local.",
    exampleEs: {
      inputs: { totalRiseIn: 45, riserHeightIn: 7.5, treadDepthIn: 10 },
      explanation: "45 ÷ 7.5 = 6 peldaños; contrahuella real = 45 ÷ 6 = 7.5 in; longitud total = (6 − 1) × 10 = 50 in.",
    },
    faqsEs: [
      { question: "¿Cuál es una altura cómoda de contrahuella?", answer: "La mayoría de las normas limitan las contrahuellas a unas 7.75 pulgadas, y una subida cómoda y fácil suele estar entre 7 y 7.5 pulgadas. Las contrahuellas más altas hacen una escalera más empinada y cansada, mientras que las muy bajas alargan el recorrido y ocupan más espacio de suelo. Esta calculadora te permite fijar una contrahuella objetivo y luego informa la altura real una vez repartida la subida en peldaños enteros." },
      { question: "¿Por qué deben ser iguales todas las contrahuellas?", answer: "Las personas suben escaleras por instinto, esperando que cada escalón sea idéntico, así que una contrahuella más alta o más baja que las demás es causa común de tropiezos y caídas. Las normas de construcción reflejan esto permitiendo solo una pequeña variación, a menudo tres octavos de pulgada, entre la contrahuella más grande y la más pequeña del tramo. Por eso la calculadora divide la altura total de forma uniforme entre todos los peldaños en lugar de dejar un escalón desigual arriba." },
      { question: "¿En qué se diferencia la longitud total de la altura total?", answer: "La altura total es la altura vertical que sube la escalera, medida de piso a piso, mientras que la longitud total es la distancia horizontal que recorre desde el peldaño inferior hasta el superior. La longitud depende de la profundidad de la huella y del número de huellas, usando una huella menos que peldaños porque el escalón superior es el descanso. Comprobar la longitud pronto te dice si la escalera realmente cabrá en el espacio disponible." },
      { question: "¿Qué profundidad de huella debo usar?", answer: "La profundidad de la huella, la superficie de paso de delante hacia atrás, suele rondar las 10 a 11 pulgadas, con normas que fijan un mínimo cercano a 10 pulgadas para la parte donde pisas. Las huellas más profundas se sienten más seguras y cómodas pero alargan la longitud total y exigen más espacio de suelo. Combina la profundidad de la huella y la altura de la contrahuella para que la escalera no sea ni muy empinada ni muy tendida, y confirma ambas con tu código local." },
      { question: "¿Sustituye esta calculadora a las normas de construcción locales?", answer: "No. Es una herramienta de planificación que te da un punto de partida sólido para peldaños, altura de contrahuella y longitud, pero las cifras legalmente vinculantes provienen de tu código de construcción local y de cualquier inspector. Las normas regulan la contrahuella máxima, la huella mínima, la altura libre mínima, los requisitos de barandilla y el borde, y varían según la jurisdicción. Usa este resultado para diseñar y comprobar la viabilidad, luego verifica cada dimensión con el código aplicable." },
    ],
    fields: [
      { id: "totalRiseIn", label: "Total rise", type: "number", unit: "in", placeholder: "45", required: true, span: 2, min: 0, step: 0.1, helpText: "Vertical height from finished floor to finished floor." },
      { id: "riserHeightIn", label: "Target riser height", type: "number", unit: "in", placeholder: "7.5", required: false, span: 1, min: 1, step: 0.1, defaultValue: 7.5 },
      { id: "treadDepthIn", label: "Tread depth", type: "number", unit: "in", placeholder: "10", required: false, span: 1, min: 1, step: 0.1, defaultValue: 10 },
    ],
    results: [
      { id: "numberOfSteps", label: "Number of steps", format: "number", decimals: 0, unit: "steps", isPrimary: true },
      { id: "actualRiserHeightIn", label: "Actual riser height", format: "number", decimals: 2, unit: "in", isPrimary: false, description: "Total rise shared evenly across the steps" },
      { id: "totalRunIn", label: "Total run", format: "number", decimals: 1, unit: "in", isPrimary: false, description: "Horizontal length of the stair" },
    ],
    formula: "Steps = ⌈total rise ÷ target riser⌉; actual riser = total rise ÷ steps; total run = (steps − 1) × tread depth",
    formulaExplanation:
      "The total rise is the fixed vertical distance the stair must climb, so dividing it by your target riser height gives roughly how many steps are needed, and rounding up ensures the risers end up a little shorter rather than taller than the target. Dividing the total rise by that whole number of steps gives the actual riser height, which is identical for every step because building codes require uniform risers. The total run uses one fewer tread than there are steps, since the top step lands on the upper floor and needs no tread of its own, multiplied by the tread depth.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A stair calculator turns the one measurement you cannot change — the total rise from one finished floor to the next — into a buildable staircase by working out how many steps it needs, how tall each riser will be, and how much horizontal room the flight will occupy. You enter the total rise plus your preferred riser height and tread depth, and the tool divides the rise by the target riser and rounds up to a whole number of steps, because you can only build complete risers. It then shares the total rise evenly across those steps to find the actual riser height, which almost always differs slightly from your target and, crucially, is the same for every step: uneven risers are a serious trip hazard and are prohibited by building codes, which typically allow only a small variation between the tallest and shortest riser in a flight. The total run tells you whether the stair will fit the space you have, using one fewer tread than steps because the final step is the upper floor itself. Comfortable stairs balance riser and tread so the climb feels natural, often checked against a rule such as two risers plus one tread landing near 25 inches. Carpenters, deck builders and remodelers use this to lay out a stringer before cutting, and homeowners use it to see whether a staircase will fit. Always confirm riser, tread and headroom limits against your local building code.",
    example: {
      inputs: { totalRiseIn: 45, riserHeightIn: 7.5, treadDepthIn: 10 },
      explanation: "45 ÷ 7.5 = 6 steps; actual riser = 45 ÷ 6 = 7.5 in; total run = (6 − 1) × 10 = 50 in.",
    },
    faqs: [
      { question: "What is a comfortable stair riser height?", answer: "Most codes cap risers around 7.75 inches, and a comfortable, easy climb usually falls between 7 and 7.5 inches. Taller risers make a steeper, more tiring stair, while very short risers stretch the run and take more floor space. This calculator lets you set a target riser, then reports the actual height once the rise is divided into whole steps, so you can adjust until it feels right." },
      { question: "Why must all the risers be the same height?", answer: "People climb stairs by feel, expecting every step to be identical, so a single riser that is taller or shorter than the rest is a common cause of trips and falls. Building codes reflect this by allowing only a small variation, often three-eighths of an inch, between the largest and smallest riser in a flight. That is why the calculator divides the total rise evenly across all the steps rather than leaving an odd step at the top." },
      { question: "How is the total run different from the total rise?", answer: "The total rise is the vertical height the stair climbs, measured floor to floor, while the total run is the horizontal distance it covers from the bottom step to the top. Run depends on tread depth and the number of treads, using one fewer tread than steps because the top step is the landing. Checking the run early tells you whether the staircase will actually fit the available floor space." },
      { question: "What tread depth should I use?", answer: "Tread depth, the front-to-back walking surface, is commonly around 10 to 11 inches, with codes setting a minimum near 10 inches for the part you step on. Deeper treads feel safer and more comfortable but lengthen the total run and demand more floor space. Pair tread depth and riser height together so the stair is neither too steep nor too shallow, and confirm both against your local code." },
      { question: "Does this calculator replace local building codes?", answer: "No. It is a planning tool that gives you a sound starting layout for steps, riser height and run, but the legally binding figures come from your local building code and any inspector. Codes govern maximum riser, minimum tread, minimum headroom, handrail requirements and nosing, and they vary by jurisdiction. Use this result to design and check feasibility, then verify every dimension against the code that applies to your project." },
    ],
    relatedCalculators: ["concrete-calculator", "flooring-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "wallpaper",
    slug: "wallpaper-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Wallpaper Calculator",
    shortDescription: "Estimate how many rolls of wallpaper a wall needs.",
    seoTitle: "Wallpaper Calculator — Rolls Needed",
    metaDescription:
      "Free wallpaper calculator. Estimate how many rolls of wallpaper you need for a wall from its width and height and the roll's dimensions.",
    primaryKeyword: "wallpaper calculator",
    secondaryKeywords: ["how many rolls of wallpaper do i need", "wallpaper rolls calculator", "wallpaper coverage calculator"],
    slugEs: "calculadora-de-papel-tapiz",
    titleEs: "Calculadora de Papel Tapiz",
    shortDescriptionEs: "Estima cuántos rollos de papel tapiz necesita una pared.",
    seoTitleEs: "Calculadora de Papel Tapiz — Rollos Necesarios",
    metaDescriptionEs:
      "Calculadora de papel tapiz gratuita. Estima cuántos rollos de papel tapiz necesitas para una pared a partir de su ancho y alto y de las dimensiones del rollo.",
    primaryKeywordEs: "calculadora de papel tapiz",
    secondaryKeywordsEs: ["cuántos rollos de papel tapiz necesito", "calculadora de rollos de papel tapiz", "calculadora de cobertura de papel tapiz"],
    formulaExplanationEs:
      "El papel tapiz se cuelga en tiras verticales cortadas de un rollo, así que la estimación trabaja en tiras enteras en lugar de área bruta. Dividir la longitud del rollo entre la altura de la pared y redondear hacia abajo da cuántas tiras de altura completa produce un rollo, descartando el sobrante demasiado corto para llegar al techo. Dividir el ancho de la pared entre el ancho del rollo y redondear hacia arriba da cuántas tiras se necesitan para cubrir la pared de lado a lado. Dividir las tiras necesarias entre las tiras por rollo, redondeando hacia arriba, da el número de rollos enteros a comprar.",
    explanationEs:
      "Una calculadora de papel tapiz estima cuántos rollos necesitas para cubrir una pared, y funciona como realmente lo cuelga un decorador: en tiras verticales de altura completa cortadas de cada rollo. Introduces el ancho y el alto de la pared y el ancho y la longitud del rollo, y la herramienta primero calcula cuántas tiras puede cortar de un rollo dividiendo la longitud del rollo entre la altura de la pared y redondeando hacia abajo, porque cualquier resto más corto que la pared no puede usarse como una caída completa. Luego cuenta cuántas tiras se necesitan para cubrir el ancho de la pared, dividiendo el ancho entre el ancho del rollo y redondeando hacia arriba, y finalmente divide las tiras necesarias entre las tiras por rollo para llegar al número de rollos. Estimar en tiras en lugar de dividir áreas brutas importa porque el recorte que sobra arriba o abajo de cada caída suele desperdiciarse, así que un cálculo simple de área subestima el requerimiento real. Esta estimación no descuenta puertas ni ventanas, lo cual es deliberadamente conservador y ayuda a absorber el papel extra perdido en el emparejamiento de patrones, donde los diseños repetidos obligan a alinear los motivos entre tiras y a recortar más de cada caída. Para un patrón llamativo con una repetición larga, o una pared con muchas aberturas, compra un rollo extra del mismo lote para que los colores coincidan, y revisa el número de lote en cada rollo antes de empezar.",
    exampleEs: {
      inputs: { wallWidthFt: 15, wallHeightFt: 8, rollWidthFt: 1.73, rollLengthFt: 33 },
      explanation: "Tiras por rollo = ⌊33 ÷ 8⌋ = 4; tiras necesarias = ⌈15 ÷ 1.73⌉ = 9; rollos = ⌈9 ÷ 4⌉ = 3.",
    },
    faqsEs: [
      { question: "¿Cuántos rollos de papel tapiz necesito?", answer: "Depende del tamaño de la pared y de las dimensiones del rollo. La calculadora cuenta cuántas tiras de altura completa produce un rollo, luego cuántas tiras cubren el ancho de la pared, y divide una entre la otra. Una pared más alta produce menos tiras por rollo, así que necesita más rollos para el mismo ancho. Introduce el tamaño exacto del rollo impreso en el empaque, ya que los rollos europeos y americanos difieren en ancho y longitud." },
      { question: "¿Debo descontar puertas y ventanas?", answer: "Esta calculadora no las descuenta, lo que mantiene la estimación conservadora y ayuda a cubrir el papel extra perdido en el emparejamiento de patrones y los errores. Para una pared con una sola puerta o ventana, dejarlas es la opción segura. Solo en aberturas muy grandes, como una amplia puerta corrediza o una ventana de suelo a techo, vale la pena reducir el ancho que introduces, e incluso entonces mantén un margen generoso." },
      { question: "¿Cómo afecta la repetición del patrón a cuánto necesito?", answer: "Un patrón repetido debe alinearse entre tiras vecinas, así que recortas desperdicio de la parte superior de cada caída para alinear el motivo. Cuanto más larga sea la repetición, más pierdes por tira y más rollos necesitas. Los papeles lisos o de coincidencia aleatoria desperdician lo menos. Si tu papel tiene una repetición grande, añade un rollo extra más allá de esta estimación y revisa la longitud de repetición en la etiqueta antes de pedir." },
      { question: "¿Por qué comprar rollos del mismo lote?", answer: "El papel tapiz se imprime en tiradas de producción, y el color puede variar sutilmente entre lotes, así que papel de lotes distintos colocado uno al lado del otro puede mostrar una costura visible en el tono. Cada rollo lleva un número de lote; compra todos tus rollos con el mismo número, y compra uno o dos de repuesto al mismo tiempo. Igualar un color después desde un lote distinto es la causa más común de una pared destacada mal emparejada." },
      { question: "¿Varían el ancho y la longitud del rollo entre productos?", answer: "Sí, considerablemente. Un rollo europeo común mide unos 0.53 metros de ancho y 10 metros de largo, aproximadamente 1.73 por 33 pies, mientras que los rollos americanos y los papeles especiales usan tamaños distintos. Como el conteo de tiras depende directamente de estas dimensiones, usar cifras equivocadas desajusta toda la estimación. Lee el ancho y la longitud exactos del empaque del rollo e introdúcelos aquí en lugar de confiar en un valor genérico." },
    ],
    fields: [
      { id: "wallWidthFt", label: "Wall width", type: "number", unit: "ft", placeholder: "15", required: true, span: 1, min: 0, step: 0.01 },
      { id: "wallHeightFt", label: "Wall height", type: "number", unit: "ft", placeholder: "8", required: true, span: 1, min: 0, step: 0.01 },
      { id: "rollWidthFt", label: "Roll width", type: "number", unit: "ft", placeholder: "1.73", required: false, span: 1, min: 0, step: 0.01, defaultValue: 1.73, helpText: "Standard European roll ≈ 1.73 ft (0.53 m)." },
      { id: "rollLengthFt", label: "Roll length", type: "number", unit: "ft", placeholder: "33", required: false, span: 1, min: 0, step: 0.1, defaultValue: 33, helpText: "Standard roll ≈ 33 ft (10 m)." },
    ],
    results: [
      { id: "rollsNeeded", label: "Rolls needed", format: "number", decimals: 0, unit: "rolls", isPrimary: true },
      { id: "stripsNeeded", label: "Strips to hang", format: "number", decimals: 0, unit: "strips", isPrimary: false },
      { id: "stripsPerRoll", label: "Strips per roll", format: "number", decimals: 0, unit: "strips", isPrimary: false },
    ],
    formula: "Strips per roll = ⌊roll length ÷ wall height⌋; strips needed = ⌈wall width ÷ roll width⌉; rolls = ⌈strips needed ÷ strips per roll⌉",
    formulaExplanation:
      "Wallpaper hangs in vertical strips cut from a roll, so the estimate works in whole strips rather than raw area. Dividing the roll length by the wall height and rounding down gives how many full-height strips one roll yields, discarding the leftover that is too short to reach the ceiling. Dividing the wall width by the roll width and rounding up gives how many strips are needed to span the wall side to side, since a partial strip still requires a full-width piece. Dividing the strips needed by the strips each roll provides, and rounding up, gives the number of whole rolls to buy.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A wallpaper calculator estimates how many rolls you need to cover a wall, and it works the way a decorator actually hangs paper: in full-height vertical strips cut from each roll. You enter the wall's width and height and the roll's width and length, and the tool first works out how many strips it can cut from one roll by dividing the roll length by the wall height and rounding down, because any remainder that is shorter than the wall cannot be used as a full drop. It then counts how many strips are needed to cover the wall's width, dividing width by roll width and rounding up, and finally divides the strips needed by the strips per roll to reach the number of rolls. Estimating in strips rather than dividing raw areas matters because the offcut left at the top or bottom of each drop is usually wasted, so a simple area calculation understates the real requirement. This estimate does not subtract doors and windows, which is deliberately conservative and helps absorb the extra paper lost to pattern matching, where repeating designs force you to line up motifs between strips and trim more from each drop. For a bold pattern with a long repeat, or a wall with many openings, buy an extra roll from the same batch so colours match, and check the dye-lot number on every roll before you start.",
    example: {
      inputs: { wallWidthFt: 15, wallHeightFt: 8, rollWidthFt: 1.73, rollLengthFt: 33 },
      explanation: "Strips per roll = ⌊33 ÷ 8⌋ = 4; strips needed = ⌈15 ÷ 1.73⌉ = 9; rolls = ⌈9 ÷ 4⌉ = 3.",
    },
    faqs: [
      { question: "How many rolls of wallpaper do I need?", answer: "It depends on the wall size and the roll dimensions. The calculator counts how many full-height strips one roll yields, then how many strips span the wall's width, and divides one by the other. A taller wall yields fewer strips per roll, so it needs more rolls for the same width. Enter the exact roll size printed on the packaging, since standard European and American rolls differ in both width and length." },
      { question: "Should I subtract doors and windows?", answer: "This calculator does not subtract them, which keeps the estimate conservative and helps cover the extra paper lost to pattern matching and mistakes. For a wall with a single door or window, leaving them in is the safe choice. Only for very large openings, such as a wide patio door or floor-to-ceiling window, is it worth reducing the width you enter, and even then keep a generous margin." },
      { question: "How does pattern repeat affect how much I need?", answer: "A repeating pattern must line up between neighbouring strips, so you trim waste from the top of each drop to align the motif. The longer the repeat, the more you lose per strip and the more rolls you need. Plain or random-match papers waste the least. If your paper has a large repeat, add an extra roll beyond this estimate and check the repeat length on the label before ordering." },
      { question: "Why buy rolls from the same batch?", answer: "Wallpaper is printed in production runs, and colour can shift subtly between batches, so paper from different batches placed side by side may show a visible seam in shade. Every roll carries a batch or dye-lot number; buy all your rolls with the same number, and buy one or two spare at the same time. Matching a colour later from a different batch is the most common cause of a mismatched feature wall." },
      { question: "Does roll width and length vary between products?", answer: "Yes, considerably. A common European roll is about 0.53 metres wide and 10 metres long, roughly 1.73 by 33 feet, while American rolls and specialty papers use different sizes. Because the strip count depends directly on these dimensions, using the wrong figures throws off the whole estimate. Read the exact width and length from the roll's packaging and enter them here rather than relying on a generic default." },
    ],
    relatedCalculators: ["paint-calculator", "flooring-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "paver",
    slug: "paver-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Paver Calculator",
    shortDescription: "Estimate how many pavers you need for a patio or path.",
    seoTitle: "Paver Calculator — How Many Pavers Do I Need?",
    metaDescription:
      "Free paver calculator. Estimate how many pavers you need for a patio, walkway or driveway from the area and paver size, with a waste margin.",
    primaryKeyword: "paver calculator",
    secondaryKeywords: ["how many pavers do i need", "patio paver calculator", "paver coverage calculator"],
    slugEs: "calculadora-de-adoquines",
    titleEs: "Calculadora de Adoquines",
    shortDescriptionEs: "Estima cuántos adoquines necesitas para un patio o sendero.",
    seoTitleEs: "Calculadora de Adoquines — ¿Cuántos Adoquines Necesito?",
    metaDescriptionEs:
      "Calculadora de adoquines gratuita. Estima cuántos adoquines necesitas para un patio, sendero o entrada a partir del área y el tamaño del adoquín, con un margen de desperdicio.",
    primaryKeywordEs: "calculadora de adoquines",
    secondaryKeywordsEs: ["cuántos adoquines necesito", "calculadora de adoquines para patio", "calculadora de cobertura de adoquines"],
    formulaExplanationEs:
      "El área de la cara de cada adoquín se halla multiplicando su largo y su ancho en pulgadas y dividiendo entre 144, el número de pulgadas cuadradas en un pie cuadrado, para poder compararla con el área del proyecto medida en pies cuadrados. Dividir el área total entre esa área por adoquín da el número de adoquines necesarios para cubrir la superficie sin huecos. Multiplicar por uno más la fracción de desperdicio añade un margen para los adoquines cortados en los bordes y curvas, más los rotos, y redondear hacia arriba asegura que compres adoquines enteros.",
    explanationEs:
      "Una calculadora de adoquines estima cuántos adoquines necesitas para revestir un patio, sendero, entrada de coches o borde de piscina, a partir del área total y del tamaño de un solo adoquín. Como los adoquines se venden y colocan como unidades enteras, la herramienta convierte las dimensiones de cada adoquín de pulgadas a pies cuadrados, divide el área del proyecto entre esa cifra para hallar cuántos adoquines cubren la superficie, y añade un margen de desperdicio antes de redondear hacia arriba. El margen de desperdicio es lo que salva el trabajo: los adoquines se cortan para ajustarse contra bordes, curvas y esquinas, y los recortes rara vez son reutilizables, mientras que algunos se rompen durante la entrega, el manejo y la compactación. Un margen del cinco al diez por ciento cubre esto para un trazado rectangular simple, y los patrones intrincados como la espiga o los diseños circulares, o las áreas con muchos bordes en ángulo, desperdician más y merecen una cifra mayor. Pedir la cantidad exacta casi siempre te deja corto, y un pedido de reposición puede llegar de un lote de producción distinto con un color o textura ligeramente diferente que resalta en la superficie terminada. Esta estimación cuenta los adoquines mismos; no dimensiona la grava de base, la arena de asiento ni la arena de junta polimérica que necesita una instalación adecuada, así que planifícalas por separado a partir de la misma área. Paisajistas, contratistas y propietarios lo usan para presupuestar un proyecto y pedir la cantidad correcta, guardando algunos adoquines de repuesto del mismo lote para reparaciones futuras.",
    exampleEs: {
      inputs: { areaSqFt: 100, paverLengthIn: 12, paverWidthIn: 12, wastePercent: 5 },
      explanation: "Área del adoquín = (12 × 12) ÷ 144 = 1 ft²; 100 ÷ 1 × 1.05 = 105 adoquines.",
    },
    faqsEs: [
      { question: "¿Cuántos adoquines necesito por pie cuadrado?", answer: "Divide uno entre el área del adoquín en pies cuadrados. Un adoquín de 12 por 12 pulgadas cubre exactamente un pie cuadrado, así que necesitas cerca de uno por pie cuadrado, mientras que un adoquín de 6 por 6 pulgadas cubre un cuarto de pie cuadrado y necesita cuatro. La calculadora hace esta conversión por ti a partir de las dimensiones que introduces, luego añade un margen de desperdicio, dándote el conteo total en lugar de una tasa por pie cuadrado." },
      { question: "¿Cuánto desperdicio debo añadir para los adoquines?", answer: "El cinco por ciento es un valor por defecto sensato para un patio rectangular simple colocado en un patrón recto o de trabazón, y es el valor inicial de la calculadora. Los trazados en espiga, cestería, circulares y diagonales desperdician más por los cortes en ángulo, así que usa diez por ciento o más para esos. El margen cubre los adoquines cortados para bordes y curvas más las roturas. Un pequeño excedente es mucho más barato que un segundo lote que quizá no coincida." },
      { question: "¿Incluye esta calculadora la base y la arena?", answer: "No. Cuenta solo los adoquines mismos. Una instalación duradera también necesita una base de grava compactada, normalmente de cuatro a seis pulgadas de profundidad, una capa de asiento de arena, y arena polimérica de junta barrida entre los adoquines. Calcula la grava y la arena de asiento a partir de la misma área y tus profundidades elegidas, y compra la arena de junta según el tamaño del adoquín y el ancho de la junta, ya que las juntas más estrechas y los adoquines más grandes usan menos." },
      { question: "¿Por qué debo guardar adoquines de repuesto?", answer: "Los adoquines se producen en lotes, y el color y la textura pueden variar sutilmente entre tiradas de producción. Si rompes o manchas un adoquín años después y lo reemplazas con material recién comprado, la reparación puede resaltar contra los originales desgastados. Reservar unos pocos de repuesto de tu lote original, almacenados secos y fuera del sol, te permite hacer una reparación invisible. Pedir un ligero excedente por esta razón es práctica común." },
      { question: "¿Cómo mido un patio irregular para adoquines?", answer: "Divide la forma en rectángulos simples y, donde sea necesario, triángulos, calcula el área de cada uno, y súmalas antes de introducir el total. Para bordes curvos, aproxima con el rectángulo que mejor contenga la curva y deja que el margen de desperdicio absorba el exceso. Medir ligeramente generoso y redondear el área hacia arriba es más seguro que redondear hacia abajo, porque quedarse corto significa una entrega extra y un posible desajuste de lote." },
    ],
    fields: [
      { id: "areaSqFt", label: "Area to cover", type: "number", unit: "sq ft", placeholder: "100", required: true, span: 2, min: 0, step: 0.01 },
      { id: "paverLengthIn", label: "Paver length", type: "number", unit: "in", placeholder: "12", required: true, span: 1, min: 0, step: 0.1 },
      { id: "paverWidthIn", label: "Paver width", type: "number", unit: "in", placeholder: "12", required: true, span: 1, min: 0, step: 0.1 },
      { id: "wastePercent", label: "Waste allowance", type: "number", unit: "%", placeholder: "5", required: false, span: 2, min: 0, max: 50, defaultValue: 5, helpText: "Extra for cuts, breakage and edges." },
    ],
    results: [
      { id: "paversNeeded", label: "Pavers needed", format: "number", decimals: 0, unit: "pavers", isPrimary: true, description: "Includes waste allowance" },
    ],
    formula: "Paver area (ft²) = (length × width) ÷ 144; pavers = ⌈area ÷ paver area × (1 + waste%)⌉",
    formulaExplanation:
      "Each paver's face area is found by multiplying its length and width in inches and dividing by 144, the number of square inches in a square foot, so it can be compared with the project area measured in square feet. Dividing the total area by that per-paver area gives the number of pavers needed to tile the surface with no gaps. Multiplying by one plus the waste fraction adds a margin for the pavers cut down at borders and curves, plus those cracked in handling, and rounding up ensures you buy whole pavers because a fraction of a paver cannot be purchased.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A paver calculator estimates how many pavers you need to surface a patio, walkway, driveway or pool surround, from the total area and the size of a single paver. Because pavers are sold and laid as whole units, the tool converts each paver's dimensions from inches into square feet, divides the project area by that figure to find how many pavers tile the surface, and adds a waste margin before rounding up. The waste allowance is the part that saves the job: pavers are cut to fit against edges, around curves and at corners, and the offcuts are rarely reusable, while some crack during delivery, handling and compaction. A five to ten percent margin covers this for a simple rectangular layout, and intricate patterns such as herringbone or circular designs, or areas with many angled edges, waste more and deserve a higher figure. Ordering the exact count almost always leaves you short, and a top-up order may arrive from a different production batch with a slightly different colour or texture that stands out in the finished surface. This estimate counts the pavers themselves; it does not size the base gravel, bedding sand or polymeric joint sand a proper installation needs, so plan those separately from the same area. Landscapers, hardscape contractors and homeowners use it to price a project and order close to the right quantity, keeping a few spare pavers from the same batch for future repairs.",
    example: {
      inputs: { areaSqFt: 100, paverLengthIn: 12, paverWidthIn: 12, wastePercent: 5 },
      explanation: "Paver area = (12 × 12) ÷ 144 = 1 ft²; 100 ÷ 1 × 1.05 = 105 pavers.",
    },
    faqs: [
      { question: "How many pavers do I need per square foot?", answer: "Divide one by the paver's area in square feet. A 12-by-12-inch paver covers exactly one square foot, so you need about one per square foot, while a 6-by-6-inch paver covers a quarter of a square foot and needs four. The calculator does this conversion for you from the paver dimensions you enter, then adds a waste margin, so you get the total count rather than a per-square-foot rate to multiply yourself." },
      { question: "How much waste should I add for pavers?", answer: "Five percent is a sensible default for a simple rectangular patio laid in a straight or running-bond pattern, and it is the calculator's starting value. Herringbone, basketweave, circular and diagonal layouts waste more because of the angled cuts, so use ten percent or higher for those. The margin covers pavers cut to fit borders and curves plus breakage in handling. A small surplus is far cheaper than a second batch that may not match." },
      { question: "Does this calculator include the base and sand?", answer: "No. It counts only the pavers themselves. A durable installation also needs a compacted gravel base, usually four to six inches deep, a bedding layer of sand, and polymeric jointing sand swept between the pavers. Calculate the gravel and bedding sand from the same area and your chosen depths, and buy jointing sand according to the paver size and joint width, since narrower joints and larger pavers use less." },
      { question: "Why should I keep spare pavers?", answer: "Pavers are produced in batches, and colour and texture can shift subtly between production runs. If you crack or stain a paver years later and replace it with newly bought stock, the repair can stand out against the weathered originals. Setting aside a small number of spares from your original batch, stored dry and out of the sun, lets you make an invisible repair. Ordering a slight surplus for this reason is common practice." },
      { question: "How do I measure an irregular patio for pavers?", answer: "Split the shape into simple rectangles and, where needed, triangles, calculate the area of each, and add them together before entering the total. For curved edges, approximate with the rectangle that best contains the curve and let the waste margin absorb the overage. Measuring slightly generously and rounding the area up is safer than rounding down, because running short means an extra delivery and a possible batch mismatch." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "topsoil",
    slug: "topsoil-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Topsoil Calculator",
    shortDescription: "Estimate cubic yards of topsoil needed for a bed or lawn.",
    seoTitle: "Topsoil Calculator — Cubic Yards & Cubic Feet",
    metaDescription:
      "Free topsoil calculator. Estimate the cubic yards and cubic feet of topsoil needed to fill a bed or level a lawn from length, width and depth.",
    primaryKeyword: "topsoil calculator",
    secondaryKeywords: ["how much topsoil do i need", "topsoil yardage calculator", "soil volume calculator"],
    slugEs: "calculadora-de-tierra-vegetal",
    titleEs: "Calculadora de Tierra Vegetal",
    shortDescriptionEs: "Estima las yardas cúbicas de tierra vegetal necesarias para un cantero o césped.",
    seoTitleEs: "Calculadora de Tierra Vegetal — Yardas y Pies Cúbicos",
    metaDescriptionEs:
      "Calculadora de tierra vegetal gratuita. Estima las yardas cúbicas y los pies cúbicos de tierra vegetal necesarios para llenar un cantero o nivelar un césped a partir del largo, ancho y profundidad.",
    primaryKeywordEs: "calculadora de tierra vegetal",
    secondaryKeywordsEs: ["cuánta tierra vegetal necesito", "calculadora de yardas de tierra", "calculadora de volumen de tierra"],
    formulaExplanationEs:
      "El largo por el ancho da el área de suelo que cubrirá la tierra vegetal en pies cuadrados, y multiplicar por la profundidad convierte esa área plana en un volumen tridimensional. La profundidad se divide primero entre 12 porque se introduce en pulgadas mientras que el largo y el ancho están en pies, de modo que las tres dimensiones comparten una unidad antes de multiplicarse. El resultado es el volumen en pies cúbicos. Dividir esa cifra entre 27 la convierte en yardas cúbicas, porque una yarda cúbica contiene 27 pies cúbicos, la unidad que cotizan los proveedores a granel.",
    explanationEs:
      "Una calculadora de tierra vegetal determina cuánta tierra necesitas para llenar un cantero elevado, cubrir un césped, nivelar un punto bajo o iniciar un jardín nuevo, y lo informa tanto en las yardas cúbicas con que entregan los proveedores como en los pies cúbicos con que se vende la tierra embolsada. Introduces el largo y el ancho del área y la profundidad de tierra que quieres añadir, y la herramienta los multiplica en un volumen, convirtiendo la profundidad de pulgadas a pies para que cada dimensión comparta una escala, luego divide entre 27 para llegar a yardas cúbicas. La tierra se maneja por volumen porque es un material suelto y voluminoso que se compra en bolsas o por camión. Acertar la profundidad importa tanto agronómica como económicamente: la mayoría de las hortalizas y céspedes quieren una buena profundidad de tierra suelta y trabajable para las raíces, mientras que una capa demasiado delgada se seca y priva a las plantas. Como la tierra se asienta notablemente después de esparcirse y regarse, y siempre se dispersa un poco durante el trabajo, conviene redondear el área hacia arriba y añadir un pequeño margen para que la profundidad final asentada aún alcance tu objetivo. La entrega a granel por yarda cúbica es mucho más barata para proyectos grandes, mientras que las bolsas convienen para canteros pequeños. Jardineros, paisajistas y propietarios confían en ella para presupuestar una entrega y evitar el segundo viaje que fuerza un pedido corto.",
    exampleEs: {
      inputs: { lengthFt: 20, widthFt: 10, depthIn: 6 },
      explanation: "20 × 10 × (6 ÷ 12) = 100 ft³; 100 ÷ 27 ≈ 3.70 yd³ de tierra vegetal.",
    },
    faqsEs: [
      { question: "¿Cuántos pies cúbicos hay en una yarda cúbica de tierra vegetal?", answer: "Hay 27 pies cúbicos en una yarda cúbica, porque una yarda cúbica es un cubo de tres pies por lado y tres por tres por tres es igual a veintisiete. Por eso la calculadora divide el volumen en pies cúbicos entre 27 para llegar a yardas cúbicas. Como una bolsa común de tierra vegetal contiene tres cuartos o un pie cúbico, una sola yarda cúbica equivale a docenas de bolsas, y por eso la entrega a granel es mucho más barata para áreas grandes." },
      { question: "¿Qué profundidad debe tener la tierra vegetal?", answer: "Depende del uso. Cubrir un césped existente necesita solo un cuarto a media pulgada, mientras que establecer un césped nuevo quiere de tres a seis pulgadas de buena tierra. Los canteros elevados y huertos se benefician de una capa más profunda, a menudo de ocho a doce pulgadas, para que las raíces tengan tierra suelta donde crecer. La profundidad determina el volumen directamente en la fórmula, así que cada pulgada extra añade material y costo notables." },
      { question: "¿Debo pedir tierra vegetal extra por el asentamiento?", answer: "Sí. La tierra vegetal recién entregada está esponjosa y suelta, y se compacta al esparcirse, regarse y pisarse, así que la profundidad asentada termina siendo menor que la profundidad suelta que colocas. Añadir aproximadamente del cinco al diez por ciento, o simplemente redondear tu área y profundidad hacia arriba, hace que el nivel final aún alcance tu objetivo. La tierra es fácil de esparcir en fina capa sobre un césped o amontonar en un cantero, así que un pequeño excedente rara vez se desperdicia." },
      { question: "¿Cuánto pesa una yarda cúbica de tierra vegetal?", answer: "Una yarda cúbica de tierra vegetal suele pesar entre 1,800 y 2,200 libras, aproximadamente una tonelada, aunque la tierra mojada y la tierra pesada de arcilla o arena pesan más, mientras que la tierra seca, tamizada y rica en compost pesa menos. El peso importa para el transporte, ya que un remolque pequeño o una camioneta solo pueden llevar con seguridad parte de una yarda cúbica. Pregunta a tu proveedor el peso de su producto específico si vas a transportarla tú mismo." },
      { question: "¿Es más barata la tierra vegetal embolsada o a granel?", answer: "La tierra vegetal a granel entregada por yarda cúbica es casi siempre más barata por unidad de volumen que la embolsada, porque evitas pagar el empaque y la mano de obra de embolsado. La contrapartida es una tarifa de entrega y un montón que debes transportar y esparcir tú mismo. Para un cantero pequeño unas pocas bolsas son más fáciles de manejar, mientras que llenar varios canteros o cubrir un césped favorece claramente una carga a granel una vez que superas cerca de una yarda cúbica." },
    ],
    fields: [
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Width", type: "number", unit: "ft", placeholder: "10", required: true, span: 1, min: 0, step: 0.01 },
      { id: "depthIn", label: "Depth", type: "number", unit: "in", placeholder: "6", required: true, span: 2, min: 0, step: 0.1 },
    ],
    results: [
      { id: "cubicYards", label: "Topsoil needed", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "cubicFeet", label: "Volume in cubic feet", format: "number", decimals: 1, unit: "ft³", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × (depth ÷ 12); yd³ = ft³ ÷ 27",
    formulaExplanation:
      "Length times width gives the ground area the topsoil will cover in square feet, and multiplying by depth turns that flat area into a three-dimensional volume. Depth is divided by 12 first because it is entered in inches while length and width are in feet, so all three dimensions share one unit before they are multiplied. The result is the volume in cubic feet, which suits small bagged purchases. Dividing that figure by 27 converts to cubic yards, because one cubic yard contains 27 cubic feet, and cubic yards are the unit bulk topsoil suppliers quote and trucks are loaded by.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A topsoil calculator works out how much soil you need to fill a raised bed, top-dress a lawn, level a low spot or start a new garden, and reports it in both the cubic yards suppliers deliver by and the cubic feet bagged soil is sold in. You enter the length and width of the area and the depth of soil you want to add, and the tool multiplies them into a volume, converting the depth from inches to feet so every dimension shares one scale, then divides by 27 to reach cubic yards. Soil is handled by volume because it is a loose, bulky material bought either in bags or by the truckload rather than in tidy units. Getting the depth right matters agriculturally as well as financially: most vegetables and lawns want a good depth of loose, workable soil for roots, while too shallow a layer dries out and starves plants. Because soil settles noticeably after it is spread and watered, and always scatters a little during the work, it is wise to round the area up and add a small margin so the finished, settled depth still meets your target. Bulk delivery by the cubic yard is far cheaper for large projects, while bags suit small beds and easy handling. The length-times-width-times-depth method is standard practice because a layer of topsoil is simply a shallow rectangular volume. Gardeners, landscapers and homeowners rely on it to price a delivery and avoid the second trip that a short order forces.",
    example: {
      inputs: { lengthFt: 20, widthFt: 10, depthIn: 6 },
      explanation: "20 × 10 × (6 ÷ 12) = 100 ft³; 100 ÷ 27 ≈ 3.70 yd³ of topsoil.",
    },
    faqs: [
      { question: "How many cubic feet are in a cubic yard of topsoil?", answer: "There are 27 cubic feet in a cubic yard, because a cubic yard is a cube three feet on each side and three times three times three equals twenty-seven. That is why the calculator divides the cubic-feet volume by 27 to reach cubic yards. Since a common bag of topsoil holds three-quarters or one cubic foot, a single cubic yard equals dozens of bags, which is why bulk delivery is much cheaper for large areas." },
      { question: "How deep should topsoil be?", answer: "It depends on the use. Top-dressing an existing lawn needs only a quarter to half an inch, while establishing a new lawn wants three to six inches of good soil. Raised beds and vegetable gardens benefit from a deeper layer, often eight to twelve inches, so roots have loose soil to grow into. Depth drives the volume directly in the formula, so every extra inch adds noticeable material and cost." },
      { question: "Should I order extra topsoil for settling?", answer: "Yes. Freshly delivered topsoil is fluffy and loose, and it compacts as it is spread, watered and walked on, so the settled depth ends up less than the loose depth you place. Adding roughly five to ten percent, or simply rounding your area and depth up, means the finished grade still meets your target. Soil is easy to spread thinly over a lawn or bank up in a bed, so a small surplus is rarely wasted." },
      { question: "How much does a cubic yard of topsoil weigh?", answer: "A cubic yard of topsoil typically weighs around 1,800 to 2,200 pounds, roughly one ton, though wet soil and soil heavy with clay or sand weigh more, while dry, screened compost-rich soil weighs less. Weight matters for transport, since a small trailer or pickup can safely carry only part of a cubic yard. Ask your supplier for the weight of their specific product if you are hauling it yourself." },
      { question: "Is bagged or bulk topsoil cheaper?", answer: "Bulk topsoil delivered by the cubic yard is almost always cheaper per unit volume than bagged soil, because you avoid paying for packaging and bagging labour. The trade-off is a delivery fee and a pile you must barrow and spread yourself. For a small raised bed a few bags are easier to handle and transport, while filling several beds or topping a lawn strongly favours a bulk load once you pass roughly one cubic yard." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "sod",
    slug: "sod-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Sod Calculator",
    shortDescription: "Estimate rolls and pallets of sod needed for a lawn.",
    seoTitle: "Sod Calculator — Rolls & Pallets Needed",
    metaDescription:
      "Free sod calculator. Estimate the area, rolls and pallets of sod you need to turf a lawn from the length and width of the space.",
    primaryKeyword: "sod calculator",
    secondaryKeywords: ["how much sod do i need", "sod rolls calculator", "turf calculator"],
    slugEs: "calculadora-de-cesped-en-rollo",
    titleEs: "Calculadora de Césped en Rollo",
    shortDescriptionEs: "Estima los rollos y palés de césped necesarios para un jardín.",
    seoTitleEs: "Calculadora de Césped en Rollo — Rollos y Palés Necesarios",
    metaDescriptionEs:
      "Calculadora de césped en rollo gratuita. Estima el área, los rollos y los palés de césped que necesitas para tapizar un jardín a partir del largo y ancho del espacio.",
    primaryKeywordEs: "calculadora de césped en rollo",
    secondaryKeywordsEs: ["cuánto césped en rollo necesito", "calculadora de rollos de césped", "calculadora de tepe"],
    formulaExplanationEs:
      "El largo por el ancho da el área del jardín en pies cuadrados, la cifra por la que se vende el césped. Dividir esa área entre 10 da el número de rollos, ya que un rollo estándar cubre unos 10 pies cuadrados, y redondear hacia arriba compra rollos enteros porque no se puede pedir un rollo parcial. Dividir el área entre 450 da el número de palés, ya que un palé típico contiene unos 450 pies cuadrados de césped, y de nuevo redondear hacia arriba asegura palés enteros. Ambos conteos surgen de la misma área.",
    explanationEs:
      "Una calculadora de césped en rollo te dice cuánto césped, o tepe, necesitas para instalar un jardín nuevo, dando la respuesta tanto en los rollos individuales que se venden para trabajos pequeños como en los palés que se usan para áreas más grandes. Introduces el largo y el ancho del espacio, y la herramienta los multiplica para el área en pies cuadrados, luego divide entre la cobertura de un rollo y de un palé, redondeando cada uno hacia arriba a unidades enteras. El césped se vende por área porque se coloca como una alfombra verde, y comprar suficiente en una sola entrega importa más que con muchos materiales: el césped es un producto vivo que debe colocarse dentro de un día más o menos de ser cortado y entregado, antes de que las raíces se sequen, así que quedarse corto a mitad del trabajo arriesga dejar franjas peladas mientras se pide un segundo lote y el primero empieza a amarillear. Como los jardines rara vez son rectángulos perfectos y cada pieza se recorta para ajustarse alrededor de canteros, senderos y curvas, conviene añadir un margen de desperdicio de alrededor del cinco al diez por ciento sobre esta estimación, y medir las áreas irregulares dividiéndolas en rectángulos. Las cifras de cobertura varían según el proveedor, así que confirma la cobertura exacta con tu productor. Paisajistas, instaladores de tepe y propietarios lo usan para presupuestar un jardín y programar una entrega para que el césped llegue fresco y se coloque el mismo día.",
    exampleEs: {
      inputs: { lengthFt: 30, widthFt: 30 },
      explanation: "Área = 30 × 30 = 900 ft²; rollos = ⌈900 ÷ 10⌉ = 90; palés = ⌈900 ÷ 450⌉ = 2.",
    },
    faqsEs: [
      { question: "¿Cuánta área cubre un rollo o un palé de césped?", answer: "Esta calculadora asume unos 10 pies cuadrados por rollo y 450 pies cuadrados por palé, que son cifras comunes, pero la cobertura varía según el proveedor y la región. El césped viene como rollos, planchas o rollos grandes de distintos tamaños, y un palé puede contener desde unos 400 hasta 700 pies cuadrados. Confirma siempre la cobertura exacta con tu productor antes de pedir, y ajusta tus expectativas si su producto difiere de estos valores por defecto." },
      { question: "¿Debo pedir césped extra por el desperdicio?", answer: "Sí. Cada pieza de césped se recorta para ajustarse contra canteros, senderos, árboles y curvas, y esos recortes rara vez son reutilizables, mientras que algunas piezas pueden dañarse o secarse. Añadir aproximadamente del cinco al diez por ciento sobre esta estimación cubre el recorte y las pérdidas para que no te queden franjas peladas. Como el césped es perecedero y debe colocarse rápido, un pequeño excedente es mucho mejor que pausar para volver a pedir." },
      { question: "¿Cómo mido un jardín irregular para el césped?", answer: "Divide el área en rectángulos simples y, donde sea necesario, triángulos, calcula cada pieza por separado, y súmalas antes de introducir el total. Para un borde curvo, aproxímalo con el rectángulo que mejor contenga la curva y deja que un margen de desperdicio absorba el exceso. Medir generoso y redondear el área hacia arriba es más seguro que redondear hacia abajo, ya que el césped se corta bajo pedido y un faltante significa una nueva entrega y posible retraso." },
      { question: "¿Cuán pronto debe colocarse el césped tras la entrega?", answer: "Lo antes posible, idealmente dentro de las 24 horas de cosechado y entregado, y antes en clima caluroso. El césped es un producto vivo con raíces cortadas, y apilado en un palé se calienta y se seca rápido, amarilleando en un día o dos. Prepara y nivela el suelo antes de que llegue el césped para poder colocarlo de inmediato, riégalo a fondo justo después de colocarlo, y mantenlo húmedo mientras las raíces se establecen." },
      { question: "¿Necesito preparar el suelo antes de colocar el césped?", answer: "Sí, una buena preparación es esencial para que el césped enraíce y prospere. Retira el pasto viejo y las malezas, afloja y nivela el suelo para que drene y quede ligeramente por debajo de los senderos, y añade tierra vegetal o compost si el terreno es pobre. Un lecho firme, nivelado y húmedo permite que el césped haga contacto estrecho y arraigue rápido. Saltarse este paso es la razón más común de que un césped nuevo no se establezca y desarrolle áreas secas y parcheadas." },
    ],
    fields: [
      { id: "lengthFt", label: "Lawn length", type: "number", unit: "ft", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Lawn width", type: "number", unit: "ft", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "rollsNeeded", label: "Sod rolls needed", format: "number", decimals: 0, unit: "rolls", isPrimary: true, description: "At ~10 sq ft per roll" },
      { id: "pallets", label: "Pallets", format: "number", decimals: 0, unit: "pallets", isPrimary: false, description: "At ~450 sq ft per pallet" },
      { id: "areaSqFt", label: "Area to cover", format: "number", decimals: 1, unit: "sq ft", isPrimary: false },
    ],
    formula: "Area = length × width; rolls = ⌈area ÷ 10⌉; pallets = ⌈area ÷ 450⌉",
    formulaExplanation:
      "Length times width gives the lawn area in square feet, the figure sod is sold by. Dividing that area by 10 gives the number of rolls, since a standard sod roll covers about 10 square feet, and rounding up buys whole rolls because a partial roll cannot be ordered. Dividing the area by 450 gives the number of pallets, since a typical pallet holds roughly 450 square feet of sod, and again rounding up ensures whole pallets. Both counts come from the same area, letting you choose rolls for a small patch or pallets for a larger lawn.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A sod calculator tells you how much sod, or turf, you need to lay a new lawn, giving the answer in both the individual rolls sold for small jobs and the pallets used for larger areas. You enter the length and width of the space, and the tool multiplies them for the area in square feet, then divides by the coverage of a roll and of a pallet, rounding each up to whole units. Sod is sold by area because it is laid like a green carpet, and buying enough in one delivery matters more than with many materials: sod is a living product that must be laid within a day or so of being cut and delivered, before the roots dry out, so running short mid-job risks leaving bare strips while a second batch is ordered and the first begins to yellow. Because lawns are rarely perfect rectangles and every piece is trimmed to fit around beds, paths and curves, it is wise to add a waste margin of around five to ten percent on top of this estimate, and to measure irregular areas by splitting them into rectangles. Coverage figures vary by supplier — rolls and slabs come in different sizes and pallets hold different totals — so confirm the exact coverage with your grower and adjust if it differs from the common values used here. Landscapers, turf installers and homeowners use it to price a lawn and schedule a delivery so the sod arrives fresh and is laid the same day.",
    example: {
      inputs: { lengthFt: 30, widthFt: 30 },
      explanation: "Area = 30 × 30 = 900 ft²; rolls = ⌈900 ÷ 10⌉ = 90; pallets = ⌈900 ÷ 450⌉ = 2.",
    },
    faqs: [
      { question: "How much area does a roll or pallet of sod cover?", answer: "This calculator assumes about 10 square feet per roll and 450 square feet per pallet, which are common figures, but coverage varies by supplier and region. Sod comes as rolls, slabs or big rolls of different sizes, and a pallet may hold anywhere from around 400 to 700 square feet. Always confirm the exact coverage with your grower before ordering, and adjust your expectations if their product differs from these defaults." },
      { question: "Should I order extra sod for waste?", answer: "Yes. Every piece of sod is trimmed to fit against beds, paths, trees and curves, and those offcuts are rarely reusable, while a few pieces may be damaged or dry out. Adding roughly five to ten percent on top of this estimate covers the trimming and losses so you are not left with bare strips. Because sod is perishable and must be laid quickly, a small surplus is far better than pausing to reorder." },
      { question: "How do I measure an irregular lawn for sod?", answer: "Divide the area into simple rectangles, and where needed triangles, calculate each piece separately, and add them together before entering the total. For a curved border, approximate it with the rectangle that best contains the curve and let a waste margin absorb the overage. Measuring generously and rounding the area up is safer than rounding down, since sod is cut to order and a shortfall means a fresh delivery and possible delay." },
      { question: "How soon must sod be laid after delivery?", answer: "As soon as possible, ideally within 24 hours of it being harvested and delivered, and sooner in hot weather. Sod is a living product with cut roots, and stacked on a pallet it heats up and dries out quickly, yellowing within a day or two. Prepare and level the soil before the sod arrives so you can lay it immediately, water it thoroughly right after laying, and keep it moist while the roots establish." },
      { question: "Do I need to prepare the soil before laying sod?", answer: "Yes, good preparation is essential for the sod to root and thrive. Remove old grass and weeds, loosen and grade the soil so it drains and sits slightly below paths, and add topsoil or compost if the ground is poor. A firm, level, moist seedbed lets the sod make close contact and knit in quickly. Skipping this step is the most common reason a new sod lawn fails to establish and develops dry, patchy areas." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "board-foot",
    slug: "board-foot-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Board Foot Calculator",
    shortDescription: "Calculate board feet of lumber from its dimensions.",
    seoTitle: "Board Foot Calculator — Lumber Volume",
    metaDescription:
      "Free board foot calculator. Calculate the board feet of lumber from board thickness, width, length and quantity for pricing and ordering hardwood.",
    primaryKeyword: "board foot calculator",
    secondaryKeywords: ["board feet calculator", "lumber board foot calculator", "how to calculate board feet"],
    slugEs: "calculadora-de-pies-tablares",
    titleEs: "Calculadora de Pies Tablares",
    shortDescriptionEs: "Calcula los pies tablares de madera a partir de sus dimensiones.",
    seoTitleEs: "Calculadora de Pies Tablares — Volumen de Madera",
    metaDescriptionEs:
      "Calculadora de pies tablares gratuita. Calcula los pies tablares de madera a partir del grosor, ancho, largo y cantidad de tablas para presupuestar y pedir madera dura.",
    primaryKeywordEs: "calculadora de pies tablares",
    secondaryKeywordsEs: ["calculadora de pie tablar", "calculadora de pies tablares de madera", "cómo calcular pies tablares"],
    formulaExplanationEs:
      "Un pie tablar es una unidad de volumen de madera igual a 144 pulgadas cúbicas — un pie cuadrado de tabla de una pulgada de grosor. Para hallarlo, el grosor y el ancho en pulgadas se multiplican por el largo convertido a pulgadas multiplicando los pies por 12, dando el volumen de la tabla en pulgadas cúbicas. Dividir eso entre 144 convierte el volumen en pies tablares. Multiplicar por la cantidad de tablas idénticas da el total del pedido completo. Como las tres dimensiones se llevan primero a pulgadas, la fórmula funciona para cualquier combinación de tamaños nominales o reales.",
    explanationEs:
      "Una calculadora de pies tablares convierte las dimensiones de una tabla en pies tablares, la unidad de volumen por la que se cotiza y vende la madera dura. Un pie tablar equivale a 144 pulgadas cúbicas — el volumen de una pieza de un pie cuadrado y una pulgada de grosor — y la herramienta lo halla multiplicando el grosor y el ancho en pulgadas por el largo en pulgadas, dividiendo entre 144, y multiplicando por cuántas tablas idénticas tienes. Los pies tablares importan porque la madera dura no se vende por pie lineal ni por pieza como la madera blanda de construcción; se vende por volumen, así que un tablón grueso y ancho cuesta mucho más que uno delgado y estrecho del mismo largo. Conocer el pietaje tablar te permite comparar precios entre proveedores, presupuestar un proyecto y comprobar que una cotización es justa. Una sutileza clave es el tamaño nominal frente al real: la madera aserrada en bruto suele cotizarse por su grosor nominal en cuartos, y los pies tablares se calculan tradicionalmente sobre las dimensiones nominales en lugar del tamaño cepillado más pequeño, así que introduce el grosor por el que tu proveedor cotiza. Esta calculadora da el pietaje exacto de las tablas que describes; no añade una tolerancia por el desperdicio al desgarrar, cantear y cepillar la madera en bruto hasta las piezas terminadas, y esa pérdida es real — los carpinteros suelen comprar de un 20 a un 40 por ciento más de pies tablares de los que necesita el proyecto terminado. Ebanistas, carpinteros y aserraderos usan los pies tablares como el lenguaje común para cotizar y pedir madera.",
    exampleEs: {
      inputs: { thicknessIn: 2, widthIn: 6, lengthFt: 8, quantity: 10 },
      explanation: "(2 × 6 × (8 × 12)) ÷ 144 = 8 bd ft por tabla; × 10 tablas = 80 pies tablares.",
    },
    faqsEs: [
      { question: "¿Qué es un pie tablar?", answer: "Un pie tablar es una unidad de volumen de madera igual a 144 pulgadas cúbicas, lo mismo que una tabla de un pie de largo, un pie de ancho y una pulgada de grosor. Mide la cantidad de madera independientemente de la forma exacta de la tabla, así que un uno-por-doce de un pie de largo y un dos-por-seis de un pie de largo contienen ambos un pie tablar. La madera dura se cotiza por pie tablar, la unidad estándar para comprar y comparar madera." },
      { question: "¿Cómo calculo los pies tablares a mano?", answer: "Multiplica el grosor en pulgadas por el ancho en pulgadas por el largo en pulgadas, luego divide entre 144. Si el largo está en pies, multiplícalo primero por doce para convertirlo a pulgadas, o usa el atajo de grosor por ancho por largo-en-pies dividido entre doce. Multiplica el resultado por el número de tablas idénticas. Llevar cada dimensión a la misma unidad antes de multiplicar es el paso que la gente más suele equivocar." },
      { question: "¿Debo usar el grosor nominal o el real?", answer: "Usa el grosor por el que tu proveedor cotiza, que para la madera dura en bruto suele ser el tamaño nominal cotizado en cuartos — cuatro cuartos significa una pulgada nominal, ocho cuartos significa dos pulgadas. Los pies tablares se calculan tradicionalmente sobre dimensiones nominales, así que una tabla cepillada aún cuenta a su grosor en bruto. Si introduces el grosor terminado más pequeño, subestimarás los pies tablares y el precio. Confirma con tu proveedor en qué dimensión se basa su cotización." },
      { question: "¿Cuánta madera extra debo comprar?", answer: "Planea comprar más pies tablares de los que necesita tu proyecto terminado, comúnmente de un 20 a un 40 por ciento extra para muebles y ebanistería. La madera en bruto pierde volumen al desgarrarla, cantearla y cepillarla a su tamaño final, las tablas contienen nudos, grietas y color que rodeas al cortar, y emparejar la veta significa rechazar algo de material. Esta calculadora da el pietaje exacto de las tablas que introduces, así que añade tu tolerancia de desperdicio antes de pedir." },
      { question: "¿Es el pie tablar lo mismo que un pie lineal o cuadrado?", answer: "No. Un pie lineal o corrido mide solo el largo sin importar el grosor ni el ancho, y un pie cuadrado mide área, mientras que un pie tablar mide volumen, combinando las tres dimensiones. Dos tablas del mismo largo pueden tener pietajes muy distintos si una es más gruesa o más ancha. Por eso la madera dura se vende por pie tablar en lugar de por pie corrido, ya que capta cuánta madera real estás comprando." },
    ],
    fields: [
      { id: "thicknessIn", label: "Thickness", type: "number", unit: "in", placeholder: "2", required: true, span: 1, min: 0, step: 0.1 },
      { id: "widthIn", label: "Width", type: "number", unit: "in", placeholder: "6", required: true, span: 1, min: 0, step: 0.1 },
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "8", required: true, span: 1, min: 0, step: 0.01 },
      { id: "quantity", label: "Quantity", type: "number", unit: "boards", placeholder: "1", required: false, span: 1, min: 0, step: 1, defaultValue: 1 },
    ],
    results: [
      { id: "boardFeet", label: "Board feet", format: "number", decimals: 2, unit: "bd ft", isPrimary: true },
    ],
    formula: "Board feet = (thickness in × width in × (length ft × 12)) ÷ 144 × quantity",
    formulaExplanation:
      "A board foot is a unit of lumber volume equal to 144 cubic inches — one square foot of board one inch thick. To find it, the thickness and width in inches are multiplied by the length converted to inches by multiplying feet by 12, giving the board's volume in cubic inches. Dividing that by 144 converts the volume into board feet. Multiplying by the quantity of identical boards gives the total for the whole order. Because all three dimensions are brought into inches first, the formula works for any combination of nominal or actual sizes you enter.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A board foot calculator converts a board's dimensions into board feet, the volume unit hardwood lumber is priced and sold by. One board foot equals 144 cubic inches — the volume of a piece one foot square and one inch thick — and the tool finds it by multiplying thickness and width in inches by the length in inches, dividing by 144, and multiplying by how many identical boards you have. Board feet matter because hardwood is not sold by the running foot or the piece like softwood framing lumber; it is sold by volume, so a thick, wide plank costs far more than a thin, narrow one of the same length. Knowing the board footage lets you compare prices between suppliers, budget a project, and check that a quote is fair. A key subtlety is nominal versus actual size: rough-sawn lumber is often quoted at its nominal thickness in quarters, such as four-quarter for a nominally one-inch board, and board feet are traditionally calculated on the nominal dimensions rather than the smaller planed size, so enter the thickness your supplier prices by. This calculator gives the exact board footage of the boards you describe; it does not add an allowance for the waste created when you rip, joint and plane rough stock down to finished parts, and that loss is real — woodworkers commonly buy 20 to 40 percent more board feet than the finished project needs to cover defects, grain selection and offcuts. Furniture makers, carpenters and sawmills use board feet as the common language for pricing and ordering wood.",
    example: {
      inputs: { thicknessIn: 2, widthIn: 6, lengthFt: 8, quantity: 10 },
      explanation: "(2 × 6 × (8 × 12)) ÷ 144 = 8 bd ft per board; × 10 boards = 80 board feet.",
    },
    faqs: [
      { question: "What is a board foot?", answer: "A board foot is a unit of lumber volume equal to 144 cubic inches, which is the same as a board one foot long, one foot wide and one inch thick. It measures the amount of wood regardless of the board's exact shape, so a one-by-twelve that is one foot long and a two-by-six that is one foot long both contain one board foot. Hardwood is priced per board foot, making it the standard unit for buying and comparing lumber." },
      { question: "How do I calculate board feet by hand?", answer: "Multiply the thickness in inches by the width in inches by the length in inches, then divide by 144. If the length is in feet, multiply it by twelve first to convert to inches, or use the shortcut of thickness times width times length-in-feet divided by twelve. Multiply the result by the number of identical boards. Bringing every dimension into the same unit before multiplying is the step people most often get wrong." },
      { question: "Should I use nominal or actual thickness?", answer: "Use the thickness your supplier prices by, which for rough hardwood is usually the nominal size quoted in quarters — four-quarter means a nominal one inch, eight-quarter means two inches. Board feet are traditionally figured on nominal dimensions, so a planed board still counts at its rough thickness. If you enter the smaller finished thickness, you will underestimate the board feet and the price. Confirm with your supplier which dimension their quote is based on." },
      { question: "How much extra lumber should I buy?", answer: "Plan to buy more board feet than your finished project needs, commonly 20 to 40 percent extra for furniture and cabinetry. Rough lumber loses volume when you rip, joint and plane it to final size, boards contain knots, splits and colour you cut around, and matching grain across a piece means rejecting some stock. This calculator gives the exact footage of the boards you enter, so add your waste allowance on top before ordering to avoid running short." },
      { question: "Is board foot the same as a linear or square foot?", answer: "No. A linear or running foot measures only length regardless of thickness or width, and a square foot measures area, while a board foot measures volume, combining all three dimensions. Two boards of the same length can have very different board footage if one is thicker or wider. This is why hardwood is sold by the board foot rather than the running foot, since it captures how much actual wood you are buying." },
    ],
    relatedCalculators: ["flooring-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "wall-stud",
    slug: "wall-stud-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Wall Stud Calculator",
    shortDescription: "Estimate how many studs a wall needs at a given spacing.",
    seoTitle: "Wall Stud Calculator — Studs Needed",
    metaDescription:
      "Free wall stud calculator. Estimate how many studs you need to frame a wall from its length and the on-center stud spacing.",
    primaryKeyword: "wall stud calculator",
    secondaryKeywords: ["how many studs do i need", "stud spacing calculator", "wall framing calculator"],
    slugEs: "calculadora-de-montantes-de-pared",
    titleEs: "Calculadora de Montantes de Pared",
    shortDescriptionEs: "Estima cuántos montantes necesita una pared a un espaciado dado.",
    seoTitleEs: "Calculadora de Montantes de Pared — Montantes Necesarios",
    metaDescriptionEs:
      "Calculadora de montantes de pared gratuita. Estima cuántos montantes necesitas para armar una pared a partir de su longitud y el espaciado entre centros de los montantes.",
    primaryKeywordEs: "calculadora de montantes de pared",
    secondaryKeywordsEs: ["cuántos montantes necesito", "calculadora de espaciado de montantes", "calculadora de armado de pared"],
    formulaExplanationEs:
      "La longitud de la pared en pies se multiplica por 12 para convertirla a pulgadas y que comparta unidades con el espaciado entre centros. Dividir esa longitud entre el espaciado y redondear hacia arriba da el número de vanos entre montantes a lo largo de la pared, y sumar uno coloca un montante también en el extremo, porque una hilera de montantes uniformemente espaciados necesita un montante más que el número de vanos entre ellos. Es el principio del poste de cerca: cinco vanos necesitan seis montantes. El resultado cuenta los montantes de campo regulares y no incluye aún el armado extra de las aberturas.",
    explanationEs:
      "Una calculadora de montantes de pared estima cuántos montantes verticales necesitas para armar una pared, a partir de la longitud de la pared y el espaciado entre centros de los montantes. Divide la longitud entre el espaciado para contar los vanos entre montantes, luego suma uno porque una línea de montantes siempre necesita uno más que el número de huecos — la misma lógica del poste de cerca que hace que una cerca de cinco secciones tenga seis postes. El espaciado es la decisión clave: 16 pulgadas entre centros es lo más común para armado portante y general, dando una pared rígida y soporte cómodo para materiales en placa estándar de 4 pies de ancho, mientras que 24 pulgadas entre centros usa menos montantes y conviene a algunas situaciones no portantes o de armado avanzado. El resultado cuenta los montantes de campo uniformemente espaciados; deliberadamente no añade las piezas extra que requieren las aberturas y conexiones, y esas suman rápido. Cada puerta y ventana necesita montantes rey y montantes de apoyo a cada lado, un dintel arriba, y montantes cortos por encima y por debajo de la abertura, mientras que los extremos de pared, las esquinas y las intersecciones en T donde se encuentran los tabiques necesitan montantes y bloqueo extra por estructura y para tener dónde fijar el panel de yeso. Por todo esto, los armadores piden bastantes más montantes que un conteo de campo desnudo, típicamente añadiendo del 10 al 15 por ciento. Carpinteros, constructores y aficionados usan esta estimación como punto de partida para presupuestar la madera de armado, luego añaden los extras para su distribución específica y siguen los requisitos de su código local.",
    exampleEs: {
      inputs: { wallLengthFt: 20, studSpacingIn: 16 },
      explanation: "(20 × 12) ÷ 16 = 15 vanos; ⌈15⌉ + 1 = 16 montantes de campo antes de extras por aberturas y esquinas.",
    },
    faqsEs: [
      { question: "¿Los montantes deben ir a 16 o 24 pulgadas entre centros?", answer: "Dieciséis pulgadas entre centros es el espaciado más común, dando una pared fuerte y rígida y alineándose con el ancho de 48 pulgadas del panel de yeso y el revestimiento estándar para que los bordes de las placas caigan sobre los montantes. Veinticuatro pulgadas entre centros usa menos montantes y menos madera, y se permite para muchas paredes no portantes y algunas situaciones portantes calculadas. El espaciado correcto depende de la carga, del tamaño del montante y de tu código, así que confírmalo antes de armar." },
      { question: "¿Por qué la fórmula suma un montante?", answer: "Dividir la longitud de la pared entre el espaciado cuenta los vanos, o huecos, entre montantes, no los montantes mismos. Una pared con quince vanos tiene dieciséis montantes, porque hay un montante en ambos extremos además de entre cada par de vanos. Sumar uno coloca ese montante final del extremo. Este principio del poste de cerca es fácil de pasar por alto, y omitir el más-uno te deja un montante corto y un extremo de pared sin armado donde fijar." },
      { question: "¿Incluye esto los montantes para puertas y ventanas?", answer: "No. Este es un conteo de montantes de campo para una pared lisa. Cada abertura necesita armado adicional: montantes rey de altura completa a ambos lados, montantes de apoyo o trimmer que sostienen el dintel, el dintel mismo, y montantes cortos por encima y por debajo de la abertura. Estos extras pueden añadir varios montantes por abertura, así que cuenta tus puertas y ventanas por separado y añade su armado a esta base antes de pedir madera." },
      { question: "¿Cuántos montantes extra debo comprar?", answer: "Añade aproximadamente del 10 al 15 por ciento al conteo de campo, o mejor, detalla los extras: dos o más montantes rey y de apoyo por abertura, dinteles, montantes cortos, y montantes adicionales en cada esquina e intersección de pared por estructura y respaldo del panel de yeso. Prevé también unos pocos montantes demasiado combados, agrietados o alabeados para usar. Comprar un pequeño excedente de madera de armado es más barato y rápido que un viaje a mitad de trabajo al depósito." },
      { question: "¿Las esquinas e intersecciones necesitan montantes extra?", answer: "Sí. Las esquinas se arman con varios montantes, o un montante más bloqueo, para formar una conexión rígida y proporcionar una superficie de clavado para el panel de yeso que retorna por el interior de cada pared. Donde un tabique interior se encuentra con otra pared, una intersección en T, también añades montantes o respaldo para que ambas paredes se fijen entre sí y el panel tenga soporte. Estos extras van sobre los montantes de campo que cuenta esta calculadora, así que inclúyelos en tu total." },
    ],
    fields: [
      { id: "wallLengthFt", label: "Wall length", type: "number", unit: "ft", placeholder: "20", required: true, span: 2, min: 0, step: 0.01 },
      { id: "studSpacingIn", label: "Stud spacing", type: "number", unit: "in", placeholder: "16", required: false, span: 2, min: 1, step: 0.1, defaultValue: 16, helpText: "On-center spacing (commonly 16 or 24 in)." },
    ],
    results: [
      { id: "studs", label: "Studs needed", format: "number", decimals: 0, unit: "studs", isPrimary: true, description: "Field studs, before extras for openings" },
    ],
    formula: "Studs = ⌈(wall length × 12) ÷ spacing⌉ + 1",
    formulaExplanation:
      "The wall length in feet is multiplied by 12 to convert it to inches so it shares units with the on-center spacing. Dividing that length by the spacing and rounding up gives the number of gaps between studs across the wall, and adding one places a stud at the far end as well, because a run of evenly spaced studs needs one more stud than the number of bays between them. This is the fencepost principle: five bays need six studs. The result counts the regularly spaced field studs and does not yet include the extra framing that door and window openings require.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A wall stud calculator estimates how many vertical studs you need to frame a wall, from the wall's length and the on-center spacing between studs. It divides the length by the spacing to count the bays between studs, then adds one because a line of studs always needs one more than the number of gaps — the same fencepost logic that means a fence with five sections has six posts. Spacing is the key choice: 16 inches on center is the most common for load-bearing and general framing, giving a stiff wall and convenient support for standard 4-foot-wide sheet materials, while 24 inches on center uses fewer studs and suits some non-load-bearing or advanced-framing situations. The result counts the evenly spaced field studs; it deliberately does not add the extra pieces that openings and connections require, and those add up quickly. Every door and window needs king studs and jack studs on each side, a header across the top, and cripple studs above and below the opening, while wall ends, corners and T-intersections where partitions meet need extra studs and blocking for structure and for something to fasten drywall to. Because of all this, framers order noticeably more studs than a bare field count suggests, typically adding 10 to 15 percent or itemizing each opening and corner. Carpenters, builders and DIYers use this estimate as a starting point to price framing lumber, then add the extras for their specific wall layout and follow the stud size, spacing and structural requirements set by their local building code.",
    example: {
      inputs: { wallLengthFt: 20, studSpacingIn: 16 },
      explanation: "(20 × 12) ÷ 16 = 15 bays; ⌈15⌉ + 1 = 16 field studs before extras for openings and corners.",
    },
    faqs: [
      { question: "Should studs be 16 or 24 inches on center?", answer: "Sixteen inches on center is the most common spacing, giving a strong, stiff wall and lining up with the 48-inch width of standard drywall and sheathing so panel edges land on studs. Twenty-four inches on center uses fewer studs and less lumber, and is allowed for many non-load-bearing walls and some engineered load-bearing situations. The right spacing depends on the load, the stud size and your building code, so confirm it before framing." },
      { question: "Why does the formula add one stud?", answer: "Dividing the wall length by the spacing counts the bays, or gaps, between studs, not the studs themselves. A wall with fifteen bays has sixteen studs, because a stud sits at both ends as well as between every pair of bays. Adding one places that final end stud. This fencepost principle is easy to overlook, and skipping the plus-one leaves you one stud short and a wall end without framing to fasten to." },
      { question: "Does this include studs for doors and windows?", answer: "No. This is a field-stud count for a plain wall. Each opening needs additional framing: king studs running full height on both sides, jack or trimmer studs supporting the header, the header itself, and cripple studs above and below the opening. These extras can add several studs per opening, so count your doors and windows separately and add their framing to this baseline before ordering lumber for the wall." },
      { question: "How many extra studs should I buy?", answer: "Add roughly 10 to 15 percent to the field-stud count, or better, itemize the extras: two or more king and jack studs per opening, headers, cripples, and additional studs at every corner and wall intersection for structure and drywall backing. Also allow for a few studs that are too bowed, split or crowned to use. Buying a small surplus of framing lumber is cheaper and faster than a mid-job trip to the yard." },
      { question: "Do wall corners and intersections need extra studs?", answer: "Yes. Corners are built up from multiple studs, or a stud plus blocking, to form a rigid connection and to provide a nailing surface for the drywall returning on the inside of each wall. Where an interior partition meets another wall, a T-intersection, you also add studs or backing so both walls fasten together and the drywall has support. These extras are on top of the field studs this calculator counts, so include them in your total." },
    ],
    relatedCalculators: ["concrete-calculator", "flooring-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "excavation",
    slug: "excavation-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Excavation Calculator",
    shortDescription: "Estimate cubic yards of soil to excavate and haul away.",
    seoTitle: "Excavation Calculator — Cubic Yards of Soil",
    metaDescription:
      "Free excavation calculator. Estimate the cubic yards and cubic feet of soil to dig out and haul away for a footing, foundation or pool.",
    primaryKeyword: "excavation calculator",
    secondaryKeywords: ["how much dirt do i need to remove", "cut and fill calculator", "soil excavation volume"],
    slugEs: "calculadora-de-excavacion",
    titleEs: "Calculadora de Excavación",
    shortDescriptionEs: "Estima las yardas cúbicas de tierra a excavar y retirar.",
    seoTitleEs: "Calculadora de Excavación — Yardas Cúbicas de Tierra",
    metaDescriptionEs:
      "Calculadora de excavación gratuita. Estima las yardas cúbicas y los pies cúbicos de tierra a excavar y retirar para una zapata, cimiento o piscina.",
    primaryKeywordEs: "calculadora de excavación",
    secondaryKeywordsEs: ["cuánta tierra debo retirar", "calculadora de corte y relleno", "volumen de excavación de tierra"],
    formulaExplanationEs:
      "El largo, el ancho y la profundidad se introducen todos en pies, así que multiplicarlos directamente da el volumen de la excavación en pies cúbicos sin conversión de unidades. Dividir esa cifra entre 27 la convierte en yardas cúbicas, porque una yarda cúbica es un cubo de tres pies por lado y por tanto contiene 27 pies cúbicos. Las yardas cúbicas son la unidad por la que se cotiza, transporta y cobra la excavación, ya que los camiones volcadores y las tarifas de disposición se miden así. El resultado es el volumen de tierra en sitio, sin alterar; el material aflojado se expande y ocupa más espacio.",
    explanationEs:
      "Una calculadora de excavación estima cuánta tierra debes retirar para una zapata, cimiento, sótano, piscina, estanque o zanja, y lo informa en las yardas cúbicas por las que se miden los camiones volcadores y las tarifas de disposición. Introduces el largo, el ancho y la profundidad del hueco en pies, y la herramienta los multiplica para el volumen en pies cúbicos, luego divide entre 27 para llegar a yardas cúbicas. Conocer esta cifra de antemano impulsa todo el plan de movimiento de tierras: te dice cuántas cargas de camión de material deben retirarse, aproximadamente cuánto costará la disposición, y si la máquina y el acceso al sitio son adecuados. Un ajuste crucial del mundo real es el esponjamiento del suelo, a veces llamado factor de abultamiento. El terreno sin alterar está compactado, pero una vez que lo excavas la tierra se afloja y se expande, así que la misma tierra ocupa notablemente más espacio como montón o en un camión de lo que ocupaba en el suelo — comúnmente del 15 al 30 por ciento más según el suelo, con la arcilla esponjándose más que la arena. Esta calculadora da el volumen en banco, en sitio, así que multiplica el resultado por un factor de esponjamiento para dimensionar camiones y estimar las cargas de retirada. La estimación también asume paredes verticales; las excavaciones profundas suelen taludarse o escalonarse por seguridad, lo que aumenta el volumen retirado. Contratistas, constructores y propietarios lo usan para planificar el transporte, presupuestar la disposición y comparar cotizaciones. Sigue siempre las normas locales sobre entibado y taludes, y llama a los localizadores de servicios antes de cavar.",
    exampleEs: {
      inputs: { lengthFt: 30, widthFt: 20, depthFt: 3 },
      explanation: "30 × 20 × 3 = 1,800 ft³; 1,800 ÷ 27 ≈ 66.67 yd³ de tierra a excavar antes de cualquier esponjamiento.",
    },
    faqsEs: [
      { question: "¿Qué es el esponjamiento del suelo y por qué importa?", answer: "El esponjamiento, o abultamiento, es la forma en que la tierra se expande una vez excavada del terreno compactado y aflojada. El mismo volumen que estaba apretado en el banco ocupa más espacio como montón suelto o en un camión, comúnmente del 15 al 30 por ciento más según el tipo de suelo. Importa porque transportas y dispones el volumen suelto, no la cifra en sitio, así que multiplica este resultado por un factor de esponjamiento al dimensionar camiones y estimar cargas de disposición." },
      { question: "¿Da esto el volumen en banco o suelto?", answer: "Da el volumen en banco, el volumen en sitio de la tierra sin alterar medido por las dimensiones del hueco. Una vez excavada, esa tierra se afloja y se esponja, así que el volumen suelto que realmente cargas y transportas es mayor. Para las cargas de camión y la disposición, multiplica las yardas cúbicas en banco por un factor de esponjamiento para tu suelo, alrededor de 1.15 para arena hasta 1.30 o más para arcilla. Si compactas relleno, el volumen se reduce en cambio." },
      { question: "¿Cuántas yardas cúbicas caben en un camión volcador?", answer: "Varía según el camión. Un camión volcador tándem estándar suele llevar alrededor de 10 a 14 yardas cúbicas de tierra suelta, mientras que los camiones más pequeños llevan menos y los articulados o más grandes más. Los límites de peso pueden importar más que el volumen para tierra pesada y mojada, ya que una carga llena por volumen puede exceder el peso legal. Divide tu volumen suelto y esponjado entre la capacidad del camión para estimar el número de cargas a retirar." },
      { question: "¿Debo considerar los lados taludados de la excavación?", answer: "A menudo sí. Esta calculadora asume paredes verticales, pero las excavaciones profundas se taludan o escalonan con frecuencia por seguridad para prevenir el colapso, y el talud añade volumen más allá de la simple caja porque la parte superior del hueco es más ancha que el fondo. Para una zapata superficial, los lados verticales son una aproximación razonable, pero para excavaciones profundas o inestables, añade volumen por el talud y sigue las medidas de seguridad y entibado requeridas." },
      { question: "¿Debo llamar antes de cavar?", answer: "Sí, siempre. Antes de cualquier excavación debes localizar y marcar los servicios subterráneos, ya que golpear una línea de gas, electricidad, agua o comunicaciones es peligroso y costoso. En muchas zonas debe llamarse a un servicio de localización gratuito unos días antes de cavar. Esta calculadora planifica solo el volumen de movimiento de tierras; no sustituye la localización de servicios, los permisos, ni las normas locales sobre entibado y excavación segura, que debes seguir antes de romper el terreno." },
    ],
    fields: [
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "30", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Width", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "depthFt", label: "Depth", type: "number", unit: "ft", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "cubicYards", label: "Volume to excavate", format: "number", decimals: 2, unit: "yd³", isPrimary: true },
      { id: "cubicFeet", label: "Volume in cubic feet", format: "number", decimals: 1, unit: "ft³", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × depth; yd³ = ft³ ÷ 27",
    formulaExplanation:
      "Length, width and depth are all entered in feet, so multiplying them together directly gives the volume of the excavation in cubic feet without any unit conversion. Dividing that figure by 27 converts to cubic yards, because a cubic yard is a cube three feet on each side and therefore contains 27 cubic feet. Cubic yards are the unit excavation is quoted, hauled and charged by, since dump trucks and disposal fees are measured that way. The result is the in-place, undisturbed volume of soil; loosened spoil swells and takes up more space once it is dug out.",
    formulaSource: "Standard construction estimation",
    explanation:
      "An excavation calculator estimates how much soil you must dig out for a footing, foundation, basement, pool, pond or trench, and reports it in the cubic yards that dump trucks and disposal fees are measured by. You enter the length, width and depth of the hole in feet, and the tool multiplies them for the volume in cubic feet, then divides by 27 to reach cubic yards. Knowing this figure up front drives the whole earthwork plan: it tells you how many truckloads of spoil must be hauled away, roughly what disposal will cost, and whether the machine and site access suit the job. A crucial real-world adjustment is soil swell, sometimes called the bulking factor. Undisturbed ground is compacted, but once you dig it out the soil loosens and expands, so the same earth takes up noticeably more space as a pile or in a truck than it did in the ground — commonly 15 to 30 percent more depending on the soil, with clay swelling more than sand. This calculator gives the in-place, bank volume, so multiply the result by a swell factor to size trucks and estimate haul-away loads. Conversely, if you are backfilling and compacting soil, it shrinks below its loose volume. The estimate also assumes vertical sides; deep excavations are often sloped or benched back for safety, which increases the volume removed. Contractors, builders and homeowners use it to plan haulage, price disposal and compare quotes. Always follow local rules on shoring, sloping and calling utility locators before any digging begins.",
    example: {
      inputs: { lengthFt: 30, widthFt: 20, depthFt: 3 },
      explanation: "30 × 20 × 3 = 1,800 ft³; 1,800 ÷ 27 ≈ 66.67 yd³ of soil to excavate before any swell.",
    },
    faqs: [
      { question: "What is soil swell and why does it matter?", answer: "Soil swell, or bulking, is the way earth expands once it is dug out of the compacted ground and loosened. The same volume that sat tight in the bank takes up more space as a loose pile or in a truck, commonly 15 to 30 percent more depending on soil type. It matters because you haul and dispose of the loose volume, not the in-place figure, so multiply this result by a swell factor when sizing trucks and estimating disposal loads." },
      { question: "Does this give bank or loose volume?", answer: "It gives the bank volume, the in-place volume of undisturbed soil measured by the hole's dimensions. Once excavated, that soil loosens and swells, so the loose volume you actually load and haul is larger. For truck loads and disposal, multiply the bank cubic yards by a swell factor for your soil, around 1.15 for sand up to 1.30 or more for clay. If you are compacting fill, the volume shrinks instead." },
      { question: "How many cubic yards fit in a dump truck?", answer: "It varies with the truck. A standard tandem dump truck typically carries around 10 to 14 cubic yards of loose soil, while smaller trucks carry less and articulated or larger trucks more. Weight limits can matter more than volume for heavy, wet soil, since a full load by volume may exceed the legal weight. Divide your loose, swollen volume by the truck's capacity to estimate the number of loads to haul away." },
      { question: "Should I account for sloped excavation sides?", answer: "Often yes. This calculator assumes vertical walls, but deep excavations are frequently sloped back or benched for safety to prevent collapse, and sloping adds volume beyond the simple box because the top of the hole is wider than the bottom. For a rough footing or shallow dig, vertical sides are a reasonable approximation, but for deep or unstable excavations, add volume for the slope and follow the required safety measures and shoring rules." },
      { question: "Do I need to call before I dig?", answer: "Yes, always. Before any excavation you should have underground utilities located and marked, since striking a gas, electric, water or communications line is dangerous and costly. In many areas a free locating service must be called a few days before digging. This calculator plans the earthwork volume only; it is no substitute for utility location, permits, and the local rules on shoring and safe excavation, which you must follow before breaking ground." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "asphalt",
    slug: "asphalt-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Asphalt Calculator",
    shortDescription: "Estimate tons of asphalt for a driveway or lot.",
    seoTitle: "Asphalt Calculator — Tons Needed",
    metaDescription:
      "Free asphalt calculator. Estimate the tons of hot-mix asphalt needed to pave a driveway or lot from length, width, thickness and mix density.",
    primaryKeyword: "asphalt calculator",
    secondaryKeywords: ["how much asphalt do i need", "asphalt tonnage calculator", "hot mix asphalt calculator"],
    slugEs: "calculadora-de-asfalto",
    titleEs: "Calculadora de Asfalto",
    shortDescriptionEs: "Estima las toneladas de asfalto para una entrada o estacionamiento.",
    seoTitleEs: "Calculadora de Asfalto — Toneladas Necesarias",
    metaDescriptionEs:
      "Calculadora de asfalto gratuita. Estima las toneladas de mezcla asfáltica en caliente necesarias para pavimentar una entrada o estacionamiento a partir del largo, ancho, grosor y densidad de la mezcla.",
    primaryKeywordEs: "calculadora de asfalto",
    secondaryKeywordsEs: ["cuánto asfalto necesito", "calculadora de toneladas de asfalto", "calculadora de mezcla asfáltica en caliente"],
    formulaExplanationEs:
      "El largo por el ancho da el área a pavimentar en pies cuadrados, y multiplicar por el grosor convierte esa área plana en un volumen, con el grosor dividido primero entre 12 para convertir pulgadas a pies y que todas las dimensiones compartan una unidad. Eso da el volumen compactado de asfalto en pies cúbicos. Multiplicar por la densidad de la mezcla en libras por pie cúbico convierte el volumen en peso en libras, porque la densidad es peso por unidad de volumen. Dividir entre 2,000 convierte las libras en toneladas estadounidenses, la unidad por la que venden las plantas de asfalto.",
    explanationEs:
      "Una calculadora de asfalto estima cuánta mezcla asfáltica en caliente necesitas para pavimentar una entrada, estacionamiento, sendero o camino, expresada en las toneladas por las que venden las plantas de asfalto y se pesan los camiones. Introduces el largo, el ancho y el grosor compactado del pavimento más la densidad de la mezcla, y la herramienta multiplica las dimensiones en un volumen — convirtiendo el grosor de pulgadas a pies — luego multiplica por la densidad y divide entre 2,000 para convertir ese volumen en toneladas. Trabajar en toneladas importa porque el asfalto se cotiza y entrega por peso, no por volumen, y es más denso de lo que parece, así que un área modesta a unas pocas pulgadas de grosor suma varias toneladas rápidamente. La densidad es el dato que la gente pasa por alto: la mezcla asfáltica en caliente típica ronda las 145 libras por pie cúbico, pero la cifra exacta depende del agregado y del diseño de la mezcla, y usar el valor correcto mantiene el tonelaje preciso. Esta estimación da el asfalto compactado necesario para la capa superficial al grosor que introduces; una entrada o estacionamiento adecuado se construye normalmente sobre una base de agregado compactado de varias pulgadas, que dimensionas por separado. Como el asfalto debe colocarse y compactarse en caliente en una operación continua, pedir suficiente en una sola entrega es importante — un faltante significa una junta fría o una segunda carga. También conviene añadir un pequeño porcentaje por el material perdido en la compactación y los bordes. Contratistas de pavimentación, presupuestadores y propietarios lo usan para presupuestar un trabajo y pedir el tonelaje correcto.",
    exampleEs: {
      inputs: { lengthFt: 100, widthFt: 20, thicknessIn: 3, densityLbPerCubicFt: 145 },
      explanation: "100 × 20 × (3 ÷ 12) = 500 ft³; 500 × 145 ÷ 2000 = 36.25 toneladas de asfalto.",
    },
    faqsEs: [
      { question: "¿Qué grosor debe tener una entrada de asfalto?", answer: "Una entrada residencial de asfalto suele tener unas 2 a 3 pulgadas de asfalto superficial compactado sobre una base de agregado compactado de 4 a 8 pulgadas, con uso más intenso o suelos pobres exigiendo más. El grosor determina el tonelaje directamente en la fórmula, así que cada pulgada extra añade peso y costo. La estructura correcta depende del tráfico, la subrasante y la práctica local, así que confirma los grosores de capa con un contratista de pavimentación para tu sitio." },
      { question: "¿Qué densidad debo usar para el asfalto?", answer: "La mezcla asfáltica en caliente típica pesa unas 145 libras por pie cúbico, que es el valor por defecto de la calculadora, pero la densidad exacta depende del agregado, del diseño de la mezcla y de cuán bien se compacte. Algunas mezclas son un poco más ligeras o pesadas. Para un pedido preciso, pide a tu proveedor de asfalto la densidad, o peso unitario, de la mezcla específica que compras e introdúcela, ya que la densidad alimenta directamente el tonelaje que la planta te facturará." },
      { question: "¿Incluye esto la base de grava?", answer: "No. Esta estimación cubre solo la capa superficial de asfalto al grosor que introduces. Una entrada o estacionamiento duradero se construye sobre una base de agregado compactado, comúnmente piedra triturada de varias pulgadas de profundidad, que reparte las cargas y drena el agua, y debes calcular esa base por separado a partir de la misma área y tu profundidad elegida. Los proyectos más grandes también pueden tener una capa de ligante más gruesa bajo la capa superficial, añadiendo más tonelaje de asfalto." },
      { question: "¿Cuánto asfalto extra debo pedir?", answer: "Añade un pequeño margen, a menudo alrededor del 5 por ciento, para cubrir el material perdido en la compactación, la subrasante irregular, y el derrame y recorte en los bordes. Como el asfalto debe colocarse y compactarse en caliente en una operación continua, quedarse corto arriesga una junta fría donde el asfalto nuevo se encuentra con un borde enfriado, que es un punto débil. Pedir ligeramente de más y que la cuadrilla difumine cualquier excedente es mejor que pausar para traer una segunda carga." },
      { question: "¿Por qué se vende el asfalto por tonelada en lugar de por volumen?", answer: "Las plantas de asfalto producen y cargan la mezcla en caliente por peso, y los camiones se pesan en la báscula, así que toda la cadena de suministro se cotiza por tonelada en lugar de por yarda cúbica. El peso también es una medida consistente sin importar cuán suelta o compactada esté la mezcla en cualquier momento. Por eso esta calculadora convierte el volumen que necesitas en toneladas usando la densidad de la mezcla, dándote la cifra que el proveedor realmente cotizará y facturará." },
    ],
    fields: [
      { id: "lengthFt", label: "Length", type: "number", unit: "ft", placeholder: "100", required: true, span: 1, min: 0, step: 0.01 },
      { id: "widthFt", label: "Width", type: "number", unit: "ft", placeholder: "20", required: true, span: 1, min: 0, step: 0.01 },
      { id: "thicknessIn", label: "Thickness", type: "number", unit: "in", placeholder: "3", required: true, span: 1, min: 0, step: 0.1 },
      { id: "densityLbPerCubicFt", label: "Mix density", type: "number", unit: "lb/ft³", placeholder: "145", required: false, span: 1, min: 0, step: 1, defaultValue: 145, helpText: "Hot-mix asphalt ≈ 145 lb/ft³." },
    ],
    results: [
      { id: "tons", label: "Asphalt needed", format: "number", decimals: 2, unit: "tons", isPrimary: true },
      { id: "cubicFeet", label: "Volume in cubic feet", format: "number", decimals: 1, unit: "ft³", isPrimary: false },
    ],
    formula: "Volume (ft³) = length × width × (thickness ÷ 12); tons = volume × density ÷ 2000",
    formulaExplanation:
      "Length times width gives the area to be paved in square feet, and multiplying by thickness turns that flat area into a volume, with the thickness divided by 12 first to convert inches to feet so all dimensions share one unit. That gives the compacted volume of asphalt in cubic feet. Multiplying by the mix density in pounds per cubic foot converts volume into weight in pounds, because density is weight per unit volume. Dividing by 2,000 converts pounds into US tons, the unit asphalt plants sell and trucks are weighed by. Denser mixes weigh more per cubic foot and so need more tons for the same volume.",
    formulaSource: "Standard construction estimation",
    explanation:
      "An asphalt calculator estimates how much hot-mix asphalt you need to pave a driveway, parking lot, path or road, expressed in the tons that asphalt plants sell by and trucks are weighed by. You enter the length, width and compacted thickness of the paving plus the mix density, and the tool multiplies the dimensions into a volume — converting thickness from inches to feet — then multiplies by density and divides by 2,000 to turn that volume into tons. Working in tons matters because asphalt is priced and delivered by weight, not volume, and it is denser than it looks, so a modest area at a few inches thick adds up to several tons quickly. Density is the input people overlook: typical hot-mix asphalt runs around 145 pounds per cubic foot, but the exact figure depends on the aggregate and mix design, and using the right value keeps the tonnage accurate. This estimate gives the compacted asphalt needed for the surface layer at the thickness you enter; a proper driveway or lot is usually built on a compacted aggregate base several inches thick, which you size separately, and larger jobs may use a binder course beneath the surface course. Because asphalt must be laid and rolled hot in a continuous operation, ordering enough in one delivery is important — a shortfall means a cold joint or a second load, and a small surplus is better than stopping the paver. It is also wise to add a few percent for the material lost to compaction and edges. Paving contractors, estimators and homeowners use it to price a job and order the right tonnage.",
    example: {
      inputs: { lengthFt: 100, widthFt: 20, thicknessIn: 3, densityLbPerCubicFt: 145 },
      explanation: "100 × 20 × (3 ÷ 12) = 500 ft³; 500 × 145 ÷ 2000 = 36.25 tons of asphalt.",
    },
    faqs: [
      { question: "How thick should an asphalt driveway be?", answer: "A residential asphalt driveway usually has about 2 to 3 inches of compacted surface asphalt over a compacted aggregate base of 4 to 8 inches, with heavier use or poor soils calling for more. Thickness drives the tonnage directly in the formula, so every extra inch adds weight and cost. The right build-up depends on the traffic, the subgrade and local practice, so confirm the layer thicknesses with a paving contractor for your site." },
      { question: "What density should I use for asphalt?", answer: "Typical hot-mix asphalt weighs about 145 pounds per cubic foot, which is the calculator's default, but the exact density depends on the aggregate, the mix design and how well it is compacted. Some mixes run a little lighter or heavier. For an accurate order, ask your asphalt supplier for the density, or unit weight, of the specific mix you are buying and enter it, since density feeds straight into the tonnage the plant will bill you for." },
      { question: "Does this include the gravel base?", answer: "No. This estimate covers only the asphalt surface layer at the thickness you enter. A durable driveway or lot is built on a compacted aggregate base, commonly crushed stone several inches deep, which spreads loads and drains water, and you should calculate that base separately from the same area and your chosen depth. Larger projects may also have a thicker binder course beneath the surface course, adding more asphalt tonnage." },
      { question: "How much extra asphalt should I order?", answer: "Add a small margin, often around 5 percent, to cover the material lost to compaction, uneven subgrade, and spillage and trimming at the edges. Because asphalt must be placed and rolled while hot in one continuous operation, running short risks a cold joint where new asphalt meets a cooled edge, which is a weak point. Ordering slightly over and having the crew feather out any surplus is better than pausing to bring a second load." },
      { question: "Why is asphalt sold by the ton instead of volume?", answer: "Asphalt plants produce and load hot mix by weight, and trucks are weighed at the scale, so the whole supply chain is priced per ton rather than per cubic yard. Weight is also a consistent measure regardless of how loose or compacted the mix is at any moment. That is why this calculator converts the volume you need into tons using the mix density, giving you the figure the supplier will actually quote and invoice." },
    ],
    relatedCalculators: ["gravel-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "plywood-sheet",
    slug: "plywood-sheet-calculator",
    category: "Construction",
    categorySlug: "construction",
    title: "Plywood Sheet Calculator",
    shortDescription: "Estimate how many sheets of plywood cover an area.",
    seoTitle: "Plywood Sheet Calculator — Sheets Needed",
    metaDescription:
      "Free plywood sheet calculator. Estimate how many sheets of plywood or OSB you need to cover a floor, wall or roof area.",
    primaryKeyword: "plywood sheet calculator",
    secondaryKeywords: ["how many sheets of plywood do i need", "plywood calculator", "osb sheet calculator"],
    slugEs: "calculadora-de-hojas-de-contrachapado",
    titleEs: "Calculadora de Hojas de Contrachapado",
    shortDescriptionEs: "Estima cuántas hojas de contrachapado cubren un área.",
    seoTitleEs: "Calculadora de Hojas de Contrachapado — Hojas Necesarias",
    metaDescriptionEs:
      "Calculadora de hojas de contrachapado gratuita. Estima cuántas hojas de contrachapado u OSB necesitas para cubrir un piso, pared o techo.",
    primaryKeywordEs: "calculadora de hojas de contrachapado",
    secondaryKeywordsEs: ["cuántas hojas de contrachapado necesito", "calculadora de contrachapado", "calculadora de hojas de osb"],
    formulaExplanationEs:
      "El área total que necesitas cubrir se divide entre el área que cubre una sola hoja, que para la hoja estándar de 4 por 8 pies es de 32 pies cuadrados. El resultado es cuántas hojas se requieren para cubrir la superficie sin huecos. Como el contrachapado se vende solo en hojas enteras y una hoja parcial aún cuenta como una compra, la cifra se redondea hacia arriba. Introducir la cobertura del tamaño de hoja que realmente compras mantiene la estimación precisa, ya que una hoja de 4 por 8 cubre 32 pies cuadrados mientras que otros tamaños cubren cantidades distintas.",
    explanationEs:
      "Una calculadora de hojas de contrachapado te dice cuántas hojas de contrachapado u OSB necesitas para cubrir un piso, pared, tablero de techo u otra superficie plana, a partir del área total y de la cobertura de una hoja. Divide el área entre la cobertura por hoja — 32 pies cuadrados para la hoja estándar de 4 por 8 pies — y redondea hacia arriba, porque las hojas se venden enteras y no puedes comprar una fracción. Esto da una base limpia, pero los trabajos reales necesitan un margen de desperdicio encima: las hojas se cortan para ajustarse contra paredes, alrededor de aberturas, en los bordes del techo y en las esquinas, y esos recortes a menudo no pueden reutilizarse, así que conviene añadir aproximadamente un 10 por ciento, y más para distribuciones muy recortadas o irregulares. Una división de área pura también ignora cómo se distribuyen las hojas. El revestimiento estructural en pisos, paredes y techos se instala normalmente en un patrón escalonado con las juntas desfasadas de hilera a hilera por resistencia, y los bordes de las placas deben caer sobre elementos de armado como viguetas, montantes o cabios, así que una hoja se recorta con frecuencia simplemente para que su borde caiga sobre un soporte. Esa realidad de distribución significa que el conteo real de hojas puede exceder la estimación desnuda de área, especialmente en superficies estrechas o de proporciones extrañas. Esta herramienta maneja el conteo basado en área; introduce la cobertura del tamaño de hoja que compras. Constructores, techadores y aficionados lo usan para presupuestar el revestimiento y cargar el camión, luego añaden un margen de desperdicio para su distribución específica.",
    exampleEs: {
      inputs: { areaSqFt: 500, sheetSqFt: 32 },
      explanation: "500 ÷ 32 = 15.6 → 16 hojas de contrachapado antes de añadir desperdicio por cortes.",
    },
    faqsEs: [
      { question: "¿Cuántos pies cuadrados cubre una hoja de contrachapado?", answer: "Una hoja estándar de 4 por 8 pies cubre 32 pies cuadrados, que es la cobertura por defecto de la calculadora. Las hojas también vienen en otros tamaños, como 4 por 9 o 5 por 5 para algunas placas especiales, cubriendo cantidades distintas. El grosor no cambia la huella, así que una hoja fina de base y una gruesa de subpiso cubren ambas 32 pies cuadrados si son de 4 por 8. Introduce la cobertura de la hoja exacta que compras para un conteo preciso." },
      { question: "¿Cuánto desperdicio debo añadir para el contrachapado?", answer: "Alrededor del 10 por ciento es una tolerancia razonable para una distribución simple, y más para superficies con muchas aberturas, ángulos o tramos estrechos. El margen cubre las hojas cortadas para ajustarse contra paredes, alrededor de ventanas y puertas, en los bordes del techo, y para que los bordes de las placas caigan sobre el armado. Los recortes suelen ser demasiado pequeños para reutilizar. Esta calculadora da el conteo desnudo de área, así que añade tu margen de desperdicio antes de pedir." },
      { question: "¿Por qué deben escalonarse las juntas del contrachapado?", answer: "Escalonar las juntas, de modo que las costuras de los extremos no se alineen de una hilera a la siguiente, reparte las cargas por el armado y evita una línea débil continua a través del revestimiento. Es práctica estándar para pisos, paredes y techos y produce un conjunto más rígido y fuerte. El escalonado significa que algunas hojas se cortan para empezar una hilera desfasada, lo que crea recortes y puede elevar ligeramente el conteo total de hojas por encima de una simple división de área, así que planéalo." },
      { question: "¿Los bordes de las placas deben caer sobre el armado?", answer: "Para el revestimiento estructural, sí. Los bordes de las placas de piso, pared y techo deben estar soportados y fijados a elementos de armado como viguetas, montantes o cabios, a veces con bloqueo añadido entre ellos para soporte de borde. Esto significa que una hoja se recorta con frecuencia para que su borde caiga sobre un soporte en lugar de sobrepasarlo, lo que crea desperdicio. Es una razón clave por la que el conteo real de hojas puede exceder la estimación desnuda de área en muchas distribuciones." },
      { question: "¿Se estima el OSB igual que el contrachapado?", answer: "Sí. El tablero de hebras orientadas, u OSB, viene en las mismas hojas estándar de 4 por 8 pies que el contrachapado y cubre los mismos 32 pies cuadrados, así que el conteo de hojas de esta calculadora aplica a cualquiera. El OSB se usa a menudo de forma intercambiable con el contrachapado para subpisos, revestimiento de paredes y tableros de techo, y suele ser más barato. Elige el material según la aplicación y la exposición a la humedad, pero el conteo por área y el margen de desperdicio funcionan igual para ambos." },
    ],
    fields: [
      { id: "areaSqFt", label: "Area to cover", type: "number", unit: "sq ft", placeholder: "500", required: true, span: 2, min: 0, step: 0.01 },
      { id: "sheetSqFt", label: "Coverage per sheet", type: "number", unit: "sq ft", placeholder: "32", required: false, span: 2, min: 0, step: 0.1, defaultValue: 32, helpText: "A 4×8 sheet covers 32 sq ft." },
    ],
    results: [
      { id: "sheets", label: "Sheets needed", format: "number", decimals: 0, unit: "sheets", isPrimary: true },
    ],
    formula: "Sheets = ⌈area ÷ coverage per sheet⌉",
    formulaExplanation:
      "The total area you need to cover is divided by the area a single sheet covers, which for the standard 4-by-8-foot sheet is 32 square feet. The result is how many sheets are required to blanket the surface with no gaps. Because plywood is sold only in whole sheets and a partial sheet still counts as one purchase, the figure is rounded up. Entering the coverage of the sheet size you are actually buying keeps the estimate accurate, since a 4-by-8 sheet covers 32 square feet while other sizes cover different amounts and would change the count.",
    formulaSource: "Standard construction estimation",
    explanation:
      "A plywood sheet calculator tells you how many sheets of plywood or OSB you need to cover a floor, wall, roof deck or other flat surface, from the total area and the coverage of one sheet. It divides the area by the per-sheet coverage — 32 square feet for the standard 4-by-8-foot sheet — and rounds up, because sheets are sold whole and you cannot buy a fraction of one. This gives a clean baseline, but real jobs need a waste margin on top: sheets are cut to fit against walls, around openings, at roof edges and into corners, and those offcuts often cannot be reused, so it is wise to add roughly 10 percent, and more for cut-up or irregular layouts. A pure area division also ignores how sheets are laid out. Structural sheathing on floors, walls and roofs is usually installed in a staggered pattern with the joints offset row to row for strength, and panel edges must land on framing members such as joists, studs or rafters, so a sheet is frequently trimmed simply to make its edge fall on a support. That layout reality means the true sheet count can exceed the bare area estimate, especially on narrow or oddly proportioned surfaces. This tool handles the area-based count; enter the coverage of the sheet size you are buying, since thicker structural panels and specialty sizes come in the same 4-by-8 footprint but sheathing, subfloor and underlayment can differ. Builders, roofers and DIYers use it to price sheathing and load the truck, then add a waste margin for their specific layout.",
    example: {
      inputs: { areaSqFt: 500, sheetSqFt: 32 },
      explanation: "500 ÷ 32 = 15.6 → 16 sheets of plywood before adding any waste for cuts.",
    },
    faqs: [
      { question: "How many square feet does a sheet of plywood cover?", answer: "A standard 4-by-8-foot sheet covers 32 square feet, which is the calculator's default coverage. Sheets also come in other sizes, such as 4-by-9 or 5-by-5 for some specialty panels, covering different amounts. Thickness does not change the footprint, so a thin underlayment sheet and a thick subfloor sheet both cover 32 square feet if they are 4-by-8. Enter the coverage of the exact sheet you are buying for an accurate count." },
      { question: "How much waste should I add for plywood?", answer: "Around 10 percent is a reasonable allowance for a simple layout, and more for surfaces with many openings, angles or narrow runs. The margin covers sheets cut to fit against walls, around windows and doors, at roof edges, and to land panel edges on framing. Offcuts are often too small to reuse. This calculator gives the bare area count, so add your waste margin on top before ordering to avoid a shortfall partway through the job." },
      { question: "Why do plywood joints need to be staggered?", answer: "Staggering the joints, so the end seams do not line up from one row to the next, spreads loads across the framing and prevents a continuous weak line through the sheathing. It is standard practice for floors, walls and roofs and produces a stiffer, stronger assembly. Staggering means some sheets are cut to start a row offset, which creates offcuts and can raise the total sheet count slightly above a simple area division, so plan for it." },
      { question: "Do panel edges have to land on framing?", answer: "For structural sheathing, yes. The edges of floor, wall and roof panels must be supported by and fastened to framing members such as joists, studs or rafters, sometimes with blocking added between them for edge support. This means a sheet is often trimmed so its edge falls on a support rather than spanning past one, which creates waste. It is a key reason the real sheet count can exceed the bare area estimate on many layouts." },
      { question: "Is OSB estimated the same way as plywood?", answer: "Yes. Oriented strand board, or OSB, comes in the same standard 4-by-8-foot sheets as plywood and covers the same 32 square feet, so the sheet count from this calculator applies to either. OSB is often used interchangeably with plywood for subfloors, wall sheathing and roof decking, and is usually cheaper. Choose the material to suit the application and moisture exposure, but the area-based count and the waste margin you add work the same for both." },
    ],
    relatedCalculators: ["flooring-calculator", "concrete-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
