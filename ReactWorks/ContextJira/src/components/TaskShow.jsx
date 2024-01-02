import React, { useContext, useState } from "react";
import TasksContext from "../context/Tasks";
import CreateTask from "./CreateTask";
function TaskShow({ task }) {
  const [taskUpdateClick, setTaskUpdateClick] = useState(false);
  const { deleteTaskByID, updateTaskByID } = useContext(TasksContext);
  const handleDeleteClick = () => {
    deleteTaskByID(task.id);
  };
  const handleUpdateClick = () => {
    setTaskUpdateClick(true);
  };
  const handleFormUpdated = (id, updatedTitle, updatedDescription) => {
    setTaskUpdateClick(false);
    updateTaskByID(id, updatedTitle, updatedDescription);
  };

  return (
    <div className="taskItem">
      {taskUpdateClick ? (
        <CreateTask
          updateCreateTask={true}
          task={task}
          onUpdate={handleFormUpdated}
        ></CreateTask>
      ) : (
        <div>
          <h2 className="taskItemHeader">Goreviniz</h2>
          <p>{task.title}</p>
          <h2 className="taskItemHeader">Yapilacaklar</h2>
          <p>{task.description}</p>
          <div className="buttonContainer">
            <button className="deleteButton" onClick={handleDeleteClick}>
              Sil
            </button>
            <button
              className="deleteButton updateButton"
              onClick={handleUpdateClick}
            >
              Guncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
