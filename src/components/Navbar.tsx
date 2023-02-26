import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {


  // document.addEventListener('DOMContentLoaded', () => {

  //   // Get all "navbar-burger" elements
  //   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  //   // Check if there are any navbar burgers
  //   if ($navbarBurgers.length > 0) {
  
  //     // Add a click event on each of them
  //     $navbarBurgers.forEach( el => {
  //       el.addEventListener('click', () => {
  
  //         // Get the target from the "data-target" attribute
  //         const target = el.dataset.target;
  //         const $target = document.getElementById(target);
  
  //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //         el.classList.toggle('is-active');
  //         $target.classList.toggle('is-active');
  
  //       });
  //     });
  //   }
  
  // });

    return (
        <>


    <nav className="navbar" style={{backgroundColor: 'rgb(167,198,246)', border: '#4f4789 solid 5px'}} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <img src='https://cdn0.iconfinder.com/data/icons/education-631/66/45-512.png' alt="regulate-icon" width="70" height="28"/>
            <a className="navbar-item" href="/">
                <h2 style={{fontSize: '40px'}}>Regulate</h2>
            </a>
            {/* <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> */}
        </div>

        <div id="options" className="navbar-menu">
          <div className="navbar-start">
              <div className="navbar-item">
                  <ul className="buttons menu">
                      <li className="button is-responsive is-outlined is-rounded is hovered navbar-item" style={{backgroundColor: 'rgb(255,78,135)', overflow: 'hidden'}}>
                          <Link to="/tasks">My Schedule</Link>
                      </li>
                      <li className="button is-responsive is-outlined is-rounded is hovered navbar-item" style={{backgroundColor: 'rgb(255,78,135)', overflow: 'hidden'}}>
                          <Link to="/tasks/new">Create A New Task</Link>
                      </li>
                      <li className="button is-responsive is-outlined is-rounded is hovered navbar-item" style={{backgroundColor: 'rgb(255,78,135)', overflow: 'hidden'}}>
                          <Link to="/emotions">Emotion Finder</Link>
                      </li>
                  </ul>
              </div>
          </div>

    {/* <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="/signup" className="button is-primary">
            <button>Sign up</button>
          </a>
          <a href="/login" className="button is-light">
            <button>Login</button>
          </a>
        </div>
      </div>
    </div> */}
  </div>
</nav>
        </>
    )
}