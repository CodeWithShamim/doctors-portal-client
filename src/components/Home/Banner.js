import React from "react";
import chair from "../../images/chair.png";

const Banner = () => {
  return (
    <div className="banner-container bg-hero-bg">
      {/* __________hero start_________ */}
      <div className="hero min-h-screen ml-0 lg:ml-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-lg w-full rounded-lg shadow-2xl mr-0 lg:mr-12"
            alt=""
          />
          <div className="text-left pr-16">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            <button className="btn btn-primary text-white font-bold rounded-md bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* __________hero end___________ */}
    </div>
  );
};

export default Banner;
