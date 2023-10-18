import React from "react";
import './Pastpapers.css';
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const StudentsPastpapers = () => {
  // const g8Ref = useRef();
  const g9Ref = useRef();
  // const g10Ref = useRef();
  // const g11Ref = useRef();
  const g12Ref = useRef();
  const g9eRef = useRef();
  const g12eRef = useRef();

  // const show8Classes = () => {
  //   g8Ref.current.classList.toggle("none");
  // };
  const show9Classes = () => {
    g9Ref.current.classList.toggle("none");
  };
  // const show10Classes = () => {
  //   g10Ref.current.classList.toggle("none");
  // };
  // const show11Classes = () => {
  //   g11Ref.current.classList.toggle("none");
  // };
  const show12Classes = () => {
    g12Ref.current.classList.toggle("none");
  };
  const show9eClasses = () => {
    g9eRef.current.classList.toggle("none");
  };
  const show12eClasses = () => {
    g12eRef.current.classList.toggle("none");
  };

  return (
    <>
        <h2>Students Past Papers</h2><br />
        <h3>School Past Papers</h3>
        
        <div className="grad-btn">
          <button onClick={show9Classes}>Junior Secondary</button>
          <div className="grade-content none" ref={g9Ref}>
            <NavLink to="/dashboard/grade10apupils">Mathematics</NavLink>
            <NavLink to="/dashboard/grade10bpupils">English</NavLink>
            <NavLink to="/dashboard/grade10cpupils">Science</NavLink>
            <NavLink to="/dashboard/grade10dpupils">RE</NavLink>
            <NavLink to="/dashboard/grade10dpupils">BS</NavLink>
            <NavLink to="/dashboard/grade10dpupils">ICT</NavLink>
            <NavLink to="/dashboard/grade10dpupils">Social Studies</NavLink>
            <NavLink to="/dashboard/grade10dpupils">DT</NavLink>
            <NavLink to="/dashboard/grade10dpupils">HE</NavLink>
            <NavLink to="/dashboard/grade10dpupils">Art</NavLink>
          </div>
        </div>
        
        <div className="grad-btn">
          <button onClick={show12Classes}>Senior Secondary</button>
          <div className="grade-content none" ref={g12Ref}>
            <NavLink to="/dashboard/grade10apupils">Mathematics</NavLink>
            <NavLink to="/dashboard/grade10bpupils">English</NavLink>
            <NavLink to="/dashboard/grade10cpupils">Science</NavLink>
            <NavLink to="/dashboard/grade10dpupils">RE</NavLink>
            <NavLink to="/dashboard/grade10dpupils">Accounts</NavLink>
            <NavLink to="/dashboard/grade10dpupils">History</NavLink>
            <NavLink to="/dashboard/grade10dpupils">Civic Education</NavLink>
            <NavLink to="/dashboard/grade10dpupils">Geography</NavLink>
            <NavLink to="/dashboard/grade10dpupils">DT</NavLink>
            <NavLink to="/dashboard/grade10dpupils">HE</NavLink>
            <NavLink to="/dashboard/grade10dpupils">Art</NavLink>
          </div>
        </div>
        
        <h3>ECZ Past Papers</h3>
        <div className="grad-btn">
          <button onClick={show9eClasses}>Grade 9</button>
          <div className="grade-content none" ref={g9eRef}>
            <NavLink to="/dashboard/grade10apupils">Mathematics</NavLink>
          </div>
        </div>
        <div className="grad-btn">
          <button onClick={show12eClasses}>Grade 12</button>
          <div className="grade-content none" ref={g12eRef}>
            <NavLink to="/studentsdashboard/pastpapers/ecz/mathematics-12">Mathematics</NavLink>
          </div>
        </div>
      </>
  );
};

export default StudentsPastpapers;
