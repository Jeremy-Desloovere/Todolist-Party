import React from 'react'
import { useStoreTodoList } from '../../storeTodoList'

const ColorTodolist = ({ listId }) => {
    const setColor = useStoreTodoList((state) => state.setColor)

    const colorOptions = [
        { colorClass: 'bg-btnBlue', icon: "🔵" },
        { colorClass: 'bg-btnGreen', icon: "🟢" },
        { colorClass: 'bg-btnRed', icon: "🔴" },
        { colorClass: 'bg-btnPurple', icon: "🟣" },
        { colorClass: 'bg-darkColor', icon: "⚫" },
    ];



    return (
        <select
            id="select"
            className="divColorBtn"
            title="Color"
            onChange={(e) => {
                const selectedColor = e.target.value;
                setColor(listId, selectedColor);
            }}>
            {colorOptions.map((option) => (
                <option
                    value={option.colorClass}
                    key={option.colorClass}
                >
                    {option.icon}
                </option>
            ))}
        </select>

        /* <div
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
</div> */
    )
}

export default ColorTodolist