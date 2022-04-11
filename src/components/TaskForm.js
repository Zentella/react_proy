import React, { Component } from 'react';

export default class TaskForm extends Component { // esta class hereda caracteristicas de un compo react

    state = {
        title: '',
        description: ''
    } // creando estado para 2 var

    botonForm = (ev) => {
        // console.log('enviando...')
        // console.log(ev)
        // console.log(this.state) // muestra estado de lo q se escribió
        this.props.addTask(this.state.title,this.state.description )
        ev.preventDefault() // prevenir recarga de pag
    }

    // func reutilizada (input y textarea)
    escuchar = (ev) => {
        console.log(ev.target.name, ev.target.value)
        this.setState({
            [ev.target.name] : ev.target.value
        }) // metodo react
    }

    render() {
        
        // console.log(this.props)
        // this.props.addTask('titulo 1' , 'descripcion 1')
        return (
            <form onSubmit={this.botonForm}>
                <input type='text'
                    name='title'
                    placeholder='Ingrese tarea'
                    onChange={this.escuchar}
                    value={this.state.title} />
                <br/>
                <br/>
                <textarea
                    name='description'
                    placeholder='descripción'
                    onChange={this.escuchar}
                    value={this.state.description}></textarea>
                {/* <button type='submit'>Guardar</button> */}
                <input type='submit' />
            </form>
        )
    }
}

// export default TaskForm // exporta todo el compo TaskForm (exportado arriba)