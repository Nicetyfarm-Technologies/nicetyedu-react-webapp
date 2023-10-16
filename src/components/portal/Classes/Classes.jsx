import React from "react";
import "./Classes.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Classes = () => {

  const g8Ref = useRef();
	const g9Ref = useRef();
	const g10Ref = useRef();
	const g11Ref = useRef();
  const g12Ref = useRef();

	const show8Classes = () => {
		g8Ref.current.classList.toggle('none');
	}
  const show9Classes = () => {
		g9Ref.current.classList.toggle('none');
	}
  const show10Classes = () => {
		g10Ref.current.classList.toggle('none');
	}
  const show11Classes = () => {
		g11Ref.current.classList.toggle('none');
	}
  const show12Classes = () => {
		g12Ref.current.classList.toggle('none');
	}

  const [classpage, setPage] = useState(true);

  if(classpage === true) 

  return (
    <>
        <h2>Classes</h2>
        <div className="classes-div">
          <div className="classes-nav">
            <ul>
              <li>
                <NavLink to="/dashboard/classes">Pupils Records</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/dashboard/attendance" activestyle="true">Attendance Records</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/dashboard/subjects" activestyle="true">Subjects</NavLink>
              </li>
            </ul>
          </div>

          <div className="classes-main-content">
            <div className="ul">
              <div className="grad-btn">
                <button onClick={show8Classes}>Grade 8</button>
                <div className="grade-content none" ref={g8Ref}>
                  <NavLink to="/dashboard/grade8apupils">8A</NavLink>
                  <NavLink to="/dashboard/grade8bpupils">8B</NavLink>
                  <NavLink to="/dashboard/grade8cpupils">8C</NavLink>
                  <NavLink to="/dashboard/grade8dpupils">8D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show9Classes}>Grade 9</button>
                <div className="grade-content none" ref={g9Ref}>
                  <NavLink to="/dashboard/grade9apupils">9A</NavLink>
                  <NavLink to="/dashboard/grade9bpupils">9B</NavLink>
                  <NavLink to="/dashboard/grade9cpupils">9C</NavLink>
                  <NavLink to="/dashboard/grade9dpupils">9D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show10Classes}>Grade 10</button>
                <div className="grade-content none" ref={g10Ref}>
                  <NavLink to="/dashboard/grade10apupils">10A</NavLink>
                  <NavLink to="/dashboard/grade10bpupils">10B</NavLink>
                  <NavLink to="/dashboard/grade10cpupils">10C</NavLink>
                  <NavLink to="/dashboard/grade10dpupils">10D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show11Classes}>Grade 11</button>
                <div className="grade-content none" ref={g11Ref}>
                  <NavLink to="/dashboard/grade11apupils">11A</NavLink>
                  <NavLink to="/dashboard/grade11bpupils">11B</NavLink>
                  <NavLink to="/dashboard/grade11cpupils">11C</NavLink>
                  <NavLink to="/dashboard/grade11dpupils">11D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show12Classes}>Grade 12</button>
                <div className="grade-content none" ref={g12Ref}>
                  <NavLink to="/dashboard/grade12apupils">12A</NavLink>
                  <NavLink to="/dashboard/grade12bpupils">12B</NavLink>
                  <NavLink to="/dashboard/grade12cpupils">12C</NavLink>
                  <NavLink to="/dashboard/grade12dpupils">12D</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Classes;
