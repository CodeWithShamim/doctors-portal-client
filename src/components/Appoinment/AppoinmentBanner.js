import React, { useState } from "react";
import chair from "../../images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppoinmentBanner = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />

        {/* ____________day picker______________ */}
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>

        {/* ____________ */}
      </div>
    </div>
  );
};

export default AppoinmentBanner;
