import React from "react";
import business from "../../images/business.svg";

const Step4 = () => {
  return (
    <div>
      <div className="welcome-txt">
      <img src={business} alt="Business Management icon" className="img-fluid" role="img" />
      <h3>BUSINESS</h3>
        <p>
          Create sales and purchase bills, quotations in just a few seconds, and
          manage inventory—all in one app. KhataDiary digitizes and manages your
          business in one place using a cloud-based app.{" "}
        </p>
      </div>
    </div>
  );
};

export default Step4;
