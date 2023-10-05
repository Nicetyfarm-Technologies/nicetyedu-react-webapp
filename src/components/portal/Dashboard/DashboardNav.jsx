import React, { useRef} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faDatabase,
  faDashboard,
  faFlag,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const menu = <FontAwesomeIcon icon={faBars} />;
const home = <FontAwesomeIcon icon={faHome} />;
const report = <FontAwesomeIcon icon={faFlag} />;
const analytics = <FontAwesomeIcon icon={faDatabase} />;
const closebtn = <FontAwesomeIcon icon={faClose} />;

const DashboardNav = () => {
  const menuRef = useRef();
  const humburger = useRef();
  const close = useRef();

  const showNavContent = () => {
    humburger.current.classList.toggle("none");
    // navRef2.current.classList.toggle("responsive");
    close.current.classList.toggle("none");
    menuRef.current.classList.toggle("none");
  };


  return (
      <div className="navs">
        <div className="humburger" ref={humburger} onClick={showNavContent}>
          {menu}
        </div>
        <div className="humburger none" ref={close} onClick={showNavContent}>
          {closebtn}
        </div>
        <div className="nav-elements">
          <Link to="/dashboard">{home} Home</Link>
          <Link to="/dashboard">{analytics} Analytics</Link>
          <Link to="/reports" className="red2">
            {report} Report An Issue
          </Link>
        </div>
        <div
          className="nav-elements2 none"
          ref={menuRef}
          onClick={showNavContent}
        >
          <Link to="/dashboard">{home} Home</Link>
          <Link to="/dashboard">{analytics} Analytics</Link>
          <Link to="/reports" className="red2">
            {report} Report An Issue
          </Link>
        </div>
      </div>
  );
};

export default DashboardNav;
