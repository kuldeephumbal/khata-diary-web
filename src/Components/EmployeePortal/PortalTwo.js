import React from "react";
import { Link } from "react-router-dom";
import PortalBook from "./PortalBook";

function PortalTwo() {
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
            <div className="payment-due-flex w-100">
              <div className="due-payment">
                <h4>Total Due</h4>
                <p>₹100</p>
              </div>
            </div>
            <div className="payment-bg">
              <div className="payment-salary-flex">
                <div className="total-salary">
                  <h3>Total Salary</h3>
                  <p>Monthy</p>
                </div>
                <div className="total-salary-p">
                  <p>₹100</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Present </h3>
                  <p>3 days</p>
                </div>
                <div className="total-salary-p">
                  <p>₹100</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Paid Leave </h3>
                  <p>3 days</p>
                </div>
                <div className="total-salary-p">
                  <p>₹100</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Sick Leave </h3>
                  <p>1 days</p>
                </div>
                <div className="total-salary-p">
                  <p>₹50</p>
                </div>
              </div>
            </div>
            <div className="payment-bg">
              <div className="payment-salary-flex mb-2">
                <div className="total-salary">
                  <h3>Total Deductions</h3>
                </div>
                <div className="total-salary-p">
                  <p>₹100</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Absent </h3>
                  <p>0 days</p>
                </div>
                <div className="total-salary-p">
                  <p>₹100</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Paid Leave </h3>
                  <p>1 days</p>
                </div>
                <div className="total-salary-p">
                  <p>₹100</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Sick Leave </h3>
                  <p>1 days</p>
                </div>
                <div className="total-salary-p">
                  <p>₹50</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Estimated salary for this month </h3>
                </div>
                <div className="total-salary-p">
                  <p>₹50</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Opening Balance </h3>
                </div>
                <div className="total-salary-p">
                  <p>₹50</p>
                </div>
              </div>
              <div className="border-salary"></div>
              <div className="payment-salary-flex">
                <div className="total-salary total-present">
                  <h3>Total payment made </h3>
                </div>
                <div className="total-salary-p">
                  <p>₹50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalTwo;
