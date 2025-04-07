import React, { useState } from "react";

function FlatInterest() {
  const [selectedTable, setSelectedTable] = useState("yearly");

  // Add missing function:
  const handleRadioChange = (e) => {
    setSelectedTable(e.target.value);
  };

  // Change default active flat option to Standard / Reducing:
  const [selectedFlat, setSelectedFlat] = useState("Standard");
  const handleFlatChange = (e) => {
    setSelectedFlat(e.target.value);
  };

  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const amount = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const tenure = parseFloat(loanTenure) * 12;

    if (!amount || !monthlyRate || !tenure) return;

    const calculatedEmi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    const payment = calculatedEmi * tenure;
    const interest = payment - amount;

    setEmi(calculatedEmi);
    setTotalPayment(payment);
    setTotalInterest(interest);
  };

  const resetCalculator = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTenure("");
    setEmi(0);
    setTotalPayment(0);
    setTotalInterest(0);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="py-40">
            <div className="emi-heading">
              <h1>EMI: Flat Interest </h1>
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
                        <div className="emi-input-standaed">
                          <input
                            type="radio"
                            id="html3"
                            name="flatOption"
                            value="Standard"
                            onChange={handleFlatChange}
                            checked={selectedFlat === "Standard"}
                          />
                          <label
                            htmlFor="html3"
                            className={
                              selectedFlat === "Standard" ? "active" : ""
                            }
                          >
                            Standard / Reducing
                          </label>
                          <input
                            type="radio"
                            id="html4"
                            name="flatOption"
                            value="Flat"
                            onChange={handleFlatChange}
                            checked={selectedFlat === "Flat"}
                          />
                          <label
                            htmlFor="html4"
                            className={selectedFlat === "Flat" ? "active" : ""}
                          >
                            Flat
                          </label>
                        </div>

                        {selectedFlat === "Standard" && (
                          <>
                            <div>
                              <div className="calculate">
                                <h4>Calculate -</h4>
                                <select name="emi" id="emi">
                                  <option value="monthly">Monthly EMI</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                              </div>
                            </div>
                            <div className="emi-input-group">
                              <label htmlFor="loanAmount">
                                Loan Amount (Rs.)
                              </label>
                              <input
                                type="number"
                                id="loanAmount"
                                placeholder="Rs."
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                              />
                            </div>
                            <div className="emi-input-group">
                              <label htmlFor="interestRate">
                                Annual Interest Rate (%)
                              </label>
                              <input
                                type="number"
                                id="interestRate"
                                placeholder="(%)"
                                value={interestRate}
                                onChange={(e) =>
                                  setInterestRate(e.target.value)
                                }
                              />
                            </div>
                            <div className="emi-input-group">
                              <label htmlFor="loanTenure">Loan Tenure</label>
                              <div className="loan-tenure">
                                <input
                                  type="number"
                                  id="loanTenure"
                                  value={loanTenure}
                                  onChange={(e) =>
                                    setLoanTenure(e.target.value)
                                  }
                                />
                                <select name="emi" id="emi">
                                  <option value="monthly">Years</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                              </div>
                            </div>
                            <div className="emi-button-group">
                              <button
                                className="emi-reset"
                                onClick={resetCalculator}
                              >
                                Reset
                              </button>
                              <button
                                className="emi-calculate"
                                onClick={calculateEMI}
                              >
                                Calculate
                              </button>
                            </div>
                          </>
                        )}

                        {selectedFlat === "Flat" && (
                          <>
                            <div>
                              <div className="calculate">
                                <h4>Calculate - 1</h4>
                                <select name="emi" id="emi">
                                  <option value="monthly">Monthly EMI</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                              </div>
                            </div>
                            <div className="emi-input-group">
                              <label htmlFor="loanAmount">
                                Loan Amount (Rs.)
                              </label>
                              <input
                                type="number"
                                id="loanAmount"
                                placeholder="Rs."
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                              />
                            </div>
                            <div className="emi-input-group">
                              <label htmlFor="interestRate">
                                Annual Interest Rate (%)
                              </label>
                              <input
                                type="number"
                                id="interestRate"
                                placeholder="(%)"
                                value={interestRate}
                                onChange={(e) =>
                                  setInterestRate(e.target.value)
                                }
                              />
                            </div>
                            <div className="emi-input-group">
                              <label htmlFor="loanTenure">Loan Tenure</label>
                              <div className="loan-tenure">
                                <input
                                  type="number"
                                  id="loanTenure"
                                  value={loanTenure}
                                  onChange={(e) =>
                                    setLoanTenure(e.target.value)
                                  }
                                />
                                <select name="emi" id="emi">
                                  <option value="monthly">Years</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                              </div>
                            </div>
                            <div className="emi-button-group">
                              <button
                                className="emi-reset"
                                onClick={resetCalculator}
                              >
                                Reset
                              </button>
                              <button
                                className="emi-calculate"
                                onClick={calculateEMI}
                              >
                                Calculate
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="col-12 col-xl-6 col-md-6 col-sm-6 col-12">
                        {/* <div className="emi-results" id="result">
                          <p>
                            <strong>EMI: </strong> Rs.{" "}
                            <span id="emiValue">{emi.toFixed(2)}</span>
                          </p>
                          <p>
                            <strong>Total Payment: </strong> Rs.{" "}
                            <span id="totalPayment">
                              {totalPayment.toFixed(2)}
                            </span>
                          </p>
                          <p>
                            <strong>Total Interest: </strong> Rs.{" "}
                            <span id="totalInterest">
                              {totalInterest.toFixed(2)}
                            </span>
                          </p>
                        </div> */}
                        {selectedFlat === "Standard" && (
                          <div>
                            <div className="calculate-results-heading">
                              <h2>Results</h2>
                              <div className="calculate-results">
                                <h4>Monthly EMI Amount</h4>
                                <p>1,12,000</p>
                              </div>
                              <div className="calculate-results">
                                <h4>Loan / Principal Amount</h4>
                                <p>1,01,000</p>
                              </div>
                              <div className="calculate-results">
                                <h4>
                                  Total interest paid in_____
                                  (years/Months)_____
                                </h4>
                                <p>12,000</p>
                              </div>
                              <div className="calculate-results">
                                <h4>(Annual Interest Rate)</h4>
                                <p>12,000</p>
                              </div>
                              <div className="calculate-results mb-0">
                                <h4>Total repayment amount </h4>
                                <p>12,000</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedFlat === "Flat" && (
                          <div>
                            <div className="calculate-results-heading">
                              <h2>Results 1</h2>
                              <div className="calculate-results">
                                <h4>Monthly EMI Amount</h4>
                                <p>1,12,000</p>
                              </div>
                              <div className="calculate-results">
                                <h4>Loan / Principal Amount</h4>
                                <p>1,01,000</p>
                              </div>
                              <div className="calculate-results">
                                <h4>
                                  Total interest paid in_____
                                  (years/Months)_____
                                </h4>
                                <p>12,000</p>
                              </div>
                              <div className="calculate-results">
                                <h4>(Annual Interest Rate)</h4>
                                <p>12,000</p>
                              </div>
                              <div className="calculate-results mb-0">
                                <h4>Total repayment amount </h4>
                                <p>12,000</p>
                              </div>
                            </div>
                          </div>
                        )}
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
                            <th>Principal Amount (Rs)</th>
                            <th>Interest Amount (Rs)</th>
                            <th>Total EMI</th>
                            <th>Principal Outstanding</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="year-mark">1</td>
                            <td>10,000.00</td>
                            <td>5000.0</td>
                            <td>200.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr>
                            <td className="year-mark">2</td>
                            <td>5000.0</td>
                            <td>10,000.00</td>
                            <td>300.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr>
                            <td className="year-mark">3</td>
                            <td>5000.0</td>
                            <td>10,000.00</td>
                            <td>200.0</td>
                            <td>300.0</td>
                          </tr>
                          <tr className="total-rupes">
                            <td>Total</td>
                            <td>5000.0</td>
                            <td>10,000.00</td>
                            <td>200.0</td>
                            <td>300.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  {selectedTable === "monthly" && (
                    <>
                      <div className="monthly-year">
                        <h5>Year - 1</h5>
                      </div>
                      <div className="table-monthly" id="monthly">
                        <table className="table table-bordered text-center">
                          <thead>
                            <tr>
                              <th>Months</th>
                              <th>Principal Amount (Rs)</th>
                              <th>Interest Amount (Rs)</th>
                              <th>Total EMI</th>
                              <th>Principal Outstanding</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="year-mark">1</td>
                              <td>10,000.00</td>
                              <td>5000.0</td>
                              <td>200.0</td>
                              <td>200.0</td>
                            </tr>
                            <tr>
                              <td className="year-mark">2</td>
                              <td>5000.0</td>
                              <td>10,000.00</td>
                              <td>300.0</td>
                              <td>200.0</td>
                            </tr>
                            <tr>
                              <td className="year-mark">3</td>
                              <td>5000.0</td>
                              <td>10,000.00</td>
                              <td>200.0</td>
                              <td>300.0</td>
                            </tr>
                            <tr className="total-rupes">
                              <td>Total</td>
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
                      cannot be used for legal purposes.{" "}
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
                            What is EMI?
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
                            How does EMI: Standard/Reducing works?
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

export default FlatInterest;
