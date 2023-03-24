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
            <NavLink to="/classes" activestyle="true" className="element">
              Classes
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/staff" activestyle="true" className="element">
              Staff Management
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/library" activestyle="true" className="element">
              E-Library
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/finances" activestyle="true" className="element">
              Finances
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/timetables" activestyle="true" className="element">
              Time Tables
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/enrollment" activestyle="true" className="element">
              Enrollments
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/results" activestyle="true" className="element">
              Results
            </NavLink>
          </li>
          <hr />
          <li className="nav-element">
            <NavLink to="/calenders" activestyle="true" className="element">
              Calenders
            </NavLink>
          </li>
        </ul>
      </div>
    )
}

export default MinNav;