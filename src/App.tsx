import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

type Truck = {
  wheels: number,
  color: string
}

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <h1>How to create a React app with Typescript</h1>
      <ToDoForm/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

