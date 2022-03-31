import './App.css';
import Header from './Comps/Header';
import TaskAdder from './Comps/TaskAdder';
import TodoList from './Comps/TodoList';
import React, { Component } from 'react';



class App extends Component {

constructor(props){
  super(props);
  this.state = {
    
    todos :[

    ]
  }
}

addTask = (idNum,value) =>{
  let todo = {
    id: idNum,
    name: value,
    done:false,
  }
  let todos = this.state.todos;
  todos.push(todo);

  this.setState({
    todos : todos
  })
}

  render() { 
    return (
      <div className="App">
        <Header/>
        <TaskAdder onTaskAdded={this.addTask}/>
        <TodoList todos ={this.state.todos}/>
      </div>
    );
  }
}
 
export default App;
