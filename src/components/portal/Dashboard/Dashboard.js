import React from 'react';
import { getAuth } from "firebase/auth";
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import MinNav from '../minNav/MinVav';

const Dashboard = () => {

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
        <MinNav />
        <div className="portal-page-content">
        <h2>Dashboard</h2>
        <button className='log-btn' onClick={checkUser}>Check User</button>
        </div>
      </div>
    )
}

export default Dashboard;