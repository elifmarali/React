import { useState, useEffect } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import LoadingPage from "./components/LoadingPage";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDataTimeout = setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 1000);

    // clearTimeout(fetchDataTimeout); // Bu satırı kaldırın

    // Temizleme işlemi
    return () => clearTimeout(fetchDataTimeout);
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  };
  const taskCreate = async (title, description) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title,
      description,
    });
    setTasks([...tasks, response.data]);
  };
  const taskDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3001/tasks/${id}`);
    const deleteAfterTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deleteAfterTasks);
  };
  const taskUpdate = (id, updatedTitle, updateDescription) => {
    axios.put(`http://localhost:3001/tasks/${id}`, {
      title: updatedTitle,
      description: updateDescription,
    });
    tasks.map((task) => {
      if (task.id === id) {
        task.title = updatedTitle;
        task.description = updateDescription;
      }
      return task;
    });
  };

  console.log(tasks);
  return (
    <div className="App">
      <div className="container">
        <TaskCreate onCreate={taskCreate} />
        <h2>Gorevler</h2>
        {loading ? (
          <LoadingPage />
        ) : (
          <TaskList tasks={tasks} onDelete={taskDelete} onUpdate={taskUpdate} />
        )}
      </div>
    </div>
  );
}

export default App;
