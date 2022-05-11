import React from "react";
import doctor from "../../images/doctor.png";
import appointment from "../../images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Appointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="my-6 bg-black text-white flex items-center content-center"
    >
      {/* ________left side______ */}
      <div className="flex-1 hidden md:block">
        <img className="lg:mt-[-100px]" src={doctor} alt="doctor" />
      </div>

      {/* _______right side______ */}
      <div className="text-left flex-1 md:mr-6 lg:mr-24">
        <h4 className="text-secondary text-md font-serif font-semibold">
          Appointment
        </h4>
        <h2 className="md:text-2xl lg:text-4xl pt-3 font-serif">
          Make an appointment Today
        </h2>

        <p className=" md:py-4 lg:py-8 font-serif">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        {/* ------add btn------- */}
        <PrimaryButton>Get started</PrimaryButton>
      </div>
    </section>
  );
};

export default Appointment;
