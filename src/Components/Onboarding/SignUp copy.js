import React from "react";
import CountryCodeSelector from "./CountryCodeSelector";
import { Link } from "react-router-dom";
function SignUp  () {
   
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-5  p-0">
            <div className="height-sp">
              <div className="sign-upp">
                <button className="btn mb-4">
                  <i className=" fa-solid fa-arrow-left"></i>
                </button>
                <h2>SignUp</h2>
                <p>
                  Get started by Creating an account to manage your Ledger,
                  Business, Staff and Many more All in One Place.
                </p>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Business Name"
                  />
                </div>
                <CountryCodeSelector />
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-3 form-check align-items-center">
                  <input
                    className="p-2 form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    style={{ border: "1px solid #B4B4B4" }}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    By Signing Up, You accept the Terms & Conditions and Our
                    Privacy Policy
                  </label>
                </div>
                <div className="mb-3">
                  <Link to={"/SendOtp"} className="btn ss-btn">
                    SignUp
                  </Link>
                </div>
                <div className="sign-upp ">
                  <p className="text-center">🔐 100% safe & Secure</p>
                </div>
              </div>
              <div className="sign-upp">
                <p className="text-center">
                  Already Have An Account to KhataDiary?{" "}
                  <Link to={"/Signin"}>Please Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
