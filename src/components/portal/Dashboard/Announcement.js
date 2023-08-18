import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const delet = <FontAwesomeIcon icon={faTrash} />;



const Announcement = ({ announcement, deleteAnnounce }) => {
  return (
    <li className="announce">
            <h3>{announcement.title}</h3>
            <p>
              {announcement.description}
            </p>
            <small><i>{announcement.announceDate}</i></small>
            <button type="button" onClick={() => deleteAnnounce(announcement.id)}>{delet}</button>
          </li>
  );
};

export default Announcement;