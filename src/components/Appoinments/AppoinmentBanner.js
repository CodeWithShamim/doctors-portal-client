import React from "react";
import chair from "../../images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../images/bg.png";

const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col items-center lg:flex-row-reverse px-2 lg:px-40">
        <div className="basis-3/5">
          <img src={chair} className="rounded-lg shadow-2xl" alt="" />
        </div>

        {/* ____________day picker______________ */}
        <div className="basis-2/5 shadow-lg flex items-center flex-col justify-center">
          <DayPicker mode="single" selected={date} onDayClick={setDate} />
        </div>

        {/* ____________ */}
      </div>
    </div>
  );
};

export default AppoinmentBanner;
