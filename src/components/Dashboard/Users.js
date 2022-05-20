import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading } = useQuery(["users"], () => {
    return fetch("http://localhost:5000/user").then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl py-3 text-orange-400 font-bold">All users</h1>
      <table className="table w-full">
        {/* -- head -- */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Convert user to admin</th>
            <th>Remove user</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow key={user._id} user={user}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
