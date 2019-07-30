import React from 'react';

import './add-panel.css'

const AddPanel = ({ addTask, id }) => {

    return (
        <div className='todo-add-panel-block'>
            <input type='text' className='todo-add-panel' id={ id } />
            <button className='todo-add-btn' onClick={ addTask }>></button>
        </div>
    )
}

export default AddPanel;