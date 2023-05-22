import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs';
import { useStoreTodoList } from '../storeTodoList';
// import { logo } from '../../public/logo.png';

const Header = () => {
    const addTodolist = useStoreTodoList((state) => state.addTodolist)
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameNewTodolist, setNameNewTodolist] = useState('');
    const [messageError, setMessageError] = useState('');


    const handleAddTodolist = () => {
        if (todoLists.length > 9)
            return setMessageError("Le nombre de todolist maximum a été atteint.");
        if (nameNewTodolist === '')
            return setMessageError("Le nom ne peut pas être vide.");

        setMessageError('');
        addTodolist(nameNewTodolist);
        setIsModalOpen(false);
        setNameNewTodolist('');
    }

    return (
        <header>
            <h1>
                <img
                    className='w-28 inline' src="https://jeremy-desloovere.github.io/Todolist-Party/logo.png" alt='logo' />TODOLIST Party
            </h1>
            <div
                className='buttonNewTodolist'
            >

                <Button
                    variant="contained"
                    onClick={(e) => {
                        setIsModalOpen(true);
                        setMessageError('');
                    }}
                >
                    <BsPlusCircle
                        className='iconAddTodolist' />
                    Nouvelle todolist
                </Button>
            </div>
            <Dialog
                open={isModalOpen}
                onClose={(e) => {
                    setIsModalOpen(false);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Ajout d'une todolist"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Veuillez saisir le nom de la nouvelle liste
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nameTodolist"
                        label="Nouvelle liste"
                        type="text"
                        size="20"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setNameNewTodolist(e.target.value)
                        }}
                        onKeyDown={(evt) => {
                            if (evt.key === 'Enter') {
                                evt.preventDefault();
                                handleAddTodolist();
                            }
                        }}
                    />
                    {
                        messageError &&
                        (
                            <Alert severity="error">{messageError}</Alert>
                        )
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="secondary"
                        onClick={(e) => {
                            setIsModalOpen(false);
                            setMessageError('');
                            setNameNewTodolist('');
                        }}>Annuler</Button>
                    <Button
                        variant="primary"
                        onClick={(e) => { handleAddTodolist() }}
                        autoFocus>
                        Créer
                    </Button>
                </DialogActions>
            </Dialog>
        </header>
    )
}

export default Header