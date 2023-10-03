import React, { useState } from "react";

function SearchHeader({ search }) {
  const [inputValue, setInputValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(inputValue);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Ariyorsunuz?</label>
        <input value={inputValue} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
