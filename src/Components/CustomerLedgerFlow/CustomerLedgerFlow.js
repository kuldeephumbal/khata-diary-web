// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import KhataDiaryImg from "../../images/KhataDiaryImg.svg";
// import UserLedger from "../../images/UserLedger.svg";
// import flag_india from "../../images/flag-india.svg";
// import {
//   ArrowDown,
//   ArrowUp,
//   BookOpenText,
//   FileText,
//   UserPlus,
//   Download,
//   BellRing,
//   Search,
//   SlidersHorizontal,
// } from "lucide-react";
// import AddTransaction from "./AddTransaction";
// import SupplierTransaction from "./SupplierTransaction";

// function CustomerLedgerFlow() {
//   const [activeTab, setActiveTab] = useState("customer");
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showAddressDetails, setShowAddressDetails] = useState(false);
//   const [sameAsShipping, setSameAsShipping] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [activeView, setActiveView] = useState("customer-ledger");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [supplierView, setSupplierView] = useState("supplier-ledger-form");
//   const [selectedSupplierGender, setSelectedSupplierGender] = useState(null);
//   const [showSupplierAddressDetails, setShowSupplierAddressDetails] =
//     useState(false);
//   const [supplierSameAsShipping, setSupplierSameAsShipping] = useState(false);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);

//     if (tab === "customer") {
//       setActiveView("customer-ledger");
//     } else {
//       setSupplierView("supplier-ledger-form");
//     }
//   };

//   const handleGenderSelect = (gender) => {
//     setSelectedGender(gender);
//   };

//   const handleSupplierGenderSelect = (gender) => {
//     setSelectedSupplierGender(gender);
//   };

//   const toggleAddressDetails = () => {
//     setShowAddressDetails(!showAddressDetails);
//   };

//   const toggleSupplierAddressDetails = () => {
//     setShowSupplierAddressDetails(!showSupplierAddressDetails);
//   };

//   const handleSameAsShippingChange = (e) => {
//     setSameAsShipping(e.target.checked);
//   };

//   const handleSupplierSameAsShippingChange = (e) => {
//     setSupplierSameAsShipping(e.target.checked);
//   };

//   const handleAddCustomerClick = () => {
//     setActiveView("customer-ledger");
//   };

//   const handleAddSupplierClick = () => {
//     setSupplierView("supplier-ledger-form");
//   };

//   const handleLedgeUserClick = (user) => {
//     setSelectedUser(user);
//     setActiveView("ledge-user-main");
//   };

//   const handleSupplierLedgeUserClick = (supplier) => {
//     setSelectedUser(supplier);
//     setSupplierView("supplier-ledger-main");
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-12 py-20">
//             <div className="expense-title">
//               <Link to="/">
//                 Home <i className="fa-solid fa-chevron-right"></i>
//               </Link>

//               <span>
//                 {activeTab === "customer" ? "Add Customer" : "Add Supplier"}
//               </span>
//             </div>
//           </div>
//           <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
//             <div>
//               <div className="index-pill customer-profile-mb">
//                 <div className="expense-khata-diary expense-khata-diary-customer">
//                   <img src={KhataDiaryImg} className="img-fluid" alt="" />
//                   <select name="KhataDiary" id="KhataDiary">
//                     <option value="volvo">KhataDiary</option>
//                     <option value="saab">Saab</option>
//                     <option value="mercedes">Mercedes</option>
//                     <option value="audi">Audi</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="index-pill customer-profile-mb ">
//                 <ul
//                   className="nav nav-pills mb-3"
//                   id="pills-tab"
//                   role="tablist"
//                 >
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className={`nav-link ${
//                         activeTab === "customer" ? "active" : ""
//                       }`}
//                       id="pills-home-tab"
//                       onClick={() => handleTabChange("customer")}
//                       type="button"
//                       role="tab"
//                       aria-controls="pills-home"
//                       aria-selected={activeTab === "customer"}
//                     >
//                       Customer
//                     </button>
//                   </li>
//                   <li className="nav-item" role="presentation">
//                     <button
//                       className={`nav-link ${
//                         activeTab === "supplier" ? "active" : ""
//                       }`}
//                       id="pills-profile-tab"
//                       onClick={() => handleTabChange("supplier")}
//                       type="button"
//                       role="tab"
//                       aria-controls="pills-profile"
//                       aria-selected={activeTab === "supplier"}
//                     >
//                       Supplier
//                     </button>
//                   </li>
//                 </ul>
//                 <div className="tab-content" id="pills-tabContent">
//                   <div
//                     className={`tab-pane fade ${
//                       activeTab === "customer" ? "show active" : ""
//                     }`}
//                     id="pills-home"
//                     role="tabpanel"
//                     aria-labelledby="pills-home-tab"
//                   >
//                     <>
//                       <div className="will-get-give">
//                         <div className="will-get">
//                           <h4>
//                             You will get <ArrowDown />
//                           </h4>
//                           <p>₹86,860</p>
//                         </div>
//                         <div className="will-get will-give ">
//                           <h4>
//                             You will give <ArrowUp />
//                           </h4>
//                           <p>₹5,31,286</p>
//                         </div>
//                         <div className="will-get net-summary ">
//                           <h4>Net Summary</h4>
//                           <p>₹1,86,860</p>
//                         </div>
//                       </div>
//                       <div className="cashbook-reports">
//                         <button className="btn-cashbook">
//                           <BookOpenText /> Cashbook
//                         </button>
//                         <button className="btn-cashbook">
//                           <FileText /> Reports
//                         </button>
//                       </div>
//                       <div className="add-customer-btn">
//                         <button
//                           className="add-customer"
//                           onClick={handleAddCustomerClick}
//                         >
//                           Add customer <UserPlus />
//                         </button>
//                         <button className="add-customer bulk-import ">
//                           Bulk Import <Download />
//                         </button>
//                       </div>
//                     </>
//                   </div>
//                   <div
//                     className={`tab-pane fade ${
//                       activeTab === "supplier" ? "show active" : ""
//                     }`}
//                     id="pills-profile"
//                     role="tabpanel"
//                     aria-labelledby="pills-profile-tab"
//                   >
//                     <>
//                       <div className="will-get-give">
//                         <div className="will-get">
//                           <h4>
//                             You will get <ArrowDown />
//                           </h4>
//                           <p>₹86,860</p>
//                         </div>
//                         <div className="will-get will-give ">
//                           <h4>
//                             You will give <ArrowUp />
//                           </h4>
//                           <p>₹5,31,286</p>
//                         </div>
//                         <div className="will-get net-summary ">
//                           <h4>Net Summary</h4>
//                           <p>₹1,86,860</p>
//                         </div>
//                       </div>
//                       <div className="cashbook-reports">
//                         <button className="btn-cashbook">
//                           <BookOpenText /> Cashbook
//                         </button>
//                         <button className="btn-cashbook">
//                           <FileText /> Reports
//                         </button>
//                       </div>
//                       <div className="add-customer-btn">
//                         <button
//                           className="add-customer"
//                           onClick={handleAddSupplierClick}
//                         >
//                           Add Supplier <UserPlus />
//                         </button>
//                         <button className="add-customer bulk-import ">
//                           Bulk Import <Download />
//                         </button>
//                       </div>
//                     </>
//                   </div>
//                 </div>
//               </div>
//               <div className="index-pill ">
//                 <div
//                   id="customer-ledger"
//                   style={{
//                     display: activeTab === "customer" ? "block" : "none",
//                   }}
//                 >
//                   <>
//                     <div className="bulk-customer">
//                       <h4>Customer</h4>
//                       <button className="btn-bulk-reminder">
//                         <BellRing /> Bulk reminder
//                       </button>
//                     </div>
//                     <div className="expense-added-flex">
//                       <div className="expense-added-search">
//                         <input type="text" name="" placeholder="Search" id="" />
//                         <div className="search-added">
//                           <Search />
//                         </div>
//                       </div>
//                       <div
//                         className="slid-filter"
//                         data-bs-toggle="modal"
//                         data-bs-target="#staticBackdrop1"
//                       >
//                         <SlidersHorizontal />
//                         <p>Filters</p>
//                       </div>
//                       <div
//                         className="modal fade"
//                         id="staticBackdrop1"
//                         data-bs-backdrop="static"
//                         data-bs-keyboard="false"
//                         tabindex="-1"
//                         aria-labelledby="staticBackdropLabel"
//                         aria-hidden="true"
//                       >
//                         <div className="modal-dialog  model-padding modal-dialog-centered">
//                           <div className="modal-content">
//                             <div className="modal-body">
//                               <div className="text-end">
//                                 <button
//                                   type="button"
//                                   class="btn-close"
//                                   data-bs-dismiss="modal"
//                                   aria-label="Close"
//                                 ></button>
//                               </div>

//                               <div>
//                                 <div className="filter-by">
//                                   <h3>Filter By </h3>
//                                 </div>
//                                 <div className="filter-btn-flex">
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "All"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "All" ? "white" : "",
//                                     }}
//                                     onClick={() => setSelectedFilter("All")}
//                                   >
//                                     All
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "You will get"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "You will get"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("You will get")
//                                     }
//                                   >
//                                     You will get
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "You will give"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "You will give"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("You will give")
//                                     }
//                                   >
//                                     You will give
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "Settled"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "Settled"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() => setSelectedFilter("Settled")}
//                                   >
//                                     Settled
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "Due today"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "Due today"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("Due today")
//                                     }
//                                   >
//                                     Due today
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "Upcoming"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "Upcoming"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("Upcoming")
//                                     }
//                                   >
//                                     Upcoming
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "No due date"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "No due date"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("No due date")
//                                     }
//                                   >
//                                     No due date
//                                   </button>
//                                 </div>
//                                 <div className="filter-by mt-4">
//                                   <h3>Sort By </h3>
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="recent">Recent</label>
//                                   <input
//                                     type="radio"
//                                     id="recent"
//                                     name="fav_language"
//                                     value="Recent"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="recent1">
//                                     Highest to lowest amount
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="recent1"
//                                     name="fav_language"
//                                     value="Recent1"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="recent2">
//                                     Lowest to highest amount
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="recent2"
//                                     name="fav_language"
//                                     value="Recent2"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="recent3">
//                                     Oldest to recent amount
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="recent3"
//                                     name="fav_language"
//                                     value="Recent3"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="recent4">By name A-Z</label>
//                                   <input
//                                     type="radio"
//                                     id="recent4"
//                                     name="fav_language"
//                                     value="Recent4"
//                                   />
//                                 </div>
//                                 <div>
//                                   <button className="btn-save mt-4">
//                                     View Result
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <button
//                         className="ledge-user"
//                         onClick={() =>
//                           handleLedgeUserClick({
//                             name: "Varun Kubal",
//                             time: "23 Mins ago",
//                             amount: "12,300",
//                             direction: "up",
//                           })
//                         }
//                       >
//                         <div className="ledge-user-flex">
//                           <div className="ledge-user-details">
//                             <img
//                               src={UserLedger}
//                               className="img-fluid"
//                               alt=""
//                             />
//                           </div>
//                           <div className="ledge-user-details">
//                             <h3>Varun Kubal</h3>
//                             <p>23 Mins ago</p>
//                           </div>
//                         </div>
//                         <div className="ledge-user-details">
//                           <h5>
//                             <ArrowUp /> ₹ 12,300
//                           </h5>
//                         </div>
//                       </button>
//                       <button
//                         className="ledge-user"
//                         onClick={() =>
//                           handleLedgeUserClick({
//                             name: "Adam. S",
//                             time: "1 day ago",
//                             amount: "2,300",
//                             direction: "down",
//                           })
//                         }
//                       >
//                         <div className="ledge-user-flex">
//                           <div className="ledge-user-details">
//                             <img
//                               src={UserLedger}
//                               className="img-fluid"
//                               alt=""
//                             />
//                           </div>
//                           <div className="ledge-user-details">
//                             <h3>Adam. S</h3>
//                             <p>1 day ago</p>
//                           </div>
//                         </div>
//                         <div className="ledge-user-details ledge-user-details-down">
//                           <h5>
//                             <ArrowDown /> ₹ 2,300
//                           </h5>
//                         </div>
//                       </button>
//                       <button
//                         className="ledge-user"
//                         onClick={() =>
//                           handleLedgeUserClick({
//                             name: "Cristiano. R",
//                             time: "1 day ago",
//                             amount: "12,300",
//                             direction: "up",
//                           })
//                         }
//                       >
//                         <div className="ledge-user-flex">
//                           <div className="ledge-user-details">
//                             <img
//                               src={UserLedger}
//                               className="img-fluid"
//                               alt=""
//                             />
//                           </div>
//                           <div className="ledge-user-details">
//                             <h3>Cristiano. R</h3>
//                             <p>1 day ago</p>
//                           </div>
//                         </div>
//                         <div className="ledge-user-details">
//                           <h5>
//                             <ArrowUp /> ₹ 12,300
//                           </h5>
//                         </div>
//                       </button>
//                     </div>
//                   </>
//                 </div>
//                 <div
//                   id="Supplier-ledger"
//                   style={{
//                     display: activeTab === "supplier" ? "block" : "none",
//                   }}
//                 >
//                   <>
//                     <div className="bulk-customer">
//                       <h4>Supplier</h4>
//                       <button className="btn-bulk-reminder">
//                         <BellRing /> Bulk reminder
//                       </button>
//                     </div>
//                     <div className="expense-added-flex">
//                       <div className="expense-added-search">
//                         <input type="text" name="" placeholder="Search" id="" />
//                         <div className="search-added">
//                           <Search />
//                         </div>
//                       </div>
//                       <div
//                         className="slid-filter"
//                         data-bs-toggle="modal"
//                         data-bs-target="#staticBackdrop2"
//                       >
//                         <SlidersHorizontal />
//                         <p>Filters</p>
//                       </div>
//                       <div
//                         className="modal fade"
//                         id="staticBackdrop2"
//                         data-bs-backdrop="static"
//                         data-bs-keyboard="false"
//                         tabindex="-1"
//                         aria-labelledby="staticBackdropLabel"
//                         aria-hidden="true"
//                       >
//                         <div className="modal-dialog  model-padding modal-dialog-centered">
//                           <div className="modal-content">
//                             <div className="modal-body">
//                               <div className="text-end">
//                                 <button
//                                   type="button"
//                                   class="btn-close"
//                                   data-bs-dismiss="modal"
//                                   aria-label="Close"
//                                 ></button>
//                               </div>

//                               <div>
//                                 <div className="filter-by">
//                                   <h3>Filter By </h3>
//                                 </div>
//                                 <div className="filter-btn-flex">
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "All"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "All" ? "white" : "",
//                                     }}
//                                     onClick={() => setSelectedFilter("All")}
//                                   >
//                                     All
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "You will get"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "You will get"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("You will get")
//                                     }
//                                   >
//                                     You will get
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "You will give"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "You will give"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("You will give")
//                                     }
//                                   >
//                                     You will give
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "Settled"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "Settled"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() => setSelectedFilter("Settled")}
//                                   >
//                                     Settled
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "Due today"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "Due today"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("Due today")
//                                     }
//                                   >
//                                     Due today
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "Upcoming"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "Upcoming"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("Upcoming")
//                                     }
//                                   >
//                                     Upcoming
//                                   </button>
//                                   <button
//                                     className="btn-filter-by"
//                                     style={{
//                                       background:
//                                         selectedFilter === "No due date"
//                                           ? "#007df0"
//                                           : "",
//                                       color:
//                                         selectedFilter === "No due date"
//                                           ? "white"
//                                           : "",
//                                     }}
//                                     onClick={() =>
//                                       setSelectedFilter("No due date")
//                                     }
//                                   >
//                                     No due date
//                                   </button>
//                                 </div>
//                                 <div className="filter-by mt-4">
//                                   <h3>Sort By </h3>
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="supplier-recent">Recent</label>
//                                   <input
//                                     type="radio"
//                                     id="supplier-recent"
//                                     name="supplier_language"
//                                     value="Recent"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="supplier-recent1">
//                                     Highest to lowest amount
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="supplier-recent1"
//                                     name="supplier_language"
//                                     value="Recent1"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="supplier-recent2">
//                                     Lowest to highest amount
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="supplier-recent2"
//                                     name="supplier_language"
//                                     value="Recent2"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="supplier-recent3">
//                                     Oldest to recent amount
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="supplier-recent3"
//                                     name="supplier_language"
//                                     value="Recent3"
//                                   />
//                                 </div>
//                                 <div className="filter-sort">
//                                   <label for="supplier-recent4">
//                                     By name A-Z
//                                   </label>
//                                   <input
//                                     type="radio"
//                                     id="supplier-recent4"
//                                     name="supplier_language"
//                                     value="Recent4"
//                                   />
//                                 </div>
//                                 <div>
//                                   <button className="btn-save mt-4">
//                                     View Result
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <button
//                         className="ledge-user"
//                         onClick={() =>
//                           handleSupplierLedgeUserClick({
//                             name: "Rajat Industries",
//                             time: "2 days ago",
//                             amount: "35,400",
//                             direction: "up",
//                           })
//                         }
//                       >
//                         <div className="ledge-user-flex">
//                           <div className="ledge-user-details">
//                             <img
//                               src={UserLedger}
//                               className="img-fluid"
//                               alt=""
//                             />
//                           </div>
//                           <div className="ledge-user-details">
//                             <h3>Rajat Industries</h3>
//                             <p>2 days ago</p>
//                           </div>
//                         </div>
//                         <div className="ledge-user-details">
//                           <h5>
//                             <ArrowUp /> ₹ 35,400
//                           </h5>
//                         </div>
//                       </button>
//                       <button
//                         className="ledge-user"
//                         onClick={() =>
//                           handleSupplierLedgeUserClick({
//                             name: "Metro Supplies",
//                             time: "3 days ago",
//                             amount: "8,750",
//                             direction: "down",
//                           })
//                         }
//                       >
//                         <div className="ledge-user-flex">
//                           <div className="ledge-user-details">
//                             <img
//                               src={UserLedger}
//                               className="img-fluid"
//                               alt=""
//                             />
//                           </div>
//                           <div className="ledge-user-details">
//                             <h3>Metro Supplies</h3>
//                             <p>3 days ago</p>
//                           </div>
//                         </div>
//                         <div className="ledge-user-details ledge-user-details-down">
//                           <h5>
//                             <ArrowDown /> ₹ 8,750
//                           </h5>
//                         </div>
//                       </button>
//                     </div>
//                   </>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
//             <div className="index-pill">
//               <div
//                 style={{ display: activeTab === "customer" ? "block" : "none" }}
//               >
//                 <div>
//                   <div
//                     id="customer-ledger"
//                     style={{
//                       display:
//                         activeView === "customer-ledger" ? "block" : "none",
//                     }}
//                   >
//                     <div>
//                       <div className="add-transaction">
//                         <h3>Add Customer Details</h3>
//                       </div>
//                       <form action="">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="payment-details-input">
//                               <input
//                                 type="text"
//                                 name=""
//                                 placeholder="Enter Name "
//                                 id=""
//                               />
//                             </div>
//                           </div>
//                           <div className="col-3">
//                             <div className="flex-flag">
//                               <img
//                                 src={flag_india}
//                                 className="imf-fluid"
//                                 alt=""
//                               />{" "}
//                               <p> +91</p>
//                             </div>
//                           </div>
//                           <div className="col-9">
//                             <div className="payment-details-input">
//                               <input
//                                 type="text"
//                                 name=""
//                                 placeholder="Mobile Number"
//                                 id=""
//                               />
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             <div className="payment-details-input">
//                               <input
//                                 type="email"
//                                 name=""
//                                 placeholder="Email id. "
//                                 id=""
//                               />
//                             </div>
//                           </div>
//                           <div className="btn-gender-flex">
//                             <button
//                               className="btn-gender"
//                               type="button"
//                               style={{
//                                 background:
//                                   selectedGender === "Male" ? "#007df0" : "",
//                                 color: selectedGender === "Male" ? "white" : "",
//                               }}
//                               onClick={() => handleGenderSelect("Male")}
//                             >
//                               Male
//                             </button>
//                             <button
//                               className="btn-gender"
//                               type="button"
//                               style={{
//                                 background:
//                                   selectedGender === "Female" ? "#007df0" : "",
//                                 color:
//                                   selectedGender === "Female" ? "white" : "",
//                               }}
//                               onClick={() => handleGenderSelect("Female")}
//                             >
//                               Female
//                             </button>
//                             <button
//                               className="btn-gender"
//                               type="button"
//                               style={{
//                                 background:
//                                   selectedGender === "Other" ? "#007df0" : "",
//                                 color:
//                                   selectedGender === "Other" ? "white" : "",
//                               }}
//                               onClick={() => handleGenderSelect("Other")}
//                             >
//                               Other
//                             </button>
//                           </div>
//                           <div>
//                             <button
//                               className="add-optional-address"
//                               type="button"
//                               onClick={toggleAddressDetails}
//                             >
//                               {showAddressDetails
//                                 ? "HIDE ADDRESS DETAILS"
//                                 : "ADD ADDRESS & Details (Optional)"}
//                             </button>
//                           </div>
//                           <div
//                             className="col-12"
//                             id="address-details"
//                             style={{
//                               display: showAddressDetails ? "block" : "none",
//                             }}
//                           >
//                             <div className="customer-address-heading">
//                               <h5>Billing Address</h5>
//                             </div>
//                             <div className="row">
//                               <div className="col-12">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="Flat / Building Number"
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="Area / Locality"
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="Pincode "
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="City"
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="State "
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="customer-checkbox">
//                               <input
//                                 type="checkbox"
//                                 id="shipping"
//                                 name="shipping"
//                                 checked={sameAsShipping}
//                                 onChange={handleSameAsShippingChange}
//                               />
//                               <label htmlFor="shipping">
//                                 Shipping address is same as billing address
//                               </label>
//                             </div>
//                             <div
//                               className="shipping-address-section"
//                               style={{
//                                 display: sameAsShipping ? "none" : "block",
//                               }}
//                             >
//                               <div className="customer-address-heading">
//                                 <h5>Shipping Address</h5>
//                               </div>
//                               <div className="row">
//                                 <div className="col-12">
//                                   <div className="customer-profile-main-name">
//                                     <input
//                                       type="text"
//                                       name=""
//                                       placeholder="Flat / Building Number"
//                                       id=""
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-12">
//                                   <div className="customer-profile-main-name">
//                                     <input
//                                       type="text"
//                                       name=""
//                                       placeholder="Area / Locality"
//                                       id=""
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-12">
//                                   <div className="customer-profile-main-name">
//                                     <input
//                                       type="text"
//                                       name=""
//                                       placeholder="Pincode "
//                                       id=""
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-6">
//                                   <div className="customer-profile-main-name">
//                                     <input
//                                       type="text"
//                                       name=""
//                                       placeholder="City"
//                                       id=""
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-6">
//                                   <div className="customer-profile-main-name">
//                                     <input
//                                       type="text"
//                                       name=""
//                                       placeholder="State "
//                                       id=""
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div>
//                             <button className="btn-save"> Add Customer</button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                   <div
//                     className="ledge-user-main"
//                     style={{
//                       display:
//                         activeView === "ledge-user-main" ? "block" : "none",
//                     }}
//                   >
//                     {selectedUser && (
//                       <>
//                         <AddTransaction />
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div
//                 id="Supplier-ledger"
//                 style={{ display: activeTab === "supplier" ? "block" : "none" }}
//               >
//                 <div
//                   id="supplier-ledger-form"
//                   style={{
//                     display:
//                       supplierView === "supplier-ledger-form"
//                         ? "block"
//                         : "none",
//                   }}
//                 >
//                   <div>
//                     <div className="add-transaction">
//                       <h3>Add Supplier Details</h3>
//                     </div>
//                     <form action="">
//                       <div className="row">
//                         <div className="col-12">
//                           <div className="payment-details-input">
//                             <input
//                               type="text"
//                               name=""
//                               placeholder="Add Supplier name  "
//                               id=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-3">
//                           <div className="flex-flag">
//                             <img
//                               src={flag_india}
//                               className="imf-fluid"
//                               alt=""
//                             />{" "}
//                             <p> +91</p>
//                           </div>
//                         </div>
//                         <div className="col-9">
//                           <div className="payment-details-input">
//                             <input
//                               type="text"
//                               name=""
//                               placeholder="Mobile Number"
//                               id=""
//                             />
//                           </div>
//                         </div>
//                         <div className="col-12">
//                           <div className="payment-details-input">
//                             <input
//                               type="email"
//                               name=""
//                               placeholder="Email id. "
//                               id=""
//                             />
//                           </div>
//                         </div>
//                         <div className="btn-gender-flex">
//                           <button
//                             className="btn-gender"
//                             type="button"
//                             style={{
//                               background:
//                                 selectedSupplierGender === "Male"
//                                   ? "#007df0"
//                                   : "",
//                               color:
//                                 selectedSupplierGender === "Male"
//                                   ? "white"
//                                   : "",
//                             }}
//                             onClick={() => handleSupplierGenderSelect("Male")}
//                           >
//                             Male
//                           </button>
//                           <button
//                             className="btn-gender"
//                             type="button"
//                             style={{
//                               background:
//                                 selectedSupplierGender === "Female"
//                                   ? "#007df0"
//                                   : "",
//                               color:
//                                 selectedSupplierGender === "Female"
//                                   ? "white"
//                                   : "",
//                             }}
//                             onClick={() => handleSupplierGenderSelect("Female")}
//                           >
//                             Female
//                           </button>
//                           <button
//                             className="btn-gender"
//                             type="button"
//                             style={{
//                               background:
//                                 selectedSupplierGender === "Other"
//                                   ? "#007df0"
//                                   : "",
//                               color:
//                                 selectedSupplierGender === "Other"
//                                   ? "white"
//                                   : "",
//                             }}
//                             onClick={() => handleSupplierGenderSelect("Other")}
//                           >
//                             Other
//                           </button>
//                         </div>
//                         <div>
//                           <button
//                             className="add-optional-address"
//                             type="button"
//                             onClick={toggleSupplierAddressDetails}
//                           >
//                             {showSupplierAddressDetails
//                               ? "HIDE ADDRESS DETAILS"
//                               : "ADD ADDRESS & Details (Optional)"}
//                           </button>
//                         </div>
//                         <div
//                           className="col-12"
//                           id="address-details-supplier"
//                           style={{
//                             display: showSupplierAddressDetails
//                               ? "block"
//                               : "none",
//                           }}
//                         >
//                           <div className="customer-address-heading">
//                             <h5>Billing Address</h5>
//                           </div>
//                           <div className="row">
//                             <div className="col-12">
//                               <div className="customer-profile-main-name">
//                                 <input
//                                   type="text"
//                                   name=""
//                                   placeholder="Flat / Building Number"
//                                   id=""
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-12">
//                               <div className="customer-profile-main-name">
//                                 <input
//                                   type="text"
//                                   name=""
//                                   placeholder="Area / Locality"
//                                   id=""
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-12">
//                               <div className="customer-profile-main-name">
//                                 <input
//                                   type="text"
//                                   name=""
//                                   placeholder="Pincode "
//                                   id=""
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-6">
//                               <div className="customer-profile-main-name">
//                                 <input
//                                   type="text"
//                                   name=""
//                                   placeholder="City"
//                                   id=""
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-6">
//                               <div className="customer-profile-main-name">
//                                 <input
//                                   type="text"
//                                   name=""
//                                   placeholder="State "
//                                   id=""
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <div className="customer-checkbox">
//                             <input
//                               type="checkbox"
//                               id="shipping-supplier"
//                               name="shipping-supplier"
//                               checked={supplierSameAsShipping}
//                               onChange={handleSupplierSameAsShippingChange}
//                             />
//                             <label htmlFor="shipping-supplier">
//                               Shipping address is same as billing address
//                             </label>
//                           </div>
//                           <div
//                             className="shipping-address-section"
//                             style={{
//                               display: supplierSameAsShipping
//                                 ? "none"
//                                 : "block",
//                             }}
//                           >
//                             <div className="customer-address-heading">
//                               <h5>Shipping Address</h5>
//                             </div>
//                             <div className="row">
//                               <div className="col-12">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="Flat / Building Number"
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="Area / Locality"
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="Pincode "
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="City"
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-6">
//                                 <div className="customer-profile-main-name">
//                                   <input
//                                     type="text"
//                                     name=""
//                                     placeholder="State "
//                                     id=""
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <button className="btn-save"> Add Supplier</button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div
//                   className="supplier-ledger-main"
//                   style={{
//                     display:
//                       supplierView === "supplier-ledger-main"
//                         ? "block"
//                         : "none",
//                   }}
//                 >
//                   {selectedUser && (
//                     <>
//                       <SupplierTransaction />
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomerLedgerFlow;
import React, { useState } from "react";
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === "customer") {
      setActiveView("customer-ledger");
    } else {
      setSupplierView("supplier-ledger-form");
    }
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleSupplierGenderSelect = (gender) => {
    setSelectedSupplierGender(gender);
  };

  const toggleAddressDetails = () => {
    setShowAddressDetails(!showAddressDetails);
  };

  const toggleSupplierAddressDetails = () => {
    setShowSupplierAddressDetails(!showSupplierAddressDetails);
  };

  const handleSameAsShippingChange = (e) => {
    setSameAsShipping(e.target.checked);
  };

  const handleSupplierSameAsShippingChange = (e) => {
    setSupplierSameAsShipping(e.target.checked);
  };

  const handleAddCustomerClick = () => {
    setActiveView("customer-ledger");
  };

  const handleAddSupplierClick = () => {
    setSupplierView("supplier-ledger-form");
  };

  const handleLedgeUserClick = (user) => {
    setSelectedUser(user);
    setActiveView("ledge-user-main");
  };

  const handleSupplierLedgeUserClick = (supplier) => {
    setSelectedUser(supplier);
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
                      className={`nav-link ${
                        activeTab === "customer" ? "active" : ""
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
                      className={`nav-link ${
                        activeTab === "supplier" ? "active" : ""
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
                    className={`tab-pane fade ${
                      activeTab === "customer" ? "show active" : ""
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
                          <p>₹86,860</p>
                        </div>
                        <div className="will-get will-give ">
                          <h4>
                            You will give <ArrowUp />
                          </h4>
                          <p>₹5,31,286</p>
                        </div>
                        <div className="will-get net-summary ">
                          <h4>Net Summary</h4>
                          <p>₹1,86,860</p>
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
                    className={`tab-pane fade ${
                      activeTab === "supplier" ? "show active" : ""
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
                          <p>₹86,860</p>
                        </div>
                        <div className="will-get will-give ">
                          <h4>
                            You will give <ArrowUp />
                          </h4>
                          <p>₹5,31,286</p>
                        </div>
                        <div className="will-get net-summary ">
                          <h4>Net Summary</h4>
                          <p>₹1,86,860</p>
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
                      <button
                        className="ledge-user"
                        onClick={() =>
                          handleLedgeUserClick({
                            name: "Varun Kubal",
                            time: "23 Mins ago",
                            amount: "12,300",
                            direction: "up",
                          })
                        }
                      >
                        <div className="ledge-user-flex">
                          <div className="ledge-user-details">
                            <img
                              src={UserLedger}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="ledge-user-details">
                            <h3>Varun Kubal</h3>
                            <p>23 Mins ago</p>
                          </div>
                        </div>
                        <div className="ledge-user-details">
                          <h5>
                            <ArrowUp /> ₹ 12,300
                          </h5>
                        </div>
                      </button>
                      <button
                        className="ledge-user"
                        onClick={() =>
                          handleLedgeUserClick({
                            name: "Adam. S",
                            time: "1 day ago",
                            amount: "2,300",
                            direction: "down",
                          })
                        }
                      >
                        <div className="ledge-user-flex">
                          <div className="ledge-user-details">
                            <img
                              src={UserLedger}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="ledge-user-details">
                            <h3>Adam. S</h3>
                            <p>1 day ago</p>
                          </div>
                        </div>
                        <div className="ledge-user-details ledge-user-details-down">
                          <h5>
                            <ArrowDown /> ₹ 2,300
                          </h5>
                        </div>
                      </button>
                      <button
                        className="ledge-user"
                        onClick={() =>
                          handleLedgeUserClick({
                            name: "Cristiano. R",
                            time: "1 day ago",
                            amount: "12,300",
                            direction: "up",
                          })
                        }
                      >
                        <div className="ledge-user-flex">
                          <div className="ledge-user-details">
                            <img
                              src={UserLedger}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="ledge-user-details">
                            <h3>Cristiano. R</h3>
                            <p>1 day ago</p>
                          </div>
                        </div>
                        <div className="ledge-user-details">
                          <h5>
                            <ArrowUp /> ₹ 12,300
                          </h5>
                        </div>
                      </button>
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
                      <button
                        className="ledge-user"
                        onClick={() =>
                          handleSupplierLedgeUserClick({
                            name: "Rajat Industries",
                            time: "2 days ago",
                            amount: "35,400",
                            direction: "up",
                          })
                        }
                      >
                        <div className="ledge-user-flex">
                          <div className="ledge-user-details">
                            <img
                              src={UserLedger}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="ledge-user-details">
                            <h3>Rajat Industries</h3>
                            <p>2 days ago</p>
                          </div>
                        </div>
                        <div className="ledge-user-details">
                          <h5>
                            <ArrowUp /> ₹ 35,400
                          </h5>
                        </div>
                      </button>
                      <button
                        className="ledge-user"
                        onClick={() =>
                          handleSupplierLedgeUserClick({
                            name: "Metro Supplies",
                            time: "3 days ago",
                            amount: "8,750",
                            direction: "down",
                          })
                        }
                      >
                        <div className="ledge-user-flex">
                          <div className="ledge-user-details">
                            <img
                              src={UserLedger}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="ledge-user-details">
                            <h3>Metro Supplies</h3>
                            <p>3 days ago</p>
                          </div>
                        </div>
                        <div className="ledge-user-details ledge-user-details-down">
                          <h5>
                            <ArrowDown /> ₹ 8,750
                          </h5>
                        </div>
                      </button>
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
                      <form action="">
                        <div className="row">
                          <div className="col-12">
                            <div className="payment-details-input">
                              <input
                                type="text"
                                name=""
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
                                name=""
                                placeholder="Mobile Number"
                                id=""
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="payment-details-input">
                              <input
                                type="email"
                                name=""
                                placeholder="Email id. "
                                id=""
                              />
                            </div>
                          </div>
                          <div className="btn-gender-flex">
                            <button
                              className="btn-gender"
                              type="button"
                              style={{
                                background:
                                  selectedGender === "Male" ? "#007df0" : "",
                                color: selectedGender === "Male" ? "white" : "",
                              }}
                              onClick={() => handleGenderSelect("Male")}
                            >
                              Male
                            </button>
                            <button
                              className="btn-gender"
                              type="button"
                              style={{
                                background:
                                  selectedGender === "Female" ? "#007df0" : "",
                                color:
                                  selectedGender === "Female" ? "white" : "",
                              }}
                              onClick={() => handleGenderSelect("Female")}
                            >
                              Female
                            </button>
                            <button
                              className="btn-gender"
                              type="button"
                              style={{
                                background:
                                  selectedGender === "Other" ? "#007df0" : "",
                                color:
                                  selectedGender === "Other" ? "white" : "",
                              }}
                              onClick={() => handleGenderSelect("Other")}
                            >
                              Other
                            </button>
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
                                    name=""
                                    placeholder="Flat / Building Number"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Area / Locality"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Pincode "
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="City"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
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
                                      name=""
                                      placeholder="Flat / Building Number"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Area / Locality"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="Pincode "
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name=""
                                      placeholder="City"
                                      id=""
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="customer-profile-main-name">
                                    <input
                                      type="text"
                                      name=""
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
                        <AddTransaction />
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
                    <form action="">
                      <div className="row">
                        <div className="col-12">
                          <div className="payment-details-input">
                            <input
                              type="text"
                              name=""
                              placeholder="Add Supplier name  "
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
                              name=""
                              placeholder="Mobile Number"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="payment-details-input">
                            <input
                              type="email"
                              name=""
                              placeholder="Email id. "
                              id=""
                            />
                          </div>
                        </div>
                        <div className="btn-gender-flex">
                          <button
                            className="btn-gender"
                            type="button"
                            style={{
                              background:
                                selectedSupplierGender === "Male"
                                  ? "#007df0"
                                  : "",
                              color:
                                selectedSupplierGender === "Male"
                                  ? "white"
                                  : "",
                            }}
                            onClick={() => handleSupplierGenderSelect("Male")}
                          >
                            Male
                          </button>
                          <button
                            className="btn-gender"
                            type="button"
                            style={{
                              background:
                                selectedSupplierGender === "Female"
                                  ? "#007df0"
                                  : "",
                              color:
                                selectedSupplierGender === "Female"
                                  ? "white"
                                  : "",
                            }}
                            onClick={() => handleSupplierGenderSelect("Female")}
                          >
                            Female
                          </button>
                          <button
                            className="btn-gender"
                            type="button"
                            style={{
                              background:
                                selectedSupplierGender === "Other"
                                  ? "#007df0"
                                  : "",
                              color:
                                selectedSupplierGender === "Other"
                                  ? "white"
                                  : "",
                            }}
                            onClick={() => handleSupplierGenderSelect("Other")}
                          >
                            Other
                          </button>
                        </div>
                        <div>
                          <button
                            className="add-optional-address"
                            type="button"
                            onClick={toggleSupplierAddressDetails}
                          >
                            {showSupplierAddressDetails
                              ? "HIDE ADDRESS DETAILS"
                              : "ADD ADDRESS & Details (Optional)"}
                          </button>
                        </div>
                        <div
                          className="col-12"
                          id="address-details-supplier"
                          style={{
                            display: showSupplierAddressDetails
                              ? "block"
                              : "none",
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
                                  name=""
                                  placeholder="Flat / Building Number"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Area / Locality"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Pincode "
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="City"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="customer-profile-main-name">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="State "
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="customer-checkbox">
                            <input
                              type="checkbox"
                              id="shipping-supplier"
                              name="shipping-supplier"
                              checked={supplierSameAsShipping}
                              onChange={handleSupplierSameAsShippingChange}
                            />
                            <label htmlFor="shipping-supplier">
                              Shipping address is same as billing address
                            </label>
                          </div>
                          <div
                            className="shipping-address-section"
                            style={{
                              display: supplierSameAsShipping
                                ? "none"
                                : "block",
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
                                    name=""
                                    placeholder="Flat / Building Number"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Area / Locality"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="Pincode "
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
                                    placeholder="City"
                                    id=""
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="customer-profile-main-name">
                                  <input
                                    type="text"
                                    name=""
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
