import React from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";
import { ChevronRight } from "lucide-react";
import bank from "../../images/bank.svg";
import payments_logo from "../../images/paymentslogo.svg";

function PaymentSetting() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>{" "}
            <Link to="/Setting">
              Setting <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Payment Settings </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <ProgressProfile />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="bank-img py-100"></div>
          <div className="expense-empty-bg">
            <div className="payment-details">
              <h3>Enter Bank Account Details</h3>
            </div>
            <div className="payment-details-input">
              <input
                type="text"
                name=""
                placeholder="Account Holder Name "
                id=""
              />
            </div>
            <div className="payment-details-input">
              <input type="text" name="" placeholder="IFSC Code" id="" />
            </div>
            <div className="payment-details-input">
              <input type="text" name="" placeholder="Account Number" id="" />
            </div>
            <div className="payment-details-logo">
              <img src={payments_logo} className="img-fluid" alt="" />
              <p>All payments are 100% Safe and Secure on KhataDiary</p>
            </div>
            <div className="w-100 mt-5">
              <Link to="#" className="address-next">
                Verify
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSetting;
