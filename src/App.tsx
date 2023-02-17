import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Emotions from './components/pages/Emotions';
import NewTask from './components/pages/NewTask';
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';

function App() {

  const weekday = new Array(7);
    weekday[0]='Sunday';
    weekday[1]='Monday';
    weekday[2]='Tuesday';
    weekday[3]='Wednesday';
    weekday[4]='Thursday';
    weekday[5]='Friday';
    weekday[6]='Saturday';

  let monthOfYear = new Array(12);
    monthOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  const dayOfWeek = new Date().getDay()
  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()


  return (
    <>
    <div className="App columns is-flex-direction-column" style={{height: '100vh'}}>
      <Router>
      <header className="column is-narrow" style={{backgroundColor: 'rgb(192,212,248)'}}>
        <Navbar/>
      </header>
      <main className="column" style={{backgroundColor: 'rgb(192,212,248)'}}>
      <div className='date' style={{fontSize: '30px', marginLeft: '5%'}}>
        <h1>Today is {weekday[dayOfWeek].toUpperCase()}</h1>
        <h1>It's {monthOfYear[month]} {day}, {year}</h1>
      </div>
      <Routes>

        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/tasks"
          element={<Schedule/>}
        />

        <Route
          path="/tasks/new"
          element={<NewTask/>}
        />

        <Route
          path="/emotions"
          element={<Emotions/>}
        />
        
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
      </Router>
    </div>
    </>
  );
}

export default App;

