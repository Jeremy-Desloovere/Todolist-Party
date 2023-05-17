import React, { useState } from 'react'
import { useStoreTodoList } from '../../storeTodoList';

const Title = ({ listId }) => {
    const todoLists = useStoreTodoList((state) => state.todoLists)
    const titleTodoList = todoLists.find((list) => list.id === listId)?.title || '';
    const setTitle = useStoreTodoList((state) => state.setTitle)

    const [editableTitle, setEditableTitle] = useState(false);

    const handleLabelChange = (e) => {
        setTitle(listId, e.target.value);
    };

    const handleLabelBlur = () => {
        setEditableTitle(false);
    };

    return (
        <h2
            className='title'
            onClick={() => setEditableTitle(true)}
        >
            {editableTitle ? (
                <input
                    className='bg-gray-700'
                    type="text"
                    value={titleTodoList}
                    onChange={(e) => handleLabelChange(e)}
                    onBlur={handleLabelBlur}
                    autoFocus
                    onKeyDown={(evt) => {
                        if ((evt.key === 'Enter')) {
                            handleLabelBlur();
                        }
                    }}
                />
            ) : (
                titleTodoList
            )}


        </h2>
    )
}

export default Title