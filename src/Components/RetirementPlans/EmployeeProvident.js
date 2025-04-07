import React, { useState } from "react";

function EmployeeProvident() {
  const [selectedTable, setSelectedTable] = useState("yearly");

  const handleRadioChange = (e) => {
    setSelectedTable(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="py-40">
            <div className="emi-heading">
              <h1>EPF - Employee Provident Fund </h1>
            </div>

            <div class="cycle-tab-container">
              <ul class="nav nav-tabs">
                <li class="cycle-tab-item active">
                  <a
                    class="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#home"
                  >
                    Input
                  </a>
                </li>
                <li class="cycle-tab-item">
                  <a
                    class="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#profile"
                  >
                    Report
                  </a>
                </li>
                <li class="cycle-tab-item">
                  <a
                    class="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    href="#messages"
                  >
                    Info
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div
                  class="tab-pane tab-month fade show active"
                  id="home"
                  role="tabpanel"
                >
                  <div className="emi-container">
                    <div className="row">
                      <div className="col-12 col-xl-6 col-md-6 col-sm-6 col-12">
                        <>
                          <div className="suknya-yogana">
                            <div className="emi-input-group w-100">
                              <label htmlFor="interestRate">
                                Date of birth
                              </label>
                              <input type="date" id="interestRate" />
                            </div>
                            <div className="emi-input-group w-100">
                              <label htmlFor="interestRate">
                                Current age in years
                              </label>
                              <input type="number" id="interestRate" />
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Current balance in your EPF account
                            </label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder=" Rs ."
                            />
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Your Monthly Salary (basic Pay+DA)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate"
                                placeholder="Rs."
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">Monthly</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Annual Increase in Monthly Salary
                            </label>
                            <input
                              type="number"
                              placeholder="Rs. or (%)"
                              id="interestRate"
                            />
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Expected annual Interest rate
                            </label>
                            <input
                              type="number"
                              placeholder=" (%)."
                              id="interestRate"
                            />
                          </div>

                          <div className="emi-input-group">
                            <label htmlFor="interestRate1">
                              Retirement Age (Retirement age Minimum 55 Year)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                placeholder=" (%)."
                                id="interestRate1"
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">Years</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Does your Employer Limit his Contribution to
                              Monthly salary (BasicPay+DA) to 15000/-
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                placeholder="Default 60"
                                id="interestRate"
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">Yes/No</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-button-group mt-4">
                            <button className="emi-reset">Reset</button>
                            <button className="emi-calculate">Calculate</button>
                          </div>
                        </>
                      </div>
                      <div className="col-12 col-xl-6 col-md-6 col-sm-6 col-12">
                        <div>
                          <div className="calculate-results-heading ">
                            <h2>Results</h2>
                            <div className="calculate-results">
                              <h4>
                                Total Maturity Amount At your Retirement Age of
                                _____ years
                              </h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results">
                              <h4>Your Total Contribution</h4>
                              <p>1,01,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Employers Total Contribution </h4>
                              <p>12,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Total Interest Earned </h4>
                              <p>12,000</p>
                            </div>
                          </div>
                          <div className="emi-input-group mt-3">
                            <label htmlFor="interestRate">
                              Total contribution to EPS Account
                            </label>
                            <input
                              type="number"
                              placeholder=" (%)"
                              id="interestRate"
                            />
                          </div>

                          <div className="tenure-details">
                            <p>
                              Above data is for illustrative purpose only, it is
                              calculated based on inputs, you entered in
                              calculator. The Actual Pension or Returns may
                              vary. It cannot be used for legal purposes.
                              According to the data provided by you above
                            </p>
                            <p>
                              At Retirement age of _____ Years you will get
                              Rs_________ amount as Lumpsum.
                            </p>
                            <p>
                              Your Accumulated EPS Contribution amount will be
                              used by EPFO Office to provide you monthly
                              Pension.
                            </p>
                          </div>
                          <div>
                            <button className="emi-calculate-pension">
                              Calculate Pension
                            </button>
                          </div>
                          <div className="emi-input-group mt-1">
                            <label htmlFor="interestRate">
                              Pensionable salary
                            </label>
                            <input
                              type="number"
                              placeholder=" Rs."
                              id="interestRate"
                            />
                          </div>

                          <div className="tenure-details">
                            <p>
                              (Pensionable salary is Average of Last 12 Months
                              Salary (BasicPay+DA) just before Retirement)
                            </p>
                          </div>
                          <div className="enogh-you">
                            <div className="emi-input-group mt-3">
                              <label htmlFor="interestRate">
                                Pensionable Service
                              </label>
                              <div className="loan-tenure">
                                <input
                                  type="number"
                                  placeholder="Years / Months"
                                  id="interestRate"
                                />
                                <select name="emi" id="emi">
                                  <option value="monthly">Years</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                              </div>
                            </div>
                            <div className="emi-button-group mt-3">
                              <button className="emi-reset">Reset</button>
                              <button className="emi-calculate">
                                Calculate
                              </button>
                            </div>
                          </div>
                          <div className="tenure-details mt-3">
                            <p>
                              Your Monthy Pension post Retirement:- __________Rs
                            </p>
                            <p>
                              You will get monthly pension of Rs_________ till
                              the end of your Life.
                            </p>
                            <p>
                              After your demise your spouse and and 2 childrens
                              below the age of 25 year will get same amount of
                              monthly pension.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane tab-month fade"
                  id="profile"
                  role="tabpanel"
                >
                  <div className="export-monthly">
                    <div className="monthly-input">
                      <div className="monthly-input">
                        <input
                          type="radio"
                          id="yearly"
                          name="fav_language"
                          value="yearly"
                          onChange={handleRadioChange}
                          checked={selectedTable === "yearly"}
                        />
                        <label htmlFor="yearly">Yearly</label>
                      </div>
                      <div className="monthly-input">
                        <input
                          type="radio"
                          id="monthly"
                          name="fav_language"
                          value="monthly" // changed to lowercase
                          onChange={handleRadioChange}
                          checked={selectedTable === "monthly"}
                        />
                        <label htmlFor="monthly">Monthly</label>
                      </div>
                    </div>
                    <div>
                      <button className="export-month">Export</button>
                    </div>
                  </div>
                  {selectedTable === "yearly" && (
                    <div className="table-monthly" id="yearly">
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th>Years</th>
                            <th>Your Contribution (Rs)</th>
                            <th>Employers Contribution (Rs) </th>
                            <th>Returns Earned(Rs)</th>
                            <th>Month/ Year End Balance (Rs)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="year-mark">1</td>
                            <td>5000.0</td>
                            <td>200.0</td>
                            <td>200.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr>
                            <td className="year-mark">2</td>
                            <td>10,000.00</td>
                            <td>300.0</td>
                            <td>200.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr>
                            <td className="year-mark">3</td>
                            <td>5000.0</td>
                            <td>10,000.00</td>
                            <td>200.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr className="total-rupes">
                            <td>Total</td>
                            <td>5000.0</td>
                            <td>200.0</td>
                            <td>300.0</td>
                            <td>300.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {selectedTable === "monthly" && (
                    <>
                      <div class="monthly-year">
                        <h5>Year - 1</h5>
                      </div>
                      <div className="table-monthly" id="monthly">
                        <table className="table table-bordered text-center">
                          <thead>
                            <tr>
                              <th>Months</th>
                              <th>Your Contribution (Rs)</th>
                              <th>Employers Contribution (Rs) </th>
                              <th>Returns Earned(Rs)</th>
                              <th>Month/ Year End Balance (Rs)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="year-mark">1</td>
                              <td>10,000.00</td>
                              <td>200.0</td>
                              <td>200.0</td>
                            </tr>
                            <tr>
                              <td className="year-mark">2</td>
                              <td>5000.0</td>
                              <td>10,000.00</td>
                              <td>200.0</td>
                            </tr>
                            <tr>
                              <td className="year-mark">3</td>
                              <td>5000.0</td>
                              <td>10,000.00</td>
                              <td>300.0</td>
                            </tr>
                            <tr className="total-rupes">
                              <td>5000.0</td>
                              <td>10,000.00</td>
                              <td>200.0</td>
                              <td>300.0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                  <div className="note-monthly">
                    <p>
                      Note: Above data is for illustrative purpose only, it is
                      calculated based on inputs you entered in calculator. It
                      cannot be used for legal purposes.
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane tab-month fade"
                  id="messages"
                  role="tabpanel"
                >
                  <div className="table-acccordion">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            What is EPF - Employee Provident Fund ?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ullam cum corporis consectetur eaque ducimus
                            nulla, sit eos pariatur laborum similique.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How does EPF - Employee Provident Fund ?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error veniam beatae soluta voluptatum quisquam
                            eveniet facilis repellendus voluptas laborum!
                            Molestias ad repellendus sint illum aliquid fugiat!
                            Modi tempore necessitatibus cum?
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Years
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus, porro. Error adipisci
                            distinctio voluptatibus consectetur nisi nam
                            expedita laboriosam dolore?
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Term
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus, porro. Error adipisci
                            distinctio voluptatibus consectetur nisi nam
                            expedita laboriosam dolore?23
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Interest rate
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus, porro. Error adipisci
                            distinctio voluptatibus consectetur nisi nam
                            expedita laboriosam dolore?12
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
      </div>
    </div>
  );
}

export default EmployeeProvident;
