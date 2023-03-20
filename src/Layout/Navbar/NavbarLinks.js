import React from "react";
import { CgUser } from "react-icons/cg";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const NavbarLinks = ({ Hover,lengthfavourites }) => {
  return (
    <>
   
      <NavLink to="/movies" className={Hover}>
        Movies
      </NavLink>
      <NavLink to="/about-us" className={Hover}>
        About Us
      </NavLink>
      <NavLink to="/contact-us" className={Hover}>
        Contact Us
      </NavLink>{" "}
      <NavLink to="/login" className={Hover}>
        <CgUser className="w-8 h-8" />
      </NavLink>
      <NavLink to="/favorites" className={`${Hover} relative`}>
        <FaHeart className="w-6 h-6" />
        <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
          {lengthfavourites}
        </div>
      </NavLink>
    </>
  );
};
