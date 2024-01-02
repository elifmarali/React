import React from "react";
import TaskShow from "./TaskShow";
function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="taskList">
      {tasks.map((task) => {
        return (
          <TaskShow
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

export default TaskList;
