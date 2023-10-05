import React, { useState, useRef, useEffect } from "react";
import "./Attendance.css";
import icon from "../../Assets/user2.png";
import icon2 from "../../Assets/bright.png";
import Session from "./Session";
import { Link, useNavigate } from "react-router-dom";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date} - ${month} - ${year}`;
}

const Attendance = () => {

  const [sessions, setSessions] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const localStorageKey = "userData";
  const navigate = useNavigate()

  // const [apiResponse, setApiResponse] = useState("");

  const apiUrl = "https://lime-attractive-mite.cyclic.cloud/checkin";
  const apiUrl2 = "https://lime-attractive-mite.cyclic.cloud/attendance";

  const confirmAttendance = async () => {
    const data = {
      latitude: latitude,
      longitude: longitude,
    }; console.log(data);
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", "authorization": user.token
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        // const message = JSON.parse(data)
        alert(data.message);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };

  const promptSendReport = () => {
    navigate("/reports/health")
  }

  const attendClass = async (data) => {
    fetch(apiUrl2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", "authorization": user.token
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };

  const getEvents = async () => {
    // e.preventDefault();
    fetch("https://lime-attractive-mite.cyclic.cloud/class")
      .then((response) => response.json())
      .then((data) => {
        // Process the data
        setSessions(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      setUser(JSON.parse(savedData));
    }

    getEvents();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // Extract latitude and longitude from the position object
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      }, function (error) {
        // Handle any errors that occur during geolocation
        console.error("Error getting geolocation:", error);
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div className="other-cont">
      <div className="container-header">
        <h1>Welcome, {user.userName}</h1>
        {/* <h4>{currentDate}</h4> */}
      </div>

      <div className="data">
        <div className="cont">
          <div className="confirm">
            <button
              className="regular-btn"
              type="button"
              onClick={confirmAttendance}
            >
              Check In
            </button>
            <Link to="/dashboard/attendance">View Attendance List</Link>
            <button type="button" className="regular-btn2" onClick={promptSendReport}>
              Not in School
            </button>
          </div>
          <h4>Today's Classes</h4>
          <ul className="time-tables">
            {sessions.map((session, index) => {
              return (
                <Session
                  key={index}
                  session={session}
                  icon2={icon2}
                  user={user}
                  attendClass={attendClass}
                  latitude={latitude}
                  longitude={longitude}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
