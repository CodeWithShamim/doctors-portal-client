import React from "react";
import doctor from "../../images/doctor.png";

const Appointment = () => {
  return (
    <section className="my-12 bg-black text-white flex items-center content-center relative">
      <div>
        <img className="absolute top-0" src={doctor} alt="doctor" />
      </div>
      <div>
        <p>
          <h4 className="text-primary">Appointment</h4>
          <h2 className="text-4xl">Make an appointment Today</h2>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white font-bold rounded-md bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Appointment;
