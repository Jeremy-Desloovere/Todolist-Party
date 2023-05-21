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
            title="Color"
            className='ColorTodolist'
            onChange={(e) => {
                setColor(listId, e.target.value);
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

    )
}

export default ColorTodolist