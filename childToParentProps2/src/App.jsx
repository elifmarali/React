import Child from "./Child";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState();
  const handleClick = (term) => {
    setValue(term);
  };
  return (
    <>
      <div>Parent</div>
      <div>count: {value}</div>
      <Child count={handleClick} />
    </>
  );
}

export default App;
