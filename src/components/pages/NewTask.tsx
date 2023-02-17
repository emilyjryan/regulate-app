import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewTask() {

    type FormData = {
        title: string,
        timeOfDay: string,
        specificTime: string,
        minutes: number
    }

    const [form, setForm] = useState<FormData>({
        title: '',
        timeOfDay: '',
        specificTime: '',
        minutes: 0,
    });

    const navigate = useNavigate();

    // Converting time string to one number:
    const convertFxn = (specificTimeInput: String) => {
        const arrayOfBothNumbers = specificTimeInput.split(":", 2)
        const totalMinutes = (Number(arrayOfBothNumbers[0]) * 60) + Number(arrayOfBothNumbers[1])
        return totalMinutes
    }

    function handleSubmitForm(e: React.FormEvent) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER_URL}/tasks/new`, form)
        .then(res => {
            console.log(res.data)
            setForm({
                title: '',
                timeOfDay: '',
                specificTime: '',
                minutes: 0
            })
            navigate('/tasks')
        })
        .catch(err => console.log(err))   
        }

    return (
        <>
        <div className='card text-center mt-8 p-4' style={{marginLeft: '12%', marginRight: '12%', backgroundColor: 'rgb(254,196,68)'}}>
            <h1 className="mt-5 mb-5" style={{color: 'white', fontSize: '32px', backgroundColor: 'rgb(49,252,188)'}}>Create a new task!</h1>
        <form className="task-form" onSubmit={handleSubmitForm}>

            <label htmlFor="task-title">What task do you need to do?</label>
            <br></br>
            <input
                id="task-title" 
                type="text" 
                value={form.title}
                onChange={(e) => {
                    setForm({...form, title: e.target.value})
                }}
                style={{width: '70%'}}
                placeholder="I need to..." />
                <br></br>
                <br></br>
                
            <label htmlFor="task-time">At what time?</label>
            <br></br>

                <input 
                type="time"
                className="task-input" 
                id="task-time"
                onChange={(e) => {
                    // const convertedMinutes = convertFxn(e.target.value)
                   // setForm({...form, specificTime: e.target.value, minutes: convertedMinutes})
                }}>
                </input>
    
            <br></br>
            <br></br>

            <label htmlFor="task-time">What time of day do you do this? </label>
            <br></br>
            <div className='select is-primary'>
            <select 
            className="task-input" 
            id="task-time"
            onChange={(e) => {
                setForm({...form, timeOfDay: e.target.value})
            }}>
                <option value="">Select One</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
            </select>
            </div>
              <br></br>
              <br></br>

            <button className="button is-rounded mt-4 mb-4" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}} type="submit">Save Task</button>
        </form>
        </div>
        </>
    )

}