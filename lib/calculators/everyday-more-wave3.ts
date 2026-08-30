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
