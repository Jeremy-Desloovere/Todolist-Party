import React from 'react'
import FormAddTask from './FormAddTask';
import CounterTask from './CounterTask';
import TaskList from './TaskList';
import Title from './Title';
import { motion } from "framer-motion"



const Todolist = () => {
    return (
        <motion.div
            drag
            // dragConstraints={{
            //     top: -50,
            //     left: -50,
            //     right: 50,
            //     bottom: 50,
            // }}
            className='todolist'>
            <Title />
            <CounterTask />
            <FormAddTask />
            <TaskList />
        </motion.div>
    )
}

export default Todolist