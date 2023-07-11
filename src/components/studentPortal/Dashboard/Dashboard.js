import React from 'react';
import { getAuth } from "firebase/auth";
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import StudentsMinNav from '../minNav/MinVav';
import { Link } from 'react-router-dom';

const StudentsDashboard = () => {

  const checkUser = () => {
  const auth = getAuth();
const user = auth.currentUser;

if (user) {
  alert("user is already logged in")
} else {
  alert("No user is signed in.");
}
  }
    return (
      <div className="portal-content">
        <StudentsMinNav />
        <div className="portal-page-content">
        <h2>Students Dashboard</h2>
        {/* <button className='log-btn' onClick={checkUser}>Check User</button> */}
        <ul className='el-container'>
        <li className='el'><Link to="/studentsdashboard/announcements">Announcements</Link></li>
          <li className='el'><Link to="/studentsdashboard/books">Books</Link></li>
          <li className='el'><Link to="/studentsdashboard/videos">Videos</Link></li>
          <li className='el'><Link to="/studentsdashboard/pastpapers">Past Papers</Link></li>
          <li className='el'><Link to="/studentsdashboard/quizzes">Quizzes</Link></li>
          <li className='el'><Link>Assignments</Link></li>
          <li className='el'><Link>Practicals</Link></li>
          <li className='el'><Link>Time Table</Link></li>
        </ul>
        </div>
      </div>
    )
}

export default StudentsDashboard;