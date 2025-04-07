import React from 'react'
import inventory from "../../images/ledger.svg";

const Step1 = () => {
  return (
    <div>
      <div className="welcome-txt">
      <img src={inventory} alt="Ledger icon" className="img-fluid" role="img" />
      <h3>LEDGER</h3>
        <p>
          Manage and view a clear record of all the money given and owed, all in
          one place. No more manual bookkeeping. You can also send reminders to
          collect money. Let KhataDiary simplify it for you.
        </p>
      </div>
    </div>
  );
}

export default Step1