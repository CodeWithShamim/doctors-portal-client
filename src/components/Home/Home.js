import React from "react";
import Banner from "./Banner";
import Appointment from "./Appointment ";
import Info from "./Info";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <Testimonial />
    </div>
  );
};

export default Home;
