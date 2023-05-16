import React, { useState } from 'react'
import { useStore } from '../store'


const FormAddTask = () => {

    const addTask = useStore((state) => state.addTask)

    const [inputValue, setInputValue] = useState('');


    return (
        <div
            className='formadd'>

            <input
                type="text"
                name='inputTask'
                className="formadd-input "
                placeholder="Ajouter une tâche"
                maxlength="50"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(evt) => {
                    if ((evt.key === 'Enter') && (inputValue !== '')) {
                        addTask(inputValue);
                        setInputValue('');

                    }
                }}
            />
            <button
                className="p-3 bg-gray-700 text-white"
                onClick={() => {
                    if (inputValue !== '') {
                        addTask(inputValue);
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