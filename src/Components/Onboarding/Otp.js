import React, { useState, useRef } from "react";
// import "./VerifyOTP.css";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if value is entered
    if (value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBack = (index) => {
    // Move focus to the previous input when "Back" button is clicked
    if (index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus on Tab press (next or previous)
    if (e.key === "Tab") {
      if (e.shiftKey && index > 0) {
        inputRefs[index - 1].current.focus(); // Move to previous input on Shift + Tab
      } else if (index < 3) {
        inputRefs[index + 1].current.focus(); // Move to next input on Tab
      }
    }

    // Move focus to the previous input on Backspace if current input is empty
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <div className="otp-container">
      {/* <h2>Verify OTP</h2> */}
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <div key={index} className="otp-input-box">
            <input
              ref={inputRefs[index]}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              autoFocus={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Otp;
