import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Cookies from "js-cookie";

function SupplierTransaction({ ledgerId }) {
  console.log("Ledger ID:", ledgerId);
  const [showAddTransaction, setShowAddTransaction] = useState(true);
  const [transactionStep, setTransactionStep] = useState(0); // 0: initial, 1: first form, 2: second form
  const [showBillField, setShowBillField] = useState(false); // Add state for bill field visibility
  const [transactionData, setTransactionData] = useState([]); // State to store transaction data

  // Add these state variables at the top of your component
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [messageType, setMessageType] = useState(''); // Default value
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchamount, setFetchAmount] = useState('');

  const userId = Cookies.get("KhataDiary_user_id");
  const accessToken = Cookies.get("KhataDiary_access_token");

  // Helper functions for date calculations
  const getNextWeek = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  };

  const getNextMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  };

  const handleYouGotClick = () => {
    setShowAddTransaction(false);
    setTransactionStep(1);
  };

  const handleYouGiveClick = () => {
    setShowAddTransaction(false);
    setTransactionStep(2);
  };

  // Add function to toggle bill field visibility
  const toggleBillField = () => {
    setShowBillField(true);
  };

  useEffect(() => {
    if (ledgerId) {
      fetchTransactionData();
    }
  }, [ledgerId]);

  const fetchTransactionData = async () => {
    try {
      const response = await axios.get(
        `https://khatadiary.synoventum.site/v1/ledger/${ledgerId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTransactionData(response.data);
      console.log("Transaction Data:", response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }


  const submitTransaction = () => {
    setIsSubmitting(true);

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      setIsSubmitting(false);
      return;
    }

    const transactionData = {
      ledger_id: ledgerId,
      transaction_type: transactionStep === 1 ? "got" : "give",
      amount: parsedAmount,
      details: details || "",
      bill_number: billNumber || "",
      reminder_date: reminderDate || null,
      message_type: messageType || "email",
      due_date: dueDate || null,
    };

    console.log("Submitting transaction data:", transactionData);

    axios
      .post("https://khatadiary.synoventum.site/v1/transactions", transactionData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Transaction created:", response.data);
        fetchTransactionData();
        const formattedAmount = parsedAmount.toLocaleString();
        setFetchAmount(formattedAmount);
        setTransactionStep(3);
      })
      .catch((error) => {
        console.error("Error creating transaction:", error.response?.data || error.message);
        alert(
          `Failed to create transaction: ${error.response?.data?.message || "Server error. Please try again."
          }`
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  const resetForm = () => {
    setAmount("");
    setDetails("");
    setBillNumber("");
    setDueDate("");
    setReminderDate("");
    setMessageType("");
    setShowBillField(false);
  };

  const handleSaveClick = () => {
    if (transactionStep === 1 || transactionStep === 2) {
      // Move to details step
      submitTransaction();
    } else if (transactionStep === 3) {
      // After confirmation, reset and return to initial view
      resetForm();
      setShowAddTransaction(true);
      setTransactionStep(0);
      fetchTransactionData();
    }
  };


  return (
    <>
      {showAddTransaction ? (
        // <>
        //   <div className="add-transaction">
        //     <h3>Add Transaction</h3>
        //   </div>
        //   <div className="ledge-user">
        //     <div className="ledge-user-flex">
        //       <div className="ledge-user-details">
        //         <img src={UserLedger} className="img-fluid" alt="" />
        //       </div>
        //       <div className="ledge-user-details">
        //         <h3>Adam. S</h3>
        //         <Link to={"#"}>View Settings</Link>
        //       </div>
        //     </div>
        //     <div>
        //       <Phone />
        //     </div>
        //   </div>
        //   <div className="shieldwarning">
        //     <p>
        //       <img src={Shield_warning} alt="" /> Only you and Adam. S can see
        //       the entries
        //     </p>
        //   </div>
        //   <div className=" ">
        //     <div className="shieldwarning-one">
        //       <img src={Shield_warning} alt="" />
        //       <p>
        //         Add Your 1st Transaction <ArrowDown />
        //       </p>
        //     </div>
        //     <div>
        //       <Link to={"#"} className="btn stock-in me-2">
        //         You Gave ₹
        //       </Link>
        //       <Link
        //         to={"#"}
        //         className="btn stock-in stock-green"
        //         onClick={handleYouGotClick}
        //       >
        //         You Got ₹
        //       </Link>
        //     </div>
        //   </div>
        // </>
        <>
          {transactionData && (
            <>
              <div className="settled-up">
                <div className="ledge-user-tran">
                  <div className="ledge-user-flex">
                    {/* <div className="ledge-user-details-one">
                      <img src={UserLedger} className="img-fluid" alt="" />
                    </div> */}
                    <div className="ledge-user-details profile-letter">
                      {transactionData.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="ledge-user-details-one">
                      <h3>{transactionData.name}</h3>
                      <Link to={"#"}>View Settings</Link>
                    </div>
                  </div>
                  <div className="ledge-user-details-one">
                    <Phone />
                  </div>
                </div>
                <div className="settled-up-heading">
                  <h4>{transactionData.balance === 0 ? "Settled up" : transactionData.balance < 0 ? "You will give" : "You will get"}</h4>
                  <h5>₹ {Math.abs(transactionData.balance).toLocaleString()}</h5>
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

              {transactionData.transactions && transactionData.transactions.length > 0 && (
                <div>
                  {/* Group transactions by date and display them */}
                  <div className="row report-border-flex">
                    <div className="col-4">
                      <div className="report-border"></div>
                    </div>
                    <div className="col-4">
                      <div className="report-border-date">
                        <h3>
                          <span>{new Date(transactionData.transactions[0].created_at).getDate()}</span>{" "}
                          <span>{new Date(transactionData.transactions[0].created_at).toLocaleString('default', { month: 'short' })}</span>{" "}
                          <span>{new Date(transactionData.transactions[0].created_at).getFullYear()}</span> -
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

                  <div className="transaction-list">
                    {transactionData.transactions.map((transaction, index) => {
                      const transactionDate = new Date(transaction.created_at);
                      const formattedDate = `${transactionDate.getDate()} ${transactionDate.toLocaleString('default', { month: 'short' })} ${transactionDate.getFullYear()}`;
                      const formattedTime = transactionDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                      // Calculate running balance (this is simplified - you may need to adjust based on your data)
                      const runningBalance = index === transactionData.transactions.length - 1
                        ? 0
                        : Math.abs(Number(transactionData.balance));

                      return (
                        <div className="row entries-border" key={transaction.id}>
                          <div className="col-3">
                            <div className="entries-date entries-bal-padding">
                              <h5>{formattedDate}</h5>
                              <p>{formattedTime}</p>
                            </div>
                          </div>
                          <div className={`col-4 entries-date-bg ${transaction.transaction_type === "got" ? "" : "entries-date-bg-one"} d-flex justify-content-center -w-100`}>
                            <div className="entries-bal-padding text-center">
                              <h4>₹{Number(transaction.amount).toLocaleString()}</h4>
                              <p>{transaction.transaction_type === "got" ? "Payment in" : "Payment out"}</p>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="entries-bal entries-bal-one entries-bal-padding">
                              <h3>Bal: ₹{Math.abs(transactionData.balance).toLocaleString()}</h3>
                              {transaction.details && <p>{transaction.details}</p>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="settled-up-transaction">
                <Link
                  to={"#"}
                  className="btn stock-in me-2"
                  onClick={handleYouGiveClick}
                >
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
            </>
          )}
        </>
      ) : (
        <>
          {transactionStep === 1 && (
            <div id="new-transaction1">
              <div>
                <div className="add-transaction">
                  <h3>Add Transaction</h3>
                </div>
                <div className="add-transaction-one">
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="₹ 1000"
                  />
                </div>
                <div className="add-transaction-details">
                  <input
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
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
                        value={billNumber}
                        onChange={(e) => setBillNumber(e.target.value)}
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
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        placeholder="Enter Due Date"
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
                    <div className="modal-dialog model-padding modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="text-end">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="set-due-date">
                            <h3>Set due date for {transactionData?.name || "customer"}</h3>
                            <h5>
                              KhataDiary will reminder customer on selected date
                            </h5>
                          </div>
                          <div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="reminder-week"
                                name="reminder_date"
                                value={getNextWeek()}
                                onChange={(e) => setReminderDate(e.target.value)}
                              />
                              <label htmlFor="reminder-week">Next Week</label>
                            </div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="reminder-month"
                                name="reminder_date"
                                value={getNextMonth()}
                                onChange={(e) => setReminderDate(e.target.value)}
                              />
                              <label htmlFor="reminder-month">Next Month</label>
                            </div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="reminder-calendar"
                                name="reminder_date"
                                checked={!reminderDate.match(/next-(week|month)/)}
                                onChange={() => { }}
                              />
                              <label htmlFor="reminder-calendar">
                                Calendar
                                <input
                                  type="date"
                                  value={reminderDate}
                                  onChange={(e) => setReminderDate(e.target.value)}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ marginLeft: '10px' }}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="sms-radio-flex">
                            <div className="sms-radio-one">
                              <h3>
                                <img src={sms_one} alt="" />
                                <input
                                  type="radio"
                                  name="message_type"
                                  value="sms"
                                  checked={messageType === "sms"}
                                  onChange={() => setMessageType("sms")}
                                />
                                sms
                              </h3>
                            </div>
                            <div className="sms-radio-one">
                              <h3>
                                <img src={Whatsapp_icon} alt="" />
                                <input
                                  type="radio"
                                  name="message_type"
                                  value="whatsapp"
                                  checked={messageType === "whatsapp"}
                                  onChange={() => setMessageType("whatsapp")}
                                />
                                WhatsApp
                              </h3>
                            </div>
                            <div className="sms-radio-one">
                              <h3>
                                <img src={Mobile_phone} alt="" />
                                <input
                                  type="radio"
                                  name="message_type"
                                  value="notification"
                                  checked={messageType === "notification"}
                                  onChange={() => setMessageType("notification")}
                                />
                                Phone Notification
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
                      name="message_type"
                      value="sms"
                      checked={messageType === "sms"}
                      onChange={() => setMessageType("sms")}
                    />
                    <label htmlFor="sms">SMS</label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="whatsApp"
                      name="message_type"
                      value="whatsapp"
                      checked={messageType === "whatsapp"}
                      onChange={() => setMessageType("whatsapp")}
                    />
                    <label htmlFor="whatsApp">WhatsApp</label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="phone-notification"
                      name="message_type"
                      value="notification"
                      checked={messageType === "notification"}
                      onChange={() => setMessageType("notification")}
                    />
                    <label htmlFor="phone-notification">
                      Phone Notification
                    </label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="do-remind"
                      name="message_type"
                      value="email"
                      checked={messageType === "email" || !messageType}
                      onChange={() => setMessageType("email")}
                    />
                    <label htmlFor="do-remind">Email (Default)</label>
                  </div>
                </div>
                <div>
                  <div className="sms-radio-got">
                    <h4>
                      {transactionStep === 1
                        ? `You got ₹${amount || 0} from ${transactionData?.name || "customer"}`
                        : `You give ₹${amount || 0} to ${transactionData?.name || "customer"}`}
                    </h4>
                  </div>
                  <button
                    className="btn-save mt-0"
                    onClick={handleSaveClick}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          )}
          {transactionStep === 2 && (
            <div id="new-transaction1">
              <div>
                <div className="add-transaction">
                  <h3>Add Transaction</h3>
                </div>
                {transactionStep === 1
                  ? <div className="add-transaction-one">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="₹ 1000"
                    />
                  </div>
                  : <div className="add-transaction-two">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="₹ 1000"
                    />
                  </div>}

                <div className="add-transaction-details">
                  <input
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
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
                        value={billNumber}
                        onChange={(e) => setBillNumber(e.target.value)}
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
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        placeholder="Enter Due Date"
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
                    <div className="modal-dialog model-padding modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="text-end">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="set-due-date">
                            <h3>Set due date for {transactionData?.name || "customer"}</h3>
                            <h5>
                              KhataDiary will reminder customer on selected date
                            </h5>
                          </div>
                          <div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="reminder-week"
                                name="reminder_date"
                                value={getNextWeek()}
                                onChange={(e) => setReminderDate(e.target.value)}
                              />
                              <label htmlFor="reminder-week">Next Week</label>
                            </div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="reminder-month"
                                name="reminder_date"
                                value={getNextMonth()}
                                onChange={(e) => setReminderDate(e.target.value)}
                              />
                              <label htmlFor="reminder-month">Next Month</label>
                            </div>
                            <div className="sms-radio">
                              <input
                                type="radio"
                                id="reminder-calendar"
                                name="reminder_date"
                                checked={!reminderDate.match(/next-(week|month)/)}
                                onChange={() => { }}
                              />
                              <label htmlFor="reminder-calendar">
                                Calendar
                                <input
                                  type="date"
                                  value={reminderDate}
                                  onChange={(e) => setReminderDate(e.target.value)}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{ marginLeft: '10px' }}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="sms-radio-flex">
                            <div className="sms-radio-one">
                              <h3>
                                <img src={sms_one} alt="" />
                                <input
                                  type="radio"
                                  name="message_type"
                                  value="sms"
                                  checked={messageType === "sms"}
                                  onChange={() => setMessageType("sms")}
                                />
                                sms
                              </h3>
                            </div>
                            <div className="sms-radio-one">
                              <h3>
                                <img src={Whatsapp_icon} alt="" />
                                <input
                                  type="radio"
                                  name="message_type"
                                  value="whatsapp"
                                  checked={messageType === "whatsapp"}
                                  onChange={() => setMessageType("whatsapp")}
                                />
                                WhatsApp
                              </h3>
                            </div>
                            <div className="sms-radio-one">
                              <h3>
                                <img src={Mobile_phone} alt="" />
                                <input
                                  type="radio"
                                  name="message_type"
                                  value="notification"
                                  checked={messageType === "notification"}
                                  onChange={() => setMessageType("notification")}
                                />
                                Phone Notification
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
                      name="message_type"
                      value="sms"
                      checked={messageType === "sms"}
                      onChange={() => setMessageType("sms")}
                    />
                    <label htmlFor="sms">SMS</label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="whatsApp"
                      name="message_type"
                      value="whatsapp"
                      checked={messageType === "whatsapp"}
                      onChange={() => setMessageType("whatsapp")}
                    />
                    <label htmlFor="whatsApp">WhatsApp</label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="phone-notification"
                      name="message_type"
                      value="notification"
                      checked={messageType === "notification"}
                      onChange={() => setMessageType("notification")}
                    />
                    <label htmlFor="phone-notification">
                      Phone Notification
                    </label>
                  </div>
                  <div className="sms-radio">
                    <input
                      type="radio"
                      id="do-remind"
                      name="message_type"
                      value="email"
                      checked={messageType === "email" || !messageType}
                      onChange={() => setMessageType("email")}
                    />
                    <label htmlFor="do-remind">Email (Default)</label>
                  </div>
                </div>
                <div>
                  <div className="sms-radio-got">
                    <h4>
                      {transactionStep === 1
                        ? `You got ₹${amount || 0} from ${transactionData?.name || "customer"}`
                        : `You give ₹${amount || 0} to ${transactionData?.name || "customer"}`}
                    </h4>
                  </div>
                  <button
                    className="btn-save mt-0"
                    onClick={handleSaveClick}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save'}
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
                  <h4>₹ {fetchamount}</h4>
                </div>
              </div>
              <div>
                <div className="another-transaction">
                  <h6>Add another transaction to {transactionData.name}</h6>
                </div>
                <div className="settled-up-transaction">
                  <Link
                    to={"#"}
                    className="btn stock-in me-2"
                    onClick={handleYouGiveClick}
                  >
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
