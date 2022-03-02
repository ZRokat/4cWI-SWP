import React,{ Component } from "react";
import SuperButton from "./superbutton";
import styles from './ButtonRow.module.css';
export default class ButtonRow extends Component{
    render(){
        return(
        <div className={styles.row}>
            <SuperButton/>
            <SuperButton/>
            <SuperButton/>
            <SuperButton/>
        </div>
        )
    }
}