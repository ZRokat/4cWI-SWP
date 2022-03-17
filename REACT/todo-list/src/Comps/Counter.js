import React, { Component } from "react";
import styles from './Counter.module.css';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count:0}
    }

    render() {
        return(
            <div>
                <h1 className={styles.h1}>Count</h1>
                <p SclassName={styles.p}>{this.state.count}</p>
            </div>

        );
    }
}