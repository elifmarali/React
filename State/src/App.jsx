import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>Kurs Sayisi: {value}</div>
    </div>
  );
}

export default App;
