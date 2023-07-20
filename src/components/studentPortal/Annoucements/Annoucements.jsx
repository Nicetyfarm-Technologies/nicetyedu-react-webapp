import React from "react";
import "./Announcements.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Announcements = () => {
  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Announcements</h2>
        <br />
        <p>Latest</p>
        <ul className="announcements">
          <li className="announce">
            <h3>Openning Of Schools</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quis
              ratione quae quidem laboriosam quos maxime? Reprehenderit deleniti
              sit minima, neque temporibus voluptas illo nemo corporis, ve
            </p>
            <small><i>10-07-2023 09:38</i></small>
          </li>
          <li className="announce">
            <h3>Openning Of Schools</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quis
              ratione quae quidem laboriosam quos maxime? Reprehenderit deleniti
              sit minima, neque temporibus voluptas illo nemo corporis, vero
              assumenda ipsa! Aliquid?
            </p>
            <small><i>10-07-2023 09:38</i></small>
          </li>
          <li className="announce">
            <h3>Openning Of Schools</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quis
              ratione quae quidem laboriosam quos maxime? Reprehenderit deleniti
              sit minima, neque temporibus voluptas illo nemo corporis, vero
              assumenda ipsa! Aliquid?
            </p>
            <small><i>10-07-2023 09:38</i></small>
          </li>
          <li className="announce">
            <h3>Openning Of Schools</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quis
              ratione quae quidem laboriosam quos maxime? Reprehenderit deleniti
              sit minima, neque temporibus voluptas illo nemo corporis, vero
              assumenda ipsa! Aliquid?
            </p>
            <small><i>10-07-2023 09:38</i></small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
