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
            navigate('/tasks')
        })
        .catch(err => console.log(err))   
        }

    return (
        <>
        <div className='card text-center mt-8 p-4' style={{marginLeft: '25%', marginRight: '25%', backgroundColor: 'rgb(254,196,68)'}}>
            <h1 className="mt-5 mb-5" style={{color: 'white', fontSize: '32px', backgroundColor: 'rgb(49,252,188)'}}>Create a new task!</h1>
        <form className="task-form" onSubmit={handleSubmitForm}>

            <label htmlFor="task-title">What task do you need to do? </label>
            <br></br>
            <input
                id="task-title" 
                type="text" 
                value={form.title}
                onChange={(e) => {
                    setForm({...form, title: e.target.value})
                }}
                className="textarea"
                placeholder="I need to..." />
                <br></br>
                <br></br>
                
            <label htmlFor="task-time">What time of day do you do this? </label>
            <br></br>
            <div className='select is-primary'>
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
            </div>
            <br></br>
            <br></br>

            <label htmlFor="task-details">Add any other details here: </label>
            <br></br>
            <input 
            id="task-details" 
            type="text" 
            value={form.details} 
            onChange={(e) => {
                setForm({...form, details: e.target.value})
            }}
            className="textarea" 
            placeholder="Task details..." />
              <br></br>
              <br></br>

            <button className="button is-rounded mt-4 mb-4" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}} type="submit">Save Task</button>
        </form>
        </div>
        </>
    )

}