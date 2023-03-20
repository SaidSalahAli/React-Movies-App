import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { NavbarLinks } from "./NavbarLinks";
import Research from "../../Screens/Research";

const NavBar = ({ getAllMovieSarsh,lengthfavourites}) => {
  // hover active nav link

  const hover = "hover:text-subMain transitions text-white";

  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

const handle = (event) =>{
 getAllMovieSarsh(event)
}
  return (
    <div className="bg-main shadow-md sticky  top-0 z-20">
      <div className="container mx-auto py-6 px-2 lg:grid gap=10 grid-cols-7 justify-between items-center">
        <div className="col-span-1 flex justify-between ">
          <Link to="/">
            <img
              src="/imgs/logo.png"
              alt="logo"
              className="h-6 object-contain"
            />
          </Link>
        </div>
        {/* search from */}
        <div className="col-span-3  flex justify-end">
          <Link to='/research'
            type="submit"
            className=" hover:text-subMain transitions w-12 flex-colo ml-2 mr-10 h-12 rounded text-white">
            <FaSearch />
          </Link>
        </div>
        {/* menus */}

        <div className=" col-span-3  font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavbarLinks lengthfavourites={lengthfavourites} Hover={Hover} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
