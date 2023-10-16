import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const menu = <FontAwesomeIcon icon={faBars} />;
const close = <FontAwesomeIcon icon={faTimes} />;

const MinNav = () => {
  const navRef = useRef();
  const navRef3 = useRef();
  const navRef4 = useRef();

  const showNavContent = () => {
    navRef.current.classList.toggle("none");
    navRef3.current.classList.toggle("none");
    navRef4.current.classList.toggle("none");
  };

  return (
    <div className="portal-navigation">
      <button
				type="button"
				className="humburger2 btn"
				onClick={showNavContent}
				ref={navRef3}
			>
				{menu}
			</button>
			<button
				type="button"
				className="humburger2 btn none"
				onClick={showNavContent}
				ref={navRef}
			>
				{close}
			</button>
      <ul className="portal-navigation-inner2 none" ref={navRef4}>
        <li className="nav-element">
          <NavLink to="/dashboard" activestyle="true" className="element">
            Announcements
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
          <NavLink
            to="/dashboard/enrollments"
            activestyle="true"
            className="element"
          >
            Enrollments
          </NavLink>
        </li>
        <hr />

        <li className="nav-element">
          <NavLink
            to="/dashboard/results"
            activestyle="true"
            className="element"
          >
            Results
          </NavLink>
        </li>
        <hr />

        <li className="nav-element">
          <NavLink
            to="/dashboard/library"
            activestyle="true"
            className="element"
          >
            E-Library
          </NavLink>
        </li>
        <hr />

        <li className="nav-element">
          <NavLink
            to="/dashboard/classes"
            activestyle="true"
            className="element"
          >
            Classes
          </NavLink>
        </li>
        <hr />

        <li className="nav-element">
          <NavLink
            to="/dashboard/finances"
            activestyle="true"
            className="element"
          >
            Finances
          </NavLink>
        </li>
        <hr />

        <li className="nav-element">
          <NavLink
            to="/dashboard/timetables"
            activestyle="true"
            className="element"
          >
            Time Tables
          </NavLink>
        </li>
        <hr />

        <li className="nav-element">
          <NavLink
            to="/dashboard/calenders"
            activestyle="true"
            className="element"
          >
            Calenders
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MinNav;
