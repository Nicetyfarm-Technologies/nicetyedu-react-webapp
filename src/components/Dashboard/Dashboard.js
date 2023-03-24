import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import './Hero.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const getUid = () => {
    if(localStorage.getItem('uid')){
      //alert("welcome"+localStorage.getItem('uid'));
      this.setState({user : JSON.parse(localStorage.getItem('uid'))})
      console.log("this : "+localStorage.getItem('uid'))}
  }
    return (
      <div className="slide-container">
        <h2>Dashboard</h2>
        <button onClick={getUid}>Get User</button>
      </div>
    )
}

export default Dashboard;