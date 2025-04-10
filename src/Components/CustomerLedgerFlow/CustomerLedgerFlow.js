import React, { useEffect, useState, useCallback } from "react";
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
import { toast } from "react-hot-toast";


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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [ledgerData, setLedgerData] = useState([]);
  const [globalLedger, setGlobalLedger] = useState(null);
  const navigate = useNavigate();
  const LIMIT = 10;
  const userId = Cookies.get("KhataDiary_user_id");
  const accessToken = Cookies.get("KhataDiary_access_token");
  const [selectedSortBy, setSelectedSortBy] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [activeType, setActiveType] = useState("customer");

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

  const fetchLedgerData = useCallback(async (pageNum, applyFilter = false) => {
    if (!hasMore && pageNum !== 1 && !applyFilter) return;

    setIsLoading(true);
    try {
      // Convert UI filter names to API parameter format
      let apiTransactionFilter = "All";
      if (selectedFilter !== "All") {
        apiTransactionFilter = selectedFilter.toLowerCase();
      }

      // Create the query parameters
      const params = new URLSearchParams({
        limit: LIMIT,
        page: pageNum,
        type: activeTab,
      });

      // Add filter parameters when they're selected
      if (apiTransactionFilter !== "All") {
        params.append("transactionFilter", apiTransactionFilter);
      }

      // Add sort parameter
      if (selectedSortBy) {
        params.append("sortBy", selectedSortBy);
      }

      // Add search term if present
      if (searchTerm) {
        params.append("name", searchTerm);
      }

      const response = await axios.get(
        `https://khatadiary.synoventum.site/v1/ledger/user/${userId}?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "accept": "application/json",
          },
        }
      );

      const newData = response.data.results || [];
      setLedgerData(prev => pageNum === 1 ? newData : [...prev, ...newData]);
      setHasMore(newData.length === LIMIT && response.data.totalPages > pageNum);
      setPage(pageNum);

    } catch (error) {
      console.error("Error fetching ledger data:", error);
      toast.error("Failed to load ledger data");
    } finally {
      setIsLoading(false);
    }
  }, [userId, accessToken, hasMore, selectedFilter, selectedSortBy, searchTerm, activeTab]);
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

  // Update useEffect to reset filters when tab changes
  useEffect(() => {
    setActiveType(activeTab);
    setSelectedFilter("All");
    setSelectedSortBy("recent");
    setSearchTerm("");
    setPage(1);
    setHasMore(true);
    fetchLedgerData(1, true);
  }, [activeTab]);

  // Add a function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add a function to handle search submission (e.g., on Enter key press)
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      setPage(1);
      setHasMore(true);
      fetchLedgerData(1, true);
    }
  };

  // Add a function to handle applying filters
  const handleApplyFilters = () => {
    setIsFilterApplied(true);
    // Reset to page 1 when applying new filters
    setPage(1);
    setHasMore(true);
    fetchLedgerData(1, true);
    // Close the modal
    document.querySelector('.btn-close[data-bs-dismiss="modal"]').click();
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
  const handleScroll = useCallback(() => {
    const scrollElement = document.querySelector('.customer-list') || document.querySelector('.supplier-list');
    if (!scrollElement) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore && !isLoading) {
      fetchLedgerData(page + 1);
    }
  }, [page, hasMore, isLoading, fetchLedgerData]);

  useEffect(() => {
    fetchLedgerData(1); // Initial fetch
    fetchGlobalData();
  }, []);
  useEffect(() => {
    const scrollElement = document.querySelector('.customer-list') || document.querySelector('.supplier-list');
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);


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
  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === "customer") {
      setActiveView("customer-ledger");
    } else {
      setSupplierView("supplier-ledger-form");
    }
  };
  
  const toggleAddressDetails = () => {
    setShowAddressDetails(prev => !prev);
  };

  const handleAddCustmomer = async (e, type) => {
    e.preventDefault();

    const businessID = Cookies.get("KhataDiary_business_id");

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
      business_id: businessID,
    };

    const loadingToast = toast.loading(`Adding ${type}...`, {
      duration: 3000,
      position: 'top-right'
    });

    try {
      const response = await axios.post(
        "https://khatadiary.synoventum.site/v1/ledger",
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Dismiss loading toast and show success toast
      toast.dismiss(loadingToast);
      toast.success(`${type} added successfully!`, {
        duration: 3000,
        position: 'top-right'
      });

      // Reset form after successful addition
      setFormData({
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

      // Refresh ledger data
      await fetchLedgerData();

    } catch (error) {
      // Dismiss loading toast and show error toast
      toast.dismiss(loadingToast);
      toast.error(`Failed to add ${type}. Please try again.`, {
        duration: 3000,
        position: 'top-right'
      });
      console.error(`Error creating ${type} ledger:`, error);
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

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "N/A"; // Fallback if timestamp is missing
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      // day: "2-digit",
      // month: "short",
      // year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
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
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          onKeyPress={handleSearchSubmit}
                          placeholder="Search"
                        />
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
                                      background: selectedFilter === "All" ? "#007df0" : "",
                                      color: selectedFilter === "All" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("All")}
                                  >
                                    All
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "you will get" ? "#007df0" : "",
                                      color: selectedFilter === "you will get" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("you will get")}
                                  >
                                    You will get
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "you will give" ? "#007df0" : "",
                                      color: selectedFilter === "you will give" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("you will give")}
                                  >
                                    You will give
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "settled" ? "#007df0" : "",
                                      color: selectedFilter === "settled" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("settled")}
                                  >
                                    Settled
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "due today" ? "#007df0" : "",
                                      color: selectedFilter === "due today" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("due today")}
                                  >
                                    Due today
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "upcoming" ? "#007df0" : "",
                                      color: selectedFilter === "upcoming" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("upcoming")}
                                  >
                                    Upcoming
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "no due date" ? "#007df0" : "",
                                      color: selectedFilter === "no due date" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("no due date")}
                                  >
                                    No due date
                                  </button>
                                </div>
                                <div className="filter-by mt-4">
                                  <h3>Sort By </h3>
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("recent")}
                                >
                                  <label htmlFor="recent">Recent</label>
                                  <input
                                    type="radio"
                                    id="recent"
                                    name="sort_option"
                                    value="recent"
                                    checked={selectedSortBy === "recent"}
                                    onChange={() => setSelectedSortBy("recent")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("highest")}
                                >
                                  <label htmlFor="highest">Highest to lowest amount</label>
                                  <input
                                    type="radio"
                                    id="highest"
                                    name="sort_option"
                                    value="highest"
                                    checked={selectedSortBy === "highest"}
                                    onChange={() => setSelectedSortBy("highest")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("lowest")}
                                >
                                  <label htmlFor="lowest">Lowest to highest amount</label>
                                  <input
                                    type="radio"
                                    id="lowest"
                                    name="sort_option"
                                    value="lowest"
                                    checked={selectedSortBy === "lowest"}
                                    onChange={() => setSelectedSortBy("lowest")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("oldest")}
                                >
                                  <label htmlFor="oldest">Oldest to recent</label>
                                  <input
                                    type="radio"
                                    id="oldest"
                                    name="sort_option"
                                    value="oldest"
                                    checked={selectedSortBy === "oldest"}
                                    onChange={() => setSelectedSortBy("oldest")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("name")}
                                >
                                  <label htmlFor="name">By name A-Z</label>
                                  <input
                                    type="radio"
                                    id="name"
                                    name="sort_option"
                                    value="name"
                                    checked={selectedSortBy === "name"}
                                    onChange={() => setSelectedSortBy("name")}
                                  />
                                </div>
                                <div>
                                  <button
                                    className="btn-save mt-4"
                                    onClick={handleApplyFilters}
                                  >
                                    View Result
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="customer-list" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                      {ledgerData
                        .filter((item) => item.type === "customer")
                        .map((item) => {
                          const isNegative = Number(item.balance) < 0;
                          const formattedBalance = Math.abs(Number(item.balance)).toLocaleString();
                          const formattedTime = formatTimestamp(item.createdAt);
                          return (
                            <button
                              key={item.id}
                              className="ledge-user"
                              onClick={() => handleLedgeUserClick({ ledgerId: item.id })}
                            >
                              <div className="ledge-user-flex">
                                <div className="ledge-user-details profile-letter">
                                  {item.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="ledge-user-details">
                                  <h3>{item.name}</h3>
                                  <p>{formattedTime}</p>
                                </div>
                              </div>
                              <div className="ledge-user-details">
                                <h5 style={{
                                  color: isNegative ? "red" : "green",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}>
                                  {isNegative ? <ArrowUp /> : <ArrowDown />}
                                  ₹ {formattedBalance}
                                </h5>
                              </div>
                            </button>
                          );
                        })}
                      {isLoading && <div>Loading more...</div>}
                      {!hasMore && ledgerData.length > 0 && <div>No more customers to load</div>}
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
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          onKeyPress={handleSearchSubmit}
                          placeholder="Search"
                        />
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
                                      background: selectedFilter === "All" ? "#007df0" : "",
                                      color: selectedFilter === "All" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("All")}
                                  >
                                    All
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "you will get" ? "#007df0" : "",
                                      color: selectedFilter === "you will get" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("you will get")}
                                  >
                                    You will get
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "you will give" ? "#007df0" : "",
                                      color: selectedFilter === "you will give" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("you will give")}
                                  >
                                    You will give
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "settled" ? "#007df0" : "",
                                      color: selectedFilter === "settled" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("settled")}
                                  >
                                    Settled
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "due today" ? "#007df0" : "",
                                      color: selectedFilter === "due today" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("due today")}
                                  >
                                    Due today
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "upcoming" ? "#007df0" : "",
                                      color: selectedFilter === "upcoming" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("upcoming")}
                                  >
                                    Upcoming
                                  </button>
                                  <button
                                    className="btn-filter-by"
                                    style={{
                                      background: selectedFilter === "no due date" ? "#007df0" : "",
                                      color: selectedFilter === "no due date" ? "white" : "",
                                    }}
                                    onClick={() => setSelectedFilter("no due date")}
                                  >
                                    No due date
                                  </button>
                                </div>
                                <div className="filter-by mt-4">
                                  <h3>Sort By </h3>
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("recent")}
                                >
                                  <label htmlFor="recent">Recent</label>
                                  <input
                                    type="radio"
                                    id="recent"
                                    name="sort_option"
                                    value="recent"
                                    checked={selectedSortBy === "recent"}
                                    onChange={() => setSelectedSortBy("recent")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("highest")}
                                >
                                  <label htmlFor="highest">Highest to lowest amount</label>
                                  <input
                                    type="radio"
                                    id="highest"
                                    name="sort_option"
                                    value="highest"
                                    checked={selectedSortBy === "highest"}
                                    onChange={() => setSelectedSortBy("highest")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("lowest")}
                                >
                                  <label htmlFor="lowest">Lowest to highest amount</label>
                                  <input
                                    type="radio"
                                    id="lowest"
                                    name="sort_option"
                                    value="lowest"
                                    checked={selectedSortBy === "lowest"}
                                    onChange={() => setSelectedSortBy("lowest")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("oldest")}
                                >
                                  <label htmlFor="oldest">Oldest to recent</label>
                                  <input
                                    type="radio"
                                    id="oldest"
                                    name="sort_option"
                                    value="oldest"
                                    checked={selectedSortBy === "oldest"}
                                    onChange={() => setSelectedSortBy("oldest")}
                                  />
                                </div>
                                <div
                                  className="filter-sort"
                                  onClick={() => setSelectedSortBy("name")}
                                >
                                  <label htmlFor="name">By name A-Z</label>
                                  <input
                                    type="radio"
                                    id="name"
                                    name="sort_option"
                                    value="name"
                                    checked={selectedSortBy === "name"}
                                    onChange={() => setSelectedSortBy("name")}
                                  />
                                </div>
                                <div>
                                  <button
                                    className="btn-save mt-4"
                                    onClick={handleApplyFilters}
                                    data-bs-dismiss="modal"
                                  >
                                    View Result
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="supplier-list" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                      {ledgerData
                        .filter((item) => item.type === "supplier")
                        .map((item) => {
                          const isNegative = Number(item.balance) < 0;
                          const formattedBalance = Math.abs(Number(item.balance)).toLocaleString();
                          const formattedTime = formatTimestamp(item.createdAt);
                          return (
                            <button
                              key={item.id}
                              className="ledge-user"
                              onClick={() => handleSupplierLedgeUserClick({ ledgerId: item.id })}
                            >
                              <div className="ledge-user-flex">
                                <div className="ledge-user-details profile-letter">
                                  {item.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="ledge-user-details">
                                  <h3>{item.name}</h3>
                                  <p>{formattedTime}</p>
                                </div>
                              </div>
                              <div className="ledge-user-details">
                                <h5 style={{
                                  color: isNegative ? "red" : "green",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}>
                                  {isNegative ? <ArrowUp /> : <ArrowDown />}
                                  ₹ {formattedBalance}
                                </h5>
                              </div>
                            </button>
                          );
                        })}
                      {isLoading && <div>Loading more...</div>}
                      {!hasMore && ledgerData.length > 0 && <div>No more suppliers to load</div>}
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
                      <SupplierTransaction ledgerId={selectedUser.ledgerId} />
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
