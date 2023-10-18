import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  query,
  collection,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import Modal from "react-modal";
import { db } from "../../firebase/config";
import avarta from "../images/avarta.png";

const customStyles = {
  content: {
    top: "10%",
    left: "10%",
    right: "auto",
    bottom: "auto",
    margin: "2%",
  },
};

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
  
  const userImg = useState(avarta);

  // const [pupil, setPupil] = useState([]);
  const [indiv, setIndiv] = useState({
    firstName: "",
    lastName: "",
    sex: "",
  });

  const [pupils, setPupils] = useState([{}]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(val) {
    setIndiv(val);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        studentId: enrolmentDate.getTime(),
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        grade: grade,
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

  
  const deletePupil = async (id) => {
    await deleteDoc(doc(db, "pupils", id));
    closeModal();
  };

  return (
    <>
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

        <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-body">
          <h2>
            {indiv.firstName} {indiv.middleName} {indiv.lastName}
          </h2>
          <div className="user-details">
            <div className="image-div">
              <img src={userImg} alt="user-icon" />
            </div>
            <div className="det">
            <p>GUARDIAN NAME: {indiv.guardianName} </p>
              <p>GUARDIAN EMAIL: {indiv.email}</p>
              <p>GUARDIAN PHONE NUMBER: {indiv.guardianNumber}</p>
              <p>SEX: {indiv.sex}</p>
              <p>D.O.B: {indiv.dob}</p>
              {/* <p>ADDRESS: {indiv.address} </p> */}
            </div>
          </div>
          <div className="other-det">
            <ul>
              <li>ID: {indiv.studentId}</li>
              <li>GRADE: {indiv.grade}</li>
              <li>CLASS: {indiv.class} </li>
              {/* <li>HIGHEST LEVEL: {indiv.qualification}</li> */}
            </ul>
            <ul>
              <li>DATE JOINED: {indiv.enrolmentDate}</li>
              <li>ADDRESS: {indiv.address}</li>
              {/* <li>CLASSES: </li> */}
              {/* <li>HIGHEST LEVEL: {indiv.qualification}</li> */}
            </ul>
          </div>
          <button
            onClick={(e) => {
              deletePupil(indiv.id);
            }}
          >
            Delete Pupil
          </button>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>

        <div className="students">
          <h3>Pupils</h3>
          <table>
            <tr>
              <th>Pupil ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Grade</th>
              <th>Enrollment Date</th>
              <th>Guardian's FullName</th>
              <th>More</th>
            </tr>
            {pupils.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.studentId}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.sex}</td>
                  <td>{val.address}</td>
                  <td>{val.grade}</td>
                  <td>{val.enrolmentDate}</td>
                  <td>{val.guardianName}</td>
                  <td onClick={() => openModal(val)}>View</td>
                </tr>
              );
            })}
          </table>
        </div>
        </>
  );
};

export default Enrollments;
