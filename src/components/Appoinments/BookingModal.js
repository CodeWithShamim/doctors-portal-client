import React from "react";

const BookingModal = ({ treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      {/* _________modal start________ */}

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">{slots[0]}</p>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              ok
            </label>
          </div>
        </div>
      </div>
      {/* __________modal end__________ */}
    </div>
  );
};

export default BookingModal;
