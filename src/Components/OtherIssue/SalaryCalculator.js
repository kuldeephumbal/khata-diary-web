import React, { useState } from "react";

function SalaryCalculator() {
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
              <h1>Salary : Calculator </h1>
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
                          <div className="additions-heading">
                            <h3>Additions</h3>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">Basic Pay</label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder=" Rs ."
                            />
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate1">
                              Dearness Allowance (DA)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate1"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate2">
                              House Rent Allowance ( HRA )
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate2"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate3">
                              Travelling Allowance (TA)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate3"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate4">
                              Laundry/Clothing Allowance
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate4"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate5">Special Pay</label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate5"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate6">
                              Other1 (Edit Name)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate6"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate7">
                              Other2 (Edit Name)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate7"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>

                          <div className="additions-heading">
                            <h3>Deductions</h3>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate8">
                              NPS Employee Contribution
                            </label>
                            <input
                              type="number"
                              id="interestRate8"
                              placeholder=" Rs ."
                            />
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate11">
                              Income Tax / TDS
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate11"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate12">
                              Professional Tax (PT)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate12"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate13">
                              GIS (Group Insurance Scheme)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate13"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate14">GPF / EPF</label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate14"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate15">Stamp Duty</label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate15"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate16">
                              Other1 (Edit Name)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate16"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
                              </select>
                            </div>
                          </div>
                          <div className="emi-input-group">
                            <label htmlFor="interestRate17">
                              Other2 (Edit Name)
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate17"
                                placeholder="(%) / Rs  "
                              />
                              <select name="emi" id="emi">
                                <option value="monthly">(%)</option>
                                <option value="saab">(%)</option>
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
                            <div className="calculate-results mb-0">
                              <h4>Your Total Gross Salary</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Your Net in Hand Salary</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Total NPS Contribution in NPS Account</h4>
                              <p>1,12,000</p>
                            </div>
                          </div>
                          <div>
                            <button className="btn-export-pdf">
                              Export PDF
                            </button>
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
                  <></>
                </div>
                <div
                  class="tab-pane tab-month fade"
                  id="messages"
                  role="tabpanel"
                >
                  <></>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalaryCalculator;
