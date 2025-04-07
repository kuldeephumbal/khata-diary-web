import React from "react";
import { Link } from "react-router-dom";
import BusinessCardSlider from "./BusinessCardSlider";

function BusinessName() {
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
                <h3>Business Name</h3>
              </div>
              <div className="business-address-input">
                <input type="text" name="" placeholder="Business Name" id="" />
              </div>
              <div className="business-address-input">
                <input type="text" name="" placeholder="Owner Name" id="" />
              </div>

              <div className="w-100 mt-5">
                <Link to="/AddBusinessName" className="address-next">
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

export default BusinessName;
