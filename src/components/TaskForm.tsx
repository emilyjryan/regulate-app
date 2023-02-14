import React, {useState} from "react";

export default function TaskForm (props) {
    
    return (
        <>
        <form className="task-form">

            <label htmlFor="task-title">What task do you need to do?</label>
            <input 
                id="task-title" 
                type="text" 
                value={props.form.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.setForm({...props.form, title: e.target.value})
                }}
                className="task-input" 
                placeholder="Task title..." />
                
            <label htmlFor="task-time">What time of day do you do this? (select Morning or Evening)</label>
            <select className="task-input" id="task-time">
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.setForm({...props.form, time: e.target.value})
                }}
            </select>

            <label htmlFor="task-details">Add any other details here:</label>
            <input 
            id="task-details" 
            type="text" 
            value={props.form.details} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setForm({...props.form, details: e.target.value})
            }}
            className="task-input" 
            placeholder="Task details..." />

            <button type="submit">Save Task</button>
        </form>
            <h2>This is the Task Form</h2>
        </>
    )
}

