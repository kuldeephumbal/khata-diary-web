import React from "react";
import StaffBook from "./StaffBook";
import { Link } from "react-router-dom";
import { ArrowUp, BadgeIndianRupee } from "lucide-react";
import user from "../../images/userOne.svg";
import DateRangeSelect from "../StickyNotes/DateRangeSelect";

function StaffFour() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Staff Management </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <StaffBook />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="reports-main">
              <div className="total-due">
                <h4>
                  Total Due <ArrowUp size={16} />
                </h4>
                <p>₹2,000</p>
              </div>
              <div>
                <button className="reports-btn">Reports</button>
              </div>
            </div>
            <div className="py-20 pt-0 date-range-bg">
              <DateRangeSelect />
            </div>
            <div className="view-summary-seven">
              <h4>
                1 November - 30 November total: <span>₹2,000</span>
              </h4>
              <Link>View Summary</Link>
            </div>

            <div className="text-end mt-4 mb-3">
              <button to="/StaffSix" className="add-payment">
                Add Payment <BadgeIndianRupee />
              </button>
            </div>
            <div className="w-100 mt-1">
              <Link to="/StaffFive" className="address-next">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffFour;
