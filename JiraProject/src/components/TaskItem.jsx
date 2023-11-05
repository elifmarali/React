import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskItem({ task, onDelete, onUpdate }) {
  const [updateClicked, setUpdateClicked] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleUpdateClick = () => {
    setUpdateClicked(!updateClicked);
  };
  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setUpdateClicked(false);
    onUpdate(id, updatedTitle, updatedDescription);
  };
  return (
    <div className="taskItem">
      {updateClicked ? (
        <TaskCreate task={task} updateForm={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Goreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapilacaklar</h3>
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

export default TaskItem;
