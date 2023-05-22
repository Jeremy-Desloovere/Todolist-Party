import React, { useState } from 'react'
import { BsTrash3, BsCheckLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { useStoreTodoList } from '../../storeTodoList';


const TaskList = ({ listId }) => {
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const taskList = todoLists.find((list) => list.id === listId)?.taskList || [];



    const deleteTask = useStoreTodoList((state) => state.deleteTask)
    const updateTask = useStoreTodoList((state) => state.updateTask)
    const toggleTask = useStoreTodoList((state) => state.toggleTask)

    const notDoneTasksList = taskList.filter((task) => !task.done);
    const doneTasksList = taskList.filter((task) => task.done);

    const [editableTaskId, setEditableTaskId] = useState(null);

    const handleLabelClick = (taskId) => {
        setEditableTaskId(taskId);
    };

    const handleLabelChange = (e, taskId) => {
        updateTask(listId, taskId, e.target.value);
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
                                            maxLength="25"
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
                                        onClick={() => toggleTask(listId, task.id)}
                                    />
                                    <BsTrash3
                                        className='icon '
                                        size="1.5em"
                                        onClick={() => deleteTask(listId, task.id)}
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
                                            maxLength="40"
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
                                        onClick={() => toggleTask(listId, task.id)}
                                    />
                                    <BsTrash3
                                        className='icon '
                                        size="1.5em"
                                        onClick={() => deleteTask(listId, task.id)}
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