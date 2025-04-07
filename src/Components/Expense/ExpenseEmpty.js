import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Search, SlidersHorizontal, TriangleAlert, Trash2 } from "lucide-react";
import speed from "../../images/speed.svg";
import money from "../../images/money.svg";
import rafiki from "../../images/rafiki.svg";
import { toast } from "react-hot-toast";
import speedtest from "../../images/speedtest.svg";
import ApexChartOne from "./ApexChartOne";

function ExpenseEmpty() {
  const [additionalCategories, setAdditionalCategories] = useState([]);
  const [budgetData, setBudgetData] = useState({
    user_id: Cookies.get("KhataDiary_user_id") || "",
    budget_details: [
      {
        category_id: "",
        other_category: "",
        monthly_budget: "",
        yearly_budget: "",
        account_holder_name: Cookies.get("KhataDiary_account_holder_name") || "",
      },
    ],
  });
  const [categories, setApexChartOneCategories] = useState([]);
  const [existingBudgets, setExistingBudgets] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editBudgetType, setEditBudgetType] = useState("Budget2");
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    fetchCategories();
    fetchExistingBudgets();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container &&
        container.scrollHeight - container.scrollTop <= container.clientHeight + 100 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [loading, hasMore]);

  const fetchCategories = async () => {
    try {
      const token = Cookies.get("KhataDiary_access_token");
      if (!token) throw new Error("Authentication token not found");

      const response = await fetch("https://khatadiary.synoventum.site/v1/expense-categories", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      const uniqueCategories = Array.from(
        new Map(data.filter((cat) => !cat.is_deleted).map((cat) => [cat.id, cat])).values()
      );
      setApexChartOneCategories(uniqueCategories);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching categories:", err);
    }
  };

  const fetchExistingBudgets = async () => {
    setLoading(true);
    try {
      const userId = Cookies.get("KhataDiary_user_id") || "66";
      const token = Cookies.get("KhataDiary_access_token");

      if (!token || !userId) throw new Error("Authentication credentials not found");

      const response = await fetch(
        `https://khatadiary.synoventum.site/v1/budgets/user/${userId}?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch budgets");

      const data = await response.json();
      const formattedBudgets = (data.results || []).map((item) => ({
        id: item.budget_id,
        budget_details: [
          {
            category_id: item.category_id,
            category_name: item.category_name,
            monthly_budget: item.monthly_budget,
            yearly_budget: item.yearly_budget,
            other_category: item.other_category,
            created_at: item.created_at,
          },
        ],
      }));
      setExistingBudgets((prev) =>
        page === 1 ? formattedBudgets : [...prev, ...formattedBudgets]
      );
      setPieChartData(data.pie_chart_data || []);
      setHasMore(data.results?.length === limit);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching budgets:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMoreCategories = (e) => {
    e.preventDefault();
    setAdditionalCategories((prev) => [
      ...prev,
      {
        id: Date.now(),
        category_id: "",
        other_category: "",
        monthly_budget: "",
        yearly_budget: "",
        account_holder_name: Cookies.get("KhataDiary_account_holder_name") || "",
      },
    ]);
  };

  const handleInputChange = async (index, field, value, isInitial = false) => {
    if (field === "other_category" && value.trim() !== "") {
      try {
        const token = Cookies.get("KhataDiary_access_token");
        if (!token) throw new Error("Authentication token not found");

        const response = await fetch("https://khatadiary.synoventum.site/v1/expense-categories", {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category: value.trim() }),
        });

        if (!response.ok) throw new Error("Failed to add new category");

        const newCategory = await response.json();
        setApexChartOneCategories((prev) => [...prev, newCategory]);

        if (isInitial) {
          setBudgetData((prev) => ({
            ...prev,
            budget_details: [
              { ...prev.budget_details[0], category_id: newCategory.id.toString(), other_category: "" },
            ],
          }));
        } else {
          setAdditionalCategories((prev) => {
            const newCategories = [...prev];
            newCategories[index] = {
              ...newCategories[index],
              category_id: newCategory.id.toString(),
              other_category: "",
            };
            return newCategories;
          });
        }
        toast.success("New category added successfully");
      } catch (err) {
        setError(err.message);
        console.error("Error adding new category:", err);
      }
    } else if (field !== "other_category") {
      if (isInitial) {
        setBudgetData((prev) => ({
          ...prev,
          budget_details: [{ ...prev.budget_details[0], [field]: value }],
        }));
      } else {
        setAdditionalCategories((prev) => {
          const newCategories = [...prev];
          newCategories[index][field] = value;
          return newCategories;
        });
      }
    }
  };

  const validateFields = (details) => {
    return details.every(
      (item) =>
        item.category_id.trim() !== "" &&
        item.monthly_budget.trim() !== "" &&
        item.yearly_budget.trim() !== ""
    );
  };

  const saveBudget = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = Cookies.get("KhataDiary_access_token");
      const userId = Cookies.get("KhataDiary_user_id");
      const accountHolderName = Cookies.get("KhataDiary_account_holder_name");

      if (!token || !userId || !accountHolderName) {
        throw new Error("Authentication credentials not found");
      }

      const allBudgetDetails = [...budgetData.budget_details, ...additionalCategories];
      if (!validateFields(allBudgetDetails)) {
        throw new Error("Please fill in all required fields");
      }

      const formattedBudgetDetails = allBudgetDetails.map((item) => ({
        category_id: parseInt(item.category_id),
        other_category: "",
        monthly_budget: parseFloat(item.monthly_budget),
        yearly_budget: parseFloat(item.yearly_budget),
      }));

      const response = await fetch("https://khatadiary.synoventum.site/v1/budgets", {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: parseInt(userId),
          budget_details: formattedBudgetDetails,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save budget");
      }

      await response.json();
      setPage(1);
      await fetchExistingBudgets();
      navigate("/EditBudget");
      toast.success("Budget Added Successfully");
    } catch (err) {
      setError(err.message);
      console.error("Error saving budget:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteBudget = async (budgetId) => {
    setLoading(true);
    setError(null);
    try {
      const token = Cookies.get("KhataDiary_access_token");
      if (!token) throw new Error("Authentication token not found");

      const response = await fetch(`https://khatadiary.synoventum.site/v1/budgets/${budgetId}`, {
        method: "DELETE",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete budget");

      setPage(1);
      await fetchExistingBudgets();
      setSelectedBudget(null);
      toast.success("Budget deleted successfully");

      const modal = document.getElementById("staticBackdrop");
      if (modal) {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) backdrop.remove();
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      console.error("Error deleting budget:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (budget, detail, e) => {
    e.stopPropagation();
    setSelectedBudget({ budget, detail });
    setIsEditing(true);
  };

  const saveEditedBudget = async () => {
    if (!selectedBudget) return;

    setLoading(true);
    setError(null);
    try {
      const token = Cookies.get("KhataDiary_access_token");
      const userId = Cookies.get("KhataDiary_user_id");
      if (!token || !userId) throw new Error("Authentication token not found");

      const { budget, detail } = selectedBudget;
      const updatedBudgetDetails = {
        budget_details: [
          {
            category_id: parseInt(detail.category_id),
            other_category: "",
            monthly_budget: parseFloat(detail.monthly_budget),
            yearly_budget: parseFloat(detail.yearly_budget),
          },
        ],
      };

      const response = await fetch(`https://khatadiary.synoventum.site/v1/budgets/${budget.id}`, {
        method: "PUT",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBudgetDetails),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update budget");
      }

      const updatedBudget = await response.json();
      setExistingBudgets((prev) =>
        prev.map((b) => (b.id === budget.id ? updatedBudget : b))
      );
      setIsEditing(false);
      setSelectedBudget(null);
      toast.success("Budget updated successfully");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      console.error("Error updating budget:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderCategoryInputs = (category, index, isInitial = false) => (
    <div key={isInitial ? "initial" : category.id} className="category-input-group">
      <div className="budget-select">
        <select
          value={category.category_id}
          onChange={(e) => handleInputChange(index, "category_id", e.target.value, isInitial)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.category}
            </option>
          ))}
        </select>
      </div>
      {category.category_id === "5" && (
        <div className="budget-select">
          <input
            type="text"
            placeholder="Enter New Category Name"
            value={category.other_category}
            onChange={(e) => handleInputChange(index, "other_category", e.target.value, isInitial)}
          />
        </div>
      )}
      <div className="budget-select">
        <input
          type="number"
          placeholder="Monthly Budget"
          value={category.monthly_budget}
          onChange={(e) => handleInputChange(index, "monthly_budget", e.target.value, isInitial)}
          required
          min="0"
        />
      </div>
      <div className="budget-select">
        <input
          type="number"
          placeholder="Yearly Budget"
          value={category.yearly_budget}
          onChange={(e) => handleInputChange(index, "yearly_budget", e.target.value, isInitial)}
          required
          min="0"
        />
      </div>
    </div>
  );

  const filteredBudgets = existingBudgets.filter((budget) => {
    if (!budget?.budget_details || !Array.isArray(budget.budget_details)) return false;
    return budget.budget_details.some(
      (detail) =>
        detail?.category_name &&
        typeof detail.category_name === "string" &&
        detail.category_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleBudgetClick = (budget, detail) => {
    setSelectedBudget({ budget, detail });
    setIsEditing(false);
  };

  const renderBudgetContent = () => {
    if (existingBudgets.length === 0 && !loading) {
      return (
        <div className="expense-empty-ul">
          <div className="expense-empty-ul-bg">
            <ul>
              <li>Manage your monthly / annual Expense</li>
              <li>Save and edit details any time</li>
              <li>Easy expense track</li>
            </ul>
          </div>
          <div className="expense-empty-img">
            <img src={rafiki} alt="" className="img-fluid" />
          </div>
          <Link to="#" onClick={() => document.getElementById("pills-home-tab").click()}>
            Add Budget <img src={money} alt="" className="img-fluid" />
          </Link>
        </div>
      );
    }

    return (
      <>
        <div className="expense-added-flex">
          <div className="expense-added-search">
            <input
              type="text"
              placeholder="Search budgets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-added">
              <Search />
            </div>
          </div>
          <div className="slid-filter">
            <SlidersHorizontal />
            <p>Filters</p>
          </div>
        </div>
        <div ref={containerRef} style={{ maxHeight: "400px", overflowY: "auto" }}>
          {filteredBudgets.length > 0 ? (
            filteredBudgets.map((budget) =>
              Array.isArray(budget.budget_details) ? (
                budget.budget_details.map((detail, index) => (
                  <div
                    className="grocery-added-flex"
                    key={`${budget.id}-${index}`}
                    onClick={() => handleBudgetClick(budget, detail)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="grocery-flex">
                      <div className="grocery-img">
                        <img src={speedtest} className="img-fluid" alt="" />
                      </div>
                      <div className="grocery-text">
                        <h3>{detail?.category_name || "Unknown"}</h3>
                        <p>Monthly Budget - ₹ {(detail?.monthly_budget || 0).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="grocery-amount">
                      <Link to="#" onClick={(e) => handleEditClick(budget, detail, e)}>
                        Edit
                      </Link>
                      <p>₹ {(detail?.yearly_budget || 0).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div key={budget.id}>No budget details available</div>
              )
            )
          ) : (
            <div>No budgets found matching your search</div>
          )}
          {loading && <div className="text-center py-2">Loading more...</div>}
        </div>
        <div className="grocery-added-ch">
          <div className="expense-chart-apex">
            {pieChartData.length > 0 ? (
              <ApexChartOne data={pieChartData} />
            ) : (
              <div>No data available for chart</div>
            )}
          </div>
          <ul className="mb-0">
            {pieChartData.map((detail, index) => (
              <li key={index} className={`expense-color-${index + 1}`}>
                <div className="expense-clothing-chart">
                  <h4>{detail.category}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            className="btn expense-summary-button w-100 mt-3"
            onClick={() => document.getElementById("pills-home-tab").click()}
          >
            Add Budget <img src={speedtest} alt="" className="img-fluid" />
          </button>
        </div>
      </>
    );
  };

  const renderSelectedBudgetDetails = () => {
    if (!selectedBudget) return null;

    const { budget, detail } = selectedBudget;
    return (
      <div className="expense-empty-bg">
        <div className="grocery-added-flex">
          <div className="grocery-flex">
            <div className="grocery-img">
              <img src={money} className="img-fluid" alt="" />
            </div>
            <div className="grocery-text">
              <h3>{detail.category_name || "Unknown"}</h3>
              <p>{new Date(detail.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="grocery-amount">
            <p>₹ {(detail.yearly_budget || 0).toFixed(2)}</p>
          </div>
        </div>
        <div className="budget-select-link mt-3">
          <Link to="#" onClick={(e) => handleEditClick(budget, detail, e)}>
            Edit Budget
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="btn close-edit-button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Delete Budget
          </button>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog model-padding modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="modal-body-delete">
                    <p>
                      <TriangleAlert /> Delete {detail.category_name || "Unknown"} Expense ?
                    </p>
                  </div>
                </div>
                <div className="modal-footer-added">
                  <button
                    type="button"
                    className="btn btn-yes w-100"
                    onClick={() => deleteBudget(budget.id)}
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Yes"}
                  </button>
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
        <div className="budget-select-save mt-3">
          <button className="btn" onClick={() => setSelectedBudget(null)}>
            Back to Budget
          </button>
        </div>
      </div>
    );
  };

  const renderEditForm = () => {
    if (!selectedBudget || !isEditing) return null;

    const { detail } = selectedBudget;
    return (
      <div className="expense-empty-bg">
        <div className="select-categories">
          <h4>Select Categories</h4>
        </div>
        <div className="budget-select budget-maintenance">
          <select
            value={detail.category_id}
            onChange={(e) => {
              setSelectedBudget({
                ...selectedBudget,
                detail: { ...detail, category_id: e.target.value },
              });
            }}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div className="budget-select-flex">
          <div className="budget-select-month">
            <h4>₹ {detail.monthly_budget || 0}</h4>
            <p>Monthly</p>
          </div>
          <div className="budget-select-month">
            <h4>₹ {detail.yearly_budget || 0}</h4>
            <p>Annual</p>
          </div>
        </div>
        <div className="budget-select-flex">
          <div
            className={`budget-select-bu ${
              editBudgetType === "Budget2" ? "budget-select-bu-one" : ""
            }`}
            onClick={() => setEditBudgetType("Budget2")}
          >
            <p>Monthly Budget</p>
            <input
              type="radio"
              id="Budget2"
              name="Budget"
              value="Budget2"
              checked={editBudgetType === "Budget2"}
              onChange={() => setEditBudgetType("Budget2")}
            />
          </div>
          <div
            className={`budget-select-bu ${
              editBudgetType === "Budget1" ? "budget-select-bu-one" : ""
            }`}
            onClick={() => setEditBudgetType("Budget1")}
          >
            <p>Annual Budget</p>
            <input
              type="radio"
              id="Budget1"
              name="Budget"
              value="Budget1"
              checked={editBudgetType === "Budget1"}
              onChange={() => setEditBudgetType("Budget1")}
            />
          </div>
        </div>
        <div className="expense-empty-amo">
          <input
            type="number"
            placeholder={`Add your ${
              editBudgetType === "Budget2" ? "Monthly" : "Annual"
            } Budget`}
            value={
              editBudgetType === "Budget2"
                ? detail.monthly_budget
                : detail.yearly_budget
            }
            onChange={(e) => {
              setSelectedBudget({
                ...selectedBudget,
                detail: {
                  ...detail,
                  [editBudgetType === "Budget2" ? "monthly_budget" : "yearly_budget"]:
                    e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="budget-select-save">
          <button className="btn" onClick={saveEditedBudget} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    );
  };

  const renderExpenseContent = () => {
    return (
      <div className="expense-empty-bg">
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
        <div className="expense-added-pills">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="Grocery-tab"
                data-bs-toggle="tab"
                data-bs-target="#Grocery-tab-pane"
                type="button"
                role="tab"
                aria-controls="Grocery-tab-pane"
                aria-selected="true"
              >
                Grocery
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="clothing-tab"
                data-bs-toggle="tab"
                data-bs-target="#clothing-tab-pane"
                type="button"
                role="tab"
                aria-controls="clothing-tab-pane"
                aria-selected="false"
              >
                Clothing
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Personal-tab"
                data-bs-toggle="tab"
                data-bs-target="#Personal-tab-pane"
                type="button"
                role="tab"
                aria-controls="Personal-tab-pane"
                aria-selected="false"
              >
                Personal Care
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Insurance-tab"
                data-bs-toggle="tab"
                data-bs-target="#Insurance-tab-pane"
                type="button"
                role="tab"
                aria-controls="Insurance-tab-pane"
                aria-selected="false"
              >
                Insurance Bill
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Shopping-tab"
                data-bs-toggle="tab"
                data-bs-target="#Shopping-tab-pane"
                type="button"
                role="tab"
                aria-controls="Shopping-tab-pane"
                aria-selected="false"
              >
                Shopping
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="Grocery-tab-pane"
              role="tabpanel"
              aria-labelledby="Grocery-tab"
              tabIndex={0}
            >
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Grocery</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 1000</p>
                </div>
              </div>
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Grocery</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 3000</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="clothing-tab-pane"
              role="tabpanel"
              aria-labelledby="clothing-tab"
              tabIndex={0}
            >
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Clothing</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 1000</p>
                </div>
              </div>
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Clothing</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 3000</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Personal-tab-pane"
              role="tabpanel"
              aria-labelledby="Personal-tab"
              tabIndex={0}
            >
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Personal Care</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 1000</p>
                </div>
              </div>
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Personal Care</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 3000</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Insurance-tab-pane"
              role="tabpanel"
              aria-labelledby="Insurance-tab"
              tabIndex={0}
            >
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Insurance Bill</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 1000</p>
                </div>
              </div>
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Insurance Bill</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 3000</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Shopping-tab-pane"
              role="tabpanel"
              aria-labelledby="Shopping-tab"
              tabIndex={0}
            >
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Shopping</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 1000</p>
                </div>
              </div>
              <div className="grocery-added-flex">
                <div className="grocery-flex">
                  <div className="grocery-img">
                    <img src={money} className="img-fluid" alt="" />
                  </div>
                  <div className="grocery-text">
                    <h3>Shopping</h3>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
                <div className="grocery-amount">
                  <p>₹ 3000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="expense-summary">
            <Link to="/ViewSummery">View Summary</Link>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn expense-summary-button">
              Add Expense <img src={money} alt="" className="img-fluid" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 py-20">
            <div className="expense-title">
              <Link to="/">
                Home <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
              <span>Budget & Expense</span>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="expense-empty-bg">
              <div className="expense-empty-pills">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <img src={speed} alt="" /> Budget
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <img src={money} alt="" className="img-fluid" /> Expense
                    </button>
                  </li>
                </ul>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex={0}
                  >
                    {renderBudgetContent()}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex={0}
                  >
                    {renderExpenseContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}
              >
                {isEditing ? (
                  renderEditForm()
                ) : selectedBudget ? (
                  renderSelectedBudgetDetails()
                ) : (
                  <div className="expense-empty-bg">
                    <div className="budget-select">
                      <h3>Select Categories</h3>
                    </div>
                    {renderCategoryInputs(budgetData.budget_details[0], 0, true)}
                    {additionalCategories.map((category, index) =>
                      renderCategoryInputs(category, index)
                    )}
                    {error && <div className="text-danger mt-2">{error}</div>}
                    <div className="budget-select-link">
                      <Link to="#" onClick={handleAddMoreCategories}>
                        Add More Categories
                      </Link>
                    </div>
                    <div className="budget-select-save">
                      <button
                        onClick={saveBudget}
                        className="btn"
                        disabled={loading || categories.length === 0}
                      >
                        {loading ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                <div className="expense-empty-bg">
                  <div className="expense-empty-category">
                    <h3>Category</h3>
                    <div>
                      <button
                        type="button"
                        className="btn btn-trash-expense"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <Trash2 />
                      </button>
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog model-padding modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <div className="modal-body-delete">
                                <p>
                                  <TriangleAlert /> Delete Grocery Expense ?
                                </p>
                              </div>
                            </div>
                            <div className="modal-footer-added">
                              <button type="button" className="btn btn-yes w-100">
                                Yes
                              </button>
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
                  </div>
                  <div className="expense-grocery">
                    <h5>Grocery</h5>
                  </div>
                  <div className="expense-grocery">
                    <h5>₹ 1000</h5>
                  </div>
                  <div className="expense-empty-select">
                    <textarea
                      name=""
                      placeholder="Add Expense Details (optional)"
                      id=""
                    ></textarea>
                  </div>
                  <div className="expense-link expense-link-two">
                    <Link to="/ViewSummery" className="w-100">
                      Save Changes
                    </Link>
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

export default ExpenseEmpty;