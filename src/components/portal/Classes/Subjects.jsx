import React from "react";
import "./Classes.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Subjects = () => {

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

  const classpage = useState(true);

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
                <NavLink to="/dashboard/attendance">Attendance Records</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to="/dashboard/subjects">Subjects</NavLink>
              </li>
            </ul>
          </div>

          <div className="classes-main-content">
            <div className="ul">
              <div className="grad-btn">
                <button onClick={show8Classes}>Grade 8</button>
                <div className="grade-content none" ref={g8Ref}>
                  <NavLink to="/dashboard/grade8asubjects">8A</NavLink>
                  <NavLink to="/dashboard/grade8bsubjects">8B</NavLink>
                  <NavLink to="/dashboard/grade8csubjects">8C</NavLink>
                  <NavLink to="/dashboard/grade8dsubjects">8D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show9Classes}>Grade 9</button>
                <div className="grade-content none" ref={g9Ref}>
                  <NavLink to="/dashboard/grade9asubjects">9A</NavLink>
                  <NavLink to="/dashboard/grade9bsubjects">9B</NavLink>
                  <NavLink to="/dashboard/grade9csubjects">9C</NavLink>
                  <NavLink to="/dashboard/grade9dsubjects">9D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show10Classes}>Grade 10</button>
                <div className="grade-content none" ref={g10Ref}>
                  <NavLink to="/dashboard/grade10asubjects">10A</NavLink>
                  <NavLink to="/dashboard/grade10bsubjects">10B</NavLink>
                  <NavLink to="/dashboard/grade10csubjects">10C</NavLink>
                  <NavLink to="/dashboard/grade10dsubjects">10D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show11Classes}>Grade 11</button>
                <div className="grade-content none" ref={g11Ref}>
                  <NavLink to="/dashboard/grade11asubjects">11A</NavLink>
                  <NavLink to="/dashboard/grade11bsubjects">11B</NavLink>
                  <NavLink to="/dashboard/grade11csubjects">11C</NavLink>
                  <NavLink to="/dashboard/grade11dsubjects">11D</NavLink>
                </div>
              </div>
              <div className="grad-btn">
                <button onClick={show12Classes}>Grade 12</button>
                <div className="grade-content none" ref={g12Ref}>
                  <NavLink to="/dashboard/grade12asubjects">12A</NavLink>
                  <NavLink to="/dashboard/grade12bsubjects">12B</NavLink>
                  <NavLink to="/dashboard/grade12csubjects">12C</NavLink>
                  <NavLink to="/dashboard/grade12dsubjects">12D</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Subjects;
