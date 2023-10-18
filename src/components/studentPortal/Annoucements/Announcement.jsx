import React from "react";

const Announcement = ({ announcement }) => {
  return (
    <li className="announce">
            <h3>{announcement.title}</h3>
            <p>
              {announcement.description}
            </p>
            <small><i>{announcement.date} | {announcement.time}</i></small>
            {/* <button type="button" onClick={() => deleteAnnounce(announcement.id)}>{delet}</button> */}
          </li>
  );
};

export default Announcement;