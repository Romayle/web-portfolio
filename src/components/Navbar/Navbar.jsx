import React from "react";
// import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="flex justify-between flex-row items-center">

      <div className="block">
        <h1 className="font-bold text-2xl">Romayle<span className="text-blue-500">Dharmasena</span></h1>
      </div>

      <nav className="block items-center ">
        <ul className="flex flex-row justify-between gap-10">
          <li className="">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="">
            <Link to={"/about"}>About</Link>
          </li>
          <li className=""><Link to={"/projects"}>Projects</Link></li>
          <li className="">Blog</li>
        </ul>
      </nav>

      <div className="flex items-center">
        {/* <h1 className="inline">G</h1> */}
        <Icon scale={1.5} icon="mdi:github" />
        <h1 className="inline">Link</h1>
      </div>

    </div>
  );
};

export default Navbar;
