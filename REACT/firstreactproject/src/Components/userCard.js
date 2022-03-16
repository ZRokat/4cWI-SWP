import React, { Component } from "react";
import styles from './userCard.module.css'

export default class UserCard extends Component{
    render(){
        return(
            <div className={styles.Wrap}>
                <div className={styles.Pic}>
                </div>
                <div className={styles.Info}>
                    <div className={styles.Name}>
                        <p>Eric Ye</p>
                    </div>
                    <div className={styles.Job}>
                        <p>Dark mage, Destroyer of Worlds</p>
                    </div>
                </div>

            </div>
        )
    }
}