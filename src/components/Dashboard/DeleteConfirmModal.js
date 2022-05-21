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
      <a href="#my-modal-2" class="btn">
        open modal
      </a>

      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <a href="#" class="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
