import Child from "./Child";
import Child2 from "./Child2";
import "./App.css";

function App() {
  const handleSubmit = (term) => {
    console.log(term);
  };
  const handleClick = (term) => {
    console.log(term);
  };
  return (
    <>
      <Child search={handleSubmit} />
      <Child2 clickProps={handleClick} />
    </>
  );
}

export default App;
