import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="todo-app">
      <div className='todo-main-list'>
        <h1 className='title'>Tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
