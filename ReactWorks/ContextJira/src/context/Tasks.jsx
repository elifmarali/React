import { createContext, useState } from "react";
import axios from "axios";
const TasksContext = createContext();
function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, description) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      description,
    });
    setTasks([...tasks, response.data]);
  };

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  const deleteTaskByID = async (taskId) => {
    await axios.delete(`http://localhost:3000/tasks/${taskId}`);
    const deleteAfterNewTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(deleteAfterNewTasks);
  };
  const updateTaskByID = async (id, updatedTitle, updatedDescription) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      description: updatedDescription,
    });
    const updateAfterNewTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          title: updatedTitle,
          description: updatedDescription,
          id,
        };
      }
      return task;
    });
    setTasks(updateAfterNewTasks);
  };
  console.log(tasks);
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchData,
    deleteTaskByID,
    updateTaskByID,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}
export { Provider };
export default TasksContext;
