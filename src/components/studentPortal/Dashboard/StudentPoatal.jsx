import React from "react";
import "react-slideshow-image/dist/styles.css";
import "./Dashboard.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link, Outlet } from "react-router-dom";
import StudentsInNavBar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const StudentsPortal = () => {
  return (
    <>
      <StudentsInNavBar />
      <div className="portal-content">
        <StudentsMinNav />
        <div className="portal-page-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentsPortal;
