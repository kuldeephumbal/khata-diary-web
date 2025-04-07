import React from 'react'

const Stockout = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="stockout"
        tabindex="-1"
        aria-labelledby="stockoutLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body pb-0">
              <h5 className="modal-title" id="stockoutLabel">
                Parties
              </h5>
              <h6>Enter quantity of purchased items</h6>
              <h4>
                0 <span>KGS</span>
              </h4>
            </div>
            <div className="modal-footer">
              <div className="modal-set">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Purchase Price
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Please Enter Amount"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Stock in Date
                  </label>
                  <input
                    type="date"
                    className="form-control ms-4"
                    id="exampleFormControlInput1"
                    placeholder="Please Select Date"
                  />
                </div>
              </div>
              <button type="button" className="w-100 btn btn-savein">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stockout