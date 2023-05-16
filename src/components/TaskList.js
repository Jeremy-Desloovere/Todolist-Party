import React from 'react'
import { useStore } from '../store'
import { BsTrash3, BsCheckLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';


const TaskList = () => {
    const taskList = useStore((state) => state.taskList)
    const deleteTask = useStore((state) => state.deleteTask)
    const toggleTask = useStore((state) => state.toggleTask)

    const notDoneTasksList = taskList.filter((task) => !task.done);
    const doneTasksList = taskList.filter((task) => task.done);

    return (
        <nav
            className='w-full	'>
            <ul>
                {
                    notDoneTasksList.map((task) => {

                        return (
                            <li
                                key={task.id}
                                className='notdonetask'>
                                <p>{task.label}</p>
                                <span
                                    className=''>
                                    <BsTrash3
                                        className='ml-3 inline cursor-pointer '
                                        size="1.5em"
                                        onClick={() => deleteTask(task.id)}
                                    />
                                    <BsCheckLg
                                        className='ml-3 inline cursor-pointer'
                                        size="1.5em"
                                        onClick={() => toggleTask(task.id)}
                                    />


                                </span>
                            </li>
                        )
                    })}
            </ul>

            <ul>
                {
                    doneTasksList.map((task) => {

                        return (
                            <li
                                key={task.id}
                                className='donetask'>
                                <p >{task.label}</p>
                                <span
                                    className=''>
                                    <BsTrash3
                                        className='ml-3 inline cursor-pointer '
                                        size="1.5em"
                                        onClick={() => deleteTask(task.id)}
                                    />

                                    <RxCross1
                                        className='ml-3 inline cursor-pointer'
                                        size="1.5em"
                                        onClick={() => toggleTask(task.id)}
                                    />


                                </span>
                            </li>
                        )
                    })}
            </ul>
        </nav>
    )
}

export default TaskList