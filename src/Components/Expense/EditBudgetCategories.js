import React, { useState } from "react";
import { Link } from "react-router-dom";

import speed from "../../images/speed.svg";
import money from "../../images/money.svg";
import rafiki from "../../images/rafiki.svg";

function EditBudgetCategories() {
  const [selectedBudget, setSelectedBudget] = useState("Budget1");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Budget </span>
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
                    Add Expense <img
                      src={money}
                      alt=""
                      className="img-fluid"
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}
              >
                <div className="expense-empty-bg">
                  <div className="select-categories">
                    <h4>Select Categories</h4>
                  </div>
                  <div className="budget-select budget-maintenance">
                    <select name="maintenance" id="maintenance">
                      <option value="volvo">Maintenance (House rent)</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="budget-select-flex">
                    <div className="budget-select-month">
                      <h4>₹ 2000</h4>
                      <p>Monthly</p>
                    </div>
                    <div className="budget-select-month">
                      <h4>₹ 8000</h4>
                      <p>Annual </p>
                    </div>
                  </div>
                  <div className="budget-select-flex">
                    <div
                      className={`budget-select-bu ${
                        selectedBudget === "Budget2"
                          ? "budget-select-bu-one"
                          : ""
                      }`}
                      onClick={() => setSelectedBudget("Budget2")}
                    >
                      <p>Monthly Budget</p>
                      <input
                        type="radio"
                        id="Budget2"
                        name="Budget"
                        value="Budget2"
                        checked={selectedBudget === "Budget2"}
                        onChange={() => setSelectedBudget("Budget2")}
                      />
                    </div>
                    <div
                      className={`budget-select-bu ${
                        selectedBudget === "Budget1"
                          ? "budget-select-bu-one"
                          : ""
                      }`}
                      onClick={() => setSelectedBudget("Budget1")}
                    >
                      <p>Annual Budget</p>
                      <input
                        type="radio"
                        id="Budget1"
                        name="Budget"
                        value="Budget1"
                        checked={selectedBudget === "Budget1"}
                        onChange={() => setSelectedBudget("Budget1")}
                      />
                    </div>
                  </div>
                  <div className="expense-empty-amo">
                    <input
                      type="text"
                      name=""
                      placeholder="Add your Monthly Budget  "
                      id=""
                    />
                  </div>
                  <div className="budget-select-save">
                    <Link to="/Budget">Save Changes </Link>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                <div className="expense-empty-bg">
                  <div className="expense-empty-flex">
                    <div className="expense-empty-inp">
                      <input
                        type="text"
                        name=""
                        placeholder="Expense No. "
                        id=""
                      />
                    </div>
                    <div className="expense-empty-inp">
                      <input type="date" name="" id="" />
                    </div>
                  </div>

                  <div className="expense-empty-select">
                    <select name="budget" id="budget">
                      <option value="volvo">All</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="expense-empty-select">
                    <textarea
                      name=""
                      placeholder="Add  Expense Details (optional)"
                      id=""
                    ></textarea>
                  </div>
                  <div className="expense-empty-amo">
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Amount "
                      id=""
                    />
                  </div>
                  <div className="file-input">
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      className="file-input__input"
                    />
                    <label className="file-input__label" for="file-input">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 6V6.75C7.25076 6.75 7.48494 6.62467 7.62404 6.41603L7 6ZM8.40627 3.8906L7.78223 3.47457L7.78223 3.47457L8.40627 3.8906ZM15.5937 3.8906L16.2178 3.47457L15.5937 3.8906ZM17 6L16.376 6.41603C16.5151 6.62467 16.7492 6.75 17 6.75V6ZM14.25 13.5C14.25 14.7426 13.2426 15.75 12 15.75V17.25C14.0711 17.25 15.75 15.5711 15.75 13.5H14.25ZM12 15.75C10.7574 15.75 9.75 14.7426 9.75 13.5H8.25C8.25 15.5711 9.92893 17.25 12 17.25V15.75ZM9.75 13.5C9.75 12.2574 10.7574 11.25 12 11.25V9.75C9.92893 9.75 8.25 11.4289 8.25 13.5H9.75ZM12 11.25C13.2426 11.25 14.25 12.2574 14.25 13.5H15.75C15.75 11.4289 14.0711 9.75 12 9.75V11.25ZM7.62404 6.41603L9.0303 4.30662L7.78223 3.47457L6.37596 5.58397L7.62404 6.41603ZM10.0704 3.75H13.9296V2.25H10.0704V3.75ZM14.9697 4.30662L16.376 6.41603L17.624 5.58397L16.2178 3.47457L14.9697 4.30662ZM13.9296 3.75C14.3476 3.75 14.7379 3.95888 14.9697 4.30662L16.2178 3.47457C15.7077 2.70953 14.8491 2.25 13.9296 2.25V3.75ZM9.0303 4.30662C9.26214 3.95888 9.65243 3.75 10.0704 3.75V2.25C9.1509 2.25 8.29226 2.70953 7.78223 3.47457L9.0303 4.30662ZM21.25 10V17H22.75V10H21.25ZM18 20.25H6V21.75H18V20.25ZM2.75 17V10H1.25V17H2.75ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 6.75C19.7949 6.75 21.25 8.20507 21.25 10H22.75C22.75 7.37665 20.6234 5.25 18 5.25V6.75ZM6 5.25C3.37665 5.25 1.25 7.37665 1.25 10H2.75C2.75 8.20507 4.20507 6.75 6 6.75V5.25ZM6 6.75H7V5.25H6V6.75ZM18 5.25H17V6.75H18V5.25Z"
                          fill="#28303F"
                        />
                        <circle cx="12" cy="6" r="1" fill="#28303F" />
                      </svg>
                      <span>Upload file</span>
                    </label>
                  </div>
                  <div>
                    <button className="btn expense-button ">
                      Add Expense{" "}
                      <img src={money} alt="" className="img-fluid" />
                    </button>
                  </div>
                  <div className="expense-link">
                    <Link to="/ExpenseAdded" className="w-100 ">
                      Save Changes
                    </Link>
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

export default EditBudgetCategories;
