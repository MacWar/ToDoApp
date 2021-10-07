import React from 'react'
import './Task.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Task(props) {
    const {description,dateDeadline,id}=props.task
    return (
        <tr className="task">
            <td>{description}</td>
            <td>{dateDeadline}</td>
            <td><button onClick={()=>props.completeTask(id)} className="btn btn-success">&#10003;</button> <button onClick={()=>props.deleteTask(id)} className="btn btn-danger">X</button></td>
        </tr>
    )
}
