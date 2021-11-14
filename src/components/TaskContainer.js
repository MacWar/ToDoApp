import Task from './Task'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskContainer.css'

export default function TaskContainer(props) {
    const activeTasks = props.taskList.filter(task => task.isActive);
    const finsishedTasks = props.taskList.filter(task => !task.isActive); 
   
    const activeTaskList = activeTasks.map((task) => {
        return(<Task key={task.id} task={task} deleteTask={props.deleteTask} completeTask={props.completeTask} active={task.isActive}/>)
    })
    const finsishedTasksList = finsishedTasks.map((task) => {
        return(<Task key={task.id} task={task} deleteTask={props.deleteTask} completeTask={props.completeTask} active={task.isActive}/>)
    })
    return (
        <>
            <div className="container">
                <h2 className="to-do-title">Tasks to do</h2>
                {activeTaskList.length > 0 ?
                <table className="table  ">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Deadline</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody >
                        {activeTaskList}
                    </tbody>
                </table>
                : 
                <h3>nothing to do :)</h3>
                }
            </div>
            {finsishedTasksList.length > 0 ?
            <div className="container">
                <React.Fragment>
                    <h2 className="to-do-title">Completed tasks ({finsishedTasksList.length})</h2>
                    <table className="table  ">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Deadline</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody >
                            {finsishedTasksList.slice(0,10)}
                        </tbody>
                    </table>
                </React.Fragment>  
            </div>
             : "" }
        </>
    )
}

