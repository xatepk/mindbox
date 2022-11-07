import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className='page'>
      <h1 className="tasks tasks__title">todos</h1>
      <NewTask />
      <TasksList />
    </div>
  );
}

export default App;
