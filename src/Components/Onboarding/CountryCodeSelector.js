import React, { useState } from "react";
import Select from "react-select";

// Country list with flags & dial codes
const countryOptions = [
  { value: "+91", label: "India", iso2: "in" },
  { value: "+1", label: "United States", iso2: "us" },
  { value: "+44", label: "United Kingdom", iso2: "gb" },
  { value: "+61", label: "Australia", iso2: "au" },
  { value: "+49", label: "Germany", iso2: "de" },
];

// Function to get the flag image URL
const getFlagUrl = (iso2) => `https://flagcdn.com/w40/${iso2}.png`;

// Custom rendering for the selected value (shows flag & code)
const customSingleValue = ({ data }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img src={getFlagUrl(data.iso2)} alt="" width="30" />
    <span>{data.value}</span>
  </div>
);

// Custom rendering for dropdown options (flag, country name, and code)
const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`option-item ${innerProps.isFocused ? "focused" : ""}`}
    >
      <img src={getFlagUrl(data.iso2)} alt="" width="20" />
      {data.label} ({data.value})
    </div>
  );
};

const CountryCodeSelector = ({ selectedCountryCode, setSelectedCountryCode, setPhone }) => {
  const handleChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="country-code-selector">
      {/* Country Code Selector */}
      <Select
        options={countryOptions}
        value={countryOptions.find(option => option.value === selectedCountryCode)}
        onChange={handleChange}
        components={{ SingleValue: customSingleValue, Option: customOption }}
        isSearchable={false} // Enable search functionality
        styles={{
          control: (base) => ({
            ...base,
            border: "none",
            width: "max-content",
            background: "transparent",
            display: "flex",
          }),
        }}
      />

      {/* Phone Number Input */}
      <input
        type="tel"
        placeholder="Mobile Number"
        onChange={handlePhoneChange}
        className="phone-input"
      />
    </div>
  );
};

export default CountryCodeSelector;
