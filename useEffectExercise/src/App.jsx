import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [elif, setElif] = useState(0);
  const [marali, setMarali] = useState(0);
  useEffect(() => {
    console.log("Her zaman calisir");
  });
  useEffect(() => {
    console.log("Sadece component ilk render edildiginda calisir");
  }, []);
  useEffect(() => {
    console.log(
      "Component ilk render edildiginda ve elif her update oldugunda calisir"
    );
  }, [elif]);
  useEffect(() => {
    console.log(
      "Component ilk render edildiginda ve elif veya marali her update oldugunda calisir"
    );
  }, [elif, marali]);
  const handleClickElif = () => {
    setElif(elif + 1);
  };
  const handleClickMarali = () => {
    setMarali(marali + 1);
  };
  return (
    <div>
      <div>
        <div>Elif: {elif}</div>
        <button onClick={handleClickElif}>Elif ++</button>
      </div>
      <div>
        <div>Marali: {marali}</div>
        <button onClick={handleClickMarali}>Marali ++</button>
      </div>
    </div>
  );
}

export default App;
