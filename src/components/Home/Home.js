import React from "react";
import Banner from "./Banner";
import Appointment from "./Appointment ";
import Info from "./Info";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
