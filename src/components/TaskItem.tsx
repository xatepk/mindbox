import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';
import { removeTodo, setTodoStatus } from '../store/slices/tasksSlice';


interface TodoProps {
  id: string,
  description: string,
  completed: boolean
}

function TaskItem({ id, description, completed}: TodoProps) {
  const dispatch = useDispatch();

  return (
    <li className={`tasks__item ${completed ? 'tasks__item_active' : ''}`}>
      <input type="checkbox" id={`checkbox${id}`}
      className="tasks__item-input"
      onChange={() => dispatch(setTodoStatus({ completed: !completed, id: id }))}
      value={description}
      checked={completed} />
      <label htmlFor={`checkbox${id}`}></label>
      <span className={`tasks__item-desc ${completed ? 'tasks__item-desc-completed' : ''}`}>
        {description}
      </span>
      {!completed &&
      <span
      role="button"
      onClick={() => dispatch(removeTodo(id))}
      className='tasks__icon'>
        <FontAwesomeIcon icon={faTrashCan} />
      </span>}

    </li>
  );
}

export default TaskItem;
