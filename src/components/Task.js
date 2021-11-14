import React from 'react'
import './Task.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Task(props) {
    const {description, dateDeadline, id, priority} = props.task;
    
    const completeDate = new Date().toLocaleString();
    if(props.active)
        return (
            <tr className="task">
                <td className= {priority===true ? "importantDecription" : "normalDescripton"} >{description}</td>
                <td>{dateDeadline}</td>
                <td>
                    <button onClick={()=>props.completeTask(id)} className="btn btn-success">&#10003;</button> 
                    <button onClick={()=>props.deleteTask(id)} className="btn btn-danger">X</button>
                </td>
            </tr>
        )
    else
    return (
            <tr className="task">
                <td className={priority ? "importantDecription" : ""}>{description}</td>
                <td>{dateDeadline}</td>
                <td>{completeDate}</td>
                <td>
                    <button onClick={()=>props.deleteTask(id)} className="btn btn-danger">X</button>
                </td>
            </tr>
    )
}
