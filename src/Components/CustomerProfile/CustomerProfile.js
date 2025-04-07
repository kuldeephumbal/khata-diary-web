import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CustomerProfile_img from "../../images/CustomerProfile.svg";
import whatsapp from "../../images/whatsapp.svg";
import BankDetails from "../../images/BankDetails.svg";
import {
  Camera,
  Globe,
  User,
  ChevronRight,
  MessageSquareText,
  Phone,
  MapPinned,
  Landmark,
  FileText,
  TriangleAlert,
  FileSpreadsheet,
  ChevronDown,
} from "lucide-react";

function CustomerProfile() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(CustomerProfile_img);
  const [activeSection, setActiveSection] = useState("name"); // Default to name section
  const [isSmsEnabled, setIsSmsEnabled] = useState(false); // State for SMS toggle

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleFileChange = (e) => {
    readURL(e.target);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Handle SMS toggle change
  const handleSmsToggle = (e) => {
    setIsSmsEnabled(e.target.checked);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>
              </Link>
              <Link to="/">
                Customer Profile <i className="fa-solid fa-chevron-right"></i>
              </Link>
              <span>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </span>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div>
              <div className="index-pill customer-profile-mb">
                <div className="customer-profile-title">
                  <h2>Customer Profile</h2>
                </div>
                <div className="circle-profile">
                  <div className="circle">
                    <img
                      className="profile-pic"
                      src={profileImage}
                      alt="Profile"
                    />
                  </div>
                  <div className="circle-profile-text">
                    <div className="p-image">
                      <Camera
                        className="upload-button"
                        onClick={handleUploadClick}
                      />

                      <input
                        ref={fileInputRef}
                        className="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="customer-profile">
                  <h4>Add Photo</h4>
                </div>
                <div>
                  <button className="btn-business-card">
                    <Globe /> Share Your Business Card
                  </button>
                </div>
              </div>
              <div className="index-pill">
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("name")}
                >
                  <div className="user-name">
                    <User />
                    <div>
                      <h4>Name</h4>
                      <h3>Adam. S</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("gender")}
                >
                  <div className="user-name">
                    <i className="fa-solid fa-mars-stroke"></i>
                    <div>
                      <h4>Gender</h4>
                      <h3>Male</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("mobile")}
                >
                  <div className="user-name">
                    <Phone />
                    <div>
                      <h4>Mobile Number</h4>
                      <h3>90000000040</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("address")}
                >
                  <div className="user-name">
                    <MapPinned />
                    <div>
                      <h3>Address</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("email")}
                >
                  <div className="user-name">
                    <Globe />
                    <div>
                      <h3>Email id.</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("bank")}
                >
                  <div className="user-name">
                    <Landmark />
                    <div>
                      <h3>Bank Account</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  type="button"
                  className="btn-customer-name"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                >
                  <div className="user-name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <circle
                        cx="7.89061"
                        cy="5.5555"
                        r="2.33333"
                        stroke="#002140"
                        strokeWidth="1.83333"
                      />
                      <ellipse
                        cx="7.89063"
                        cy="10.222"
                        rx="3.5"
                        ry="2.33333"
                        stroke="#002140"
                        strokeWidth="1.83333"
                      />
                      <ellipse
                        cx="21.8906"
                        cy="19.5553"
                        rx="2.33333"
                        ry="2.33333"
                        stroke="#002140"
                        strokeWidth="1.83333"
                      />
                      <path
                        d="M26.5573 14.8888C26.5573 8.44551 21.3339 3.22217 14.8906 3.22217M14.8906 26.5555C8.4473 26.5555 3.22395 21.3322 3.22395 14.8888"
                        stroke="#002140"
                        strokeWidth="1.83333"
                        strokeLinecap="round"
                      />
                      <ellipse
                        cx="21.8906"
                        cy="24.222"
                        rx="3.5"
                        ry="2.33333"
                        stroke="#002140"
                        strokeWidth="1.83333"
                      />
                    </svg>
                    <div>
                      <h3>Change To Supplier</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>

                <div className="customer-settings">
                  <h5>Customer Settings</h5>
                </div>
                <button
                  className="btn-customer-name"
                  onClick={() => handleSectionClick("customerSettings")}
                >
                  <div className="user-name">
                    <MessageSquareText />
                    <div>
                      <h3>Customer Message Setting</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
                <button
                  type="button"
                  className="delete-permanently delete-customer"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Delete Customer
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
                        <div className="customer-profile-expense">
                          <p>
                            <TriangleAlert /> Delete Adam. S ?
                          </p>
                        </div>
                        <div className="customer-profile-p">
                          <p>
                            This will permanently delete customer & their
                            transactions from khatadiary app. you will not
                            retrieve them again
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer-added">
                        <button type="button" className="btn btn-yes w-100">
                          Confirm
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
                <div
                  className="modal fade"
                  id="staticBackdrop1"
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
                        <div className="change-supplier-profile">
                          <h4>Change Adam. S to Supplier ?</h4>
                        </div>
                        <div className="customer-as-flex">
                          <div className="customer-as">
                            <p> AS</p>
                          </div>
                          <div className="customer-as-name">
                            <h4>Adam. S</h4>
                            <p>90000000040</p>
                          </div>
                        </div>
                        <div className="customer-as-p">
                          <p>
                            All entries of Adam. S will be safely transferred
                            from Customer to Supplier section
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer-added">
                        <button type="button" className="btn btn-yes w-100">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="index-pill">
              {activeSection === "name" && (
                <div id="user-name">
                  <div className="customer-profile-name">
                    <h4>Name</h4>
                  </div>
                  <div className="customer-profile-main-name">
                    <input type="text" name="" placeholder="Adam. S" id="" />
                  </div>
                  <div>
                    <Link className="btn-save"> Save</Link>
                  </div>
                </div>
              )}

              {activeSection === "gender" && (
                <div id="user-Gender">
                  <div className="customer-profile-name">
                    <h4>Gender</h4>
                  </div>
                  <div className="customer-profile-main-name">
                    <select name="profile" id="profile">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Link className="btn-save"> Save</Link>
                  </div>
                </div>
              )}

              {activeSection === "mobile" && (
                <div id="user-mobile">
                  <div className="customer-profile-name">
                    <h4>Mobile Number</h4>
                  </div>
                  <div className="customer-profile-main-name">
                    <input
                      type="text"
                      name=""
                      placeholder="90000000040"
                      id=""
                    />
                  </div>
                  <div>
                    <Link className="btn-save"> Save</Link>
                  </div>
                </div>
              )}

              {activeSection === "address" && (
                <div>
                  <div className="customer-profile-name">
                    <h4>Customer Address</h4>
                  </div>
                  <div>
                    <div className="customer-address-heading">
                      <h5>Billing Address</h5>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Flat / Building Number"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Area / Locality"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Pincode "
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="customer-profile-main-name">
                          <input type="text" name="" placeholder="City" id="" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="State "
                            id=""
                          />
                        </div>
                      </div>
                      <div className="customer-checkbox">
                        <input
                          type="checkbox"
                          id="shipping"
                          name="shipping"
                          value="Bike"
                        />
                        <label for="shipping">
                          Shipping address is same as billing address
                        </label>
                      </div>
                      <div className="customer-address-heading">
                        <h5>Shipping Address</h5>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Flat / Building Number"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Area / Locality"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Pincode "
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="customer-profile-main-name">
                          <input type="text" name="" placeholder="City" id="" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="State "
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link className="btn-save"> Save</Link>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "email" && (
                <div id="user-email">
                  <div className="customer-profile-name">
                    <h4>Customer Email id.</h4>
                  </div>
                  <div className="customer-profile-main-name">
                    <input type="text" name="" placeholder="Email id." id="" />
                  </div>
                  <div>
                    <Link className="btn-save"> Save</Link>
                  </div>
                </div>
              )}

              {activeSection === "bank" && (
                <>
                  <div className="customer-profile-name">
                    <h4>Bank Details of Adam. S</h4>
                  </div>
                  <div>
                    <button
                      className="btn-bank-account"
                      onClick={() => handleSectionClick("bank-details")}
                    >
                      <div className="bank-account">
                        <Landmark />
                        Bank Account
                      </div>
                      <div>
                        <ChevronRight />
                      </div>
                    </button>
                    <div className="bank-details-flex">
                      <div className="bank-details">
                        <h4>Don't have bank details ?</h4>
                        <p>Ask Adam. S via</p>
                      </div>
                      <div className="whatsapp-flex">
                        <div className="whatsapp">
                          <img src={whatsapp} className="img-fluid" alt="" />
                          <p>WhatsApp</p>
                        </div>
                        <div className="whatsapp">
                          <FileText />
                          <p>SMS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeSection === "bank-details" && (
                <div id="bank-details">
                  <div className="customer-profile-name">
                    <h4>Bank Details of Adam. S</h4>
                  </div>
                  <div className="bank-details-bank">
                    <img src={BankDetails} alt="" />
                  </div>
                  <form action="">
                    <div className="row">
                      <div className="customer-address-heading">
                        <h5>Enter Bank Account Details</h5>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="number"
                            name=""
                            placeholder="Account Number"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="number"
                            name=""
                            placeholder="Confirm Account Number"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="number"
                            name=""
                            placeholder="IFSC Code "
                            id=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="customer-profile-main-name">
                          <input
                            type="text"
                            name=""
                            placeholder="Account Holder Name  "
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link className="btn-save"> Save</Link>
                    </div>
                  </form>
                </div>
              )}

              {activeSection === "customerSettings" && (
                <>
                  <div className="customer-profile-name">
                    <h4>Customer Message Setting </h4>
                  </div>
                  <div className="form-switch-flex">
                    <div className="user-name">
                      <MessageSquareText />
                      <div>
                        <h3>Customer Message Setting</h3>
                        <p>SMS will be sent on each entry</p>
                      </div>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        checked={isSmsEnabled}
                        onChange={handleSmsToggle}
                      />
                    </div>
                  </div>
                  {isSmsEnabled && (
                    <div id="show-customer-sms">
                      <div className="customer-send-sms">
                        <h3>Send SMS From:</h3>
                      </div>
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            My Number
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            KhataDiary
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <>
                            <div className="file-spreadsheet-flex">
                              <div className="file-spreadsheet">
                                <h4>
                                  <FileSpreadsheet />
                                  Select SIM Card for SMS
                                </h4>
                              </div>
                              <div>
                                <button
                                  className="btn-default"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop3"
                                >
                                  Default
                                  <ChevronDown />
                                </button>
                                <div
                                  className="modal fade"
                                  id="staticBackdrop3"
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
                                        <div className="change-supplier-profile">
                                          <h4>
                                            Please provide Phone settings
                                            permission to automatically send SMS
                                            for each entry
                                          </h4>
                                        </div>
                                        <div className="border-provide"></div>
                                        <div className="customer-as-p">
                                          <p>
                                            To identify the default SIM Card for
                                            SMS on your device
                                          </p>
                                        </div>
                                      </div>
                                      <div className="modal-footer-added">
                                        <button
                                          type="button"
                                          className="btn btn-yes w-100"
                                        >
                                          Give Permission
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="customer-benefit">
                                <h3>Benefit</h3>
                              </div>
                              <div className="customer-benefit-checkbox">
                                <input
                                  type="checkbox"
                                  id="vehicle1"
                                  name="vehicle1"
                                  value="Bike"
                                />
                                <label for="vehicle1">
                                  {" "}
                                  SMS automatically sent with each entry
                                </label>
                              </div>
                              <div className="customer-benefit-checkbox">
                                <input
                                  type="checkbox"
                                  id="vehicle2"
                                  name="vehicle2"
                                  value="Bike"
                                />
                                <label for="vehicle2">
                                  Customer receives SMS from your trusted number
                                </label>
                              </div>
                              <div className="customer-benefit-checkbox">
                                <input
                                  type="checkbox"
                                  id="vehicle3"
                                  name="vehicle3"
                                  value="Bike"
                                />
                                <label for="vehicle3">
                                  Complete details with SMS-entry & balance
                                </label>
                              </div>
                              <div className="my-busiess-bg mt-3">
                                <div className="my-business">
                                  <h3>My Business</h3>
                                  <p>Tuesday, 12 Nov. 2024 07: 23 PM</p>
                                </div>
                                <div className="my-business-h4">
                                  <h4>
                                    Hi, Entry added for Rs. 200 on 03 Nov 2024.
                                  </h4>
                                  <h4>Total dues: Rs. +200</h4>
                                  <h4>Check history: nsdjkfhujsdvhdsivsdbjs</h4>
                                  <h4>Thankyou</h4>
                                  <h4>My Business</h4>
                                </div>
                                <div className="max-sms">
                                  <h3>
                                    MAX SMS LIMIT:
                                    <span>As per your mobile pack</span>
                                  </h3>
                                </div>
                              </div>
                              <div>
                                <Link className="btn-save"> Save</Link>
                              </div>
                            </div>
                          </>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <>
                            <div className="sms-flex">
                              <div className="user-name">
                                <MessageSquareText />
                              </div>
                              <div className="sms-limit">
                                <h3>Free SMS Limit</h3>
                                <h5>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Sed do eiusmod tempor i
                                </h5>
                                <p>200 Monthly sent SMS Limits</p>
                              </div>
                            </div>
                            <div>
                              <div className="customer-benefit">
                                <h3>Benefit</h3>
                              </div>
                              <div className="customer-benefit-checkbox">
                                <input
                                  type="checkbox"
                                  id="vehicle1"
                                  name="vehicle1"
                                  value="Bike"
                                />
                                <label for="vehicle1">
                                  {" "}
                                  SMS automatically sent with each entry
                                </label>
                              </div>
                              <div className="customer-benefit-checkbox">
                                <input
                                  type="checkbox"
                                  id="vehicle2"
                                  name="vehicle2"
                                  value="Bike"
                                />
                                <label for="vehicle2">
                                  Customer receives SMS from your trusted number
                                </label>
                              </div>
                              <div className="customer-benefit-checkbox">
                                <input
                                  type="checkbox"
                                  id="vehicle3"
                                  name="vehicle3"
                                  value="Bike"
                                />
                                <label for="vehicle3">
                                  Complete details with SMS-entry & balance
                                </label>
                              </div>
                              <div className="my-busiess-bg my-khata-bg mt-3">
                                <div className="my-business my-business-h4-khata">
                                  <h3>KhataDiary</h3>
                                  <p>Tuesday, 12 Nov. 2024 07: 23 PM</p>
                                </div>
                                <div className="my-business-h4 ">
                                  <h4>
                                    Hi, Entry added for Rs. 200 on 03 Nov 2024.
                                  </h4>
                                  <h4>Total dues: Rs. +200</h4>
                                  <h4>Check history: nsdjkfhujsdvhdsivsdbjs</h4>
                                  <h4>Thankyou</h4>
                                  <h4>My Business</h4>
                                </div>
                                <div className="max-sms max-sms-khata">
                                  <h3>
                                    MAX SMS LIMIT :<span> 200 per month</span>
                                  </h3>
                                </div>
                              </div>
                              <div>
                                <Link className="btn-save"> Save</Link>
                              </div>
                            </div>
                          </>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
