import React from "react";
import Service from "./Service";
import treatment from "../../../images/treatment.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const Services = () => {
  return (
    <div className="services-container mt-16">
      <h4 className="text-primary uppercase font-bold">Our Services</h4>
      <h1 className="text-4xl font-serif py-3">Services We Provide</h1>
      {/* __________services item______ */}
      <Service />
      {/* __________service item end__________ */}

      {/* ______treatment banner section start____ */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-40 my-28 content-center items-center">
        <div className="left-side">
          <img
            className="basis-1/5 rounded-2xl w-100 h-full"
            src={treatment}
            alt="treatment-img"
          />
        </div>
        <div className="right-side basis-4/5 pl-0 px-0 md:px-12 lg:px-20 text-left">
          <h1 className="text-5xl font-bold mt-8 lg:mt-0">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-8 font-serif">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          {/* ------add btn------- */}
          <PrimaryButton>Get started</PrimaryButton>
        </div>
        {/* ______treatment banner section end */}
      </div>
    </div>
  );
};

export default Services;
