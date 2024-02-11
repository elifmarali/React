import React, { memo, useCallback } from "react";
import { useContext } from "react";
import TodosContext from "../context/TodosContext";

function AddTodo() {
  const { state, dispatch } = useContext(TodosContext);
  const handleChangeTodoInput = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const handlePostTodo = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  return (
    <form>
      <input type="text" value={state.todo} onChange={handleChangeTodoInput} />
      <button onClick={handlePostTodo}>Ekle</button>
    </form>
  );
}

export default memo(AddTodo);
