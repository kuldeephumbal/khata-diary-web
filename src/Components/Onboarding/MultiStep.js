import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import individual from "../../images/individual.svg";
import business from "../../images/business.png";

const steps = [Step1, Step2, Step3, Step4, Step5];

export default function MultiStep() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const StepComponent = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipStep = () => {
    setCurrentStep(steps.length - 1); // Directly move to last step
  };
  

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleDoneClick = () => {
    if (selectedImage) {
      // Navigate based on selected image
      if (selectedImage === "image1") {
        navigate("/signupto"); // Navigate to SignUpto for Individual
      } else if (selectedImage === "image2") {
        navigate("/signup"); // Navigate to SignUp for Business
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <div className="col-5 p-0">
          <div className="container-sr">
            <div className="card">
              {/* Back Button */}
              <div className="button-group">
                <button
                  className="back-btn"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>

              {/* Heading */}
              <h2 className="spl-title">
                {currentStep === steps.length - 1
                  ? "Confirm your Identity"
                  : "Welcome to KhataDiary"}
              </h2>

              {/* Image Selection (if it's Step 5) */}
              {currentStep === steps.length - 1 && (
                <div className="image-selection">
                  <div className="d-flex flex-column">
                    <img
                      src={individual}
                      alt="Individual"
                      className={`selectable-image ${
                        selectedImage === "image1" ? "selected" : ""
                      }`}
                      onClick={() => handleImageSelect("image1")}
                    />
                    <h2>Individual</h2>
                  </div>
                  <div className="d-flex flex-column">
                    <img
                      src={business}
                      alt="Business"
                      className={`selectable-image ${
                        selectedImage === "image2" ? "selected" : ""
                      }`}
                      onClick={() => handleImageSelect("image2")}
                    />
                    <h2>Business</h2>
                  </div>
                </div>
              )}

              {/* Step Content (Text and Paragraph) */}
              {currentStep !== steps.length - 1 && <StepComponent />}

              {/* Paragraph (Text area) */}
              {currentStep === steps.length - 1 && (
                <p>
                  Complete the setup by selecting an image above to proceed.
                </p>
              )}

              {/* Progress Bar */}
              <div className="progress-bar">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index <= currentStep ? "active" : ""}`}
                  ></div>
                ))}
              </div>

              {/* Button Group (Skip and Next/Done) */}
              <div className="button-group">
                {currentStep !== steps.length - 1 && (
                  <button onClick={skipStep} className="btn next-skip">
                    Skip
                  </button>
                )}
                {currentStep === steps.length - 1 ? (
                  <button
                    className="btn next-btn d-flex justify-content-center m-auto"
                    onClick={handleDoneClick}
                    disabled={!selectedImage}
                  >
                    Proceed
                  </button>
                ) : (
                  <button className="btn next-btn" onClick={nextStep}>
                    Next<i className="ms-2 fa-solid fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}