import React, { useContext } from "react";
import TasksContext from "../context/Tasks";
import TaskShow from "./TaskShow";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="taskList">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} />;
      })}
    </div>
  );
}

export default TaskList;
