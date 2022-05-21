import React from "react";

const DoctorRow = ({ index, doctor, setDoctor }) => {
  const { img, name, email, speciality } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={img} alt={name} />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td>
        <button
          onClick={() => setDoctor(doctor)}
          className="btn btn-xs btn-error text-white font-bold"
        >
          Remove doctor
        </button>
      </td>
    </tr>
  );
};
export default DoctorRow;
