import React from 'react';

import deleteIcon from './delete-icon.png';
import importantIcon from './important-icon.png';

import '../todo-task/todo-task.css'

const Task = ({ label, taskNum, deleteTask, toggleDone, toggleImportant, done, important }) => {
    let classList = 'todo-task';

    if (done) {
        classList += ' done';
    }
    if (important) {
        classList += ' important';
    }

    return (
        <li
        key={ taskNum }
        className={ classList }>
            <div onClick= { toggleDone } className='todo-task-label'>{ label }</div>
            <div>
                <span onClick={ toggleImportant } className='todo-important-btn'>
                    <img src={ importantIcon } alt={"logo"}/>
                </span>
                <span onClick={ deleteTask }  className='todo-delete-btn'>
                    <img src={ deleteIcon } alt={"logo"}/>
                </span>
            </div>
        </li>
    );
};

export default Task;