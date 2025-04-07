import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import request from "../../images/request.svg";

const attendanceData = {
  "2025-02-01": "present",
  "2025-02-02": "present",
  "2025-02-03": "present",
  "2025-02-04": "present",
  "2025-02-06": "absent",
  "2025-02-07": "paidLeave",
  "2025-02-09": "sickLeave",
};

const statusColors = {
  present: "#DBF1D9",
  absent: "red",
  paidLeave: "blue",
  sickLeave: "orange",
};

export default function DateRangeSelect() {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      color: "gray",
    },
  ]);

  const getStatusClass = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return attendanceData[formattedDate] || "default";
  };

  // Added function to handle date click and open Add Reason Modal
  const handleDateClick = (date) => {
    const modalElement = document.getElementById("addreason");
    if (modalElement && window.bootstrap) {
      const modalInstance = new window.bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  };

  const handleSubmitRequest = () => {
    const addReasonEl = document.getElementById("addreason");
    const requestEl = document.getElementById("request");
    if (addReasonEl && window.bootstrap) {
      const addReasonModal =
        window.bootstrap.Modal.getInstance(addReasonEl) ||
        new window.bootstrap.Modal(addReasonEl);
      addReasonModal.hide();
    }
    if (requestEl && window.bootstrap) {
      const requestModal = new window.bootstrap.Modal(requestEl);
      requestModal.show();
    }
  };

  return (
    <>
      <div className="date-range-bg">
        <DateRange
          ranges={selectedRange}
          onChange={(ranges) => setSelectedRange([ranges.selection])}
          dayContentRenderer={(date) => {
            const statusClass = getStatusClass(date);
            return (
              <span
                onClick={() => handleDateClick(date)} // added onClick handler
                className={`day-content ${statusClass}`}
              >
                {date.getDate()}
              </span>
            );
          }}
          showSelectionPreview={false}
        />
        <div className="round-flex">
          <div className="round-range-text">
            <div className="round-range"></div>
            <h3>Present</h3>
          </div>
          <div className="round-range-text ">
            <div className="round-range-red"></div>
            <h3>Absent</h3>
          </div>
          <div className="round-range-text ">
            <div className="round-range-red paid-l"></div>
            <h3>Paid L</h3>
          </div>
          <div className="round-range-text ">
            <div className="round-range-red sick-l"></div>
            <h3>Sick L</h3>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="addreason"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="addreason"
          aria-hidden="true"
        >
          <div className="modal-dialog model-padding modal-dialog-centered">
            <div className="modal-content">
              <div class="text-end p-3 pb-0">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-padding">
                <div className="modal-reason">
                  <h3>Add Reason for a leave On 25 Nov.</h3>
                </div>
                <div className="modal-textarea">
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Add Reason For Leave"
                  ></textarea>
                </div>
                <div className="modal-leave">
                  <h5>Chose The type of leave</h5>
                </div>
                <div className="modal-leave-radio">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Paid L</label>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="css">Sick L</label>
                </div>
              </div>
              <div className="modal-footer-added">
                <button
                  type="button"
                  className="btn btn-yes w-100"
                  onClick={handleSubmitRequest} // added onClick handler
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="address-next mt-3"
          data-bs-toggle="modal"
          data-bs-target="#request"
        >
          Request Modal
        </button>
        <div
          className="modal fade"
          id="request"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="request"
          aria-hidden="true"
        >
          <div className="modal-dialog model-padding modal-dialog-centered">
            <div className="modal-content">
              <div class="text-end p-3 pb-0">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-padding">
                <div className="text-center request-img">
                  <img src={request} className="img-fluid" alt="" />
                </div>
                <div className="modal-request">
                  <p>
                    Your request has been shared. Your leave will be accepted as
                    soon as the owner approves your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
