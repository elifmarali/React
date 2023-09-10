import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>Course Counter: {count}</div>
      <button onClick={handleClick}>Add Button</button>
    </div>
  );
}

export default App;
