import React, { useState } from "react";

function TaskCreate({ task, updateForm, onUpdate }) {
  const [title, setTitle] = useState(task.title ? task.title : "");
  const [description, setDescription] = useState(
    task.description ? task.description : ""
  );
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const createFormSubmit = (e) => {
    e.preventDefault();
    if (updateForm) {
      onUpdate(task.id, title, description);
    } else {
      task(title, description);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      {updateForm ? (
        <div className="taskCreateContainer taskUpdateContainer">
          <h3 className="taskCreateHeader">Lutfen Taski Duzenleyiniz!</h3>
          <form className="taskForm">
            <label>Basligi Duzenleyiniz</label>
            <input
              className="taskInput"
              onChange={handleTitleChange}
              value={title}
            />
            <label>Taski Duzenleyiniz</label>
            <textarea
              className="taskInput"
              rows={5}
              onChange={handleDescriptionChange}
              value={description}
            />
            <button
              className="createButton updateFormButton"
              onClick={createFormSubmit}
            >
              Duzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreateContainer">
          <h3 className="taskCreateHeader">Lutfen Task Ekleyiniz!</h3>
          <form className="taskForm">
            <label>Baslik</label>
            <input
              className="taskInput"
              onChange={handleTitleChange}
              value={title}
            />
            <label>Task Giriniz!</label>
            <textarea
              className="taskInput"
              rows={5}
              onChange={handleDescriptionChange}
              value={description}
            />
            <button className="createButton" onClick={createFormSubmit}>
              Olustur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
