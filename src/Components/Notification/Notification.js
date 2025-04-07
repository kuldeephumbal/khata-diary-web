import React from "react";
import { Link } from "react-router-dom";
import { BadgePercent, Gift } from "lucide-react";
import user_icon from "../../images/user-icon.svg";

function Notification() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span>Notification </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg notes-one-pills">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Payment
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Requests
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div>
                  <div>
                    <div className="notification-item">
                      <h4>Today</h4>
                    </div>
                    <div className="notification-item notification-img notification-main">
                      <div className="bagePercent">
                        <BadgePercent />
                      </div>
                      <h3>You have a 50% off offer check it out </h3>
                    </div>
                  </div>
                  <div className="notification-border"></div>
                  <div>
                    <div className="notification-item">
                      <h4>Today</h4>
                    </div>
                    <div className="notification-item notification-img notification-main">
                      <div className="bagePercent">
                        <Gift />
                      </div>
                      <h3>You have got a gift card </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div>
                  <div className="notification-item">
                    <h4>Today</h4>
                  </div>
                  <div className="notification-item notification-main notification-img notification-user">
                    <div className="bagePercent-img">
                      <img src={user_icon} alt="" />
                    </div>
                    <h3>
                      Grocery Monthly Budget for is 3500 which is getting
                      exceeded by 700{" "}
                    </h3>
                  </div>
                </div>
                <div className="notification-border"></div>
                <div>
                  <div className="notification-item">
                    <h4>Today</h4>
                  </div>
                  <div className="notification-item notification-img notification-user">
                    <div className="bagePercent-img">
                      <img src={user_icon} alt="" />
                    </div>
                    <h3>You have a upcoming payment to collect from soham </h3>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <div>
                  <div className="notification-item">
                    <h4>Today</h4>
                  </div>
                  <div className="notification-main">
                    <div className="notification-item notification-img  ">
                      <div className="bagePercent-img">
                        <img src={user_icon} alt="" />
                      </div>
                      <h3>John D. requested a paid leave on 25th JAN 2024 </h3>
                    </div>
                    <div className="btn-notice-flex">
                      <button className="btn-notice-approve">Approve </button>
                      <button className="btn-notice-reject">Reject </button>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="notification-border"></div>
                <div>
                  <div className="notification-item">
                    <h4>Today</h4>
                  </div>
                  <div className="notification-main">
                    <div className="notification-item notification-img  ">
                      <div className="bagePercent-img">
                        <img src={user_icon} alt="" />
                      </div>
                      <h3>John D. requested a paid leave on 25th JAN 2024 </h3>
                    </div>
                    <div className="btn-notice-flex">
                      <button className="btn-notice-approve">Approve </button>
                      <button className="btn-notice-reject">Reject </button>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="mt-3">
                  <div>
                    <div className="notification-item">
                      <h4>Today</h4>
                    </div>
                    <div className="notification-main">
                      <div className="notification-item notification-img  ">
                        <div className="bagePercent-img">
                          <img src={user_icon} alt="" />
                        </div>
                        <h3>
                          Your leave for 20th December 2024 has been{" "}
                          <span className="approved">approved</span>
                        </h3>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="notification-border"></div>
                  <div>
                    <div className="notification-item">
                      <h4>Today</h4>
                    </div>
                    <div className="notification-main">
                      <div className="notification-item notification-img  ">
                        <div className="bagePercent-img">
                          <img src={user_icon} alt="" />
                        </div>
                        <h3>
                          Your leave for 20th December 2024 has been{" "}
                          <span className="rejected">Rejected</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0"></div>
      </div>
    </div>
  );
}

export default Notification;
