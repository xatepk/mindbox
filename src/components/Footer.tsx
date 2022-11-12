import Pluralize from 'pluralize';
import FilterButton from './FilterButton';
import { useDispatch, useSelector } from 'react-redux';
import { VisibilityFilter } from '../store/slices/filterSlice';
import { clearCompleted } from '../store/slices/tasksSlice';
import { RootState } from '../store/index';

export default function Footer(): JSX.Element {
  const dispath = useDispatch();
  const activeTasks = useSelector((state: RootState) => state.tasks);

  return (
    <footer className="tasks__item tasks__footer">
      <span className="tasks__filter">
        {Pluralize('item', activeTasks.filter((t) => !t.completed).length, true)} left
      </span>
      <div>
        <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={'All'} />
        <FilterButton visibilityFilter={VisibilityFilter.ShowActive} text={'Active'} />
        <FilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text={'Completed'} />
      </div>
      <button className="tasks__filter" onClick={() => dispath(clearCompleted(false))}>
        Clear Completed
      </button>
    </footer>
  );
}
