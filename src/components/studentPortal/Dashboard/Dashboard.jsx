import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import StudentsMinNav from '../minNav/MinVav';
import { Link } from 'react-router-dom';

const StudentsDashboard = () => {
    return (
      <>
        <h2>Students Dashboard</h2>
        <ul className='el-container'>
        <li className='el'><Link to="/studentsdashboard/announcements">Announcements</Link></li>
          <li className='el'><Link to="/studentsdashboard/books">Books</Link></li>
          <li className='el'><Link to="/studentsdashboard/videos">Videos</Link></li>
          <li className='el'><Link to="/studentsdashboard/pastpapers">Past Papers</Link></li>
          <li className='el'><Link to="/studentsdashboard/quizzes">Quizzes</Link></li>
          <li className='el'><Link to="/studentsdashboard/assignments">Assignments</Link></li>
          <li className='el'><Link to="/studentsdashboard/practicals">Practicals</Link></li>
          <li className='el'><Link to="/studentsdashboard/timetables">Time Table</Link></li>
          <li className='el'><Link to="/studentsdashboard/attendance">Attendance</Link></li>
        </ul>
        </>
    )
}

export default StudentsDashboard;