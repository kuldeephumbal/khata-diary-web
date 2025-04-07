import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowLeft,
  Settings,
  BellDot,
  UserRoundPlus,
  BookOpenText,
  File,
  FileText,
  SlidersHorizontal,
  Search,
  ArrowDownWideNarrow,
  Bell,
  ChevronRight,
  Camera,
  Calendar,
} from "lucide-react";
import illustration from "../../images/Illustration.svg";
import return_arrow from "../../images/return-arrow.svg";
import post_add from "../../images/postadd.svg";
import hand_money from "../../images/hand-money.svg";
import SaleBill from "./SaleBill";
import PurchasesOne from "./PurchasesOne";
import money_deposit from "../../images/money-deposit.svg";
import QuotationOne from "./QuotationOne";
import Purchases from "./Purchases";
import saleThree from "../../images/saleThree.svg";

function QuotationFour() {
  const [activeTab, setActiveTab] = useState("quotation");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Business</span>
            </div>
          </div>

          {/* First Column */}
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div>
              <div className="tab-content">
                {activeTab === "sale" && (
                  <div>
                    <div className="sales-business-bg">
                      <div className="sales-business-main">
                        <div className="left-arrow">
                          <Link to="">
                            <ArrowLeft size={19} />
                          </Link>
                        </div>
                        <div className="left-arrow">
                          <p>Business</p>
                        </div>
                        <div className="btn-roundPlus-flex">
                          <button
                            className="btn-roundPlus"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#roundPlus"
                          >
                            <UserRoundPlus size={22} />
                          </button>

                          <button className="btn-roundPlus">
                            <BellDot size={22} />
                          </button>
                          <button className="btn-roundPlus">
                            <Settings size={22} />
                          </button>
                        </div>
                      </div>

                      <div className="sales-business-heading">
                        <h3>Hello, Shellcode👋</h3>
                        <p>12th Dec 24</p>
                      </div>
                      <div className="sales-slider-main">
                        <div className="slider-container">
                          <Slider {...settings}>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders">
                                <h4>Cash In </h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Online In</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Purchase</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Cash Out</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Online Out</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="btn-cashbook-flex">
                        <button className="btn-cashbook">
                          <BookOpenText size={20} /> Cashbook
                        </button>
                        <button className="btn-cashbook">
                          <File size={20} /> Reports
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "purchases" && (
                  <div>
                    <div className="sales-business-bg">
                      <div className="sales-business-main">
                        <div className="left-arrow">
                          <Link to="">
                            <ArrowLeft size={19} />
                          </Link>
                        </div>
                        <div className="left-arrow">
                          <p>Business</p>
                        </div>
                        <div className="btn-roundPlus-flex">
                          <button
                            className="btn-roundPlus"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#roundPlus1"
                          >
                            <UserRoundPlus size={22} />
                          </button>

                          <button className="btn-roundPlus">
                            <BellDot size={22} />
                          </button>
                          <button className="btn-roundPlus">
                            <Settings size={22} />
                          </button>
                        </div>
                      </div>

                      <div className="sales-business-heading">
                        <h3>Hello, Shellcode👋</h3>
                        <p>12th Dec 24</p>
                      </div>
                      <div className="sales-slider-main">
                        <div className="slider-container">
                          <Slider {...settings}>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders">
                                <h4>Cash In </h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Online In</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Purchase</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Cash Out</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Online Out</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="btn-cashbook-flex">
                        <button className="btn-cashbook">
                          <BookOpenText size={20} /> Cashbook
                        </button>
                        <button className="btn-cashbook">
                          <File size={20} /> Reports
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "quotation" && (
                  <div>
                    <div className="sales-business-bg">
                      <div className="sales-business-main">
                        <div className="left-arrow">
                          <Link to="">
                            <ArrowLeft size={19} />
                          </Link>
                        </div>
                        <div className="left-arrow">
                          <p>Business</p>
                        </div>
                        <div className="btn-roundPlus-flex">
                          <button
                            className="btn-roundPlus"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#roundPlus"
                          >
                            <UserRoundPlus size={22} />
                          </button>

                          <button className="btn-roundPlus">
                            <BellDot size={22} />
                          </button>
                          <button className="btn-roundPlus">
                            <Settings size={22} />
                          </button>
                        </div>
                      </div>

                      <div className="sales-business-heading">
                        <h3>Hello, Shellcode👋</h3>
                        <p>12th Dec 24</p>
                      </div>
                      <div className="sales-slider-main">
                        <div className="slider-container">
                          <Slider {...settings}>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders">
                                <h4>Cash In </h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Online In</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Purchase</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Cash Out</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Online Out</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="btn-cashbook-flex">
                        <button className="btn-cashbook">
                          <BookOpenText size={20} /> Cashbook
                        </button>
                        <button className="btn-cashbook">
                          <File size={20} /> Reports
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "inventory" && (
                  <div>
                    <div className="sales-business-bg">
                      <div className="sales-business-main">
                        <div className="left-arrow">
                          <Link to="">
                            <ArrowLeft size={19} />
                          </Link>
                        </div>
                        <div className="left-arrow">
                          <p>Business</p>
                        </div>
                        <div className="btn-roundPlus-flex">
                          <button
                            className="btn-roundPlus"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#roundPlus"
                          >
                            <UserRoundPlus size={22} />
                          </button>

                          <button className="btn-roundPlus">
                            <BellDot size={22} />
                          </button>
                          <button className="btn-roundPlus">
                            <Settings size={22} />
                          </button>
                        </div>
                      </div>

                      <div className="sales-business-heading">
                        <h3>Hello, Shellcode👋</h3>
                        <p>12th Dec 24</p>
                      </div>
                      <div className="sales-slider-main">
                        <div className="slider-container">
                          <Slider {...settings}>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders">
                                <h4>Cash In </h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Online In</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Purchase</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Cash Out</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Online Out</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                            <div>
                              <div className="sales-sliders">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                              <div className="sales-sliders mb-0">
                                <h4>Sales</h4>
                                <p>₹86,860</p>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="btn-cashbook-flex">
                        <button className="btn-cashbook">
                          <BookOpenText size={20} /> Cashbook
                        </button>
                        <button className="btn-cashbook">
                          <File size={20} /> Reports
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="expense-empty-bg sales-one-pills">
                {/* Tab Buttons */}
                <ul className="nav nav-pills mb-3">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "sale" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("sale")}
                    >
                      Sale
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "purchases" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("purchases")}
                    >
                      Purchases
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "quotation" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("quotation")}
                    >
                      Quotation
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "inventory" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("inventory")}
                    >
                      Inventory
                    </button>
                  </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content">
                  {activeTab === "sale" && (
                    <>
                      <div className="py-50">
                        <div className="illustration-bills">
                          <img
                            src={illustration}
                            className="img-fluid"
                            alt=""
                          />
                          <h4>No Bills Generated</h4>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="expense-added-flex">
                            <div className="expense-added-search search-staff sale-sort">
                              <input
                                type="text"
                                name=""
                                placeholder="Search"
                                id=""
                              />
                              <div className="search-added">
                                <Search size={19} />
                              </div>
                            </div>
                            <button
                              className="slid-filter "
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#filters"
                            >
                              <SlidersHorizontal />
                              <p>Filters</p>
                            </button>
                            <div
                              className="modal fade"
                              id="filters"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabindex="-1"
                              aria-labelledby="filters"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog model-padding modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-body-sale">
                                    <div>
                                      <div className="filter-modal">
                                        <h5>Filter Transaction by :</h5>
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="html">
                                          All Transactions
                                        </label>
                                        <input
                                          type="radio"
                                          id="html"
                                          name="fav_language"
                                          value="HTML"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="Purchase">Purchase</label>
                                        <input
                                          type="radio"
                                          id="Purchase"
                                          name="fav_language"
                                          value="Purchase"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="out">Purchase OUT</label>
                                        <input
                                          type="radio"
                                          id="out"
                                          name="fav_language"
                                          value="out"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="return">
                                          Purchase Return{" "}
                                        </label>
                                        <input
                                          type="radio"
                                          id="return"
                                          name="fav_language"
                                          value="return"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="paid">
                                          Purchase - Fully Paid
                                        </label>
                                        <input
                                          type="radio"
                                          id="paid"
                                          name="fav_language"
                                          value="paid"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="unpaid">
                                          Purchase - Unpaid
                                        </label>
                                        <input
                                          type="radio"
                                          id="unpaid"
                                          name="fav_language"
                                          value="unpaid"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="unpaid-par">
                                          Purchase - Partially Paid
                                        </label>
                                        <input
                                          type="radio"
                                          id="unpaid-par"
                                          name="fav_language"
                                          value="unpaid-par"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer-added">
                                    <button
                                      type="button"
                                      className="btn btn-cancel w-100"
                                      data-bs-dismiss="modal"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              className="slid-filter "
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#sort"
                            >
                              <ArrowDownWideNarrow size={22} />
                              <p>Sort</p>
                            </button>
                            <div
                              className="modal fade"
                              id="sort"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabindex="-1"
                              aria-labelledby="sort"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog model-padding modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-body-sale">
                                    <div>
                                      <div className="filter-modal">
                                        <h5>Sort By :</h5>
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="latest">Latest First</label>
                                        <input
                                          type="radio"
                                          id="latest"
                                          name="fav_language"
                                          value="Latest"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="oldest">Oldest First</label>
                                        <input
                                          type="radio"
                                          id="oldest"
                                          name="fav_language"
                                          value="Oldest"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="highest">
                                          Highest Amount First
                                        </label>
                                        <input
                                          type="radio"
                                          id="highest"
                                          name="fav_language"
                                          value="Highest"
                                        />
                                      </div>
                                      <div className="filter-modal-label">
                                        <label for="lowest">
                                          Lowest Amount First
                                        </label>
                                        <input
                                          type="radio"
                                          id="lowest"
                                          name="fav_language"
                                          value="Lowest"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer-added">
                                    <button
                                      type="button"
                                      className="btn btn-cancel w-100"
                                      data-bs-dismiss="modal"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="return-main">
                            <div className="return-main-flex">
                              <div className="return-arrow">
                                <img
                                  src={return_arrow}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="return-arrow-sale">
                                <h4>Adam. S</h4>
                                <h5>Sale Return #1</h5>
                                <p>23 Nov 2024</p>
                              </div>
                            </div>
                            <div className="return-main-flex">
                              <div className="return-amount">
                                <h5>₹ 12,300</h5>
                                <p>Cash</p>
                              </div>
                              <div>
                                <Bell size={19} />
                              </div>
                            </div>
                          </div>
                          <div className="return-main">
                            <div className="return-main-flex">
                              <div className="return-arrow hand-money">
                                <img
                                  src={hand_money}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="return-arrow-sale">
                                <h4>Adam. S</h4>
                                <h5>Sale Return #1</h5>
                                <p>23 Nov 2024</p>
                              </div>
                            </div>
                            <div className="return-main-flex">
                              <div className="return-amount">
                                <h5>₹ 12,300</h5>
                                <p>Cash</p>
                              </div>
                              <div>
                                <Bell size={19} />
                              </div>
                            </div>
                          </div>
                          <div className="return-main">
                            <div className="return-main-flex">
                              <div className="return-arrow post-add">
                                <img
                                  src={post_add}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="return-arrow-sale">
                                <h4>Adam. S</h4>
                                <h5>Sale Return #1</h5>
                                <p>23 Nov 2024</p>
                              </div>
                            </div>
                            <div className="return-main-flex">
                              <div className="return-amount full-paid">
                                <h5>₹ 12,300</h5>
                                <p>Fully Paid</p>
                              </div>
                              <div>
                                <Bell size={19} />
                              </div>
                            </div>
                          </div>
                          <div className="return-main">
                            <div className="return-main-flex">
                              <div className="return-arrow post-add">
                                <img
                                  src={post_add}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="return-arrow-sale">
                                <h4>Adam. S</h4>
                                <h5>Sale Return #1</h5>
                                <p>23 Nov 2024</p>
                              </div>
                            </div>
                            <div className="return-main-flex">
                              <div className="return-amount unpaid">
                                <h5>₹ 12,300</h5>
                                <p>Unpaid</p>
                              </div>
                              <div>
                                <Bell size={19} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-bills-flex">
                        <button className="btn-bills">
                          Add Bill <FileText size={16} />
                        </button>
                        <button className="btn-bills btn-more">More</button>
                      </div>
                    </>
                  )}
                  {activeTab === "purchases" && (
                    <div>
                      <PurchasesOne />
                    </div>
                  )}
                  {activeTab === "quotation" && (
                    <div>
                      <QuotationOne />
                    </div>
                  )}
                  {activeTab === "inventory" && (
                    <>
                      <div className="py-50">
                        <div className="illustration-bills">
                          <img
                            src={illustration}
                            className="img-fluid"
                            alt=""
                          />
                          <h4>No Bills Generated</h4>
                        </div>
                      </div>
                      <div className="btn-bills-flex">
                        <button className="btn-bills">
                          Add Bill <FileText size={16} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div
                className="modal fade"
                id="roundPlus"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="roundPlus"
                aria-hidden="true"
              >
                <div className="modal-dialog model-padding modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body-sale pb-0">
                      <div className="roundPlus-modal">
                        <div className="roundPlus-modal-flex">
                          <div className="return-arrow post-add">
                            <img src={post_add} className="img-fluid" alt="" />
                          </div>
                          <div className="modal-sale">
                            <h4>Sale</h4>
                          </div>
                        </div>
                        <div className="roundPlus-modal-flex">
                          <div className="return-arrow">
                            <img
                              src={return_arrow}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="modal-sale">
                            <h4>Sale Return </h4>
                          </div>
                        </div>
                        <div className="roundPlus-modal-flex">
                          <div className="return-arrow hand-money">
                            <img
                              src={hand_money}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="modal-sale">
                            <h4>Payment In</h4>
                          </div>
                        </div>
                      </div>
                      <div className="purchase-modal">
                        <input
                          type="text"
                          placeholder="Purchase, Purchase Out , Purchase Return "
                          name=""
                          id=""
                        />
                        <div className="purchase-modal-position">
                          <ChevronRight />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-added">
                      <button
                        type="button"
                        className="btn btn-cancel w-100"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="roundPlus1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="roundPlus1"
                aria-hidden="true"
              >
                <div className="modal-dialog model-padding modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body-sale pb-0">
                      <div className="roundPlus-modal">
                        <div className="roundPlus-modal-flex">
                          <div className="return-arrow post-add">
                            <img src={post_add} className="img-fluid" alt="" />
                          </div>
                          <div className="modal-sale">
                            <h4>Purchase</h4>
                          </div>
                        </div>
                        <div className="roundPlus-modal-flex">
                          <div className="return-arrow">
                            <img
                              src={return_arrow}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="modal-sale">
                            <h4>Purchase Return </h4>
                          </div>
                        </div>
                        <div className="roundPlus-modal-flex">
                          <div className="return-arrow money_deposit">
                            <img
                              src={money_deposit}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="modal-sale">
                            <h4>Payment Out</h4>
                          </div>
                        </div>
                      </div>
                      <div className="purchase-modal">
                        <input
                          type="text"
                          placeholder="Sale , Payment In , Sale Return  "
                          name=""
                          id=""
                        />
                        <div className="purchase-modal-position">
                          <ChevronRight />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-added">
                      <button
                        type="button"
                        className="btn btn-cancel w-100"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - Syncs with First Column */}
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="tab-content">
                {activeTab === "sale" && (
                  <>
                    <SaleBill />
                  </>
                )}
                {activeTab === "purchases" && (
                  <>
                    <Purchases />
                  </>
                )}
                {activeTab === "quotation" && (
                  <>
                    <div className="sale-bill-container">
                      <div className="sale-bill">
                        <h4>Sale Bill Number</h4>
                        <p>2</p>
                      </div>
                      <div className="sale-bill">
                        <h4 className="text-end">Date</h4>
                        <h5>
                          <Calendar size={15} /> Sahil Bill#1
                        </h5>
                      </div>
                    </div>
                    <div className="sale-bill-to">
                      <h4>Bill To</h4>
                      <div className="expense-added-sale mb-1  ">
                        <input
                          type="text"
                          placeholder="Search Customer from your contact"
                        />
                        <div className="search-added-sale">
                          <Search />
                        </div>
                      </div>
                      <div>
                        <Link to="" className="add-customer">
                          + Add New Party
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="" className="add-sale-item">
                        + Add New Item to inventory
                      </Link>
                    </div>
                    <div className="sale-item">
                      <h3>1 item</h3>
                      <div className="cleaning-item-flex">
                        <div className="cleaning-item">
                          <h4>Cleaning</h4>
                          <p>1.0 x 19</p>
                        </div>
                        <div className="cleaning-item">
                          <h5>₹50</h5>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <button
                        className="additional-four-btn"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#charges"
                      >
                        <div>
                          <div className="change-name-fl">
                            Additional charges <ChevronRight />
                          </div>
                          <div className="change-name-fl">
                            <h4>Charge name</h4>
                            <h4>10</h4>
                          </div>
                        </div>
                      </button>
                      <div
                        className="modal fade"
                        id="charges"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="charges"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body-sale">
                              <div>
                                <div className="modal-charges">
                                  <h4>Additional Charges</h4>
                                  <p>
                                    Add up to 3 additional charges to the bill
                                    (shipping, Delivery, Packaging)
                                  </p>
                                </div>
                                <div className="charges-input">
                                  <input
                                    type="text"
                                    placeholder="Name of charges"
                                    name=""
                                    id=""
                                  />
                                  <input
                                    type="text"
                                    placeholder="Amount"
                                    name=""
                                    id=""
                                  />
                                </div>
                                <div>
                                  <Link to="" className="additional-charges">
                                    + Add New additional charges
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="btn-save-main">
                              <button className="btn-save">Save</button>
                            </div>
                            <div className="modal-footer-added">
                              <button
                                type="button"
                                className="btn btn-cancel w-100"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="additional-four-btn"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#discount"
                      >
                        <div>
                          <div className="change-name-fl">
                            Add extra discount <ChevronRight />
                          </div>
                          <div className="change-name-fl">
                            <h4>Discount</h4>
                            <h4>10</h4>
                          </div>
                        </div>
                      </button>
                      <div
                        className="modal fade"
                        id="discount"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="discount"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body-sale">
                              <div>
                                <div className="modal-charges text-center">
                                  <h4>Add Extra Discount</h4>
                                  <p>
                                    Add extra discount on total sales bill
                                    amount
                                  </p>
                                </div>
                                <div className="charges-input">
                                  <select name="Discount" id="Discount">
                                    <option value="volvo">
                                      Discount in Rs
                                    </option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                  </select>
                                  <input
                                    type="text"
                                    placeholder="Amount"
                                    name=""
                                    id=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="btn-save-main">
                              <button className="btn-save">Save</button>
                            </div>
                            <div className="modal-footer-added">
                              <button
                                type="button"
                                className="btn btn-cancel w-100"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="additional-four-btn"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#Optional"
                      >
                        <div>
                          <div className="change-name-fl">
                            Optional fields to be printed on bill
                            <ChevronRight />
                          </div>
                          <div className="border-four"></div>
                          <div className="field-discount">
                            <h3>Custom Field</h3>
                            <div className="change-name-fl">
                              <h4>Discount</h4>
                              <h4>10</h4>
                            </div>
                          </div>
                          <div className="border-four"></div>
                          <div className="field-discount">
                            <h3>Customer Address</h3>
                            <div className="change-name-fl">
                              <h4>
                                2nd Floor, Room no 8, Sai Niwas C.H.S, Near
                                T.M.C Office Majiwada, Thane (W)
                              </h4>
                            </div>
                          </div>
                          <div className="border-four"></div>
                          <div className="field-discount">
                            <h3>Your Address</h3>
                            <div className="change-name-fl">
                              <h4>Thane 400604</h4>
                            </div>
                          </div>
                          <div className="border-four"></div>
                          <div className="field-discount">
                            <h3>Terms & Conditions</h3>
                            <div className="change-name-fl">
                              <ol>
                                <li>First line of terms & Conditions</li>
                                <li>Second line of terms & Conditions</li>
                                <li>Third line of terms & Conditions</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </button>
                      <div
                        className="modal fade"
                        id="Optional"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="Optional"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body-sale">
                              <div>
                                <div className="modal-charges">
                                  <h4>
                                    Optional fields to be printed on Bill{" "}
                                  </h4>
                                  <div className="custom-checkbox">
                                    <input
                                      type="checkbox"
                                      id="vehicle1"
                                      name="vehicle1"
                                      value="Bike"
                                    />
                                    <label for="vehicle1"> Custom Field</label>
                                  </div>
                                  <p>
                                    Add up to 3 custom fields to the bill (
                                    Batch No, Serial No, IMEI Number )
                                  </p>
                                </div>
                                <div className="charges-input">
                                  <input
                                    type="text"
                                    placeholder="Enter field name "
                                    name=""
                                    id=""
                                  />
                                  <input
                                    type="text"
                                    placeholder="Enter value"
                                    name=""
                                    id=""
                                  />
                                </div>
                                <div>
                                  <Link to="" className="additional-charges">
                                    + Add New custom field
                                  </Link>
                                </div>
                                <div className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label for="vehicle1">Customer Address</label>
                                </div>
                                <div className="custom-checkbox address-checkbox">
                                  <input
                                    type="checkbox"
                                    id="vehicle2"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <label for="vehicle2">
                                    Your shop address
                                  </label>
                                </div>
                                <div className="condition-text">
                                  <h5>Terms and condition</h5>
                                  <p>
                                    Add up-to 3 terms and conditions to the bill
                                  </p>
                                </div>
                                <div className="custom-checkbox address-checkbox">
                                  <input
                                    type="checkbox"
                                    id="vehicle2"
                                    name="vehicle1"
                                    value="Bike"
                                  />
                                  <div className="charges-input w-100 mb-0">
                                    <input
                                      type="text"
                                      placeholder="Enter field name "
                                      name=""
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div>
                                  <Link to="" className="additional-charges">
                                    + Add New T&C Line
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="btn-save-main">
                              <button className="btn-save">Save</button>
                            </div>
                            <div className="modal-footer-added">
                              <button
                                type="button"
                                className="btn btn-cancel w-100"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="additional-four-btn"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#notes"
                      >
                        <div>
                          <div className="change-name-fl">
                            Add notes & Photos <ChevronRight />
                          </div>
                          <div className="change-name-fl">
                            <h4>Note description</h4>
                          </div>
                        </div>
                      </button>
                      <div
                        className="modal fade"
                        id="notes"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="notes"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body-sale">
                              <div>
                                <div className="modal-charges text-center">
                                  <h4>
                                    Additional notes & Photos your reference
                                    only
                                  </h4>
                                </div>
                                <div className="browse-flex">
                                  <div class="browse">
                                    <input type="file" class="browse-file" />
                                    <div class="browse-file-img">
                                      <Camera />
                                    </div>
                                  </div>
                                  <div class="browse">
                                    <input type="file" class="browse-file" />
                                    <div class="browse-file-img">
                                      <Camera />
                                    </div>
                                  </div>
                                  <div class="browse">
                                    <input type="file" class="browse-file" />
                                    <div class="browse-file-img">
                                      <Camera />
                                    </div>
                                  </div>
                                  <div class="browse">
                                    <input type="file" class="browse-file" />
                                    <div class="browse-file-img">
                                      <Camera />
                                    </div>
                                  </div>
                                  <div class="browse">
                                    <input type="file" class="browse-file" />
                                    <div class="browse-file-img">
                                      <Camera />
                                    </div>
                                  </div>
                                </div>
                                <div className="add-note-three">
                                  <label for="note">Add note :</label>

                                  <textarea
                                    id="note"
                                    name="note"
                                    rows="4"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="btn-save-main">
                              <button className="btn-save">Save</button>
                            </div>
                            <div className="modal-footer-added">
                              <button
                                type="button"
                                className="btn btn-cancel w-100"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="sale-bill-amount">
                        <h5>Sale Bill Amount</h5>
                        <p>₹50</p>
                      </div>
                      <div className="saleThree-img">
                        <img src={saleThree} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="sale-generate-bill">
                      <div className="sale-amount">
                        <h3>Sales bill amount</h3>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter Amount"
                          id=""
                        />
                      </div>
                      <div className="sale-amount">
                        <h3>Paid amount</h3>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter Amount"
                          id=""
                        />
                      </div>
                      <div className="sale-amount">
                        <h3>Balance amount</h3>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter Amount"
                          id=""
                        />
                      </div>
                      <div>
                        <div className="row">
                          <div className="col-6">
                            <div className="cash-radio added-radio">
                              <input
                                type="radio"
                                id="added"
                                name="fav_language"
                                value="Added"
                              />
                              <label for="added">
                                Balance amount will automatically added to
                                ledger
                              </label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cash-radio">
                              <input
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                              />
                              <label for="html">Online</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cash-radio">
                              <input
                                type="radio"
                                id="cash"
                                name="fav_language"
                                value="Cash"
                              />
                              <label for="cash">Cash</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-bills-flex">
                        <Link to="#" className="btn-bills">
                          Generate Quotation <FileText size={16} />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "inventory" && <></>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationFour;
