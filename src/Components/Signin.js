import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast"; // For toast messages
import CountryCodeSelector from "../Components/Onboarding/CountryCodeSelector";
import Cookies from "js-cookie"; // Import js-cookie to store and retrieve cookies

const Signin = () => {
  const [phone, setPhone] = useState(""); // User phone number
  const [password, setPassword] = useState(""); // User password
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default country code (India)
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate(); // Navigation hook for redirection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any existing error messages

    // Validate if phone and password are provided
    if (!phone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const data = {
      mobile: `${selectedCountryCode}${phone}`, // Combine country code and phone number
      password,
    };

    try {
      // Make the login request to the Khata Diary API
      const response = await axios.post(
        "https://khatadiary.synoventum.site/v1/auth/login",
        data,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // Log the response for debugging

      // Store the user data and tokens in cookies under "KhataDiary" prefix
      Cookies.set("KhataDiary_user_id", response.data.user.id, { expires: 7, secure: true }); // Store user ID for 7 days
      Cookies.set("KhataDiary_access_token", response.data.tokens.access.token, { expires: 7, secure: true }); // Store access token
      Cookies.set("KhataDiary_refresh_token", response.data.tokens.refresh.token, { expires: 7, secure: true }); // Store refresh token
      Cookies.set("KhataDiary_account_holder_name", response.data.user.name, { expires: 7, secure: true }); // Store user ID for 7 days


      // Display success toast message
      toast.success("Login successful!");

      // Redirect to the dashboard after successful login
      navigate("/"); // You can change the route based on your app structure

    } catch (error) {
      // Handle errors (e.g., invalid credentials, network issues)
      if (error.response) {
        setError(error.response.data.message || "Invalid credentials. Please try again.");
      } else if (error.request) {
        setError("No response from server. Please check your internet connection.");
      } else {
        setError("There was an error. Please try again later.");
      }

      // Show an error toast message
      toast.error("Login failed. Please try again.");
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
                <h2>Login</h2>
                <p>
                  Login to your account to continue tracking and organizing your finances in a secure and streamlined way.
                </p>
                
                {/* Country Code Selector and Phone Number Input */}
                <CountryCodeSelector
                  selectedCountryCode={selectedCountryCode}
                  setSelectedCountryCode={setSelectedCountryCode}
                  setPhone={setPhone}
                />

                {/* Password Input */}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Handle password input
                  />
                </div>
                
                {/* Display error messages */}
                {error && <div className="text-danger mb-3 text-center">{error}</div>}

                {/* Login Button */}
                <div className="mb-3">
                  <button onClick={handleSubmit} className="btn ss-btn">
                    Login
                  </button>
                </div>

                {/* Safe and Secure Message */}
                <div className="sign-upp ">
                  <p className="text-center">🔐 100% safe & Secure</p>
                </div>
              </div>
              <div className="sign-upp">
                <p className="text-center">
                  Returning to KhataDiary?{" "}
                  <Link to={"/Onboarding"}>Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
