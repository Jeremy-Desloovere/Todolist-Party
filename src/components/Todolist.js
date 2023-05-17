import React from 'react'
import FormAddTask from './FormAddTask';
import CounterTask from './CounterTask';
import TaskList from './TaskList';
import Title from './Title';
import { motion } from "framer-motion"



const Todolist = ({ constraints }) => {
    return (
        <motion.div
            drag
            dragConstraints={constraints}
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