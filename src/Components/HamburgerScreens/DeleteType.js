import React from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";
import { Undo2, CircleMinus } from "lucide-react";
import money from "../../images/money.svg";

function DeleteType() {
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
            <div className="delete-account-p">
              <p>
                You are going to delete 'Kalatamk". All the data in this book on
                Khatabook and Cashbook will be moved to the Recycle Bin. If you
                have any entries in a book with the same name on Cashbook, we
                would advise you to download reports from Cashbook to backup
                your data.
              </p>
            </div>
            <div className="delete-account-type">
              <p>
                To delete, type <span>‘Digilligent’</span>
              </p>
            </div>
            <div className="d-flex w-100">
              <Link to="/DeleteInformation" className="delete-permanently ">
                Delete All Permanently
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteType;
