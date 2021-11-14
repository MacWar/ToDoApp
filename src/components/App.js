import AddTask from "./AddTask";
import TaskContainer from "./TaskContainer";
import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state ={
    taskList:[]
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
      taskList : taskList,
    })
  }

  counter = 1;

  addTask = (description, priority, date) => {
    const task = {
      id: this.counter,
      description: description,
      dateDeadline: date,
      priority: priority,
      isActive: true,
      dateCompleted: null,
    }
    this.counter++;
    this.setState(prevState => ({
      taskList: [...prevState.taskList, task] 
    }))
  }
  render() {
    return (
        <div className="App">
          <AddTask addTaks={this.addTask}/>
          <TaskContainer taskList={this.state.taskList} deleteTask={this.handleDeleteTask} completeTask={this.handleCompleteTask}/>
        </div>
    )
  }
}
