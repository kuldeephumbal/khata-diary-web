import React from "react";
import { Link } from "react-router-dom";
import PortalBook from "./PortalBook";
import { Camera, SquarePen, Monitor } from "lucide-react";

function PortalThree() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Employee portal </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <PortalBook />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="staff-eight-ad">
              <div className="staff-adam-nov-flex">
                <div className="staff-as-flex">
                  <div className="staff-adam">
                    <p>AS</p>
                  </div>
                  <div className="staff-adam-nov">
                    <h3>Adam. S</h3>
                    <p>15 Nov 24- 10: 15:00 AM</p>
                  </div>
                </div>
                <div className="staff-adam-nov">
                  <h6>₹50</h6>
                </div>
              </div>
              <div className="border-seven mb-3"></div>
              <div className="staff-eight-really">
                <p>Adam worked really well. he deserves a bonus next month.</p>
              </div>
              <div className="staff-eight-file">
                <div class="file-input">
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    class="file-input__input"
                  />
                  <label class="file-input__label input_bill" for="file-input">
                    <Camera size={16} />
                    <span>Attach Bill</span>
                  </label>
                </div>
              </div>
              <div className="eight-payment-mode">
                <h6>Payment Mode</h6>
                <p>Cash</p>
              </div>
            </div>
            <div className="delete-staff-flex">
              <button className="delete-staff">Delete Staff</button>
              <button className="delete-entry">Delete Entry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalThree;
