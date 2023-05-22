import React, { useState } from 'react'
import { useStoreTodoList } from '../../storeTodoList';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const FormAddTask = ({ listId }) => {

    const addTask = useStoreTodoList((state) => state.addTask)
    const countTasks = useStoreTodoList((state) => state.countTasks)

    const [inputValue, setInputValue] = useState('');
    const [messageError, setMessageError] = useState('');


    const handleAddTask = () => {
        if (inputValue === '') return setMessageError("La tâche ajoutée est vide.")
        if (countTasks(listId) > 19) return setMessageError("Le nombre de tâches maximum a été atteint.")

        addTask(listId, inputValue);
        setInputValue('');
    }



    return (
        <div
            className='formadd'>

            <input
                type="text"
                name='inputTask'
                className="formadd-input "
                placeholder="Ajouter une tâche"
                maxLength="40"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(evt) => {
                    if (evt.key === 'Enter') {
                        evt.preventDefault();
                        handleAddTask();
                    }
                }}
            />
            <button
                className="p-3 bg-gray-700 text-white"
                onClick={() => { handleAddTask() }}
            >
                Ajouter
            </button>

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
        </div>

    )
}

export default FormAddTask