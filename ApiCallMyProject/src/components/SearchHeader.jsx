import React from "react";
import { useState } from "react";
function SearchHeader({ searchProps }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchProps(inputValue);
  };
  return (
    <div className="searchHeader">
      <form className="formHeader" onSubmit={handleFormSubmit}>
        <label>Ne Ariyorsunuz?</label>
        <input value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
}
export default SearchHeader;
