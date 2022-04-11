// una tarea
import React, { Component } from 'react';
import PropTypes from 'prop-types'; // para validar dato
// como flow y typescript ( se pueden usar en vez de PropTypes)

import './Task.css';
// usar estilos desde arch.css

class Task extends Component { // esta class hereda caracteristicas de un compo react

    StyleCompleted() { // estilos usando funcion para modificarlos ej, con condicionales
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'red' : 'blue',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
            // background: '#ea2027',
            // border: 'none',
            // padding: '10px 15px',
            // borderRadius: '50%',
            // cursor: 'pointer',
            // float: 'right'
        }
    } // funcion con estilos

    render() { // pintar datos en una etiqueta, en este caso p
        const { task } = this.props // destructuring para evitar escribir this.props
        // const lineColor = {background: 'gray'}

        // return <p className='red'>
        // return <p style={{background: 'red'}}>
        // return <p style={lineColor}>
        // return <p className="grey"></p>
        return <p style={this.StyleCompleted()}>
            {/* {this.props.task.title} - 
              {this.props.task.description} - 
              {this.props.task.done} - 
              {this.props.task.id} */}
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button style={btnDel} onClick={this.props.delTask.bind(this, task.id)}> x </button>
        </p>
    }
}
// validar
Task.propTypes = {
    task: PropTypes.object.isRequired
} // tipo de dato  q se espera recibir en task ( objeto )

// usar estilos desde un objeto
const btnDel = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    // float: 'right'
}



export default Task