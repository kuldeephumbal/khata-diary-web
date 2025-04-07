import React from "react";
import { Link } from "react-router-dom";
import {
  PencilLine,
  Phone,
  ScrollText,
  Settings,
  NotepadText,
} from "lucide-react";
import KhataDiaryImg from "../../images/KhataDiaryImg.svg";
import userOne from "../../images/userOne.svg";

import card_index from "../../images/noto_card-index.svg";
import silhouette from "../../images/noto_busts-in-silhouette.svg";
import noto_pager from "../../images/noto_pager.svg";
import identification from "../../images/noto_identification-card.svg";
import chart_increasing from "../../images/noto_chart-increasing.svg";
import scroll from "../../images/noto_scroll.svg";
import file_box from "../../images/noto_card-file-box.svg";
import bar_chart from "../../images/bar-chart.svg";
import noto_bookmark from "../../images/noto_bookmark-tabs (1).svg";
import notepad from "../../images/noto_spiral-notepad.svg";

function ProgressProfile() {
  const progress = 60;
  return (
    <>
      <div className="expense-setting-bg ">
        <div className="expense-khata-diary">
          <img src={KhataDiaryImg} className="img-fluid" alt="" />
          <select name="KhataDiary" id="KhataDiary">
            <option value="volvo">KhataDiary</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="expense-khata-pen">
          <div className="expense-khata-user">
            <img src={userOne} className="img-fluid" alt="" />
            <div className="expense-user-details">
              <h4>Nupur kadam</h4>
              <p>nkk@gmail.com</p>
            </div>
          </div>
          <div className="pencil-line">
            <Link to="">
              <PencilLine />
              Edit
            </Link>
          </div>
        </div>
        <div className="profile-strength-container">
          {/* Progress Bar */}
          <div className="progress-bar-main">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Profile Strength Info */}
          <div className="profile-strength-info">
            <p>
              Profile Strength: <span className="weak-text">Weak</span>
            </p>
            <h4>{progress}%</h4>
          </div>
        </div>
      </div>
      <div className="expense-empty-bg expense-empty-margin">
        <div className="business-grid">
          <Link to={"/Index"} className="business-address-shop">
            <img src={card_index} className="img-fluid" alt="" />
            <p>Inventory Management </p>
          </Link>
          <Link to={"/StaffOne"} className="business-address-shop">
            <img src={silhouette} className="img-fluid" alt="" />
            <p>Staff Management </p>
          </Link>
          <Link to={"/financeCalculators"} className="business-address-shop">
            <img src={noto_pager} className="img-fluid" alt="" />
            <p>Financial calculators</p>
          </Link>
          <Link to={"/BusinessCardOne"} className="business-address-shop">
            <img src={identification} className="img-fluid" alt="" />
            <p>Create & send Business cards</p>
          </Link>
          <Link to={"/ExpenseEmpty"} className="business-address-shop">
            <img src={chart_increasing} className="img-fluid" alt="" />
            <p>Budget/ Expense Tracker</p>
          </Link>
          <Link
            to={"/CamplaingBulkMessaging"}
            className="business-address-shop"
          >
            <img src={scroll} className="img-fluid" alt="" />
            <p>Bulk Messaging / campaign/ Greetings</p>
          </Link>
          <button className="business-address-shop">
            <img src={file_box} className="img-fluid" alt="" />
            <p>Budget Categories</p>
          </button>
          <button className="business-address-shop">
            <img src={bar_chart} className="img-fluid" alt="" />
            <p>Dashboard/ Reports</p>
          </button>
          <button className="business-address-shop">
            <img src={noto_bookmark} className="img-fluid" alt="" />
            <p>New/ Updates</p>
          </button>
          <Link to={"/NotesOne"} className="business-address-shop">
            <img src={notepad} className="img-fluid" alt="" />
            <p>Sticky Notes</p>
          </Link>
        </div>
        <div className="help-support">
          <Link to="">
            <Phone /> Help & Support
          </Link>
        </div>
        <div className="help-support">
          <Link to="">
            <ScrollText /> Privacy Policy
          </Link>
        </div>
        <div className="help-support">
          <Link to="">
            <Settings /> Settings
          </Link>
        </div>
        <div className="help-support">
          <Link to="">
            <NotepadText /> Terms & Conditions
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProgressProfile;
