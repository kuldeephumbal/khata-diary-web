import React from "react";
import { Link } from "react-router-dom";

const Cashbookthree = () => {
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
                <div className="pill-amount">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="enter-amount green-amount">
                        <input
                          type="number"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="₹ Enter Amount"
                        />
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Payment Mode
                        </label>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="enter-amount red-amount">
                        <input
                          type="number"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="₹ Enter Amount"
                        />
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Payment Mode
                        </label>
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Cash
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Online
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" ">
                <Link
                  to={"/Cashbookfour"}
                  className="btn next-btn d-flex justify-content-center m-auto"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashbookthree;
