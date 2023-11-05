import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskCreated = (title, description) => {
    const newTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999999),
        title,
        description,
      },
    ];
    setTasks(newTask);
  };
  const tasksDeleteById = (id) => {
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTasks);
  };
  return (
    <div className="App">
      <TaskCreate onSubmit={taskCreated} />
      <h2>Gorevler</h2>
      <TasksList tasksList={tasks} onDelete={tasksDeleteById} />
    </div>
  );
}

export default App;
