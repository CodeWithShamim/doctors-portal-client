import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  // ___make admin______
  const makeAdmin = (adminEmail) => {
    const url = `http://localhost:5000/user/admin/${adminEmail}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`Successfully created admin for ${adminEmail}`);
        }
      });
  };

  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role === "Admin" ? (
          <span className="text-blue rounded-xl btn-success px-2">
            Already admin
          </span>
        ) : (
          <button
            onClick={() => makeAdmin(email)}
            className="text-white font-bold rounded-xl btn-warning px-3 py-2"
          >
            Make admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error text-white font-bold">
          Remove user
        </button>
      </td>
    </tr>
  );
};
export default UserRow;
