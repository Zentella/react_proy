import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'

// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'

// console.log(tasks)

class App extends Component {

  state = {
    tasks: tasks
  } // contienes tareas de datos de prueba (json)

  addTask = (title, description) => {
    console.log('agregando...')
    // console.log(title, description)

    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    // console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    }) // agregar todo y newTask 2:30 video fazt

  }

  delTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    // console.log(newTasks)
    this.setState({ tasks: newTasks })
    // almacenar en alguna basedato
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  render() {
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks
        tasks={this.state.tasks}
        delTask={this.delTask}
        checkDone={this.checkDone}
      />
      <Posts/>
      
      {/*  pasar metodos a travez de componentes, se pasa como props.. se hace mas facil con el uso de REDUX */}
      {/* {5 + 5} */}
      {/* {this.state.tasks.map(elem => <h1>{elem.title}</h1>)} */}
      { }
      {/* iteracion de datos tasks.json */}
    </div>
  }
}

export default App;
