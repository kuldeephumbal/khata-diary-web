import { useState } from "react";

export default function Radiobtn() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-2">
        <input
          type="radio"
          name="toggle"
          id="option1"
          checked={selectedOption === "option1"}
          onChange={() => setSelectedOption("option1")}
        />
        <label htmlFor="option1" className="ml-2 ms-2 cursor-pointer">
          Mobile Numbers
        </label>
        {selectedOption === "option1" && (
          <div className="text-mobile mt-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Enter Mobile Number"
            ></textarea>
            <div id="emailHelp" class="form-text">
              You can add Multiple Mobile Numbers, Add Mobile number one by one
              by Putting (,) after each number{" "}
            </div>
          </div>
        )}
      </div>

      <div className="mb-2">
        <input
          type="radio"
          name="toggle"
          id="option2"
          checked={selectedOption === "option2"}
          onChange={() => setSelectedOption("option2")}
        />
        <label htmlFor="option2" className="ml-2 ms-2 cursor-pointer">
          Select from contacts
        </label>
        {selectedOption === "option2" && (
          <div className="mt-2 contact-number ">
            <div className=" responsive-line">
              <div>
                <h2>A</h2>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2>B</h2>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
                <div className="des-box mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-100 align-items-center">
                      <div className="profile-icon-set me-3">
                        <h3>AS</h3>
                      </div>
                      <div className="profile-icon-set-two">
                        <h4>Adam. S</h4>
                        <h5>Adam. S</h5>
                      </div>
                    </div>
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-2">
        <input
          type="radio"
          name="toggle"
          id="option3"
          checked={selectedOption === "option3"}
          onChange={() => setSelectedOption("option3")}
        />
        <label htmlFor="option3" className="ml-2 ms-2 cursor-pointer">
          Upload Excel/CIF Sheet
        </label>
        {selectedOption === "option3" && (
          <div className="mt-2 layer-payment-main-to">
            <h3>Import Excel/CIF Sheet</h3>
          </div>
        )}
      </div>
    </div>
  );
}
