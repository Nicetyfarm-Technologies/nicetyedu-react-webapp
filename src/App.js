import React, { Component } from 'react';
import {
	BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Home from './components/Pages/Home';
import AboutPage from './components/Pages/About';
import ProductsPage from './components/Pages/Products';
import TractionPage from './components/Pages/Traction';
import ContactPage from './components/Pages/Contact';
import LoginPage from './components/Pages/Login';
import RegisterPage from './components/Pages/Register';
import ResetPage from './components/Pages/Reset';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
       <Routes>
       <Route path="/dashboard" element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
        <Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/products" element={<ProductsPage />} />
        <Route path="/traction" element={<TractionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
			</Routes>
      <Footer />
      </Router>
    );
  }
}

export default App;
