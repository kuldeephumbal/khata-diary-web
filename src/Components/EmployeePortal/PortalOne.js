import React from "react";
import { Link } from "react-router-dom";
import PortalBook from "./PortalBook";
import DateRangeSelect from "../StickyNotes/DateRangeSelect";

function PortalOne() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Employee portal </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <PortalBook />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="text-center py-50 pt-0">
              <DateRangeSelect />
            </div>
            <div className="view-summary-seven">
              <h4>
                1 November - 30 November total: <span>₹2,000</span>
              </h4>
              <Link to="/PortalTwo">View Summary</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalOne;
