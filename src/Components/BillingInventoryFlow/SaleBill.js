import React from "react";
import { Calendar, Search, BookMarked, FileText } from "lucide-react";
import { Link } from "react-router-dom";

function SaleBill() {
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
        <div className="sale-amount">
          <h3>Sales bill amount</h3>
          <input type="text" name="" placeholder="Enter Amount" id="" />
        </div>
        <div className="sale-amount">
          <h3>Paid amount</h3>
          <input type="text" name="" placeholder="Enter Amount" id="" />
        </div>
        <div className="sale-amount">
          <h3>Balance amount</h3>
          <input type="text" name="" placeholder="Enter Amount" id="" />
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
          <Link to="/salesTwo" className="btn-bills">
            Generate Bill <FileText size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SaleBill;
