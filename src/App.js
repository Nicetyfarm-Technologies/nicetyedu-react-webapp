import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';

class App extends Component {
  render() {
    return (
      <Router>
       <Navbar />
       <Hero />
       <About />
       <Products />
      </Router>
    );
  }
}

export default App;
