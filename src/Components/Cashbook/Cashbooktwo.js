import React from "react";
import { Link } from "react-router-dom";
import stockinout from "../../images/stockinout.svg";

const Cashbooktwo = () => {
  return (
    <div>
      <div className="container">
        <div className="title-home">
          <h3>
            <Link to={"#"}>Home > </Link>Cash Book
          </h3>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="index-pill h-100">
              <div className="balance-design ">
                <div className="d-flex justify-content-between mb-4">
                  <div className="total-balance ms-4">
                    <h3>₹ 1000</h3>
                    <h4>Total Balance</h4>
                  </div>
                  <div className="total-balance me-4">
                    <h3>₹ 1000</h3>
                    <h4>Today’s Balance </h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="total-balance border-one ms-4">
                    <div className="d-flex align-items-center">
                      <h4 className="me-4">Total Balance</h4>
                      <h3>₹ 1000</h3>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="me-4">Total Balance</h4>
                      <h3>₹ 1000</h3>
                    </div>
                  </div>
                  <div className="total-balance border-one ms-4">
                    <div className="d-flex align-items-center">
                      <h4 className="me-4">Total Balance</h4>
                      <h3>₹ 1000</h3>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="me-4">Total Balance</h4>
                      <h3>₹ 1000</h3>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="view-reports mt-4">
                  <Link to={"#"}>
                    <i className="fa-solid fa-book me-3"></i>View Cashbook
                    Report{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="index-pill spl-height">
              <div>
                <div className="balance-design mb-3">
                  <div className="out-in">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3>22 Nov</h3>
                        <h4>0 Entry</h4>
                      </div>
                      <div className="d-flex">
                        <div className="me-4">
                          <h4 className="red mb-2">Out</h4>
                          <h5>₹ 1400</h5>
                        </div>
                        <div>
                          <h4 className="green mb-2">In</h4>
                          <h5>₹ 1400</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="out-indesign mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>05:28Pm</h4>
                    <h5 className="green-bg">₹ 1400</h5>
                  </div>
                </div>
                <div className="out-indesign ">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>05:28Pm</h4>
                    <h5 className="red-bg ">₹ 1400</h5>
                  </div>
                </div>
              </div>

              <div className=" ">
                <Link to={"#"} className="btn stock-in me-2">
                  You Gave ₹
                </Link>
                <Link to={"/Cashbookthree"} className="btn stock-in stock-green">
                  You Got ₹
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashbooktwo;
