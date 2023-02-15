// Add to do list components

import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Schedule () {

    const [tasks, setTasks] = useState<
    Array<{
        _id: string,
        title: string,
        time: string,
        details: string
    }>
    >([])
   
    useEffect(() => {
        const getAllTasks = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tasks`)
                const newTasks = await response.json()
                setTasks(newTasks)
            } catch (err) {
                console.log('useEffect in Schedule.tsx', err)
            }
        }
        getAllTasks()
    }, [])

    const morningTasks = tasks.filter((task) => {
        return task.time === "Morning"
    }).map((task => {
        return (
            <>
            <br></br>
            <ul key={task._id}>
              <li>{task.title}</li>
              <li>{task.details}</li>
            </ul>
            </>
        )
    }))

    const eveningTasks = tasks.filter((task) => {
        return task.time === "Evening"
    }).map((task => {
        return (
            <>
            <br></br>
            <ul key={task._id}>
              <li>{task.title}</li>
              <li>{task.details}</li>
            </ul>
            </>
        )
    }))

    const miscTasks = tasks.filter((task) => {
        return task.time === ""
    })
    console.log(miscTasks)
    

    return (
        <>
        <h1>Schedule Route</h1>
        <h2>Here are all your MORNING tasks:</h2>
        {morningTasks}
        <h2>Here are all your EVENING tasks:</h2>
        {eveningTasks}

        <br></br>
        </>
    )
}