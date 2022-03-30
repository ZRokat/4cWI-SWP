import React, { Component } from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

class TodoList extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.wrap}>
            <div className={styles.container}>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
            </div>
            </div>
        );
    }
}
 
export default TodoList;