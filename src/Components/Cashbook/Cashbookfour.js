import React from "react";
import { Link } from "react-router-dom";
import line from "../../images/Line.svg";

const Cashbookfour = () => {
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
                <div className="out-indesign ot-date mb-3  d-flex ">
                  <input
                    type="date"
                    className="form-control m-3"
                    id="exampleFormControlInput1"
                    value="2025-02-05"
                  />
                  <img src={line} className="img-fluid" alt="Logo" />

                  <input
                    type="date"
                    className="form-control m-3"
                    id="exampleFormControlInput1"
                    value="2025-02-05"
                  />
                </div>
                <div className="out-indesign select-input d-flex mb-3">
                  <div className="d-flex justify-content-between w-100">
                    <input
                      type="text"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="Select report duration"
                    />
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>This Month</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="date-daily">
                  <div className="d-flex justify-content-between w-100">
                    <h3>Date</h3>
                    <h3>Daily Balance</h3>
                    <h3>Total Balance</h3>
                  </div>
                  <div className="balance-design d-flex justify-content-between w-100">
                    <h4>30 Nov</h4>
                    <h4>₹10</h4>
                    <h4>
                      ₹10
                      <span>
                        <Link to={"#"} className="ms-2">
                          <i className="fa-solid fa-greater-than"></i>
                        </Link>
                      </span>
                    </h4>
                  </div>
                  <div className="balance-design d-flex justify-content-between w-100">
                    <h4>30 Nov</h4>
                    <h4>₹10</h4>
                    <h4>
                      ₹10
                      <span>
                        <Link to={"#"} className="ms-2">
                          <i className="fa-solid fa-greater-than"></i>
                        </Link>
                      </span>
                    </h4>
                  </div>
                  <div className="balance-design d-flex justify-content-between w-100">
                    <h4>30 Nov</h4>
                    <h4>₹10</h4>
                    <h4>
                      ₹10
                      <span>
                        <Link to={"#"} className="ms-2">
                          <i className="fa-solid fa-greater-than"></i>
                        </Link>
                      </span>
                    </h4>
                  </div>
                  <div className="balance-design d-flex justify-content-between w-100">
                    <h4>30 Nov</h4>
                    <h4>₹10</h4>
                    <h4>
                      ₹10
                      <span>
                        <Link to={"#"} className="ms-2">
                          <i className="fa-solid fa-greater-than"></i>
                        </Link>
                      </span>
                    </h4>
                  </div>
                  <div className="balance-design d-flex justify-content-between w-100">
                    <h4>30 Nov</h4>
                    <h4>₹10</h4>
                    <h4>
                      ₹10
                      <span>
                        <Link to={"#"} className="ms-2">
                          <i className="fa-solid fa-greater-than"></i>
                        </Link>
                      </span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className=" ">
                <Link
                  to={"#"}
                  className="btn next-btn d-flex justify-content-center m-auto"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashbookfour;
