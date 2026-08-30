import type { ComputeFn } from "../types";
import { num } from "../utils";

/* Wave 3 Round 4 — additional Finance engines. Pure functions, USD. Invalid → NaN. */

const finite = (x: number) => Number.isFinite(x);

// Debt-to-income ratio: monthly debt as a percentage of gross monthly income.
const debtToIncome: ComputeFn = (i) => {
  const monthlyDebt = num(i.monthlyDebt);
  const grossMonthlyIncome = num(i.grossMonthlyIncome);
  if (![monthlyDebt, grossMonthlyIncome].every(finite) || grossMonthlyIncome <= 0)
    return { dti: NaN, rating: "—" };
  const dti = (monthlyDebt / grossMonthlyIncome) * 100;
  const rating = dti < 36 ? "Healthy" : dti <= 43 ? "Manageable" : "High";
  return { dti, rating };
};

// Rule of 72: approximate years for money to double at a given annual rate.
const ruleOf72: ComputeFn = (i) => {
  const annualRate = num(i.annualRate);
  if (!finite(annualRate) || annualRate <= 0) return { yearsToDouble: NaN };
  return { yearsToDouble: 72 / annualRate };
};

// Savings goal: months of contributions needed to reach a target balance.
const savingsGoal: ComputeFn = (i) => {
  const goalAmount = num(i.goalAmount);
  const currentSavings = num(i.currentSavings);
  const monthlyContribution = num(i.monthlyContribution);
  const annualRate = num(i.annualRate);
  if (![goalAmount, currentSavings, monthlyContribution, annualRate].every(finite))
    return { monthsToGoal: NaN, yearsToGoal: NaN };
  if (currentSavings >= goalAmount) return { monthsToGoal: 0, yearsToGoal: 0 };
  const r = annualRate / 100 / 12;
  let months: number;
  if (r === 0) {
    if (monthlyContribution <= 0) return { monthsToGoal: NaN, yearsToGoal: NaN };
    months = (goalAmount - currentSavings) / monthlyContribution;
  } else {
    const numerator = goalAmount * r + monthlyContribution;
    const denominator = currentSavings * r + monthlyContribution;
    if (numerator <= 0 || denominator <= 0 || numerator <= denominator)
      return { monthsToGoal: NaN, yearsToGoal: NaN };
    months = Math.log(numerator / denominator) / Math.log(1 + r);
  }
  if (!finite(months) || months < 0) return { monthsToGoal: NaN, yearsToGoal: NaN };
  return { monthsToGoal: Math.ceil(months), yearsToGoal: Math.ceil(months) / 12 };
};

// Future value: lump sum compounded n times per year over t years.
const futureValue: ComputeFn = (i) => {
  const presentValue = num(i.presentValue);
  const annualRate = num(i.annualRate);
  const years = num(i.years);
  const compoundsPerYear = num(i.compoundsPerYear) || 12;
  if (![presentValue, annualRate, years].every(finite) || compoundsPerYear <= 0)
    return { futureValue: NaN, totalInterest: NaN };
  const r = annualRate / 100;
  const fv = presentValue * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * years);
  return { futureValue: fv, totalInterest: fv - presentValue };
};

// Present value: today's worth of a future amount, discounted.
const presentValue: ComputeFn = (i) => {
  const futureValueIn = num(i.futureValue);
  const annualRate = num(i.annualRate);
  const years = num(i.years);
  const compoundsPerYear = num(i.compoundsPerYear) || 12;
  if (![futureValueIn, annualRate, years].every(finite) || compoundsPerYear <= 0)
    return { presentValue: NaN };
  const r = annualRate / 100;
  const pv = futureValueIn / Math.pow(1 + r / compoundsPerYear, compoundsPerYear * years);
  return { presentValue: pv };
};

// Annuity payment: fixed periodic payment to amortize a principal.
const annuityPayment: ComputeFn = (i) => {
  const principal = num(i.principal);
  const annualRate = num(i.annualRate);
  const years = num(i.years);
  const paymentsPerYear = num(i.paymentsPerYear) || 12;
  if (![principal, annualRate, years].every(finite) || paymentsPerYear <= 0 || years <= 0)
    return { payment: NaN, totalPaid: NaN, totalInterest: NaN };
  const r = annualRate / 100 / paymentsPerYear;
  const N = years * paymentsPerYear;
  const payment = r === 0 ? principal / N : (principal * r) / (1 - Math.pow(1 + r, -N));
  const totalPaid = payment * N;
  return { payment, totalPaid, totalInterest: totalPaid - principal };
};

// Salary raise: new salary after a percentage increase.
const salaryRaise: ComputeFn = (i) => {
  const currentSalary = num(i.currentSalary);
  const raisePercent = num(i.raisePercent);
  if (![currentSalary, raisePercent].every(finite))
    return { newSalary: NaN, raiseAmount: NaN, monthlyIncrease: NaN };
  const raiseAmount = (currentSalary * raisePercent) / 100;
  const newSalary = currentSalary + raiseAmount;
  return { newSalary, raiseAmount, monthlyIncrease: raiseAmount / 12 };
};

// FICA tax (2024): Social Security + Medicare withholding on wages.
const ficaTax: ComputeFn = (i) => {
  const annualWages = num(i.annualWages);
  if (!finite(annualWages) || annualWages < 0)
    return { socialSecurity: NaN, medicare: NaN, totalFica: NaN };
  const ssWageBase = 168600; // 2024 Social Security wage base
  const socialSecurity = 0.062 * Math.min(annualWages, ssWageBase);
  const medicare =
    0.0145 * annualWages +
    (annualWages > 200000 ? 0.009 * (annualWages - 200000) : 0);
  return { socialSecurity, medicare, totalFica: socialSecurity + medicare };
};

// Capital gains tax: tax owed and net profit on an asset sale.
const capitalGainsTax: ComputeFn = (i) => {
  const purchasePrice = num(i.purchasePrice);
  const salePrice = num(i.salePrice);
  const taxRate = num(i.taxRate);
  if (![purchasePrice, salePrice, taxRate].every(finite))
    return { capitalGain: NaN, taxOwed: NaN, netProfit: NaN };
  const capitalGain = salePrice - purchasePrice;
  const taxOwed = capitalGain > 0 ? (capitalGain * taxRate) / 100 : 0;
  return { capitalGain, taxOwed, netProfit: capitalGain - taxOwed };
};

// Student loan: standard monthly amortized payment and totals.
const studentLoan: ComputeFn = (i) => {
  const loanAmount = num(i.loanAmount);
  const annualRate = num(i.annualRate);
  const years = num(i.years);
  if (![loanAmount, annualRate, years].every(finite) || years <= 0)
    return { monthlyPayment: NaN, totalPaid: NaN, totalInterest: NaN };
  const r = annualRate / 100 / 12;
  const N = years * 12;
  const monthlyPayment =
    r === 0 ? loanAmount / N : (loanAmount * r) / (1 - Math.pow(1 + r, -N));
  const totalPaid = monthlyPayment * N;
  return { monthlyPayment, totalPaid, totalInterest: totalPaid - loanAmount };
};

export const financeR4Engines: Record<string, ComputeFn> = {
  "debt-to-income": debtToIncome,
  "rule-of-72": ruleOf72,
  "savings-goal": savingsGoal,
  "future-value": futureValue,
  "present-value": presentValue,
  "annuity-payment": annuityPayment,
  "salary-raise": salaryRaise,
  "fica-tax": ficaTax,
  "capital-gains-tax": capitalGainsTax,
  "student-loan": studentLoan,
};
