import React, { memo } from "react";

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}

export default memo(TodoItem);
