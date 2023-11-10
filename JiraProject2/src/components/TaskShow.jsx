import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete, onUpdate }) {
  const [updateClick, setUpdateClick] = useState(false);
  const deleteById = () => {
    onDelete(task.id);
  };
  const clickUpdateButton = () => {
    setUpdateClick(!updateClick);
  };
  const updateClickHandler = (id, title, description) => {
    setUpdateClick(false);
    onUpdate(id, title, description);
  };
  return (
    <div className="taskShow">
      {updateClick ? (
        <TaskCreate
          updateForm={true}
          task={task}
          onUpdate={updateClickHandler}
        />
      ) : (
        <div>
          <h4>Goreviniz</h4>
          <p>{task.title}</p>
          <h4>Yapilacaklar</h4>
          <p>{task.description}</p>
          <div>
            <button onClick={deleteById}>Sil</button>
            <button onClick={clickUpdateButton}>Guncelle</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
