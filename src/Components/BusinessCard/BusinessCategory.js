import React from "react";
import { Link } from "react-router-dom";
import BusinessCardSlider from "./BusinessCardSlider";
import noto_broccoli from "../../images/noto_broccoli.svg";
import noto_automobile from "../../images/noto_automobile.svg";
import coat from "../../images/noto_coat.svg";
import noto_performing from "../../images/noto_performing-arts.svg";
import polish from "../../images/polish.svg";
import hammer from "../../images/hammer.svg";
import books from "../../images/noto_books.svg";
import light_bulb from "../../images/light-bulb.svg";

const businessCategories = [
  { img: noto_broccoli, name: "Agriculture" },
  { img: noto_automobile, name: "Automotive" },
  { img: coat, name: "Apparel & Clothing" },
  { img: noto_performing, name: "Art & Entertainment" },
  { img: polish, name: "Beauty, Cosmetic & Personal Care" },
  { img: hammer, name: "Building & Construction" },
  { img: books, name: "Education" },
  { img: light_bulb, name: "Event Planner" },
];

function BusinessCategory() {
  return (
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
              <h3>Select Business Type</h3>
            </div>
            <div className="business-grid">
              {businessCategories.map((category, index) => (
                <button key={index} className="business-address-shop">
                  <img
                    src={category.img}
                    className="img-fluid"
                    alt={category.name}
                  />
                  <p>{category.name}</p>
                </button>
              ))}
            </div>
            <div className="w-100 mt-5">
              <Link to="/BusinessName" className="address-next">
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCategory;
