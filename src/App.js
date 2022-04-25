import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // usar Router
import './App.css';
import tasks from './sample/tasks.json'
// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
// import Posts from './components/Posts'
// console.log(tasks)
class App extends Component {

  state = {
    tasks: tasks
  } // contienes tareas de datos de prueba (json)

  // agregar
  addTask = (title, description) => {
    console.log('agregando...')

    if (this.newId > 0) {
      this.newId = this.newId + 1

    } else {
      alert()
      this.newId = tasks[this.state.tasks.length - 1].id + 1
    }
    console.log(' newId ', this.newId)

    const newTask = {
      title: title,
      description: description,
      id: this.newId
    }

    console.log(' new tasks ', newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    }) // agregar todo y newTask 2:30 video fazt
    console.log('tasks ', tasks)

  }

  // borrar
  delTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    console.log(newTasks)
    this.setState({ tasks: newTasks })
    // almacenar en alguna basedato
  }

  // hecho
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  // mostrar
  render() { // es lo ultimo q se pone para q dibuje en pantalla
    return <>
      <div>
        {/* componentes y props */}
        <TaskForm addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          delTask={this.delTask}
          checkDone={this.checkDone}
        />
      </div>
      {/* <Router>

        <Link to='/' >Home</Link>
        <br/>
        <Link to='/posts' >Posts</Link>
        </Router>
        <Route exact path='/' render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              delTask={this.delTask}
              checkDone={this.checkDone}
            />
          </div>
        }} >
        </Route>
        <Route path='/posts' component={Posts} />
      </Router>

      {/*  pasar metodos a travez de componentes, se pasa como props.. se hace mas facil con el uso de REDUX */}
      {/* {5 + 5} */}
      {/* {this.state.tasks.map(elem => <h1>{elem.title}</h1>)} */}
      { }
      {/* iteracion de datos tasks.json */}
    </>
  }
}

export default App;
