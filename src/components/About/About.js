import React, { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import sc from "../Images/sc.jpeg";

// const img = import "../Images/sc.jpeg";

function About() {

    const moreRef = useRef();
    const hideRef = useRef();
    const showRef = useRef();

    const showNavContent = () => {
		moreRef.current.classList.toggle('display');
        hideRef.current.classList.toggle('none');
        showRef.current.classList.toggle('none');
	}



  return (
    <div className="about-container">
      <h2>About Product</h2>
      <div className="data-container">
        <div className="description">
          <h3>Nicety Education</h3>
          <p>
            NicetyEdu which is just one of the products for Nicety Technologies,
            is a school management and school resources system designed to help
            productivity in schools, reducing costs, time, and reducing staff
            paperwork for security In schools. It further gives pupils access to
            unlimited study and learning resources at any time, cutting down
            their expenses in purchasing study material as well as disturbances
            when physical classes are not permitted. It is a product that helps
            the school with financial management, pupils' payments, timetabling,
            results generation and records keeping.
            <span className="more" ref={moreRef}>
              It gives the pupils materials such as Textbooks, Video lessons
              short by their teachers, quizzes, assignments, epracticals,
              results etc. They are able to interact with the staff and ask
              questions on video lessons available, track their attendance
              records and get announcements from the school.
            </span>
          </p>
          <button className="see-more" ref={hideRef} onClick={showNavContent}>Read More</button>
          <button className="see-more none" ref={showRef} onClick={showNavContent}>Read Less</button>
        </div>
        <div className="img-vid">
          <img className="product-img" src={sc}></img>
        </div>
      </div>
    </div>
  );
}

export default About;
