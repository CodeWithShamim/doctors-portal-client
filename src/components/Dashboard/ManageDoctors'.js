import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const Users = () => {
  const [doctor, setDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    error,
    refetch,
  } = useQuery("doctors", () => {
    return fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  console.log(doctors);

  return (
    <div className="p-6">
      <h1 className="text-3xl py-3 text-orange-400 font-bold">All Doctors</h1>
      <table className="table w-full">
        {/* -- head -- */}
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Speciality</th>
            <th>Remove Doctor</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.map((doctor, index) => (
            <DoctorRow
              key={doctor._id}
              index={index}
              doctor={doctor}
              setDoctor={setDoctor}
            ></DoctorRow>
          ))}
        </tbody>
      </table>

      {/* ________set delete confirm modal_______ */}
      {doctor && (
        <DeleteConfirmModal
          key={doctor._id}
          doctor={doctor}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default Users;
