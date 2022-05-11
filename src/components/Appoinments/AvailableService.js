import React from "react";

const AvailableService = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="shadow-lg rounded-lg p-12 font-semibold">
      <h1 className="text-xl text-secondary">{name}</h1>
      <p className="pt-2">
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span>No Slots Available</span>
        )}
      </p>
      <p className="py-2 text-sm">
        {slots.length}
        {slots.length > 1 ? " SPACES AVAILABLE" : " SPACE AVAILABLE"}{" "}
      </p>
      {/* ___________add btn_____________ */}
      <button
        className="btn btn-primary text-white font-bold rounded-md bg-gradient-to-r from-secondary to-primary"
        disabled={slots.length === 0}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default AvailableService;
