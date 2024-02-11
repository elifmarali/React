import React from "react";
import { useContext } from "react";
import TodosContext from "../context/TodosContext";

function TodosSearch() {
  const { state, dispatch, filteredTodos } = useContext(TodosContext);
  const handleChangeSearchInput = (e) => {
    dispatch({
      type: "SEARCH_TODO",
      value: e.target.value,
    });
  };
  return (
    <div>
      <input
        type="text"
        value={state.search}
        onChange={handleChangeSearchInput}
        placeholder="Todos Search"
      />
      {filteredTodos.map((filteredTodo) => "        " + filteredTodo)}
    </div>
  );
}

export default TodosSearch;
