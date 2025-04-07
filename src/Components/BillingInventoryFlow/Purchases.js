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
  Calendar,
  BookMarked,
  Camera,
} from "lucide-react";
import illustration from "../../images/Illustration.svg";
import return_arrow from "../../images/return-arrow.svg";
import post_add from "../../images/postadd.svg";
import hand_money from "../../images/hand-money.svg";
import SaleBill from "./SaleBill";
import PurchasesOne from "./PurchasesOne";
import money_deposit from "../../images/money-deposit.svg";
import saleThree from "../../images/saleThree.svg";
import QuotationOne from "./QuotationOne";

function Purchases() {
  return (
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
          <input type="text" placeholder="Search Customer from your contact" />
          <div className="search-added-sale">
            <Search />
          </div>
        </div>
        <div>
          <Link to="" className="add-customer">
            + Add New Customer
          </Link>
        </div>
      </div>
      <div className="sale-bill-to">
        <h4>Add Items </h4>
        <div className="expense-added-sale sale-expense mb-1  ">
          <input type="text" placeholder="Search Customer from your contact" />
          <div className="search-added-bookmark">
            <BookMarked size={15} />
          </div>
        </div>
        <div>
          <Link to="" className="add-customer">
            + Add New Item To Inventory
          </Link>
        </div>
      </div>
      <div className="">
        <div className="mt-4">
          <div className="sale-bill-amount">
            <h5>Purchase Amount</h5>
            <input type="text" placeholder="Enter Amount" name="" id="" />
          </div>
          <div className="saleThree-img">
            <img src={saleThree} className="img-fluid" alt="" />
          </div>
        </div>
        <button
          className="additional-right-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#Optional"
        >
          Optional fields to be printed on bill <ChevronRight />
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
                    <h4>Optional fields to be printed on Bill </h4>
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
                      Add up to 3 custom fields to the bill ( Batch No, Serial
                      No, IMEI Number )
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
                    <label for="vehicle2">Your shop address</label>
                  </div>
                  <div className="condition-text">
                    <h5>Terms and condition</h5>
                    <p>Add up-to 3 terms and conditions to the bill</p>
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
          className="additional-right-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#notes"
        >
          Add notes & Photos <ChevronRight />
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
                    <h4>Additional notes & Photos your reference only</h4>
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

                    <textarea id="note" name="note" rows="4"></textarea>
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
                  Balance amount will automatically added to ledger
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
          <Link to="/purchasesTwo" className="btn-bills">
            Generate Purchase
          </Link>
        </div>
      </div>
    </>
  );
}

export default Purchases;
