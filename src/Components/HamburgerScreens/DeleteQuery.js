import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";

function DeleteQuery() {
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
            <span> Delete Account</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <ProgressProfile />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="expense-email">
              <p>
                Type your email below and describe your query. we’ll get back to
                you as soon as possible
              </p>
            </div>
            <div className="payment-details-input">
              <input type="email" name="" placeholder="Email" id="" />
            </div>
            <div className="payment-query">
              <h3>Query</h3>
            </div>
            <div className="payment-details-input">
              <textarea
                id="w3review"
                name="w3review"
                placeholder="Describe your query in few words"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div>
              <div className="w-100 mt-5">
                <Link to="/AuthenticityDelivered" className="address-next">
                  Send Query
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteQuery;
