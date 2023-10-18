import React, { useState } from "react";
import "./Results.css";

const InputRes = () => {
  const [subject, setSubject] = useState("English");
  const [grade, setGrade] = useState("Grade-8");
  const [classs, setClasss] = useState("A");
  const [week, setWeek] = useState("Week-2");

  return (
    <>
        <h2>Input Results</h2>
        <br />
        <div className="practicals">
          <form>
            <label>
              Grade:
              <select
                value={grade}
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
              >
                <option value="Grade-8">Grade 8</option>
                <option value="Grade-9">Grade 9</option>
                <option value="Grade-10">Grade 10</option>
                <option value="Grade-11">Grade 11</option>
                <option value="Grade-12">Grade 12</option>
              </select>
            </label>
            <label>
              Class:
              <select
                value={classs}
                onChange={(e) => {
                  setClasss(e.target.value);
                }}
              >
                <option value="A">{grade}A</option>
                <option value="B">{grade}B</option>
                <option value="C">{grade}C</option>
                <option value="D">{grade}D</option>
                <option value="E">{grade}E</option>
              </select>
            </label>
            <label>
              Week:
              <select
                value={week}
                onChange={(e) => {
                  setWeek(e.target.value);
                }}
              >
                <option value="Week-2">Week 2</option>
                <option value="Week-4">Week 4</option>
                <option value="Mid-term">Mid Term</option>
                <option value="Week-8">Week 8</option>
                <option value="Week-10">Week 10</option>
                <option value="End-of-term">End Of Term</option>
              </select>
            </label>
            <label>
              Subject:
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Literature">Literature</option>
                <option value="ICT">ICT</option>
                <option value="Business">Business</option>
                <option value="R.E">R.E</option>
                <option value="History">History</option>
                <option value="C.E">C.E</option>
                <option value="Geography">Geography</option>
              </select>
            </label>
            <button type="submit">Start</button>
          </form>
        </div>
      </>
  );
};

export default InputRes;
