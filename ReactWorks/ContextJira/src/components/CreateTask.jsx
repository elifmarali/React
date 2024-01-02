import React, { useContext, useState } from "react";
import TasksContext from "../context/Tasks";

function CreateTask({ updateCreateTask, task, onUpdate }) {
  const { createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleFormClick = (e) => {
    e.preventDefault();
    if (updateCreateTask) {
      onUpdate(task.id, title, description);
    } else {
      createTask(title, description);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      {updateCreateTask ? (
        <div className="createContainer updateContainer">
          <h3>Lutfen Taski Duzenleyiniz!</h3>
          <form className="createForm">
            <label>Basligi Duzenleyiniz</label>
            <input
              className="inputForm"
              value={title}
              onChange={handleTitleChange}
            />
            <label>Aciklama Duzenleyiniz</label>
            <textarea
              className="inputForm"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            />
            <button className="createFormButton" onClick={handleFormClick}>
              Duzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="createContainer">
          <h3>Lutfen Task Ekleyiniz!</h3>
          <form className="createForm">
            <label>Basligi Giriniz</label>
            <input
              className="inputForm"
              value={title}
              onChange={handleTitleChange}
            />
            <label>Aciklama Giriniz</label>
            <textarea
              className="inputForm"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            />
            <button className="createFormButton" onClick={handleFormClick}>
              Olustur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateTask;
