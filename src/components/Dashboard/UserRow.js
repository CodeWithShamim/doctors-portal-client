import React from "react";

const UserRow = ({ user }) => {
  const { email } = user;

  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        <button className="btn btn-xs">Make admin</button>
      </td>
      <td>
        <button className="btn btn-xs">Remove user</button>
      </td>
    </tr>
  );
};
export default UserRow;
