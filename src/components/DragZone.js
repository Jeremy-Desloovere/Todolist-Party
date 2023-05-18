import React, { useRef } from 'react'
import Todolist from './Todolist';


const DragZone = () => {
    const constraintsRef = useRef(null)

    return (
        <main
            ref={constraintsRef}>
            <Todolist
                constraints={constraintsRef}
                listId={1}
            />
            <Todolist
                constraints={constraintsRef}
                listId={2}
            />


        </main>
    )
}

export default DragZone;