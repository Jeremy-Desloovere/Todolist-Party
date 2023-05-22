import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useStoreTodoList = create((set, get) => ({
    todoLists: [
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
    },
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
    },

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
    },
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
    },
    countTasksToDo: (listId) => {
        const taskList = get().todoLists.find((list) => list.id === listId)?.taskList;
        if (taskList) {
            return taskList.filter((task) => !task.done).length;
        }
        return 0;
    },
    countTasks: (listId) => {
        const taskList = get().todoLists.find((list) => list.id === listId)?.taskList;
        if (taskList) {
            return taskList.length;
        }
        return 0;
    },

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
    },
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
    },

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
    },
    deleteTodolist: (listId) => {
        set((state) => ({
            todoLists: state.todoLists.filter((list) => list.id !== listId)
        }));
    },
}))



