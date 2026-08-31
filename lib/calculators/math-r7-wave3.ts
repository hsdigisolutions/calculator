import type { CalculatorDefinition } from "../types";

export const mathR7Calculators: CalculatorDefinition[] = [
  {
    id: "rectangle-area",
    slug: "rectangle-area-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Rectangle Area Calculator",
    shortDescription: "Find the area and perimeter of a rectangle.",
    seoTitle: "Rectangle Area Calculator — Area & Perimeter",
    metaDescription:
      "Free rectangle area calculator. Enter the length and width to find the area and perimeter of a rectangle instantly, with the formulas explained.",
    primaryKeyword: "rectangle area calculator",
    secondaryKeywords: ["area of a rectangle", "rectangle perimeter calculator", "length times width"],
    fields: [
      { id: "length", label: "Length", type: "number", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
      { id: "width", label: "Width", type: "number", placeholder: "3", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "area", label: "Area", format: "number", decimals: 4, isPrimary: true },
      { id: "perimeter", label: "Perimeter", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "area = length × width;  perimeter = 2 × (length + width)",
    formulaExplanation:
      "The area of a rectangle is the length multiplied by the width because a rectangle can be tiled by rows and columns of unit squares, and the count of those squares is exactly the product of the two side lengths. The perimeter is the total distance around the outside, so you add the two lengths and the two widths, which simplifies to twice the sum of one length and one width because opposite sides are equal.",
    explanation:
      "A rectangle is a four-sided shape with four right angles, where opposite sides are equal in length. It is one of the most common shapes in everyday life, from rooms and screens to sheets of paper and plots of land, which makes calculating its area and perimeter a frequent, practical task. This rectangle area calculator takes the length and the width and returns both the area, the amount of surface the rectangle covers, and the perimeter, the distance around its edge. The area is found by multiplying the length by the width, and it is measured in square units such as square metres or square feet. The perimeter is found by adding up all four sides, which because opposite sides match is simply twice the sum of the length and the width, measured in ordinary linear units. For a rectangle 5 units long and 3 units wide, the area is 15 square units and the perimeter is 16 units. Homeowners estimating flooring or paint, gardeners planning beds, designers sizing layouts, and students learning geometry all use a rectangle area calculator to get both measurements at once without the risk of mixing up the two formulas.",
    example: {
      inputs: { length: 5, width: 3 },
      explanation: "Area = 5 × 3 = 15 square units; perimeter = 2 × (5 + 3) = 16 units.",
    },
    faqs: [
      {
        question: "How do I find the area of a rectangle?",
        answer: "Multiply the length by the width. Both measurements must be in the same unit, and the result is in square units of that measure, such as square metres or square feet. For a rectangle that is 5 metres long and 3 metres wide, the area is 5 times 3, which equals 15 square metres. The calculator does this multiplication for you and also returns the perimeter alongside it.",
      },
      {
        question: "What is the difference between area and perimeter?",
        answer: "Area measures the flat space a rectangle covers and is given in square units, while perimeter measures the total length of its boundary and is given in ordinary linear units. Area answers how much surface there is to paint or carpet, whereas perimeter answers how much fencing or trim you need around the edge. They are calculated differently and describe two genuinely different properties of the same shape.",
      },
      {
        question: "Do length and width need the same units?",
        answer: "Yes. Both sides must be expressed in the same unit before you multiply or add them, or the result will be meaningless. If one side is in metres and the other in centimetres, convert one first so they match. Once the units agree, the area comes out in that unit squared and the perimeter in that unit, and the calculator assumes consistent units throughout.",
      },
      {
        question: "How is the area of a square related?",
        answer: "A square is a special rectangle whose length and width are equal, so its area is simply one side multiplied by itself, or the side squared. You can use this rectangle calculator for a square by entering the same value for both the length and the width. The perimeter of a square then works out to four times the side length, since all four sides are identical.",
      },
      {
        question: "Can I use decimals for length and width?",
        answer: "Absolutely. Real measurements rarely land on whole numbers, so the calculator accepts decimal values for both the length and the width. Entering 5.5 by 3.25, for example, returns a precise area and perimeter without rounding your inputs. This is useful for room dimensions, fabric, and any measurement taken with a tape or ruler where fractional units are the norm rather than the exception.",
      },
    ],
    relatedCalculators: ["circle-calculator", "triangle-area-calculator", "trapezoid-area-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
    slugEs: "calculadora-de-area-de-rectangulo",
    titleEs: "Calculadora de Área de Rectángulo",
    shortDescriptionEs: "Calcula el área y el perímetro de un rectángulo.",
    seoTitleEs: "Calculadora de Área de Rectángulo — Área y Perímetro",
    metaDescriptionEs:
      "Calculadora de área de rectángulo gratuita. Introduce el largo y el ancho para hallar el área y el perímetro de un rectángulo al instante, con las fórmulas explicadas.",
    primaryKeywordEs: "calculadora de área de rectángulo",
    secondaryKeywordsEs: ["área de un rectángulo", "calculadora de perímetro de rectángulo", "largo por ancho"],
    formulaExplanationEs:
      "El área de un rectángulo es el largo multiplicado por el ancho, porque un rectángulo se puede cubrir con filas y columnas de cuadrados unitarios, y el número de esos cuadrados es exactamente el producto de las dos longitudes de los lados. El perímetro es la distancia total alrededor del exterior, así que sumas los dos largos y los dos anchos, lo que se simplifica al doble de la suma de un largo y un ancho porque los lados opuestos son iguales.",
    explanationEs:
      "Un rectángulo es una figura de cuatro lados con cuatro ángulos rectos, donde los lados opuestos tienen la misma longitud. Es una de las figuras más comunes de la vida diaria, desde habitaciones y pantallas hasta hojas de papel y terrenos, lo que convierte el cálculo de su área y perímetro en una tarea frecuente y práctica. Esta calculadora de área de rectángulo toma el largo y el ancho y devuelve tanto el área, la cantidad de superficie que cubre el rectángulo, como el perímetro, la distancia alrededor de su borde. El área se halla multiplicando el largo por el ancho, y se mide en unidades cuadradas como metros cuadrados o pies cuadrados. El perímetro se halla sumando los cuatro lados, que al ser iguales los lados opuestos es simplemente el doble de la suma del largo y el ancho, medido en unidades lineales ordinarias. Para un rectángulo de 5 unidades de largo y 3 de ancho, el área es 15 unidades cuadradas y el perímetro es 16 unidades. Propietarios que estiman pisos o pintura, jardineros que planifican canteros, diseñadores que ajustan diseños y estudiantes que aprenden geometría usan una calculadora de área de rectángulo para obtener ambas medidas a la vez sin arriesgarse a confundir las dos fórmulas.",
    exampleEs: {
      inputs: { length: 5, width: 3 },
      explanation: "Área = 5 × 3 = 15 unidades cuadradas; perímetro = 2 × (5 + 3) = 16 unidades.",
    },
    faqsEs: [
      {
        question: "¿Cómo hallo el área de un rectángulo?",
        answer: "Multiplica el largo por el ancho. Ambas medidas deben estar en la misma unidad, y el resultado queda en unidades cuadradas de esa medida, como metros cuadrados o pies cuadrados. Para un rectángulo de 5 metros de largo y 3 metros de ancho, el área es 5 por 3, que da 15 metros cuadrados. La calculadora hace esta multiplicación por ti y además devuelve el perímetro junto a ella.",
      },
      {
        question: "¿Cuál es la diferencia entre área y perímetro?",
        answer: "El área mide el espacio plano que cubre un rectángulo y se da en unidades cuadradas, mientras que el perímetro mide la longitud total de su contorno y se da en unidades lineales ordinarias. El área responde cuánta superficie hay que pintar o alfombrar, y el perímetro responde cuánta cerca o moldura necesitas alrededor del borde. Se calculan de forma diferente y describen dos propiedades realmente distintas de la misma figura.",
      },
      {
        question: "¿El largo y el ancho necesitan las mismas unidades?",
        answer: "Sí. Ambos lados deben expresarse en la misma unidad antes de multiplicarlos o sumarlos, o el resultado no tendrá sentido. Si un lado está en metros y el otro en centímetros, convierte uno primero para que coincidan. Una vez que las unidades concuerdan, el área sale en esa unidad al cuadrado y el perímetro en esa unidad, y la calculadora asume unidades coherentes en todo momento.",
      },
      {
        question: "¿Cómo se relaciona el área de un cuadrado?",
        answer: "Un cuadrado es un rectángulo especial cuyo largo y ancho son iguales, así que su área es simplemente un lado multiplicado por sí mismo, o el lado al cuadrado. Puedes usar esta calculadora de rectángulos para un cuadrado introduciendo el mismo valor tanto en el largo como en el ancho. El perímetro de un cuadrado resulta entonces cuatro veces la longitud del lado, ya que los cuatro lados son idénticos.",
      },
      {
        question: "¿Puedo usar decimales para el largo y el ancho?",
        answer: "Por supuesto. Las medidas reales rara vez caen en números enteros, así que la calculadora acepta valores decimales tanto para el largo como para el ancho. Introducir 5,5 por 3,25, por ejemplo, devuelve un área y un perímetro precisos sin redondear tus datos. Esto es útil para dimensiones de habitaciones, tela y cualquier medida tomada con una cinta o regla donde las unidades fraccionarias son la norma.",
      },
    ],
  },
  {
    id: "sphere-volume",
    slug: "sphere-volume-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Sphere Volume Calculator",
    shortDescription: "Find the volume and surface area of a sphere.",
    seoTitle: "Sphere Volume Calculator — Volume & Surface Area",
    metaDescription:
      "Free sphere volume calculator. Enter the radius to find the volume and surface area of a sphere using the standard geometry formulas.",
    primaryKeyword: "sphere volume calculator",
    secondaryKeywords: ["volume of a sphere", "sphere surface area calculator", "ball volume"],
    fields: [
      { id: "radius", label: "Radius", type: "number", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "volume", label: "Volume", format: "number", decimals: 4, isPrimary: true },
      { id: "surfaceArea", label: "Surface area", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "volume = 4⁄3 × π × r³;  surface area = 4 × π × r²",
    formulaExplanation:
      "The volume of a sphere is four-thirds of pi times the radius cubed, a result derived through integral calculus by summing infinitely many thin circular slices stacked from pole to pole. The surface area is four times pi times the radius squared, which is exactly the area of four great circles of the sphere. Both formulas depend only on the radius, so cubing it drives the volume and squaring it drives the surface area as the ball grows.",
    explanation:
      "A sphere is a perfectly round three-dimensional object where every point on its surface lies the same distance, the radius, from its centre. Balls, planets, bubbles, and droplets are all approximately spherical, so finding a sphere's volume and surface area comes up in physics, engineering, manufacturing, and everyday estimation. This sphere volume calculator takes a single input, the radius, and returns both the volume, the amount of space the sphere encloses, and the surface area, the total area of its curved outer skin. The volume follows the formula four-thirds times pi times the radius cubed, which grows very quickly as the radius increases because the radius is raised to the third power. The surface area is four times pi times the radius squared, equal to the combined area of four flat circles the size of the sphere's widest cross-section. For a sphere with a radius of 3 units, the volume is about 113.1 cubic units and, in this particular case, the surface area is also about 113.1 square units. Engineers sizing tanks, scientists modelling cells or planets, and students studying solid geometry all rely on a sphere volume calculator to apply these two formulas accurately from just the radius.",
    example: {
      inputs: { radius: 3 },
      explanation: "Volume = 4⁄3 × π × 3³ ≈ 113.10 cubic units; surface area = 4 × π × 3² ≈ 113.10 square units.",
    },
    faqs: [
      {
        question: "What is the formula for the volume of a sphere?",
        answer: "The volume of a sphere equals four-thirds multiplied by pi multiplied by the radius cubed. In symbols that is four over three times pi times r to the third power. Because the radius is cubed, the volume increases dramatically as the sphere grows: doubling the radius makes the volume eight times larger. The calculator applies this formula directly using the precise value of pi built into the computation.",
      },
      {
        question: "How do I find a sphere's surface area?",
        answer: "The surface area of a sphere is four times pi times the radius squared. This equals the area of four great circles, the largest circles you can draw on the sphere. Because the radius is squared rather than cubed, surface area grows more slowly than volume as the sphere enlarges. Enter the radius and the calculator returns the surface area alongside the volume in a single step.",
      },
      {
        question: "What if I only know the diameter?",
        answer: "The diameter is twice the radius, so simply halve the diameter to get the radius before entering it. If a ball measures 6 units across, its radius is 3 units, which is the value to type into the calculator. Both the volume and surface area formulas are written in terms of the radius, so converting the diameter first ensures the results come out correctly.",
      },
      {
        question: "Why does volume grow so much faster than surface area?",
        answer: "Volume depends on the radius cubed while surface area depends on the radius squared, so as the radius increases the volume rises with the third power and the surface area only with the second. This is why large spheres enclose far more space relative to their skin than small ones, a fact that matters in biology for cell size and in engineering for storage tanks and pressure vessels.",
      },
      {
        question: "What units does the answer use?",
        answer: "The volume is expressed in cubic units of whatever unit you used for the radius, such as cubic centimetres or cubic metres, while the surface area is in square units of the same measure. If you enter the radius in centimetres, the volume is in cubic centimetres and the surface area in square centimetres. Keeping the radius in a single consistent unit ensures both results are meaningful.",
      },
    ],
    relatedCalculators: ["cylinder-volume-calculator", "cone-volume-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
    slugEs: "calculadora-de-volumen-de-esfera",
    titleEs: "Calculadora de Volumen de Esfera",
    shortDescriptionEs: "Calcula el volumen y el área superficial de una esfera.",
    seoTitleEs: "Calculadora de Volumen de Esfera — Volumen y Área Superficial",
    metaDescriptionEs:
      "Calculadora de volumen de esfera gratuita. Introduce el radio para hallar el volumen y el área superficial de una esfera usando las fórmulas estándar de geometría.",
    primaryKeywordEs: "calculadora de volumen de esfera",
    secondaryKeywordsEs: ["volumen de una esfera", "calculadora de área superficial de esfera", "volumen de una bola"],
    formulaExplanationEs:
      "El volumen de una esfera es cuatro tercios de pi por el radio al cubo, un resultado obtenido mediante cálculo integral al sumar infinitas rebanadas circulares delgadas apiladas de polo a polo. El área superficial es cuatro por pi por el radio al cuadrado, que es exactamente el área de cuatro círculos máximos de la esfera. Ambas fórmulas dependen solo del radio, así que elevarlo al cubo impulsa el volumen y elevarlo al cuadrado impulsa el área superficial a medida que la bola crece.",
    explanationEs:
      "Una esfera es un objeto tridimensional perfectamente redondo donde cada punto de su superficie está a la misma distancia, el radio, de su centro. Las pelotas, los planetas, las burbujas y las gotas son todos aproximadamente esféricos, así que hallar el volumen y el área superficial de una esfera aparece en física, ingeniería, fabricación y estimaciones cotidianas. Esta calculadora de volumen de esfera toma un único dato, el radio, y devuelve tanto el volumen, la cantidad de espacio que encierra la esfera, como el área superficial, el área total de su piel exterior curva. El volumen sigue la fórmula cuatro tercios por pi por el radio al cubo, que crece muy rápido al aumentar el radio porque este está elevado a la tercera potencia. El área superficial es cuatro por pi por el radio al cuadrado, igual al área combinada de cuatro círculos planos del tamaño de la sección transversal más ancha de la esfera. Para una esfera con radio de 3 unidades, el volumen es unas 113,1 unidades cúbicas y, en este caso concreto, el área superficial también es unas 113,1 unidades cuadradas. Ingenieros que dimensionan tanques, científicos que modelan células o planetas y estudiantes que estudian geometría de sólidos confían en una calculadora de volumen de esfera para aplicar estas dos fórmulas con precisión solo a partir del radio.",
    exampleEs: {
      inputs: { radius: 3 },
      explanation: "Volumen = 4⁄3 × π × 3³ ≈ 113,10 unidades cúbicas; área superficial = 4 × π × 3² ≈ 113,10 unidades cuadradas.",
    },
    faqsEs: [
      {
        question: "¿Cuál es la fórmula del volumen de una esfera?",
        answer: "El volumen de una esfera es igual a cuatro tercios multiplicado por pi multiplicado por el radio al cubo. En símbolos es cuatro sobre tres por pi por r elevado a la tercera potencia. Como el radio está al cubo, el volumen aumenta drásticamente al crecer la esfera: duplicar el radio multiplica el volumen por ocho. La calculadora aplica esta fórmula directamente usando el valor preciso de pi incorporado en el cálculo.",
      },
      {
        question: "¿Cómo hallo el área superficial de una esfera?",
        answer: "El área superficial de una esfera es cuatro por pi por el radio al cuadrado. Esto equivale al área de cuatro círculos máximos, los círculos más grandes que puedes dibujar sobre la esfera. Como el radio está al cuadrado en lugar de al cubo, el área superficial crece más despacio que el volumen al agrandarse la esfera. Introduce el radio y la calculadora devuelve el área superficial junto al volumen en un solo paso.",
      },
      {
        question: "¿Qué hago si solo conozco el diámetro?",
        answer: "El diámetro es el doble del radio, así que simplemente divide el diámetro entre dos para obtener el radio antes de introducirlo. Si una bola mide 6 unidades de lado a lado, su radio es 3 unidades, que es el valor que hay que escribir en la calculadora. Tanto el volumen como el área superficial se expresan en función del radio, así que convertir el diámetro primero asegura resultados correctos.",
      },
      {
        question: "¿Por qué el volumen crece mucho más rápido que el área superficial?",
        answer: "El volumen depende del radio al cubo mientras que el área superficial depende del radio al cuadrado, así que al aumentar el radio el volumen sube con la tercera potencia y el área superficial solo con la segunda. Por eso las esferas grandes encierran mucho más espacio en relación con su piel que las pequeñas, algo que importa en biología para el tamaño celular y en ingeniería para tanques de almacenamiento y recipientes a presión.",
      },
      {
        question: "¿Qué unidades usa la respuesta?",
        answer: "El volumen se expresa en unidades cúbicas de la unidad que hayas usado para el radio, como centímetros cúbicos o metros cúbicos, mientras que el área superficial va en unidades cuadradas de la misma medida. Si introduces el radio en centímetros, el volumen queda en centímetros cúbicos y el área superficial en centímetros cuadrados. Mantener el radio en una sola unidad coherente asegura que ambos resultados sean significativos.",
      },
    ],
  },
  {
    id: "cylinder-volume",
    slug: "cylinder-volume-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Cylinder Volume Calculator",
    shortDescription: "Find the volume and surface area of a cylinder.",
    seoTitle: "Cylinder Volume Calculator — Volume & Surface Area",
    metaDescription:
      "Free cylinder volume calculator. Enter the radius and height to find the volume and total surface area of a cylinder using standard geometry formulas.",
    primaryKeyword: "cylinder volume calculator",
    secondaryKeywords: ["volume of a cylinder", "cylinder surface area calculator", "tank volume"],
    fields: [
      { id: "radius", label: "Radius", type: "number", placeholder: "2", required: true, span: 1, min: 0, step: 0.01 },
      { id: "height", label: "Height", type: "number", placeholder: "5", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "volume", label: "Volume", format: "number", decimals: 4, isPrimary: true },
      { id: "surfaceArea", label: "Surface area", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "volume = π × r² × h;  surface area = 2 × π × r × (r + h)",
    formulaExplanation:
      "A cylinder's volume is the area of its circular base, pi times the radius squared, multiplied by the height, because the shape is a stack of identical circular cross-sections. The total surface area combines the two circular ends, each pi times the radius squared, with the curved side, which unrolls into a rectangle whose width is the base circumference and whose height is the cylinder's height. Factoring gives two pi r times the quantity r plus h.",
    explanation:
      "A cylinder is a three-dimensional shape with two parallel circular ends joined by a curved surface, like a can, a pipe, or a storage tank. Calculating its volume and surface area is a routine task in engineering, manufacturing, cooking, and construction, wherever round containers appear. This cylinder volume calculator takes two inputs, the radius of the circular base and the height, and returns the volume, the space the cylinder holds, and the total surface area, the combined area of both ends plus the curved side. The volume is the area of the circular base, pi times the radius squared, multiplied by the height, because a cylinder is effectively a stack of identical circles. The total surface area adds the two circular caps to the curved lateral surface, which when unrolled is a rectangle. For a cylinder with a radius of 2 units and a height of 5 units, the volume is about 62.83 cubic units and the total surface area is about 87.96 square units. Engineers sizing tanks and pipes, cooks scaling tins, and students tackling solid geometry all use a cylinder volume calculator to get both figures reliably from just the radius and the height.",
    example: {
      inputs: { radius: 2, height: 5 },
      explanation: "Volume = π × 2² × 5 ≈ 62.83 cubic units; surface area = 2 × π × 2 × (2 + 5) ≈ 87.96 square units.",
    },
    faqs: [
      {
        question: "How do I calculate the volume of a cylinder?",
        answer: "Multiply the area of the circular base by the height. The base area is pi times the radius squared, so the full volume is pi times the radius squared times the height. For a cylinder with a radius of 2 and a height of 5, that is pi times 4 times 5, roughly 62.83 cubic units. The calculator performs this using the precise value of pi automatically.",
      },
      {
        question: "What does the surface area include?",
        answer: "The total surface area of a closed cylinder includes three parts: the top circle, the bottom circle, and the curved side that wraps between them. The two circles together contribute twice pi times the radius squared, and the curved side contributes two pi times the radius times the height. The formula two pi r times r plus h combines all three into one expression, which the calculator evaluates for you.",
      },
      {
        question: "How is a cylinder's volume related to a prism?",
        answer: "A cylinder is essentially a prism with a circular base rather than a polygonal one. For any prism, the volume is the base area times the height, and a cylinder follows the same rule with the base being a circle. This is why the volume formula is simply the circle's area, pi times the radius squared, multiplied by how tall the cylinder stands, exactly as with a rectangular box.",
      },
      {
        question: "What if I only have the diameter?",
        answer: "Halve the diameter to obtain the radius before entering it, since both formulas are written in terms of the radius. A pipe measuring 4 units across the opening has a radius of 2 units. Using the diameter directly in place of the radius would overstate the volume fourfold, so always convert first. Once you have the radius and the height, the calculator returns both results correctly.",
      },
      {
        question: "Can this find the capacity of a tank?",
        answer: "Yes. The volume of a cylinder is its capacity, so entering the internal radius and internal height of a cylindrical tank gives how much it can hold in cubic units. To convert to litres, remember that one cubic decimetre equals one litre, or use the relationship that one cubic metre equals a thousand litres. Keep your radius and height in consistent units for an accurate capacity figure.",
      },
    ],
    relatedCalculators: ["sphere-volume-calculator", "cone-volume-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
    slugEs: "calculadora-de-volumen-de-cilindro",
    titleEs: "Calculadora de Volumen de Cilindro",
    shortDescriptionEs: "Calcula el volumen y el área superficial de un cilindro.",
    seoTitleEs: "Calculadora de Volumen de Cilindro — Volumen y Área Superficial",
    metaDescriptionEs:
      "Calculadora de volumen de cilindro gratuita. Introduce el radio y la altura para hallar el volumen y el área superficial total de un cilindro con las fórmulas estándar de geometría.",
    primaryKeywordEs: "calculadora de volumen de cilindro",
    secondaryKeywordsEs: ["volumen de un cilindro", "calculadora de área superficial de cilindro", "volumen de un tanque"],
    formulaExplanationEs:
      "El volumen de un cilindro es el área de su base circular, pi por el radio al cuadrado, multiplicada por la altura, porque la figura es un apilamiento de secciones circulares idénticas. El área superficial total combina las dos tapas circulares, cada una pi por el radio al cuadrado, con el lado curvo, que al desenrollarse forma un rectángulo cuyo ancho es la circunferencia de la base y cuya altura es la del cilindro. Al factorizar se obtiene dos pi r por la cantidad r más h.",
    explanationEs:
      "Un cilindro es una figura tridimensional con dos extremos circulares paralelos unidos por una superficie curva, como una lata, una tubería o un tanque de almacenamiento. Calcular su volumen y su área superficial es una tarea habitual en ingeniería, fabricación, cocina y construcción, dondequiera que aparezcan recipientes redondos. Esta calculadora de volumen de cilindro toma dos datos, el radio de la base circular y la altura, y devuelve el volumen, el espacio que contiene el cilindro, y el área superficial total, el área combinada de ambos extremos más el lado curvo. El volumen es el área de la base circular, pi por el radio al cuadrado, multiplicada por la altura, porque un cilindro es en efecto un apilamiento de círculos idénticos. El área superficial total suma las dos tapas circulares a la superficie lateral curva, que al desenrollarse es un rectángulo. Para un cilindro con radio de 2 unidades y altura de 5 unidades, el volumen es unas 62,83 unidades cúbicas y el área superficial total es unas 87,96 unidades cuadradas. Ingenieros que dimensionan tanques y tuberías, cocineros que escalan moldes y estudiantes que abordan la geometría de sólidos usan una calculadora de volumen de cilindro para obtener ambas cifras de forma fiable solo a partir del radio y la altura.",
    exampleEs: {
      inputs: { radius: 2, height: 5 },
      explanation: "Volumen = π × 2² × 5 ≈ 62,83 unidades cúbicas; área superficial = 2 × π × 2 × (2 + 5) ≈ 87,96 unidades cuadradas.",
    },
    faqsEs: [
      {
        question: "¿Cómo calculo el volumen de un cilindro?",
        answer: "Multiplica el área de la base circular por la altura. El área de la base es pi por el radio al cuadrado, así que el volumen completo es pi por el radio al cuadrado por la altura. Para un cilindro con radio de 2 y altura de 5, eso es pi por 4 por 5, unas 62,83 unidades cúbicas. La calculadora lo realiza usando el valor preciso de pi de forma automática.",
      },
      {
        question: "¿Qué incluye el área superficial?",
        answer: "El área superficial total de un cilindro cerrado incluye tres partes: el círculo superior, el círculo inferior y el lado curvo que los envuelve. Los dos círculos juntos aportan dos veces pi por el radio al cuadrado, y el lado curvo aporta dos pi por el radio por la altura. La fórmula dos pi r por r más h combina las tres partes en una sola expresión, que la calculadora evalúa por ti.",
      },
      {
        question: "¿Cómo se relaciona el volumen de un cilindro con el de un prisma?",
        answer: "Un cilindro es esencialmente un prisma con base circular en lugar de poligonal. Para cualquier prisma, el volumen es el área de la base por la altura, y un cilindro sigue la misma regla con la base siendo un círculo. Por eso la fórmula del volumen es simplemente el área del círculo, pi por el radio al cuadrado, multiplicada por lo alto que sea el cilindro, igual que con una caja rectangular.",
      },
      {
        question: "¿Qué hago si solo tengo el diámetro?",
        answer: "Divide el diámetro entre dos para obtener el radio antes de introducirlo, ya que ambas fórmulas se expresan en función del radio. Una tubería que mide 4 unidades de lado a lado tiene un radio de 2 unidades. Usar el diámetro directamente en lugar del radio cuadruplicaría el volumen, así que convierte siempre primero. Una vez que tienes el radio y la altura, la calculadora devuelve ambos resultados correctamente.",
      },
      {
        question: "¿Puede hallar la capacidad de un tanque?",
        answer: "Sí. El volumen de un cilindro es su capacidad, así que introducir el radio interno y la altura interna de un tanque cilíndrico da cuánto puede contener en unidades cúbicas. Para convertir a litros, recuerda que un decímetro cúbico equivale a un litro, o usa que un metro cúbico equivale a mil litros. Mantén el radio y la altura en unidades coherentes para una cifra de capacidad precisa.",
      },
    ],
  },
  {
    id: "cone-volume",
    slug: "cone-volume-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Cone Volume Calculator",
    shortDescription: "Find the volume of a cone from its radius and height.",
    seoTitle: "Cone Volume Calculator — Volume of a Cone",
    metaDescription:
      "Free cone volume calculator. Enter the base radius and height to find the volume of a cone using the standard one-third base times height formula.",
    primaryKeyword: "cone volume calculator",
    secondaryKeywords: ["volume of a cone", "cone volume formula", "ice cream cone volume"],
    fields: [
      { id: "radius", label: "Base radius", type: "number", placeholder: "3", required: true, span: 1, min: 0, step: 0.01 },
      { id: "height", label: "Height", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 0.01 },
    ],
    results: [
      { id: "volume", label: "Volume", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "volume = 1⁄3 × π × r² × h",
    formulaExplanation:
      "A cone's volume is one-third of pi times the radius squared times the height. The factor of one-third appears because a cone occupies exactly a third of the cylinder that shares its base radius and height, a fact proved by integration or by the classic experiment of pouring water from a cone into a matching cylinder three times to fill it. The base area, pi times the radius squared, is multiplied by the height and then divided by three.",
    explanation:
      "A cone is a three-dimensional shape with a circular base that narrows smoothly to a single point called the apex. Ice cream cones, funnels, party hats, and piles of sand or gravel all take this form, so finding a cone's volume is useful in cooking, manufacturing, and construction as well as in the classroom. This cone volume calculator takes two inputs, the radius of the circular base and the perpendicular height from the base to the apex, and returns the volume, the amount of space the cone encloses. The formula is one-third of pi times the radius squared times the height, and the crucial detail is that factor of one-third: a cone holds exactly a third as much as a cylinder with the same base and height. This is a result you can demonstrate by filling a cone with water and pouring it into a matching cylinder, which takes three cones to fill. For a cone with a base radius of 3 units and a height of 4 units, the volume is about 37.70 cubic units. Students studying solid geometry, engineers designing hoppers, and anyone estimating the contents of a conical pile use a cone volume calculator to apply the formula quickly and correctly.",
    example: {
      inputs: { radius: 3, height: 4 },
      explanation: "Volume = 1⁄3 × π × 3² × 4 ≈ 37.70 cubic units.",
    },
    faqs: [
      {
        question: "What is the formula for the volume of a cone?",
        answer: "The volume of a cone is one-third times pi times the radius of the base squared times the height. In symbols that is one over three times pi times r squared times h. The height must be the perpendicular distance from the base to the apex, not the slanted side. The calculator uses this formula with the built-in precise value of pi to return an accurate volume from your two inputs.",
      },
      {
        question: "Why is there a one-third in the formula?",
        answer: "The one-third reflects that a cone holds exactly a third of the volume of a cylinder sharing the same base radius and height. You can see this by pouring water: it takes three full cones to fill the matching cylinder. Mathematically the factor comes from integrating the shrinking circular cross-sections from the wide base up to the single point at the apex, which averages out to a third of the full cylinder.",
      },
      {
        question: "What is the difference between height and slant height?",
        answer: "The height in this formula is the vertical distance straight up from the centre of the base to the apex. The slant height is the distance measured along the sloping outer surface from the edge of the base to the apex, which is always longer. Use the perpendicular height here. If you only know the slant height and radius, find the height with the Pythagorean theorem first.",
      },
      {
        question: "How does a cone compare to a cylinder and sphere?",
        answer: "For the same radius and height, a cone holds one-third of the matching cylinder's volume. A hemisphere, a cylinder, and a cone with equal radii and heights relate in a neat ratio that students often learn together. The shared factor of pi times the radius squared appears in each, with the cone scaled by one-third, making the trio a memorable set of solid-geometry results.",
      },
      {
        question: "Can I use this for a conical pile of material?",
        answer: "Yes. A heap of sand, gravel, or grain settles into an approximate cone, so measuring the radius of its circular base and its peak height lets you estimate the volume with this calculator. The estimate assumes a reasonably regular cone shape. For rough stockpiles the result is an approximation, but it is often close enough for ordering materials or estimating quantities on site.",
      },
    ],
    relatedCalculators: ["cylinder-volume-calculator", "sphere-volume-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
    slugEs: "calculadora-de-volumen-de-cono",
    titleEs: "Calculadora de Volumen de Cono",
    shortDescriptionEs: "Calcula el volumen de un cono a partir de su radio y altura.",
    seoTitleEs: "Calculadora de Volumen de Cono — Volumen de un Cono",
    metaDescriptionEs:
      "Calculadora de volumen de cono gratuita. Introduce el radio de la base y la altura para hallar el volumen de un cono con la fórmula estándar de un tercio de base por altura.",
    primaryKeywordEs: "calculadora de volumen de cono",
    secondaryKeywordsEs: ["volumen de un cono", "fórmula del volumen de un cono", "volumen de un cono de helado"],
    formulaExplanationEs:
      "El volumen de un cono es un tercio de pi por el radio al cuadrado por la altura. El factor de un tercio aparece porque un cono ocupa exactamente un tercio del cilindro que comparte su radio de base y su altura, un hecho demostrado por integración o por el experimento clásico de verter agua de un cono a un cilindro que coincide tres veces para llenarlo. El área de la base, pi por el radio al cuadrado, se multiplica por la altura y luego se divide entre tres.",
    explanationEs:
      "Un cono es una figura tridimensional con una base circular que se estrecha suavemente hasta un único punto llamado ápice. Los conos de helado, los embudos, los gorros de fiesta y los montones de arena o grava toman esta forma, así que hallar el volumen de un cono es útil en cocina, fabricación y construcción, además de en el aula. Esta calculadora de volumen de cono toma dos datos, el radio de la base circular y la altura perpendicular desde la base hasta el ápice, y devuelve el volumen, la cantidad de espacio que encierra el cono. La fórmula es un tercio de pi por el radio al cuadrado por la altura, y el detalle crucial es ese factor de un tercio: un cono contiene exactamente un tercio de lo que contiene un cilindro con la misma base y altura. Este es un resultado que puedes demostrar llenando un cono de agua y vertiéndolo en un cilindro que coincide, lo que requiere tres conos para llenarlo. Para un cono con radio de base de 3 unidades y altura de 4 unidades, el volumen es unas 37,70 unidades cúbicas. Estudiantes que estudian geometría de sólidos, ingenieros que diseñan tolvas y cualquiera que estime el contenido de un montón cónico usan una calculadora de volumen de cono para aplicar la fórmula rápida y correctamente.",
    exampleEs: {
      inputs: { radius: 3, height: 4 },
      explanation: "Volumen = 1⁄3 × π × 3² × 4 ≈ 37,70 unidades cúbicas.",
    },
    faqsEs: [
      {
        question: "¿Cuál es la fórmula del volumen de un cono?",
        answer: "El volumen de un cono es un tercio por pi por el radio de la base al cuadrado por la altura. En símbolos es uno sobre tres por pi por r al cuadrado por h. La altura debe ser la distancia perpendicular desde la base hasta el ápice, no el lado inclinado. La calculadora usa esta fórmula con el valor preciso de pi incorporado para devolver un volumen exacto a partir de tus dos datos.",
      },
      {
        question: "¿Por qué hay un un tercio en la fórmula?",
        answer: "El un tercio refleja que un cono contiene exactamente un tercio del volumen de un cilindro que comparte el mismo radio de base y altura. Puedes verlo vertiendo agua: se necesitan tres conos llenos para llenar el cilindro que coincide. Matemáticamente el factor proviene de integrar las secciones circulares que se encogen desde la base ancha hasta el único punto del ápice, lo que promedia un tercio del cilindro completo.",
      },
      {
        question: "¿Cuál es la diferencia entre altura y altura inclinada?",
        answer: "La altura en esta fórmula es la distancia vertical recta hacia arriba desde el centro de la base hasta el ápice. La altura inclinada es la distancia medida a lo largo de la superficie exterior inclinada desde el borde de la base hasta el ápice, que siempre es mayor. Usa aquí la altura perpendicular. Si solo conoces la altura inclinada y el radio, halla primero la altura con el teorema de Pitágoras.",
      },
      {
        question: "¿Cómo se compara un cono con un cilindro y una esfera?",
        answer: "Para el mismo radio y altura, un cono contiene un tercio del volumen del cilindro que coincide. Una semiesfera, un cilindro y un cono con radios y alturas iguales se relacionan en una proporción elegante que los estudiantes suelen aprender juntos. El factor común de pi por el radio al cuadrado aparece en cada uno, con el cono escalado por un tercio, lo que hace del trío un conjunto memorable de resultados de geometría de sólidos.",
      },
      {
        question: "¿Puedo usar esto para un montón cónico de material?",
        answer: "Sí. Un montón de arena, grava o grano se asienta en un cono aproximado, así que medir el radio de su base circular y su altura máxima te permite estimar el volumen con esta calculadora. La estimación asume una forma de cono razonablemente regular. Para montones irregulares el resultado es una aproximación, pero suele ser suficientemente cercano para pedir materiales o estimar cantidades en obra.",
      },
    ],
  },
  {
    id: "trapezoid-area",
    slug: "trapezoid-area-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Trapezoid Area Calculator",
    shortDescription: "Find the area of a trapezoid from its bases and height.",
    seoTitle: "Trapezoid Area Calculator — Area of a Trapezoid",
    metaDescription:
      "Free trapezoid area calculator. Enter the two parallel bases and the height to find the area of a trapezoid using the average-of-bases formula.",
    primaryKeyword: "trapezoid area calculator",
    secondaryKeywords: ["area of a trapezoid", "trapezium area calculator", "trapezoid formula"],
    fields: [
      { id: "base1", label: "Base 1 (a)", type: "number", placeholder: "4", required: true, span: 1, min: 0, step: 0.01 },
      { id: "base2", label: "Base 2 (b)", type: "number", placeholder: "6", required: true, span: 1, min: 0, step: 0.01 },
      { id: "height", label: "Height (h)", type: "number", placeholder: "3", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "area", label: "Area", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "area = (base₁ + base₂) ÷ 2 × height",
    formulaExplanation:
      "The area of a trapezoid is the average of the two parallel sides multiplied by the distance between them. Averaging the bases works because the shape widens or narrows evenly from one parallel side to the other, so the mean of the two lengths represents its typical width. Multiplying that average width by the perpendicular height gives the enclosed area, exactly as multiplying width by height gives the area of the equivalent rectangle.",
    explanation:
      "A trapezoid, called a trapezium in British English, is a four-sided shape with exactly one pair of parallel sides, known as the bases. Roof cross-sections, table tops, bridge supports, and many plots of land take this form, so calculating a trapezoid's area is a common practical need. This trapezoid area calculator takes three inputs, the lengths of the two parallel bases and the perpendicular height between them, and returns the area, the flat space the shape covers. The formula averages the two bases and multiplies by the height: you add the two parallel sides, divide by two to get their average width, then multiply by the distance separating them. This is the same as finding the area of a rectangle whose width equals the average of the two bases. For a trapezoid with bases of 4 and 6 units and a height of 3 units, the average base is 5 units, so the area is 5 times 3, which is 15 square units. Students learning geometry, builders estimating roofing or decking, and surveyors measuring irregular plots all rely on a trapezoid area calculator to handle the averaging step cleanly and avoid using the slanted sides by mistake.",
    example: {
      inputs: { base1: 4, base2: 6, height: 3 },
      explanation: "Area = (4 + 6) ÷ 2 × 3 = 5 × 3 = 15 square units.",
    },
    faqs: [
      {
        question: "What is the formula for the area of a trapezoid?",
        answer: "The area of a trapezoid is the sum of the two parallel bases divided by two, multiplied by the height. Written out, it is one half times base one plus base two, times the height. The height must be the perpendicular distance between the parallel sides. For bases of 4 and 6 with a height of 3, the area is one half times 10 times 3, which equals 15 square units.",
      },
      {
        question: "Which sides are the bases?",
        answer: "The bases are the two sides that are parallel to each other. A trapezoid has exactly one pair of parallel sides, and those two are the bases used in the formula. The other two sides, called the legs, can be slanted and of any length, and they are not used to calculate the area. Identifying the parallel pair correctly is the key step before applying the formula.",
      },
      {
        question: "What height should I use?",
        answer: "Use the perpendicular height, the shortest straight-line distance between the two parallel bases, measured at a right angle to them. Do not use the length of the slanted legs, which is longer and would overstate the area. If a trapezoid is drawn tilted, the height is still measured straight across between the parallel sides, not along the sloping edge. The calculator assumes you enter this perpendicular height.",
      },
      {
        question: "Why does averaging the bases work?",
        answer: "Because a trapezoid changes width evenly from one base to the other, the average of the two base lengths represents its effective width across the middle. Multiplying that average width by the height gives the same area as an equal-height rectangle of that average width. You can also picture two copies of the trapezoid joined to form a parallelogram, whose area is the base sum times height, then halved.",
      },
      {
        question: "Does the order of the two bases matter?",
        answer: "No. Because the formula adds the two bases together before dividing, it does not matter which one you label as base one and which as base two. Addition gives the same total either way, so the area comes out identical regardless of the order you enter them. Just make sure both values are the parallel sides and that the height is the perpendicular distance between them.",
      },
    ],
    relatedCalculators: ["rectangle-area-calculator", "triangle-area-calculator", "circle-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
    slugEs: "calculadora-de-area-de-trapecio",
    titleEs: "Calculadora de Área de Trapecio",
    shortDescriptionEs: "Calcula el área de un trapecio a partir de sus bases y altura.",
    seoTitleEs: "Calculadora de Área de Trapecio — Área de un Trapecio",
    metaDescriptionEs:
      "Calculadora de área de trapecio gratuita. Introduce las dos bases paralelas y la altura para hallar el área de un trapecio con la fórmula del promedio de las bases.",
    primaryKeywordEs: "calculadora de área de trapecio",
    secondaryKeywordsEs: ["área de un trapecio", "calculadora de área de trapezoide", "fórmula del trapecio"],
    formulaExplanationEs:
      "El área de un trapecio es el promedio de los dos lados paralelos multiplicado por la distancia entre ellos. Promediar las bases funciona porque la figura se ensancha o estrecha de forma uniforme de un lado paralelo al otro, así que la media de las dos longitudes representa su ancho típico. Multiplicar ese ancho promedio por la altura perpendicular da el área encerrada, igual que multiplicar ancho por alto da el área del rectángulo equivalente.",
    explanationEs:
      "Un trapecio, llamado trapezoide en algunas variantes, es una figura de cuatro lados con exactamente un par de lados paralelos, conocidos como las bases. Las secciones de tejado, las mesas, los soportes de puente y muchos terrenos toman esta forma, así que calcular el área de un trapecio es una necesidad práctica común. Esta calculadora de área de trapecio toma tres datos, las longitudes de las dos bases paralelas y la altura perpendicular entre ellas, y devuelve el área, el espacio plano que cubre la figura. La fórmula promedia las dos bases y multiplica por la altura: sumas los dos lados paralelos, divides entre dos para obtener su ancho promedio y luego multiplicas por la distancia que los separa. Esto es lo mismo que hallar el área de un rectángulo cuyo ancho sea el promedio de las dos bases. Para un trapecio con bases de 4 y 6 unidades y una altura de 3 unidades, la base promedio es 5 unidades, así que el área es 5 por 3, que da 15 unidades cuadradas. Estudiantes que aprenden geometría, constructores que estiman tejados o tarimas y topógrafos que miden terrenos irregulares confían en una calculadora de área de trapecio para manejar el paso del promedio limpiamente y evitar usar los lados inclinados por error.",
    exampleEs: {
      inputs: { base1: 4, base2: 6, height: 3 },
      explanation: "Área = (4 + 6) ÷ 2 × 3 = 5 × 3 = 15 unidades cuadradas.",
    },
    faqsEs: [
      {
        question: "¿Cuál es la fórmula del área de un trapecio?",
        answer: "El área de un trapecio es la suma de las dos bases paralelas dividida entre dos, multiplicada por la altura. Escrito, es un medio por base uno más base dos, por la altura. La altura debe ser la distancia perpendicular entre los lados paralelos. Para bases de 4 y 6 con una altura de 3, el área es un medio por 10 por 3, que da 15 unidades cuadradas.",
      },
      {
        question: "¿Cuáles son las bases?",
        answer: "Las bases son los dos lados que son paralelos entre sí. Un trapecio tiene exactamente un par de lados paralelos, y esos dos son las bases usadas en la fórmula. Los otros dos lados, llamados los catetos o lados oblicuos, pueden estar inclinados y tener cualquier longitud, y no se usan para calcular el área. Identificar correctamente el par paralelo es el paso clave antes de aplicar la fórmula.",
      },
      {
        question: "¿Qué altura debo usar?",
        answer: "Usa la altura perpendicular, la distancia en línea recta más corta entre las dos bases paralelas, medida en ángulo recto con ellas. No uses la longitud de los lados inclinados, que es mayor y sobreestimaría el área. Si un trapecio se dibuja inclinado, la altura sigue midiéndose en línea recta entre los lados paralelos, no a lo largo del borde oblicuo. La calculadora asume que introduces esta altura perpendicular.",
      },
      {
        question: "¿Por qué funciona promediar las bases?",
        answer: "Porque un trapecio cambia de ancho de forma uniforme de una base a la otra, el promedio de las dos longitudes de base representa su ancho efectivo por el medio. Multiplicar ese ancho promedio por la altura da la misma área que un rectángulo de igual altura y de ese ancho promedio. También puedes imaginar dos copias del trapecio unidas para formar un paralelogramo, cuya área es la suma de bases por altura, y luego dividida entre dos.",
      },
      {
        question: "¿Importa el orden de las dos bases?",
        answer: "No. Como la fórmula suma las dos bases antes de dividir, no importa cuál etiquetes como base uno y cuál como base dos. La suma da el mismo total de cualquier manera, así que el área sale idéntica sin importar el orden en que las introduzcas. Solo asegúrate de que ambos valores sean los lados paralelos y de que la altura sea la distancia perpendicular entre ellos.",
      },
    ],
  },
  {
    id: "harmonic-mean",
    slug: "harmonic-mean-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Harmonic Mean Calculator",
    shortDescription: "Find the harmonic mean of three numbers.",
    seoTitle: "Harmonic Mean Calculator — Average of Rates",
    metaDescription:
      "Free harmonic mean calculator. Enter three numbers to find their harmonic mean, the average best suited to rates, speeds, and ratios.",
    primaryKeyword: "harmonic mean calculator",
    secondaryKeywords: ["harmonic average calculator", "average of rates", "harmonic mean formula"],
    fields: [
      { id: "number1", label: "Number 1", type: "number", placeholder: "1", required: true, span: 1, step: 0.01 },
      { id: "number2", label: "Number 2", type: "number", placeholder: "2", required: true, span: 1, step: 0.01 },
      { id: "number3", label: "Number 3", type: "number", placeholder: "4", required: true, span: 2, step: 0.01 },
    ],
    results: [
      { id: "harmonicMean", label: "Harmonic mean", format: "number", decimals: 4, isPrimary: true },
    ],
    formula: "harmonic mean = 3 ÷ (1⁄n₁ + 1⁄n₂ + 1⁄n₃)",
    formulaExplanation:
      "The harmonic mean is the number of values divided by the sum of their reciprocals. It is the reciprocal of the arithmetic mean of the reciprocals, which is why it gives more weight to smaller values and less to larger ones. This makes it the correct average for quantities defined as rates, such as speed or price per unit, because averaging the reciprocals correctly accounts for how those rates combine over a fixed distance or amount.",
    explanation:
      "The harmonic mean is a type of average that is especially suited to rates, speeds, and ratios, where the ordinary arithmetic mean would give a misleading answer. It is defined as the number of values divided by the sum of their reciprocals, which makes it always less than or equal to the arithmetic mean of the same numbers. This harmonic mean calculator takes three positive or negative non-zero numbers and returns their harmonic mean. The classic use is averaging speeds over equal distances: if you drive one leg at 30 and another at 60, your average speed for the round trip is the harmonic mean, not the simple average, because you spend more time at the slower speed. The harmonic mean also appears in finance for averaging price-to-earnings ratios, in physics for parallel resistances, and in statistics as part of the F-score. For the numbers 1, 2, and 4, the harmonic mean is 3 divided by the sum of 1, one-half, and one-quarter, which comes to about 1.714. Because dividing by zero is undefined, none of the values may be zero. Analysts, scientists, and students use a harmonic mean calculator whenever they need the right kind of average for rate-based data.",
    example: {
      inputs: { number1: 1, number2: 2, number3: 4 },
      explanation: "3 ÷ (1⁄1 + 1⁄2 + 1⁄4) = 3 ÷ 1.75 ≈ 1.714.",
    },
    faqs: [
      {
        question: "What is the harmonic mean used for?",
        answer: "The harmonic mean is the correct average for rates and ratios measured over a fixed quantity, such as average speed across equal distances, average price-to-earnings ratios, or combined rates of work. It gives more weight to smaller values, which reflects how rates actually combine. Using an arithmetic mean in these situations overstates the true average, so the harmonic mean provides the mathematically appropriate result in rate-based problems.",
      },
      {
        question: "How does it differ from the arithmetic mean?",
        answer: "The arithmetic mean adds the values and divides by how many there are, treating each equally. The harmonic mean instead averages the reciprocals and inverts the result, which gives smaller numbers more influence. For any set of positive numbers that are not all identical, the harmonic mean is always smaller than the arithmetic mean. The two agree only when every value in the set is exactly the same.",
      },
      {
        question: "Why can't any value be zero?",
        answer: "The formula relies on taking the reciprocal of each number, and the reciprocal of zero is undefined because you cannot divide one by zero. If any input were zero, its reciprocal would be infinite and the harmonic mean would collapse. For this reason the calculator returns no result when any of the three values is zero. All inputs must be non-zero for the harmonic mean to be defined.",
      },
      {
        question: "Can I use it for average speed?",
        answer: "Yes, and this is its most famous application. When you travel equal distances at different speeds, your overall average speed is the harmonic mean of those speeds, not the arithmetic mean. This is because you spend more time covering the distance at the slower speed, so it should count more heavily. Enter the individual speeds and the calculator returns the true average speed for equal-distance legs.",
      },
      {
        question: "Is the harmonic mean always smaller than the average?",
        answer: "For a set of positive numbers, the harmonic mean is always less than or equal to the geometric mean, which in turn is less than or equal to the arithmetic mean. Equality occurs only when all the numbers are identical. This ordering, known as the mean inequality, means the harmonic mean sits at the low end and is pulled strongly toward the smallest values in the set.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "square-root-calculator", "arithmetic-sequence-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard statistics",
    slugEs: "calculadora-de-media-armonica",
    titleEs: "Calculadora de Media Armónica",
    shortDescriptionEs: "Calcula la media armónica de tres números.",
    seoTitleEs: "Calculadora de Media Armónica — Promedio de Tasas",
    metaDescriptionEs:
      "Calculadora de media armónica gratuita. Introduce tres números para hallar su media armónica, el promedio más adecuado para tasas, velocidades y razones.",
    primaryKeywordEs: "calculadora de media armónica",
    secondaryKeywordsEs: ["calculadora de promedio armónico", "promedio de tasas", "fórmula de la media armónica"],
    formulaExplanationEs:
      "La media armónica es la cantidad de valores dividida entre la suma de sus recíprocos. Es el recíproco de la media aritmética de los recíprocos, por lo que da más peso a los valores pequeños y menos a los grandes. Esto la convierte en el promedio correcto para cantidades definidas como tasas, como la velocidad o el precio por unidad, porque promediar los recíprocos tiene en cuenta correctamente cómo se combinan esas tasas sobre una distancia o cantidad fija.",
    explanationEs:
      "La media armónica es un tipo de promedio especialmente adecuado para tasas, velocidades y razones, donde la media aritmética ordinaria daría una respuesta engañosa. Se define como la cantidad de valores dividida entre la suma de sus recíprocos, lo que la hace siempre menor o igual que la media aritmética de los mismos números. Esta calculadora de media armónica toma tres números positivos o negativos distintos de cero y devuelve su media armónica. El uso clásico es promediar velocidades sobre distancias iguales: si conduces un tramo a 30 y otro a 60, tu velocidad media para el viaje de ida y vuelta es la media armónica, no el promedio simple, porque pasas más tiempo a la velocidad más lenta. La media armónica también aparece en finanzas para promediar razones precio-beneficio, en física para resistencias en paralelo y en estadística como parte de la puntuación F. Para los números 1, 2 y 4, la media armónica es 3 dividido entre la suma de 1, un medio y un cuarto, lo que da unos 1,714. Como dividir entre cero es indefinido, ninguno de los valores puede ser cero. Analistas, científicos y estudiantes usan una calculadora de media armónica siempre que necesitan el tipo correcto de promedio para datos basados en tasas.",
    exampleEs: {
      inputs: { number1: 1, number2: 2, number3: 4 },
      explanation: "3 ÷ (1⁄1 + 1⁄2 + 1⁄4) = 3 ÷ 1,75 ≈ 1,714.",
    },
    faqsEs: [
      {
        question: "¿Para qué se usa la media armónica?",
        answer: "La media armónica es el promedio correcto para tasas y razones medidas sobre una cantidad fija, como la velocidad media en distancias iguales, las razones precio-beneficio promedio o las tasas combinadas de trabajo. Da más peso a los valores pequeños, lo que refleja cómo se combinan realmente las tasas. Usar una media aritmética en estas situaciones sobreestima el promedio verdadero, así que la media armónica da el resultado apropiado.",
      },
      {
        question: "¿En qué se diferencia de la media aritmética?",
        answer: "La media aritmética suma los valores y divide entre cuántos hay, tratando cada uno por igual. La media armónica en cambio promedia los recíprocos e invierte el resultado, lo que da a los números pequeños más influencia. Para cualquier conjunto de números positivos que no sean todos idénticos, la media armónica es siempre menor que la aritmética. Las dos coinciden solo cuando cada valor del conjunto es exactamente el mismo.",
      },
      {
        question: "¿Por qué ningún valor puede ser cero?",
        answer: "La fórmula depende de tomar el recíproco de cada número, y el recíproco de cero es indefinido porque no puedes dividir uno entre cero. Si algún dato fuera cero, su recíproco sería infinito y la media armónica se derrumbaría. Por esta razón la calculadora no devuelve resultado cuando alguno de los tres valores es cero. Todos los datos deben ser distintos de cero para que la media armónica esté definida.",
      },
      {
        question: "¿Puedo usarla para la velocidad media?",
        answer: "Sí, y esta es su aplicación más famosa. Cuando recorres distancias iguales a distintas velocidades, tu velocidad media total es la media armónica de esas velocidades, no la media aritmética. Esto se debe a que pasas más tiempo cubriendo la distancia a la velocidad más lenta, así que debe contar más. Introduce las velocidades individuales y la calculadora devuelve la velocidad media real para tramos de igual distancia.",
      },
      {
        question: "¿La media armónica es siempre menor que el promedio?",
        answer: "Para un conjunto de números positivos, la media armónica es siempre menor o igual que la media geométrica, que a su vez es menor o igual que la media aritmética. La igualdad ocurre solo cuando todos los números son idénticos. Este orden, conocido como la desigualdad de las medias, significa que la media armónica se sitúa en el extremo bajo y es atraída con fuerza hacia los valores más pequeños del conjunto.",
      },
    ],
  },
  {
    id: "exponential-growth",
    slug: "exponential-growth-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Exponential Growth Calculator",
    shortDescription: "Project a value growing at a fixed percentage rate.",
    seoTitle: "Exponential Growth Calculator — Compound Growth",
    metaDescription:
      "Free exponential growth calculator. Enter a starting value, growth rate, and number of periods to project the final value and total growth.",
    primaryKeyword: "exponential growth calculator",
    secondaryKeywords: ["compound growth calculator", "growth rate calculator", "exponential increase"],
    fields: [
      { id: "initialValue", label: "Initial value", type: "number", placeholder: "1000", required: true, span: 1, step: 0.01 },
      { id: "growthRatePercent", label: "Growth rate (% per period)", type: "number", placeholder: "5", required: true, span: 1, step: 0.01 },
      { id: "periods", label: "Number of periods", type: "number", placeholder: "3", required: true, span: 2, step: 1 },
    ],
    results: [
      { id: "finalValue", label: "Final value", format: "number", decimals: 4, isPrimary: true },
      { id: "totalGrowth", label: "Total growth", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "final = initial × (1 + rate ÷ 100)^periods;  growth = final − initial",
    formulaExplanation:
      "Exponential growth multiplies the current value by the same growth factor each period, so after many periods the starting value is multiplied by that factor raised to the number of periods. Converting the percentage rate to a decimal and adding one gives the per-period factor, and raising it to the power of the number of periods compounds the growth. Subtracting the original value from the final value isolates the total amount gained across all periods combined.",
    explanation:
      "Exponential growth describes any quantity that increases by the same percentage in each period, so that the amount added grows larger over time as it is applied to an ever-bigger base. It models compound interest, population growth, viral spread, and many natural and financial processes. This exponential growth calculator takes a starting value, a growth rate expressed as a percentage per period, and the number of periods, then returns the final value and the total growth accumulated. The core mechanism is compounding: each period the value is multiplied by one plus the rate, so over several periods the starting figure is multiplied by that factor raised to the number of periods. This produces the characteristic accelerating curve, where growth is slow at first and then rapid, because each increase is calculated on a larger amount than the last. For a starting value of 1000 growing at 5 percent for 3 periods, the final value is about 1157.63 and the total growth is about 157.63. Investors projecting returns, biologists modelling populations, and analysts forecasting trends all use an exponential growth calculator to see where a steadily compounding quantity ends up after a given number of periods.",
    example: {
      inputs: { initialValue: 1000, growthRatePercent: 5, periods: 3 },
      explanation: "1000 × (1 + 0.05)³ ≈ 1157.63, a total growth of about 157.63.",
    },
    faqs: [
      {
        question: "What is exponential growth?",
        answer: "Exponential growth is increase by a constant percentage each period, rather than a fixed amount. Because the percentage is applied to a base that keeps getting bigger, the actual increase grows every period, producing an accelerating curve. Compound interest, unchecked population growth, and viral spread all follow this pattern. It contrasts with linear growth, where the same fixed quantity is added each period regardless of the current size.",
      },
      {
        question: "How is this different from simple linear growth?",
        answer: "Linear growth adds the same fixed amount every period, so its graph is a straight line. Exponential growth adds a fixed percentage, which translates to a larger and larger absolute amount as the base grows, curving upward ever more steeply. Over a few periods the two can look similar, but over many periods exponential growth vastly outpaces linear growth, which is the power of compounding at work.",
      },
      {
        question: "What counts as a period?",
        answer: "A period is whatever time unit your growth rate refers to: a year, a month, a day, or any interval. The rate and the number of periods must use the same unit. If your rate is 5 percent per year, then the number of periods is a count of years. Matching the rate's time frame to the period count is essential for the projection to be accurate.",
      },
      {
        question: "Can the growth rate be negative?",
        answer: "Yes. A negative growth rate represents exponential decay, where the value shrinks by a fixed percentage each period rather than growing. Entering a rate of negative ten percent, for example, models something losing a tenth of its value each period, such as depreciation or radioactive decay. The same formula applies, and the calculator returns a final value below the starting amount with a negative total growth.",
      },
      {
        question: "Is this the same as compound interest?",
        answer: "The underlying mathematics is identical. Compound interest is a specific application of exponential growth where money grows by a fixed interest rate each period. This calculator uses the same compounding formula, so you can apply it to savings or investments by entering the principal as the initial value, the interest rate as the growth rate, and the number of compounding periods. For detailed finance work, a dedicated compound interest tool may add extra options.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "arithmetic-sequence-calculator", "percentage-of-total-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-crecimiento-exponencial",
    titleEs: "Calculadora de Crecimiento Exponencial",
    shortDescriptionEs: "Proyecta un valor que crece a una tasa porcentual fija.",
    seoTitleEs: "Calculadora de Crecimiento Exponencial — Crecimiento Compuesto",
    metaDescriptionEs:
      "Calculadora de crecimiento exponencial gratuita. Introduce un valor inicial, una tasa de crecimiento y un número de periodos para proyectar el valor final y el crecimiento total.",
    primaryKeywordEs: "calculadora de crecimiento exponencial",
    secondaryKeywordsEs: ["calculadora de crecimiento compuesto", "calculadora de tasa de crecimiento", "aumento exponencial"],
    formulaExplanationEs:
      "El crecimiento exponencial multiplica el valor actual por el mismo factor de crecimiento en cada periodo, así que tras muchos periodos el valor inicial queda multiplicado por ese factor elevado al número de periodos. Convertir la tasa porcentual a decimal y sumarle uno da el factor por periodo, y elevarlo a la potencia del número de periodos compone el crecimiento. Restar el valor original del valor final aísla la cantidad total ganada a lo largo de todos los periodos combinados.",
    explanationEs:
      "El crecimiento exponencial describe cualquier cantidad que aumenta el mismo porcentaje en cada periodo, de modo que la cantidad añadida crece con el tiempo al aplicarse sobre una base cada vez mayor. Modela el interés compuesto, el crecimiento de poblaciones, la propagación viral y muchos procesos naturales y financieros. Esta calculadora de crecimiento exponencial toma un valor inicial, una tasa de crecimiento expresada como porcentaje por periodo y el número de periodos, y luego devuelve el valor final y el crecimiento total acumulado. El mecanismo central es la composición: cada periodo el valor se multiplica por uno más la tasa, así que a lo largo de varios periodos la cifra inicial se multiplica por ese factor elevado al número de periodos. Esto produce la característica curva acelerada, donde el crecimiento es lento al principio y luego rápido, porque cada aumento se calcula sobre una cantidad mayor que el anterior. Para un valor inicial de 1000 que crece al 5 por ciento durante 3 periodos, el valor final es unos 1157,63 y el crecimiento total es unos 157,63. Inversores que proyectan rendimientos, biólogos que modelan poblaciones y analistas que pronostican tendencias usan una calculadora de crecimiento exponencial para ver dónde termina una cantidad que se compone de forma constante tras un número dado de periodos.",
    exampleEs: {
      inputs: { initialValue: 1000, growthRatePercent: 5, periods: 3 },
      explanation: "1000 × (1 + 0,05)³ ≈ 1157,63, un crecimiento total de unos 157,63.",
    },
    faqsEs: [
      {
        question: "¿Qué es el crecimiento exponencial?",
        answer: "El crecimiento exponencial es un aumento de un porcentaje constante en cada periodo, en lugar de una cantidad fija. Como el porcentaje se aplica sobre una base que sigue creciendo, el aumento real crece cada periodo, produciendo una curva acelerada. El interés compuesto, el crecimiento poblacional sin freno y la propagación viral siguen este patrón. Contrasta con el crecimiento lineal, donde se añade la misma cantidad fija cada periodo sin importar el tamaño actual.",
      },
      {
        question: "¿En qué se diferencia del crecimiento lineal simple?",
        answer: "El crecimiento lineal añade la misma cantidad fija cada periodo, así que su gráfica es una línea recta. El crecimiento exponencial añade un porcentaje fijo, que se traduce en una cantidad absoluta cada vez mayor al crecer la base, curvándose hacia arriba de forma cada vez más pronunciada. En unos pocos periodos ambos pueden parecer similares, pero en muchos periodos el crecimiento exponencial supera con creces al lineal, que es el poder de la composición.",
      },
      {
        question: "¿Qué cuenta como un periodo?",
        answer: "Un periodo es la unidad de tiempo a la que se refiere tu tasa de crecimiento: un año, un mes, un día o cualquier intervalo. La tasa y el número de periodos deben usar la misma unidad. Si tu tasa es del 5 por ciento anual, entonces el número de periodos es un recuento de años. Hacer coincidir el marco temporal de la tasa con el recuento de periodos es esencial para que la proyección sea precisa.",
      },
      {
        question: "¿La tasa de crecimiento puede ser negativa?",
        answer: "Sí. Una tasa de crecimiento negativa representa el decaimiento exponencial, donde el valor se reduce un porcentaje fijo cada periodo en lugar de crecer. Introducir una tasa de menos diez por ciento, por ejemplo, modela algo que pierde una décima de su valor cada periodo, como la depreciación o el decaimiento radiactivo. La misma fórmula se aplica, y la calculadora devuelve un valor final por debajo del inicial con un crecimiento total negativo.",
      },
      {
        question: "¿Es lo mismo que el interés compuesto?",
        answer: "La matemática subyacente es idéntica. El interés compuesto es una aplicación específica del crecimiento exponencial donde el dinero crece a una tasa de interés fija cada periodo. Esta calculadora usa la misma fórmula de composición, así que puedes aplicarla a ahorros o inversiones introduciendo el capital como valor inicial, la tasa de interés como tasa de crecimiento y el número de periodos de composición. Para trabajo financiero detallado, una herramienta específica puede añadir más opciones.",
      },
    ],
  },
  {
    id: "percentage-of-total",
    slug: "percentage-of-total-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Percentage of Total Calculator",
    shortDescription: "Find what percentage one number is of another.",
    seoTitle: "Percentage of Total Calculator — Part of Whole",
    metaDescription:
      "Free percentage of total calculator. Enter a part and a whole to find what percentage the part is of the total, shown instantly.",
    primaryKeyword: "percentage of total calculator",
    secondaryKeywords: ["part of whole percentage", "what percentage is", "percent of total calculator"],
    fields: [
      { id: "part", label: "Part", type: "number", placeholder: "25", required: true, span: 1, step: 0.01 },
      { id: "whole", label: "Whole (total)", type: "number", placeholder: "200", required: true, span: 1, step: 0.01 },
    ],
    results: [
      { id: "percentage", label: "Percentage of total", format: "percentage", decimals: 4, isPrimary: true },
    ],
    formula: "percentage = part ÷ whole × 100",
    formulaExplanation:
      "To express a part as a percentage of a whole, you divide the part by the whole to get its fraction of the total, then multiply by one hundred to convert that fraction into a percentage. Dividing establishes what share the part represents as a decimal between zero and one, and multiplying by one hundred rescales it onto the familiar zero-to-one-hundred percentage scale, where the whole itself always corresponds to exactly one hundred percent.",
    explanation:
      "Finding what percentage one number is of another is one of the most common everyday calculations, used for test scores, discounts, budgets, survey results, and progress tracking. A percentage expresses a part as a share of a whole on a scale where the whole equals one hundred. This percentage of total calculator takes two numbers, the part and the whole, and returns what percentage the part represents of that total. The method is simple: divide the part by the whole to find its fraction of the total, then multiply by one hundred to turn that fraction into a percentage. For example, if 25 students out of a class of 200 chose a particular option, then 25 divided by 200 is 0.125, and multiplying by one hundred gives 12.5 percent. The same approach tells you what percentage of a budget an expense consumes, what portion of a goal you have reached, or what share of a total a category holds. Because dividing by zero is undefined, the whole must not be zero. Students, shoppers, analysts, and anyone comparing a piece to a total use a percentage of total calculator to convert raw part-and-whole figures into an easy-to-grasp percentage without manual arithmetic.",
    example: {
      inputs: { part: 25, whole: 200 },
      explanation: "25 ÷ 200 × 100 = 12.5%.",
    },
    faqs: [
      {
        question: "How do I find what percentage one number is of another?",
        answer: "Divide the part by the whole, then multiply the result by one hundred. The part is the smaller quantity you are examining and the whole is the total it belongs to. For instance, 25 out of 200 is 25 divided by 200, which is 0.125, and multiplying by a hundred gives 12.5 percent. The calculator performs both steps for you from the two numbers you enter.",
      },
      {
        question: "What is the difference between the part and the whole?",
        answer: "The whole is the complete total or reference amount, representing one hundred percent, while the part is the portion of that total you want to express as a percentage. In a class of 200 students, the class is the whole and any subgroup, such as 25 students, is the part. Identifying which figure is the total correctly is essential, because swapping them gives a very different answer.",
      },
      {
        question: "Can the percentage be more than 100?",
        answer: "Yes. If the part is larger than the whole, the percentage exceeds one hundred, which is perfectly valid. This happens when comparing a current figure to a smaller baseline, such as sales this year against a lower total last year. A value of 150 percent means the part is one and a half times the whole. The calculator handles parts larger than the whole without any problem.",
      },
      {
        question: "Why can't the whole be zero?",
        answer: "The calculation divides the part by the whole, and division by zero is mathematically undefined, so a total of zero has no meaningful percentage. Conceptually, if the whole is zero there is nothing for the part to be a share of. For this reason the calculator returns no result when the whole is zero. Make sure your total is a non-zero number before calculating.",
      },
      {
        question: "How is this used in real life?",
        answer: "This calculation appears everywhere: working out a test score as a percentage of the maximum marks, seeing what share of a budget a bill takes, tracking progress toward a savings goal, or reading survey results. Any time you have a piece and a total and want to know the piece's share, this is the calculation to use. It turns raw counts into comparable percentages that are easy to interpret.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "exponential-growth-calculator", "arithmetic-sequence-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-porcentaje-del-total",
    titleEs: "Calculadora de Porcentaje del Total",
    shortDescriptionEs: "Calcula qué porcentaje es un número de otro.",
    seoTitleEs: "Calculadora de Porcentaje del Total — Parte del Todo",
    metaDescriptionEs:
      "Calculadora de porcentaje del total gratuita. Introduce una parte y un todo para hallar qué porcentaje representa la parte del total, mostrado al instante.",
    primaryKeywordEs: "calculadora de porcentaje del total",
    secondaryKeywordsEs: ["parte del todo en porcentaje", "qué porcentaje es", "calculadora de porcentaje sobre el total"],
    formulaExplanationEs:
      "Para expresar una parte como porcentaje de un todo, divides la parte entre el todo para obtener su fracción del total, y luego multiplicas por cien para convertir esa fracción en un porcentaje. Dividir establece qué proporción representa la parte como un decimal entre cero y uno, y multiplicar por cien lo reescala en la conocida escala de cero a cien, donde el todo mismo siempre corresponde a exactamente el cien por cien.",
    explanationEs:
      "Hallar qué porcentaje es un número de otro es uno de los cálculos cotidianos más comunes, usado para calificaciones de exámenes, descuentos, presupuestos, resultados de encuestas y seguimiento de progreso. Un porcentaje expresa una parte como proporción de un todo en una escala donde el todo equivale a cien. Esta calculadora de porcentaje del total toma dos números, la parte y el todo, y devuelve qué porcentaje representa la parte de ese total. El método es sencillo: divides la parte entre el todo para hallar su fracción del total, y luego multiplicas por cien para convertir esa fracción en porcentaje. Por ejemplo, si 25 estudiantes de una clase de 200 eligieron una opción concreta, entonces 25 dividido entre 200 es 0,125, y multiplicando por cien da 12,5 por ciento. El mismo enfoque te dice qué porcentaje de un presupuesto consume un gasto, qué parte de una meta has alcanzado o qué proporción de un total tiene una categoría. Como dividir entre cero es indefinido, el todo no puede ser cero. Estudiantes, compradores, analistas y cualquiera que compare una pieza con un total usan una calculadora de porcentaje del total para convertir cifras crudas de parte y todo en un porcentaje fácil de entender sin aritmética manual.",
    exampleEs: {
      inputs: { part: 25, whole: 200 },
      explanation: "25 ÷ 200 × 100 = 12,5%.",
    },
    faqsEs: [
      {
        question: "¿Cómo hallo qué porcentaje es un número de otro?",
        answer: "Divide la parte entre el todo, y luego multiplica el resultado por cien. La parte es la cantidad menor que estás examinando y el todo es el total al que pertenece. Por ejemplo, 25 de 200 es 25 dividido entre 200, que es 0,125, y multiplicando por cien da 12,5 por ciento. La calculadora realiza ambos pasos por ti a partir de los dos números que introduces.",
      },
      {
        question: "¿Cuál es la diferencia entre la parte y el todo?",
        answer: "El todo es el total completo o cantidad de referencia, que representa el cien por cien, mientras que la parte es la porción de ese total que quieres expresar como porcentaje. En una clase de 200 estudiantes, la clase es el todo y cualquier subgrupo, como 25 estudiantes, es la parte. Identificar correctamente cuál cifra es el total es esencial, porque intercambiarlas da una respuesta muy diferente.",
      },
      {
        question: "¿El porcentaje puede ser mayor que 100?",
        answer: "Sí. Si la parte es mayor que el todo, el porcentaje supera el cien, lo cual es perfectamente válido. Esto ocurre al comparar una cifra actual con una base menor, como las ventas de este año frente a un total inferior del año pasado. Un valor del 150 por ciento significa que la parte es una vez y media el todo. La calculadora maneja partes mayores que el todo sin problema alguno.",
      },
      {
        question: "¿Por qué el todo no puede ser cero?",
        answer: "El cálculo divide la parte entre el todo, y la división entre cero es matemáticamente indefinida, así que un total de cero no tiene porcentaje significativo. Conceptualmente, si el todo es cero no hay nada de lo que la parte pueda ser una proporción. Por esta razón la calculadora no devuelve resultado cuando el todo es cero. Asegúrate de que tu total sea un número distinto de cero antes de calcular.",
      },
      {
        question: "¿Cómo se usa esto en la vida real?",
        answer: "Este cálculo aparece en todas partes: obtener una calificación de examen como porcentaje de la puntuación máxima, ver qué parte de un presupuesto se lleva una factura, seguir el progreso hacia una meta de ahorro o leer resultados de encuestas. Cada vez que tienes una pieza y un total y quieres conocer la proporción de la pieza, este es el cálculo que hay que usar. Convierte recuentos crudos en porcentajes comparables fáciles de interpretar.",
      },
    ],
  },
  {
    id: "consecutive-integer-sum",
    slug: "consecutive-integer-sum-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Consecutive Integer Sum Calculator",
    shortDescription: "Sum all whole numbers from a start to an end.",
    seoTitle: "Consecutive Integer Sum Calculator — Sum of a Range",
    metaDescription:
      "Free consecutive integer sum calculator. Enter a start and end number to add every integer in the range and count how many there are.",
    primaryKeyword: "consecutive integer sum calculator",
    secondaryKeywords: ["sum of integers calculator", "sum of a range", "add consecutive numbers"],
    fields: [
      { id: "startNumber", label: "Start number", type: "number", placeholder: "1", required: true, span: 1, step: 1 },
      { id: "endNumber", label: "End number", type: "number", placeholder: "10", required: true, span: 1, step: 1 },
    ],
    results: [
      { id: "sum", label: "Sum", format: "number", decimals: 0, isPrimary: true },
      { id: "count", label: "Count of integers", format: "number", decimals: 0, isPrimary: false },
    ],
    formula: "sum = [end × (end + 1) ÷ 2] − [(start − 1) × start ÷ 2];  count = end − start + 1",
    formulaExplanation:
      "The sum of all integers from one up to any number n equals n times n plus one divided by two, a formula credited to Gauss. To sum a range that starts higher than one, you take the running total up to the end value and subtract the running total up to just before the start value. The difference leaves exactly the integers inside the range, and the count is simply the end minus the start plus one.",
    explanation:
      "Adding up a run of consecutive whole numbers, such as every integer from 1 to 100, is a classic arithmetic task with a famously elegant shortcut. Rather than adding each number one by one, you can use a closed-form formula that gives the total instantly. This consecutive integer sum calculator takes a start number and an end number, both integers, and returns the sum of every integer in that inclusive range along with how many numbers there are. It works by using the well-known result that the sum of all integers from 1 to any value n is n times n plus one, divided by two. To sum a range that does not begin at 1, the calculator computes the total up to the end value and subtracts the total up to just before the start, leaving exactly the numbers in between. For the range 1 to 10, the sum is 55 and the count is 10. The famous story attributes this trick to the young mathematician Gauss, who summed 1 to 100 in seconds by pairing numbers from both ends. Students, programmers, and puzzle-solvers use a consecutive integer sum calculator to total any range of whole numbers without tedious addition, provided the start is not greater than the end.",
    example: {
      inputs: { startNumber: 1, endNumber: 10 },
      explanation: "Sum = [10 × 11 ÷ 2] − [0 × 1 ÷ 2] = 55 − 0 = 55, across 10 integers.",
    },
    faqs: [
      {
        question: "How do you sum consecutive integers quickly?",
        answer: "Use the pairing shortcut: the sum of integers from 1 to n is n times n plus one, all divided by two. For a range that starts above 1, find the total up to the end and subtract the total up to just before the start. This avoids adding every number individually. For 1 to 10, the sum is 10 times 11 divided by 2, which is 55, computed instantly.",
      },
      {
        question: "Why must the start and end be integers?",
        answer: "This calculator sums whole numbers, so both the start and the end must be integers for the range to be well defined. The formula counts and adds each whole number from the start to the end inclusive, which only makes sense for integers. If you enter a decimal, the calculator returns no result. To add a sequence of decimals with a fixed step, an arithmetic series calculator is the right tool.",
      },
      {
        question: "What does the count tell me?",
        answer: "The count is how many integers lie in the range from the start to the end, inclusive of both endpoints. It equals the end minus the start plus one. For the range 1 to 10 the count is 10, and for 5 to 8 it is four. The plus one matters because both the first and last numbers are included, so a simple subtraction would undercount by one.",
      },
      {
        question: "Can the numbers be negative?",
        answer: "Yes. The formula works for negative integers too, as long as the start is not greater than the end. For example, the sum from negative 3 to 3 is zero, because the negative and positive terms cancel, and the count is seven. The calculator handles ranges that cross zero or sit entirely below it, using the same subtraction of running totals to get the correct sum.",
      },
      {
        question: "What happens if the start is greater than the end?",
        answer: "The range would be empty or run backwards, which the formula does not define here, so the calculator returns no result when the start exceeds the end. To sum a descending list, simply enter the smaller number as the start and the larger as the end, since addition gives the same total regardless of direction. Keeping the start less than or equal to the end ensures a valid answer.",
      },
    ],
    relatedCalculators: ["arithmetic-sequence-calculator", "percentage-calculator", "square-root-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Standard mathematics",
    slugEs: "calculadora-de-suma-de-enteros-consecutivos",
    titleEs: "Calculadora de Suma de Enteros Consecutivos",
    shortDescriptionEs: "Suma todos los números enteros desde un inicio hasta un fin.",
    seoTitleEs: "Calculadora de Suma de Enteros Consecutivos — Suma de un Rango",
    metaDescriptionEs:
      "Calculadora de suma de enteros consecutivos gratuita. Introduce un número inicial y uno final para sumar cada entero del rango y contar cuántos hay.",
    primaryKeywordEs: "calculadora de suma de enteros consecutivos",
    secondaryKeywordsEs: ["calculadora de suma de enteros", "suma de un rango", "sumar números consecutivos"],
    formulaExplanationEs:
      "La suma de todos los enteros desde uno hasta cualquier número n es igual a n por n más uno dividido entre dos, una fórmula atribuida a Gauss. Para sumar un rango que empieza más arriba de uno, tomas el total acumulado hasta el valor final y restas el total acumulado hasta justo antes del valor inicial. La diferencia deja exactamente los enteros dentro del rango, y el conteo es simplemente el fin menos el inicio más uno.",
    explanationEs:
      "Sumar una serie de números enteros consecutivos, como cada entero del 1 al 100, es una tarea aritmética clásica con un atajo famosamente elegante. En lugar de sumar cada número uno por uno, puedes usar una fórmula cerrada que da el total al instante. Esta calculadora de suma de enteros consecutivos toma un número inicial y un número final, ambos enteros, y devuelve la suma de cada entero de ese rango inclusivo junto con cuántos números hay. Funciona usando el conocido resultado de que la suma de todos los enteros del 1 a cualquier valor n es n por n más uno, dividido entre dos. Para sumar un rango que no empieza en 1, la calculadora computa el total hasta el valor final y resta el total hasta justo antes del inicio, dejando exactamente los números intermedios. Para el rango 1 a 10, la suma es 55 y el conteo es 10. La famosa anécdota atribuye este truco al joven matemático Gauss, que sumó del 1 al 100 en segundos emparejando números desde ambos extremos. Estudiantes, programadores y aficionados a los acertijos usan una calculadora de suma de enteros consecutivos para totalizar cualquier rango de números enteros sin sumas tediosas, siempre que el inicio no sea mayor que el fin.",
    exampleEs: {
      inputs: { startNumber: 1, endNumber: 10 },
      explanation: "Suma = [10 × 11 ÷ 2] − [0 × 1 ÷ 2] = 55 − 0 = 55, a lo largo de 10 enteros.",
    },
    faqsEs: [
      {
        question: "¿Cómo se suman enteros consecutivos rápidamente?",
        answer: "Usa el atajo del emparejamiento: la suma de los enteros del 1 a n es n por n más uno, todo dividido entre dos. Para un rango que empieza por encima de 1, halla el total hasta el fin y resta el total hasta justo antes del inicio. Esto evita sumar cada número por separado. Para 1 a 10, la suma es 10 por 11 dividido entre 2, que es 55, calculado al instante.",
      },
      {
        question: "¿Por qué el inicio y el fin deben ser enteros?",
        answer: "Esta calculadora suma números enteros, así que tanto el inicio como el fin deben ser enteros para que el rango esté bien definido. La fórmula cuenta y suma cada número entero del inicio al fin inclusive, lo que solo tiene sentido para enteros. Si introduces un decimal, la calculadora no devuelve resultado. Para sumar una secuencia de decimales con un paso fijo, una calculadora de serie aritmética es la herramienta adecuada.",
      },
      {
        question: "¿Qué me dice el conteo?",
        answer: "El conteo es cuántos enteros hay en el rango del inicio al fin, incluidos ambos extremos. Es igual al fin menos el inicio más uno. Para el rango 1 a 10 el conteo es 10, y para 5 a 8 es cuatro. El más uno importa porque tanto el primer número como el último están incluidos, así que una simple resta contaría uno de menos.",
      },
      {
        question: "¿Los números pueden ser negativos?",
        answer: "Sí. La fórmula funciona también para enteros negativos, siempre que el inicio no sea mayor que el fin. Por ejemplo, la suma de menos 3 a 3 es cero, porque los términos negativos y positivos se cancelan, y el conteo es siete. La calculadora maneja rangos que cruzan el cero o que están enteramente por debajo de él, usando la misma resta de totales acumulados para obtener la suma correcta.",
      },
      {
        question: "¿Qué pasa si el inicio es mayor que el fin?",
        answer: "El rango estaría vacío o iría hacia atrás, algo que la fórmula no define aquí, así que la calculadora no devuelve resultado cuando el inicio supera al fin. Para sumar una lista descendente, simplemente introduce el número menor como inicio y el mayor como fin, ya que la suma da el mismo total sin importar la dirección. Mantener el inicio menor o igual que el fin asegura una respuesta válida.",
      },
    ],
  },
  {
    id: "golden-ratio",
    slug: "golden-ratio-calculator",
    category: "Math",
    categorySlug: "math",
    title: "Golden Ratio Calculator",
    shortDescription: "Split a length into the golden ratio proportions.",
    seoTitle: "Golden Ratio Calculator — Divide by Phi",
    metaDescription:
      "Free golden ratio calculator. Enter a total length to split it into the longer and shorter golden ratio segments using phi, about 1.618.",
    primaryKeyword: "golden ratio calculator",
    secondaryKeywords: ["phi calculator", "golden section calculator", "divine proportion calculator"],
    fields: [
      { id: "totalLength", label: "Total length", type: "number", placeholder: "100", required: true, span: 2, min: 0, step: 0.01 },
    ],
    results: [
      { id: "longerSegment", label: "Longer segment", format: "number", decimals: 4, isPrimary: true },
      { id: "shorterSegment", label: "Shorter segment", format: "number", decimals: 4, isPrimary: false },
    ],
    formula: "longer = total ÷ φ (φ ≈ 1.6180339887);  shorter = total − longer",
    formulaExplanation:
      "The golden ratio, phi, is approximately 1.618, defined so that the whole length divided by the longer part equals the longer part divided by the shorter part. To split a total in this proportion, you divide the total by phi to find the longer segment, and the remainder is the shorter segment. This unique ratio is the only division where the relationship between the whole and its larger piece mirrors that between the larger and smaller pieces exactly.",
    explanation:
      "The golden ratio, denoted by the Greek letter phi and roughly equal to 1.618, is a special proportion that has fascinated mathematicians, artists, and architects for over two thousand years. A line is divided in the golden ratio when the whole length relates to the longer part exactly as the longer part relates to the shorter part. This golden ratio calculator takes a total length and splits it into the longer and shorter segments that satisfy this proportion. To do so it divides the total by phi to find the longer segment, and the remainder becomes the shorter segment. The ratio appears throughout nature, in the spiral of shells, the arrangement of leaves and seeds, and the proportions of the human body, and it has been used deliberately in art, design, and architecture from the Parthenon to modern logos because many people find its proportions pleasing. For a total length of 100 units, the longer segment is about 61.80 units and the shorter is about 38.20 units. Designers laying out pages, photographers framing shots, and students exploring mathematics use a golden ratio calculator to divide a length into these celebrated proportions instantly, without needing to remember the exact value of phi.",
    example: {
      inputs: { totalLength: 100 },
      explanation: "Longer = 100 ÷ 1.618 ≈ 61.80; shorter = 100 − 61.80 ≈ 38.20.",
    },
    faqs: [
      {
        question: "What is the golden ratio?",
        answer: "The golden ratio, written as the Greek letter phi, is approximately 1.618. It is the unique proportion in which the ratio of the whole to the larger part equals the ratio of the larger part to the smaller part. This self-similar relationship makes it mathematically special, and it appears repeatedly in geometry, the Fibonacci sequence, and patterns found throughout the natural world, which is why it has been studied since antiquity.",
      },
      {
        question: "How do I split a length in the golden ratio?",
        answer: "Divide the total length by phi, about 1.618, to find the longer of the two segments. Subtract that from the total to get the shorter segment. The two pieces then stand in the golden proportion to each other and to the whole. For a length of 100, the longer part is about 61.8 and the shorter about 38.2. The calculator performs this division and subtraction for you.",
      },
      {
        question: "Where does the golden ratio appear in nature?",
        answer: "The golden ratio and the closely related Fibonacci sequence show up in the spiral arrangement of sunflower seeds, pine cones, and nautilus shells, and in the branching of plants and leaves. These patterns often arise because they pack elements efficiently or allow steady growth. While some claims about its prevalence are exaggerated, genuine examples in phyllotaxis and spiral growth make it one of the most recognisable proportions in the natural world.",
      },
      {
        question: "Why is it used in design and art?",
        answer: "Many artists and designers use the golden ratio to divide space, size elements, and lay out compositions because its proportions are widely regarded as balanced and pleasing. It guides the placement of focal points, the sizing of columns, and the framing of images. From classical architecture to modern branding, dividing a canvas or page according to phi is a popular technique for achieving a composition that feels harmonious.",
      },
      {
        question: "Is the golden ratio the same as the rule of thirds?",
        answer: "They are related ideas but not identical. The rule of thirds divides a frame into equal thirds, placing subjects along those lines, and is a simpler approximation used in photography. The golden ratio divides a length at about 61.8 percent rather than exactly two-thirds, giving a slightly different, more precise proportion. Both aim to create balanced compositions, and the rule of thirds is often taught as an easy stand-in for the golden section.",
      },
    ],
    relatedCalculators: ["percentage-calculator", "rectangle-area-calculator", "square-root-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
    formulaSource: "Euclidean geometry",
    slugEs: "calculadora-de-proporcion-aurea",
    titleEs: "Calculadora de Proporción Áurea",
    shortDescriptionEs: "Divide una longitud en las proporciones de la proporción áurea.",
    seoTitleEs: "Calculadora de Proporción Áurea — Dividir entre Phi",
    metaDescriptionEs:
      "Calculadora de proporción áurea gratuita. Introduce una longitud total para dividirla en los segmentos áureos mayor y menor usando phi, unos 1,618.",
    primaryKeywordEs: "calculadora de proporción áurea",
    secondaryKeywordsEs: ["calculadora de phi", "calculadora de sección áurea", "calculadora de proporción divina"],
    formulaExplanationEs:
      "La proporción áurea, phi, es aproximadamente 1,618, definida de modo que la longitud total dividida entre la parte mayor es igual a la parte mayor dividida entre la parte menor. Para dividir un total en esta proporción, divides el total entre phi para hallar el segmento mayor, y el resto es el segmento menor. Esta proporción única es la única división donde la relación entre el todo y su pieza mayor refleja exactamente la que hay entre la pieza mayor y la menor.",
    explanationEs:
      "La proporción áurea, denotada por la letra griega phi y aproximadamente igual a 1,618, es una proporción especial que ha fascinado a matemáticos, artistas y arquitectos durante más de dos mil años. Una línea se divide en la proporción áurea cuando la longitud total se relaciona con la parte mayor exactamente igual que la parte mayor se relaciona con la parte menor. Esta calculadora de proporción áurea toma una longitud total y la divide en los segmentos mayor y menor que satisfacen esta proporción. Para ello divide el total entre phi para hallar el segmento mayor, y el resto se convierte en el segmento menor. La proporción aparece por toda la naturaleza, en la espiral de las conchas, la disposición de hojas y semillas y las proporciones del cuerpo humano, y se ha usado deliberadamente en arte, diseño y arquitectura desde el Partenón hasta los logotipos modernos porque muchas personas encuentran agradables sus proporciones. Para una longitud total de 100 unidades, el segmento mayor es unos 61,80 unidades y el menor unos 38,20 unidades. Diseñadores que maquetan páginas, fotógrafos que encuadran tomas y estudiantes que exploran matemáticas usan una calculadora de proporción áurea para dividir una longitud en estas célebres proporciones al instante, sin necesidad de recordar el valor exacto de phi.",
    exampleEs: {
      inputs: { totalLength: 100 },
      explanation: "Mayor = 100 ÷ 1,618 ≈ 61,80; menor = 100 − 61,80 ≈ 38,20.",
    },
    faqsEs: [
      {
        question: "¿Qué es la proporción áurea?",
        answer: "La proporción áurea, escrita como la letra griega phi, es aproximadamente 1,618. Es la proporción única en la que la razón del todo a la parte mayor es igual a la razón de la parte mayor a la parte menor. Esta relación autosemejante la hace matemáticamente especial, y aparece repetidamente en geometría, la sucesión de Fibonacci y patrones de todo el mundo natural, por lo que se estudia desde la antigüedad.",
      },
      {
        question: "¿Cómo divido una longitud en la proporción áurea?",
        answer: "Divide la longitud total entre phi, unos 1,618, para hallar el mayor de los dos segmentos. Resta ese valor del total para obtener el segmento menor. Las dos piezas quedan entonces en la proporción áurea entre sí y con el todo. Para una longitud de 100, la parte mayor es unos 61,8 y la menor unos 38,2. La calculadora realiza esta división y resta por ti.",
      },
      {
        question: "¿Dónde aparece la proporción áurea en la naturaleza?",
        answer: "La proporción áurea y la estrechamente relacionada sucesión de Fibonacci aparecen en la disposición en espiral de las semillas de girasol, las piñas y las conchas de nautilo, y en la ramificación de plantas y hojas. Estos patrones suelen surgir porque empaquetan elementos de forma eficiente o permiten un crecimiento constante. Aunque algunas afirmaciones sobre su prevalencia son exageradas, ejemplos genuinos en la filotaxis la hacen una de las proporciones más reconocibles.",
      },
      {
        question: "¿Por qué se usa en diseño y arte?",
        answer: "Muchos artistas y diseñadores usan la proporción áurea para dividir el espacio, dimensionar elementos y componer diseños porque sus proporciones se consideran ampliamente equilibradas y agradables. Guía la colocación de puntos focales, el tamaño de columnas y el encuadre de imágenes. Desde la arquitectura clásica hasta la marca moderna, dividir un lienzo o una página según phi es una técnica popular para lograr una composición que se sienta armoniosa.",
      },
      {
        question: "¿La proporción áurea es lo mismo que la regla de los tercios?",
        answer: "Son ideas relacionadas pero no idénticas. La regla de los tercios divide un encuadre en tercios iguales, colocando los sujetos a lo largo de esas líneas, y es una aproximación más simple usada en fotografía. La proporción áurea divide una longitud en torno al 61,8 por ciento en lugar de exactamente dos tercios, dando una proporción algo distinta y más precisa. Ambas buscan crear composiciones equilibradas, y la regla de los tercios suele enseñarse como sustituto sencillo.",
      },
    ],
  },
];
