import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  return (
    <div className="navbar bg-base-100 px-0 md:px-10">
      <div className="navbar-start">
        {/* _______dashboard btn________ */}
        {(pathname === "/dashboard" ||
          pathname === "/dashboard/myAppoinments" ||
          pathname === "/dashboard/myItems") && (
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Dashboard
          </label>
        )}

        {/* _______dropdown for responsive_________ */}
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/appoinment">Appoinment</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact</NavLink>
            </li>
            {/* ________dashboard________ */}
            {user && (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
            {/* _______login_____ */}
            <li>
              {user ? (
                <span className="btn btn-ghost" onClick={() => signOut(auth)}>
                  Sign out
                </span>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>

        {/* _______logo____________ */}

        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-xl md:text-2xl"
        >
          Doctors portal
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/appoinment">Appoinment</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact</NavLink>
          </li>
          {/* ________dashboard________ */}
          {user && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
          {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
            Theme
          </button> */}
          {/* _______login_____ */}
          <li>
            {user ? (
              <span className="btn btn-ghost" onClick={() => signOut(auth)}>
                Sign out
              </span>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
