import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { img, text } = testimonial;
  return (
    <div>
      <img src={img} alt="testimonial-img" />
      <p>{text}</p>
    </div>
  );
};

export default TestimonialCard;
