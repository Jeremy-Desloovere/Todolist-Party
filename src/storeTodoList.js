import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useStoreTodoList = create((set, get) => {

    const storedTodoLists = JSON.parse(localStorage.getItem('todoLists'));

    return {
        //Load the todolists from localstorage, otherwise add the default ones
        todoLists: storedTodoLists || [
            {
                id: 1,
                title: "Todolist n°1",
                color: "bg-darkColor",
                taskList: [
                    {
                        id: 0,
                        label: "Créer une application",
                        done: false,
                    },
                    {
                        id: 1,
                        label: "Tester son fonctionnement",
                        done: false,
                    },
                    {
                        id: 2,
                        label: "Publier!",
                        done: true,
                    },
                ],
            },
            {
                id: 2,
                title: "Todolist n°2",
                color: "bg-darkColor",
                taskList: [
                    {
                        id: 0,
                        label: "Créer une 2eme todolist",
                        done: true,
                    },
                    {
                        id: 1,
                        label: "Rajouter des tâches",
                        done: true,
                    },
                ],
            },
        ],
        /**
         * add a new task
         * @param {number} listId  : id of the current list
         * @param {string} name : new task
         */
        addTask: (listId, name) => {
            const newTask = {
                id: uuidv4(),
                label: name,
                done: false,
            };

            set((state) => ({
                todoLists: state.todoLists.map((list) => {
                    if (list.id === listId) {
                        return {
                            ...list,
                            taskList: [...list.taskList, newTask],
                        };
                    }
                    return list;
                }),
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * update one task's name
         * @param {string} listId : id of the current list
         * @param {string} taskId : id of the current task to update
         * @param {string} newName : new label of a task
         */
        updateTask: (listId, taskId, newName) => {
            set((state) => ({
                todoLists: state.todoLists.map((list) => {
                    if (list.id === listId) {
                        return {
                            ...list,
                            taskList: list.taskList.map((task) => {
                                if (task.id === taskId) {
                                    return {
                                        ...task,
                                        label: newName,
                                    };
                                }
                                return task;
                            }),
                        };
                    }
                    return list;
                }),
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * delete a task
         * @param {string} listId : id of the current list
         * @param {string} taskId : id of the task to delete
         */
        deleteTask: (listId, taskId) => {
            set((state) => ({
                todoLists: state.todoLists.map((list) => {
                    if (list.id === listId) {
                        return {
                            ...list,
                            taskList: list.taskList.filter((task) => task.id !== taskId),
                        };
                    }
                    return list;
                }),
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * mark a task as done/not done
         * @param {string} listId : id of the current list
         * @param {string} taskId : id of the task to mark
         */
        toggleTask: (listId, taskId) => {
            set((state) => ({
                todoLists: state.todoLists.map((list) => {
                    if (list.id === listId) {
                        // console.log(list.id)
                        return {
                            ...list,
                            taskList: list.taskList.map((task) => {
                                if (task.id === taskId) {
                                    return {
                                        ...task,
                                        done: !task.done,
                                    };
                                }
                                return task;
                            }),
                        };
                    }
                    return list;
                }),
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * count number of tasks to do
         * @param {string} listId : id of the current list
         * @returns number of tasks to do
         */
        countTasksToDo: (listId) => {
            const taskList = get().todoLists.find((list) => list.id === listId)?.taskList;
            if (taskList) {
                return taskList.filter((task) => !task.done).length;
            }
            return 0;
        },
        /**
         * count number of tasks of a list 
         * @param {string} listId : id of the current list
         * @returns number of tasks of a list 
         */
        countTasks: (listId) => {
            const taskList = get().todoLists.find((list) => list.id === listId)?.taskList;
            if (taskList) {
                return taskList.length;
            }
            return 0;
        },
        /**
         * change the title of a list
         * @param {string} listId : id of the current list
         * @param {string} title : new title
         */
        setTitle: (listId, title) => {
            set((state) => ({
                todoLists: state.todoLists.map((list) => {
                    if (list.id === listId) {
                        return {
                            ...list,
                            title: title,
                        };
                    }
                    return list;
                }),
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * change the color of a list
         * @param {string} listId : id of the current list
         * @param {string} color : variable tailwind
         */
        setColor: (listId, color) => {
            set((state) => ({
                todoLists: state.todoLists.map((list) => {
                    if (list.id === listId) {
                        console.log(list)
                        return {
                            ...list,
                            color: color,
                        };
                    }
                    return list;
                }),
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * add a todolist
         * @param {string} name  : name of a new todolist
         */
        addTodolist: (name) => {
            const newTodolist = {
                id: uuidv4(),
                title: name,
                color: "bg-darkColor",
                taskList: [
                    {
                        id: uuidv4(),
                        label: "Ma première tâche",
                        done: false,
                    },
                ]
            }

            set((state) => ({
                todoLists: [...state.todoLists, newTodolist],
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * delete a todolist
         * @param {string} listId : id of the current list
         */
        deleteTodolist: (listId) => {
            set((state) => ({
                todoLists: state.todoLists.filter((list) => list.id !== listId)
            }));
            get().saveTodoListsLocalStorage();
        },
        /**
         * save todolists in localstorage
         */
        saveTodoListsLocalStorage: () => {
            localStorage.setItem('todoLists', JSON.stringify(get().todoLists));
        },
        /**
         * load todolists in localstorage
         */
        loadTodoListsLocalStorage: () => {
            const storedTodoLists = JSON.parse(localStorage.getItem('todoLists'));
            if (storedTodoLists) {
                set({ todoLists: storedTodoLists });
            }
        },

    }
})



