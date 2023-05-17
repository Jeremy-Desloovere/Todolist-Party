import React from 'react'
import { useStoreTodoList } from '../../storeTodoList';

const CounterTask = ({ listId }) => {

    const countTasksToDo = useStoreTodoList((state) => state.countTasksToDo);
    const counterTaskToDo = countTasksToDo(listId);

    return (
        <p className='counter'>
            <span className='font-bold'> {counterTaskToDo} </span>
            tâche
            {counterTaskToDo > 1 && 's'} en cours.
        </p>

    )
}

export default CounterTask