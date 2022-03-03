import React, { Component } from "react";
import styles from './superbutton.module.css'
export default class SuperButton extends Component{
    render(){
        return (<div className={ styles.heading }>
            <button className={styles.buttons}>Button</button>
        </div>)
    }
}