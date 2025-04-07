import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ReporThree() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span>Report </span>
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
            <div className="daily-balance">
              <h5>Date</h5>
              <h5>Daily Balance</h5>
              <h5>Total Balance</h5>
            </div>
            <div className="daily-balance-rupees">
              <h5>30 Nov</h5>
              <h5>₹10</h5>
              <Link to="/reportFour">
                ₹10
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="daily-balance-rupees">
              <h5>30 Nov</h5>
              <h5>₹10</h5>
              <Link to="/reportFour">
                ₹10
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="daily-balance-rupees">
              <h5>30 Nov</h5>
              <h5>₹10</h5>
              <Link to="/reportFour">
                ₹10
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="daily-balance-rupees">
              <h5>30 Nov</h5>
              <h5>₹10</h5>
              <Link to="/reportFour">
                ₹10
                <ChevronRight size={16} />
              </Link>
            </div>
            <div>
              <button className="report-download">Download</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0"></div>
      </div>
    </div>
  );
}

export default ReporThree;
