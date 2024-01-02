import React, { useState } from "react";
function TaskCreate({ onSubmit, updateClick, task, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (updateClick) {
      onUpdate(task.id, title, description);
    } else {
      onSubmit(title, description);
    }
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      {updateClick ? (
        <div className="createContainer updateContainer">
          <h3>Lutfen Taski Duzenleyiniz!</h3>
          <form className="createForm">
            <label>Basligi Duzenleyiniz</label>
            <input
              className="formInput"
              value={title}
              onChange={handleTitleChange}
            />
            <label>Taski Duzenleyiniz</label>
            <textarea
              className="formInput"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            />
            <button
              className="createButton updateFormButton"
              onClick={formSubmit}
            >
              Duzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="createContainer">
          <h3>Lutfen Task Ekleyiniz!</h3>
          <form className="createForm">
            <label>Baslik Giriniz</label>
            <input
              className="formInput"
              value={title}
              onChange={handleTitleChange}
            />
            <label>Task Giriniz</label>
            <textarea
              className="formInput"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            />
            <button className="createButton" onClick={formSubmit}>
              Olustur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default TaskCreate;
