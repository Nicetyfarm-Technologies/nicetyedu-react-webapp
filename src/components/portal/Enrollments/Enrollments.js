import React, { useState } from 'react';
// import './Dashboard.css'
import MinNav from '../minNav/MinVav';

const Enrollments = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [studentId, setStudentId] = useState();
  const [sex, setSex] = useState();
  const [address, setAddress] = useState();
  const [dob, setDob] = useState();
  const [enrolmentDate, setEnrollmentDate] = useState();
  const [guardianName, setGuardianName] = useState();
  const [guardianNumber, setGuardianNumber] = useState();
  const [guardianEmail, setGuardianEmail] = useState();
    
  const pupils = [
       [ "Grade 8A",
        [{
          studentId: "20220001",
          firstName: "Justine",
          lastName: "Imasiku",
          sex: "Male",
          dob: "13-04-1997",
          enrolmentDate: "23-04-2022",
          address: "Mukokomba",
          guardianName: "Imasiku Mayumbo",
          guardianNumber: "0779293183",
          guardianEmail: "nicetyfarm@gmail.com",
        },
        {
          studentId: "20220002",
          firstName: "Stephen",
          lastName: "Imasiku",
          sex: "Male",
          dob: "13-04-1997",
          enrolmentDate: "23-04-2022",
          address: "Mukokomba",
          guardianName: "Imasiku Mayumbo",
          guardianNumber: "0779293183",
          guardianEmail: "nicetyfarm@gmail.com",
        },
        {
          studentId: "20220003",
          firstName: "Reuben",
          lastName: "Imasiku",
          sex: "Male",
          dob: "13-04-1997",
          enrolmentDate: "23-04-2022",
          address: "Mukokomba",
          guardianName: "Imasiku Mayumbo",
          guardianNumber: "0779293183",
          guardianEmail: "info.nicetyfarm@gmail.com",
        },
        {
          studentId: "20220004",
          firstName: "Idah",
          lastName: "Imasiku",
          sex: "Male",
          dob: "13-04-1997",
          enrolmentDate: "23-04-2022",
          address: "Mukokomba",
          guardianName: "Imasiku Mayumbo",
          guardianNumber: "0779293183",
          guardianEmail: "nicetyfarm@gmail.com",
        }]
      ],
       ["Grade 8B",
      []],
       ["Grade 8C", []],
       ["Grade 8D", []],
    ]

    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Enrollments</h2>
        <form className='annonce-form2'>
          <h3>Add Pupil</h3>
          <div className='inputs'>
            <select>
              <option>Grade 8A</option>
              <option>Grade 8B</option>
              <option>Grade 8C</option>
              <option>Grade 8D</option>
              <option>Grade 9A</option>
              <option>Grade 9B</option>
              <option>Grade 9C</option>
              <option>Grade 9D</option>
              <option>Grade 10A</option>
              <option>Grade 10B</option>
              <option>Grade 10C</option>
              <option>Grade 10D</option>
              <option>Grade 11A</option>
              <option>Grade 11B</option>
              <option>Grade 11C</option>
              <option>Grade 11D</option>
            </select>
            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required />
            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' required />
            <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} placeholder='D.O.B' required />
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Trans</option>
            </select>
            <input type='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Resdential Address' required />
            <input type='text' value={guardianName} onChange={(e) => setGuardianName(e.target.value)} placeholder="Guardian's FullName" required />
            <input type='text' value={guardianNumber} onChange={(e) => setGuardianNumber(e.target.value)} placeholder="Guardian's Phone Number" required />
            <input type='email' value={guardianEmail} onChange={(e) => setGuardianEmail(e.target.value)} placeholder="Guardian's Email Address" />
            <button type='submit'>Enroll</button>
          </div>
        </form>
        {
          pupils.map((val1, key) => {
            return (
              <div className='students'>
              <h3>{val1[0]}</h3>
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
          {
            val1[1].map((val, key) =>{
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
              )
            })
          }
        </table></div>
            )
          })
        }
        </div>
      </div>
    )
}

export default Enrollments;