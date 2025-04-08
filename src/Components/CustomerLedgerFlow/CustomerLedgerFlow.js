import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KhataDiaryImg from "../../images/KhataDiaryImg.svg";
import UserLedger from "../../images/UserLedger.svg";
import flag_india from "../../images/flag-india.svg";
import {
  ArrowDown,
  ArrowUp,
  BookOpenText,
  FileText,
  UserPlus,
  Download,
  BellRing,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import AddTransaction from "./AddTransaction";
import SupplierTransaction from "./SupplierTransaction";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function CustomerLedgerFlow() {
  const [activeTab, setActiveTab] = useState("customer");
  const [selectedGender, setSelectedGender] = useState(null);
  const [showAddressDetails, setShowAddressDetails] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeView, setActiveView] = useState("customer-ledger");
  const [selectedUser, setSelectedUser] = useState(null);
  const [supplierView, setSupplierView] = useState("supplier-ledger-form");
  const [selectedSupplierGender, setSelectedSupplierGender] = useState(null);
  const [showSupplierAddressDetails, setShowSupplierAddressDetails] =
    useState(false);
  const [supplierSameAsShipping, setSupplierSameAsShipping] = useState(false);
  const [fetchLedger, setFetchLedger] = useState(false);
  const [globalLedger, setGlobalLedger] = useState(false);
  const navigate = useNavigate();

  const userId = Cookies.get("KhataDiary_user_id");
  const accessToken = Cookies.get("KhataDiary_access_token");

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    mobile: "",
    email: "",
    gender: "",
    billing_flat_building: "",
    billing_area_locality: "",
    billing_pincode: "",
    billing_city: "",
    billing_state: "",
    shipping_flat_building: "",
    shipping_area_locality: "",
    shipping_pincode: "",
    shipping_city: "",
    shipping_state: "",
  });

  const fetchLedgerData = async () => {
    try {
      const response = await axios.get(
        `https://khatadiary.synoventum.site/v1/ledger/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setFetchLedger(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const fetchGlobalData = async () => {
    try {
      const response = await axios.get(
        `https://khatadiary.synoventum.site/v1/transactions/report/global?user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setGlobalLedger(response.data);
      console.log("Global Data:", response.data);
    } catch (error) {
      console.error("Error fetching global data:", error);
    }
  };

  useEffect(() => {
    fetchLedgerData();
    fetchGlobalData();
  }, []);

  const handleChange = (e, section = null) => {
    const { name, value } = e.target;
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: { ...prev[section], [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSameAsShippingChange = (e) => {
    const checked = e.target.checked;
    setSameAsShipping(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        shipping_flat_building: prev.billing_flat_building,
        shipping_area_locality: prev.billing_area_locality,
        shipping_pincode: prev.billing_pincode,
        shipping_city: prev.billing_city,
        shipping_state: prev.billing_state,
      }));
    }
  };

  const toggleAddressDetails = () => {
    setShowAddressDetails(prev => !prev);
  };

  const handleAddCustmomer = (e, type) => {
    e.preventDefault();

    const payload = {
      user_id: userId,
      type: type,
      name: formData.name,
      mobile: formData.mobile,
      email_id: formData.email,
      gender: formData.gender,
      billing_flat_building: formData.billing_flat_building,
      billing_area_locality: formData.billing_area_locality,
      billing_pincode: formData.billing_pincode,
      billing_city: formData.billing_city,
      billing_state: formData.billing_state,
      shipping_flat_building: formData.shipping_flat_building,
      shipping_area_locality: formData.shipping_area_locality,
      shipping_pincode: formData.shipping_pincode,
      shipping_city: formData.shipping_city,
      shipping_state: formData.shipping_state,
      business_id: "BUS123456789",
    };

    axios
      .post("https://khatadiary.synoventum.site/v1/ledger", payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Ledger created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating ledger:", error);
      });
  };



  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === "customer") {
      setActiveView("customer-ledger");
    } else {
      setSupplierView("supplier-ledger-form");
    }
  };

  const handleAddCustomerClick = () => {
    setActiveView("customer-ledger");
  };

  const handleAddSupplierClick = () => {
    setSupplierView("supplier-ledger-form");
  };

  const handleLedgeUserClick = (legderId) => {
    setSelectedUser(legderId);
    setActiveView("ledge-user-main");
  };

  const handleSupplierLedgeUserClick = (legderId) => {
    setSelectedUser(legderId);
    setSupplierView("supplier-ledger-main");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>
              </Link>

              <span>
                {activeTab === "customer" ? "Add Customer" : "Add Supplier"}
              </span>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div>
              <div className="index-pill customer-profile-mb">
                <div className="expense-khata-diary expense-khata-diary-customer">
                  <img src={KhataDiaryImg} className="img-fluid" alt="" />
                  <select name="KhataDiary" id="KhataDiary">
                    <option value="volvo">KhataDiary</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="index-pill customer-profile-mb ">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "customer" ? "active" : ""
                        }`}
                      id="pills-home-tab"
                      onClick={() => handleTabChange("customer")}
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected={activeTab === "customer"}
                    >
                      Customer
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "supplier" ? "active" : ""
                        }`}
                      id="pills-profile-tab"
                      onClick={() => handleTabChange("supplier")}
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected={activeTab === "supplier"}
                    >
                      Supplier
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className={`tab-pane fade ${activeTab === "customer" ? "show active" : ""
                      }`}
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <>
                      <div className="will-get-give">
                        <div className="will-get">
                          <h4>
                            You will get <ArrowDown />
                          </h4>
                          <p>₹{globalLedger?.customer?.totalGot?.toLocaleString()}</p>
                        </div>
                        <div className="will-get will-give ">
                          <h4>
                            You will give <ArrowUp />
                          </h4>
                          <p>₹{globalLedger?.customer?.totalGive?.toLocaleString()}</p>
                        </div>
                        <div className="will-get net-summary ">
                          <h4>Net Summary</h4>
                          <p>₹{Math.abs(globalLedger?.customer?.netAmount || 0).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="cashbook-reports">
                        <button className="btn-cashbook">
                          <BookOpenText /> Cashbook
                        </button>
                        <button className="btn-cashbook">
                          <FileText /> Reports
                        </button>
                      </div>
                      <div className="add-customer-btn">
                        <button
                          className="add-customer"
                          onClick={handleAddCustomerClick}
                        >
                          Add customer <UserPlus />
                        </button>
                        <button className="add-customer bulk-import ">
                          Bulk Import <Download />
                        </button>
                      </div>
                    </>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === "supplier" ? "show active" : ""
                      }`}
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <>
                      <div className="will-get-give">
                        <div className="will-get">
                          <h4>
                            You will get <ArrowDown />
                          </h4>
                          <p>₹{globalLedger?.supplier?.totalGot?.toLocaleString()}</p>
                        </div>
                        <div className="will-get will-give ">
                          <h4>
                            You will give <ArrowUp />
                          </h4>
                          <p>₹{globalLedger?.supplier?.totalGive?.toLocaleString()}</p>
                        </div>
                        <div className="will-get net-summary ">
                          <h4>Net Summary</h4>
                          <p>₹{Math.abs(globalLedger?.supplier?.netAmount || 0).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="cashbook-reports">
                        <button className="btn-cashbook">
                          <BookOpenText /> Cashbook
                        </button>
                        <button className="btn-cashbook">
                          <FileText /> Reports
                        </button>
                      </div>
                      <div className="add-customer-btn">
                        <button
                          className="add-customer"
                          onClick={handleAddSupplierClick}
                        >
                          Add Supplier <UserPlus />
                        </button>
                        <button className="add-customer bulk-import ">
                          Bulk Import <Download />
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="index-pill ">
                <div
                  id="customer-ledger"
                  style={{
                    display: activeTab === "customer" ? "block" : "none",
                  }}
                >
                  <>
                    <div className="bulk-customer">
                      <h4>Customer</h4>
                      <button className="btn-bulk-reminder">
                        <BellRing /> Bulk reminder
                      </button>
                    </div>
                    <div className="expense-added-flex">
                      <div className="expense-added-search">
                        <input type="text" name="" placeholder="Search" id="" />
                        <div className="search-added">
                          <Search />
                        </div>
                      </div>
                      <div
                        className="slid-filter"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"
                      >
                        <SlidersHorizontal />
                        <p>Filters</p>
                      </div>
                      <div
                        className="modal fade"
                        id="staticBackdrop1"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog  model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <div className="text-end">
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>

                              <div>
                                <div className="filter-by">
                                  <h3>Filter By </h3>
                                </div>
                                <div className="filter-btn-flex">
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "All"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "All" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("All")}
                                  >
                                    All
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "You will get"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "You will get"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("You will get")
                                    }
                                  >
                                    You will get
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "You will give"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "You will give"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("You will give")
                                    }
                                  >
                                    You will give
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "Settled"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "Settled"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() => setSelectedFilter("Settled")}
                                  >
                                    Settled
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "Due today"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "Due today"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("Due today")
                                    }
                                  >
                                    Due today
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "Upcoming"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "Upcoming"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("Upcoming")
                                    }
                                  >
                                    Upcoming
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "No due date"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "No due date"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("No due date")
                                    }
                                  >
                                    No due date
                                  </button>
                                </div>
                                <div className="filter-by mt-4">
                                  <h3>Sort By </h3>
                                </div>
                                <div className="filter-sort">
                                  <label for="recent">Recent</label>
                                  <input
                                    type="radio"
                                    id="recent"
                                    name="fav_language"
                                    value="Recent"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="recent1">
                                    Highest to lowest amount
                                  </label>
                                  <input
                                    type="radio"
                                    id="recent1"
                                    name="fav_language"
                                    value="Recent1"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="recent2">
                                    Lowest to highest amount
                                  </label>
                                  <input
                                    type="radio"
                                    id="recent2"
                                    name="fav_language"
                                    value="Recent2"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="recent3">
                                    Oldest to recent amount
                                  </label>
                                  <input
                                    type="radio"
                                    id="recent3"
                                    name="fav_language"
                                    value="Recent3"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="recent4">By name A-Z</label>
                                  <input
                                    type="radio"
                                    id="recent4"
                                    name="fav_language"
                                    value="Recent4"
                                  />
                                </div>
                                <div>
                                  <button className="btn-save mt-4">
                                    View Result
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {fetchLedger?.results
                        ?.filter((item) => item.type === "customer")
                        .map((item) => {
                          const isNegative = Number(item.balance) < 0;
                          const formattedBalance = Math.abs(Number(item.balance)).toLocaleString();

                          return (
                            <button
                              key={item.id}
                              className="ledge-user"
                              onClick={() =>
                                handleLedgeUserClick({
                                  ledgerId: item.id,
                                })
                              }
                            >
                              <div className="ledge-user-flex">
                                <div className="ledge-user-details profile-letter">
                                  {item.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="ledge-user-details">
                                  <h3>{item.name}</h3>
                                  <p>Just now</p>
                                </div>
                              </div>
                              <div className="ledge-user-details">
                                <h5
                                  style={{
                                    color: isNegative ? "red" : "green",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  {isNegative ? <ArrowUp /> : <ArrowDown />}
                                  ₹ {formattedBalance}
                                </h5>
                              </div>
                            </button>
                          );
                        })}
                    </div>

                  </>
                </div>
                <div
                  id="Supplier-ledger"
                  style={{
                    display: activeTab === "supplier" ? "block" : "none",
                  }}
                >
                  <>
                    <div className="bulk-customer">
                      <h4>Supplier</h4>
                      <button className="btn-bulk-reminder">
                        <BellRing /> Bulk reminder
                      </button>
                    </div>
                    <div className="expense-added-flex">
                      <div className="expense-added-search">
                        <input type="text" name="" placeholder="Search" id="" />
                        <div className="search-added">
                          <Search />
                        </div>
                      </div>
                      <div
                        className="slid-filter"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop2"
                      >
                        <SlidersHorizontal />
                        <p>Filters</p>
                      </div>
                      <div
                        className="modal fade"
                        id="staticBackdrop2"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog  model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <div className="text-end">
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>

                              <div>
                                <div className="filter-by">
                                  <h3>Filter By </h3>
                                </div>
                                <div className="filter-btn-flex">
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "All"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "All" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("All")}
                                  >
                                    All
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "You will get"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "You will get"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("You will get")
                                    }
                                  >
                                    You will get
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "You will give"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "You will give"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("You will give")
                                    }
                                  >
                                    You will give
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "Settled"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "Settled"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() => setSelectedFilter("Settled")}
                                  >
                                    Settled
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "Due today"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "Due today"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("Due today")
                                    }
                                  >
                                    Due today
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "Upcoming"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "Upcoming"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("Upcoming")
                                    }
                                  >
                                    Upcoming
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background:
                                        selectedFilter === "No due date"
                                          ? "#007df0"
                                          : "",
                                      color:
                                        selectedFilter === "No due date"
                                          ? "white"
                                          : "",
                                    }}
                                    onClick={() =>
                                      setSelectedFilter("No due date")
                                    }
                                  >
                                    No due date
                                  </button>
                                </div>
                                <div className="filter-by mt-4">
                                  <h3>Sort By </h3>
                                </div>
                                <div className="filter-sort">
                                  <label for="supplier-recent">Recent</label>
                                  <input
                                    type="radio"
                                    id="supplier-recent"
                                    name="supplier_language"
                                    value="Recent"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="supplier-recent1">
                                    Highest to lowest amount
                                  </label>
                                  <input
                                    type="radio"
                                    id="supplier-recent1"
                                    name="supplier_language"
                                    value="Recent1"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="supplier-recent2">
                                    Lowest to highest amount
                                  </label>
                                  <input
                                    type="radio"
                                    id="supplier-recent2"
                                    name="supplier_language"
                                    value="Recent2"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="supplier-recent3">
                                    Oldest to recent amount
                                  </label>
                                  <input
                                    type="radio"
                                    id="supplier-recent3"
                                    name="supplier_language"
                                    value="Recent3"
                                  />
                                </div>
                                <div className="filter-sort">
                                  <label for="supplier-recent4">
                                    By name A-Z
                                  </label>
                                  <input
                                    type="radio"
                                    id="supplier-recent4"
                                    name="supplier_language"
                                    value="Recent4"
                                  />
                                </div>
                                <div>
                                  <button className="btn-save mt-4">
                                    View Result
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {fetchLedger?.results
                        ?.filter((item) => item.type === "supplier")
                        .map((item) => {
                          const isNegative = Number(item.balance) < 0;
                          const formattedBalance = Math.abs(Number(item.balance)).toLocaleString();

                          return (
                            <button
                              key={item.id}
                              className="ledge-user"
                              onClick={() =>
                                handleSupplierLedgeUserClick({
                                  ledgerId: item.id,
                                })
                              }
                            >
                              <div className="ledge-user-flex">
                                <div className="ledge-user-details profile-letter">
                                  {item.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="ledge-user-details">
                                  <h3>{item.name}</h3>
                                  <p>Just now</p>
                                </div>
                              </div>
                              <div className="ledge-user-details">
                                <h5
                                  style={{
                                    color: isNegative ? "red" : "green",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  {isNegative ? <ArrowUp /> : <ArrowDown />}
                                  ₹ {formattedBalance}
                                </h5>
                              </div>
                            </button>
                          );
                        })}
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="index-pill">
              <div
                style={{ display: activeTab === "customer" ? "block" : "none" }}
              >
                <div>
                  <div
                    id="customer-ledger"
                    style={{
                      display:
                        activeView === "customer-ledger" ? "block" : "none",
                    }}
                  >
                    <div>
                      <div className="add-transaction">
                        <h3>Add Customer Details</h3>
                      </div>
                      <form onSubmit={(e) => handleAddCustmomer(e, "customer")}>
                        <div className="row">
                          <div className="col-12">
                            <div className="payment-details-input">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Name "
                                id=""
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="flex-flag">
                              <img
                                src={flag_india}
                                className="imf-fluid"
                                alt=""
                              />{" "}
                              <p> +91</p>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="payment-details-input">
                              <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                id=""
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="payment-details-input">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email id. "
                                id=""
                              />
                            </div>
                          </div>
                          <div className="btn-gender-flex">
                            {["Male", "Female", "Other"].map((gender) => (
                              <button
                                key={gender}
                                className="btn-gender"
                                type="button"
                                style={{
                                  background: formData.gender === gender ? "#007df0" : "",
                                  color: formData.gender === gender ? "white" : "",
                                }}
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    gender: gender,
                                  }))
                                }>
                                {gender}
                              </button>
                            ))}
                          </div>
                          <div>
                            <button
                              className="add-optional-address"
                              type="button"
                              onClick={toggleAddressDetails}
                            >
                              {showAddressDetails
                                ? "HIDE ADDRESS DETAILS"
                                : "ADD ADDRESS & Details (Optional)"}
                            </button>
                          </div>
                          <div
                            className="col-12"
                            id="address-details"
                            style={{
                              display: showAddressDetails ? "block" : "none",
                            }}
                          >
                            <div className="customer-address-heading">
                              <h5>Billing Address</h5>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="billing_flat_building"
                                    value={formData.billing_flat_building}
                                    onChange={handleChange}
                                    placeholder="Flat / Building Number"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="billing_area_locality"
                                    value={formData.billing_area_locality}
                                    onChange={handleChange}
                                    placeholder="Area / Locality"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="billing_pincode"
                                    value={formData.billing_pincode}
                                    onChange={handleChange}
                                    placeholder="Pincode "
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="billing_city"
                                    value={formData.billing_city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="billing_state"
                                    value={formData.billing_state}
                                    onChange={handleChange}
                                    placeholder="State "
                                    id=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="customer-checkbox">
                              <input
                                type="checkbox"
                                id="shipping"
                                name="shipping"
                                checked={sameAsShipping}
                                onChange={handleSameAsShippingChange}
                              />
                              <label htmlFor="shipping">
                                Shipping address is same as billing address
                              </label>
                            </div>
                            <div
                              className="shipping-address-section"
                              style={{
                                display: sameAsShipping ? "none" : "block",
                              }}
                            >
                              <div className="customer-address-heading">
                                <h5>Shipping Address</h5>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name="shipping_flat_building"
                                      value={formData.shipping_flat_building}
                                      onChange={handleChange}
                                      placeholder="Flat / Building Number"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name="shipping_area_locality"
                                      value={formData.shipping_area_locality}
                                      onChange={handleChange}
                                      placeholder="Area / Locality"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name="shipping_pincode"
                                      value={formData.shipping_pincode}
                                      onChange={handleChange}
                                      placeholder="Pincode "
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name="shipping_city"
                                      value={formData.shipping_city}
                                      onChange={handleChange}
                                      placeholder="City"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name="shipping_state"
                                      value={formData.shipping_state}
                                      onChange={handleChange}
                                      placeholder="State "
                                      id=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="btn-save"> Add Customer</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="ledge-user-main"
                    style={{
                      display:
                        activeView === "ledge-user-main" ? "block" : "none",
                    }}
                  >
                    {selectedUser && (
                      <>
                        <AddTransaction ledgerId={selectedUser.ledgerId} />
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                id="Supplier-ledger"
                style={{ display: activeTab === "supplier" ? "block" : "none" }}
              >
                <div
                  id="supplier-ledger-form"
                  style={{
                    display:
                      supplierView === "supplier-ledger-form"
                        ? "block"
                        : "none",
                  }}
                >
                  <div>
                    <div className="add-transaction">
                      <h3>Add Supplier Details</h3>
                    </div>
                    <form onSubmit={(e) => handleAddCustmomer(e, "supplier")}>
                      <div className="row">
                        <div className="col-12">
                          <div className="payment-details-input">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter Name "
                              id=""
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="flex-flag">
                            <img
                              src={flag_india}
                              className="imf-fluid"
                              alt=""
                            />{" "}
                            <p> +91</p>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="payment-details-input">
                            <input
                              type="text"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              placeholder="Mobile Number"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="payment-details-input">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email id. "
                              id=""
                            />
                          </div>
                        </div>
                        <div className="btn-gender-flex">
                          {["Male", "Female", "Other"].map((gender) => (
                            <button
                              key={gender}
                              className="btn-gender"
                              type="button"
                              style={{
                                background: formData.gender === gender ? "#007df0" : "",
                                color: formData.gender === gender ? "white" : "",
                              }}
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  gender: gender,
                                }))
                              }>
                              {gender}
                            </button>
                          ))}
                        </div>
                        <div>
                          <button
                            className="add-optional-address"
                            type="button"
                            onClick={toggleAddressDetails}
                          >
                            {showAddressDetails
                              ? "HIDE ADDRESS DETAILS"
                              : "ADD ADDRESS & Details (Optional)"}
                          </button>
                        </div>
                        <div
                          className="col-12"
                          id="address-details"
                          style={{
                            display: showAddressDetails ? "block" : "none",
                          }}
                        >
                          <div className="customer-address-heading">
                            <h5>Billing Address</h5>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name="billing_flat_building"
                                  value={formData.billing_flat_building}
                                  onChange={handleChange}
                                  placeholder="Flat / Building Number"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name="billing_area_locality"
                                  value={formData.billing_area_locality}
                                  onChange={handleChange}
                                  placeholder="Area / Locality"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name="billing_pincode"
                                  value={formData.billing_pincode}
                                  onChange={handleChange}
                                  placeholder="Pincode "
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name="billing_city"
                                  value={formData.billing_city}
                                  onChange={handleChange}
                                  placeholder="City"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name="billing_state"
                                  value={formData.billing_state}
                                  onChange={handleChange}
                                  placeholder="State "
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="customer-checkbox">
                            <input
                              type="checkbox"
                              id="shipping"
                              name="shipping"
                              checked={sameAsShipping}
                              onChange={handleSameAsShippingChange}
                            />
                            <label htmlFor="shipping">
                              Shipping address is same as billing address
                            </label>
                          </div>
                          <div
                            className="shipping-address-section"
                            style={{
                              display: sameAsShipping ? "none" : "block",
                            }}
                          >
                            <div className="customer-address-heading">
                              <h5>Shipping Address</h5>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="shipping_flat_building"
                                    value={formData.shipping_flat_building}
                                    onChange={handleChange}
                                    placeholder="Flat / Building Number"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="shipping_area_locality"
                                    value={formData.shipping_area_locality}
                                    onChange={handleChange}
                                    placeholder="Area / Locality"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="shipping_pincode"
                                    value={formData.shipping_pincode}
                                    onChange={handleChange}
                                    placeholder="Pincode "
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="shipping_city"
                                    value={formData.shipping_city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name="shipping_state"
                                    value={formData.shipping_state}
                                    onChange={handleChange}
                                    placeholder="State "
                                    id=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="btn-save"> Add Supplier</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="supplier-ledger-main"
                  style={{
                    display:
                      supplierView === "supplier-ledger-main"
                        ? "block"
                        : "none",
                  }}
                >
                  {selectedUser && (
                    <>
                      <SupplierTransaction />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerLedgerFlow;
