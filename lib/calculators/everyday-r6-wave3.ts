import type { CalculatorDefinition } from "../types";

export const everydayR6Calculators: CalculatorDefinition[] = [
  {
    id: "gas-trip-cost",
    slug: "gas-trip-cost-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Gas Trip Cost Calculator",
    shortDescription:
      "Estimate the fuel cost of any drive from the distance, your vehicle's MPG, and the current gas price.",
    seoTitle: "Gas Trip Cost Calculator — Fuel Cost for Any Drive",
    metaDescription:
      "Calculate the fuel cost of a road trip or drive from distance, MPG, and gas price. See total cost and gallons used. Free gas trip cost calculator.",
    primaryKeyword: "gas trip cost calculator",
    secondaryKeywords: [
      "fuel cost calculator",
      "road trip gas calculator",
      "cost of gas for a trip",
      "gas mileage cost calculator",
    ],
    fields: [
      {
        id: "distanceMiles",
        label: "Trip Distance (miles)",
        type: "number",
        placeholder: "e.g. 300",
        required: true,
        helpText: "Total miles you plan to drive, including the return leg if applicable.",
      },
      {
        id: "mpg",
        label: "Fuel Economy (MPG)",
        type: "number",
        placeholder: "e.g. 30",
        required: true,
        helpText: "Your vehicle's miles per gallon.",
      },
      {
        id: "gasPricePerGallon",
        label: "Gas Price ($/gallon)",
        type: "number",
        placeholder: "e.g. 4.00",
        unit: "$",
        required: true,
      },
    ],
    results: [
      { id: "tripCost", label: "Trip Fuel Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "gallonsUsed", label: "Gallons Used", format: "number", decimals: 2, unit: "gal", isPrimary: false },
    ],
    formula:
      "Gallons Used = Distance ÷ MPG; Trip Cost = Gallons Used × Gas Price per Gallon",
    formulaExplanation:
      "Fuel economy tells you how far one gallon carries your vehicle, so dividing the trip distance by miles per gallon returns the number of gallons the drive will burn. Multiplying that gallon count by the price you pay at the pump converts fuel into dollars. The two steps trace the trip from miles to gallons to money, isolating the three levers — distance, efficiency, and price — that each move the final cost up or down in direct proportion.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A gas trip cost calculator estimates what fuel will cost for a specific drive by combining the distance you will travel, how many miles your vehicle squeezes from a gallon, and the current pump price. Whether you are planning a cross-country road trip, weighing a weekend getaway, or splitting fuel with friends, seeing the number before you leave turns a vague sense of expense into a firm figure you can budget around.\n\nThe calculation follows the fuel from distance to dollars. Dividing the trip distance by your miles per gallon gives the gallons the drive consumes, and multiplying those gallons by the price per gallon produces the total cost. Because each input scales the result directly, the tool also shows how a more efficient vehicle, a shorter route, or a cheaper fill-up changes what you pay.\n\nRoad trippers comparing routes, carpoolers dividing costs fairly, and commuters checking a longer detour all use this to make driving expenses visible. Remember that fuel is only one slice of the true cost of driving — tolls, wear, and depreciation add more — so treat the result as the fuel baseline. Entering your vehicle's real-world MPG rather than the sticker figure keeps the estimate honest for the roads you actually drive.",
    example: {
      inputs: { distanceMiles: "300", mpg: "30", gasPricePerGallon: "4" },
      explanation:
        "A 300-mile drive in a car that gets 30 MPG burns 300 ÷ 30 = 10 gallons. At $4.00 per gallon, the trip costs 10 × $4.00 = $40.00 in fuel. Split among three passengers, that is about $13.33 each.",
    },
    faqs: [
      {
        question: "Should I use city or highway MPG?",
        answer:
          "Match the figure to the roads you will actually drive. Long highway trips return close to the higher rated highway MPG, while stop-and-go city driving lands nearer the lower city figure. For a mixed route, use the combined rating on the fuel-economy label, or better still, your own observed average from the trip computer, which already reflects your terrain, speed, and driving style for the most accurate estimate.",
      },
      {
        question: "Do I enter one-way or round-trip distance?",
        answer:
          "Enter whichever distance you actually intend to drive. For a round trip, add both legs together — the miles out plus the miles back — since you burn fuel in each direction. If you only know the one-way distance and plan to return the same way, double it before entering. Include any planned detours or side trips, because those extra miles consume fuel and belong in a realistic total.",
      },
      {
        question: "Why does my real fuel cost differ from the estimate?",
        answer:
          "Real driving rarely holds a single steady MPG. Headwinds, hills, heavy loads, roof racks, air conditioning, and aggressive acceleration all lower fuel economy, while gentle highway cruising raises it. Pump prices also vary between stations and states along a route. Treat the result as a solid planning estimate, and enter a slightly conservative MPG if your trip includes mountains, towing, or lots of cold-weather idling to avoid underestimating.",
      },
      {
        question: "How can I lower the fuel cost of a trip?",
        answer:
          "Reduce any of the three inputs. Choose a shorter or flatter route to cut distance, keep tires properly inflated and remove excess weight and roof cargo to raise MPG, and maintain a steady moderate speed since fuel economy drops sharply above about 60 mph. Filling up at cheaper stations, using fuel apps to find low prices, and carpooling to split the total all shrink what the drive costs you.",
      },
      {
        question: "Does this work for electric vehicles?",
        answer:
          "This calculator is built for gasoline vehicles priced per gallon, so it does not directly fit EVs, which are measured in kilowatt-hours and cost per kWh. To estimate an EV trip, you would instead divide the distance by the car's miles-per-kWh efficiency and multiply by your electricity rate. The same logic applies — distance divided by efficiency, times price — but the units differ, so use an EV-specific tool for accuracy.",
      },
    ],
    relatedCalculators: ["commute-cost-calculator", "split-bill-calculator", "subscription-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "cost-per-use",
    slug: "cost-per-use-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Cost Per Use Calculator",
    shortDescription:
      "See the true value of a purchase by dividing what it cost by how many times you actually use it.",
    seoTitle: "Cost Per Use Calculator — True Value of a Purchase",
    metaDescription:
      "Find the real cost per use of anything you buy by dividing price by the number of uses. Free cost per use calculator to judge value before you spend.",
    primaryKeyword: "cost per use calculator",
    secondaryKeywords: [
      "cost per wear calculator",
      "price per use calculator",
      "value for money calculator",
      "cost per use formula",
    ],
    fields: [
      {
        id: "itemCost",
        label: "Item Cost ($)",
        type: "number",
        placeholder: "e.g. 120",
        unit: "$",
        required: true,
        helpText: "The full price you paid, including tax if you want the true figure.",
      },
      {
        id: "timesUsed",
        label: "Number of Times Used",
        type: "number",
        placeholder: "e.g. 40",
        required: true,
        helpText: "How many times you have used it, or realistically expect to.",
      },
    ],
    results: [
      { id: "costPerUse", label: "Cost Per Use", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
    ],
    formula: "Cost Per Use = Item Cost ÷ Number of Times Used",
    formulaExplanation:
      "The price tag captures the whole cost of ownership in a single number, but value is really earned one use at a time. Dividing the total cost by the number of times you use the item spreads that price evenly across every use, revealing what each individual use actually cost you. A high price divided over many uses shrinks to pennies, while a bargain used once stays expensive — which is precisely why cost per use judges value more honestly than the sticker alone.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A cost per use calculator reframes any purchase around a simple, honest question: what does it cost you each time you actually use it? Sticker price alone is a poor guide to value, because a cheap item worn once is a waste while an expensive one used constantly can be a bargain. Dividing the price by the number of uses turns the headline number into a per-use figure that reflects real value rather than first impressions.\n\nThe math is deliberately simple — total cost divided by number of uses — but its power is in how it changes decisions. A $120 pair of boots worn 40 times costs $3 a wear; a $30 pair worn twice costs $15 a wear. Judged by cost per use, the pricier boots are the better buy, a conclusion the price tags alone would hide entirely.\n\nShoppers deciding between a cheap and a quality version, wardrobe planners applying the cost-per-wear rule, and anyone talking themselves out of an impulse buy use this to think clearly. It works before purchase, using an honest estimate of expected uses, and after, to review whether past buys earned their keep. Used consistently, it steers spending toward things you will genuinely use often and away from tempting bargains that end up idle.",
    example: {
      inputs: { itemCost: "120", timesUsed: "40" },
      explanation:
        "A $120 jacket worn 40 times costs $120 ÷ 40 = $3.00 per wear. Compared with a $30 jacket worn only twice — $15.00 per wear — the pricier jacket is actually five times better value once you account for how much you use it.",
    },
    faqs: [
      {
        question: "Should I use actual or expected number of uses?",
        answer:
          "Both are useful for different purposes. Before buying, enter an honest estimate of how many times you realistically expect to use the item — being conservative guards against wishful thinking. After buying, enter the real count to review whether the purchase earned its price. Estimating expected uses before you spend is the more valuable habit, because it exposes impulse buys and low-use luxuries while you can still decide not to purchase them.",
      },
      {
        question: "Does this apply to more than clothing?",
        answer:
          "Yes, cost per use fits almost anything you own. Kitchen gadgets, power tools, sports and camping gear, furniture, electronics, subscriptions measured per session, and appliances all reveal their true value this way. A bread machine used weekly for years costs a few cents per loaf; a specialty gadget used once is expensive no matter how cheap it was. Any durable item you can count the uses of works with this calculator.",
      },
      {
        question: "Should I include maintenance or running costs?",
        answer:
          "For a purer comparison you can add ongoing costs to the item price. A gym membership's cost per visit should include monthly fees, and a car's cost per trip could fold in fuel and upkeep. The simple version uses only the purchase price, which is fine for comparing similar items. When running costs are significant — as with appliances or vehicles — including them gives a truer picture of what each use really costs.",
      },
      {
        question: "How does this help me avoid impulse buys?",
        answer:
          "Impulse purchases feel justified by a low price, but cost per use exposes the ones you will barely touch. Before buying, ask how many times you will genuinely use the item and run the number: a $50 gadget you will use twice costs $25 each time, which reframes it as a poor deal. This quick check interrupts the buy-now impulse with a value question, nudging you toward things you will actually use.",
      },
      {
        question: "Is a lower cost per use always better?",
        answer:
          "Usually, but not always. A very low cost per use signals good value, yet the total price still has to fit your budget — a durable item with a great per-use figure is still unaffordable if you cannot pay for it upfront. Enjoyment and need matter too; something used rarely but treasured on special occasions may justify a higher per-use cost. Use the figure as a strong guide, balanced against affordability and genuine use.",
      },
    ],
    relatedCalculators: ["price-per-unit-comparison-calculator", "subscription-cost-calculator", "gift-budget-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "price-per-unit-comparison",
    slug: "price-per-unit-comparison-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Price Per Unit Comparison Calculator",
    shortDescription:
      "Compare two products by unit price to see which is genuinely the better deal, regardless of package size.",
    seoTitle: "Price Per Unit Comparison Calculator — Which Is the Better Deal",
    metaDescription:
      "Compare two products by price per unit to find the better deal instantly, whatever the package size. Free unit price comparison calculator for smart shopping.",
    primaryKeyword: "price per unit comparison calculator",
    secondaryKeywords: [
      "unit price calculator",
      "which is cheaper calculator",
      "price comparison calculator",
      "cost per unit calculator",
    ],
    fields: [
      {
        id: "priceA",
        label: "Product A Price ($)",
        type: "number",
        placeholder: "e.g. 6.00",
        unit: "$",
        required: true,
        span: 1,
      },
      {
        id: "sizeA",
        label: "Product A Size (units)",
        type: "number",
        placeholder: "e.g. 12",
        required: true,
        span: 1,
        helpText: "Ounces, grams, count, or any unit — just use the same unit for both.",
      },
      {
        id: "priceB",
        label: "Product B Price ($)",
        type: "number",
        placeholder: "e.g. 4.00",
        unit: "$",
        required: true,
        span: 1,
      },
      {
        id: "sizeB",
        label: "Product B Size (units)",
        type: "number",
        placeholder: "e.g. 10",
        required: true,
        span: 1,
        helpText: "Use the same unit you used for Product A.",
      },
    ],
    results: [
      { id: "unitPriceA", label: "Product A Unit Price", format: "currency", currency: "USD", decimals: 4, isPrimary: true },
      { id: "unitPriceB", label: "Product B Unit Price", format: "currency", currency: "USD", decimals: 4, isPrimary: false },
      { id: "betterDeal", label: "Better Deal", format: "text", isPrimary: false },
    ],
    formula:
      "Unit Price A = Price A ÷ Size A; Unit Price B = Price B ÷ Size B; Better Deal = whichever unit price is lower",
    formulaExplanation:
      "Package prices are hard to compare because they bundle different quantities, so a bigger number on the shelf does not reliably mean a worse deal. Dividing each product's price by its size strips the packaging away and reduces both to the same common denominator — the cost of a single unit. Once both are expressed per unit, comparison becomes trivial: the lower figure is objectively cheaper per unit, and the calculator flags it, or reports a tie when the two unit prices are equal.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A price per unit comparison calculator settles the everyday shopping question of which product is truly cheaper when two options come in different sizes. Shelf prices are designed to be hard to compare — a larger bottle may cost more in total yet less per ounce, while a 'value' size occasionally costs more per unit than the standard one. Reducing both to a price per unit removes the guesswork and reveals the genuine better deal.\n\nThe method is straightforward: divide each product's price by its size to get the cost of one unit, then compare. As long as you measure both in the same unit — ounces, grams, sheets, count, or liters — the comparison is fair regardless of how the packages differ. The calculator computes both unit prices and names the cheaper option, or flags a tie when they match exactly.\n\nGrocery shoppers checking whether bulk really saves, anyone comparing brands and pack sizes, and bargain hunters wary of misleading 'value' labels use this to shop with confidence. Unit pricing is the single most reliable way to compare value at the shelf, and while many stores print it on the tag, the figures are often in tiny type or inconsistent units. Running the two numbers yourself guarantees an apples-to-apples answer every time.",
    example: {
      inputs: { priceA: "6", sizeA: "12", priceB: "4", sizeB: "10" },
      explanation:
        "Product A costs $6.00 for 12 ounces, or $0.50 per ounce. Product B costs $4.00 for 10 ounces, or $0.40 per ounce. Even though B has a lower sticker price and less product, it is also cheaper per ounce, so B is the better deal.",
    },
    faqs: [
      {
        question: "What units should I enter for size?",
        answer:
          "Use any unit you like — ounces, grams, milliliters, liters, sheets, or item count — as long as you use the exact same unit for both products. The calculator compares them on equal footing, so mixing units, such as ounces for one and grams for the other, produces a meaningless result. If two packages list different units, convert one so both match before entering, then the per-unit comparison will be accurate.",
      },
      {
        question: "Is the bigger package always cheaper per unit?",
        answer:
          "Not always. Buying in bulk usually lowers the unit price, but not reliably — retailers sometimes price larger 'value' or 'family' sizes higher per unit than the standard package, counting on shoppers to assume bigger means cheaper. Promotions, coupons, and store-brand versions can also flip the math. That uncertainty is exactly why checking the actual unit price matters; never assume the largest option wins without confirming the numbers.",
      },
      {
        question: "Should I factor in whether I'll use it all?",
        answer:
          "Yes. A lower unit price only saves money if you actually use the product before it expires or goes stale. A giant jar that is cheaper per ounce becomes the worse deal if half of it is thrown away. For perishables and items you use slowly, weigh the unit-price savings against realistic consumption. For shelf-stable goods you reliably use, the cheaper unit price almost always wins.",
      },
      {
        question: "Does this handle multi-buy or sale prices?",
        answer:
          "It handles them if you enter the effective price and total size. For a 'buy 2 for $5' deal, enter $5 as the price and the combined size of both items. For a percentage-off sale, enter the discounted price. The calculator always works from whatever price and size you give it, so translate any promotion into the real total you pay and the real quantity you receive before comparing.",
      },
      {
        question: "Why compute unit price myself if the shelf tag shows it?",
        answer:
          "Store unit-price labels are helpful but inconsistent. Different products on the same shelf are sometimes priced per ounce, per 100 grams, or per count, which defeats direct comparison. Tags can be outdated, missing on sale items, or printed in hard-to-read type. Running the two numbers yourself guarantees both are measured the same way and reflect the current price, giving you a trustworthy answer instead of relying on labels that may not line up.",
      },
    ],
    relatedCalculators: ["cost-per-use-calculator", "grocery-budget-calculator", "tip-split-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "tip-split",
    slug: "tip-split-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Tip & Split Calculator",
    shortDescription:
      "Add a tip to a bill and split the total evenly across your group to find exactly what each person owes.",
    seoTitle: "Tip & Split Calculator — Tip Plus Even Bill Split per Person",
    metaDescription:
      "Add a tip and split a restaurant bill evenly among your group. See the tip total and what each person pays. Free tip and split calculator.",
    primaryKeyword: "tip split calculator",
    secondaryKeywords: [
      "tip and split calculator",
      "split the bill with tip",
      "restaurant bill split calculator",
      "tip per person calculator",
    ],
    fields: [
      {
        id: "billAmount",
        label: "Bill Amount ($)",
        type: "number",
        placeholder: "e.g. 100",
        unit: "$",
        required: true,
        helpText: "The pre-tip total, before tax or after — match how you want to tip.",
      },
      {
        id: "tipPercent",
        label: "Tip Percentage (%)",
        type: "number",
        placeholder: "e.g. 20",
        unit: "%",
        defaultValue: 18,
        required: true,
      },
      {
        id: "numberOfPeople",
        label: "Number of People",
        type: "number",
        placeholder: "e.g. 4",
        defaultValue: 2,
        required: true,
      },
    ],
    results: [
      { id: "totalPerPerson", label: "Total per Person", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "tipTotal", label: "Total Tip", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Tip Total = Bill × Tip% ÷ 100; Total per Person = (Bill + Tip Total) ÷ Number of People",
    formulaExplanation:
      "Multiplying the bill by the tip percentage divided by one hundred converts the percentage into a dollar tip. Adding that tip to the original bill gives the full amount the table owes, gratuity included. Dividing the grand total by the number of people at the table shares it equally, so everyone contributes the same amount toward both the food and the tip. The steps mirror how a group actually settles a check — total it, tip it, then divide it evenly.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A tip and split calculator handles the two-step arithmetic every group faces at the end of a shared meal: add a fair gratuity, then divide the total evenly so each person pays the same amount. Doing this in your head after dinner is error-prone, especially with an odd bill or an unusual tip percentage, and getting it wrong either shorts the server or leaves someone overpaying. This tool produces a clean per-person figure in one glance.\n\nThe calculation first turns the tip percentage into dollars by multiplying the bill by the rate, then adds that tip to the bill for the full amount owed, and finally divides by the number of people at the table. It also reports the total tip on its own, which is handy for confirming the gratuity is reasonable or entering it on a card slip.\n\nFriends splitting dinner, coworkers settling a group lunch, and travelers dividing a shared tab use this for a fast, fair answer. The even-split model assumes everyone contributes equally, which suits shared plates and similar orders. If diners ordered very differently, an itemized split is fairer, but for the common case of a group sharing a meal, splitting the tipped total evenly is the simplest way to settle up without awkward math or disputes.",
    example: {
      inputs: { billAmount: "100", tipPercent: "20", numberOfPeople: "4" },
      explanation:
        "A $100 bill with a 20% tip adds $100 × 0.20 = $20 in gratuity, for a $120 total. Split among 4 people, each pays $120 ÷ 4 = $30.00, which covers both their share of the food and the tip.",
    },
    faqs: [
      {
        question: "Should I tip on the pre-tax or post-tax amount?",
        answer:
          "Etiquette generally suggests tipping on the pre-tax subtotal, since the tax is not part of the service the server provided. In practice many people tip on the post-tax total for simplicity, which adds only a small amount. Either is acceptable — decide which figure to enter as the bill amount based on your preference. Tipping on the pre-tax subtotal is the more traditional choice and slightly reduces the total the table pays.",
      },
      {
        question: "What is a standard tip percentage?",
        answer:
          "In the United States, 15 to 20 percent of the bill is customary for sit-down restaurant service, with 18 to 20 percent common for good service and more for exceptional service or large parties. Counter service, takeout, and coffee typically warrant less or nothing. Customs vary widely by country — many nations include service or tip far less — so adjust the percentage to local norms rather than applying a single rate everywhere.",
      },
      {
        question: "How does the even split handle uneven orders?",
        answer:
          "An even split charges everyone the same, which is fairest when diners shared plates or ordered similarly. If one person had a steak and expensive drinks while another had a salad and water, splitting evenly overcharges the lighter eater. For very unequal orders, an itemized split — each paying for what they ordered plus a proportional share of tip and tax — is fairer. This calculator handles the common equal-share case simply and quickly.",
      },
      {
        question: "Can I use this to check a mandatory gratuity?",
        answer:
          "Yes. Many restaurants add an automatic service charge, often 18 to 20 percent, for larger parties. Enter that percentage as the tip to confirm the amount the restaurant added and to see the resulting per-person total. Always check the bill first — if gratuity is already included, adding another tip on top means paying it twice, so verify before entering a tip percentage to avoid double-tipping the same service.",
      },
      {
        question: "How should we round the per-person amount?",
        answer:
          "The calculator gives an exact figure, but groups often round each share up to the nearest dollar for convenience, which quietly bumps the tip a little higher and simplifies cash payment. If paying by card, exact amounts are easy to enter. When splitting cash, rounding up slightly ensures the total collected covers the full bill and gratuity, avoiding a shortfall where the pooled money falls just under what the table owes.",
      },
    ],
    relatedCalculators: ["split-bill-calculator", "tip-calculator", "gas-trip-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "savings-rate",
    slug: "savings-rate-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Savings Rate Calculator",
    shortDescription:
      "Find what share of your income you save each month — the single number that most shapes your financial progress.",
    seoTitle: "Savings Rate Calculator — Percent of Income You Save",
    metaDescription:
      "Calculate your savings rate as a percentage of income from your monthly income and savings. Free savings rate calculator to track financial progress.",
    primaryKeyword: "savings rate calculator",
    secondaryKeywords: [
      "how to calculate savings rate",
      "percentage of income saved",
      "personal savings rate calculator",
      "savings percentage calculator",
    ],
    fields: [
      {
        id: "monthlyIncome",
        label: "Monthly Income ($)",
        type: "number",
        placeholder: "e.g. 5000",
        unit: "$",
        required: true,
        helpText: "Take-home pay is most useful, but use gross if you prefer that basis.",
      },
      {
        id: "monthlySavings",
        label: "Monthly Savings ($)",
        type: "number",
        placeholder: "e.g. 1000",
        unit: "$",
        required: true,
        helpText: "Everything you set aside: cash savings, investments, and retirement contributions.",
      },
    ],
    results: [
      { id: "savingsRate", label: "Savings Rate", format: "percentage", decimals: 1, isPrimary: true },
    ],
    formula: "Savings Rate = Monthly Savings ÷ Monthly Income × 100",
    formulaExplanation:
      "Dividing what you save by what you earn expresses savings as a fraction of income, and multiplying by one hundred turns that fraction into a percentage. Framing savings as a rate rather than a dollar amount makes it comparable across different income levels and over time — someone earning more only saves more meaningfully if their rate holds. The percentage captures the balance between earning and spending in one figure, which is why it is the headline metric of personal finance.",
    formulaSource: "Standard personal finance formula",
    explanation:
      "A savings rate calculator measures the percentage of your income you keep rather than spend, distilling your financial habits into one revealing number. Dollars saved depend heavily on how much you earn, but the savings rate levels the field: it shows what fraction of every paycheck you convert into future security, regardless of income size. This is why financial planners treat it as the most important single metric of personal finance.\n\nThe formula divides monthly savings by monthly income and multiplies by one hundred. What counts as savings is everything you set aside for the future — cash added to savings and emergency funds, brokerage investments, and retirement contributions including any employer match you choose to include. Using take-home pay as income gives the clearest picture of what you keep from money you actually control.\n\nBudgeters tracking progress, people pursuing financial independence, and anyone comparing months to spot lifestyle creep use this to stay accountable. The savings rate matters because it drives two things at once: the more you save, the faster your nest egg grows and the less income you need to replace in retirement. Raising your rate even a few points, by trimming spending or directing raises to savings instead of lifestyle, compounds into a dramatically earlier finish line over the years.",
    example: {
      inputs: { monthlyIncome: "5000", monthlySavings: "1000" },
      explanation:
        "Saving $1,000 out of $5,000 in monthly take-home pay gives a savings rate of $1,000 ÷ $5,000 × 100 = 20%. That means one-fifth of every paycheck goes toward the future — a solid rate that comfortably clears the commonly cited 15 to 20 percent guideline.",
    },
    faqs: [
      {
        question: "Should I use gross or take-home income?",
        answer:
          "Both are valid, but they answer slightly different questions. Take-home pay measures how well you manage the money you actually receive and is the most practical basis for most people. Gross income produces a lower rate but is useful for comparing against benchmarks that assume pre-tax figures, and it naturally captures pre-tax retirement contributions. Pick one basis and use it consistently so your rate stays comparable from month to month and year to year.",
      },
      {
        question: "What counts as savings?",
        answer:
          "Include everything you set aside for the future rather than spend now: deposits to savings and emergency funds, contributions to retirement accounts like a 401(k) or IRA, brokerage investments, and extra principal payments on debt beyond the minimum. Whether to count an employer match is your choice — including it shows total wealth building, while excluding it isolates your own effort. Regular bill payments and everyday spending are not savings and stay out of the numerator.",
      },
      {
        question: "What is a good savings rate?",
        answer:
          "A common guideline suggests saving at least 15 to 20 percent of income for a comfortable traditional retirement, including any employer match. Higher is better and accelerates every financial goal. People pursuing early retirement often push rates to 40, 50, or even higher percent by keeping expenses low. There is no universal ideal — the right rate depends on your income, goals, and timeline — but consistently saving something and raising the rate over time is what matters most.",
      },
      {
        question: "Why is savings rate more useful than dollars saved?",
        answer:
          "Dollars saved ignore how much you earn, so they cannot tell you whether you are living within your means. Saving $500 a month is impressive on a $2,000 income and modest on a $20,000 one. The savings rate captures the relationship between earning and spending in one figure, making it comparable across incomes and over time. It also directly reflects the two levers of financial independence: spending less and saving the difference.",
      },
      {
        question: "How can I raise my savings rate?",
        answer:
          "Attack it from both sides — earn more or spend less, then bank the gap. The most reliable move is to automate savings so a fixed percentage transfers on payday before you can spend it. Direct future raises and bonuses to savings instead of upgrading your lifestyle, review recurring subscriptions and large fixed costs like housing and transport, and trim discretionary spending. Small, sustained increases in the rate compound into major long-term gains.",
      },
    ],
    relatedCalculators: ["budget-calculator", "hourly-to-salary-calculator", "subscription-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "hourly-to-salary",
    slug: "hourly-to-salary-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Hourly to Salary Calculator",
    shortDescription:
      "Convert an hourly wage into annual and monthly salary from your hours per week and weeks worked per year.",
    seoTitle: "Hourly to Salary Calculator — Annual & Monthly Pay from Wage",
    metaDescription:
      "Convert an hourly wage to annual and monthly salary using your weekly hours and weeks per year. Free hourly to salary calculator for job comparisons.",
    primaryKeyword: "hourly to salary calculator",
    secondaryKeywords: [
      "hourly wage to annual salary",
      "hourly to yearly calculator",
      "convert hourly to salary",
      "annual salary from hourly rate",
    ],
    fields: [
      {
        id: "hourlyRate",
        label: "Hourly Rate ($)",
        type: "number",
        placeholder: "e.g. 25",
        unit: "$",
        required: true,
      },
      {
        id: "hoursPerWeek",
        label: "Hours per Week",
        type: "number",
        placeholder: "e.g. 40",
        defaultValue: 40,
        required: true,
      },
      {
        id: "weeksPerYear",
        label: "Weeks Worked per Year",
        type: "number",
        placeholder: "e.g. 52",
        defaultValue: 52,
        required: true,
        helpText: "Use 52 for paid time off, or fewer weeks if your time off is unpaid.",
      },
    ],
    results: [
      { id: "annualSalary", label: "Annual Salary", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "monthlySalary", label: "Monthly Salary", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Annual Salary = Hourly Rate × Hours per Week × Weeks per Year; Monthly Salary = Annual Salary ÷ 12",
    formulaExplanation:
      "Pay accumulates hour by hour, so multiplying the hourly rate by the hours worked each week gives weekly earnings, and multiplying that by the number of paid weeks in the year extends it to an annual figure. Dividing the annual salary by twelve spreads it into equal monthly amounts, matching how salaried pay and household budgets are usually organized. The chain converts a per-hour rate into the yearly and monthly numbers used in job offers and budgeting.",
    formulaSource: "Standard payroll calculation",
    explanation:
      "An hourly to salary calculator converts a per-hour wage into the annual and monthly figures that job listings, budgets, and loan applications usually expect. Hourly and salaried pay describe the same earnings in different languages, and translating between them is essential when you compare an hourly offer to a salaried one, estimate yearly income, or plan a monthly budget around variable hours. This tool bridges the two in a single step.\n\nThe calculation multiplies the hourly rate by the hours worked each week and then by the number of weeks worked in the year to reach gross annual pay, then divides by twelve for the monthly equivalent. The weeks figure is the key adjustment: enter 52 if you receive paid time off, or fewer weeks if vacation and holidays are unpaid, since unpaid time off lowers the true annual total.\n\nJob seekers weighing offers, hourly workers estimating yearly income, and anyone building a budget from a wage use this to see the full picture. Keep in mind the result is gross pay before taxes, insurance, and retirement deductions, so take-home pay will be meaningfully lower. Overtime, bonuses, and irregular schedules also shift the real total, so treat the figure as a clean baseline conversion that you refine with your own deductions and extra hours.",
    example: {
      inputs: { hourlyRate: "25", hoursPerWeek: "40", weeksPerYear: "52" },
      explanation:
        "At $25 an hour, 40 hours a week, 52 weeks a year, annual salary is $25 × 40 × 52 = $52,000. Divided by 12, that is about $4,333.33 per month in gross pay before taxes and deductions.",
    },
    faqs: [
      {
        question: "Why does the weeks-per-year figure matter?",
        answer:
          "It determines whether your time off is paid. Using 52 weeks assumes you are paid for the entire year, including vacation and holidays, which is typical of salaried roles and hourly jobs with paid leave. If your time off is unpaid, you actually work fewer weeks — say 48 or 50 — so entering that lower number gives a truer annual figure. Getting this input right is the main difference between a rough and an accurate conversion.",
      },
      {
        question: "Is the result before or after taxes?",
        answer:
          "The result is gross pay — your earnings before any deductions. Actual take-home pay is lower after federal, state, and local income taxes, Social Security and Medicare, health insurance premiums, and retirement contributions are withheld. Depending on your bracket and benefits, net pay commonly runs 20 to 35 percent below gross. Use this figure to compare offers and estimate income, then apply your own tax and deduction estimates to project the amount that actually reaches your bank account.",
      },
      {
        question: "How do I account for overtime?",
        answer:
          "This calculator assumes a consistent hourly rate for all hours entered. If you regularly work overtime paid at a premium, such as time-and-a-half beyond 40 hours, the simple multiplication understates your income. To approximate it, you can raise the hours or blend an average effective rate that reflects the overtime premium. For precise figures, calculate regular and overtime hours separately at their respective rates and add the two annual totals together.",
      },
      {
        question: "How do I convert a salary back to an hourly rate?",
        answer:
          "Reverse the math: divide the annual salary by the number of weeks worked, then by the hours per week. For example, $52,000 across 52 weeks is $1,000 a week, and divided by 40 hours gives $25 an hour. This reverse conversion is useful for judging whether a salaried role's real hourly value holds up once you account for long weeks, since a high salary spread over many hours can pay less per hour than it appears.",
      },
      {
        question: "Should I compare offers on salary or total compensation?",
        answer:
          "Salary is only part of the picture. When comparing a job offer, weigh total compensation: base pay plus health insurance, retirement matching, bonuses, paid time off, and other benefits, minus costs like commuting. An hourly role with no benefits may need a higher rate to match a salaried job that includes paid leave and insurance. Use this calculator to line up the base figures, then adjust for benefits to compare offers fairly.",
      },
    ],
    relatedCalculators: ["savings-rate-calculator", "budget-calculator", "commute-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "grocery-budget",
    slug: "grocery-budget-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Grocery Budget Calculator",
    shortDescription:
      "Estimate your weekly and monthly grocery budget from household size and a per-person weekly spend.",
    seoTitle: "Grocery Budget Calculator — Weekly & Monthly Food Spending",
    metaDescription:
      "Estimate your weekly and monthly grocery budget from household size and spend per person. Free grocery budget calculator for meal and household planning.",
    primaryKeyword: "grocery budget calculator",
    secondaryKeywords: [
      "monthly grocery budget calculator",
      "food budget calculator",
      "grocery spending calculator",
      "household food budget",
    ],
    fields: [
      {
        id: "people",
        label: "Number of People",
        type: "number",
        placeholder: "e.g. 4",
        required: true,
        helpText: "Everyone the household regularly shops and cooks for.",
      },
      {
        id: "weeklyPerPerson",
        label: "Weekly Spend per Person ($)",
        type: "number",
        placeholder: "e.g. 75",
        unit: "$",
        defaultValue: 75,
        required: true,
        helpText: "A moderate US estimate is roughly $60–$90 per person per week.",
      },
    ],
    results: [
      { id: "weeklyBudget", label: "Weekly Grocery Budget", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "monthlyBudget", label: "Monthly Grocery Budget", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Weekly Budget = People × Weekly Spend per Person; Monthly Budget = Weekly Budget × 4.345",
    formulaExplanation:
      "Multiplying the number of people by the weekly spend per person scales a single person's food cost up to the whole household's weekly total. Converting weekly to monthly uses 4.345 rather than 4, because a month averages about 30.4 days — roughly 4.345 seven-day weeks — so the larger factor captures the extra days that a flat multiply-by-four would drop. The result is a monthly figure that lines up with how bills and budgets are actually tracked.",
    formulaSource: "Standard budgeting calculation",
    explanation:
      "A grocery budget calculator turns a per-person weekly food estimate into the household weekly and monthly totals you need to plan around. Groceries are one of the largest flexible expenses in most budgets, and because the money leaves in many small trips, the monthly total is easy to lose track of. Starting from a realistic per-person figure and scaling it to the household gives you a target to shop against and a line item for your budget.\n\nThe method multiplies household size by the weekly spend per person for the weekly budget, then converts to monthly using a factor of 4.345 — the true average number of weeks in a month — rather than a rough four, so the monthly figure captures every day of a typical 30.4-day month. Choosing an honest per-person figure is the key input; a moderate US estimate runs roughly $60 to $90 per person each week, varying with diet, location, and shopping habits.\n\nFamilies planning a monthly budget, roommates splitting food costs, and anyone reining in overspending use this to set and track a grocery target. The estimate assumes cooking at home; frequent restaurant meals and delivery are separate spending that this figure does not cover. Treat the result as a planning baseline, then refine the per-person amount as you compare it against a few weeks of actual receipts to match your household's real habits.",
    example: {
      inputs: { people: "4", weeklyPerPerson: "75" },
      explanation:
        "A family of 4 spending $75 per person weekly has a $300 weekly grocery budget (4 × $75). Multiplying by 4.345 gives a monthly budget of about $1,303.50 — noticeably more than the $1,200 a simple times-four estimate would suggest.",
    },
    faqs: [
      {
        question: "How much should I budget per person?",
        answer:
          "A moderate United States estimate runs roughly $60 to $90 per person per week for groceries, though it varies widely. Thrifty shoppers cooking simple meals spend less, while those buying organic, specialty, or convenience foods spend more. Children and light eaters cost less than active adults. The USDA publishes monthly food plans at thrifty, low, moderate, and liberal levels that make useful references. Start with a figure that matches your habits, then adjust against your actual receipts.",
      },
      {
        question: "Why multiply weekly by 4.345 instead of 4?",
        answer:
          "Because a month is longer than four weeks. The average month has about 30.4 days, which is roughly 4.345 seven-day weeks, not exactly four. Using four would undercount by nearly a week and a half of groceries over a year, producing a monthly budget that falls short in most months. The 4.345 factor spreads the annual total of 52 weekly shops evenly across twelve months, giving a monthly figure that actually holds up.",
      },
      {
        question: "Does this include dining out and delivery?",
        answer:
          "No. This calculator estimates grocery spending for food prepared and eaten at home. Restaurant meals, takeout, coffee shops, and delivery services are a separate category that many households track apart from groceries. If you want a total food budget, calculate groceries here and add your dining-out spending as its own line. Blending the two into one per-person figure is possible, but keeping them separate makes it easier to see where your food money actually goes.",
      },
      {
        question: "How can I lower my grocery spending?",
        answer:
          "Plan meals around a weekly list and stick to it to curb impulse buys, which are a major source of overspending. Cook from scratch instead of buying pre-prepared items, choose store brands, buy staples and freezer-friendly items in bulk when the unit price is genuinely lower, and reduce food waste by using what you have before it spoils. Shopping with a full stomach and comparing unit prices at the shelf also keeps the weekly total in check.",
      },
      {
        question: "Should the per-person figure be the same for everyone?",
        answer:
          "Not necessarily. A single per-person average is a convenient simplification, but real households vary — teenagers and active adults often eat far more than young children or lighter eaters. For a more precise budget, estimate each person's weekly cost separately and add them, rather than applying one flat figure to everyone. For quick planning, a household average works well; refine it if your household's mix of ages and appetites is uneven.",
      },
    ],
    relatedCalculators: ["budget-calculator", "price-per-unit-comparison-calculator", "savings-rate-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "screen-time",
    slug: "screen-time-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Screen Time Calculator",
    shortDescription:
      "See how your daily screen time adds up across a week, a year, and in full 24-hour days of your life.",
    seoTitle: "Screen Time Calculator — Weekly & Yearly Hours on Screens",
    metaDescription:
      "Turn your daily screen time into weekly hours, yearly hours, and full days per year. Free screen time calculator to see the real scale of your habit.",
    primaryKeyword: "screen time calculator",
    secondaryKeywords: [
      "daily screen time calculator",
      "yearly screen time",
      "phone usage calculator",
      "how much screen time per year",
    ],
    fields: [
      {
        id: "hoursPerDay",
        label: "Screen Time per Day (hours)",
        type: "number",
        placeholder: "e.g. 4",
        required: true,
        helpText: "Check your phone's Screen Time or Digital Wellbeing report for a real daily average.",
      },
    ],
    results: [
      { id: "hoursPerYear", label: "Hours per Year", format: "number", decimals: 0, unit: "hrs", isPrimary: true },
      { id: "hoursPerWeek", label: "Hours per Week", format: "number", decimals: 1, unit: "hrs", isPrimary: false },
      { id: "daysPerYear", label: "Full Days per Year", format: "number", decimals: 1, unit: "days", isPrimary: false },
    ],
    formula:
      "Hours per Week = Hours per Day × 7; Hours per Year = Hours per Day × 365; Full Days per Year = Hours per Year ÷ 24",
    formulaExplanation:
      "Multiplying daily screen hours by seven gives the weekly total, and by 365 the yearly total, since the habit repeats every day. Dividing the yearly hours by 24 reframes them as whole 24-hour days — a striking unit that shows how much round-the-clock time the habit consumes over a year. Expressing one daily number at three scales exposes how a routine that feels minor by the hour accumulates into weeks of continuous time annually.",
    formulaSource: "Standard time calculation",
    explanation:
      "A screen time calculator scales a single daily habit up to the weekly, yearly, and full-day totals that reveal its true size. A few hours on your phone or in front of a screen feels unremarkable in the moment, but repeated every day it compounds into an amount of time that surprises most people. Converting daily hours into a year's worth — and into whole 24-hour days — makes an abstract habit concrete.\n\nThe math is simple repetition: multiply daily hours by seven for the week and by 365 for the year, then divide the yearly hours by 24 to express them as complete days spent looking at a screen. That final unit is the point. Framing screen time as, say, two months of round-the-clock days per year lands far harder than a daily average, because it shows the cumulative cost in a scale we intuitively grasp.\n\nPeople auditing their phone habits, parents gauging a child's usage, and anyone curious how much of life screens absorb use this for perspective. Most smartphones report a precise daily average in their Screen Time or Digital Wellbeing settings, which makes an honest input easy to find. The goal is not judgment but awareness: seeing the yearly total helps you decide whether the time matches your intentions, and whether reclaiming even an hour a day is worth it.",
    example: {
      inputs: { hoursPerDay: "4" },
      explanation:
        "Four hours of screen time a day is 28 hours a week and 4 × 365 = 1,460 hours a year. Dividing by 24 shows that equals about 60.8 full 24-hour days annually — roughly two months of continuous screen use every year.",
    },
    faqs: [
      {
        question: "Where can I find my real daily screen time?",
        answer:
          "Most smartphones track it automatically. On iPhone, open Settings and tap Screen Time to see a daily and weekly average with per-app breakdowns. On Android, look under Digital Wellbeing and parental controls. These reports give a precise figure that is far more accurate than guessing, which people tend to underestimate. For total screen exposure, add time spent on computers, tablets, and television, since phone reports capture only one of several screens.",
      },
      {
        question: "Should I count all screens or just my phone?",
        answer:
          "It depends on what you want to measure. For phone habits alone, enter just your phone's reported average. For total screen exposure, add the hours you spend on work and personal computers, tablets, gaming, and television. These add up quickly and paint a fuller picture of daily screen use. Deciding which screens to include should match your goal — auditing phone use specifically, or understanding how much of your waking life happens in front of any display.",
      },
      {
        question: "Why show the total as full days per year?",
        answer:
          "Because a large hourly total is hard to feel, while whole days are intuitive. Saying you spend 1,460 hours a year on a screen is abstract, but translating that into about 61 continuous 24-hour days makes the scale visceral. This framing is deliberately dramatic to provide perspective, not to shame. It helps you weigh whether the time invested matches the value you get, and how much you could reclaim by trimming the daily average.",
      },
      {
        question: "Is all screen time bad?",
        answer:
          "No. Screens power work, learning, staying in touch with people, creativity, and genuine relaxation, so the raw number matters less than what the time is spent on and how it makes you feel. An hour video-calling family differs sharply from an hour of aimless scrolling. Use the calculator for awareness rather than a verdict: it quantifies the habit so you can judge which portions serve you and which you might want to cut back.",
      },
      {
        question: "How much could I gain by cutting back an hour a day?",
        answer:
          "A surprising amount. Reducing screen time by one hour a day frees 365 hours a year, which is more than 15 full 24-hour days, or over 45 eight-hour workdays of waking time. Rerun the calculator with one less hour to see the difference in yearly totals. That reclaimed time is enough to learn a skill, exercise regularly, read dozens of books, or simply rest — a concrete payoff for a modest daily change.",
      },
    ],
    relatedCalculators: ["subscription-cost-calculator", "commute-cost-calculator", "coffee-cost-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "water-usage-cost",
    slug: "water-usage-cost-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Water Usage Cost Calculator",
    shortDescription:
      "Estimate the daily and monthly cost of your water use from gallons per day and your price per thousand gallons.",
    seoTitle: "Water Usage Cost Calculator — Daily & Monthly Water Bill",
    metaDescription:
      "Estimate your daily and monthly water cost from gallons used per day and your rate per 1,000 gallons. Free water usage cost calculator for household budgeting.",
    primaryKeyword: "water usage cost calculator",
    secondaryKeywords: [
      "water bill calculator",
      "cost of water per gallon",
      "monthly water cost calculator",
      "household water usage cost",
    ],
    fields: [
      {
        id: "gallonsPerDay",
        label: "Water Used per Day (gallons)",
        type: "number",
        placeholder: "e.g. 150",
        required: true,
        helpText: "A typical US person uses roughly 80–100 gallons per day.",
      },
      {
        id: "pricePer1000Gallons",
        label: "Price per 1,000 Gallons ($)",
        type: "number",
        placeholder: "e.g. 5.00",
        unit: "$",
        defaultValue: 5,
        required: true,
        helpText: "Check your water bill; rates commonly range from about $2 to $12 per 1,000 gallons.",
      },
    ],
    results: [
      { id: "monthlyCost", label: "Monthly Water Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "dailyCost", label: "Daily Water Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: false },
    ],
    formula:
      "Daily Cost = Gallons per Day ÷ 1,000 × Price per 1,000 Gallons; Monthly Cost = Daily Cost × 30",
    formulaExplanation:
      "Water is billed by volume, typically per thousand gallons, so dividing daily gallons by one thousand converts your usage into the units your utility charges for, and multiplying by the price per thousand gives the daily cost. Multiplying that daily figure by thirty approximates a month of steady use. The steps translate a raw gallon count into the dollars a bill reports, matching how usage is metered and priced rather than counting individual gallons.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A water usage cost calculator estimates what your household water consumption costs each day and month by pairing the gallons you use with your utility's price per thousand gallons. Water bills often bundle usage with sewer charges, service fees, and taxes, which obscures how much the water itself costs. Isolating the usage cost helps you understand your bill, spot excessive consumption, and judge whether a conservation change is worth the effort.\n\nThe calculation reflects how utilities meter and price water. Dividing daily gallons by one thousand converts usage into the billing unit most providers use, multiplying by the rate per thousand gallons gives the daily cost, and multiplying by thirty approximates a month. A typical person in the United States uses roughly 80 to 100 gallons a day for drinking, bathing, laundry, dishes, and toilets, so a household figure multiplies quickly.\n\nHomeowners auditing a high bill, renters on metered water, and anyone weighing efficient fixtures or leak repairs use this to size the opportunity. Keep in mind the estimate covers the water commodity only; your actual bill adds sewer fees often tied to water use, fixed service charges, and taxes, so the total is higher. Use the result to understand and compare usage, and to see how cutting gallons — through low-flow fixtures, shorter showers, or fixing leaks — translates into real monthly savings.",
    example: {
      inputs: { gallonsPerDay: "150", pricePer1000Gallons: "5" },
      explanation:
        "Using 150 gallons a day at $5.00 per 1,000 gallons costs 150 ÷ 1,000 × $5.00 = $0.75 per day. Over 30 days that is about $22.50 a month for the water itself, before sewer charges, service fees, and taxes are added.",
    },
    faqs: [
      {
        question: "How many gallons does a household use per day?",
        answer:
          "In the United States, each person uses roughly 80 to 100 gallons a day on average across showers, toilets, laundry, dishes, and drinking, so a family of four often uses 300 to 400 gallons daily. Usage varies with habits, fixture efficiency, and outdoor watering, which can add a great deal in summer. Your water bill usually reports total gallons or cubic feet used over the billing period, which you can divide by the days to find your real daily figure.",
      },
      {
        question: "What rate should I enter?",
        answer:
          "Use the price per thousand gallons from your water bill, though you may need to look closely, since utilities express rates in different units. Some charge per thousand gallons, others per hundred cubic feet — a hundred cubic feet equals about 748 gallons — so convert if needed. Rates commonly range from around $2 to $12 per thousand gallons depending on your provider and region. Many utilities also use tiered pricing that charges more as usage rises, so pick the tier matching your consumption.",
      },
      {
        question: "Why is my actual water bill higher than this estimate?",
        answer:
          "This calculator estimates the cost of the water commodity alone. Your real bill typically adds several other charges: sewer or wastewater fees, which are often based on your water usage and can rival or exceed the water charge itself; fixed monthly service or infrastructure fees; stormwater charges; and taxes. These extras mean the total bill runs well above the usage-only figure, so treat this result as the consumption cost, not the full amount you pay.",
      },
      {
        question: "How much can I save by conserving water?",
        answer:
          "Savings scale directly with the gallons you cut, and often more once sewer charges tied to usage are included. Low-flow showerheads and toilets, shorter showers, running full loads of laundry and dishes, and fixing leaks each reduce daily gallons. A running toilet or dripping faucet can waste thousands of gallons a month unnoticed. Rerun the calculator with a lower daily figure to see the water savings, then remember sewer reductions may roughly double the real benefit.",
      },
      {
        question: "Does this include the cost of heating water?",
        answer:
          "No. This calculator covers only the cost of the water itself as billed by your water utility. Heating water for showers, dishwashing, and laundry consumes energy — electricity or gas — that appears on a separate utility bill and can cost as much as or more than the water. To capture the full expense of hot water use, estimate the energy cost separately with an electricity or gas calculator and add it to this water figure.",
      },
    ],
    relatedCalculators: ["electricity-bill-calculator", "grocery-budget-calculator", "budget-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
  {
    id: "pet-food-cost",
    slug: "pet-food-cost-calculator",
    category: "Everyday Life",
    categorySlug: "everyday",
    title: "Pet Food Cost Calculator",
    shortDescription:
      "Work out how long a bag of pet food lasts and what feeding your pet costs each month.",
    seoTitle: "Pet Food Cost Calculator — Monthly Cost & Days per Bag",
    metaDescription:
      "Calculate how many days a bag of pet food lasts and your monthly feeding cost from daily portion, bag size, and price. Free pet food cost calculator.",
    primaryKeyword: "pet food cost calculator",
    secondaryKeywords: [
      "dog food cost calculator",
      "cat food cost per month",
      "how long does a bag of dog food last",
      "monthly pet food cost",
    ],
    fields: [
      {
        id: "dailyFoodOunces",
        label: "Daily Food (ounces)",
        type: "number",
        placeholder: "e.g. 8",
        unit: "oz",
        required: true,
        helpText: "How much food your pet eats per day. Check the bag's feeding guide for their weight.",
      },
      {
        id: "bagSizePounds",
        label: "Bag Size (pounds)",
        type: "number",
        placeholder: "e.g. 30",
        unit: "lb",
        required: true,
      },
      {
        id: "bagCost",
        label: "Bag Cost ($)",
        type: "number",
        placeholder: "e.g. 45",
        unit: "$",
        required: true,
      },
    ],
    results: [
      { id: "monthlyCost", label: "Monthly Food Cost", format: "currency", currency: "USD", decimals: 2, isPrimary: true },
      { id: "daysPerBag", label: "Days per Bag", format: "number", decimals: 1, unit: "days", isPrimary: false },
    ],
    formula:
      "Days per Bag = (Bag Size in pounds × 16) ÷ Daily Ounces; Monthly Cost = Bag Cost ÷ Days per Bag × 30",
    formulaExplanation:
      "Converting the bag's weight to ounces — sixteen ounces to a pound — and dividing by the ounces your pet eats each day yields how many days one bag lasts. Dividing the bag's price by that lifespan gives a daily food cost, and multiplying by thirty scales it to a month. The chain moves from a bag's total food to its daily consumption to dollars per day and finally per month, matching how the expense actually recurs.",
    formulaSource: "Standard cost calculation",
    explanation:
      "A pet food cost calculator answers two practical questions every pet owner faces: how long a bag of food will last, and what feeding the animal costs each month. Food is usually the largest ongoing expense of pet ownership, yet because a bag is bought occasionally rather than on a fixed schedule, the true monthly cost is easy to overlook. Working it out helps you budget, compare brands fairly, and know when to reorder.\n\nThe calculation starts by converting the bag's weight into ounces, since feeding guides and daily portions are often measured that way, then divides by the daily amount your pet eats to find how many days the bag lasts. Dividing the bag price by that number of days gives a daily cost, and multiplying by thirty produces the monthly figure. Using an accurate daily portion — from the feeding guide for your pet's weight — is what makes the estimate reliable.\n\nNew pet owners planning a budget, anyone comparing a cheaper bag against a premium one, and multi-pet households tracking total costs use this to see the real number. Because premium foods often have higher nutrient density and smaller recommended portions, a pricier bag can sometimes cost less per month than a cheaper one that requires larger servings — a comparison this calculator makes easy by turning bag price and portion size into a single monthly cost.",
    example: {
      inputs: { dailyFoodOunces: "8", bagSizePounds: "30", bagCost: "45" },
      explanation:
        "A 30-pound bag holds 30 × 16 = 480 ounces. Feeding 8 ounces a day, it lasts 480 ÷ 8 = 60 days. At $45 a bag, that is $0.75 a day, or about $22.50 a month to feed your pet.",
    },
    faqs: [
      {
        question: "How do I find my pet's daily food amount?",
        answer:
          "Check the feeding guide printed on the food bag, which lists a recommended daily portion by the animal's weight, usually in cups or grams. Convert cups to ounces if needed — dry kibble is often roughly 4 ounces per cup, though it varies by formula. Your veterinarian can advise the right amount for your pet's age, activity, and body condition. Weighing portions with a kitchen scale gives the most accurate figure for this calculation.",
      },
      {
        question: "Why measure in ounces and pounds?",
        answer:
          "Pet food bags in the United States are sold by the pound, while daily portions are small enough that ounces are more natural, so the calculator bridges the two by converting pounds to ounces at sixteen ounces per pound. If your feeding guide uses grams or cups, convert to ounces first for consistency. Keeping the daily amount and the bag size in compatible units is essential — mismatched units would badly distort how long the bag appears to last.",
      },
      {
        question: "Can a more expensive food cost less per month?",
        answer:
          "Yes, sometimes. Premium foods are often more calorie- and nutrient-dense, so the feeding guide recommends smaller daily portions. A pricier bag eaten in smaller servings can outlast a cheaper bag fed in larger amounts, narrowing or even reversing the monthly cost difference. This calculator makes the comparison fair by combining bag price with portion size into a monthly figure — run it for each food using its own recommended serving to see which truly costs less to feed.",
      },
      {
        question: "Does this cover wet food and treats?",
        answer:
          "The calculator is designed for a single food measured by weight, which fits dry kibble well. If you feed wet food, canned portions and treats, the total cost is higher than this dry-food figure alone. You can estimate each component separately and add them, or focus this calculation on the staple dry food that makes up most of the diet. Treats, supplements, and dental chews are extra costs worth tracking on top of the base food.",
      },
      {
        question: "How does my pet's growth or weight change affect the cost?",
        answer:
          "Feeding amounts change over a pet's life, so the monthly cost is not fixed. Puppies and kittens eat proportionally more as they grow, large breeds cost more to feed than small ones, and a weight-management or senior diet may call for smaller portions. Recalculate whenever the daily portion changes — after a growth stage, a vet's feeding recommendation, or a food switch — to keep your budget accurate as your pet's needs evolve.",
      },
    ],
    relatedCalculators: ["grocery-budget-calculator", "cost-per-use-calculator", "budget-calculator"],
    status: "active",
    lastReviewed: "2026-08-30",
  },
];
