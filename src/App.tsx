import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NewTask } from './components/pages/NewTask';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <h1>Regulate App</h1>
      <NewTask/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

