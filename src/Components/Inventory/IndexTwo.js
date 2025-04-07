import React from "react";
// import Navbar from '../Navbar'
import { Link } from "react-router-dom";
import indexone from "../../images/indexone.svg";
import producticon from "../../images/producticon.svg";
import inventory from "../../images/inventory.svg";
import ImageDisplayed from "../Inventory/ImageDisplayed";
import SearchFilter from "./SearchFilter";
import StockTransaction from "./StpckTransaction";
import StockIn from "./StockIn";
import Stockout from "./Stockout";

const IndexTwo = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>
              </Link>
              <span> Inventory </span>
            </div>
          </div>
        </div>
        {/* <div className="title-home">
          <h3>
            <Link to={"#"}>Home > </Link>Inventory
          </h3>
        </div> */}
        <div className="row ">
          <div className="col-6 mb-4 ">
            <div className="index-pill">
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
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  <div className="col-6">
                    <div className="index-pill">
                      <div className="add-new ">
                        <div className="total-stock">
                          <div>
                            <h2>₹ 27,500</h2>
                            <h3>Total Stock Value</h3>
                          </div>
                          <div>
                            <h2
                              style={{
                                color: "red",
                              }}
                            >
                              0
                            </h2>
                            <h3>Low Stock Items</h3>
                          </div>
                          <div className="d-flex align-items-center">
                            <h3>View Report</h3>
                            <h2> </h2>
                          </div>
                        </div>
                        <div>
                          <SearchFilter />
                        </div>
                        <div className="d-flex ">
                          <Link to={"#"} className="btn btn-items mx-0">
                            All Items
                          </Link>
                          <StockIn />
                          <Link to={"#"} className="btn btn-items">
                            Low Stock
                          </Link>
                          <Stockout />
                        </div>
                        <div className="product-design">
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src={producticon}
                              className="img-fluid me-3"
                              alt="Logo"
                            />
                            <h3>Product 1</h3>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <div className="sales-price me-4">
                                <h4>Sales</h4>
                                <h5>₹50</h5>
                              </div>
                              <div className="sales-price">
                                <h4>Current Stock</h4>
                                <h5>₹550</h5>
                              </div>
                            </div>
                            <div className="d-flex">
                              <Link
                                to={"#"}
                                className="btn btn-in me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                + IN
                              </Link>
                              <Link
                                to={"#"}
                                className="btn btn-in red-in"
                                data-bs-toggle="modal"
                                data-bs-target="#stockout"
                              >
                                - OUT
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-sec">
                          <Link to={"/Index"}>
                            Add Product<i className="fa-solid fa-box ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="index-pill">
                      <div className="product-design align-items-center d-flex justify-content-between">
                        <Link to={"#"}>
                          Product <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <img
                          src={producticon}
                          className="img-fluid me-3"
                          alt="Logo"
                        />
                      </div>
                      <div className="product-design">
                        <div className="d-flex justify-content-between mb-4">
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <div className="sale-price">
                            <h4>Sales Price</h4>
                            <h3>₹50</h3>
                          </div>
                        </div>
                      </div>
                      <div className="product-design">
                        <div className="total-pr">
                          <h3>This Week Total Profit </h3>
                          <div className="d-flex">
                            <div className="me-4">
                              <h4>₹50</h4>
                              <h5>Total Profit Amount</h5>
                            </div>
                            <div>
                              <h4 style={{ color: "black" }}>₹50</h4>
                              <h5>Stock Sold</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <StockTransaction />
                      <div className="product-design">
                        <div className="date-show">
                          <h3>21 Nov 24 . 06:53</h3>
                          <div className="d-flex justify-content-between">
                            <h4>Opening Balance</h4>
                            <h4>598.79</h4>
                          </div>
                        </div>
                      </div>
                      <div className="product-design ">
                        <Link to={"#"} className="btn stock-in me-2">
                          Stock In
                        </Link>
                        <Link to={"#"} className="btn stock-in stock-green">
                          Stock Out
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row">
                  <div className="col-6">
                    <div className="index-pill">
                      <div className="product-sec">
                        <img src={indexone} className="img-fluid" alt="Logo" />
                        <h3>Add items and get started</h3>
                        <div className="des-box">
                          <h4>&#x2022; Manage services and price</h4>
                          <h4>&#x2022; Save SAC and GST details </h4>
                          <h4>&#x2022; Track sales and create bills </h4>
                        </div>
                        <div className="product-sec">
                          <Link to={"#"}>
                            Add Service
                            <i className="ms-2 fa-solid fa-screwdriver-wrench"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="index-pill">
                      <div className="total-stock">
                        <div>
                          <h2>₹ 27,500</h2>
                          <h3>Net Monthly Sales</h3>
                        </div>
                        <div>
                          <h2
                            style={{
                              color: "red",
                            }}
                          >
                            ₹ 0
                          </h2>
                          <h3>Net Monthly Sales (Rs)</h3>
                        </div>
                      </div>
                      <SearchFilter />
                      <Link to={"#"} className="btn btn-items mx-0">
                        All Service
                      </Link>
                      <div className="product-design ">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={inventory}
                            className="img-fluid me-3"
                            alt="Logo"
                          />
                          <h3>Inventory</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <div className="sales-price me-4">
                              <h4>Service Price</h4>
                              <h5>₹ 50</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-sec pt-4">
                        <Link to={"#"}>
                          Add Service
                          <i className="ms-2 fa-solid fa-screwdriver-wrench"></i>
                        </Link>
                      </div>
                    </div>
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

export default IndexTwo;
