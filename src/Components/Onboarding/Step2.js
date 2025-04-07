import React from "react";
import bulkmsg from "../../images/bulkmsg.svg";

const Step2 = () => {
  return (
    <div>
      <div className="welcome-txt">
      <img src={bulkmsg} alt="Bulk Messaging icon" className="img-fluid" role="img" />
      <h3>BULK MESSAGING</h3>
        <p>
          Send greetings and manage campaigns by sending messages via SMS &
          WhatsApp to your customers. Grow your business with the KhataDiary
          app.
        </p>
      </div>
    </div>
  );
};

export default Step2;
