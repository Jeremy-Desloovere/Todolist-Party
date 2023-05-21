import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs';
import { useStoreTodoList } from '../storeTodoList';

const Header = () => {
    const addTodolist = useStoreTodoList((state) => state.addTodolist)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameNewTodolist, setNameNewTodolist] = useState('');



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
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="secondary"
                        onClick={(e) => {
                            setIsModalOpen(false);
                        }}>Annuler</Button>
                    <Button
                        variant="primary"
                        onClick={(e) => {
                            if (nameNewTodolist !== '') {
                                addTodolist(nameNewTodolist);
                                setIsModalOpen(false);
                            }
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