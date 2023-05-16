import React, { useState } from 'react'
import { useStore } from '../store'
import { BsTrash3, BsCheckLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';


const TaskList = () => {
    const taskList = useStore((state) => state.taskList)
    const deleteTask = useStore((state) => state.deleteTask)
    const updateTask = useStore((state) => state.updateTask)
    const toggleTask = useStore((state) => state.toggleTask)

    const notDoneTasksList = taskList.filter((task) => !task.done);
    const doneTasksList = taskList.filter((task) => task.done);

    const [editableTaskId, setEditableTaskId] = useState(null);

    const handleLabelClick = (taskId) => {
        setEditableTaskId(taskId);
    };

    const handleLabelChange = (e, taskId) => {
        updateTask(taskId, e.target.value);
    };

    const handleLabelBlur = () => {
        setEditableTaskId(null);
    };


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
                                <p onClick={() => handleLabelClick(task.id)}>
                                    {editableTaskId === task.id ? (
                                        <input
                                            type="text"
                                            value={task.label}
                                            onChange={(e) => handleLabelChange(e, task.id)}
                                            onBlur={handleLabelBlur}
                                            autoFocus
                                            onKeyDown={(evt) => {
                                                if ((evt.key === 'Enter')) {
                                                    handleLabelBlur();
                                                }
                                            }}
                                        />
                                    ) : (
                                        task.label
                                    )}
                                </p>
                                <span
                                    className='flex'>
                                    <BsCheckLg
                                        className='icon'
                                        size="1.5em"
                                        onClick={() => toggleTask(task.id)}
                                    />
                                    <BsTrash3
                                        className='icon '
                                        size="1.5em"
                                        onClick={() => deleteTask(task.id)}
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
                                <p onClick={() => handleLabelClick(task.id)}>
                                    {editableTaskId === task.id ? (
                                        <input
                                            type="text"
                                            value={task.label}
                                            onChange={(e) => handleLabelChange(e, task.id)}
                                            onBlur={handleLabelBlur}
                                            autoFocus
                                        />
                                    ) : (
                                        task.label
                                    )}
                                </p>
                                <span
                                    className='flex'>
                                    <RxCross1
                                        className='icon'
                                        size="1.5em"
                                        onClick={() => toggleTask(task.id)}
                                    />
                                    <BsTrash3
                                        className='icon '
                                        size="1.5em"
                                        onClick={() => deleteTask(task.id)}
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