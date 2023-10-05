import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentsProtectedRoute from "./components/studentsProtectedRoute";
import MathPastpapersPage from "./components/studentPortal/pages/MathPapers";
import QuizMainPage from "./components/studentPortal/pages/QuizMain";
import MathQuizPage from "./components/studentPortal/pages/MathQuiz";
import StudentsVideosPage from "./components/studentPortal/pages/Videos";
import StudentsResultsPage from "./components/studentPortal/pages/Results";
import PracticalsPage from "./components/studentPortal/pages/Practicals";
import SkillsPage from "./components/studentPortal/pages/Skills";
import NutritionPage from "./components/studentPortal/pages/Nutrition";
import Hom from "./components/Pages/Hom";
import Login from "./components/Login/Login";
import AdminLogin from "./components/Login/AdminLogin";
import Register from "./components/Register/Register";
import ResetPassword from "./components/Reset/Reset";
import AnnouncementsStaff from "./components/portal/Dashboard/Announcements";
import Dashboard from "./components/portal/Dashboard/Dashboard";
import Classes from "./components/portal/Classes/Classes";
import Attendance from "./components/portal/Classes/Attendance";
import Finance from "./components/portal/Finance/Finance";
import Library from "./components/portal/Library/Library";
import Staff from "./components/portal/Staff/Staff";
import Timetables from "./components/portal/Timetables/Timetables";
import Enrollments from "./components/portal/Enrollments/Enrollments";
import Results from "./components/portal/Results/Results";
import Ca from "./components/portal/Results/Ca";
import InputRes from "./components/portal/Results/InputRes";
import CreateTerm from "./components/portal/Results/CreateTerm";
import Calenders from "./components/portal/Calenders/Calenders";
import Profile from "./components/portal/Profile/Profile";
import Subjects from "./components/portal/Classes/Subjects";
import StudentsPortal from "./components/studentPortal/Dashboard/StudentPoatal";
import StudentsDashboard from "./components/studentPortal/Dashboard/Dashboard";
import Announcements from "./components/studentPortal/Annoucements/Annoucements";
import Books from "./components/studentPortal/Books/Books";
import Assignments from "./components/studentPortal/Assignments/Assignments";
import StudentsPastpapers from "./components/studentPortal/pastpapers/Pastpapers";
import Timetables2 from "./components/studentPortal/timetables/Timetables";
import MathPastpapers from "./components/studentPortal/pastpapers/MathPapers";
import QuizMain from "./components/studentPortal/Quizzes/QuzMain";
import MathQuiz from "./components/studentPortal/Quizzes/MathQuiz";
import StudentsVideos from "./components/studentPortal/videos/videos";
import StudentsResults from "./components/studentPortal/Results/Results";
import Practicals from "./components/studentPortal/Practicals/Practicals";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/studentsdashboard" element={<StudentsProtectedRoute />}>
            <Route path="/studentsdashboard" element={<StudentsPortal />}>
              <Route
                path="/studentsdashboard/dashboard"
                element={<StudentsDashboard />}
              />
              <Route
                path="/studentsdashboard/announcements"
                element={<Announcements />}
              />
              <Route path="/studentsdashboard/books" element={<Books />} />
              <Route
                path="/studentsdashboard/timetables"
                element={<Timetables2 />}
              />
              <Route
                path="/studentsdashboard/assignments"
                element={<Assignments />}
              />
              <Route
                path="/studentsdashboard/pastpapers"
                element={<StudentsPastpapers />}
              />
              <Route
                path="/studentsdashboard/pastpapers/ecz/mathematics-12"
                element={<MathPastpapers />}
              />
              <Route
                path="/studentsdashboard/quizzes"
                element={<QuizMain />}
              />
              <Route
                path="/studentsdashboard/quizzes/math"
                element={<MathQuiz />}
              />
              <Route
                path="/studentsdashboard/videos"
                element={<StudentsVideos />}
              />
              <Route
                path="/studentsdashboard/results"
                element={<StudentsResults />}
              />
              <Route
                path="/studentsdashboard/practicals"
                element={<Practicals />}
              />
              <Route
                path="/studentsdashboard/practicals/nutrition"
                element={<NutritionPage />}
              />
              <Route
                path="/studentsdashboard/skills"
                element={<SkillsPage />}
              />
            </Route>
          </Route>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="/dashboard/announcements"
                element={<AnnouncementsStaff />}
              />
              <Route path="/dashboard/classes" element={<Classes />} />
              <Route path="/dashboard/attendance" element={<Attendance />} />
              <Route path="/dashboard/subjects" element={<Subjects />} />
              <Route path="/dashboard/staff" element={<Staff />} />
              <Route path="/dashboard/library" element={<Library />} />
              <Route path="/dashboard/finances" element={<Finance />} />
              <Route path="/dashboard/timetables" element={<Timetables />} />
              <Route path="/dashboard/enrollments" element={<Enrollments />} />
              <Route path="/dashboard/results" element={<Results />} />
              <Route path="/dashboard/results/ca" element={<Ca />} />
              <Route path="/dashboard/results/input" element={<InputRes />} />
              <Route
                path="/dashboard/results/create"
                element={<CreateTerm />}
              />
              <Route path="/dashboard/calenders" element={<Calenders />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Hom />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from "react";
// // import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from "./Components2/Portal/Dashboard/Dashboard";
// import Attendance from "./Components2/Portal/Attendance/Attendance";
// import Reports from "./Components2/Portal/Reports/Reports";
// import Report from "./Components2/Portal/Reports/Report";
// import Attended from "./Components2/Portal/Attended/Attended";
// import Home from "./Components2/Home/Home";
// import Onboard from "./Components2/Home/Onboarding";
// import Onboarding from "./Components2/Home/Onboard";
// import Login from "./Components2/pages/Login";
// import SendReport from "./Components2/Portal/Reports/SendReport";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}>
//           <Route path="/" element={<Onboard />}/>
//           <Route path="/onboard" element={<Onboarding />}/>
//           <Route path="/signin" element={<Login />}/>
//           </Route>
//         </Routes>

//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />}>
//             <Route path="/dashboard/" element={<Attendance />} />
//             <Route path="/dashboard/attendance" element={<Attended />} />
//             {/* <Route path="/dashboard/attendance" element={<Attendance />} /> */}
//           </Route>

//           <Route path="/reports" element={<Reports />}>
//             <Route path="/reports" element={<Report />} />
//             <Route path="/reports/health" element={<SendReport />} />
//             {/* <Route path="/dashboard/confirmed" element={<Confirmed />} />
//             <Route path="/dashboard/attendance" element={<Attendance />} />
//             <Route path="/dashboard/reports" element={<Reports />} /> */}
//           </Route>
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;
