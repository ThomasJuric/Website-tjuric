import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {
  return (
    <Router >
      <Menu/>
      <Navbar/>
    </Router>
  );
}

export default App;
