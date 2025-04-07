import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FileText,
  SlidersHorizontal,
  Search,
  ArrowDownWideNarrow,
  Bell,
} from "lucide-react";
import illustration from "../../images/Illustration.svg";
import invoice_light from "../../images/invoice-light.svg";

function QuotationOne() {
  return (
    <>
      <div className="py-50">
        <div className="illustration-bills">
          <img src={illustration} className="img-fluid" alt="" />
          <h4>No Bills Generated</h4>
        </div>
      </div>
      <div>
        <div>
          <div className="expense-added-flex">
            <div className="expense-added-search search-staff sale-sort">
              <input type="text" name="" placeholder="Search" id="" />
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
                        <label for="html">All Transactions</label>
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
                        <label for="return">Purchase Return </label>
                        <input
                          type="radio"
                          id="return"
                          name="fav_language"
                          value="return"
                        />
                      </div>
                      <div className="filter-modal-label">
                        <label for="paid">Purchase - Fully Paid</label>
                        <input
                          type="radio"
                          id="paid"
                          name="fav_language"
                          value="paid"
                        />
                      </div>
                      <div className="filter-modal-label">
                        <label for="unpaid">Purchase - Unpaid</label>
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
                        <label for="highest">Highest Amount First</label>
                        <input
                          type="radio"
                          id="highest"
                          name="fav_language"
                          value="Highest"
                        />
                      </div>
                      <div className="filter-modal-label">
                        <label for="lowest">Lowest Amount First</label>
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
              <div className="return-arrow invoice-light">
                <img src={invoice_light} className="img-fluid" alt="" />
              </div>
              <div className="return-arrow-sale">
                <h4>Cristiano. R</h4>
                <h5>Quotation #1</h5>
                <p>23 Nov 2024</p>
              </div>
            </div>
            <div className="return-main-flex">
              <div className="return-amount">
                <h5>₹ 12,300</h5>
              </div>
              <div>
                <Bell size={19} />
              </div>
            </div>
          </div>
          <div className="return-main">
            <div className="return-main-flex">
              <div className="return-arrow invoice-light">
                <img src={invoice_light} className="img-fluid" alt="" />
              </div>
              <div className="return-arrow-sale">
                <h4>Cristiano. R</h4>
                <h5>Quotation #2</h5>
                <p>23 Nov 2024</p>
              </div>
            </div>
            <div className="return-main-flex">
              <div className="return-amount">
                <h5>₹ 12,300</h5>
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
          Generate Quotation <FileText size={16} />
        </button>
      </div>
    </>
  );
}

export default QuotationOne;
