import React, { useState } from "react";

function PublicProvident() {
  const [selectedTable, setSelectedTable] = useState("yearly");

  const handleRadioChange = (e) => {
    setSelectedTable(e.target.value);
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
              <h1>PPF: Public Provident Fund </h1>
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
                          <div className="emi-input-group">
                            <label htmlFor="loanAmount">
                              Current balance in PPF account
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
                              Regular deposit amount
                            </label>
                            <div className="loan-tenure">
                              <input
                                type="number"
                                id="interestRate"
                                placeholder="Rs."
                                value={interestRate}
                                onChange={(e) =>
                                  setInterestRate(e.target.value)
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
                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Annual Interest rate
                            </label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder=" (%)."
                            />
                          </div>

                          <div className="emi-input-group">
                            <label htmlFor="interestRate">Maturity Term</label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder=" Minimum 15 years  "
                            />
                          </div>

                          <div className="emi-input-group">
                            <label htmlFor="interestRate">
                              Terms completed
                            </label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder="Years"
                            />
                          </div>

                          <div className="emi-button-group mt-4">
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
                          <div className="tenure-details">
                            <p>
                              For terms completed Existing account holder Enter
                              number of completed years from opening of PPF
                              account, New Account Holder Enter "0"
                            </p>
                          </div>
                        </>
                      </div>
                      <div className="col-12 col-xl-6 col-md-6 col-sm-6 col-12">
                        <div>
                          <div className="calculate-results-heading mb-4">
                            <h2>Results</h2>
                            <div className="calculate-results">
                              <h4>Total maturity amount (D+1)</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results">
                              <h4>
                                Total Interest you will receive in ____
                                Years/Months
                              </h4>
                              <p>1,01,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Total deposit amount </h4>
                              <p>12,000</p>
                            </div>
                          </div>
                          <div className="extension-ppf">
                            <h4>Extension of PPF</h4>
                            <>
                              <div className="emi-input-group">
                                <label htmlFor="loanAmount">
                                  Current Balance in PPF Account
                                </label>
                                <input
                                  type="number"
                                  id="loanAmount"
                                  placeholder="Rs."
                                  value={loanAmount}
                                  onChange={(e) =>
                                    setLoanAmount(e.target.value)
                                  }
                                />
                              </div>
                              <div className="emi-input-group">
                                <label htmlFor="loanAmount">
                                  Extension Period Years (In multiple of 5
                                  years, up to 20 years )
                                </label>
                                <input type="number" id="loanAmount" />
                              </div>
                              <div className="emi-input-group">
                                <label htmlFor="interestRate">
                                  Extension Type
                                </label>
                                <div className="loan-tenure ">
                                  <select name="emi" className="w-100" id="emi">
                                    <option value="monthly">
                                      With Deposit
                                    </option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                  </select>
                                </div>
                              </div>
                              <div className="emi-input-group">
                                <label htmlFor="interestRate">
                                  Regular Deposit Amount
                                </label>
                                <div className="loan-tenure ">
                                  <input type="number" id="interestRate" />
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
                                  Annual Interest Rate
                                </label>
                                <input
                                  type="number"
                                  id="interestRate"
                                  placeholder="  %  "
                                />
                              </div>
                              <div className="emi-button-group mt-4">
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
                          </div>
                          <div className="calculate-results-heading mt-4">
                            <h2>Results</h2>
                            <div className="calculate-results">
                              <h4>Total maturity amount (D+1)</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results">
                              <h4>
                                Total Interest you will receive in ____
                                Years/Months
                              </h4>
                              <p>1,01,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Total deposit amount </h4>
                              <p>12,000</p>
                            </div>
                          </div>
                          <div className="tenure-details">
                            <p>
                              At the end of your tenure of _______ ( Months /
                              Years ) you will get Total Amount of Amount of Rs
                              ________ ( D + I )`
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
                            <th>Deposit Amount (Rs)</th>
                            <th>Interest Earned (Rs) </th>
                            <th>Year End Balance (Rs)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="year-mark">1</td>
                            <td>5000.0</td>
                            <td>200.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr>
                            <td className="year-mark">2</td>
                            <td>10,000.00</td>
                            <td>300.0</td>
                            <td>200.0</td>
                          </tr>
                          <tr>
                            <td className="year-mark">3</td>
                            <td>5000.0</td>
                            <td>10,000.00</td>
                            <td>200.0</td>
                          </tr>
                          <tr className="total-rupes">
                            <td>Total</td>
                            <td>5000.0</td>
                            <td>200.0</td>
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
                              <th>Deposit Amount (Rs)</th>
                              <th>Interest Earned (Rs) </th>
                              <th>Month End Balance</th>
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
                      <div class="monthly-year">
                        <h5>Year - 2</h5>
                      </div>
                      <div className="table-monthly" id="monthly">
                        <table className="table table-bordered text-center">
                          <thead>
                            <tr>
                              <th>Months</th>
                              <th>Deposit Amount (Rs)</th>
                              <th>Interest Earned (Rs) </th>
                              <th>Month End Balance</th>
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
                            What is PPF
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
                            How PPF works
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
                            What is income tax
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
                            Maturity period
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
                            Investment option in PPF
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
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            features of PPF
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
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
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Sip or PPF
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
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

export default PublicProvident;
