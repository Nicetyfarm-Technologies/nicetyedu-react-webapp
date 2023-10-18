import React from "react";
import "react-slideshow-image/dist/styles.css";
import "./Dashboard.css";
import MinNav from "../minNav/MinVav";
import { Outlet } from "react-router-dom";
import InNavBar from "../Navbar/Navbar";

const Dashboard = () => {
  

  return (
    <>
      <InNavBar />
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
