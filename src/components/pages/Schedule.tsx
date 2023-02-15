// Add to do list components

import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Schedule () {

    const [tasks, setTasks] = useState([])
   
    useEffect(() => {
        const getAllTasks = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
                setTasks(response.data)
                console.log(response.data)
            } catch (err) {
                console.log('useEffect in Schedule.tsx', err)
            }
        }
        getAllTasks()
    }, [])

    return (
        <>
            <h1>Schedule Route</h1>
            <h2>Here are all your tasks:</h2>
        </>
    )
}