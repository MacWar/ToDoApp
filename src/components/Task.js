import React from 'react'
import './Task.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Task(props) {
    const {description,dateDeadline}=props.task
    return (
        <tr className="task">
            <td>{description}</td>
            <td>{dateDeadline}</td>
            <td><button className="btn btn-success">&#10003;</button> <button className="btn btn-danger">X</button></td>
            
        </tr>
    )
}
