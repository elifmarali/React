import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, description) => {
    const afterCreateTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999999),
        title,
        description,
      },
    ];
    setTasks(afterCreateTask);
  };
  const taskDeleteByID = (taskID) => {
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== taskID;
    });
    setTasks(afterDeleteTasks);
  };
  const taskUpdateByID = (id, updatedTitle, updatedDescription) => {
    const afterUpdateTasks = tasks.map((task) => {
      if (task.id === id) {
        task.title = updatedTitle;
        task.description = updatedDescription;
      }
      return task;
    });
    setTasks(afterUpdateTasks);
  };
  console.log(tasks);
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h2>Gorevler</h2>
      <TaskList
        tasks={tasks}
        onDelete={taskDeleteByID}
        onUpdate={taskUpdateByID}
      />
    </div>
  );
}

export default App;
