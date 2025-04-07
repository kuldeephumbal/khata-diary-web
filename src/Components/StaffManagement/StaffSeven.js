import React from "react";
import StaffBook from "./StaffBook";
import { Link } from "react-router-dom";
import { ArrowUp, BadgeIndianRupee } from "lucide-react";
import user from "../../images/userOne.svg";
import DateRangeSelect from "../StickyNotes/DateRangeSelect";

function StaffSeven() {
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
            <div className="reports-main mb-0">
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
            <div className="staff-seven-salary">
              <div className="staff-user mb-0">
                <img src={user} className="img-fluid" alt="" />
                <h4>Varun Kubal</h4>
              </div>
              <div className="salary-monthly">
                <h5>Monthly Salary</h5>
                <h6>₹ 5,000</h6>
              </div>
            </div>
            <div className="border-seven"></div>
            <div className="view-summary-seven">
              <h4>
                1 November - 30 November total: <span>₹2,000</span>
              </h4>
              <Link>View Summary</Link>
            </div>
            <div className="payment-balance py-20 pb-0">
              <h4>PAYMENTS</h4>
              <h4>PAID</h4>
              <h4>BALANCE/DUE</h4>
            </div>
            <div className="payment-balance-bg">
              <div className="payment-balance py-20 pb-0">
                <div className="payment-time">
                  <h5>15 Nov 24</h5>
                  <p>10:15 AM</p>
                </div>
                <div className="payment-paid">
                  <h5>₹6,000</h5>
                </div>
                <div className="payment-paid">
                  <h6>₹0</h6>
                </div>
              </div>
              <div className="border-seven mb-2"></div>
              <div className="payment-mode-work">
                <h6>Adam worked really well. he deserves a bonus next month</h6>
                <p>
                  Payment mode: <span>Cash</span>
                </p>
              </div>
            </div>
            <div className="payment-balance-bg">
              <div className="payment-balance py-20 pb-0">
                <div className="payment-time">
                  <h5>15 Nov 24</h5>
                  <p>10:15 AM</p>
                </div>
                <div className="payment-paid">
                  <h5>₹6,000</h5>
                </div>
                <div className="payment-paid payment-color">
                  <h6>₹1000</h6>
                </div>
              </div>
              <div className="border-seven mb-2"></div>
              <div className="payment-mode-work">
                <p>
                  Payment mode: <span>Cash</span>
                </p>
              </div>
            </div>
            <div className="text-end mt-4 mb-3">
              <button to="/StaffSix" className="add-payment">
                Add Payment <BadgeIndianRupee />
              </button>
            </div>
            <div className="w-100 mt-1">
              <Link to="/StaffEight" className="address-next">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffSeven;
