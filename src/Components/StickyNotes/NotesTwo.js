import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Trash2, BellRing } from "lucide-react";
import DateRangeSelect from "./DateRangeSelect";

function NotesTwo() {
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
              <span>Sticky Notes</span>
            </div>
          </div>

          {/* First Column */}
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg notes-one-pills">
              {/* Tab Buttons */}
              <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "notes-home" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("notes-home")}
                  >
                    <i className="fa-regular fa-clipboard"></i> Notes
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "calendar-profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("calendar-profile")}
                  >
                    <i className="fa-solid fa-calendar-days"></i> Calendar Notes
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "birthday-profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("birthday-profile")}
                  >
                    <i className="fa-solid fa-cake-candles"></i> Birthday &
                    Anniversary
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === "notes-home" && (
                  <div className="tab-pane fade show active">
                    <div className="layer-payment-main">
                      <div className="bell-flex">
                        <div className="bell-time">
                          <Bell size={16} strokeWidth={1} />
                          <span> Today at 1:30</span>
                        </div>
                        <div className="bell-time-title">
                          <p>Created on 1/11/24</p>
                        </div>
                        <div>
                          <button className="btn btn-trash">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                      <div className="layer-payment-text">
                        <h5>You have a payment to send, don’t miss it!</h5>
                        <p>
                          Invest in the skills & knowledge of your team and
                          unlock new levels of efficiency and innovation where
                          business growth is not just a goal, but an ongoing
                          journey.
                        </p>
                      </div>
                    </div>
                    <div className="layer-payment-main">
                      <div className="bell-flex">
                        <div className="bell-time-title">
                          <p>Created on 1/11/24</p>
                        </div>
                        <div>
                          <button className="btn btn-trash">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                      <div className="layer-payment-text">
                        <h5>You have a payment to send, don’t miss it!</h5>
                        <p>
                          Invest in the skills & knowledge of your team and
                          unlock new levels of efficiency and innovation where
                          business growth is not just a goal, but an ongoing
                          journey.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "calendar-profile" && (
                  <div>
                    <div className="calendar-select">
                      <DateRangeSelect />
                    </div>
                    <div className="layer-payment-main">
                      <div className="bell-flex">
                        <div className="bell-time">
                          <Bell size={16} strokeWidth={1} />
                          <span> Today at 1:30</span>
                        </div>
                        <div className="bell-time-title">
                          <p>Created on 1/11/24</p>
                        </div>
                        <div>
                          <button className="btn btn-trash">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                      <div className="layer-payment-text">
                        <h5>You have a payment to send, don’t miss it!</h5>
                        <p>
                          Invest in the skills & knowledge of your team and
                          unlock new levels of efficiency and innovation where
                          business growth is not just a goal, but an ongoing
                          journey.
                        </p>
                      </div>
                    </div>
                    <div className="layer-payment-main">
                      <div className="bell-flex">
                        <div className="bell-time">
                          <Bell size={16} strokeWidth={1} />
                          <span> Today at 1:30</span>
                        </div>
                        <div className="bell-time-title">
                          <p>Created on 1/11/24</p>
                        </div>
                        <div>
                          <button className="btn btn-trash">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                      <div className="layer-payment-text">
                        <h5>You have a payment to send, don’t miss it!</h5>
                        <p>
                          Invest in the skills & knowledge of your team and
                          unlock new levels of efficiency and innovation where
                          business growth is not just a goal, but an ongoing
                          journey.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "birthday-profile" && (
                  <div>
                    <div className="layer-payment-main">
                      <div className="bell-flex">
                        <div className="bell-time">
                          <Bell size={16} strokeWidth={1} />
                          <span> Today at 1:30</span>
                        </div>
                        <div className="bell-time-title">
                          <p>Created on 1/11/24</p>
                        </div>
                        <div>
                          <button className="btn btn-trash">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                      <div className="layer-payment-text">
                        <h5>You have a payment to send, don’t miss it!</h5>
                        <p>
                          Invest in the skills & knowledge of your team and
                          unlock new levels of efficiency and innovation where
                          business growth is not just a goal, but an ongoing
                          journey.
                        </p>
                      </div>
                    </div>
                    <div className="layer-payment-main">
                      <div className="bell-flex">
                        <div className="bell-time">
                          <Bell size={16} strokeWidth={1} />
                          <span> Today at 1:30</span>
                        </div>
                        <div className="bell-time-title">
                          <p>Created on 1/11/24</p>
                        </div>
                        <div>
                          <button className="btn btn-trash">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                      <div className="layer-payment-text">
                        <h5>You have a payment to send, don’t miss it!</h5>
                        <p>
                          Invest in the skills & knowledge of your team and
                          unlock new levels of efficiency and innovation where
                          business growth is not just a goal, but an ongoing
                          journey.
                        </p>
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
              <div className="tab-content">
                {activeTab === "notes-home" && (
                  <div className="tab-pane fade show active">
                    <div>
                      <div className="reminder-title">
                        <h6>Reminder Created</h6>
                        <h5>12 November 24</h5>
                        <h2>
                          Book Review : The Design of Everyday Things by Don
                          Norman
                        </h2>
                        <p>
                          The Design of Everyday Things is required reading for
                          anyone who is interested in the user experience. I
                          personally like to reread it every year or two.
                        </p>
                        <p>
                          Norman is aware of the durability of his work and the
                          applicability of his principles to multiple
                          disciplines.
                        </p>
                      </div>
                      <div>
                        <div className="reminder-flex">
                          <button className=" btn reminder-bell">
                            <BellRing size={16} strokeWidth={1} /> Set reminder
                          </button>
                          <button className="btn set-date">Set date</button>
                        </div>
                        <div>
                          <Link to="/NotesThree" className="add-notes">
                            Save
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "calendar-profile" && (
                  <div className="tab-pane fade show active">
                    <div>
                      <div className="title-notes">
                        <h4>Title</h4>
                        <textarea
                          id="w3review"
                          name="w3review"
                          rows="10"
                          placeholder="Type Something......"
                        ></textarea>
                      </div>
                      <div>
                        <Link to=" " className="add-notes">
                          Add Notes
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "birthday-profile" && (
                  <div className="tab-pane fade show active">
                    <div>
                      <div className="title-notes">
                        <h4>Title</h4>
                        <textarea
                          id="w3review"
                          name="w3review"
                          rows="10"
                          placeholder="Type Something......"
                        ></textarea>
                      </div>
                      <div>
                        <Link to=" " className="add-notes">
                          Add Notes
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesTwo;
