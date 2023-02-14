import {useState} from 'react'
import axios from 'axios'
import  TaskForm from '../TaskForm'
// import { useNavigate } from 'react-router-dom'
import { FormData } from '../TaskForm'

export default function NewTask() {

    // const navigate = useNavigate();

    const handleSubmitForm = (form:FormData) => {
        axios.post(`${process.env.REGULATE_APP_SERVER_URL}/tasks/new`, form)
        .then(res=> {
            console.log(res.data)
            // navigate('/')
        })
        .catch(err => console.log(`Error in handleSubmitForm route`, err))
    }

    return (
        <>
        <div>
            <TaskForm handleSubmitForm={handleSubmitForm}/>
        </div>
        </>
    )

}