import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const AvailableAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-24">
      <h1 className="text-3xl text-secondary">
        Available Appointments on {format(date, "PP")}
      </h1>
      <div>{services.length}</div>
    </div>
  );
};

export default AvailableAppoinment;
