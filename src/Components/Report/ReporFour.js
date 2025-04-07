import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ReporFour() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span>Customer Report </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="report-three-box">
              <div className="report-three-input">
                <input type="date" name="" id="" />
              </div>
              <div className="report-three-border"></div>
              <div className="report-three-input">
                <input type="date" name="" id="" />
              </div>
            </div>
            <div className="duration-month">
              <h5>Select report duration</h5>
              <select name="months" id="months">
                <option value="volvo">This Months</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="net-balance-bg">
              <div className="net-balance">
                <h5>Net Balance</h5>
                <p>₹ 1400</p>
              </div>
              <div className="border-net-four"></div>
              <div className="net-balance">
                <div className="total-entries">
                  <h5>Total</h5>
                  <h4>5 Entries</h4>
                </div>
                <div className="total-entries">
                  <h5>You gave</h5>
                  <h6 className="gave-price">₹ 1,400</h6>
                </div>
                <div className="total-entries">
                  <h5>You Got</h5>
                  <h6 className="get-price">₹ 1,400</h6>
                </div>
              </div>
            </div>
            <div className="customer-report">
              <div className="customer-name">
                <h5>Customer Name</h5>
                <p>23 Nov 24 06:53 PM</p>
              </div>
              <div className="customer-name-rupees">
                <h6>₹ 1000</h6>
              </div>
            </div>
            <div className="customer-report">
              <div className="customer-name">
                <h5>Customer Name</h5>
                <p>23 Nov 24 06:53 PM</p>
              </div>
              <div className="customer-name-two ">
                <h6>₹ 1000</h6>
              </div>
              <div className="customer-name-rupees customer-tran ">
                <h6 className="d-none">₹ 1000</h6>
              </div>
            </div>
            <div>
              <button className="report-download mt-4">Download</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0"></div>
      </div>
    </div>
  );
}

export default ReporFour;
