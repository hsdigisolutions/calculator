import type { CalculatorDefinition } from "../types";

export const everydayMoreCalculators: CalculatorDefinition[] = [
  {
    id: "electricity-bill",
    slug: "electricity-bill-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Electricity Bill Calculator",
    shortDescription:
      "Estimate what an appliance costs to run per month and year from its wattage, usage hours, and your energy rate.",
    seoTitle: "Electricity Bill Calculator — Appliance Running Cost per Month",
    metaDescription:
      "Calculate the monthly and yearly cost of running any appliance from its wattage, hours of use, and your kWh rate. Free electricity cost calculator.",
    primaryKeyword: "electricity bill calculator",
    secondaryKeywords: [
      "appliance running cost calculator",
      "cost to run appliance",
      "kwh cost calculator",
      "electricity usage calculator",
    ],
    slugEs: "calculadora-de-factura-de-electricidad",
    titleEs: "Calculadora de factura de electricidad",
    shortDescriptionEs:
      "Estima cuánto cuesta al mes y al año hacer funcionar un electrodoméstico según su potencia, sus horas de uso y tu tarifa de energía.",
    seoTitleEs: "Calculadora de factura de electricidad — Costo mensual de un electrodoméstico",
    metaDescriptionEs:
      "Calcula el costo mensual y anual de hacer funcionar cualquier electrodoméstico según su potencia, sus horas de uso y tu tarifa por kWh. Calculadora gratuita de costo de electricidad.",
    primaryKeywordEs: "calculadora de factura de electricidad",
    secondaryKeywordsEs: [
      "calculadora de costo de electrodomestico",
      "costo de hacer funcionar un electrodomestico",
      "calculadora de costo por kwh",
    ],
    formulaExplanationEs:
      "La potencia mide la velocidad a la que se consume energía, mientras que una factura cobra por la energía, que es la potencia multiplicada por el tiempo. Multiplicar los vatios por las horas diarias y los días mensuales da vatios-hora, y dividir entre mil los convierte en kilovatios-hora, la unidad que registra tu medidor. Multiplicar esa energía por la tarifa por kilovatio-hora da el costo mensual, y escalar por doce lo extiende a un año completo de uso constante.",
    explanationEs:
      "Una calculadora de factura de electricidad estima cuánto cuesta hacer funcionar un solo electrodoméstico o dispositivo combinando su consumo de potencia con cuánto tiempo lo usas y el precio que cobra tu compañía por kilovatio-hora. La electricidad se factura por la energía consumida, no por el dispositivo en sí, así que un aparato modesto encendido todo el día puede costar en silencio más que uno potente usado brevemente. Ver la cifra mensual y anual convierte una potencia abstracta en dólares reales sobre los que puedes actuar.\n\nEl cálculo se apoya en el kilovatio-hora, la unidad que las compañías miden y facturan. Multiplica la potencia de un electrodoméstico por las horas que funciona cada día y los días que funciona cada mes, luego divide entre mil para convertir vatios-hora en kilovatios-hora. Multiplicar esa energía por tu tarifa local da el costo mensual, y multiplicar por doce proyecta el total anual.\n\nDueños de casa auditando un calefactor, inquilinos comparando un refrigerador viejo con uno más nuevo, y cualquiera que rastree cargas fantasma usan esto para decidir si vale la pena una mejora o un cambio de hábito. Como las tarifas varían mucho por región y temporada, introducir tu propio precio por kilovatio-hora hace la estimación específica de tu hogar en lugar de un promedio nacional.",
    exampleEs: {
      inputs: { watts: "1000", hoursPerDay: "5", daysPerMonth: "30", rate: "0.15" },
      explanation:
        "Un calefactor de 1,000 vatios funcionando 5 horas al día durante 30 días usa 1,000 × 5 × 30 ÷ 1,000 = 150 kWh. A $0.15 por kWh, eso son 150 × $0.15 = $22.50 al mes, o unos $270 a lo largo de un año completo.",
    },
    faqsEs: [
      {
        question: "¿Dónde encuentro la potencia de un electrodoméstico?",
        answer:
          "Busca una etiqueta de datos en la parte trasera o inferior del dispositivo, cerca del cable de alimentación, o en la placa de características. Indica los vatios (W) directamente, o los voltios y amperios que multiplicas para obtener los vatios. Motores y calefactores a menudo muestran una cifra pico mayor que el consumo típico. Si solo se muestran amperios, multiplícalos por el voltaje de tu toma —120 voltios en Estados Unidos— para estimar la potencia.",
      },
      {
        question: "¿Qué tarifa de electricidad debo introducir?",
        answer:
          "Usa el precio por kilovatio-hora de tu factura más reciente, normalmente impreso cerca del resumen de consumo. En Estados Unidos las tarifas residenciales suelen situarse entre unos 10 y 30 centavos por kilovatio-hora, pero varían mucho por estado, proveedor y temporada. Si tu plan tiene precios escalonados o por horas, introduce la tarifa del tramo o las horas en que el electrodoméstico realmente funciona para obtener la estimación más precisa.",
      },
      {
        question: "¿Un dispositivo consume energía cuando está apagado?",
        answer:
          "A menudo sí. Muchos aparatos electrónicos consumen energía en espera o fantasma para mantener vivos mandos, relojes y funciones de red, normalmente de uno a unos pocos vatios cada uno. Individualmente pequeñas, estas cargas suman en toda una casa y funcionan cada hora del año. Para incluirlas, introduce la potencia en espera con 24 horas al día. Una regleta inteligente o desconectar cargadores inactivos elimina la mayor parte de este desperdicio.",
      },
      {
        question: "¿Por qué mi estimación difiere de mi factura real?",
        answer:
          "Esta calculadora cubre un electrodoméstico a potencia constante, mientras que tu factura suma cada dispositivo del hogar. El consumo real también fluctúa: refrigeradores y aires acondicionados se encienden y apagan por ciclos, y los calefactores modulan con el termostato. Las facturas añaden cargos fijos de servicio, impuestos y tasas de distribución sobre la energía. Trata el resultado como una estimación por dispositivo para comparar y presupuestar, no como una predicción precisa del total del hogar.",
      },
      {
        question: "¿Cómo puedo reducir el costo de funcionamiento de un electrodoméstico?",
        answer:
          "Reduce cualquiera de los tres factores: potencia, horas o tarifa. Sustituye bombillas incandescentes y motores viejos por modelos eficientes LED o ENERGY STAR para bajar la potencia. Recorta el tiempo de uso con temporizadores, termostatos y simplemente apagando las cosas cuando estén inactivas. Traslada cargas pesadas como lavado de ropa o platos a horas de menor demanda si tu plan cobra menos entonces. Pequeños cambios en un dispositivo que funciona muchas horas al día producen el mayor ahorro anual.",
      },
    ],
    fields: [
      {
        id: "watts",
        label: "Power (Watts)",
        type: "number",
        placeholder: "e.g. 1000",
        unit: "W",
        required: true,
        helpText: "Find the wattage on the appliance label or nameplate.",
      },
      {
        id: "hoursPerDay",
        label: "Hours Used per Day",
        type: "number",
        placeholder: "e.g. 5",
        required: true,
      },
      {
        id: "daysPerMonth",
        label: "Days Used per Month",
        type: "number",
        placeholder: "e.g. 30",
        defaultValue: 30,
        required: true,
      },
      {
        id: "rate",
        label: "Electricity Rate ($/kWh)",
        type: "number",
        placeholder: "e.g. 0.15",
        unit: "$",
        required: true,
        helpText: "Your price per kilowatt-hour, shown on your utility bill.",
      },
    ],
    results: [
      { id: "monthlyCost", label: "Monthly Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "monthlyKwh", label: "Monthly Energy (kWh)", format: "number", decimals: 2, unit: "kWh", isPrimary: false },
      { id: "annualCost", label: "Annual Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "kWh = Watts × Hours/day × Days/month ÷ 1000; Monthly Cost = kWh × Rate; Annual Cost = Monthly Cost × 12",
    formulaExplanation:
      "Wattage measures power — the rate at which energy is drawn — while a bill charges for energy, which is power multiplied by time. Multiplying watts by the daily hours and monthly days gives watt-hours, and dividing by one thousand converts them into kilowatt-hours, the unit your meter records. Multiplying that energy by the per-kilowatt-hour rate lands on the monthly cost, and scaling by twelve extends it across a full year of steady use.",
    formulaSource: "Standard cost calculation",
    explanation:
      "An electricity bill calculator estimates what a single appliance or device costs to run by combining its power draw with how long you use it and the price your utility charges per kilowatt-hour. Electricity is billed by the energy consumed, not by the device itself, so a modest gadget left on all day can quietly cost more than a powerful one used briefly. Seeing the monthly and yearly figure turns an abstract wattage rating into real dollars you can act on.\n\nThe calculation rests on the kilowatt-hour, the unit utilities meter and bill. Multiply an appliance's wattage by the hours it runs each day and the days it runs each month, then divide by one thousand to convert watt-hours into kilowatt-hours. Multiplying that energy by your local rate gives the monthly cost, and multiplying by twelve projects the annual total.\n\nHomeowners auditing a space heater, renters comparing an old refrigerator to a newer model, and anyone hunting down phantom loads use this to decide whether an upgrade or a habit change is worth it. Because rates vary widely by region and season, entering your own per-kilowatt-hour price makes the estimate specific to your household rather than a national average.",
    example: {
      inputs: { watts: "1000", hoursPerDay: "5", daysPerMonth: "30", rate: "0.15" },
      explanation:
        "A 1,000-watt heater run 5 hours a day for 30 days uses 1,000 × 5 × 30 ÷ 1,000 = 150 kWh. At $0.15 per kWh, that is 150 × $0.15 = $22.50 per month, or roughly $270 across a full year.",
    },
    faqs: [
      {
        question: "Where do I find an appliance's wattage?",
        answer:
          "Look for a rating label on the back or underside of the device, near the power cord, or on the nameplate. It lists watts (W) directly, or volts and amps that you multiply together to get watts. Motors and heaters often show a peak figure higher than typical draw. If only amps are shown, multiply by your outlet voltage — 120 volts in the United States — to estimate the wattage.",
      },
      {
        question: "What electricity rate should I enter?",
        answer:
          "Use the price per kilowatt-hour from your most recent utility statement, usually printed near the usage summary. In the United States residential rates commonly fall between roughly 10 and 30 cents per kilowatt-hour, but they vary sharply by state, provider, and season. If your plan has tiered or time-of-use pricing, enter the rate for the tier or hours the appliance actually runs to get the most accurate estimate.",
      },
      {
        question: "Does a device use power when it is switched off?",
        answer:
          "Often yes. Many electronics draw standby or phantom power to keep remotes, clocks, and network features alive, typically one to a few watts each. Individually small, these loads add up across a whole home and run every hour of the year. To include them, enter the standby wattage with 24 hours a day. A smart power strip or unplugging idle chargers eliminates most of this waste.",
      },
      {
        question: "Why does my estimate differ from my actual bill?",
        answer:
          "This calculator covers one appliance at a steady wattage, while your bill totals every device in the home. Real draw also fluctuates: refrigerators and air conditioners cycle on and off, and heaters modulate with the thermostat. Bills add fixed service charges, taxes, and delivery fees on top of energy. Treat the result as a per-device estimate for comparison and budgeting, not a precise prediction of the whole household total.",
      },
      {
        question: "How can I cut an appliance's running cost?",
        answer:
          "Reduce any of the three factors: wattage, hours, or rate. Replace incandescent bulbs and old motors with efficient LED or ENERGY STAR models to lower wattage. Cut runtime with timers, thermostats, and simply switching things off when idle. Shift heavy loads like laundry or dishwashing to off-peak hours if your plan charges less then. Small changes to a device that runs many hours daily produce the biggest yearly savings.",
      },
    ],
    relatedCalculators: ["subscription-cost-calculator", "commute-cost-calculator", "unit-price-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "subscription-cost",
    slug: "subscription-cost-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Subscription Cost Calculator",
    shortDescription:
      "See what your monthly subscriptions truly cost per year, over several years, and per day.",
    seoTitle: "Subscription Cost Calculator — Yearly & Long-Term Cost of Subscriptions",
    metaDescription:
      "Add up your monthly subscriptions and see the annual, multi-year, and daily cost. Free calculator to reveal what recurring plans really cost you.",
    primaryKeyword: "subscription cost calculator",
    secondaryKeywords: [
      "subscription tracker calculator",
      "yearly subscription cost",
      "recurring cost calculator",
      "how much do subscriptions cost",
    ],
    slugEs: "calculadora-de-costo-de-suscripciones",
    titleEs: "Calculadora de costo de suscripciones",
    shortDescriptionEs:
      "Descubre lo que tus suscripciones mensuales cuestan realmente al año, a lo largo de varios años y por día.",
    seoTitleEs: "Calculadora de costo de suscripciones — Costo anual y a largo plazo",
    metaDescriptionEs:
      "Suma tus suscripciones mensuales y ve el costo anual, plurianual y diario. Calculadora gratuita para revelar lo que realmente te cuestan los planes recurrentes.",
    primaryKeywordEs: "calculadora de costo de suscripciones",
    secondaryKeywordsEs: [
      "rastreador de suscripciones",
      "costo anual de suscripciones",
      "calculadora de costo recurrente",
    ],
    formulaExplanationEs:
      "Un precio mensual esconde su peso real porque lo pagas doce veces al año, así que multiplicar por doce revela el desembolso anual verdadero. Multiplicar esa cifra anual por el número de años muestra cómo un pequeño cargo recurrente se acumula en un gran total de por vida. Dividir el costo anual entre 365 lo desglosa a una cantidad diaria, una escala que hace que una suscripción fácil de ignorar se sienta concreta frente al gasto cotidiano como un café o un bocadillo.",
    explanationEs:
      "Una calculadora de costo de suscripciones convierte los pequeños cargos recurrentes repartidos por tus cuentas en los totales anual, a largo plazo y diario que revelan su peso real. Servicios de streaming, aplicaciones, membresías y planes de software se cobran para sentirse triviales cada mes, que es precisamente por lo que son fáciles de olvidar y fáciles de acumular. Sumarlos y proyectarlos hacia adelante es la forma más rápida de detectar lo que realmente estás gastando.\n\nEl método es sencillo. Suma cada plan mensual en una sola cifra, multiplica por doce para el costo anual, y multiplica eso por el número de años para ver el total acumulado durante el tiempo que esperas conservarlos. Dividir el costo anual entre 365 expresa el mismo gasto como una cantidad diaria, que replantea un cargo pasado por alto en términos que comparas con compras cotidianas.\n\nQuienes recortan gastos, hogares que revisan lo que se renueva automáticamente y cualquiera que decida si un plan anual supera al pago mensual usan esto para hacer un corte informado. La vista plurianual es especialmente útil para juzgar el valor de por vida: un servicio que parece barato a diez dólares al mes cuesta cientos a lo largo de varios años, lo que puede o no justificar conservarlo.",
    exampleEs: {
      inputs: { monthlyTotal: "50", years: "3" },
      explanation:
        "$50 al mes en suscripciones son $50 × 12 = $600 al año. A lo largo de 3 años eso suma $1,800, y $600 ÷ 365 da unos $1.64 al día, una forma útil de sopesar si los planes se ganan su lugar.",
    },
    faqsEs: [
      {
        question: "¿Qué debo incluir en el total mensual?",
        answer:
          "Añade cada cargo recurrente que pagas mensualmente: streaming de video y música, almacenamiento en la nube, acceso a noticias y revistas, membresías de gimnasio y clubes, suscripciones de software y aplicaciones, cajas de comida y cualquier servicio de renovación automática. Revisa tus estados de banco y tarjeta de los últimos meses para atrapar cargos que olvidaste. Convierte los servicios semanales a una cifra mensual multiplicando por unos 4.33, para que todo quede sobre la misma base mensual antes de introducirlo.",
      },
      {
        question: "¿Cómo convierto planes anuales a una cifra mensual?",
        answer:
          "Divide el precio anual entre doce para obtener su equivalente mensual, luego añádelo a tu total mensual. Por ejemplo, un plan anual de $120 son $10 al mes. Esto mantiene cada suscripción sobre la misma base mensual para que las proyecciones de la calculadora sean precisas. La facturación anual suele costar menos que pagar el mismo servicio mes a mes, lo que vale la pena sopesar cuando decides cómo pagar un plan que piensas conservar.",
      },
      {
        question: "¿Pagar anualmente es realmente más barato que mensualmente?",
        answer:
          "Con frecuencia, sí. Muchos servicios descuentan los planes anuales en aproximadamente un 10 a 20 por ciento frente a doce pagos mensuales, porque el pago por adelantado mejora su flujo de caja y su retención. La contrapartida es el compromiso: pagas un año completo aunque dejes de usar el servicio tras un mes. Elige la facturación anual solo para suscripciones que estés seguro de conservar, y mantén los servicios flexibles o en fase de prueba en facturación mensual para poder cancelar libremente.",
      },
      {
        question: "¿Por qué mostrar el costo por día?",
        answer:
          "Una cifra diaria hace tangible un cargo mensual abstracto al compararlo con el gasto rutinario. Enmarcar un conjunto de suscripciones como, por ejemplo, $1.64 al día lo sitúa junto a un café o un bocadillo, lo que aclara si el valor coincide con el hábito. También ayuda al decidir entre opciones: un servicio usado solo ocasionalmente puede costar más por uso real de lo que sugiere su promedio diario, empujándote hacia alternativas de pago por uso.",
      },
      {
        question: "¿Cómo puedo reducir mi gasto en suscripciones?",
        answer:
          "Audita cada cargo recurrente y cancela cualquiera que no hayas usado en el último mes o dos. Rota los servicios en lugar de apilarlos: suscríbete a una plataforma de streaming a la vez y cambia cuando termines una serie. Comparte planes familiares donde lo permitan los términos, baja a niveles con anuncios y pon recordatorios en el calendario antes de que las pruebas gratuitas pasen a de pago. Revisar este total cada trimestre evita que las renovaciones silenciosas reconstruyan la misma pila de cargos.",
      },
    ],
    fields: [
      {
        id: "monthlyTotal",
        label: "Total Monthly Subscriptions ($)",
        type: "number",
        placeholder: "e.g. 50",
        unit: "$",
        required: true,
        helpText: "Add up every recurring plan you pay each month.",
      },
      {
        id: "years",
        label: "Number of Years",
        type: "number",
        placeholder: "e.g. 3",
        defaultValue: 1,
        required: true,
      },
    ],
    results: [
      { id: "annualCost", label: "Annual Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "totalCost", label: "Total Over Period", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "dailyCost", label: "Daily Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Annual Cost = Monthly Total × 12; Total Cost = Annual Cost × Years; Daily Cost = Annual Cost ÷ 365",
    formulaExplanation:
      "A monthly price hides its real weight because you pay it twelve times a year, so multiplying by twelve reveals the true annual outlay. Multiplying that yearly figure by the number of years shows how a small recurring charge compounds into a large lifetime total. Dividing the annual cost by 365 breaks it down to a daily amount, a scale that makes an easy-to-ignore subscription feel concrete against everyday spending like a coffee or a snack.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A subscription cost calculator converts the small recurring charges scattered across your accounts into the annual, long-term, and daily totals that reveal their real weight. Streaming services, apps, memberships, and software plans are each priced to feel trivial per month, which is precisely why they are easy to forget and easy to accumulate. Adding them up and projecting them forward is the fastest way to spot what you are actually spending.\n\nThe method is straightforward. Sum every monthly plan into one figure, multiply by twelve for the yearly cost, and multiply that by the number of years to see the cumulative total over the time you expect to keep them. Dividing the annual cost by 365 expresses the same spending as a daily amount, which reframes an overlooked charge in terms you compare with everyday purchases.\n\nBudgeters trimming expenses, households reviewing what auto-renews, and anyone deciding whether an annual plan beats paying monthly use this to make an informed cut. The multi-year view is especially useful for judging lifetime value: a service that seems cheap at ten dollars a month costs hundreds over several years, which may or may not justify keeping it.",
    example: {
      inputs: { monthlyTotal: "50", years: "3" },
      explanation:
        "$50 a month in subscriptions is $50 × 12 = $600 a year. Over 3 years that totals $1,800, and $600 ÷ 365 works out to about $1.64 per day — a useful way to weigh whether the plans earn their keep.",
    },
    faqs: [
      {
        question: "What should I include in the monthly total?",
        answer:
          "Add every recurring charge you pay monthly: streaming video and music, cloud storage, news and magazine access, gym and club memberships, software and app subscriptions, meal kits, and any auto-renewing service. Check your bank and card statements for the past few months to catch charges you forgot. Convert weekly services to a monthly figure by multiplying by about 4.33, so everything lands on the same monthly basis before you enter it.",
      },
      {
        question: "How do I convert annual plans to a monthly figure?",
        answer:
          "Divide the yearly price by twelve to get its monthly equivalent, then add it to your monthly total. For example, a $120 annual plan is $10 a month. This keeps every subscription on the same monthly footing so the calculator's projections stay accurate. Annual billing usually costs less than paying the same service month to month, which is worth weighing when you decide how to pay for a plan you intend to keep.",
      },
      {
        question: "Is paying annually really cheaper than monthly?",
        answer:
          "Frequently, yes. Many services discount annual plans by roughly 10 to 20 percent compared with twelve monthly payments, because upfront payment improves their cash flow and retention. The trade-off is commitment: you pay for a full year even if you stop using the service after a month. Choose annual billing only for subscriptions you are confident you will keep, and keep flexible or trial-stage services on monthly billing so you can cancel freely.",
      },
      {
        question: "Why show the cost per day?",
        answer:
          "A daily figure makes an abstract monthly charge tangible by comparing it to routine spending. Framing a bundle of subscriptions as, say, $1.64 a day sits it next to a coffee or a snack, which clarifies whether the value matches the habit. It also helps when deciding between options: a service used only occasionally may cost more per actual use than its daily average suggests, nudging you toward pay-as-you-go alternatives instead.",
      },
      {
        question: "How can I reduce my subscription spending?",
        answer:
          "Audit every recurring charge and cancel anything you have not used in the last month or two. Rotate services instead of stacking them — subscribe to one streaming platform at a time and switch when you finish a series. Share family plans where terms allow, downgrade to ad-supported tiers, and set calendar reminders before free trials convert to paid. Reviewing this total quarterly keeps quiet renewals from rebuilding the same pile of charges.",
      },
    ],
    relatedCalculators: ["coffee-cost-calculator", "electricity-bill-calculator", "gift-budget-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "commute-cost",
    slug: "commute-cost-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Commute Cost Calculator",
    shortDescription:
      "Estimate the fuel cost of your daily commute per day, week, and year from distance, fuel economy, and gas price.",
    seoTitle: "Commute Cost Calculator — Daily & Yearly Cost of Driving to Work",
    metaDescription:
      "Calculate the fuel cost of commuting per day, week, and year from your mileage, MPG, and gas price. Free commute cost calculator for drivers.",
    primaryKeyword: "commute cost calculator",
    secondaryKeywords: [
      "cost of commuting calculator",
      "gas cost to work calculator",
      "driving cost per mile calculator",
      "fuel cost calculator",
    ],
    slugEs: "calculadora-de-costo-de-traslado",
    titleEs: "Calculadora de costo de traslado",
    shortDescriptionEs:
      "Estima el costo de combustible de tu traslado diario al trabajo por día, semana y año según la distancia, el consumo y el precio de la gasolina.",
    seoTitleEs: "Calculadora de costo de traslado — Costo diario y anual de ir al trabajo",
    metaDescriptionEs:
      "Calcula el costo de combustible de ir al trabajo por día, semana y año según tu kilometraje, consumo y precio de la gasolina. Calculadora gratuita de costo de traslado.",
    primaryKeywordEs: "calculadora de costo de traslado",
    secondaryKeywordsEs: [
      "costo de ir al trabajo",
      "calculadora de gasolina al trabajo",
      "calculadora de costo de conducir por milla",
    ],
    formulaExplanationEs:
      "Multiplicar las millas diarias por los días de traslado da la distancia recorrida cada semana. Dividir esa distancia entre las millas por galón la convierte en los galones de combustible quemados, y multiplicar por el precio por galón convierte los galones en dólares. Escalar el costo semanal por 52 proyecta un año completo, mientras que dividirlo entre el número de días de traslado recupera el costo por día: el mismo gasto de combustible visto en tres escalas de tiempo para comparar con facilidad.",
    explanationEs:
      "Una calculadora de costo de traslado estima lo que conducir al trabajo cuesta realmente en combustible combinando tu distancia diaria, con qué frecuencia conduces, el consumo de tu vehículo y el precio de la gasolina. El traslado es uno de los gastos más repetidos en una vida laboral, pero su costo es fácil de subestimar porque sale de tu cuenta un tanque a la vez en lugar de como una única factura visible. Ver los totales semanal y anual pone el número real en foco.\n\nEl enfoque sigue el combustible desde la distancia hasta los dólares. Multiplica tus millas diarias de ida y vuelta por los días que te trasladas cada semana para obtener el kilometraje semanal, divide entre tus millas por galón para hallar los galones quemados, y multiplica por el precio en el surtidor para el costo semanal. Multiplicar por 52 da la cifra anual, y dividir entre los días de traslado muestra el costo de un solo día.\n\nQuienes buscan empleo sopesando un trayecto más largo frente a un mejor sueldo, teletrabajadores que valoran los días ahorrados en casa y cualquiera que compare conducir con el transporte público o el auto compartido usan esto para hacer concreta la disyuntiva. Ten en cuenta que el combustible es solo parte del panorama —peajes, estacionamiento, mantenimiento y depreciación suman más—, así que trata esto como la base de costo de combustible de tu traslado.",
    exampleEs: {
      inputs: { milesPerDay: "40", daysPerWeek: "5", mpg: "25", fuelPrice: "4" },
      explanation:
        "40 millas al día durante 5 días son 200 millas semanales. A 25 MPG eso quema 8 galones, costando 8 × $4 = $32 a la semana. A lo largo de 52 semanas eso son $1,664 al año, o unos $6.40 por cada día de traslado.",
    },
    faqsEs: [
      {
        question: "¿Debo introducir las millas de ida o de ida y vuelta?",
        answer:
          "Introduce la distancia completa de ida y vuelta —las millas al trabajo más las millas a casa— ya que quemas combustible en ambos sentidos. Si solo conoces la distancia de ida, duplícala antes de introducirla. Incluye cualquier desvío regular que hagas en el trayecto, como dejar a alguien en la guardería o una parada fija por café, porque esas millas extra también consumen combustible y forman parte de una estimación honesta de lo que cuesta el viaje.",
      },
      {
        question: "¿Qué cifra de MPG debo usar?",
        answer:
          "Usa el consumo real de tu vehículo en lugar de la cifra de la etiqueta, ya que el tráfico, el terreno y el estilo de conducción lo afectan. Muchas computadoras de viaje muestran un promedio en curso, o puedes calcularlo dividiendo las millas conducidas entre los galones llenados a lo largo de unos tanques. Los trayectos con mucha conducción de arranque y parada en ciudad rinden menos MPG que la marcha constante en autopista, así que elige la cifra que coincida con las carreteras que realmente conduces.",
      },
      {
        question: "¿Esto incluye costos más allá del combustible?",
        answer:
          "No, esta calculadora cubre solo el combustible. Un panorama completo del costo de conducir también incluye peajes, estacionamiento, seguro, mantenimiento rutinario, neumáticos y depreciación por el kilometraje añadido. La tarifa estándar por milla del IRS, que agrupa todo esto, suele ser mucho más alta que solo el combustible. Usa este resultado como la base de combustible, luego añade tus costos conocidos de estacionamiento y peajes por separado al comparar un trayecto con el transporte público, el auto compartido o mudarte más cerca del trabajo.",
      },
      {
        question: "¿Cuánto podría ahorrar compartiendo auto o teletrabajando?",
        answer:
          "Ambos escalan directamente con los días que conduces. Trabajar desde casa dos días a la semana reduce tus días de traslado de cinco a tres, bajando el costo de combustible en alrededor del 40 por ciento; vuelve a ejecutar la calculadora con los días reducidos para verlo. Compartir auto reparte el combustible entre los pasajeros, así que un grupo de dos personas más o menos reduce a la mitad tu parte. A lo largo de un año completo estas reducciones suelen sumar cientos de dólares solo en combustible.",
      },
      {
        question: "¿Cómo afectan los cambios de precio de la gasolina a mi costo de traslado?",
        answer:
          "El costo del combustible se mueve en proporción directa al precio en el surtidor, así que un cambio grande golpea fuerte tu traslado. Si la gasolina sube de $4.00 a $5.00 por galón —un aumento del 25 por ciento—, tu costo de combustible sube también un 25 por ciento. Vuelve a ejecutar la calculadora cada vez que los precios cambien de forma notable para mantener tu presupuesto actualizado, y considera que un vehículo más eficiente amortigua el impacto de cada subida futura de precio.",
      },
    ],
    fields: [
      {
        id: "milesPerDay",
        label: "Round-Trip Miles per Day",
        type: "number",
        placeholder: "e.g. 40",
        required: true,
        helpText: "Total distance driven to and from work in one day.",
      },
      {
        id: "daysPerWeek",
        label: "Commute Days per Week",
        type: "number",
        placeholder: "e.g. 5",
        defaultValue: 5,
        required: true,
      },
      {
        id: "mpg",
        label: "Fuel Economy (MPG)",
        type: "number",
        placeholder: "e.g. 25",
        required: true,
        helpText: "Your vehicle's miles per gallon.",
      },
      {
        id: "fuelPrice",
        label: "Fuel Price ($/gallon)",
        type: "number",
        placeholder: "e.g. 4.00",
        unit: "$",
        required: true,
      },
    ],
    results: [
      { id: "annualCost", label: "Annual Fuel Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "weeklyCost", label: "Weekly Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "dailyCost", label: "Daily Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Weekly Miles = Miles/day × Days/week; Weekly Cost = Weekly Miles ÷ MPG × Fuel Price; Annual = Weekly Cost × 52",
    formulaExplanation:
      "Multiplying daily miles by commuting days gives the distance driven each week. Dividing that distance by miles per gallon converts it into the gallons of fuel burned, and multiplying by the price per gallon turns gallons into dollars. Scaling the weekly cost by 52 projects a full year, while dividing it back by the number of commute days recovers the per-day cost — the same fuel spending viewed at three time scales for easy comparison.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A commute cost calculator estimates what driving to work actually costs in fuel by combining your daily distance, how often you drive, your vehicle's fuel economy, and the price of gas. Commuting is one of the most repeated expenses in a working life, yet its cost is easy to underestimate because it leaves your account a tank at a time rather than as a single visible bill. Seeing the weekly and yearly totals brings the real number into focus.\n\nThe approach follows the fuel from distance to dollars. Multiply your round-trip daily miles by the days you commute each week to get weekly mileage, divide by your miles per gallon to find the gallons burned, and multiply by the pump price for the weekly cost. Multiplying by 52 gives the annual figure, and dividing back by commute days shows the cost of a single day.\n\nJob seekers weighing a longer drive against higher pay, remote workers valuing days saved at home, and anyone comparing driving to transit or carpooling use this to make the trade-off concrete. Note that fuel is only part of the picture — tolls, parking, maintenance, and vehicle depreciation add more — so treat this as the fuel-cost baseline of your commute.",
    example: {
      inputs: { milesPerDay: "40", daysPerWeek: "5", mpg: "25", fuelPrice: "4" },
      explanation:
        "40 miles a day over 5 days is 200 weekly miles. At 25 MPG that burns 8 gallons, costing 8 × $4 = $32 a week. Across 52 weeks that is $1,664 a year, or about $6.40 for each commuting day.",
    },
    faqs: [
      {
        question: "Should I enter one-way or round-trip miles?",
        answer:
          "Enter the full round-trip distance — the miles to work plus the miles home — since you burn fuel in both directions. If you know only the one-way distance, double it before entering. Include any regular detours you make on the commute, such as a daycare drop-off or a standing coffee stop, because those extra miles consume fuel too and belong in an honest estimate of what the trip costs.",
      },
      {
        question: "What MPG figure should I use?",
        answer:
          "Use your vehicle's real-world fuel economy rather than the sticker rating, since traffic, terrain, and driving style all affect it. Many trip computers display a running average, or you can calculate it by dividing miles driven by gallons filled over a few tanks. Commutes heavy with stop-and-go city driving return lower MPG than steady highway travel, so pick the figure that matches the roads you actually drive to and from work.",
      },
      {
        question: "Does this include costs beyond fuel?",
        answer:
          "No — this calculator covers fuel only. A full cost-of-driving picture also includes tolls, parking, insurance, routine maintenance, tires, and depreciation from the added mileage. The IRS standard mileage rate, which bundles all of these, is often far higher than fuel alone. Use this result as the fuel baseline, then add your known parking and toll costs separately when comparing a drive against transit, carpooling, or relocating closer to work.",
      },
      {
        question: "How much could I save by carpooling or working from home?",
        answer:
          "Both scale directly with the days you drive. Working from home two days a week cuts your commute days from five to three, lowering fuel cost by about 40 percent — rerun the calculator with the reduced days to see it. Carpooling splits fuel among riders, so a two-person pool roughly halves your share. Over a full year these reductions often total hundreds of dollars in fuel alone, before counting parking and wear.",
      },
      {
        question: "How do gas price swings affect my commute cost?",
        answer:
          "Fuel cost moves in direct proportion to the pump price, so a large swing hits your commute hard. If gas rises from $4.00 to $5.00 a gallon — a 25 percent increase — your fuel cost rises 25 percent as well. Rerun the calculator whenever prices shift meaningfully to keep your budget current, and consider that a more fuel-efficient vehicle blunts the impact of every future price rise.",
      },
    ],
    relatedCalculators: ["electricity-bill-calculator", "subscription-cost-calculator", "coffee-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "coffee-cost",
    slug: "coffee-cost-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Coffee Cost Calculator",
    shortDescription:
      "See what your daily coffee habit costs per month, per year, and over a decade.",
    seoTitle: "Coffee Cost Calculator — Yearly & 10-Year Cost of Your Coffee Habit",
    metaDescription:
      "Find out what your daily coffee costs per month, per year, and over ten years. Free calculator to reveal the true price of a coffee habit.",
    primaryKeyword: "coffee cost calculator",
    secondaryKeywords: [
      "cost of coffee habit",
      "daily coffee cost calculator",
      "how much do i spend on coffee",
      "coffee spending calculator",
    ],
    slugEs: "calculadora-de-costo-de-cafe",
    titleEs: "Calculadora de costo de café",
    shortDescriptionEs:
      "Descubre lo que tu hábito diario de café cuesta al mes, al año y a lo largo de una década.",
    seoTitleEs: "Calculadora de costo de café — Costo anual y a 10 años de tu hábito de café",
    metaDescriptionEs:
      "Descubre lo que tu café diario cuesta al mes, al año y a lo largo de diez años. Calculadora gratuita para revelar el precio real de un hábito de café.",
    primaryKeywordEs: "calculadora de costo de cafe",
    secondaryKeywordsEs: [
      "costo del habito de cafe",
      "calculadora de costo diario de cafe",
      "cuanto gasto en cafe",
    ],
    formulaExplanationEs:
      "Multiplicar las tazas al día por el precio de cada taza da el gasto diario, el átomo del hábito. Como el café es una rutina casi diaria, multiplicar por 365 capta un año realista en lugar de solo días laborables. Dividir esa cifra anual entre doce produce una vista mensual para presupuestar, mientras que multiplicar por diez proyecta una década: un horizonte que expone cómo unos pocos dólares repetidos a diario se acumulan en un total de por vida sorprendentemente grande.",
    explanationEs:
      "Una calculadora de costo de café convierte un ritual diario familiar en los totales mensual, anual y a diez años que muestran lo que el hábito realmente cuesta. Una sola taza se siente insignificante, pero el café se compra casi todos los días, y las pequeñas cantidades repetidas con esa frecuencia se acumulan más rápido de lo que sugiere la intuición. Poner un número concreto al hábito es el primer paso para decidir si vale la pena o si conviene recortarlo.\n\nLa matemática es simple. Multiplica las tazas que compras cada día por el precio de cada taza para obtener tu gasto diario, multiplica por 365 para el total anual ya que el café es una compra casi diaria, luego divide entre doce para una cifra mensual y multiplica por diez para ver el costo de una década. Ese horizonte largo es el punto: revela la verdadera escala de un gasto rutinario que nunca se siente grande en el momento.\n\nBebedores conscientes del presupuesto, cualquiera que sopese un hábito de cafetería frente a preparar en casa y ahorradores curiosos sobre el gasto de bajo costo y alta frecuencia usan esto para ver la disyuntiva con claridad. El resultado no es un argumento para dejar el café, es información. Ver que un latte diario cuesta cientos al año te permite decidir de forma deliberada, quizá manteniendo el ritual mientras cambias algunas tazas por una preparación casera más barata.",
    exampleEs: {
      inputs: { cupsPerDay: "2", pricePerCup: "5" },
      explanation:
        "Dos cafés de $5 al día son $10 diarios. A lo largo de 365 días eso son $3,650 al año, unos $304 al mes, y $36,500 a lo largo de diez años: una vívida ilustración de cómo una pequeña compra diaria se acumula con el tiempo.",
    },
    faqsEs: [
      {
        question: "¿Por qué multiplicar por 365 en vez de solo días laborables?",
        answer:
          "El café tiende a ser un ritual diario en lugar de solo entre semana, así que 365 días refleja el comportamiento real de la mayoría de los bebedores con más precisión que contar unos 250 días laborables. Si de verdad saltas los fines de semana o viajas a menudo, puedes ajustar introduciendo un promedio que tenga en cuenta los días omitidos, o reducir mentalmente el resultado. Para un hábito que mantienes casi cada mañana, la base de año completo da el panorama anual más veraz.",
      },
      {
        question: "¿Debo incluir propinas y bollería?",
        answer:
          "Para la cifra de café más pura, introduce solo el precio de la bebida. Pero si de forma rutinaria añades una propina o coges un bollo con tu café, esos costos son parte del hábito real y vale la pena incluirlos: intégralos en el precio por taza para captar lo que cada visita realmente te cuesta. Decidir qué incluir depende de tu objetivo: aislar el café en sí, o medir toda la rutina de cafetería.",
      },
      {
        question: "¿Cuánto más barato es preparar café en casa?",
        answer:
          "Dramáticamente más barato por taza. El café preparado en casa a menudo cuesta bastante menos de un dólar por taza una vez que consideras los granos, los filtros y una máquina amortizada con el tiempo, frente a varios dólares en una cafetería. Vuelve a ejecutar la calculadora con un precio por taza más bajo para ver la diferencia: bajar de $5 a $0.50 por taza recorta los totales anual y a diez años en un noventa por ciento, sin dejar de mantener el ritual diario intacto.",
      },
      {
        question: "¿Y si pudiera invertir el dinero en su lugar?",
        answer:
          "Redirigir un presupuesto de café hacia el ahorro puede crecer mucho más allá del total bruto, porque el dinero invertido gana rendimientos con el tiempo. Los $3,650 gastados al año en dos cafés diarios, invertidos en cambio a un rendimiento promedio modesto, se acumularían en considerablemente más que la cifra bruta de $36,500 a diez años. Esta calculadora muestra solo lo que gastas; usa una calculadora de interés compuesto para explorar el costo de oportunidad de ese gasto en el mismo horizonte.",
      },
      {
        question: "¿El objetivo de esto es hacer que deje el café?",
        answer:
          "En absoluto, se trata de conciencia, no de culpa. El café ofrece disfrute real, rutina y valor social que una hoja de cálculo no puede captar. El objetivo es hacer visible el costo para que tu elección sea deliberada en lugar de automática. Muchas personas, al ver el número, mantienen el ritual pero cambian algunas tazas a la preparación casera, rebajan la bebida o recortan ligeramente, aterrizando en un hábito que encaja con su presupuesto y su placer.",
      },
    ],
    fields: [
      {
        id: "cupsPerDay",
        label: "Cups per Day",
        type: "number",
        placeholder: "e.g. 2",
        defaultValue: 1,
        required: true,
      },
      {
        id: "pricePerCup",
        label: "Price per Cup ($)",
        type: "number",
        placeholder: "e.g. 5.00",
        unit: "$",
        required: true,
        helpText: "What you typically pay for one coffee.",
      },
    ],
    results: [
      { id: "annualCost", label: "Annual Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "monthlyCost", label: "Monthly Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
      { id: "tenYearCost", label: "10-Year Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Daily = Cups × Price; Annual = Daily × 365; Monthly = Annual ÷ 12; 10-Year = Annual × 10",
    formulaExplanation:
      "Multiplying cups per day by the price of each cup gives the daily spend, the atom of the habit. Because coffee is a near-daily routine, multiplying by 365 captures a realistic year rather than only workdays. Dividing that annual figure by twelve produces a monthly view for budgeting, while multiplying by ten projects a decade — a horizon that exposes how a few dollars repeated daily compounds into a strikingly large lifetime total.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A coffee cost calculator turns a familiar daily ritual into the monthly, yearly, and ten-year totals that show what the habit really costs. A single cup feels inconsequential, but coffee is bought almost every day, and small amounts repeated with that frequency add up faster than intuition suggests. Putting a concrete number on the habit is the first step to deciding whether it is worth it or worth trimming.\n\nThe math is simple. Multiply the cups you buy each day by the price of each cup to get your daily spend, multiply by 365 for the yearly total since coffee is a near-daily purchase, then divide by twelve for a monthly figure and multiply by ten to see the decade-long cost. That long horizon is the point: it reveals the true scale of a routine expense that never feels large in the moment.\n\nBudget-conscious drinkers, anyone weighing a café habit against brewing at home, and savers curious about small-cost, high-frequency spending use this to see the trade-off clearly. The result is not an argument to quit coffee — it is information. Seeing that a daily latte costs hundreds a year lets you decide deliberately, perhaps keeping the ritual while switching some cups to a cheaper home brew.",
    example: {
      inputs: { cupsPerDay: "2", pricePerCup: "5" },
      explanation:
        "Two $5 coffees a day is $10 daily. Over 365 days that is $3,650 a year, about $304 a month, and $36,500 across ten years — a vivid illustration of how a small daily purchase compounds over time.",
    },
    faqs: [
      {
        question: "Why multiply by 365 instead of workdays only?",
        answer:
          "Coffee tends to be a daily ritual rather than a weekday-only one, so 365 days reflects most drinkers' real behavior more accurately than counting roughly 250 workdays. If you genuinely skip weekends or travel often, you can adjust by entering an average that accounts for missed days, or mentally scale the result down. For a habit you keep nearly every morning, the full-year basis gives the truest annual picture.",
      },
      {
        question: "Should I include tips and pastries?",
        answer:
          "For the purest coffee figure, enter only the drink price. But if you routinely add a tip or grab a pastry with your coffee, those costs are part of the real habit and worth including — fold them into the price per cup to capture what each visit actually costs you. Deciding what to include depends on your goal: isolating the coffee itself, or measuring the whole café routine.",
      },
      {
        question: "How much cheaper is brewing coffee at home?",
        answer:
          "Dramatically cheaper per cup. Home-brewed coffee often costs well under a dollar a cup once you account for beans, filters, and a machine amortized over time, versus several dollars at a café. Rerun the calculator with a lower price per cup to see the difference: dropping from $5 to $0.50 per cup cuts the annual and ten-year totals by ninety percent, while still keeping the daily ritual intact.",
      },
      {
        question: "What if I could invest the money instead?",
        answer:
          "Redirecting a coffee budget into savings can grow well beyond the raw total, because invested money earns returns over time. The $3,650 spent yearly on two daily coffees, invested instead at a modest average return, would compound into considerably more than the $36,500 raw ten-year figure. This calculator shows only what you spend; use a compound-interest calculator to explore the opportunity cost of that spending over the same horizon.",
      },
      {
        question: "Is the point of this to make me quit coffee?",
        answer:
          "Not at all — it is about awareness, not guilt. Coffee delivers real enjoyment, routine, and social value that a spreadsheet cannot capture. The aim is to make the cost visible so your choice is deliberate rather than automatic. Many people, seeing the number, keep the ritual but shift some cups to home brewing, downgrade the drink, or cut back slightly, landing on a habit that fits their budget and their pleasure.",
      },
    ],
    relatedCalculators: ["subscription-cost-calculator", "commute-cost-calculator", "gift-budget-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "wedding-budget",
    slug: "wedding-budget-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Wedding Budget Calculator",
    shortDescription:
      "Estimate your total wedding budget from guest count, per-guest cost, venue, and extras — plus the cost per guest.",
    seoTitle: "Wedding Budget Calculator — Estimate Total Cost & Cost per Guest",
    metaDescription:
      "Estimate your total wedding budget from guest count, per-guest cost, venue, and extras. See your cost per guest instantly. Free wedding budget calculator.",
    primaryKeyword: "wedding budget calculator",
    secondaryKeywords: [
      "wedding cost calculator",
      "cost per guest wedding",
      "how much does a wedding cost",
      "wedding planning budget",
    ],
    slugEs: "calculadora-de-presupuesto-de-boda",
    titleEs: "Calculadora de presupuesto de boda",
    shortDescriptionEs:
      "Estima el presupuesto total de tu boda según el número de invitados, el costo por invitado, el lugar y los extras, más el costo por invitado.",
    seoTitleEs: "Calculadora de presupuesto de boda — Estima el costo total y por invitado",
    metaDescriptionEs:
      "Estima el presupuesto total de tu boda según el número de invitados, el costo por invitado, el lugar y los extras. Ve tu costo por invitado al instante. Calculadora gratuita de presupuesto de boda.",
    primaryKeywordEs: "calculadora de presupuesto de boda",
    secondaryKeywordsEs: [
      "calculadora de costo de boda",
      "costo por invitado boda",
      "cuanto cuesta una boda",
    ],
    formulaExplanationEs:
      "Los costos de una boda se dividen en dos tipos: gastos por persona que escalan con la asistencia y gastos fijos que no. Multiplicar el número de invitados por el costo por invitado capta el catering, las bebidas y los alquileres que crecen con la lista, y añadir la tarifa fija del lugar y los extras fijos completa el total. Dividir ese gran total entre el número de invitados revela el costo integral que representa cada invitado, lo que expone cuánto impulsa la factura el tamaño de la lista.",
    explanationEs:
      "Una calculadora de presupuesto de boda estima el costo total de una boda separando los gastos que escalan con la lista de invitados de los que permanecen fijos, luego sumándolos en una sola cifra y un costo por invitado. Las bodas están entre los mayores gastos de un solo día que muchas personas planean jamás, y los costos vienen de tantas direcciones que un total en marcha es fácil de perder. Estructurar la estimación en torno al número de invitados aclara la mayor palanca que controlas.\n\nEl modelo es deliberadamente simple. Los costos por invitado —catering, bebidas, detalles, cubiertos y alquileres— se multiplican por el número de invitados, porque cada cabeza adicional los suma de nuevo. Los costos fijos como la tarifa del lugar, la vestimenta, la fotografía, las flores y la música se añaden encima ya que no cambian con la asistencia. Dividir el gran total entre el número de invitados da el verdadero costo integral que representa cada invitado.\n\nParejas fijando un presupuesto temprano, familias dividiendo quién paga qué y cualquiera que decida cuán larga debe ser la lista de invitados usan esto para probar escenarios rápidamente. Como los costos por invitado se multiplican, recortar la lista suele ser la forma más rápida de encajar una boda en el presupuesto: la calculadora hace visible esa disyuntiva, permitiéndote comparar una reunión íntima con una celebración mayor en segundos.",
    exampleEs: {
      inputs: { guestCount: "100", perGuestCost: "150", venueCost: "5000", extras: "3000" },
      explanation:
        "100 invitados a $150 cada uno son $15,000 en costos por persona. Añadir un lugar de $5,000 y $3,000 en extras da un presupuesto total de $23,000, que resulta en $230 por invitado una vez que los costos fijos se reparten entre la lista.",
    },
    faqsEs: [
      {
        question: "¿Qué va en el costo por invitado?",
        answer:
          "Incluye todo lo que escala con el número de asistentes: catering y barra, cubiertos y alquileres, detalles, invitaciones y artículos de bienvenida. Estos crecen con cada invitado que añades, así que agruparlos en una sola cifra por cabeza permite a la calculadora escalarlos automáticamente cuando pruebas distintos tamaños de lista. Los servicios de catering del lugar suelen cotizar un precio por plato que hace un buen punto de partida; añádele las bebidas y los pequeños artículos por invitado para una cifra realista.",
      },
      {
        question: "¿Qué debe ir en lugar y extras?",
        answer:
          "Pon los costos que permanecen más o menos fijos sin importar el número de invitados en los campos de lugar y extras. El lugar cubre la tarifa fija de alquiler o del sitio. Los extras reúnen la vestimenta, la fotografía y el video, las flores, la música o el DJ, el pastel, el oficiante y las tarifas de planificación. Estos no se multiplican al crecer la lista, así que mantenerlos separados de los costos por invitado conserva la precisión del modelo cuando ajustas la asistencia. Introdúcelos como mejores estimaciones y refínalos al recibir cotizaciones.",
      },
      {
        question: "¿Cómo impulsa el número de invitados el total?",
        answer:
          "El número de invitados suele ser la palanca más poderosa en un presupuesto de boda porque los costos por cabeza se multiplican con cada adición. Añadir veinte invitados a $150 cada uno eleva el presupuesto en $3,000 antes de que cambie cualquier costo fijo. Por eso recortar la lista suele ser la ruta más rápida a una boda asequible. Vuelve a ejecutar la calculadora con un número menor para ver cómo se compara una celebración íntima con una mayor tanto en el total como en el costo por invitado.",
      },
      {
        question: "¿Debo añadir un margen de contingencia?",
        answer:
          "Sí. Los costos de boda suelen superar las estimaciones tempranas a medida que se ultiman los detalles, así que los planificadores a menudo reservan un 5 a 15 por ciento extra para sobrecostos, adiciones de último minuto, propinas a proveedores y sorpresas. Puedes incorporar esto en la calculadora inflando tu cifra de extras o tratando mentalmente el resultado como un piso en lugar de un techo. Un margen te protege de apuros cuando una cotización llega más alta de lo esperado o aparece una nueva partida.",
      },
      {
        question: "¿Cómo puedo bajar el total sin recortar la lista de invitados?",
        answer:
          "Varias palancas fijas y por invitado ayudan. Elige una fecha o día de la semana de menor demanda para una tarifa de lugar más baja, sirve una cena de plato o bufé en lugar de estaciones premium, y ofrece cerveza y vino en lugar de barra libre completa. Recorta extras contratando menos horas de fotografía o arreglos florales más simples. Como los costos por invitado se multiplican, incluso pequeñas reducciones por cabeza producen ahorros significativos en una lista grande.",
      },
    ],
    fields: [
      {
        id: "guestCount",
        label: "Number of Guests",
        type: "number",
        placeholder: "e.g. 100",
        required: true,
      },
      {
        id: "perGuestCost",
        label: "Cost per Guest ($)",
        type: "number",
        placeholder: "e.g. 150",
        unit: "$",
        required: true,
        helpText: "Catering, drinks, favors, and rentals per head.",
      },
      {
        id: "venueCost",
        label: "Venue Cost ($)",
        type: "number",
        placeholder: "e.g. 5000",
        unit: "$",
        required: false,
        helpText: "Flat venue or rental fee, if separate from per-guest cost.",
      },
      {
        id: "extras",
        label: "Extras ($)",
        type: "number",
        placeholder: "e.g. 3000",
        unit: "$",
        required: false,
        helpText: "Attire, photography, flowers, music, and other fixed costs.",
      },
    ],
    results: [
      { id: "totalBudget", label: "Total Budget", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "perGuest", label: "Total Cost per Guest", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Total Budget = (Guests × Cost per Guest) + Venue + Extras; Cost per Guest = Total Budget ÷ Guests",
    formulaExplanation:
      "Wedding costs split into two kinds: per-head expenses that scale with attendance and fixed expenses that do not. Multiplying the guest count by the per-guest cost captures catering, drinks, and rentals that grow with the list, and adding the flat venue fee and fixed extras completes the total. Dividing that grand total back by the guest count reveals the all-in cost each guest represents, which exposes how much the size of the list drives the overall bill.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A wedding budget calculator estimates the total cost of a wedding by separating expenses that scale with the guest list from those that stay fixed, then adding them into one figure and a per-guest cost. Weddings are among the largest one-day expenses many people ever plan, and costs come from so many directions that a running total is easy to lose. Structuring the estimate around guest count clarifies the single biggest lever you control.\n\nThe model is deliberately simple. Per-guest costs — catering, drinks, favors, place settings, and rentals — multiply by the number of guests, because each additional head adds them again. Fixed costs like the venue fee, attire, photography, flowers, and music are added on top since they do not change with attendance. Dividing the grand total by the guest count gives the true all-in cost each guest represents.\n\nCouples setting an early budget, families dividing who pays for what, and anyone deciding how long the guest list should be use this to test scenarios quickly. Because per-guest costs multiply, trimming the list is often the fastest way to bring a wedding within budget — the calculator makes that trade-off visible, letting you compare an intimate gathering against a larger celebration in seconds.",
    example: {
      inputs: { guestCount: "100", perGuestCost: "150", venueCost: "5000", extras: "3000" },
      explanation:
        "100 guests at $150 each is $15,000 in per-head costs. Adding a $5,000 venue and $3,000 in extras gives a $23,000 total budget, which works out to $230 per guest once the fixed costs are spread across the list.",
    },
    faqs: [
      {
        question: "What belongs in the per-guest cost?",
        answer:
          "Include everything that scales with head count: catering and the bar, place settings and rentals, favors, invitations, and welcome items. These grow with every guest you add, so grouping them into one per-head figure lets the calculator scale them automatically as you test different list sizes. Venue caterers often quote a per-plate price that makes a good starting point; add drinks and small per-guest items to it for a realistic figure.",
      },
      {
        question: "What should go under venue and extras?",
        answer:
          "Put costs that stay roughly fixed regardless of guest count into the venue and extras fields. Venue covers the flat rental or site fee. Extras gather attire, photography and video, flowers, music or a DJ, the cake, officiant, and planning fees. These do not multiply as the list grows, so keeping them separate from per-guest costs keeps the model accurate when you adjust attendance. Enter them as best estimates and refine as you gather quotes.",
      },
      {
        question: "How does guest count drive the total?",
        answer:
          "Guest count is usually the most powerful lever in a wedding budget because per-head costs multiply with every addition. Adding twenty guests at $150 each raises the budget by $3,000 before any fixed costs change. This is why trimming the list is often the fastest route to an affordable wedding. Rerun the calculator with a smaller count to see how an intimate celebration compares to a larger one on both total and per-guest cost.",
      },
      {
        question: "Should I add a contingency buffer?",
        answer:
          "Yes. Wedding costs commonly exceed early estimates as details are finalized, so planners often set aside an extra 5 to 15 percent for overruns, last-minute additions, vendor gratuities, and surprises. You can build this into the calculator by inflating your extras figure or by mentally treating the result as a floor rather than a ceiling. A buffer protects you from scrambling when a quote comes in higher than expected or a new line item appears.",
      },
      {
        question: "How can I lower the total without cutting the guest list?",
        answer:
          "Several fixed and per-guest levers help. Choose an off-peak date or day of the week for a lower venue fee, serve a plated dinner or buffet instead of premium stations, and offer beer and wine rather than a full open bar. Trim extras by booking fewer hours of photography or simpler florals. Because per-guest costs multiply, even small reductions per head produce meaningful savings across a large list.",
      },
    ],
    relatedCalculators: ["gift-budget-calculator", "subscription-cost-calculator", "split-bill-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
  {
    id: "gift-budget",
    slug: "gift-budget-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Gift Budget Calculator",
    shortDescription:
      "Work out your total gift budget from the number of people and how much you plan to spend on each.",
    seoTitle: "Gift Budget Calculator — Total Holiday & Occasion Gift Spending",
    metaDescription:
      "Calculate your total gift budget from the number of people and your spend per person. Free calculator for holiday, birthday, and occasion gift planning.",
    primaryKeyword: "gift budget calculator",
    secondaryKeywords: [
      "holiday gift budget calculator",
      "christmas gift budget",
      "gift spending calculator",
      "how much to spend on gifts",
    ],
    slugEs: "calculadora-de-presupuesto-de-regalos",
    titleEs: "Calculadora de presupuesto de regalos",
    shortDescriptionEs:
      "Calcula tu presupuesto total de regalos según el número de personas y cuánto planeas gastar en cada una.",
    seoTitleEs: "Calculadora de presupuesto de regalos — Gasto total en regalos de fiestas y ocasiones",
    metaDescriptionEs:
      "Calcula tu presupuesto total de regalos según el número de personas y tu gasto por persona. Calculadora gratuita para planificar regalos de fiestas, cumpleaños y ocasiones.",
    primaryKeywordEs: "calculadora de presupuesto de regalos",
    secondaryKeywordsEs: [
      "presupuesto de regalos de navidad",
      "calculadora de gasto en regalos",
      "cuanto gastar en regalos",
    ],
    formulaExplanationEs:
      "Cuando planeas gastar la misma cantidad en cada destinatario, el total es simplemente esa cantidad por persona repetida una vez por cada persona de tu lista, que es exactamente lo que expresa la multiplicación. Multiplicar el número de personas por el presupuesto por persona colapsa toda una lista de regalos en una sola cifra planificada, para que puedas fijar un total asequible por adelantado y ajustar el número de personas o la cantidad por persona hasta que el resultado encaje con lo que te sientes cómodo gastando.",
    explanationEs:
      "Una calculadora de presupuesto de regalos convierte una lista de regalos en un solo total planificado multiplicando para cuántas personas compras por cuánto piensas gastar en cada una. Las ocasiones de regalos —fiestas, cumpleaños, bodas y graduaciones— tienen la costumbre de expandirse en silencio a medida que se añaden nombres y cada compra individual se siente pequeña de forma aislada. Fijar un total por adelantado, antes de empezar a comprar, es la forma más fiable de mantener la temporada dentro de tus posibilidades.\n\nEl cálculo es deliberadamente simple: número de personas multiplicado por el presupuesto por persona. Su valor está en la planificación que permite. Al fijar una cantidad por persona y ver el total al instante, puedes decidir si el número encaja con tus finanzas, luego ajustar cualquiera de las palancas —gastar un poco menos por persona, o acortar la lista— hasta que el resultado se sienta cómodo. Esto convierte el gasto en regalos de reactivo a intencional.\n\nCompradores de fiestas frente a una lista larga, cualquiera que organice un intercambio de grupo u oficina, y personas que se excedieron el año pasado y quieren un tope firme esta vez usan esto para mantener el control. Para un plan más detallado, puedes ejecutar cálculos separados para niveles de destinatarios —familia cercana en una cantidad, amigos y compañeros en otra— y sumar los totales para un presupuesto completo y realista.",
    exampleEs: {
      inputs: { numberOfPeople: "8", budgetPerPerson: "25" },
      explanation:
        "Comprar para 8 personas a $25 cada una da un presupuesto total de regalos de 8 × $25 = $200. Si eso se siente alto, baja a $20 cada una para un total de $160, o acorta la lista: la calculadora se actualiza al instante mientras ajustas.",
    },
    faqsEs: [
      {
        question: "¿Cómo manejo presupuestos distintos para personas distintas?",
        answer:
          "Divide tu lista en niveles y ejecuta la calculadora una vez por nivel, luego suma los totales. Por ejemplo, calcula cinco familiares cercanos a $50 cada uno, luego diez amigos y compañeros a $20 cada uno, y suma los dos resultados para el presupuesto general. Este enfoque por niveles refleja cómo la mayoría de la gente realmente regala —gastando más en quienes le son más cercanos— sin dejar de producir un total firme para planificar y comprar.",
      },
      {
        question: "¿Cuánto debo gastar por persona?",
        answer:
          "No hay una regla fija; depende de tus finanzas y de tu relación con cada destinatario. Un enfoque común es fijar primero un presupuesto total cómodo, luego repartirlo entre tu lista para hallar una cifra realista por persona, en lugar de elegir una cantidad por persona y descubrir que el total es inasequible. Las relaciones más cercanas suelen justificar más, las casuales menos. La consideración importa más que el precio, y un regalo modesto y bien elegido a menudo cae mejor que uno caro.",
      },
      {
        question: "¿Debo incluir envoltura, tarjetas y envío?",
        answer:
          "Estos extras se acumulan en una lista larga, así que es prudente tenerlos en cuenta. Puedes incorporar una estimación de envoltura, tarjetas y franqueo en tu presupuesto por persona —añadiendo unos pocos dólares por destinatario— o tratarlos como una partida separada y sumarla al total de la calculadora. Ignorarlos es una razón común por la que el gasto en regalos se pasa del plan, especialmente al enviar regalos a familiares y amigos lejanos.",
      },
      {
        question: "¿Cómo puedo ceñirme a mi presupuesto de regalos?",
        answer:
          "Fija el total antes de comprar y trátalo como un tope firme, no como una sugerencia. Haz una lista específica con una cantidad objetivo junto a cada nombre, y rastrea las compras contra ella a medida que avanzas. Compra temprano para evitar precios premium de último minuto, atento a las ofertas, y considera regalos de grupo o un intercambio con sorteo de nombres para recortar el número de regalos. Sugerir un límite de gasto dentro de grupos familiares o de oficina mantiene a todos cómodos.",
      },
      {
        question: "¿Los intercambios de grupo o con sorteo de nombres son más baratos?",
        answer:
          "Normalmente, sí. En un intercambio con sorteo de nombres como el amigo invisible, cada persona compra un regalo en lugar de uno para todos, lo que reduce drásticamente el número de compras en un grupo grande u oficina. El regalo de grupo —varias personas juntando dinero para un presente mayor— reparte el costo y a menudo entrega algo más significativo que varios artículos pequeños. Ambos enfoques reducen tu total personal manteniendo el espíritu de la ocasión, y puedes modelarlos bajando el número de personas.",
      },
    ],
    fields: [
      {
        id: "numberOfPeople",
        label: "Number of People",
        type: "number",
        placeholder: "e.g. 8",
        required: true,
        helpText: "How many people you are buying gifts for.",
      },
      {
        id: "budgetPerPerson",
        label: "Budget per Person ($)",
        type: "number",
        placeholder: "e.g. 25",
        unit: "$",
        required: true,
      },
    ],
    results: [
      { id: "totalBudget", label: "Total Gift Budget", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "Total Budget = Number of People × Budget per Person",
    formulaExplanation:
      "When you plan to spend the same amount on each recipient, the total is simply that per-person amount repeated once for every person on your list — which is exactly what multiplication expresses. Multiplying the number of people by the budget per person collapses a whole gift list into a single planned figure, so you can set an affordable total up front and adjust either the head count or the amount per person until the result fits what you are comfortable spending.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A gift budget calculator turns a gift list into a single planned total by multiplying how many people you are buying for by how much you intend to spend on each. Gift-giving occasions — holidays, birthdays, weddings, and graduations — have a way of expanding quietly as names get added and individual purchases feel small in isolation. Setting a total up front, before you start shopping, is the most reliable way to keep the season within your means.\n\nThe calculation is deliberately simple: number of people multiplied by budget per person. Its value is in the planning it enables. By fixing a per-person amount and seeing the total instantly, you can decide whether the number fits your finances, then adjust either lever — spend a little less per person, or shorten the list — until the result feels comfortable. This flips gift spending from reactive to intentional.\n\nHoliday shoppers facing a long list, anyone organizing a group or office exchange, and people who overspent last year and want a firm cap this time use this to stay in control. For a more detailed plan, you can run separate calculations for tiers of recipients — close family at one amount, friends and coworkers at another — and add the totals together for a complete, realistic budget.",
    example: {
      inputs: { numberOfPeople: "8", budgetPerPerson: "25" },
      explanation:
        "Buying for 8 people at $25 each gives a total gift budget of 8 × $25 = $200. If that feels high, drop to $20 each for a $160 total, or shorten the list — the calculator updates instantly as you adjust.",
    },
    faqs: [
      {
        question: "How do I handle different budgets for different people?",
        answer:
          "Split your list into tiers and run the calculator once per tier, then add the totals. For example, calculate five close family members at $50 each, then ten friends and coworkers at $20 each, and sum the two results for the overall budget. This tiered approach reflects how most people really give — spending more on those closest to them — while still producing one firm total to plan and shop against.",
      },
      {
        question: "How much should I spend per person?",
        answer:
          "There is no fixed rule; it depends on your finances and your relationship with each recipient. A common approach is to set a comfortable total budget first, then divide it across your list to find a realistic per-person figure, rather than picking an amount per person and discovering the total is unaffordable. Closer relationships typically warrant more, casual ones less. Thoughtfulness matters more than price, and a modest, well-chosen gift often lands better than an expensive one.",
      },
      {
        question: "Should I include wrapping, cards, and shipping?",
        answer:
          "These extras add up across a long list, so it is wise to account for them. You can fold an estimate for wrapping, cards, and postage into your per-person budget — adding a few dollars per recipient — or treat them as a separate line and add it to the calculator's total. Ignoring them is a common reason gift spending overshoots the plan, especially when shipping gifts to distant family and friends.",
      },
      {
        question: "How can I stick to my gift budget?",
        answer:
          "Set the total before you shop and treat it as a firm cap, not a suggestion. Make a specific list with a target amount beside each name, and track purchases against it as you go. Shop early to avoid last-minute premium pricing, watch for sales, and consider group gifts or a name-drawing exchange to cut the number of gifts. Suggesting a spending limit within family or office groups keeps everyone comfortable and reduces pressure to overspend.",
      },
      {
        question: "Are group or drawn-name gift exchanges cheaper?",
        answer:
          "Usually, yes. In a name-drawing exchange like Secret Santa, each person buys one gift instead of one for everyone, which sharply reduces the number of purchases across a large group or office. Group gifting — several people pooling money for one larger present — spreads the cost and often delivers something more meaningful than several small items. Both approaches shrink your personal total while keeping the spirit of the occasion, and you can model them by lowering the head count.",
      },
    ],
    relatedCalculators: ["wedding-budget-calculator", "subscription-cost-calculator", "split-bill-calculator"],
    status: "active",
    lastReviewed: "2026-08-20",
  },
];
