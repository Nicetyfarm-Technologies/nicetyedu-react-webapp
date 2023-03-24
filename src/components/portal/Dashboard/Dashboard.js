import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';

const Dashboard = () => {
    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Dashboard</h2>
        </div>
      </div>
    )
}

export default Dashboard;