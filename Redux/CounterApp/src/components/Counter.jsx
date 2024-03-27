import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/Counter/counterSlice";
function Counter() {
  const [amount, setAmount] = useState(0);
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>{value}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment By Amount
      </button>
    </>
  );
}

export default Counter;
