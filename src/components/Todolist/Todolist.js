import React, { useState } from 'react'
import FormAddTask from './FormAddTask';
import CounterTask from './CounterTask';
import TaskList from './TaskList';
import { motion } from "framer-motion"
import { useStoreGlobal } from '../../storeGlobal';
import { useStoreTodoList } from '../../storeTodoList';
import HeaderTodolist from './HeaderTodolist';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';




const Todolist = ({ constraints, listId }) => {
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const colorTodoList = todoLists.find((list) => list.id === listId)?.color || '';


    const zIndexMax = useStoreGlobal((state) => state.zIndexMax);
    const upZindexMax = useStoreGlobal((state) => state.upZindexMax);
    const [zIndex, setZIndex] = useState(1);


    let classNameTodoList = "todolist " + colorTodoList;

    return (
        <>
            {
                !isMobile ?
                    (
                        <motion.div
                            drag
                            dragConstraints={constraints}
                            dragMomentum={false}
                            className={classNameTodoList}
                            onClick={() => {
                                upZindexMax();
                                setZIndex(zIndexMax);

                            }}
                            style={{
                                zIndex: zIndex,
                            }}
                        >
                            <HeaderTodolist listId={listId} />
                            <CounterTask listId={listId} />
                            <FormAddTask listId={listId} />
                            <TaskList listId={listId} />
                        </motion.div>

                    ) : (

                        <div
                            className={classNameTodoList}
                        >
                            <HeaderTodolist listId={listId} />
                            <CounterTask listId={listId} />
                            <FormAddTask listId={listId} />
                            <TaskList listId={listId} />
                        </div>
                    )
            }


        </>
    )
}

export default Todolist