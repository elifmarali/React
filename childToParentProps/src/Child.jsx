import React, { useState } from "react";

function Child({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Ne Ariyorsunuz?</label>
        <input onChange={handleChange} value={value} />
      </form>
    </div>
  );
}

export default Child;
