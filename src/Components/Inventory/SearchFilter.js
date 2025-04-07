import { useState } from "react";
import { Search, Sliders } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("None"); // To store selected filter

  // Handle filter selection
  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter); // Update selected filter
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <div className="search-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Filter Button */}
      <div className="filter-wrapper">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="filter-btn"
        >
          <Sliders className="icon" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="dropdown">
            <button
              className="dropdown-item"
              onClick={() => handleFilterSelect("Option 1")}
            >
              Filter Option 1
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilterSelect("Option 2")}
            >
              Filter Option 2
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilterSelect("Option 3")}
            >
              Filter Option 3
            </button>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="search-btn">
        <Search className="icon" />
      </button>
    </div>
  );
};

export default SearchBar;
