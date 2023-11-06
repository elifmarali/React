import React from "react";
import TaskItem from "./TaskItem";

function TasksList({ tasksList, onDelete, onUpdate }) {
  console.log(tasksList);
  return (
    <div className="taskListContainer">
      {tasksList.map((task) => {
        return (
          <TaskItem
            taskInfo={task}
            key={task.id}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TasksList;
