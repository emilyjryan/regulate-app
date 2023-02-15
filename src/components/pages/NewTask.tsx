import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewTask() {

    type FormData = {
        title: string,
        time: string,
        details: string
    }

    const [form, setForm] = useState<FormData>({
        title: '',
        time: '',
        details: ''
    });

    const navigate = useNavigate();

    function handleSubmitForm(e: React.FormEvent) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER_URL}/tasks/new`, form)
        .then(res => {
            console.log(res.data)
            setForm({
                title: '',
                time: '',
                details: ''
            })
        })
        .catch(err => console.log(err))   
        }

    return (
        <>
        <h2>New Task Form</h2>
        <div>
        <form className="task-form" onSubmit={handleSubmitForm}>

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
                <br></br>
                <br></br>
                
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
            <br></br>
            <br></br>

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
              <br></br>
              <br></br>

            <button type="submit">Save Task</button>
        </form>
        </div>
        </>
    )

}