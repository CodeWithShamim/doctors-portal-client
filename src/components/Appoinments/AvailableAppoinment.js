import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableService from "./AvailableService";
import BookingModal from "./BookingModal";

const AvailableAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className=" md:py-24">
      <h1 className="text-3xl text-secondary">
        Available Appointments on {format(date, "PP")}
      </h1>

      {/* _________available service_________ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-24">
        {services.map((service) => (
          <AvailableService
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></AvailableService>
        ))}
      </div>

      {/* ________get modal_______ */}
      {treatment && (
        <BookingModal treatment={treatment} date={date}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinment;
