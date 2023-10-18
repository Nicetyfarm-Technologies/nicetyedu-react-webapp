import React, { useState, useRef, useEffect } from "react";
import Eit from "./Eit";
import icon from "../../Assets/user2.png";
import icon2 from "../../Assets/bright.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faDatabase,
  faDashboard,
  faFlag,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const menu = <FontAwesomeIcon icon={faBars} />;
const home = <FontAwesomeIcon icon={faHome} />;
const report = <FontAwesomeIcon icon={faFlag} />;
const analytics = <FontAwesomeIcon icon={faDatabase} />;
const closebtn = <FontAwesomeIcon icon={faClose} />;

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const Attended = () => {
  const currentDate = useState(getDate());
  const [eits, setEits] = useState([
    {
      conductorName: "Bright",
      sessionName: "Technology",
      startTime: "09:00",
      endTime: "11:00",
      timeLeft: "00:08:43",
      eitIcon: { icon2 },
      id: 1,
    },
    {
      conductorName: "Bright",
      sessionName: "Technology",
      startTime: "09:00",
      endTime: "11:00",
      timeLeft: "00:08:43",
      eitIcon: { icon },
      id: 1,
    },
    {
      conductorName: "Bright",
      sessionName: "Technology",
      startTime: "09:00",
      endTime: "11:00",
      timeLeft: "00:08:43",
      eitIcon: { icon },
      id: 1,
    },
  ]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const localStorageKey = "userData";

  const [apiResponse, setApiResponse] = useState("");

  function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    const url =
      "https://lime-attractive-mite.cyclic.cloud/attendance/filter?event_id=0"; // Replace with your API endpoint
    fetchData(url).then((responseData) => {
      console.log(responseData[0]);
      setEits(responseData);
      console.log("the data is now set to", eits);
    });
  }, []);
  const confirmAttendance = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://lime-attractive-mite.cyclic.cloud/checkin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: { latitude: latitude, longitude: longitude },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setApiResponse(data.message);
        alert(apiResponse);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert(error);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      setUser(JSON.parse(savedData));
    }
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <div className="other-cont">
      <div className="container-header">
        <h1>Welcome, {user.userName}</h1>
        <h4>Attendance List - {currentDate}</h4>
      </div>

      <div className="data">
        <div className="cont">
          <h4>Today's Classes</h4>
          <table>
            <thead>
              <tr>
                <th>NA</th>
                <th>Name</th>
                <th>Check in Time</th>
              </tr>
            </thead>
            <tbody>
              {eits.map((eit) => (
                <Eit eit={eit} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attended;
