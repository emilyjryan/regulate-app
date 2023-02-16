// Add to do list components

import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigate, { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Schedule () {

    const navigate = useNavigate()

    const [tasks, setTasks] = useState<
    Array<{
        _id: string,
        title: string,
        timeOfDay: string,
        specificTime: string,
        completed: Boolean
    }>
    >([])

    const getAllTasks = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/tasks`)
            const newTasks = await response.json()
            // newTasks.sort()
            setTasks(newTasks)
        } catch (err) {
            console.log('useEffect in Schedule.tsx', err)
        }
    }
   
    useEffect(() => {
        getAllTasks()
    }, [])

    async function handleDeleteTask(taskId: string) {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/tasks/${taskId}`, {
            method: "DELETE",
        });
        setTasks(tasks.filter((task) => task._id !== taskId))
    }

    async function handleCompleteTask(taskId: string) {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/tasks/complete/${taskId}`, {
            method: "PUT",
        })
        getAllTasks()
    }

    async function handleUndoComplete(taskId: string) {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/tasks/undocomplete/${taskId}`, {
            method: "PUT",
        })
        getAllTasks()
    }

    // MORNING TASK FILTER AND MAP //
    const morningTasks = tasks.filter((task) => {
        return task.timeOfDay === "Morning"
    }).map((task => {
        return (
            <>
            <div key={task._id} className="tbody" style={{backgroundColor: '#ffc857', borderRadius: '10px', marginLeft: '5px', marginRight: '5px', marginBottom: '7px'}}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <div className="title is-4">{task.specificTime} {task.title}</div>
                            <div></div>
                        </div>
                       
                    </div>
            
                    <div>
                        {task.completed? 
                            <div className="columns">
                            <button className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}} title="Disabled button" disabled>✅ Task Completed</button>
                            <button onClick={() => handleUndoComplete(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: 'rgb(35,203,255)'}}>Undo Complete </button>
                            <button onClick={() => handleDeleteTask(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: '#9a0a0a'}}>❌ Delete</button>
                            </div>
                            :
                            <div className="columns">
                            <button onClick={() => handleCompleteTask(task._id)} className="button is-rounded column is-two-thirds" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}}>Complete Task!</button>
                            <button onClick={() => handleDeleteTask(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: '#9a0a0a'}}>❌ Delete</button>
                            </div>
                                }
                    </div>
                </div>
            </div>
            </>
        )
    }))


    // AFTERNOON TASK FILTER AND MAP //
    const afternoonTasks = tasks.filter((task) => {
        return task.timeOfDay === "Afternoon"
    }).map((task => {
        return (
            <>
            <div key={task._id} className="tbody" style={{backgroundColor: '#ffc857', borderRadius: '10px', marginLeft: '5px', marginRight: '5px', marginBottom: '7px'}}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <div className="title is-4">{task.specificTime} {task.title}</div>
                            <div></div>
                        </div>
                       
                    </div>
            
                    <div>
                        {task.completed? 
                            <div className="columns">
                            <button className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}} title="Disabled button" disabled>✅ Task Completed</button>
                            <button onClick={() => handleUndoComplete(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: 'rgb(35,203,255)'}}>Undo Complete </button>
                            <button onClick={() => handleDeleteTask(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: '#9a0a0a'}}>❌ Delete</button>
                            </div>
                            :
                            <div className="columns">
                            <button onClick={() => handleCompleteTask(task._id)} className="button is-rounded column is-two-thirds" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}}>Complete Task!</button>
                            <button onClick={() => handleDeleteTask(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: '#9a0a0a'}}>❌ Delete</button>
                            </div>
                                }
                    </div>
                </div>
            </div>
            </>
        )
    }))

    // EVENING TASK FILTER AND MAP //
    const eveningTasks = tasks.filter((task) => {
        return task.timeOfDay === "Evening"
    }).map((task => {
        return (
            <>
            <div key={task._id} className="tbody" style={{backgroundColor: '#ffc857', borderRadius: '10px', marginLeft: '5px', marginRight: '5px', marginBottom: '7px'}}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <div className="title is-4">{task.specificTime} {task.title}</div>
                            <div></div>
                        </div>
                       
                    </div>
            
                    <div>
                        {task.completed? 
                            <div className="columns">
                            <button className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}} title="Disabled button" disabled>✅ Task Completed</button>
                            <button onClick={() => handleUndoComplete(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: 'rgb(35,203,255)'}}>Undo Complete </button>
                            <button onClick={() => handleDeleteTask(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: '#9a0a0a'}}>❌ Delete</button>
                            </div>
                            :
                            <div className="columns">
                            <button onClick={() => handleCompleteTask(task._id)} className="button is-rounded column is-two-thirds" style={{color: 'white', backgroundColor: 'rgb(49,252,188)'}}>Complete Task!</button>
                            <button onClick={() => handleDeleteTask(task._id)} className="button is-rounded column is-one-third" style={{color: 'white', backgroundColor: '#9a0a0a'}}>❌ Delete</button>
                            </div>
                                }
                    </div>
                </div>
            </div>
            </>
        )
    }))
    
    // SCHEDULE //
    return (
        <>
        <div className="schedule-holder" style={{marginLeft: '10%', marginRight: '10%', marginTop: '3%', border: 'rgb(167,198,246) solid 5px'}}>
        <h1 className="text-center" style={{fontSize: '40px', backgroundColor: 'rgb(167,198,246)'}}>🗓 My Schedule</h1>
            <div className="button is-responsive is-outlined is-rounded is-hovered navbar-item mt-3 mb-3" style={{backgroundColor: 'rgb(255,78,135)', marginRight: '38%', marginLeft: '38%'}}>
                    <Link to="/tasks/new">Create A New Task!</Link>
            </div>
            <div className="table-container">
                <h2 className="text-center" style={{fontSize: '32px'}}>MORNING 🌞 Tasks:</h2>
                <table className="table is-striped is-fullwidth" style={{backgroundColor: 'rgb(192,212,248)'}}>
                {morningTasks}
                </table>
            </div>
            <div className="table-container">
                <h2 className="text-center" style={{fontSize: '32px'}}>AFTERNOON 🌈 Tasks:</h2>
                <table className="table is-striped is-fullwidth" style={{backgroundColor: 'rgb(192,212,248)'}}>
                {afternoonTasks}
                </table>
            </div>
            <div className="table-container">
                <h2 className="text-center" style={{fontSize: '32px'}}>EVENING 🌙 Tasks:</h2>
                <table className="table is-striped is-fullwidth" style={{backgroundColor: 'rgb(192,212,248)'}}>
                {eveningTasks}
                </table>
            </div>
            </div>
        
        </>
    )
}