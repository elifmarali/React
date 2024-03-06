import React, { useState } from "react";

function EventChangeClick() {
  const [inputValue, setInputValue] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("Silindi");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);

  return (
    <div>
      <button onClick={(event) => handleClick(event, 4)}>Sil</button>
      <input type="text" onChange={handleChange} value={inputValue} />
    </div>
  );
}

export default EventChangeClick;
