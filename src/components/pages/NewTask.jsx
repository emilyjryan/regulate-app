import {useState} from 'react'
import axios from 'axios'
import { TaskForm } from '../TaskForm'
import { navigate, useNavigate } from 'react-router-dom'

export default function NewTask(props) {

    const [form, setForm] = useState{{
        title: string,
        time: string,
        details: string,
    }};

    const handleSubmitForm = e => {
        e.preventDefault()
        axios.post(`${process.env.REGULATE_APP_SERVER_URL}/tasks/new`, form)
        .then(res=> {
            console.log(res.data)
            navigate('/')
        })
        .catch(err => console.log(`Error in handleSubmitForm route`, err))
    }

    return (
        <>
        <div>
            <TaskForm handleSubmitForm={handleSubmitForm} form={form} setForm={setForm}/>
        </div>
        </>
    )

}