import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center bg-base-200 rounded-lg">
        {/* <!-- Page content here --> */}
        <h1>This is Dashboard</h1>
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
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
