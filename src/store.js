import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useStore = create((set, get) => ({
    taskDone: [],
    taskList: [
        {
            id: 0,
            label: "Créer une todolist",
            done: false,
        },
        {
            id: 1,
            label: "Tester les fonctionnalités",
            done: false,
        },
        {
            id: 2,
            label: "Apprendre une nouvelle techno",
            done: true,
        },
    ],
    addTask: (name) => {
        console.log("add")

        const newTask = {
            id: uuidv4(),
            label: name,
            done: false,
        }

        set({
            taskList: [...get().taskList, newTask]
        });

    },
    updateTask: (taskid, newname) => {
        // console.log("update")
        // console.log(taskid)
        // console.log(newname)

        set({
            taskList: get().taskList.map((task) => {
                if (task.id === taskid) {
                    task.label = newname;
                }
                return task;
            }),
        });
    },

    deleteTask: (taskid) => {
        console.log("delete")
        set({
            taskList: get().taskList.filter((task) => task.id !== taskid),
        });


    },
    toggleTask: (taskid) => {
        console.log("toggleTask")

        set({
            taskList: get().taskList.map((task) => {
                if (task.id === taskid) {
                    task.done = !task.done;
                }
                return task;
            }),
        });
    },


}))