import React, { Component } from 'react'
import styles from './Todo.module.css'
import { IoBonfireOutline } from "react-icons/io5";


class Todo extends Component {
    state = { }
    render(){
        return(
            <div className={styles.container}>
                <div>{this.props.idNum}</div>
                <div>{this.props.title}</div>
                <div>{this.props.isDone}</div>
                <div><IoBonfireOutline className={styles.icon}/></div>
            </div>
        );
    }
}

export default Todo