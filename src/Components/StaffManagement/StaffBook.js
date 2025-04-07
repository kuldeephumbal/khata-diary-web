import React from "react";
import KhataDiaryImg from "../../images/KhataDiaryImg.svg";
import user from "../../images/userOne.svg";
import {
  UserRoundPlus,
  BellDot,
  SlidersHorizontal,
  Search,
  ChevronDown,
} from "lucide-react";

function StaffBook() {
  return (
    <>
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
        <div className="staff-total-main">
          <div className="staff-col-total">
            <h4>Total Due</h4>
            <h2>₹5,31,286</h2>
            <h6>For 20 Staff</h6>
          </div>
          <div className="staff-Attendance">
            <div>
              <h3>Today’s Attendance</h3>
              <div>
                <div className="staff-flex-p">
                  <div className="staff-Attendance-flex">
                    <h6>2</h6>
                    <p>p</p>
                  </div>
                  <div className="staff-Attendance-flex staff-att-one">
                    <h6>1</h6>
                    <p>PL</p>
                  </div>
                </div>
                <div className="staff-flex-p mb-0">
                  <div className="staff-Attendance-flex staff-att-two">
                    <h6>2</h6>
                    <p>p</p>
                  </div>
                  <div className="staff-Attendance-flex staff-att-three">
                    <h6>0</h6>
                    <p>p</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="staff-heading">
          <h3>Staff</h3>
        </div>
        <div className="expense-added-flex">
          <div className="expense-added-search search-staff">
            <input type="text" name="" placeholder="Search" id="" />
            <div className="search-added">
              <Search size={19} />
            </div>
          </div>
          <div className="slid-filter">
            <SlidersHorizontal />
            <p>Filters</p>
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
          <div className="staff-user-flex">
            <div>
              <div className="staff-user">
                <img src={user} className="img-fluid" alt="" />
                <h4>Adam. S</h4>
              </div>
              <div className="staff-user-details">
                <div className="staff-salary">
                  <h4>Monthly Salary </h4>
                  <p>₹ 5,00</p>
                </div>
                <div className="staff-salary due-Adam">
                  <h4>Due Salary </h4>
                  <p>₹ 1,300</p>
                </div>
              </div>
            </div>
            <div>
              <div className="staff-status">
                <h3>Today’s status</h3>
              </div>
              <div className="staff-status-present">
                <span className="status-round-red"></span>
                <h5>
                  Absent <ChevronDown size={16} />
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="add-staff-btn">
          <button className="add-staff add-staff-two">
            Add Staff <UserRoundPlus size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default StaffBook;
