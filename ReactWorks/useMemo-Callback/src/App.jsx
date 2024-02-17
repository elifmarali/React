import { useCallback, useState } from "react";
import "./App.css";
import { useMemo } from "react";
import NumberList from "./NumberList";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);
  const handleClickTheme = () => {
    setDark(!dark);
  };
  const theme = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  const getItems = useCallback(() => {
    return [number2, number2 + 1, number2 + 2];
  }, [number2]);
  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          parseInt(setNumber(e.target.value));
        }}
      />
      <button onClick={handleClickTheme}>Temayi Degistir</button>
      <div style={theme}>{doubleNumber}</div>
      <h3>Number Items</h3>
      <NumberList getItems={getItems}></NumberList>
    </>
  );
}

const slowFunc = (number) => {
  console.log("function called");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

export default App;
