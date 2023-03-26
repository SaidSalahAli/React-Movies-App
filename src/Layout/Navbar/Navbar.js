import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { NavbarLinks } from "./NavbarLinks";

const NavBar = ({ lengthfavourites }) => {
  // hover active nav link

  const hover = "hover:text-subMain transitions text-white";

  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <div className="bg-main shadow-md sticky pl-6 pr-6 top-0 z-20">
      <div className="container mx-auto py-6 px-2  gap-10  justify-between items-center">
        <div className="col-span-6 flex justify-between ">
          <Link to="/">
            <img
              src="/imgs/logo.png"
              alt="logo"
              className="h-6 mt-2 object-contain"
            />
          </Link>
      
        {/* search from */}
        <div className="  flex justify-end">
          <Link
            to="/research"
            type="submit"
            className=" hover:text-subMain transitions w-12 flex-colo ml-2 mr-10 h-12 rounded text-white">
            <FaSearch />
          </Link>
        {/* menus */}

        <div className="font-medium text-sm hidden gap-14  xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavbarLinks lengthfavourites={lengthfavourites} Hover={Hover} />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;