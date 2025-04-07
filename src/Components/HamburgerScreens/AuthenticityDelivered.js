import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";
import { CircleCheck } from "lucide-react";
import MuscleTech from "../../images/MuscleTech.svg";

function AuthenticityDelivered() {
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
            <div className="delivered-title">
              <h2>AUTHENTICITY DELIVERED</h2>
              <p>
                MuscleBlaze is one of the best selling brands in India. When it
                comes to healthy, top quality and reasonable supplements. From
                whey protein, mass gainers, BCAA's to raw whey protein,
                MuscleBlaze has everything to complement your fitness
              </p>
              <h3>We Collaborate with all the Popular Brands</h3>
              <div className="delivered-img-flex">
                <div className="delivered-img"></div>
                <div className="delivered-img"></div>
                <div className="delivered-img"></div>
                <div className="delivered-img"></div>
                <div className="delivered-img"></div>
                <div className="delivered-img"></div>
              </div>
              <div className="delivered-control-flex">
                <div className="delivered-check">
                  <CircleCheck />
                </div>
                <div className="delivered-control">
                  <h4>Quality Control During Distribution</h4>
                  <p>
                    MuscleBlaze is one of the best selling brands in India. When
                    it comes to healthy, top quality and reasonable supplements.
                    From whey protein, mass gainers, BCAA's to raw whey protein,
                    MuscleBlaze has everything to complement your fitness
                  </p>
                </div>
              </div>
              <div className="delivered-control-flex">
                <div className="delivered-check">
                  <CircleCheck />
                </div>
                <div className="delivered-control">
                  <h4>We Ensure That Damaged Products are not Shipped</h4>
                  <p>
                    MuscleBlaze is one of the best selling brands in India. When
                    it comes to healthy, top quality and reasonable supplements.
                    From whey protein, mass gainers, BCAA's to raw whey protein,
                    MuscleBlaze has everything to complement your fitness
                  </p>
                </div>
              </div>
              <div className="delivered-control-flex border-delivered-none">
                <div className="delivered-check">
                  <CircleCheck />
                </div>
                <div className="delivered-control">
                  <h4>Premium logistic Partners</h4>
                  <p>
                    MuscleBlaze is one of the best selling brands in India. When
                    it comes to healthy, top quality and reasonable supplements.
                    From whey protein, mass gainers, BCAA's to raw whey protein,
                    MuscleBlaze has everything to complement your fitness
                  </p>
                </div>
              </div>
              <div className="delivered-police">
                <h4>14 Days Hassle - free return policy</h4>
                <p>
                  MuscleBlaze is one of the best selling brands in India. When
                  it comes to healthy, top quality and reasonable supplements.
                  From whey protein, mass gainers, BCAA's to raw whey protein,
                  MuscleBlaze has everything to complement your fitness
                </p>
              </div>
              <div className="delivered-police ">
                <h4>AUTHENTICITY ON OUR TOP IMPORTED BRANDS</h4>
                <p>
                  MuscleBlaze is one of the best selling brands in India. When
                  it comes to healthy, top quality and reasonable supplements.
                  From whey protein, mass gainers, BCAA's to raw whey protein,
                  MuscleBlaze has everything to complement your fitness
                </p>
              </div>
              <div className="delivered-supplier">
                <h3>Muscleblaze is the Official Supplier of MuscleTech</h3>
                <p>We source from Optimum Nutrition authorised importers.</p>
                <img src={MuscleTech} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticityDelivered;
