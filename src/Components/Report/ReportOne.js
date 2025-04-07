import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import transaction from "../../images/transaction.svg";

function ReportOne() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Report </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div>
              <div class="reservation-box">
                <div class="top">
                  <div class="static">
                    <div class="input-container" id="date-picker-container">
                      <label for="date-from">Starting Month</label>
                      <input type="date" id="date-checkin" class="date-field" />
                    </div>
                  </div>
                  <div class="flex">
                    <div class="input-container" id="date-picker-container">
                      <label for="date-from">Starting Month</label>
                      <input
                        type="date"
                        id="date-checkout"
                        class="date-field"
                      />
                    </div>
                    <div class="button-container">
                      <span class="button ok">This Month</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transaction-box">
                <div className="transaction-text">
                  <h3>Transaction</h3>
                  <p>0</p>
                </div>
                <div className="transaction-text">
                  <h3>Net Sales</h3>
                  <p>0</p>
                </div>
                <div className="transaction-text">
                  <h3>Unpaid Balance</h3>
                  <p>0</p>
                </div>
              </div>

              <div className="py-60">
                <div className="transaction-img">
                  <img src={transaction} className="img-fluid" alt="" />
                </div>
                <div className="transaction-text">
                  <p>No transaction available to generate report</p>
                </div>
              </div>
              <div className="purchase-box-flex">
                <div className="purchase-box-main">
                  <div className="purchase-box">
                    <ShoppingCart />
                  </div>
                  <div className="purchase-text">
                    <h4>Purchase</h4>
                    <div className="purchase-text-box">
                      <h6>Purchase #1</h6>
                      <p>12 Dec 24</p>
                    </div>
                  </div>
                </div>
                <div className="purchase-box-paid">
                  <h4>₹ 0</h4>
                  <p>Fully Paid</p>
                </div>
              </div>
              <div className="report-button">
                <button className="report-download">Download</button>
                <Link to="/reportTwo" className="report-share text-center">
                  Share
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0"></div>
      </div>
    </div>
  );
}

export default ReportOne;
