import React from "react";
import chair from "../../images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ml-0 lg:ml-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-lg w-full rounded-lg shadow-2xl mr-0 lg:mr-12"
          alt=""
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <button
            className="btn text-white font-bold border-0 rounded-md"
            style={{ backgroundColor: "#19D3AE" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
