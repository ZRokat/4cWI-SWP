import React, { Component } from 'react'
import styles from './Todo.module.css'

class Todo extends Component {
    state = { }
    render(){
        return(
            <div className={styles.container}>
                <div>Einkaufen</div>
                <div>ICon</div>
            </div>
        );
    }
}

export default Todo