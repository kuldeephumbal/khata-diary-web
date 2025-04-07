import React from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Store, SlidersHorizontal } from "lucide-react";
import ShopOne from "../../images/shopOne.svg";
import ShopTwo from "../../images/shopTwo.svg";
import user from "../../images/userOne.svg";
import presentation from "../../images/presentation.svg";
import product from "../../images/product.svg";
import setting from "../../images/setting.svg";

function Shop() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>{" "}
              <Link to="#">
                Business <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Digilligent</span>
            </div>
          </div>

          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg notes-one-pills">
              <div className="expense-added-flex">
                <div className="expense-added-search">
                  <input type="text" name="" placeholder="Search" id="" />
                  <div className="search-added">
                    <Search />
                  </div>
                </div>
                <div className="slid-filter">
                  <SlidersHorizontal />
                  <p>Filters</p>
                </div>
              </div>
              <div className="shop-bg">
                <div className="shop-one">
                  <img src={ShopOne} alt="" />
                  <div className="service-provider">
                    <h5>KhataDiary</h5>
                    <p>Service Provider</p>
                  </div>
                </div>
                <div className="shop-map">
                  <MapPin />
                  <h4>
                    2nd Floor Shop no 8, Sainiwas CHS near T.M.C Office,
                    Majiwada, Thane (W)
                  </h4>
                </div>
              </div>
              <div className="shop-bg">
                <div className="shop-one">
                  <img src={ShopTwo} alt="ShopTwo" />
                  <div className="service-provider">
                    <h5>Digilligent</h5>
                    <p>Service Provider</p>
                  </div>
                </div>
                <div className="shop-map">
                  <MapPin />
                  <h4>
                    2nd Floor Shop no 8, Sainiwas CHS near T.M.C Office,
                    Majiwada, Thane (W)
                  </h4>
                </div>
              </div>
              <div className="shop-bg">
                <div className="shop-one">
                  <img src={ShopOne} alt="" />
                  <div className="service-provider">
                    <h5>KhataDiary</h5>
                    <p>Service Provider</p>
                  </div>
                </div>
                <div className="shop-map">
                  <MapPin />
                  <h4>
                    2nd Floor Shop no 8, Sainiwas CHS near T.M.C Office,
                    Majiwada, Thane (W)
                  </h4>
                </div>
              </div>
              <div className="shop-bg">
                <div className="shop-one">
                  <img src={ShopTwo} alt="ShopTwo" />
                  <div className="service-provider">
                    <h5>Digilligent</h5>
                    <p>Service Provider</p>
                  </div>
                </div>
                <div className="shop-map">
                  <MapPin />
                  <h4>
                    2nd Floor Shop no 8, Sainiwas CHS near T.M.C Office,
                    Majiwada, Thane (W)
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="shop-profile-bg">
              <div className="shop-profile">
                <h3>Business Profile</h3>
              </div>
              <div className="profile-user">
                <div className="profile-user">
                  <img src={user} alt="" />
                </div>
                <div className="profile-name">
                  <h4>Nupur kadam</h4>
                  <p>nkk@gmail.com </p>
                </div>
              </div>
              <div className="store-shop-flex">
                <div className="store-shop">
                  <Store />
                  <div className="business-name">
                    <h4>Business Name</h4>
                    <p>Digilligent </p>
                  </div>
                </div>
                <div className="store-shop">
                  {/* <Store /> */}
                  <img src={presentation} alt="" />
                  <div className="business-name">
                    <h4>Business Type </h4>
                    <p>Service Provider </p>
                  </div>
                </div>
              </div>
              <div className="shop-pills">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="products-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#products-home"
                      type="button"
                      role="tab"
                      aria-controls="products-home"
                      aria-selected="true"
                    >
                      Products
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="services-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#services-profile"
                      type="button"
                      role="tab"
                      aria-controls="services-profile"
                      aria-selected="false"
                    >
                      Services
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="expense-empty-bg">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="products-home"
                  role="tabpanel"
                  aria-labelledby="products-home-tab"
                  tabindex="0"
                >
                  <div>
                    <div className="expense-added-sale shop-input mb-4 ">
                      <input type="text" placeholder="Search product name " />
                      <div className="search-added-sale">
                        <Search />
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={product} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={product} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={product} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={product} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={product} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="services-profile"
                  role="tabpanel"
                  aria-labelledby="services-profile-tab"
                  tabindex="0"
                >
                  <div>
                    <div className="expense-added-sale shop-input mb-4 ">
                      <input type="text" placeholder="Search services name  " />
                      <div className="search-added-sale">
                        <Search />
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={setting} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={setting} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={setting} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={setting} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
                      </div>
                    </div>
                    <div className="product-flex">
                      <div>
                        <img src={setting} className="img-fluid" alt="" />
                      </div>
                      <div className="product-price">
                        <h3>Inventory</h3>
                      </div>
                      <div className="product-price">
                        <h4>Sales Price</h4>
                        <p> ₹50</p>
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
}

export default Shop;
