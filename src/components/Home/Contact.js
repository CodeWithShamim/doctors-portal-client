import React from "react";
import appointment from "../../images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div
      className="font-serif text-white p-6 md:p-16"
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-secondary font-semibold">Contact Us</h3>
      <h1 className="text-3xl md:text-5xl pt-2 pb-8">Stay connected with us</h1>

      {/* ________form start__________  */}
      <div className="w-full md:w-1/2 mx-auto">
        <form className="flex flex-col">
          <input
            className="p-4 my-3 rounded-lg outline-0 text-black"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input
            className="p-4 my-3 rounded-lg outline-0 text-black"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            className="p-2 mt-3 mb-6 rounded-lg outline-0 text-black"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          {/* ___btn_____ */}
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
