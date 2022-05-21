import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ doctor, setDoctor, refetch }) => {
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
        setDoctor(null);
        if (data.deletedCount) {
          toast.success(`Successfully delete ${name}`);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-error">{name}</h3>
          <p className="py-4">
            warning! if you delete this item but you can't back for next time.
          </p>
          <div className="modal-action">
            <label htmlFor="delete-confirm-modal" className="btn">
              Cancel
            </label>
            <button
              onClick={deleteDoctor}
              className="btn text-white font-bold btn-error"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
