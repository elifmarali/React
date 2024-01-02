import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
  const deleteClicked = () => {
    onDelete(task.id);
  };
  const updateClicked = () => {
    setUpdateButtonClicked(!updateButtonClicked);
  };
  const handleUpdate = (id, updateTitle, updateDescription) => {
    onUpdate(id, updateTitle, updateDescription);
    setUpdateButtonClicked(false);
  };

  return (
    <div className="taskItem">
      {updateButtonClicked ? (
        <TaskCreate updateClick={true} task={task} onUpdate={handleUpdate} />
      ) : (
        <>
          <h3>Goreviniz</h3>
          <h4>{task.title}</h4>
          <h3>Yapilacaklar</h3>
          <h4 className="taskDescription">{task.description}</h4>
          <div className="buttonContainer">
            <button className="deleteButton" onClick={deleteClicked}>
              Sil
            </button>
            <button
              className="deleteButton updateButton"
              onClick={updateClicked}
            >
              Guncelle
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;
