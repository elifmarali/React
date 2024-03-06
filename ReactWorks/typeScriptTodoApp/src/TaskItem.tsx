import { todoListType } from "./type";
type taskType = {
  task: todoListType;
  onDelete(taskName: string): void;
};
function TaskItem({ task, onDelete }: taskType) {
  return (
    <div className="taskItem">
      <h3>{task.task}</h3>
      <h5>{task.workDay}</h5>
      <button onClick={() => onDelete(task.task)}>Sil</button>
    </div>
  );
}

export default TaskItem;
