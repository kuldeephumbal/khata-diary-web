import React, { useState } from "react";
import StaffBook from "./StaffBook";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Salary from "../../images/Salary.svg";
import Permissions from "../../images/Permissions.svg";
import NewStaff from "../../images/NewStaff.svg";

function StaffThree() {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [goBackModal, setGoBackModal] = useState(false);

  const handleCheckboxChange = () => {
    setShowModal(true);
  };

  const handleYesClick = () => {
    setIsChecked(true);
    setShowModal(false);
  };

  const handleNoClick = () => {
    setIsChecked(false);
    setShowModal(false);
    setGoBackModal(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>

            <span> Staff Management </span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <StaffBook />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="staff-salary">
              <h2>Staff</h2>
            </div>
            <div className="staff-us">
              <div className="staff-us-flex">
                <div className="staff-us-a">
                  <p>AS</p>
                </div>
                <div className="staff-us-b">
                  <h4>Adam. S</h4>
                  <p>90000000040</p>
                </div>
              </div>
              <div>
                <Link to="" className="staff-edit">
                  Edit
                </Link>
              </div>
            </div>
            <div className="staff-salary-pe">
              <h4>Manage Salary & Permissions</h4>
            </div>
            <div className="staff-us">
              <div className="staff-us-flex">
                <div className="staff-permission">
                  <img src={Salary} className="img-fluid" alt="" />
                </div>
                <div className="staff-us-b">
                  <h4>Attendance & Salary</h4>
                  <p>Manage attendance & salary</p>
                </div>
              </div>
              <div className="staff-switch">
                <label class="switch">
                  <input
                    type="checkbox"
                    onChange={(e) => setShowDetails(e.target.checked)}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            {showDetails && (
              <div className="staff-show ">
                <div className="staff-select">
                  <input type="date" name="" id="" />
                </div>
                <div className="staff-salary-pe">
                  <h4>employment status </h4>
                </div>
                <div className="staff-select">
                  <select name="Employed" id="Employed">
                    <option value="Employed">Employed</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="staff-salary-pe">
                  <h4>Salary Type</h4>
                </div>
                <div class="radio-inputs">
                  <label>
                    <input class="radio-input" type="radio" name="engine" />
                    <span class="radio-tile">
                      <span class="radio-icon">Yearly</span>
                      <span class="radio-label">
                        Adam. S gets Yearly salary
                      </span>
                    </span>
                  </label>
                  <label>
                    <input class="radio-input" type="radio" name="engine" />
                    <span class="radio-tile">
                      <span class="radio-icon">Daily </span>
                      <span class="radio-label">Adam. S gets Daily salary</span>
                    </span>
                  </label>
                  <label>
                    <input class="radio-input" type="radio" name="engine" />
                    <span class="radio-tile">
                      <span class="radio-icon">Yearly </span>
                      <span class="radio-label">
                        Adam. S gets monthly salary
                      </span>
                    </span>
                  </label>
                </div>
                <div className="staff-select">
                  <input
                    type="text"
                    name=""
                    placeholder=" | ₹ Enter Monthly salary "
                    id=""
                  />
                </div>
                <div className="staff-sick-fl">
                  <div className="staff-sick">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html">Allowed Sick Leave</label>
                  </div>
                  <div className="staff-select">
                    <input
                      type="text"
                      name=""
                      placeholder=" No of days "
                      id=""
                    />
                  </div>
                </div>
                <div className="staff-sick-fl">
                  <div className="staff-sick">
                    <input
                      type="radio"
                      id="html1"
                      name="fav_language1"
                      value="HTML1"
                    />
                    <label for="html1">Allowed Paid Leave</label>
                  </div>
                  <div className="staff-select">
                    <input
                      type="text"
                      name=""
                      placeholder=" No of days "
                      id=""
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="staff-us">
              <div className="staff-us-flex">
                <div className="staff-permission">
                  <img src={Permissions} className="img-fluid" alt="" />
                </div>
                <div className="staff-us-b">
                  <h4>Permissions</h4>
                  <p>
                    Permissions for Adam. S to manage your business on
                    KhataDiary
                  </p>
                </div>
              </div>

              <div className="staff-switch">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                  <div className="modal-dialog model-padding modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="modal-off-remove">
                          <h3>Turn Off Permission for Adam. S ?</h3>
                          <p>
                            This will remove all permissions given to Adam. S.
                            continue ?
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer-added">
                        <button
                          type="button"
                          className="btn btn-yes w-100"
                          onClick={handleNoClick}
                        >
                          No
                        </button>
                        <button
                          type="button"
                          className="btn btn-cancel w-100"
                          onClick={handleYesClick}
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="staff-us">
              <div className="staff-us-flex">
                <div className="staff-permission">
                  <img src={Permissions} className="img-fluid" alt="" />
                </div>
                <div className="staff-us-b">
                  <h4>Parties </h4>
                  <p>Allow Adam. s to mange entries and view reporst</p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-staff-full"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Full <ChevronDown size={16} />
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
                        <div>
                          <div className="modal-parities">
                            <h3>Parties</h3>
                            <p>Select permissions for Adam. S</p>
                          </div>
                          <div className="modal-permissions">
                            <h3>Permissions</h3>
                            <div className="modal-permissions-flex">
                              <label for="reminders">
                                View entries & send reminders
                              </label>
                              <input
                                type="radio"
                                id="reminders"
                                name="fav_language1"
                                value="reminders"
                              />
                            </div>
                            <div className="modal-permissions-flex">
                              <label for="reminders">
                                Add & view: entries/parties
                              </label>
                              <input
                                type="radio"
                                id="parties"
                                name="fav_language2"
                                value="parties"
                              />
                            </div>
                            <div className="modal-permissions-flex">
                              <label for="reminders">
                                Add, view, edit, delete: entries/parties & send
                                reminders
                              </label>
                              <input
                                type="radio"
                                id="delete"
                                name="fav_language3"
                                value="delete"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer-added">
                        <button type="button" className="btn btn-yes w-100">
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-cancel w-100"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
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
                data-bs-target="#staticBackdrop2"
              >
                Continue
              </button>
              <div
                className="modal fade"
                id="staticBackdrop2"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel2"
                aria-hidden="true"
              >
                <div className="modal-dialog model-padding modal-dialog-centered">
                  <div className="modal-content">
                    <div className="new-staff-modal">
                      <img src={NewStaff} className="img-fluid" alt="" />
                    </div>
                    <div className="new-staff-modal">
                      <h3>CONGRATULATIONS !</h3>
                      <p>You Have Succefully Added A New Staff</p>
                    </div>
                    <div className="modal-footer-added">
                      <button type="button" className="btn btn-yes w-100">
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-cancel w-100"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {goBackModal && (
              <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog model-padding modal-dialog-centered">
                  <div className="modal-content">
                    <div className="model-back">
                      <h4>Are you sure you want to go back ?</h4>
                      <p>Your change will not be save</p>
                    </div>
                    <div className="modal-footer-added">
                      <button type="button" className="btn btn-yes w-100">
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-cancel w-100"
                        onClick={() => setGoBackModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffThree;
