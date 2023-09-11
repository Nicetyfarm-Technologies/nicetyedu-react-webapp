import React from 'react';
// import './Dashboard.css'
import MinNav from '../minNav/MinVav';

const Timetables = () => {
// Define constants for the schedule
const START_TIME = 7 * 60 + 20; // 7:20 AM in minutes
const END_TIME = 16 * 60; // 4:00 PM in minutes
const BREAK_1_START = 10 * 60; // 10:00 AM in minutes
const BREAK_1_END = 10 * 60 + 20; // 10:20 AM in minutes
const BREAK_2_START = 13 * 60; // 1:00 PM in minutes
const BREAK_2_END = 14 * 60; // 2:00 PM in minutes
const CLASS_DURATION = 40; // Duration of each class in minutes

// Define subjects and teachers
const subjects = [
  { name: 'Subject 1', teachers: ['Teacher A', 'Teacher B', 'Teacher C'] },
  { name: 'Subject 2', teachers: ['Teacher D', 'Teacher E'] },
  { name: 'Subject 3', teachers: ['Teacher F', 'Teacher E'] },
  { name: 'Subject 4', teachers: ['Teacher H', 'Teacher E'] },
  { name: 'Subject 5', teachers: ['Teacher J', 'Teacher K'] },
  { name: 'Subject 6', teachers: ['Teacher L', 'Teacher M'] },
  { name: 'Subject 7', teachers: ['Teacher N', 'Teacher O'] },
  { name: 'Subject 8', teachers: ['Teacher P', 'Teacher Q'] },
  { name: 'Subject 9', teachers: ['Teacher R', 'Teacher S'] },
  { name: 'Subject 10', teachers: ['Teacher T', 'Teacher U'] },
  // Add more subjects with teachers as needed
];

// Generate the class timetable
function generateTimetable() {
  const timetable = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  };

  let currentTime = START_TIME;

  while (currentTime < END_TIME) {
    // Check if it's a break time
    if (
      (currentTime >= BREAK_1_START && currentTime < BREAK_1_END) ||
      (currentTime >= BREAK_2_START && currentTime < BREAK_2_END)
    ) {
      currentTime = Math.max(currentTime, BREAK_1_END, BREAK_2_END); // Skip breaks
    } else {
      // Allocate classes to subjects
      const availableSubjects = [...subjects];

      while (availableSubjects.length > 0) {
        const randomSubjectIndex = Math.floor(Math.random() * availableSubjects.length);
        const selectedSubject = availableSubjects[randomSubjectIndex];
        const randomTeacherIndex = Math.floor(Math.random() * selectedSubject.teachers.length);
        const selectedTeacher = selectedSubject.teachers[randomTeacherIndex];

        timetable.Monday.push({
          subject: selectedSubject.name,
          teacher: selectedTeacher,
          time: currentTime,
        });
        timetable.Tuesday.push({
          subject: selectedSubject.name,
          teacher: selectedTeacher,
          time: currentTime,
        });
        timetable.Wednesday.push({
          subject: selectedSubject.name,
          teacher: selectedTeacher,
          time: currentTime,
        });
        timetable.Thursday.push({
          subject: selectedSubject.name,
          teacher: selectedTeacher,
          time: currentTime,
        });
        timetable.Friday.push({
          subject: selectedSubject.name,
          teacher: selectedTeacher,
          time: currentTime,
        });

        currentTime += CLASS_DURATION;

        // Remove the subject from the available list to avoid double periods
        availableSubjects.splice(randomSubjectIndex, 1);

        // Check if the day is over
        if (currentTime >= END_TIME) {
          break;
        }
      }
    }
  }

  return timetable;
}

// Usage
const generatedTimetable = generateTimetable();
console.log(generatedTimetable);


    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Timetables</h2>

        <button type='button' onClick={generateTimetable}>Generate</button>
        </div>
      </div>
    )
}

export default Timetables;