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
import MinNav from '../minNav/MinVav';

const Staff = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [sex, setSex] = useState("male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [enrolmentDate, setEnrollmentDate] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianNumber, setGuardianNumber] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [grade, setGrade] = useState("grade8a");

  const [grade8a, setGrade8a] = useState([]);
  const [grade8b, setGrade8b] = useState([]);
  const [grade8c, setGrade8c] = useState([]);
  const [grade8d, setGrade8d] = useState([]);
  const [grade9a, setGrade9a] = useState([]);
  const [grade9b, setGrade9b] = useState([]);
  const [grade9c, setGrade9c] = useState([]);
  const [grade9d, setGrade9d] = useState([]);
  const [grade10a, setGrade10a] = useState([]);
  const [grade10b, setGrade10b] = useState([]);
  const [grade10c, setGrade10c] = useState([]);
  const [grade10d, setGrade10d] = useState([]);
  const [grade11a, setGrade11a] = useState([]);
  const [grade11b, setGrade11b] = useState([]);
  const [grade11c, setGrade11c] = useState([]);
  const [grade11d, setGrade11d] = useState([]);
  const [grade12a, setGrade12a] = useState([]);
  const [grade12b, setGrade12b] = useState([]);
  const [grade12c, setGrade12c] = useState([]);
  const [grade12d, setGrade12d] = useState([]);

  const [pupils, setPupils] = useState([
    ["Grade 8A", []],
    ["Grade 8B", []],
    ["Grade 8C", []],
    ["Grade 8D", []],
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnrollmentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const enrollPupil = async (e) => {
    e.preventDefault();
    await setDoc(
      doc(db, "staff" + grade, "20230001" + grade + enrolmentDate.toLocaleDateString() + enrolmentDate.toLocaleTimeString()),
      {
        id: "20230001" + grade + enrolmentDate.toLocaleDateString() + enrolmentDate.toLocaleTimeString(),
        firstName: firstName,
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
    await setDoc(doc(db, "staff", "20230001" + grade + enrolmentDate.toLocaleDateString() + enrolmentDate.toLocaleTimeString()), {
      id: "20230001" + grade + enrolmentDate.toLocaleDateString() + enrolmentDate.toLocaleTimeString(),
      firstName: firstName,
      lastName: lastName,
      sex: sex,
      address: address,
      grade: grade,
      dob: dob,
      guardianName: guardianName,
      guardianNumber: guardianNumber,
      guardianEmail: guardianEmail,
      enrolmentDate: enrolmentDate.toLocaleDateString(),
    });
    // setTitle("");
    // setDescription("");
    // setAssignee("No one");
    alert("Enrolled Successfully");
  };
  // }
  // };

  useEffect(() => {
    //for 8a
    const q = query(collection(db, `pupils8a`));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let pupilsArr = [];
      querySnapshot.forEach((doc) => {
        pupilsArr.push({ ...doc.data(), id: doc.id });
      });
      setGrade8a(pupilsArr);
    });
    
    return () => unSubscribe();
  });
  // };

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Staff Management</h2>
        <form onSubmit={enrollPupil} className="annonce-form2">
          <h3>Add Staff</h3>
          <div className="inputs">
            <select
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value);
              }}
            >
              <option value="grade8a">Mathematics</option>
              <option value="grade8b">Languages</option>
              <option value="grade8c">ICT</option>
              <option value="grade8d">Natural Sciences</option>
              <option value="grade9a">Social Sciences</option>
              <option value="grade9b">Design & Technology</option>
              <option value="grade9c">Agriculture</option>
              <option value="grade9d">Art</option>
              <option value="grade10a">Food And Nutrition</option>
              <option value="grade10b">Business</option>
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
          <h3>Mathematics Dept</h3>
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
            {grade8a.map((val, key) => {
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
        <div className="students">
          <h3>Languages Dept</h3>
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
            {grade8b.map((val, key) => {
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
        <div className="students">
          <h3>Natural Sciences Dept</h3>
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
            {grade8c.map((val, key) => {
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
        <div className="students">
          <h3>Natural Sciences Dept </h3>
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
            {grade8d.map((val, key) => {
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
}

export default Staff;