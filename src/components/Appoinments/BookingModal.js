import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
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

          {/* ______content Start________ */}
          <h3 className="font-bold text-xl text-left pb-6">{name}</h3>
          <div className="input-group flex flex-col">
            <input
              className="mt-6 border-0 rounded-lg p-2 outline-0 bg-base-300"
              type="text"
              name="date"
              id="date"
              readOnly
              value={format(date, "PP")}
            />

            <input
              className="my-6 border-0 rounded-lg p-2 outline-0 bg-base-300"
              type="text"
              name="slots"
              id="slots"
              readOnly
              value={slots[0]}
            />

            <input
              className="border-2 rounded-lg p-2 outline-0"
              type="text"
              name="name"
              id="name"
              required
              autoComplete="off"
              placeholder="Full Name"
            />

            <input
              className="my-6 border-2 rounded-lg p-2 outline-0"
              type="number"
              name="phone"
              id="phone"
              required
              autoComplete="off"
              placeholder="Phone Number"
            />

            <input
              className="mb-2 border-2 rounded-lg p-2 outline-0"
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          {/* ______content End */}

          <div className="modal-action w-full">
            <label
              htmlFor="booking-modal"
              className="btn btn-black w-full mx-auto"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
      {/* __________modal end__________ */}
    </div>
  );
};

export default BookingModal;
