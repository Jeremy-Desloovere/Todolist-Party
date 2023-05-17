import React, { useState } from 'react'
import FormAddTask from './Todolist/FormAddTask';
import CounterTask from './Todolist/CounterTask';
import TaskList from './Todolist/TaskList';
import Title from './Todolist/Title';
import { motion } from "framer-motion"
import { useStoreGlobal } from '../storeGlobal';
import ColorTodolist from './Todolist/ColorTodolist';



const Todolist = ({ constraints, listId }) => {
    const zIndexMax = useStoreGlobal((state) => state.zIndexMax);
    const upZindexMax = useStoreGlobal((state) => state.upZindexMax);
    const [zIndex, setZIndex] = useState(1);




    //TODO! : pb de Zindex à résoudre
    return (
        <motion.div
            drag
            dragConstraints={constraints}
            dragMomentum={false}
            onDragStart={() => {
                upZindexMax();
                setZIndex(zIndexMax);

            }}
            className='todolist'
            style={{
                zIndex: zIndex,
            }}
        >
            <ColorTodolist />
            <Title
                listId={listId}
            />
            <CounterTask
                listId={listId}
            />
            <FormAddTask
                listId={listId}
            />
            <TaskList
                listId={listId}
            />
        </motion.div>
    )
}

export default Todolist