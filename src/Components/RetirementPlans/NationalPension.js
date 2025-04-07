import React, { useState } from "react";

function NationalPension() {
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
              <h1>NPS: National Pension Scheme </h1>
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
                              Current balance in your NPS account
                            </label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder=" Rs ."
                            />
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Your regular contribution amount
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
                              Employer Contribution amount
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                placeholder="Rs. or (%)"
                                id="interestRate"
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">Months</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Annual Increase in your Contribution Amount
                            </label>
                            <div className="loan-tenure">
                              <select name="emi" className="w-100" id="emi">
                                <option value="monthly">Years</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Expected annual Return rate
                            </label>
                            <input
                              type="number"
                              placeholder=" (%)."
                              id="interestRate"
                            />
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">Retirement Age</label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                placeholder="Default 60"
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
                                Total Amount At your Retirement Age of _____
                                years
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
                          </div>
                          <div className="emi-input-group mt-3">
                            <label htmlFor="interestRate">
                              Enter Lump Sum Withdrawal Amount At Retirement
                              (Maximum 60% Allowed- Enter 0 to 60%)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                placeholder="Rs. or (%)"
                                id="interestRate"
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group mt-3">
                            <label htmlFor="interestRate">
                              Post Retirement Expected Annual Rate of Returns on
                              Annuity ( Usually 5 to 8%)
                            </label>
                            <input
                              type="number"
                              placeholder="(%)"
                              id="interestRate"
                            />
                          </div>
                          <div>
                            <button className="emi-calculate-pension">
                              Calculate Pension
                            </button>
                          </div>
                          <div className="calculate-results-heading ">
                            <div className="calculate-results">
                              <h4>
                                Lump sum withdrawal Amount at Retirement age of
                                _________ Years
                              </h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results">
                              <h4>
                                Monthly Pension You will Get After Retirement
                              </h4>
                              <p>1,01,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>
                                Amount Payable to Nominees after End of your
                                life
                              </h4>
                              <p>12,000</p>
                            </div>
                          </div>
                          <div className="tenure-details">
                            <p>
                              Above data is for illustrative purpose only, it is
                              calculated based on inputs, you entered in
                              calculator. The Actual Pension or Returns may
                              vary. It cannot be used for legal purposes.
                            </p>
                            <h4>According to the data provided by you above</h4>
                            <p>
                              At Retirement age of _____ Years you will get
                              Rs_________ amount as Lump sum (____% of your
                              total corpus) 5
                            </p>
                            <p>
                              On investing remaining amount in annuity you will
                              get Monthly pension of Rs________ at ______%
                              Annual rate of return post retirement throughout
                              your life.
                            </p>
                            <p>
                              After your Demise the invested amount of
                              Rs_________ will be given back to your nominees as
                              a lump sum amount. (If you opt for ROP-Returns of
                              Purchase Plan)
                            </p>
                          </div>
                          <div className="enogh-you">
                            <h5>
                              Is Your Monthly Pension going to enough for you?
                              CHECK NOW
                            </h5>
                            <div className="emi-input-group mt-3">
                              <label htmlFor="interestRate">
                                Your Monthly Expenses at Current Cost
                              </label>
                              <input
                                type="number"
                                placeholder="Rs."
                                id="interestRate"
                              />
                            </div>
                            <div className="emi-input-group mt-3">
                              <label htmlFor="interestRate">
                                Reduction in Monthly Expenses after retirement
                              </label>
                              <div className="loan-tenure">
                                <input
                                  type="number"
                                  placeholder="Rs / %"
                                  id="interestRate"
                                />
                                <select name="emi" id="emi">
                                  <option value="monthly">(%)</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                              </div>
                            </div>
                            <div className="emi-button-group mt-4">
                              <button className="emi-reset">Reset</button>
                              <button className="emi-calculate">
                                Calculate
                              </button>
                            </div>
                          </div>
                          <div className="tenure-details mt-3">
                            <p>
                              Your Monthly Pension Requirement at the age of
                              ____ years is : ___________Rs
                            </p>
                            <p>
                              Your Current Monthly pension with above provided
                              data is:- ___________Rs To Achieve your Targeted
                              monthly pension requirement of Rs ___________ at
                              the age of ______ years with ____% Future Annual
                              Inflation rate
                            </p>
                            <p>
                              You Need to Contribute Extra Amount of Rs_________
                              Monthly with current investment
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
                            What is : National Pension Scheme ?
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
                            How does : National Pension SchemeWorks ?
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

export default NationalPension;
