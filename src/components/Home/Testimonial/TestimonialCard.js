import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, address, img, text } = testimonial;
  return (
    <div className="shadow-2xl p-6 text-left rounded-xl">
      <div>
        <p>{text}</p>
      </div>
      <div className="flex items-center content-center pt-6">
        <img
          className="border-4 rounded-full border-secondary"
          src={img}
          alt="testimonial-img"
        />
        <div className="ml-6 flex flex-col">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
