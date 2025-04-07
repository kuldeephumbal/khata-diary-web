import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search, FileText, Calendar, BookMarked } from "lucide-react";
import saleThree from "../../images/saleThree.svg";

function Quotation() {
  return (
    <>
      <div className="sale-bill-container">
        <div className="sale-bill">
          <h4>Quotation Number </h4>
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
        <h4>Quotation To </h4>
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
            <h5>Quotation Amount</h5>
            <p>₹50</p>
          </div>
          <div className="saleThree-img">
            <img src={saleThree} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="btn-bills-flex">
          <Link to="/quotationTwo" className="btn-bills">
            Generate Quotation <FileText size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Quotation;
