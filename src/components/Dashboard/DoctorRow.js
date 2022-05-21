import React from "react";

const DoctorRow = ({ index, doctor, setDoctor }) => {
  const { img, name, email, speciality } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td>
        <label
          onClick={() => setDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn modal-button btn-xs btn-error text-white font-bold"
        >
          Remove doctor
        </label>
      </td>
    </tr>
  );
};
export default DoctorRow;
