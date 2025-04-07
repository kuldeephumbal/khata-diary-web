import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";

function MySession() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div className="accordion-container">
              {[
                "How can I pay for my session?",
                "How can I pay for my session?",
                "How can I pay for my session?",
                "How can I pay for my session?",
              ].map((menu, index) => (
                <div className="accordion" key={index}>
                  <button
                    className={`menu-button ${
                      openIndex === index ? "open" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {menu}
                    <span className="icon-one">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="content"
                    style={{
                      height: openIndex === index ? "auto" : 0,
                      overflow: "hidden",
                    }}
                  >
                    <p>
                      {index === 0 &&
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
                      {index === 1 &&
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
                      {index === 2 &&
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
                      {index === 3 &&
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="w-100 mt-5">
                <Link to="/DeleteQuery" className="address-next">
                  Send Query
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySession;
