import React from "react";
import clock from "../../icons/clock.svg";
import marker from "../../icons/marker.svg";
import phone from "../../icons/phone.svg";

const Info = () => {
  return (
    <div>
      {/* _____________card_____________ */}
      <div className="card-container flex flex-col lg:flex-row mx-4 lg:mx-12 text-white text-left w-100">
        {/* ___________card1______________ */}
        <div className="card flex lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary flex-1 md:content-center md:items-center">
          <figure>
            <img src={clock} className="mt-2 md:mt-6 lg:m-8" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri.</p>
          </div>
        </div>

        {/* ___________card2______________ */}
        <div className="card flex lg:card-side shadow-xl mx-0 my-4 lg:my-0 lg:mx-6 bg-accent flex-1 md:content-center md:items-center">
          <figure>
            <img src={marker} className="mt-2 md:mt-6 lg:m-8" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Visit our location</h2>
            <p>Brooklyn, NY 10036, United States.</p>
          </div>
        </div>

        {/* ___________card3______________ */}
        <div className="card flex lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary md:content-center md:items-center flex-1">
          <figure>
            <img src={phone} className="mt-2 md:mt-6 lg:m-8" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Contact us now</h2>
            <p>+000 123 456789.</p>
          </div>
        </div>
      </div>
      {/* _______card end__________ */}
    </div>
  );
};

export default Info;
