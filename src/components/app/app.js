import React, { Component } from 'react';

import Header from '../header/header';
import Counter from '../counter/counter';
import TaskList from '../todo-list/todo-list';
import AddPanel from '../add-panel/add-panel';

import './app.css'


class App extends Component {

  state = {
    tasks: [
       {taskNum: 1,
        label: 'Welcome to the todo react app',
        important: false,
        done: false}
    ]
  };

  count = 2;

  createTask(label, count) {
    return {
      label: label,
      taskNum: ++count,
      important: false,
      done: false
    }
  };

  addTask = () => {
    this.setState((state) => {
      let addPanelValue = document.getElementById('todo-add-panel').value;
      let newTask = new this.createTask(addPanelValue, ++this.count);
      addPanelValue = '';
      return { tasks: [...state.tasks, newTask] };
    });
  };

  deleteTask = (taskNum) => {
    this.setState((state) => {
      let index = state.tasks.findIndex((el) => el.taskNum === taskNum);
      let tasks = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index + 1)
      ];

      return { tasks };
    });
  };

  toggleProp = (array, taskNum, prop) => {
    let index = array.findIndex((el) => el.taskNum === taskNum);
    let task = array[index];
    let propValue = !task[prop];

    let newTask = { ...array[index], [prop]: propValue };

    return [
      ...array.slice(0, index),
      newTask,
      ...array.slice(index + 1)
    ];
  };

  toggleDone = (taskNum) => {
    this.setState((state) => {
      let tasks = this.toggleProp(state.tasks, taskNum, 'done');
      return { tasks };
    });
  };

  toggleImportant = (taskNum) => {
    this.setState((state) => {
      let tasks = this.toggleProp(state.tasks, taskNum, 'important');
      return { tasks };
    });
  };


  render() {
    return (
      <div className='app'>
        <div className='header'>
          <Header/>
          <Counter count={ this.state.tasks.length } />
        </div>

        <TaskList
          id='todo-task-list'
          tasks={ this.state.tasks }
          deleteTask={ this.deleteTask }
          toggleDone={ this.toggleDone }
          toggleImportant= { this.toggleImportant }
        />

        <div className='footer'>
          <AddPanel
            id='todo-add-panel'
            addTask={ this.addTask }
          />
        </div>
      </div>
    );
  };
};

export default App;