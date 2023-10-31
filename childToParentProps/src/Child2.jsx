import React from "react";

function Child2({ clickProps }) {
  const handleChild2Click = () => {
    clickProps("click");
  };
  return (
    <div>
      <button onClick={handleChild2Click}>Props Submit</button>
    </div>
  );
}

export default Child2;
