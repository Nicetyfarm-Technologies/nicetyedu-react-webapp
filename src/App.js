import React, { Component } from 'react';
import {
	BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Home from './components/Pages/Home';
import AboutPage from './components/Pages/About';
import ProductsPage from './components/Pages/Products';
import TractionPage from './components/Pages/Traction';
import LoginPage from './components/Pages/Login';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/products" element={<ProductsPage />} />
        <Route path="/traction" element={<TractionPage />} />
        <Route path="/signin" element={<LoginPage />} />
			</Routes>
      <Footer />
      </Router>
    );
  }
}

export default App;
