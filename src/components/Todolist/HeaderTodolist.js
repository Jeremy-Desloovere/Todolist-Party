import React, { useState } from 'react'
import ColorTodolist from './ColorTodolist'
import Title from './Title'
import { useStoreTodoList } from '../../storeTodoList';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const HeaderTodolist = ({ listId }) => {
    const deleteTodolist = useStoreTodoList((state) => state.deleteTodolist)
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div
            className='headerTodolist'>
            <ColorTodolist
                listId={listId}
            />
            <Title
                listId={listId}
            />
            <AiOutlineCloseCircle
                className='closeTodolist'
                onClick={(e) => {
                    setIsModalOpen(true);
                }}
                color='white'

            />

            <Dialog
                open={isModalOpen}
                onClose={(e) => {
                    setIsModalOpen(false);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Voulez-vous supprimer la todolist ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Attention, fermer cette todolist entrainera la suppression de ses tâches. Souhaitez-vous continuer?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="secondary"
                        onClick={(e) => {
                            setIsModalOpen(false);
                        }}>Annuler</Button>
                    <Button variant="primary"
                        onClick={(e) => {
                            deleteTodolist(listId)
                            setIsModalOpen(false);
                        }}
                        autoFocus>
                        Supprimer
                    </Button>
                </DialogActions>



            </Dialog>
        </div>
    )
}

export default HeaderTodolist