import React, { useState } from "react";

function SearchHeader({ searchValue }) {
  const [inputValue, setİnputValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchValue(inputValue);
  };
  const handleInputChange = (e) => {
    setİnputValue(e.target.value);
  };
  return (
    <div className="searchHeader">
      <form className="searchHeaderForm" onSubmit={handleFormSubmit}>
        <label>Ne Ariyorsunuz?</label>
        <input value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
