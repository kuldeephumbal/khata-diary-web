import React from "react";
import { Link } from "react-router-dom";
import { Search, TriangleAlert, Trash2, SlidersHorizontal } from "lucide-react";
import speed from "../../images/speed.svg";
import money from "../../images/money.svg";
import rafiki from "../../images/rafiki.svg";

function ExpenseAdded() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Budget & Expense </span>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="expense-empty-pills">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
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
                      <img src={speed} alt="" /> Budget
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
                      <img src={money} alt="" className="img-fluid" /> Expense
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex={0}
                  >
                    <div className="expense-empty-ul">
                      <div className="expense-empty-ul-bg">
                        <ul>
                          <li>Manage your monthly / annual Expense</li>
                          <li>Save and edit details any time</li>
                          <li>Easy expense track</li>
                        </ul>
                      </div>

                      <div className="expense-empty-img">
                        <img src={rafiki} alt="" className="img-fluid" />
                      </div>
                      <Link to="#">
                        {" "}
                        Add Expense{" "}
                        <img src={money} alt="" className="img-fluid" />{" "}
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex={0}
                  >
                    <div className="expense-added-flex">
                      <div className="expense-added-search">
                        <input type="text" name="" placeholder="Search" id="" />
                        <div className="search-added">
                          <Search />
                        </div>
                      </div>
                      <div className="slid-filter">
                        <SlidersHorizontal />
                        <p>Filters</p>
                      </div>
                    </div>
                    <div className="expense-added-pills">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="Grocery-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Grocery-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="Grocery-tab-pane"
                            aria-selected="true"
                          >
                            Grocery
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="clothing-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#clothing-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="clothing-tab-pane"
                            aria-selected="false"
                          >
                            Clothing
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="Personal-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Personal-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="Personal-tab-pane"
                            aria-selected="false"
                          >
                            Personal Care
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="Insurance-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Insurance-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="Insurance-tab-pane"
                            aria-selected="false"
                          >
                            Insurance Bill
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="Shopping-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#Shopping-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="Shopping-tab-pane"
                            aria-selected="false"
                          >
                            Shopping
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="Grocery-tab-pane"
                          role="tabpanel"
                          aria-labelledby="Grocery-tab"
                          tabindex="0"
                        >
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Grocery</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 1000</p>
                            </div>
                          </div>
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Grocery</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 3000</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="clothing-tab-pane"
                          role="tabpanel"
                          aria-labelledby="clothing-tab"
                          tabindex="0"
                        >
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Clothing</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 1000</p>
                            </div>
                          </div>
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Clothing</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 3000</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Personal-tab-pane"
                          role="tabpanel"
                          aria-labelledby="Personal-tab"
                          tabindex="0"
                        >
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Personal Care</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 1000</p>
                            </div>
                          </div>
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Personal Care</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 3000</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Insurance-tab-pane"
                          role="tabpanel"
                          aria-labelledby="Insurance-tab"
                          tabindex="0"
                        >
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Insurance Bill</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 1000</p>
                            </div>
                          </div>
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3>Insurance Bill</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 3000</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Shopping-tab-pane"
                          role="tabpanel"
                          aria-labelledby="Shopping-tab"
                          tabindex="0"
                        >
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3> Shopping</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 1000</p>
                            </div>
                          </div>
                          <div className="grocery-added-flex">
                            <div className="grocery-flex">
                              <div className="grocery-img">
                                <img src={money} className="img-fluid" alt="" />
                              </div>
                              <div className="grocery-text">
                                <h3> Shopping</h3>
                                <p>21 Nov 2024</p>
                              </div>
                            </div>
                            <div className="grocery-amount">
                              <p>₹ 3000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="expense-summary">
                        <Link to="/ViewSummery">View Summary </Link>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="btn expense-summary-button ">
                          Add Expense{" "}
                          <img src={money} alt="" className="img-fluid" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="expense-empty-category">
                <h3>Category</h3>
                <div>
                  <button
                    type="button"
                    className="btn btn-trash-expense"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <Trash2 />
                  </button>
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog model-padding modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="modal-body-delete">
                            <p>
                              <TriangleAlert /> Delete Grocery Expense ?
                            </p>
                          </div>
                        </div>
                        <div className="modal-footer-added">
                          <button type="button" className="btn btn-yes w-100">
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-cancel w-100"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="expense-grocery">
                <h5>Grocery</h5>
              </div>
              <div className="expense-grocery">
                <h5>₹ 1000</h5>
              </div>
              <div className="expense-empty-select">
                <textarea
                  name=""
                  placeholder="Add  Expense Details (optional)"
                  id=""
                ></textarea>
              </div>
              <div className="expense-link expense-link-two">
                <Link to="/ViewSummery" className="w-100 ">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseAdded;
