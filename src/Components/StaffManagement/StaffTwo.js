import React from "react";
import StaffBook from "./StaffBook";
import { Link } from "react-router-dom";
import flag_india from "../../images/flag-india.svg";

function StaffTwo() {
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
            <div className="payment-details-input">
              <input type="text" name="" placeholder="Add staff name  " id="" />
            </div>
            <div className="flex-flag-main mb-0">
              <div className="flex-flag">
                <img src={flag_india} className="imf-fluid" alt="" />{" "}
                <p> +91</p>
              </div>
              <div className="payment-details-input">
                <input type="text" name="" placeholder="Mobile Number" id="" />
              </div>
            </div>
            <div className="payment-details-input">
              <input type="email" name="" placeholder="Email id." id="" />
            </div>
            <div class="radio-container">
              <input type="radio" id="male" name="radio" />
              <label for="male">Male</label>
              <input type="radio" id="female" name="radio" />
              <label for="female">Female</label>
              <input type="radio" id="Other" name="radio" />
              <label for="Other">Other</label>
            </div>
            <div className="staff-optional">
              <h3>Add address & details (optional)</h3>
            </div>
            <div className="payment-details-input">
              <input
                type="text"
                name=""
                placeholder="Flat / Building Number"
                id=""
              />
            </div>
            <div className="payment-details-input">
              <input type="text" name="" placeholder="Area / Locality" id="" />
            </div>
            <div className="payment-details-input">
              <input type="text" name="" placeholder="Pincode " id="" />
            </div>
            <div className="staff-optional">
              <div className="payment-details-input">
                <input type="text" name="" placeholder="City " id="" />
              </div>
              <div className="payment-details-input">
                <input type="text" name="" placeholder="State  " id="" />
              </div>
            </div>

            <div className="w-100 mt-1">
              <Link to="/StaffThree" className="address-next">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffTwo;
