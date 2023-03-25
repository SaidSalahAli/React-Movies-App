
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ModileFooter = ({lengthfavourites}) => {
  const [showLinks, setShowLinks] = useState(false);
  
  const active = "bg-white text-main ";
  const inActive =
    "transitions text-2xl  flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;


    const activee = "bg-white text-main ";
  const inActivee =
    "transitions text-md flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3";
  const Hoverr = ({ isActive }) =>
    isActive ? `${activee} ${inActivee}` : inActivee;
  return (
    <>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1 ">
        <div className="bg-dry z-50	  rounded-md flex-btn w-full p-1">
          <NavLink to="/movies" className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/favorites" className={Hover}>
            <div className="relative">
              <FiHeart className="w-6  h-6" />
              <div className="w-5 h-5 mt-1 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
          {lengthfavourites}
              </div>
            </div>
          </NavLink>
          <NavLink to="/login" className={Hover}>
            <CgUser />
          </NavLink>

          <button
            onClick={() => setShowLinks((prev) => !prev)}
            className={inActive}>
            <AiOutlineMenu />
          </button>
        </div>
      </footer>
      <div className="flex justify-center items-center mt-28 z-50  md:fixed ">
        {showLinks && (
          <div className=" text-md fixed z-40 gap-5 pt-28  bottom-0 right-0 h-screen  w-60 bg-main border border-border">
            <div className="mt-5">
            <NavLink to="/movies" className={Hoverr}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hoverr}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hoverr}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hoverr}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink
              to="/faHeart"
              className={`${Hover} relative flex justify-center `}>
              <FaHeart className="w-6 h-6 mt-6" />
              <div className="w-5 h-5 mt-6   flex justify-center rounded-full text-xs bg-subMain text-white absolute -top-5 right-24   ">
            {lengthfavourites}
              </div>
            </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModileFooter;