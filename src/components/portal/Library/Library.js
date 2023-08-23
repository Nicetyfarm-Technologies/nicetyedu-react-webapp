import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-modal";
// import './Dashboard.css'
import MinNav from '../minNav/MinVav';
import m1 from "./mathbooks/m1.pdf";
import m2 from "./mathbooks/m2.pdf";

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

const Library = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [val, setVal] = useState({});
  const [indiv, setIndiv] = useState({});

  function openModal(val) {
    setIndiv(val);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Library</h2>
        <ul className='el-container'>
        {/* <li className='el'><Link to="/studentsdashboard/announcements">Announcements</Link></li> */}
          <li className='el'><button type="button" onClick={() => openModal(val)}>Add Books</button></li>
          <li className='el'><button type="button">Add Videos</button></li>
          <li className='el'><button type="button">Add Past Papers</button></li>
          <li className='el'><button type="button">Add Quizzes</button></li>
          <li className='el'><button type="button">Add Assignments</button></li>
          <li className='el'><button type="button">Add Practicals</button></li>
          {/* <li className='el'><Link to="/studentsdashboard/timetables">Time Table</Link></li> */}
        </ul>

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
                {/* <img src={userImg} alt="user-icon" /> */}
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
          </div>
          <button onClick={closeModal}>close</button>
        </Modal>

        <ul className="quiz-sub-container">
            <li className="quiz-sub"><a href={m1}>INTRODUCTION TO DIFFERENTIATION</a></li>
            <li className="quiz-sub"><a href={m2}>ADDITIONAL MATHEMATICS PURE & APPLIED</a></li>
        </ul>
        </div>
      </div>
    )
}

export default Library;