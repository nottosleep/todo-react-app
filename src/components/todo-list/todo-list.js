import React from 'react';
import Task from '../todo-task/todo-task';

import '../todo-list/todo-list.css'

const TaskList = ({ tasks, deleteTask, toggleDone, toggleImportant }) => {

    const allTasks = tasks.map((task) => {
        let { label, taskNum, done, important } = task;

        return (
            <Task
            label={ label }
            key={ taskNum }
            done={ done }
            important={ important }
            deleteTask={ () => deleteTask(taskNum) }
            toggleDone={ () => toggleDone(taskNum) }
            toggleImportant={ () => toggleImportant(taskNum) }
            />
        );
      });

    return (<ul className='todo-list'>{ allTasks }</ul>)
};

export default TaskList;