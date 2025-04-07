import React from "react";
import { Link } from "react-router-dom";
import BusinessCardSlider from "./BusinessCardSlider";
import Shop from "../../images/Shop.svg";
import Wholesaler from "../../images/Wholesaler.svg";
import Distributor from "../../images/Distributor.svg";
import Service from "../../images/Service.svg";
import Manufacture from "../../images/Manufacture.svg";
import Others from "../../images/bar-chart.svg";

function BusinessType() {
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
                <h3>Select Business Type </h3>
              </div>
              <div className="business-grid">
                <button className="business-address-shop">
                  <img src={Shop} className="img-fluid" alt="" />
                  <p>Retailer/ Shop</p>
                </button>
                <button className="business-address-shop">
                  <img src={Wholesaler} className="img-fluid" alt="" />
                  <p>Wholesaler</p>
                </button>
                <button className="business-address-shop">
                  <img src={Distributor} className="img-fluid" alt="" />
                  <p>Distributor</p>
                </button>
                <button className="business-address-shop">
                  <img src={Service} className="img-fluid" alt="" />
                  <p>Service Provider</p>
                </button>
                <button className="business-address-shop">
                  <img src={Manufacture} className="img-fluid" alt="" />
                  <p>Manufacture</p>
                </button>
                <button className="business-address-shop">
                  <img src={Others} className="img-fluid" alt="" />
                  <p>Other</p>
                </button>
              </div>
              <div className="w-100 mt-5">
                <Link to="/BusinessCategory" className="address-next">
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

export default BusinessType;
