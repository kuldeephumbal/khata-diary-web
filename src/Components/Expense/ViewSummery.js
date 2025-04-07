import React from "react";
import { Link } from "react-router-dom";
import { Search, TriangleAlert, Trash2, SlidersHorizontal } from "lucide-react";
import speed from "../../images/speed.svg";
import money from "../../images/money.svg";
import filter from "../../images/filter.svg";
import ApexChartOne from "./ApexChartOne";
import BarChart from "./BarChart";
import rafiki from "../../images/rafiki.svg";

function ViewSummery() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <Link to="/ExpenseAdded">
                Budget & Expense <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Summary </span>
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
                        <Link to="">View Summary </Link>
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
              <div className="expense-chart-bg">
                <div className="expense-added-pills">
                  <div className="expense-added-flex">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="Jan-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Jan-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="Jan-tab-pane"
                          aria-selected="true"
                        >
                          Jan 2023
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="Feb-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Feb-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="Feb-tab-pane"
                          aria-selected="false"
                        >
                          Feb 2023
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="Mar-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Mar-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="Mar-tab-pane"
                          aria-selected="false"
                        >
                          Mar 2023
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="Apr-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Apr-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="Apr-tab-pane"
                          aria-selected="false"
                        >
                          Apr 2023
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="May-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#May-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="May-tab-pane"
                          aria-selected="false"
                        >
                          May 2023
                        </button>
                      </li>
                    </ul>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <img src={filter} className="img-fluid" alt="" />
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header custom-modal-header">
                              <h1>Filter By</h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body pt-0">
                              <div className="expense-added-pills">
                                <ul
                                  className="nav nav-tabs d-flex justify-content-center"
                                  id="myTab"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link active"
                                      id="Monthly-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#Monthly-tab-pane"
                                      type="button"
                                      role="tab"
                                      aria-controls="Monthly-tab-pane"
                                      aria-selected="true"
                                    >
                                      Monthly
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="Last-month-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#Last-month-tab-pane"
                                      type="button"
                                      role="tab"
                                      aria-controls="Last-month-tab-pane"
                                      aria-selected="false"
                                    >
                                      Last 6 month
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="Yearly-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#Yearly-tab-pane"
                                      type="button"
                                      role="tab"
                                      aria-controls="Yearly-tab-pane"
                                      aria-selected="false"
                                    >
                                      Yearly
                                    </button>
                                  </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                  <div
                                    className="tab-pane fade show active"
                                    id="Monthly-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="Monthly-tab"
                                    tabindex="0"
                                  >
                                    <div className="filter-main">
                                      <div className="filter-date-flex">
                                        <div>
                                          <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="filter-date">
                                          <h5>Start Month</h5>
                                          <p>01 NOV 24</p>
                                        </div>
                                      </div>
                                      <div className="filter-date-flex">
                                        <div>
                                          <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="filter-date">
                                          <h5>End Month</h5>
                                          <p>01 NOV 24</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="filter-category">
                                      <h5>Category</h5>
                                      <select name="Category" id="Category">
                                        <option value="volvo">Category</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">
                                          Mercedes
                                        </option>
                                        <option value="audi">Audi</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="Last-month-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="Last-month-tab"
                                    tabindex="0"
                                  >
                                    <div className="filter-main">
                                      <div className="filter-date-flex">
                                        <div>
                                          <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="filter-date">
                                          <h5>Start Month</h5>
                                          <p>01 NOV 24</p>
                                        </div>
                                      </div>
                                      <div className="filter-date-flex">
                                        <div>
                                          <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="filter-date">
                                          <h5>End Month</h5>
                                          <p>01 NOV 24</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="filter-category">
                                      <h5>Category</h5>
                                      <select name="Category" id="Category">
                                        <option value="volvo">Category</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">
                                          Mercedes
                                        </option>
                                        <option value="audi">Audi</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="Yearly-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="Yearly-tab"
                                    tabindex="0"
                                  >
                                    <div className="filter-main">
                                      <div className="filter-date-flex">
                                        <div>
                                          <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="filter-date">
                                          <h5>Start Month</h5>
                                          <p>01 NOV 24</p>
                                        </div>
                                      </div>
                                      <div className="filter-date-flex">
                                        <div>
                                          <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="filter-date">
                                          <h5>End Month</h5>
                                          <p>01 NOV 24</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="filter-category">
                                      <h5>Category</h5>
                                      <select name="Category" id="Category">
                                        <option value="volvo">Category</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">
                                          Mercedes
                                        </option>
                                        <option value="audi">Audi</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="btn-reset-flex">
                                <button className="btn-reset-fil">
                                  Reset Filter
                                </button>
                                <button className="btn-apply-fil">
                                  Apply Filter
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="Jan-tab-pane"
                      role="tabpanel"
                      aria-labelledby="Jan-tab"
                      tabindex="0"
                    >
                      <div className="bar-chart mt-3">
                        <h4>Overall Summary</h4>
                        <BarChart />
                      </div>
                      <div className="chart-heading">
                        <h4>Pie chart</h4>
                      </div>
                      <div className="expense-chart-apex">
                        <div className="expense-chart-one">
                          <h3>₹ 97,500</h3>
                          <p>Spent</p>
                        </div>
                        <ApexChartOne />
                      </div>
                      <div>
                        <ul className="mb-0">
                          <li className="expense-color-one">
                            <div className="expense-clothing-chart">
                              <h4>Clothing</h4>
                              <p>₹ 14,000</p>
                            </div>
                          </li>
                          <li className="expense-color-two">
                            <div className="expense-clothing-chart">
                              <h4>Personal Care</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-three">
                            <div className="expense-clothing-chart">
                              <h4>Shopping</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-four">
                            <div className="expense-clothing-chart">
                              <h4>Grocery </h4>
                              <p>₹ 22,000</p>
                            </div>
                          </li>
                          <li className="expense-color-five  ">
                            <div className="expense-clothing-chart mb-0">
                              <h4>Insurance bill </h4>
                              <p>₹ 25,000</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Feb-tab-pane"
                      role="tabpanel"
                      aria-labelledby="Feb-tab"
                      tabindex="0"
                    >
                      <div className="bar-chart mt-3">
                        <h4>Overall Summary</h4>
                        <BarChart />
                      </div>
                      <div className="chart-heading">
                        <h4>Pie chart</h4>
                      </div>
                      <div className="expense-chart-apex">
                        <div className="expense-chart-one">
                          <h3>₹ 97,500</h3>
                          <p>Spent</p>
                        </div>
                        <ApexChartOne />
                      </div>
                      <div>
                        <ul className="mb-0">
                          <li className="expense-color-one">
                            <div className="expense-clothing-chart">
                              <h4>Clothing</h4>
                              <p>₹ 14,000</p>
                            </div>
                          </li>
                          <li className="expense-color-two">
                            <div className="expense-clothing-chart">
                              <h4>Personal Care</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-three">
                            <div className="expense-clothing-chart">
                              <h4>Shopping</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-four">
                            <div className="expense-clothing-chart">
                              <h4>Grocery </h4>
                              <p>₹ 22,000</p>
                            </div>
                          </li>
                          <li className="expense-color-five  ">
                            <div className="expense-clothing-chart mb-0">
                              <h4>Insurance bill </h4>
                              <p>₹ 25,000</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Mar-tab-pane"
                      role="tabpanel"
                      aria-labelledby="Mar-tab"
                      tabindex="0"
                    >
                      <div className="bar-chart mt-3">
                        <h4>Overall Summary</h4>
                        <BarChart />
                      </div>
                      <div className="chart-heading">
                        <h4>Pie chart</h4>
                      </div>
                      <div className="expense-chart-apex">
                        <div className="expense-chart-one">
                          <h3>₹ 97,500</h3>
                          <p>Spent</p>
                        </div>
                        <ApexChartOne />
                      </div>
                      <div>
                        <ul className="mb-0">
                          <li className="expense-color-one">
                            <div className="expense-clothing-chart">
                              <h4>Clothing</h4>
                              <p>₹ 14,000</p>
                            </div>
                          </li>
                          <li className="expense-color-two">
                            <div className="expense-clothing-chart">
                              <h4>Personal Care</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-three">
                            <div className="expense-clothing-chart">
                              <h4>Shopping</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-four">
                            <div className="expense-clothing-chart">
                              <h4>Grocery </h4>
                              <p>₹ 22,000</p>
                            </div>
                          </li>
                          <li className="expense-color-five  ">
                            <div className="expense-clothing-chart mb-0">
                              <h4>Insurance bill </h4>
                              <p>₹ 25,000</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Apr-tab-pane"
                      role="tabpanel"
                      aria-labelledby="Apr-tab"
                      tabindex="0"
                    >
                      <div className="bar-chart mt-3">
                        <h4>Overall Summary</h4>
                        <BarChart />
                      </div>
                      <div className="chart-heading">
                        <h4>Pie chart</h4>
                      </div>
                      <div className="expense-chart-apex">
                        <div className="expense-chart-one">
                          <h3>₹ 97,500</h3>
                          <p>Spent</p>
                        </div>
                        <ApexChartOne />
                      </div>
                      <div>
                        <ul className="mb-0">
                          <li className="expense-color-one">
                            <div className="expense-clothing-chart">
                              <h4>Clothing</h4>
                              <p>₹ 14,000</p>
                            </div>
                          </li>
                          <li className="expense-color-two">
                            <div className="expense-clothing-chart">
                              <h4>Personal Care</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-three">
                            <div className="expense-clothing-chart">
                              <h4>Shopping</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-four">
                            <div className="expense-clothing-chart">
                              <h4>Grocery </h4>
                              <p>₹ 22,000</p>
                            </div>
                          </li>
                          <li className="expense-color-five  ">
                            <div className="expense-clothing-chart mb-0">
                              <h4>Insurance bill </h4>
                              <p>₹ 25,000</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="May-tab-pane"
                      role="tabpanel"
                      aria-labelledby="May-tab"
                      tabindex="0"
                    >
                      <div className="bar-chart mt-3">
                        <h4>Overall Summary</h4>
                        <BarChart />
                      </div>
                      <div className="chart-heading">
                        <h4>Pie chart</h4>
                      </div>
                      <div className="expense-chart-apex">
                        <div className="expense-chart-one">
                          <h3>₹ 97,500</h3>
                          <p>Spent</p>
                        </div>
                        <ApexChartOne />
                      </div>
                      <div>
                        <ul className="mb-0">
                          <li className="expense-color-one">
                            <div className="expense-clothing-chart">
                              <h4>Clothing</h4>
                              <p>₹ 14,000</p>
                            </div>
                          </li>
                          <li className="expense-color-two">
                            <div className="expense-clothing-chart">
                              <h4>Personal Care</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-three">
                            <div className="expense-clothing-chart">
                              <h4>Shopping</h4>
                              <p>₹ 17,500</p>
                            </div>
                          </li>
                          <li className="expense-color-four">
                            <div className="expense-clothing-chart">
                              <h4>Grocery </h4>
                              <p>₹ 22,000</p>
                            </div>
                          </li>
                          <li className="expense-color-five  ">
                            <div className="expense-clothing-chart mb-0">
                              <h4>Insurance bill </h4>
                              <p>₹ 25,000</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSummery;
