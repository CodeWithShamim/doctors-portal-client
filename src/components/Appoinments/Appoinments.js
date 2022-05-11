import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinments = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
    </div>
  );
};

export default Appoinments;
