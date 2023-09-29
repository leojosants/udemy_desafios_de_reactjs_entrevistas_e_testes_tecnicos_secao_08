import { createContext, useState } from "react";

export const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (!task) {
            alert('Não é possível adicionar tarefa com campo vazio!')
            return;
        }

        setTasks(
            [
                ...tasks,
                {
                    id: Date.now(),
                    name: task,
                    completed: false,
                },
            ]
        );
    };

    const deleteTask = (id) => {
        tasks.filter((task) => {
            if (task.id === id && task.completed === true) {
                setTasks(tasks.filter((task) => task.id !== id));
                return;
            }

            if (task.id === id && task.completed === false) {
                alert('Conclua a tarefa para ser deletada!')
                return;
            }
        });
    };

    const toggleTask = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
}