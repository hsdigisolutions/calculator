import type { Category } from "./types";

/**
 * MVP categories. Order here drives homepage + nav order.
 * `icon` maps to a lucide-style icon name (see components/Icon.tsx).
 * `about` is the ~250-word hub write-up; `faqs` are category-level questions.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "math",
    name: "Math",
    icon: "Sigma",
    tagline: "Percentages, fractions, roots & more",
    description: "Everyday and advanced math made instant.",
    seoIntro:
      "Free online math calculators for percentages, fractions, ratios, averages, roots and more. Each tool shows the formula, a worked example and clear results so you understand the answer, not just see it.",
    about:
      "Math calculators handle the arithmetic and number work that people otherwise grind through by hand or bury in a spreadsheet — percentages, fractions, ratios, averages, square roots, and greatest-common-factor and least-common-multiple problems. They turn a multi-step calculation into a single reliable answer, which is why they are among the most searched tools on the internet. Students use them to check homework and understand method; shoppers work out discounts and price-per-unit comparisons; tradespeople scale recipes and mixes; and analysts sanity-check figures before they reach a report. What separates a trustworthy math tool from a black box is transparency, and every calculator here shows the exact formula it applies alongside a worked example, so you can follow the logic rather than take the result on faith. The arithmetic itself follows standard mathematical conventions — the usual order of operations, proper fraction reduction by the greatest common divisor, and the conventional 4.0 scale where grades are involved. That standardisation is also the main limitation to keep in mind: a specific classroom, exam board or accounting policy may define a rounding rule or a grade boundary differently from the default, so always check the convention that applies to your situation. For pure calculation, though, these tools are exact to the decimals shown, run entirely in your browser, and never round silently behind the scenes.",
    faqs: [
      {
        question: "Are online math calculators accurate?",
        answer:
          "Yes. These calculators implement standard arithmetic directly in your browser and are exact to the number of decimals displayed. Because the computation happens client-side with no rounding hidden between steps, the result matches what you would get working carefully by hand. The one thing to watch is convention — order of operations, rounding rules and grade scales are applied in their standard form, which occasionally differs from a specific institution's policy.",
      },
      {
        question: "Do these calculators follow order of operations?",
        answer:
          "They apply standard mathematical conventions, including the usual order of operations, within each tool's defined inputs. Rather than parsing a freeform expression where precedence can be ambiguous, most of these calculators ask for specific values — a percentage and a base, two fractions and an operation — which removes any doubt about what is computed first. That structure makes the result unambiguous and reproducible every time.",
      },
      {
        question: "Can I use these for schoolwork?",
        answer:
          "Absolutely, and the worked examples are designed to help you learn the method, not just copy an answer. Each page shows the formula and a step-by-step example so you can see how the result is reached and reproduce it in an exam where calculators are not allowed. Do confirm your school's rounding and grading conventions, since these tools use the widely accepted standards that occasionally differ from a particular syllabus.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "Landmark",
    tagline: "Mortgages, loans, interest & ROI",
    description: "Plan payments, growth and returns with confidence.",
    seoIntro:
      "Free finance calculators for mortgages, loans, compound interest, savings, ROI and profit margins. Built on standard financial formulas with transparent methodology and clear breakdowns.",
    about:
      "Finance calculators turn the core equations of borrowing, saving and investing into answers you can act on — a monthly mortgage payment, the future value of a savings plan, the true return on an investment, or the margin left after costs. These are consequential numbers, and small changes in a rate or term can move them by thousands of dollars over time, which is exactly why running the figures before you commit is worth the two minutes it takes. Homebuyers use them to set a realistic price ceiling and compare loan offers; savers project how contributions compound; business owners price products and find their break-even point; and investors compare opportunities on a like-for-like basis. Every tool here is built on the standard financial formulas — fixed-rate amortization for loans, the future-value-of-an-annuity for compounding, and conventional margin and return definitions — and each shows its formula, a worked example, and a full breakdown rather than a single opaque figure. Where a formula reflects guidance from an authority such as the Consumer Financial Protection Bureau or the SEC's Investor.gov, that source is cited on the page. The important limitation is that these are illustrative estimates: real lenders add fees, taxes and insurance that a payment formula excludes, and investment returns are never the steady rate a projection assumes. Use the results to compare options and understand the mechanics, then confirm the specifics with your lender or a qualified adviser before signing.",
    faqs: [
      {
        question: "Are online financial calculators accurate?",
        answer:
          "The mathematics is exact — a mortgage or loan tool reproduces an amortization schedule to the cent, and a compound-interest projection applies the future-value formula precisely. Where they become estimates is in the real world: actual borrowing costs include fees, taxes and insurance that a core payment formula leaves out, and investment returns vary year to year rather than holding at one assumed rate. Treat the figures as accurate models to compare options, then confirm exact terms with your provider.",
      },
      {
        question: "Do these calculators account for taxes and fees?",
        answer:
          "Generally no, and that is by design. A mortgage calculator, for example, returns principal and interest only, because property taxes, homeowners insurance, mortgage insurance and HOA dues vary widely by location and lender. Isolating the core payment lets you compare loans on equal footing. Add the escrow items separately to estimate your true monthly cost, and check each lender's fee schedule, since closing costs and points materially affect the real price of borrowing.",
      },
      {
        question: "Do I need to sign up to use these?",
        answer:
          "No. Every calculator runs entirely in your browser with no account, no email capture and no storage of the figures you enter. Nothing you type is sent to a server or saved, which matters when you are working with income, savings balances or loan amounts. You can use any tool as many times as you like, free, and close the tab knowing your numbers never left your device.",
      },
    ],
  },
  {
    slug: "health",
    name: "Health",
    icon: "HeartPulse",
    tagline: "BMI, BMR, calories & body metrics",
    description: "Understand your body with trusted formulas.",
    seoIntro:
      "Free health and fitness calculators for BMI, BMR, TDEE, calories, body fat and more, using formulas published by health authorities. These tools are for general information and are not medical advice.",
    about:
      "Health calculators translate a few simple measurements — weight, height, age, sex and activity — into metrics that guide everyday decisions about fitness and nutrition, from Body Mass Index and Basal Metabolic Rate to daily calorie targets, body-fat estimates and macronutrient splits. Their value is that they replace guesswork with an established formula, giving you a consistent baseline to plan against and to track over time. People use them to set a starting calorie goal for weight loss or gain, to understand roughly how many calories they burn at rest, to gauge whether their weight sits in a healthy range, and to structure protein and macro targets around training. Accuracy here rests on using the right equation, and these tools use the ones health authorities and researchers rely on: the World Health Organization's BMI categories, the Mifflin-St Jeor equation for metabolic rate, and the U.S. Navy method for body fat, each cited on its page. The essential caveat is that every one of these results is a population-level estimate, not a diagnosis. Formulas are built from averages, so an individual with unusual muscle mass, body composition or a medical condition can fall outside what the equation predicts. These calculators are for general information and education; they do not replace testing such as DEXA scans or the judgement of a doctor or registered dietitian. Use them to inform your questions, not to answer medical ones on their own.",
    faqs: [
      {
        question: "Are these health calculators accurate?",
        answer:
          "They use the equations that clinicians and researchers trust — WHO thresholds for BMI, Mifflin-St Jeor for metabolic rate, the U.S. Navy method for body fat — so at the population level they correlate well with the outcomes they estimate. For any single person, results are approximations, because the formulas are built from averages and cannot see your exact body composition, genetics or health history. They are an excellent starting point and a good way to track change, not a precise personal measurement.",
      },
      {
        question: "Do these calculators replace medical advice?",
        answer:
          "No, and they are not intended to. Every health tool here provides general information based on published formulas, which is different from a clinical assessment that accounts for your full history, medications and lab results. Use the numbers to frame questions and track trends, then bring them to a doctor or registered dietitian for interpretation. That matters most before making significant changes to diet, exercise or weight, where individual circumstances genuinely change the right advice.",
      },
      {
        question: "Which formulas do these calculators use?",
        answer:
          "BMI follows the World Health Organization's adult categories; BMR and the calorie and TDEE tools use the Mifflin-St Jeor equation, widely regarded as the most accurate prediction equation for resting metabolism; and body fat uses the U.S. Navy circumference method. Each calculator names and links its source so you can read the original research. Choosing well-validated equations is the single biggest factor in getting a trustworthy estimate, which is why these are the standards we implement.",
      },
    ],
  },
  {
    slug: "date-time",
    name: "Date & Time",
    icon: "CalendarClock",
    tagline: "Age, durations & business days",
    description: "Count days, durations and dates precisely.",
    seoIntro:
      "Free date and time calculators for age, date differences, business days, durations and overtime. Fast, accurate and easy to read on any device.",
    about:
      "Date and time calculators do the deceptively fiddly work of counting across a calendar that was never designed to be tidy — months of unequal length, leap years every four years, and clocks that roll past midnight. They turn two dates or two times into an exact figure: a precise age in years, months and days, the number of working days before a deadline, the gap between two dates, or the paid hours in a shift that runs overnight. The reason people reach for them is that hand-counting across month and year boundaries is where mistakes happen, and those mistakes have consequences when a legal notice period, a project deadline, an eligibility date or a payroll total depends on the answer. Parents track a newborn in weeks, HR teams confirm tenure and eligibility, lawyers compute notice windows, and freelancers total billable time. Accuracy comes from working with real calendar arithmetic rather than shortcuts: day counts are computed from the actual calendar so every leap day is included automatically, weekend logic excludes Saturdays and Sundays, and overnight durations correctly add the hours past midnight. The limitation to remember is that public holidays are regional and are not subtracted from business-day counts, so you should deduct any holidays that apply to your location. For the raw counting, though, these tools are exact, and they save you from the classic off-by-one errors that plague manual date math.",
    faqs: [
      {
        question: "Do these calculators account for leap years?",
        answer:
          "Yes. Every date tool works from a continuous calendar day count, which means each 29 February inside your range is included automatically with no separate adjustment to remember. This is why the exact day count between two dates can be slightly higher than years multiplied by 365 — the leap days are really there. A span from early 2024 to early 2025, for instance, correctly counts the extra day from 2024.",
      },
      {
        question: "Do business-day calculations exclude public holidays?",
        answer:
          "No — the business-days tool excludes only weekends, treating Saturday and Sunday as non-working. Public holidays are not subtracted because they differ by country, state and even employer, and building in one region's calendar would give wrong answers everywhere else. To get a precise working-day total for your location, count the result from this tool and then subtract any public holidays that fall on a weekday within your range.",
      },
      {
        question: "Can these tools handle times that cross midnight?",
        answer:
          "Yes. The time-duration and overtime tools detect when an end time falls earlier than a start time and add 24 hours, correctly measuring an overnight shift such as 22:00 to 06:00 as eight hours. This makes them reliable for shift work and timesheets, where spans routinely cross midnight. Enter times in 24-hour format so there is no ambiguity between morning and evening, and the calculation handles the day boundary for you.",
      },
    ],
  },
  {
    slug: "converters",
    name: "Converters",
    icon: "ArrowLeftRight",
    tagline: "Length, weight, temperature & data",
    description: "Convert between units in an instant.",
    seoIntro:
      "Free unit converters for length, weight, temperature, speed and data storage. Precise conversions with support for both metric and imperial units.",
    about:
      "Unit converters translate a quantity from one unit to another — centimetres to inches, kilograms to pounds, Celsius to Fahrenheit, kilometres per hour to miles per hour, megabytes to gigabytes — instantly and without the arithmetic slips that come from remembering conversion factors wrong. They matter because the world runs on two measurement systems at once: recipes, travel, engineering specs, shipping labels and international collaboration constantly force a switch between metric and imperial, and a misplaced factor can turn a small error into an expensive one. Cooks scale ingredients, travellers read foreign speed limits and temperatures, students check physics homework, and developers size files and bandwidth. The accuracy of a converter depends entirely on using the internationally defined ratios, and these tools do: one inch is exactly 2.54 centimetres, one pound is 0.45359237 kilograms, and each is fixed by standards bodies rather than approximated. Every conversion here normalises your value to a base SI unit first and then scales to the target, which keeps results precise to the decimals shown and consistent in both directions. Temperature is handled with its proper offset formulas rather than a single ratio, since the scales do not share a zero point. One convention worth noting is data storage, where these tools use binary units — one kilobyte as 1,024 bytes — which is how operating systems report file sizes, and why a drive marketed in decimal terabytes shows less usable space than its label suggests.",
    faqs: [
      {
        question: "Are these unit conversions exact?",
        answer:
          "Yes. Each converter uses the internationally defined factors — an inch is exactly 2.54 centimetres, a pound is exactly 0.45359237 kilograms — and normalises to a base SI unit before scaling to your target, so results are precise to the decimals displayed and identical in both directions. These are the same ratios published by standards bodies such as NIST, not rounded shortcuts, which is what makes the output reliable enough for engineering and scientific use.",
      },
      {
        question: "How do I convert Celsius to Fahrenheit?",
        answer:
          "Multiply the Celsius value by 9/5 (that is, 1.8) and add 32, so 20°C becomes 68°F. The temperature converter does this automatically and handles Kelvin too. Temperature needs this offset formula rather than a simple ratio because the Celsius and Fahrenheit scales do not share a zero point — they cross at −40°, where both scales read the same number, which is a useful sanity check for any conversion you do by hand.",
      },
      {
        question: "Why does my hard drive show less space than advertised?",
        answer:
          "Because manufacturers and operating systems count differently. Drive makers use decimal units, where one terabyte is 1,000,000,000,000 bytes, while operating systems use binary units, where a terabyte is 1,024⁴ bytes — about 10% larger. The advertised capacity is technically correct in decimal terms, but your system measures it in binary and reports a smaller figure. The data-storage converter here uses binary units to match what your computer displays.",
      },
    ],
  },
  {
    slug: "business",
    name: "Business",
    icon: "Briefcase",
    tagline: "Rates, revenue & cash flow",
    description: "Price your work and plan your numbers.",
    seoIntro:
      "Free business calculators for freelance rates, revenue and cash flow. Practical tools to help you price your work and understand the health of your business.",
    about:
      "Business calculators put the numbers behind running a company or a freelance practice within reach — the hourly rate you actually need to charge, the revenue and gross profit a sales plan produces, and the cash flowing in and out over a period. These are the figures that decide whether a business is sustainable, yet they are the ones owners most often estimate loosely or avoid, which is how underpricing and cash crunches take hold. Freelancers use a rate calculator to translate a target income into a defensible hourly or day rate after accounting for unbillable time, expenses and taxes; small-business owners project revenue and margin before committing to a pricing strategy; and anyone managing money watches cash flow to make sure obligations are covered as they fall due. The methods here are the standard ones from business finance — grossing income up for tax and overhead, revenue as units times price, cash flow as inflows minus outflows — and each tool shows the formula and a worked example so the logic is transparent rather than hidden. The important limitation is that these are planning tools, not accounting or tax advice: real tax rates, allowable expenses and payment timing vary by jurisdiction and situation, and the figures you get are only as good as the assumptions you feed in. Use them to price with confidence and to spot problems early, then confirm the specifics with an accountant.",
    faqs: [
      {
        question: "How do I know what to charge as a freelancer?",
        answer:
          "Start from the take-home income you need, then gross it up to cover the taxes, business expenses and unbillable hours a salaried employee never sees. Because you cannot bill every working hour — admin, sales and downtime eat into the week — your rate has to be higher than a simple salary-divided-by-2,080 figure. The freelance rate calculator does this arithmetic for you; be honest about how many hours you can realistically invoice, as that number drives the result.",
      },
      {
        question: "What is the difference between revenue and profit?",
        answer:
          "Revenue is the total money coming in from sales — units sold multiplied by price — before any costs. Profit is what remains after those costs are subtracted, so a business can post high revenue and still lose money if costs run higher. Gross profit subtracts the direct cost of the goods sold; net profit also subtracts operating expenses. Knowing which figure someone means matters, because a healthy-looking revenue number can hide a thin or negative margin.",
      },
      {
        question: "Is cash flow the same as profit?",
        answer:
          "No, and confusing the two sinks otherwise profitable businesses. Profit is an accounting measure that can include sales you have invoiced but not yet been paid for. Cash flow tracks money actually moving in and out, on the dates it moves. A company can be profitable on paper while running out of cash because customers pay late and bills come due first. Watching cash flow, not just profit, is what keeps a business solvent day to day.",
      },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    tagline: "Concrete, paint & tile estimates",
    description: "Estimate materials before you buy.",
    seoIntro:
      "Free construction and DIY calculators for concrete, paint and tile. Estimate the materials you need for your project and avoid over- or under-buying.",
    about:
      "Construction and DIY calculators estimate how much material a job needs — the cubic yards of concrete for a slab, the gallons of paint for a room, the number of tiles for a floor — from a handful of measurements. They matter because material estimation sits right at the intersection of cost and hassle: buy too little and the job stalls with a second trip to the supplier and a possible colour or batch mismatch; buy too much and money sits unused in the garage. Homeowners planning a weekend project, contractors bidding work, and tradespeople ordering supplies all use these tools to turn dimensions into a shopping list. The calculations apply the standard estimation methods — volume as length times width times thickness for concrete, coverage area divided by the rate per gallon for paint, total area divided by tile size for tiling — and each tool shows its working plus practical adjustments like coats and waste allowance. Because real sites are never perfectly regular, sensible estimates include a margin: paint tools round up to whole cans, tile tools add a waste percentage for cuts and breakage, and concrete estimates suggest ordering a little extra for spillage and uneven subgrade. The limitation to keep in mind is that these figures assume standard coverage rates and regular shapes; porous surfaces, complex layouts and unusual materials shift the numbers, so treat the result as a well-founded starting estimate and adjust for the specifics of your site.",
    faqs: [
      {
        question: "How much extra material should I order?",
        answer:
          "Adding a margin is standard practice. For paint, rounding up to whole cans usually leaves enough for touch-ups; for tile, add 10% waste for straight layouts and 15–20% for diagonal patterns or rooms with many cuts; for concrete, order about 5–10% extra to cover spillage and uneven ground. Running short means a return trip and a risk of colour or batch mismatch, so a small planned surplus almost always costs less than a shortfall.",
      },
      {
        question: "How accurate are these material estimates?",
        answer:
          "They are accurate for regular shapes and standard materials, because they apply the same volume and area formulas a professional estimator uses. Real-world variables move the numbers: porous or textured surfaces absorb more paint than the standard 350 square feet per gallon, irregular rooms need more cuts and waste, and thicker or reinforced concrete pours change the volume. Use the estimate as a well-grounded starting point, then adjust for the particular conditions of your site.",
      },
      {
        question: "Do I need to measure in specific units?",
        answer:
          "Each tool states the units it expects — typically feet for lengths and inches for thickness or tile size — and the labels on every field make this clear. Measuring consistently is what matters: mixing feet and inches without converting is the most common source of estimation error. Take your measurements carefully, enter them in the units requested, and the calculator handles the conversions needed to produce a volume, coverage or tile count you can rely on.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    tagline: "Grades & GPA",
    description: "Track grades and academic progress.",
    seoIntro:
      "Free education calculators for grades and GPA. Work out your current standing and what you need to reach your target.",
    about:
      "Education calculators help students and parents make sense of academic performance — a weighted course grade from assignments that count for different amounts, or a grade point average across classes worth different credit hours. They matter because grades rarely combine as a simple average: a final exam might carry 40% while homework carries 10%, and a four-credit course pulls a GPA harder than a one-credit elective. Doing that weighting by hand is error-prone, and the stakes are real when scholarships, honour-roll cut-offs and graduation requirements hang on the result. Students use these tools to see where they stand mid-semester, to work out the score they need on a final to hit a target, and to project a GPA before grades are posted. The methods are the standard ones: a weighted average that multiplies each score by its weight and divides by the total, and a grade point average that converts letter grades to points on the conventional 4.0 scale, weights them by credit hours, and averages. Each tool shows the formula and a worked example so the arithmetic is transparent. The limitation worth flagging is that institutions differ: grade boundaries, whether a scale is weighted for honours or AP courses, and the exact points assigned to a plus or minus grade vary from one school to the next. These calculators use the widely accepted standards, so confirm your own institution's scale for an official figure.",
    faqs: [
      {
        question: "What grade scale do these calculators use?",
        answer:
          "The GPA tool uses the standard United States 4.0 scale, where an A is 4.0, a B is 3.0, and plus and minus grades adjust by roughly 0.3 (an A− is 3.7, a B+ is 3.3). The grade calculator uses a common percentage-to-letter mapping where 90 and above is an A range. These are the widely accepted conventions, but individual schools set their own boundaries and some weight honours or AP courses higher, so check your institution's policy.",
      },
      {
        question: "What is the difference between a weighted and unweighted GPA?",
        answer:
          "An unweighted GPA puts every course on the same 4.0 scale regardless of difficulty, so an A is 4.0 whether it is in gym or calculus. A weighted GPA adds extra points for harder classes — often making an A in an AP or honours course worth 5.0 — to reward rigour, which is why weighted GPAs can exceed 4.0. These tools use the standard unweighted 4.0 scale; if your school weights honours courses, its official figure will differ.",
      },
      {
        question: "Can I work out the grade I need on a final?",
        answer:
          "Yes. Enter the scores you already have with their weights, and treat the final as the remaining weight; adjusting its value shows what result you need to reach a target overall grade. This is one of the most useful things a grade calculator does, because it turns a vague worry into a concrete number to aim for. Just make sure the weights you enter match your syllabus, since that is what determines how much the final can move your grade.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: "ShoppingCart",
    tagline: "Marketplace profit & fees",
    description: "Know your true margin per sale.",
    seoIntro:
      "Free e-commerce calculators for marketplace profit and fees. Understand your real margin after costs so you can price products for profit.",
    about:
      "E-commerce calculators reveal the number that decides whether an online store survives: the real profit left on a sale after every cost has been taken out. It is easy to see a healthy-looking selling price and forget that the marketplace takes a percentage fee, shipping eats into the rest, and packaging, payment processing and ad spend all chip away further. These tools add those costs back into the picture and show the net profit and margin per order, so sellers price for sustainability rather than hope. Marketplace sellers on platforms like Amazon, Etsy and eBay use them to check that a listing actually makes money after fees; dropshippers test whether thin margins survive advertising costs; and anyone setting prices uses them to find the floor below which a sale loses money. The method is straightforward and standard — selling price minus product cost, minus the percentage fee, minus shipping and other per-order costs — with margin expressed as a percentage of the selling price. Each tool shows the formula and a worked example, and separates margin from markup, two figures that are easy to confuse. The limitation is that fee structures vary and change: marketplaces adjust their commission rates, add referral or fulfilment fees, and price shipping by weight and zone, so enter the figures that match your actual account. Get those inputs right and the profit figure is exact.",
    faqs: [
      {
        question: "What is a good profit margin for e-commerce?",
        answer:
          "It varies by category, but many sellers aim for a net margin of 20–40% after all fees, shipping and advertising. Thin margins below that leave little room to absorb returns, ad costs or a fee increase, and can turn unprofitable on a single refund. High-ticket or handmade items often support wider margins; commodity products compete on price and run tighter. Use your real costs to find your margin, then price so it lands in a range that can withstand the inevitable surprises.",
      },
      {
        question: "What is the difference between margin and markup?",
        answer:
          "Margin is profit as a percentage of the selling price; markup is profit as a percentage of the cost. The same sale produces two different percentages — a product that costs $60 and sells for $100 has a 40% margin but a 66.7% markup. Confusing them leads to underpricing, because a markup always looks larger than the margin it produces. When you set prices, decide which figure you mean, and check the margin, since that is what actually reflects profitability.",
      },
      {
        question: "Should I include advertising costs in my profit calculation?",
        answer:
          "Yes. Advertising is a real per-sale cost on most platforms, and leaving it out inflates your apparent profit. Add your average ad spend per order to the other costs so the net figure reflects what you actually keep. Many sellers discover a listing that looks profitable on fees alone barely breaks even once ad costs are included. Tracking profit after advertising is the only way to know whether scaling a product makes or loses money.",
      },
    ],
  },
  {
    slug: "everyday",
    name: "Everyday Life",
    icon: "Calculator",
    tagline: "Tips, discounts, taxes & splits",
    description: "Everyday calculations for smarter spending.",
    seoIntro:
      "Free everyday calculators for tips, bill splitting, discounts, sales tax, and unit price comparison. Fast, free tools for smarter daily decisions.",
    about:
      "Everyday calculators handle the small-but-important arithmetic that comes up constantly in daily life — figuring out a fair tip, splitting a restaurant bill among friends, calculating how much you save with a discount, working out the sales tax on a purchase, or comparing unit prices to find the better grocery deal. These calculations feel simple until you're sitting at a table with six friends trying to do the math in your head, or standing in a store comparing a sale price to a bulk price on the fly. These tools eliminate the mental effort and the mistakes it produces, delivering an exact answer in seconds. They follow standard arithmetic definitions: tip percentage applies to the pre-tax bill amount, unit price divides total cost by quantity using whatever unit you specify, sales tax follows the percentage-of-price formula, and a discount reduces the original price by the stated amount or percentage. Each tool shows exactly what it computed so the result is easy to verify. The only practical limitations to note are that sales tax rates vary by jurisdiction and product type — this calculator uses whatever rate you enter, so you need to know the applicable rate for your purchase — and tipping customs vary by country and service type, so the defaults (18% for restaurants) reflect common US practice but you can always enter any percentage that fits your situation.",
    faqs: [
      {
        question: "How do I quickly calculate a tip in my head?",
        answer:
          "For a 20% tip, take the total bill and move the decimal point one place left to get 10%, then double it. On a $45 bill: 10% is $4.50, doubled is $9 — your 20% tip. For 15%, take the 10% figure and add half: $4.50 + $2.25 = $6.75. For a rough 18%, find 20% and subtract 10% of that tip: $9 − $0.90 = $8.10. These shortcuts get you to a reasonable tip without a calculator, though the tool gives you the exact figure whenever precision matters.",
      },
      {
        question: "What is the difference between a percentage discount and a fixed-amount discount?",
        answer:
          "A percentage discount scales with the original price — 30% off a $200 item saves $60, while 30% off a $50 item saves only $15. A fixed-amount discount is the same regardless of price — $20 off is always $20. Which is better depends on the item price: a percentage discount beats a fixed-dollar coupon when the item is expensive enough that the percentage produces a larger saving than the dollar amount, and the fixed coupon wins when the percentage would be smaller. The discount calculator shows both the saving and the final price so you can compare deals directly.",
      },
      {
        question: "Are unit price comparisons always reliable for finding the best value?",
        answer:
          "Unit price is the most objective measure of cost per unit of quantity, so it is reliable as long as you are comparing identical or equivalent products. The main caveats are quality differences between brands, waste before use (bulk buying of perishables that spoil before you finish them wipes out any unit-price saving), and storage — a lower unit price means nothing if you have nowhere to keep the larger size. Use unit price to compare, then factor in those practical constraints before deciding.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    icon: "Megaphone",
    tagline: "ROAS & ad performance",
    description: "Measure the return on your ad spend.",
    seoIntro:
      "Free marketing calculators for ROAS and advertising performance. Measure the return on your campaigns and make smarter budget decisions.",
    about:
      "Marketing calculators measure whether advertising is paying its way, starting with return on ad spend — the revenue each dollar of advertising generates. That single ratio drives budget decisions across search, social and marketplace campaigns, because a channel returning four dollars for every one spent deserves more money, while one returning less than it costs needs fixing or cutting. Performance marketers, small-business owners running their own ads, and agencies reporting to clients all use these tools to compare campaigns on equal terms and to justify where the next dollar goes. The calculation is deliberately simple and standard — revenue attributed to ads divided by the spend — and the tool also expresses it as a percentage and shows the gross profit above spend, so the result is easy to read at a glance. The crucial nuance these tools make room for is that ROAS measures top-line revenue, not profit: a 4× return can still lose money if the product's margins are thin, which is why the concept of break-even ROAS matters. If your margin is 25%, you need a 4× return just to cover costs before advertising turns a profit. The limitation to keep in mind is attribution — deciding which sales an ad actually caused is genuinely hard, and the revenue figure you feed in is only as reliable as your tracking. Get attribution reasonably right and ROAS becomes the clearest signal of which campaigns to scale.",
    faqs: [
      {
        question: "What is a good ROAS?",
        answer:
          "It depends entirely on your profit margins, not a universal benchmark. Many businesses target 3–4× or higher, but a low-margin product may need a far higher return just to break even, while a high-margin one can profit at 2×. The figure that matters is your break-even ROAS — one divided by your profit margin. A 25% margin needs a 4× return to cover costs before advertising adds profit. Compare your ROAS against that break-even point, not against a generic target.",
      },
      {
        question: "What is the difference between ROAS and ROI?",
        answer:
          "ROAS compares revenue to advertising spend only, so it measures how efficiently ads generate sales. ROI compares profit to total investment, accounting for product costs, overheads and everything else, so it measures whether the business actually made money. A campaign can show a strong ROAS while producing little ROI if margins are thin. Use ROAS to compare and optimise ad channels; use ROI to judge whether the overall effort was worth it.",
      },
      {
        question: "What is break-even ROAS?",
        answer:
          "Break-even ROAS is the return at which ad-driven revenue exactly covers your costs, with no profit and no loss. You calculate it as one divided by your profit margin — a 25% margin gives a break-even ROAS of 4×, meaning you must earn four dollars per dollar spent just to come out even. Any return above that is profit; anything below loses money. Knowing this number turns a raw ROAS figure into a clear verdict on whether a campaign is actually working.",
      },
    ],
  },
  {
    slug: "science",
    name: "Science",
    icon: "Atom",
    tagline: "Physics, chemistry & motion",
    description: "Solve physics and chemistry formulas instantly.",
    seoIntro:
      "Free science calculators for physics and chemistry — Ohm's law, density, force, kinetic energy, pH and speed. Each shows the formula, a worked example and clear SI-unit results.",
    about:
      "Science calculators apply the core formulas of physics and chemistry — Ohm's law, density, Newton's second law, kinetic energy, pH and the speed-distance-time relationship — so you can get an exact answer without rearranging equations by hand. Each tool takes the quantities you know, works in consistent SI units, and returns the value you need along with useful secondary figures like power, momentum or pounds-force. These calculations sit at the heart of schoolwork, lab reports and practical engineering, and small slips in unit handling or algebra are where mistakes creep in. A calculator that pins down the units and shows the formula removes that risk and lets you focus on understanding the result. Students use them to check homework and learn the method; teachers build worked examples; hobbyists size electronics, mix solutions or work out motion; and engineers sanity-check figures before committing them to a design. Every tool here states the formula it applies and a worked example, so the answer is transparent rather than a black box, and the science follows standard, textbook definitions. The main limitation to keep in mind is that these are idealised formulas — they assume clean inputs and do not model real-world complications like friction, temperature effects or measurement error, so treat the output as the exact theoretical value for the numbers you enter.",
    faqs: [
      {
        question: "Are these science calculators accurate?",
        answer:
          "Yes. They implement standard textbook formulas exactly and compute in consistent SI units, so results are precise to the decimals shown. The figures are idealised, meaning they assume clean inputs and ignore real-world effects such as friction, resistance heating, temperature or measurement error. For homework, lab estimates and design sanity-checks they are reliable; for a physical experiment, expect small differences between the theoretical value and what you actually measure.",
      },
      {
        question: "What units do these calculators use?",
        answer:
          "They work in SI base units — metres, kilograms, seconds, amperes and their derived units like newtons, joules and volts — because mixing unit systems is the most common source of error in physics and chemistry. Each field is labelled with the unit it expects, and several tools also return a convenient secondary unit, such as pounds-force alongside newtons or miles per hour alongside kilometres per hour, so you can read the answer in whichever unit suits you.",
      },
      {
        question: "Can I use these for school or exams?",
        answer:
          "They are ideal for checking homework and learning the method, since every tool shows the formula and a worked example you can reproduce by hand. That matters because most exams do not allow a calculator that solves the whole problem for you, so understanding the steps is what earns marks. Use these tools to confirm your own working and to build intuition for how each variable changes the result, not as a substitute for learning the underlying physics.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Home",
    tagline: "Property, mortgages & rentals",
    description: "Analyze property deals and mortgages.",
    seoIntro:
      "Free real estate calculators for cap rate, rent versus buy, loan-to-value, down payment, closing costs, property tax and refinancing. Each shows its formula, a worked example and a clear breakdown.",
    about:
      "Real estate calculators put the arithmetic of buying, financing and renting property within reach — the capitalization rate that gauges an investment's yield, the loan-to-value ratio a lender scrutinises, the cash a down payment demands, the closing costs that stack up at signing, the annual property tax bill, and the break-even point where refinancing finally pays off. Property is the largest transaction most people ever make, and a fractional shift in a rate, a tax mill levy or a fee schedule moves the outcome by thousands of dollars, so running the figures before you commit is time well spent. First-time buyers weigh whether renting or purchasing suits their timeline; landlords screen rental deals on cap rate and cash flow; homeowners test whether a lower rate justifies the cost of refinancing; and everyone needs to know the real cash required to close. Each tool applies the standard methods — net operating income divided by price for cap rate, loan balance over appraised value for loan-to-value, assessed value times the local rate for property tax — and shows the formula, a worked example and a full breakdown rather than a lone figure. The limitation to hold onto is that these are estimates: actual property taxes, insurance premiums, HOA dues, appraisal values and lender fees vary by location and change over time, and rental returns depend on occupancy and upkeep. Use the results to compare deals and understand the mechanics, then confirm the specifics with your lender, agent or tax office.",
    faqs: [
      {
        question: "What is a good cap rate for a rental property?",
        answer:
          "There is no universal number, because cap rate reflects both risk and location. Many investors look for something in the range of four to ten percent, with lower rates in expensive, stable markets and higher rates where risk or vacancy runs higher. A high cap rate can signal strong yield or a troubled area, so read it alongside condition, tenancy and growth prospects rather than chasing the biggest figure alone.",
      },
      {
        question: "Is it better to rent or buy a home?",
        answer:
          "It depends mostly on how long you will stay and on local prices. Buying rewards a longer horizon, because closing costs and agent fees take years of appreciation and equity to recover, while renting suits mobility and uncertain plans. A rent-versus-buy tool weighs your down payment, mortgage, taxes and expected appreciation against rent and its increases, giving you a break-even timeline to judge which path fits your situation.",
      },
      {
        question: "What is loan-to-value and why does it matter?",
        answer:
          "Loan-to-value is the mortgage amount expressed as a percentage of the property's appraised value, so a two hundred thousand dollar loan on a two hundred fifty thousand dollar home is eighty percent. Lenders use it to price risk: a lower ratio usually means a better rate and avoids private mortgage insurance, which is often required above eighty percent. Watching your loan-to-value helps you plan a down payment and time when to refinance.",
      },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: "Car",
    tagline: "Fuel, loans & tires",
    description: "Run the numbers on car costs.",
    seoIntro:
      "Free automotive calculators for fuel cost, MPG, electric-vehicle savings, tire size and car loans. Each shows the formula, a worked example and a clear breakdown so the numbers make sense.",
    about:
      "Automotive calculators translate the ongoing costs and specifications of driving into figures you can plan around — the fuel a trip will burn and what it costs, the miles per gallon a vehicle actually returns, the savings an electric car offers over petrol, the real diameter behind a tire size code, and the monthly payment on a car loan. A vehicle is among the more expensive things a household owns and runs, and fuel, financing and tires add up quietly over the years, so seeing the numbers plainly helps you buy and drive within budget. Commuters estimate the annual cost of their drive; shoppers compare the running cost of a hybrid or electric model against a conventional one; road-trippers budget fuel before setting off; and anyone changing wheels checks that a new tire size clears the arches and keeps the speedometer honest. Each tool applies the standard method — distance divided by fuel used for economy, price times consumption for trip cost, the amortization formula for a loan payment — and shows the formula, a worked example and a breakdown so the result is transparent rather than a guess. The limitation worth remembering is that real driving rarely matches the ideal: fuel economy swings with speed, load, terrain, weather and driving style, electricity and fuel prices move constantly, and lender rates and fees vary. Treat these figures as well-grounded estimates for comparing choices and budgeting, then confirm exact prices and loan terms with your dealer, lender or energy provider.",
    faqs: [
      {
        question: "How is fuel economy actually calculated?",
        answer:
          "Fuel economy divides distance travelled by fuel consumed, so a car covering three hundred miles on ten gallons returns thirty miles per gallon. Metric figures invert this, expressing litres per hundred kilometres instead. The cleanest way to measure your own is to fill the tank, reset the trip meter, drive normally, then refill and divide the miles by the gallons added. Real economy varies with speed, load and conditions, so average several tanks for a reliable number.",
      },
      {
        question: "Do electric vehicles really save money?",
        answer:
          "Usually on running costs, because electricity per mile typically costs less than petrol and electric motors need less routine maintenance, with no oil changes and fewer moving parts. The savings depend on local electricity and fuel prices, how much you drive, and whether you charge at home or at pricier public stations. A higher purchase price can offset fuel savings, so compare total cost over the years you plan to keep the vehicle, not just the price at the pump.",
      },
      {
        question: "Why does changing tire size affect my speedometer?",
        answer:
          "Because a speedometer counts wheel rotations and assumes a fixed rolling distance per turn. A taller tire covers more ground per rotation, so you are actually going faster than the dial reads; a shorter tire does the reverse. A tire size code encodes width, aspect ratio and rim diameter, from which overall diameter follows. Keeping a new size within roughly three percent of the original diameter keeps the speedometer accurate and preserves handling and clearance.",
      },
    ],
  },
  {
    slug: "cooking",
    name: "Cooking",
    icon: "ChefHat",
    tagline: "Recipes, conversions & times",
    description: "Scale recipes and convert kitchen units.",
    seoIntro:
      "Free cooking calculators for recipe scaling, baking weight and volume conversions, and cooking times. Each shows the formula, a worked example and clear results for confident kitchen work.",
    about:
      "Cooking calculators take the fiddly arithmetic out of the kitchen — scaling a recipe up for a crowd or down for two, converting between cups, grams, ounces and millilitres, and adjusting cooking times when quantities or pan sizes change. Recipes are written for a fixed yield and often in whichever units the author preferred, which leaves home cooks juggling awkward fractions and unfamiliar measures at exactly the moment their hands are full. These tools resolve that in a second, turning a recipe for four into one for ten, or a stubborn cup measure into the grams a kitchen scale wants. Home cooks resize family recipes for gatherings; bakers convert volume to weight for the precision that good pastry demands; meal-preppers batch dishes up cleanly; and anyone following a recipe from another country translates its units without second-guessing. Each tool applies the standard method — a simple ratio for scaling, defined density and unit factors for conversions — and shows its working so you can trust and reproduce the result. The important limitation is that ingredient conversions between volume and weight depend on the ingredient itself: a cup of flour, sugar and butter each weigh different amounts, so these tools use standard reference densities that suit most cooking but may differ slightly from a specific brand or how firmly you pack a measure. Baking rewards weighing over volume for that reason. Treat the figures as reliable starting points, and trust taste, texture and a thermometer for the final call.",
    faqs: [
      {
        question: "How do I scale a recipe up or down?",
        answer:
          "Multiply every ingredient by a single scaling factor — the new yield divided by the original. To take a recipe for four up to six, multiply each quantity by one and a half. Amounts scale cleanly, but seasoning, cooking time and pan size do not always follow in step: taste and adjust salt and spices, and expect timing to shift when depth or surface area changes. A scaling tool handles the multiplication so you can focus on those judgement calls.",
      },
      {
        question: "Why should I weigh baking ingredients instead of measuring by volume?",
        answer:
          "Because volume is unreliable for dry ingredients, especially flour. A cup of flour can vary by a fair margin depending on how firmly it is packed and whether it has settled, which throws off the flour-to-liquid balance that baking depends on. Weighing in grams removes that variability and gives the same result every time. This is why serious baking recipes list weights, and why a conversion tool that turns cups into grams makes your results far more consistent.",
      },
      {
        question: "Do cooking times change when I scale a recipe?",
        answer:
          "Often, but not in proportion to the quantity. Doubling a soup barely changes the simmer once it is hot, while a larger roast or a deeper cake needs meaningfully longer to cook through. Timing depends more on thickness, depth and pan size than on total volume, so use the original time as a guide and judge doneness by temperature, colour and texture. A thermometer is the most reliable check whenever you change the batch size.",
      },
    ],
  },
  {
    slug: "engineering",
    name: "Engineering",
    icon: "Wrench",
    tagline: "Mechanical & electrical formulas",
    description: "Solve engineering formulas fast.",
    seoIntro:
      "Free engineering calculators for gear ratio, voltage divider, stress and strain, motor power, beam deflection and Reynolds number. Each shows the formula, a worked example and clear SI-unit results.",
    about:
      "Engineering calculators apply the working formulas of mechanical and electrical design — gear ratio, the voltage divider, stress and strain, motor power, beam deflection and the Reynolds number — so you can move from known quantities to the answer without rearranging equations or fumbling unit conversions by hand. Each tool takes the values you have, computes in consistent SI units, and returns the figure you need alongside useful secondary results, which is exactly the kind of quick, reliable check that keeps a design moving. These calculations underpin coursework, prototyping and everyday shop-floor decisions, and the mistakes that creep in are almost always slips in algebra or mixed units rather than a misunderstanding of the physics. A tool that pins the units down and shows the formula removes that risk and lets you concentrate on the design intent. Students verify homework and learn the method; makers size motors, gears and resistor networks; and practising engineers sanity-check a figure before it goes into a drawing or a bill of materials. Every calculator here states the formula it uses and a worked example, so the result is transparent rather than a black box, and it follows standard textbook definitions. The limitation to keep in mind is that these are idealised models: they assume linear-elastic material, steady flow, ideal gears and clean inputs, and do not capture friction, thermal effects, fatigue, safety factors or manufacturing tolerance. Treat the output as the exact theoretical value for the numbers you enter, then apply the appropriate safety margins and standards before committing to a real build.",
    faqs: [
      {
        question: "Are these engineering calculators accurate enough for real designs?",
        answer:
          "The mathematics is exact for the idealised model each tool implements, and results are precise to the decimals shown. Real designs, though, must add safety factors, allow for friction, temperature, fatigue and material variability, and comply with the relevant code or standard. Use these calculators to check working, compare options and build intuition, then validate the final design against the applicable engineering standards and a qualified reviewer before anything is manufactured or loaded.",
      },
      {
        question: "What units do these calculators expect?",
        answer:
          "They work in SI base and derived units — metres, kilograms, seconds, amperes, newtons, pascals, watts and volts — because mixing unit systems is the single most common source of error in engineering calculation. Every input field is labelled with the unit it expects, and several tools return a convenient secondary figure as well, such as horsepower alongside watts or megapascals alongside pascals, so you can read the result in whichever unit your work calls for.",
      },
      {
        question: "Why does my calculated beam deflection differ from a real beam?",
        answer:
          "Because the standard deflection formulas assume an idealised beam: a single material behaving linearly, a perfectly defined support condition, and a clean point or uniform load. A real beam carries connection flexibility, self-weight, load sharing, material scatter and support give that the simple equation omits. The calculator gives the exact theoretical deflection for your inputs, which is ideal for comparison and preliminary sizing; confirm a load-bearing design with full analysis and the governing structural code.",
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports",
    icon: "Trophy",
    tagline: "Training, pace & performance",
    description: "Train smarter with the numbers.",
    seoIntro:
      "Free sports calculators for one-rep max, VO2 max, swim pace, calorie burn and race time prediction. Each shows the formula, a worked example and clear results to guide your training.",
    about:
      "Sports calculators turn training inputs — a set completed in the gym, a test effort on the track, a swim split, a session's duration — into the numbers that guide smarter training: an estimated one-rep max, a VO2 max fitness score, a pace per hundred metres, calories burned, or a predicted finish time at a new distance. Their value is that they replace guesswork with an established formula, giving athletes a consistent baseline to plan loads against and to measure progress over a season. Lifters use a one-rep-max estimate to set working weights as a percentage of their maximum without the risk of testing a true max; runners predict a marathon time from a recent 10K and pace their long runs; swimmers track pace across sets; and anyone building a training plan uses calorie estimates to balance fuelling against output. The methods here are the ones coaches and sports scientists rely on — the Epley and Brzycki formulas for one-rep max, the Cooper and race-based estimates for VO2 max, and the standard pace and MET-based calorie relationships — and each tool shows its formula and a worked example so the logic is transparent. The essential caveat is that these are population-level estimates built from averages, not measured values for you specifically: a lifter's true max depends on technique and rep quality, VO2 max from a field test is an approximation of a lab measurement, and calorie burn varies with fitness, terrain and efficiency. Use the figures to plan, pace and track trends, not as precise physiological readings.",
    faqs: [
      {
        question: "How accurate is an estimated one-rep max?",
        answer:
          "It is a good estimate, not a guaranteed lift. Formulas like Epley and Brzycki predict your maximum from a weight you can lift for several reps, and they are most accurate in the low-rep range — under about five reps — where the relationship holds tightly. Above ten reps the estimate drifts, because endurance and technique start to dominate. Use it to set training percentages safely, and confirm a true max under supervision only when it genuinely matters.",
      },
      {
        question: "Can a calculator really predict my race time?",
        answer:
          "It can give a realistic target, within limits. Race prediction extrapolates from a recent result using a standard endurance model, and it works well when the new distance is not too far from the one you have raced and your training suits it. Predicting a marathon from a single fast 5K tends to be optimistic, because endurance at long distances depends on training volume the formula cannot see. Treat the prediction as a pacing guide, then adjust for your specific fitness.",
      },
      {
        question: "How is calorie burn during exercise estimated?",
        answer:
          "Most estimates use MET values — a measure of an activity's intensity relative to rest — combined with your body weight and the duration of the session. Multiplying the activity's MET rating by weight and time gives a solid approximation of energy expended. The figure is an estimate because real burn shifts with your fitness, efficiency, terrain and effort, and two people doing the same workout can differ noticeably. Use it to guide fuelling and track trends rather than as an exact count.",
      },
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "Cpu",
    tagline: "Data, networks & displays",
    description: "Practical tech and networking math.",
    seoIntro:
      "Free technology calculators for download time, bandwidth, IP subnets, screen PPI, video bitrate and uptime SLA. Each shows the formula, a worked example and clear results.",
    about:
      "Technology calculators handle the practical arithmetic behind data, networks and displays — how long a file takes to download at a given speed, the bandwidth a stream or user load demands, the usable hosts in an IP subnet, the pixel density of a screen, the bitrate a video needs, and the downtime an uptime SLA actually permits. These are the everyday figures that engineers, administrators and technically minded users reach for when planning capacity, sizing infrastructure or specifying hardware, and they are easy to get wrong because the units are unforgiving: bits versus bytes, decimal versus binary, percentages that translate into surprisingly precise minutes of allowed outage. A tool that fixes the conventions and shows its working removes that ambiguity. Network administrators plan subnets and check that an SLA leaves room for maintenance; developers estimate transfer times and streaming bandwidth; and buyers compare screen sharpness across devices of different sizes and resolutions. Each calculator applies the standard method — file size over throughput for download time, host bits for subnet capacity, the diagonal-pixel formula for PPI, and the percentage-of-a-period definition for SLA downtime — and shows the formula and a worked example so the result is transparent rather than a guess. The main convention to keep in mind is the bit-versus-byte and decimal-versus-binary distinction that trips up so many estimates: connection speeds are quoted in bits per second while file sizes are in bytes, and these tools state which they use. Treat the figures as accurate for the inputs you provide, and allow for real-world overhead like protocol headers and congestion.",
    faqs: [
      {
        question: "Why does a download take longer than the file size divided by my speed?",
        answer:
          "Two reasons. First, the units differ: internet speeds are quoted in bits per second while files are measured in bytes, and a byte is eight bits, so a 100 Mbps line moves roughly 12.5 megabytes per second, not 100. Second, real transfers carry protocol overhead, latency and congestion that the ideal figure ignores. The download-time tool converts bits to bytes correctly; add a margin of overhead to match what you actually observe.",
      },
      {
        question: "How many usable hosts are in a subnet?",
        answer:
          "It depends on the number of host bits, which the subnet mask defines. The usable count is two raised to the number of host bits, minus two — one address is reserved for the network itself and one for the broadcast address. A /24 subnet has eight host bits, giving 254 usable addresses. The subnet calculator works this out from the mask or prefix you enter, along with the network and broadcast addresses, so you can plan address space without manual binary arithmetic.",
      },
      {
        question: "What does a given uptime SLA mean in real downtime?",
        answer:
          "An SLA percentage translates into a concrete allowance of outage over a period. Ninety-nine percent uptime permits over seven hours of downtime a month, while 99.9 percent allows around forty-three minutes and 99.99 percent only about four. Each additional nine cuts the permitted downtime roughly tenfold, which is why the gap between them costs so much to engineer. The SLA calculator converts a target percentage into allowed downtime per day, month and year so you can judge feasibility.",
      },
    ],
  },
  {
    slug: "environment",
    name: "Environment",
    icon: "Leaf",
    tagline: "Energy, carbon & sustainability",
    description: "Measure your environmental impact.",
    seoIntro:
      "Free environment calculators for carbon footprint, solar savings, flight emissions, home energy cost, EV charging and water use. Each shows the formula, a worked example and clear results.",
    about:
      "Environment calculators put a number on the everyday choices that shape your carbon footprint and energy bills — the emissions from a year of driving and flying, the electricity a household draws, the savings a rooftop solar array returns, the cost of charging an electric car, and the water a home gets through. Climate impact can feel abstract, and these tools make it concrete by converting familiar quantities like miles driven, kilowatt-hours used or litres consumed into figures you can compare and act on. Households use them to see where their emissions actually come from and to test whether a change — switching to solar, flying less, driving electric — pays off financially as well as environmentally; renters estimate energy costs before signing a lease; and anyone weighing a green upgrade wants the payback period in plain terms. Each tool applies a standard method — emissions factors published by environmental agencies, coverage and yield rates for solar, and straightforward cost-per-unit arithmetic for energy and water — and shows the formula and a worked example so the result is transparent rather than a slogan. The limitation to keep in mind is that emissions factors and utility rates vary by region and change over time: the carbon intensity of your electricity grid, the price per kilowatt-hour, and the sunlight your roof receives all depend on where you live. Treat the figures as well-grounded estimates for comparing options and understanding your impact, then confirm local rates and factors with your utility or a certified installer.",
    faqs: [
      {
        question: "How is a carbon footprint calculated?",
        answer:
          "A carbon footprint multiplies each activity by an emissions factor — the kilograms of carbon dioxide released per unit. Driving a mile, burning a litre of fuel or using a kilowatt-hour of grid electricity each carries a published factor, and summing them gives your total. These calculators use standard factors from environmental agencies, but the real figure depends on your local grid mix and habits, so treat it as a solid estimate rather than an exact measurement.",
      },
      {
        question: "Is home solar worth the investment?",
        answer:
          "It usually depends on three things: how much sunlight your roof receives, the local price of electricity, and the upfront cost after any incentives. A solar calculator estimates annual generation and the bill savings it produces, then divides the system cost by those savings to give a payback period. Sunnier regions and higher electricity prices shorten it. Confirm your roof's orientation and a firm quote with a certified installer before committing.",
      },
      {
        question: "Do electric vehicles really lower emissions?",
        answer:
          "Generally yes over their lifetime, because an electric motor is far more efficient than a combustion engine and produces no tailpipe emissions. How much cleaner depends on your electricity grid: charging from renewable or nuclear power cuts emissions sharply, while a coal-heavy grid narrows the gap. Manufacturing a battery adds upfront emissions that driving then offsets. Compare using your region's grid intensity, which these tools let you enter, for a realistic figure.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    tagline: "Shipping, freight & warehousing",
    description: "Plan shipments and freight costs.",
    seoIntro:
      "Free logistics calculators for dimensional weight, CBM, pallet counts, freight density, landed cost and container loading. Each shows the formula, a worked example and clear results.",
    about:
      "Logistics calculators handle the arithmetic that decides what a shipment costs and whether it fits — dimensional weight, cubic metres, how many cartons fit on a pallet, freight density and class, the landed cost of imported goods, and how much a container will hold. Freight is priced on whichever is greater, actual weight or the space a parcel occupies, so a light but bulky box can cost far more than its scale weight suggests, and getting these numbers wrong turns a thin margin into a loss. Importers, e-commerce sellers, warehouse teams and shipping coordinators use these tools to quote accurately, compare carriers, and plan how goods stack and travel. Each tool applies the standard method carriers themselves use — dimensional weight as length times width times height divided by a dimensional factor, cubic metres from the same dimensions, pallet and container fit from unit and load dimensions, and landed cost as the sum of goods, freight, duty and handling — and shows the formula and a worked example so the figure is transparent. The limitation to keep in mind is that carriers set their own dimensional divisors, duty rates depend on commodity codes and country of origin, and real-world stacking is constrained by weight limits, fragility and load stability that a pure volume calculation cannot see. Treat the results as accurate for the inputs you provide, then confirm the dimensional factor, tariff and pallet configuration with your carrier or customs broker before booking a shipment.",
    faqs: [
      {
        question: "What is dimensional weight and why do carriers use it?",
        answer:
          "Dimensional weight prices a shipment by the space it occupies rather than its actual mass. Carriers calculate it by multiplying length, width and height and dividing by a dimensional factor they set, then bill whichever is greater — the dimensional or the actual weight. This stops light, bulky parcels from taking up van space cheaply. Because each carrier uses a different divisor, always check theirs, since it directly changes the price you pay.",
      },
      {
        question: "How do I calculate the CBM of a shipment?",
        answer:
          "Cubic metres, or CBM, measures the volume a shipment occupies. Multiply the length, width and height of each carton in metres, then add the cartons together. A box of 0.5 by 0.4 by 0.3 metres is 0.06 CBM, so ten of them make 0.6 CBM. Sea freight is often priced per cubic metre, so an accurate CBM figure is essential for quoting and planning how much fits in a container.",
      },
      {
        question: "What is landed cost and why does it matter?",
        answer:
          "Landed cost is the total price of getting a product to your door — the goods plus freight, insurance, import duty, customs fees and handling. It matters because the sticker price of imported goods hides these additions, and a product that looks cheap at the factory can become unprofitable once duty and shipping are added. Calculating it before you order reveals your true unit cost, so you can price for profit before the gap appears.",
      },
    ],
  },
];

export const CATEGORY_MAP: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c])
);

export function getCategory(slug: string): Category | undefined {
  return CATEGORY_MAP[slug];
}
