import React, { useRef, useState } from "react";
function UseRefUseStateDifferent() {
  const [stateCount, setStateCount] = useState(0);
  const countRef = useRef(0);
  console.log("State Count : " + stateCount);
  console.log("Ref Count : " + countRef.current);
  return (
    <>
      <div>State Count : {stateCount}</div>
      <button onClick={() => setStateCount(stateCount + 1)}>Arttir</button>
      <div>Ref Count : {countRef.current}</div>
      <button
        onClick={() => {
          countRef.current += 1;
        }}
      >
        Arttir
      </button>
    </>
  );
}
export default UseRefUseStateDifferent;
