import React, { useState } from 'react'
import { useStoreTodoList } from '../../storeTodoList';


const FormAddTask = ({ listId }) => {

    const addTask = useStoreTodoList((state) => state.addTask)

    const [inputValue, setInputValue] = useState('');


    return (
        <div
            className='formadd'>

            <input
                type="text"
                name='inputTask'
                className="formadd-input "
                placeholder="Ajouter une tâche"
                maxLength="42"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(evt) => {
                    if ((evt.key === 'Enter') && (inputValue !== '')) {
                        addTask(listId, inputValue);
                        setInputValue('');

                    }
                }}
            />
            <button
                className="p-3 bg-gray-700 text-white"
                onClick={() => {
                    if (inputValue !== '') {
                        addTask(listId, inputValue);
                        setInputValue('');
                    }
                }}
            >
                Ajouter
            </button>
        </div>

    )
}

export default FormAddTask