import "./App.css";
import { ChangeEvent, FC, useState } from "react";
import TaskItem from "./TaskItem";
import { todoListType } from "./type";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [taskList, setTaskList] = useState<todoListType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };
  const addTodo = (): void => {
    const newTodo: todoListType = {
      task: task,
      workDay: workDay,
    };
    setTaskList([...taskList, newTodo]);
    setTask("");
    setWorkDay(0);
  };
  const deletingTodoItem = (taskName: string): void => {
    setTaskList(
      taskList.filter((t) => {
        return t.task !== taskName;
      })
    );
  };
  return (
    <div className="todoContainer">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Task Giriniz..."
          value={task}
          name="task"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Kac Gunde Bitirilecegini Giriniz..."
          value={workDay}
          name="workDay"
          onChange={handleChange}
        />
        <button onClick={addTodo}>Yeni Task Ekle</button>
      </div>
      <div className="tasksContainer">
        {taskList.map((task: todoListType, index: number) => {
          return (
            <TaskItem key={index} task={task} onDelete={deletingTodoItem} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
