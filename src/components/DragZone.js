import React, { useRef } from 'react'
import Todolist from './Todolist/Todolist';
import { useStoreTodoList } from '../storeTodoList';



const DragZone = () => {
    const constraintsRef = useRef(null)
    const todoLists = useStoreTodoList((state) => state.todoLists)


    return (
        <main
            ref={constraintsRef}>
            {
                todoLists.map((todoList) => {
                    return (
                        <Todolist
                            key={todoList.id}
                            listId={todoList.id}
                            constraints={constraintsRef}
                        />
                    )
                })
            }
        </main>
    )
}

export default DragZone;