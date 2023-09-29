import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks, deleteTask, toggleTask } = useContext(TaskContext);

    return (
        <div>
            {
                tasks.map((task) => (
                    <div key={task.id} style={{ color: task.completed ? 'red' : '#000000' }}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span>{task.name}</span>
                        <button onClick={() => deleteTask(task.id)}>Deletar</button>
                    </div>
                ))
            }
        </div>
    );
};

export default TaskList;