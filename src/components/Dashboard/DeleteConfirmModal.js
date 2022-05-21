import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ doctor, refetch }) => {
  const { name, email } = doctor;

  // _____delete doctor_____
  const deleteDoctor = () => {
    const url = `http://localhost:5000/deleteDoctor/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          toast.error("Unauthorized access");
        } else if (res.status === 403) {
          toast.error("Forbidden access");
        }
        return res.json();
      })
      .then((data) => {
        refetch();
        if (data.deletedCount) {
          toast.success(`Successfully delete ${name}`);
        }
      });
  };
  return (
    <div>
      <h1>This is DeleteConfirmModal</h1>
    </div>
  );
};

export default DeleteConfirmModal;
