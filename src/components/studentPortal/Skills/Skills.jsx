import React from 'react';
// import { getAuth } from "firebase/auth";
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';

const Skills = () => {

//   const checkUser = () => {
//   const auth = getAuth();
// const user = auth.currentUser;

// if (user) {
//   alert("user is already logged in")
// } else {
//   alert("No user is signed in.");
// }
//   }
    return (
      <>
        <h2>Essential Realworld Skills</h2>
        {/* <button className='log-btn' onClick={checkUser}>Check User</button> */}
        <ul className='el-container'>
        <li className='el'><Link to="/studentsdashboard/announcements">Entrepreneurship</Link></li>
          <li className='el'><Link to="/studentsdashboard/books">Public Speaking</Link></li>
          <li className='el'><Link to="/studentsdashboard/videos">Communication</Link></li>
          <li className='el'><Link to="/studentsdashboard/pastpapers">Finacial Literacy</Link></li>
          <li className='el'><Link to="/studentsdashboard/quizzes">Tech Literacy</Link></li>
          <li className='el'><Link to="/studentsdashboard/assignments">Leadership</Link></li>
          <li className='el'><Link to="/studentsdashboard/practicals">Continous :earning (reading)</Link></li>
          <li className='el'><Link to="/studentsdashboard/timetables">Critical Thinking</Link></li>
        </ul>
        </>
    )
}

export default Skills;