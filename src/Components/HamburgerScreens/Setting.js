import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";
import { ChevronRight } from "lucide-react";

function Setting() {
  const navigate = useNavigate();

  const handlePaymentSettingClick = (e) => {
    e.preventDefault();

    // First close the modal
    const modal = document.querySelector("#stockout");
    const modalBackdrop = document.querySelector(".modal-backdrop");

    // Remove modal classes
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";

    // Restore body scrolling
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    // Remove the backdrop
    if (modalBackdrop) {
      modalBackdrop.remove();
    }

    // Small delay to ensure DOM updates complete before navigation
    setTimeout(() => {
      // Navigate to payment setting page
      navigate("/PaymentSetting");
    }, 100);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Setting</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <ProgressProfile />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div>
              <div className="sms-setting">
                <Link to="/SmsSetting">
                  SMS Settings <ChevronRight />
                </Link>
              </div>
              <div className="sms-setting">
                <Link to="#" data-bs-toggle="modal" data-bs-target="#stockout">
                  Payment Settings <ChevronRight />
                </Link>
                <div
                  className="modal fade"
                  id="stockout"
                  tabIndex="-1"
                  aria-labelledby="stockoutLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body ">
                        <div className="payment-setting-heading">
                          <h3>Payment Settings</h3>
                        </div>
                        <div>
                          <div className="sms-setting">
                            <Link to="#">
                              <div>
                                <h6>Share Payment Updates</h6>
                                <p>
                                  Send SMS to other phone numbers an payment
                                  confirmation
                                </p>
                              </div>
                              <ChevronRight />
                            </Link>
                          </div>
                          <div className="sms-setting">
                            <a href="#" onClick={handlePaymentSettingClick}>
                              <div>
                                <h6>Bank Account </h6>
                                <p>Manage your bank accounts</p>
                              </div>
                              <ChevronRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sms-setting">
                <Link to="">
                  Trash <ChevronRight />
                </Link>
              </div>{" "}
              <div className="sms-setting">
                <Link to="">
                  Language <ChevronRight />
                </Link>
              </div>
              <div className="sms-setting">
                <Link to="">
                  Backup Information <ChevronRight />
                </Link>
              </div>
              <div className="sms-setting">
                <Link to="/DeleteAccount">
                  Delete Account <ChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
