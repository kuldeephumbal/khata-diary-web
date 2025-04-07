import React, { useState } from "react";

function TaxCalculator() {
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
              <h1>GST: Calculator </h1>
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
                            <label htmlFor="interestRate">Amount</label>
                            <input
                              type="number"
                              id="interestRate"
                              placeholder=" Years"
                            />
                          </div>
                          <div className="suknya-yogana mt-3">
                            <div className="gst-include">
                              <label for="html">GST Include</label>
                              <input
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                              />
                            </div>
                            <div className="gst-include">
                              <label for="html1">GST Excluded</label>
                              <input
                                type="radio"
                                id="html1"
                                name="fav_language"
                                value="HTML1"
                              />
                            </div>
                          </div>

                          <div className="emi-input-group">
                            <label htmlFor="interestRate">GST Rate</label>
                            <div className="loan-tenure">
                              <select name="emi" className="w-100" id="emi">
                                <option value="monthly">(%)</option>
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
                              <h4>Total GST Amount (IGST)</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results">
                              <h4>(CGST and SGST )</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results">
                              <h4>Amount without GST</h4>
                              <p>1,12,000</p>
                            </div>
                            <div className="calculate-results mb-0">
                              <h4>Amount with GST</h4>
                              <p>1,12,000</p>
                            </div>
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
                  <>
                    <div className="emi-input-group">
                      <label htmlFor="interestRate">Amount</label>
                      <input
                        type="number"
                        id="interestRate"
                        placeholder=" Years"
                      />
                    </div>
                    <div className="suknya-yogana mt-3">
                      <div className="gst-include">
                        <label for="html">GST Include</label>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                      </div>
                      <div className="gst-include">
                        <label for="html1">GST Excluded</label>
                        <input
                          type="radio"
                          id="html1"
                          name="fav_language"
                          value="HTML1"
                        />
                      </div>
                    </div>

                    <div className="emi-input-group">
                      <label htmlFor="interestRate">GST Rate</label>
                      <div className="loan-tenure">
                        <select name="emi" className="w-100" id="emi">
                          <option value="monthly">(%)</option>
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
                <div
                  class="tab-pane tab-month fade"
                  id="messages"
                  role="tabpanel"
                >
                  {" "}
                  <>
                    <div className="emi-input-group">
                      <label htmlFor="interestRate">Amount</label>
                      <input
                        type="number"
                        id="interestRate"
                        placeholder=" Years"
                      />
                    </div>
                    <div className="suknya-yogana mt-3">
                      <div className="gst-include">
                        <label for="html">GST Include</label>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                      </div>
                      <div className="gst-include">
                        <label for="html1">GST Excluded</label>
                        <input
                          type="radio"
                          id="html1"
                          name="fav_language"
                          value="HTML1"
                        />
                      </div>
                    </div>

                    <div className="emi-input-group">
                      <label htmlFor="interestRate">GST Rate</label>
                      <div className="loan-tenure">
                        <select name="emi" className="w-100" id="emi">
                          <option value="monthly">(%)</option>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxCalculator;
