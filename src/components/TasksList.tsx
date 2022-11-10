import { useSelector, useDispatch } from "react-redux";
import { ITask } from "../models/models";
import { RootState } from "../store";
import { VisibilityFilter } from "../store/slices/filterSlice";
import { removeTodo, setTodoStatus } from "../store/slices/tasksSlice";
import TaskItem from "./TaskItem";



const getVisibleTodos = (todos: ITask[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowCompleted:
      return todos.filter(t => t.completed);
    case VisibilityFilter.ShowActive:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default function TasksList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) =>
    getVisibleTodos(state.tasks, state.visibilityFilter)
  );

  return (
    <ul className='tasks__block tasks__list'>
      {todos.map((todo) => (
        <TaskItem key={todo.id}
        {...todo}
        onClickComplete={() => dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }))}
        onClickRemove={() => dispatch(removeTodo(todo.id))} />
      ))}
    </ul>
  );
}

