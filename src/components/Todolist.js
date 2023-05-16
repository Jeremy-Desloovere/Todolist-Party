import React from 'react'
import FormAddTask from './FormAddTask';
import CounterTask from './CounterTask';
import TaskList from './TaskList';
import Title from './Title';


const Todolist = () => {
    return (
        <section
            className='todolist'>
            <Title />
            <CounterTask />
            <FormAddTask />
            <TaskList />
        </section>
    )
}

export default Todolist