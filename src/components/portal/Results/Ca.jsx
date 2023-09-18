import React, { useState } from "react";
// import './Dashboard.css'
import MinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";

const Ca = () => {

    const [results, setResults] = useState([
        [
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
        ], // Week 2 results
        [
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
        ], // Week 4 results
        [
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
        ], // Mid-term results
        [
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
        ], // Week 8 results
        [
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
        ], // Week 10 results
        [
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
            {
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
                Mathematics: 72,
            },
        ], // End-of-term results
      ]);

      const [pupils, setPupils] = useState([]);
  const [classPosition, setClassPosition] = useState([]);

  const calculateAverages = () => {
    const averages = [];
    for (let i = 0; i < pupils.length; i++) {
      let totalScore = 0;
      for (let j = 0; j < results.length; j++) {
        const marks = results[j][i];
        const sum = marks.reduce((acc, mark) => acc + mark, 0);
        totalScore += sum;
      }
      const averageScore = totalScore / results.length;
      averages.push(averageScore);
    }
    return averages;
  };

  const calculatePoints = () => {
    const points = [];
    for (let i = 0; i < pupils.length; i++) {
      const bestSix = pupils[i]
        .sort((a, b) => b - a)
        .slice(0, 6)
        .reduce((acc, grade) => acc + grade, 0);
      points.push(bestSix);
    }
    return points;
  };

  const calculateClassPosition = () => {
    const points = calculatePoints();
    const sortedPoints = [...points].sort((a, b) => b - a);
    const position = points.map((point) => sortedPoints.indexOf(point) + 1);
    setClassPosition(position);
  };

  const handleAddPupil = () => {
    const newPupil = Array(9).fill(0); // Assuming 9 subjects per pupil
    setPupils([...pupils, newPupil]);
  };

  const handleSaveMarks = (marks, index) => {
    const updatedResults = [...results];
    updatedResults[index] = marks;
    setResults(updatedResults);
  };

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Continuous Assessment Results</h2><br />
        <div className="practicals">
        {/* <button onClick={handleAddPupil}>Add Pupil</button> */}
        <div className="buttons-n">
            <button type="button">Week 2</button>
            <button type="button">Week 4</button>
            <button type="button">Mid Term</button>
            <button type="button">Week 8</button>
            <button type="button">Week 10</button>
            <button type="button">End Of Term</button>
        </div>
      <table>
        <thead>
          <tr>
            <th>Pupil</th>
            <th>Eng</th>
            <th>Math</th>
            <th>Science</th>
            <th>Biology</th>
            <th>Agric</th>
            <th>His</th>
            <th>Geo</th>
            <th>CE</th>
            <th>RE</th>
            <th>RE</th>
            <th>RE</th>
            <th>RE</th>
            <th>RE</th>
          </tr>
        </thead>
        <tbody>
          {pupils.map((pupil, index) => (
            <tr key={index}>
              <td>Pupil {index + 1}</td>
              {results.map((subjectResults, i) => (
                <td key={i}>
                  <input
                    type="number"
                    value={pupil[i]}
                    onChange={(e) => {
                      const newMarks = [...pupil];
                      newMarks[i] = parseInt(e.target.value);
                      handleSaveMarks(newMarks, i);
                    }}
                  />
                </td>
              ))}
              <td>{calculateAverages()[index]}</td>
              <td>{calculatePoints()[index]}</td>
              <td>{classPosition[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
      </div>
    </div>
  );
};

export default Ca;
