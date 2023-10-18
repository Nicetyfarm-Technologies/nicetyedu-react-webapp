import React from "react";

const Session = ({
  session,
  icon2,
  attendClass,
  latitude,
  longitude,
}) => {
  function calculateTimeLeft(unixTimestamp) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const timeDifference = unixTimestamp - currentTimestamp;

    if (timeDifference <= 0) {
      return { hoursLeft: 0, minutesLeft: 0 };
    }

    const minutesLeft = Math.floor(timeDifference / 60) % 60;
    const hoursLeft = Math.floor(timeDifference / 3600);

    return { hoursLeft, minutesLeft };
  }

  function getTimeFromUnixTimestamp(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000; 
    const dateObject = new Date(milliseconds); 

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    return formattedTime;
  }
  function checkTimeStatus(startTime, endTime) {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    if (currentTimestamp >= startTime && currentTimestamp < endTime) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <li key={session.id}>
      <div className="session-details">
        <p>
          {getTimeFromUnixTimestamp(session.startDateTime)} -{" "}
          {getTimeFromUnixTimestamp(session.endDateTime)}
        </p>
        <h4>{session.eventName}</h4>
        <p>
          <span className="red">
            {calculateTimeLeft(session.startDateTime).hoursLeft}hrs{" "}
            {calculateTimeLeft(session.startDateTime).minutesLeft}min
          </span>{" "}
          Left
        </p>
      </div>
      <div className="conductor-details">
        <img src={icon2} alt="icon2" />
        <p>
          {session.user_name} {session.user_surname}
        </p>
        {
          checkTimeStatus(session.startDateTime, session.endDateTime) == 1?
          <button
          type="button"
          className="regular-btn"
          onClick={() => {
            attendClass({
              latitude: latitude,
              longitude: longitude,
              event_id: session.event_id,
            });
          }}
        >
          Attend Class
        </button> :
                <button
                type="button"
                className="regular-btn-dis"
                onClick={() => {
                  alert("class hasn't started")
                }}
              >
                attend
              </button>
        }

      </div>
    </li>
  );
};

export default Session;