import React from "react";
import { Link } from "react-router-dom";
import BusinessCardSlider from "./BusinessCardSlider";
import {
  Store,
  ChevronRight,
  WalletCards,
  Layers,
  MapPinned,
  Phone,
  UserRound,
  Globe,
  NotebookText,
  ImageDown,
  Share2,
} from "lucide-react";

function AddBusinessName() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Business Card</span>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <BusinessCardSlider />
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="business-card-address">
                <h3>Business Name</h3>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <Store size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Business Name</h5>
                    <p>Digilligent</p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <WalletCards size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Business Type </h5>
                    <p>Service Provider </p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <Layers size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Business Category </h5>
                    <p>Digilligent </p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <MapPinned size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Business Address </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <Phone size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Mobile Number </h5>
                    <p>00002020002</p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <UserRound size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Owner Name </h5>
                    <p>Mervin Agera</p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <Globe size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>Business Email </h5>
                    <p>byg@gamil.com</p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-address-flex">
                <div className="business-store">
                  <div>
                    <NotebookText size={25} />
                  </div>
                  <div className="business-digilligent">
                    <h5>GSTIN .No </h5>
                    <p>15242</p>
                  </div>
                </div>
                <div>
                  <ChevronRight />
                </div>
              </div>
              <div className="business-your-card">
                <h5>Share Your Business Card</h5>
              </div>
              <div className="business-card-flex">
                <button className="btn-share">
                  <ImageDown size={16} strokeWidth={1} /> Download
                </button>
                <button className="btn-download">
                  <Share2 size={16} strokeWidth={1} /> Share
                </button>
              </div>

              <div className="w-100 mt-5">
                <Link to="#" className="address-next">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBusinessName;
