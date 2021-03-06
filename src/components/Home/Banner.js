import React from "react";
import chair from "../../images/chair.png";
import bg from "../../images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="banner-container"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover ",
      }}
    >
      {/* __________hero start_________ */}
      <div className="hero py-8 md:py-12 lg:min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-lg w-full rounded-lg shadow-2xl mr-0 lg:mr-8"
            alt=""
          />
          <div className="text-left pr-0 md:px-8 lg:px-6">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            {/* ------add btn------- */}
            <PrimaryButton>Get started</PrimaryButton>
          </div>
        </div>
      </div>
      {/* __________hero end___________ */}
    </div>
  );
};

export default Banner;
