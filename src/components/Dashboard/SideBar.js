import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const SideBar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content bg-accent rounded pt-10">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-teal-300 font-bold">
          Welcome to Dashboard
        </h1>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="myAppoinments">My Appoinments</NavLink>
          </li>
          <li>
            <NavLink to="myItems">My Items</NavLink>
          </li>
          <li>
            <NavLink to="myHistory">My History</NavLink>
          </li>

          {/* _____admin route____ */}
          <li>
            {admin && <NavLink to="users">All Users</NavLink>}
            {admin && <NavLink to="addDoctor">Add Doctor</NavLink>}

            {admin && <NavLink to="manageDoctors">Manage Doctors</NavLink>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
