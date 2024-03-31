import React from "react";
// import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center gap-1 px-4 py-4">

      <div className="flex">
        <h1 className="font-bold text-base md:text-2xl">Romayle<span className="text-blue-500">Dharmasena</span></h1>
      </div>

        <nav className="hidden items-center md:flex">
          <ul className="flex flex-row justify-between gap-10">
            <li className="">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="">
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center hidden md:flex">
          <Icon icon="mdi:github" width="42" height="42" />
          <Icon icon="mdi:linkedin" width="42" height="42" />
        </div>


      <div className="md:hidden">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
      </div>

    </div>
  );
};

export default Navbar;
