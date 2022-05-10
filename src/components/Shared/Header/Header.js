import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* _________logo_________ */}
        <Link to="" className="btn btn-ghost normal-case text-xl">
          Doctors portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Appoinment</Link>
          </li>
          <li>
            <Link to="">Reviews</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
