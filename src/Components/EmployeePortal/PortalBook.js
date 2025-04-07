import React from "react";
import { ChevronRight, BellDot, ChevronDown } from "lucide-react";
import KhataDiaryImg from "../../images/KhataDiaryImg.svg";
import user from "../../images/userOne.svg";
import { Link } from "react-router-dom";

function PortalBook() {
  return (
    <div className="expense-empty-bg">
      <div className="staff-col-flex pt-0">
        <div className="expense-khata-diary ">
          <img src={KhataDiaryImg} className="img-fluid" alt="" />
          <select name="KhataDiary" id="KhataDiary">
            <option value="volvo">KhataDiary</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <button className="bell-dot">
            <BellDot />
          </button>
        </div>
      </div>

      <div>
        <div className="staff-user-flex">
          <div>
            <div className="staff-user">
              <img src={user} className="img-fluid" alt="" />
              <h4>Varun Kubal</h4>
            </div>
            <div className="staff-user-details">
              <div className="staff-salary">
                <h4>Monthly Salary </h4>
                <p>₹ 5,000</p>
              </div>
              <div className="staff-salary due-salary">
                <h4>Due Salary </h4>
                <p>₹ 5,000</p>
              </div>
            </div>
          </div>
          <div>
            <div className="staff-status">
              <h3>Today’s status</h3>
            </div>
            <div className="staff-status-present">
              <span className="status-round"></span>
              <h5>
                Present <ChevronDown size={16} />
              </h5>
            </div>
          </div>
        </div>
        <div>
          <Link to={"/Portalthree"} className="view-attendance-btn">
            View Attendance <ChevronRight size={18} />
          </Link>
        </div>
        <div className="payment-balance-bg">
          <div className="payment-balance py-20 pb-0">
            <div className="payment-time">
              <h5>15 Nov 24</h5>
              <p>10:15 AM</p>
            </div>
            <div className="payment-paid">
              <h5>₹6,000</h5>
            </div>
            <div className="payment-paid">
              <h6>₹0</h6>
            </div>
          </div>
          <div className="border-seven mb-2"></div>
          <div className="payment-mode-work">
            <h6>Adam worked really well. he deserves a bonus next month</h6>
            <p>
              Payment mode: <span>Cash</span>
            </p>
          </div>
        </div>
        <div className="payment-balance-bg">
          <div className="payment-balance py-20 pb-0">
            <div className="payment-time">
              <h5>15 Nov 24</h5>
              <p>10:15 AM</p>
            </div>
            <div className="payment-paid">
              <h5>₹6,000</h5>
            </div>
            <div className="payment-paid payment-color">
              <h6>₹1000</h6>
            </div>
          </div>
          <div className="border-seven mb-2"></div>
          <div className="payment-mode-work">
            <p>
              Payment mode: <span>Cash</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalBook;
