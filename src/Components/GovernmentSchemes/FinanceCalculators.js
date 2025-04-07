// import React from "react";
// import FinaceOne from "../../images/Finance/finance-one.svg";
// import FinaceTwo from "../../images/Finance/finance-Two.svg";
// import interest from "../../images/Finance/Interest.svg";
// import cumulative from "../../images/Finance/cumulative.svg";
// import recurring from "../../images/Finance/recurring.svg";
// import simple from "../../images/Finance/Simple.svg";
// import public_one from "../../images/Finance/Public.svg";
// import sukanya from "../../images/Finance/sukanya.svg";
// import senior from "../../images/Finance/senior.svg";
// import mahila from "../../images/Finance/mahila.svg";
// import national from "../../images/Finance/National.svg";
// import income from "../../images/Finance/Income.svg";
// import time from "../../images/Finance/Time.svg";
// import systematic from "../../images/Finance/Systematic.svg";
// import withdrawal from "../../images/Finance/Withdrawal.svg";
// import equity from "../../images/Finance/Equity.svg";
// import mutualFund from "../../images/Finance/MutualFund.svg";
// import Cagr from "../../images/Finance/Cagr.svg";
// import pension from "../../images/Finance/Pension.svg";
// import employee from "../../images/Finance/Employee.svg";
// import general from "../../images/Finance/General.svg";
// import gratuity from "../../images/Finance/Gratuity.svg";
// import independence from "../../images/Finance/Independence.svg";
// import tax from "../../images/Finance/Tax.svg";
// import capital from "../../images/Finance/Capital.svg";
// import gst from "../../images/Finance/Gst.svg";
// import inflation from "../../images/Finance/Inflation.svg";
// import salary from "../../images/Finance/Salary.svg";
// import { Link } from "react-router-dom";

// const bankingCalculators = [
//   { img: FinaceOne, label: "EMI: Easy Monthly Installment" },
//   { img: FinaceTwo, label: "Interest: Cumulative Future value" },
//   { img: interest, label: "FD: Interest Payout" },
//   { img: cumulative, label: "FD: Cumulative (STDR)" },
//   { img: recurring, label: "RD: Recurring Deposit" },
//   { img: simple, label: "Simple Interest Future value" },
// ];

// const governmentSchemes = [
//   { img: public_one, label: "PPF: Public Provident Fund" },
//   { img: sukanya, label: "SSY: Sukanya Samruddhi Yojana" },
//   { img: senior, label: "SCSS: Senior Citizen Saving Scheme" },
//   { img: mahila, label: "MSSC: Mahila Samman Saving Certificate" },
// ];
// const postOfficetSchemes = [
//   { img: national, label: "NSC: National Saving Certificate" },
//   { img: income, label: "MIS: Monthly Income Scheme" },
//   { img: time, label: "TD: Time Deposit" },
// ];
// const mutualFundsSchemes = [
//   { img: systematic, label: "SIP: Systematic Investment Plan" },
//   { img: withdrawal, label: "SWP: Systematic Withdrawal plan" },
//   { img: equity, label: "ELSS: Equity Linked Saving Scheme" },
//   { img: mutualFund, label: "MF: Mutual Fund Lump sum Deposit" },
//   { img: Cagr, label: "CAGR" },
// ];
// const retirementFundsSchemes = [
//   { img: pension, label: "NPS: National Pension Scheme" },
//   { img: employee, label: "EPS: Employee Provident Fund" },
//   { img: general, label: "GPF: General Provident Fund" },
//   { img: gratuity, label: "GRT:Gratuity" },
//   {
//     img: independence,
//     label: "FIRE:- Financial Independence and Retire Early",
//   },
// ];
// const taxCalculatorsSchemes = [
//   { img: tax, label: "IT: Income Tax Calculator" },
//   { img: capital, label: "CGT: Capital Gain Tax" },
//   { img: gst, label: "GST: Goods & Service Tax" },
// ];
// const otherCalculatorsSchemes = [
//   { img: inflation, label: "IR: Inflation Calculator" },
//   { img: salary, label: "Salary Calculator" },
// ];

// const FinanceCategory = ({ title, calculators }) => (
//   <>
//     <div className="finance-heading">
//       <h3>{title}</h3>
//     </div>
//     <div className="finace-grid">
//       {calculators.map((calc, index) => (
//         <Link to={"#"} key={index} className="finance-calculators">
//           <img src={calc.img} className="img-fluid" alt={calc.label} />
//           <p>{calc.label}</p>
//         </Link>
//       ))}
//     </div>
//   </>
// );

// function FinanceCalculators() {
//   return (
//     <div className="container py-40">
//       <div className="emi-heading">
//         <h1>Finance Calculators</h1>
//       </div>
//       <FinanceCategory
//         title="Banking / Finance"
//         calculators={bankingCalculators}
//       />
//       <FinanceCategory
//         title="Government Schemes"
//         calculators={governmentSchemes}
//       />
//       <FinanceCategory title="Post Office" calculators={postOfficetSchemes} />
//       <FinanceCategory title="Mutual Funds" calculators={mutualFundsSchemes} />
//       <FinanceCategory
//         title="Retirement Funds"
//         calculators={retirementFundsSchemes}
//       />
//       <FinanceCategory
//         title="Tax Calculators"
//         calculators={taxCalculatorsSchemes}
//       />
//       <FinanceCategory
//         title="Other Calculators"
//         calculators={otherCalculatorsSchemes}
//       />
//     </div>
//   );
// }

// export default FinanceCalculators;
import React from "react";
import FinaceOne from "../../images/Finance/finance-one.svg";
import FinaceTwo from "../../images/Finance/finance-Two.svg";
import interest from "../../images/Finance/Interest.svg";
import cumulative from "../../images/Finance/cumulative.svg";
import recurring from "../../images/Finance/recurring.svg";
import simple from "../../images/Finance/Simple.svg";
import public_one from "../../images/Finance/Public.svg";
import sukanya from "../../images/Finance/sukanya.svg";
import senior from "../../images/Finance/senior.svg";
import mahila from "../../images/Finance/mahila.svg";
import national from "../../images/Finance/National.svg";
import income from "../../images/Finance/Income.svg";
import time from "../../images/Finance/Time.svg";
import systematic from "../../images/Finance/Systematic.svg";
import withdrawal from "../../images/Finance/Withdrawal.svg";
import equity from "../../images/Finance/Equity.svg";
import mutualFund from "../../images/Finance/MutualFund.svg";
import Cagr from "../../images/Finance/Cagr.svg";
import pension from "../../images/Finance/Pension.svg";
import employee from "../../images/Finance/Employee.svg";
import general from "../../images/Finance/General.svg";
import gratuity from "../../images/Finance/Gratuity.svg";
import independence from "../../images/Finance/Independence.svg";
import tax from "../../images/Finance/Tax.svg";
import capital from "../../images/Finance/Capital.svg";
import gst from "../../images/Finance/Gst.svg";
import inflation from "../../images/Finance/Inflation.svg";
import salary from "../../images/Finance/Salary.svg";
import { Link } from "react-router-dom";

const bankingCalculators = [
  {
    img: FinaceOne,
    label: "EMI: Easy Monthly Installment",
    path: "/monthlyEmi",
  },
  {
    img: FinaceTwo,
    label: "Interest: Cumulative Future value",
    path: "/interestCumulative",
  },
  {
    img: interest,
    label: "FD: Interest Payout",
    path: "/interestPayout",
  },
  {
    img: cumulative,
    label: "FD: Cumulative (STDR)",
    path: "/depositReceipt",
  },
  {
    img: recurring,
    label: "RD: Recurring Deposit",
    path: "/recurring-deposit",
  },
  {
    img: simple,
    label: "Simple Interest Future value",
    path: "#",
  },
];

const governmentSchemes = [
  {
    img: public_one,
    label: "PPF: Public Provident Fund",
    path: "/publicProvident",
  },
  {
    img: sukanya,
    label: "SSY: Sukanya Samruddhi Yojana",
    path: "/sukanyaYojana",
  },
  {
    img: senior,
    label: "SCSS: Senior Citizen Saving Scheme",
    path: "/seniorCitizen",
  },
  {
    img: mahila,
    label: "MSSC: Mahila Samman Saving Certificate",
    path: "/mahilaSamman",
  },
];

const postOfficetSchemes = [
  {
    img: national,
    label: "NSC: National Saving Certificate",
    path: "/nationalSaving",
  },
  { img: income, label: "MIS: Monthly Income Scheme", path: "/monthlyIncome" },
  { img: time, label: "TD: Time Deposit", path: "/timeDeposit" },
];

const mutualFundsSchemes = [
  {
    img: systematic,
    label: "SIP: Systematic Investment Plan",
    path: "/systemicInvestment",
  },
  {
    img: withdrawal,
    label: "SWP: Systematic Withdrawal plan",
    path: "/systemicWithdrawal",
  },
  {
    img: equity,
    label: "ELSS: Equity Linked Saving Scheme",
    path: "/equityLinked",
  },
  {
    img: mutualFund,
    label: "MF: Mutual Fund Lump sum Deposit",
    path: "/lumpSum",
  },
  { img: Cagr, label: "CAGR", path: "/compoundAnnual" },
];

const retirementFundsSchemes = [
  {
    img: pension,
    label: "NPS: National Pension Scheme",
    path: "/nationalPension",
  },
  {
    img: employee,
    label: "EPS: Employee Provident Fund",
    path: "/employeeProvident",
  },
  {
    img: general,
    label: "GPF: General Provident Fund",
    path: "/generalProvident",
  },
  { img: gratuity, label: "GRT:Gratuity", path: "/gratuity" },
  {
    img: independence,
    label: "FIRE:- Financial Independence and Retire Early",
    path: "#",
  },
];

const taxCalculatorsSchemes = [
  {
    img: tax,
    label: "IT: Income Tax Calculator",
    path: "#",
  },
  {
    img: capital,
    label: "CGT: Capital Gain Tax",
    path: "#",
  },
  { img: gst, label: "GST: Goods & Service Tax", path: "/taxCalculator" },
];

const otherCalculatorsSchemes = [
  {
    img: inflation,
    label: "IR: Inflation Calculator",
    path: "/inflationCalculator",
  },
  { img: salary, label: "Salary Calculator", path: "/salary-calculator" },
];

const FinanceCategory = ({ title, calculators }) => (
  <>
    <div className="finance-heading">
      <h3>{title}</h3>
    </div>
    <div className="finace-grid">
      {calculators.map((calc, index) => (
        <Link to={`${calc.path}`} key={index} className="finance-calculators">
          <img src={calc.img} className="img-fluid" alt={calc.label} />
          <p>{calc.label}</p>
        </Link>
      ))}
    </div>
  </>
);

function FinanceCalculators() {
  return (
    <div className="container py-40">
      <div className="emi-heading">
        <h1>Finance Calculators</h1>
      </div>
      <FinanceCategory
        title="Banking / Finance"
        calculators={bankingCalculators}
      />
      <FinanceCategory
        title="Government Schemes"
        calculators={governmentSchemes}
      />
      <FinanceCategory title="Post Office" calculators={postOfficetSchemes} />
      <FinanceCategory title="Mutual Funds" calculators={mutualFundsSchemes} />
      <FinanceCategory
        title="Retirement Funds"
        calculators={retirementFundsSchemes}
      />
      <FinanceCategory
        title="Tax Calculators"
        calculators={taxCalculatorsSchemes}
      />
      <FinanceCategory
        title="Other Calculators"
        calculators={otherCalculatorsSchemes}
      />
    </div>
  );
}

export default FinanceCalculators;
