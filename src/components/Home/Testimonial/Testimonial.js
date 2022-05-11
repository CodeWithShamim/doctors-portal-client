import React from "react";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Winson Herry",
      address: "California",
      img: people1,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
    {
      _id: 2,
      name: "Winson Herry",
      address: "California",
      img: people2,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
    {
      _id: 3,
      img: people3,
      name: "Winson Herry",
      address: "California",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
  ];
  return (
    <div className="px-6 md:px-12 font-serif">
      <div className="text-left pt-8">
        <h3 className="text-secondary font-semibold py-4">Testimonial</h3>
        <h1 className="text-4xl">What Our Patients Says</h1>
      </div>

      {/* _________card info start___________ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:m-12">
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
