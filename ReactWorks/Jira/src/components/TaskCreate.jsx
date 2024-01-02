import { useState } from "react";
function TaskCreate({ onCreate, updateClick, task, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const taskCreated = (e) => {
    e.preventDefault();
    if (updateClick) {
      onUpdate(task.id, title, description);
    } else {
      onCreate(title, description);
    }
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      {updateClick ? (
        <div className="updateContainer">
          <h3>Lutfen Task Ekleyiniz!</h3>
          <form className="createFormContainer">
            <label className="createLabel">Baslik Giriniz</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="createInput"
            />
            <label className="createLabel">Task Giriniz</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="createInput"
              rows={5}
            />
            <button className="editButton" onClick={taskCreated}>
              Duzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="createContainer">
          <h3>Lutfen Task Ekleyiniz!</h3>
          <form className="createFormContainer">
            <label className="createLabel">Baslik Giriniz</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="createInput"
            />
            <label className="createLabel">Task Giriniz</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="createInput"
              rows={5}
            />
            <button className="createButton" onClick={taskCreated}>
              Olustur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default TaskCreate;
