import React from "react";
import { useReducer } from "react";
const TodosContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, state.todo],
        todo: "",
      };
    case "SEARCH_TODO":
      return {
        ...state,
        search: action.value,
      };
  }
};

function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    todo: "",
    todos: [],
    search: "",
  });

  const filteredTodos = state.todos.filter((todo) =>
    todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR"))
  );
  const sharedValuesAndMethods = {
    state,
    dispatch,
    filteredTodos,
  };
  return (
    <TodosContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
export { TodosProvider };
