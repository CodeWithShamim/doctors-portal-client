import React from "react";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      img: people1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quos aut minus vero deserunt pariatur.",
    },
    {
      _id: 2,
      img: people2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quos aut minus vero deserunt pariatur.",
    },
    {
      _id: 3,
      img: people3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quos aut minus vero deserunt pariatur.",
    },
  ];
  return (
    <div className="px-12 font-serif">
      <div className="text-left pt-8">
        <h3 className="text-secondary font-semibold">Testimonial</h3>
        <h1 className="text-4xl">What Our Patients Says</h1>
      </div>

      {/* _________card info start___________ */}
      <div className="grid grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
