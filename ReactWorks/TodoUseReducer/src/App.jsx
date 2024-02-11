import { useReducer } from "react";
import "./App.css";
import { reducer } from "./Reducer/todoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });
  const handleTodoChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };

  const handleTodoClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleTodoChange} value={state.todo} />
        <button onClick={handleTodoClick}>Ekle</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
