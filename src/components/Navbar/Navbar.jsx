import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center gap-1 px-4 py-4">

      <div className="flex">
        <h1 className="font-bold text-xl md:text-2xl">
        <Link to={"/"}>Romayle<span className="text-blue-500">Dharmasena</span></Link></h1>
      </div>

        <nav className="hidden items-center md:flex">
          <ul className="flex flex-row justify-between gap-10">
            <li className="">
              <Link to={"/web-portfolio/"}>Home</Link>
            </li>
            <li className="">
              <Link to={"/web-portfolio/about"}>About</Link>
            </li>
            <li className="">
              <Link to={"/web-portfolio/projects"}>Projects</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center hidden md:flex">
        <Link to={"https://github.com/Romayle"}><Icon icon="mdi:github" width="42" height="42" /></Link>
        <Link to={"https://www.linkedin.com/in/romayle-dharmasena-0ab19326a/"}><Icon icon="mdi:linkedin" width="42" height="42" /></Link>
        </div>


        <div className="md:hidden">
            <Icon icon="material-symbols:menu" width="48" height="48" onClick={toggleMenu} />
            {menuOpen && (
                <div className="z-50 fixed top-0 right-0 bg-white px-10 h-screen items-center pt-10">
                    <nav className="items-center flex-col gap-5 flex">
                    <Icon className='items-center' icon="material-symbols:close" width="32" height="32" onClick={toggleMenu} />
                        <ul className="flex flex-col justify-between gap-10 items-center">
                            <li>
                                <Link to={"/"} onClick={toggleMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} onClick={toggleMenu}>About</Link>
                            </li>
                            <li>
                                <Link to={"/projects"} onClick={toggleMenu}>Projects</Link>
                            </li>
                            <li>
                                <Link to={"/blogs"} onClick={toggleMenu}>Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>

    </div>
  );
};

export default Navbar;
