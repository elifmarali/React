import { useState } from "react";

function useCount() {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };
  return [number, increment, decrement, reset];
}
export default useCount;
