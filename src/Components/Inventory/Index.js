import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
import indexone from "../../images/indexone.svg";
import ImageDisplayed from "./ImageDisplayed";

const Index = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Inventory </span>
            </div>
          </div>
        </div>

        <div className="row spl-mb">
          <div className="col-lg-6 col-md-6 col-6">
            <div className="index-pill ">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Product
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Service
                  </button>
                </li>
              </ul>
              <div className="product-sec">
                <img src={indexone} className="img-fluid" alt="Logo" />
                <h3>Add items and get started</h3>
                <div className="des-box">
                  <h4>&#x2022; Manage stock in/out & get low stock alerts</h4>
                  <h4>&#x2022; Track purchase sales / price & profits </h4>
                </div>
                <Link to={"/Index"}>
                  Add Product<i className="fa-solid fa-box ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="index-pill">
                  <div className="add-new ">
                    <div className="add-new-two">
                      <h2>Add new item to the inventory</h2>
                    </div>
                    <form>
                      <div className="d-flex add-new-two mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter item name here *"
                        />
                        <div className="form-control frm-control">
                          <ImageDisplayed />
                        </div>
                      </div>
                      <div className="d-flex add-new-two justify-content-between">
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Primary Unit
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex">
                            <label
                              for="exampleInputEmail1"
                              className="form-label me-2"
                            >
                              Secondary Unit
                            </label>
                            <input
                              className="form-check-input frm"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>

                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="mb-3 add-new-two">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Purchase Price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Price"
                          />
                        </div>
                        <div className="mb-3 add-new-two">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Sales Price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Price"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mb-3 tax-included">
                      <h2>Tax included</h2>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                    <div className="mb-3 add-new-two">
                      <label for="exampleInputEmail1" className="form-label">
                        Default Discount
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Percentage / Rupees"
                      />
                    </div>
                    <div className="mb-3 add-new-two">
                      <label for="exampleInputEmail1" className="form-label">
                        As of Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Percentage / Rupees"
                      />
                    </div>
                    <div className="d-flex">
                      <div className="mb-3 add-new-two">
                        <label for="exampleInputEmail1" className="form-label">
                          Opening Stock
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Count"
                        />
                      </div>
                      <div className="mb-3 add-new-two">
                        <label for="exampleInputEmail1" className="form-label">
                          Low Stock Alert
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Count"
                        />
                      </div>
                    </div>

                    <div className="add-new-two">
                      <label for="exampleInputEmail1" className="form-label">
                        Add HSN code and GST details ( Optional )
                      </label>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="mb-3 add-new-two">
                        <label for="exampleInputEmail1" className="form-label">
                          HSN Code
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter price"
                        />
                      </div>
                      <div className="mb-3 add-new-two">
                        <label for="exampleInputEmail1" className="form-label">
                          GST%
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Count"
                        />
                      </div>
                    </div>
                    <Link to={"/IndexTwo"} className="btn save-btn">
                      {" "}
                      Save Item{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="index-pill">
                  <div className="add-new ">
                    <div className="add-new-two">
                      <h2>Add new Services to the inventory</h2>
                    </div>
                    <form>
                      <div className="d-flex add-new-two mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Service name here *"
                        />
                        <div className="form-control frm-control">
                          <ImageDisplayed />
                        </div>
                      </div>
                      <div className="d-flex add-new-two justify-content-between">
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Primary Unit
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Secondary Unit
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="mb-3 add-new-two w-100">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Service Price
                          </label>
                          <input
                            type="number"
                            className="form-control  "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="₹"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mb-3 tax-included">
                      <h2>Tax included</h2>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                    <div className="mb-3 add-new-two">
                      <label for="exampleInputEmail1" className="form-label">
                        Default Discount
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Percentage / Rupees"
                      />
                    </div>

                    <div className="add-new-two">
                      <label for="exampleInputEmail1" className="form-label">
                        Add SAC code and GST details ( Optional )
                      </label>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="mb-3 add-new-two">
                        <label for="exampleInputEmail1" className="form-label">
                          SAC Code
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter price"
                        />
                      </div>
                      <div className="mb-3 add-new-two">
                        <label for="exampleInputEmail1" className="form-label">
                          GST%
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Count"
                        />
                      </div>
                    </div>
                    <Link to={"#"} className="btn save-btn">
                      {" "}
                      Save Item{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
