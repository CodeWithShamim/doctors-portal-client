import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="services-container mt-16">
      <h4 className="text-primary uppercase font-bold">Our Services</h4>
      <h1 className="text-4xl font-serif">Services We Provide</h1>
      {/* __________services item______ */}
      <Service />
    </div>
  );
};

export default Services;
