import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import speedtest from "../../images/speedtest.svg";
import ApexChartOne from "./ApexChartOne";

function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchBudgets();
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
        setPage(prev => prev + 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [loading, hasMore]);

  const fetchBudgets = async () => {
    setLoading(true);
    try {
      // Get user ID and token from localStorage
      const userId = localStorage.getItem('KhataDiary_user_id') || '66'; // Default to 66 if not found
      const accessToken = localStorage.getItem('KhataDiary_access_token') || 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjY2LCJidXNpbmVzc19pZCI6IjcyOTU5MzRlYjRlZGMwOWJkN2UwIiwiaWF0IjoxNzQzNjcxMDMxLCJleHAiOjE3NDYyNjMwMzEsInR5cGUiOiJhY2Nlc3MifQ.WA3ec9GT_CI-X10yseZvesSAHXkSuX7MwiNPUT-TIsw';

      const response = await fetch(
        `https://khatadiary.synoventum.site/v1/budgets/user/${userId}?limit=${limit}&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch budgets");
      }

      const data = await response.json();
      setBudgets(prev => page === 1 ? data.results : [...prev, ...data.results]);
      setHasMore(data.results.length === limit);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filteredBudgets = budgets.filter((budget) => {
    if (!budget?.budget_details || !Array.isArray(budget.budget_details)) {
      return false;
    }
    
    return budget.budget_details.some((detail) => {
      return detail?.category_name && 
             typeof detail.category_name === 'string' &&
             detail.category_name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const chartData = budgets.length > 0 && budgets[0]?.budget_details 
    ? budgets[0].budget_details.map((detail) => ({
        name: detail?.category_name || 'Unknown',
        value: detail?.monthly_budget || 0,
      }))
    : [];

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>{" "}
            </Link>
            <span>Budget</span>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            
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

            <div 
              ref={containerRef}
              style={{ maxHeight: '400px', overflowY: 'auto' }}
            >
              {filteredBudgets.length > 0 ? (
                filteredBudgets.map((budget) =>
                  budget.budget_details.map((detail, index) => (
                    <div className="grocery-added-flex" key={`${budget.id}-${index}`}>
                      <div className="grocery-flex">
                        <div className="grocery-img">
                          <img src={speedtest} className="img-fluid" alt="" />
                        </div>
                        <div className="grocery-text">
                          <h3>{detail?.category_name || 'Unknown'}</h3>
                          <p>Monthly Budget - ₹ {(detail?.monthly_budget || 0).toFixed(2)}</p>
                          <p>Account: {detail?.account_holder_name || 'N/A'}</p>
                        </div>
                      </div>
                      <div className="grocery-amount">
                        <Link to={`/edit-budget/${budget.id}`}>Edit</Link>
                        <p>₹ {(detail?.yearly_budget || 0).toFixed(2)}</p>
                      </div>
                    </div>
                  ))
                )
              ) : (
                <div>No budgets found</div>
              )}
              {loading && <div>Loading more...</div>}
            </div>

            <div className="grocery-added-ch">
              <div className="expense-chart-apex">
                {chartData.length > 0 ? (
                  <ApexChartOne data={chartData} />
                ) : (
                  <div>No data available for chart</div>
                )}
              </div>
              <ul className="mb-0">
                {chartData.map((detail, index) => (
                  <li
                    key={index}
                    className={`expense-color-${index + 1}`}
                  >
                    <div className="expense-clothing-chart mb-0">
                      <h4>{detail.name}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button className="btn expense-summary-button w-100 mt-3">
                Add Budget{" "}
                <img src={speedtest} alt="" className="img-fluid" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;