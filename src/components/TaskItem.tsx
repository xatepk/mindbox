import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'


interface TodoProps {
  id: string,
  completed: boolean;
  description: string;
  onClickComplete: () => any;
  onClickRemove: () => any;
}

function TaskItem({ id, completed, description, onClickComplete, onClickRemove }: TodoProps) {

  return (
    <li className={`tasks__item ${completed ? 'tasks__item_active' : ''}`}>
      <input type="checkbox" id={`checkbox${id}`} className="tasks__item-input" onChange={onClickComplete} value={description} checked={completed} />
      <label htmlFor={`checkbox${id}`}></label>
      <span className={`tasks__item-desc ${completed ? 'tasks__item-desc-completed' : ''}`}>
        {description}
      </span>
      {!completed && <button onClick={onClickRemove} className='tasks__icon'>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>}

    </li>
  );
}

export default TaskItem;
