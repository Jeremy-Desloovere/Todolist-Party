import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs';
import { useStoreTodoList } from '../storeTodoList';

const Header = () => {
    const addTodolist = useStoreTodoList((state) => state.addTodolist)
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameNewTodolist, setNameNewTodolist] = useState('');
    const [messageError, setMessageError] = useState('');



    return (
        <header>
            <h1>
                <img
                    className='w-28 inline' src="/logo.png" alt='logo' />TODOLIST Party
            </h1>
            <div
                className='buttonNewTodolist'
            >

                <Button
                    variant="contained"
                    onClick={(e) => {
                        setIsModalOpen(true);
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
                        label="Nouveau Titre"
                        type="text"
                        size="20"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setNameNewTodolist(e.target.value)
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
                        onClick={(e) => {
                            if (todoLists.length > 9)
                                return setMessageError("Le nombre de todolist maximum a été atteint.");
                            if (nameNewTodolist === '')
                                return setMessageError("Le nom ne peut pas être vide.");

                            setMessageError('');
                            addTodolist(nameNewTodolist);
                            setIsModalOpen(false);
                            setNameNewTodolist('');
                        }}
                        autoFocus>
                        Créer
                    </Button>
                </DialogActions>
            </Dialog>
        </header>
    )
}

export default Header