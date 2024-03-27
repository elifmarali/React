import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import Task from "./components/Task";
import Footer from "./components/Footer";
function App() {
  const [tasks, setTasks] = useState([]);
  const taskItemAdd = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  const onDelete = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header></Header>
      <CreateTask AddTask={taskItemAdd}></CreateTask>
      <div className="taskContainer">
        {tasks.map((task, index) => {
          return (
            <Task
              taskTitle={task.title}
              taskJob={task.job}
              key={index}
              id={index}
              deleteTaskItem={onDelete}
            ></Task>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
