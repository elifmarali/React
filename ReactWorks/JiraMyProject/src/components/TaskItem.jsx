import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskItem({ taskInfo, onDelete, onUpdate }) {
  const [updateButtonClick, setUpdateButtonClick] = useState(false);
  const taskDeleteById = () => {
    onDelete(taskInfo.id);
  };
  const taskUpdatedById = () => {
    setUpdateButtonClick(!updateButtonClick);
  };
  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setUpdateButtonClick(false);
    onUpdate(id, updatedTitle, updatedDescription);
  };
  return (
    <div className="taskItem">
      {updateButtonClick ? (
        <TaskCreate
          updateClick={true}
          task={taskInfo}
          onUpdate={handleSubmit}
        />
      ) : (
        <div>
          <h4>Goreviniz</h4>
          <p>{taskInfo.title}</p>
          <h4>Yapilacaklar</h4>
          <p>{taskInfo.description}</p>
          <div className="buttonContainer">
            <button className="deleteButton" onClick={taskDeleteById}>
              Sil
            </button>
            <button
              className="deleteButton updateButton"
              onClick={taskUpdatedById}
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
