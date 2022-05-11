import React from "react";
import { Link } from "react-router-dom";
import footer from "../../images/footer.png";
import doctor from "../../images/doctor-small.png";

const Footer = () => {
  const getDate = new Date();
  const getYear = getDate.getFullYear();

  return (
    <div
      style={{
        background: `url(${footer})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <footer class="footer p-8 bg-transparent text-base-content py-28">
        {/* ____________logo____________ */}

        <div>
          <img className="w-1/2 h-full ml-6" src={doctor} alt="logo" />
          <p>
            <span className="text-md font-medium">ORAL HEALTH</span>
            <br />
            Providing reliable health since 2020
          </p>
        </div>

        {/* __________service item____________ */}
        <div>
          <span class="footer-title">SERVICES</span>
          <Link to="" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        {/* ____________company name_____________ */}
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <Link to="" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        {/* _________address____________ */}
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <Link to="" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </footer>

      {/* ______copyright_____ */}
      <p className="pb-12">Copyright {getYear} All Rights Reserved</p>
    </div>
  );
};

export default Footer;
