import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinments = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mx-4 md:mx-12">
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
    </div>
  );
};

export default Appoinments;
