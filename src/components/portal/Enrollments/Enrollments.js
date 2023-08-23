import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  query,
  collection,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
// import './Dashboard.css'
import MinNav from "../minNav/MinVav";

const Enrollments = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  // const [studentId, setStudentId] = useState("");
  const [sex, setSex] = useState("male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [enrolmentDate, setEnrollmentDate] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianNumber, setGuardianNumber] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [grade, setGrade] = useState("grade8a");

  const [pupil, setPupil] = useState([]);

  const [pupils, setPupils] = useState([{}]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnrollmentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const enrollPupil = async (e) => {
    e.preventDefault();
    await setDoc(
      doc(db, "pupils", "20230001" + grade + enrolmentDate), {
        id: "20230001" + grade + enrolmentDate,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        sex: sex,
        address: address,
        dob: dob,
        guardianName: guardianName,
        guardianNumber: guardianNumber,
        guardianEmail: guardianEmail,
        enrolmentDate: enrolmentDate.toLocaleDateString(),
      }
    );
    // setTitle("");
    // setDescription("");
    // setAssignee("No one");
    alert("Enrolled Successfully");
  };
  // }
  // };

  useEffect(() => {
    //for 8a
    const q = query(collection(db, `pupils`));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let pupilsArr = [];
      querySnapshot.forEach((doc) => {
        pupilsArr.push({ ...doc.data(), id: doc.id });
      });
      setPupils(pupilsArr);
    }, []);
    
    return () => unSubscribe();
  });
  // };

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Enrollments</h2>
        <form onSubmit={enrollPupil} className="annonce-form2">
          <h3>Add Pupil</h3>
          <div className="inputs">
            <select
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value);
              }}
            >
              <option value="grade8a">Grade 8A</option>
              <option value="grade8b">Grade 8B</option>
              <option value="grade8c">Grade 8C</option>
              <option value="grade8d">Grade 8D</option>
              <option value="grade9a">Grade 9A</option>
              <option value="grade9b">Grade 9B</option>
              <option value="grade9c">Grade 9C</option>
              <option value="grade9d">Grade 9D</option>
              <option value="grade10a">Grade 10A</option>
              <option value="grade10b">Grade 10B</option>
              <option value="grade10c">Grade 10C</option>
              <option value="grade10d">Grade 10D</option>
              <option value="grade11a">Grade 11A</option>
              <option value="grade11b">Grade 11B</option>
              <option value="grade11c">Grade 11C</option>
              <option value="grade11d">Grade 11D</option>
            </select>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="D.O.B"
              required
            />
            <select
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
            </select>
            <input
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Resdential Address"
              required
            />
            <input
              type="text"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
              placeholder="Guardian's FullName"
              required
            />
            <input
              type="text"
              value={guardianNumber}
              onChange={(e) => setGuardianNumber(e.target.value)}
              placeholder="Guardian's Phone Number"
              required
            />
            <input
              type="email"
              value={guardianEmail}
              onChange={(e) => setGuardianEmail(e.target.value)}
              placeholder="Guardian's Email Address"
            />
            <button type="submit">Enroll</button>
          </div>
        </form>
        <div className="students">
          <h3>Pupils</h3>
          <table>
            <tr>
              <th>Pupil ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>D.O.B</th>
              <th>Enrollment Date</th>
              <th>Guardian's FullName</th>
              <th>Guardian's Phone</th>
              <th>Guardian's Email</th>
            </tr>
            {pupils.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.studentId}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.sex}</td>
                  <td>{val.address}</td>
                  <td>{val.dob}</td>
                  <td>{val.enrolmentDate}</td>
                  <td>{val.guardianName}</td>
                  <td>{val.guardianNumber}</td>
                  <td>{val.guardianEmail}</td>
                </tr>
              );
            })}
          </table>
        </div>
              </div>
    </div>
  );
};

export default Enrollments;
