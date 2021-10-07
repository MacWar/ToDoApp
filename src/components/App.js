import TaskSettings from "./TaskSettings";
import TaskContainer from "./TaskContainer";
import React, { Component } from 'react'
import "./App.css"

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
  handleDeleteTask=(id)=>{
    const taskList=[...this.state.taskList]
    const index=taskList.findIndex(item=>taskList.id===id)
    taskList.splice(index,1)
    this.setState({
      taskList:taskList,
    })
  }
  handleCompleteTask=(id)=>{
    const taskList=[...this.state.taskList]
    taskList.forEach(item=>{
      if(item.id===id){
        item.isActive=false
        item.dateCompleted=new Date().getTime();
      }
    })
    this.setState({
      taskList:taskList,
    })
  }
  render() {
    return (
        <div className="App">
          <TaskSettings/>
          <TaskContainer taskList={this.state.taskList} deleteTask={this.handleDeleteTask} completeTask={this.handleCompleteTask}/>
        </div>
    )
  }
}
