export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return { ...state, todo: action.value };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, state.todo], todo: "" };
  }
};
