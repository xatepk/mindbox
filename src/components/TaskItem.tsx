
interface TodoProps {
  completed: boolean;
  description: string;
  onClickComplete: () => any;
  onClickRemove: () => any;
}

function TaskItem({completed, description, onClickComplete, onClickRemove}: TodoProps) {

  return (
    <li className={`tasks__item ${completed ? 'tasks__item_active' : ''}`}>
      <input type="checkbox" className="tasks__item-input" onChange={onClickComplete} value={description} checked={completed} />
      <span style={{
        textDecoration: completed ? "line-through" : "none"
      }}>{description}</span>
      <button onClick={onClickRemove}></button>
    </li>
   );
}

export default TaskItem;
