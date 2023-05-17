import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useStoreTodoList = create((set, get) => ({
    todoLists: [
        {
            id: 0,
            taskList: [
                {
                    id: 0,
                    label: "Créer une todolist",
                    done: false,
                },
                {
                    id: 1,
                    label: "Etre satisfait",
                    done: true,
                },
                {
                    id: 2,
                    label: "Apprendre autre techno",
                    done: false,
                },
            ],
        },
        {
            id: 1,
            taskList: [
                {
                    id: 0,
                    label: "Créer une 2eme todolist",
                    done: true,
                },
                {
                    id: 1,
                    label: "Etre doublement satisfait",
                    done: true,
                },
                {
                    id: 2,
                    label: "Apprendre encore une autre techno",
                    done: false,
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

        // updateTask: (listId, taskId, newName) => {
        //     set((state) => ({
        //         todoLists: state.todoLists.map((list) => {
        //             if (list.id === listId) {
        //                 return {
        //                     ...list,
        //                     taskList: list.taskList.map((task) => {
        //                         if (task.id === taskId) {
        //                             return {
        //                                 ...task,
        //                                 label: newName,
        //                             };
        //                         }
        //                         return task;
        //                     }),
        //                 };
        //             }
        //             return list;
        //         }),
        //     }));
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
}))



