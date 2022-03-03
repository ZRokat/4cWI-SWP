import React, { Component } from "react";
import Styles from './List.module.css'

export default class List extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Tomaten</li>
                    <li>Erdbeeren</li>
                    <li>Ballz</li>
                    <li>$19 Fortnite Card</li>
                </ul>
            </div>
        )
    }
}