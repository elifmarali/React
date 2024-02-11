import { useContext } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { useState } from "react";
import TodosSearch from "./components/TodosSearch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <div>{count}</div>
        <br />
        <button onClick={() => setCount(count + 1)}>Arttir</button>
      </div>
      <br />
      <br /> <hr />
      <br />
      <br />
      <TodosSearch />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
