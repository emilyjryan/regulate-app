import React, {useState} from "react";

export const TaskForm = () => {
    const [newTask, setNewTask] = useState<string>("");
    return (
        <>
        <form className="task-form">
            <input type="text" value={newTask} className="task-input" placeholder="Add a task" />
        </form>
        <button>Save Task</button>
            <h2>This is the Task Form</h2>
        </>
    )
}