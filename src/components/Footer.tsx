import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";


import { VisibilityFilter } from "../store/slices/filterSlice";
import { clearCompleted } from "../store/slices/tasksSlice";

export default function Footer(): JSX.Element {
  const dispath = useDispatch();

  return (
    <footer className="tasks__filter">
      <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={"All"} />
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowActive}
        text={"Active"}
      />
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowCompleted}
        text={"Completed"}
      />
      <button onClick={() => dispath(clearCompleted(false))}>Clear Completed</button>
    </footer>
  );
}
