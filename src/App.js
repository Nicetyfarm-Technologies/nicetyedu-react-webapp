import React, { Component } from 'react';
import {
	BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
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
import DashboardPage from './components/portal/pages/Dashboard';
import ClassesPage from './components/portal/pages/Classes';
import StaffPage from './components/portal/pages/Staff';
import LibraryPage from './components/portal/pages/Library';
import FinancePage from './components/portal/pages/Finances';
import TimetablesPage from './components/portal/pages/Timetables';
import EnrollmentsPage from './components/portal/pages/Enrollments';
import ResultsPage from './components/portal/pages/Results';
import CalendersPage from './components/portal/pages/Calenders';
import ProfilePage from './components/portal/pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
       <Routes>
       <Route path="/dashboard" element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/classes" element={<ClassesPage />} />
          <Route path="/dashboard/staff" element={<StaffPage />} />
          <Route path="/dashboard/library" element={<LibraryPage />} />
          <Route path="/dashboard/finances" element={<FinancePage />} />
          <Route path="/dashboard/timetables" element={<TimetablesPage />} />
          <Route path="/dashboard/enrollments" element={<EnrollmentsPage />} />
          <Route path="/dashboard/results" element={<ResultsPage />} />
          <Route path="/dashboard/calenders" element={<CalendersPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
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
    );}
}

export default App;
