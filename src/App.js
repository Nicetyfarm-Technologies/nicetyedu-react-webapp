import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Home from './components/Pages/Home';
import About from './components/About/About';
import Products from './components/Products/Products';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Products />} />
			</Routes>
      </Router>
    );
  }
}

export default App;
