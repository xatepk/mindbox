import Footer from './components/Footer';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="tasks">
      <h1 className="tasks__title">todos</h1>
      <NewTask />
      <TasksList />
      <Footer />
    </div>
  );
}

export default App;
