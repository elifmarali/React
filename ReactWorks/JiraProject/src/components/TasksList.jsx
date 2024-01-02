import React from "react";
import TaskItem from "./TaskItem";
function TasksList({ tasks, onDelete, onUpdate }) {
  console.log(tasks);
  return (
    <div className="taskListContainer">
      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
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
