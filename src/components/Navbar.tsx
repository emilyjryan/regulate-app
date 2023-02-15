import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <>

        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Schedule</Link>
                </li>
                <li>
                    <Link to="/tasks/new">Create New Task</Link>
                </li>
                <li>
                    <Link to="/emotions">Emotion Identifier</Link>
                </li>
            </ul>
        </div>
        </>
    )
}