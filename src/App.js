import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
       <Navbar />
       <Hero />
       <About />
      </Router>
    );
  }
}

export default App;
