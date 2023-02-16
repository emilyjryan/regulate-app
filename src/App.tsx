import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Emotions from './components/pages/Emotions';
import NewTask from './components/pages/NewTask';
import Home from './components/pages/Home';
import Schedule from './components/pages/Schedule';

function App() {
  return (
    <>
    <div className="App columns is-flex-direction-column" style={{height: '100vh', backgroundColor: 'rgb(192,212,248)'}}>
      <Router>
      <header className="column is-narrow">
        <Navbar/>
      </header>
      <main className="column">
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
      <footer className='column is-narrow'>
        <Footer/>
      </footer>
      </Router>
    </div>
    </>
  );
}

export default App;

