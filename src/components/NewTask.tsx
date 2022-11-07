import { useState } from "react";
import { addTodo } from "../store/slices/tasksSlice";
import { useDispatch } from "react-redux";

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
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
    </form>
  );
}
