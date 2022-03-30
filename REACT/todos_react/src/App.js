import logo from './logo.svg';
import './App.css';
import Header from './Comps/Header';
import TaskAdder from './Comps/TaskAdder';
import Todo from './Comps/Todo';
import TodoList from './Comps/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskAdder/>
      <TodoList/>
    </div>
  );
}

export default App;
