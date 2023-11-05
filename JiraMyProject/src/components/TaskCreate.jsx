import React, { useState } from "react";
function TaskCreate({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, description);
    setTitle("");
    setDescription("");
  };
  return (
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
  );
}
export default TaskCreate;
