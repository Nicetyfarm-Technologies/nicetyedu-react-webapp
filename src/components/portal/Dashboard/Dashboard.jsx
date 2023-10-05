import React from "react";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {

    return (
      <div className="portal">
       <Header />
       <div className="data-container">
        <DashboardNav />
       <Outlet />
       </div>
        
      </div>
    )
}

export default Dashboard;