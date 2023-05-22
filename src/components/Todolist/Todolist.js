import React, { useState } from 'react'
import FormAddTask from './FormAddTask';
import CounterTask from './CounterTask';
import TaskList from './TaskList';
import { motion } from "framer-motion"
import { useStoreGlobal } from '../../storeGlobal';
import { useStoreTodoList } from '../../storeTodoList';
import HeaderTodolist from './HeaderTodolist';




const Todolist = ({ constraints, listId }) => {
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const colorTodoList = todoLists.find((list) => list.id === listId)?.color || '';


    const zIndexMax = useStoreGlobal((state) => state.zIndexMax);
    const upZindexMax = useStoreGlobal((state) => state.upZindexMax);
    const [zIndex, setZIndex] = useState(1);


    let classNameTodoList = "todolist " + colorTodoList;

    return (
        <motion.div
            drag
            dragConstraints={constraints}
            dragMomentum={false}
            onClick={() => {
                upZindexMax();
                setZIndex(zIndexMax);

            }}
            className={classNameTodoList}
            style={{
                zIndex: zIndex,
            }}
        >
            <HeaderTodolist
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