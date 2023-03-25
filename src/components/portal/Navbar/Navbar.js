import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/icon.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const menu = <FontAwesomeIcon icon={faBars} />;
const close = <FontAwesomeIcon icon={faTimes} />;

function InNavBar() {
  const navRef = useRef();
//   const navRef2 = useRef();
  const navRef3 = useRef();
  const navRef4 = useRef();

  const user = {
    name: "Ice-berg Pvt",
    img: logo,
  };

  const showNavContent = () => {
    navRef.current.classList.toggle("responsive");
    // navRef2.current.classList.toggle("responsive");
    navRef3.current.classList.toggle("none");
    navRef4.current.classList.toggle("block");
  };

  return (
    <nav className="nav">
      <div className="main-nav" ref={navRef4}>
        <div>
          <div className="">
            <NavLink to="/" activestyle="true">
              <h2 className="logo">
                NICETY<span>EDU</span>
              </h2>
            </NavLink>
          </div>
        </div>
        <div>
          <button
            className="humburger btn"
            onClick={showNavContent}
            ref={navRef3}
          >
            {menu}
          </button>
          <div ref={navRef} className="primary-nav">
            <button className="close btn" onClick={showNavContent}>
              {close}
            </button>

            <div className="user-container">
              <NavLink to="/dashboard/profile" activestyle="true">
              <img src={user.img} alt="user-image" />
              </NavLink>
              <p>{user.name}</p>
            </div>

            <div className="">
              <NavLink to="/" activestyle="true" className="login-btn">
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default InNavBar;
