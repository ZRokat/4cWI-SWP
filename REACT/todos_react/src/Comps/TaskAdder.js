import React, { Component } from 'react'

class TaskAdder extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue:"",
            idNumber:0
        }
    }

    addTask = () =>{
        this.props.onTaskAdded(this.state.inputValue)
    }

    addNum = () =>{
        this.props.onTaskAdded(this.state.idNumber+1)
    }

    handleChange = (event) =>{
        this.setState({
            inputValue : event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" value = {this.state.value} onChange={this.handleChange}/>
                <button onClick={this.addTask}>Save</button>
            </div>
        );
    }
}

export default TaskAdder

