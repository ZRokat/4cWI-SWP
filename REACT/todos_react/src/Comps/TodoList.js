import React, { Component } from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

class TodoList extends Component {
    
    getAllTodos(){
        let widgets = [];
        this.props.todos.forEach(todo => {
            widgets.push(<Todo idNum={todo.id} title={todo.name} isDone = {todo.done}/>)
        });
        return widgets;
    }

    render() { 
        return (
            <div className={styles.wrap}>
            <div className={styles.container}>
                {this.getAllTodos()}
            </div>
            </div>
        );
    }
}
 
export default TodoList;