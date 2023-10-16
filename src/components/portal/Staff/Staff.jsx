import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import {
  onSnapshot,
  query,
  collection,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
// import chroma from "chroma-js";
// import { ColourOption, colourOptions } from "../data";
// import Select, { StylesConfig } from "react-select";
import avarta from "../images/avarta.png";
import Modal from "react-modal";
import auth from "../../firebase/config";
import { db } from "../../firebase/config";

const customStyles = {
  content: {
    top: "10%",
    left: "10%",
    right: "auto",
    bottom: "auto",
    margin: "2%",
    // transform: 'translate(-10%, -10%)',
  },
};

const Staff = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [qualification, setQualification] = useState("certificate");
  const [sex, setSex] = useState("male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [enrolmentDate, setEnrollmentDate] = useState("");
  const [nrc, setNrc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("mathematics");
  const [subjects, setSubjects] = useState([]);
  const [hod, setHod] = useState(false);
  const [classes, setClasses] = useState([]);
  const [userImg, setUserImg] = useState(avarta);
  const [isAccounts, setIsAccounts] = useState(false);
  const [isHead, setIsHead] = useState(false);
  const password = "test1234";
  const [indiv, setIndiv] = useState({
    firstName: "",
    lastName: "",
    sex: "",
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(val) {
    setIndiv(val);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnrollmentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addStaff = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "staff", "20230001" + department + enrolmentDate), {
      id: "20230001" + department + enrolmentDate,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      sex: sex,
      address: address,
      dob: dob,
      qualification: qualification,
      department: department,
      nrc: nrc,
      phoneNumber: phoneNumber,
      email: email,
      dateAdded: enrolmentDate.toLocaleDateString(),
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // setTitle("");
    // setDescription("");
    // setAssignee("No one");
    alert("Added Successfully");
  };

  const deleteStaff = async (id) => {
    await deleteDoc(doc(db, "staff", id));
    const auth = getAuth();
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
      console.log("User deleted.")
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
    closeModal();
  };

  useEffect(() => {
    //for 8a
    const q = query(collection(db, `staff`));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let pupilsArr = [];
      querySnapshot.forEach((doc) => {
        pupilsArr.push({ ...doc.data(), id: doc.id });
      });
      setStaff(pupilsArr);
    });
    return () => unSubscribe();
  }, []);
  // };

  return (
    <>
      <h2>Staff Management</h2>
      <form onSubmit={addStaff} className="annonce-form2">
        <h3>Add Staff</h3>
        <div className="inputs">
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            <option value="math">Mathematics</option>
            <option value="languages">Languages</option>
            <option value="ict">ICT</option>
            <option value="ns">Natural Sciences</option>
            <option value="ss">Social Sciences</option>
            <option value="dt">Design & Technology</option>
            <option value="agric">Agriculture</option>
            <option value="art">Art</option>
            <option value="fn">Food And Nutrition</option>
            <option value="bs">Business</option>
            <option value="accounts">Accounts</option>
            <option value="guidance">Guidance</option>
            <option value="other">other</option>
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
            value={nrc}
            onChange={(e) => setNrc(e.target.value)}
            placeholder="NRC"
            required
          />
          <select
            value={qualification}
            onChange={(e) => {
              setQualification(e.target.value);
            }}
          >
            <option value="certificate">Certificate</option>
            <option value="diploma">Diploma</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PHD</option>
          </select>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <button type="submit">Add</button>
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
              <p>EMAIL: {indiv.email}</p>
              <p>PHONE NUMBER: {indiv.phoneNumber}</p>
              <p>SEX: {indiv.sex}</p>
              <p>D.O.B: {indiv.dob}</p>
              <p>NRC: {indiv.nrc}</p>
            </div>
          </div>
          <div className="other-det">
            <ul>
              <li>DEPARTMENT: {indiv.department}</li>
              <li>IS H.O.D: {indiv.isHod}</li>
              <li>SUBJECTS: </li>
              <li>HIGHEST LEVEL: {indiv.qualification}</li>
            </ul>
            <ul>
              <li>DATE JOINED: {indiv.dateAdded}</li>
              <li>CLASS TEACHER: {indiv.isHod}</li>
              <li>CLASSES: </li>
              <li>HIGHEST LEVEL: {indiv.qualification}</li>
            </ul>
          </div>
          <button
            onClick={(e) => {
              deleteStaff(indiv.id);
            }}
          >
            Delete User
          </button>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>

      <div className="students">
        {/* <h3>Mathematics Dept</h3> */}
        <table className="remove">
          <tr>
            <th>Name</th>
            <th className="remov">Sex</th>
            <th className="remov">Address</th>
            <th className="remov">Date Added</th>
            <th className="remov">Phone Number</th>
            <th className="remov">Email</th>
            <th>Department</th>
            <th>More</th>
          </tr>
          {staff.map((val, key) => {
            return (
              <tr key={key}>
                <td>
                  {val.firstName} {val.lastName}
                </td>
                <td className="remov">{val.sex}</td>
                <td className="remov">{val.address}</td>
                <td className="remov">{val.dateAdded}</td>
                <td className="remov">{val.phoneNumber}</td>
                <td className="remov">{val.email}</td>
                <td>{val.department}</td>
                <td onClick={() => openModal(val)}>View</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Staff;
