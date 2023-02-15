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
            <div key={task._id} className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{task.title}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{task.details}</p>
                    </div>
                </div>
            </div>
            </>
        )
    }))

    const eveningTasks = tasks.filter((task) => {
        return task.time === "Evening"
    }).map((task => {
        return (
            <>
            <div key={task._id} className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{task.title}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{task.details}</p>
                    </div>
                </div>
            </div>
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