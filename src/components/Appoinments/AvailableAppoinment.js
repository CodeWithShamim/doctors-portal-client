import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableService from "./AvailableService";

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

      {/* _________available service_________ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-24">
        {services.map((service) => (
          <AvailableService
            key={service._id}
            service={service}
          ></AvailableService>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppoinment;
