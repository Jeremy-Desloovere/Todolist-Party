import React from 'react'
import { useStoreTodoList } from '../../storeTodoList'

const ColorTodolist = ({ listId }) => {
    const setColor = useStoreTodoList((state) => state.setColor)
    console.log(listId)

    return (
        <div
            className='divColorBtn'>
            <button
                className='colorBtn bg-btnBlue'
                onClick={() => setColor(listId, "bg-btnBlue")}></button>
            <button
                className='colorBtn bg-btnGreen'
                onClick={() => setColor(listId, "bg-btnGreen")}></button>
            <button
                className='colorBtn bg-btnGray'
                onClick={() => setColor(listId, "bg-btnGray")}></button>
            <button
                className='colorBtn bg-btnRed'
                onClick={() => setColor(listId, "bg-btnRed")}></button>
            <button
                className='colorBtn bg-btnPink'
                onClick={() => setColor(listId, "bg-btnPink")}></button>
            <button
                className='colorBtn bg-btnYellow'
                onClick={() => setColor(listId, "bg-btnYellow")}></button>
            <button
                className='colorBtn bg-darkColor'
                onClick={() => setColor(listId, "bg-darkColor")}></button>
        </div>
    )
}

export default ColorTodolist