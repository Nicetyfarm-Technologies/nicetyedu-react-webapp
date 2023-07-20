import React from 'react';
// import { getAuth } from "firebase/auth";
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import MinNav from '../minNav/MinVav';

const Dashboard = () => {

//   const checkUser = () => {
//   const auth = getAuth();
// const user = auth.currentUser;

// if (user) {
// console.log(user)
// } else {
//   alert("No user is signed in.");
// }
//   }
    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Announcements</h2>
        <form className='annonce-form2'>
          <h3>Give Announcements</h3>
          <div className='inputs'>
            <select>
              <option>To Pupils</option>
              <option>To Staff</option>
              <option>To Mathematics Dept</option>
              <option>To Natural Science Dept</option>
              <option>To Agriculture Dept</option>
              <option>To Social Sciences Dept</option>
              <option>To Languages Dept</option>
            </select>
            <input type='text' placeholder='title' required />
            <textarea placeholder='description' />
            <button type='submit'>Post</button>
          </div>
        </form>
        </div>
      </div>
    )
}

export default Dashboard;