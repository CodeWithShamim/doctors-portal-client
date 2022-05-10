import React from "react";
import clock from "../../icons/clock.svg";
import marker from "../../icons/marker.svg";
import phone from "../../icons/phone.svg";

const Info = () => {
  return (
    <div>
      {/* _____________card_____________ */}
      <div className="card-container flex flex-col md:flex-row mx-12 text-white text-left w-100">
        {/* ___________card1______________ */}
        <div class="card flex lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary flex-1">
          <figure>
            <img src={clock} className="m-6" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri.</p>
          </div>
        </div>

        {/* ___________card2______________ */}
        <div class="card flex lg:card-side bg-base-100 shadow-xl mx-6 bg-accent flex-1">
          <figure>
            <img src={marker} className="m-6" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Visit our location</h2>
            <p>Brooklyn, NY 10036, United States.</p>
          </div>
        </div>

        {/* ___________card3______________ */}
        <div class="card flex lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary align-middle justify-center flex-1">
          <figure>
            <img src={phone} className="m-6" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Contact us now</h2>
            <p>+000 123 456789.</p>
          </div>
        </div>
      </div>
      {/* _______card end__________ */}
    </div>
  );
};

export default Info;
