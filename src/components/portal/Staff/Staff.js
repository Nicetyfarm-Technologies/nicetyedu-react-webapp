import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  onSnapshot,
  query,
  collection,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import auth from "../../firebase/config";
import { db } from "../../firebase/config";
import MinNav from '../minNav/MinVav';

const Staff = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [qualification, setQualification] = useState("certificate");
  const [sex, setSex] = useState("male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [enrolmentDate, setEnrollmentDate] = useState("");
  const [nrc, setNrc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("grade8a");
  const password = "test1234";

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnrollmentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addStaff = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "staff", "20230001" + department + enrolmentDate),
      {
        id: "20230001" + department + enrolmentDate,
        firstName: firstName,
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
      }
    );
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
  // }
  // };

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
    console.log(staff)
    return () => unSubscribe();
  });
  // };
  const sayHello = () => {
    alert("Hello");
  }

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
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
              <option  value="bachelor">Bachelor's Degree</option>
              <option  value="master">Master's Degree</option>
              <option  value="phd">PHD</option>
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
        <div className="students">
          {/* <h3>Mathematics Dept</h3> */}
          <table>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Date Added</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Department</th>
              <th>More</th>
            </tr>
            {staff.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.firstName} {val.lastName}</td>
                  <td>{val.sex}</td>
                  <td>{val.address}</td>
                  <td>{val.dateAdded}</td>
                  <td>{val.phoneNumber}</td>
                  <td>{val.email}</td>
                  <td>{val.department}</td>
                  <td onClick={sayHello}>View</td>
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