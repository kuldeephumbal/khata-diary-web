import React, { useState } from "react";
import { Link } from "react-router-dom";
import whatsappicom from "../../images/whatsapp-icon.svg";
import Radiobtn from "./Radiobtn";
import gallery from "../../images/sliderOne.svg";

function CamplaingBulkMessaging() {
  const [activeTab, setActiveTab] = useState("notes-home");

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Bulk Messaging</span>
            </div>
          </div>

          {/* First Column */}
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg notes-one-pills">
              {/* Tab Buttons */}
              <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                  <button
                    className={`nav-link align-items-center ${
                      activeTab === "notes-home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("notes-home")}
                  >
                    <i className="fa-regular fa-clipboard"></i> SMS
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link align-items-center ${
                      activeTab === "calendar-profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("calendar-profile")}
                  >
                    <img src={whatsappicom} className="img-fluid" alt="" />
                    Whatsapp
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link align-items-center ${
                      activeTab === "birthday-profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("birthday-profile")}
                  >
                    <i className="fa-solid fa-cake-candles"></i> Greetings
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === "notes-home" && (
                  <div className="tab-pane fade show active">
                    <div className="layer-payment-main">
                      <Radiobtn />
                    </div>
                  </div>
                )}
                {activeTab === "calendar-profile" && (
                  <div className="tab-pane fade show active">
                    <div className="layer-payment-main">
                      <Radiobtn />
                    </div>
                  </div>
                )}
                {activeTab === "birthday-profile" && (
                  <div>
                    <div className="gallery">
                      <div className="">
                        <div className="gl-img">
                          <img src={gallery}></img>
                        </div>
                        <div className="greeting-txt">
                          <h3>Greetings</h3>
                          <h4>Share greetings for all the occasions</h4>
                        </div>
                      </div>
                      <div className="">
                        <div className="gl-img">
                          <img src={gallery}></img>
                        </div>
                        <div className="greeting-txt">
                          <h3>Greetings</h3>
                          <h4>Share greetings for all the occasions</h4>
                        </div>
                      </div>
                      <div className="">
                        <div className="gl-img">
                          <img src={gallery}></img>
                        </div>
                        <div className="greeting-txt">
                          <h3>Greetings</h3>
                          <h4>Share greetings for all the occasions</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Second Column - Syncs with First Column */}
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="sender-id">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Sender ID
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Kdiary</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label
                      for="exampleFormControlInput2"
                      className="form-label"
                    >
                      Message
                    </label>
                    <Link to={""}>Use Template</Link>
                  </div>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Payment of (amount) pending with Digilligent (8104455209) Check details here: Khatadairycom/samplelink"
                  ></textarea>
                </div>
              </div>
              <div className=" sc-btn d-flex justify-content-between">
                <Link to={""} className="btn w-50 me-4">
                  Schedule Later
                </Link>
                <Link to={""} className="btn w-50">
                  Send Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamplaingBulkMessaging;
