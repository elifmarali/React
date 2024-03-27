import React, { useState } from "react";

function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    job: "",
  });
  const changeTask = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const onAdd = (e) => {
    e.preventDefault();
    if ((task.title != "") & (task.job != "")) {
      props.AddTask(task);
      setTask({
        title: "",
        job: "",
      });
    }
  };

  return (
    <div className="formArea">
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={task.title}
          onChange={changeTask}
        />
        <textarea
          placeholder="Write your job"
          rows={3}
          name="job"
          value={task.job}
          onChange={changeTask}
        ></textarea>
        <button className="addButton" onClick={onAdd}>
          Ekle
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
