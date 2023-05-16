import React, { useEffect } from 'react'
import { useStore } from '../store';

const CounterTask = () => {

    const counterTaskToDo = useStore((state) => state.taskList.filter((task) => !task.done).length);

    return (
        <p className='counter'>
            <span className='font-bold'> {counterTaskToDo} </span>
            tâche
            {counterTaskToDo > 1 && 's'} en cours.
        </p>

    )
}

export default CounterTask