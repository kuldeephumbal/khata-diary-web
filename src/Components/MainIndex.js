import React from "react";
import { Link } from "react-router-dom";
// import Navbar from './Navbar'

const MainIndex = () => {
  return (
    <div className="d-flex flex-column text-center align-items-center mt-4">
      <Link to={"/Index"}>Inventory</Link>
      <Link to={"/Onboarding"}>Onboarding</Link>
      <Link to={"/ExpenseEmpty"}>ExpenseEmpty</Link>
      <Link to={"/Cashbook"}>Cash Book Screen</Link>
      <Link to={"/NotesOne"}>Sticky Notes</Link>
      <Link to={"/BusinessCardOne"}>Business Card</Link>
      <Link to={"/Blogs"}>Blogs</Link>
      <Link to={"/Setting"}>Setting</Link>
      <Link to={"/CamplaingBulkMessaging"}>CamplaingBulkMessaging</Link>
      <Link to={"/StaffOne"}>Staff Management </Link>
      <Link to={"/PortalOne"}>Employee portal </Link>
      <Link to={"/reportOne"}>Report </Link>
      <Link to={"/salesOne"}>Billing/ invoice & inventory Flow </Link>
      <Link to={"/notification"}>Notification </Link>
      <Link to={"/shop"}>Shop </Link>
      <Link to={"/monthlyEmi"}>Banking Finance </Link>
      <Link to={"/customer-profile"}>Customer Profile </Link>
      <Link to={"/customer-ledger-flow"}>Customer Ledger Flow </Link>
      <Link to={"/supplier-profile"}>Supplier Profile </Link>
    </div>
  );
};

export default MainIndex;
