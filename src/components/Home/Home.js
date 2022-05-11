import React from "react";
import Banner from "./Banner";
import Appointment from "./Appointment ";
import Info from "./Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
    </div>
  );
};

export default Home;
