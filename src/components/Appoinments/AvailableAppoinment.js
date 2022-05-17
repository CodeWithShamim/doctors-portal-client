import React, { useState } from "react";
import { format } from "date-fns";
import AvailableService from "./AvailableService";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppoinment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, "PP");

  // ___use query___
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

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
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinment;
