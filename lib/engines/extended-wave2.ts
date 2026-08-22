import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave-2 Finance engines. Pure math only — no formatting, no display logic. */

function amortize(principal: number, annualRate: number, months: number) {
  const r = annualRate / 100 / 12;
  if (principal <= 0 || months <= 0)
    return { monthlyPayment: NaN, totalPaid: NaN, totalInterest: NaN };
  const monthly =
    r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
  const totalPaid = monthly * months;
  return { monthlyPayment: monthly, totalPaid, totalInterest: totalPaid - principal };
}

// ---------------- AUTO LOAN ----------------

export const autoLoan: ComputeFn = (i) => {
  const vehiclePrice = num(i.vehiclePrice);
  const downPayment = num(i.downPayment) || 0;
  const tradeIn = num(i.tradeIn) || 0;
  const rate = num(i.rate);
  const months = num(i.term);
  const principal = vehiclePrice - downPayment - tradeIn;
  if (principal <= 0 || months <= 0) return { monthlyPayment: NaN, totalCost: NaN, totalInterest: NaN, amountFinanced: principal };
  const r = rate / 100 / 12;
  const monthly = r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
  const totalPaid = monthly * months;
  return {
    monthlyPayment: monthly,
    totalCost: totalPaid + downPayment + tradeIn,
    totalInterest: totalPaid - principal,
    amountFinanced: principal,
  };
};

// ---------------- RETIREMENT ----------------

export const retirement: ComputeFn = (i) => {
  const currentAge = num(i.currentAge);
  const retirementAge = num(i.retirementAge);
  const currentSavings = num(i.currentSavings) || 0;
  const monthlyContrib = num(i.monthlyContribution) || 0;
  const annualReturn = num(i.annualReturn) / 100;
  const inflationRate = num(i.inflationRate) / 100 || 0.035;
  const years = retirementAge - currentAge;
  if (years <= 0) return { projectedSavings: NaN, inflationAdjusted: NaN, monthlyIncome: NaN, totalContributions: NaN };
  const r = annualReturn / 12;
  const n = years * 12;
  const fvPrincipal = r === 0 ? currentSavings : currentSavings * Math.pow(1 + r, n);
  const fvContrib = monthlyContrib === 0 ? 0 : r === 0 ? monthlyContrib * n : monthlyContrib * ((Math.pow(1 + r, n) - 1) / r);
  const projected = fvPrincipal + fvContrib;
  const inflationFactor = Math.pow(1 + inflationRate, years);
  const inflationAdjusted = projected / inflationFactor;
  const totalContributions = currentSavings + monthlyContrib * n;
  return {
    projectedSavings: projected,
    inflationAdjusted,
    monthlyIncome: projected * 0.04 / 12,
    totalContributions,
  };
};

// ---------------- DEBT PAYOFF ----------------

export const debtPayoff: ComputeFn = (i) => {
  const balance = num(i.balance);
  const apr = num(i.apr);
  const minPayment = num(i.minPayment);
  const extraPayment = num(i.extraPayment) || 0;
  if (balance <= 0 || apr < 0 || minPayment <= 0) return { monthsPayoff: NaN, totalInterest: NaN, monthsSaved: NaN, interestSaved: NaN };
  const r = apr / 100 / 12;

  function monthsToPayoff(bal: number, rate: number, pmt: number): { months: number; interest: number } {
    if (pmt <= bal * rate) return { months: Infinity, interest: Infinity };
    let b = bal, totalInterest = 0, months = 0;
    while (b > 0.01 && months < 1200) {
      const interest = b * rate;
      totalInterest += interest;
      b = b + interest - pmt;
      if (b < 0) b = 0;
      months++;
    }
    return { months, interest: totalInterest };
  }

  const withExtra = monthsToPayoff(balance, r, minPayment + extraPayment);
  const minOnly = monthsToPayoff(balance, r, minPayment);

  return {
    monthsPayoff: withExtra.months,
    totalInterest: withExtra.interest,
    monthsSaved: minOnly.months - withExtra.months,
    interestSaved: minOnly.interest - withExtra.interest,
  };
};

// ---------------- INFLATION ----------------

export const inflation: ComputeFn = (i) => {
  const amount = num(i.amount);
  const startYear = num(i.startYear);
  const endYear = num(i.endYear);
  const rate = num(i.inflationRate) || 3.5;
  const years = endYear - startYear;
  if (!Number.isFinite(amount) || years === 0) return { equivalentValue: NaN, purchasingPowerChange: NaN, cumulativeInflation: NaN };
  const factor = Math.pow(1 + rate / 100, Math.abs(years));
  const equivalentValue = years > 0 ? amount * factor : amount / factor;
  const cumulativeInflation = (factor - 1) * 100;
  return {
    equivalentValue,
    purchasingPowerChange: ((equivalentValue - amount) / amount) * 100,
    cumulativeInflation: years > 0 ? cumulativeInflation : -((1 - 1 / factor) * 100),
  };
};

// ---------------- APR ----------------

export const apr: ComputeFn = (i) => {
  const loanAmount = num(i.loanAmount);
  const interestRate = num(i.interestRate);
  const termMonths = num(i.termMonths);
  const originationFee = num(i.originationFee) || 0;
  const otherFees = num(i.otherFees) || 0;
  if (loanAmount <= 0 || termMonths <= 0) return { apr: NaN, totalCost: NaN, monthlyPayment: NaN };
  const r = interestRate / 100 / 12;
  const monthly = r === 0 ? loanAmount / termMonths : (loanAmount * r) / (1 - Math.pow(1 + r, -termMonths));
  const totalInterest = monthly * termMonths - loanAmount;
  const totalFees = originationFee + otherFees;
  const totalCost = totalInterest + totalFees;
  const days = termMonths * 30.4375;
  const aprVal = (totalCost / loanAmount) / days * 365 * 100;
  return {
    apr: aprVal,
    totalCost: monthly * termMonths + totalFees,
    monthlyPayment: monthly,
  };
};

// ---------------- HOME AFFORDABILITY ----------------

export const homeAffordability: ComputeFn = (i) => {
  const annualIncome = num(i.annualIncome);
  const monthlyDebt = num(i.monthlyDebt) || 0;
  const downPayment = num(i.downPayment) || 0;
  const rate = num(i.rate);
  const termYears = num(i.term) || 30;
  const propTaxRate = num(i.propTaxRate) || 1.2;
  const hoa = num(i.hoa) || 0;
  if (annualIncome <= 0) return { maxHomePrice: NaN, maxMortgage: NaN, monthlyPayment: NaN, downPaymentNeeded: NaN };
  const monthlyIncome = annualIncome / 12;
  // 28% front-end ratio: PITI <= 28% of gross income
  // 36% back-end ratio: total debt <= 36%
  const maxPITI = monthlyIncome * 0.28;
  const maxFromBackEnd = monthlyIncome * 0.36 - monthlyDebt;
  const maxPayment = Math.min(maxPITI, maxFromBackEnd) - hoa;
  // Solve for P in: payment = P * r / (1 - (1+r)^-n)
  const r = rate / 100 / 12;
  const n = termYears * 12;
  const factor = r === 0 ? n : (1 - Math.pow(1 + r, -n)) / r;
  const maxMortgage = maxPayment * factor / (1 + propTaxRate / 100 / 12 * factor);
  const maxHomePrice = maxMortgage + downPayment;
  const r2 = rate / 100 / 12;
  const actualMonthly = r2 === 0 ? maxMortgage / n : (maxMortgage * r2) / (1 - Math.pow(1 + r2, -n));
  return {
    maxHomePrice: Math.max(0, maxHomePrice),
    maxMortgage: Math.max(0, maxMortgage),
    monthlyPayment: actualMonthly + maxHomePrice * propTaxRate / 100 / 12 + hoa,
    downPaymentNeeded: downPayment,
  };
};

// ---------------- RENTAL YIELD ----------------

export const rentalYield: ComputeFn = (i) => {
  const propertyValue = num(i.propertyValue);
  const monthlyRent = num(i.monthlyRent);
  const annualExpenses = num(i.annualExpenses) || 0;
  const vacancyRate = num(i.vacancyRate) || 5;
  if (propertyValue <= 0) return { grossYield: NaN, netYield: NaN, annualCashFlow: NaN, monthlyCashFlow: NaN };
  const effectiveAnnualRent = monthlyRent * 12 * (1 - vacancyRate / 100);
  const grossYield = (effectiveAnnualRent / propertyValue) * 100;
  const netAnnual = effectiveAnnualRent - annualExpenses;
  const netYield = (netAnnual / propertyValue) * 100;
  return {
    grossYield,
    netYield,
    annualCashFlow: netAnnual,
    monthlyCashFlow: netAnnual / 12,
  };
};

// ---------------- NET WORTH ----------------

export const netWorth: ComputeFn = (i) => {
  const cash = num(i.cash) || 0;
  const investments = num(i.investments) || 0;
  const retirement = num(i.retirementAccounts) || 0;
  const homeValue = num(i.homeValue) || 0;
  const vehicles = num(i.vehicles) || 0;
  const otherAssets = num(i.otherAssets) || 0;
  const mortgage = num(i.mortgage) || 0;
  const autoLoans = num(i.autoLoans) || 0;
  const studentLoans = num(i.studentLoans) || 0;
  const creditCards = num(i.creditCards) || 0;
  const otherLiabilities = num(i.otherLiabilities) || 0;
  const totalAssets = cash + investments + retirement + homeValue + vehicles + otherAssets;
  const totalLiabilities = mortgage + autoLoans + studentLoans + creditCards + otherLiabilities;
  const worth = totalAssets - totalLiabilities;
  return {
    netWorth: worth,
    totalAssets,
    totalLiabilities,
    debtToAsset: totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : NaN,
  };
};

// ---------------- DIVIDEND ----------------

export const dividend: ComputeFn = (i) => {
  const shares = num(i.shares);
  const sharePrice = num(i.sharePrice);
  const dividendPerShare = num(i.dividendPerShare);
  const growthRate = num(i.growthRate) || 0;
  const years = num(i.years) || 1;
  if (shares <= 0 || sharePrice <= 0) return { annualIncome: NaN, dividendYield: NaN, totalReturn: NaN, yieldOnCost: NaN };
  const annualIncome = shares * dividendPerShare;
  const dividendYield = (dividendPerShare / sharePrice) * 100;
  // DRIP: reinvest dividends, growing at growthRate annually
  const r = growthRate / 100;
  const futureAnnualDiv = dividendPerShare * Math.pow(1 + r, years);
  const yieldOnCost = (futureAnnualDiv / sharePrice) * 100;
  // Simple total return with reinvestment
  let totalDividends = 0;
  let currentDividend = dividendPerShare;
  for (let y = 0; y < years; y++) {
    totalDividends += shares * currentDividend;
    currentDividend *= (1 + r);
  }
  return {
    annualIncome,
    dividendYield,
    totalReturn: totalDividends,
    yieldOnCost,
  };
};

// ---------------- CURRENCY CONVERTER ----------------

// Rates relative to USD (approximate, as of 2026)
const FX_RATES: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.36,
  AUD: 1.53, CHF: 0.89, CNY: 7.24, INR: 83.1, MXN: 17.2,
};

export const currencyConverter: ComputeFn = (i) => {
  const amount = num(i.amount);
  const from = i.from || "USD";
  const to = i.to || "EUR";
  const fromRate = FX_RATES[from];
  const toRate = FX_RATES[to];
  if (!fromRate || !toRate || !Number.isFinite(amount)) return { converted: NaN, exchangeRate: NaN, inverseRate: NaN };
  const inUSD = amount / fromRate;
  const converted = inUSD * toRate;
  const rate = toRate / fromRate;
  return { converted, exchangeRate: rate, inverseRate: 1 / rate };
};

// ---------------- STOCK RETURN ----------------

export const stockReturn: ComputeFn = (i) => {
  const startPrice = num(i.startPrice);
  const endPrice = num(i.endPrice);
  const shares = num(i.shares) || 1;
  const dividends = num(i.dividends) || 0;
  const years = num(i.years);
  if (startPrice <= 0) return { totalReturn: NaN, cagr: NaN, profitLoss: NaN, totalValue: NaN };
  const totalReturn = ((endPrice - startPrice + dividends) / startPrice) * 100;
  const totalValue = endPrice * shares;
  const profitLoss = (endPrice - startPrice) * shares + dividends;
  let cagr = NaN;
  if (Number.isFinite(years) && years > 0) {
    cagr = (Math.pow(endPrice / startPrice, 1 / years) - 1) * 100;
  }
  return { totalReturn, cagr, profitLoss, totalValue };
};

// ---------------- TAX BRACKET ----------------

// 2024 Federal tax brackets
const BRACKETS: Record<string, [number, number][]> = {
  single: [[0, 0.10], [11600, 0.12], [47150, 0.22], [100525, 0.24], [191950, 0.32], [243725, 0.35], [609350, 0.37]],
  married: [[0, 0.10], [23200, 0.12], [94300, 0.22], [201050, 0.24], [383900, 0.32], [487450, 0.35], [731200, 0.37]],
  "married-separate": [[0, 0.10], [11600, 0.12], [47150, 0.22], [100525, 0.24], [191950, 0.32], [243725, 0.35], [365600, 0.37]],
  "head-of-household": [[0, 0.10], [16550, 0.12], [63100, 0.22], [100500, 0.24], [191950, 0.32], [243700, 0.35], [609350, 0.37]],
};

const STANDARD_DEDUCTION: Record<string, number> = {
  single: 14600, married: 29200, "married-separate": 14600, "head-of-household": 21900,
};

export const taxBracket: ComputeFn = (i) => {
  const grossIncome = num(i.grossIncome);
  const filingStatus = i.filingStatus || "single";
  const preTaxDeductions = num(i.preTaxDeductions) || 0;
  const itemizedDeduction = num(i.itemizedDeduction) || 0;
  const standardDed = STANDARD_DEDUCTION[filingStatus] || 14600;
  const deduction = Math.max(standardDed, itemizedDeduction);
  const agi = Math.max(0, grossIncome - preTaxDeductions);
  const taxableIncome = Math.max(0, agi - deduction);
  const brackets = BRACKETS[filingStatus] || BRACKETS.single;
  let tax = 0;
  let marginalRate = 0;
  for (let k = 0; k < brackets.length; k++) {
    const [floor, rate] = brackets[k];
    const ceiling = k + 1 < brackets.length ? brackets[k + 1][0] : Infinity;
    if (taxableIncome <= floor) break;
    tax += (Math.min(taxableIncome, ceiling) - floor) * rate;
    marginalRate = rate * 100;
  }
  const effectiveRate = grossIncome > 0 ? (tax / grossIncome) * 100 : 0;
  return {
    federalTax: tax,
    effectiveRate,
    marginalRate,
    afterTaxIncome: grossIncome - tax - preTaxDeductions,
  };
};

// ---------------- COLLEGE COST ----------------

export const collegeCost: ComputeFn = (i) => {
  const childAge = num(i.childAge);
  const yearsUntilCollege = num(i.yearsUntilCollege) || (18 - childAge);
  const currentSavings = num(i.currentSavings) || 0;
  const monthlyContrib = num(i.monthlyContribution) || 0;
  const annualReturn = num(i.annualReturn) / 100 || 0.06;
  const currentTuition = num(i.currentTuition);
  const tuitionInflation = num(i.tuitionInflation) / 100 || 0.05;
  const years = yearsUntilCollege;
  if (years <= 0 || currentTuition <= 0) return { projectedCost: NaN, projectedSavings: NaN, fundingGap: NaN, monthlySavingsNeeded: NaN };
  const projectedAnnualCost = currentTuition * Math.pow(1 + tuitionInflation, years);
  const projectedCost = projectedAnnualCost * 4;
  const r = annualReturn / 12;
  const n = years * 12;
  const fvSavings = r === 0 ? currentSavings + monthlyContrib * n : currentSavings * Math.pow(1 + r, n) + monthlyContrib * ((Math.pow(1 + r, n) - 1) / r);
  const gap = projectedCost - fvSavings;
  // Monthly needed to close gap
  const monthlySavingsNeeded = gap <= 0 ? 0 : r === 0 ? gap / n : gap * r / (Math.pow(1 + r, n) - 1);
  return {
    projectedCost,
    projectedSavings: fvSavings,
    fundingGap: Math.max(0, gap),
    monthlySavingsNeeded,
  };
};

// ---------------- CAR DEPRECIATION ----------------

export const carDepreciation: ComputeFn = (i) => {
  const purchasePrice = num(i.purchasePrice);
  const depreciationRate = num(i.depreciationRate) || 15;
  const years = num(i.years) || 5;
  if (purchasePrice <= 0) return { currentValue: NaN, totalDepreciation: NaN, annualDepreciation: NaN, percentLost: NaN };
  const currentValue = purchasePrice * Math.pow(1 - depreciationRate / 100, years);
  const totalDepreciation = purchasePrice - currentValue;
  return {
    currentValue,
    totalDepreciation,
    annualDepreciation: totalDepreciation / years,
    percentLost: (totalDepreciation / purchasePrice) * 100,
  };
};

// ---------------- EMERGENCY FUND ----------------

export const emergencyFund: ComputeFn = (i) => {
  const housing = num(i.housing) || 0;
  const utilities = num(i.utilities) || 0;
  const food = num(i.food) || 0;
  const transportation = num(i.transportation) || 0;
  const insurance = num(i.insurance) || 0;
  const other = num(i.other) || 0;
  const currentFund = num(i.currentFund) || 0;
  const monthlySavings = num(i.monthlySavings) || 0;
  const targetMonths = num(i.targetMonths) || 6;
  const monthlyExpenses = housing + utilities + food + transportation + insurance + other;
  const target = monthlyExpenses * targetMonths;
  const gap = Math.max(0, target - currentFund);
  const monthsToGoal = monthlySavings > 0 ? gap / monthlySavings : NaN;
  const progressPct = target > 0 ? Math.min(100, (currentFund / target) * 100) : 0;
  return {
    targetFund: target,
    monthsToGoal,
    progressPct,
    monthlyExpenses,
  };
};

// ---------------- BUDGET ----------------

export const budget: ComputeFn = (i) => {
  const income = num(i.income);
  const housing = num(i.housing) || 0;
  const food = num(i.food) || 0;
  const transportation = num(i.transportation) || 0;
  const utilities = num(i.utilities) || 0;
  const healthcare = num(i.healthcare) || 0;
  const entertainment = num(i.entertainment) || 0;
  const savings = num(i.savings) || 0;
  const other = num(i.other) || 0;
  const totalExpenses = housing + food + transportation + utilities + healthcare + entertainment + savings + other;
  const surplus = income - totalExpenses;
  const savingsRate = income > 0 ? (savings / income) * 100 : 0;
  return {
    surplus,
    totalExpenses,
    savingsRate,
    housingPercent: income > 0 ? (housing / income) * 100 : NaN,
  };
};

// ---------------- LEASING VS BUYING ----------------

export const leasingVsBuying: ComputeFn = (i) => {
  const vehiclePrice = num(i.vehiclePrice);
  const downPayment = num(i.downPayment) || 0;
  const monthlyLoan = num(i.monthlyLoan);
  const loanMonths = num(i.loanMonths) || 60;
  const monthlyLease = num(i.monthlyLease);
  const leaseMonths = num(i.leaseMonths) || 36;
  const residualValue = num(i.residualValue) || 0;
  const depreciationRate = num(i.depreciationRate) || 15;
  if (!Number.isFinite(vehiclePrice)) return { buyingCost: NaN, leasingCost: NaN, difference: NaN, recommendation: "—" };
  const years = 5;
  const valueAfter5 = vehiclePrice * Math.pow(1 - depreciationRate / 100, years);
  // Buying: down + payments for loan term, then own car
  const loanPeriod = Math.min(loanMonths, years * 12);
  const buyingCost = downPayment + monthlyLoan * loanPeriod - valueAfter5;
  // Leasing: payments for lease term(s) over 5 years, no residual
  const leasingCost = monthlyLease * (years * 12);
  const difference = buyingCost - leasingCost;
  return {
    buyingCost: Math.max(0, buyingCost),
    leasingCost,
    difference: Math.abs(difference),
    recommendation: difference < 0 ? -1 : 1, // -1 = buying cheaper, 1 = leasing cheaper
  };
};

// ---------------- SALARY ----------------

export const salary: ComputeFn = (i) => {
  const annualSalary = num(i.annualSalary);
  const hoursPerWeek = num(i.hoursPerWeek) || 40;
  const weeksPerYear = num(i.weeksPerYear) || 52;
  if (!Number.isFinite(annualSalary) || hoursPerWeek <= 0) return { hourly: NaN, monthly: NaN, biweekly: NaN, weekly: NaN };
  const totalHours = hoursPerWeek * weeksPerYear;
  return {
    hourly: annualSalary / totalHours,
    monthly: annualSalary / 12,
    biweekly: annualSalary / 26,
    weekly: annualSalary / weeksPerYear,
  };
};

// ---------------- HOURLY WAGE ----------------

export const hourlyWage: ComputeFn = (i) => {
  const hourly = num(i.hourlyRate);
  const hoursPerWeek = num(i.hoursPerWeek) || 40;
  const weeksPerYear = num(i.weeksPerYear) || 52;
  if (!Number.isFinite(hourly) || hoursPerWeek <= 0) return { annualSalary: NaN, monthly: NaN, biweekly: NaN, weekly: NaN };
  const annual = hourly * hoursPerWeek * weeksPerYear;
  return {
    annualSalary: annual,
    monthly: annual / 12,
    biweekly: annual / 26,
    weekly: hourly * hoursPerWeek,
  };
};

// ---------------- PAYCHECK ----------------

export const paycheck: ComputeFn = (i) => {
  const grossSalary = num(i.grossSalary);
  const payFrequency = i.payFrequency || "biweekly";
  const filingStatus = i.filingStatus || "single";
  const retirement401k = num(i.retirement401k) || 0;
  const healthInsurance = num(i.healthInsurance) || 0;
  const otherDeductions = num(i.otherDeductions) || 0;
  const stateRate = num(i.stateTaxRate) || 5;
  const periodsPerYear: Record<string, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };
  const periods = periodsPerYear[payFrequency] || 26;
  const annualGross = grossSalary * periods;
  const annual401k = retirement401k * periods;
  // Federal tax estimate using annual equivalent
  const standardDed = filingStatus === "married" ? 29200 : 14600;
  const taxableIncome = Math.max(0, annualGross - annual401k - standardDed);
  const brackets = BRACKETS[filingStatus] || BRACKETS.single;
  let annualFedTax = 0;
  for (let k = 0; k < brackets.length; k++) {
    const [floor, rate] = brackets[k];
    const ceiling = k + 1 < brackets.length ? brackets[k + 1][0] : Infinity;
    if (taxableIncome <= floor) break;
    annualFedTax += (Math.min(taxableIncome, ceiling) - floor) * rate;
  }
  // FICA
  const ssTaxable = Math.min(annualGross, 168600);
  const annualSS = ssTaxable * 0.062;
  const annualMedicare = annualGross * 0.0145;
  const annualStateTax = taxableIncome * (stateRate / 100);
  const annualNet = annualGross - annualFedTax - annualSS - annualMedicare - annualStateTax - annual401k - healthInsurance * periods - otherDeductions * periods;
  return {
    netPay: annualNet / periods,
    federalTax: annualFedTax / periods,
    ssTax: annualSS / periods,
    medicareTax: annualMedicare / periods,
    stateTax: annualStateTax / periods,
  };
};

export const wave2Engines: Record<string, import("../types").ComputeFn> = {
  "auto-loan": autoLoan,
  retirement,
  "debt-payoff": debtPayoff,
  inflation,
  apr,
  "home-affordability": homeAffordability,
  "rental-yield": rentalYield,
  "net-worth": netWorth,
  dividend,
  currency: currencyConverter,
  "stock-return": stockReturn,
  "tax-bracket": taxBracket,
  "college-cost": collegeCost,
  "car-depreciation": carDepreciation,
  "emergency-fund": emergencyFund,
  budget,
  "leasing-vs-buying": leasingVsBuying,
  salary,
  "hourly-wage": hourlyWage,
  paycheck,
};
