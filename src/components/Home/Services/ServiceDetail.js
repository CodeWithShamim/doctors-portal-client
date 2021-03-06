import React from "react";

const ServiceDetail = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div className="items-center shadow-2xl p-8 rounded-xl">
      <img className="mx-auto w-100 p-6" src={img} alt="service-img" />
      <h2 className="text-2xl font-serif">{title}</h2>
      <p className="font-serif py-4">{description}</p>
    </div>
  );
};

export default ServiceDetail;
