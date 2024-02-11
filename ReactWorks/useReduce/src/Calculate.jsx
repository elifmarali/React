import React, { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const { count, dispatch } = useContext(NumberContext);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Arttir</button>
      <button onClick={() => dispatch("decrement")}>Azalt</button>
      <button onClick={() => dispatch("reset")}>Sifirla</button>
    </>
  );
}

export default Calculate;
