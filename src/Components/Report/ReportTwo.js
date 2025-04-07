import React from "react";
import { Link } from "react-router-dom";

function ReportTwo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span>Report </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="report-two-today">
              <h5>Today ( 16 Dec 24)</h5>
            </div>
            <div className="report-two-items-stock">
              <div className="report-two-item">
                <h4>Today Item</h4>
                <p>3</p>
              </div>
              <div className="report-two-item">
                <h4>Total Stock </h4>
                <p>1000</p>
              </div>
            </div>
            <div className="report-two-bottle">
              <h3>Water Bottle</h3>
              <div className="row">
                <div className="col-6">
                  <div className="current-stock">
                    <h5>Current Stock</h5>
                    <p>50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock">
                    <h5>Current sales Price</h5>
                    <p>₹50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock mb-0">
                    <h5>Stock Value ( On sale Price )</h5>
                    <p>50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock mb-0">
                    <h5>Stock Value ( On Purchase Price )</h5>
                    <p>₹50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="report-two-bottle">
              <h3>Inventory</h3>
              <div className="row">
                <div className="col-6">
                  <div className="current-stock">
                    <h5>Current Stock</h5>
                    <p>50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock">
                    <h5>Current sales Price</h5>
                    <p>₹50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock mb-0">
                    <h5>Stock Value ( On sale Price )</h5>
                    <p>50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock mb-0">
                    <h5>Stock Value ( On Purchase Price )</h5>
                    <p>₹50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="report-two-bottle mb-4">
              <h3>Rt</h3>
              <div className="row">
                <div className="col-6">
                  <div className="current-stock">
                    <h5>Current Stock</h5>
                    <p>50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock">
                    <h5>Current sales Price</h5>
                    <p>₹50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock mb-0">
                    <h5>Stock Value ( On sale Price )</h5>
                    <p>50</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-stock mb-0">
                    <h5>Stock Value ( On Purchase Price )</h5>
                    <p>₹50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="report-button">
              <button className="report-download">Download</button>
              <Link to="/reportThree" className="report-share text-center">
                Share
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0"></div>
      </div>
    </div>
  );
}

export default ReportTwo;
