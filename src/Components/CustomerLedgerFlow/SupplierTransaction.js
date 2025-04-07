import React, { useState } from "react";
import {
  Camera,
  Phone,
  ArrowDown,
  ReceiptText,
  Wallet,
  AlarmClock,
  CalendarRange,
  SquarePen,
  Trash2,
} from "lucide-react";
import UserLedger from "../../images/UserLedger.svg";
import Shield_warning from "../../images/shield-warning.svg";
import sms_one from "../../images/sms-one.svg";
import Whatsapp_icon from "../../images/whatsapp-icon.svg";
import Mobile_phone from "../../images/mobile-phone.svg";
import TransactionSaved from "../../images/TransactionSaved.svg";
import Pdf from "../../images/pdf.svg";
import { Link } from "react-router-dom";

function SupplierTransaction() {
  const [showAddTransaction, setShowAddTransaction] = useState(true);
  const [transactionStep, setTransactionStep] = useState(0); // 0: initial, 1: first form, 2: second form
  const [showBillField, setShowBillField] = useState(false); // Add state for bill field visibility

  const handleYouGotClick = () => {
    setShowAddTransaction(false);
    setTransactionStep(1); // Show the first form
  };

  const handleSaveClick = () => {
    // Increment transaction step instead of jumping to 3
    setTransactionStep((prevStep) => prevStep + 1);
  };

  // Add function to toggle bill field visibility
  const toggleBillField = () => {
    setShowBillField(true);
  };

  return (
    <>
      {showAddTransaction ? (
        <>
          <div className="add-transaction">
            <h3>Add Transaction</h3>
          </div>
          <div className="ledge-user">
            <div className="ledge-user-flex">
              <div className="ledge-user-details">
                <img src={UserLedger} className="img-fluid" alt="" />
              </div>
              <div className="ledge-user-details">
                <h3>Adam. S</h3>
                <Link to={"#"}>View Settings</Link>
              </div>
            </div>
            <div>
              <Phone />
            </div>
          </div>
          <div className="shieldwarning">
            <p>
              <img src={Shield_warning} alt="" /> Only you and Adam. S can see
              the entries
            </p>
          </div>
          <div className=" ">
            <div className="shieldwarning-one">
              <img src={Shield_warning} alt="" />
              <p>
                Add Your 1st Transaction <ArrowDown />
              </p>
            </div>
            <div>
              <Link to={"#"} className="btn stock-in me-2">
                You Gave ₹
              </Link>
              <Link
                to={"#"}
                className="btn stock-in stock-green"
                onClick={handleYouGotClick}
              >
                You Got ₹
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {transactionStep === 1 && (
            <div id="add-transaction">
              <div className="add-transaction">
                <h3>Add Transaction</h3>
              </div>
              <div className="add-transaction" style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#0F814D",
                    pointerEvents: "none",
                  }}
                >
                  ₹
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Amount"
                  style={{ paddingLeft: "25px" }}
                />
              </div>
              <div className="add-transaction-got">
                <p>
                  You Got <span>₹0</span> From Adam. S
                </p>
              </div>

              <div>
                <div className="sms-radio-got">
                  <h4>You got Rs 1000 from Adam. S</h4>
                </div>
                <button className="btn-save mt-0" onClick={handleSaveClick}>
                  save
                </button>
              </div>
            </div>
          )}
          {transactionStep === 2 && (
            <div id="new-transaction1">
              <div>
                <div className="add-transaction">
                  <h3>Add Transaction</h3>
                </div>
                <div className="add-transaction-one">
                  <input type="text" name="" id="" placeholder="₹ 1000" />
                </div>
                <div className="add-transaction-details">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter details (Items, Bill no. , Quantity, etc)"
                  />
                </div>
                <div className="text-end">
                  {!showBillField && (
                    <button
                      className="add-transaction-details-button"
                      onClick={toggleBillField}
                    >
                      Add Bill No.
                    </button>
                  )}
                  {showBillField && (
                    <div
                      className="add-transaction"
                      style={{ position: "relative" }}
                      id="add-bill"
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#000",
                          pointerEvents: "none",
                        }}
                      >
                        <ReceiptText size={16} />
                      </span>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Add Bill No. "
                        style={{ paddingLeft: "30px" }}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div className="staff-select-in w-100">
                    <div className="staff-select w-100">
                      <input
                        type="date"
                        name=""
                        placeholder="Enter Amount ₹"
                        id=""
                      />
                    </div>
                    <div className="w-100">
                      <div className="file-input">
                        <input
                          type="file"
                          name="file-input"
                          id="file-input"
                          className="file-input__input"
                        />
                        <label
                          className="file-input__label"
                          htmlFor="file-input"
                        >
                          <Camera size={16} />
                          <span>Attach Bill</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="set-collection-reminder">
                  <h4>Set Collection Reminder</h4>
                  <button
                    type="button"
                    className="btn-set-date"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Set Date
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
                    <div className="modal-dialog  model-padding modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="text-end">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="set-due-date">
                            <h3>Set due date for Aaba Ajoba</h3>
                            <h5>
                              KhataDiary will reminder customer on selected date
                            </h5>
                          </div>
                          <div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="sms1"
                                name="fav_language"
                                value="SMS1"
                              />
                              <label htmlFor="sms1">Next Week</label>
                            </div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="whatsApp1"
                                name="fav_language"
                                value="WhatsApp1"
                              />
                              <label htmlFor="whatsApp1">Next Month</label>
                            </div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="phone-notification1"
                                name="fav_language"
                                value="PhoneNotification1"
                              />
                              <label htmlFor="phone-notification1">
                                Calendar
                              </label>
                            </div>
                          </div>
                          <div className="sms-radio-flex">
                            <div className="sms-radio-one">
                              <h3>
                                <img src={sms_one} alt="" /> sms
                              </h3>
                            </div>
                            <div className="sms-radio-one">
                              <h3>
                                <img src={Whatsapp_icon} alt="" /> WhatsApp
                              </h3>
                            </div>
                            <div className="sms-radio-one">
                              <h3>
                                <img src={Mobile_phone} alt="" /> Phone
                                Notification
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="sms"
                      name="fav_language"
                      value="SMS"
                    />
                    <label htmlFor="sms">SMS</label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="whatsApp"
                      name="fav_language"
                      value="WhatsApp"
                    />
                    <label htmlFor="whatsApp">WhatsApp</label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="phone-notification"
                      name="fav_language"
                      value="PhoneNotification"
                    />
                    <label htmlFor="phone-notification">
                      Phone Notification
                    </label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="do-remind"
                      name="fav_language"
                      value="DoRemind"
                    />
                    <label htmlFor="do-remind">Do not remind</label>
                  </div>
                </div>
                <div>
                  <div className="sms-radio-got">
                    <h4>You got Rs 1000 from Adam. S</h4>
                  </div>
                  <button className="btn-save mt-0" onClick={handleSaveClick}>
                    save
                  </button>
                </div>
              </div>
            </div>
          )}
          {transactionStep === 3 && (
            <>
              <div className="Transaction-bg">
                <div className="transaction-heading">
                  <h3>Transaction</h3>
                </div>
                <div className="transaction-saved-img">
                  <img src={TransactionSaved} alt="" />
                </div>
                <div className="transaction-heading">
                  <h2>Transaction Saved</h2>
                  <h4>₹ 1000</h4>
                </div>
              </div>
              <div>
                <div className="another-transaction">
                  <h6>Add another transaction to Adam. S</h6>
                </div>
                <div>
                  <Link to={"#"} className="btn stock-in me-2">
                    You Gave ₹
                  </Link>
                  <Link to={"#"} className="btn stock-in stock-green">
                    You Got ₹
                  </Link>
                </div>
                <div className="sms-radio-mt">
                  <div className="sms-radio-flex">
                    <div className="sms-radio-one">
                      <h3>
                        <img src={sms_one} alt="" /> sms
                      </h3>
                    </div>
                    <div className="sms-radio-one">
                      <h3>
                        <img src={Whatsapp_icon} alt="" /> WhatsApp
                      </h3>
                    </div>
                    <div className="sms-radio-one">
                      <h3>
                        <img src={Mobile_phone} alt="" /> Phone Notification
                      </h3>
                    </div>
                  </div>
                  <div>
                    <button className="btn-save mt-0" onClick={handleSaveClick}>
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {transactionStep === 4 && (
            <>
              <div className="settled-up">
                <div className="ledge-user-tran">
                  <div className="ledge-user-flex">
                    <div className="ledge-user-details-one">
                      <img src={UserLedger} className="img-fluid" alt="" />
                    </div>
                    <div className="ledge-user-details-one">
                      <h3>Adam. S</h3>
                      <Link to={"#"}>View Settings</Link>
                    </div>
                  </div>
                  <div className="ledge-user-details-one">
                    <Phone />
                  </div>
                </div>
                <div className="settled-up-heading">
                  <h4>Settled up</h4>
                  <h5>₹ 0</h5>
                </div>
              </div>
              <div className="report-transaction-flex">
                <div className="report-transaction">
                  <h4>
                    <img src={Pdf} className="img-fluid" alt="" />
                    Report
                  </h4>
                </div>
                <div className="report-transaction">
                  <h4>
                    <Wallet />
                    Pay
                  </h4>
                </div>
                <div className="report-transaction">
                  <h4>
                    <AlarmClock />
                    Reminder
                  </h4>
                </div>
                <div className="report-transaction">
                  <h4>
                    <CalendarRange />
                    Date
                  </h4>
                </div>
              </div>
              <div>
                <div className="row report-border-flex">
                  <div className="col-4">
                    <div className="report-border"></div>
                  </div>
                  <div className="col-4">
                    <div className="report-border-date">
                      <h3>
                        <span>23</span> <span>Nov</span> <span>24</span> -
                        <span>Today</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="report-border"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <div className="entries-heading">
                      <h3>ENTRIES</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="entries-heading">
                      <h3>TRANSACTION</h3>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="entries-heading">
                      <h3>BALANCE</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row entries-border">
                    <div className="col-3">
                      <div className="entries-date entries-bal-padding">
                        <h5>08 Nov 24</h5>
                        <p>06:53 PM</p>
                      </div>
                    </div>
                    <div className="col-4 entries-date-bg d-flex justify-content-center -w-100 ">
                      <div className=" entries-bal-padding text-center">
                        <h4>₹1,000</h4>
                        <p>Payment in</p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="entries-bal entries-bal-padding">
                        <h3>
                          Bal: <span>₹ 0</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row entries-border">
                    <div className="col-3">
                      <div className="entries-date entries-bal-padding">
                        <h5>08 Nov 24</h5>
                        <p>06:53 PM</p>
                      </div>
                    </div>
                    <div className="col-4 entries-date-bg d-flex justify-content-center -w-100 ">
                      <div className=" entries-bal-padding text-center">
                        <h4>₹800</h4>
                        <p>Payment in</p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="entries-bal entries-bal-one entries-bal-padding">
                        <h3>
                          Bal: <span>₹ 1000</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row report-border-flex">
                  <div className="col-4">
                    <div className="report-border"></div>
                  </div>
                  <div className="col-4">
                    <div className="report-border-date">
                      <h3>
                        <span>23</span> <span>Nov</span> <span>24</span> -
                        <span>14 days ago</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="report-border"></div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <div className="entries-heading">
                      <h3>ENTRIES</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="entries-heading">
                      <h3>TRANSACTION</h3>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="entries-heading">
                      <h3>BALANCE</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row entries-border">
                    <div className="col-3">
                      <div className="entries-date entries-bal-padding">
                        <h5>08 Nov 24</h5>
                        <p>06:53 PM</p>
                      </div>
                    </div>
                    <div className="col-4 entries-date-bg d-flex justify-content-center -w-100 ">
                      <div className=" entries-bal-padding text-center">
                        <h4>₹1,000</h4>
                        <p>Payment in</p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="entries-bal entries-bal-one entries-bal-padding">
                        <h3>
                          Bal: <span>₹ 1000</span>
                        </h3>
                        <p>Dummy description for added Balance</p>
                      </div>
                    </div>
                  </div>
                  <div className="row entries-border">
                    <div className="col-3">
                      <div className="entries-date entries-bal-padding">
                        <h5>08 Nov 24</h5>
                        <p>06:53 PM</p>
                      </div>
                    </div>
                    <div className="col-4 entries-date-bg entries-date-bg-one d-flex justify-content-center -w-100 ">
                      <div className=" entries-bal-padding text-center">
                        <h4>₹2,000</h4>
                        <p>Payment in</p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="entries-bal entries-bal-one entries-bal-padding">
                        <h3>
                          Bal: <span>₹ 1000</span>
                        </h3>
                        <p>Dummy description for added Balance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settled-up-transaction">
                <Link to={"#"} className="btn stock-in me-2">
                  You Gave ₹
                </Link>
                <Link
                  to={"#"}
                  className="btn stock-in stock-green"
                  onClick={handleSaveClick}
                >
                  You Got ₹
                </Link>
              </div>
            </>
          )}
          {transactionStep === 5 && (
            <>
              <div className="settled-up">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="sale-bill">
                      <h3>Sale Bill #2</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end">
                      <button className="btn-squared me-2">
                        <SquarePen size={18} />
                      </button>
                      <button className="btn-squared">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ledge-user">
                  <div className="ledge-user-flex">
                    <div className="ledge-user-details">
                      <img src={UserLedger} className="img-fluid" alt="" />
                    </div>
                    <div className="ledge-user-details">
                      <h3>Adam. S</h3>
                      <h6>Created on: 08 Nov 2024</h6>
                    </div>
                  </div>
                  <div className="unpaid-party text-end">
                    <h5>₹ 1,000</h5>
                    <p>Unpaid by party</p>
                  </div>
                </div>
                <div className="continue-with">
                  <h4>Continue with:</h4>
                  <div>
                    <button className="btn-sale me-2"> + SALE RETURN</button>
                    <button className="btn-sale"> + PAYMENT IN</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="net-amount mt-5">
                  <h5>Net Amount</h5>
                  <h6>₹ 1,000</h6>
                </div>
                <div className="net-amount">
                  <h5>Taxes</h5>
                  <h6>₹ 0</h6>
                </div>
                <div className="net-amount">
                  <h5 className="gross-amount">Gross Amount</h5>
                  <h5 className="gross-price">₹ 1,000</h5>
                </div>
              </div>
              <div>
                <button
                  className="btn-view btn-view-mt"
                  onClick={handleSaveClick}
                >
                  View PDF
                </button>
              </div>
            </>
          )}
          {transactionStep === 6 && (
            <>
              <div className="settled-up">
                <div className="payment-bg">
                  <div className="payment-flex">
                    <div className="ledge-user-flex">
                      <div className="ledge-user-details">
                        <img src={UserLedger} className="img-fluid" alt="" />
                      </div>
                      <div className="ledge-user-details">
                        <h3>Adam. S</h3>
                        <h6>06:53 PM 08 NOV 2024</h6>
                      </div>
                    </div>
                    <div className="unpaid-online text-end">
                      <h5>₹ 1,000</h5>
                      <p>Online</p>
                    </div>
                  </div>
                  <div className="adjust-invoice">
                    <h4>Adjusted Invoice</h4>
                    <div className="adjust-invoice-flex">
                      <h3>#2</h3>
                      <h3>₹ 20</h3>
                    </div>
                  </div>
                  <div>
                    <button className="btn-edit-tran">Edit Transactions</button>
                  </div>
                </div>
              </div>
              <div className="btn-tran-flex btn-view-mt">
                <button className="btn-dele-tran">Delete</button>
                <button className="btn-share-tran" onClick={handleSaveClick}>
                  Share
                </button>
              </div>
            </>
          )}
          {transactionStep === 7 && (
            <>
              <div className="settled-up">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="sale-bill">
                      <h3>Sale Bill #2</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end">
                      <button className="btn-squared me-2">
                        <SquarePen size={18} />
                      </button>
                      <button className="btn-squared">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ledge-user">
                  <div className="ledge-user-flex">
                    <div className="ledge-user-details">
                      <img src={UserLedger} className="img-fluid" alt="" />
                    </div>
                    <div className="ledge-user-details">
                      <h3>Adam. S</h3>
                      <h6>Created on: 08 Nov 2024</h6>
                    </div>
                  </div>
                  <div className="unpaid-party full-paid-party text-end">
                    <h5>₹ 1,000</h5>
                    <p>Fully Paid by Party</p>
                  </div>
                </div>
                <div className="continue-with">
                  <h4>Continue with:</h4>
                  <div>
                    <button className="btn-sale me-2"> + SALE RETURN</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="net-amount mt-5 mb-4">
                  <h5 className="gross-amount">Linked Transactions</h5>
                  <Link to={"#"}>PAYMENT IN #2 </Link>
                </div>
                <div className="net-amount">
                  <h5>Net Amount</h5>
                  <h6>₹ 1,000</h6>
                </div>
                <div className="net-amount">
                  <h5>Taxes</h5>
                  <h6>₹ 0</h6>
                </div>
                <div className="net-amount">
                  <h5 className="gross-amount">Gross Amount</h5>
                  <h5 className="gross-price">₹ 1,000</h5>
                </div>
              </div>
              <div>
                <button
                  className="btn-view btn-view-mt"
                  onClick={handleSaveClick}
                >
                  View PDF
                </button>
              </div>
            </>
          )}
          {transactionStep === 8 && (
            <>
              <div className="settled-up">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="sale-bill">
                      <h3>Sale Bill #2</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end">
                      <button className="btn-squared me-2">
                        <SquarePen size={18} />
                      </button>
                      <button className="btn-squared">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ledge-user">
                  <div className="ledge-user-flex">
                    <div className="ledge-user-details">
                      <img src={UserLedger} className="img-fluid" alt="" />
                    </div>
                    <div className="ledge-user-details">
                      <h3>Adam. S</h3>
                      <h6>Created on: 08 Nov 2024</h6>
                    </div>
                  </div>
                  <div className="unpaid-party full-paid-party text-end">
                    <h5>₹ 1,000</h5>
                    <p>Fully Paid </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="net-amount mt-5 ">
                    <h5 className="gross-amount">Linked Transactions</h5>
                  </div>
                  <div className="mb-4 net-amount">
                    <div>
                      <Link to={"#"} className="me-2">
                        PAYMENT IN #2
                      </Link>
                      <Link to={"#"}>SALE RETURN #1 </Link>
                    </div>
                  </div>
                </div>

                <div className="net-amount">
                  <h5>Net Amount</h5>
                  <h6>₹ 1,000</h6>
                </div>
                <div className="net-amount">
                  <h5>Taxes</h5>
                  <h6>₹ 0</h6>
                </div>
                <div className="net-amount">
                  <h5 className="gross-amount">Gross Amount</h5>
                  <h5 className="gross-price">₹ 1,000</h5>
                </div>
              </div>
              <div>
                <button
                  className="btn-view btn-view-mt"
                  onClick={handleSaveClick}
                >
                  View PDF
                </button>
              </div>
            </>
          )}
          {transactionStep === 9 && (
            <>
              <div className="settled-up">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="sale-bill">
                      <h3>Sale Return #1</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end">
                      <button className="btn-squared me-2">
                        <SquarePen size={18} />
                      </button>
                      <button className="btn-squared">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ledge-user">
                  <div className="ledge-user-flex">
                    <div className="ledge-user-details">
                      <img src={UserLedger} className="img-fluid" alt="" />
                    </div>
                    <div className="ledge-user-details">
                      <h3>Adam. S</h3>
                      <h6>Created on: 08 Nov 2024</h6>
                    </div>
                  </div>
                  <div className="unpaid-party full-paid-party text-end">
                    <h5>₹ 1,000</h5>
                    <p>Fully Paid by You </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="net-amount mt-5 ">
                    <h5 className="gross-amount">Linked Transactions</h5>
                  </div>
                  <div className="mb-4 net-amount">
                    <div>
                      <Link to={"#"} className="me-2">
                        SALE #1
                      </Link>
                      <Link to={"#"}>PAYMENT OUT #1 </Link>
                    </div>
                  </div>
                </div>

                <div className="net-amount">
                  <h5>Net Amount</h5>
                  <h6>₹ 1,000</h6>
                </div>
                <div className="net-amount">
                  <h5>Taxes</h5>
                  <h6>₹ 0</h6>
                </div>
                <div className="net-amount">
                  <h5 className="gross-amount">Gross Amount</h5>
                  <h5 className="gross-price">₹ 1,000</h5>
                </div>
              </div>
              <div>
                <button className="btn-view btn-view-mt">View PDF</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default SupplierTransaction;
