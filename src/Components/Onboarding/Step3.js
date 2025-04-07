import React from "react";
import budget from "../../images/budget.svg";

const Step3 = () => {
  return (
    <div>
      <div className="welcome-txt">
      <img src={budget} alt="Budget and Expense Tracker icon" className="img-fluid" role="img" />
      <h3>BUDGET & EXPENSE TRACKER</h3>
        <p>
          Easily manage your personal finances, create a budget, and track your
          money and expenses. KhataDiary makes it easy for you.
        </p>
      </div>
    </div>
  );
};

export default Step3;
