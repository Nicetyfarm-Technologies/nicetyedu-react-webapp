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
import AdminLoginPage from './components/Pages/AdminLogin';
import RegisterPage from './components/Pages/Register';
import ResetPage from './components/Pages/Reset';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './components/portal/pages/Dashboard';
import ClassesPage from './components/portal/pages/Classes';
import AttendancePage from './components/portal/pages/Attendance';
import SubjectsPage from './components/portal/pages/Subjects.';
import StaffPage from './components/portal/pages/Staff';
import LibraryPage from './components/portal/pages/Library';
import FinancePage from './components/portal/pages/Finances';
import TimetablesPage from './components/portal/pages/Timetables';
import EnrollmentsPage from './components/portal/pages/Enrollments';
import ResultsPage from './components/portal/pages/Results';
import CalendersPage from './components/portal/pages/Calenders';
import ProfilePage from './components/portal/pages/Profile';
import StudentsProtectedRoute from './components/studentsProtectedRoute';
import StudentsDashboardPage from './components/studentPortal/pages/Dashboard';
import StudentsPastpapersPage from './components/studentPortal/pages/Pastpapers';
import MathPastpapersPage from './components/studentPortal/pages/MathPapers';
import QuizMainPage from './components/studentPortal/pages/QuizMain';
import MathQuizPage from './components/studentPortal/pages/MathQuiz';
import EnglishQuizPage from './components/studentPortal/pages/EnglishQuiz';
import ArtQuizPage from './components/studentPortal/pages/ArtQuiz';
import AccountsQuizPage from './components/studentPortal/pages/AccountsQuiz';
import BiologyQuizPage from './components/studentPortal/pages/BiologyQuiz';
import CEQuizPage from './components/studentPortal/pages/CEQuiz';
import DTQuizPage from './components/studentPortal/pages/DTQuiz';
import FNQuizPage from './components/studentPortal/pages/FNQuiz';
import HistoryQuizPage from './components/studentPortal/pages/HistoryQuiz';
import CommerceQuizPage from './components/studentPortal/pages/CommerceQuiz';
import ScienceQuizPage from './components/studentPortal/pages/ScienceQuiz';
import StudentsResultsPage from './components/studentPortal/pages/Results';

class App extends Component {
  render() {
    return (
      <Router>
       <Routes>
       <Route path="/studentsdashboard" element={<StudentsProtectedRoute />}>
					<Route path="/studentsdashboard" element={<StudentsDashboardPage />} />
          <Route path="/studentsdashboard/pastpapers" element={<StudentsPastpapersPage />} />
          <Route path="/studentsdashboard/pastpapers/ecz/mathematics-12" element={<MathPastpapersPage />} />
          <Route path="/studentsdashboard/quizzes" element={<QuizMainPage />} />
          <Route path="/studentsdashboard/quizzes/math" element={<MathQuizPage />} />
          <Route path="/studentsdashboard/quizzes/art" element={<ArtQuizPage />} />
          <Route path="/studentsdashboard/quizzes/accounts" element={<AccountsQuizPage />} />
          <Route path="/studentsdashboard/quizzes/biology" element={<BiologyQuizPage />} />
          <Route path="/studentsdashboard/quizzes/dt" element={<DTQuizPage />} />
          <Route path="/studentsdashboard/quizzes/english" element={<EnglishQuizPage />} />
          <Route path="/studentsdashboard/quizzes/fn" element={<FNQuizPage />} />
          <Route path="/studentsdashboard/quizzes/history" element={<HistoryQuizPage />} />
          <Route path="/studentsdashboard/quizzes/ce" element={<CEQuizPage />} />
          <Route path="/studentsdashboard/quizzes/commerce" element={<CommerceQuizPage />} />
          <Route path="/studentsdashboard/quizzes/science" element={<ScienceQuizPage />} />
          <Route path="/studentsdashboard/results" element={<StudentsResultsPage />} />
				</Route>
       <Route path="/dashboard" element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/classes" element={<ClassesPage />} />
          <Route path="/dashboard/attendance" element={<AttendancePage />} />
          <Route path="/dashboard/subjects" element={<SubjectsPage />} />
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
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
			</Routes>
      <Footer />
      </Router>
    );}
}


export default App;
