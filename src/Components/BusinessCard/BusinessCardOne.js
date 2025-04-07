import React from "react";
import { Link } from "react-router-dom";
import BusinessCardSlider from "./BusinessCardSlider";

function BusinessCardOne() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Business Card</span>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <BusinessCardSlider />
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="business-card-address">
                <h3>Business Address</h3>
              </div>
              <div className="business-address-input">
                <input
                  type="text"
                  name=""
                  placeholder="Add Flat/ Building  Number"
                  id=""
                />
              </div>
              <div className="business-address-input">
                <input
                  type="text"
                  name=""
                  placeholder="Area/ Locality, City"
                  id=""
                />
              </div>
              <div className="business-address-input">
                <input type="text" name="" placeholder="Pincode" id="" />
              </div>
              <div className="w-100 mt-5">
                <Link to="/BusinessType" className="address-next">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCardOne;
