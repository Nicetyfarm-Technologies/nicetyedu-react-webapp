import react from "react";
import { useRef } from "react";
import { NavLink } from 'react-router-dom';

const MinNav = () => {

    const navRef2 = useRef();

    return (
        <div className="portal-navigation">
        <ul className="portal-navigation-inner" ref={navRef2}>
          <li className="nav-element">
            <NavLink to="/dashboard" activestyle="true" className="element">
              Dashboard
            </NavLink>
            
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/classes" activestyle="true" className="element">
              Classes
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/staff" activestyle="true" className="element">
              Staff Management
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/library" activestyle="true" className="element">
              E-Library
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/finances" activestyle="true" className="element">
              Finances
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/timetables" activestyle="true" className="element">
              Time Tables
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/enrollments" activestyle="true" className="element">
              Enrollments
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/results" activestyle="true" className="element">
              Results
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/dashboard/calenders" activestyle="true" className="element">
              Calenders
            </NavLink>
          </li>
        </ul>
      </div>
    )
}

export default MinNav;