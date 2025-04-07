import React from "react";
import logo from "../images/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container">
          <Link className="navbar-brand" to={""}>
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-font mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={""}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/BusinessCardOne"}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Index"}>
                  Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/StaffOne"}>
                  Staff Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/financeCalculators"}>
                  Calculators
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/CamplaingBulkMessaging"}>
                  Bulk Messaging
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Blogs"}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/setting"}>
                  More
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to={"/Onboarding"} className="btn btn-login" type="submit">
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
