import React, { Component } from 'react'
import './AddTask.css'
export default class AddTask extends Component {
    state = {
        description : '',
        priorityCheckboxValue : false,
        date : new Date().toISOString().slice(0,10),
    }
    handleDate = (e) => {
        this.setState({
            date : e.target.value, 
        })
    } 

    handleDescription = (e) => {
        this.setState({
            description : e.target.value
        })
        
    }

    handleCheckPrioroty = (e) => {
        this.setState({
            priorityCheckboxValue : e.target.checked,
        })
    }

    handleButtonAddTask = (e) => {
        const {description, priorityCheckboxValue, date} = this.state;
        if(description.length > 0){
            this.props.addTaks(description, priorityCheckboxValue, date);
            this.setState({
                description : "",
                priorityCheckboxValue : "",
                date : new Date().toISOString().slice(0,10),
            })
        }
        else {
            alert("No task description given")
        }
    }

    render() {
        const minimalDate = new Date().toISOString().slice(0,10); 
        return (
            <div className="container">
                <h2>Add Task</h2>
                <div className="addTaskForm">
                    <input type="text" className="form-control" placeholder="Task decription" value={this.state.description} onChange={this.handleDescription}/>
                    <div className="form-group">
                        <input type="checkbox" className="form-check-label" id="priority" checked={this.state.priorityCheckboxValue} onChange={this.handleCheckPrioroty}/>
                        <label className="form-check-label" htmlFor="priority">Important</label>
                    </div>
                    <label htmlFor="deadline">Deadline: </label>
                    <input type="date" id="deadline" value={this.state.date} min={minimalDate} onChange={this.handleDate} />
                    <button onClick={this.handleButtonAddTask}>Dodaj</button>
                </div>
            </div>
        )
    }
}
