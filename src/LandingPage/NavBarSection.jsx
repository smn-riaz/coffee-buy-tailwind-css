
import React from "react";
import { Link } from "react-router-dom";

const NavBarSection = () => {
  return (
    <>
      <div className="navbar px-16 bg-[#241915]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white font-bold lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#3d2b24] text-white rounded-box w-52 uppercase"
            >
              <li className="mx-3">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-3">
                <Link to="/">About</Link>
              </li>
              <li className="mx-3">
                <Link to="/">Service</Link>
              </li>
              <li className="mx-3">
                <Link to="/">Faqs</Link>
              </li>
              <li className="mx-3">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 uppercase font-semibold text-white text-sm">
            <li className="mx-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-3">
              <Link to="/">About</Link>
            </li>
            <li className="mx-3">
              <Link to="/">Service</Link>
            </li>
            <li className="mx-3">
              <Link to="/">Faqs</Link>
            </li>
            <li className="mx-3">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img
            src="https://i.ibb.co/Qc5zfzp/logo.png"
            className="h-[70px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NavBarSection;
