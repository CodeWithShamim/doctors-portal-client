import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content bg-accent rounded pt-10">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-purple-400 font-bold">
          Welcome to Dashboard
        </h1>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="myAppoinments">My appoinments</NavLink>
          </li>
          <li>
            <NavLink to="myItems">My items</NavLink>
          </li>
          <li>
            <NavLink to="myHistory">My history</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
