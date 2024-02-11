import { memo } from "react";
import { useContext } from "react";
import TodosContext from "../context/TodosContext";
import TodoItem from "../components/TodoItem";
function Todos() {
  const { state } = useContext(TodosContext);
  return (
    <ul>
      {state.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} />;
      })}
    </ul>
  );
}

export default memo(Todos);
