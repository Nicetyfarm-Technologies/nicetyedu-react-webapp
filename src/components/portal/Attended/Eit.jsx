import React from "react";

const Eit = ({eit, icon}) => {
  function formatDateTime(unixTimestamp) {
    const date = new Date(unixTimestamp);
    const formattedDateTime = date.toLocaleString();
    return formattedDateTime;
  }
    return (
      <tr key={eit.user_id}>
        <td><p>*</p></td>
        <td>{eit.user_name}</td>
        <td>{formatDateTime(eit.dayTime)}</td>
      </tr>
    )
}

export default Eit;