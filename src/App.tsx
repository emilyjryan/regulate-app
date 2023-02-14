import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TaskForm } from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <h1>Regulate App</h1>
      <TaskForm/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

