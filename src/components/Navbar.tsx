import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <>


    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <img src='https://cdn0.iconfinder.com/data/icons/education-631/66/45-512.png' alt="regulate-icon" width="56" height="28"/>
            <a className="navbar-item" href="/">
                <h2>Regulate</h2>
            </a>
        </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        <Link to="/tasks">Schedule</Link>
      </a>
      <a className="navbar-item">
        <Link to="/emotions">Emotion Finder</Link>
      </a>
      <a className="navbar-item">
        <Link to="/tasks/new">Create New Task</Link>
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}