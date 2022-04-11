import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component { // esta class hereda caracteristicas de un compo react
    render() {
        return this.props.tasks.map(task =>
            <Task
                task={task}
                key={task.id}
                delTask={this.props.delTask}
                checkDone={this.props.checkDone}
            />) // recibe datos
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks // exporta todo el compo Tasks