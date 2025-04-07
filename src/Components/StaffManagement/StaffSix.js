import React from "react";
import StaffBook from "./StaffBook";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

function StaffSix() {
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
            <form>
              <div className="staff-select">
                <input type="text" name="" placeholder="Enter Amount ₹" id="" />
              </div>
              <div className="staff-select">
                <input
                  type="text"
                  name=""
                  placeholder="Add Details (Details and Notes If any)"
                  id=""
                />
              </div>
              <div className="staff-select-in">
                <div className="staff-select">
                  <input
                    type="date"
                    name=""
                    placeholder="Enter Amount ₹"
                    id=""
                  />
                </div>
                <div>
                  <div class="file-input">
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      class="file-input__input"
                    />
                    <label class="file-input__label" for="file-input">
                      <Camera size={16} />
                      <span>Attach Bill</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div class="staff-select-radio">
                  <div className="payment-mode">
                    <h3>Select Your Payment Mode</h3>
                  </div>
                  <div class="radio_container">
                    <input type="radio" name="radio" id="one" checked />
                    <label for="one">Cash </label>
                    <input type="radio" name="radio" id="two" />
                    <label for="two">Online </label>
                  </div>
                </div>
                <div className="payment-paid py-50">
                  <h3>You have paid Rs 0 to Adam. S</h3>
                </div>
                <div className="w-100 mt-1">
                  <Link to="/StaffSeven" className="address-next">
                    Continue
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffSix;
