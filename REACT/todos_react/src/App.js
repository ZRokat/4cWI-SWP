import logo from './logo.svg';
import './App.css';
import Header from './Comps/Header';
import TaskAdder from './Comps/TaskAdder';
import Todo from './Comps/Todo';
import TodoList from './Comps/TodoList';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    todos :[{
      "id":1,
      "name": "einkaufen",
      "done": false
    },
    {
      "id":2,
      "name": "stehlen",
      "done": false
    },
    ]
  }
}

  render() { 
    return (
      <div className="App">
        <Header/>
        <TaskAdder/>
        <TodoList tasks ={this.state.todos}/>
      </div>
    );
  }
}
 
export default App;
