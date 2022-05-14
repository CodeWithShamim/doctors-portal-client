import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const { name, slots } = treatment;
  const [{ displayName, email }] = useAuthState(auth);

  // console.log(user);

  // __________handleBooking__________
  const handleBooking = (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    console.log(date, slot, name, phone, email);

    setTreatment(null);
    const bookingForm = document.getElementById("booking-form");
    bookingForm.reset();
  };

  return (
    <div>
      {/* _________modal start________ */}

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {/* ______content Start________ */}
          <h3 className="font-bold text-2xl text-left pb-6 text-secondary">
            {name}
          </h3>

          {/* ______form_____ */}
          <form
            onSubmit={handleBooking}
            id="booking-form"
            className="input-group flex flex-col"
          >
            <input
              className="mt-6 border-0 rounded-lg p-2 outline-0 bg-base-200"
              type="text"
              name="date"
              id="date"
              readOnly
              disabled
              value={format(date, "PP")}
            />

            {/* ______select slots______ */}
            <select
              className="border-2 border-base-300 select w-full my-6 rounded-lg p-2 outline-0"
              name="slot"
              id="slot"
              required
            >
              <option>Select time</option>
              {slots.map((slot, tabIndex) => (
                <option key={tabIndex} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              className="border-2 rounded-lg p-2 outline-0 bg-base-200"
              type="text"
              name="name"
              id="name"
              value={displayName}
              disabled
              readOnly
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
              className="mb-6 border-2 rounded-lg p-2 outline-0 bg-base-200"
              type="email"
              name="email"
              id="email"
              value={email}
              disabled
              readOnly
              placeholder="Email"
            />

            {/* ______submit btn_______ */}
            <input
              type="submit"
              value="Submit"
              htmlFor="booking-modal"
              className="btn btn-secondary text-white font-bold w-full mx-auto"
            />
          </form>
          {/* ______content End */}
        </div>
      </div>
      {/* __________modal end__________ */}
    </div>
  );
};

export default BookingModal;
