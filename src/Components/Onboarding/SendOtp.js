import React from "react";
import CountryCodeSelector from "./CountryCodeSelector";
import { Link } from "react-router-dom";
import Otp from "./Otp";
function SendOtp() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-4  p-0">
            <div className="height-sp">
              <div className="sign-upp">
                <Link to={"#"} className="btn mb-4">
                  <i className=" fa-solid fa-arrow-left"></i>
                </Link>
                <h2>Input OTP sent on your mobile number</h2>
                <p>
                  We have sent an OTP to the number <br></br>
                  <span>+91 77385 46983</span>
                </p>
                <Otp />
                <div className="mb-3">
                  <Link to={"/Signin"} className="btn ss-btn">
                    Verify OTP
                  </Link>
                  <h4>
                    Resend OTP: <span>57s</span>
                  </h4>
                </div>
                <div className="sign-upp ">
                  <p className="text-center">🔐 100% safe & Secure</p>
                </div>
              </div>
              <div className="sign-upp p-0">
                <p className="text-center mb-0">
                  Returning to KhataDiary?
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

export default SendOtp;
