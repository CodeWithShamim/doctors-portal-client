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

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="myAppoinment">Sidebar Item 1</NavLink>
          </li>
          <li>
            <NavLink to="myItems">Sidebar Item 2</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
