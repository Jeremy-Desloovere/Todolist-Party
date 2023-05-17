import React, { useRef } from 'react'
import Todolist from './Todolist';


const DragZone = () => {
    const constraintsRef = useRef(null)

    return (
        <main ref={constraintsRef}>
            <Todolist
                constraints={constraintsRef} />
        </main>
    )
}

export default DragZone;