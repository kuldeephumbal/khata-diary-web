import React from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";
import flag_india from "../../images/flag-india.svg";

function SmsSetting() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <Link to="/Setting">
              {" "}
              Setting <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> SMS Setting</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <ProgressProfile />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="sms-img py-100"></div>
          <div className="expense-empty-bg">
            <div className="payment-details-input">
              <input type="text" name="" placeholder="Enter Name " id="" />
            </div>
            <div className="flex-flag-main">
              <div className="flex-flag">
                <img src={flag_india} className="imf-fluid" alt="" />{" "}
                <p> +91</p>
              </div>
              <div className="payment-details-input">
                <input type="text" name="" placeholder="Mobile Number" id="" />
              </div>
            </div>

            <div className="w-100 mt-5">
              <Link to="#" className="address-next">
                Save Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmsSetting;
