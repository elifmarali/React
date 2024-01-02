import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TasksList from "./components/TasksList";
import axios from "axios";
function App() {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    fetchTasks();
  }, []);
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasksList");
    setTasksList(response.data);
  };
  const addTaskToList = async (title, description) => {
    const response = await axios.post("http://localhost:3000/tasksList", {
      title,
      description,
    });
    const tasks = [...tasksList, response.data];
    setTasksList(tasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasksList/${id}`);
    const afterDeletingTasks = tasksList.filter((task) => {
      return task.id !== id;
    });
    setTasksList(afterDeletingTasks);
  };
  const editTaskById = async (id, updatedTitle, updatedDescription) => {
    await axios.put(`http://localhost:3000/tasksList/${id}`, {
      title: updatedTitle,
      description: updatedDescription,
    });
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
      <TaskCreate task={addTaskToList} />
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
