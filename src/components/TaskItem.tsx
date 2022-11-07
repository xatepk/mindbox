

interface TodoProps {
  completed: boolean;
  description: string;
  onClick: () => any;
}

function TaskItem({completed, description, onClick}: TodoProps) {
  return (
    <li className={`tasks__item ${completed ? 'tasks__item_active' : ''}`} onClick={onClick}>
      {description}
    </li>
   );
}

export default TaskItem;
