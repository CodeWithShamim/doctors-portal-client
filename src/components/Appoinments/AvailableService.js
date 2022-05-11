import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const AvailableService = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="shadow-lg rounded-lg p-12">
      <h1 className="text-2xl text-secondary">{name}</h1>
      <p>
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span>No Slots Available</span>
        )}
      </p>
      <p className="py-4">
        {slots.length}
        {slots.length > 1 ? " SPACES AVAILABLE" : " SPACE AVAILABLE"}{" "}
      </p>
      {/* ___________add btn_____________ */}
      <PrimaryButton>Book Appointment</PrimaryButton>
    </div>
  );
};

export default AvailableService;
