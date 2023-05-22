import React, { useState } from 'react'
import { BsTrash3, BsCheckLg } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { useStoreTodoList } from '../../storeTodoList';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const TaskList = ({ listId }) => {
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const taskList = todoLists.find((list) => list.id === listId)?.taskList || [];



    const deleteTask = useStoreTodoList((state) => state.deleteTask)
    const updateTask = useStoreTodoList((state) => state.updateTask)
    const toggleTask = useStoreTodoList((state) => state.toggleTask)

    const notDoneTasksList = taskList.filter((task) => !task.done);
    const doneTasksList = taskList.filter((task) => task.done);

    const [editableTaskId, setEditableTaskId] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [saveTaskName, setSaveTaskName] = useState('');

    const handleLabelClick = (taskId, label) => {
        setEditableTaskId(taskId);
        setSaveTaskName(label);
    };

    const handleLabelChange = (e, taskId) => {
        updateTask(listId, taskId, e.target.value);
    };

    const handleLabelBlur = (taskId, label) => {
        if (label === '') {
            setMessageError("La tâche ne peut pas être vide.");
            updateTask(listId, taskId, saveTaskName);
            setEditableTaskId(taskId);
        }
        else {
            setEditableTaskId(false);
        };
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
                                <p onClick={() => handleLabelClick(task.id, task.label)}>
                                    {editableTaskId === task.id ? (
                                        <input
                                            type="text"
                                            value={task.label}
                                            onChange={(e) => {
                                                handleLabelChange(e, task.id)
                                            }}
                                            onBlur={() => handleLabelBlur(task.id, task.label)}
                                            maxLength="25"
                                            autoFocus
                                            onKeyDown={(evt) => {
                                                if ((evt.key === 'Enter')) {
                                                    evt.preventDefault();
                                                    handleLabelBlur(task.id, task.label);
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
                                <p onClick={() => handleLabelClick(task.id, task.label)}>
                                    {editableTaskId === task.id ? (
                                        <input
                                            type="text"
                                            value={task.label}
                                            onChange={(e) => handleLabelChange(e, task.id)}
                                            onBlur={() => handleLabelBlur(task.id, task.label)}
                                            maxLength="40"
                                            autoFocus
                                            onKeyDown={(evt) => {
                                                if ((evt.key === 'Enter')) {
                                                    evt.preventDefault();
                                                    handleLabelBlur(task.id, task.label);
                                                }
                                            }}
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
            <Dialog
                open={!!messageError}
                onClose={(e) => {
                    setMessageError('');
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Avertissement"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            messageError &&
                            (
                                <Alert severity="error">{messageError}</Alert>
                            )
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="primary"
                        onClick={(e) => {
                            setMessageError('');
                        }}
                        autoFocus>
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </nav>
    )
}

export default TaskList