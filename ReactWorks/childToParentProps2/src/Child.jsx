import React, { useState } from "react";
function Child({ count }) {
  const handleClick1 = () => {
    count(1);
  };
  const handleClick2 = () => {
    count(2);
  };
  const handleClick3 = () => {
    count(3);
  };
  return (
    <>
      <div>Child:</div>
      <button onClick={handleClick1}>1</button>
      <button onClick={handleClick2}>2</button>
      <button onClick={handleClick3}>3</button>
    </>
  );
}
export default Child;
