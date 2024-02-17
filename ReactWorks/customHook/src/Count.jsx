import React, { useState } from "react";
import useCount from "./useCount";

function Count() {
  const [number, increment, decrement, reset] = useCount();
  useCount();
  return (
    <div>
      <div>{number}</div>
      <button onClick={decrement}>Azalt</button>
      <button onClick={reset}>Sifirla</button>
      <button onClick={increment}>Arttir</button>
    </div>
  );
}

export default Count;
