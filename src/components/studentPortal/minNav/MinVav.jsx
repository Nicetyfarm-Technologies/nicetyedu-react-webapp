import { useRef } from "react";
import { NavLink } from 'react-router-dom';

const StudentsMinNav = () => {

    const navRef2 = useRef();

    return (
        <div className="portal-navigation">
        <ul className="portal-navigation-inner" ref={navRef2}>
          <li className="nav-element">
            <NavLink to="/studentsdashboard/dashboard" activestyle="true" className="element">
              Library
            </NavLink>
            
          </li>
          <hr />
          
          <li className="nav-element">
            <NavLink to="/studentsdashboard/results" activestyle="true" className="element">
              Results/Attendance
            </NavLink>
          </li>
          <hr />
          
          <li className="nav-element">
            <NavLink to="/studentsdashboard/skills" activestyle="true" className="element">
              Essential Skills
            </NavLink>
          </li>
        </ul>
      </div>
    )
}

export default StudentsMinNav;