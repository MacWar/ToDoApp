import TaskSettings from "./TaskSettings";
import TaskContainer from "./TaskContainer";
import React, { Component } from 'react'

export default class App extends Component {
  state ={
    taskList:[
      {
        id:1,
        description:"grać w grę",
        dateDeadline: '2018-02-15',
        priority: false,
        isActive: true,
        dateCompleted:null,
      },
      {
        id:2,
        description:"grać w plansza",
        dateDeadline: '2018-02-15',
        priority: false,
        isActive: true,
        dateCompleted:null,
      }
    ]
  }
  render() {
    return (
        <div className="App">
          <TaskSettings/>
          <TaskContainer taskList={this.state.taskList}/>
        </div>
    )
  }
}
