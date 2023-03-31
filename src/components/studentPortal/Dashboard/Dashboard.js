import React from 'react';
import { getAuth } from "firebase/auth";
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import StudentsMinNav from '../minNav/MinVav';

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
        </div>
      </div>
    )
}

export default StudentsDashboard;