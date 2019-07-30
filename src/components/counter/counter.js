import React from 'react';

import './counter.css';

const Counter = ({ count, filterDone }) => {
    return(
        <div className='todo-count'>
            <div className='todo-count-cell'>tasks:  { count }</div>
        </div>)
};

export default Counter;