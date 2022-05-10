import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "./ServiceDetail";

const Service = () => {
  const services = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 1,
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 md:mx-12 mt-16">
      {services.map((service) => (
        <ServiceDetail key={service.id} service={service}></ServiceDetail>
      ))}
    </div>
  );
};

export default Service;
