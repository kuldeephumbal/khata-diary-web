import React, { useState } from "react";
import CountryCodeSelector from "./CountryCodeSelector";
import { Link } from "react-router-dom";
import axios from "axios"; // You'll need to install axios if not already installed

function SignUpto() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox
  const [error, setError] = useState(""); // Error message state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error before validating
    setError("");

    // Validation checks
    if (!isChecked) {
      setError("You must accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    if (!name || !gender || !password || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    const data = {
      name,
      mobile: `${countryCode}${phone}`, // Combine country code with phone number
      password,
      role: "individual",
      gender,
    };

    try {
      const response = await axios.post(
        "https://khatadiary.synoventum.site/v1/auth/register",
        data,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      // Handle successful response (e.g., redirect or show success message)
      // You could navigate to a login page or show a success notification here.

    } catch (error) {
      if (error.response) {
        // If the error has a response (e.g., 400 or 500 status code)
        setError(error.response.data.message || "There was an error submitting the form. Please try again.");
      } else if (error.request) {
        // If the error was due to no response from the server
        setError("No response from server. Please check your internet connection.");
      } else {
        // General error
        setError("There was an error. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-5 p-0">
            <div className="height-sp">
              <div className="sign-upp">
                <Link to={'#'} className="btn mb-4">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <h2>SignUp</h2>
                <p>
                  Enter your details below to begin your journey toward
                  hassle-free bookkeeping.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Country Code Selector */}
                  <CountryCodeSelector
                    selectedCountryCode={countryCode}
                    setSelectedCountryCode={setCountryCode}
                    setPhone={setPhone}
                  />

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 form-check align-items-center">
                    <input
                      className="p-2 form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      style={{ border: "1px solid #B4B4B4" }}
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      By Signing Up, You accept the Terms & Conditions and Our Privacy Policy
                    </label>
                  </div>

                  {error && <div className="text-danger mb-3 text-center">{error}</div>} {/* Error message displayed here */}

                  <div className="mb-3">
                    <button type="submit" className="btn ss-btn">
                      SignUp
                    </button>
                  </div>

                  <div className="sign-upp ">
                    <p className="text-center">🔐 100% safe & Secure</p>
                  </div>
                </form>
              </div>
              <div className="sign-upp">
                <p className="text-center">
                  Returning to KhataDiary?{" "}
                  <Link to={"/Signin"}>Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpto;
