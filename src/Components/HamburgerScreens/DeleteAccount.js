import React from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";
import { Undo2, CircleMinus } from "lucide-react";
import money from "../../images/money.svg";

function DeleteAccount() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <Link to="/Setting">
              {" "}
              Setting <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Delete Account</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <ProgressProfile />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="delete-account">
              <h3>Delete Account</h3>
            </div>
            <div>
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Lilly's Tattoo</h3>
                    <p>Supplier deleted 7 days ago </p>
                    <p>Supplier from Kalatamk</p>
                  </div>
                </div>
              </div>
              <div className="minus-added-flex">
                <button className="address-undo">
                  <Undo2 /> Undo
                </button>{" "}
                <button className="address-undo address-delete">
                  <CircleMinus /> Delete
                </button>
              </div>
              <div className="d-flex w-100">
                <Link to="/DeleteType" className="delete-permanently ">
                  Delete All Permanently
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
