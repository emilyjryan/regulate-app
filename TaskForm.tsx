import React, {useState} from "react";
// import {FormData} from './types.d.ts'

export type FormData = {
    title: string,
    time: string,
    details: string
}

export default function TaskForm (props: {
    handleSubmitForm: (formData: FormData) => void
}) {

    const [form, setForm] = useState<FormData>({
        title: '',
        time: '',
        details: ''
    });
    
    return (
        <>
        <form className="task-form" onSubmit={() => {props.handleSubmitForm(form)}}>

            <label htmlFor="task-title">What task do you need to do?</label>
            <input 
                id="task-title" 
                type="text" 
                value={form.title}
                onChange={(e) => {
                    setForm({...form, title: e.target.value})
                }}
                className="task-input" 
                placeholder="Task title..." />
                
            <label htmlFor="task-time">What time of day do you do this? (select Morning or Evening)</label>
            <select 
            className="task-input" 
            id="task-time"
            onChange={(e) => {
                setForm({...form, time: e.target.value})
            }}>
                <option value="">Select One</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
            </select>

            <label htmlFor="task-details">Add any other details here:</label>
            <input 
            id="task-details" 
            type="text" 
            value={form.details} 
            onChange={(e) => {
                setForm({...form, details: e.target.value})
            }}
            className="task-input" 
            placeholder="Task details..." />

            <button type="submit">Save Task</button>
        </form>
            <h2>This is the Task Form</h2>
        </>
    )
}

