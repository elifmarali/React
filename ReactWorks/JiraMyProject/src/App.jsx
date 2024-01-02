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
  const tasksUpdateById = (id, updatedTitle, updatedDescription) => {
    const afterUpdatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          title: updatedTitle,
          description: updatedDescription,
        };
      }
      return task;
    });
    setTasks(afterUpdatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onSubmit={taskCreated} />
      <h2>Gorevler</h2>
      <TasksList
        tasksList={tasks}
        onDelete={tasksDeleteById}
        onUpdate={tasksUpdateById}
      />
    </div>
  );
}

export default App;
