import React, { useState } from "react";

function TaskCreate({ onCreate, updateForm, task, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
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
      onCreate(title, description);
    }
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      {updateForm ? (
        <div className="taskUpdateContainer">
          <h3>Lutfen Taski Duzenleyiniz!</h3>
          <form>
            <label>Basligi Duzenleyiniz</label>
            <input value={title} onChange={handleTitleChange} />
            <label>Taski Duzenleyiniz</label>
            <textarea value={description} onChange={handleDescriptionChange} />
            <button onClick={createFormSubmit}>Duzenle</button>
          </form>
        </div>
      ) : (
        <div className="taskCreateContainer">
          <h3>Lutfen Task Ekleyiniz!</h3>
          <form>
            <label>Baslik Giriniz</label>
            <input value={title} onChange={handleTitleChange} />
            <label>Task Giriniz</label>
            <textarea value={description} onChange={handleDescriptionChange} />
            <button onClick={createFormSubmit}>Olustur</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
