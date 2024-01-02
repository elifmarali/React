import { useContext, useEffect } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TasksContext from "./context/Tasks";

function App() {
  const { fetchData } = useContext(TasksContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <CreateTask />
      <h2>Gorevler</h2>
      <TaskList />
    </div>
  );
}

export default App;
