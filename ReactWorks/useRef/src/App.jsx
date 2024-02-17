import { useEffect, useRef, useState } from "react";
import "./App.css";
import UseRefUseStateDifferent from "./components/UseRefUseStateDifferent";

function App() {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  const inputRef = useRef("");

  const count = useRef(0);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    // setRenderCount(renderCount + 1);
    count.current += 1;
  });
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "10";
  };
  return (
    <>
      <input type="text" value={name} onChange={handleChange} ref={inputRef} />
      <div>{count.current} defa render oldu</div>
      <button onClick={focusInput}>Focusla</button>
      {/* <UseRefUseStateDifferent /> */}
    </>
  );
}

export default App;
