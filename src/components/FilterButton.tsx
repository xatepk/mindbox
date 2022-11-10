import { setVisibilityFilter, VisibilityFilter } from "../store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

export default function FilterButton({
  visibilityFilter,
  text
}: FilterButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  );
  return (
    <button
      className='tasks__filter'
      disabled={currentVisibilityFilter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </button>
  );
}
