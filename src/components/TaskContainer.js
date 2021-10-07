import Task from './Task'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskContainer.css'

export default function TaskContainer(props) {
    const taskList=props.taskList.map((task) => {
        return(<Task key={task.id} task={task} deleteTask={props.deleteTask} completeTask={props.completeTask}/>)
    })
    
    return (
        <div className="container">
            <h2 className="to-do-title">Tasks to do</h2>
            <table className="table  ">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody >
                    {taskList}
           
                </tbody>
            </table>
                
        </div>
    )
}

