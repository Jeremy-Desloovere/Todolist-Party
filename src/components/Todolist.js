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
            //     left: 0,
            //     right: 300,
            //     top: 0,
            //     bottom: 0,
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