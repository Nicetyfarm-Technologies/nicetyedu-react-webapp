import React from "react";
import { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import logo from "../images/icon.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const menu = <FontAwesomeIcon icon={faBars} />;
const close = <FontAwesomeIcon icon={faTimes} />;

function InNavBar() {
  const navRef = useRef();
  const navRef3 = useRef();
  const navRef4 = useRef();
  const navigate = useNavigate();

  const [displayName2, setName] = useState("");
  const [displayImage, setImage] = useState({ logo });

  const logOut = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const getUserProfile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      setName(displayName);
      setImage(photoURL);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

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
          
          <div ref={navRef} className="primary-nav">
            <button className="close btn" onClick={showNavContent}>
              {close}
            </button>

            <div className="user-container">
              <NavLink to="/dashboard/profile" activestyle="true">
                <img src={displayImage} alt="user" />
              </NavLink>
              <p>{displayName2}</p>
            </div>

            <div className="">
              <button
                onClick={logOut}
                type="button"
                name="Logout"
                className="login-btn"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default InNavBar;
