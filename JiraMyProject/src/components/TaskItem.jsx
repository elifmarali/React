import React from "react";

function TaskItem({ taskInfo, onDelete }) {
  const taskDeleteById = () => {
    onDelete(taskInfo.id);
  };
  return (
    <div className="taskItem">
      <h4>Goreviniz</h4>
      <p>{taskInfo.title}</p>
      <h4>Yapilacaklar</h4>
      <p>{taskInfo.description}</p>
      <div className="buttonContainer">
        <button className="deleteButton" onClick={taskDeleteById}>
          Sil
        </button>
        <button className="deleteButton updateButton">Guncelle</button>
      </div>
    </div>
  );
}

export default TaskItem;
