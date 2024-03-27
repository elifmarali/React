import React from "react";

function Task({ taskTitle, taskJob, id, deleteTaskItem }) {
  console.log(taskTitle, taskJob, id);
  const deleteTask = (id) => {
    deleteTaskItem(id);
  };
  return (
    <div className="taskItem">
      <h6>{taskTitle}</h6>
      <p>{taskJob}</p>
      <button className="deleteButton" onClick={() => deleteTask(id)}>
        Sil
      </button>
    </div>
  );
}

export default Task;
