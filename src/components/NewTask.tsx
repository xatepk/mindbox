import { useState } from "react";
import { addTodo } from "../store/slices/tasksSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function NewTask(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className='tasks__block tasks__item'>
      <FontAwesomeIcon icon={faChevronDown} className='tasks__icon' />
      <input className='tasks__new-item' value={text} onChange={handleChange} placeholder='What needs to be done'  />
    </form>
  );
}
