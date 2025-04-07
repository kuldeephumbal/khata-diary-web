import "./Main.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Scrolltotop from "./Scrolltotop";
import MainIndex from "./Components/MainIndex";
import Index from "./Components/Inventory/Index";
import IndexTwo from "./Components/Inventory/IndexTwo";
import Navbar from "./Components/Navbar";
import Signin from "./Components/Signin";
import Onboarding from "./Components/Onboarding/MultiStep";
import SignUp from "./Components/Onboarding/SignUp";
import SignUpto from "./Components/Onboarding/SignUpto";
import SendOtp from "./Components/Onboarding/SendOtp";
import ExpenseEmpty from "./Components/Expense/ExpenseEmpty";
import ExpenseAdded from "./Components/Expense/ExpenseAdded";
import ViewSummery from "./Components/Expense/ViewSummery";
import Cashbook from "./Components/Cashbook/Cashbook";
import Cashbooktwo from "./Components/Cashbook/Cashbooktwo";
import Cashbookthree from "./Components/Cashbook/Cashbookthree";
import Cashbookfour from "./Components/Cashbook/Cashbookfour";

import EditBudget from "./Components/Expense/EditBudget";
import EditBudgetCategories from "./Components/Expense/EditBudgetCategories";
import Budget from "./Components/Expense/Budget";
import NotesOne from "./Components/StickyNotes/NotesOne";
import NotesTwo from "./Components/StickyNotes/NotesTwo";
import NotesThree from "./Components/StickyNotes/NotesThree";
import BusinessCardOne from "./Components/BusinessCard/BusinessCardOne";
import BusinessType from "./Components/BusinessCard/BusinessType";
import BusinessCategory from "./Components/BusinessCard/BusinessCategory";
import BusinessName from "./Components/BusinessCard/BusinessName";
import AddBusinessName from "./Components/BusinessCard/AddBusinessName";
import Blogs from "./Components/Blogs/Blogs";
import Setting from "./Components/HamburgerScreens/Setting";
import PaymentSetting from "./Components/HamburgerScreens/PaymentSetting";
import SmsSetting from "./Components/HamburgerScreens/SmsSetting";
import DeleteAccount from "./Components/HamburgerScreens/DeleteAccount";
import DeleteType from "./Components/HamburgerScreens/DeleteType";
import DeleteInformation from "./Components/HamburgerScreens/DeleteInformation";
import MySession from "./Components/HamburgerScreens/MySession";
import DeleteQuery from "./Components/HamburgerScreens/DeleteQuery";
import CamplaingBulkMessaging from "./Components/Campaingbulkmessaging/CamplaingBulkMessaging";
import AuthenticityDelivered from "./Components/HamburgerScreens/AuthenticityDelivered";
import StaffOne from "./Components/StaffManagement/StaffOne";
import StaffTwo from "./Components/StaffManagement/StaffTwo";
import StaffThree from "./Components/StaffManagement/StaffThree";
import StaffFive from "./Components/StaffManagement/StaffFive";
import StaffSix from "./Components/StaffManagement/StaffSix";
import StaffSeven from "./Components/StaffManagement/StaffSeven";
import StaffEight from "./Components/StaffManagement/StaffEight";
import StaffFour from "./Components/StaffManagement/StaffFour";
import PortalOne from "./Components/EmployeePortal/PortalOne";
import PortalTwo from "./Components/EmployeePortal/PortalTwo";
import PortalThree from "./Components/EmployeePortal/PortalThree";
import ReportOne from "./Components/Report/ReportOne";
import ReportTwo from "./Components/Report/ReportTwo";
import ReportThree from "./Components/Report/ReporThree";
import ReportFour from "./Components/Report/ReporFour";
import SalesOne from "./Components/BillingInventoryFlow/SalesOne";
import SalesTwo from "./Components/BillingInventoryFlow/SalesTwo";
import SalesThree from "./Components/BillingInventoryFlow/SalesThree";
import SalesFour from "./Components/BillingInventoryFlow/SalesFour";
import SalesFive from "./Components/BillingInventoryFlow/SalesFive";
import SalesSix from "./Components/BillingInventoryFlow/SalesSix";
import SalesSeven from "./Components/BillingInventoryFlow/SalesSeven";
import SalesEight from "./Components/BillingInventoryFlow/SalesEight";
import PurchasesTwo from "./Components/BillingInventoryFlow/PurchasesTwo";
import PurchasesThree from "./Components/BillingInventoryFlow/PurchasesThree";
import PurchasesFour from "./Components/BillingInventoryFlow/PurchasesFour";
import PurchasesFive from "./Components/BillingInventoryFlow/PurchasesFive";
import PurchasesSix from "./Components/BillingInventoryFlow/PurchasesSix";
import QuotationTwo from "./Components/BillingInventoryFlow/QuotationTwo";
import QuotationThree from "./Components/BillingInventoryFlow/QuotationThree";
import QuotationFour from "./Components/BillingInventoryFlow/QuotationFour";
import Notification from "./Components/Notification/Notification";
import Shop from "./Components/Shop/Shop";
import MonthlyEmi from "./Components/BankingFinance/MonthlyEmi";
import FlatInterest from "./Components/BankingFinance/FlatInterest";
import SimpleInterest from "./Components/BankingFinance/SimpleInterest";
import InterestPayout from "./Components/BankingFinance/InterestPayout";
import DepositReceipt from "./Components/BankingFinance/DepositReceipt";
import RecurringDeposit from "./Components/BankingFinance/RecurringDeposit";
import InterestCumulative from "./Components/BankingFinance/InterestCumulative";
import CompoundInterest from "./Components/BankingFinance/CompoundInterest";
import PublicProvident from "./Components/GovernmentSchemes/PublicProvident";
import SukanyaYojana from "./Components/GovernmentSchemes/SukanyaYojana";
import SeniorCitizen from "./Components/GovernmentSchemes/SeniorCitizen";
import MahilaSamman from "./Components/GovernmentSchemes/MahilaSamman";
import FinanceCalculators from "./Components/GovernmentSchemes/FinanceCalculators";
import NationalSaving from "./Components/PostOffice/NationalSaving";
import TimeDeposit from "./Components/PostOffice/TimeDeposit";
import MonthlyIncome from "./Components/PostOffice/MonthlyIncome";
import SystemicInvestment from "./Components/MutualFund/SystemicInvestment";
import SystematicWithdrawal from "./Components/MutualFund/SystematicWithdrawal";
import EquityLinked from "./Components/MutualFund/EquityLinked";
import LumpSum from "./Components/MutualFund/LumpSum";
import CompoundAnnual from "./Components/MutualFund/CompoundAnnual ";
import NationalPension from "./Components/RetirementPlans/NationalPension";
import EmployeeProvident from "./Components/RetirementPlans/EmployeeProvident";
import GeneralProvident from "./Components/RetirementPlans/GeneralProvident";
import Gratuity from "./Components/RetirementPlans/Gratuity";
import FinancialIndependence from "./Components/RetirementPlans/FinancialIndependence";
import TaxCalculator from "./Components/TaxCalculator/TaxCalculator";
import InflationCalculator from "./Components/OtherIssue/InflationCalculator";
import CustomerProfile from "./Components/CustomerProfile/CustomerProfile";
import CustomerLedgerFlow from "./Components/CustomerLedgerFlow/CustomerLedgerFlow";
import SupplierProfile from "./Components/SupplierProfile/SupplierProfile";
import SalaryCalculator from "./Components/OtherIssue/SalaryCalculator";

import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Router>
        <Scrolltotop />
        <Navbar />
        <Routes>
          <Route path="/MainIndex" element={<MainIndex />} />
          <Route path="/" element={<CustomerLedgerFlow />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/IndexTwo" element={<IndexTwo />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/ExpenseEmpty" element={<ExpenseEmpty />} />
          <Route path="/ExpenseAdded" element={<ExpenseAdded />} />
          <Route path="/ViewSummery" element={<ViewSummery />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUpto" element={<SignUpto />} />
          <Route path="/SendOtp" element={<SendOtp />} />
          <Route path="/Cashbook" element={<Cashbook />} />
          <Route path="/Cashbooktwo" element={<Cashbooktwo />} />
          <Route path="/Cashbookthree" element={<Cashbookthree />} />
          <Route path="/Cashbookfour" element={<Cashbookfour />} />

          <Route path="/EditBudget" element={<EditBudget />} />
          <Route
            path="/EditBudgetCategories"
            element={<EditBudgetCategories />}
          />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/NotesOne" element={<NotesOne />} />
          <Route path="/NotesTwo" element={<NotesTwo />} />
          <Route path="/NotesThree" element={<NotesThree />} />
          <Route path="/BusinessCardOne" element={<BusinessCardOne />} />
          <Route path="/BusinessType" element={<BusinessType />} />
          <Route path="/BusinessCategory" element={<BusinessCategory />} />
          <Route path="/BusinessName" element={<BusinessName />} />
          <Route path="/AddBusinessName" element={<AddBusinessName />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/PaymentSetting" element={<PaymentSetting />} />
          <Route path="/SmsSetting" element={<SmsSetting />} />
          <Route path="/DeleteAccount" element={<DeleteAccount />} />
          <Route path="/DeleteType" element={<DeleteType />} />
          <Route path="/DeleteInformation" element={<DeleteInformation />} />
          <Route path="/MySession" element={<MySession />} />
          <Route path="/DeleteQuery" element={<DeleteQuery />} />
          <Route path="/StaffOne" element={<StaffOne />} />

          <Route
            path="/AuthenticityDelivered"
            element={<AuthenticityDelivered />}
          />
          <Route
            path="/CamplaingBulkMessaging"
            element={<CamplaingBulkMessaging />}
          />
          <Route path="/StaffTwo" element={<StaffTwo />} />
          <Route path="/StaffThree" element={<StaffThree />} />
          <Route path="/StaffFive" element={<StaffFive />} />
          <Route path="/StaffSix" element={<StaffSix />} />
          <Route path="/StaffSeven" element={<StaffSeven />} />
          <Route path="/StaffEight" element={<StaffEight />} />
          <Route path="/StaffFour" element={<StaffFour />} />
          <Route path="/PortalOne" element={<PortalOne />} />
          <Route path="/PortalTwo" element={<PortalTwo />} />
          <Route path="/PortalThree" element={<PortalThree />} />
          <Route path="/reportOne" element={<ReportOne />} />
          <Route path="/reportTwo" element={<ReportTwo />} />
          <Route path="/reportThree" element={<ReportThree />} />
          <Route path="/reportFour" element={<ReportFour />} />
          <Route path="/salesOne" element={<SalesOne />} />
          <Route path="/salesTwo" element={<SalesTwo />} />
          <Route path="/salesThree" element={<SalesThree />} />
          <Route path="/salesFour" element={<SalesFour />} />
          <Route path="/salesFive" element={<SalesFive />} />
          <Route path="/salesSix" element={<SalesSix />} />
          <Route path="/salesSeven" element={<SalesSeven />} />
          <Route path="/salesEight" element={<SalesEight />} />
          <Route path="/purchasesTwo" element={<PurchasesTwo />} />
          <Route path="/purchasesThree" element={<PurchasesThree />} />
          <Route path="/purchasesFour" element={<PurchasesFour />} />
          <Route path="/purchasesFive" element={<PurchasesFive />} />
          <Route path="/purchasesSix" element={<PurchasesSix />} />
          <Route path="/quotationTwo" element={<QuotationTwo />} />
          <Route path="/quotationThree" element={<QuotationThree />} />
          <Route path="/quotationFour" element={<QuotationFour />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/monthlyEmi" element={<MonthlyEmi />} />
          <Route path="/flatInterest" element={<FlatInterest />} />
          <Route path="/simpleInterest" element={<SimpleInterest />} />
          <Route path="/interestPayout" element={<InterestPayout />} />
          <Route path="/depositReceipt" element={<DepositReceipt />} />
          <Route path="/recurring-deposit" element={<RecurringDeposit />} />
          <Route path="/interestCumulative" element={<InterestCumulative />} />
          <Route path="/compoundInterest" element={<CompoundInterest />} />
          <Route path="/publicProvident" element={<PublicProvident />} />
          <Route path="/sukanyaYojana" element={<SukanyaYojana />} />
          <Route path="/seniorCitizen" element={<SeniorCitizen />} />
          <Route path="/mahilaSamman" element={<MahilaSamman />} />
          <Route path="/financeCalculators" element={<FinanceCalculators />} />
          <Route path="/nationalSaving" element={<NationalSaving />} />
          <Route path="/timeDeposit" element={<TimeDeposit />} />
          <Route path="/monthlyIncome" element={<MonthlyIncome />} />
          <Route path="/systemicInvestment" element={<SystemicInvestment />} />
          <Route
            path="/systemicWithdrawal"
            element={<SystematicWithdrawal />}
          />
          <Route path="/equityLinked" element={<EquityLinked />} />
          <Route path="/lumpSum" element={<LumpSum />} />
          <Route path="/compoundAnnual" element={<CompoundAnnual />} />
          <Route path="/nationalPension" element={<NationalPension />} />
          <Route path="/employeeProvident" element={<EmployeeProvident />} />
          <Route path="/generalProvident" element={<GeneralProvident />} />
          <Route path="/gratuity" element={<Gratuity />} />
          <Route path="/taxCalculator" element={<TaxCalculator />} />
          <Route
            path="/inflationCalculator"
            element={<InflationCalculator />}
          />
          <Route
            path="/financialIndependence"
            element={<FinancialIndependence />}
          />
          <Route path="/salary-calculator" element={<SalaryCalculator />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          {/* <Route
            path="/customer-ledger-flow"
            element={<CustomerLedgerFlow />}
          /> */}
          <Route path="/supplier-profile" element={<SupplierProfile />} />

        </Routes>
      </Router>
      <Toaster /> 

    </div>
  );
}

export default App;
