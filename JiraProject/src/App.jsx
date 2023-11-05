import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TasksList from "./components/TasksList";
import TaskItem from "./components/TaskItem";
function App() {
  const [tasksList, setTasksList] = useState([]);
  const taskSubmitted = (title, description) => {
    addTaskToList(title, description);
  };
  const addTaskToList = (title, description) => {
    const tasks = [
      ...tasksList,
      {
        id: Math.round(Math.random() * 999999999),
        title,
        description,
      },
    ];
    setTasksList(tasks);
  };
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasksList.filter((task) => {
      return task.id !== id;
    });
    setTasksList(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedDescription) => {
    const updatedTasks = tasksList.map((task) => {
      if (id === task.id) {
        task.title = updatedTitle;
        task.description = updatedDescription;
      }
      return task;
    });
    setTasksList(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate task={taskSubmitted} />
      <h1>Gorevler</h1>
      <TasksList
        tasks={tasksList}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
