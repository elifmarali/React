import { useState } from "react";
import "./App.css";
import Character from "./Character";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChangeInput} />
      <Character input={inputValue} />
    </>
  );
}

export default App;
